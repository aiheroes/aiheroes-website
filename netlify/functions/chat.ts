// Streaming chat endpoint (SDD D3/D5/D9). One request path:
// guards -> in-process retrieval -> model on the EU substrate -> SSE stream back.

import type { Config, Context } from '@netlify/functions';
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  stepCountIs,
  streamText,
  toUIMessageStream,
  tool,
  validateUIMessages,
  type UIMessage,
} from 'ai';
import { z } from 'zod';
import { config as appConfig } from '../../server/config';
import { checkRateLimits } from '../../server/counters';
import { recordSpend } from '../../server/counters';
import { checkOrigin, hashIp, validateUserText, verifyToken } from '../../server/guards';
import { persistTurn } from '../../server/persist';
import { buildSystemPrompt, formatSources } from '../../server/prompt';
import { getModel, usageToCents } from '../../server/provider';
import { retrieve } from '../../server/search';

export const config: Config = {
  path: '/api/chat',
  // EU compute is load-bearing (SDD D3). Region selection requires Netlify Pro;
  // if the deploy rejects this, the plan check in SDD §13 has its answer.
  region: 'fra',
};

const bodySchema = z.object({
  messages: z.array(z.unknown()).min(1).max(80),
  sessionId: z.string().uuid(),
  conversationId: z.string().uuid(),
  locale: z.enum(['nl', 'en']),
  path: z.string().max(200).default('/'),
});

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

export default async function handler(request: Request, _context: Context): Promise<Response> {
  if (request.method !== 'POST') return json(405, { error: 'method_not_allowed' });
  if (!checkOrigin(request)) return json(403, { error: 'forbidden' });

  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch {
    return json(400, { error: 'bad_request' });
  }

  if (!verifyToken(request.headers.get('x-chat-token'), body.sessionId)) {
    return json(401, { error: 'token' });
  }

  if (body.messages.length > appConfig.maxMessagesPerConversation * 2) {
    return json(429, { error: 'conversation_limit' });
  }

  const limits = await checkRateLimits(body.sessionId, hashIp(request));
  if (!limits.ok) {
    return json(limits.reason === 'budget' ? 503 : 429, { error: limits.reason });
  }

  // Validate + trim the UI message history to the context window (D9 layer 3).
  let uiMessages: UIMessage[];
  try {
    uiMessages = await validateUIMessages({ messages: body.messages });
  } catch {
    return json(400, { error: 'bad_messages' });
  }
  const windowed = uiMessages.slice(-appConfig.maxTurnsInWindow * 2);

  const lastUser = [...windowed].reverse().find((m) => m.role === 'user');
  const lastUserText =
    lastUser?.parts
      ?.filter((p): p is { type: 'text'; text: string } => p.type === 'text')
      .map((p) => p.text)
      .join('\n') ?? '';
  const inputError = validateUserText(lastUserText);
  if (inputError) return json(400, { error: inputError });

  // Deterministic pre-retrieval on every turn (D5 fast path).
  const sources = await retrieve(lastUserText, body.locale, 6);
  const route = await getModel();

  const tools = {
    search_knowledge: tool({
      description:
        'Search the AI Heroes site knowledge base. Use when the provided SOURCES do not answer the question.',
      inputSchema: z.object({
        query: z.string().max(200).describe('Search query in Dutch or English'),
      }),
      execute: async ({ query }) => {
        const results = await retrieve(query, body.locale, 4);
        return results.map((r) => ({ title: r.title, url: r.url, excerpt: r.text.slice(0, 500) }));
      },
    }),
    show_page: tool({
      description:
        'Show a link card for one page of aiheroes.io as the natural next step, after answering in text.',
      inputSchema: z.object({
        url: z.string().describe('Absolute aiheroes.io URL from the sources'),
        title: z.string().max(80),
        reason: z.string().max(140).describe("One short sentence in the visitor's language"),
      }),
      // No execute: rendered as a card by the widget.
    }),
    book_meeting: tool({
      description:
        'Offer to book a conversation with the AI Heroes team. Use when the visitor wants to talk, needs pricing beyond published ranges, or asks for advice.',
      inputSchema: z.object({
        topic: z.string().max(120).describe("Short topic in the visitor's language"),
      }),
    }),
    register_salon: tool({
      description: 'Show the AI Salon registration card when the visitor is interested in attending.',
      inputSchema: z.object({}),
    }),
    escalate_to_human: tool({
      description:
        'Hand the conversation to the AI Heroes team. Use IMMEDIATELY when the visitor asks for a human in any phrasing, after two failed attempts on the same question, or on clear frustration.',
      inputSchema: z.object({
        reason: z.enum(['visitor_request', 'no_answer', 'frustration']),
        summary: z.string().max(300).describe('One-paragraph summary of the conversation so far'),
      }),
    }),
  };

  const result = streamText({
    model: route.model,
    system: `${buildSystemPrompt(body.locale, body.path)}\n\n${formatSources(sources)}`,
    messages: await convertToModelMessages(windowed, { tools }),
    tools,
    stopWhen: stepCountIs(4),
    maxOutputTokens: appConfig.maxOutputTokens,
    providerOptions: route.providerOptions as never,
    abortSignal: request.signal, // D9: nobody pays for tokens no one receives
    onFinish: ({ usage, text }) => {
      void recordSpend(usageToCents(route, usage));
      persistTurn({
        conversationId: body.conversationId,
        locale: body.locale,
        pagePath: body.path,
        userText: lastUserText,
        assistantText: text,
        sources: sources.map((s) => ({ url: s.url, title: s.title })),
      });
    },
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({
      stream: result.stream,
      tools,
      originalMessages: windowed,
      // The widget renders source chips from this deterministic set (D5):
      messageMetadata: () => ({ sources: sources.map((s) => ({ url: s.url, title: s.title })) }),
    }),
  });
}

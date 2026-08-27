// Streaming chat endpoint (SDD D3/D5/D9). One request path:
// guards -> in-process retrieval -> model on the EU substrate -> SSE stream back.

import type { Config, Context } from '@netlify/functions';
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  smoothStream,
  stepCountIs,
  streamText,
  toUIMessageStream,
  tool,
  validateUIMessages,
  type UIMessage,
} from 'ai';
import { z } from 'zod';
import { config as appConfig } from '../../server/config.js';
import { checkRateLimits } from '../../server/counters.js';
import { recordSpend } from '../../server/counters.js';
import { checkOrigin, hashIp, validateUserText, verifyToken } from '../../server/guards.js';
import { persistTurn } from '../../server/persist.js';
import { buildSystemPrompt, formatSources } from '../../server/prompt.js';
import { getModel, usageToCents } from '../../server/provider.js';
import { retrieve } from '../../server/search.js';

export const config: Config = {
  path: '/api/chat',
  // TODO(SDD D3/V4): restore region: 'fra' after upgrading Netlify to Pro (the
  // current plan rejects function-region config and FAILS the production build).
  // Until then the function runs in Netlify's default US region; model inference
  // and embeddings remain on Vertex EU. Alternative: Hono service on Vercel fra1.
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
        'Show a link card for one page of aiheroes.io as the natural next step. Only AFTER answering in text — never call this instead of answering.',
      inputSchema: z.object({
        url: z.string().describe('Absolute aiheroes.io URL from the sources'),
        title: z.string().max(80),
        reason: z.string().max(140).describe("One short sentence in the visitor's language"),
      }),
      // Deterministic text-first backstop: the widget renders the card from the
      // tool input; this result steers the model into writing the answer too.
      execute: async () => ({ shown: true, note: 'Card rendered and visible. If you already wrote your answer this turn, output nothing further and end your turn. Only if you have not answered in text yet, write the answer now.' }),
    }),
    book_meeting: tool({
      description:
        'Offer to book a conversation with the AI Heroes team. Use when the visitor wants to talk, needs pricing beyond published ranges, or asks for advice.',
      inputSchema: z.object({
        topic: z.string().max(120).describe("Short topic in the visitor's language"),
      }),
      execute: async () => ({ shown: true, note: 'Card rendered and visible. If you already wrote your answer this turn, output nothing further and end your turn. Only if you have not answered in text yet, write the answer now.' }),
    }),
    register_salon: tool({
      description: 'Show the AI Salon registration card when the visitor is interested in attending.',
      // Gemini rejects empty object schemas for function declarations — one dummy
      // optional field keeps the declaration valid on every provider.
      inputSchema: z.object({
        note: z.string().max(80).optional().describe('Optional one-line context'),
      }),
      execute: async () => ({ shown: true, note: 'Card rendered and visible. If you already wrote your answer this turn, output nothing further and end your turn. Only if you have not answered in text yet, write the answer now.' }),
    }),
    escalate_to_human: tool({
      description:
        "Forward the conversation to the AI Heroes team (they reply by email; there is no live chat). Call this AFTER the visitor has given their email address in the conversation — it renders a one-tap confirmation with that email. Use for any human request, after two failed attempts, or on clear frustration.",
      inputSchema: z.object({
        reason: z.enum(['visitor_request', 'no_answer', 'frustration']),
        summary: z.string().max(300).describe('One-paragraph summary of the conversation so far'),
        email: z.string().max(200).optional().describe("The visitor's email address, exactly as they gave it"),
        name: z.string().max(120).optional().describe("The visitor's name, if they mentioned it"),
      }),
      // Execute keeps the tool call answered in history — a dangling call makes
      // every follow-up request invalid on Gemini (functionCall without response).
      execute: async () => ({
        shown: true,
        note: 'Confirmation card rendered; the visitor confirms in the UI. If you have not yet told them to confirm below, say so in one short sentence; otherwise end your turn.',
      }),
    }),
  };

  const result = streamText({
    model: route.model,
    system: `${buildSystemPrompt(body.locale, body.path)}\n\n${formatSources(sources)}`,
    messages: await convertToModelMessages(windowed, { tools }),
    tools,
    stopWhen: stepCountIs(4),
    // Buttery streaming cadence (UX audit P1): word-level chunks at a steady pace
    // instead of raw network bursts.
    experimental_transform: smoothStream({ delayInMs: 15, chunking: 'word' }),
    maxOutputTokens: route.maxOutputTokens,
    providerOptions: route.providerOptions as never,
    // Fail fast instead of stalling: a throttled/stalled model must become a visible
    // error with a retry button, never an endless typing indicator. Budgets sit well
    // under Netlify's 60s streamed-function ceiling.
    maxRetries: 1,
    timeout: { firstChunkMs: 20_000, totalMs: 50_000 },
    abortSignal: request.signal, // D9: nobody pays for tokens no one receives
    // Server-side error visibility (function logs only; the client gets a masked
    // error part). Without this, model failures are silent — unacceptable ops-wise.
    onError: ({ error }) => {
      console.error('chat model error:', error instanceof Error ? error.message : String(error));
    },
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

// promptfoo custom provider (SDD D11): drives the REAL chat function handler
// in-process, so evals exercise guards + retrieval + prompt + model, not a mock.
// Requires a model credential in the environment (dev: ANTHROPIC_API_KEY).

import { register } from 'tsx/esm/api';

register();

const { default: handler } = await import('../netlify/functions/chat.ts');
const { issueToken } = await import('../server/guards.ts');

function uuid() {
  return crypto.randomUUID();
}

/**
 * promptfoo calls this with the rendered prompt. Vars:
 *  - locale: 'nl' | 'en' (default 'nl')
 *  - history: optional prior turns [{role, text}]
 */
export async function callApi(prompt, context) {
  const locale = context?.vars?.locale === 'en' ? 'en' : 'nl';
  const sessionId = uuid();
  const conversationId = uuid();
  const { token } = issueToken(sessionId);

  const history = Array.isArray(context?.vars?.history) ? context.vars.history : [];
  const messages = [
    ...history.map((m, i) => ({
      id: `h${i}`,
      role: m.role,
      parts: [{ type: 'text', text: m.text }],
    })),
    { id: 'q', role: 'user', parts: [{ type: 'text', text: prompt }] },
  ];

  const request = new Request('https://aiheroes.io/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Origin: 'https://aiheroes.io',
      'x-chat-token': token,
    },
    body: JSON.stringify({ messages, sessionId, conversationId, locale, path: '/' }),
  });

  const response = await handler(request, {});
  if (!response.ok) {
    return { error: `HTTP ${response.status}: ${await response.text()}` };
  }

  // Parse the UI message SSE stream: collect text deltas + tool calls.
  const raw = await response.text();
  let text = '';
  const toolCalls = [];
  for (const line of raw.split('\n')) {
    if (!line.startsWith('data: ')) continue;
    const payload = line.slice(6).trim();
    if (payload === '[DONE]') continue;
    try {
      const chunk = JSON.parse(payload);
      if (chunk.type === 'text-delta' && typeof chunk.delta === 'string') text += chunk.delta;
      if (typeof chunk.type === 'string' && chunk.type.startsWith('tool-input-available')) {
        toolCalls.push(chunk.toolName ?? '');
      }
      if (chunk.type === 'tool-input-start' && chunk.toolName) toolCalls.push(chunk.toolName);
    } catch {
      /* non-JSON keepalive */
    }
  }

  return { output: toolCalls.length ? `${text}\n[tools: ${[...new Set(toolCalls)].join(', ')}]` : text };
}

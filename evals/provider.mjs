// promptfoo custom provider (SDD D11): drives the REAL chat function handler
// in-process, so evals exercise guards + retrieval + prompt + model, not a mock.
// Requires model credentials in the environment (production path: CHAT_MODEL_PROVIDER=
// vertex + GOOGLE_VERTEX_* + GOOGLE_APPLICATION_CREDENTIALS).

import { register } from 'tsx/esm/api';

register();

let modules = null;
async function load() {
  if (!modules) {
    const [{ default: handler }, { issueToken }] = await Promise.all([
      import('../netlify/functions/chat.ts'),
      import('../server/guards.ts'),
    ]);
    modules = { handler, issueToken };
  }
  return modules;
}

export default class ChatPipelineProvider {
  constructor(options) {
    this.providerId = options?.id ?? 'chat-pipeline';
  }

  id() {
    return this.providerId;
  }

  /**
   * vars: locale ('nl'|'en', default 'nl'), history (optional [{role, text}]).
   * Output: answer text, plus a "[tools: ...]" suffix when tools were called.
   */
  async callApi(prompt, context) {
    const { handler, issueToken } = await load();
    const locale = context?.vars?.locale === 'en' ? 'en' : 'nl';
    const sessionId = crypto.randomUUID();
    const conversationId = crypto.randomUUID();
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
        if (chunk.type === 'tool-input-start' && chunk.toolName) toolCalls.push(chunk.toolName);
        if (chunk.type === 'error') return { error: chunk.errorText ?? 'stream error' };
      } catch {
        /* non-JSON keepalive */
      }
    }

    return {
      output: toolCalls.length
        ? `${text}\n[tools: ${[...new Set(toolCalls)].join(', ')}]`
        : text,
    };
  }
}

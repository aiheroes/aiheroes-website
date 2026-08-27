// Pseudonymous transcript persistence (SDD D6): fire-and-forget writes to Supabase EU.
// No Supabase configured -> silent no-op; the visitor experience never depends on this.

import { config } from './config.js';

async function insert(table: string, row: Record<string, unknown>): Promise<void> {
  if (!config.supabaseUrl || !config.supabaseServiceKey) return;
  try {
    await fetch(`${config.supabaseUrl}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.supabaseServiceKey,
        Authorization: `Bearer ${config.supabaseServiceKey}`,
        Prefer: 'resolution=merge-duplicates',
      },
      body: JSON.stringify(row),
    });
  } catch {
    // Persistence must never break or slow the stream.
  }
}

export function persistTurn(opts: {
  conversationId: string;
  locale: string;
  pagePath: string;
  userText: string;
  assistantText: string;
  sources: { url: string; title: string }[];
}): Promise<void> {
  // Never awaited on the hot path; on serverless runtimes the caller hands this
  // promise to waitUntil() so the write survives the response ending.
  return Promise.all([
    insert('conversations', {
      id: opts.conversationId,
      locale: opts.locale,
      first_path: opts.pagePath,
      last_at: new Date().toISOString(),
    }),
    insert('messages', {
      conversation_id: opts.conversationId,
      role: 'user',
      content: { text: opts.userText },
    }),
    insert('messages', {
      conversation_id: opts.conversationId,
      role: 'assistant',
      content: { text: opts.assistantText },
      sources: opts.sources,
    }),
  ]).then(() => undefined);
}

export function persistEscalation(opts: {
  conversationId: string;
  name: string;
  email: string;
  reason: string;
}): Promise<void> {
  return insert('escalations', {
    conversation_id: opts.conversationId,
    name: opts.name,
    email: opts.email,
    reason: opts.reason,
    consent_at: new Date().toISOString(),
    status: 'open',
  });
}

export function persistFeedback(opts: {
  conversationId: string;
  messageId: string;
  rating: 'up' | 'down';
}): Promise<void> {
  return insert('feedback', {
    conversation_id: opts.conversationId,
    message_id: opts.messageId,
    rating: opts.rating,
  });
}

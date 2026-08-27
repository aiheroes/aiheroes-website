// Per-answer thumbs feedback (SDD D11).

import { z } from 'zod';
import { increment } from '../server/counters';
import { checkOrigin, hashIp, verifyToken } from '../server/guards';
import { persistFeedback } from '../server/persist';

const bodySchema = z.object({
  sessionId: z.string().uuid(),
  conversationId: z.string().uuid(),
  messageId: z.string().max(64),
  rating: z.enum(['up', 'down']),
});

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') return new Response(null, { status: 405 });
  if (!checkOrigin(request)) return new Response(null, { status: 403 });

  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch {
    return new Response(JSON.stringify({ error: 'bad_request' }), { status: 400 });
  }
  if (!verifyToken(request.headers.get('x-chat-token'), body.sessionId)) {
    return new Response(JSON.stringify({ error: 'token' }), { status: 401 });
  }
  const perMinute = await increment(`feedback:${hashIp(request)}:minute`, 60);
  if (perMinute > 20) return new Response(JSON.stringify({ error: 'rate' }), { status: 429 });

  await persistFeedback(body);
  return new Response(JSON.stringify({ ok: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

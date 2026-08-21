// Warmup + widget-token endpoint (SDD D3 prewarm, D9 layer 2).
// Fired when the visitor opens the widget: warms the function instance and issues
// the short-lived HMAC token /api/chat requires. Performs no model call, so
// hammering it is harmless.

import type { Config } from '@netlify/functions';
import { z } from 'zod';
import { checkOrigin, issueToken, newSessionId } from '../../server/guards';

export const config: Config = {
  path: '/api/warmup',
  region: 'fra',
};

const bodySchema = z.object({ sessionId: z.string().uuid().optional() });

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') return new Response(null, { status: 405 });
  if (!checkOrigin(request)) return new Response(null, { status: 403 });

  let sessionId = newSessionId();
  try {
    const body = bodySchema.parse(await request.json());
    if (body.sessionId) sessionId = body.sessionId;
  } catch {
    // No/invalid body: issue a fresh session.
  }

  const { token, expiresAt } = issueToken(sessionId);
  return new Response(JSON.stringify({ sessionId, token, expiresAt }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

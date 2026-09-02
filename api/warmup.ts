// Warmup + widget-token endpoint (SDD D3 prewarm, D9 layer 2).
// Fired when the visitor opens the widget: warms the function instance and issues
// the short-lived HMAC token /api/chat requires. Performs no model call, so
// hammering it is harmless.

import { z } from 'zod';
import { checkOrigin, issueToken, newSessionId } from '../server/guards.js';

const bodySchema = z.object({ sessionId: z.string().uuid().optional() });

// Vercel treats a module as a Web-API function only when it exports HTTP-method
// handlers (GET/POST/...); a default export is invoked with the Node (req, res)
// signature and a returned Response is silently dropped (504).
export async function POST(request: Request): Promise<Response> {
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

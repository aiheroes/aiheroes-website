// Escalation intake (SDD D7): stores the request (the only PII moment, consent-gated
// in the widget) and notifies the team on Slack with the transcript summary.

import type { Config } from '@netlify/functions';
import { z } from 'zod';
import { config as appConfig, isOfficeHours } from '../../server/config';
import { increment, notifySlack } from '../../server/counters';
import { checkOrigin, hashIp, verifyToken } from '../../server/guards';
import { persistEscalation } from '../../server/persist';

export const config: Config = {
  path: '/api/escalate',
};

const bodySchema = z.object({
  sessionId: z.string().uuid(),
  conversationId: z.string().uuid(),
  name: z.string().max(120).default(''),
  email: z.string().email().max(200),
  reason: z.string().max(40).default('visitor_request'),
  summary: z.string().max(2000).default(''),
  transcript: z
    .array(z.object({ role: z.enum(['user', 'assistant']), text: z.string().max(4000) }))
    .max(60)
    .default([]),
  consent: z.literal(true),
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
  const perMinute = await increment(`escalate:${hashIp(request)}:minute`, 60);
  if (perMinute > 3) return new Response(JSON.stringify({ error: 'rate' }), { status: 429 });

  await persistEscalation({
    conversationId: body.conversationId,
    name: body.name,
    email: body.email,
    reason: body.reason,
  });

  const transcript = body.transcript
    .map((m) => `${m.role === 'user' ? 'Bezoeker' : 'Assistent'}: ${m.text}`)
    .join('\n');
  await notifySlack(
    [
      `:speech_balloon: *Chat-escalatie* (${body.reason})`,
      `Van: ${body.name || 'Onbekend'} <${body.email}>`,
      body.summary ? `Samenvatting: ${body.summary}` : null,
      transcript ? `\`\`\`${transcript.slice(0, 2800)}\`\`\`` : null,
    ]
      .filter(Boolean)
      .join('\n'),
  );

  return new Response(
    JSON.stringify({ ok: true, officeHours: isOfficeHours(), bookingUrl: appConfig.bookingUrl || null }),
    { headers: { 'Content-Type': 'application/json' } },
  );
}

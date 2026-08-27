// Escalation intake (SDD D7): stores the request (the only PII moment, consent-gated
// in the widget) and notifies the team on Slack AND by email (decided 26-08), so an
// escalation can never be missed. Vercel function, region fra1.

import { z } from 'zod';
import { config as appConfig, isOfficeHours } from '../server/config';
import { increment, notifySlack } from '../server/counters';
import { checkOrigin, hashIp, verifyToken } from '../server/guards';
import { sendMail } from '../server/mail';
import { persistEscalation } from '../server/persist';

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

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export default async function handler(request: Request): Promise<Response> {
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
  const perMinute = await increment(`escalate:${hashIp(request)}:minute`, 60);
  if (perMinute > 3) return json(429, { error: 'rate' });

  const transcript = body.transcript
    .map((m) => `${m.role === 'user' ? 'Bezoeker' : 'Assistent'}: ${m.text}`)
    .join('\n');
  const who = `${body.name || 'Onbekend'} <${body.email}>`;

  const [, , mail] = await Promise.all([
    persistEscalation({
      conversationId: body.conversationId,
      name: body.name,
      email: body.email,
      reason: body.reason,
    }),
    notifySlack(
      [
        `:speech_balloon: *Chat-escalatie* (${body.reason})`,
        `Van: ${who}`,
        body.summary ? `Samenvatting: ${body.summary}` : null,
        transcript ? `\`\`\`${transcript.slice(0, 2800)}\`\`\`` : null,
      ]
        .filter(Boolean)
        .join('\n'),
    ),
    sendMail({
      subject: `Chat-escalatie van ${body.name || body.email}`,
      replyTo: body.email,
      text: [
        `Reden: ${body.reason}`,
        `Van: ${who}`,
        `Gesprek: ${body.conversationId}`,
        body.summary ? `\nSamenvatting:\n${body.summary}` : '',
        transcript ? `\nTranscript:\n${transcript}` : '',
        '\nReageer op deze mail om de bezoeker direct te antwoorden (reply-to staat goed).',
      ].join('\n'),
    }),
  ]);

  // Slack is fire-and-forget; the email copy is the delivery we can verify. If neither
  // channel is configured we still accept the request (persisted) but say so.
  return json(200, {
    ok: true,
    delivered: mail.sent || Boolean(appConfig.slackWebhookUrl),
    officeHours: isOfficeHours(),
    bookingUrl: appConfig.bookingUrl || null,
  });
}

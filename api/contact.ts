// Contact form → Resend (replaces Netlify Forms, cutover plan F1). Vercel function.
// The widget's client-side bot heuristics stay; this adds server-side checks and a
// per-IP rate limit. Honest failure: if mail isn't configured or fails, the visitor
// sees the error state instead of a fake success.

import { z } from 'zod';
import { increment } from '../server/counters.js';
import { checkOrigin, hashIp } from '../server/guards.js';
import { sendMail } from '../server/mail.js';

const bodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  organization: z.string().trim().max(200).default(''),
  topics: z.string().trim().max(300).default(''),
  message: z.string().trim().min(1).max(5000),
  botField: z.string().max(200).default(''),
});

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

// Vercel treats a module as a Web-API function only when it exports HTTP-method
// handlers (GET/POST/...); a default export is invoked with the Node (req, res)
// signature and a returned Response is silently dropped (504).
export async function POST(request: Request): Promise<Response> {
  if (request.method !== 'POST') return json(405, { error: 'method_not_allowed' });
  if (!checkOrigin(request)) return json(403, { error: 'forbidden' });

  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch {
    return json(400, { error: 'bad_request' });
  }

  // Honeypot filled -> silently "succeed" (never reveal detection to bots).
  if (body.botField) return json(200, { ok: true });

  const perMinute = await increment(`contact:${hashIp(request)}:minute`, 60);
  if (perMinute > 5) return json(429, { error: 'rate' });

  const result = await sendMail({
    subject: `Contactformulier: ${body.name}${body.organization ? ` (${body.organization})` : ''}`,
    replyTo: body.email,
    text: [
      `Naam: ${body.name}`,
      `E-mail: ${body.email}`,
      body.organization ? `Organisatie: ${body.organization}` : null,
      body.topics ? `Onderwerpen: ${body.topics}` : null,
      '',
      body.message,
      '',
      'Reageer op deze mail om direct te antwoorden (reply-to staat goed).',
    ]
      .filter((line) => line !== null)
      .join('\n'),
  });

  if (!result.sent) {
    console.error('contact mail failed:', result.error);
    return json(503, { error: 'mail_failed' });
  }
  return json(200, { ok: true });
}

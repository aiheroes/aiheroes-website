// Template download → Resend. Vercel function, modelled on api/contact.ts.
// The visitor gets the download links by mail; info@ gets a notification. A template that is
// switched off in server/downloads.ts answers 404, so the form can never promise a file that
// does not exist. Honest failure: if mail is not configured, the visitor sees an error.

import { waitUntil } from '@vercel/functions';
import { z } from 'zod';
import { increment } from '../server/counters.js';
import { checkOrigin, hashIp } from '../server/guards.js';
import { recordIntake } from '../server/intake.js';
import { sendMail } from '../server/mail.js';
import { letterMail, teamMail } from '../server/mail-layout.js';
import { DOWNLOADS, type DownloadId } from '../server/downloads.js';

const bodySchema = z.object({
  template: z.string().trim().max(60),
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  organization: z.string().trim().max(200).default(''),
  botField: z.string().max(200).default(''),
});

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

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

  const template = DOWNLOADS[body.template as DownloadId];
  if (!template || !template.enabled) return json(404, { error: 'not_available' });

  const perMinute = await increment(`download:${hashIp(request)}:minute`, 60);
  if (perMinute > 5) return json(429, { error: 'rate' });

  const toVisitor = await sendMail({
    to: body.email,
    subject: `${template.title} van AI Heroes`,
    ...letterMail({
      greeting: `Hoi ${body.name},`,
      paragraphs: [`Hier is het ${template.title[0].toLowerCase()}${template.title.slice(1)} dat je bij ons opvroeg.`],
      links: template.files,
      closing: ['Vragen over je eigen AI-beleid of de AI Act? Antwoord op deze mail, dan reageren we binnen 24 uur.'],
      signature: ['AI Heroes'],
    }),
  });
  if (!toVisitor.sent) {
    console.error('download mail failed:', toVisitor.error);
    return json(503, { error: 'mail_failed' });
  }

  // The team hears about it; a failure here does not fail the visitor's download.
  await sendMail({
    subject: `Download: ${template.title} · ${body.name}${body.organization ? ` (${body.organization})` : ''}`,
    replyTo: body.email,
    ...teamMail({
      kind: 'Download',
      accent: 'dark',
      title: body.name,
      subtitle: body.organization || undefined,
      facts: [
        { label: 'E-mail', value: body.email, href: `mailto:${body.email}` },
        { label: 'Sjabloon', value: template.title },
      ],
      reply: { email: body.email, subject: template.title },
      notes: ['De bezoeker kreeg de downloadlinks al per mail.'],
    }),
  });

  // Also to the hub's CRM as a contact (a soft conversion, no lead), after the response.
  waitUntil(
    recordIntake(request, {
      kind: 'download',
      name: body.name,
      email: body.email,
      company: body.organization,
      message: `Download: ${template.title}`,
      payload: { template: body.template },
    }),
  );
  return json(200, { ok: true });
}

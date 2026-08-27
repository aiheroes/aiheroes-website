// Job application form → Resend with the CV attached (replaces Netlify Forms with file
// upload, cutover plan F1). Vercel function. Multipart in, one email out — no file
// storage, so no retention question: the CV lives in the team's inbox only.

import { z } from 'zod';
import { increment } from '../server/counters.js';
import { checkOrigin, hashIp } from '../server/guards.js';
import { sendMail } from '../server/mail.js';

const MAX_CV_BYTES = 8 * 1024 * 1024;
const ALLOWED_CV_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

const fieldsSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(60).default(''),
  position: z.string().trim().max(200).default(''),
  motivation: z.string().trim().min(1).max(8000),
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

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(400, { error: 'bad_request' });
  }
  const text = (key: string) => {
    const v = form.get(key);
    return typeof v === 'string' ? v : '';
  };

  let fields: z.infer<typeof fieldsSchema>;
  try {
    fields = fieldsSchema.parse({
      name: text('name'),
      email: text('email'),
      phone: text('phone'),
      position: text('position'),
      motivation: text('motivation'),
      botField: text('bot-field'),
    });
  } catch {
    return json(400, { error: 'bad_request' });
  }
  if (fields.botField) return json(200, { ok: true });

  const perMinute = await increment(`apply:${hashIp(request)}:minute`, 60);
  if (perMinute > 3) return json(429, { error: 'rate' });

  const cv = form.get('cv');
  const attachments = [];
  if (cv instanceof File && cv.size > 0) {
    if (cv.size > MAX_CV_BYTES) return json(413, { error: 'cv_too_large' });
    if (cv.type && !ALLOWED_CV_TYPES.has(cv.type)) return json(415, { error: 'cv_type' });
    attachments.push({
      filename: cv.name || 'cv',
      content: Buffer.from(await cv.arrayBuffer()),
      contentType: cv.type || undefined,
    });
  }

  const result = await sendMail({
    subject: `Sollicitatie: ${fields.name}${fields.position ? ` — ${fields.position}` : ''}`,
    replyTo: fields.email,
    attachments,
    text: [
      `Naam: ${fields.name}`,
      `E-mail: ${fields.email}`,
      fields.phone ? `Telefoon: ${fields.phone}` : null,
      fields.position ? `Functie: ${fields.position}` : null,
      attachments.length ? `CV: ${attachments[0].filename} (bijgevoegd)` : 'CV: geen bijlage',
      '',
      fields.motivation,
    ]
      .filter((line) => line !== null)
      .join('\n'),
  });

  if (!result.sent) {
    console.error('application mail failed:', result.error);
    return json(503, { error: 'mail_failed' });
  }
  return json(200, { ok: true });
}

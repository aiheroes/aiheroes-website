// Intake outbox (marketing-automation SDD §3.2, point 4). A form that reached the team is also
// written to intake_outbox (db/intake.sql), after which the AI Heroes Hub gets a signed ping.
// The hub turns it into a contact and a lead in its own database. Both steps are best effort and
// run after the visitor's response (waitUntil): a hiccup here never breaks a form, and the hub
// picks up anything it missed on its own every few minutes.

import { createHash, createHmac, randomUUID } from 'node:crypto';
import { CONSENT_VERSION } from '../src/components/tracking/version.js';
import { consentedVid, insertRows } from './tracking.js';

export interface IntakeRow {
  kind: 'contact' | 'download';
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message?: string;
  payload?: Record<string, unknown>;
}

export async function recordIntake(request: Request, row: IntakeRow): Promise<void> {
  const vid = consentedVid(request);
  let page: string | null = null;
  try {
    page = new URL(request.headers.get('referer') ?? '').pathname;
  } catch {
    // no referer
  }
  await insertRows('intake_outbox', [
    {
      kind: row.kind,
      name: row.name,
      email: row.email,
      company: row.company || null,
      phone: row.phone || null,
      message: row.message || null,
      locale: page?.startsWith('/en') ? 'en' : 'nl',
      page,
      vid,
      consent_version: vid ? CONSENT_VERSION : null,
      payload: row.payload ?? null,
    },
  ]);
  await pingHub();
}

async function pingHub(): Promise<void> {
  const url = process.env.HUB_INTAKE_URL;
  const secret = process.env.INTAKE_HMAC_SECRET;
  if (!url || !secret) return;
  const body = JSON.stringify({ kind: 'outbox', at: new Date().toISOString() });
  try {
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-intake-signature': createHmac('sha256', secret).update(body).digest('hex') },
      body,
      signal: AbortSignal.timeout(8000),
    });
  } catch {
    // The hub's cron picks it up.
  }
}

// Job applications go straight to the hub (sollicitanten), CV included, so they stay out of the
// shared mailbox. Multipart: `meta` as JSON plus the CV; the HMAC covers meta, which carries the
// CV's sha256. Returns false when the hub is not configured or did not store it; the caller then
// mails the application to the team as before. Same secret and host as the intake ping.
export interface ApplicationForHub {
  name: string;
  email: string;
  phone: string;
  positionId: string | null;
  positionTitle: string | null;
  contact: string | null;
  motivation: string;
  locale: 'nl' | 'en';
  page: string | null;
}

export async function sendApplicationToHub(
  application: ApplicationForHub,
  cv: { filename: string; contentType: string; content: Buffer } | null,
): Promise<boolean> {
  const base = process.env.HUB_INTAKE_URL;
  const secret = process.env.INTAKE_HMAC_SECRET;
  if (!base || !secret) return false;
  const meta = JSON.stringify({
    ...application,
    ref: randomUUID(),
    receivedAt: new Date().toISOString(),
    cv: cv
      ? { name: cv.filename, type: cv.contentType, size: cv.content.length, sha256: createHash('sha256').update(cv.content).digest('hex') }
      : null,
  });
  const form = new FormData();
  form.set('meta', meta);
  if (cv) form.set('cv', new Blob([new Uint8Array(cv.content)], { type: cv.contentType }), cv.filename);
  try {
    const res = await fetch(new URL('application', base), {
      method: 'POST',
      headers: { 'x-intake-signature': createHmac('sha256', secret).update(meta).digest('hex') },
      body: form,
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) console.error('application to hub failed:', res.status);
    return res.ok;
  } catch (err) {
    console.error('application to hub failed:', err);
    return false;
  }
}

// Intake outbox (marketing-automation SDD §3.2, point 4). A form that reached the team is also
// written to intake_outbox (db/intake.sql), after which the AI Heroes Hub gets a signed ping.
// The hub turns it into a contact and a lead in its own database. Both steps are best effort and
// run after the visitor's response (waitUntil): a hiccup here never breaks a form, and the hub
// picks up anything it missed on its own every few minutes.

import { createHmac } from 'node:crypto';
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

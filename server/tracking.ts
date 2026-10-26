// Website tracking helpers (marketing-automation SDD §8), shared by api/e.ts and the tools.
// Layer 0: the visitor key is sha256(daily salt | ip | user agent), cut to 16 hex chars. The
// salt lives one UTC day in the database (tracking_salt(), db/tracking.sql) and is then deleted,
// so the key cannot be traced back afterwards. The IP itself is never stored.
// Layer 1: only with consent (cookie aih_consent=yes) do rows carry `vid` from cookie aih_vid.

import { createHash } from 'node:crypto';
import { config } from './config.js';

let salt: { day: string; value: string } | null = null;

async function dailySalt(): Promise<string | null> {
  const day = new Date().toISOString().slice(0, 10);
  if (salt?.day === day) return salt.value;
  if (!config.supabaseUrl || !config.supabaseServiceKey) return null;
  try {
    const res = await fetch(`${config.supabaseUrl}/rest/v1/rpc/tracking_salt`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.supabaseServiceKey,
        Authorization: `Bearer ${config.supabaseServiceKey}`,
      },
      body: '{}',
    });
    if (!res.ok) return null;
    const value = (await res.json()) as string;
    salt = { day, value };
    return value;
  } catch {
    return null;
  }
}

export async function visitorKey(request: Request): Promise<string | null> {
  const s = await dailySalt();
  if (!s) return null;
  const ip =
    request.headers.get('x-real-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown';
  const ua = request.headers.get('user-agent') ?? '';
  return createHash('sha256').update(`${s}|${ip}|${ua}`).digest('hex').slice(0, 16);
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function cookie(request: Request, name: string): string | null {
  const header = request.headers.get('cookie') ?? '';
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return null;
}

/** The layer-1 visitor id, only when the visitor said yes in the consent bar. */
export function consentedVid(request: Request): string | null {
  if (cookie(request, 'aih_consent') !== 'yes') return null;
  const vid = cookie(request, 'aih_vid');
  return vid && UUID.test(vid) ? vid.toLowerCase() : null;
}

export function validVid(vid: unknown): string | null {
  return typeof vid === 'string' && UUID.test(vid) ? vid.toLowerCase() : null;
}

const BOT = /bot|crawl|spider|slurp|preview|headless|lighthouse|pingdom|uptime|monitor|python|curl|wget|httpclient|axios|node-fetch|go-http|java\/|facebookexternalhit|embedly|whatsapp/i;

export function isBot(ua: string | null): boolean {
  return !ua || BOT.test(ua);
}

export function deviceOf(ua: string): string {
  if (/iPad|Tablet|PlayBook|Silk|Android(?!.*Mobile)/i.test(ua)) return 'tablet';
  if (/Mobi|iPhone|Android/i.test(ua)) return 'mobile';
  return 'desktop';
}

export function browserOf(ua: string): string {
  if (/Edg\//.test(ua)) return 'Edge';
  if (/OPR\/|Opera/.test(ua)) return 'Opera';
  if (/Firefox\//.test(ua)) return 'Firefox';
  if (/Chrome\//.test(ua)) return 'Chrome';
  if (/Safari\//.test(ua)) return 'Safari';
  return 'Other';
}

/** Insert rows through the Supabase REST API with the service key. Never throws. */
export async function insertRows(table: string, rows: Record<string, unknown>[]): Promise<void> {
  if (!rows.length || !config.supabaseUrl || !config.supabaseServiceKey) return;
  try {
    const res = await fetch(`${config.supabaseUrl}/rest/v1/${table}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.supabaseServiceKey,
        Authorization: `Bearer ${config.supabaseServiceKey}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(rows),
    });
    if (!res.ok) console.log(JSON.stringify({ tracking: 'insert_failed', table, status: res.status }));
  } catch {
    // Tracking must never break or slow a visitor's request.
  }
}

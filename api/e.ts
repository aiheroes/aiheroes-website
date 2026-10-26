// Collector for the site's own visit tracking (marketing-automation SDD §8.3). The beacon
// (src/components/tracking/track.ts) posts text/plain JSON with keepalive, so there is no CORS
// preflight. We answer 204 at once and write in the background. No cookie is set here and no IP
// is stored: see server/tracking.ts for the visitor key.

import { waitUntil } from '@vercel/functions';
import { z } from 'zod';
import { checkOrigin } from '../server/guards.js';
import { browserOf, deviceOf, insertRows, isBot, validVid, visitorKey } from '../server/tracking.js';

const str = (max: number) => z.string().max(max);

const eventSchema = z.object({
  t: z.enum(['pageview', 'leave', 'event', 'consent']),
  p: str(300),
  n: str(60).optional(),
  r: str(200).optional(),
  u: z.record(z.string().max(20), str(120)).optional(),
  l: str(5).optional(),
  ms: z.number().int().min(0).max(30 * 60 * 1000).optional(),
  s: z.number().int().min(0).max(100).optional(),
  x: z.record(z.string().max(40), z.union([str(200), z.number(), z.boolean()])).optional(),
});

const bodySchema = z.object({
  h: str(100),
  c: z.enum(['yes', 'no']).nullable().optional(),
  vid: z.string().optional(),
  i: z.literal(1).optional(),
  e: z.array(eventSchema).min(1).max(10),
});

// A small per-instance limit; enough to stop a runaway script without a database round trip.
const recent = new Map<string, { minute: number; count: number }>();
function tooMany(key: string): boolean {
  const minute = Math.floor(Date.now() / 60_000);
  const entry = recent.get(key);
  if (!entry || entry.minute !== minute) {
    if (recent.size > 5_000) recent.clear();
    recent.set(key, { minute, count: 1 });
    return false;
  }
  entry.count += 1;
  return entry.count > 120;
}

const noContent = () => new Response(null, { status: 204, headers: { 'Cache-Control': 'no-store' } });

export async function POST(request: Request): Promise<Response> {
  if (!checkOrigin(request)) return new Response(null, { status: 403 });
  const ua = request.headers.get('user-agent');
  if (isBot(ua)) return noContent();

  const raw = await request.text();
  if (raw.length > 16_000) return new Response(null, { status: 413 });
  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(JSON.parse(raw));
  } catch {
    return new Response(null, { status: 400 });
  }

  waitUntil(
    (async () => {
      const key = await visitorKey(request);
      if (!key || tooMany(key)) return;
      const vid = body.c === 'yes' ? validVid(body.vid) : null;
      const base = {
        host: body.h,
        visitor_key: key,
        vid,
        country: request.headers.get('x-vercel-ip-country'),
        device: deviceOf(ua ?? ''),
        browser: browserOf(ua ?? ''),
        internal: body.i === 1,
      };
      const rows = body.e.map((e) => ({
        ...base,
        type: e.t,
        name: e.n ?? null,
        path: e.p,
        referrer_host: e.r ?? null,
        utm: e.u ?? null,
        lang: e.l ?? null,
        engaged_ms: e.ms ?? null,
        scroll_pct: e.s ?? null,
        props: e.x ?? null,
      }));
      await insertRows('web_events', rows);
    })(),
  );
  return noContent();
}

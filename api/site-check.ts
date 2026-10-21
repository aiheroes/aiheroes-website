// The PHP version check on /nl/php-versie-check and /en/php-version-check. Vercel function.
// server/site-check.ts does the work and guards every outgoing request; this adds the origin
// check and a per-IP rate limit. The address a visitor enters is never logged or stored: the log
// line holds only the outcome, to see how the check is used.

import { z } from 'zod';
import { increment } from '../server/counters.js';
import { checkOrigin, hashIp } from '../server/guards.js';
import { checkSite, CheckError } from '../server/site-check.js';

const bodySchema = z.object({ url: z.string().trim().min(1).max(300) });

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

export async function POST(request: Request): Promise<Response> {
  if (!checkOrigin(request)) return json(403, { ok: false, error: 'forbidden' });

  let body: z.infer<typeof bodySchema>;
  try {
    body = bodySchema.parse(await request.json());
  } catch {
    return json(400, { ok: false, error: 'invalid_url' });
  }

  const ip = hashIp(request);
  const [perMinute, perHour] = await Promise.all([
    increment(`sitecheck:${ip}:minute`, 60),
    increment(`sitecheck:${ip}:hour`, 60 * 60),
  ]);
  if (perMinute > 8 || perHour > 60) return json(429, { ok: false, error: 'rate' });

  try {
    const report = await checkSite(body.url);
    console.log(JSON.stringify({ sitecheck: report.verdict, platform: report.platform?.name ?? null }));
    return json(200, { ok: true, report });
  } catch (e) {
    const error = e instanceof CheckError ? e.code : 'unreachable';
    console.log(JSON.stringify({ sitecheck: 'error', error }));
    return json(200, { ok: false, error });
  }
}

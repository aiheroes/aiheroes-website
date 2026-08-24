// Counter store for rate limits and spend circuit breakers (SDD D9 layers 4+6).
//
// Two backends:
//  - Supabase Postgres (authoritative in production; atomic via the increment_counter RPC
//    defined in db/schema.sql).
//  - In-memory fallback for local dev and for graceful degradation when Supabase is
//    unreachable: rate limiting still works per function instance, which is strictly
//    better than failing open with no limits at all.

import { config } from './config';

type Window = { key: string; windowStart: number; count: number };

const memory = new Map<string, Window>();

function memoryIncrement(key: string, windowSeconds: number, delta: number): number {
  const now = Math.floor(Date.now() / 1000);
  const windowStart = now - (now % windowSeconds);
  const existing = memory.get(key);
  if (!existing || existing.windowStart !== windowStart) {
    memory.set(key, { key, windowStart, count: delta });
    return delta;
  }
  existing.count += delta;
  return existing.count;
  // Old windows are overwritten on next access; the map stays tiny.
}

async function supabaseIncrement(
  key: string,
  windowSeconds: number,
  delta: number,
): Promise<number | null> {
  if (!config.supabaseUrl || !config.supabaseServiceKey) return null;
  try {
    const res = await fetch(`${config.supabaseUrl}/rest/v1/rpc/increment_counter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: config.supabaseServiceKey,
        Authorization: `Bearer ${config.supabaseServiceKey}`,
      },
      body: JSON.stringify({ p_key: key, p_window_seconds: windowSeconds, p_delta: delta }),
    });
    if (!res.ok) return null;
    return (await res.json()) as number;
  } catch {
    return null;
  }
}

/** Increment a windowed counter and return the new count. Falls back to memory. */
export async function increment(key: string, windowSeconds: number, delta = 1): Promise<number> {
  const remote = await supabaseIncrement(key, windowSeconds, delta);
  return remote ?? memoryIncrement(key, windowSeconds, delta);
}

const DAY = 24 * 60 * 60;
const MONTH = 31 * DAY;

export async function checkRateLimits(sessionId: string, ipHash: string) {
  const [sessionDay, ipMinute, spendDay, spendMonth] = await Promise.all([
    increment(`session:${sessionId}:day`, DAY),
    increment(`ip:${ipHash}:minute`, 60),
    increment('spend:day', DAY, 0),
    increment('spend:month', MONTH, 0),
  ]);
  if (spendDay >= config.dailyHardCents || spendMonth >= config.monthlyHardCents) {
    return { ok: false as const, reason: 'budget' as const };
  }
  if (sessionDay > config.sessionDailyLimit) return { ok: false as const, reason: 'session' as const };
  if (ipMinute > config.ipPerMinuteLimit) return { ok: false as const, reason: 'ip' as const };
  return { ok: true as const, anomalous: ipMinute > Math.ceil(config.ipPerMinuteLimit * 0.7) };
}

/** Record spend in euro cents; fires the Slack alert when crossing the alert threshold. */
export async function recordSpend(cents: number): Promise<void> {
  if (cents <= 0) return;
  const day = await increment('spend:day', DAY, cents);
  await increment('spend:month', MONTH, cents);
  const before = day - cents;
  if (before < config.dailyAlertCents && day >= config.dailyAlertCents) {
    await notifySlack(
      `:warning: Chat-assistent dagbudget-alert: €${(day / 100).toFixed(2)} van €${(config.dailyHardCents / 100).toFixed(2)} verbruikt vandaag.`,
    );
  }
  if (before < config.dailyHardCents && day >= config.dailyHardCents) {
    await notifySlack(
      `:octagonal_sign: Chat-assistent HARD GEDEGRADEERD: dagbudget €${(config.dailyHardCents / 100).toFixed(2)} bereikt. De widget schakelt naar e-mail-modus tot morgen.`,
    );
  }
}

export async function notifySlack(text: string): Promise<void> {
  if (!config.slackWebhookUrl) return;
  try {
    await fetch(config.slackWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text }),
    });
  } catch {
    // Notifications must never break the request path.
  }
}

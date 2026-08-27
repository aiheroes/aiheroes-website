// Request guards for the chat endpoint (SDD D9 layers 1-4).

import { createHmac, timingSafeEqual, randomUUID } from 'node:crypto';
import { config } from './config';

function secret(): string {
  if (config.tokenSecret) return config.tokenSecret;
  // Dev fallback: deterministic per-process secret. Production must set CHAT_TOKEN_SECRET.
  return 'dev-only-secret';
}

function sign(payload: string): string {
  return createHmac('sha256', secret()).update(payload).digest('base64url');
}

/** Issue a short-lived widget token bound to the session (D9 layer 2). */
export function issueToken(sessionId: string): { token: string; expiresAt: number } {
  const expiresAt = Math.floor(Date.now() / 1000) + config.tokenTtlSeconds;
  const payload = `${sessionId}.${expiresAt}`;
  return { token: `${payload}.${sign(payload)}`, expiresAt };
}

export function verifyToken(token: string | null, sessionId: string): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [sid, expStr, mac] = parts;
  if (sid !== sessionId) return false;
  if (Number(expStr) < Math.floor(Date.now() / 1000)) return false;
  const expected = sign(`${sid}.${expStr}`);
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

/** Salted, truncated IP hash — never store or log raw IPs (V4). */
export function hashIp(request: Request): string {
  const ip =
    request.headers.get('x-real-ip') ?? // Vercel
    request.headers.get('x-nf-client-connection-ip') ?? // Netlify (until decommissioned)
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown';
  return createHmac('sha256', config.ipSalt).update(ip).digest('hex').slice(0, 16);
}

/** Same-origin check (D9 layer 1). Preview deployments get their own origins. */
export function checkOrigin(request: Request): boolean {
  const origin = request.headers.get('origin') ?? request.headers.get('referer');
  if (!origin) return false;
  try {
    const host = new URL(origin).hostname;
    return (
      host === 'aiheroes.io' ||
      host.endsWith('.aiheroes.io') ||
      host.endsWith('.vercel.app') ||
      host.endsWith('.netlify.app') ||
      host === 'localhost' ||
      host === '127.0.0.1'
    );
  } catch {
    return false;
  }
}

const BASE64_WALL = /[A-Za-z0-9+/=]{200,}/;

/** Input-shape validation (D9 layer 3). Returns an error code or null. */
export function validateUserText(text: string): string | null {
  if (!text.trim()) return 'empty';
  if (text.length > config.maxMessageChars) return 'too_long';
  if (BASE64_WALL.test(text.replace(/\s/g, ''))) return 'blob';
  return null;
}

export function newSessionId(): string {
  return randomUUID();
}

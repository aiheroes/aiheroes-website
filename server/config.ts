// Central config for the chat assistant backend (SDD D4/D9).
// All thresholds live in env vars so the public repo carries no operational numbers.

export type ChatLang = 'nl' | 'en';

const int = (v: string | undefined, fallback: number) => {
  const n = Number.parseInt(v ?? '', 10);
  return Number.isFinite(n) ? n : fallback;
};

export const config = {
  // --- model routing (D4) ---
  // 'anthropic' is the dev-only path; production is 'vertex' (Gemini 3.7 Flash, EU).
  provider: (process.env.CHAT_MODEL_PROVIDER ?? 'anthropic') as 'anthropic' | 'vertex',
  vertex: {
    project: process.env.GOOGLE_VERTEX_PROJECT ?? '',
    // EU processing is load-bearing (V4) — see SDD D4.
    location: process.env.GOOGLE_VERTEX_LOCATION ?? 'europe-west4',
    model: process.env.CHAT_MODEL ?? 'gemini-3.7-flash',
    frontierModel: process.env.CHAT_FRONTIER_MODEL ?? 'claude-sonnet-5',
    useFrontier: process.env.CHAT_USE_FRONTIER === 'true',
    thinkingBudget: int(process.env.CHAT_THINKING_BUDGET, 2048),
    embeddingModel: process.env.CHAT_EMBEDDING_MODEL ?? 'gemini-embedding-001',
  },
  anthropicDevModel: process.env.CHAT_DEV_MODEL ?? 'claude-opus-5',
  maxOutputTokens: int(process.env.CHAT_MAX_OUTPUT_TOKENS, 1024),

  // --- guardrails (D9) ---
  tokenSecret: process.env.CHAT_TOKEN_SECRET ?? '',
  tokenTtlSeconds: int(process.env.CHAT_TOKEN_TTL_SECONDS, 60 * 60 * 12),
  maxMessageChars: int(process.env.CHAT_MAX_MESSAGE_CHARS, 2000),
  maxTurnsInWindow: int(process.env.CHAT_MAX_TURNS, 20),
  maxMessagesPerConversation: int(process.env.CHAT_MAX_MESSAGES_PER_CONVERSATION, 30),
  sessionDailyLimit: int(process.env.CHAT_SESSION_DAILY_LIMIT, 20),
  ipPerMinuteLimit: int(process.env.CHAT_IP_PER_MINUTE_LIMIT, 10),
  ipSalt: process.env.CHAT_IP_SALT ?? 'dev-salt-not-for-production',

  // Spend circuit breakers, euro cents (confirmed 2026-08-21: alert 5, degrade 10, month 100).
  dailyAlertCents: int(process.env.CHAT_DAILY_ALERT_CENTS, 500),
  dailyHardCents: int(process.env.CHAT_DAILY_HARD_CENTS, 1000),
  monthlyHardCents: int(process.env.CHAT_MONTHLY_HARD_CENTS, 10000),

  // --- integrations ---
  slackWebhookUrl: process.env.CHAT_SLACK_WEBHOOK_URL ?? '',
  supabaseUrl: process.env.CHAT_SUPABASE_URL ?? '',
  supabaseServiceKey: process.env.CHAT_SUPABASE_SERVICE_KEY ?? '',
  bookingUrl: process.env.CHAT_BOOKING_URL ?? '', // Cal.com link; empty -> contact-form fallback
  salonLumaUrl: 'https://lu.ma/aisalongroningen',
  siteOrigin: process.env.URL ?? 'https://aiheroes.io',

  // Render-layer link allowlist (D9 layer 7). The widget refuses to link anything else.
  linkAllowlist: ['aiheroes.io', 'lu.ma', 'cal.com'],
} as const;

export function isOfficeHours(now = new Date()): boolean {
  // Europe/Amsterdam, weekdays 09:00-17:00.
  const fmt = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Amsterdam',
    weekday: 'short',
    hour: 'numeric',
    hour12: false,
  });
  const parts = fmt.formatToParts(now);
  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? '';
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? '0');
  const isWeekday = !['Sat', 'Sun'].includes(weekday);
  return isWeekday && hour >= 9 && hour < 17;
}

// Generative-UI cards rendered for model tool calls (SDD D2), plus the inline
// escalation form (SDD D7) — the only place the widget asks for PII, consent-gated.

import React, { useState } from 'react';
import { ArrowRight, CalendarDays, Mail, Sparkles } from 'lucide-react';
import { STRINGS, type ChatLocale } from './strings';

const SALON_URL = 'https://lu.ma/aisalongroningen';
const cardClass =
  'mt-2 rounded-xl border border-stone-200 bg-white p-3.5 text-sm shadow-sm';
const ctaClass =
  'mt-2 inline-flex items-center gap-1.5 rounded-lg bg-brand-dark px-3 py-2 text-xs font-semibold text-white hover:bg-brand-dark/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2';
const inputClass =
  'mt-0.5 w-full rounded-md border border-stone-300 px-2 py-1.5 text-sm focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/25';

export function PageCard({
  locale,
  input,
}: {
  locale: ChatLocale;
  input: { url?: string; title?: string; reason?: string };
}) {
  const t = STRINGS[locale];
  if (!input?.url) return null;
  let href: string;
  try {
    const parsed = new URL(input.url, 'https://aiheroes.io');
    if (!parsed.hostname.endsWith('aiheroes.io')) return null;
    href = parsed.pathname + parsed.hash;
  } catch {
    return null;
  }
  return (
    <div className={cardClass}>
      <p className="font-semibold">{input.title ?? href}</p>
      {input.reason && <p className="mt-0.5 text-stone-500">{input.reason}</p>}
      <a href={href} className={ctaClass}>
        {t.pageCta} <ArrowRight size={12} aria-hidden />
      </a>
    </div>
  );
}

export function BookingCard({
  locale,
  bookingUrl,
}: {
  locale: ChatLocale;
  bookingUrl: string | null;
}) {
  const t = STRINGS[locale];
  const contactHref = locale === 'nl' ? '/#contact' : '/en#contact';
  return (
    <div className={cardClass}>
      <p className="flex items-center gap-1.5 font-semibold">
        <CalendarDays size={14} aria-hidden /> {t.bookTitle}
      </p>
      {bookingUrl ? (
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={ctaClass}>
          {t.bookCta} <ArrowRight size={12} aria-hidden />
        </a>
      ) : (
        <a href={contactHref} className={ctaClass}>
          {t.bookFallbackCta} <ArrowRight size={12} aria-hidden />
        </a>
      )}
    </div>
  );
}

export function SalonCard({ locale }: { locale: ChatLocale }) {
  const t = STRINGS[locale];
  return (
    <div className={cardClass}>
      <p className="flex items-center gap-1.5 font-semibold">
        <Sparkles size={14} aria-hidden /> {t.salonTitle}
      </p>
      <a href={SALON_URL} target="_blank" rel="noopener noreferrer" className={ctaClass}>
        {t.salonCta} <ArrowRight size={12} aria-hidden />
      </a>
    </div>
  );
}

export interface EscalationPayload {
  reason: string;
  summary: string;
  email?: string;
  name?: string;
}

/**
 * Conversational escalation confirm (SDD D7, revised 2026-08-24): the assistant asks
 * for the email in the conversation; this card is only the one-tap confirmation.
 * Sending IS the consent action; the micro-line states what it means.
 */
export function EscalationForm({
  locale,
  payload,
  sessionId,
  conversationId,
  token,
  transcript,
}: {
  locale: ChatLocale;
  payload: EscalationPayload;
  sessionId: string;
  conversationId: string;
  token: string | null;
  transcript: { role: 'user' | 'assistant'; text: string }[];
}) {
  const t = STRINGS[locale];
  const [email, setEmail] = useState(payload.email ?? '');
  const [state, setState] = useState<'idle' | 'sending' | 'done-office' | 'done-closed' | 'error'>(
    'idle',
  );

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (state === 'sending') return;
    setState('sending');
    try {
      const res = await fetch('/api/escalate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-chat-token': token ?? '' },
        body: JSON.stringify({
          sessionId,
          conversationId,
          name: payload.name ?? '',
          email,
          reason: payload.reason || 'visitor_request',
          summary: payload.summary ?? '',
          transcript: transcript.slice(-20),
          consent: true,
        }),
      });
      if (!res.ok) throw new Error('failed');
      const data = (await res.json()) as { officeHours: boolean };
      setState(data.officeHours ? 'done-office' : 'done-closed');
    } catch {
      setState('error');
    }
  }

  if (state === 'done-office' || state === 'done-closed') {
    return (
      <div className={cardClass}>
        <p className="font-semibold">
          {state === 'done-office' ? t.escalateDoneOffice : t.escalateDoneClosed}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={cardClass}>
      <p className="flex items-center gap-1.5 font-semibold">
        <Mail size={14} aria-hidden /> {t.escalateTitle}
      </p>
      <div className="mt-2 flex items-center gap-2">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label={t.escalateEmail}
          placeholder={t.escalateEmail}
          className={`${inputClass} mt-0 flex-1`}
          autoComplete="email"
        />
        <button
          type="submit"
          disabled={state === 'sending'}
          className={`${ctaClass} mt-0 shrink-0 disabled:opacity-50`}
        >
          {t.escalateSend}
        </button>
      </div>
      <p className="mt-1.5 text-[0.68rem] leading-snug text-stone-400">{t.escalateConsent}</p>
      {state === 'error' && <p className="mt-1 text-xs text-brand-red">{t.errorGeneric}</p>}
    </form>
  );
}

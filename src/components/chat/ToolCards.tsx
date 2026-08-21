// Generative-UI cards rendered for model tool calls (SDD D2), plus the inline
// escalation form (SDD D7) — the only place the widget asks for PII, consent-gated.

import React, { useState } from 'react';
import { ArrowRight, CalendarDays, Mail, Sparkles } from 'lucide-react';
import { STRINGS, type ChatLocale } from './strings';

const SALON_URL = 'https://lu.ma/aisalongroningen';
const cardClass =
  'mt-2 rounded-lg border border-stone-200 bg-white p-3 text-sm shadow-sm dark:border-stone-700 dark:bg-stone-800';
const ctaClass =
  'mt-2 inline-flex items-center gap-1.5 rounded-md bg-brand-dark px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-dark/85';

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
      {input.reason && <p className="mt-0.5 text-stone-500 dark:text-stone-400">{input.reason}</p>}
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
}

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState<'idle' | 'sending' | 'done-office' | 'done-closed' | 'error'>(
    'idle',
  );

  async function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!consent || state === 'sending') return;
    setState('sending');
    try {
      const res = await fetch('/api/escalate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-chat-token': token ?? '' },
        body: JSON.stringify({
          sessionId,
          conversationId,
          name,
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
      <p className="mt-0.5 text-stone-500 dark:text-stone-400">{t.escalateIntro}</p>
      <label className="mt-2 block text-xs font-medium">
        {t.escalateName}
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-0.5 w-full rounded-md border border-stone-300 px-2 py-1.5 text-sm dark:border-stone-600 dark:bg-stone-900"
          autoComplete="name"
        />
      </label>
      <label className="mt-2 block text-xs font-medium">
        {t.escalateEmail}
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-0.5 w-full rounded-md border border-stone-300 px-2 py-1.5 text-sm dark:border-stone-600 dark:bg-stone-900"
          autoComplete="email"
        />
      </label>
      <label className="mt-2 flex items-start gap-2 text-xs">
        <input
          required
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5"
        />
        <span>{t.escalateConsent}</span>
      </label>
      <button type="submit" disabled={state === 'sending'} className={`${ctaClass} disabled:opacity-50`}>
        {t.escalateSend}
      </button>
      {state === 'error' && <p className="mt-1 text-xs text-brand-red">{t.errorGeneric}</p>}
    </form>
  );
}

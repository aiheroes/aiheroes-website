// Generative-UI cards rendered for model tool calls (SDD D2), plus the inline
// escalation form (SDD D7), the only place the widget asks for PII, consent-gated.
// House style: a paper tile, a blue icon, one dark button.

import React, { useState } from 'react';
import { ChatIcon } from './ChatIcon';
import { STRINGS, type ChatLocale } from './strings';

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
    <div className="aih-card">
      <p className="aih-card__title">
        <ChatIcon name="file-text" />
        {input.title ?? href}
      </p>
      {input.reason && <p className="aih-card__text">{input.reason}</p>}
      <a href={href} className="aih-btn">
        {t.pageCta}
        <ChatIcon name="arrow-right" />
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
  const contactHref = locale === 'nl' ? '/nl/startsprint' : '/en/start-sprint';
  return (
    <div className="aih-card">
      <p className="aih-card__title">
        <ChatIcon name="calendar" />
        {t.bookTitle}
      </p>
      <p className="aih-card__text">{t.bookText}</p>
      {bookingUrl ? (
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className="aih-btn">
          {t.bookCta}
          <ChatIcon name="arrow-up-right" />
        </a>
      ) : (
        <a href={contactHref} className="aih-btn">
          {t.bookFallbackCta}
          <ChatIcon name="arrow-right" />
        </a>
      )}
    </div>
  );
}

export function SalonCard({ locale }: { locale: ChatLocale }) {
  const t = STRINGS[locale];
  // Internal link on purpose: the salon page always carries the current
  // registration state (Luma event URLs rot; the 2026-08 kick-off link 404s).
  const href = locale === 'nl' ? '/nl/ai-salon' : '/en/ai-salon';
  return (
    <div className="aih-card">
      <p className="aih-card__title">
        <ChatIcon name="peoples-two" />
        {t.salonTitle}
      </p>
      <p className="aih-card__text">{t.salonText}</p>
      <a href={href} className="aih-btn">
        {t.salonCta}
        <ChatIcon name="arrow-right" />
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
 * Sending IS the consent action; the fine print states what it means.
 */
export function EscalationForm({
  locale,
  payload,
  sessionId,
  conversationId,
  token,
  transcript,
  onDone,
}: {
  locale: ChatLocale;
  payload: EscalationPayload;
  sessionId: string;
  conversationId: string;
  token: string | null;
  transcript: { role: 'user' | 'assistant'; text: string }[];
  onDone?: () => void;
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
          email: email.trim(),
          reason: payload.reason || 'visitor_request',
          summary: payload.summary ?? '',
          transcript: transcript.slice(-20),
          consent: true,
        }),
      });
      if (!res.ok) throw new Error('failed');
      const data = (await res.json()) as { officeHours: boolean };
      setState(data.officeHours ? 'done-office' : 'done-closed');
      onDone?.();
    } catch {
      setState('error');
    }
  }

  if (state === 'done-office' || state === 'done-closed') {
    return (
      <div className="aih-card" role="status">
        <p className="aih-done">
          <ChatIcon name="check" />
          {state === 'done-office' ? t.escalateDoneOffice : t.escalateDoneClosed}
        </p>
      </div>
    );
  }

  const sending = state === 'sending';
  return (
    <form onSubmit={submit} className="aih-card">
      <p className="aih-card__title">
        <ChatIcon name="mail" />
        {t.escalateTitle}
      </p>
      <div className="aih-form">
        <input
          required
          type="email"
          className="aih-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label={t.escalateEmail}
          placeholder={t.escalateEmail}
          autoComplete="email"
          inputMode="email"
          readOnly={sending}
        />
        <button type="submit" className="aih-btn" disabled={sending}>
          {sending ? t.escalateSending : t.escalateSend}
        </button>
      </div>
      {state === 'error' ? (
        <p className="aih-fine is-error" role="alert">
          {t.escalateError}
        </p>
      ) : (
        <p className="aih-fine">{t.escalateConsent}</p>
      )}
    </form>
  );
}

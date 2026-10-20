// Generative-UI cards rendered for model tool calls (SDD D2), plus the inline
// escalation form (SDD D7), the only place the widget asks for PII, consent-gated.
// House style: an action is an entry plane (the whole colour plane is the link, icon top left,
// arrow top right, title bottom left) with its explanation under it; the handoff shows the
// three founders who answer.

import React, { useState } from 'react';
import { ENTRIES, ENTRIES_EN } from '../../data/site';
import { ChatIcon } from './ChatIcon';
import { STRINGS, type ChatLocale } from './strings';

type Tone = 'is-red' | 'is-blue' | 'is-ink';

const ACCENT_TONE = { red: 'is-red', blue: 'is-blue', dark: 'is-ink' } as const;

/** A page of one of the three entries keeps that entry's colour; any other page is blue. */
function toneFor(path: string): Tone {
  const entry = [...Object.values(ENTRIES), ...Object.values(ENTRIES_EN)].find((e) => e.href === path);
  return entry ? ACCENT_TONE[entry.accent] : 'is-blue';
}

/** The founders in the order the assistant names them ("Frans, David of Jan"). */
const TEAM = ['frans', 'david', 'jan'] as const;

export function Faces({ className }: { className?: string }) {
  return (
    <span className={`aih-faces${className ? ` ${className}` : ''}`} aria-hidden="true">
      {TEAM.map((name) => (
        <img key={name} src={`/team/face/${name}.webp`} alt="" width="72" height="72" decoding="async" />
      ))}
    </span>
  );
}

/**
 * An action as an entry plane. Cream on red only passes contrast at title size, so the
 * explanation sits under the plane on the paper. It grows from the bottom when it appears and
 * then its icon draws itself (chat.css).
 */
function Plane({
  href,
  tone,
  icon,
  title,
  action,
  text,
  external = false,
}: {
  href: string;
  tone: Tone;
  icon: React.ReactNode;
  title: string;
  /** What following the link does; read out with the title. */
  action: string;
  text?: string;
  external?: boolean;
}) {
  return (
    <div className="aih-act">
      <a
        href={href}
        className={`aih-plane ${tone}`}
        aria-label={`${title}: ${action}`}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        <span className="aih-plane__top">
          {icon}
          <ChatIcon name={external ? 'arrow-up-right' : 'arrow-right'} className="aih-plane__go" />
        </span>
        <span className="aih-plane__title">{title}</span>
      </a>
      {text && <p className="aih-act__text">{text}</p>}
    </div>
  );
}

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
  let path: string;
  try {
    const parsed = new URL(input.url, 'https://aiheroes.io');
    if (!parsed.hostname.endsWith('aiheroes.io')) return null;
    path = parsed.pathname.replace(/\/$/, '') || '/';
    href = parsed.pathname + parsed.hash;
  } catch {
    return null;
  }
  return (
    <Plane
      href={href}
      tone={toneFor(path)}
      icon={<ChatIcon name="file-text" draw delay={420} className="aih-plane__icon" />}
      title={input.title ?? href}
      action={t.pageCta}
      text={input.reason}
    />
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
  // The six days of the sprint as six squares that build up one by one.
  const days = (
    <span className="aih-days" aria-hidden="true">
      {Array.from({ length: 6 }, (_, i) => (
        <i key={i} style={{ '--i': i } as React.CSSProperties} />
      ))}
    </span>
  );
  return (
    <Plane
      href={bookingUrl ?? contactHref}
      tone="is-red"
      icon={days}
      title={t.bookTitle}
      action={bookingUrl ? t.bookCta : t.bookFallbackCta}
      text={t.bookText}
      external={Boolean(bookingUrl)}
    />
  );
}

export function SalonCard({ locale }: { locale: ChatLocale }) {
  const t = STRINGS[locale];
  // Internal link on purpose: the salon page always carries the current
  // registration state (Luma event URLs rot; the 2026-08 kick-off link 404s).
  const href = locale === 'nl' ? '/nl/ai-salon' : '/en/ai-salon';
  return (
    <Plane
      href={href}
      tone="is-ink"
      icon={<ChatIcon name="peoples-two" draw delay={420} className="aih-plane__icon" />}
      title={t.salonTitle}
      action={t.salonCta}
      text={t.salonText}
    />
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
      <div className="aih-card aih-handoff is-done" role="status">
        <span className="aih-tile is-blue">
          <ChatIcon name="check" draw />
        </span>
        <p className="aih-done">{state === 'done-office' ? t.escalateDoneOffice : t.escalateDoneClosed}</p>
      </div>
    );
  }

  const sending = state === 'sending';
  return (
    <form onSubmit={submit} className="aih-card aih-handoff">
      <div className="aih-handoff__head">
        <Faces />
        <p className="aih-card__title">{t.escalateTitle}</p>
      </div>
      <div className="aih-field is-form">
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
      </div>
      <div className="aih-handoff__send">
        <button type="submit" className="aih-btn" disabled={sending}>
          {sending ? t.escalateSending : t.escalateSend}
          {!sending && <ChatIcon name="arrow-right" />}
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

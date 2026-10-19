// The chat panel (SDD D2 + UX audit 2026-08-22, house style 2026-10): streaming with smoothed
// cadence, scroll pinning (never yank), page-aware suggestions, sources, tool cards,
// escalation with a closed-thread state, an always-available route to a person, honest
// waiting, offline handling and full keyboard/reader accessibility. Lazy-loaded.

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { ChatIcon } from './ChatIcon';
import { ChatMarkdown } from './Markdown';
import {
  ensureToken,
  getConversationId,
  getSessionId,
  loadMessages,
  markDisclosed,
  markEscalated,
  resetConversation,
  saveMessages,
  wasDisclosed,
  wasEscalated,
} from './session';
import { DISCLOSURE_PATH, STRINGS, suggestionsForPath, type ChatLocale } from './strings';
import { BookingCard, EscalationForm, PageCard, SalonCard, type EscalationPayload } from './ToolCards';

interface Props {
  locale: ChatLocale;
  path: string;
  bookingUrl: string | null;
  /** Sources under answers (CHAT_SOURCE_CHIPS). */
  sourceChips: boolean;
  closing: boolean;
  onCloseRequest: () => void;
  onClosed: () => void;
}

type MessageSources = { url: string; title: string }[];

const PIN_THRESHOLD_PX = 72;
const MAX_INPUT = 2000;

function textOf(message: UIMessage): string {
  return message.parts
    .filter((p): p is Extract<typeof p, { type: 'text' }> => p.type === 'text')
    .map((p) => p.text)
    .join('\n');
}

/**
 * Whether an assistant message shows anything ON SCREEN. search_knowledge renders
 * nothing (server-side retrieval), so it must not count, or the typing indicator
 * dies during the invisible search step while the visitor stares at a blank gap.
 * `withCards: false` counts the text only: cards of an answer that is still streaming
 * are held back (see `streamingId`), so they are not on screen yet.
 */
function hasVisibleContent(message: UIMessage | undefined, withCards = true): boolean {
  return (
    message?.role === 'assistant' &&
    (textOf(message).trim().length > 0 ||
      (withCards && message.parts.some((p) => p.type.startsWith('tool-') && p.type !== 'tool-search_knowledge')))
  );
}

/**
 * The model sometimes promises the AI Salon card ("je kunt je hieronder aanmelden") without
 * calling register_salon: 8 of 40 answers on 2026-10-19, and firmer prompt wording made it
 * worse. An answer about the AI Salon that points below and shows no card gets the sign-up
 * card from the widget, so the promise always holds.
 */
function promisesMissingSalonCard(message: UIMessage): boolean {
  const text = textOf(message);
  return (
    message.role === 'assistant' &&
    /AI Salon/i.test(text) &&
    /hieronder|onderstaande|below/i.test(text) &&
    !message.parts.some((p) => p.type.startsWith('tool-') && p.type !== 'tool-search_knowledge')
  );
}

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** A link's path on this site, or null for mail, anchor and external links. */
function sitePath(href: string): string | null {
  if (href.startsWith('#')) return null;
  try {
    const url = new URL(href, 'https://aiheroes.io');
    if (!/^https?:$/.test(url.protocol)) return null;
    if (url.hostname !== 'aiheroes.io' && url.hostname !== 'www.aiheroes.io') return null;
    return url.pathname.replace(/\/$/, '') || '/';
  } catch {
    return null;
  }
}

/** "De startsprint: in zes dagen …" becomes "De startsprint": the page's name, not its whole title. */
function shortTitle(title: string): string {
  const clean = title.replace(/[*_`]/g, '').trim();
  const head = clean.split(/[:|]/)[0].trim();
  const name = head.length >= 3 ? head : clean;
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/**
 * The pages an answer actually cites: its inline links to this site, in order, minus the
 * pages it already shows as a card. Retrieval returns six candidate pages for every
 * question (also for "my email address is …"), so the metadata only supplies page names.
 * Derived from the text, the sources appear while the answer streams, never as a late jump.
 */
function citedSources(message: UIMessage): { href: string; label: string }[] {
  const meta = (message.metadata as { sources?: MessageSources } | undefined)?.sources ?? [];
  const carded = new Set<string | null>();
  for (const part of message.parts) {
    const url = part.type === 'tool-show_page' && 'input' in part ? (part.input as { url?: string } | undefined)?.url : undefined;
    if (url) carded.add(sitePath(url));
  }
  const seen = new Set<string>();
  const cited: { href: string; label: string }[] = [];
  for (const [, text, href] of textOf(message).matchAll(LINK_RE)) {
    const path = sitePath(href);
    if (!path || seen.has(path) || carded.has(path)) continue;
    seen.add(path);
    const hit = meta.find((s) => sitePath(s.url) === path);
    cited.push({ href: path, label: shortTitle(hit?.title ?? text) });
  }
  return cited.slice(0, 3);
}

export default function ChatPanel({
  locale,
  path,
  bookingUrl,
  sourceChips,
  closing,
  onCloseRequest,
  onClosed,
}: Props) {
  const t = STRINGS[locale];
  const [token, setToken] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState(() => getConversationId());
  const [pinned, setPinned] = useState(true);
  const [announcement, setAnnouncement] = useState('');
  const [slow, setSlow] = useState(false);
  const [silentFail, setSilentFail] = useState(false);
  const [offline, setOffline] = useState(() => typeof navigator !== 'undefined' && !navigator.onLine);
  // A forwarded conversation is a closed thread: the composer locks (handoff best
  // practice: confirmation, expectation, clean break; anything typed after the
  // forward would never reach the team).
  const [escalated, setEscalated] = useState(() => wasEscalated(getConversationId()));

  useEffect(() => {
    setEscalated(wasEscalated(conversationId));
  }, [conversationId]);

  const onEscalated = useCallback(() => {
    markEscalated(conversationId);
    setEscalated(true);
  }, [conversationId]);
  const sessionId = useMemo(() => getSessionId(), []);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [showDisclosure] = useState(() => !wasDisclosed());
  // Mobile sheet state: two snap heights + drag-to-dismiss/expand on the grabber.
  const [maximized, setMaximized] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartY = useRef<number | null>(null);
  const dragDelta = useRef(0);

  useEffect(() => {
    void ensureToken().then(setToken); // idempotent; the launcher already prewarmed on intent
    markDisclosed();
    // Autofocus is desktop-only: on touch devices it slams the keyboard open (audit P0).
    if (window.matchMedia('(pointer: fine)').matches) inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const update = () => setOffline(!navigator.onLine);
    window.addEventListener('online', update);
    window.addEventListener('offline', update);
    return () => {
      window.removeEventListener('online', update);
      window.removeEventListener('offline', update);
    };
  }, []);

  const transport = useMemo(
    () =>
      new DefaultChatTransport({
        api: '/api/chat',
        headers: () => ({ 'x-chat-token': token ?? '' }),
        body: () => ({ sessionId, conversationId, locale, path }),
      }),
    [token, sessionId, conversationId, locale, path],
  );

  const { messages, sendMessage, status, stop, error, regenerate } = useChat({
    id: conversationId,
    messages: loadMessages<UIMessage>(),
    transport,
    throttle: 40, // steady render cadence during streaming (audit P1)
  });

  // Continuity (SDD D6): the thread survives navigation, reload and return visits.
  useEffect(() => {
    if (messages.length > 0) saveMessages(messages);
  }, [messages]);

  // Scroll pinning (audit P0): auto-follow only while the visitor is at the bottom;
  // never steal scroll position when they read back mid-stream.
  const onListScroll = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    setPinned(el.scrollHeight - el.scrollTop - el.clientHeight < PIN_THRESHOLD_PX);
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (el && pinned) el.scrollTop = el.scrollHeight;
  }, [messages, status, pinned, offline, silentFail, error]);

  const jumpToLatest = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: reduce ? 'auto' : 'smooth' });
    setPinned(true);
  }, []);

  // Screen-reader narration (audit P0): announce exactly twice per turn (start and
  // the finished answer) instead of re-reading every streamed token.
  const prevStatus = useRef(status);
  useEffect(() => {
    if (status === 'submitted' && prevStatus.current !== 'submitted') {
      setAnnouncement(t.thinking);
    }
    if (
      status === 'ready' &&
      (prevStatus.current === 'streaming' || prevStatus.current === 'submitted')
    ) {
      const last = messages[messages.length - 1];
      if (last?.role === 'assistant') setAnnouncement(textOf(last));
      // A stream that ended without any VISIBLE assistant content is a silent
      // failure (throttled upstream, killed function, search-only step):
      // surface the retry UI, never nothing.
      setSilentFail(!hasVisibleContent(last));
    }
    prevStatus.current = status;
  }, [status, messages, t.thinking]);

  // Focus trap + Escape to close.
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onCloseRequest();
        return;
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusables = [
          ...panelRef.current.querySelectorAll<HTMLElement>(
            'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
          ),
        ].filter((el) => el.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    },
    [onCloseRequest],
  );

  const busy = status === 'submitted' || status === 'streaming';
  const lastMessage = messages[messages.length - 1];
  // The answer that is still streaming keeps its cards back until it is done. The model
  // often calls show_page before it writes; a card that pops up on its own and is then
  // pushed down by the text reads as if it came before the answer.
  const streamingId = busy && lastMessage?.role === 'assistant' ? lastMessage.id : null;

  // The typing squares must reflect what the visitor SEES, not the stream state:
  // metadata, invisible search steps and held-back cards arrive before the text.
  const awaitingContent = busy && !hasVisibleContent(lastMessage, false);

  // Honest waiting: after 15s without visible content, say it's slower than usual.
  useEffect(() => {
    if (!awaitingContent) {
      setSlow(false);
      return;
    }
    const timer = setTimeout(() => setSlow(true), 15_000);
    return () => clearTimeout(timer);
  }, [awaitingContent]);

  // Mobile: tapping an internal link minimizes the sheet so the visitor actually
  // sees the page they navigated to (the full-screen sheet would cover it).
  // Desktop keeps the corner panel open next to the new page. New-tab links are
  // left alone on both. The conversation survives either way (transition:persist).
  const onPanelClick = useCallback(
    (event: React.MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest?.('a');
      if (!anchor || anchor.target === '_blank') return;
      const href = anchor.getAttribute('href') ?? '';
      if (!href || href.startsWith('#') || href.startsWith('mailto:')) return;
      if (window.matchMedia('(max-width: 639px)').matches) onCloseRequest();
    },
    [onCloseRequest],
  );

  const submit = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || busy || offline) return;
      setInput('');
      setPinned(true);
      setSilentFail(false);
      void sendMessage({ text: trimmed });
    },
    [busy, offline, sendMessage],
  );

  const transcript = useMemo(
    () =>
      messages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .map((m) => ({ role: m.role as 'user' | 'assistant', text: textOf(m) }))
        .filter((m) => m.text),
    [messages],
  );

  // Direct clear, no undo bar (David 25-08: the founders prefer a quiet UI).
  function newConversation() {
    if (messages.length === 0) return;
    if (busy) stop();
    const id = resetConversation();
    setConversationId(id);
    setSilentFail(false);
    setInput('');
    requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
  }

  const errorKind = useMemo(() => {
    const msg = error?.message ?? '';
    if (msg.includes('budget')) return 'budget';
    if (msg.includes('session') || msg.includes('ip') || msg.includes('429')) return 'rate';
    return error ? 'generic' : null;
  }, [error]);

  // The route to a person disappears while a forward form is already on screen.
  const forwardOnScreen =
    errorKind === 'budget' ||
    (lastMessage?.role === 'assistant' &&
      lastMessage.id !== streamingId &&
      lastMessage.parts.some((p) => p.type === 'tool-escalate_to_human'));

  function renderPart(part: UIMessage['parts'][number], index: number) {
    if (part.type === 'text') {
      return part.text.trim() ? <ChatMarkdown key={index} text={part.text} /> : null;
    }
    if (part.type === 'tool-show_page' && 'input' in part && part.input) {
      return <PageCard key={index} locale={locale} input={part.input as never} />;
    }
    if (part.type === 'tool-book_meeting' && 'input' in part) {
      return <BookingCard key={index} locale={locale} bookingUrl={bookingUrl} />;
    }
    if (part.type === 'tool-register_salon' && 'input' in part) {
      return <SalonCard key={index} locale={locale} />;
    }
    if (part.type === 'tool-escalate_to_human' && 'input' in part && part.input) {
      return (
        <EscalationForm
          key={index}
          locale={locale}
          payload={part.input as EscalationPayload}
          sessionId={sessionId}
          conversationId={conversationId}
          token={token}
          transcript={transcript}
          onDone={onEscalated}
        />
      );
    }
    return null;
  }

  function renderSources(message: UIMessage) {
    if (!sourceChips) return null;
    const cited = citedSources(message);
    if (cited.length === 0) return null;
    return (
      <p className="aih-sources">
        <span className="aih-sources__label">{cited.length === 1 ? t.source : t.sources}</span>
        {cited.map((s) => (
          <a key={s.href} href={s.href}>
            {s.label}
          </a>
        ))}
      </p>
    );
  }

  const suggestions = suggestionsForPath(locale, path);

  // Drag on the grabber (mobile): follow the finger; release decides:
  // down >120px dismisses, up >60px maximizes, otherwise snap back.
  // Tap and the header buttons remain the non-gesture alternatives.
  const onGrabberPointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    dragStartY.current = e.clientY;
    dragDelta.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onGrabberPointerMove = (e: React.PointerEvent) => {
    if (dragStartY.current === null) return;
    dragDelta.current = e.clientY - dragStartY.current;
    setDragOffset(Math.max(0, dragDelta.current));
  };
  const onGrabberPointerUp = () => {
    const delta = dragDelta.current;
    dragStartY.current = null;
    dragDelta.current = 0;
    setDragOffset(0);
    if (delta > 120) onCloseRequest();
    else if (delta < -60) setMaximized(true);
  };

  const errorText =
    errorKind === 'budget' ? t.errorBudget : errorKind === 'rate' ? t.errorRate : t.errorGeneric;
  const canRetry = errorKind === 'generic' || (silentFail && !errorKind);
  const panelClass = [
    'aih',
    'aih-panel',
    maximized && 'is-max',
    closing && 'is-out',
    dragOffset > 0 && 'is-dragging',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {/* Scrim (mobile only): the page stays visible behind the sheet, so it reads as a
          layer and not a new page. Tap to minimize. */}
      <div aria-hidden="true" onClick={onCloseRequest} className={`aih aih-backdrop${closing ? ' is-out' : ''}`} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="aih-title"
        onKeyDown={onKeyDown}
        onClick={onPanelClick}
        onAnimationEnd={(e) => {
          if (closing && e.target === panelRef.current) onClosed();
        }}
        style={dragOffset > 0 ? { transform: `translateY(${dragOffset}px)` } : undefined}
        className={panelClass}
      >
        {/* Header: the blue plane with the always-visible AI label (SDD D10, AI Act art. 50). */}
        <header className="aih-head">
          <button
            type="button"
            className="aih-grab"
            aria-label={maximized ? t.collapse : t.expand}
            onClick={() => setMaximized((m) => !m)}
            onPointerDown={onGrabberPointerDown}
            onPointerMove={onGrabberPointerMove}
            onPointerUp={onGrabberPointerUp}
            onPointerCancel={onGrabberPointerUp}
          >
            <span aria-hidden="true" />
          </button>
          <div className="aih-head__bar">
            <h2 className="aih-head__title" id="aih-title">
              <span className="aih-mark" aria-hidden="true" />
              {t.aiBadge}
            </h2>
            <div className="aih-head__actions">
              {messages.length > 0 && (
                <button type="button" className="aih-iconbtn" onClick={newConversation} aria-label={t.newChat} title={t.newChat}>
                  <ChatIcon name="refresh" />
                </button>
              )}
              <button type="button" className="aih-iconbtn" onClick={onCloseRequest} aria-label={t.close} title={t.close}>
                <ChatIcon name="arrow-right" className="is-down aih-mob" />
                <ChatIcon name="close" className="aih-desk" />
              </button>
            </div>
          </div>
        </header>

        {/* Screen-reader status channel (audit P0). */}
        <div className="aih-sr" role="status" aria-live="polite">
          {announcement}
        </div>

        <div className="aih-body">
          <div ref={listRef} onScroll={onListScroll} className="aih-list">
            {showDisclosure && (
              <p className="aih-disclosure">
                {t.disclosure} <a href={DISCLOSURE_PATH[locale]}>{t.disclosureLink}</a>
              </p>
            )}

            {messages.length === 0 && (
              <div>
                <p className="aih-empty__title">{t.suggestionsTitle}</p>
                <ul className="aih-suggest">
                  {suggestions.map((s) => (
                    <li key={s}>
                      <button type="button" onClick={() => submit(s)} disabled={offline}>
                        <span>{s}</span>
                        <ChatIcon name="arrow-right" />
                      </button>
                    </li>
                  ))}
                </ul>
                <ChatMarkdown text={t.directLine} className="aih-direct" />
              </div>
            )}

            {messages.map((message) =>
              message.role === 'user' ? (
                <div key={message.id} className="aih-msg aih-msg--user">
                  <p className="aih-user">
                    <span className="aih-sr">{t.you}: </span>
                    {textOf(message)}
                  </p>
                </div>
              ) : hasVisibleContent(message, message.id !== streamingId) ? (
                <div key={message.id} className="aih-msg">
                  {/* Text first, then the action cards: the model often calls a tool before it
                      writes, yet refers to the card as "below". The cards wait until the answer
                      has finished streaming, so they always appear after it. */}
                  {message.parts.map((part, i) => (part.type === 'text' ? renderPart(part, i) : null))}
                  {message.id !== streamingId &&
                    message.parts.map((part, i) => (part.type === 'text' ? null : renderPart(part, i)))}
                  {message.id !== streamingId && promisesMissingSalonCard(message) && <SalonCard locale={locale} />}
                  {renderSources(message)}
                </div>
              ) : null,
            )}

            {awaitingContent && (
              <div className="aih-msg">
                <span className="aih-typing" role="img" aria-label={t.thinking}>
                  <span />
                  <span />
                  <span />
                </span>
                {slow && <p className="aih-note">{t.slow}</p>}
              </div>
            )}

            {offline ? (
              <div className="aih-alert" role="status">
                <p>{t.offline}</p>
              </div>
            ) : (
              (errorKind || silentFail) && (
                <div className="aih-alert" role="alert">
                  <div>
                    <p>{errorText}</p>
                    {canRetry && (
                      <button
                        type="button"
                        className="aih-textbtn"
                        onClick={() => {
                          setSilentFail(false);
                          void regenerate();
                        }}
                      >
                        {t.retry}
                      </button>
                    )}
                  </div>
                </div>
              )
            )}
            {errorKind === 'budget' && !escalated && (
              <EscalationForm
                locale={locale}
                payload={{ reason: 'visitor_request', summary: '' }}
                sessionId={sessionId}
                conversationId={conversationId}
                token={token}
                transcript={transcript}
                onDone={onEscalated}
              />
            )}
          </div>

          {/* Back to the latest answer: only when the visitor scrolled up mid-stream. */}
          {!pinned && busy && (
            <button type="button" className="aih-jump" onClick={jumpToLatest}>
              <ChatIcon name="arrow-right" className="is-down" />
              {t.newAnswer}
            </button>
          )}
        </div>

        {/* Composer, or after a forward a closed-thread bar with a fresh start. */}
        {escalated ? (
          <div className="aih-closed">
            <p>
              <ChatIcon name="check" />
              {t.escalatedBar}
            </p>
            <button type="button" className="aih-btn" onClick={newConversation}>
              {t.newChat}
            </button>
          </div>
        ) : (
          <form
            className="aih-composer"
            onSubmit={(e) => {
              e.preventDefault();
              submit(input);
            }}
          >
            <div className="aih-composer__row">
              <textarea
                ref={inputRef}
                name="message"
                className="aih-textarea"
                autoComplete="off"
                enterKeyHint="send"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                    e.preventDefault();
                    submit(input);
                  }
                }}
                rows={1}
                maxLength={MAX_INPUT}
                placeholder={t.inputPlaceholder}
                aria-label={t.inputPlaceholder}
              />
              {busy ? (
                <button type="button" className="aih-send is-stop" onClick={() => stop()} aria-label={t.stop} title={t.stop}>
                  <ChatIcon name="stop" />
                </button>
              ) : (
                <button type="submit" className="aih-send" aria-label={t.send} title={t.send} disabled={!input.trim() || offline}>
                  <ChatIcon name="arrow-right" />
                </button>
              )}
            </div>
            {((messages.length > 0 && !forwardOnScreen) || input.length > MAX_INPUT - 200) && (
              <div className="aih-composer__meta">
                {messages.length > 0 && !forwardOnScreen && (
                  <button
                    type="button"
                    className="aih-human"
                    onClick={() => submit(t.humanRequestMessage)}
                    disabled={busy || offline}
                  >
                    <ChatIcon name="headset" />
                    {t.talkToHuman}
                  </button>
                )}
                {input.length > MAX_INPUT - 200 && (
                  <span className="aih-count is-near" aria-live="polite">
                    {input.length}/{MAX_INPUT}
                  </span>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </>
  );
}

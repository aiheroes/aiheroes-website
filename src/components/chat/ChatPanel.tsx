// The chat panel (SDD D2 + UX audit 2026-08-22): streaming with smoothed cadence,
// scroll pinning (never yank), suggestions, source chips, tool cards, feedback,
// undo-able clear, escalation, full keyboard/reader accessibility. Lazy-loaded.

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { ArrowDown, ChevronDown, RotateCcw, Send, Square, ThumbsDown, ThumbsUp, X } from 'lucide-react';
import { ChatMarkdown } from './Markdown';
import './chat.css';
import {
  ensureToken,
  getConversationId,
  getSessionId,
  loadMessages,
  markDisclosed,
  resetConversation,
  restoreConversationId,
  saveMessages,
  wasDisclosed,
} from './session';
import { DISCLOSURE_PATH, STRINGS, suggestionsForPath, type ChatLocale } from './strings';
import { BookingCard, EscalationForm, PageCard, SalonCard, type EscalationPayload } from './ToolCards';

interface Props {
  locale: ChatLocale;
  path: string;
  bookingUrl: string | null;
  closing: boolean;
  onCloseRequest: () => void;
  onClosed: () => void;
}

type MessageSources = { url: string; title: string }[];

// Brand focus ring (UX audit P1) — every interactive element in the widget wears it.
const RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2';

const PIN_THRESHOLD_PX = 72;

function textOf(message: UIMessage): string {
  return message.parts
    .filter((p): p is Extract<typeof p, { type: 'text' }> => p.type === 'text')
    .map((p) => p.text)
    .join('\n');
}

export default function ChatPanel({
  locale,
  path,
  bookingUrl,
  closing,
  onCloseRequest,
  onClosed,
}: Props) {
  const t = STRINGS[locale];
  const [token, setToken] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState(() => getConversationId());
  const [manualEscalation, setManualEscalation] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, 'up' | 'down'>>({});
  const [pinned, setPinned] = useState(true);
  const [announcement, setAnnouncement] = useState('');
  const [undoState, setUndoState] = useState<{ messages: UIMessage[]; convId: string } | null>(
    null,
  );
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
    void ensureToken().then(setToken); // idempotent; the launcher already prewarmed on hover
    markDisclosed();
    // Autofocus is desktop-only: on touch devices it slams the keyboard open (audit P0).
    if (window.matchMedia('(pointer: fine)').matches) inputRef.current?.focus();
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
  }, [messages, status, pinned]);

  const jumpToLatest = useCallback(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
    setPinned(true);
  }, []);

  // Screen-reader narration (audit P0): announce exactly twice per turn — start and
  // the finished answer — instead of re-reading every streamed token.
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
    }
    prevStatus.current = status;
  }, [status, messages, t.thinking]);

  // Basic focus trap + Escape to close.
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') onCloseRequest();
      if (event.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button, a[href], input, textarea, [tabindex]:not([tabindex="-1"])',
        );
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

  const submit = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || busy) return;
      setInput('');
      setPinned(true);
      void sendMessage({ text: trimmed });
    },
    [busy, sendMessage],
  );

  const transcript = useMemo(
    () =>
      messages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .map((m) => ({ role: m.role as 'user' | 'assistant', text: textOf(m) }))
        .filter((m) => m.text),
    [messages],
  );

  async function giveFeedback(messageId: string, rating: 'up' | 'down') {
    setFeedbackGiven((prev) => ({ ...prev, [messageId]: rating }));
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-chat-token': token ?? '' },
        body: JSON.stringify({ sessionId, conversationId, messageId, rating }),
      });
    } catch {
      /* feedback loss is acceptable */
    }
  }

  // Undo-able clear (audit P2): stash the thread, restore on undo within 6s.
  function newConversation() {
    if (messages.length === 0) return;
    setUndoState({ messages, convId: conversationId });
    const id = resetConversation();
    setManualEscalation(false);
    setConversationId(id);
  }

  useEffect(() => {
    if (!undoState) return;
    const timer = setTimeout(() => setUndoState(null), 6000);
    return () => clearTimeout(timer);
  }, [undoState]);

  function restoreUndo() {
    if (!undoState) return;
    restoreConversationId(undoState.convId);
    saveMessages(undoState.messages);
    setConversationId(undoState.convId);
    setUndoState(null);
  }

  const errorKind = useMemo(() => {
    const msg = error?.message ?? '';
    if (msg.includes('budget')) return 'budget';
    if (msg.includes('session') || msg.includes('ip') || msg.includes('429')) return 'rate';
    return error ? 'generic' : null;
  }, [error]);

  function renderPart(part: UIMessage['parts'][number], index: number) {
    if (part.type === 'text') {
      return (
        <div
          key={index}
          className="mb-1 rounded-2xl rounded-bl-md border border-stone-200/80 bg-white px-3.5 py-2.5 shadow-sm last:mb-0"
        >
          <ChatMarkdown text={part.text} />
        </div>
      );
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
        />
      );
    }
    return null;
  }

  const suggestions = suggestionsForPath(locale, path);

  // Drag on the grabber (mobile): follow the finger; release decides —
  // down >120px dismisses, up >60px maximizes, otherwise snap back.
  // Tap and buttons remain the non-gesture alternatives.
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

  return (
    <>
      {/* Backdrop scrim (mobile only): the page stays visible behind the sheet —
          unmistakably a layer, not a new page. Tap to minimize. */}
      <div
        aria-hidden="true"
        onClick={onCloseRequest}
        className={`${closing ? 'aih-backdrop-out' : 'aih-backdrop'} fixed inset-0 z-[94] bg-brand-dark/30 sm:hidden`}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.title}
        onKeyDown={onKeyDown}
        onAnimationEnd={(e) => {
          if (closing && e.target === panelRef.current) onClosed();
        }}
        style={dragOffset > 0 ? { transform: `translateY(${dragOffset}px)` } : undefined}
        className={`${closing ? 'aih-panel-out' : 'aih-panel-in'} aih-sheet ${dragOffset > 0 ? 'aih-dragging' : ''} fixed inset-x-0 bottom-0 z-[95] flex ${maximized ? 'h-[calc(100dvh-0.75rem)]' : 'h-[85dvh]'} touch-manipulation flex-col rounded-t-2xl bg-brand-light pb-[env(safe-area-inset-bottom)] text-brand-dark shadow-2xl [-webkit-tap-highlight-color:transparent] sm:inset-x-auto sm:right-5 sm:bottom-5 sm:h-[38rem] sm:max-h-[calc(100vh-3rem)] sm:w-[25rem] sm:rounded-2xl sm:border sm:border-stone-200 sm:pb-0`}
      >
        {/* Grabber (mobile): tap toggles size, drag dismisses or expands. */}
        <button
          type="button"
          aria-label={maximized ? t.collapse : t.expand}
          onClick={() => setMaximized((m) => !m)}
          onPointerDown={onGrabberPointerDown}
          onPointerMove={onGrabberPointerMove}
          onPointerUp={onGrabberPointerUp}
          onPointerCancel={onGrabberPointerUp}
          className={`flex w-full touch-none items-center justify-center pt-2.5 pb-1.5 sm:hidden ${RING}`}
        >
          <span className="h-1 w-9 rounded-full bg-stone-300" aria-hidden />
        </button>
      {/* Screen-reader status channel (audit P0). */}
      <div className="sr-only" role="status" aria-live="polite">
        {announcement}
      </div>

      {/* Header with the always-visible AI badge (SDD D10). */}
      <header className="flex items-center justify-between gap-2 border-b border-stone-200 px-4 pt-1 pb-3 sm:pt-3">
        <div>
          <p className="font-serif text-base font-semibold">{t.title}</p>
          <p className="text-[0.68rem] font-medium uppercase tracking-wide text-stone-500">
            {t.aiBadge}
          </p>
        </div>
        <div className="flex items-center gap-1">
          {messages.length > 0 && (
            <button
              type="button"
              onClick={newConversation}
              title={t.newChat}
              aria-label={t.newChat}
              className={`rounded-md p-2 text-stone-500 hover:bg-stone-100 hover:text-brand-dark ${RING}`}
            >
              <RotateCcw size={16} aria-hidden />
            </button>
          )}
          {/* Mobile: minimizing to the bubble, not leaving — the conversation stays. */}
          <button
            type="button"
            onClick={onCloseRequest}
            aria-label={t.minimize}
            title={t.minimize}
            className={`rounded-md p-2 text-stone-500 hover:bg-stone-100 hover:text-brand-dark ${RING}`}
          >
            <ChevronDown size={20} aria-hidden className="sm:hidden" />
            <X size={18} aria-hidden className="hidden sm:block" />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div className="relative flex min-h-0 flex-1 flex-col">
        <div
          ref={listRef}
          onScroll={onListScroll}
          className="flex-1 overflow-y-auto overscroll-contain px-4 py-3"
        >
          {showDisclosure && (
            <div className="mb-3 rounded-xl border border-stone-200 bg-white p-3 text-xs leading-relaxed text-stone-600">
              {t.disclosure}{' '}
              <a
                href={DISCLOSURE_PATH[locale]}
                className={`underline underline-offset-2 hover:text-brand-dark ${RING}`}
              >
                {t.disclosureLink}
              </a>
            </div>
          )}

          {messages.length === 0 && (
            <div className="mt-3">
              <p className="mb-3 font-serif text-xl text-balance">{t.suggestionsTitle}</p>
              <div className="flex flex-col items-start gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => submit(s)}
                    className={`rounded-2xl border border-stone-200 bg-white px-3.5 py-2.5 text-left text-sm shadow-sm hover:border-brand-blue hover:text-brand-blue ${RING}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div key={message.id} className="aih-msg-in mb-3">
              {message.role === 'user' ? (
                <div className="ml-8 min-w-0 break-words rounded-2xl rounded-br-md bg-brand-blue px-3.5 py-2.5 text-[0.95rem] text-white">
                  {textOf(message)}
                </div>
              ) : (
                <div className="mr-4 min-w-0">
                  {message.parts.map((part, i) => renderPart(part, i))}
                  {(() => {
                    const sources = (message.metadata as { sources?: MessageSources } | undefined)
                      ?.sources;
                    if (!sources?.length) return null;
                    const unique = sources.filter(
                      (s, i) => sources.findIndex((x) => x.url === s.url) === i,
                    );
                    return (
                      <div className="mt-1.5 flex flex-wrap items-center gap-1">
                        <span className="text-[0.65rem] uppercase tracking-wide text-stone-400">
                          {t.sources}
                        </span>
                        {unique.slice(0, 3).map((s) => (
                          <a
                            key={s.url}
                            href={s.url.replace('https://aiheroes.io', '')}
                            className={`max-w-[12rem] truncate rounded-full bg-stone-100 px-2 py-0.5 text-[0.68rem] text-stone-600 hover:bg-stone-200 ${RING}`}
                          >
                            {s.title}
                          </a>
                        ))}
                      </div>
                    );
                  })()}
                  {textOf(message) && status !== 'streaming' && (
                    <div className="mt-1 flex gap-1">
                      <button
                        type="button"
                        aria-label={t.helpful}
                        disabled={Boolean(feedbackGiven[message.id])}
                        onClick={() => giveFeedback(message.id, 'up')}
                        className={`rounded p-1 ${RING} ${feedbackGiven[message.id] === 'up' ? 'text-brand-blue' : 'text-stone-400 hover:text-stone-600'}`}
                      >
                        <ThumbsUp size={13} aria-hidden />
                      </button>
                      <button
                        type="button"
                        aria-label={t.notHelpful}
                        disabled={Boolean(feedbackGiven[message.id])}
                        onClick={() => giveFeedback(message.id, 'down')}
                        className={`rounded p-1 ${RING} ${feedbackGiven[message.id] === 'down' ? 'text-brand-red' : 'text-stone-400 hover:text-stone-600'}`}
                      >
                        <ThumbsDown size={13} aria-hidden />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          {status === 'submitted' && (
            <p className="text-sm text-stone-500 motion-safe:animate-pulse">{t.thinking}</p>
          )}

          {errorKind && (
            <div className="mb-2 rounded-lg bg-brand-red/10 p-3 text-xs text-brand-red">
              <p>
                {errorKind === 'budget'
                  ? t.errorBudget
                  : errorKind === 'rate'
                    ? t.errorRate
                    : t.errorGeneric}
              </p>
              {errorKind === 'generic' && (
                <button
                  type="button"
                  onClick={() => void regenerate()}
                  className={`mt-1.5 rounded-md bg-brand-red px-2.5 py-1 text-[0.7rem] font-semibold text-white hover:bg-brand-red/85 ${RING}`}
                >
                  {t.retry}
                </button>
              )}
            </div>
          )}
          {(errorKind === 'budget' || manualEscalation) && (
            <EscalationForm
              locale={locale}
              payload={{ reason: 'visitor_request', summary: '' }}
              sessionId={sessionId}
              conversationId={conversationId}
              token={token}
              transcript={transcript}
            />
          )}
        </div>

        {/* Back-to-latest pill: appears only when the visitor scrolled up mid-stream. */}
        {!pinned && busy && (
          <button
            type="button"
            onClick={jumpToLatest}
            className={`absolute bottom-2 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full border border-stone-200 bg-white px-3 py-1 text-[0.7rem] font-medium text-stone-600 shadow-md hover:text-brand-dark ${RING}`}
          >
            <ArrowDown size={12} aria-hidden /> {t.newAnswer}
          </button>
        )}
      </div>

      {/* Undo bar for a cleared conversation (audit P2). */}
      {undoState && (
        <div className="flex items-center justify-between gap-2 border-t border-stone-200 bg-white px-4 py-2 text-xs text-stone-600">
          <span>{t.cleared}</span>
          <button
            type="button"
            onClick={restoreUndo}
            className={`font-semibold text-brand-blue underline underline-offset-2 ${RING}`}
          >
            {t.undo}
          </button>
        </div>
      )}

      {/* Composer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="border-t border-stone-200 px-3 py-2.5"
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
            name="message"
            autoComplete="off"
            enterKeyHint="send"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                submit(input);
              }
            }}
            rows={1}
            maxLength={2000}
            placeholder={t.inputPlaceholder}
            aria-label={t.inputPlaceholder}
            className="max-h-28 flex-1 resize-none rounded-xl border border-stone-300 bg-white px-3.5 py-2.5 text-base field-sizing-content focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/25 sm:text-sm"
          />
          {busy ? (
            <button
              type="button"
              onClick={() => stop()}
              aria-label={t.stop}
              className={`rounded-lg bg-stone-200 p-2.5 text-stone-700 hover:bg-stone-300 ${RING}`}
            >
              <Square size={16} aria-hidden />
            </button>
          ) : (
            <button
              type="submit"
              aria-label={t.send}
              disabled={!input.trim()}
              className={`rounded-lg bg-brand-red p-2.5 text-white hover:bg-brand-red/85 disabled:opacity-40 ${RING}`}
            >
              <Send size={16} aria-hidden />
            </button>
          )}
        </div>
        {/* The human escape hatch is always visible (SDD D7, must-do #2). */}
        <button
          type="button"
          onClick={() => setManualEscalation(true)}
          className={`mt-1.5 text-xs text-stone-500 underline underline-offset-2 hover:text-brand-dark ${RING}`}
        >
          {t.talkToHuman}
        </button>
      </form>
      </div>
    </>
  );
}

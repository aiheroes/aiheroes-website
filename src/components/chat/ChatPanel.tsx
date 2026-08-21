// The chat panel (SDD D2): streaming, suggestions, source chips, tool cards,
// feedback, escalation, accessibility. Loaded lazily on first open.

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { RotateCcw, Send, Square, ThumbsDown, ThumbsUp, X } from 'lucide-react';
import { ChatMarkdown } from './Markdown';
import {
  ensureToken,
  getConversationId,
  getSessionId,
  loadMessages,
  markDisclosed,
  resetConversation,
  saveMessages,
  wasDisclosed,
} from './session';
import { DISCLOSURE_PATH, STRINGS, suggestionsForPath, type ChatLocale } from './strings';
import { BookingCard, EscalationForm, PageCard, SalonCard, type EscalationPayload } from './ToolCards';

interface Props {
  locale: ChatLocale;
  path: string;
  bookingUrl: string | null;
  onClose: () => void;
}

type MessageSources = { url: string; title: string }[];

function textOf(message: UIMessage): string {
  return message.parts
    .filter((p): p is Extract<typeof p, { type: 'text' }> => p.type === 'text')
    .map((p) => p.text)
    .join('\n');
}

export default function ChatPanel({ locale, path, bookingUrl, onClose }: Props) {
  const t = STRINGS[locale];
  const [token, setToken] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState(() => getConversationId());
  const [manualEscalation, setManualEscalation] = useState(false);
  const [feedbackGiven, setFeedbackGiven] = useState<Record<string, 'up' | 'down'>>({});
  const sessionId = useMemo(() => getSessionId(), []);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState('');
  const [showDisclosure] = useState(() => !wasDisclosed());

  useEffect(() => {
    void ensureToken().then(setToken); // also prewarms the function (SDD D3)
    markDisclosed();
    inputRef.current?.focus();
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

  const { messages, sendMessage, status, stop, error, setMessages } = useChat({
    id: conversationId,
    messages: loadMessages<UIMessage>(),
    transport,
  });

  // Continuity (SDD D6): the thread survives navigation, reload and return visits.
  useEffect(() => {
    if (messages.length > 0) saveMessages(messages);
  }, [messages]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, status]);

  // Basic focus trap + Escape to close.
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
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
    [onClose],
  );

  const busy = status === 'submitted' || status === 'streaming';

  const submit = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || busy) return;
      setInput('');
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

  function newConversation() {
    const id = resetConversation();
    setMessages([]);
    setManualEscalation(false);
    setConversationId(id);
  }

  const errorKind = useMemo(() => {
    const msg = error?.message ?? '';
    if (msg.includes('budget')) return 'budget';
    if (msg.includes('session') || msg.includes('ip') || msg.includes('429')) return 'rate';
    return error ? 'generic' : null;
  }, [error]);

  function renderPart(message: UIMessage, part: UIMessage['parts'][number], index: number) {
    if (part.type === 'text') {
      return <ChatMarkdown key={index} text={part.text} />;
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

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label={t.title}
      onKeyDown={onKeyDown}
      className="fixed inset-0 z-[95] flex flex-col bg-white text-brand-dark shadow-2xl dark:bg-stone-900 dark:text-stone-100 sm:inset-auto sm:right-5 sm:bottom-5 sm:h-[38rem] sm:max-h-[calc(100vh-3rem)] sm:w-[25rem] sm:rounded-2xl sm:border sm:border-stone-200 dark:sm:border-stone-700"
    >
      {/* Header with the always-visible AI badge (SDD D10). */}
      <header className="flex items-center justify-between gap-2 border-b border-stone-200 px-4 py-3 dark:border-stone-700">
        <div>
          <p className="text-sm font-semibold">{t.title}</p>
          <p className="text-[0.68rem] font-medium uppercase tracking-wide text-stone-500 dark:text-stone-400">
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
              className="rounded-md p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
            >
              <RotateCcw size={16} aria-hidden />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="rounded-md p-2 text-stone-500 hover:bg-stone-100 dark:hover:bg-stone-800"
          >
            <X size={18} aria-hidden />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-3" aria-live="polite">
        {showDisclosure && (
          <div className="mb-3 rounded-lg bg-stone-100 p-3 text-xs text-stone-600 dark:bg-stone-800 dark:text-stone-300">
            {t.disclosure}{' '}
            <a href={DISCLOSURE_PATH[locale]} className="underline underline-offset-2">
              {t.disclosureLink}
            </a>
          </div>
        )}

        {messages.length === 0 && (
          <div className="mt-2">
            <p className="mb-2 text-sm font-semibold">{t.suggestionsTitle}</p>
            <div className="flex flex-col items-start gap-1.5">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => submit(s)}
                  className="rounded-full border border-stone-300 px-3 py-1.5 text-left text-xs hover:border-brand-blue hover:text-brand-blue dark:border-stone-600"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className="mb-3">
            {message.role === 'user' ? (
              <div className="ml-8 rounded-2xl rounded-br-sm bg-brand-dark px-3 py-2 text-sm text-white">
                {textOf(message)}
              </div>
            ) : (
              <div className="mr-4">
                {message.parts.map((part, i) => renderPart(message, part, i))}
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
                          className="rounded-full bg-stone-100 px-2 py-0.5 text-[0.68rem] text-stone-600 hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700"
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
                      className={`rounded p-1 ${feedbackGiven[message.id] === 'up' ? 'text-brand-blue' : 'text-stone-400 hover:text-stone-600'}`}
                    >
                      <ThumbsUp size={13} aria-hidden />
                    </button>
                    <button
                      type="button"
                      aria-label={t.notHelpful}
                      disabled={Boolean(feedbackGiven[message.id])}
                      onClick={() => giveFeedback(message.id, 'down')}
                      className={`rounded p-1 ${feedbackGiven[message.id] === 'down' ? 'text-brand-red' : 'text-stone-400 hover:text-stone-600'}`}
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
          <p className="text-xs text-stone-400 motion-safe:animate-pulse">{t.thinking}</p>
        )}

        {errorKind && (
          <div className="mb-2 rounded-lg bg-brand-red/10 p-3 text-xs text-brand-red">
            {errorKind === 'budget' ? t.errorBudget : errorKind === 'rate' ? t.errorRate : t.errorGeneric}
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

      {/* Composer */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(input);
        }}
        className="border-t border-stone-200 px-3 py-2.5 dark:border-stone-700"
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={inputRef}
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
            className="max-h-28 flex-1 resize-none rounded-lg border border-stone-300 px-3 py-2 text-sm focus:border-brand-blue focus:outline-none dark:border-stone-600 dark:bg-stone-800"
          />
          {busy ? (
            <button
              type="button"
              onClick={() => stop()}
              aria-label={t.stop}
              className="rounded-lg bg-stone-200 p-2.5 text-stone-700 hover:bg-stone-300 dark:bg-stone-700 dark:text-stone-200"
            >
              <Square size={16} aria-hidden />
            </button>
          ) : (
            <button
              type="submit"
              aria-label={t.send}
              disabled={!input.trim()}
              className="rounded-lg bg-brand-red p-2.5 text-white hover:bg-brand-red/85 disabled:opacity-40"
            >
              <Send size={16} aria-hidden />
            </button>
          )}
        </div>
        {/* The human escape hatch is always visible (SDD D7, must-do #2). */}
        <button
          type="button"
          onClick={() => setManualEscalation(true)}
          className="mt-1.5 text-[0.7rem] text-stone-500 underline underline-offset-2 hover:text-brand-dark dark:hover:text-stone-200"
        >
          {t.talkToHuman}
        </button>
      </form>
    </div>
  );
}

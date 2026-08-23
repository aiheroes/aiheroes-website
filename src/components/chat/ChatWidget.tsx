// Widget island root (SDD D1 + UX audit): a tiny launcher; the panel bundle loads on
// first open. Prewarms the backend on hover/focus intent. Gated by
// PUBLIC_CHAT_ENABLED at build time, or per-browser via ?chat=1 (preview).

import React, { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { ensureToken, isChatEnabled } from './session';
import { STRINGS, type ChatLocale } from './strings';

const ChatPanel = lazy(() => import('./ChatPanel'));

interface Props {
  locale: ChatLocale;
  path: string;
  enabled: boolean;
  bookingUrl?: string | null;
}

export default function ChatWidget({ locale, path, enabled, bookingUrl = null }: Props) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const t = STRINGS[locale];

  useEffect(() => {
    setVisible(isChatEnabled(enabled));
  }, [enabled]);

  // Prewarm on intent (audit P1): hovering/focusing the launcher warms the function
  // and fetches the widget token before the click. Idempotent and model-call-free.
  const prewarm = useCallback(() => {
    void ensureToken();
    void import('./ChatPanel'); // also start fetching the panel bundle
  }, []);

  const finalizeClose = useCallback(() => {
    setClosing(false);
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus()); // focus returns (audit P0)
  }, []);

  const requestClose = useCallback(() => setClosing(true), []);

  // Fallback in case the close animation never fires its end event.
  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(finalizeClose, 300);
    return () => clearTimeout(timer);
  }, [closing, finalizeClose]);

  if (!visible) return null;

  return (
    <>
      {!open && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen(true)}
          onMouseEnter={prewarm}
          onFocus={prewarm}
          aria-label={t.launcherLabel}
          className="fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-[94] flex size-[3.25rem] touch-manipulation items-center justify-center rounded-full bg-brand-dark text-white shadow-lg transition-transform [-webkit-tap-highlight-color:transparent] hover:scale-105 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          <MessageCircle size={22} aria-hidden />
        </button>
      )}
      {open && (
        <Suspense fallback={null}>
          <ChatPanel
            locale={locale}
            path={path}
            bookingUrl={bookingUrl}
            closing={closing}
            onCloseRequest={requestClose}
            onClosed={finalizeClose}
          />
        </Suspense>
      )}
    </>
  );
}

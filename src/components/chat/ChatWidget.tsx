// Widget island root (SDD D1 + UX audit): a tiny launcher; the panel bundle loads on
// first open. Prewarms the backend on hover/focus intent. On by default; gated by
// PUBLIC_CHAT_ENABLED=false at build time (kill switch), or re-enabled per browser via ?chat=1.

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
  sourceChips?: boolean;
}

export default function ChatWidget({
  locale,
  path,
  enabled,
  bookingUrl = null,
  sourceChips = true,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  // Pages with a hero ask the launcher to grow into a labelled pill once the hero is
  // scrolled past ("Wat wil je bouwen?"), so there is one floating element, not two.
  const [ctaLabel, setCtaLabel] = useState('');
  const [ctaShown, setCtaShown] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const t = STRINGS[locale];

  useEffect(() => {
    setVisible(isChatEnabled(enabled));
  }, [enabled]);

  // The site's sticky "Wat wil je bouwen?" CTA opens the chat while the assistant is
  // live (decision A5 26-08): one conversation entry point instead of two buttons.
  useEffect(() => {
    const open = () => {
      setVisible(true);
      setOpen(true);
    };
    window.addEventListener('aih:open-chat', open);
    return () => window.removeEventListener('aih:open-chat', open);
  }, []);

  useEffect(() => {
    const onCta = (e: Event) => {
      const { show, label } = (e as CustomEvent<{ show: boolean; label?: string }>).detail ?? {};
      if (label) setCtaLabel(label); // kept while collapsing so the text doesn't vanish mid-animation
      setCtaShown(Boolean(show && label));
    };
    window.addEventListener('aih:chat-cta', onCta);
    return () => window.removeEventListener('aih:chat-cta', onCta);
  }, []);

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
          aria-label={ctaShown ? ctaLabel : t.launcherLabel}
          className="fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] z-[94] flex h-[3.25rem] min-w-[3.25rem] touch-manipulation items-center rounded-full bg-brand-blue px-[15px] text-white shadow-lg transition-transform [-webkit-tap-highlight-color:transparent] hover:scale-105 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2 motion-reduce:transition-none"
        >
          <MessageCircle size={22} aria-hidden className="shrink-0" />
          <span
            aria-hidden
            className={`overflow-hidden whitespace-nowrap font-medium transition-[max-width,opacity,margin] duration-500 ease-out motion-reduce:transition-none ${
              ctaShown ? 'ml-2.5 mr-1 max-w-[16rem] opacity-100' : 'ml-0 max-w-0 opacity-0'
            }`}
          >
            {ctaLabel}
          </span>
        </button>
      )}
      {open && (
        <Suspense fallback={null}>
          <ChatPanel
            locale={locale}
            path={path}
            bookingUrl={bookingUrl}
            sourceChips={sourceChips}
            closing={closing}
            onCloseRequest={requestClose}
            onClosed={finalizeClose}
          />
        </Suspense>
      )}
    </>
  );
}

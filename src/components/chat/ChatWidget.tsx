// Widget island root (SDD D1 + UX audit): a small launcher; the panel bundle loads on
// first open. Prewarms the backend on hover/focus/touch intent. On by default; gated by
// PUBLIC_CHAT_ENABLED=false at build time (kill switch), or re-enabled per browser via ?chat=1.
//
// Launcher states (house style 2026-10): labelled ink block; "continue" label when a
// conversation is waiting; icon-only next to the footer and contact form so it never covers
// them; hidden while the full-screen menu is open. The island persists across view
// transitions, so the observed elements are picked up again after every navigation.

import React, { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { ChatIcon } from './ChatIcon';
import { ensureToken, isChatEnabled, loadMessages } from './session';
import { STRINGS, type ChatLocale } from './strings';
import './chat.css';

const ChatPanel = lazy(() => import('./ChatPanel'));

/** Elements the launcher steps back from: it shrinks to its icon while they are on screen. */
const MAKE_ROOM = '.hs-footer, .hs-contact__form';
/** On phones also the cover's tabs and pause button, which keep room for the icon (huisstijl.css). */
const MAKE_ROOM_PHONE = '.hs-cover__progress';
const PHONE = '(max-width: 639px)';

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
  const [hasThread, setHasThread] = useState(false);
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Only the very first appearance gets the delayed rise; coming back from the panel is a quick fade.
  const [isNew, setIsNew] = useState(true);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const t = STRINGS[locale];

  useEffect(() => {
    setVisible(isChatEnabled(enabled));
    setHasThread(loadMessages().length > 0);
  }, [enabled]);

  // The 404 page and the AI-assistant page open the chat from their own buttons.
  useEffect(() => {
    const openChat = () => {
      setVisible(true);
      setOpen(true);
    };
    window.addEventListener('aih:open-chat', openChat);
    return () => window.removeEventListener('aih:open-chat', openChat);
  }, []);

  useEffect(() => {
    const onMenu = (e: Event) => setMenuOpen(Boolean((e as CustomEvent<{ open: boolean }>).detail?.open));
    window.addEventListener('hs:menu', onMenu);
    return () => window.removeEventListener('hs:menu', onMenu);
  }, []);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const inView = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) inView.add(entry.target);
        else inView.delete(entry.target);
      }
      setCompact(inView.size > 0);
    });
    const phone = window.matchMedia(PHONE);
    const watch = () => {
      observer.disconnect();
      inView.clear();
      setCompact(false);
      const selector = phone.matches ? `${MAKE_ROOM}, ${MAKE_ROOM_PHONE}` : MAKE_ROOM;
      document.querySelectorAll(selector).forEach((el) => observer.observe(el));
    };
    watch();
    document.addEventListener('astro:page-load', watch);
    phone.addEventListener('change', watch);
    return () => {
      document.removeEventListener('astro:page-load', watch);
      phone.removeEventListener('change', watch);
      observer.disconnect();
    };
  }, []);

  // Prewarm on intent (audit P1): warms the function and fetches the widget token before
  // the click. Idempotent and model-call-free.
  const prewarm = useCallback(() => {
    void ensureToken();
    void import('./ChatPanel'); // also start fetching the panel bundle
  }, []);

  const finalizeClose = useCallback(() => {
    setClosing(false);
    setOpen(false);
    setIsNew(false);
    setHasThread(loadMessages().length > 0);
    requestAnimationFrame(() => launcherRef.current?.focus()); // focus returns (audit P0)
  }, []);

  const requestClose = useCallback(() => setClosing(true), []);

  // Fallback in case the close animation never fires its end event.
  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(finalizeClose, 320);
    return () => clearTimeout(timer);
  }, [closing, finalizeClose]);

  if (!visible) return null;

  const label = hasThread ? t.launcherContinue : t.launcherLabel;
  const classes = [
    'aih',
    'aih-launcher',
    isNew && 'is-new',
    compact && 'is-compact',
    menuOpen && 'is-hidden',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      {!open && (
        <button
          ref={launcherRef}
          type="button"
          className={classes}
          onClick={() => setOpen(true)}
          onMouseEnter={prewarm}
          onFocus={prewarm}
          onTouchStart={prewarm}
          aria-haspopup="dialog"
          aria-hidden={menuOpen || undefined}
          tabIndex={menuOpen ? -1 : undefined}
        >
          <ChatIcon name="comments" />
          <span className="aih-launcher__label">{label}</span>
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

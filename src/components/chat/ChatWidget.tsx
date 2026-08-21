// Widget island root (SDD D1): a tiny launcher; the panel bundle loads on first open.
// Gated by PUBLIC_CHAT_ENABLED at build time, or per-browser via ?chat=1 (preview).

import React, { lazy, Suspense, useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { isChatEnabled } from './session';
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
  const t = STRINGS[locale];

  useEffect(() => {
    setVisible(isChatEnabled(enabled));
  }, [enabled]);

  if (!visible) return null;

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={t.launcherLabel}
          className="fixed right-5 bottom-5 z-[94] flex h-13 w-13 items-center justify-center rounded-full bg-brand-dark text-white shadow-lg transition-transform hover:scale-105 motion-reduce:transition-none dark:bg-white dark:text-brand-dark"
          style={{ width: '3.25rem', height: '3.25rem' }}
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
            onClose={() => setOpen(false)}
          />
        </Suspense>
      )}
    </>
  );
}

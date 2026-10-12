// Streaming-safe markdown renderer with the render-layer link allowlist (SDD D9 layer 7):
// URLs outside the allowlist render as plain text, so a hallucinated link is
// structurally impossible to click. Memoised: during streaming only the growing
// text part re-parses, everything else is stable (UX audit P1).

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LINK_ALLOWLIST } from './strings';

function isAllowed(href: string | undefined): boolean {
  if (!href) return false;
  if (href.startsWith('/') || href.startsWith('#')) return true;
  // Mail links only to our own addresses.
  if (href.startsWith('mailto:')) return /@aiheroes\.io$/i.test(href.slice(7).split('?')[0]);
  try {
    const host = new URL(href).hostname;
    return LINK_ALLOWLIST.some((domain) => host === domain || host.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}

/** External allowlisted links (Luma, the booking calendar) open in a new tab; site links stay same-tab. */
function isExternal(href: string): boolean {
  if (href.startsWith('/') || href.startsWith('#') || href.startsWith('mailto:')) return false;
  try {
    const host = new URL(href).hostname;
    return !(host === 'aiheroes.io' || host.endsWith('.aiheroes.io'));
  } catch {
    return false;
  }
}

export const ChatMarkdown = React.memo(function ChatMarkdown({
  text,
  className = 'aih-prose',
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) =>
            isAllowed(href) ? (
              <a href={href} {...(href && isExternal(href) ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                {children}
              </a>
            ) : (
              <span>{children}</span>
            ),
          img: () => null,
          table: ({ children }) => (
            <div className="aih-tablewrap">
              <table>{children}</table>
            </div>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
});

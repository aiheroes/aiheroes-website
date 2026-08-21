// Streaming-safe markdown renderer with the render-layer link allowlist (SDD D9 layer 7):
// URLs outside the allowlist render as plain text, so a hallucinated link is
// structurally impossible to click.

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { LINK_ALLOWLIST } from './strings';

function isAllowed(href: string | undefined): boolean {
  if (!href) return false;
  if (href.startsWith('/') || href.startsWith('#')) return true;
  try {
    const host = new URL(href).hostname;
    return LINK_ALLOWLIST.some((domain) => host === domain || host.endsWith(`.${domain}`));
  } catch {
    return false;
  }
}

export function ChatMarkdown({ text }: { text: string }) {
  return (
    <div className="chat-prose text-[0.9rem] leading-relaxed [&_p]:mb-2 [&_p:last-child]:mb-0 [&_ul]:mb-2 [&_ul]:list-disc [&_ul]:pl-4 [&_ol]:mb-2 [&_ol]:list-decimal [&_ol]:pl-4 [&_li]:mb-1 [&_strong]:font-semibold">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) =>
            isAllowed(href) ? (
              <a
                href={href}
                className="text-brand-blue underline decoration-brand-blue/40 underline-offset-2 hover:decoration-brand-blue"
              >
                {children}
              </a>
            ) : (
              <span>{children}</span>
            ),
          img: () => null,
          table: ({ children }) => (
            <div className="overflow-x-auto">
              <table className="text-xs">{children}</table>
            </div>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}

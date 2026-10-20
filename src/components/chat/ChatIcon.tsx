// The house icon set (IconPark Outline, stroke 4, square ends, mitred joins) for the chat island,
// from the same ICONS map the Astro components use (src/components/hs/hs.ts). Like HsIcon, every
// stroke has pathLength=1, so `draw` lets the icon draw itself when it appears (chat.css).

import React from 'react';
import { ICONS, type IconName } from '../hs/hs';

export function ChatIcon({
  name,
  className,
  draw = false,
  delay,
}: {
  name: IconName;
  className?: string;
  /** Draw the strokes on mount (reduced motion: drawn at once). */
  draw?: boolean;
  /** Start of the draw, in ms. */
  delay?: number;
}) {
  const classes = ['aih-icon', draw && 'is-draw', className].filter(Boolean).join(' ');
  const style = delay ? ({ '--aih-d': `${delay}ms` } as React.CSSProperties) : undefined;
  return (
    <svg className={classes} style={style} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      {(ICONS[name] as readonly string[]).map((d, i) =>
        d.startsWith('F:') ? (
          <path key={i} d={d.slice(2)} className="is-fill" />
        ) : d.startsWith('FS:') ? (
          <path key={i} d={d.slice(3)} className="is-fill is-stroke" />
        ) : (
          <path key={i} d={d} pathLength={1} />
        ),
      )}
    </svg>
  );
}

// The house icon set (IconPark Outline, stroke 4, square ends, mitred joins) for the chat island,
// from the same ICONS map the Astro components use (src/components/hs/hs.ts).

import React from 'react';
import { ICONS, type IconName } from '../hs/hs';

export function ChatIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={`aih-icon${className ? ` ${className}` : ''}`} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      {(ICONS[name] as readonly string[]).map((d, i) =>
        d.startsWith('F:') ? (
          <path key={i} d={d.slice(2)} className="is-fill" />
        ) : d.startsWith('FS:') ? (
          <path key={i} d={d.slice(3)} className="is-fill is-stroke" />
        ) : (
          <path key={i} d={d} />
        ),
      )}
    </svg>
  );
}

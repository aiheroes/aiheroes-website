// The assistant's mark: the AI Heroes icon (public/Brand_Package/Icon), "AI" in the open corner and
// the H inside the frame, full colour on light grounds and white on the blue header (the brand's
// White_BlueBG variant). Its frame is the one moving part: `draw` draws it once (the panel opens),
// `think` draws and erases it in a loop while the assistant works, like a pen going round the
// logo. A mask follows the frame's centre line, so the bars keep their own colours while they draw
// (chat.css: .aih-mark).
//
// The frame is redrawn on a 32-unit grid with bars of exactly 2 units (the icon's 46.661 of 740,
// snapped), so at 32px every bar is a whole number of pixels at 1x, 1.5x, 2x and 3x and all four
// sides render equally thick (DESIGN.md, Pixel Frame Rule). The letters keep the icon's own shapes.

import React, { useId } from 'react';

/** The frame's centre line: from the top bar's start, clockwise, to the left bar's top. */
const PEN = 'M17 6H29V31H5V11';
const CREAM = '#FDFCF8';
/** The icon's letters live in its 740-unit artwork; this maps them onto the 32-unit grid. */
const LETTERS = 'scale(0.0432432) translate(-222.4 -234.7)';

export function ChatMark({
  mode = 'still',
  tone = 'color',
  className,
}: {
  mode?: 'still' | 'draw' | 'think';
  /** `white` for the blue header, `color` on cream and paper. */
  tone?: 'color' | 'white';
  className?: string;
}) {
  const id = `aih-mark-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const masked = mode !== 'still';
  const white = tone === 'white';
  return (
    <svg className={`aih-mark is-${mode}${className ? ` ${className}` : ''}`} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <defs>
        {!white && (
          <>
            <linearGradient id={`${id}-r`} gradientUnits="userSpaceOnUse" x1="29" y1="7" x2="29" y2="32">
              <stop offset="0" stopColor="#D9534F" />
              <stop offset=".15" stopColor="#D9534F" />
              <stop offset=".92" stopColor="#1C1917" />
            </linearGradient>
            <linearGradient id={`${id}-b`} gradientUnits="userSpaceOnUse" x1="4" y1="31" x2="30" y2="31">
              <stop offset="0" stopColor="#2563EB" />
              <stop offset=".15" stopColor="#2563EB" />
              <stop offset=".92" stopColor="#1C1917" />
            </linearGradient>
          </>
        )}
        {masked && (
          <mask id={`${id}-m`} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <path className="aih-mark__pen" d={PEN} pathLength={1} />
          </mask>
        )}
      </defs>
      <g mask={masked ? `url(#${id}-m)` : undefined} shapeRendering="crispEdges">
        <rect x="17" y="5" width="13" height="2" fill={white ? CREAM : '#D9534F'} />
        <rect x="28" y="5" width="2" height="27" fill={white ? CREAM : `url(#${id}-r)`} />
        <rect x="4" y="30" width="26" height="2" fill={white ? CREAM : `url(#${id}-b)`} />
        <rect x="4" y="11" width="2" height="21" fill={white ? CREAM : '#2563EB'} />
      </g>
      <g fill={white ? CREAM : '#1C1917'} transform={LETTERS}>
        <path d="M349.8197,270.34005c3.91748,14.65021,7.57959,28.12518,10.97437,40.37769,4.76172,17.17456,9.35034,32.56281,13.77515,46.16022l45.05273,131.59979h49.81934l-90.45215-253.33417h-57.63867l-88.41064,253.33417h49.64624l43.52637-131.59979c4.07837-13.1463,8.41626-28.36139,13.00513-45.64984,3.28784-12.3844,6.85913-26.0285,10.70215-40.88806Z" />
        <rect x="517.81132" y="235.14358" width="45.39453" height="253.33417" />
        <polygon points="563.20585 685.95626 681.03104 685.95626 681.03104 796.30324 726.42997 796.30324 726.42997 542.96908 681.03104 542.96908 681.03104 647.70211 563.20585 647.70211 563.20585 542.96908 517.81132 542.96908 517.81132 796.30324 563.20585 796.30324 563.20585 685.95626" />
      </g>
    </svg>
  );
}

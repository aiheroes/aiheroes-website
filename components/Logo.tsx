import React from 'react';

// 16 Brand_Package SVGs (8 color variants × 2 marks), inlined as raw strings so
// gradient fills and baked-in backgrounds render 1:1 with the brand deliverable.
import rawLogoFullColorTransparent from '../assets/brand/logo-fullcolor-transparent.svg?raw';
import rawLogoFullColorLightBg from '../assets/brand/logo-fullcolor-light-bg.svg?raw';
import rawLogoWhiteTransparent from '../assets/brand/logo-white-transparent.svg?raw';
import rawLogoWhiteDarkBg from '../assets/brand/logo-white-dark-bg.svg?raw';
import rawLogoWhiteRedBg from '../assets/brand/logo-white-red-bg.svg?raw';
import rawLogoWhiteBlueBg from '../assets/brand/logo-white-blue-bg.svg?raw';
import rawLogoBlackTransparent from '../assets/brand/logo-black-transparent.svg?raw';

import rawIconFullColorTransparent from '../assets/brand/icon-fullcolor-transparent.svg?raw';
import rawIconFullColorLightBg from '../assets/brand/icon-fullcolor-light-bg.svg?raw';
import rawIconWhiteTransparent from '../assets/brand/icon-white-transparent.svg?raw';
import rawIconWhiteDarkBg from '../assets/brand/icon-white-dark-bg.svg?raw';
import rawIconWhiteRedBg from '../assets/brand/icon-white-red-bg.svg?raw';
import rawIconWhiteBlueBg from '../assets/brand/icon-white-blue-bg.svg?raw';
import rawIconBlackTransparent from '../assets/brand/icon-black-transparent.svg?raw';

// Make gradient IDs unique per render to avoid collisions when multiple SVGs
// are inlined on the same page (e.g. navbar + press page).
let logoInstanceId = 0;
function makeUniqueIds(svg: string): string {
  const p = `l${++logoInstanceId}`;
  return svg
    .replace(/id="aih-gRight"/g, `id="${p}-gRight"`).replace(/url\(#aih-gRight\)/g, `url(#${p}-gRight)`)
    .replace(/id="aih-gBottom"/g, `id="${p}-gBottom"`).replace(/url\(#aih-gBottom\)/g, `url(#${p}-gBottom)`)
    .replace(/id="aih-iRight"/g, `id="${p}-iRight"`).replace(/url\(#aih-iRight\)/g, `url(#${p}-iRight)`)
    .replace(/id="aih-iBottom"/g, `id="${p}-iBottom"`).replace(/url\(#aih-iBottom\)/g, `url(#${p}-iBottom)`);
}

export type LogoVariant = 'icon' | 'wordmark';
export type LogoColorVariant =
  | 'fullcolor'        // FullColor_Transparent — default, light surfaces
  | 'fullcolor-light'  // FullColor_LightBG     — light bg baked in
  | 'white'            // White_Transparent     — solid white on transparent
  | 'white-dark'       // White_DarkBG          — solid white on dark bg
  | 'white-red'        // White_RedBG           — solid white on red bg
  | 'white-blue'       // White_BlueBG          — solid white on blue bg
  | 'black'            // Black_Transparent     — solid black on transparent
  | 'mono';            // legacy alias → 'black'

interface LogoProps {
  className?: string;
  variant?: LogoVariant;
  colorVariant?: LogoColorVariant;
}

const LOGO_SVGS: Record<Exclude<LogoColorVariant, 'mono'>, string> = {
  'fullcolor':       rawLogoFullColorTransparent,
  'fullcolor-light': rawLogoFullColorLightBg,
  'white':           rawLogoWhiteTransparent,
  'white-dark':      rawLogoWhiteDarkBg,
  'white-red':       rawLogoWhiteRedBg,
  'white-blue':      rawLogoWhiteBlueBg,
  'black':           rawLogoBlackTransparent,
};

const ICON_SVGS: Record<Exclude<LogoColorVariant, 'mono'>, string> = {
  'fullcolor':       rawIconFullColorTransparent,
  'fullcolor-light': rawIconFullColorLightBg,
  'white':           rawIconWhiteTransparent,
  'white-dark':      rawIconWhiteDarkBg,
  'white-red':       rawIconWhiteRedBg,
  'white-blue':      rawIconWhiteBlueBg,
  'black':           rawIconBlackTransparent,
};

function injectClassName(svg: string, className?: string): string {
  if (!className) return svg;
  // Replace the class attribute if present, otherwise insert one into the opening <svg ...> tag.
  if (/<svg[^>]*\sclass=/.test(svg)) {
    return svg.replace(/<svg([^>]*)\sclass="[^"]*"/, `<svg$1 class="${className}"`);
  }
  return svg.replace('<svg', `<svg class="${className}"`);
}

export const Logo: React.FC<LogoProps> = ({ className, variant = 'icon', colorVariant = 'fullcolor' }) => {
  const resolvedColor = colorVariant === 'mono' ? 'black' : colorVariant;
  const source = variant === 'wordmark' ? LOGO_SVGS[resolvedColor] : ICON_SVGS[resolvedColor];
  const html = injectClassName(makeUniqueIds(source), className);
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

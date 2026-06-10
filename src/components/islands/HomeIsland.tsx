import React from 'react';
import { HomePage } from '../../../pages/HomePage';
import type { Language } from '../../data/types';

// Wraps the existing React HomePage so it can run as a single Astro island,
// preserving the exact snap-scroll experience. react-router is handled by the
// shim aliased in astro.config.mjs.
export default function HomeIsland({ lang }: { lang: Language }) {
  return <HomePage defaultLang={lang} />;
}

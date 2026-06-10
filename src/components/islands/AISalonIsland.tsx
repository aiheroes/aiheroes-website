import React from 'react';
import { AISalonPage } from '../../../pages/AISalonPage';
import type { Language } from '../../data/types';

// The AI Salon event page renders its own navbar/footer, Luma checkout modal,
// speakers/sponsors grids and RSVP flow. Rendered as an island; the Event schema
// and SEO meta are baked at build time in the .astro page.
export default function AISalonIsland({ lang }: { lang: Language }) {
  return <AISalonPage lang={lang} />;
}

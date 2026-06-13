import { PersNL } from '../../../pages/nl/Pers';
import { PressEN } from '../../../pages/en/Press';
import type { Language } from '../../data/types';

// Press/media pages render their own nav, hero, brand-bible sections and footer
// (they don't use PageLayout). Rendered as an island so the LogoShowcase visuals
// stay faithful; SEO title/description are baked at build time in the .astro page.
export default function PressIsland({ lang }: { lang: Language }) {
  return lang === 'nl' ? <PersNL /> : <PressEN />;
}

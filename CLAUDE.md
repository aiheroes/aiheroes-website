# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository

GitHub: https://github.com/AIHeroes/aiheroes-website — **public**, owned by the AIHeroes org. Auto-deploys to Netlify on push to `master`.

## Commands

```bash
npm run dev      # Start dev server on port 3000
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

No test framework is configured.

## Architecture

**Tech Stack:** React 19, TypeScript, Vite, React Router DOM, Tailwind CSS

**Deployment:** Netlify (static SPA with client-side routing, configured in `netlify.toml`)

### Bilingual Structure (NL/EN)

All content is bilingual. The site uses route-based language separation:
- Dutch: `/nl/diensten/...`, `/nl/over-ons/...`
- English: `/en/services/...`, `/en/about/...`
- Homepage (`/`) detects browser language, defaults to Dutch

**Content source:** All UI text lives in `constants.ts` as `CONTENT` object keyed by `'nl'` or `'en'`. Pages pull content via `CONTENT[lang]`.

**Language persistence:** Stored in localStorage key `aiheroes-lang`.

**URL mapping between languages:** When switching languages, routes transform (e.g., `/nl/diensten/` ↔ `/en/services/`). This logic exists in:
- `hooks/useSEO.ts` - `calculateAlternatePath()` function
- `components/PageLayout.tsx` - `getAlternateUrl()` method

### Routing

All routes are defined in `App.tsx`. Each page has NL and EN versions as separate components:
- `pages/nl/` - Dutch pages
- `pages/en/` - English pages

Naming conventions:
- Dutch components: `ComponentNL` (e.g., `AIFoundationsNL`)
- English components: `ComponentEN` (e.g., `AIFoundationsEN`)

### Page Structure

Subpages use `PageLayout` component which provides:
- SEO meta tags via `useSEO` hook
- Navbar with scroll-based theme switching
- Hero section with title/subtitle
- Optional contact form
- Footer

Homepage (`pages/HomePage.tsx`) has its own layout with section-based composition.

### Navbar Theming

The navbar has a sophisticated scroll-based color system that creates a "split effect" as it overlaps different page sections. Theme state is managed via `splitPosition`, `topTheme`, and `bottomTheme` props.

### SEO

Custom `useSEO` hook in `hooks/useSEO.ts` manages:
- Document title
- Meta descriptions
- Open Graph / Twitter cards
- Canonical URLs
- Hreflang tags for language alternates

Domain is hardcoded as `https://aiheroes.io` in `useSEO.ts`.

### Adding New Pages

1. Create component in `pages/nl/` and `pages/en/` directories
2. Add routes to `App.tsx`
3. Use `PageLayout` wrapper with appropriate `lang` prop
4. If URL segments differ between languages, add mapping to `calculateAlternatePath()` in `useSEO.ts` and `getAlternateUrl()` in `PageLayout.tsx`

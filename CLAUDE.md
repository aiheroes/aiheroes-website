# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository

GitHub: https://github.com/AIHeroes/aiheroes-website — **public**, owned by the AIHeroes org. Auto-deploys to Netlify on push to `master`.

## Commands

```bash
npm run dev      # Start Astro dev server on port 3001 (3000 is shared with sister project ivosw)
npm run build    # Production build (static SSG) to dist/
npm run preview  # Preview the production build
npm run check    # astro check — type-checks .astro/.ts/.tsx (run before committing)
```

No unit-test framework is configured; `npm run check` is the gate.

## Architecture

**Tech Stack:** Astro 5 (static output / SSG), React 19 islands via `@astrojs/react`, Tailwind CSS 4 via `@tailwindcss/vite`, MDX content collections via `@astrojs/mdx`, `@astrojs/sitemap`, `@astrojs/netlify`.

**Deployment:** Netlify, pure static. `astro.config.mjs` sets `site: 'https://aiheroes.io'`, `trailingSlash: 'never'`, and `build.format: 'file'` (emits `page.html`, not `page/index.html`, so Netlify serves no-slash URLs with a 200 instead of 301ing to a trailing slash — this matches the no-slash canonicals/sitemap/hreflang).

### Routing

Pages are `.astro` files under `src/pages/{nl,en}/...`, mirrored per language:
- Dutch: `/nl/diensten/...`, `/nl/over-ons/...`
- English: `/en/services/...`, `/en/about/...`
- Homepage (`/`, `/en`) renders the legacy React `HomePage` as a single island to preserve the snap-scroll feel; the body is still SSR'd for SEO.
- `src/pages/404.astro` is a client-side bare-path catch-all (replicates the old `BarePathRedirect`): prefix-less URLs like `/over-ons`, `/about`, `/ai-salon` resolve to the right `/nl|/en` page.

### Islands vs static pages

- **Islands** (`client:load`): complex/interactive legacy React pages — homepage, diensten/services overviews, press, careers listings, AI Salon, /hanze. Each is wrapped in `src/components/islands/*Island.tsx` and rendered inside `BaseLayout` with `noChrome`. SSR'd to HTML for SEO; schema is baked server-side in the `.astro` wrapper.
- **Static** (zero-JS): simple content pages — services, about prose, legal (noindex), cases, job detail — built with `SubpageLayout.astro`.

The islands reuse legacy React components via `src/lib/react-router-shim.tsx`, aliased to `react-router-dom` in `astro.config.mjs` (`Link`→`<a>`, `useNavigate`→`window.location`), so any legacy page runs as an island without a Router.

### Layouts & SEO

- `src/layouts/BaseLayout.astro` reproduces the old `useSEO` hook at **build time**: title/seoTitle/description/OG/Twitter/canonical/hreflang/robots/JSON-LD, plus the two hidden Netlify form definitions (`contact`, `application`) and `<ClientRouter />` view transitions. Props include `seoTitle`, `jsonLd`, `noindex`, `noChrome`.
- `src/layouts/SubpageLayout.astro` = static Navbar/Footer + hero + `<slot/>` + `PageContactForm` island.
- Noindexed paths live in `src/data/seo.ts` (`NOINDEX_PATHS`) and are filtered out of the sitemap.

### Content & data

- **`constants.ts` (root)** is still the single source of all bilingual UI copy (`CONTENT` keyed by `'nl'`/`'en'`), re-exported through `src/data/content.ts` during the migration. `types.ts` (root) likewise via `src/data/types.ts`.
- `src/data/i18n.ts` — single slug-map source (`alternatePath`, `SEGMENT_NL_TO_EN`) driving language switching + hreflang. (Replaced the old three duplicated copies in `useSEO.ts` / `PageLayout.tsx`.)
- `src/data/schema.ts` — JSON-LD builders (e.g. `ProfessionalService`).
- **Content Collections** (`src/content.config.ts`): `articles` and `cases` as MDX with frontmatter schemas. Routes: `src/pages/{nl,en}/resources/[slug].astro` and `cases/[slug].astro` via `getStaticPaths`, with auto Article schema. The cases loader sets `generateId` to include the lang subfolder so `nl/x.mdx` and `en/x.mdx` don't collide.

### Legacy React tree (still live)

`pages/`, `components/`, `hooks/`, `constants.ts`, `types.ts` at the repo root are the original Vite SPA. They are **not dead** — the islands import from them, and `constants.ts` is the copy source. Don't delete them; full cutover (inlining `constants.ts` into `src/data`, removing the legacy tree) is a deliberate later step.

## Adding pages / content

- **New static page:** create `src/pages/{nl,en}/.../x.astro` using `SubpageLayout`; copy the old `PageLayout` props + body, converting `className`→`class`, `<Link to>`→`<a href>`. Add UI copy to `constants.ts`. If URL segments differ between languages, update the slug map in `src/data/i18n.ts`.
- **New article/case:** add an MDX file under the matching content collection folder with valid frontmatter; the `[slug]` route and schema generate automatically.
- **Navbar gotcha:** the logo must be `variant="wordmark"` at `h-16` (`variant="logo"` is invalid and falls back to a tiny icon).

## Preview workflow

The agent environment can't reach the user's `localhost`. To share a preview, either open a PR (auto Netlify deploy preview) or run a Netlify **draft** deploy (never `--prod`):

```bash
netlify deploy --dir=dist --site c149a617-2ed3-4b88-af1b-297d8b60e533
```

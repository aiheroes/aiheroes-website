# Astro Re-platform Plan — aiheroes.io

**Date:** 2026-06-08
**Status:** Proposal (not started). This is the long-term "best-practice destination" identified during the SEO recovery work — a deliberate, scoped project, not an emergency.

## Context

The site is a React 19 + Vite + React Router 7 **client-rendered SPA**. Search Console data showed the core SEO problems were authority leak + weak national targeting (both addressed in the shipped Phases 1–2), but a structural ceiling remains: **client-side rendering**. Non-JS crawlers (Bing → which feeds ChatGPT, LinkedIn/social scrapers, most AI crawlers) see the homepage's meta on every route because meta is injected via `useEffect` after JS runs.

We evaluated bolt-on prerendering (`vite-react-ssg`, Puppeteer snapshot) and concluded the **right long-term fix is a static-first framework**. For a bilingual, ~50-page, SEO-critical marketing site, **Astro** is the best fit: build-time static HTML (perfect SEO), near-zero JS by default (best Core Web Vitals), actively maintained (stability), and it **renders existing React components**, so the design work is largely preserved.

This plan is the migration blueprint. It is intentionally a separate project from the Phases 1–2 SEO work already live.

## Why Astro (over the alternatives)

- **vs. staying SPA + Puppeteer:** removes a brittle bolt-on; SSG is first-class, not snapshotted.
- **vs. Next.js:** Astro ships dramatically less JS for a content site (islands architecture), simpler mental model, better default Core Web Vitals. Next is preferable only if the site becomes app-like/interactive; it isn't.
- **vs. vite-react-ssg:** maintained and stable vs. a beta that pins React Router 6.

## Target architecture

| Concern | Now (Vite SPA) | Target (Astro) |
|---|---|---|
| Rendering | CSR (`createRoot`) | Static HTML at build (`output: 'static'`) |
| Routing | React Router 7 (`App.tsx` route list) | File-based `src/pages/**`, Astro i18n |
| SEO meta | `useSEO` hook (useEffect, client-side) | `BaseLayout.astro` renders `<head>` at build (native SSG) |
| Content | `constants.ts` `CONTENT` object | Reuse `CONTENT` as a data import first; migrate articles/cases to **Content Collections** later |
| Styling | Tailwind 4 (`@tailwindcss/vite`) | Same Tailwind 4 via Astro's Vite plugin (no change) |
| Interactivity | React everywhere | React **islands** (`client:*` directives) only where needed |
| Hosting | Netlify static | Netlify static (`@astrojs/netlify` or static adapter) |

## Component reuse vs. rewrite

Astro renders `.tsx` React components via `@astrojs/react`, so most **presentational** components port as-is. The work concentrates in components coupled to React Router:

**Reuse directly (presentational, no router):** `DarkBox`, `Hero` sections, stat grids, service-page bodies, most of the section components, the application/contact form internals.

**Adapt (coupled to react-router — the real porting cost):**
- `PageLayout` → becomes `BaseLayout.astro` (+ small islands). Currently uses `useLocation` + `useSEO`; in Astro the layout gets `lang`/`path`/`title` as props and renders `<head>` server-side.
- `Navbar` → mega-menu markup static; scroll-theming + dropdown become a small island (`client:load`). Replace react-router `Link`/`useLocation` with Astro `<a>` + `Astro.url`.
- `Footer` → static markup; replace `Link` with `<a>`.
- `useSEO` / `calculateAlternatePath` → folded into `BaseLayout.astro` head + Astro i18n helpers.
- `HomePage` language detection (`getInitialLanguage`, `useNavigate`) → replaced by Astro i18n routing + a language-switcher island.
- `JobDetailPage` (`useParams`) → Astro dynamic route `src/pages/[lang]/vacatures/[slug].astro` with `getStaticPaths()` enumerating `CONTENT.*.careersPage.positions.items`.
- `BarePathRedirect` / `ScrollToTop` → removed (Astro real pages + Netlify redirects replace them).

## SEO (the whole point)

A single `BaseLayout.astro` renders, at build time, everything `useSEO` does today — `<title>`, description, OG/Twitter, canonical, hreflang (nl/en/x-default), and JSON-LD — from props. Because it's server-rendered, **every page ships complete, correct meta in its static HTML**. The existing `ProfessionalService` (homepage), `FAQPage`, `JobPosting`, and the planned `Breadcrumb/Event` schema move into layout/page frontmatter. This is the clean version of the `seoTitle`/`jsonLd` plumbing already added.

## i18n / routing

Astro i18n config (`defaultLocale: 'nl'`, `locales: ['nl','en']`) models the NL/EN split natively. The NL↔EN slug map currently in `calculateAlternatePath()` becomes per-page `hreflang` data (a small slug-map module the pages import). Prefix-less URLs (`/over-ons`, `/about`) stay handled by the existing `netlify.toml` 301s.

## Content strategy

- **Phase 1:** import the existing `constants.ts` `CONTENT` object unchanged into `.astro` pages — minimal rewrite, fastest path to parity.
- **Phase 2 (later):** migrate the resource articles and case studies to **Astro Content Collections** (Markdown/MDX + schema) for easier authoring and automatic `Article` schema. Optional, not required for cutover.

## Forms, redirects, deployment

- **Netlify Forms:** keep the hidden static `<form netlify>` detection markup in the base layout (as in `index.html` today); the interactive form is an island.
- **Redirects:** `netlify.toml` carries over **unchanged** — the migration 301s/410s from Phases 1 are framework-independent. Remove only the SPA fallback (`/* → /index.html 200`); Astro emits real pages.
- **AI Salon / Luma:** Luma checkout script as an island (`client:load`).
- **Deploy:** Netlify, static output. `sitemap.xml` becomes generated via `@astrojs/sitemap` (replaces the hand-maintained file).

## Migration strategy — parallel rebuild, then cut over

Re-platforming incrementally inside the SPA is not practical (different rendering models). Recommended: **scaffold Astro alongside, port to parity on a branch, cut over in one deploy.**

1. **Scaffold** — new Astro project (or `/astro` workspace), `@astrojs/react`, Tailwind 4, i18n, Netlify adapter. Wire `BaseLayout.astro` (SEO head) + global nav/footer.
2. **Port the template pages first** — homepage + one service page proves the pattern (layout, islands, SEO, i18n). Validate static HTML output.
3. **Port the long tail** — the ~20 service pages share a template; case studies, resources, about, careers, legal, AI Salon. Reuse React bodies where they're presentational.
4. **Dynamic + forms** — career `[slug]` pages via `getStaticPaths`; contact/application forms as islands wired to Netlify.
5. **Parity pass** — diff routes against the current sitemap; confirm every URL renders with correct meta/hreflang/JSON-LD; run Rich Results Test + Lighthouse.
6. **Cut over** — point the build at Astro, keep `netlify.toml` redirects, deploy, resubmit sitemap, watch Search Console.

## Risks & mitigations

- **React-router-coupled components** (the main cost) → adapt Navbar/Footer/PageLayout to Astro `<a>`/`Astro.url`; budget time here specifically.
- **Interactivity regressions** (navbar scroll theming, rotating hero, sticky CTA) → port as well-scoped islands; visually QA each.
- **Hydration/island boundaries** → keep islands minimal; most pages should be zero-JS.
- **Content drift during the rebuild** → freeze content changes, or rebuild after Phases 1–2 settle (now done).
- **Cutover risk** → parallel build on a branch, full local + deploy-preview validation before flipping production.

## Effort & sequencing

A meaningful multi-day project, front-loaded on the layout/nav/footer/SEO foundation; the service pages are then largely templated. Best done as a **dedicated effort** once Phases 1–2's Search Console impact is visible (so the migration is measured against a known baseline). It does **not** block any of the off-site SEO/GEO actions (Bing Webmaster, GBP, listicles), which should proceed in parallel.

## Verification

- Every current route renders as static HTML with correct `<title>`, meta, canonical, hreflang, JSON-LD (grep the built output).
- Lighthouse: confirm Core Web Vitals hold or improve; confirm JS payload drops.
- Rich Results Test on homepage (Organization), a job page (JobPosting), AI Salon (Event), Diensten (FAQ).
- Crawl parity: diff Astro output URLs vs `sitemap.xml`; no orphaned or missing routes.
- Deploy preview QA: language switching, forms (test submission lands in Netlify), nav theming, redirects (`curl -I` legacy URLs).

## Recommendation

Treat this as the **destination**, scheduled deliberately — not urgent. Phases 1–2 (shipped) address the immediate authority-leak and targeting problems; Astro removes the CSR ceiling for good and future-proofs SEO + speed. Kick it off as its own branch/project when ready, with the off-site GEO actions running in parallel meanwhile.

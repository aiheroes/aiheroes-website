<!-- ccsync:begin region=instructions v=1 eol=lf finalnl=1 hash=sha256:8aa45ddd712592c59cc310a26eb89a2610280948129772fd12867a52613e4a41 -->
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
<!-- ccsync:end region=instructions -->

<!-- ccsync:begin region=memory v=1 hash=sha256:a2d549c8905cbacbce88eeefcb5be3fbafa00e01d67adf7ad1260d31bc7df35c -->
<!-- ccsync:index file=MEMORY.md body=md eol=lf finalnl=1 hash=sha256:c8635021e675dda88ed5b18f66e16d14445c267b61b6000a4afe887dddfbab98 -->
# AI Heroes Website — Project Memory

## Business Context
- AI Heroes is a **full-service AI agency** (NOT "consultancy" — updated 2026-03-24)
- Legal entity is **AI Heroes B.V.** (KvK 42051968, BTW NL869486263B01) — see [Legal entity](project_legal_entity.md). Replaced earlier "handelsnaam van Lucidium" structure.
- Three **Co-Founders** (title updated 2026-04-22): Frans Hoorn (Consulting), Jan Brusse (Training), David Homan (Software) — see [Founder titles](project_founder_titles.md)
- Based in Groningen — positioned as "AI-hoofdstad van Europa" / "AI Capital of Europe" (present tense, no hedging). Office address **Aarhusweg 4-16, 9723 JJ Groningen** is published on legal pages, footer, press kits and JSON-LD (added 2026-05-28). Hero/careers/SEO copy still uses generic "Groningen" as positioning.
- Tagline: "AI werkt als je weet hoe"
- European focus: data sovereignty, EU AI Act compliance, no vendor lock-in

## Core Messaging (updated 2026-03-24)
Four interconnected concepts woven across entire site:
1. **"Full-service AI agency"** — replaces "AI consultancy" as company descriptor
2. **"Change management tot technical implementation"** — names the full spectrum
3. **"Groningen = AI-hoofdstad van Europa / AI Capital of Europe"** — present-tense claim, AI Fabriek €200M as proof not condition
4. **"EU focus"** — European-first approach
- "AI Consultancy" is still used as the **pillar/service name** — only the company descriptor changed

## Three Pillars (core offering structure)
1. **Training** (Jan) — workshops, incompany trainings, EUR 2.5-4k/day
2. **Consulting** (Frans) — AI-readiness scans, roadmaps, business cases, EUR 3-50k+
3. **Software** (David) — custom AI solutions via dev-pool, EUR 15-100k+

## Website Revamp (COMPLETED 2026-03-06)
- Repositioned from training-focused to full 3-pillar consultancy
- Hero: Rotating text (4 slides, 6s auto-advance, crossfade transitions)
- Nav: 3-column mega-menu (Training / Consulting / Software)
- Services cards link to Diensten page anchor sections
- Contact topics: Training, Consulting, Software & Implementatie, Iets anders

### New Pages Added
- `ai-readiness-scan` (NL+EN), `ai-roadmap` (NL+EN)
- `maatwerk-ai-oplossingen` / `custom-ai-solutions`
- Old Specialistische Tracks routes still work (kept for legacy)

### Key Type Changes
- `NavChild.category`: `'training' | 'consulting' | 'software'`
- `ServicesContent.items`: keys are `training/consulting/software`
- `HeroContent` has `slides: HeroSlide[]`
- `PageLayout` has optional `pillarBadge` prop

## Offerings Bible
- Reference doc at `docs/offerings-bible.md`
- Includes platform-specific company intros (tagline, one-liner, short/full paragraph, meta description) in NL+EN

## Key Partnerships
- **Copilot Academy** — overflow partner for Noord-NL
- **Kostenmaatschap** — shared cost structure with Odoo ERP and Dev-pool
- **AI Fabriek Groningen** — EUR 200M investment, operational 2026-2027

## Feedback
- [Contact layout prefs](feedback_contact_layout.md) — split label/links on narrow areas, one line on wide
- [Writing style](feedback_writing_style.md) — no em-dashes, no "geen X maar Y", no cheesy phrasing
- [Microcopy labels](feedback_microcopy_labels.md) — for trust indicators / credentials, show the data without an introductory label
- [NL translation](feedback_nl_translation.md) — don't calque EN structure; drop UI-meta references; match homepage tone; user prefers "Het" over "Hét"

## References
- [GitHub org migration](project_github_org_migration.md) — both repos moved to AIHeroes org (2026-06-01), both public; internal is public because Vercel Hobby can't deploy private org repos (upgrade to Vercel Pro when private tools added); Netlify/Vercel teams are personal accounts
- [Design inspiration](reference_design_inspiration.md) — resend.com/forward is the benchmark for clean/hand-crafted pages (used for AI Salon redesign)
- [AI Salon sponsors](project_salon_sponsors.md) — confirmed sponsors (Drydock is first) + how `SPONSOR_LOGOS` wires logos into the salon page
- [AI Salon registration](project_salon_registration.md) — registration runs through Luma (text-link modal triggers + non-scrolling embed); custom RSVP form removed
- [AI Salon speakers](project_salon_speakers.md) — confirmed speakers (Ruben Molenaars is first) + how `SPEAKERS` wires cards into the salon page
- [Dev port conflict](reference_dev_port_conflict.md) — port 3000 is shared with sister project `ivosw`; use `--port 3001` for this project's Vite
- [Bare-path routing](project_bare_path_routing.md) — prefix-less URLs (/over-ons, /about, /ai-salon) resolve to the right /nl|/en page instead of 404ing; Netlify 301s + `BarePathRedirect`/`resolveBarePath` catch-all
- [SEO/GEO strategy](project_seo_geo_strategy.md) — why the site ranks page 3 for "AI consultancy Groningen" (GBP/local pack + geo page + authority); NL GEO = Bing→ChatGPT (Bing already #5!); pre-cutover blockers, AI-geletterdheid window (Aug 2026), brand collision; canonical audit at `AUDIT-SEO-FULL-2026-06-10.md`
- [Astro migration](project_astro_migration.md) — in-progress re-platform to Astro (branch `feat/astro-migration`): patterns (BaseLayout SEO, react-router shim, homepage island, SubpageLayout, content collections), the Netlify draft-deploy preview workflow, navbar logo gotcha, and what's left to port
- [Navbar tiers](project_navbar_tiers.md) — intentional two-navbar design: tall scroll-split navbar on frontier pages (homepage + island pages), compact navbar on deeper content pages; both carry the full mega-menu (don't "fix" the difference)
- [Workspace → Cirrux migration](project_workspace_to_cirrux_migration.md) — moving off Google Workspace to Cirrux (EU email); keep free @aiheroes.io Google accounts for sign-in; sequence carefully, GBP is highest-risk asset

## Tech Stack (see CLAUDE.md for details)
- React 19 + TypeScript + Vite + Tailwind CSS + React Router DOM
- Bilingual NL/EN, route-based language separation
- Deployed on Netlify
<!-- ccsync:index-end -->
<!-- ccsync:fact file=feedback_contact_layout.md shape=flat body=md eol=lf finalnl=1 hash=sha256:2dcb5cc0eddbac1a2f30f68fb1f748a98048f7060869753c68a11e7683b846a7 -->
---
name: Contact info layout preferences
description: Homepage contact section should split label and links onto separate lines; service page forms keep everything on one line
type: feedback
---

Avoid repetitive label patterns like "Of mail ons... Of bel ons..." — combine into a single intro line.

Homepage contact section (Contact.tsx, left column): label on its own line, email · phone together on the next line. This avoids awkward wrapping on narrow/mobile viewports.

Service page contact forms (PageContactForm.tsx): everything on one line works fine at that width.

**Why:** The homepage contact left column is narrower than the service page form area, so text wraps differently.
**How to apply:** When adding contact details to narrow layout areas, split label from values. In wider areas, keep on one line.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=feedback_microcopy_labels.md shape=nested body=md eol=lf finalnl=1 hash=sha256:8eb0b5931dc1b946d9b0c286db60f09e4ca8349def5be3b113c18d8f3b99913c -->
---
name: feedback-microcopy-labels
description: "For trust indicators / credential lines, drop the explanatory header label and let the data stand on its own"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f399e9df-9748-47dd-a2b3-2b3aa3aa9566
---

When adding small factual lines (legal identity, credentials, certifications, registration numbers) into the UI, skip the uppercase label that introduces them. Just show the data.

Concretely: instead of
```
OFFICIEEL GEREGISTREERD
AI Heroes B.V. · KvK ... · BTW ...
```
just show
```
AI Heroes B.V. · KvK ... · BTW ...
```

**Why:** User said the "Officieel geregistreerd" / "Officially registered" header above the BV/KvK/BTW line in the homepage contact section was "too much" (2026-05-18). The label adds nothing the data doesn't already convey — anyone who sees KvK + BTW knows it's an official registration. The label feels like it's trying to advertise the trust signal, which undercuts it.

**How to apply:** For trust signals and credential blocks, default to data-only. Use a divider line + muted styling to set the block apart, not a label. Adjacent to [[feedback-writing-style]] (avoid cheesy/overstated phrasing).
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=feedback_nl_translation.md shape=nested body=md eol=lf finalnl=1 hash=sha256:87d0e7e30732bb8cc481ac11e81a3fd28a74267bc3cf966729e1583c414fe2f0 -->
---
name: nl-translation
description: "Translating EN site copy to NL: don't calque structure; drop UI-meta references; match homepage tone (informal, comma-heavy, EN loanwords OK)."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 2a25b9c7-4648-447e-8440-eef6f5ab90d1
---

Never translate EN copy 1:1 into NL. Restructure for Dutch flow even if the sentence shape changes. Common pitfalls flagged by user (2026-05-28 during AI Salon page NL pass):

- **UI-meta references calque badly.** "Pick a slot to start the conversation" became "Kies een plek en we gaan in gesprek" — both halves are awkward in Dutch. "Een plek kiezen" implies physical seating, not clicking a placeholder box. "We gaan in gesprek" sounds wooden. Replace with action phrasing that doesn't describe the UI: **"Laat van je horen"**, "Mail ons", "Wil je sponsoren?".
- **Don't describe the click target.** EN does this naturally ("click here", "pick a slot"); NL doesn't. Trust the UI to speak for itself.
- **Match homepage tone:** direct, comma-heavy, informal "je/jouw", short sentences. EN loanwords are fine where they're standard in NL business/tech speak (workshop, founder, builder, scan, roadmap, community, kick-off, bimonthly).
- **User translates by hand**, but accepts an AI draft based on homepage tone for review and correction. Faster than blank-page.
- **Hét vs Het:** user prefers **Het** (no accent), even where emphasis would justify Hét. Decided 2026-05-28.

**Why:** Literal calques sound corporate and machine-generated, which is exactly the AI-tell the user has been actively scrubbing from the site (see [[writing-style]]).

**How to apply:** When generating NL copy, rewrite for Dutch ear: change sentence order, drop English idioms that don't transfer, prefer the natural Dutch verb. Show the user a draft and offer 1–2 alternatives for any line where the tone is debatable.

Related: [[writing-style]], [[microcopy-labels]].
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=feedback_writing_style.md shape=nested body=md eol=lf finalnl=1 hash=sha256:adf3f4e8d10a7edc1b2995c24f85371f80a757cb8cb04c1e6938a5ed5ed64cb8 -->
---
name: writing-style
description: "Avoid AI-tell patterns in NL/EN website copy. No em-dashes, no \"geen X, maar Y\" / \"not X, but Y\" constructions, no cheesy phrasing. Use specific replacement heuristics."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 103b8c96-0ec7-44ae-8d23-afef682dc08d
---

Avoid em-dashes (—) anywhere in NL/EN website copy. Use commas, colons, semicolons, parentheses, or break the sentence in two.

**Why:** Investor feedback (2026-05-19) called the site "AI-generated"; em-dashes were one of the strongest tells. Full sweep done across constants.ts, index.html, all pages and docs/offerings-bible.md. Don't reintroduce.

Avoid "niet/geen X, maar Y" (NL) and "not X, but Y" / "not just X but Y" / "It's not X, it's Y" / "no X, no Y" (EN). They sound textbook-AI.

**Why:** Formulaic contrast; reads as machine-generated. User has flagged this pattern repeatedly.

Avoid empty intensifiers without concrete content: "echt begrijpt", "geavanceerd", "krachtig", "complete user experience", "volledig nieuw", "truly understands". Either drop the adjective or replace with something concrete (specific feature, number, named technology).

Keep titles and headings professional and grounded. No "Word een AI Hero" / "Become an AI Hero" or similar cheesy phrasing.

## Replacement heuristics for em-dash

When removing an em-dash, pick by what the original was doing:

- **Apposition / short uitbreiding** ("Groningen — AI-hoofdstad van Europa") → comma: "Groningen, AI-hoofdstad van Europa"
- **Specification / list intro** ("Van inzicht naar strategie — scans, roadmaps...") → colon: "Van inzicht naar strategie: scans, roadmaps..."
- **Two related independent clauses** ("Een losse dienst — het loopt door alles heen") → semicolon: "Een losse dienst; het loopt door alles heen"
- **Second clause stands alone** ("Training, advies of ontwikkeling — meetbare resultaten") → period: "Training, advies of ontwikkeling. Meetbare resultaten."
- **Parenthetical with optional context** ("Proudly made in Groningen — AI Capital of Europe") → parentheses: "Proudly made in Groningen (AI Capital of Europe)"
- **Browser titles / SEO `<title>`** ("AI Heroes — AI werkt als je weet hoe") → pipe: "AI Heroes | AI werkt als je weet hoe"
- **JSON-LD `jobTitle`** ("Co-Founder — Consulting") → comma: "Co-Founder, Consulting"
- **Attribution dash in blockquote** ("— Trabu Team") → drop dash, rely on styling: "Trabu Team"
- **Inline `<strong>X</strong> — Y` lists** → colon inside the bold: `<strong>X:</strong> Y`
- **Sentence flow that breaks if you swap punctuation** → rewrite. Don't force a comma where the rhythm needs more.

## Replacement heuristics for niet/geen-maar

- **Default:** drop the X-half, just state Y positively. ("Geen losse onderdelen, maar één partner" → "Eén partner voor het hele pad.")
- **When the contrast actually matters:** use "vooral" / "eerder" / "veel meer", or split into two sentences. ("AI-projecten falen niet door techniek, maar door adoptie" → "AI-projecten falen vooral op adoptie; techniek is zelden de bottleneck.")
- **English "Not just X, but Y":** "X. Y too." or "X and Y both matter." or just drop X. ("It's not X, it's Y" → "Y is the real point.")

**How to apply:** Scan any new copy through these patterns before showing the user. Catch them at draft time rather than in review. The site has been fully cleaned; don't regress.

Related: [[microcopy-labels]], [[contact-info-layout]].
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_astro_migration.md shape=nested body=md eol=lf finalnl=1 hash=sha256:fa92cc85958b71ba011b4322d4bb954bd5b26dde954f19d2429e04a024fe2a19 -->
---
name: project-astro-migration
description: "In-progress Astro re-platform of the aiheroes.io site — approach, key patterns, preview workflow, and what's left"
metadata: 
  node_type: memory
  type: project
  originSessionId: 8ab6cf7e-2da9-4129-8bc5-9bc417e6a7eb
---

Re-platforming the React/Vite SPA to **Astro 5** for SEO (build-time meta), speed, and a Markdown content engine (the team is investing in content marketing). Branch **`feat/astro-migration`**. Plan: `ASTRO-MIGRATION-PLAN.md` + plan file in `~/.claude/plans/`. See [[project-seo-geo-strategy]].

**Stack:** Astro 5 static output, `@astrojs/react` (React 19), Tailwind 4 via `@tailwindcss/vite` (NOT @astrojs/tailwind), `@astrojs/mdx`, `@astrojs/sitemap`, View Transitions (`<ClientRouter/>`). `npm run build` = `astro build`. Dev port 3001.

**Key patterns (reuse these):**
- **SEO**: `src/layouts/BaseLayout.astro` reproduces the old `useSEO` at build time (title/seoTitle/desc/OG/canonical/hreflang/robots/jsonLd) + index.html static head + the 2 hidden Netlify forms. Props incl. `seoTitle`, `jsonLd`, `noindex`, `noChrome`.
- **i18n**: `src/data/i18n.ts` = single slug-map source (`alternatePath`, `SEGMENT_NL_TO_EN`) replacing the old 3 copies. Drives routing + hreflang.
- **Data**: `src/data/content.ts` / `types.ts` re-export the legacy root `constants.ts`/`types.ts` during migration (inline + delete at cutover).
- **react-router shim**: `src/lib/react-router-shim.tsx` aliased to `react-router-dom` in `astro.config.mjs` → lets existing React components run as Astro islands without a Router (Link→`<a>`, useNavigate→window.location). **This unlocks reusing any legacy React page as an island.** GOTCHA (fixed 2026-06-13): the shim's `useLocation()` MUST stay hydration-safe — it returns SSR pathname `/` on the server AND the first client render, then updates post-mount. Don't revert that, and don't branch on `location.pathname` to choose an ELEMENT TYPE in island-rendered components (e.g. `{isHomePage ? <button> : <Link>}`): server assumes `/`, client sees the real path → React #418 hydration mismatch → it regenerates the whole island tree → the navbar's hover mega-menu breaks (Diensten dropdown dead, and opening it kills the others until refresh). Homepage was immune (`/`==`/`). For per-element cases, render one consistent element and branch inside `onClick` at click time (see Footer contact link).
- **`import type` is mandatory for type-only symbols** (types from `../types`, React's `ImgHTMLAttributes`, etc.). The prod build strips type-as-value imports via esbuild elision so `npm run build` passes and the deploy preview works — but Vite's dev runner does NOT strip them, so a single `import { Language } from '../types'` (value) makes EVERY island fail to hydrate and `npm run dev` 500s ("module '/types.ts' does not provide an export named 'Language'"). All converted 2026-06-13; keep new imports `import type`.
- **Homepage** (`/`, `/en`): the whole legacy `HomePage` rendered as one island (`client:load`) inside BaseLayout `noChrome` → exact snap-scroll feel preserved, body still SSR'd for SEO. `ProfessionalService` schema = `src/data/schema.ts`.
- **Subpages**: `src/layouts/SubpageLayout.astro` = static Astro Navbar/Footer + hero + `<slot/>` + `PageContactForm` island. Zero-JS content body.
- **Content Collections**: `src/content.config.ts` defines `articles` + `cases` (MDX, frontmatter schema). Routes `src/pages/{nl,en}/resources/[slug].astro` and `cases/[slug].astro` via getStaticPaths; auto Article schema.
- **Navbar gotcha**: Logo MUST be `variant="wordmark"` at `h-16` (NOT `variant="logo"` which is invalid → falls back to tiny icon; and `h-10` renders the thin strokes sub-pixel/uneven). Contact button = white button with `nav.contact.label` (NOT `contact.label`).

**Preview workflow (important):** the agent env is separated from the user's browser, so `localhost` dev server is NOT reachable for them. Use a Netlify **DRAFT** deploy: `netlify deploy --dir=dist --site c149a617-2ed3-4b88-af1b-297d8b60e533` (NO `--prod` — production aiheroes.io stays untouched). Returns a public `*--aiheroes-website.netlify.app` URL. Netlify CLI is authed as Frans. To get an auto-updating preview instead, open a PR.

**Done (ALL pages ported, 2026-06-09):** scaffold, BaseLayout SEO, Navbar/Footer, homepage (NL+EN), all 42 service pages, both diensten/services overviews (island + baked FAQPage schema), all 6 about pages (over-ons/about full-bleed static + aanpak/approach/team prose), 4 legal (noindex), press/pers (island), /nl/menu (static print sheet, noindex), all 8 cases as MDX (NL+EN) + en/cases route, careers (vacatures/careers listing islands + per-job `[slug]` static with baked JobPosting schema + ApplicationForm island), AI Salon (island + baked Event schema), /hanze (wizard island, noindex), 404.astro (bare-path catch-all replicating old BarePathRedirect client-side), netlify.toml (language-neutral + contact redirects added). Build = 89 HTML pages, all 84 App.tsx routes covered (parity verified). SEO baked correctly (title/canonical no-trailing-slash/hreflang triplet/JSON-LD). Draft preview deployed & **awaiting user GO for production cutover**.

**Island vs static decision:** complex/interactive legacy pages (homepage, diensten/services overviews, press, careers listings, AI Salon, hanze) are rendered as React **islands** (`client:load`) inside BaseLayout `noChrome` — SSR'd to HTML for SEO, full interactivity preserved, schema baked server-side in the `.astro` wrapper. Simple content pages (services, about prose, legal, cases, job detail) are **static** via SubpageLayout (zero-JS). Island wrappers live in `src/components/islands/*Island.tsx`.

**Cases id-collision fix:** glob loader default id is the basename, so `nl/olx.mdx` and `en/olx.mdx` collided (only 1 survived per slug). Fixed with `generateId: ({entry}) => entry.replace(/\.(md|mdx)$/,'')` in `src/content.config.ts` cases loader → id includes lang subfolder.

**Remaining = CUTOVER ONLY** (needs user GO, production-affecting): optionally reconcile trailing-slash (Astro `never` vs Netlify), optionally upgrade static Navbar.astro to full mega-menu + scroll-split-theme (current simplified static navbar was already user-approved in earlier preview), delete legacy React tree (`pages/`, `components/`, `App.tsx`, root `index.html`, etc.), inline `constants.ts`→`src/data`, merge `feat/astro-migration` → master, resubmit sitemap.

**Port recipe:** read `pages/{nl,en}/.../X.tsx`, copy `PageLayout` props + body into `src/pages/.../x.astro` using `SubpageLayout`; `className`→`class`, `<Link to>`→`<a href>`, `<DarkBox>`→`<div class="dark-box-content bg-brand-dark ...">`.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_bare_path_routing.md shape=nested body=md eol=lf finalnl=1 hash=sha256:4fb2763d867df711b9e3a64afdacd535cff700fa5f2f02f58fcb7908c7309ca4 -->
---
name: project-bare-path-routing
description: How prefix-less URLs (no /nl or /en) resolve site-wide instead of 404ing
metadata: 
  node_type: memory
  type: project
  originSessionId: ccdc13b8-f027-4d87-9373-ba2cc6684395
---

Every content route requires a `/nl/` or `/en/` prefix. Prefix-less URLs (e.g. `/over-ons`, `/about`, `/ai-salon`) used to 404. Fixed 2026-06-01 with one site-wide rule via two layers:

1. **Server-side 301s** (`netlify.toml`, "Prefix-less entry points" section) for the slugs that are unambiguously one language: diensten/services, over-ons/about (+ `/*` splat), vacatures/careers, pers/press. Best for SEO.
2. **Client-side catch-all** `components/BarePathRedirect.tsx` (mounted at `<Route path="*">` in `App.tsx`) handles everything else. It calls `resolveBarePath()` in `utils/routing.ts`: infers language from language-specific slug segments, else falls back to the visitor's preference (`detectVisitorLang()` = localStorage `aiheroes-lang` -> browser -> NL). Language-neutral slugs like `ai-salon`/`resources` go through this path. Already-prefixed paths return null -> genuine 404 (`NotFound`).

**Why:** repeated 404 complaints; the site had only ad-hoc per-page redirects, not a uniform rule.

**Contact is not a page** — it's the `#contact` section on the homepage (`HomePage.tsx`, `id="contact"`). `/contact` → `ContactRedirect` (visitor lang → `/#contact` or `/en#contact`); `/nl/contact` and `/en/contact` are plain `<Navigate>` routes in `App.tsx` → the homepage anchor. `nav.contact.href` in `constants.ts` is vestigial/unused (nav + footer reach contact via `/#contact` hash-scroll). `Navbar.handleContactClick` is language-aware (navigates to `/en#contact` on EN, `/#contact` on NL) since commit 6d46d31. The Navbar hash-scroll-on-arrival `useEffect` matches both `/` and `/en` since 2026-06-02 (was `/` only, so EN cross-page contact clicks didn't auto-scroll).

**How to apply:** when adding/renaming a page, keep the `NL_ONLY_SEGMENTS` / `EN_ONLY_SEGMENTS` sets in `utils/routing.ts` in sync, and the slug map in `hooks/useSEO.ts` `calculateAlternatePath()`. `detectVisitorLang()` is the shared language detector (also used by `NotFound` and `ContactRedirect`). Neutral slugs need no config — they resolve by visitor preference automatically.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_founder_titles.md shape=flat body=md eol=lf finalnl=1 hash=sha256:9b1a33fa1128e860a6bbc115e9cd6508cea0cb5fc6963d2ed090901a6bd3e244 -->
---
name: Founder titles changed to Co-Founder
description: The three founders' public title changed from "Managing Partner" to "Co-Founder" on 2026-04-22 across team pages, homepage team section, and JSON-LD schema.
type: project
originSessionId: 07947fd2-149c-4409-b215-a560fdb6d1ce
---
Frans Hoorn, David Homan, and Jan Brusse are now titled **Co-Founder** (not "Managing Partner") across all user-facing surfaces and the `schema.org` structured data.

**Why:** User explicitly asked for the rename; "Co-Founder" is the preferred public title going forward.

**How to apply:** When drafting bios, press/marketing copy, about pages, or schema markup that references the three founders' role, use "Co-Founder · [pillar]" (e.g. "Co-Founder · AI Consultancy"). Don't reintroduce "Managing Partner" unless the user asks for it back.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_github_org_migration.md shape=nested body=md eol=lf finalnl=1 hash=sha256:89ae7a5a2eda8b5ce29e70ae25f03f4eb3d36c20151ab0b9ec0fb1f391dc3584 -->
---
name: project-github-org-migration
description: Both AI Heroes repos moved from personal GitHub to the AIHeroes org; hosting/ownership nuances and the Vercel-plan decision
metadata: 
  node_type: memory
  type: project
  originSessionId: e918534f-9bc4-4031-9089-ef4983fc2f5d
---

On 2026-06-01 both AI Heroes repos were transferred from the personal GitHub account `fransjorden` to the **`AIHeroes` org** (canonical owner slug is lowercase `aiheroes`; the capitalized form redirects). Frans is org admin.

- **`AIHeroes/aiheroes-website`** — now **public**. Deploys on **Netlify**. The repo was re-linked and migrated onto the Netlify GitHub App (was legacy webhook). `master` has light branch protection (no force-push, no deletion; direct pushes allowed).
- **`AIHeroes/aiheroes-internal`** — made **public** too, and deliberately so: it's on **Vercel's free Hobby plan, which cannot deploy a *private* org-owned repo**. Same light branch protection.
- **`aiheroes/type-machine`** (formerly `meeting-tool`, renamed 2026-06-01) — added 2026-06-01 as a **private** repo (local-only FastAPI meeting transcription tool, never deployed). Was not under git before; initialized **code-only** with a `.gitignore` excluding `.env`, `recordings/` (1.5 GB audio), `transcripts/`, generated minutes/Slack outputs, and pycache. Branch protection is **unavailable** here — GitHub Free org plan blocks branch protection on private repos ("Upgrade to Pro or make public"); not worth changing for a code-backup repo.

**Decision:** keep `aiheroes-internal` public for now; when private internal tools are added later, upgrade to **Vercel Pro** (≈$20/seat/mo) to make it private again rather than relying on Hobby. Secret scan before going public was clean (no secrets/keys/data in tree or history; secrets live in Vercel env vars).

**Ownership nuance:** both the Netlify "AI Heroes" team (slug `fransjorden`) and the Vercel "AI Heroes" team (`frans-projects-66bf79d8`, Hobby) are actually **personal** accounts renamed, not real shared company teams. GitHub is now properly org-owned, but the deploys still run under Frans's personal hosting logins. Future cleanup option: create real company-owned Netlify Team / Vercel Pro team and transfer the sites in (preserves domain + site/project IDs + env vars).

GitHub Apps installed on the org: `netlify`, `vercel`, `claude` (all "all repos"). See [[reference-dev-port-conflict]] for the sibling `ivosw` project.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_legal_entity.md shape=nested body=md eol=lf finalnl=1 hash=sha256:a6c77f0f50411c50ac6decf12f4e63376812275a002976ede7644d118b6660c0 -->
---
name: project-legal-entity
description: "Official legal identity for AI Heroes — BV name, KvK, BTW. Used on legal pages, footer, schema.org, invoices."
metadata: 
  node_type: memory
  type: project
  originSessionId: f399e9df-9748-47dd-a2b3-2b3aa3aa9566
---

AI Heroes operates as **AI Heroes B.V.** (incorporated 2026; previously a trade name of Lucidium with KvK 78738105).

- **Statutaire naam / Legal name:** AI Heroes B.V.
- **KvK-nummer:** 42051968
- **BTW-nummer:** NL869486263B01
- **Bezoekadres / Visiting address:** Aarhusweg 4-16, 9723 JJ Groningen, Nederland (new office, added to site 2026-05-28; on Zernike Science Park)

**Why:** Confirmed by user 2026-05-18 when adding legal identity across the site. The previous Lucidium/trade-name structure was replaced by a proper BV. On 2026-05-28 the user moved into a new office at Aarhusweg 4-16 and reversed the earlier "no public street address" stance — address is now published on legal/identity surfaces.

**How to apply:**
- All legal/identity copy on the site uses "AI Heroes B.V." as the entity, "AI Heroes" as the trading name.
- Pair KvK + BTW together wherever one is shown (footer, press factsheet, schema.org).
- The street address belongs on legal/identity surfaces (privacy, terms, press kit, footer, JSON-LD). Do NOT inject it into marketing/positioning copy ("Vanuit Groningen, voor heel Europa", hero, careers location, SEO descriptions) — those stay generic.
- Do NOT regress to the old "handelsnaam van Lucidium" wording — that entity is no longer the operating company.
- JSON-LD `geo` coordinates in `index.html` still point at Groningen city centre (53.2194, 6.5665), not Zernike — flag this if accuracy matters for local SEO.

Locations on the site that carry these values today:
- `pages/nl/legal/Voorwaarden.tsx` (Artikel 1)
- `pages/en/legal/Terms.tsx` (Article 1)
- `pages/nl/legal/Privacy.tsx` (Verantwoordelijke box)
- `pages/en/legal/Privacy.tsx` (Data Controller box)
- `pages/nl/Pers.tsx` and `pages/en/Press.tsx` (Kerngegevens / Quick Facts)
- `components/Footer.tsx` (bottom bar second line)
- `index.html` (JSON-LD `legalName` / `taxID` / `vatID`)
- `docs/offerings-bible.md` (Wie we zijn)
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_navbar_tiers.md shape=nested body=md eol=lf finalnl=1 hash=sha256:58494637552a0e2dafdfa48eadb98fc0a9d5bfe5f6422c225affc639ff77578a -->
---
name: project-navbar-tiers
description: Two intentional navbar styles on aiheroes.io — tall (frontier pages) vs compact (deeper content pages); both carry the mega-menu
metadata: 
  node_type: memory
  type: project
  originSessionId: 8ab6cf7e-2da9-4129-8bc5-9bc417e6a7eb
---

The site intentionally runs **two navbar styles** (confirmed by Frans 2026-06-10). Do NOT "fix" this as an inconsistency.

- **Frontier pages → the TALL navbar.** Taller height + the scroll-split colour effect, rendered by the legacy React `Navbar`/`PageLayout` chrome inside the Astro islands. Frontier = the homepage (`/`, `/en`) and the other island pages: the Diensten/Services **overview**, the careers/vacatures listing, press/pers, and AI Salon.
- **Deeper content pages → the COMPACT navbar.** `src/components/static/Navbar.astro`: compact `h-24` height + simple scroll-darken (no scroll-split). Used on the static SubpageLayout pages: individual service detail pages, about prose (aanpak/approach/team), legal, case studies, and job detail.

**Both tiers carry the full 3-column mega-menu** (Services = Training/Consulting/Software + featured EU "Digitale Onafhankelijkheid" link; About + Resources dropdowns; AI Salon link). The mega-menu being everywhere is a hard requirement — people land on deep pages from search and the nav is part of the sale. The compact navbar's mega-menu is CSS-hover driven with a mobile pillar-grouped accordion; only JS is the mobile toggle.

**Why:** Frans likes the compact navbar's height/behaviour for content pages but wants the homepage to keep its signature tall scroll-split navbar (tied to the hero's split-colour effect, which must stay per the "keep the exact snap-scroll feel" decision). See [[project-astro-migration]].
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_salon_registration.md shape=nested body=md eol=lf finalnl=1 hash=sha256:8875cf271afb1599c3b8476824e2087febd0308e33181608a16ac85e1be30932 -->
---
name: project-salon-registration
description: AI Salon registration runs through Luma (not the old custom form)
metadata: 
  node_type: memory
  type: project
  originSessionId: 5e569cc9-e36a-430a-a8dd-fff9da0778e6
---

AI Salon registration happens on **Luma** — important: the user wants all sign-ups captured there. As of 2026-05-29 the old custom Netlify RSVP form on `pages/AISalonPage.tsx` was fully removed (deleted `SalonForm`, `Checkbox`, `FormCopy`, and the hidden `ai-salon-signup` form in `index.html`).

How it's wired now:
- Luma event id: `evt-bgWr4oUXGdNMpms` (public URL `https://luma.com/event/evt-bgWr4oUXGdNMpms`), stored as `LUMA_EVENT_ID`.
- **Hero triggers** (updated 2026-05-30): registration is opened by **plain text links**, not a pill button. Both the inline "AI Salon Groningen" link in the lead sentence AND the standalone CTA below it (`copy.cta` = "Register now (free) →" / "Nu aanmelden (gratis) →") are now `<LumaLink>` components sharing `HERO_LINK_CLASS` (white, bold, hairline underline). The inline link used to open external aisalon.ai (`lead.linkHref`, now removed) — user wanted it to open the Luma modal instead, identical to the register trigger. `LumaLink` sets `data-luma-action="checkout"`; `useLumaCheckout()` injects `https://embed.lu.ma/checkout-button.js` once (event-delegation, survives SPA re-mounts). The old red-pill `LumaButton` is gone.
- **RSVP section**: the whole Luma event card embedded via iframe `https://lu.ma/embed/event/${LUMA_EVENT_ID}/simple`. iframe height is fixed per-breakpoint to the measured content height so the **default card never inner-scrolls** (`h-[1120px] sm:h-[980px] md:h-[700px]` — measured ~1069/952/673px at 327/540/1104px wide). The modal opened by the links CAN scroll (extra questions) — that's fine, only the always-visible embed must not.
- Agenda footnote + pitch/sponsor CTAs now point to salon@aiheroes.io (old "check the box on the form" copy is gone).

No CSP headers in `netlify.toml` / `index.html`, so the third-party script + iframe load fine. Verified live via Playwright screenshot 2026-05-29. See [[project-salon-sponsors]] and [[design-inspiration]].

Luma modal close-button gotcha (fixed 2026-05-30, commit 6347fa8): the global `img { background-color: #1c1917 }` image-loading placeholder in `index.css` painted a dark box behind Luma's transparent close-icon (`<button class="luma-checkout--close-btn"><img src="https://embed.lu.ma/static/x.svg">`), making the X look broken. Fix: scope the placeholder out for Luma's injected images — `.luma-checkout--overlay img, .luma-checkout--close-btn img { background-color: transparent; }`. NOTE: this same global `img` placeholder rule was the real reason the Drydock logo showed a dark box (any transparent `<img>` gets the dark bg until/unless opaque). Watch this rule whenever a third-party/transparent image renders dark — it's a recurring footgun on this site.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_salon_speakers.md shape=nested body=md eol=lf finalnl=1 hash=sha256:b382b37e9da268cd1134c2bb276e45f542d1167b1efe79e073e20303a136a907 -->
---
name: project-salon-speakers
description: AI Salon confirmed speakers and how speaker cards are wired in
metadata: 
  node_type: memory
  type: project
  originSessionId: 5e569cc9-e36a-430a-a8dd-fff9da0778e6
---

AI Salon Groningen kick-off (3 Sep 2026) speakers render on `pages/AISalonPage.tsx` via the language-agnostic `SPEAKERS` array (`{ name, topic: string|null, photo: string|null }`). Confirmed speakers render first (portrait if `photo`, else a "TBA" placeholder tile; name shown, and `topic ?? copy.speakers.topicSoon`). Remaining open slots up to `SPEAKER_SLOTS` (2) render as the clickable "Become a speaker" mailto tiles.

`copy.speakers.topicSoon` = "Topic coming soon" / "Onderwerp volgt".

Confirmed speakers:
- **Ruben Molenaars** (first speaker, added 2026-05-30) — **photo set** (2026-06-12) to `/speakers/ruben-molenaars.jpg` (portrait in `public/speakers/`); **topic set** (2026-06-15) to "Keeping our minds sharp in the age of AI", distilled from his Parool opinion piece on AI & cognition (general on purpose; his actual talk may shift within that theme). He's a Brain & Cognition (UvA) master student. Also listed by name in the **agenda** (18:00 slot, both EN/NL, `note: false` so no "TBA *" asterisk). When adding/confirming a speaker, update BOTH the `SPEAKERS` array AND the corresponding `agenda.rows` "Speaker TBA"/"Spreker TBA" entry.

See [[project-salon-sponsors]] (same confirmed-first-then-open-slots pattern) and [[project-salon-registration]].
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_salon_sponsors.md shape=nested body=md eol=lf finalnl=1 hash=sha256:b3f3ee5ecda7e5f16cee432681b22d0f6daf35ce05816e8c365879eba628a286 -->
---
name: project-salon-sponsors
description: AI Salon page confirmed sponsors and how sponsor logos are wired in
metadata: 
  node_type: memory
  type: project
  originSessionId: 5e569cc9-e36a-430a-a8dd-fff9da0778e6
---

AI Salon Groningen kick-off (3 Sep 2026) confirmed sponsors render on `pages/AISalonPage.tsx` via the language-agnostic `SPONSOR_LOGOS` array (name / src / optional href). Real logos render first on a white tile (so dark logos pop), then the remaining open slots fill from `copy.sponsors.slots` (6 tiles total) as "Your logo" mailto placeholders.

Logo assets live in `public/sponsors/`.

Confirmed sponsors:
- **Drydock** (first sponsor, added 2026-05-29) — navy #192e44 logo (icon + wordmark), roughly square. No website URL on file yet, so `href` is omitted and the tile is non-clickable.

Drydock logo (RESOLVED for real 2026-05-30): now served as **`/sponsors/drydock.svg?v=5`** (vector). Root cause of the "dark/black box" the user kept seeing: the user-supplied PNG (`RGB_Logo_DRYDOCK_DonkerBlauw.png`, 2922×2318) IS genuinely transparent (PIL: corners rgba(0,0,0,0)), BUT its transparent pixels store black RGB. When the browser downscales that huge image to ~116px on the tile, the bilinear/mipmap filter averages the black RGB of the transparent pixels into the result → a dark wash with the navy logo barely visible (navy #192e44 on near-black ≈ invisible). The fix is to NOT serve a giant black-RGB-transparent PNG scaled way down. The `drydock.svg` (single navy path, `fill-rule: evenodd`) renders cleanly as a vector at display resolution with zero fringing — confirmed by rendering it in headless Chromium (omitBackground) which produced a transparent raster with navy content, NOT a block. So the SVG was never actually broken; the early "navy block" reports were stale browser cache (same filename, only `?v=` changed — hard-refresh needed). Logo size: `max-h-[96px] md:max-h-[116px] max-w-[90%]` on a white tile.

Lesson: a transparent PNG can still render dark when it's much larger than its display size and its transparent pixels carry dark RGB — downscaling bleeds that RGB in. Prefer the SVG, or a PNG sized near its display dimensions. `public/sponsors/drydock.png` now holds a clean 1200×952 SVG-rasterized transparent copy (unused fallback; src points to the SVG).

Lesson: when an asset "looks broken" but the file looks correct, sample the actual rendered pixels (Playwright + canvas getImageData) rather than guessing — and suspect browser cache. The image-read tool is unusable once large (>2000px wide) screenshots are in context, so pixel-sampling is the reliable verification path this session.

To add a sponsor: drop the logo in `public/sponsors/`, add an entry to `SPONSOR_LOGOS`. If you have the sponsor's URL, set `href` to make the tile clickable. See [[design-inspiration]] for the page aesthetic.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_seo_geo_strategy.md shape=nested body=md eol=lf finalnl=0 hash=sha256:d8f1ac4f18eb38c0d5ac0da1d79c2f4e89080c28f5578a18790aa5796b8c8f1c -->
---
name: project-seo-geo-strategy
description: "SEO/GEO ranking diagnosis and strategy for the AI Heroes site — why it ranks page 3 for \"AI consultancy Groningen\" and the free-action plan"
metadata: 
  node_type: memory
  type: project
  originSessionId: 8ab6cf7e-2da9-4129-8bc5-9bc417e6a7eb
---

Two audits exist: `AUDIT-SEO-GEO-2026-06.md` (2026-06-08, audited the live SPA) and **`AUDIT-SEO-FULL-2026-06-10.md` (2026-06-10, multi-agent audit of the Astro branch + live/off-site — the current canonical one)**. Both build on `AUDIT-CONTENT-PAGES.md` (2026-03-08). Triggered by the site ranking ~page 3 for "AI consultancy near Groningen".

**Diagnosis (the ranking problem is mostly NOT code):**
1. No **Google Business Profile** → absent from the local map pack, which sits above organic. Highest-impact free fix, off-site.
2. **No page targets the query** — not one title tag contains "Groningen" except the AI Salon page; the brand repositioned away from "consultancy" (the word people search). Approved fixes: add Groningen to homepage/consulting titles + build a dedicated NL "AI consultancy Groningen" landing page (mirror competitor AICG's `/wij-groningen/`).
3. **Authority** — `groningen.ai` has an unbeatable exact-match domain; **DataNorth** wins on content/listicles (the replicable path).

**GEO (AI-assistant visibility):** NL market is ~83% ChatGPT, and ChatGPT sources from **Bing** → **Bing Webmaster Tools + Bing indexing is the top GEO action**. Unlinked brand mentions and "best AI agency NL" listicle inclusion matter more than backlinks. `llms.txt` is largely ignored by crawlers (skip). robots.txt currently allow-all, which is correct for a small agency wanting discovery — never block AI *search* bots (OAI-SearchBot, PerplexityBot, Claude-SearchBot).

**SHIPPED to master 2026-06-08 (Phases 1-2 of the SEO recovery plan):**
- Migration redirects in `netlify.toml`: added 301s for legacy URLs that still ranked but weren't redirected (/the-team/, /home, /home-nederlands/, /contact-us/, /design-track/ + /ai-that-makes-your-vision-real/ → custom-ai-solutions, /making-text-more-inclusive-with-ai/ → ai-literacy); flipped 3 authority-discarding 410s to 301s (/how-to-get-started-* + /5-ways-generative-* → ai-strategy-guide, /mastermind-form/ → /#contact). The /design-track/, /vision-real/, /inclusive/, /mastermind/ targets were **best-guesses** — Frans can correct.
- Decision was **national-first** (not Groningen): homepage title → "Full-Service AI Agency Nederland | ...". GSC data showed ~76% branded clicks, money terms at pos 19-71, Groningen terms pos 60-73 (basically unranked). New reusable `seoTitle` prop in useSEO/PageLayout (keyword-target <title> without changing visible H1).
- New national landing pages: `/nl/diensten/ai-bureau-nederland` + `/en/services/ai-agency-netherlands` (target "AI bureau/bedrijf/consultancy Nederland"), linked sitewide via footer.
- Sitemap gaps filled (/en, overview pages, digital-twins, ai-salon, landing pages); /hanze noindex; legal pages removed from sitemap.

**Prerendering — DEFERRED to an Astro re-platform.** vite-react-ssg rejected (peer-deps React Router 6; app is on RR7; beta). Best-practice conclusion: the long-term fix for SEO+speed+stability is a static-first framework, **Astro** (renders existing React components, native SSG, minimal JS). Full plan written at `ASTRO-MIGRATION-PLAN.md`. The CSR ceiling (non-JS crawlers see homepage meta on every route; caps Bing→ChatGPT/GEO) remains until that migration. Browser-global guards already added (HomePage `getInitialLanguage`, routing `detectVisitorLang`) as prep.

~~Open technical gaps~~ — most resolved on the Astro branch (per-page meta/hreflang, trailing-slash never, /hanze noindex, Event/JobPosting/Article schema baked). See the 2026-06-10 audit for current state.

**IMPLEMENTED 2026-06-11/12 on `feat/astro-migration` (commits 4d31b30..38a3c89):** all on-site audit actions are done — pre-cutover blockers (robots→sitemap-index, sitemap noindex filter via `src/data/seo.ts` NOINDEX_PATHS, eu-consultancy retitled to Sovereign AI Consultancy NL+EN, `scripts/check-redirect-parity.mjs` + 80-URL fixture), seoTitle pass on the service catalog, org schema sitewide via BaseLayout (skips pages passing their own org-type block), llms.txt, 6 new commercial pages (ai-consultancy-groningen↔ai-agency-groningen, ai-geletterdheid-training↔ai-literacy-training, incompany-ai-training; linked via Footer hardcodes like the bureau page, NOT mega-menu — nav audit pending), 7 article pairs incl. AI Act pillar + top-10 listicle, articles now support `faq` frontmatter → FAQPage JSON-LD + visible FAQ + visible publish/updated dates. Remaining: manual off-site work per `docs/seo-offsite-checklist.md` and the cutover ritual per `docs/seo-cutover-checklist.md`. Enforcement claim verified: Art. 4 handhaving NL vanaf 2 aug 2026, AP coördineert, boetes art. 99(4) tot EUR 15M/3%.

**2026-06-10 full audit — key findings (report: `AUDIT-SEO-FULL-2026-06-10.md`):**
- **Bing already ranks aiheroes.io #5 for "AI consultancy Groningen"** (vs Google page 3); ChatGPT citations match Bing top-10 ~87%, so the citation window opens the moment the Astro static HTML ships. Protect at cutover: Bing sitemap resubmit + IndexNow + GPTBot/bingbot curl checks.
- **Pre-cutover blockers on the Astro branch:** (1) `public/robots.txt` points at the stale hand-maintained `sitemap.xml` instead of Astro's generated `sitemap-index.xml` (delete the old file); (2) `sitemap()` in `astro.config.mjs` has no noindex filter (/hanze, /nl/menu, legal pages get listed while noindexed); (3) duplicate titles: `eu-consultancy.astro` is identical to the digital-independence page in BOTH languages; (4) crawl the old sitemap's 80 URLs against a draft deploy for redirect parity.
- **Best near-term keyword: "AI geletterdheid training"** (EU AI Act Article 4; Dutch enforcement 2 Aug 2026; no SERP incumbent; article exists at `src/content/articles/ai-geletterdheid.mdx` but no service page monetizes it). EN twin: retitle eu-training to "AI Literacy Training | EU AI Act Article 4"; free listing at artificialintelligenceact.eu/ai-literacy-programs/.
- **Brand collision:** an unrelated Amsterdam "AI Heroes" (ai-heroes.co) owns the Clutch/The Manifest profiles — claim disambiguated "AI Heroes B.V., Groningen" profiles. **Stale NAP:** Oozo.nl still lists old Vechtstraat address.
- **Off-site is the weakest axis:** zero presence in the NL "beste AI bureaus" listicles AI assistants cite — outreach targets: appfront.nl, ploko.nl, aifais.com, aisuperior.com, sortlist.nl, ensun.io, consultancy.nl. DataNorth's self-published Top-10 listicle is the replicable move.
- **Service titles use product names, not search language** ("AI Foundations" vs "incompany AI training", "AI op Maat" vs "AI software laten maken") — cheap seoTitle pass.
- Still no page targets "AI consultancy Groningen" (carry-over); plan: `/nl/diensten/ai-consultancy-groningen` with LocalBusiness schema + GBP claim.

See [[reference-design-inspiration]] context and CLAUDE.md for stack.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=project_workspace_to_cirrux_migration.md shape=nested body=md eol=lf finalnl=1 hash=sha256:96eb6e2d2458cb9453e35bdf8c0363b0aadd9cbe6b0d32621ac558784417f085 -->
---
name: project-workspace-to-cirrux-migration
description: "Plan to migrate AI Heroes off Google Workspace to Cirrux email, keeping free @aiheroes.io Google accounts for sign-in"
metadata: 
  node_type: memory
  type: project
  originSessionId: a838aab5-576d-47e1-a8f6-bc92a7a806d6
---

AI Heroes bought the company/domain from previous owner Joseph and is migrating off Google Workspace (too expensive) to **Cirrux** (Amsterdam-based, EU/GDPR, IMAP/SMTP/CalDAV/CardDAV — fits the data-sovereignty positioning). Planning started 2026-06-08.

Scope: 3 founder mailboxes (frans@, jan@, david@) + aliases (info@, sales@, joseph@-as-forward); email + calendar + contacts + Drive files. Founders hold Workspace **super-admin** (not dependent on Joseph).

**Key insight:** a Google *account* ≠ Google *Workspace*. End state = free consumer Google accounts created on the real @aiheroes.io addresses (signup → "use existing email", verify via Cirrux mailbox) handle all "sign in with Google" needs (Search Console, Business Profile, Analytics, Ads, Cloud/Gemini, YouTube) at zero cost.

**Sequencing traps:**
- Can't create free @aiheroes.io consumer accounts until the domain is *removed from Workspace* (Google blocks the conflict while managed).
- Must re-home Google asset ownership BEFORE deleting Workspace or assets orphan. **Google Business Profile is the single highest-risk asset** (central to local-SEO recovery) — protect with a temporary bridge Gmail owner in phase 1.
- Keep the two `google-site-verification` DNS TXT records — they let any free account re-verify Search Console.
- Website (Netlify ALIAS/www/dev) and SES+SendGrid sending (subdomains) are untouched by the mail migration.
- Current DMARC rua points to joseph@ (former owner) — repoint. MX records + a `mbmail → dns.mnbrd.email` delegation still need confirming.

Related: [[project-seo-geo-strategy]], [[reference_dev_port_conflict]]. Public website repo means migration ops docs (admin/ownership detail) should NOT be committed there.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=reference_design_inspiration.md shape=nested body=md eol=lf finalnl=1 hash=sha256:220c61cdea54ebcfff79ce3660c549c0e076c5bb71b7fdce140f755dfbae8b88 -->
---
name: design-inspiration
description: "User's design benchmark for hand-crafted/clean pages: resend.com/forward. Used as explicit reference for AI Salon page redesign."
metadata: 
  node_type: memory
  type: reference
  originSessionId: 2a25b9c7-4648-447e-8440-eef6f5ab90d1
---

When user asks for "clean", "hand-crafted", "minimal", or invokes an event/landing page redesign, **resend.com/forward** is the explicit benchmark. They said "I love everything about this page" during the AI Salon redesign (2026-05-28).

Defining properties of that aesthetic family:

- Cream / warm background, no pure white
- Hairline rules (1px borders at low opacity) instead of cards, shadows, gradients
- Generous whitespace, full-viewport sections
- Body-length hero copy, no banner image dominating
- Monospace (IBM Plex Mono) for chrome: labels, timestamps, meta strips, form labels
- Honest "TBA" placeholders that double as design objects (blank polaroids, empty logo spots)
- Single accent color used sparingly (in this project: brand-red)
- Sans-serif throughout, no decorative type contrast except one moment

For community-event positioning copy, also echoes the NYC/SF AI Salon chapter aesthetic — decentralized, chapter-based, participatory ("by you?" prompts on speakers/sponsors/pitches).

Implemented on `pages/AISalonPage.tsx` (added IBM Plex Mono to fonts in `index.html` + `index.css`).

**How to apply:** When user requests similar design quality on another page, propose patterns from this same family rather than copying the same layout. Reach for hairlines, mono labels, generous full-viewport sections, and the cream-on-dark/light alternating rhythm before reaching for cards or iconography.
<!-- ccsync:fact-end -->
<!-- ccsync:fact file=reference_dev_port_conflict.md shape=nested body=md eol=lf finalnl=1 hash=sha256:ed0caec26d6def62f6a161ee7f447f5fe2dea1fd6c3d806d3c3b18b53f877c5d -->
---
name: dev-port-conflict
description: "Port 3000 is shared with sister project ivosw (Next.js). Use --port 3001 for this project's Vite dev server to avoid Windows dual-stack binding chaos."
metadata: 
  node_type: memory
  type: reference
  originSessionId: 2a25b9c7-4648-447e-8440-eef6f5ab90d1
---

`aiheroes-website` dev server defaults to port **3000** (set in `vite.config.ts`).

The sister project at `~/Projects/ivosw` (Next.js 16 + Turbopack) also defaults to **3000**.

On Windows, when both run simultaneously, dual-stack binding fails asymmetrically: Next holds IPv4 `0.0.0.0:3000` while Vite ends up only on IPv6 `[::1]:3000`. The browser hits `localhost:3000` → resolves to IPv4 first → gets Next's Turbopack error from the wrong project. Vite reports it's "ready on 3000" — misleading.

**Workaround:** start this project's dev server with `npm run dev -- --port 3001`.

**Why:** Diagnosed 2026-05-28 after the user pasted a Turbopack error that traced back to `claude-projects/ivosw/.next/...`. Wasted ~5 min figuring out the binding situation. The Vite "ready" message gives no warning.

**How to apply:** When starting the dev server for this project and the user is also working in ivosw, default to `--port 3001`. If the user reports seeing a Next.js / Turbopack error on `localhost:3000` while testing this site, check `netstat | findstr :3000` for two processes before redesigning anything.
<!-- ccsync:fact-end -->
<!-- ccsync:end region=memory -->

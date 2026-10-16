# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository

GitHub: https://github.com/AIHeroes/aiheroes-website — **public**, owned by the AIHeroes org. Deploys to Vercel through the GitHub Actions workflow on push to `master` (see Preview workflow below).

## Commands

```bash
npm run dev      # Start Astro dev server on port 3001 (3000 is shared with sister project ivosw)
npm run build    # Production build (static SSG) to dist/
npm run preview  # Preview the production build
npm run check    # astro check — type-checks .astro/.ts/.tsx (run before committing)
```

No unit-test framework is configured; `npm run check` is the gate.

## Architecture

**Tech Stack:** Astro 5 (static output / SSG), MDX content collections via `@astrojs/mdx`, `@astrojs/sitemap`, a React 19 island only for the chat assistant (`@astrojs/react`), Tailwind CSS 4 only for that chat widget. Serverless functions live in `api/` (Vercel).

**Deployment:** Vercel, static pages plus a few functions in `api/`. `astro.config.mjs` sets `site: 'https://aiheroes.io'`, `trailingSlash: 'never'`, and `build.format: 'file'` (emits `page.html`, not `page/index.html`, so the host serves no-slash URLs with a 200 instead of 301ing to a trailing slash — this matches the no-slash canonicals/sitemap/hreflang).

**The site is in the AI Heroes house style** since the relaunch (branch `relaunch`, 2026-10). Plan, decisions and per-page plans: `docs/relaunch/` (`00-opzet.md` URLs and redirects, `01-besluiten.md` decisions, `02-bouwplan.md` build plan, `pages/` one plan per page). Design rules: `src/components/hs/DESIGN.md`; asset provenance: `src/components/hs/ASSETS.md`.

### Layout and building blocks

- `src/layouts/HsLayout.astro` is the only layout: SEO head (title/seoTitle/description/OG/canonical/hreflang/robots/JSON-LD, organisation schema on every page, BreadcrumbList from `crumbs`), self-hosted Inter (`/fonts/inter`, `cv08` for the serifed I), nav, footer, the chat widget and `<ClientRouter />`.
- `src/components/hs/` holds every block: `HsPageCover`, `HsSection`, `HsCards`, `HsSteps`, `HsFigures`, `HsFaq`, `HsCase`, `HsStandardList`, `HsSplit`, `HsFit`, `HsCtaBand`, `HsContact` (posts to `/api/contact`), `HsOtherEntries`, the homepage blocks (`HsCover`, `HsEntries`, `HsQuotes`, `HsStandard`, `HsPlace`, `HsStatement`) and the templates `HsLanding`, `HsArticle`, `HsCaseStudy`, `HsCampaign`, `HsHelp`. Styles: `src/styles/huisstijl.css` (tokens, homepage) and `src/styles/hs-pages.css` (subpage blocks), scoped under `.hs`.
- `hs.ts`: `zet()` sets Dutch (and English) line breaks; `display()` marks the one punch word written as `*word*` in a heading, `" | "` marks hand-set breaks; `rich()` renders `[label](href)` links; `ICONS` is the IconPark Outline set (only icons from this map).
- `hs-client.ts`: cover rotation, reveals, counting figures, menu and sub-menu bar, forms, filters.
- Components read the language from the URL (`langOf()` / `ui()` in `src/data/ui.ts`); Dutch is the default.

### Data and content

- `src/data/site.ts` — recurring facts (start sprint six days from €8.000, start within two weeks, builds from €15.000, training from €2.500 per dagdeel, contact data) and the three entries (`ENTRIES`, `ENTRIES_EN`, `entriesFor`); `SITE_EN` for English notation. Change prices and terms here, never in page copy.
- `src/data/nav.ts` — menu and footer per language. `src/data/team.ts` — the founders (bios, calendars, `en` texts). `src/data/salon.ts`, `jobs.ts`, `campaigns.ts` — AI Salon editions/speakers/sponsors, vacancies, De AI Storm.
- `src/data/i18n.ts` — `PATH_PAIRS` (whole-path NL/EN pairs for the flat URLs) plus `SEGMENT_NL_TO_EN`; `counterpart()` drives hreflang and the language switch.
- `src/data/schema.ts` — JSON-LD builders (organisation, Service, FAQPage, Article, BreadcrumbList).
- **Content Collections** (`src/content.config.ts`): `caseStudies` (`src/content/case-studies/{nl,en}`), `landings` (`src/content/landings/{nl,en}`), `kennis` (`src/content/kennis/{nl,en}`), all MDX with typed frontmatter. Routes: `src/pages/{nl,en}/cases/[slug].astro`, `src/pages/{nl,en}/[landing].astro`, `src/pages/nl/kennis/[slug].astro`, `src/pages/en/insights/[slug].astro`.
- **`constants.ts` (root)** still feeds the homepage blocks (`CONTENT` via `src/data/content.ts`, types via `src/data/types.ts`). The old React SPA tree (`pages/`, `components/`, `hooks/`, islands, `BaseLayout`, `SubpageLayout`) was removed in the relaunch.
- Positioning: `docs/company-profile.md` (canonical) and `AGENTS.md`.

### Routing

- Dutch home on `/`, English on `/en`; `/nl` redirects to `/`. Pillars and landings are flat (`/nl/startsprint`, `/nl/nieuwe-ai-toepassing`, `/nl/ai-klantenservice`, `/en/start-sprint`, `/en/new-ai-tool` …); knowledge on `/nl/kennis/*` and `/en/insights/*`.
- `src/pages/404.astro` is bilingual and a client-side bare-path catch-all: prefix-less URLs like `/over-ons`, `/about`, `/ai-salon` resolve to the right `/nl|/en` page.
- Noindexed paths live in `src/data/seo.ts` (`NOINDEX_PATHS`) and are filtered out of the sitemap.

## Adding pages / content

- **New page:** `src/pages/{nl,en}/x.astro` with `HsLayout` and the blocks in `src/components/hs/`; Dutch first, then English. Add the NL/EN pair to `PATH_PAIRS` in `src/data/i18n.ts` and, if it belongs in the menu or footer, to `src/data/nav.ts`.
- **New case, landing or article:** an MDX file in the matching collection folder with valid frontmatter; the route, schema and links generate automatically.
- **House rules for copy:** no em-dashes, no "geen X maar Y" / "not X but Y", one punch word per heading, never claim the source code belongs to the client (exception: extra developers working in the client's own code), Medux never named on the homepage, no invented facts. `npm run check` also fails on side stripes.
- **Moving a URL:** add a 301 in `vercel.json` (no chains: point older redirects straight at the new target) and run `node scripts/check-redirect-parity.mjs <preview-url>` (it checks the old sitemap and every Search Console URL).

## Search, GEO and agents

- `npm run build` = `astro build` + `scripts/build-markdown.mjs` (every indexable page also as `<path>.md`, the homepage as `/index.md`, plus `/llms-full.txt`; served with `X-Robots-Tag: noindex`, linked from each page's head and from `public/llms.txt`) + `scripts/build-agent-skills.mjs` + the chat index.
- Markdown by content negotiation: `middleware.ts` (Vercel Routing Middleware, Node runtime; vercel.json rewrites run after the filesystem, so they cannot do this) answers `Accept: text/markdown` on `/`, `/en`, `/nl/*`, `/en/*` with that page's `.md` (`Content-Type: text/markdown`, `x-markdown-tokens`, `Vary: Accept`); browsers keep getting HTML.
- MCP server: `api/mcp/index.ts` on `/mcp` (rewrite), stateless Streamable HTTP, read-only tools `search` (the chat index), `get_page`, `list_pages` (the `dist/**/*.md` files, bundled via `includeFiles`) and `get_company_facts` (`src/data/site.ts`, `team.ts`). Server card: `public/.well-known/mcp/server-card.json` (also on `/mcp/server-card`).
- Agent skills: `public/.well-known/agent-skills/<name>/SKILL.md`; the build writes `index.json` with each file's sha256, so edit a skill freely. Skills point to live facts; keep prices out of them.
- `public/.well-known/ai-catalog.json` (ARD, also on `/.well-known/ard.json`) lists the MCP server, the skills and llms.txt; `api-catalog` lists the MCP server too. `/.well-known/*` is served with `Access-Control-Allow-Origin: *`.
- WebMCP: `src/components/hs/webmcp.ts` registers `search_site`, `read_page` and `open_page` in browsers with `document.modelContext`; the contact form is the declarative tool `contact_aiheroes` (`toolname` in `HsContact`, types in `src/webmcp.d.ts`), and `initForm` sends the outcome back to the agent (`respondWith`). The visitor still clicks send.
- Not published on purpose: OAuth/OIDC metadata and auth.md (no protected APIs), DNS-AID (needs SVCB records and DNSSEC at the DNS host, Namecheap).
- The sitemap's `<lastmod>` comes from each page's last commit (`scripts/lastmod.mjs`); the deploy job checks out full history for it.
- IndexNow (Bing, which feeds ChatGPT search and Copilot): the deploy workflow runs `node scripts/indexnow.mjs --since <previous master>` after each production deploy; by hand: `--all`, a list of URLs, or `--dry-run`. The key is `public/<32 hex>.txt`.
- Organisation schema (`src/data/schema.ts`): `sameAs` holds only verified profiles (LinkedIn, GitHub, the Google Business Profile kgmid); `knowsAbout` lists the specialisms.

## Preview workflow

Hosting is **Vercel** (team `ai-heroes`, project `aiheroes-website`, functions in `api/`
pinned to `fra1`; see `vercel.json`). Deploys run through the org's GitHub Actions workflow
(`.github/workflows/vercel.yml`: `npm run check` gates every deploy; PRs get preview deployments).
Manual previews from a local checkout:

```bash
vercel deploy            # preview URL (noindex by default)
vercel deploy --prod     # production — only from master, only after the parity suite is green
node scripts/check-parity.mjs <preview-url>   # SEO/behaviour parity vs https://aiheroes.io
```

Forms (`/api/contact`, `/api/apply`) and chat escalation mail go through Resend from `send.aiheroes.io`
to `MAIL_TO` (default `info@aiheroes.io`, see `server/config.ts`). Redirects, 410s and headers live in
`vercel.json`, the single source of truth. Netlify is fully retired (2026-09-24).

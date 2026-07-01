# AI Heroes Website — Revamp Roadmap

**Date:** 2026-07-01
**Status:** Plan for review — no code changes made yet
**Trigger:** Human review of every page (quality tiers) + a menu rethink + a discovered production bug in the static navbar.

This document is the plan. It captures the diagnosis of *why* pages land where they do, the target structure, the workstreams, the page-by-page fate of the Diensten section, the sequencing, and the open decisions that need Frans's sign-off before building. Read §1–3 for the thinking, §4–6 for the work, §7–9 for decisions and dependencies.

---

## 1. The core diagnosis — one axis explains almost the whole ranking

The page-quality ranking tracks **how the page body is built** far more than what it's about. There are three construction tiers in this repo, and the ratings line up with them almost perfectly:

| Rating | Pages | How they're built |
|---|---|---|
| **Amazing** | Home, AI Salon | Bespoke React island — own chrome, full-viewport sections, real interactivity |
| **Good** | Careers, De AI Storm (TV) | Bespoke island / standalone `.astro` component |
| **Good → Mediocre** | EU AI Consultancy, Onze aanpak | `SubpageLayout` template, body *heavily enriched* with custom `not-prose` blocks |
| **Mediocre** | Over AI Heroes, Team | `SubpageLayout`, lighter enrichment + stale content |
| **Bad** | The 24 service pages, AI-geletterdheid, Strategie-gids | Thin content poured into `SubpageLayout`'s prose slot / stale MDX |
| **Terrible** | Case studies | Thinnest content, rigid template, no index, no schema, barely linked |

**The through-line:** good pages are *designed artifacts*. Bad pages are thin content poured into a generic shell. Topic barely matters — EU Consultancy and the 24 dead service pages are the *same* `SubpageLayout` shell; one got ~80% custom blocks + named social proof, the others got a prose dump.

### The 6 ingredients the good pages share
1. **Bespoke section components, not a generic prose template** — Hero slideshow, GlowCards, testimonial wall, agenda list, video centerpiece. Each is designed, not stacked `<p>`/`<h3>`.
2. **A strong, visual hero** — full-bleed imagery or cinematic gradients, oversized `clamp()`/`text-balance` display type, one clear CTA. The template's flat dark title-bar is the tell of a weak page.
3. **Custom interactivity / motion** — scroll-aware navbar, staggered reveals, carousels, Luma/video embeds, topic-synced forms. Bad pages are inert.
4. **Varied vertical rhythm** — deliberate dark/light/sand alternation and full-bleed bands. Bad pages are one uniform column.
5. **Concrete, named social proof** — Tweede Kamer, Postcode Loterij, broadcaster logos, hard stats. Bad pages have none or vague ones.
6. **Intentional typographic voice + polish** — expressive type systems plus real structured data (`Event`, `VideoObject`), `prefers-reduced-motion`, bot-protected/lead-tagged forms.

### Why the tiers fall where they do
- **Mediocre (Over AI Heroes, Team):** right shell, under-designed and stale. One enrichment pass from good. Team info is also out of date.
- **Bad (24 service pages):** all the *same* thin template (intro → bordered list → card grid → numbered steps → stat grid → CTA), content hard-coded inline, no imagery, no motion, no real proof. 24 near-identical thin pages is *itself* the problem — it's why the menu feels like a maze.
- **Terrible (case studies):** compounds every failure — thinnest content (only Medux has hard metrics; OLX/InnoEnergy have zero outcome numbers), rigid inline-HTML template, **no index page**, **not in nav or on the homepage**, reachable only via scattered deep links, and **no case-study schema**. The best sales asset is the least discoverable thing on the site.
- **Stale (AI-geletterdheid / Strategie-gids):** MDX articles dated Sept/Oct 2025 sitting behind the Resources menu.

---

## 2. The quality bar (definition of done for any reworked or new page)

Every page we touch or create in this revamp must clear this bar. It's the operational version of the 6 ingredients:

- [ ] A **distinctive hero** — imagery or gradient, `clamp()` display type, one primary CTA. Not the flat dark title-bar.
- [ ] Built from **bespoke section components**, not stacked prose in the slot.
- [ ] **Varied rhythm** — alternating dark/light/sand sections, at least one full-bleed band.
- [ ] **Concrete social proof** on-page — named clients, a relevant case link, or hard stats.
- [ ] **At least one custom detail** — motion, an interactive element, a distinctive type treatment, or a real embed. (Static is fine for deep content pages; inert-and-generic is not.)
- [ ] **Structured data** appropriate to the page type (`Service`, `Article`, `CaseStudy`/`Event`, etc.).
- [ ] A **clear next step** — lead-tagged contact CTA wired to the right topic.

### The multiplier: a shared "rich blocks" library (WS-0)
Right now every enriched page re-hand-codes the same inline HTML (stat grids, callout boxes, numbered steps, card grids, CTA bands). Before mass page work, extract these into a small set of reusable `.astro` components (e.g. `StatGrid`, `Callout`, `ProcessSteps`, `CardGrid`, `PullQuote`, `ProofRow`, `CtaBand`). Then pillar pages, enriched landers, cases, and the mediocre-page rework all inherit polish instead of reinventing it. This is what makes the rest of the roadmap fast and consistent.

---

## 3. Target information architecture

### Menu — before
```
Diensten ▾ (15 SKU links across 3 columns + EU featured)
Over ons ▾ (Aanpak · Team · Vacatures)
Resources ▾ (AI-geletterdheid · AI Strategie Gids  ← both stale)
AI Salon         (hardcoded standalone link)
Contact          (CTA)
```

### Menu — after
```
Diensten ▾   → 3 pillar destinations
   ├─ Training     → /nl/diensten/training     (bespoke pillar page)
   ├─ Consultancy  → /nl/diensten/consultancy  (bespoke pillar page)
   ├─ Software     → /nl/diensten/software     (bespoke pillar page)
   └─ featured: EU AI Consultancy (cross-pillar)

Over ons ▾   → real mega-menu, grouped
   ├─ Bedrijf:            Onze aanpak · Het team · Ons verhaal
   ├─ Media & community:  AI Salon · Zoals gezien op TV
   └─ Werken bij:         Vacatures

Contact      (CTA)

(Resources: removed. Cases: gets an index + placement — see WS-4 / open decisions.)
```

**Why this fixes "too easy to get lost":** the Diensten menu drops from 15 near-identical SKU links to 3 substantive destinations; Resources (two weak pages) disappears; and the Over-ons mega-menu gives every good-but-underlinked page (AI Salon, the TV feature) a clear home instead of being an orphan or a hardcoded one-off.

---

## 4. Workstreams

### WS-0 — Shared design-system primitives (foundation)
**Goal:** a small reusable `.astro` block library so every page shares polish.
**Scope:** `StatGrid`, `Callout`, `ProcessSteps`, `CardGrid`, `PullQuote`, `ProofRow`, `CtaBand` (names TBD), extracted from the patterns already hand-coded across EU Consultancy, aanpak, and the service pages.
**Depends on:** nothing. Do first.

### WS-1 — Navbar: bug fix + convergence
**The live bug (root cause confirmed).** The static Astro navbar's desktop dropdowns don't open on any content page. The `<header>` always carries `navbar-clear`/`navbar-blur`, both of which apply a `backdrop-filter` — even the "clear" state sets `backdrop-filter: blur(0px)` (`src/styles/global.css:112-137`), which is still a filter, not `none`. A non-`none` `backdrop-filter` makes an element clip its descendants to its own box. The mega-menu panels are `absolute top-full` descendants of that header (`src/components/static/Navbar.astro:80, 129`), hanging *below* the 96px header box — so they get clipped to nothing. They toggle visible on hover; they're just painted outside the clip region.

**Why Home/AI Salon are fine:** the React navbar deliberately renders its dropdown as a **`position: fixed` sibling *outside* the blurred bar** (`components/Navbar.tsx:633-636`, panel at `:326-328`), labelled *"Unified dropdown panel (fixed position, outside nav flow)."* The Astro port didn't replicate that separation.

**Scope of the bug:** desktop dropdowns (Diensten / Over ons / Resources) on **every** `SubpageLayout`/`BaseLayout` page — all 24 service pages, cases, and About subpages. Mobile is a separate JS accordion and works. Islands (Home, AI Salon, careers) use the React navbar and are unaffected.

- **WS-1a — Hotfix (small).** Restructure `Navbar.astro` so the `backdrop-filter` sits on an inner bar-background layer that does *not* contain the panels; make the panels siblings of that layer (or a `fixed`/`absolute` element anchored to the header but outside the filtered box). No data/content change. *(Deferred — not executed now per current goal.)*
- **WS-1b — Convergence to one navbar (recommended, bigger).** Consolidate on a **single Astro navbar** used everywhere, with two *looks* (frontier scroll-split vs compact) as **variants of one component**, driven by a small vanilla scroll script. Retire the legacy React navbar; make Home/AI Salon use shared chrome (`SubpageLayout.astro:35` already flags the scroll-theme as *"ported later"*).

**Why not "just use the React navbar everywhere":** it's `client:load`, so it would hydrate React eagerly, above the fold, on ~50 currently-light static pages — regressing the migration's whole point. Its dropdowns are state-driven, so a non-hydrated render wouldn't open at all (same failure). And the two-navbar split is a *deliberate* design decision (frontier vs deep-content tiers) — the fix is to single-source it as one Astro component, not to bring React everywhere. Note the nav *data* is already single-source (`constants.ts`); only the *markup* is duplicated.

### WS-2 — Diensten: collapse 24 → 3 bespoke pillar pages
**Goal:** replace the "frankenstein" overview + 24 thin SKU pages with 3 rich, bespoke pillar pages, keeping only a few SEO landers.
**Chosen model:** collapse (not "keep SKUs"). Fold the SKU content into pillar-page sections so nothing is lost; retire the standalone SKU routes with 301s; keep a short list of SEO landers.
**New pages:** `/nl/diensten/{training,consultancy,software}` + `/en/services/{training,consulting,software}` — each must clear the quality bar (strong hero, bespoke sections consolidating that pillar's offerings, pillar-specific proof + relevant case links, pricing, process, lead-tagged CTA, `Service` schema).
**The overview `/nl/diensten`:** becomes a **slim bespoke hub** (3 pillar cards + "hoe we werken" methodology + proof + contact), shedding the frankenstein's FAQ/stats bloat (`pages/nl/Diensten.tsx`, 614 lines). It stays as the mega-menu's parent destination.
**Full page-by-page fate:** see §5.
**Depends on:** WS-0 (blocks), and its redirects/menu wiring feed WS-3.

### WS-3 — Menu / IA restructure
**Goal:** the "after" menu in §3.
**Scope:**
- **Kill Resources:** remove `nav.resources` (NL `constants.ts:36-43`, EN `~725+`); make `NavStructure.resources` optional in `types.ts:25` (currently required — build breaks otherwise); remove the render branches in both navbars (`Navbar.tsx:19, 321-322, 358-367, 652`; `Navbar.astro:59-62`).
- **Diensten → 3 pillar destinations:** repoint the mega-menu columns from `#training/#consulting/#software` anchors to the real pillar pages; drop the 15 SKU child links (they're collapsed).
- **Over ons → mega-menu:** generalize (or clone) the mega-menu panel — currently hardcoded to services, and the `NavChild.category` union only allows `training|consulting|software` (`types.ts:7`), so grouping About needs a widened union or a second grouped panel. Add the three groups (Bedrijf / Media & community / Werken bij).
- Surfaces AI Salon and the TV feature (currently a hardcoded link / near-orphan) inside Over ons.
**Depends on:** WS-2 (destinations must exist), WS-1 (do on a working, ideally single, navbar).

### WS-4 — Case studies rework (the biggest quality jump)
**Goal:** turn the worst-but-most-valuable asset into a real portfolio.
**Scope:**
- **Add a cases index** at `/nl/cases` + `/en/cases` (currently none) — a card grid of all cases.
- **Extract reusable case components** (challenge / solution / results-metrics / quote / about / CTA) to replace the inline-HTML repeated in every MDX file (`src/content/cases/{nl,en}/*.mdx`).
- **Add `CaseStudy`/`Article` schema** (case pages currently emit none — `src/pages/{nl,en}/cases/[slug].astro`).
- **Placement:** link cases from the homepage social-proof section and from each pillar page; decide nav placement (open decision).
- **Content depth:** Medux is the model (hard metrics). OLX / InnoEnergy / Trabu need real outcome numbers — client input required (dependency on Frans).
- **Redesign the single-case page** to clear the quality bar (currently thin `SubpageLayout` prose).
**Depends on:** WS-0 (components).

### WS-5 — Mediocre-page enrichment
**Goal:** push Over AI Heroes and Team from mediocre → good with one enrichment pass.
**Scope:**
- **Over AI Heroes:** cut text volume, add bespoke sections (story/timeline, values, proof), imagery.
- **Team:** refresh stale info (needs current data from Frans), better layout, link to careers.
**Depends on:** WS-0.

### WS-6 — Stale content disposition
**Goal:** deal with the two Resources articles once the menu drops Resources.
**Scope:** AI-geletterdheid (`src/content/articles/ai-geletterdheid.mdx`, dated 2025-09) and AI Strategie Gids (`…/ai-strategie-gids.mdx`, 2025-10).
- **Recommendation:** absorb the evergreen bits into the relevant pillar pages (geletterdheid → Training; strategie-gids → Consultancy/aanpak), then 301 the old article URLs.
- **Nuance:** AI-geletterdheid is topically valuable around the **Aug 2026 AI-literacy window** (per SEO strategy). Don't just kill it — refresh and route it into the Training pillar, and keep the `ai-geletterdheid-training` SEO lander (see §5). Also handle the existing link from that lander to the article (`ai-geletterdheid-training.astro:78`).
**Depends on:** WS-2, WS-3.

---

## 5. Diensten collapse — page-by-page fate

**Legend:** *Fold* = content absorbed into a pillar-page section, route retired + 301'd → pillar page. *Keep* = remains a standalone SEO/landing page (redesigned to the quality bar). *Retire* = removed + 301'd (duplicate/low-value).

### In the current services nav (15 SKUs) → all **Fold** into pillar pages
| Pillar | SKU (NL route) | → Fold into |
|---|---|---|
| Training | ai-foundations, copilot-basics, ai-voor-developers, ai-privacy-security, ai-media-literacy | `/diensten/training` |
| Consultancy | opportunity-scouting, ai-readiness-scan, ai-roadmap, ai-implementatiebegeleiding, procesanalyse | `/diensten/consultancy` |
| Software | maatwerk-ai-oplossingen, ai-prototyping, ai-integratie, ai-development-teams, digital-twins | `/diensten/software` |

### Orphan / SEO / EU pages (9) → mixed
| Page (NL route) | Fate | Notes |
|---|---|---|
| `ai-consultancy-groningen` | **Keep** | Local-SEO lander (targets "AI consultancy Groningen"); already has `PROFESSIONAL_SERVICE_SCHEMA` |
| `ai-bureau-nederland` | **Keep** | SEO lander ("AI bureau Nederland") |
| `eu-consultancy` | **Keep** | Rated "good"; cross-pillar featured link |
| `ai-geletterdheid-training` | **Keep (refresh)** | SEO + Aug-2026 AI-literacy window; has FAQ schema |
| `incompany-ai-training` | **Keep or Fold** | Decent SEO term; decide against SEO audit |
| `digitale-onafhankelijkheid` | **Fold** | → `eu-consultancy` |
| `eu-development` | **Fold** | → `eu-consultancy` or Software pillar |
| `eu-training` | **Fold** | → `eu-consultancy` or Training pillar |
| `business-case-development` | **Retire** | Duplicate of `opportunity-scouting` → 301 to Consultancy pillar |

**Net result:** 24 SKU pages → **3 pillar pages + ~4–5 SEO landers**, with 301s covering every retired URL. All fates apply symmetrically to the EN mirror (`/en/services/...`).

---

## 6. Sequencing & phases

| Phase | Workstreams | Rationale |
|---|---|---|
| **1 — Foundation** | WS-0 (rich blocks), quality-bar sign-off, **WS-1a hotfix** | Unblocks everything; restores the broken menu on content pages |
| **2 — Biggest lever** | WS-2 (Diensten pillar pages + redirects + slim hub) | Highest quality gain; you flagged it explicitly |
| **3 — Structure** | WS-3 (menu restructure), optionally **WS-1b** (navbar convergence) | Depends on WS-2 destinations existing + a working navbar |
| **4 — Proof** | WS-4 (case studies) | Self-contained; gated on real metrics from Frans |
| **5 — Polish** | WS-5 (Over AI Heroes, Team) + WS-6 (stale content) | Enrichment passes on a settled structure |

---

## 7. Open decisions (need Frans's input before/at each phase)

1. **Navbar direction** — converge to one Astro navbar (recommended) vs keep two, de-duplicated + bug-fixed. *(Phase 1/3)*
2. **Final SEO-lander keep-list** — confirm §5 keeps against the SEO audit (`AUDIT-SEO-FULL-2026-06-10.md`), esp. `incompany-ai-training`. *(Phase 2)*
3. **Pillar naming/URLs** — `consultancy` vs `consulting`; confirm `/diensten/{training,consultancy,software}`. *(Phase 2)*
4. **AI Salon nav placement** — mega-menu only, or keep a top-level link too (it's a flagship). *(Phase 3)*
5. **Cases nav placement** — top-level "Cases/Werk", under Over ons, or pillar-linked only. *(Phase 3/4)*
6. **EU Consultancy placement** — featured cross-pillar (recommended) vs a pillar. *(Phase 2/3)*
7. **Real case metrics** — outcome numbers for OLX / InnoEnergy / Trabu. *(Phase 4, client input)*
8. **Team refresh data** — current roster/titles/copy. *(Phase 5, client input)*

---

## 8. SEO / technical dependencies (cross-cutting)

- **301 redirects** for every retired/​folded URL (§5) → its pillar page. Confirm the mechanism: Astro `redirect` in `astro.config.mjs` vs Netlify `_redirects`/`netlify.toml`. Mind `build.format: 'file'` + `trailingSlash: 'never'`.
- **Sitemap** regenerates to exclude retired + noindex paths (`src/data/seo.ts` `NOINDEX_PATHS`).
- **Schema:** add `CaseStudy`/`Article` to cases; `Service` to pillar pages (builders in `src/data/schema.ts`).
- **i18n slug-map** (`src/data/i18n.ts`) — add/adjust segments for new pillar pages and any changed Over-ons segments; keep hreflang pairs correct.
- **Types:** `types.ts` — make `NavStructure.resources` optional; widen `NavChild.category` (or add a second grouped panel) for the Over-ons mega-menu.
- **Both navbars** must change for any menu edit until WS-1b converges them (`components/Navbar.tsx` + `src/components/static/Navbar.astro`).

---

## 9. Appendix — current-state inventory (as of 2026-07-01)

- **Navbars:** two. React `components/Navbar.tsx` (islands: Home, AI Salon, careers, PageLayout). Static `src/components/static/Navbar.astro` (all `BaseLayout`/`SubpageLayout` pages). Same data source (`constants.ts`).
- **Diensten:** overview is an island (`pages/nl/Diensten.tsx`, 614 lines) mounted via `DienstenIsland`. 24 individual SKU pages per language, all static `SubpageLayout` with inline hard-coded HTML; 15 in nav, 9 orphan/SEO/EU.
- **Cases:** 4 cases × 2 langs (Medux, OLX, Trabu, InnoEnergy) as MDX (`src/content/cases/{nl,en}`). Rigid inline-HTML template. No index page. Not in nav or on homepage. Reachable only via scattered deep links from service pages. No case-study schema. Only Medux has hard metrics.
- **Stale articles:** `ai-geletterdheid` (2025-09), `ai-strategie-gids` (2025-10) under Resources.
- **Good-page construction tiers:** islands (Home, AI Salon, careers) > bespoke `.astro` (De AI Storm) > enriched `SubpageLayout` (EU Consultancy, aanpak) > thin `SubpageLayout` (the rest).

---

## 10. Implementation status — shipped 2026-07-01

All workstreams implemented in one pass. `npm run check` = 0 errors; `npm run build` = 84 pages, complete.

- **WS-0 — Shipped.** Block library in `src/components/blocks/`: `SectionBand`, `SectionHeading`, `StatGrid`, `ProcessSteps`, `CardGrid`, `PullQuote`, `Callout`, `CtaBand`, `ProofRow`.
- **WS-1a — Shipped.** `Navbar.astro` backdrop-filter moved to a `z-[-10]` background layer; desktop mega-menus now open on all static pages.
- **WS-1b (navbar convergence) — Deferred (deliberate).** Kept two navbars (React for islands, Astro for chrome), de-duplicated and both bug-fixed. Full convergence/retiring the React navbar is risky for the flagship pages and was flagged as an open decision — not done. Both navbars carry the identical new menu.
- **WS-2 — Shipped.** 3 bespoke pillar pages (`/nl/diensten/{training,consultancy,software}` + EN), a slim `/diensten` hub replacing the 614-line frankenstein island, 16 SKU pages/lang retired and 301'd to pillar-page anchors in `netlify.toml`. Kept SEO landers: `ai-consultancy-groningen`, `ai-bureau-nederland`, `eu-consultancy`, `eu-development`, `eu-training`, `digitale-onafhankelijkheid`, `ai-geletterdheid-training`, `incompany-ai-training`.
- **WS-3 — Shipped.** Resources killed (nav data + `types.ts` optional + both navbars + Footer conditional). Diensten mega-menu columns now link to the pillar pages; sub-items deep-link to pillar anchors. Over ons is a grouped mega-menu (Bedrijf / Media & community / Werken bij) surfacing AI Salon + the TV page. Added a top-level **Cases** link.
- **WS-4 — Shipped.** Cases index (`/nl/cases`, `/en/cases`) with `ItemList` schema; single-case pages got `Article` schema, an "all cases" back-link and a related-cases strip; Cases added to nav.
- **WS-5 — Partial.** "Over AI Heroes" (NL+EN) enriched with a named-client proof row and a pillar/cases cross-link grid. **Team page: deferred** — its problem is stale facts, which need current data from Frans, not a layout change.
- **WS-6 — Revised.** On inspection `/resources` holds ~9 SEO landing articles, not just the 2 stale ones. Deleting/301'ing would damage that SEO cluster, so all articles are **kept as assets** and simply dropped from the primary nav (WS-3). Refreshing the 2 stale articles remains a content task needing Frans.

**Open follow-ups for Frans:** confirm pillar URL naming; real outcome metrics for OLX/InnoEnergy/Trabu; current Team data; decide on WS-1b navbar convergence; refresh the 2 stale resources articles. Verify the live deploy: the retired-SKU 301s and the pillar-anchor scroll targets.

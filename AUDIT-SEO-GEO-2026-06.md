# SEO + GEO Audit — AI Heroes Website

**Date:** 2026-06-08
**Scope:** Technical & on-page SEO across all routes, local/Groningen ranking, and GEO (visibility in AI assistants). Builds on `AUDIT-CONTENT-PAGES.md` (2026-03-08) — does not repeat its conversion/funnel/story sections.
**Trigger:** Site ranks ~page 3 for "AI consultancy near Groningen". Goal: diagnose why and produce a free-action playbook for SEO + GEO.

---

## 0. TL;DR

Your meta/structured-data hygiene is strong (the March audit's Tier 1 is done). The ranking problem for *"near Groningen"* is **not** mainly a code problem — it's three things:

1. **No local presence in Google's map pack** (Google Business Profile), which sits *above* organic and pushes you down. **Free, off-site, highest impact.**
2. **No page targets the exact query.** Not one title tag contains "Groningen" except the AI Salon page, and you've repositioned away from the word "consultancy" — the word people actually type. Competitors have dedicated local pages (e.g. AICG's `/wij-groningen/`).
3. **Authority** — competitors like DataNorth win on content/citations, and `groningen.ai` has an exact-match domain you can't beat structurally.

For **GEO**, the single highest-leverage action is **Bing indexing** — ~83% of Dutch AI queries go through ChatGPT, and ChatGPT sources from Bing.

---

## 1. What's changed since the March 2026 audit ✅

The previous audit's Tier 1 and several Tier 2 items are now live:

| Item | Status |
|---|---|
| `seoDescription` on all pages | ✅ Done |
| OG image / `og:type` / `og:site_name` / Twitter cards | ✅ Done (in `useSEO`) |
| `noindex` on legal pages | ✅ Done |
| `sitemap.xml` | ✅ Exists (with gaps — see §2.1) |
| Organization schema | ✅ `ProfessionalService` block in `index.html` |
| FAQ schema | ✅ On Diensten/Services |
| JobPosting schema | ✅ Added 2026-06-08 (careers) |
| Alternate-path DRY | ✅ `PageLayout` now delegates to `calculateAlternatePath` |

**Still open from March:** prerendering, BreadcrumbList, per-page Service/Article schema, top-of-funnel content depth (still only 2 articles/lang).

---

## 2. Technical SEO findings (current state)

### 2.1 Sitemap has real gaps
These indexable routes are **missing** from `public/sitemap.xml`:
- `/en` (English homepage) — only `/` has its own `<loc>`
- `/nl/diensten` and `/en/services` (service overview pages)
- `/nl/over-ons` and `/en/about` (about overview — only `/aanpak` and `/team` subpages are listed)
- `/nl/resources` and `/en/resources`
- `/nl/diensten/digital-twins` and `/en/services/digital-twins` (full service pages, not listed at all)
- `/nl/ai-salon` and `/en/ai-salon`

Minor inconsistency: legal pages are both `noindex` **and** present in the sitemap.

### 2.2 No geo-intent in title tags (the priority on-page finding)
Title tag is the strongest on-page relevance signal. Audit of every page:
- **"Groningen" in the title:** only the **AI Salon** page. The homepage (static *and* JS versions), service pages, case studies — none.
- **"Consult" in the title:** only the JS homepage (`…Consulting & Software`). No service page.
- Groningen appears in some *descriptions* (homepage, about, team) but never in a *title*.

Net: nothing on the site is structurally aimed at "AI consultancy/consultant Groningen" intent.

### 2.3 `/hanze` has zero SEO
The `/hanze` workshop page calls no `useSEO`, sets no title, and has no robots directive — so it's **indexable by default with the wrong inherited homepage title**. Either `noindex` it or give it real meta.

### 2.4 Structured data is thin beyond three blocks
Present: `ProfessionalService` (homepage/static), `FAQPage` (Diensten/Services), `JobPosting` (careers).
Absent but relevant: **BreadcrumbList** (clear hierarchy exists), **Service** per service page, **Article/BlogPosting** (resource articles), **Event** (AI Salon — the most natural fit, currently missing), **Person** (team pages), **WebSite + SearchAction**.

### 2.5 No trailing-slash normalization
Canonical is built verbatim from `location.pathname`, with no redirect/stripping in `netlify.toml` or `useSEO`. `/nl/diensten` and `/nl/diensten/` can both index → duplicate-content risk.

### 2.6 Client-side rendering (unchanged, still the structural ceiling)
Pure `vite build`, no prerender. Non-JS crawlers (LinkedIn, Facebook, weaker engines) see the **homepage** title/description/OG on every route. Googlebot renders JS so it mostly copes, but this caps Bing/social/AI-crawler visibility — which directly limits GEO (see §4).

---

## 3. The Groningen ranking problem (local SEO)

### 3.1 The map pack is the missing layer
For "[service] near [city]" queries Google shows a **local 3-pack above organic**, fed by **Google Business Profile** — not your website. If AI Heroes has no claimed/verified GBP at Aarhusweg 4-16, you can't appear there, and the pack pushes your organic result (currently page 3) further down.

*Honest caveat:* for high-consideration **B2B** queries (consultant/agency) the pack appears **less reliably** than for consumer queries — buyers research first, so organic still carries real weight. Pursue **both** tracks. Verify live whether a pack actually renders for your query (search incognito from a Groningen IP — results are personalized).

### 3.2 Who you're competing with
| Competitor | Domain | Why they rank |
|---|---|---|
| AI Solutions Groningen | `groningen.ai` | **Exact-match domain** — unbeatable structurally |
| DataNorth AI | `datanorth.ai` | **Content/authority** — publishes "Top 10 NL" roundups, EU AI Act content; the replicable path |
| AI Consultancy Group | `aicg.nl/wij-groningen/` | **Dedicated Groningen landing page** — direct template to mirror |
| ai·ify | `aiify.nl` | Physical Groningen address, SME focus |
| TurnNext, Het AI Bedrijf | — | Vertical/MKB content |

**Takeaway:** you can't out-domain `groningen.ai`, so win like DataNorth (content + citations) and mirror AICG (a real, indexable Groningen page). Your "AI-hoofdstad van Europa" positioning is a natural hook for that page.

### 3.3 What drives the pack (all free)
Primary GBP category → keywords in profile → **real address in the city** (you have one — a genuine edge over service-area-only rivals) → **reviews** (count, score, recency) → NAP consistency → citations → completeness/posts.

---

## 4. GEO — visibility in AI assistants

### 4.1 How the engines cite (each sources differently)
- **ChatGPT** → built on **Bing's index**; ~87% of citations match Bing's top-10. *If you're not in Bing, ChatGPT can't cite you.*
- **Perplexity** → heavily cites **Reddit** + rewards freshness (content <12 months old cited ~3× more).
- **Google AI Overviews** → Google's index + over-indexes **YouTube**.
- Across engines: **unlinked brand mentions** correlate with citations ~3× more than backlinks; **listicle/"best of" inclusion** is a direct path in.

### 4.2 NL-specific: Bing is disproportionately important
~83% of Dutch AI-assisted queries go through **ChatGPT** → **Bing Webmaster Tools + ranking in Bing is the top GEO action** for the NL market. Dutch-language pages are what win NL local queries.

### 4.3 llms.txt — honest status: skip-ish
As of mid-2025, ~10% of domains have it and **major AI crawlers (GPTBot, ClaudeBot, PerplexityBot) don't meaningfully use it**; audits find no correlation with citations; OpenAI itself points to robots.txt. **Add it if trivial, don't rely on it.** Low confidence / unproven.

### 4.4 robots.txt and AI bots
Crawlers split by purpose and obey robots.txt per user-agent:
- **Training:** GPTBot, ClaudeBot, CCBot, Google-Extended
- **Search/citation:** OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot

Your current robots.txt is **allow-all** (only `/internal/` disallowed). For a small agency that *wants* discovery, that's the right call — keep search bots allowed. Only adopt the "block-training / allow-search" split if you later want to withhold from model training. **Never block search bots** — that directly kills GEO.

---

## 5. The three approved code changes, in context

1. **Add "Groningen" to key title tags** (homepage + a consulting page) — directly attacks §2.2. Quick, low-risk.
2. **Dedicated "AI consultancy / AI-consultant Groningen" landing page** (NL-first) — the AICG `/wij-groningen/` template; carries LocalBusiness + Breadcrumb schema; the page Google can actually rank for the query. Resolves the "no page targets the query" gap.
3. **Prerendering** — converts a Google-only setup into one Bing/social/AI crawlers can read → unblocks §2.6 *and* the Bing→ChatGPT GEO dependency (§4.2). Highest structural ceiling-raiser.

Recommended add-ons while we're in there: fix the sitemap gaps (§2.1), `noindex` or fix `/hanze` (§2.3), add Event schema to AI Salon and BreadcrumbList to service pages (§2.4).

---

## 6. FREE ACTION PLAYBOOK (SEO + GEO)

Marked **[Off-site]** (Frans/team, no code) or **[Code]** (we do in the repo).

### Tier 1 — highest leverage, do now
1. **[Off-site] Claim & fully optimize Google Business Profile** — precise primary category, real Groningen address *visible* (don't hide it), services, Dutch description with the AI-hoofdstad angle, photos, regular posts. *Single biggest local lever.*
2. **[Off-site] Set up Bing Webmaster Tools**, submit the sitemap, confirm aiheroes.io is fully indexed in Bing. *Feeds ChatGPT — top NL GEO action.*
3. **[Code] Dedicated Dutch "AI consultancy Groningen" landing page** + Groningen in homepage/consulting titles.
4. **[Off-site] Start a review habit** — short GBP review link at every project close; respond to all. Recent + steady + photo-rich reviews matter most.

### Tier 2 — strong support
5. **[Off-site] NAP-consistent free directory listings**, spread over weeks: Cylex, Gouden Gids, Vinden.nl, Telefoonboek/Places.nl, Oozo, KvK (already), consultancy.nl, ensun. Keep Name/Address/Phone identical everywhere.
6. **[Off-site] Pitch for listicle inclusion** — "best AI agencies/consultancies in NL/Groningen" roundups (consultancy.nl, ensun, DataNorth's list). Direct GEO + referral path.
7. **[Code] Prerendering** for Bing/social/AI crawler visibility.
8. **[Code] Add LocalBusiness/Breadcrumb/Event/Service schema** and fix sitemap gaps.
9. **[Off-site] Build unlinked brand mentions** — local press, podcasts, AI Fabriek / AI Salon coverage, Dutch tech media. Mentions count even without links.
10. **[Off-site] Create a Wikidata item** (free; Wikipedia needs notability, Wikidata doesn't). Low confidence but harmless and feeds knowledge graphs.

### Tier 3 — optional / low-confidence
11. **[Off-site] Authentic Reddit/community presence** (Perplexity weights Reddit heavily) — r/Netherlands, Dutch AI communities. Genuine, not spam.
12. **[Code] llms.txt** — add only if trivial; evidence says crawlers ignore it.
13. **[Off-site] YouTube presence** — brand in video titles/transcripts correlates with Google AI Overview citations.

### Content/freshness (ongoing, mostly off-site)
14. Write **answer-capsule** sections (self-contained 40–60-word answers under H2s) with **3+ stats per ~300 words** — the format AI engines cite most.
15. **Keep dates fresh** on key pages (Perplexity rewards <12-month content).
16. **Grow top-of-funnel content** — still only 2 articles/lang; a real blog is the long-term authority play (the DataNorth path).

---

## 7. Confidence notes
- **High:** competitor set, local-pack mechanics, Bing→ChatGPT dependency, llms.txt being ignored, robots.txt bot taxonomy, all codebase findings.
- **Medium:** exact frequency the pack renders for these specific B2B queries (verify live); magnitude of vendor-sourced citation stats (directional).
- **Low/speculative:** llms.txt and Wikidata *direct* citation impact — free and harmless, not proven.

---

## 8. Suggested sequence
1. **You (off-site):** GBP + Bing Webmaster Tools + first reviews + directory listings — the highest-impact free wins, no code needed.
2. **Us (code):** title fix → Groningen landing page → sitemap/schema fixes → prerendering.
3. **Ongoing:** listicle outreach, brand mentions, content depth.

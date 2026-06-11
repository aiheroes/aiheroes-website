# Full SEO + GEO Audit — AI Heroes Website

**Date:** 2026-06-10
**Scope:** The Astro site on branch `feat/astro-migration` (the shipping target), plus live-site/off-site signals. Builds on `AUDIT-SEO-GEO-2026-06.md` (2026-06-08, audited the live SPA) and `AUDIT-CONTENT-PAGES.md` (2026-03-08). Findings are marked **carry-over** (known from the prior audit) or **new**.
**Method:** 11 parallel auditors (NL keywords, EN keywords, competitors, GEO/AI-search, codebase); critical/high findings adversarially verified. SERP observations are from US-based search on 2026-06-10; volume signals are inferred from SERP supply density, not measured volume. Verify map-pack rendering from a Groningen IP.

---

## 1. Executive Summary

The site's overall SEO health is good and getting structurally better: the Astro migration resolves the single biggest finding from the 2026-06-08 audit (client-side rendering, §2.6 there) by baking 73 static pages with per-page titles, descriptions, hreflang, robots meta and JSON-LD that Bing and AI crawlers (GPTBot, ClaudeBot, PerplexityBot) can finally read, and it also resolves the prior audit's `/hanze` no-SEO finding (§2.3, now noindexed), the missing Event/JobPosting/Article schema (§2.4), the trailing-slash ambiguity (§2.5, `trailingSlash: 'never'` + Netlify 301s), and the old sitemap's missing-routes problem (§2.1, superseded by `@astrojs/sitemap`). What the migration does NOT fix: there is still no page targeting "AI consultancy Groningen" (the core carry-over gap), service pages still use product names instead of search language, and two new issues ship with the branch: `public/robots.txt` still points to the stale hand-maintained `sitemap.xml` instead of Astro's generated `sitemap-index.xml`, and the eu-consultancy pages duplicate the digital-independence titles in both languages. Off-site remains the weakest axis: AI Heroes appears in zero of the Dutch "beste AI bureaus" listicles that AI assistants cite, an unrelated Amsterdam "AI Heroes" owns the Clutch and The Manifest profiles, and Oozo.nl still lists the old Vechtstraat address. The good news from live verification: aiheroes.io is already #5 in Bing for "AI consultancy Groningen" (vs page 3 on Google), so the ChatGPT citation pathway is within reach the moment the static HTML ships. Top 3 priorities: (1) fix the sitemap/robots and duplicate-title issues before cutover, (2) ship the Groningen landing page plus the AI-geletterdheid/EU AI Act commercial cluster before the 2 August 2026 enforcement deadline (8 weeks away), (3) run the off-site sprint (GBP, Clutch disambiguation, listicle outreach, NAP fixes). Verdict: **strong foundation, needs focused work**, no critical defects, but the migration alone changes nothing for the target query without the new pages and off-site moves.

---

## 2. Keyword Opportunity Table

Merged NL + EN, sorted by opportunity. Coverage references are to the Astro branch (`src/pages`, `src/content`).

| Keyword | Lang | Intent | Difficulty | Opportunity | Current coverage | Recommended action |
|---|---|---|---|---|---|---|
| AI geletterdheid training | nl | commercial | moderate | **high** | Article only (`src/content/articles/ai-geletterdheid.mdx`), no service page | Build `/nl/diensten/ai-geletterdheid-training` commercial page ("verplichte AI-geletterdheid training, AI Act artikel 4"); interlink with article; checklist lead magnet. Enforcement 2 Aug 2026: strongest near-term keyword overall |
| AI literacy training EU AI Act (Article 4) | en | commercial | moderate | **high** | Article `ai-literacy.mdx` + `/en/services/eu-training` (title "EU Training", zero search demand) | Retitle eu-training.astro with seoTitle "AI Literacy Training \| EU AI Act Article 4 Compliance"; submit program to artificialintelligenceact.eu/ai-literacy-programs/ (free authority citation) |
| AI consultancy Groningen | nl | commercial | moderate | **high** | None; no Astro title contains "Groningen" (carry-over) | Dedicated `/nl/diensten/ai-consultancy-groningen` page: exact phrase in title+H1, Aarhusweg 4-16 + LocalBusiness schema, AI-fabriek narrative, team, local cases. Pair with GBP (map pack) |
| AI bureau Groningen | nl | commercial | easy | **high** | Accidental mention in ai-bureau-nederland subtitle | Secondary phrase on the Groningen page. Current #1 is iADam, a EUR 900 chatbot microsite: winnable on on-page signals alone |
| AI consultant Groningen | nl | commercial | moderate | **high** | None | Same Groningen page, H2/intro variant + person angle (Frans as "AI consultant in Groningen"). No separate page |
| AI agency Groningen | en | commercial | easy | **high** | None in EN titles | `/en/services/ai-agency-groningen` or city section: EN SERP nearly empty, serves AI Fabriek-scouting international firms |
| incompany AI training | nl | commercial | moderate | **high** | None; ai-foundations.astro titled "AI Foundations" (product name, not query) | Build `/nl/diensten/incompany-ai-training`; indicative pricing, format options, link AI Foundations as flagship; "in heel Nederland, vanuit Groningen" |
| wat kost AI implementatie | nl | informational | moderate | **high** | None; no cost content anywhere | Money article "Wat kost AI implementatie in 2026?" with real price bands (training 2.5-4k/day, consulting 3-50k+, software 15-100k+) and cost table (snippet bait). DataNorth already ranks here |
| AI implementatie MKB | nl | commercial | moderate | **high** | Partial: ai-implementatiebegeleiding.astro never says MKB | Long-form guide "AI implementatie in het MKB: praktisch stappenplan" linking implementatiebegeleiding + readiness scan |
| soevereine AI | nl | informational | moderate | **high** | Adjacent only (digitale-onafhankelijkheid, eu-* pages); literal term appears nowhere | Add vocabulary to EU pages (title/H2) + definitive piece "Soevereine AI: Europese AI-alternatieven voor ChatGPT, Copilot en US-cloud". First-mover window open |
| sovereign AI consultancy | en | commercial | moderate | **high** | Keyword-invisible; eu-consultancy.astro has duplicate-title bug | Fix the title bug, then seoTitle overrides "Sovereign AI Consultancy" / "Sovereign AI Development". DataNorth already has a ranking page; mirror before it crowds |
| AI agency Netherlands | en | commercial | moderate | **high** | Yes: `/en/services/ai-agency-netherlands`, exact-match seoTitle (best-optimized EN page) | Gap is off-page: pitch roundups (Ploko, Sortlist, AI Superior), claim Clutch/Sortlist/GoodFirms NL profiles, add internal links from EN homepage/footer |
| European alternative to ChatGPT for business | en | informational | moderate | **high** | None (only 2 EN articles, neither on sovereignty) | Comparison guide "European Alternatives to ChatGPT for Business (2026)" funneling to eu-development; request listing on european-alternatives.eu / europeantechmap.eu |
| AI bureau Nederland | nl | commercial | hard | medium | Yes: ai-bureau-nederland.astro + EN twin (new in migration) | Keep for long-tail; the SERP is listicle-owned, so the real play is listicle inclusion (DataNorth's Top 10, Appfront, Ploko, Sortlist) |
| AI Act verplichtingen bedrijven | nl | informational | hard | medium | None | MKB long-tail pillar "AI Act verplichtingen voor het MKB: checklist 2026"; funnel to geletterdheid training + readiness scan |
| AI training bedrijven | nl | commercial | moderate | medium | No page uses the phrasing in a title | Secondary target on the incompany page ("Incompany AI-training voor bedrijven") |
| AI workshop bedrijven | nl | commercial | moderate | medium | ai-foundations matches the product but is invisible for the query | Retitle/extend ai-foundations or fold into incompany page; "AI workshop Groningen" long-tail nearly uncontested |
| AI beleid opstellen | nl | informational | moderate | medium | None | Guide + downloadable template; pairs with geletterdheid obligation (same buyer, same deadline) |
| AI software laten maken | nl | transactional | moderate | medium | Partial: maatwerk-ai-oplossingen.astro titled "AI op Maat" | Retitle "Maatwerk AI-oplossingen \| AI software laten maken"; add process/timeline/price sections; PoC-in-6-days is the differentiator |
| AI readiness scan | nl | commercial | easy | medium | Yes: exact-match pages NL+EN | Strengthen: interactive self-scan lite (competitors all offer free scans), FAQ schema, Groningen/Noord-NL variants |
| AI readiness assessment (Netherlands) | en | commercial | hard | medium | Partial: page says "Scan" throughout, "assessment" never appears | seoTitle "AI Readiness Assessment (Scan)" + use "assessment" in body/FAQ. Cheap long-tail claim |
| custom AI development Netherlands | en | commercial | hard | medium | Partial: custom-ai-solutions.astro titled just "Custom AI" | seoTitle "Custom AI Development Netherlands \| From Prototype to Production" + Clutch/GoodFirms profiles with OLX/iFood/Medux cases |
| EU AI Act compliance consulting Netherlands | en | commercial | moderate | medium | Mentioned across eu-* pages, no title targets it | Geo-qualified page/article "EU AI Act compliance for Dutch organisations"; get listed on aiactadvisors.com |
| CLOUD Act / moving off US cloud (EU) | en | informational | moderate | medium | Callout boxes only, no standalone content | Article on CLOUD Act de-risking; strong 2026 news tailwind; feeder for digital-independence |
| Copilot training | nl | commercial | hard | low | Yes: copilot-basics.astro exact-match title | Keep, don't invest: SERP is Microsoft + big training houses + Copilot Academy (own overflow partner, channel conflict). Target "Copilot training incompany/Groningen" long-tail only |

---

## 3. On-Page & Technical Issues Table

All code-level claims below were re-verified in the repo on 2026-06-10 (file reads on the `feat/astro-migration` branch). No high/critical finding from the auditor pool was refuted.

| # | Issue | Area | Severity | File/URL | Fix | Effort |
|---|---|---|---|---|---|---|
| 1 | No page targets "AI consultancy Groningen"; no Astro title contains "Groningen". **Carry-over** from 2026-06-08 §2.2/§5.2; migration did not fix it | Content/on-page | High | `src/pages/nl/diensten/` (page absent) | Build the Groningen landing page (see §4.1) + add Groningen to NL homepage title | Moderate |
| 2 | `robots.txt` points to the stale hand-maintained sitemap: `Sitemap: https://aiheroes.io/sitemap.xml`. The Astro build ships BOTH the old static `public/sitemap.xml` (80 URLs, drifts on every page add/remove) AND the generated `sitemap-index.xml`, which is never referenced. **New**; verified: both files present, robots line confirmed | Technical | High | `public/robots.txt`, `public/sitemap.xml` | Delete `public/sitemap.xml`; change robots line to `Sitemap: https://aiheroes.io/sitemap-index.xml`. Hreflang loss in the sitemap is safe: BaseLayout already bakes hreflang link tags per page | Quick win |
| 3 | Duplicate titles on the EU cluster: `en/services/eu-consultancy.astro` has `title="Digital Independence"`, identical to `digital-independence.astro`. Verified, and **worse than reported**: the NL pair duplicates too (`nl/diensten/eu-consultancy.astro` and `digitale-onafhankelijkheid.astro` both say "Digitale Onafhankelijkheid"). Two page pairs emit identical title/H1 in each language. **New** | On-page | High | `src/pages/en/services/eu-consultancy.astro:7`, `src/pages/nl/diensten/eu-consultancy.astro:7` | Retitle eu-consultancy pages; best option: seoTitle targeting "Sovereign AI Consultancy" (EN) / "EU AI Consultancy" or "Soevereine AI" vocabulary (NL), which also fixes the keyword invisibility | Quick win |
| 4 | Brand collision: unrelated Amsterdam "AI Heroes" (ai-heroes.co, founded 2019) owns clutch.co/profile/ai-heroes and themanifest.com/company/ai-heroes, and appears in the Top-100-NL directory pages AI assistants cite. AI Heroes B.V. (Groningen) has zero presence there. **New** | Off-site/entity | High | https://clutch.co/profile/ai-heroes | Register disambiguated "AI Heroes B.V." profiles on Clutch (feeds The Manifest) + Sortlist with Aarhusweg NAP and "full-service AI agency in Groningen" descriptor; solicit 2-3 client reviews (Medux, InnoEnergy, Trabu) | Moderate |
| 5 | Absent from every Dutch "beste AI bureaus" listicle (consultancy.nl, appfront.nl, ploko.nl, aifais.com, sortlist.nl, themanifest.com, datanorth.ai's Top 10). Listicle inclusion correlates with AI-answer citation more than backlinks. **Carry-over** (prior playbook item 6), now with verified target URLs | Off-site/GEO | High | https://datanorth.ai/nl/blog/top-10-ai-consultancy-bedrijven-in-nederland | Outreach sprint in priority order: appfront.nl, ploko.nl, aifais.com (accept submissions), sortlist.nl + ensun.io (self-serve), evaluate consultancy.nl paid profile, aisuperior.com | Moderate |
| 6 | Zero visibility for "EU AI Act compliance hulp Nederland" despite EU compliance being homepage-level positioning; SERP held by AIComplianceHub.nl, didev.nl, cruxdigits.nl, VeriAi.nl. Only related asset is the ai-literacy article. Peak demand NOW (Aug 2026 deadline). **New** | Content | High | `src/content/articles/` | NL-first pillar `/nl/resources/eu-ai-act-compliance` + EN twin: stappenplan, risk-category table, downloadable checklist, FAQPage schema, dated "laatst bijgewerkt" | Substantial |
| 7 | Google Business Profile not claimed/optimized at Aarhusweg 4-16; map pack sits above organic for "[service] [city]" queries. **Carry-over** (prior Tier 1 item 1), unchanged | Off-site/local | High | https://business.google.com | Claim GBP, precise primary category, visible address, NL description with AI-hoofdstad angle, photos, review habit | Moderate |
| 8 | `@astrojs/sitemap` has no filter: noindexed pages (`/hanze`, `/nl/menu`, all 4 legal pages) get listed in sitemap-0.xml while their HTML says noindex. Contradictory signal Bing handles poorly. **New**; verified: `astro.config.mjs:18` calls `sitemap()` with zero options | Technical | Medium | `astro.config.mjs` | Add `sitemap({ filter: ... })` excluding `/hanze`, `/nl/menu`, `/nl/legal/`, `/en/legal/`; ideally share one NOINDEX_ROUTES array with BaseLayout so they cannot diverge | Quick win |
| 9 | Stale NAP: Oozo.nl still lists old address "Vechtstraat 33-14" while site/JSON-LD publish Aarhusweg 4-16. Degrades local-pack confidence and entity resolution (compounds finding #4). **New** (live error found within the carry-over NAP task) | Off-site/local | Medium | https://www.oozo.nl | Claim/edit Oozo listing first, then verify goudengids.nl, workcollabo.com, vervangendoorai.nl, Company.info, ensun.io. NAP byte-identical to footer | Quick win |
| 10 | Service-page titles are product names, not search language: "AI Foundations" (vs "incompany AI training"), "AI op Maat"/"Custom AI" (vs "AI software laten maken"/"custom AI development"), "EU Training"/"EU Development" (~zero demand), "Scan" (vs "assessment"). SubpageLayout supports seoTitle overrides (ai-agency-netherlands proves the pattern). **New** | On-page | Medium | `src/pages/nl/diensten/*.astro`, `src/pages/en/services/*.astro` | seoTitle pass across the service catalog per the keyword table (rows: incompany, maatwerk, custom AI, eu-training, eu-development, readiness assessment) | Quick win |
| 11 | Invisible for "AI implementatie MKB" intent queries; only 2 article topics exist per language (carry-over content-depth finding) while competitors win with stappenplan guides. AI Heroes owns the strongest raw material (Medux 70% cost reduction, already indexed in Bing) | Content | Medium | `src/content/articles/` | 2-3 MDX articles in citable formats: MKB stappenplan, "Wat kost AI consultancy" with price table; concrete stats high on the page | Moderate |
| 12 | Organization schema `sameAs` lists only LinkedIn; too thin for entity reconciliation given the Amsterdam collision. Schema otherwise excellent and now baked statically. **New** | Schema | Low | `src/data/schema.ts` | Extend sameAs: KvK register URL (42051968), ensun.io, goudengids.nl, makeitinthenorth.nl, future Clutch/Sortlist, Wikidata QID | Quick win |
| 13 | No Wikidata item for AI Heroes (none for DataNorth/AICG either: first-mover opening, not a deficit). **Carry-over** (prior item 10) | Off-site/entity | Low | https://www.wikidata.org | Create item: business, NL, Groningen HQ, P3220 = KvK 42051968, official website, founders. Do NOT attempt Wikipedia (fails notability) | Quick win |
| 14 | No llms.txt (live 404 confirmed; absent from `public/`). Mid-2026 evidence: ~10% adoption, 408 fetches in 500M bot visits, no major AI vendor committed. **Carry-over**; prior "skip-ish" verdict holds | Technical | Low | `public/llms.txt` (absent) | Post-launch 15-minute task: company paragraph + ~15 highest-value page links in both languages. Do not prioritize above anything else here | Quick win |
| 15 | No Reddit/community footprint; Perplexity's heaviest citation source untouched; articles lack visible last-updated discipline. **Carry-over** (prior item 11) | Off-site/GEO | Low | r/groningen, r/thenetherlands, Higherlevel.nl | Genuine participation under personal names; add visible "Laatst bijgewerkt" + dateModified in Article schema, refresh every 6 months | Moderate |
| 16 | INFO: Bing indexing confirmed strong: #1 for brand query, **#5 for "AI consultancy Groningen"** (vs Google page 3); deep pages indexed. ChatGPT citations match Bing top-10 ~87%: already inside the citable window | GEO | Info | https://www.bing.com/webmasters | Protect through migration: resubmit sitemap + IndexNow ping on cutover day; monitor weekly for 4 weeks | Quick win |
| 17 | INFO: robots.txt allow-all for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot, bingbot) is the correct posture; carries over via `public/robots.txt`. While editing for #2, move `Disallow: /internal/` directly under the `User-agent: *` group (it currently sits after the Sitemap line) | Technical | Info | `public/robots.txt` | Keep allow-all; tidy group ordering | Quick win |
| 18 | INFO: the Astro migration is the structural GEO fix: 73 static pages, per-page meta/hreflang/robots, baked JSON-LD (ProfessionalService, FAQPage, Event, JobPosting, Article); netlify.toml on this branch removes the SPA `/* -> /index.html 200` fallback and 301s bare paths, so indexed URLs survive | Migration | Info | `src/layouts/BaseLayout.astro`, `netlify.toml` | At cutover: crawler-eye check with `curl -A "GPTBot"` (and bingbot UA) on `/`, `/nl/diensten`, `/en/services/ai-readiness-scan`; confirm full HTML + JSON-LD without JS | Quick win |

---

## 4. Content Gap Recommendations

### 4.1 Groningen landing page (the page this audit exists for)
- **Why:** AICG ranks #3 for "AI consultancy Groningen" with a ~450-word repurposed client page (its own schema description reads "Pagina ingericht speciaal voor het Alfa College") and no LocalBusiness schema. The SERP also contains a directory listing (oozo.nl) and a job vacancy. AI Heroes can beat every ranker except groningen.ai's exact-match domain on relevance alone.
- **Format:** `/nl/diensten/ai-consultancy-groningen` (NL-first), 1,500+ words: "AI Consultancy Groningen" in title+H1, Aarhusweg 4-16 with map, LocalBusiness + BreadcrumbList + FAQ JSON-LD, AI-fabriek EUR 200M / AI-hoofdstad narrative, team, Groningen client cases, AI Salon. Secondary phrases: AI bureau Groningen, AI consultant Groningen, AI bedrijf Groningen. Light EN sibling (`/en/services/ai-agency-groningen`).
- **Priority:** Highest. **Effort:** Moderate (one statically baked Astro page).

### 4.2 AI-geletterdheid training service page (the timing play)
- **Why:** AI Act Article 4 mandatory since 2 Feb 2025; Dutch enforcement starts 2 Aug 2026, under 8 weeks away. SERP is young microsites (VerantwoordAI, AIGA, aigeletterdheid.com) plus government info pages; no incumbent. The article exists (`ai-geletterdheid.mdx`/`ai-literacy.mdx`) but nothing monetizes it.
- **Format:** `/nl/diensten/ai-geletterdheid-training` commercial page + EN retarget of eu-training ("AI Literacy Training | EU AI Act Article 4 Compliance"); compliance checklist lead magnet; interlink with the article and readiness scan.
- **Priority:** Highest (deadline-driven). **Effort:** Moderate.

### 4.3 EU AI Act compliance pillar
- **Why:** "EU AI Act compliance hulp Nederland" surfaces 8+ specialists, zero AI Heroes, despite it being core positioning. Proven citable format (didev.nl, cruxdigits.nl rank on guide structure alone). Perplexity cites <12-month content ~3x more.
- **Format:** `/nl/resources/eu-ai-act-compliance` + EN twin: stappenplan for Dutch SMEs, Aug 2026 timeline, boete tiers, risk-category table, downloadable checklist, FAQPage schema, dated stamp. Funnels to 4.2 and the readiness scan.
- **Priority:** High. **Effort:** Substantial.

### 4.4 Incompany AI training page
- **Why:** Every competitor (Hulz, AI-Bureau.nl, PromptGorillas, aitraining.nl) has an exact-match page; none unbeatable; AI Heroes' actual product hides behind the name "AI Foundations".
- **Format:** `/nl/diensten/incompany-ai-training` with indicative pricing, formats, AI Foundations as flagship, "in heel Nederland, vanuit Groningen".
- **Priority:** High. **Effort:** Moderate.

### 4.5 Money articles (cost + MKB)
- **Why:** ~10 agencies maintain dedicated "wat kost AI" articles (supply density = real volume, bottom-funnel); AI Heroes has a unique honest-pricing edge (2.5-4k/day, 3-50k+, 15-100k+ bands). MKB stappenplan defends home turf against aiify/Het AI Bedrijf.
- **Format:** 2-3 MDX articles: "Wat kost AI implementatie in 2026?" (cost table, snippet bait), "AI implementeren in het MKB: stappenplan", "AI-beleid opstellen: stappenplan + voorbeeld" (template lead magnet).
- **Priority:** Medium-high. **Effort:** Moderate (infrastructure exists; writing only).

### 4.6 Sovereignty cluster (the differentiator)
- **Why:** No Dutch agency owns "soevereine AI" for MKB; DataNorth has the only EN "Sovereign AI Consultancy" page; 62% of EU orgs exploring sovereign alternatives; Gartner: sovereign-cloud spend +83% in 2026. AI Heroes' eu-* pages cover the topic but never use the words.
- **Format:** Vocabulary retrofit on eu-* pages (titles/H2s) + one definitive NL piece ("Soevereine AI: Europese AI-alternatieven") + one EN comparison guide ("European Alternatives to ChatGPT for Business") + CLOUD Act explainer.
- **Priority:** Medium (low volume today, perfect positioning fit, first-mover window). **Effort:** Moderate.

### 4.7 Own listicles (the DataNorth move)
- **Why:** DataNorth's self-published "Top 10 AI consultancy bedrijven in Nederland" ranks #1 for "AI consultancy Netherlands" and #5 for the Groningen query despite zero Groningen content. Ranking your own roundup is the realistic path past listicle-locked SERPs.
- **Format:** NL "Top 10 AI consultancy bedrijven in Nederland" + Noord-Nederland/Groningen variant, comparison table, FAQ, heavy internal links, AI Heroes #1.
- **Priority:** Medium. **Effort:** Moderate.

### 4.8 Tool-specific training pages (ai.nl pattern, later)
- **Why:** ai.nl ranks nationally with 12 separate tool-training landing pages. Regional variants ("ChatGPT training Groningen") are uncontested.
- **Format:** 3-5 light pages (ChatGPT/Claude/AI-agents training) under the Training pillar. Skip Copilot head term (channel conflict with Copilot Academy).
- **Priority:** Low-medium. **Effort:** Moderate.

---

## 5. Technical SEO Checklist

| Check | Status | Details |
|---|---|---|
| Sitemap | **Fail** | Generated `sitemap-index.xml` is correct but orphaned; robots.txt points at the stale `public/sitemap.xml` which also still ships in dist/. Plus no noindex filter (issues #2, #8). Two quick-win fixes before cutover |
| robots.txt | **Warning** | Allow-all posture correct (keep it); sitemap line wrong; `Disallow: /internal/` sits outside the `User-agent: *` group ordering |
| Hreflang | **Pass** | Baked per page in `src/layouts/BaseLayout.astro`; sitemap-level xhtml:link alternates lost with the old sitemap are redundant |
| Canonicals | **Pass** | Per-page canonical in BaseLayout; `trailingSlash: 'never'` resolves the prior audit's §2.5 duplicate-slash risk |
| Structured data | **Pass** (minor) | ProfessionalService, FAQPage, Event, JobPosting, Article baked statically (resolves prior §2.4). Minor: sameAs has only LinkedIn (#12); LocalBusiness variant needed on the future Groningen page |
| Redirects / URL parity | **Pass** | netlify.toml on this branch removes the SPA fallback, 301s bare paths and language-neutral URLs; old indexed URLs survive. Verify with a post-deploy crawl of the old sitemap's 80 URLs |
| Core Web Vitals risk | **Pass** (low risk) | Static SSG with selective islands replaces a full React SPA; payload and TBT drop. Spot-check homepage island hydration on a throttled mobile profile at cutover |
| Mobile | **Pass** | Tailwind responsive throughout; no auditor flagged mobile defects |
| HTTPS | **Pass** | Netlify-managed TLS, domain hardcoded https://aiheroes.io |
| Indexation | **Pass** (verify) | Bing: confirmed indexed incl. deep pages, #5 for the money query. Google: page 3 (authority problem, not indexation). Noindex set on /hanze, /nl/menu, legal (resolves prior §2.3) |
| AI-crawler access | **Pass** | GPTBot, ClaudeBot, PerplexityBot, CCBot, bingbot all allowed; static HTML makes the access meaningful for the first time |
| llms.txt | **Warning** (optional) | 404 live, absent from public/. Evidence says negligible use; add post-launch as a 15-minute task, nothing more |

---

## 6. Competitor Comparison

| Competitor | Domain | Why they rank | Real strength | Exploitable weakness |
|---|---|---|---|---|
| AI Solutions Groningen (Sysweb) | groningen.ai | #1 "AI consultancy Groningen": exact-match domain + keyword title; fresh dateModified (2026-05-02) | Domain only | Thin one-pager: no blog, cases, team, address, LocalBusiness schema. Cannot win map pack or AI citations |
| DataNorth AI | datanorth.ai | Authority: 3-4 posts/month, self-published Top-10 listicle ranks for the money queries, local press (GROC, GIC, Dutch IT Channel), full JSON-LD incl. LocalBusiness, Gemeente Groningen AI-strategy contract | The only complete competitor | No geo term in homepage title, no dedicated Groningen page, listicle transparently self-serving and omits Groningen peers |
| AI Consultancy Group (AICG) | aicg.nl | #3 via /wij-groningen/: dedicated geo URL + keyword in title + exact-match brand name | A Groningen URL exists at all | ~450 words, repurposed Alfa College onboarding page, default Yoast schema only, residential Meerstad address |
| ai.nl | ai.nl | National training queries: 12 tool-specific training pages, "500+ workshops, 8.5/10", RTL/FD/BNR media bar | Trust stack + content breadth since 2018 | Utrecht-based, zero Groningen/Noord-NL presence; quote-only pricing |
| iADam | iadam.nl | #1 "AI bureau Groningen" on title tag alone ("...vanaf EUR 900") | Conversion mechanics: fixed pricing, calculator, guarantee | No address, no schema, no content, trust counters render "0+"; bottom-of-market segment |

**Ranked "what to steal" list:**
1. **Ship the dedicated Groningen landing page** (beats AICG's #3 page on every axis; trivial to bake statically in Astro, which the SPA never could for Bing/ChatGPT).
2. **Publish own NL listicles** ("Top 10 AI consultancy bedrijven Nederland" + Noord-NL variant, AI Heroes #1) and simultaneously pitch into DataNorth/ploko/appfront lists.
3. **LocalBusiness JSON-LD sitewide** with Aarhusweg 4-16 (only DataNorth has it; AICG, groningen.ai, aiify, iADam all lack it; AI Heroes' schema.ts is already close, verify it ships on every Astro page).
4. **Local press flywheel:** pitch GROC, GIC.nl, Dutch IT Channel, Dagblad van het Noorden with AI Fabriek / "AI-hoofdstad" commentary and AI Salon stories (these outlets built DataNorth's authority).
5. **ai.nl patterns:** tool-specific training pages, quantified trust bar near the hero ("X workshops, score Y/10", no introductory label per microcopy preference), keep dateModified fresh on key pages, and a "Vermeld in" media bar once press hits land.
6. **iADam's lesson:** a fixed-price packaged entry offer (the readiness scan with a stated "vaste prijs") converts geo traffic that bounces off quote-only pages.

---

## 7. GEO / AI-Search Action Plan

**Position today:** better than feared on indexing (Bing #1 brand, #5 money query; ~83% of Dutch AI queries flow ChatGPT -> Bing; citations match Bing top-10 ~87%), weak on citation sources (zero listicle presence, brand collision, 2 article topics).

1. **Bing, cutover day:** resubmit the (now-correct) sitemap in Bing Webmaster Tools; fire IndexNow (Netlify plugin or manual API ping of all 73 URLs); crawler-eye check with `curl -A "GPTBot"` and a bingbot UA against `/`, `/nl/diensten`, `/en/services/ai-readiness-scan` to confirm full HTML + JSON-LD. Monitor "AI consultancy Groningen" in Bing weekly for 4 weeks.
2. **AI crawler access:** keep allow-all robots.txt; never block search/citation bots (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot).
3. **Directory/listicle targets (specific URLs):**
   - Submit/pitch: appfront.nl ("Beste AI Bureaus Nederland 2026"), ploko.nl ("De 10 beste AI bureaus van Nederland"), aifais.com ("5 Beste AI Bureaus"), aisuperior.com (accepts submissions), sortlist.nl (self-serve), ensun.io (profile exists, enrich it), consultancy.nl (evaluate paid profile, most-cited NL source).
   - Compliance-specific: artificialintelligenceact.eu/ai-literacy-programs/ (official EU list, free, directly on the money keyword), aiactadvisors.com (free directory).
   - EU-positioning: european-alternatives.eu, europeantechmap.eu.
   - Disambiguation: clutch.co + themanifest.com profiles as "AI Heroes B.V., Groningen" (counter the Amsterdam collision).
   - NAP repair: oozo.nl (Vechtstraat -> Aarhusweg) first, then goudengids.nl, workcollabo.com, vervangendoorai.nl, Company.info.
4. **Citation-worthiness tactics:** answer-capsule sections (40-60 word self-contained answers under H2s), 3+ concrete stats per ~300 words (the Medux 70%/80% numbers high on pages), pricing transparency (rare and highly citable), visible "Laatst bijgewerkt" + dateModified with 6-month refresh cycles, FAQPage schema on new pillars.
5. **Engine-specific:** ChatGPT = Bing (covered above); Perplexity = Reddit/Higherlevel participation under personal names + freshness; Google AI Overviews = the Google authority work (GBP, listicles, press) plus eventual YouTube presence (low priority).
6. **Entity hygiene:** Wikidata item (KvK P3220 = 42051968), then add the QID and all verified profiles to sameAs in `src/data/schema.ts`.

---

## 8. Prioritized Action Plan

### 8.0 Pre-launch blockers (before the Astro cutover)
| Action | Why blocking | Effort |
|---|---|---|
| Fix `public/robots.txt` sitemap line to `sitemap-index.xml` + delete `public/sitemap.xml` | Otherwise Bing/Google keep reading a hand-maintained file that silently drifts from the real 73 pages; sitemap accuracy is the primary Bing discovery signal | 15 min |
| Add noindex filter to `sitemap()` in `astro.config.mjs` (/hanze, /nl/menu, legal) | Ships a contradictory noindex-but-in-sitemap signal on day one otherwise | 30 min |
| Fix duplicate titles: `eu-consultancy.astro` NL+EN (currently identical to digital-independence pair) | Two page pairs with identical title/H1 go live otherwise; fix doubles as the sovereign-AI retitle | 30 min |
| Verify redirect parity: crawl the old sitemap's 80 URLs against the Netlify draft deploy, expect 200 or 301, zero 404s | One-time insurance that no indexed URL dies at cutover | 1 h |
| Cutover-day ritual: Bing sitemap resubmit + IndexNow ping + GPTBot/bingbot curl checks | Protects the existing Bing #5 position through the transition | 1 h |

### 8.1 Quick wins (this week, <2h each)
| Action | Expected impact | Dependencies |
|---|---|---|
| seoTitle pass on service pages (incompany phrasing on ai-foundations, "AI software laten maken" on maatwerk, "Custom AI Development Netherlands", "AI Literacy Training \| EU AI Act Article 4" on eu-training, "Sovereign AI" on eu-development, "Assessment" on readiness pages) | Converts existing pages from keyword-invisible to query-matched; the cheapest ranking lever on the site | None (SubpageLayout already supports seoTitle) |
| Fix Oozo.nl NAP (Vechtstraat -> Aarhusweg 4-16) | Removes a live entity-confusion error feeding both local pack and AI entity resolution | None |
| Submit AI-literacy program to artificialintelligenceact.eu/ai-literacy-programs/ | Free high-authority citation directly on the best keyword | None (better after 8.2 retarget) |
| Wikidata item + extend sameAs in `src/data/schema.ts` | Cheap entity grounding for Gemini/Copilot; counters the Amsterdam collision | None |
| Claim Sortlist + ensun profiles with disambiguated NAP | First two free directory slots in citation-bearing SERPs | None |
| llms.txt in `public/` | Near-zero cost; doubles as a "what should AI cite" inventory | Post-cutover |

### 8.2 Strategic investments (this quarter)
| Action | Expected impact | Effort | Dependencies |
|---|---|---|---|
| Groningen landing page (NL) + EN sibling, with LocalBusiness/Breadcrumb/FAQ schema | The page that can actually rank for the audit's target query; beats AICG's #3 on every axis | 1-2 days | Cutover shipped |
| Claim + optimize Google Business Profile, start review habit (carry-over Tier 1) | Map pack presence above organic; single biggest local lever | 0.5 day + ongoing | Frans/off-site |
| AI-geletterdheid training service page (NL) + eu-training retarget (EN) | Captures the 2 Aug 2026 enforcement demand spike with no incumbent in the SERP | 1-2 days | Do within 8 weeks or lose the window |
| EU AI Act compliance pillar (NL+EN) with checklist + FAQ schema | Highest-ROI new content: positioning match, dated urgency, proven citation format | 2-3 days | Interlinks with the geletterdheid page |
| Incompany AI training page (NL) | Enters the highest-commercial-intent training SERP where every competitor has an exact-match page | 1 day | None |
| Money articles: "Wat kost AI implementatie", MKB stappenplan, AI-beleid template | Bottom-funnel traffic + the discrete numbers AI engines lift | 2-3 days writing | Content collection exists |
| Clutch profile + 2-3 client reviews (Medux, InnoEnergy, Trabu) | Disambiguates the brand collision; Clutch reviews feed the listicles AI engines quote | 0.5 day + client asks | None |
| Listicle outreach sprint (appfront, ploko, aifais, aisuperior, consultancy.nl) | The #1 off-site GEO gap; listicle inclusion correlates with AI citations more than backlinks | 1 day + follow-ups | Stronger after Groningen page + cases live |
| Own NL listicle ("Top 10 AI consultancy bedrijven Nederland" + Noord-NL variant) | DataNorth-proven: a self-published roundup ranks for the money queries | 1-2 days | None |
| Sovereignty content cluster (soevereine AI piece NL, ChatGPT-alternatives guide EN, CLOUD Act explainer) | Owns the differentiator vocabulary before the space crowds | 3-4 days | eu-* retitles done |
| Local press flywheel (GROC, GIC.nl, Dutch IT Channel, Dagblad van het Noorden) | The authority channel that built DataNorth; feeds unlinked brand mentions (~3x citation correlation) | Ongoing | AI Salon + AI Fabriek hooks |

---

## 9. Appendix: refuted findings

The adversarial verification pass returned an empty refuted list: no critical/high finding from the auditor pool was killed. One correction made during synthesis verification (in the finding's favor): the eu-consultancy duplicate-title bug was reported as EN-only; repo verification shows the NL pair (`nl/diensten/eu-consultancy.astro` vs `digitale-onafhankelijkheid.astro`) duplicates as well. One prior-audit assumption confirmed dead: sitemap-level hreflang alternates are NOT needed in the Astro build (BaseLayout bakes hreflang per page), so do not re-report the loss of `xhtml:link` entries when `public/sitemap.xml` is deleted.

---

*Synthesized 2026-06-10 from 11 parallel audit streams. Cross-references: `AUDIT-SEO-GEO-2026-06.md` (2026-06-08), `AUDIT-CONTENT-PAGES.md` (2026-03-08).*

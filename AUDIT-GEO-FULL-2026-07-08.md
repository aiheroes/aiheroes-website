# Full GEO Audit — AI Heroes Website

**Date:** 2026-07-08 · **Scope:** live site (aiheroes.io, post-Astro-cutover master) + all landing pages, on-site code, off-site AI visibility · **Baseline:** `AUDIT-SEO-FULL-2026-06-10.md`

---

## 1. Executive summary

**On-site GEO is now excellent; off-site remains the weak axis — and one measurable win landed.**

- The Astro cutover killed the CSR ceiling for good: every page ships full static HTML with rich JSON-LD, verified with GPTBot user-agent fetches (identical 200/88KB HTML, no cloaking). robots.txt explicitly opts in AI crawlers (`Content-Signal: search=yes, ai-train=yes, ai-input=yes`), Netlify serves RFC 8288 `Link` headers advertising llms.txt + sitemap, bare paths and legacy WP URLs 301 server-side, 404s are real 404s.
- **Bing position jumped: #1 for "AI consultancy Groningen"** (was #5 in June), homepage also #3. The own top-10 listicle ranks #4 for "beste AI bureau Nederland 2026" and #2 for "beste AI bureau Groningen", and AI answer synthesis in test queries **actually quoted it**, naming AI Heroes a top-4 NL bureau and echoing the "AI-hoofdstad van Europa" framing. The on-site GEO machine works.
- **But third-party citation presence is still zero.** Not one of the 8 NL "beste AI bureaus" listicles checked mentions AI Heroes; DataNorth owns the Groningen slot in all of them. The Amsterdam "AI Heroes" (ai-heroes.co) still owns Clutch/The Manifest/Sortlist/Crunchbase — and the Clutch profile may now be mislinking **aiheroes.io** with an Amsterdam address (verify manually). The RTL "De AI Storm" feature has generated **zero crawlable third-party coverage**.
- **The July diensten collapse (15 SKUs → 3 pillars) left debris:** `llms.txt` lists 8 redirecting URLs and omits every strategic lander; the ai-bureau-nederland body links to retired SKU URLs; six strategic landers are orphaned (no nav/footer link).
- **"AI geletterdheid training" is being lost:** not in the top 10; exact-match domains (trainingaigeletterdheid.nl, aigeletterdheid.ai, etc.) have moved in since June. The 2 Aug 2026 enforcement window is 3.5 weeks away.

---

## 2. What changed since the June 10 audit

| June action item | Status 2026-07-08 |
|---|---|
| Fix robots.txt → sitemap-index.xml | ✅ Done, live, correct |
| Sitemap noindex filter | ✅ Done — 77 URLs, no hanze/menu/legal leakage, no trailing slashes |
| eu-consultancy duplicate titles | ✅ Fixed (Sovereign AI retitle) |
| Redirect parity at cutover | ✅ Live checks pass: legacy 301s single-hop, bare paths server-side 301 |
| Groningen landing page + LocalBusiness/Breadcrumb/FAQ | ✅ Shipped, best-in-class schema — **and it ranks Bing #1** |
| AI-geletterdheid service page | ✅ Shipped (NL+EN, Breadcrumb+FAQ) — but **not ranking**; EMD competitors moved in |
| Incompany AI training page | ✅ Shipped — #3 for "AI training Groningen incompany", invisible nationally |
| seoTitle pass on services | ✅ Done, though `digitale-onafhankelijkheid` still has no seoTitle |
| llms.txt | ⚠️ Shipped in June but **now stale** after the diensten collapse |
| Money articles + FAQ frontmatter | ✅ 7 pairs shipped 2026-06-11 with FAQPage schema |
| Off-site: listicles, Clutch, GBP, Wikidata, sameAs | ❌ **Nothing visible happened** — still zero listicle presence, collision unresolved, sameAs = LinkedIn only |

**New regression source:** the diensten collapse (`netlify.toml:109-244`) was net-positive for authority consolidation, but nothing downstream of it was updated (llms.txt, ai-bureau body links, lander discoverability).

**Navbar convergence (25bde79) verified safe:** the desktop mega-menu panel is not in the SSR HTML, but every link it contains also exists in the always-rendered mobile menu markup and the server-rendered footer as real `<a href>` — no crawlability regression.

---

## 3. Live-site technical verification (all pass)

| Check | Result |
|---|---|
| robots.txt | Allow-all + `Content-Signal: search=yes, ai-train=yes, ai-input=yes`; correct sitemap ref; only `/internal/` disallowed. GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot, Claude-SearchBot, Google-Extended, CCBot, bingbot all permitted |
| GPTBot UA fetch of `/` | 200, byte-identical HTML — no CDN bot blocking or cloaking |
| Static HTML | H1 + body copy + JSON-LD present without JS on homepage, all landers checked, articles |
| Sitemap | 77 URLs, all landers present, noindex filtering works, no-slash consistent |
| Canonicals/hreflang | Correct self-canonicals, nl/en/x-default pairs on every page checked |
| Trailing slash | `/path/` → 301 → `/path`, matching canonicals |
| Bare paths | `/over-ons`, `/ai-salon` → server-side 301 to `/nl/...` |
| Legacy redirects | `/the-team/`, `/contact-us/`, `/mastermind-form/` → single-hop 301s |
| 404 | Real HTTP 404 + `noindex, follow` |
| Bonus | `Link:` headers advertise llms.txt (`service-doc`), sitemap, `/.well-known/api-catalog` |

Nit (cosmetic): sitemap lists root as `https://aiheroes.io`, homepage canonical is `https://aiheroes.io/`.

---

## 4. Landing-page GEO scorecard

| Lander (NL/EN) | Answer-first copy | Stats/dates | FAQ (visible + schema) | Page schema | Linked from nav/footer | Bing position |
|---|---|---|---|---|---|---|
| ai-consultancy-groningen / ai-agency-groningen | ✅ | ✅ | ✅ | LocalBusiness+Breadcrumb+FAQ ✅ | ❌ **orphan** (only ai-bureau body link) | **#1** |
| ai-bureau-nederland / ai-agency-netherlands | ✅ (50+ orgs, sinds 2019) | ✅ | ❌ | none (Org only), no Breadcrumb | ✅ footer | #5 "AI bureau Nederland" |
| ai-geletterdheid-training / ai-literacy-training | ✅ (Art. 4, 2-8-2026, €15M) | ✅✅ | ✅ | Breadcrumb+FAQ | ❌ **orphan** | **not top 10** |
| incompany-ai-training (NL+EN) | ✅ | ✅ | ✅ | Breadcrumb+FAQ | ❌ **orphan** | #3 local, invisible national |
| Consultancy pillar | ✅ (€3.000, 70%-faalt) | ✅ | ❌ **no FAQ** | none | ✅ nav | — |
| Software pillar | ✅ (6-day POC, €8k–25k) | ✅ | ❌ **no FAQ** | none | ✅ nav | — |
| Training pillar | ✅ | ✅ | ✅ | FAQPage | ✅ nav | — |
| eu-consultancy (NL+EN) | ✅ (CLOUD Act, "Waarom nu") | ✅ | ❌ | none | mobile-menu featured only | — |
| digitale-onafhankelijkheid / digital-independence | ✅ (67%, Tweede Kamer 3/2025) | ✅ | ❌ | none, **no seoTitle** | ❌ orphan | — |
| eu-training, eu-development | soft | some | ❌ | none | ❌ orphan | high topic overlap w/ eu-consultancy |
| de-ai-storm (NL+EN) | ✅ | — | ❌ | VideoObject | ❌ orphan | — |

**Articles (19):** 7 pairs from 2026-06-11 all carry FAQPage schema ✅. The two 2025 pairs (ai-geletterdheid, ai-strategie-gids) have no FAQ, no `updatedDate` — and are exactly the ones featured in the nav Resources menu. No article ever emits `dateModified` (frontmatter `updatedDate` unused). Cases: 4 clients with Article schema; `llms.txt` + software pillar reference a non-existent **iFood** case.

**Schema gaps sitewide:** no `Service` schema on any commercial page (only the sitewide OfferCatalog); no WebSite schema on the homepage; `sameAs` in `src/data/schema.ts:29` still LinkedIn-only (no Wikidata/Clutch/Sortlist — June item, not done).

---

## 5. Off-site position (the weak axis)

**Search positions (Bing proxy):**
- "AI consultancy Groningen" — **#1 + #3** ✅ (June: #5)
- "AI bureau Groningen" — #6 + #9 (iadam.nl, aanloopai.nl, AI-fabriek news above)
- "AI bureau Nederland" — #5
- "AI training Groningen incompany" — #3 (price snippet shows in SERP)
- "incompany AI training" (national) — **not top 10** (hulz.nl, aitraining.nl, benai.nl own it)
- "AI geletterdheid training" — **not top 10**; EMDs own it: trainingaigeletterdheid.nl, aigeletterdheid.ai, ai-geletterdheid.org, ai-geletterdheidcursus.nl, avk.nl, newnexus.nl

**Listicles: 0/8 checked mention AI Heroes** (ploko.nl, appfront.nl, datanorth.ai, clevertech.nl, feedbax.nl, sortlist.nl, consultancy.nl, ensun.io). DataNorth is the Groningen name in every one. New targets found: aisuperior.com (Bing #1 for "AI bureau Nederland"), zedrox.nl, goodfirms.co, techbehemoths.com, designrush.com, spicyadvisory.com (training angle). consultancy.nl inclusion is **free and automatic** once registered in their bureau database.

**Brand collision (unresolved, possibly worse):**
- Clutch `clutch.co/profile/ai-heroes` = Amsterdam entity, **but the website field appears to show aiheroes.io** → possible live NAP corruption feeding AI entity resolution. **Verify manually and file a correction.**
- The Manifest, Sortlist ("AI Heroes, Amsterdam"), Crunchbase: all still the Amsterdam entity.
- `facebook.com/aiheroes.io` is titled "AI Heroes | Amsterdam" — check if this is our stale page or theirs.
- Oozo.nl/Vechtstraat stale NAP appears de-indexed — deprioritize (June item resolved by attrition).

**Citations:**
- Best existing third-party citation is **AI-hub Noord** — but it's stale: lists Joseph Groot-Kormelink as contact, old product description, filed under "startups". Request a refresh.
- **De AI Storm (RTL): zero indexed third-party coverage** connects AI Heroes to the show; aistorm.tv itself has a broken SSL chain. The TV feature currently generates no GEO equity at all.
- groningen.ai is not media — it's a sovereignty-positioned **competitor** ranking #2 for the money query.

**AI-answer proxy:** for "beste AI bureau Groningen", assistants would cite ploko/appfront/sortlist/consultancy.nl (where we're absent) — the AI summary named DataNorth, AI Solutions Groningen, Searchlab. For NL-wide, it named AI Heroes #4, sourced from **our own listicle**. Own-content citation works; third-party validation is missing.

---

## 6. Prioritized action plan

### P0 — this week, on-site (hours, all in this repo)
1. **Rewrite `public/llms.txt`**: drop the 8 redirecting SKU URLs, add the 3 pillars + all strategic landers (Groningen, geletterdheid, incompany, digitale-onafhankelijkheid, de-ai-storm), remove iFood, list the 7 June article pairs. It's actively advertised via the `Link: service-doc` header.
2. **Fix in-body redirect links** in `ai-bureau-nederland.astro` (lines ~29, 34, 39, 64) + `ai-agency-netherlands.astro` → point at `pillar#anchor` targets.
3. **De-orphan the landers**: add footer links (e.g. under the Consultancy/Training columns) for ai-consultancy-groningen, ai-geletterdheid-training, incompany-ai-training, digitale-onafhankelijkheid. Orphaned pages get crawled less and cited less.
4. **Add FAQPage (visible Q&A + schema) to the consultancy and software pillars** — the two highest-value commercial pages are the two without it.
5. `seoTitle` for digitale-onafhankelijkheid / digital-independence.

### P1 — this week, off-site (the actual bottleneck)
6. **Verify + fix the Clutch profile** (possible aiheroes.io↔Amsterdam mislink), then claim disambiguated "AI Heroes B.V., Groningen" profiles on Clutch, The Manifest, Sortlist, ensun, GoodFirms, TechBehemoths, Crunchbase with consistent NAP (Aarhusweg 4-16, 9723 JJ).
7. **Register with consultancy.nl's bureau database** (free, automatic ranking eligibility).
8. **Listicle outreach sprint**: ploko.nl → appfront.nl → aisuperior.com → zedrox.nl → spicyadvisory.com. Pitch: "the full-service AI agency in Groningen, the €200M AI-fabriek city" — every list already reserves a Groningen slot (currently DataNorth's).
9. **Fix the AI-hub Noord profile** (stale contact/description — best existing citation).
10. **Monetize De AI Storm off-site**: press release + pitches to Dagblad van het Noorden, RTV Noord, Dutch IT Channel, Emerce. Zero crawlable footprint today.
11. **Submit to the EU Commission living repository of AI literacy practices** (via artificialintelligenceact.eu) — free authority citation on the money keyword, **before 2 Aug 2026**.

### P2 — this quarter
12. **Geletterdheid counter-offensive**: the SERP got crowded with EMDs since June. Interlink the lander from the pillar pages + articles, add `updatedDate` refresh cycle, get the EU-repository listing (#11), and consider a "AI-geletterdheid checklist 2026" asset for citations. Without off-site signals the lander won't crack an EMD-dominated top 10.
13. **Service schema** on pillars + landers; **WebSite schema** on homepage; **Breadcrumb** on ai-bureau + EU cluster.
14. **Wikidata item (KvK 42051968) + expand `sameAs`** in `src/data/schema.ts` once profiles from #6 exist.
15. **Articles**: add `updatedDate` (wire `dateModified`), add FAQ frontmatter to the two 2025 pairs, and swap the nav Resources links to feature the stronger June articles.
16. **Differentiate or consolidate the EU cluster** (eu-consultancy / eu-training / eu-development overlap heavily; fold eu-training per the pending lander keep-list decision).
17. Google Business Profile (carry-over; still the biggest local lever, pending the Workspace→Cirrux sequencing).

---

*Method: three parallel audits — repo inventory (every route, schema, technical file, git history since 2026-06-12), live-crawl verification (curl raw HTML, headers, bot UA), off-site research (listicles, SERPs, directories, brand collision). Baseline: AUDIT-SEO-FULL-2026-06-10.md.*

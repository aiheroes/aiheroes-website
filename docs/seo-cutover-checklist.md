# SEO Cutover Checklist — Astro launch

Run this on the day `feat/astro-migration` merges to `master`. Goal: zero indexed URLs die, and the Bing #5 position for "AI consultancy Groningen" survives the transition. Source: `AUDIT-SEO-FULL-2026-06-10.md` §7-8.

## Before merging (on the Netlify draft deploy)

- [ ] **Redirect parity**: `node scripts/check-redirect-parity.mjs <draft-url>` must report all 80 old sitemap URLs as 200 (or 301 to 200). Zero 404s.
- [ ] **Crawler-eye check** (non-JS crawlers must see full HTML + JSON-LD):
  ```bash
  curl -s -A "GPTBot" <draft-url>/ | grep -c "ld+json"
  curl -s -A "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" <draft-url>/nl/diensten | grep "<title>"
  curl -s -A "GPTBot" <draft-url>/en/services/ai-readiness-scan | grep "<h1"
  ```
  Each should return real page content, not the homepage's.
- [ ] **Sitemap sanity**: `<draft-url>/sitemap-index.xml` resolves; `sitemap-0.xml` contains no `/hanze`, `/nl/menu` or legal pages; `<draft-url>/sitemap.xml` is a 404 (the stale hand-maintained file is gone).
- [ ] **robots.txt** points at `https://aiheroes.io/sitemap-index.xml`.
- [ ] Soft-404 check: `<draft-url>/this-does-not-exist-xyz` returns HTTP 404, not 200.

## Cutover day (after merge + production deploy)

- [ ] **Bing Webmaster Tools** (https://www.bing.com/webmasters): submit `https://aiheroes.io/sitemap-index.xml`, remove/let-expire the old `sitemap.xml` entry.
- [ ] **IndexNow**: ping all pages (one-shot, key from Bing Webmaster Tools):
  ```bash
  # Submit URL list via IndexNow API; the 93-page list is dist/sitemap-0.xml
  ```
  Alternative: enable a Netlify IndexNow integration so future deploys ping automatically.
- [ ] **Google Search Console**: submit `sitemap-index.xml` there too; old sitemap reference will fade.
- [ ] Re-run the parity script against `https://aiheroes.io`.
- [ ] Re-run the crawler-eye curls against production.

## Weeks 1-4 after cutover

- [ ] Weekly: check Bing position for "AI consultancy Groningen" (currently #5) and "AI Heroes Groningen" (#1 brand).
- [ ] Weekly: Bing Webmaster Tools + GSC crawl errors; any 404 on an old URL gets a 301 added to `netlify.toml`.
- [ ] After ~2 weeks: spot-check ChatGPT/Copilot with "beste AI consultancy Groningen" style questions; static HTML should start surfacing in citations.
- [ ] Check Core Web Vitals in GSC after data accumulates (the static build should beat the SPA across the board).

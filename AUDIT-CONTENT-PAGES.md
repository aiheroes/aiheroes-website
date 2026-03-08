# Content Pages Audit - AI Heroes Website

**Date:** 2026-03-08
**Scope:** All content pages (excluding homepage). 18 NL service pages, 4 case studies, 2 resource articles, overview pages (Diensten, Over Ons, Resources), sub-pages (Aanpak, Team), Press, Legal, and all English equivalents.

---

## 1. SEO Audit

### 1.1 Critical: Client-Side-Only Meta Tags

All SEO meta tags (title, description, OG, canonical, hreflang) are set via a `useEffect` in `useSEO.ts`. This means:

- **Googlebot** will likely render them (Google executes JS), but with a delay that can affect crawl budget.
- **Social media crawlers** (Facebook, LinkedIn, Twitter) generally **do not** execute JavaScript. OG tags will be invisible to them, resulting in blank or generic link previews when pages are shared.
- **Other search engines** (Bing, DuckDuckGo) have inconsistent JS rendering support.

**Recommendation:** Implement prerendering (e.g., Netlify prerendering plugin, or a prerender.io integration) so that crawlers receive fully rendered HTML with all meta tags present.

### 1.2 Missing SEO Descriptions (High Priority)

The following pages have **no `seoDescription` prop**, meaning they fall back to the subtitle or a generic string:

| Page (NL) | Page (EN) | Impact |
|---|---|---|
| AI voor Developers | AI for Developers | High - competitive keyword |
| AI Privacy & Security | AI Privacy & Security | High - compliance topic |
| AI Media Literacy | AI Media Literacy | Medium |
| EU Training | EU Training | Medium |
| EU Consultancy | EU Consultancy | Medium |
| EU Development | EU Development | Medium |
| Business Case Development | Business Case Development | Medium |
| AI Implementatiebegeleiding | AI Implementation Guidance | Medium |
| Procesanalyse | Process Analysis | Medium |
| AI Prototyping | AI Prototyping | Medium |
| AI Integratie | AI Integration | Medium |
| AI Development Teams | AI Development Teams | Medium |
| Aanpak / Approach | Approach | Medium |
| Team | Team | Low |
| All 4 Case Studies | All 4 Case Studies | High - social proof pages |
| AI Geletterdheid / AI Literacy | AI Literacy | Medium - thought leadership |
| AI Strategie Gids / AI Strategy Guide | AI Strategy Guide | Medium |
| Pers / Press | Press | Low |

Additionally, the **English AI Foundations** page is missing its `seoDescription` while the Dutch version has a good one. This is an inconsistency.

**Only 7 out of ~35 content pages have proper SEO descriptions.** The rest rely on subtitles that are written for human visitors, not search engines (they lack keyword targeting and are often too conversational).

### 1.3 Missing Open Graph & Twitter Tags

`useSEO.ts` does **not** set:
- `og:type` (should be "website" or "article")
- `og:image` (critical for social sharing - no image = ugly link previews)
- `og:site_name` ("AI Heroes")
- `twitter:card` (should be "summary_large_image")
- `twitter:image`

**Impact:** Every page shared on LinkedIn, Twitter, or Facebook will show without a preview image or proper card formatting. For a B2B services company, LinkedIn sharing is a primary discovery channel - this is a significant missed opportunity.

### 1.4 No Structured Data (JSON-LD)

No pages implement structured data for:
- **Organization** schema (company info, logo)
- **FAQ** schema (the Diensten/Services overview page has an FAQ section - this could appear as rich results in Google)
- **BreadcrumbList** schema (the site has clear hierarchy: Diensten > AI Foundations)
- **Service** schema (for service pages)
- **Article** schema (for resource pages)

### 1.5 Hreflang / Alternate URL Issues

- **Case study pages** (`/nl/cases/*`, `/en/cases/*`) have no explicit mapping in `calculateAlternatePath()`. They may work by accident (the `/nl/` to `/en/` prefix swap), but this is fragile.
- **Pers page** uses a custom layout (not PageLayout) and **does not call `useSEO()` at all** - no SEO tags whatsoever.
- **Duplicate logic:** `calculateAlternatePath()` in `useSEO.ts` and `getAlternateUrl()` in `PageLayout.tsx` are identical but maintained separately. If one is updated and the other isn't, language switching and hreflang tags will diverge.
- **No trailing slash normalization.** `/nl/diensten` and `/nl/diensten/` could be indexed as separate URLs.
- **`x-default` always points to Dutch.** For an international site targeting both NL and EN audiences, this is a valid choice, but worth being intentional about.

### 1.6 Missing Sitemap

No sitemap.xml generation is evident. With 70+ pages across two languages, a sitemap is essential for ensuring all pages are discovered and indexed. Netlify can generate one via plugin.

### 1.7 No `robots` Meta Tag Management

No pages set `noindex` directives. The legal pages (Privacy, Voorwaarden/Terms) likely don't need indexing and could benefit from `noindex` to focus crawl budget.

### 1.8 Title Tag Format

All pages use the format `"{Page Title} | AI Heroes"`. This is good and consistent. However, some titles are generic (e.g., "Ons Team | AI Heroes" rather than "AI Experts Team - Trainers & Consultants | AI Heroes").

---

## 2. Sales Funnel / Customer Journey Audit

### 2.1 Funnel Stage Mapping

The site content maps to these funnel stages:

| Stage | Pages | Assessment |
|---|---|---|
| **Awareness** | Resource articles (AI Geletterdheid, AI Strategie Gids), AI Media Literacy | Thin - only 2 resource articles. No blog, no SEO-optimized thought leadership content. |
| **Interest** | Service overview (Diensten), Case studies | Good overview page. Case studies are strong but few (4). |
| **Consideration** | Individual service pages (18) | Very deep. Strong content per service. |
| **Decision** | Aanpak, Team, Pricing info on some pages | Mixed - see details below. |
| **Action** | Contact forms on most pages | Consistently available via PageLayout. |

### 2.2 Awareness Stage: Weak Top-of-Funnel

- **Only 2 resource articles** for the entire site. For SEO-driven lead generation, this is far too thin.
- Resource pages link to services at the bottom but don't nurture the reader through a journey.
- No downloadable content (whitepapers, checklists, templates) that could capture leads.
- The AI Geletterdheid article has strong stats ($15.7T, 72% adoption) but ends with a single link to training - no intermediate step for someone not yet ready to buy.

### 2.3 Interest/Consideration Stage: Strong but Siloed

The 18 service pages are comprehensive and well-structured. However:

- **Pages are siloed within their pillar.** Training pages link to consulting, consulting links to software, but there's no clear "recommended path" for different buyer personas (e.g., "If you're a CTO looking to start with AI..." or "If you're an HR director concerned about compliance...").
- **No persona-based navigation.** A visitor looking to solve an EU compliance problem has to discover the Digital Independence page, then find EU Training, EU Consultancy, and EU Development individually. A "compliance journey" landing page would serve better.
- **Cross-linking is mechanical.** Every page ends with a DarkBox linking to 1-2 related services. These feel like afterthoughts rather than natural next steps in a buyer's journey.

### 2.4 Decision Stage: Missing Trust Elements

- **Testimonials are almost nonexistent.** Only the Trabu case study has a client quote. For 50+ organizations served since 2019, there should be many more.
- **No client logos on service pages.** The Diensten overview has logos (Postcodeloterij, Banijay, Prosus, Medux, Hanze, Locatiqs), but individual service pages don't show relevant client names/logos.
- **Pricing is inconsistent.** Some pages show prices (AI Readiness Scan: from EUR 3,000; AI Roadmap: from EUR 5,000; Prototyping: from EUR 8,000; Integration: from EUR 10,000; Custom Solutions: from EUR 15,000), others don't. The Aanpak page has a pricing overview but it's buried deep. Inconsistency creates uncertainty.
- **No comparison or "why us vs. alternatives"** content anywhere.
- **No certifications, partnerships, or awards** displayed on service pages.

### 2.5 Action Stage: Friction Points

- **Contact form is the only conversion mechanism.** No calendar booking (Calendly-style), no chat, no phone number prominently displayed (only `hello@aiheroes.io` in a few places).
- **No differentiated CTAs.** Whether you want a EUR 2,500 training or a EUR 50,000+ software project, the CTA is the same: "Start gesprek" / "Get in touch." There's no "Book a demo," "Get a quote," or "Schedule a free consultation" to match intent.
- **Case studies have no CTA.** After reading about Medux's 70% cost reduction, there's no "Want results like these?" CTA linking to the relevant service or contact form. The reader hits a dead end.

### 2.6 Missing Funnel Elements

- **No lead magnets** (downloadable PDFs, templates, checklists)
- **No email capture** (newsletter signup, drip campaign)
- **No chatbot or live chat** for immediate engagement
- **No webinar/event promotion** section
- **No ROI calculator** or interactive tool
- **No free assessment or consultation** offer clearly promoted

---

## 3. Story Consistency Audit

### 3.1 Core Narrative

The site tells a consistent core story: **"We combine training, consulting, and software under one roof. We're practitioners, not just consultants."** This message appears on:
- Diensten overview ("Training, consulting en software onder een dak")
- Aanpak page ("Drie pijlers, een traject")
- About page ("Geen consultants die rapporten schrijven, maar practitioners die bouwen en trainen")
- Multiple DarkBox CTAs ("Het hele traject onder een dak")

**Assessment: Strong and consistent.** The "three pillars, one partner" positioning is clear.

### 3.2 Tone & Voice Inconsistencies

- **Service pages vary between formal and casual.** AI Foundations uses "We komen langs en werken met je team" (casual, warm), while Business Case Development uses "Van AI-kans naar onderbouwd investeringsvoorstel" (formal, corporate). The shift is noticeable when browsing multiple pages.
- **English translations are slightly more formal** than the Dutch originals. The Dutch "We komen langs en werken met je team tot iedereen het snapt" becomes "We come in and work with your team until everyone gets it" - similar, but the English pages overall feel less personal.
- **Some pages use "je/jouw" (informal you) while the structure feels boardroom-ready.** The AI Roadmap page discusses "MT presentations" and "steering groups" but addresses the reader as "je." This is fine for Dutch business culture but creates a slight tonal disconnect.

### 3.3 Positioning Inconsistencies

- **EU/Digital Independence pages feel like a different company.** The Digital Independence, EU Training, EU Consultancy, and EU Development pages focus on "European alternatives to American platforms" and "CLOUD Act risks." This is a different value proposition from "practical AI for your team." The connection between these two narratives is never explicitly made.
- **Resource articles feel educational; service pages feel sales-driven.** The AI Geletterdheid article reads like a blog post with third-party stats, while service pages read like product brochures. The transition from one to the other is jarring.
- **Case studies tell different stories.** Medux is a clear ROI story (70% cost reduction). OLX is a feature story (what was built). Trabu is a speed story (6 days). InnoEnergy is a strategy story (board approval). This variety is good, but there's no framing that connects them to a unified narrative about AI Heroes' approach.

### 3.4 Brand Promise vs. Evidence Gap

The site promises:
- "Resultaatgarantie" (results guarantee) on Opportunity Scouting
- "50+ organisaties geholpen" (50+ organizations helped)
- "Sinds 2019" (since 2019)
- "Practitioners die meedoen" (practitioners who participate)

But evidence is thin:
- Only 4 case studies for 50+ claimed clients
- Only 1 testimonial (Trabu)
- No industry-specific success stories despite claiming cross-sector experience
- No "before and after" data beyond Medux

### 3.5 NL/EN Content Parity

- **Structurally identical** across all pages - good.
- **One bug:** The English Services page contact form shows "Verzenden..." (Dutch) during submission instead of "Sending..." - breaks immersion.
- **Minor styling differences:** Some English pages are missing CSS classNames present in their Dutch counterparts (Medux, AI Literacy DarkBoxes).
- **Missing EN seoDescription** on AI Foundations EN (present in NL version).

---

## 4. Conversion Best Practices Audit

### 4.1 What's Working Well

- **Sticky CTA button** on all PageLayout pages - appears when hero scrolls out, disappears near contact form. Smart UX.
- **Consistent page structure** - visitors quickly learn the layout (hero -> content -> contact form).
- **Stats grids** on service pages (duration, participants, format) give quick decision-making info.
- **DarkBox cross-links** keep visitors in the funnel rather than hitting dead ends.
- **Pillar badges** on service pages help visitors understand categorization.
- **Social proof on overview page** - client logos and stats ("70% lagere kosten", "6 dagen naar prototype").
- **FAQ section** on Diensten page reduces objections.
- **Contact form is above the fold** on PageLayout (via scroll-to anchor from hero CTA).

### 4.2 High-Impact Issues

#### 4.2.1 No Differentiated CTAs
Every page has the same CTA: "Start gesprek" / "Get in touch." Best practice is to match the CTA to the page intent:
- Training pages: "Plan een workshop" / "Book a workshop"
- Readiness Scan: "Vraag een scan aan" / "Request a scan"
- Case studies: "Wil je dit ook?" / "Want results like these?"
- Resource articles: "Download onze checklist" / "Get the full guide"

#### 4.2.2 Case Studies Are Dead Ends
All 4 case studies end with an "About [Client]" DarkBox but **no CTA to contact or relevant services.** After reading about 70% cost savings at Medux, the visitor has no clear next action. This is the single biggest conversion leak.

#### 4.2.3 No Urgency or Scarcity Triggers
- No limited-time offers
- No "spots filling up" indicators
- No seasonal promotions
- The EU AI Act timeline (Feb 2025, Aug 2025) on the Digital Independence pages is the only urgency element, and those dates are now in the past (it's 2026), making the content feel outdated.

#### 4.2.4 Contact Form is Too Generic
The contact form is the same on every page. It doesn't:
- Pre-fill the topic based on the page the visitor is on
- Offer quick-select options ("I'm interested in training" / "I need a consultation")
- Show expected response time
- Mention what happens after submission

#### 4.2.5 No Social Proof on Individual Service Pages
Client logos are only on the Diensten overview and homepage. Individual service pages (where the actual decision happens) have no testimonials, client names, or trust indicators. The visitor who arrives via search directly on `/nl/diensten/ai-foundations` never sees social proof.

#### 4.2.6 Missing "Above the Fold" Value Proposition
Service page heroes show a title and subtitle, but no:
- Key stat or result ("Teams report 3x productivity gain")
- Trust indicator ("Trusted by 50+ organizations")
- Visual element (icon, illustration, or client logo)

The hero section is visually strong but informationally thin.

### 4.3 Medium-Impact Issues

#### 4.3.1 Pricing Transparency is Inconsistent
Some pages show prices, others don't. This creates two problems:
1. Pages without prices may lose price-sensitive visitors who assume it's "if you have to ask, you can't afford it."
2. The Aanpak page buries pricing in the middle of content about methodology.

**Recommendation:** Either show pricing consistently on all pages or create a dedicated pricing page.

#### 4.3.2 No Visual Differentiation Between Service Pillars
Training, consulting, and software pages use the same layout. The `accentColor` prop varies (red/blue) but not in a way that maps consistently to pillars. Some training pages are red, some are blue. The pillarBadge helps but is small.

#### 4.3.3 Resource Articles Don't Capture Leads
The two resource articles (AI Geletterdheid, AI Strategie Gids) are valuable content but have no lead capture mechanism:
- No "Download as PDF" option
- No email gate
- No "Get more insights" signup
- The only CTA is a generic link to the services section

#### 4.3.4 Press Page Has No SEO
The Pers/Press page uses a custom layout and **doesn't call `useSEO()` at all.** No title tag, no meta description, no OG tags. It's also not indexed properly.

#### 4.3.5 Legal Pages Could Be `noindex`
Privacy and Terms pages consume crawl budget without providing search value. They should be `noindex, follow`.

### 4.4 Low-Impact / Nice-to-Have

- **No breadcrumbs** on subpages (helps both UX and SEO)
- **No reading time estimates** on resource articles
- **No "related services" sidebar** on case study pages
- **No video content** anywhere on the site
- **No micro-interactions** or animations to highlight key stats
- **The `/hanze` page** exists outside the language structure and has no alternate version

---

## 5. Priority Recommendations

### Tier 1: Quick Wins (1-2 days effort)

1. **Add `seoDescription` to all pages** that are missing one (28+ pages). Use keyword-targeted descriptions.
2. **Add OG image, og:type, og:site_name, and twitter:card** to `useSEO.ts`.
3. **Fix the Dutch "Verzenden..." text** in the English contact form.
4. **Add CTAs to case study pages** - "Want similar results? Let's talk" linking to contact form.
5. **Add `noindex` to legal pages** (Privacy, Terms/Voorwaarden).
6. **Update EU AI Act dates** on Digital Independence pages (Feb 2025 and Aug 2025 are in the past).

### Tier 2: High-Impact Improvements (1-2 weeks effort)

7. **Add social proof to individual service pages** - at minimum, a "Trusted by" logo bar or relevant testimonial.
8. **Differentiate CTAs per page type** - match the call-to-action to the service being offered.
9. **Add structured data** (JSON-LD) for Organization, FAQ (on Diensten page), and BreadcrumbList.
10. **Implement Netlify prerendering** or add a prerender plugin for proper social sharing and non-Google SEO.
11. **Create a sitemap.xml** (via Netlify plugin or build step).
12. **DRY the alternate URL logic** - consolidate `calculateAlternatePath()` and `getAlternateUrl()` into one function.
13. **Add a results/trust section to the hero** of high-intent service pages (key stat + trust indicator).

### Tier 3: Strategic Improvements (1-2 months effort)

14. **Create more top-of-funnel content** - blog posts, guides, and industry-specific articles for SEO-driven lead generation.
15. **Build persona-based landing pages** (e.g., "AI for Healthcare," "AI for Financial Services") that bundle relevant services.
16. **Add lead capture mechanisms** - downloadable resources, email signup, newsletter.
17. **Collect and display more testimonials** - aim for at least one per service pillar.
18. **Add a booking tool** (Calendly integration) alongside the contact form for visitors ready to schedule.
19. **Create a dedicated pricing page** with clear tiers and comparison.
20. **Connect the EU/Digital Independence narrative** to the core AI services story more explicitly.

---

## Appendix: Page-by-Page SEO Description Status

| Page | NL seoDescription | EN seoDescription |
|---|---|---|
| AI Foundations | Yes | **Missing** |
| Opportunity Scouting | Yes | Yes |
| Copilot Basics | Yes | Yes |
| AI voor Developers | **Missing** | **Missing** |
| AI Privacy & Security | **Missing** | **Missing** |
| AI Media Literacy | **Missing** | **Missing** |
| AI Readiness Scan | Yes | Yes |
| AI Roadmap | Yes | Yes |
| Maatwerk AI-Oplossingen | Yes | Yes |
| Digitale Onafhankelijkheid | Yes | Yes |
| EU Training | Yes | Yes |
| EU Consultancy | Yes | Yes |
| EU Development | Yes | Yes |
| Business Case Development | Yes | Yes |
| AI Implementatiebegeleiding | Yes | Yes |
| Procesanalyse | Yes | Yes |
| AI Prototyping | Yes | Yes |
| AI Integratie | Yes | Yes |
| AI Development Teams | Yes | Yes |
| Diensten (overview) | Yes | Yes |
| Over Ons / About | Yes | Yes |
| Aanpak / Approach | **Missing** | **Missing** |
| Team | **Missing** | **Missing** |
| Resources (overview) | Yes | Yes |
| AI Geletterdheid / Literacy | **Missing** | **Missing** |
| AI Strategie Gids / Strategy Guide | **Missing** | **Missing** |
| Case: Medux | **Missing** | **Missing** |
| Case: OLX | **Missing** | **Missing** |
| Case: Trabu | **Missing** | **Missing** |
| Case: InnoEnergy | **Missing** | **Missing** |
| Pers / Press | **No SEO at all** | **No SEO at all** |
| Privacy | **Missing** | **Missing** |
| Voorwaarden / Terms | **Missing** | **Missing** |

# Relaunch: bouwplan

Het plan waarmee de nieuwe site gebouwd wordt, met alle besluiten verwerkt (stand 2026-10-12).

## 0. Bronnen en rangorde

Bij tegenspraak wint de hogere bron:

1. `docs/relaunch/01-besluiten.md`: de antwoorden van Frans uit het interview.
2. `docs/relaunch/pages/*.md`: het plan per pagina (wat stond er, wat moet er staan, besluiten, wacht op).
3. `docs/relaunch/00-opzet.md`: paginalijst, URL's en redirect-kaart.
4. `docs/relaunch-2026.md`: uitgangspunten en categorieën.
5. `docs/company-profile.md`: positionering, aanbod, proof-regel.

De goedgekeurde homepage (`src/components/experiment/`, `src/styles/huisstijl.css`, `DESIGN.md`,
`ASSETS.md`) is de stijlbron. Elke pagina wordt van scratch geschreven; oude copy is alleen
inventaris.

## 1. Wat er gebouwd wordt

Nederlands eerst, Engels daarna als één blok (zelfde lijst, eigen zoektermen).

| Categorie | Pagina's | Aantal |
|---|---|---|
| Pillar pages | P1 home, P2 wat we bouwen, P3 nieuwe AI-toepassing, P4 oude software vervangen, P5 software in eigen beheer, P6 hoe we werken, P7 startsprint, P8 kosten en opbrengst vooraf, P9 compliance en security, P10 training, P11 over ons, P12 team, P13 vacatures, P14 pers, P15 AI Salon, P16 cases, P17 kennis | 17 |
| Cases (mal C0) | C1 Kwakkel, C2 INQ22, C3 Strive, C4 IC Commerce, C5 eigen stack, C6 Medux, C7 Trabu, C8 InnoEnergy, C9 OLX | 9 |
| Landings (mal L00) | L01–L16 (kern: entries, kosten, plaats) en T1, T2, T5 (training) | 19 |
| Kennis (mal B0) | K1–K7 (compliance), B1 top 10, B2 waar begin je met AI, B3 Europese alternatieven voor ChatGPT | 10 |
| Campagne (mal A0) | A1 De AI Storm | 1 |
| Hulppagina's (mal H0) | H1 privacy, H2 voorwaarden, H3 AI-assistent, H4 vier vacaturedetails, H5 404 | 8 |

Vijf mallen, 64 Nederlandse pagina's. T3 (Copilot) en T4 (AI voor developers) vervallen als
landing en worden kaarten op T1.

## 2. Vaste inhoud die overal gelijk moet zijn

| Onderwerp | Wat er overal staat |
|---|---|
| Kernzin | "Wij bouwen AI-toepassingen die je team elke dag gebruikt"; slogan "Van ambitie tot implementatie" |
| Startsprint | **Zes dagen**, vast bedrag **vanaf €8.000** voor alle drie de entries, start **binnen twee weken** na het eerste gesprek. Uitkomst: werkend prototype of bouwplan, met de business case op één pagina. Geen garantie "gratis als er niets uit komt" |
| Bouw | Vanaf €15.000, in sprints van twee weken |
| Na oplevering | "Wij blijven beheren en doorontwikkelen"; gedocumenteerd, niet vast aan één AI-leverancier. Nooit "de broncode is van jou". Enige uitzondering: L07 extra developers, waar de code van de klant van de klant blijft |
| De standaard | Business case vooraf, compliance vanaf de tekentafel, je mensen kunnen ermee werken (incl. implementatiebegeleiding en adoptie), niet vast aan één AI-leverancier |
| Compliance los | "AI Act-check" zonder prijs, plus ISO 42001-begeleiding; "we werken naar ISO 42001- en 27001-certificering"; we doen zelf security-reviews en pentests |
| Training | Bijrol, vanaf €2.500 per dagdeel, op locatie in heel Nederland of online live; lagere tarieven onderwijs en non-profit alleen bij training; AI-geletterdheid met certificaat |
| Cijfers | "50+ organisaties" en "1.000+ professionals getraind", altijd met "sinds 2019". "70% van AI-projecten faalt" komt nergens terug |
| Herkomst | Merk sinds 2019; overname door het huidige team eind 2025 wordt expliciet verteld (P11, P14) |
| Medux | Overal bij naam, behalve op de homepage (en LinkedIn). Cijfers door Medux gemeten; 7,8 = "waardering AI-gesprekken" |
| Auteurs | Software en compliance David Homan; strategie (business case, kosten, plaats, gidsen, top 10) Frans Hoorn; training en geletterdheid Jan Brusse. Foto, bio van twee zinnen (Claude schrijft, founders keuren), LinkedIn als `sameAs` |
| Contact | Startsprint-knop en het homepage-contactformulier (`/api/contact`). Chips: de drie entries en "Weet ik nog niet"; "Training" alleen op trainingspagina's, daar voorgeselecteerd. Reactie binnen 24 uur; chat-escalatie binnen 4 uur binnen kantooruren |
| Perscontact | Jan Brusse, info@aiheroes.io, 050-200 3373 |
| Huisregels | Geen em-dashes, geen "geen X maar Y", geen zijstrepen, geen scroll hijacking, IconPark Outline (stroke 4, square, miter), duotoon voor mensen, Unsplash-stand-ins met herkomst in `ASSETS.md`, screenshots waar het kan |

## 3. Menu en footer

| Menu-item | Kleur | Subitems (label → pagina) |
|---|---|---|
| Wat we bouwen (label linkt niet zelf) | rood | Nieuwe AI-toepassing → P3 · Oude software vervangen → P4 · Software in eigen beheer → P5 |
| Hoe we werken (label → P6) | blauw | Eerste stap: de startsprint → P7 · Kosten en opbrengst vooraf → P8 · Compliance en security → P9 · AI-training voor je team → P10 |
| Over ons (label → P11) | donker | Over AI Heroes → P11 · Het team → P12 · Vacatures → P13 · AI Salon-avonden → P15 · Op tv: De AI Storm → A1 · Voor de pers → P14 · Kennis → P17 |
| Cases | | → P16 |
| Knop | | Plan een startsprint → P7 |

P2 is bereikbaar via de entry-kaarten op home, de footer en kruimelpaden. De footer krijgt
kolommen voor de drie entries met hun landings, hoe we werken, bedrijf en juridisch, zodat elke
landing minstens één vaste link heeft.

## 4. Technische opzet

### 4.1 Branch en routes
- Alles in de branch `relaunch`, op de echte routes. De experiment-homepage wordt `/` (de NL-home
  blijft op `/`; `/nl` verwijst ernaar). Live blijft ongewijzigd tot de merge.
- Pillars als losse `.astro`-pagina's. Cases via `src/pages/nl/cases/[slug].astro`, landings via
  `src/pages/nl/[landing].astro`, kennis via `src/pages/nl/kennis/[slug].astro` (statische routes
  gaan in Astro voor op dynamische).
- Oude routes (`src/pages/nl/diensten`, `resources`, `over-ons/aanpak`) en de legacy React-tree
  (`pages/`, `components/`, islands) gaan pas weg in de lancering-fase, als alles vervangen is.

### 4.2 Bouwdoos (`src/components/hs/`)
De experiment-componenten verhuizen naar `src/components/hs/` en worden herbruikbaar gemaakt:
- **Bestaand, generaliseren:** Nav, Footer, Cover, Statement, Entries, Standard, Case, Quotes,
  Place, Contact, Logo, Icon, Duotone, `hs.ts` (`zet()`), `hs-client.ts`.
- **Nieuw:** Layout (`HsLayout.astro`, bouwt op de SEO-logica van `BaseLayout`), Breadcrumb,
  Stats (tellers), Timeline, CardGrid, Faq (met FAQPage-data), Prose (leeskolom), AuthorBox,
  CtaBand, LogoRow, Compare (tabel), Filter (entry), VideoEmbed (geen cookies tot afspelen),
  DownloadForm (K3), JobPosting-blok.
- **Chatassistent** in de nieuwe huisstijl (`src/components/chat/`).
- Stijl blijft in `huisstijl.css` onder `.hs`; nieuwe blokken volgen `DESIGN.md`.

### 4.3 Content en data
| Bron | Inhoud |
|---|---|
| `src/data/nav.ts` | Menu en footer (sectie 3), los van `constants.ts` |
| `src/data/authors.ts` | Frans, David, Jan: naam, rol, foto, bio, LinkedIn |
| `src/data/salon.ts` | Sprekers, sponsors, edities. Eén bestand, ook op live gebruikt, zodat live-updates tijdens de freeze één-op-één meegaan |
| Collectie `cases` | Nieuw schema volgens C0: `client`, `anonymous` per plek, `anonymousLabel`, `sector` (incl. `sport`), `entry` (lijst), `currentTeam` (intern: volgorde en blok "inbegrepen"), `landings`, `headline`, `lede`, `stats`, `question`, `built`, `timeline`, `standard` (alleen huidig team), `quote` (`approved`), `photo` (`standIn`), `liveUrl`, `year`, `order`. `era` en `accentColor` vervallen. De homepage-case leest uit deze collectie |
| Collectie `landings` (nieuw) | Schema volgens L00: entry, groep (kern/training), vraag, auteur, bewijs-cases, faq, optionele blokken, `updatedDate` (alleen structured data) |
| Collectie `articles` | Schema volgens B0: soort (artikel, listicle, gids), groep (compliance, kern, overig), auteur, kernantwoord, faq, gerelateerd, `updatedDate` zichtbaar |
| `src/data/i18n.ts` | Nieuwe NL/EN-slugkaart |
| `src/data/seo.ts`, sitemap | Noindex-lijst en sitemap op de nieuwe URL's |
| `src/data/schema.ts` | Builders: Organization, Service, FAQPage, Article, ItemList, BreadcrumbList, Person, Event (AI Salon), JobPosting (zonder salaris) |
| `public/llms.txt` | Nieuwe structuur en feiten |
| `server/prompt.ts`, `server/index-data` | Assistent: zes dagen, geen garantie, nieuwe URL's; index opnieuw bouwen uit de nieuwe pagina's |

### 4.4 Redirects
- Alles in `vercel.json` volgens `00-opzet.md`: 301's per oude URL, geen ketens, geen ankers als
  doel; 410 via `api/gone.ts` voor `/hanze`, `/nl/menu`, `/og-image-generator`,
  `/Brand_Package/_favicon_test`; `/nl/experiment/huisstijl` → `/`.
- `scripts/check-redirect-parity.mjs` met `old-sitemap-urls.txt`, aangevuld met elke URL uit
  Search Console: elke oude URL geeft 200 of één 301 naar een 200.

### 4.5 Formulieren
- `/api/contact`: chips per pagina instelbaar (entry voorgeselecteerd, Training alleen op
  trainingspagina's).
- `/api/apply`: vacatures plus open sollicitatie.
- Nieuw `/api/download` voor het AI-beleidsjabloon (K3): e-mail in ruil voor het sjabloon, melding
  naar info@ via Resend, passage in de privacyverklaring. Het formulier gaat pas aan als het
  sjabloon bestaat.

## 5. Werkwijze per pagina

1. Aan het begin van elke fase: Frans keurt de plannen van die fase in één keer (de plannen zijn
   compleet; alleen bezwaren melden).
2. Claude schrijft de copy van scratch uit het plan en bouwt de pagina in de huisstijl.
3. Preview op Vercel (met bypass-link voor Frans en David); één review-ronde per pagina, daarna
   hooguit één correctieronde.
4. Gates per pagina: `npm run check` groen, desktop en mobiel bekeken, geen em-dashes of
   "geen X maar Y", geen zijstrepen, structured data valide.
5. Feiten die verouderen (AI Act-data, wetgeving) worden bij het schrijven tegen actuele bronnen
   gecheckt en daarna elk kwartaal (Claude checkt, David keurt).

## 6. Fasering

| Fase | Wat | Klaar als |
|---|---|---|
| **0. Fundament** | Docs committen; experiment → `src/components/hs/`; `HsLayout`; `nav.ts`, `authors.ts`, `salon.ts`; nieuwe collectieschema's; homepage naar `/` (label 7,8 → "waardering AI-gesprekken"); footer met alle kolommen; chatassistent in huisstijl; skelet van de redirects | Home draait op `/` in de branch, check groen, nav en footer kloppen met sectie 3 |
| **1. Conversie** | P7 startsprint, P3 nieuwe AI-toepassing, P4 oude software vervangen, P5 software in eigen beheer | Vier pagina's live in preview en goedgekeurd |
| **2. Overige pillars** | P2, P6, P8, P9, P10, P11, P12, P13, P14, P15, P16, P17 | Alle menupagina's bestaan in de nieuwe stijl |
| **3. Cases** | Mal C0 en C1–C9; overzicht P16 met filter en Strive uitgelicht; pillars tonen cases per entry | Alle cases in de mal; C7–C9 met de details van Frans |
| **4. Landings** | Mal L00, L01–L16, T1, T2, T5 | Elke landing heeft een vaste link vanaf pillar en footer |
| **5. Kennis** | Mal B0, K1–K7, B1–B3, kennis-overzicht | Artikelen met auteur, kernantwoord, FAQ en structured data |
| **6. Campagne en hulp** | A1 De AI Storm, H1–H5, vacaturedetails als JobPosting | Alle pagina's van de NL-site bestaan |
| **7. Engels** | Alle pagina's gespiegeld met eigen EN-zoektermen; `i18n.ts`, hreflang | NL en EN volledig |
| **8. Lancering** | Redirects compleet; redirect-parity en parity-check groen; sitemap, `llms.txt`, assistent-index; oude routes en legacy-tree verwijderd; experiment-route weg; bypass-secret roteren; stille lancering | Merge naar `master`, live gecontroleerd |

## 7. Wat Frans nog levert, en wanneer het nodig is

| Wat | Nodig in fase | Als het er nog niet is |
|---|---|---|
| Akkoord op de plannen per fase | elke fase | Bouwen wacht |
| Bio-akkoord founders (Claude schrijft) | 4–5 | AuthorBox met naam en rol, bio volgt |
| Akkoord naam basistraining (voorstel "Werken met AI", was AI Foundations) | 4 | Werktitel blijft staan |
| Akkoord teksten privacy (H1) en AI-assistent (H3) | 6 | Pagina niet live in de nieuwe stijl |
| Details Trabu, InnoEnergy, OLX | 3 | Case met alleen vaststaande feiten |
| Quotes Kwakkel, Strive, INQ22 | 3 | Case zonder quote; homepage-quote blijft |
| Foto's AI Salon-kick-off | 2 | Stand-in |
| Onderwerp AI Storm-aflevering | 6 | Blok "wat je zag" algemeen |
| Eigen AI-beleid (basis K3-sjabloon) | 5 | K3 zonder download |
| Akkoord quotes AI Salon-persbericht | 2 | Persbericht niet op P14 |
| Voorwaarden juridisch bijgewerkt | 8 | **Blokkeert de lancering** |
| DNS-record `aoplatform.backend.aiheroes.io` | los | Geen invloed op de bouw |

## 8. Tijdens de bouw

- Content freeze op live, behalve de AI Salon: wijzigingen gaan via `src/data/salon.ts` en worden
  in dezelfde sessie ook in `relaunch` gezet.
- `master` wordt regelmatig in `relaunch` gemerged, zodat de uitzonderingen meekomen.
- Previews alleen via de bypass-link; de experiment-route en nieuwe pagina's blijven noindex tot de
  lancering.

## 9. Risico's

| Risico | Maatregel |
|---|---|
| Rankings dalen door nieuwe URL's | Redirect-kaart zonder ketens, redirect-parity met alle GSC-URL's, Search Console na de lancering opnieuw indienen |
| Live en branch lopen uit elkaar | Freeze, `salon.ts` als gedeelde bron, regelmatig mergen |
| Engels blijft achter | Fase 7 is een harde stap vóór de lancering |
| Verouderende feiten (AI Act) | Check bij schrijven en elk kwartaal, bijwerkdatum zichtbaar |
| Stand-in-foto's ogen generiek | Lijst "plekken voor eigen foto's" bijhouden voor de shoot |

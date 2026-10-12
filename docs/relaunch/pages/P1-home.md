# P1 Home

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Pillar | `/` (NL; `/nl` krijgt een 301 naar `/`), `/en` (EN) | `/` (live React-island), `/nl/experiment/huisstijl` (experiment) | `/`: 13.682 vertoningen / 393 klikken / pos. 16,8 · `/en`: 6.479 / 379 / 19,7 · `/nl/`: 120 / 1 | Centrum van de hele site: linkt naar de drie entries, de startsprint en de cases |

## 1. Wat stond er

**Live homepage** (`src/pages/index.astro` → `HomeIsland` → legacy `pages/HomePage.tsx`), secties in volgorde: Hero (4 slides), Services (drie entries), referenties (`SocialProof`, staat sinds f52896f boven de standaard), Standard ("Bij elke bouw inbegrepen"), Approach, Team (Groningen), Contact, Footer. Snap-scroll; copy uit `constants.ts` (`CONTENT.nl`).

**Experimentele homepage** (`src/pages/nl/experiment/huisstijl.astro`, goedgekeurd 2026-10-09 als stijlbron), secties in volgorde:

1. Cover: kernzin "Wij bouwen AI-toepassingen die je team elke dag gebruikt", plus drie roterende slides: "In zes dagen een werkend prototype", "Weg met software die je tegenhoudt", "AI op eigen grond, Europees gehost". Elke slide heeft een subregel en de knop "Plan een startsprint". De foto's zijn Unsplash-stand-ins.
2. "Wat we voor je bouwen": drie kleurvlakken (Nieuwe AI-toepassing / Oude software vervangen / Software op je eigen servers) met beschrijving.
3. "Wat klanten over ons zeggen": zes quotes (IC Commerce, Jogo, Avics, Cloud Primero, Postcode Loterij, Hanzehogeschool) plus de logomuur (UMCG, Tweede Kamer, Postcode Loterij, Envalior, Banijay, Prosus, Hanzehogeschool).
4. "Bij elke bouw inbegrepen" op blauw: business case vooraf, compliance vanaf de tekentafel, je mensen kunnen ermee werken, niet vast aan één AI-leverancier (IconPark-iconen).
5. Case, anoniem: "4.000 gesprekken per maand, 80% door AI", zorgorganisatie, 70% kostenbesparing, klanttevredenheid 7,8, ook buiten kantooruren, doorschakeling naar een medewerker.
6. "Gebouwd in Groningen", AI-hoofdstad van Europa: AI Fabriek, 200 miljoen euro, Aarhusweg.
7. Statement: "Met de business case vooraf, compliance in het ontwerp en een team dat ermee kan werken" plus de slogan "Van ambitie tot implementatie".
8. Contact: "Vertel wat je wilt bouwen", 24 uur, info@aiheroes.io, 050-200 3373. Kennismaking plannen met Frans (business case en scoping), David (bouw, hosting en compliance) of Jan (adoptie en training). Formulier met onderwerp, budget en bericht. In het experiment post het formulier niet.
9. Footer: vier kolommen, juridische regel (AI Heroes B.V., Aarhusweg 4-16, 9723 JJ Groningen, KvK 42051968).

**Zoekdata:** vrijwel alle klikken komen op merknaam ("ai heroes" 534 klikken, "aiheroes", "ai heros"). Generieke termen ("ai agency" 1.459 vertoningen, pos. 41; "ai agency nederland" 940, pos. 13,7; "ai consultancy nederland" 572) tonen de homepage wel, maar leveren geen klikken op.

**Feiten die niet meer kloppen:**
- In het experiment linkt de nav nog naar de oude URL's uit `constants.ts` (`/nl/diensten/...`, `/nl/resources`).
- Het formulier in het experiment verstuurt niets.
- De chatassistent zit niet in het experiment.

## 2. Wat moet er staan

De inhoud is klaar en goedgekeurd. Dit plan beschrijft alleen wat er bij de verhuizing moet gebeuren.

- **Voor wie:** de beslisser met een ding (COO, CTO, hoofd operatie, productowner, afdelingshoofd bij een overheid) die AI Heroes via naam, LinkedIn, tv of een tip vindt. Ook wie via een generieke zoekterm binnenkomt.
- **Met welke vraag:** "Wat doen jullie, en past dat bij mijn probleem?"
- **Wat moet hij weten:** de secties en volgorde van het experiment blijven ongewijzigd.
- **Wat moet er bij de verhuizing gebeuren:**
  1. Route: het experiment wordt de NL-homepage op `/`. `/nl` krijgt een 301 naar `/`; `/nl/experiment/huisstijl` ook. De legacy `HomeIsland` voor NL vervalt (snap-scroll-React), `noindex` gaat eraf.
  2. Nav en footer naar de nieuwe URL's uit `00-opzet.md` (wat-we-bouwen, nieuwe-ai-toepassing, software-vervangen, eigen-beheer, hoe-we-werken, business-case, compliance, training, kennis). Het menulabel "Wat we bouwen" opent alleen het submenu en linkt niet zelf naar P2.
  3. Menulabels: de derde entry heet "Software in eigen beheer" (ook als titel van het derde entry-vlak), de compliance-pillar "Compliance en security", het kennisoverzicht "Kennis".
  3a. Case-sectie: het label bij de 7,8 wordt "waardering AI-gesprekken" (nu "klanttevredenheid" in `HsCase.astro`). De case blijft anoniem en linkt niet naar de case-pagina.
  4. Het contactformulier gaat echt posten naar `/api/contact` (onderwerp, budget, bericht, plus de beslisser-chip uit `contact.form.owner`, die het experiment nu niet toont), met succes- en foutmelding uit `constants.ts`.
  5. De chatassistent terugzetten (`CHAT_ENABLED`), in de huisstijl.
  6. Schema: `PROFESSIONAL_SERVICE_SCHEMA` en `WEBSITE_SCHEMA` behouden.
  7. De copy die het experiment overschrijft (`TITLES` in `HsEntries`, de sublabels in `HsNav`, de case in `HsCase`) naar één bron verplaatsen, zodat menu, homepage en entry-pagina's dezelfde namen gebruiken.
  8. Engels volgt als blok.
- **Volgende stap:** de startsprint, via de knop in de cover, de nav en het contactblok.
- **Bewijs:** quotes, logomuur, de anonieme case, de foto's van het team in het contactblok.
- **Links:**
  - Uit: P2 tot en met P10, de cases, het contactformulier.
  - In: elke pagina via het logo.
  - De case-sectie linkt niet naar de Medux-pagina; dat blijft zo.
- **SEO/GEO:**
  - Intentie: merk en navigatie. Titel blijft in de lijn van de huidige: "AI laten bouwen die je team elke dag gebruikt | AI Heroes".
  - Meta: kernzin, drie entries, startsprint, Groningen.
  - Generieke termen ("ai agency nederland") vangen we op met L16, niet met de homepage.

**Besluiten**
1. NL-home blijft op `/`; `/nl` verwijst ernaar (zie `00-opzet.md`).
2. Unsplash-stand-ins in de cover blijven voor de lancering; eigen shoot later (zie 01-besluiten §15).
3. "In zes dagen een werkend prototype" blijft: de startsprint is overal zes dagen (zie 01-besluiten §1).
4. De huidige quotes blijven tot er een quote van het huidige team is (zie 01-besluiten §8).
5. Het 7,8-label wordt "waardering AI-gesprekken"; Medux blijft op home anoniem (zie 01-besluiten §7).
6. Derde entry heet "Software in eigen beheer" (zie 01-besluiten §3).

**Wacht op**
- Quotes van Kwakkel en Strive (actiepunt): zodra binnen, vervangen ze de pre-overname-quote bovenaan. Niet blokkerend voor de lancering.

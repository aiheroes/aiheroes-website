# B0 De blog-template

| Categorie | Nieuwe URL | Oude URL | Hangt onder | Zoekdata (GSC, 6 mnd) |
|---|---|---|---|---|
| Template (blogs, listicles, kennisartikelen) | `/nl/kennis/<artikel>`, EN `/en/insights/<artikel>` | `/nl/resources/<slug>` | P17 Kennis, plus per artikel de pillar van zijn groep | n.v.t. |

Geldt voor K1 t/m K7 (compliance) en B1, B2, B3. Landings (L1 t/m L16, T1, T2 en T5) gebruiken de
landing-template L0; die staat los van deze template.

## 1. Wat stond er

- **Route:** `src/pages/{nl,en}/resources/[slug].astro` uit de content collection `articles`
  (`src/content/articles/*.mdx`, 18 bestanden, NL en EN als losse bestanden met
  `alternateSlug`).
- **Frontmatter nu:** `lang`, `slug`, `alternateSlug`, `title`, `subtitle`, `seoTitle`,
  `description`, `accentColor` (red/blue), `publishDate`, `updatedDate`, `author`, `faq` (q/a).
- **Auteur:** overal `author: AI Heroes`. Er is geen persoon, foto of bio.
- **Datums:**
  - `publishDate` is 2025-09-01 (geletterdheid), 2025-10-01 (strategiegids) of 2026-06-11 (de rest).
  - `updatedDate` is overal 2026-09-21, de positioneringsronde.
- **Structured data:** automatisch Article-schema (zie CLAUDE.md), en de FAQ uit de frontmatter.
- **Opmaak in de body:**
  - losse HTML-blokken met klassen uit de oude stijl (`solid-block bg-brand-blue`, `table-block`), dus niet in de huisstijl;
  - links in de body wijzen naar oude URL's (`/nl/diensten/...`, `/nl/resources/...`, ankers als `#ai-readiness-scan`).
- **Afsluiting:** een kop "Hulp nodig?" of "Waar te beginnen" met een harde link naar consultancy of de startsprint.
- **Overzicht:** `/nl/resources` (216 vertoningen, positie 18) is een kaartenlijst.

## 2. Wat moet er staan

**Voor wie en met welke vraag.** Een lezer die iets wil begrijpen en nog geen leverancier zoekt.
Hij komt via Google of een AI-zoekmachine met een concrete vraag ("moet ik aan de AI Act
voldoen?", "hoe stel ik een AI-beleid op?"). Hij moet in de eerste alinea het antwoord krijgen.
Daarna moet hij kunnen zien dat AI Heroes dit in de praktijk doet.

**Opbouw (vaste blokken, in deze volgorde)**

1. **Kop.**
   - Eén vraag of belofte in de taal van de lezer.
   - Een kicker met de groep: Compliance, Training of Gids.
   - Daaronder de auteur met kleine foto en naam, plus de publicatie- en bijwerkdatum
     ("Bijgewerkt 9 oktober 2026"). De bijwerkdatum is zichtbaar op elk artikel (besluit §16);
     op landings staat hij alleen in de structured data.
   - Geen hero-foto: de kop zelf is het beeld, als een vlak in de huisstijl.
2. **Kernantwoord.**
   - Twee tot drie zinnen die de vraag volledig beantwoorden, visueel apart (crème vlak, blauwe tekst, zoals het standaardblok op de homepage).
   - Dit is het blok dat AI-zoekmachines citeren, dus het moet zonder context kloppen.
3. **Inhoud.**
   - Leesbreedte (max-w-3xl binnen de headercontainer).
   - Tussenkoppen als vragen, korte alinea's en hooguit één tabel of genummerde lijst per sectie.
   - Huisstijlblokken voor tabellen, tijdlijnen en checklists; de losse HTML met oude klassen gaat eruit.
4. **"Wat AI Heroes hier doet".**
   - Eén korte alinea met de feitelijke koppeling naar ons werk: bijvoorbeeld "bij elke bouw classificeren we het systeem onder de AI Act".
   - Hooguit één regel bewijs.
   - Dit blok is geen advertentie.
5. **FAQ.** 4 tot 6 vragen, als uitklapbare lijst.
6. **Auteur.**
   - Foto (de huidige portretten in grijstinten zoals op de homepage), naam, rol, twee zinnen bio, een link naar het team en naar LinkedIn.
   - De bio's schrijft Claude; elke founder keurt zijn eigen bio eenmalig (besluit §5).
   - Auteur per onderwerp (besluit §5):
     - Jan Brusse: training en AI-geletterdheid (ook K2);
     - David Homan: software en compliance (K1, K3 t/m K7);
     - Frans Hoorn: strategie, dus gidsen, listicles, kosten en plaats (B1, B2, B3).
7. **Zachte CTA naar de pillar.**
   - Eén regel met een link naar de pillar van de groep (P9 Compliance en security, P10 Training of P7 Startsprint). Een artikel mag een concrete dienst noemen waar dat besloten is (K1: de AI Act-check; K4: ISO 42001-begeleiding).
   - Geen contactformulier; dat staat op de pillar. Eén uitzondering: het downloadformulier voor het AI-beleidssjabloon op K3 (e-mailadres in ruil voor het sjabloon, besluit §11).
   - Geen nieuwsbrief-aanmelding: er is geen nieuwsbrief (besluit §11).
8. **Gerelateerd.** Twee of drie artikelen uit dezelfde groep, plus de pillar.

**Listicle-variant (B1)**
- Dezelfde kop, kernantwoord, FAQ en auteur.
- De inhoud is een genummerde lijst met per item een vast format: naam, plaats, waar sterk in, voor wie logisch.
- Daaronder een vergelijkingstabel en een keuzehulp per situatie.
- Een verantwoording bovenaan: hoe de lijst is gemaakt, en dat AI Heroes erin staat.

**Gids-variant (B2)**
- Langere inhoud met een inhoudsopgave bovenaan.
- Stappen genummerd, elk met een "zo weet je dat je klaar bent".

**Frontmatter (nieuw schema)**
- `group` (compliance, training, gids)
- `author` (jan, frans, david: verwijst naar het team, niet vrije tekst)
- `publishDate`, `updatedDate`
- `summary`: het kernantwoord, ook gebruikt als meta description-basis
- `faq`
- `related` (slugs)
- `pillar` (P9, P10, P7 of P8)
- `variant` (artikel, listicle, gids)
- `alternateSlug` voor EN

`accentColor` vervalt: de kleur volgt uit `group`.

**Structured data**
- `Article`, met `author` als `Person` (naam, jobTitle, url naar het team, sameAs naar LinkedIn), plus `datePublished`, `dateModified` en `publisher` (de organisatie).
- `FAQPage` uit de FAQ.
- `BreadcrumbList`: Home, Kennis, groep, artikel.
- Listicle: `ItemList` met de items.

**Kennis-overzicht (P17)**
- Groepeert per groep, met de pillar bovenaan elke groep.
- Sortering op `updatedDate`.

**Regels voor elk artikel**
- Datum zichtbaar (publicatie en bijwerking).
- Na een inhoudelijke herziening volstaat het akkoord van Frans; de auteur keurt alleen de eerste publicatie (besluit §5).
- Artikelen met wettelijke data (K1, K2, K7, en T2 als landing) worden elk kwartaal door Claude gecheckt en door David gekeurd (besluit §11).
- Wettelijke data alleen na verificatie, met een bronlink naar EUR-Lex of de toezichthouder.
- Geen cijfers zonder bron.
- Interne links alleen naar nieuwe URL's.

**Feiten om te verifiëren**
- Dat de LinkedIn-profielen van de drie founders bestaan en publiek zijn, voor `sameAs`.

**Besluiten**
- Foto en bio van twee zinnen bij elk artikel: Claude schrijft, founders keuren eenmalig (§5).
- Na een herziening volstaat Frans' akkoord (§5).
- Geen nieuwsbrief-aanmelding; de nieuwsbrief bestaat niet (§11).
- Bijwerkdatum zichtbaar op artikelen, op landings alleen in de structured data (§16).
- LinkedIn per founder, ook als `sameAs` (§13).
- Auteursverdeling: software en compliance David, training Jan, strategie Frans (§5).

**Wacht op**
- Eenmalig akkoord van elke founder op zijn bio (bij de bouw van de template, stap 6 van de volgorde in `relaunch-2026.md`).

# L0 De landing-template

| Categorie | Geldt voor | Apart van |
|---|---|---|
| SEO-landing (template) | L1 t/m L16 (groep 1) en T1, T2, T5 (groep 3, training; T3 en T4 vervallen, besluit §6) | de blog-template (B0): andere zoekintentie, andere opbouw |

## 1. Wat stond er

- Er is geen landing-template. De oude dienst- en landerpagina's (`ai-consultancy-groningen`,
  `ai-bureau-nederland`, `diensten/*`) gebruiken allemaal `SubpageLayout.astro`: hero met badge,
  intro, kaartenraster, stats, cases, FAQ, `StandardBand` en `PageContactForm`.
- Structured data per pagina is los gebouwd: `Service` + `FAQPage` op de dienstpagina's,
  `ProfessionalService` + `BreadcrumbList` + `FAQPage` op de Groningen-lander, alleen
  `BreadcrumbList` op de Nederland-lander.
- Geen auteur, geen publicatie- of bijwerkdatum op landings.
- Zoekdata (zie `00-opzet.md`): veel vertoningen op landingsonderwerpen, bijna geen klikken.
  Er komen vragen in gespreksvorm binnen ("beste bureau voor ai-automatisering in nederland?",
  positie 3,6), het soort vraag waar AI-zoekmachines antwoorden op samenstellen.

## 2. Wat moet er staan

### Wat een landing is

Een landing beantwoordt **één vraag waarmee een koper zoekt**. De bezoeker komt met een ding
("onze klantenservice schaalt niet", "we zijn ons pakket zat"), niet met een thema. De landing
neemt die vraag serieus, laat zien dat we dit bouwen, en brengt de bezoeker naar de startsprint.
Het is een verkooppagina in de huisstijl van de homepage, geen artikel.

### De vier toetsen (bovenaan elk landingsplan, niet op de pagina)

1. **Entry:** nieuw bouwen, vervangen of eigen beheer. Bepaalt de kleur (rood, blauw, donker),
   de pillar waaronder de landing hangt en de contactchip die voorgeselecteerd staat.
2. **Bewijs:** een case van het huidige team; anders een eerdere case; anders de werkwijze of
   ons eigen werk. Nooit een verzonnen voorbeeld.
3. **Startsprint:** wat de zes dagen voor deze vraag concreet opleveren (prototype, bouwplan,
   hostingontwerp, migratieplan), altijd met de business case op één A4. Uitzondering: L7
   (extra developers) heeft een kennismaking of proefweek als voordeur (besluit §10).
4. **Zoekvraag:** de zoektermen uit Search Console. Laatste filter, nooit het startpunt.

### Vaste blokken, in deze volgorde

| # | Blok | Doel | Vorm in de huisstijl |
|---|---|---|---|
| 1 | **Cover: de vraag van de koper** | De bezoeker herkent zijn vraag in twee seconden | Kleurvlak in de entry-kleur met de vraag als kop (in zijn woorden, één punch-woord), één zin wat we bouwen, knop "Plan een startsprint"; foto rechts (duotoon bij mensen) |
| 2 | **Wat we bouwen** | Concreet maken wat er op de dag van oplevering draait | 3 tot 5 dingen die het systeem doet, in werkwoorden; geen techniekjargon; waar het past "met AI waar het waarde heeft" |
| 3 | **Hoe het gaat: de startsprint** | Het risico van de eerste stap wegnemen | De zes dagen kort, wat er na zes dagen ligt voor *deze* vraag, vast bedrag vanaf €8.000 (gelijk voor alle entries), start binnen twee weken na het eerste gesprek; daarna bouwen in sprints vanaf €15.000 (besluit §1) |
| 4 | **Bewijs** | Laten zien dat we het gedaan hebben | Eén case met cijfers (tellers zoals op de homepage) en link naar de case-pagina; ontbreekt een case, dan de werkwijze als bewijs en ons eigen werk |
| 5 | **Bij elke bouw inbegrepen** | De standaard, kort | De vier regels van de homepage (business case vooraf, compliance vanaf de tekentafel, je mensen kunnen ermee werken, niet vast aan één AI-leverancier) met IconPark-iconen; per landing mag één regel een zin extra krijgen die bij deze vraag hoort |
| 6 | **FAQ** | De vragen die vóór een gesprek opkomen; voer voor AI-zoekmachines | 4 tot 6 vragen, antwoord in 2 tot 4 zinnen, het eerste woord beantwoordt de vraag ("Ja.", "Vanaf €8.000.") |
| 7 | **Startsprint-CTA en contact** | De volgende stap | Het contactblok van de homepage (mensen met foto, formulier naar `/api/contact`), met de entry-chip voorgeselecteerd. Alleen de startsprint-knop en het formulier; geen directe mailadressen of telefoonnummers per founder (besluit §5). Op trainingslandings staat de chip "Training" voorgeselecteerd (besluit §6) |

### Optionele blokken (alleen als de landing ze nodig heeft)

- **Voor wie het is, en voor wie niet:** twee korte kolommen; helpt bij landings die ook
  verkeerde bezoekers trekken (bijvoorbeeld L7 extra developers, L16 Nederland).
- **Vergelijking:** een kleine tabel (bijvoorbeeld abonnement tegen eigen software in L9,
  Europese opties in L13). Alleen als de vergelijking de beslissing echt helpt.
- **Plaats:** het Groningen-blok van de homepage (alleen L15, en kort op L16).
- **Koppelingen:** logos of namen van systemen waar we op aansluiten (L6).
- **Kosten in één oogopslag:** de prijsladder (L14, kort op andere landings in de FAQ).

### Wat een landing niet heeft

- Geen menu van diensten, geen "drie manieren om binnen te komen"-raster: de landing kiest één
  entry. Andere ingangen alleen als "Ook interessant" onderaan, maximaal drie links.
- Geen inleiding over "AI verandert alles". De eerste zin gaat over de vraag van de koper.
- Geen claims zonder bron. "50+ organisaties" en "1.000+ professionals getraind" mogen, altijd
  met "sinds 2019" (prestatie van het merk; besluit §2). "70% van AI-projecten faalt" komt
  nergens terug.
- Geen garantie "analyse gratis als er niets uit komt": die vervalt (besluit §1).

### Links (hub-and-spoke)

- Elke landing linkt in blok 2 of 3 naar zijn **pillar** (P3, P4, P5, P8, P10 of P11) en in
  blok 3 naar de **startsprint** (P7).
- De pillar linkt terug naar al zijn landings (in een blok "Waar klanten mee binnenkomen").
- Landings onder dezelfde pillar linken naar elkaar in "Ook interessant" (max. 3).
- Bewijsblok linkt naar de case (`/nl/cases/...`); de case linkt terug naar de landing.
- Compliance-artikelen (K1 t/m K7) worden gelinkt waar de FAQ over AI Act of privacy gaat.

### Auteur en datums

- Elke landing heeft een **verantwoordelijke founder**, zichtbaar onderaan met foto, naam, rol
  en een bio van twee zinnen. Contact loopt via de startsprint-knop en het formulier, niet via
  een direct adres (besluit §5). In de structured data als `author` (Person, met LinkedIn als
  `sameAs`, besluit §13).
  - Software en compliance (L1 t/m L13): David Homan.
  - Strategie: kosten, plaats en business case (L14, L15, L16): Frans Hoorn.
  - Training (T1, T2, T5): Jan Brusse.
- **Bio's:** Claude schrijft per founder een bio van twee zinnen; de founders keuren eenmalig
  (besluit §5).
- **Bijgewerkt-datum** alleen in de structured data (`dateModified`), niet zichtbaar op de
  pagina; een landing is evergreen (besluit §16). Geen publicatiedatum op de pagina.

### SEO en GEO

- **Titel** (`seoTitle`): de vraag of het ding in de woorden van de koper, dan het verschil
  ("… laten bouwen | prototype in zes dagen"). Maximaal ±60 tekens.
- **Meta description:** wat we bouwen, de startsprint met prijs, één bewijsfeit. ±150 tekens.
- **H1** is de vraag van de koper, niet het zoekwoord letterlijk; het zoekwoord staat in de
  eerste zin.
- **Structured data:** `Service` (naam, `serviceType`, `provider` = organisatie-@id,
  `areaServed`, `offers` met `lowPrice` 8000 EUR), `FAQPage` (de FAQ van blok 6),
  `BreadcrumbList` (Home > pillar > landing). L15 krijgt daarnaast `ProfessionalService` met
  adres en `areaServed` Groningen en Noord-Nederland.
- **GEO:** elke landing heeft één zin die een AI-zoekmachine letterlijk kan overnemen als
  antwoord ("AI Heroes uit Groningen bouwt … De eerste stap is een startsprint van zes dagen,
  vanaf €8.000."). FAQ-antwoorden zijn op zichzelf leesbaar. Feiten (prijzen, doorlooptijden)
  zijn overal dezelfde, zodat bronnen elkaar niet tegenspreken. De landing komt in
  `public/llms.txt`.
- **Taal:** NL eerst; de EN-versie volgt in het EN-blok met eigen zoektermen.

### Besluiten

1. "50+ organisaties" en "1.000+ professionals getraind" mogen, met "sinds 2019" (§2).
2. Contact onderaan: alleen de startsprint-knop en het formulier, geen directe adressen (§5).
3. "Bijgewerkt" alleen in de structured data op landings, zichtbaar op artikelen (§16).
4. Startsprint: zes dagen, vanaf €8.000 voor alle entries, start binnen twee weken (§1).
5. Garantie "analyse gratis" vervalt (§1).
6. Auteurs: software en compliance David, strategie Frans, training Jan; bio's door Claude, founders keuren (§5).
7. T3 en T4 vervallen als landing; de template geldt voor T1, T2 en T5 (§6).

### Wacht op

- Akkoord van de founders op hun bio (eenmalig, fase 1).

# Plan: zijlijnen eruit, gekleurde vlakken erin

*29 september 2026*

## Waarom

Een gekleurde lijn aan de zijkant van een kaart of kader (`border-l-4 border-brand-red`) is een bekend kenmerk van sites die door AI zijn gegenereerd, en bezoekers letten erop. De accentkleuren blijven; de vorm verandert. Voorkeur van Frans: **gekleurde vlakken met witte tekst**.

## Wat er staat

Ongeveer 145 zijlijnen in circa 70 bestanden, bijna allemaal uit zeven patronen:

| # | Patroon | Aantal | Waar |
|---|---|---|---|
| A | `Callout.astro` (licht, donker, rood) | 22 plekken | dienstenpagina's, startsprint, aanpak |
| B | Donker kader met lijn (`dark-box-content bg-brand-dark border-l-4`, `DarkBox.tsx`, `bg-red-950`) | 48 inline + 8 DarkBox | afsluitende blokken in cases, artikelen, landers |
| C | Grijs infokader met lijn (`bg-stone-50 p-6 border-l-4`) | 60 | cases, artikelen (ook om tabellen heen), juridisch |
| D | Citaat met lijn (`border-l-4 pl-6`) | 6 | cases, over ons |
| E | Dienstenkaarten homepage (`Services.tsx`, `border-l-[5px]`) | 3 | homepage |
| F | Uitgelicht menu-item "De startsprint" (`Navbar.tsx`, `border-l-2`) | 1 | navigatie |
| G | `.example-callout` in `global.css` | 1 regel | artikelen |

Verwant, geen zijlijn maar dezelfde familie: `CardGrid.astro` zet een gekleurde balk bovenop elke kaart (54 plekken).

## Wat het wordt

| # | Nieuw |
|---|---|
| A | Callout wordt een effen vlak in de accentkleur (rood, blauw of donker) met witte tekst. De variant `light` vervalt. |
| B | Donker vlak zonder lijn. Het afsluitende blok onderaan een pagina ("Wil je ook zoiets bouwen?") wordt effen blauw, gelijk aan de startsprint-knop. |
| C | Twee soorten. **Kernpunt of samenvatting** wordt een effen vlak met witte tekst. **Tabel** krijgt geen kader meer: een witte tabel met een donkere kopregel en witte koptekst. |
| D | Citaat zonder lijn: groter, serif, met een groot aanhalingsteken in de accentkleur (zoals `PullQuote.astro`). |
| E | Effen kaarten in rood, blauw en donker met witte tekst, zelfde taal als "Bij elke bouw inbegrepen". |
| F | Effen blauw vlak met witte tekst, passend bij de blauwe knop ernaast. |
| G | Vervalt; valt onder C. |
| CardGrid | Balk eraf. Keuze: witte kaart met alleen een gekleurd bovenschrift, of effen vlak. Voorstel: wit houden, want 54 effen vlakken op één pagina is te veel. |

## Beslissing vooraf: rood en leesbaarheid

Witte tekst op het merkrood (#D9534F) haalt een contrast van ongeveer 4,0 : 1. Dat is genoeg voor koppen en grote tekst, niet voor lopende tekst (norm 4,5 : 1). Blauw (4,9 : 1) en donker zijn ruim voldoende. Twee opties:

1. **Rood alleen met grote tekst.** Rode vlakken dragen een kop en korte tekst op 18 px of groter; lange teksten komen in blauw of donker. Geen nieuwe kleur.
2. **Een dieper rood voor tekstvlakken** (bijvoorbeeld #B83A36, contrast ruim 5 : 1). Leest overal goed, maar is een vijfde kleur naast het palet van vier.

Voorstel: optie 1. Het palet blijft zoals het is.

## Volgorde

1. **Gedeelde onderdelen** (A, B `DarkBox`, E, F, G, CardGrid). Dit dekt de homepage, de navigatie en alle dienstenpagina's in één keer.
2. **Inline blokken** (B, C, D) per patroon vervangen door de nieuwe gedeelde onderdelen, niet door nieuwe losse classes. In MDX via een klein `Highlight`-component, zodat het niet opnieuw losloopt.
3. **Controle per pagina.** Een script maakt een schermafbeelding van elke pagina uit de sitemap, NL en EN, op desktop en mobiel. Die lopen we samen door.
4. **Bewaking.** Een regel in `npm run check` die faalt op `border-l-[2-9]` en `border-left:` in pagina's en content, zodat er geen nieuwe zijlijnen bijkomen.

Stap 1 kan direct na akkoord op deze keuzes. Stap 2 is het meeste werk (ongeveer 115 plekken) maar grotendeels mechanisch.

## Stand van zaken (29 september 2026)

- **Stap 1 klaar.** Gedeelde onderdelen omgezet (dienstenkaarten, Callout, DarkBox, menu-item, CardGrid, `.example-callout`).
- **Stap 2 klaar.** Alle losse zijlijnen vervangen. Nieuwe hulpklassen in `src/styles/global.css`: `solid-block` (met een `bg-brand-…`; maakt alle tekst erin wit) en `table-block` (witte tabel, donkere kopregel). Vertaling per patroon:
  - grijs kader met blauwe lijn → blauw vlak; met rode lijn → donker vlak (lange tekst, dus geen rood); kader om een tabel → `table-block`;
  - donkere kaders en cijfertegels → donker zonder lijn;
  - afsluitend "Zoiets laten bouwen?"-blok op case- en artikelpagina's → blauw vlak met witte knop;
  - rode "De verplichting"/"Waarom nu"-blokken → merkrood met tekst op 18 px;
  - persmap → donker, blauw en rood vlak; vacaturekaarten → witte kaart met dunne rand die op hover de accentkleur krijgt;
  - teamleden en waarden op Over ons → lijn weg; kaarten op Over ons → donker vlak;
  - Hanze-oefening → effen vlak in de kleur van het AI-level (pastel, dus donkere tekst).
- **Stap 3 open.** Schermafbeeldingen van elke pagina voor een gezamenlijke ronde.
- **Stap 4 klaar.** `scripts/check-side-stripes.mjs` draait in `npm run check` (en dus vóór elke deploy) en faalt op `border-l-2…8`, `border-left: ≥2px` en `borderLeft`. Een bewuste uitzondering krijgt `side-stripe-ok` op dezelfde regel.

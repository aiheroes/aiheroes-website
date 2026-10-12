# H0 De hulp-template

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Template | divers (H1 tot en met H5) | n.v.t. | n.v.t. | Bereikbaar via de footer of vanaf een overzichtspagina |

Voor pagina's die informatie geven en niets verkopen: juridische teksten, transparantie, vacaturedetails en de 404.

## 1. Wat stond er

- De juridische pagina's en de AI-assistentpagina gebruiken `SubpageLayout.astro`, met:
  - een hero met titel en ondertitel ("Laatst bijgewerkt: mei 2026");
  - een kader "In het kort";
  - een h2/h3-structuur.
  Het contactformulier staat aan, behalve op de AI-assistentpagina.
- Vacaturedetails gebruiken dezelfde layout met `ApplicationForm` en `JobPosting`-schema.
- De 404 is een eigen pagina met bare-path-script.

## 2. Wat moet er staan (opbouw van de mal)

**Vaste blokken:**

1. **Kop:** paginatitel, één zin waar de pagina over gaat, de datum "Laatst bijgewerkt" (bij juridische teksten) en een broodkruimel. Rustig: geen cover-foto, wel de huisstijl (Inter Tight-kop, de vier kleuren, het blueprint-raster licht).
2. **In het kort:** de kern in drie à vijf punten (optioneel per pagina, standaard aan voor juridische en transparantieteksten). Een vlak in crème of lichtblauw, zonder zijstreep.
3. **Inhoud:** een leeskolom (max-w-3xl binnen de standaard container, conform de breedteregel), met h2/h3, lijsten en tabellen. Een inhoudsopgave met ankers bij meer dan vijf koppen.
4. **Vragen en contact:** één regel met het juiste kanaal (mail, of de chat met "Praat met een mens"). Geen startsprint-knop als hoofdactie; de navigatie en footer bieden die al.

**Optionele blokken:**

- formulier (sollicitatie bij H4);
- gerelateerde links (privacy, voorwaarden, AI-assistent onderling).

**Velden:**

- `title`, `intro`, `updated` (datum), `noindex` (boolean), `summary` (lijst), `showToc` (boolean), `contact` (kanaal), `related` (lijst).

**Regels:**

- Juridische teksten worden niet door Claude herschreven. Inhoudelijke wijzigingen alleen na akkoord van Frans of een jurist. De relaunch verandert de vorm en de feitelijke verwijzingen (URL's, contactgegevens, diensten).
- `noindex` waar dat nu al zo is (`NOINDEX_PATHS` in `src/data/seo.ts`).
- Elke hulppagina staat in de footer of is gelinkt vanuit de plek waar hij nodig is (chat → H3, vacatures → H4).
- De hulppagina's krijgen de volledige navigatie en footer, ook de 404 (zie 01-besluiten §15).

**Besluiten**
1. Geen pdf-versie van de voorwaarden; daarom geen downloadblok in de mal (zie 01-besluiten §16).
2. Volledige navigatie en footer op alle hulppagina's, ook de 404 (zie 01-besluiten §15).
3. Inhoudelijke akkoorden: Frans keurt privacy en de AI-assistentpagina; de voorwaarden gaan langs een jurist (zie 01-besluiten §15).

**Wacht op**
- Niets voor de mal zelf.

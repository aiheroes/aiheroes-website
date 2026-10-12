# A0 De campagne-template

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Template | `/nl/<campagne>` (plat) | n.v.t. | n.v.t. | Hangt onder P14 (pers) en P11 |

Voor media-optredens, events en andere momenten waarbij mensen via een externe bron (tv, podcast, krant, beurs, presentatie) op de site komen. De eerste toepassing is De AI Storm (A1).

## 1. Wat stond er

- Er is geen template. De enige campagnepagina is `src/components/AIStormFeature.astro`, met:
  - een donkere hero, kop en lead;
  - het video-embed (youtube-nocookie);
  - een "brug"-sectie met twee alinea's, een pull quote en de drie entries;
  - een statistiek (50+);
  - de logo's van de omroepen;
  - het contactformulier;
  - `VideoObject`-schema in de pagina.
- Uit de inventaris valt het patroon "zoals gezien op …" op: een bezoeker komt binnen met een herinnering, wil het fragment terugzien, en moet daarna in één stap bij het aanbod komen.

## 2. Wat moet er staan (opbouw van de mal)

**Vaste blokken**, in volgorde:

1. **Herkenning (cover):**
   - kop die het optreden noemt, in de woorden van het medium;
   - één zin wat AI Heroes daar liet zien;
   - het logo of de naam van het medium.
   De bezoeker moet in één blik zien dat hij goed is.
2. **Het fragment:** video-embed (privacy-vriendelijk, zonder cookies tot afspelen), audio of artikel-link. Met een poster in de huisstijl. Embeds van fragmenten van de omroep mogen (zie 01-besluiten §14).
3. **Wat je zag:** twee à drie zinnen over wat er in het fragment gebeurde, met wie (founder of klant) en welk resultaat.
4. **Van het scherm naar jouw organisatie:** de brug naar het aanbod, via de drie entries (homepage-kaarten, zelfde labels en kleuren). Geen nieuwe claims; alleen wat de homepage al belooft.
5. **Eén bewijsblok:** één case (de case-mal in compacte vorm) of één cijfer, gekozen omdat het past bij het onderwerp van het optreden.
6. **Contact:** het homepage-contactblok, met de startsprint als hoofdactie.

**Optionele blokken:**

- de logo's van de partners of omroepen;
- een quote uit het fragment (alleen letterlijk en met toestemming);
- een link naar de perspagina (P14);
- een datumstrip (uitzenddatum, kanaal).

**Velden** (per campagne in één databestand of frontmatter):

- `slug`, `title`, `seoTitle`, `description`;
- `medium` (naam, logo's, link);
- `date` (eerste uitzending of publicatie);
- `media` (type video/audio/artikel, id of url, poster);
- `whatYouSaw` (tekst);
- `people` (founder(s), klant);
- `proof` (case-id of cijfer);
- `quote` (optioneel);
- `accent` (rood, blauw of donker; standaard donker).

**Regels:**

- **Levensduur:** een campagnepagina blijft staan zolang het fragment online is. Daarna komt er een 301 naar P14, en de vermelding blijft op de perspagina.
- **SEO:**
  - `VideoObject` (of `PodcastEpisode`/`NewsArticle`) en `Organization`;
  - de titel noemt het medium plus AI Heroes;
  - indexeerbaar, want mensen zoeken op de programmanaam.
- **Menu:** standaard geen menu-item: bereikbaar via P14, de footer-kolom "Bedrijf" en de homepage zolang het actueel is. Uitzondering per campagne mag; De AI Storm blijft in het menu (zie 01-besluiten §14).
- **De mal blijft simpel:** geen "Ook gezien in"-rij en geen overzicht van optredens op P14; er worden niet meer optredens verwacht (zie 01-besluiten §14).

**Besluiten**
1. Geen extra optredens verwacht: de mal blijft simpel, zonder "Ook gezien in" (zie 01-besluiten §14).
2. Embeds van omroepfragmenten mogen (zie 01-besluiten §14).

**Wacht op**
- Niets.

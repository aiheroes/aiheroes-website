# P17 Kennis (overzicht artikelen)

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Pillar (overzicht) | `/nl/kennis` (EN `/en/insights`) | `/nl/resources` (301) | NL 216 vertoningen, positie 18; EN 10 / 7,2 | Centrum van alle kennisartikelen (K1 tot en met K7, B1, B2, B3); verwijst naar de landings (L, T) waar dat helpt |

## 1. Wat stond er

- Bestand: `src/pages/nl/resources/index.astro`, titel "Resources", ondertitel "Inzichten, praktische gidsen en AI-kennis voor organisaties in heel Nederland".
- Vaste volgorde:
  1. wat-kost-ai-implementatie
  2. eu-ai-act-compliance
  3. ai-geletterdheid
  4. soevereine-ai
  5. europese-chatgpt-alternatieven
  6. ai-implementatie-mkb
  7. ai-beleid-opstellen
  8. ai-strategie-gids
  9. top-10-ai-consultancy-nederland
- Kaarten met datum (maand/jaar), titel en omschrijving.
- Datums: 14 van de 18 artikelbestanden zijn bijgewerkt op 2026-09-21; vier hebben als jongste datum 2025 (ai-strategie-gids en top-10, NL en EN).
- Na de relaunch zijn deze artikelen verdeeld:
  - drie worden landings in groep 1 (L12, L13, L14);
  - drie worden compliance-artikelen (K1, K2, K3);
  - twee gaan op in één gids (B2);
  - één wordt een listicle (B1).
- Klopt niet meer: de naam "Resources" en het pad `/resources` horen bij de oude site; "Kennis" volgt het nieuwe menu ("Artikelen en gidsen").

## 2. Wat moet er staan

- **Voor wie:**
  - een lezer die via een artikel binnenkomt en verder wil lezen;
  - een beslisser die een onderwerp wil begrijpen (AI Act, kosten, eigen servers) voor hij een gesprek aangaat.
- **Met welke vraag komt de bezoeker binnen:** "Wat weten zij over mijn onderwerp, en waar begin ik?"
- **Wat moet hij weten om de volgende stap te zetten:**
  1. **Cover:** kop "Kennis" (ook het menulabel; zie 01-besluiten §11), met één zin: gidsen van mensen die zelf bouwen.
  2. **Begin hier:** de gids "Waar begin je met AI in je organisatie" (B2) uitgelicht.
  3. **Per onderwerp, als groepen met elk een korte intro en een link naar de pillar:**
     - **Compliance en security:** K1 tot en met K7 (auteur David Homan), link naar P9 en de AI Act-check; K3 met het downloadbare AI-beleidsjabloon.
     - **Kosten en aanpak:** B2, link naar L14 ("Wat kost AI-implementatie?"), P8 en P7.
     - **Eigen beheer en Europa:** B3 "Europese alternatieven voor ChatGPT (2026)", link naar L12 en L13, en naar P5.
     - **Training:** link naar P10 en de T-landings.
     - **Overzichten:** B1.
     Landings staan hier alleen als link "verder lezen", niet als artikelkaart.
  4. **Nieuwste artikelen:** een lijst met datum (publicatie en bijgewerkt, zichtbaar op artikelen), auteur (founder) en leestijd. Geen nieuwsbrief-aanmelding: er is geen nieuwsbrief (zie 01-besluiten §11).
  5. **Contact:** een kort blok met "Liever direct praten? Plan een startsprint" en de kennismaking met de founder die over het onderwerp gaat.
- **Volgende stap:** een artikel lezen; vanuit elk artikel naar de bijbehorende pillar of startsprint.
- **Bewijs:** de auteurs (founders met foto) en de bijwerkdatums. Op deze pagina geen cases.
- **Links in:** menu "Over ons" ("Kennis"), footer ("Kennis"), elk artikel (broodkruimel). **Links uit:** alle K- en B-artikelen, P9, P10, P5, L12 tot en met L14.
- **SEO/GEO:**
  - Zoekintentie: navigatie.
  - Titelvoorstel: "Kennis: gidsen over AI bouwen, kosten en de AI Act".
  - Meta-richting: de drie hoofdonderwerpen en de auteurs.
  - Schema: `CollectionPage` met `ItemList`. De oude `/nl/resources/*`-URL's gaan per artikel via 301 naar de nieuwe plek (zie `00-opzet.md`).
**Besluiten**
1. Kop en menulabel: "Kennis" (zie 01-besluiten §11).
2. Geen nieuwsbrief-aanmelding; de nieuwsbrief bestaat niet (zie 01-besluiten §11).
3. Nieuw artikel B3 "Europese alternatieven voor ChatGPT (2026)" hoort in de groep eigen beheer (zie 01-besluiten §10).
4. Compliance-artikelen hebben David Homan als auteur (zie 01-besluiten §5).

**Wacht op**
- Niets.

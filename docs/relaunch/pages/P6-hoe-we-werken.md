# P6 Hoe we werken

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Pillar | `/nl/hoe-we-werken` (EN `/en/how-we-work`) | `/nl/over-ons/aanpak` | 303 vertoningen / 2 klikken / pos. 7,2 | Hangt onder home (nav "Hoe we werken"); centrum van P7, P8, P9, P10 |

## 1. Wat stond er

**Huidige pagina (`src/pages/nl/over-ons/aanpak.astro`):**
- **Ondertitel:** "Van ambitie tot implementatie. Eerst een week, dan een besluit, dan een bouw die bij de oplevering werkt."
- **Probleem:** de AI-markt is gefragmenteerd (adviesbureaus schrijven rapporten, trainingsbureaus trainen en vertrekken, techbedrijven bouwen tools die niemand gebruikt).
- **Het traject in zes stappen:**
  1. startsprint (week 1);
  2. business case en scoping (vóór de bouw; "sluit de business case niet, dan bouwen we niet");
  3. bouwen in sprints (week 2 tot 12, demo per sprint, zelfstandig of met eigen developers);
  4. compliance vanaf de tekentafel;
  5. training van je team (artikel 4);
  6. niet vast aan één AI-leverancier (wij blijven beheren en doorontwikkelen).
- **StandardBand**, en een blok `#compliance` met vier onderdelen:
  - classificatie (minimaal, beperkt, hoog risico);
  - logging en toezicht (bij een assistent doorschakeling, bij een werkstroom een controlestap);
  - hosting;
  - geletterdheid.
- **Principes:** werkend boven af, eerlijkheid boven verkoop, klein beginnen en dan opschalen, zelf doen wat we adviseren.
- **Kosten:**
  - startsprint vanaf €8.000;
  - bouw vanaf €15.000;
  - losse trainingen vanaf €2.500 per dagdeel;
  - lagere tarieven voor onderwijs en non-profit.
- **Anker:** de nav linkt naar `#standaard` (bestaat) en `#compliance`.

**Zoekdata:** weinig, maar met een goede positie (7,2). Het gaat om navigatieverkeer.

**Niet meer kloppend:**
- De URL zit onder "over ons" terwijl de pagina in de nav onder "Hoe we werken" valt.
- Het compliance-blok krijgt een eigen pagina (P9).

## 2. Wat moet er staan

- **Voor wie:** de bezoeker die wil weten hoe een samenwerking verloopt voordat hij contact opneemt. Vaak de tweede beslisser (financieel directeur, inkoop, IT) die de eerste naar de site stuurt.
- **Met welke vraag:** "Hoe gaat dat in de praktijk: wat gebeurt er wanneer, wat kost het, en wat krijg ik?"
- **Wat moet hij weten, in volgorde:**
  1. **Opening:** de slogan "Van ambitie tot implementatie" met één zin: eerst zes dagen, dan een besluit, dan een bouw. Kop-voorstel: "Eerst zes dagen. Dan een besluit. Dan een bouw."
  2. **Het traject als tijdlijn:**
     - startsprint van zes dagen, binnen twee weken na het eerste gesprek (link P7);
     - besluit op basis van de business case (link P8);
     - bouwen in sprints van twee weken met een demo per sprint (week 2 tot 12);
     - overstap met getraind team;
     - vaste stap: **wij blijven beheren en doorontwikkelen**, gedocumenteerd en niet vast aan één AI-leverancier (zie 01-besluiten §9). Uitleg voor de klant: de software blijft bij ons in beheer, alles is gedocumenteerd, en je kunt van AI-model wisselen zonder opnieuw te bouwen.

     Per stap: wat gebeurt er, wat heb jij nodig, wat krijg je. Doel: de bezoeker ziet het hele traject in één beeld.
  3. **Bij elke bouw inbegrepen:** de vier punten van de standaard, hier met de uitleg die op de homepage ontbreekt. Elk punt krijgt een link:
     - business case naar P8;
     - compliance naar P9 ("Compliance en security");
     - je mensen kunnen ermee werken naar P10; hieronder valt ook de begeleiding bij invoering en adoptie (de oude "implementatiebegeleiding");
     - niet vast aan één leverancier, met de uitleg modelonafhankelijk en gedocumenteerd.

     Anker `#standaard` blijft bestaan, voor de bestaande links.
  4. **Wat het kost:** de prijzen die we publiceren. Startsprint vanaf €8.000 vast (zes dagen, gelijk voor alle ingangen), bouw vanaf €15.000, training vanaf €2.500 per dagdeel. Daarbij: wat jouw bouw precies kost, staat aan het eind van de startsprint op papier. Lagere tarieven voor onderwijs en non-profit staan alleen bij training (P10), niet hier.
  5. **Waar we ons aan houden:** de walk-away-regels als belofte. Als AI niet de oplossing is, zeggen we dat; sluit de business case niet, dan bouwen we niet; reactie binnen 24 uur; startsprint binnen twee weken. (De garantie "analyse gratis als er niets waardevols uit komt" vervalt; zie 01-besluiten §1.)
  6. **Wie je spreekt:** Frans (business case), David (bouw, hosting, compliance), Jan (adoptie, training), met link naar het team.
  7. **Contact:** startsprint.
- **Volgende stap:** de startsprint.
- **Niet op deze pagina:** het marktverhaal (de gefragmenteerde AI-markt) verhuist naar P11 Over ons.
- **Bewijs:**
  - Kwakkel: van vraag naar prototype in zes dagen, illustreert de tijdlijn;
  - de eigen stack: zelf doen wat we adviseren.
- **Links:**
  - In: nav "Hoe we werken", home (standaard), alle entries (standaard-blok).
  - Uit: P7, P8, P9, P10, P12, de cases.
- **SEO/GEO:**
  - Intentie: oriënterend en merk-gebonden ("hoe werkt AI Heroes", "AI-traject stappen", "AI implementatie aanpak").
  - Titelvoorstel: "Hoe we werken: van startsprint tot software die draait | AI Heroes".
  - Meta-richting: tijdlijn, prijzen, standaard.
  - HowTo-schema is hier verleidelijk, maar past niet; houd het bij FAQ of geen schema.

**Besluiten**
1. Het marktverhaal gaat naar Over ons (P11) (zie 01-besluiten §9).
2. "Wij blijven beheren en doorontwikkelen" is een vaste stap, met "gedocumenteerd, niet vast aan één AI-leverancier" (zie 01-besluiten §9).
3. Lagere tarieven voor onderwijs en non-profit alleen bij training (zie 01-besluiten §6).
4. Implementatiebegeleiding gaat op in de standaard (zie 01-besluiten §9).
5. Startsprint zes dagen, vanaf €8.000, start binnen twee weken; de gratis-analysegarantie vervalt (zie 01-besluiten §1).

**Wacht op**
- Niets.

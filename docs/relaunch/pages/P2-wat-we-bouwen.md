# P2 Wat we bouwen (overzicht)

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Pillar (overzicht) | `/nl/wat-we-bouwen` (EN `/en/what-we-build`) | `/nl/diensten` | 639 vertoningen / 4 klikken / pos. 9,7 · EN `/en/services`: 1.045 / 5 / 24 | Hangt onder home; centrum van P3, P4, P5 en via hen van de landings L1 t/m L13 |

## 1. Wat stond er

**Inhoud van de huidige pagina (`src/pages/nl/diensten/index.astro`):**
- Titel "Wat we bouwen" met als ondertitel de kernzin en de startsprint.
- "Drie manieren om binnen te komen": kaarten met de drie entries, met de beschrijvingen uit `constants.ts`.
- Een callout over de startsprint: één week, vanaf €8.000, prototype of bouwplan, business case op één A4.
- "Waar we het bewezen": Kwakkel (administratie, zes dagen), INQ22 (maatwerkwebwinkel, live op inq22.com), Strive (te duur SaaS-pakket vervangen).
- FAQ over software zonder AI, hoe we beginnen, eerst leren wat AI kan (training) en werken door heel Nederland.
- Een logo-rij: Kwakkel, INQ22, Strive, IC Commerce, UMCG, Tweede Kamer, Postcode Loterij, Envalior.
- De StandardBand.

**Zoekdata:** weinig verkeer. De pagina is vooral een navigatiepunt uit het menu ("Wat we bouwen").

**Niet meer kloppend:** de URL `diensten` hoort bij het oude menu.

## 2. Wat moet er staan

- **Voor wie:** de bezoeker die op "Wat we bouwen" klikt en nog niet weet welke ingang de zijne is.
- **Met welke vraag:** "Wat kunnen jullie voor mij bouwen, en welke ingang past bij mijn situatie?"
- **Wat moet hij weten, in volgorde:**
  1. **Opening:** de kernzin in één regel, met daaronder dat AI voor ons gereedschap is: software zonder AI telt ook. Kop-voorstel: "Wat we voor je bouwen" (gelijk aan de homepage).
  2. **De drie ingangen** als de drie kleurvlakken van de homepage, met per ingang de vraag waarmee de klant binnenkomt: "Kunnen jullie dit voor ons bouwen?", "We zijn ons pakket zat", "Kan het op onze eigen servers, binnen Europa?". De derde ingang heet "Software in eigen beheer" (eigen servers of Europese cloud). Daaronder één zin over wat je krijgt. Het doel is dat de bezoeker zichzelf herkent en doorklikt.
  3. **Concreet: wat we vaak bouwen.** Een compacte lijst van de soorten werk, gegroepeerd per ingang en elk gelinkt naar de landing:
     - nieuw bouwen: klantenservice en spraak (L1), agents en workflows (L2), administratie (L3), company wiki (L4), digital twin (L5), koppelingen (L6), extra developers (L7), maatwerk software (L8);
     - vervangen: SaaS (L9), Excel en losse tools (L10), verouderd maatwerk (L11);
     - eigen beheer: eigen servers (L12), Europees alternatief voor ChatGPT (L13).

     Doel: wie met een specifiek ding komt, vindt het hier in één oogopslag. Besloten: deze lijst staat op P2 (zie 01-besluiten §9).
  4. **De eerste stap is altijd hetzelfde.** De startsprint in drie feiten: zes dagen, vast bedrag vanaf €8.000 (gelijk voor alle ingangen), prototype of bouwplan met business case. Start binnen twee weken na het eerste gesprek. Met link naar P7.
  5. **Bewijs:** één case per ingang, uit de case-mal (entry-type filtert vanzelf): Kwakkel of INQ22 bij nieuw, Strive bij vervangen (IC Commerce telt bij beide: WooCommerce vervangen, pipelines nieuw gebouwd), eigen stack bij eigen beheer.
  6. **Bij elke bouw inbegrepen:** de vier punten van de standaard, kort, met link naar P6.
  7. **Contact:** het contactblok van de homepage.
- **Volgende stap:** de startsprint, of doorklikken naar een ingang.
- **Bewijs:** Kwakkel, INQ22, Strive, eigen stack; logo-rij alleen met organisaties van het huidige team.
- **Links:**
  - In: de entry-vlakken op home, de footer en de kruimelpaden van P3, P4, P5. Het menulabel "Wat we bouwen" opent alleen het submenu en linkt niet naar P2.
  - Uit: P3, P4, P5, L1 t/m L13, P7, P6, de cases.
- **SEO/GEO:**
  - Intentie: navigatie en oriëntatie ("AI laten bouwen", "maatwerk software en AI").
  - Titelvoorstel: "Wat we bouwen: AI-toepassingen en maatwerk software | AI Heroes".
  - Meta-richting: drie ingangen, startsprint, standaard inbegrepen.
  - Service-schema met de drie ingangen als `hasOfferCatalog`.

**Besluiten**
1. De lijst "wat we vaak bouwen" met alle landings staat op P2 (zie 01-besluiten §9).
2. Het menulabel "Wat we bouwen" linkt niet zelf naar P2; P2 is bereikbaar via home, footer en kruimelpaden (zie 01-besluiten §9).
3. Startsprint zes dagen, vanaf €8.000 voor alle ingangen (zie 01-besluiten §1).

**Wacht op**
- Niets.

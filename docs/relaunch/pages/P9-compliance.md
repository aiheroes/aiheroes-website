# P9 Compliance en security

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Pillar (nieuw) | `/nl/compliance` (EN `/en/compliance`) | Geen pagina; nu het anker `/nl/over-ons/aanpak#compliance` en het menulabel "Voldoen aan de AI Act" | Pagina bestaat niet. Thema: "ai geletterdheid" 1.006 / pos. 60; "ai-geletterdheid" 336 / 61; "eu ai act compliance" 125 / 20; "ai compliance nederland" 110 / pos. 5,9; artikel `eu-ai-act-compliance` 2.508 / pos. 12,5 | Hangt onder P6; centrum van groep 2: K1 t/m K7 (AI Act, geletterdheid, AI-beleid, ISO 42001, security, AVG, menselijk toezicht) |

## 1. Wat stond er

Compliance had geen eigen pagina. Het materiaal staat verspreid over de site.

**Standaard (`constants.ts`):** "Compliance vanaf de tekentafel: AI Act-classificatie, logging, menselijk toezicht en Europese hosting zitten in het ontwerp." "Je mensen kunnen ermee werken: ... Zo voldoe je meteen aan artikel 4 van de AI Act."

**Aanpak, blok `#compliance`:**
- classificatie (minimaal, beperkt of hoog risico);
- logging en toezicht (elke beslissing terug te vinden, een mens kan ingrijpen: bij een assistent doorschakeling, bij een werkstroom een controlestap);
- hosting (data die Europa niet uit mag, blijft in Europa);
- geletterdheid (getraind op het systeem, artikel 4 met bewijs).

**Eigen beheer (`eu-consultancy`):**
- "AI-beleid en AI Act": classificatie, logging en toezicht, een AI-beleid van twee A4;
- de callout over de CLOUD Act;
- "Nederlands toezicht op de AI Act operationeel sinds 2 augustus 2026".

**Training:**
- callout over artikel 4: van kracht sinds 2 februari 2025;
- handhaving door de Autoriteit Persoonsgegevens sinds 2 augustus 2026, met boetes tot €15 miljoen of 3% van de omzet (artikel 99 lid 4);
- de AI-geletterdheidstraining met certificaat;
- de training "Verantwoord AI-gebruik" (AVG, AI Act, data governance, concept AI-policy).

**Kennisartikelen:**
- `eu-ai-act-compliance` (stappenplan in vijf stappen: inventariseren, classificeren, geletterdheid, AI-beleid, transparantie en hoog risico; FAQ over mkb en boetes);
- `ai-geletterdheid`;
- `ai-beleid-opstellen`.

**Company profile:**
- David leidt bouw en compliance.
- Bij de ambities (§11, toekomst): AI Heroes zelf certificeren voor ISO 42001 en ISO 27001, en die standaarden in elke bouw meenemen. Dat ondersteunt overheids- en aanbestedingswerk.

**Niet meer kloppend:**
- "Voldoen aan de AI Act" dekt de lading niet meer: groep 2 omvat ook ISO 42001, security en AVG.
- De handhavingsdatum, de boetebedragen en de toewijzing van toezichthouders in de oude teksten moeten bij het schrijven opnieuw gecontroleerd worden. De regelgeving en de Nederlandse uitvoering bewegen.

## 2. Wat moet er staan

- **Voor wie:**
  - De organisatie die AI gebruikt of wil gebruiken en moet aantonen dat dat verantwoord gebeurt: directie, compliance officer, privacy officer of FG, CISO, inkoop.
  - De bouwklant die wil weten wat "compliance vanaf de tekentafel" concreet betekent.
- **Met welke vraag:** "Wat moeten we regelen voor de AI Act, en kunnen jullie zorgen dat wat we bouwen voldoet?" Of: "We gebruiken al ChatGPT en Copilot; wat moet er nu?"
- **Wat moet hij weten, in volgorde:**
  1. **Opening:** compliance zit bij ons in het ontwerp, bij elke bouw. Wie AI al gebruikt, helpen we de basis op orde te krijgen. Kop-voorstel: "Compliance vanaf de tekentafel."
  2. **Wat de regels van je vragen, in gewone taal:** drie lagen.
     - Iedereen die AI gebruikt: geletterdheid (artikel 4) en transparantie.
     - Wie AI inzet in processen: classificatie, beleid, logging.
     - Wie hoog-risico-AI gebruikt: toezicht, documentatie, registratie.

     Elk met link naar het kennisartikel (K1, K2, K3, K7). Doel: de bezoeker weet in welke laag hij zit.
  3. **Wat er in elke bouw zit:** de vier onderdelen (classificatie, logging en menselijk toezicht, hosting en data in Europa, geletterdheid van het team), concreet gemaakt met een voorbeeld: bij een AI-klantenservice doorschakeling naar een medewerker, bij een werkstroom een controlestap.
  4. **De AI Act-check, voor wie al AI gebruikt en niets laat bouwen:** een eigen aanbod, zonder prijs (zie 01-besluiten §4).
     - Inventaris en classificatie van je AI-gebruik.
     - Een AI-beleid dat je team gebruikt (K3; het downloadbare sjabloon is de lichte variant).
     - Een AI-geletterdheidstraining met certificaat (link naar T2, groep 3).

     Uitkomst: weten in welke laag je zit, wat er ontbreekt en wat eerst moet. Leidt vaak naar een bouw of training, maar staat op zichzelf.
  5. **Normen, security en certificering:**
     - ISO 42001 (AI-managementsysteem): we begeleiden klanten erbij, als dienst (link K4);
     - ISO 27001 en security: we doen zelf security-reviews en pentests van AI-toepassingen (link K5);
     - AVG en DPIA: de klant voert de DPIA uit, wij leveren de technische informatie op verzoek (link K6);
     - over onszelf: "we werken naar certificering" voor ISO 42001 en 27001; geen claim dat we al gecertificeerd zijn.
  6. **Bewijs:** de eigen stack, met AI Act-transparantie ingebouwd en een retentiebeleid, plus de publieke pagina `/nl/legal/ai-assistent` als voorbeeld van hoe dat eruitziet.
  7. **FAQ:**
     - geldt de AI Act ook voor kleine organisaties;
     - wat als we alleen ChatGPT of Copilot gebruiken;
     - wat zijn de boetes (actueel en gecontroleerd);
     - wie houdt toezicht in Nederland;
     - kunnen jullie ons begeleiden naar ISO 42001 (ja, als dienst; certificeren doet een certificerende instelling);
     - doen jullie pentests (ja, van AI-toepassingen).
  8. **Contact:** de AI Act-check of een kennismaking met David, of de startsprint als er iets gebouwd moet worden.
- **Volgende stap:**
  - Bouwklant: de startsprint, met AI Act-classificatie in de uitkomst.
  - Wie alleen compliance wil: de AI Act-check, via het formulier of een kennismaking met David. Het company profile is hierop aangepast: compliance wordt ook los verkocht als AI Act-check (zie 01-besluiten §4).
- **Bewijs:** eigen stack, de transparantiepagina. Organisaties uit de publieke sector (Tweede Kamer) alleen als logo, en alleen als dat werk raakt aan dit onderwerp.
- **Links:**
  - In: nav (label "Compliance en security"), P6 (standaard), P5, P10, K1 t/m K7 (K1 met een expliciete CTA naar de AI Act-check), T2.
  - Uit: K1 t/m K7, T2, P7, P5, P12 (David), case eigen stack.
- **SEO/GEO:**
  - Intentie: oriënterend en commercieel ("AI Act compliance", "AI compliance Nederland", "AI Act wat moet ik doen").
  - Op "ai compliance nederland" staan we al op positie 5,9. Deze pagina kan die term krijgen.
  - Titelvoorstel: "Compliance en security voor AI: AI Act, ISO 42001 en pentests | AI Heroes".
  - Meta-richting: drie lagen, compliance in elke bouw, de AI Act-check voor wie al AI gebruikt.
  - FAQ-schema. Datums en bedragen bij publicatie checken; ze vallen onder de kwartaalcheck (Claude checkt, David keurt; zie 01-besluiten §11), met een zichtbare "bijgewerkt op"-datum.
  - Afzender: David Homan.

**Menulabel:** "Compliance en security" (zie 01-besluiten §4). De AI Act staat op de pagina.

**Besluiten**
1. Menulabel "Compliance en security" (zie 01-besluiten §4).
2. Compliance wordt los verkocht als "AI Act-check", zonder prijs; ISO 42001-begeleiding is een dienst (zie 01-besluiten §4).
3. Over ons eigen traject: "we werken naar certificering" (ISO 42001 en 27001) (zie 01-besluiten §4).
4. Afzender van P9 en groep 2: David Homan (zie 01-besluiten §5).
5. Security-reviews en pentests doen we zelf; DPIA-input is geen standaard (zie 01-besluiten §11).
6. AI Act-data: kwartaalcheck door Claude, David keurt (zie 01-besluiten §11).

**Wacht op**
- Niets.

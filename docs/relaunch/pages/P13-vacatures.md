# P13 Vacatures

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Pillar (overzicht) | `/nl/vacatures` (EN `/en/careers`) | ongewijzigd | NL 931 vertoningen, 19 klikken, positie 11,8; EN 157 / 8 klikken / 5,8 | Hangt onder P11; centrum van de vacaturedetails (H4) |

## 1. Wat stond er

- Bestanden: `src/pages/nl/vacatures/index.astro` (island `CareersIsland`, legacy `pages/nl/Vacatures.tsx`), copy uit `constants.ts` (`careersPage`).
- Cijfers: 50+ organisaties geholpen, 1000+ professionals getraind, 3 oprichters, opgericht 2019.
- Logo-rij: Kwakkel BV, INQ22, UMCG, Tweede Kamer, Postcode Loterij, Envalior.
- Waarden: echte impact, verantwoordelijkheid vanaf dag één, continu leren, eerlijk en direct.
- Voordelen:
  - kantoor in Groningen;
  - flexibel werken;
  - leerbudget;
  - diverse projecten;
  - informele cultuur;
  - groei met ons mee.
- Teams: adoptie en training, business case en scoping, bouw en compliance.
- Vacatures (alle `datePosted` 2026-06-08):
  - AI Engineer / Developer;
  - AI Trainer / Workshop Lead;
  - Sales & Business Development Intern;
  - AI-Enabled Marketing Intern.
- Zoektermen: "ai developer vacature" (positie 29,8), "ai engineer vacature" (positie 1), "full time ai business development jobs" (8,4).
- Klopt niet meer met de positionering:
  - In de vacatureteksten staan "snelgroeiende AI agency", "via training, consultancy en development", "ons Consultancy team" en "hoe een groeiende AI agency zichzelf positioneert". Dat zijn termen die zijn afgeschaft.
  - In de data staan nog `pillar`-velden (training/consulting/software).

## 2. Wat moet er staan

- **Voor wie:** kandidaten (developers, trainers, stagiairs) die AI Heroes vinden via een vacaturesite, een zoekopdracht of het netwerk.
- **Met welke vraag komt de bezoeker binnen:** "Wat voor bedrijf is dit, wat ga ik er doen, en is er een plek voor mij?"
- **Wat moet hij weten om de volgende stap te zetten:**
  1. **Cover:** kop "Werken bij AI Heroes", met één zin wat je hier doet: AI-toepassingen bouwen die teams elke dag gebruiken, vanuit Groningen.
  2. **Openstaande vacatures direct onder de cover:** kaarten met functie, team, uren, locatie, datum en een link naar H4. Wie solliciteert, wil deze lijst meteen zien. Alle vier staan open: AI Engineer, AI Trainer (breder: trainer én adoptie bij een bouw), marketing intern, sales intern (zie 01-besluiten §13). Geen salarisindicatie.
  3. **Hoe we werken:** de drie rollen in een traject (business case, bouw, training) als teams. Doel: de kandidaat ziet waar zijn rol in het geheel zit. In de taal van de nieuwe positionering.
  4. **Wat je bij ons krijgt:** voordelen en cultuur kort, met de echte operating principles uit het company profile (radical dogfooding, snelheid, eerlijk en direct, platte organisatie). Dat is specifieker dan algemene perks.
  5. **Gebouwd in Groningen:** het kantoor, de AI Fabriek, de AI Salon als community (link P15). Cijfers, als ze erin komen, met "sinds 2019" ("50+ organisaties", "1.000+ professionals getraind").
  6. **Open sollicitatie:** via het sollicitatieformulier (`/api/apply`), met een keuze "open sollicitatie" (zie 01-besluiten §13).
- **Volgende stap:** een vacature openen en solliciteren (H4, `ApplicationForm`, `/api/apply`).
- **Bewijs:** de cases en de logo's in één rij ("hier werk je aan"), het team (link P12).
- **Links in:** menu "Over ons", footer, P11, P12. **Links uit:** H4 per vacature, P12, P15.
- **SEO/GEO:**
  - Zoekintentie: vacatures in AI in Groningen ("ai developer vacature groningen", "ai engineer vacature").
  - Titelvoorstel: "Vacatures bij AI Heroes: bouw AI-toepassingen vanuit Groningen".
  - Meta-richting: de rollen plus de plaats.
  - De `JobPosting`-schema's staan op H4. Vacatures die verlopen zijn moeten van de pagina en uit de sitemap, anders straft Google voor verlopen `JobPosting`'s.
**Besluiten**
1. Alle vier de vacatures staan open (zie 01-besluiten §13). De vacatureteksten worden van scratch herschreven in de nieuwe positionering (H4).
2. De AI Trainer-rol wordt breder: trainer én adoptie bij een bouw (zie 01-besluiten §13).
3. Open sollicitatie via het sollicitatieformulier (zie 01-besluiten §13).
4. Sfeerbeelden: duotoon-stand-ins en de huidige portretten tot de eigen shoot, volgens de fotoregel van de relaunch (zie 01-besluiten §13 en §15).
5. "50+" en "1.000+" mogen blijven, met "sinds 2019" (zie 01-besluiten §2).

**Wacht op**
- Niets.

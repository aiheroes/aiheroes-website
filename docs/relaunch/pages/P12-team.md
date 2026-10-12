# P12 Het team

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Pillar | `/nl/over-ons/team` (EN `/en/about/team`) | ongewijzigd | NL 706 vertoningen, 37 klikken, positie 4,4; EN 2.410 vertoningen, 22 klikken, positie 15,6 (plus `/en/about/team/` met slash: 289 / 23,4) | Hangt onder P11 |

## 1. Wat stond er

- Bestand: `src/pages/nl/over-ons/team.astro`.
- Mensen:
  - **Frans Hoorn:** Co-Founder, business case en scoping. Achtergrond in UX/UI-design en productmanagement; leidt de startsprint en de business case.
  - **David Homan:** Co-Founder, bouw en compliance. Bouwt zelf (GitHub Copilot, lokale modellen); leidt de bouw; AI Act-classificatie, logging, toezicht en hosting.
  - **Jan Brusse:** Co-Founder, adoptie en training. Bouwde jarenlang een innovatielab op en trainde duizenden mensen; training op het systeem en bewijs voor artikel 4.
  - **Joseph Groot Kormelink:** Industry Advisor, Amsterdamse AI- en startupscene, enterprise-vraagstukken.
- Foto's in `/team/` (frans, david, jan .webp; joseph .png).
- Kennismaking per founder via agenda-links (homepage-contactblok): Frans voor business case en scoping, David voor bouw, hosting en compliance, Jan voor training.
- Zoekdata: deze pagina rankt sterk (positie 4,4); vermoedelijk zoeken mensen op namen. Relevante zoekterm "robert keus" (120 vertoningen, positie 36,8): herkomst onbekend.
- Klopt niet meer met de positionering: de rolverdeling in de huidige tekst ("business case", "bouw", "adoptie") komt overeen met het company profile, maar de bio van David bevat "techniek en boardroom" plus een losse toolopsomming. Dat is stijl, geen strijdigheid.

## 2. Wat moet er staan

- **Voor wie:**
  - een beslisser die wil weten met wie hij gaat werken voor hij een startsprint plant;
  - mensen die op een naam zoeken (partners, kandidaten, pers, sprekers van de AI Salon).
- **Met welke vraag komt de bezoeker binnen:** "Wie zijn deze mensen, wat kunnen ze, en met wie moet ik praten over mijn vraag?"
- **Wat moet hij weten om de volgende stap te zetten:**
  1. **Cover:** kop "Het team" met één zin over drie oprichters die elk een deel van de bouw dragen: de business case, de bouw en de training van je mensen. Geen groepsfoto: de drie huidige portretten in duotoon naast elkaar, tot de eigen shoot (zie 01-besluiten §13).
  2. **Per founder een blok:**
     - grote duotoonfoto, naam, "Co-Founder" plus rol;
     - wat hij in een traject doet (concreet, gekoppeld aan de AI Heroes-standaard);
     - één regel achtergrond;
     - een directe knop "Plan een gesprek met <naam>" (bestaande agenda-link);
     - een LinkedIn-link (ook als `sameAs` in de structured data).
     Zo wordt de pagina een tweede ingang naar de kennismaking.
  3. **Geen advisors:** Joseph Groot Kormelink gaat eraf (zie 01-besluiten §13).
  4. **Hoe we samenwerken:** in één korte sectie hoe de drie rollen in een startsprint en een bouw samenkomen (intake bij Frans, bouw bij David, overdracht bij Jan). Linkt naar P6 en P7.
  5. **Werken bij AI Heroes:** een korte doorverwijzing naar P13.
  6. **Contact:** het homepage-contactblok.
- **Volgende stap:** een gesprek met de founder die bij je vraag past, of "Plan een startsprint".
- **Bewijs:** de achtergronden (innovatielab, duizenden getrainde mensen, zelf bouwen) en de koppeling naar cases waar ieder een rol had, zodra dat bekend is.
- **Links in:** P11, homepage-blok "Gebouwd in Groningen" ("Ontmoet het team"), menu, P14 (kerngegevens). **Links uit:** P6, P7, P13, LinkedIn-profielen van de founders.
- **SEO/GEO:**
  - Zoekintentie: namen ("frans hoorn ai heroes", "jan brusse", "david homan").
  - Titelvoorstel: "Het team achter AI Heroes: Frans Hoorn, David Homan en Jan Brusse".
  - Meta-richting: drie namen en rollen, vanuit Groningen.
  - Schema: `Person` per founder met `worksFor`, `jobTitle` en `sameAs` (LinkedIn). Dat versterkt E-E-A-T voor de artikelen, waar dezelfde founders auteur zijn (zie relaunchplan: auteur per onderwerp).
  - De EN-variant met en zonder slash moet één canonieke URL krijgen.
**Besluiten**
1. De huidige portretten in duotoon, tot de eigen shoot (zie 01-besluiten §13).
2. Joseph Groot Kormelink gaat eraf (zie 01-besluiten §13).
3. LinkedIn per founder, ook als `sameAs` (zie 01-besluiten §13).
4. "robert keus" in de zoekdata: onbekend, negeren (zie 01-besluiten §15).
5. Rollen als auteur: David software en compliance, Frans strategie, Jan training (zie 01-besluiten §5); de bio's van twee zinnen schrijft Claude, founders keuren eenmalig.

**Wacht op**
- Akkoord van elke founder op zijn bio (fase: schrijven van P12 en de eerste artikelen).

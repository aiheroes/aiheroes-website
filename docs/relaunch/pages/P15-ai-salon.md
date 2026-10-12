# P15 AI Salon

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Pillar | `/nl/ai-salon` (EN `/en/ai-salon`) | ongewijzigd | NL 888 vertoningen, 152 klikken, CTR 17,1%, positie 5,7. "ai salon groningen" 68 klikken bij 106 vertoningen (positie 1,05); "ai salon" 207 / 3,96 | Hangt onder P11 |

**Freeze-uitzondering:** de AI Salon-pagina wordt tijdens de bouw live bijgewerkt (sprekers, sponsors, edities). Elke wijziging gaat ook mee in de branch `relaunch`. Het plan scheidt daarom vaste opbouw van wisselende data: sprekers, sponsors, edities en de Luma-link komen uit één databestand dat zowel de live pagina als de nieuwe pagina kan gebruiken.

## 1. Wat stond er

- Bestanden: `src/pages/nl/ai-salon.astro` (`Event`-schema), island `AISalonIsland`, legacy `pages/AISalonPage.tsx`.
- Feiten:
  - AI Salon Groningen is een chapter in het wereldwijde AI Salon-netwerk;
  - elke twee maanden, Engelstalig, gratis;
  - voor AI-founders, builders, investeerders, onderzoekers en partners;
  - de kick-off was op donderdag 3 september 2026 bij Chordify en was uitverkocht met ruim 70 gasten;
  - editie #2 is op donderdag 5 november 2026, 18:00 tot 21:00, locatie volgt (de geplande locatie viel af), Groningen.
- Programma editie #2:
  - 17:30 inloop;
  - 18:00 twee talks (Ilse Gosliga, Alex van Ginneken);
  - 18:40 pitches van 60 seconden;
  - 19:00 tot 21:00 eten, drinken en netwerken.
- Sprekers: Ilse Gosliga (Energiso), Alex van Ginneken; onderwerpen volgen. Twee talks van zo'n twintig minuten per editie.
- Sponsors: lijst leeg voor editie #2, zes open plekken; "bewust laagdrempelig"; salon@aiheroes.io.
- Aanmelden via Luma (`luma.com/AI-Salon-Gro-2`), met een modal-trigger in de tekst.
- Andere chapters in het netwerk: Amsterdam en Brabant (uit het persbericht).
- Zoektermen:
  - "ai salon amsterdam" 24 vertoningen, positie 15,5;
  - "ai salon eindhoven" 4 vertoningen, positie 13,5.
  - Mensen zoeken op het netwerk, niet alleen op Groningen.

## 2. Wat moet er staan

- **Voor wie:** founders, builders, investeerders, onderzoekers en partners in Noord-Nederland en daarbuiten die de avond willen bijwonen, er willen spreken of hem willen sponsoren. Het zijn indirect ook toekomstige klanten, maar de pagina verkoopt niet.
- **Met welke vraag komt de bezoeker binnen:** "Wanneer is de volgende, waar, wie spreekt er, en hoe meld ik me aan?"
- **Wat moet hij weten om de volgende stap te zetten:**
  1. **Cover:** naam, editienummer, datum, tijd, plaats en de aanmeldknop (Luma) boven de vouw. Kop: de bestaande kop "Het #1 AI netwerk-event, nu ook in Groningen" blijft (zie 01-besluiten §2).
  2. **Wat is de AI Salon:** in twee zinnen:
     - een chapter van het wereldwijde netwerk, met de andere Nederlandse chapters (Amsterdam, Brabant) bij naam en met link (zie 01-besluiten §14);
     - elke twee maanden, gratis en in het Engels;
     - voor wie de avond bedoeld is.
  3. **Programma:** tijdlijn van de avond.
  4. **Sprekers:** kaarten met duotoonfoto, naam, organisatie en onderwerp, plus een lege plek "Word spreker" als er plekken open zijn.
  5. **Sponsors:** logo's van bevestigde sponsors, plus "Word sponsor" en een uitleg in één regel (laagdrempelig, houdt de salon gratis).
  6. **Edities:** komende en voorbije edities (kick-off uitverkocht, ruim 70 gasten), met foto's van de kick-off (zie 01-besluiten §14).
  7. **Doe mee:** spreken, sponsoren, een locatie aanbieden, pitchen. Eén blok met salon@aiheroes.io.
  8. **Georganiseerd door AI Heroes:** één regel en een link naar P11. Hier geen startsprint-knop als hoofdactie.
- **Volgende stap:** aanmelden via Luma. Daarnaast een volg-optie voor wie de volgende editie niet wil missen (zie 01-besluiten §14). Voorstel: AI Heroes volgen op LinkedIn en de Luma-kalender volgen; geen mailinglijst, want er is geen nieuwsbrief (zie 01-besluiten §11). Secundair: mailen om te spreken, te sponsoren of een locatie aan te bieden.
- **Bewijs:** de uitverkochte kick-off, de sprekers, de sponsors en het internationale netwerk.
- **Links in:** menu "Over ons", P11, P14, homepage. **Links uit:** Luma, het wereldwijde AI Salon-netwerk, P11.
- **SEO/GEO:**
  - Zoekintentie: event en navigatie ("ai salon groningen", "ai salon"); de pagina scoort al uitstekend (CTR 17%).
  - Titelvoorstel: "AI Salon Groningen: editie #<n>, <datum>" (per editie bijwerken).
  - Meta-richting: datum, plaats, voor wie, gratis.
  - Schema: één `Event` per komende editie, met `performer` en `offers` (gratis); voorbije edities als `eventStatus` afgerond of verwijderd.
  - De editie-data moet uit één bron komen, zodat titel, schema en pagina nooit uit elkaar lopen.
**Besluiten**
1. De kop "Het #1 AI netwerk-event" blijft (zie 01-besluiten §2).
2. Foto's van de kick-off komen op de pagina (zie 01-besluiten §14).
3. De andere chapters (Amsterdam, Brabant) worden genoemd, met link (zie 01-besluiten §14).
4. Een volg-optie naast Luma, zonder mailinglijst (zie 01-besluiten §14 en §11).
5. Het persbericht over de kick-off pas na akkoord op de quotes (zie 01-besluiten §14).
6. Freeze-uitzondering: de pagina wordt live bijgewerkt en elke wijziging gaat mee in `relaunch` (zie `relaunch-2026.md`).

**Wacht op**
- Foto's van de kick-off (Frans levert aan; nodig bij de bouw van P15, anders tijdelijk zonder fotoblok).
- De links naar de chapters Amsterdam en Brabant: bij de bouw opzoeken en laten bevestigen.

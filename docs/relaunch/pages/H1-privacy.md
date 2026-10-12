# H1 Privacy

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Hulp (H0) | `/nl/legal/privacy` (EN `/en/legal/privacy`) | ongewijzigd | niet in de top-pagina's | Footer; linkt naar H3 |

## 1. Wat stond er

- Bestand: `src/pages/nl/legal/privacy.astro`, "Laatst bijgewerkt: mei 2026".
- Opbouw:
  1. Onze principes
  2. In het kort (alleen wat nodig is, niet verkocht, inzage en verwijdering, AVG)
  3. Welke gegevens verzamelen we (contactformulieren, websitebezoek, nieuwsbrief)
  4. Hoe gebruiken we je gegevens
  5. De AI-assistent op deze site
  6. Bewaartermijnen
  7. Je rechten
  8. Contact
  9. Verantwoordelijke
- Feiten om te controleren bij de relaunch:
  - de verwerkers van formulieren (Resend vanaf send.aiheroes.io naar info@aiheroes.io);
  - de hosting (Vercel, functions in fra1);
  - de chatassistent (Supabase EU, 30 dagen pseudoniem).
- Klopt mogelijk niet meer:
  - de pagina noemt een nieuwsbrief, terwijl er op de site geen aanmelding is (zie P17);
  - de hosting is sinds 2026-09-24 Vercel in plaats van Netlify. Te controleren of de tekst nog een verouderde verwerker noemt.
  - Agenda-links lopen via Google Calendar (afspraak met een founder).

## 2. Wat moet er staan

Volgt de hulp-template (H0). De juridische inhoud blijft van Frans; de relaunch past alleen de vorm en de feiten aan.

- **Voor wie:** bezoekers die een formulier invullen of de chat gebruiken, en zakelijke klanten die de verwerking willen nalopen.
- **Met welke vraag komt de bezoeker binnen:** "Wat doen jullie met mijn gegevens, en waar staan ze?"
- **Wat moet hij weten om de volgende stap te zetten:**
  1. Kop met datum.
  2. In het kort.
  3. Een tabel van verwerkingen: formulier, sollicitatie, chat, agenda-afspraak, de download van het AI-beleidsjabloon (K3: e-mailadres in ruil voor het sjabloon, met doel, opslag en bewaartermijn) en websitebezoek, met per regel wat, waarvoor, waar (EU) en hoe lang. Geen nieuwsbrief: die bestaat niet, de passage gaat eruit (zie 01-besluiten §11).
  4. Verwerkers **algemeen** omschreven (bijvoorbeeld "onze hostingpartij", "onze e-maildienst", "de partij waarmee we evenementen organiseren"), zonder namen (zie 01-besluiten §15).
  5. Je rechten en hoe je ze gebruikt.
  6. Verantwoordelijke (AI Heroes B.V., KvK, adres).
- **Volgende stap:** contact bij vragen (mail).
- **Bewijs:** n.v.t. De pagina is zelf het bewijs van "Europees waar het kan", wat bij eigen beheer (P5) en compliance (P9) past.
- **Links in:** footer, contactformulier, chat, H3. **Links uit:** H3, H2.
- **SEO/GEO:** noindex is niet nodig (nu geïndexeerd); titel "Privacyverklaring AI Heroes".
**Besluiten**
1. De nieuwsbrief bestaat niet; de passage gaat eruit (zie 01-besluiten §11).
2. Verwerkers algemeen omschreven, zonder namen (zie 01-besluiten §15).
3. Frans keurt de tekst inhoudelijk (zie 01-besluiten §15).
4. Nieuwe passage voor de download van het AI-beleidsjabloon (K3) in ruil voor een e-mailadres (zie 01-besluiten §11).

**Wacht op**
- Akkoord van Frans op de herschreven tekst (fase: hulppagina's, vóór de lancering).

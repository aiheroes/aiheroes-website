# H4 Vacaturedetails

| Categorie | Nieuwe URL | Oude URL | Zoekdata (GSC, 6 mnd) | Hangt onder / is centrum van |
|---|---|---|---|---|
| Hulp (H0), met formulier | `/nl/vacatures/<functie>` (EN `/en/careers/<role>`) | ongewijzigd | niet in de top-pagina's; zoekterm "ai engineer vacature" positie 1 (3 vertoningen) | Hangt onder P13 |

Eén bestand voor alle vacaturepagina's: ze delen één opbouw. De data per vacature staat in `constants.ts` (`careersPage.positions`).

## 1. Wat stond er

- Bestand: `src/pages/nl/vacatures/[slug].astro`, met `JobPosting`-schema (incl. `employmentType`), `ApplicationForm` en `/api/apply`.
- Vier vacatures, alle `datePosted` 2026-06-08:

| Vacature | Team | Uren | Type | Locatie |
|---|---|---|---|---|
| AI Engineer / Developer | Bouw en compliance | 32-40 | fulltime | Groningen |
| AI Trainer / Workshop Lead | Adoptie en training | 24-40 | fulltime/parttime | Groningen + reizen |
| Sales & Business Development Intern | Business Development | 32-40 | stage, min. 5 maanden | Groningen |
| AI-Enabled Marketing Intern | | | stage | Groningen |

- Per vacature: samenvatting, omschrijving (twee alinea's), eisen, aanbod.
- Klopt niet meer met de positionering:
  - "AI agency", "training, consultancy en development" en "ons Consultancy team" (Engineer, Sales, Marketing);
  - de vacature voor de AI Trainer is geschreven als workshop-rol;
  - aanbod: "competitief salaris" en "competitieve dagvergoeding" zonder bedragen.

## 2. Wat moet er staan

Volgt de hulp-template (H0), met formulier.

- **Voor wie:** een kandidaat die overweegt te solliciteren.
- **Met welke vraag komt de bezoeker binnen:** "Wat ga ik precies doen, past dit bij mij, en hoe solliciteer ik?"
- **Wat moet hij weten om de volgende stap te zetten:**
  1. **Kop:** functie, met een strip met team, uren, type, locatie en plaatsingsdatum.
  2. **Wat je doet:** het werk in de taal van de nieuwe positionering. Bijvoorbeeld voor de engineer: AI-toepassingen bouwen die teams elke dag gebruiken, startsprints van zes dagen, bouwen in sprints van twee weken, compliance in het ontwerp. De AI Trainer-rol wordt breder: trainer én adoptie bij een bouw (training op opgeleverde systemen) (zie 01-besluiten §13).
  3. **Met wie je werkt:** de founder van het vak is het aanspreekpunt (foto, naam, link P12): AI Engineer David, AI Trainer Jan, marketing en sales Frans (zie 01-besluiten §13).
  4. **Wat we vragen.**
  5. **Wat we bieden:** concreet, zonder salarisindicatie (zie 01-besluiten §13).
  6. **Solliciteren:** formulier (bestaand, `/api/apply`) en een mailadres.
  7. **Andere vacatures:** links naar de overige vacatures en naar P13.
- **Volgende stap:** solliciteren.
- **Bewijs:** de cases en de logo's in één regel ("hier werk je aan"), link P16.
- **Links in:** P13. **Links uit:** P13, P12, P16.
- **SEO/GEO:**
  - `JobPosting`-schema blijft, met `validThrough` (nu ontbreekt een einddatum) en `jobLocation`; geen `baseSalary`.
  - Gesloten vacatures krijgen een 410, of blijven als "gesloten" zonder schema.
  - Titelvoorstel: "<Functie> bij AI Heroes in Groningen".
**Besluiten**
1. Alle vier staan open: AI Engineer, AI Trainer, marketing intern, sales intern (zie 01-besluiten §13).
2. Geen salarisindicatie (zie 01-besluiten §13).
3. Aanspreekpunt per vak: David, Jan, Frans (zie 01-besluiten §13).
4. AI Trainer breder: trainer én adoptie bij een bouw (zie 01-besluiten §13).
5. Open sollicitatie via hetzelfde formulier (zie 01-besluiten §13).

**Wacht op**
- Een einddatum (`validThrough`) per vacature: bij de bouw voorstellen (bijvoorbeeld zes maanden na publicatie) en laten bevestigen.

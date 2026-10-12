# C2 INQ22

| Categorie | URL | Entry-type | Zoekdata (GSC, 6 mnd) | Gelinkt vanaf |
|---|---|---|---|---|
| Case | `/nl/cases/inq22` (ongewijzigd) | Nieuw bouwen | geen vertoningen gemeten | menu en footer (globaal), case-overzicht |

## 1. Wat stond er

- **Klant:** INQ22, "een Nederlands merk dat zijn producten via een eigen webwinkel verkoopt". De branche wordt niet genoemd. Het is een B2B-groothandel in tattoo-benodigdheden.
- **Sector:** e-commerce.
- **Probleem:** een eigen webwinkel die doet wat het merk nodig heeft, in plaats van een standaardpakket met een thema.
- **Oplossing:**
  - een maatwerk webwinkel met catalogus, winkelmand, afrekenen en beheer;
  - gekoppeld aan betaling en verzending;
  - overgedragen met documentatie;
  - het team is getraind op het beheer.
- **Kernpunt:** er zit geen AI in de winkel; hij is gebouwd met AI-gereedschap ("AI is gereedschap, geen doel"). Daardoor is maatwerk betaalbaar voor een organisatie van deze omvang.
- **Cijfers:** geen.
- **Quote:** geen.
- **Tijdlijn:** niet genoemd.
- **Technologie:** niet genoemd. Bekend uit het project: Next.js en Payload CMS op Postgres.
- **Live:** inq22.com, met een link.
- **Foto:** geen.
- **Wat niet meer klopt:** het kaartje "Broncode, ontwerp en data zijn van INQ22. Geen abonnement op een platform dat de regels bepaalt" en de slotzin "die van de klant is". De broncode is niet van de klant.

## 2. Wat moet er staan

**Kernboodschap:** een webwinkel op maat, live en in gebruik, gebouwd met AI als gereedschap. Software telt ook als het product geen AI bevat.

**Bewijst:** P3 (Nieuwe AI-toepassing), L8 (Maatwerk software).

| Veld | Inhoud |
|---|---|
| `client` | INQ22 |
| `sector` | e-commerce (branche op de pagina: tattoo-benodigdheden, B2B) |
| `entry` | `[nieuw]` |
| `currentTeam` | true |
| `landings` | L8 |
| `headline` | Voorstel: "Een eigen webwinkel, \| live op inq22.com" |
| `lede` | INQ22, groothandel in tattoo-benodigdheden voor professionals (B2B), wilde een webwinkel die werkt zoals zij verkopen. We bouwden hem op maat, met AI als gereedschap in ontwerp, code en test, en het team beheert producten en prijzen zelf. |
| `stats` | Ontbreekt. Kandidaten: bouwtijd in weken, aantal producten, orders sinds de livegang |
| `question` | "Kunnen jullie dit voor ons bouwen?" Bevestigen of in de eigen woorden van de klant |
| `built` | Catalogus, winkelmand en afrekenen · koppeling met betaling en verzending · beheeromgeving voor producten, prijzen en teksten · documentatie en training voor het team |
| `timeline` | Ontbreekt: startsprint, bouwperiode, livedatum |
| `standard` | Team getraind (zeker) · niet vast aan één AI-leverancier: niet van toepassing (geen AI in het product). Weglaten of alleen "team getraind" |
| `quote` | Aanvragen (besluit §8); blok vervalt tot er akkoord is |
| `photo` | Screenshot van de winkel (`kind: screenshot`, besluit §8) |
| `liveUrl` | https://inq22.com (besluit §8: linken) |

Er komt geen eigendomsclaim op de pagina. "Geen abonnement op een platform" vervalt; wil je het voordeel noemen, dan als "werkt zoals INQ22 verkoopt".

**Titelvoorstel (SEO):** "INQ22: maatwerk webwinkel, gebouwd met AI | AI Heroes"

### Besluiten

1. Branche noemen: tattoo-benodigdheden, B2B (§8).
2. De shop wordt gelinkt (§8).
3. Quote aanvragen (§8).
4. Foto: screenshot van de winkel (§8).
5. L8 mikt niet op "webshop laten bouwen"; INQ22 bewijst dat we ook zonder AI in het product bouwen (§10).

### Wacht op

- Quote van INQ22 (Frans vraagt aan) voor fase 3.
- Bij de bouw controleren dat inq22.com publiek bereikbaar is (geen preview-gate meer); anders `liveUrl` leeg laten.
- Cijfer (bouwtijd, aantal producten of orders): alleen als INQ22 akkoord geeft.

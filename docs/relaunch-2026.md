# Relaunch 2026: de nieuwe site in de huisstijl

Eén bron van waarheid voor de relaunch van aiheroes.io in de huisstijl van de experimentele
homepage (`/nl/experiment/huisstijl`). Besluiten zijn genomen op 2026-10-09. Wijzigt er iets,
pas dan dit document aan, niet alleen de code.

## Uitgangspunten

- De positionering staat vast: `docs/company-profile.md` en `AGENTS.md`. Elke pagina begint
  bij de kern ("Wij bouwen AI-toepassingen die je team elke dag gebruikt", drie entries,
  startsprint als voordeur) en niet bij zoekvolume of oude pagina's.
- De goedgekeurde homepage is de stijlbron. `src/components/experiment/DESIGN.md` en
  `ASSETS.md` beschrijven de regels; iconen zijn IconPark Outline (stroke 4, square, miter).
- Lancering is één merge. Daarna is de oude stijl weg.

## Paginacategorieën

| Categorie | Bouwwijze | Pagina's |
|---|---|---|
| **Pillar pages** (evergreen) | Elke pagina van 0 tot klaar, zoals de homepage | Home, de drie entries (nieuwe AI-toepassing, oude software vervangen, software op je eigen servers), startsprint, business case, AI Act, training, aanpak, over ons, team, vacatures (overzicht), pers, AI Salon |
| **Cases** | Eén mal, elke huidige en toekomstige case erin | Alle cases, oud en nieuw |
| **SEO-landings** | Eigen template, commercieel, met startsprint-blok | Nog te bepalen, zie "Open punten" |
| **Blogs en listicles** | Eigen template, leesvorm | Alle huidige artikelen, plus inhoud die niet in een pillar past |
| **Campagnepagina's** | Eigen herbruikbare template voor media en events | De AI Storm, toekomstige optredens |
| **Hulppagina's** | Eén eenvoudige tekst-template | Privacy, voorwaarden, AI-assistent, vacaturedetails, 404 |

Landings en blogs krijgen **twee aparte templates**. Beide krijgen wel: auteur (founder per
onderwerp, met foto en bio), publicatie- en bijwerkdatum, FAQ-blok en structured data, voor
vindbaarheid in Google en in AI-zoekmachines.

Auteur per onderwerp: training en AI-geletterdheid Jan Brusse, software David Homan,
strategie en compliance Frans Hoorn.

## Cases

- Oude cases (Medux, Trabu, InnoEnergy, OLX, Eigen stack) blijven, **gelijkwaardig** in de
  mal, zonder label "eerder werk".
- Medux staat bij naam op de eigen case-pagina en alleen anoniem op de homepage.
- Velden in de mal: klant, sector, **entry-type** (nieuw bouwen, vervangen, eigen beheer),
  **cijfers** (met tellers), **quote**, **tijdlijn/aanpak** (van startsprint tot oplevering),
  foto, en een **anoniem-vlag** (case kan zonder klantnaam getoond worden).
- De claim "broncode is van de klant" op Kwakkel, Strive en INQ22 klopt niet en verdwijnt bij
  de relaunch. De standaardlijn is "niet vast aan één AI-leverancier". De oude site blijft tot
  de lancering ongewijzigd.

## Training

Training blijft een bijrol in de positionering, met één pillar page. De zoekvraag naar
training (incompany, AI-geletterdheid, regio's) krijgt een eigen cluster in de SEO-categorie.
Welke landings precies, bepalen we vanuit de kern (zie "Open punten").

## URL-structuur

URL's mogen veranderen. Elke pagina met zoekvertoningen krijgt een 301 naar haar nieuwe plek.

- Pillars: `/nl/<pillar>` (EN-mirror via `src/data/i18n.ts`)
- Cases: `/nl/cases/<case>`
- Blogs en listicles: `/nl/kennis/<artikel>`, EN `/en/insights/<artikel>`
- Landings: plat op `/nl/<onderwerp>`
- Redirects en 410's blijven in `vercel.json`, de enige bron.

Verdwijnen met **410 Gone**: `/hanze`, `/nl/menu`, `/og-image-generator`,
`/Brand_Package/_favicon_test`.

## Bouwwijze

- Eén lange branch `relaunch`. De nieuwe site staat daar direct op de echte routes (`/nl`,
  `/en`); de experimenthomepage verhuist naar `/nl`. Previews via Vercel; lancering is één
  merge na `npm run check` en `scripts/check-parity.mjs`.
- **Eerst alles in het Nederlands**, daarna het Engels als één blok, vóór de lancering.
- Gedeelde bouwdoos vóór de pillars: nav, footer, cover, sectieblokken, contactformulier
  (`/api/contact`), chatassistent, duotoonfoto's.
- Foto's: Unsplash-stand-ins (met herkomst in `ASSETS.md`) en een lijst van plekken die later
  een eigen shoot krijgen (team, cases).
- Iconen: Claude kiest per geval het meest letterlijke IconPark-icoon op de huisregel;
  Frans ziet het in de review.

## Volgorde

1. Paginalijst en redirect-kaart: elke huidige URL met categorie, nieuwe URL en zoekdata.
2. Bouwdoos.
3. Startsprint en de drie entries.
4. Overige pillars.
5. Case-mal en alle cases.
6. Landing-template, blog-template en de inhoud.
7. Campagne-template (De AI Storm).
8. Hulppagina's.
9. Engels als blok.
10. Parity-check en lancering.

## Tijdens de bouw

- **Content freeze** op de live site tot de lancering. Ook snelle SEO-fixes (titels en
  omschrijvingen) wachten op de relaunch.
- De Vercel-bypass voor previews blijft tot de lancering; daarna roteren.
- Lancering is **stil**: geen campagne of aankondiging.

## Buiten de site

- `aoplatform.backend.aiheroes.io` is dood (hoort bij de verdwenen AWS-omgeving) maar staat in
  Google: DNS-record verwijderen.

## Open punten

- **SEO-landings:** welke onderwerpen. Vertrekpunt is de kern (wat we bouwen, voor wie,
  waarmee de klant begint), daarna pas de zoekvraag. Voorstel volgt bij stap 1.
- **Uitzondering op de freeze:** de AI Salon heeft regelmatig nieuwe sprekers en sponsors.

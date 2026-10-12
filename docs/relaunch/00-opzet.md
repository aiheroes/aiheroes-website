# Relaunch: opzet van de site

Stap 1 van het relaunchplan (`docs/relaunch-2026.md`): elke pagina van de nieuwe site met
categorie, nieuwe URL en oude URL('s), plus de redirect-kaart. Per pagina staat het plan in
`docs/relaunch/pages/`. Zoekdata: Google Search Console, 2026-04-07 tot 2026-10-09
(vertoningen / positie). Alles in het Nederlands; de Engelse versie volgt als blok en spiegelt
deze lijst (EN-URL's staan erbij als voorstel).

## Regels voor URL's

- Een URL verandert alleen als de oude naam bij het oude aanbod hoort (`diensten`,
  `consultancy`, `eu-consultancy`, `resources`). Werkt een URL al, dan blijft hij.
- Elke URL met zoekvertoningen krijgt een 301 naar de nieuwe plek. Geen ketens: bestaande
  redirects in `vercel.json` die nu naar een oude URL wijzen, gaan direct naar de nieuwe.
- Geen ankers als redirectdoel (`#procesanalyse`): na de relaunch bestaan die secties niet meer.

## Pillar pages

| # | Pagina | Nieuwe URL (NL) | EN-voorstel | Oude URL | Zoekdata |
|---|---|---|---|---|---|
| P1 | Home | `/` (blijft; `/nl` verwijst hierheen) | `/en` | `/`, `/nl/experiment/huisstijl` | 13.682 / 16,8 |
| P2 | Wat we bouwen (overzicht) | `/nl/wat-we-bouwen` | `/en/what-we-build` | `/nl/diensten` | 639 / 9,7 |
| P3 | Nieuwe AI-toepassing | `/nl/nieuwe-ai-toepassing` | `/en/new-ai-tool` | `/nl/diensten/software` | 862 / 43,8 |
| P4 | Oude software vervangen | `/nl/software-vervangen` | `/en/replace-software` | `/nl/diensten/software-vervangen` | geen |
| P5 | Software in eigen beheer | `/nl/eigen-beheer` | `/en/self-hosted` | `/nl/diensten/eu-consultancy` | 286 / 17 |
| P6 | Hoe we werken | `/nl/hoe-we-werken` | `/en/how-we-work` | `/nl/over-ons/aanpak` | 303 / 7,2 |
| P7 | De startsprint | `/nl/startsprint` | `/en/start-sprint` | ongewijzigd | geen |
| P8 | Kosten en opbrengst vooraf (business case) | `/nl/business-case` | `/en/business-case` | `/nl/diensten/consultancy` | 405 / 20,8 |
| P9 | Compliance (AI Act e.a.) | `/nl/compliance` | `/en/compliance` | nieuw (was anker `/nl/over-ons/aanpak#compliance`) | |
| P10 | AI-training voor je team | `/nl/training` | `/en/training` | `/nl/diensten/training` | 2.439 / 40,8 |
| P11 | Over AI Heroes | `/nl/over-ons` | `/en/about` | ongewijzigd | |
| P12 | Het team | `/nl/over-ons/team` | `/en/about/team` | ongewijzigd | 706 / 4,4 |
| P13 | Vacatures | `/nl/vacatures` | `/en/careers` | ongewijzigd | 931 / 11,8 |
| P14 | Voor de pers | `/nl/pers` | `/en/press` | ongewijzigd | 272 / 6,4 |
| P15 | AI Salon | `/nl/ai-salon` | `/en/ai-salon` | ongewijzigd | 888 / 5,7 |
| P16 | Cases (overzicht) | `/nl/cases` | `/en/cases` | ongewijzigd | 46 / 14,1 |
| P17 | Kennis (overzicht artikelen) | `/nl/kennis` | `/en/insights` | `/nl/resources` | 216 / 18 |

P16 en P17 zijn overzichtspagina's; ze volgen de pillar-aanpak omdat ze in het menu staan.

## Cases (één mal)

| # | Case | URL | Zoekdata |
|---|---|---|---|
| C0 | De mal | | |
| C1 | Kwakkel BV | `/nl/cases/kwakkel` | |
| C2 | INQ22 | `/nl/cases/inq22` | |
| C3 | Strive | `/nl/cases/strive` | |
| C4 | IC Commerce | `/nl/cases/ic-commerce` | |
| C5 | Eigen stack (website-assistent) | `/nl/cases/eigen-stack` | |
| C6 | Medux | `/nl/cases/medux` | 151 / 19,4 |
| C7 | Trabu | `/nl/cases/trabu` | 23 / 7,4 |
| C8 | InnoEnergy | `/nl/cases/innoenergy` | 27 / 9,2 |
| C9 | OLX | `/nl/cases/olx` | 427 / 11,1 |

URL's blijven ongewijzigd.

## SEO-landings (eigen template), groep 1: de kern

| # | Landing | URL | Hangt onder | Oude URL / materiaal | Zoekdata |
|---|---|---|---|---|---|
| L0 | De landing-template | | | | |
| L1 | AI-klantenservice en spraakassistent | `/nl/ai-klantenservice` | P3 | | |
| L2 | AI-agents en workflows | `/nl/ai-agents` | P3 | | |
| L3 | Administratie en documentverwerking automatiseren | `/nl/administratie-automatiseren` | P3 | | |
| L4 | Company wiki | `/nl/company-wiki` | P3 | | |
| L5 | Digital twin | `/nl/digital-twin` | P3 | `/nl/diensten/digital-twins` | 36 / 20,3 |
| L6 | AI koppelen aan bestaande systemen | `/nl/ai-integratie` | P3 | `/nl/diensten/ai-integratie` | 1.086 / 17,4 |
| L7 | Extra developers in je team | `/nl/extra-developers` | P3 | `/nl/diensten/ai-development-teams` | 299 / 21 |
| L8 | Maatwerk software | `/nl/maatwerk-software` | P3 | `/nl/diensten/maatwerk-ai-oplossingen` | 930 / 25,8 |
| L9 | SaaS-pakket vervangen | `/nl/saas-vervangen` | P4 | | |
| L10 | Excel en losse tools vervangen | `/nl/excel-vervangen` | P4 | | |
| L11 | Verouderd maatwerksysteem moderniseren | `/nl/verouderde-software` | P4 | | |
| L12 | AI op eigen servers of in de Europese cloud | `/nl/ai-op-eigen-servers` | P5 | `/nl/resources/soevereine-ai` | |
| L13 | Europees alternatief voor ChatGPT/Copilot | `/nl/europees-alternatief-chatgpt` | P5 | nieuw (het oude artikel gaat naar B3) | |
| L14 | Wat kost AI-implementatie | `/nl/wat-kost-ai-implementatie` | P8 | `/nl/resources/wat-kost-ai-implementatie` | EN 3.376 / 7,2 |
| L15 | AI-bureau Groningen | `/nl/ai-bureau-groningen` | P11 | `/nl/diensten/ai-consultancy-groningen` | 1.466 / 10,8 |
| L16 | AI-bureau Nederland | `/nl/ai-bureau-nederland` | P11 | `/nl/diensten/ai-bureau-nederland` | |

## Groep 2: Compliance (hangt onder P9)

Kennisartikelen in de blog-template: de lezer wil iets begrijpen; de pillar verkoopt.

| # | Artikel | URL | Oude URL | Zoekdata |
|---|---|---|---|---|
| K1 | De AI Act: wat moet je als organisatie | `/nl/kennis/ai-act` | `/nl/resources/eu-ai-act-compliance` | 2.508 / 12,5 |
| K2 | AI-geletterdheid (artikel 4) | `/nl/kennis/ai-geletterdheid` | `/nl/resources/ai-geletterdheid` | 1.669 / 57,9 |
| K3 | AI-beleid opstellen | `/nl/kennis/ai-beleid` | `/nl/resources/ai-beleid-opstellen` | 136 / 9,3 |
| K4 | ISO 42001 | `/nl/kennis/iso-42001` | nieuw | |
| K5 | Security en ISO 27001 bij AI | `/nl/kennis/ai-security` | nieuw | |
| K6 | AVG en privacy bij AI | `/nl/kennis/ai-en-avg` | nieuw | |
| K7 | Menselijk toezicht en logging | `/nl/kennis/menselijk-toezicht` | nieuw | |

## Groep 3: Training (landings, hangen onder P10)

Commerciële zoekvragen ("incompany AI-training"), dus de landing-template.

| # | Landing | URL | Oude URL | Zoekdata |
|---|---|---|---|---|
| T1 | Incompany AI-training | `/nl/incompany-ai-training` | `/nl/diensten/incompany-ai-training` | 1.755 / 21,1 |
| T2 | AI-geletterdheidstraining | `/nl/ai-geletterdheid-training` | `/nl/diensten/ai-geletterdheid-training` | 1.133 / 26,6 |
| T3 | ~~Copilot-training~~ vervalt (besluit 6): kaart op T1 | | anker op `/nl/diensten/training` | |
| T4 | ~~AI voor developers~~ vervalt (besluit 6): kaart op T1 | | anker op `/nl/diensten/training` | 28 / 57,2 |
| T5 | Sessie digitale soevereiniteit | `/nl/digitale-soevereiniteit` | `/nl/diensten/eu-training` | 3 / 9,7 |

## Blogs en listicles

| # | Artikel | URL | Oude URL | Zoekdata |
|---|---|---|---|---|
| B0 | De blog-template | | | |
| B1 | Top 10 AI-bureaus in Nederland | `/nl/kennis/top-10-ai-bureaus` | `/nl/resources/top-10-ai-consultancy-nederland` | 6.030 / 22,7 |
| B2 | Waar begin je met AI in je organisatie | `/nl/kennis/waar-begin-je-met-ai` | `/nl/resources/ai-implementatie-mkb`, `/nl/resources/ai-strategie-gids` | 599 / 32,3 (strategie) |
| B3 | Europese alternatieven voor ChatGPT (2026) | `/nl/kennis/europese-alternatieven-chatgpt` | `/nl/resources/europese-chatgpt-alternatieven` (besluit 10); linkt naar L13 | 69 / 6,4 (EN 751 / 6,7) |

## Campagne en hulppagina's

| # | Pagina | URL | Opmerking |
|---|---|---|---|
| A0 | De campagne-template | | |
| A1 | De AI Storm | `/nl/de-ai-storm` | 1.548 / 6,4; ongewijzigd |
| H0 | De hulp-template | | |
| H1 | Privacy | `/nl/legal/privacy` | ongewijzigd |
| H2 | Voorwaarden | `/nl/legal/voorwaarden` | ongewijzigd |
| H3 | AI-assistent (transparantie) | `/nl/legal/ai-assistent` | ongewijzigd, noindex |
| H4 | Vacaturedetails (4) | `/nl/vacatures/<functie>` | ongewijzigd |
| H5 | 404 en kale paden | `/404` | bare-path-logica moet de nieuwe URL's kennen |

## Verdwijnt (410 Gone)

`/hanze`, `/nl/menu`, `/og-image-generator`, `/Brand_Package/_favicon_test`.
`/nl/experiment/huisstijl` krijgt na de lancering een 301 naar `/`.

## Redirect-kaart (301, NL; EN spiegelt)

| Van | Naar |
|---|---|
| `/nl` | `/` (de NL-home blijft op `/`) |
| `/nl/diensten` | `/nl/wat-we-bouwen` |
| `/nl/diensten/software` | `/nl/nieuwe-ai-toepassing` |
| `/nl/diensten/software-vervangen` | `/nl/software-vervangen` |
| `/nl/diensten/eu-consultancy` | `/nl/eigen-beheer` |
| `/nl/diensten/consultancy` | `/nl/business-case` |
| `/nl/diensten/training` | `/nl/training` |
| `/nl/over-ons/aanpak` | `/nl/hoe-we-werken` |
| `/nl/resources` | `/nl/kennis` |
| `/nl/diensten/ai-consultancy-groningen` | `/nl/ai-bureau-groningen` |
| `/nl/diensten/incompany-ai-training` | `/nl/incompany-ai-training` |
| `/nl/diensten/ai-geletterdheid-training` | `/nl/ai-geletterdheid-training` |
| `/nl/diensten/eu-training` | `/nl/digitale-soevereiniteit` |
| `/nl/resources/eu-ai-act-compliance` | `/nl/kennis/ai-act` |
| `/nl/resources/ai-geletterdheid` | `/nl/kennis/ai-geletterdheid` |
| `/nl/resources/ai-beleid-opstellen` | `/nl/kennis/ai-beleid` |
| `/nl/resources/soevereine-ai` | `/nl/ai-op-eigen-servers` |
| `/nl/resources/europese-chatgpt-alternatieven` | `/nl/kennis/europese-alternatieven-chatgpt` (inhoudelijk een lijst, past bij B3) |
| `/nl/resources/wat-kost-ai-implementatie` | `/nl/wat-kost-ai-implementatie` |
| `/nl/resources/top-10-ai-consultancy-nederland` | `/nl/kennis/top-10-ai-bureaus` |
| `/nl/resources/ai-implementatie-mkb` | `/nl/kennis/waar-begin-je-met-ai` |
| `/nl/resources/ai-strategie-gids` | `/nl/kennis/waar-begin-je-met-ai` |

Bestaande redirects in `vercel.json` die bijwerken (anders ketens of dode ankers):

| Van | Nu naar | Wordt |
|---|---|---|
| `/nl/diensten/ai-integratie` | `/nl/diensten/software-vervangen` | `/nl/ai-integratie` |
| `/nl/diensten/digital-twins` | `/nl/diensten/software` | `/nl/digital-twin` |
| `/nl/diensten/ai-development-teams` | `/nl/diensten/software#dedicated-teams` | `/nl/extra-developers` |
| `/nl/diensten/maatwerk-ai-oplossingen` | `/nl/diensten/software` | `/nl/maatwerk-software` |
| `/nl/diensten/copilot-basics` | `/nl/diensten/training#copilot-basics` | `/nl/incompany-ai-training` |
| `/nl/diensten/ai-voor-developers` | `/nl/diensten/training#ai-voor-developers` | `/nl/incompany-ai-training` |
| overige `/nl/diensten/training#…` | anker | `/nl/training` |
| `/nl/diensten/{ai-readiness-scan, procesanalyse, opportunity-scouting, business-case-development, ai-roadmap, ai-implementatiebegeleiding}` | `/nl/diensten/consultancy#…` | `/nl/business-case` |
| `/nl/diensten/specialistische-tracks` | `/nl/diensten/software` | `/nl/nieuwe-ai-toepassing` |
| `/diensten/:path*`, `/services/:path*` | `/nl/diensten/:path*` | per pad naar de nieuwe URL (de wildcard maakt anders een keten) |

Daarnaast moeten `src/data/i18n.ts` (NL/EN-koppeling), `src/data/seo.ts` (noindex), de sitemap,
de bare-path-logica in de 404 en `public/llms.txt` de nieuwe URL's krijgen.

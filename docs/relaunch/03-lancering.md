# Relaunch: stand en lancering

Stand op 2026-10-12, branch `relaunch`. Fase 0 tot en met 7 van het bouwplan zijn gebouwd; van
fase 8 is alles klaar behalve de lancering zelf.

## Wat er staat

- **Nederlands en Engels compleet in de huisstijl:** home, 17 pillar pages per taal, 9 cases,
  19 landings, 10 kennisartikelen, De AI Storm, vacatures (4), juridische pagina's en de 404.
- **Eén layout en één bouwdoos** (`HsLayout`, `src/components/hs/`); de oude React-tree, islands,
  `BaseLayout` en `SubpageLayout` zijn verwijderd.
- **Redirects:** elke oude URL uit de oude sitemap en uit Search Console geeft een 200 of een
  bedoelde 410 (`scripts/check-redirect-parity.mjs`: 142/142 op de preview). Oude
  WordPress-posts zonder opvolger geven 410.
- **SEO-pariteit:** `scripts/check-parity.mjs` 440 van 442 op de preview; de twee resterende zijn
  `.html`-varianten die via cleanUrls op dezelfde 410 uitkomen.
- **Controles:** `npm run check` groen (0 errors, 0 warnings, geen zijstrepen), 0 dode interne
  links in beide talen, `llms.txt` en de assistent-index op de nieuwe structuur.

## Wacht op Frans

| Wat | Blokkeert | Waar |
|---|---|---|
| Voorwaarden juridisch bijwerken voor startsprint en bouw | **de lancering** | `/nl/legal/voorwaarden`, `/en/legal/terms` |
| Akkoord op de tekst van privacy (incl. nieuwe bewaartermijnen voor sollicitaties, sjabloonaanvragen en agenda-afspraken) | de lancering | `/nl/legal/privacy`, `/en/legal/privacy` |
| Akkoord op de tekst van de AI-assistentpagina | de lancering | `/nl/legal/ai-assistent` |
| Akkoord van de founders op hun bio | nee | `src/data/team.ts` |
| LinkedIn-URL's van de founders | nee | `linkedin` in `src/data/team.ts` |
| Naam basistraining (werktitel "Werken met AI" / "Working with AI") | nee | T1 |
| David bevestigt de spraaktechniek-voorbeelden op L01 (Deepgram, ElevenLabs, Mistral) | nee | `ai-klantenservice.mdx` (NL/EN) |
| Jan leest K2 na | nee | `kennis/nl/ai-geletterdheid.mdx` |
| Quotes Kwakkel, Strive en INQ22 | nee | `case-studies/*` (`quote.approved`) |
| Details Trabu, InnoEnergy en OLX | nee | `case-studies/*` |
| Foto's AI Salon-kick-off, onderwerp van de AI Storm-aflevering | nee | `src/data/salon.ts`, `src/data/campaigns.ts` |
| Eigen AI-beleid als basis voor het sjabloon (daarna `enabled: true` in `server/downloads.ts`) | nee | K3 |
| Einddatum vacatures | nee | `validThrough` in `src/data/jobs.ts` |
| DNS-record `aoplatform.backend.aiheroes.io` verwijderen | nee | registrar |

## Lanceringsdag

1. `master` in `relaunch` mergen (AI Salon-wijzigingen van de freeze meenemen) en `npm run check`.
2. Preview neerzetten en controleren:
   `VERCEL_BYPASS=<secret> node scripts/check-redirect-parity.mjs <preview>` en
   `VERCEL_BYPASS=<secret> node scripts/check-parity.mjs <preview>`.
3. Pull request `relaunch` naar `master`; na de merge deployt GitHub Actions naar productie.
4. Op productie dezelfde twee controles zonder bypass, plus een rondje desktop en mobiel.
5. In Search Console de sitemap opnieuw indienen en de belangrijkste nieuwe URL's laten indexeren.
6. Bypass-secret van de previews roteren (Vercel, project `aiheroes-website`).
7. Stil live: geen aankondiging.

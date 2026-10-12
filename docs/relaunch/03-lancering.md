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
- **Responsiveness:** elke pagina (127) op elf formaten van 320px tot 4K, inclusief foldables,
  tablets en een liggende telefoon, plus alle interacties en de chat; gevonden problemen
  opgelost (`05-responsive.md`).

## Wacht op Frans

| Wat | Blokkeert | Waar |
|---|---|---|
| Onderwerp van Alex van Ginneken (AI Salon #2); tot die tijd "Onderwerp volgt" | nee | `src/data/salon.ts` |
| Foto's AI Salon-kick-off, onderwerp van de AI Storm-aflevering | nee | `src/data/salon.ts`, `src/data/campaigns.ts` |
| Eigen AI-beleid als basis voor het sjabloon (daarna `enabled: true` in `server/downloads.ts`) | nee | K3 |
| DNS-record `aoplatform.backend.aiheroes.io` verwijderen | nee | registrar |

Afgerond op 2026-10-12: de voorwaarden zijn door de jurist goedgekeurd en staan op de site (NL en EN).
Jan heeft K2 en David de spraaktechniek-voorbeelden op L01 geaccepteerd. Frans heeft de assistent met
de hand getest en de antwoordtijd is in orde.
Uit het interview (01-besluiten §17): akkoord op privacy en de
AI-assistentpagina, founder-bio's, de naam Basistraining AI, geen einddatum voor vacatures.

## Na de lancering (todo)

| Wat | Waar |
|---|---|
| Case-verrijking: quotes Kwakkel, Strive en INQ22 (`quote.approved`) en de details van Trabu, InnoEnergy en OLX | `case-studies/*` |
| De geautomatiseerde testset van de assistent op de nieuwe positionering zetten (`evals/promptfooconfig.yaml` test nog "full-service AI-agency" en drie pijlers); deze release is met de hand getest | `npm run eval:chat` |

## Lanceringsdag

1. `master` in `relaunch` mergen (AI Salon-wijzigingen van de freeze meenemen) en `npm run check`.
2. Preview neerzetten en controleren:
   `VERCEL_BYPASS=<secret> node scripts/check-redirect-parity.mjs <preview>` en
   `VERCEL_BYPASS=<secret> node scripts/check-parity.mjs <preview>`.
3. Pull request `relaunch` naar `master`; na de merge deployt GitHub Actions naar productie.
4. Op productie dezelfde twee controles zonder bypass, plus een rondje op een echte iPhone en een
   Android-toestel (de responsiveness-audit was in Chrome-emulatie).
5. In Search Console de sitemap opnieuw indienen en de belangrijkste nieuwe URL's laten indexeren.
6. Bypass-secret van de previews roteren (Vercel, project `aiheroes-website`).
7. Stil live: geen aankondiging.

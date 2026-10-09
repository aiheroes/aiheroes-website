# Assets of the house-style experiment

Everything below lives in `public/experiment/` and `public/fonts/inter/` and is only used by `/nl/experiment/huisstijl`. Sourced 2026-10-06; cover photos 1, 2 and 4 and the case photo replaced 2026-10-07 after a search on who AI Heroes is for (operations and care organisations, not tech startups): work in real workplaces, nothing posed.

## Photos (Unsplash License: free to use, attribution appreciated)

| File | Photo | Photographer |
|---|---|---|
| `photos/cover-office.webp` | https://unsplash.com/photos/8vbYa3T367Q | Invest Europe |
| `photos/cover-screen.webp` | https://unsplash.com/photos/AH3QdofN7c8 | Invest Europe |
| `photos/cover-legacy.webp` | https://unsplash.com/photos/okgMMgpliIk | Yuheng Ouyang |
| `photos/cover-datacenter.webp` | https://unsplash.com/photos/aWslrFhs1w4 | Taylor Vick |
| `photos/case-support.webp` | https://unsplash.com/photos/RoGw9buwZBg | Vitaly Gariev |

Downloaded at 1400 to 1800px wide and converted to WebP (quality 78). The case photo (a smiling support employee with headphones at a laptop) is a stand-in; it is not someone from the client. Cover photos 1 and 2 and the case photo were picked by the team from a comparison page (2026-10-07). The client (Medux) is not named on the homepage: it works with another partner now (2026-10-07), so the case stands anonymously.

## Client logos (trademarks of their owners; use on the site cleared by the clients, see PRODUCT.md)

The page uses white SVGs in `public/experiment/logos-white/`: every fill and stroke recoloured to the house cream #FDFCF8 and the viewBox cropped to the artwork. The originals they were made from are kept, unserved, in `src/components/experiment/logo-sources/`.

| White file | Made from | Source licence |
|---|---|---|
| `umcg.svg` | https://www.umcg.nl/o/umcg-website-theme/images/desktop-umcg-logo.svg | official site asset |
| `tweede-kamer.svg` | https://www.tweedekamer.nl/themes/contrib/tk_theme/logo-white.svg (the official white version) | official site asset |
| `postcode-loterij.svg` | **traced** from the current "PL" logo PNG on postcodeloterij.nl (`new pl logo.png`, their share image); the vector on Wikipedia is the old badge | official site asset, traced with potrace |
| `envalior.svg` | **traced** from https://commons.wikimedia.org/wiki/File:Envalior_Logo.png (no SVG is published) | public domain, traced with potrace |
| `banijay.svg` | https://commons.wikimedia.org/wiki/File:Banijay_2020_logo.svg (the Banijay group logo; no Benelux SVG is published) | public domain |
| `prosus.svg` | https://commons.wikimedia.org/wiki/File:Prosus_logo.svg | public domain |
| `hanze.svg` | https://www.hanze.nl/webfiles/1783334034520/static/default/svg/logo.svg | official site asset |

The two traced files come from low-resolution PNGs: fine at logo-wall size, soft when used large. Before anything goes live, ask the clients for their own SVGs (and Banijay Benelux for its own mark).

## Icons

All icons on the page are IconPark by ByteDance (Apache License 2.0, https://github.com/bytedance/IconPark), Outline theme with square ends and mitred joins. The paths are copied from its source SVGs (`source/<Category>/<name>.svg`) into `ICONS` in `hs.ts`: Arrows/arrow-right, Arrows/arrow-right-up, Music/pause, Music/play-one, Base/hamburger-button, Character/close, Charts/chart-line, Safe/protect, Peoples/peoples, Arrows/switch. Chosen 2026-10-07 over Lucide, Phosphor, Carbon, Untitled UI, Hugeicons, Iconoir, Tabler and Heroicons as the house icon set.

## Font

`public/fonts/inter/InterVariable.woff2` is Inter 4.1 from https://github.com/rsms/inter/releases/tag/v4.1 (SIL OFL 1.1, licence next to the file). It replaces the Inter Tight and Google Fonts Inter builds on this page because those lack `cv08`, the capital I with serifs.

# AI Heroes Brand Package

Complete logo asset package. Vector-clean SVGs (pure vector, no embedded bitmaps), plus rasterized PNG/PDF/ICO outputs and pre-sized social artboards.

---

## For the webmaster — quick-start

**1. Favicons.** Copy the contents of `Icon/Favicon/` to the web root (or to `/static/favicons/`, whichever the site uses). Then add to `<head>` on every page:

```html
<!-- Light mode (default) -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="16x16"  href="/favicon-16.png">
<link rel="icon" type="image/png" sizes="32x32"  href="/favicon-32.png">
<link rel="icon" type="image/png" sizes="48x48"  href="/favicon-48.png">
<link rel="apple-touch-icon"      sizes="180x180" href="/favicon-180.png">
<link rel="icon" type="image/png" sizes="512x512" href="/favicon-512.png">

<!-- Dark mode (auto-swap based on OS theme) -->
<link rel="icon"                                 href="/favicon-white.ico"     sizes="any"     media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" sizes="16x16"  href="/favicon-white-16.png"  media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" sizes="32x32"  href="/favicon-white-32.png"  media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" sizes="48x48"  href="/favicon-white-48.png"  media="(prefers-color-scheme: dark)">
<link rel="apple-touch-icon"      sizes="180x180" href="/favicon-white-180.png" media="(prefers-color-scheme: dark)">
<link rel="icon" type="image/png" sizes="512x512" href="/favicon-white-512.png" media="(prefers-color-scheme: dark)">
```

Internal files (`_source.svg`, `_source-white.svg`) are build inputs — don't ship them.

**2. Site header logo.** Use `Logo/SVG/AIHeroes_Logo_FullColor_Transparent.svg` for light-background headers (sits on any light color). For dark-themed pages, use `Logo/SVG/AIHeroes_Logo_White_Transparent.svg` (solid light mark, reads cleanly against any dark surface).

**3. Open Graph / social preview.** Use `Social/OG-1200x630.png`:

```html
<meta property="og:image" content="https://aiheroes.io/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://aiheroes.io/og-image.png">
```

**4. Preview before deploying.** Open `_favicon_test.html` in a browser to verify the favicon and dark-mode swap locally.

---

## Folder structure

```
Brand_Package/
├── Logo/                       Horizontal wordmark (AI HEROES, ~2.22:1 aspect)
│   ├── SVG/                    8 color variants, scalable
│   ├── PNG/{512,1024,2048,4096}/   Rasterized at 4 widths
│   └── PDF/                    Print-ready vector PDFs (200mm wide)
├── Icon/                       Square mark (AIH monogram, 1:1 aspect)
│   ├── SVG/                    8 color variants, square viewBox
│   ├── PNG/{512,1024,2048,4096}/   Square PNGs, ready for profile pics
│   ├── PDF/
│   └── Favicon/                Web favicon set — see "For the webmaster" above
└── Social/                     Pre-sized artboards for social/marketing
    ├── OG-1200x630             Open Graph (Twitter/Facebook link preview)
    ├── LinkedIn-banner-1584x396
    ├── LinkedIn-profile-400x400
    ├── Profile-square-1024x1024
    ├── _logo_embed.svg         Internal build input
    └── _icon_embed.svg         Internal build input
```

Each Social artboard exists as both `.svg` (editable wrapper) and `.png` (ready to upload).

## Color variants (7 per mark)

| Variant | Background | Frame | Letters | Use case |
|---|---|---|---|---|
| `FullColor_Transparent` | none | red + gradients | dark `#1C1917` | Default for light surfaces |
| `FullColor_LightBG` | light `#FDFCF8` | red + gradients | dark | Print on light paper, web |
| `White_Transparent` | none | solid light | light | Overlay on photos, dark surfaces |
| `White_DarkBG` | dark | solid light | light | Dark surfaces, single-color reproduction |
| `White_RedBG` | red `#D9534F` | solid light | light | Training-branded materials |
| `White_BlueBG` | blue `#2563EB` | solid light | light | Consultancy-branded materials |
| `Black_Transparent` | none | solid dark | dark | B&W print, fax, embroidery, stamps |

## Brand tokens

```
Red   (Training)       #D9534F
Blue  (Consultancy)    #2563EB
Dark  (Dev / text)     #1C1917
Light (paper)          #FDFCF8
```

## Clearspace

**Unit `X = 253.334`** (height of the "H" / "I" letter). Applied as 1X padding from the visible content bounding box.

- **Logo viewBox:** 1X padding on all four sides
- **Icon viewBox:** square (1246 × 1246). 1X padding on the longer content axis, proportionally more on the shorter axis to keep the square.

Consumer rule: never place other elements inside `0.5X` of the logo edges. Prefer `1X` (already baked into the viewBox, so external elements should start at the viewBox edge).

## Centering policy

Two layers of control in the build script:

**1. `CENTER_BLEND` — base anchor.** Where the artboard center lands relative to the geometry:
- `0.0` = center the content bounding box (AI extends + frame both factor in equally)
- `1.0` = center the frame outer rectangle (AI freely extends into top-left clearspace)
- `0.5` = midpoint (current setting) — neither alone reads balanced; the midpoint does

**2. `NUDGE_X` / `NUDGE_Y` — manual fine-tune.** A small offset on top of the blend, in viewBox source units. Compensates for visual weight that geometry alone can't capture (the dark gradient pull at the bottom-right corner, the open negative space at top-left).
- Positive X = content moves right. Negative X = content moves left.
- Positive Y = content moves down. Negative Y = content moves up.
- Current: `(-13, +15)` — content shifted slightly left and down to counter the bottom-right gradient gravity.

Applied symmetrically to Logo and Icon variants. Social artboards embed the (already-positioned) mark and center the embed geometrically; LinkedIn banner is left-aligned (avatar safe zone).

## Favicon (SVG-rasterized, theme-adaptive)

Two color variants for theme-adaptive swapping:
- `favicon-{size}.png` + `favicon.ico` — colored gradient frame, dark letters (light-mode default)
- `favicon-white-{size}.png` + `favicon-white.ico` — solid white on transparent (dark-mode swap)

Sizes: `16, 32, 48, 64, 180, 512` plus the multi-res `.ico` bundle (16/32/48 inside).

**Source:** rasterized via headless Chrome from two tight-viewBox SVG sources kept in the same folder (`_source.svg` + `_source-white.svg`). Tight viewBox (`204 235 739 739`) gives maximum size with no clearspace — favicons need to read at 16px, so every pixel of the canvas counts.

See the "For the webmaster" section above for HTML integration.

## File formats — when to use what

- **SVG** — web, UI, anywhere vectors are accepted. First choice.
- **PNG 512/1024** — social posts, email signatures, Slack
- **PNG 2048/4096** — high-DPI hero images, large-format digital display
- **PDF** — print suppliers (vector-preserving; RGB color, not CMYK — for pro CMYK print, convert via Illustrator)
- **ICO** — Windows favicon, legacy browser tabs. The `favicon-{size}.png` files cover modern browsers and iOS (`180` = apple-touch-icon).

## Not included (by design)

- **EPS** — request-based only; regenerate via Illustrator if a legacy print supplier demands it
- **CMYK PDF** — needs Illustrator/pro color tooling; shipped PDFs are RGB
- **Single-color red/blue on white** — intentionally omitted; `Black_Transparent` covers single-color needs
- **Grayscale** — redundant with black/white versions

## Regenerating the package

Source geometry lives in `AIHeroes_Logo_Vector.svg` and `AIHeroes_Icon_Vector.svg` (one level up from this folder). These are hand-built, vector-perfect replacements for Illustrator's rasterized SVG exports.

To rebuild, ask Claude Code to regenerate:
1. **Phase A** (Python): generate 16 variant SVGs + 4 social wrappers + 2 favicon source SVGs (tight viewBox, no clearspace). Logo viewBox = clearspace-correct. Icon viewBox = square. Centering = `CENTER_BLEND=0.5` + `NUDGE=(-13, +15)`.
2. **Phase B** (Node + `puppeteer-core` + system Chrome): render SVG → PNG at 4 sizes + 2 variants per mark → PDF + Social wrappers → PNG + favicon PNGs at 6 sizes (color + white).
3. **Phase C** (Node + `png-to-ico`): bundle favicon 16/32/48 PNGs → multi-res `favicon.ico` (both color and white variants).

The aiheroes-internal project at `C:\Users\Frans Jorden\Projects\aiheroes-internal` has `puppeteer-core` + `@sparticuz/chromium` in its dependencies — reuse them; don't duplicate.

**Important:** the build script starts by `rmtree(Brand_Package)`. Preserve `README.md` and `_favicon_test.html` before the wipe (existing script already does this).

## Dimensions reference

| | Logo viewBox | Icon viewBox | Favicon source |
|---|---|---|---|
| Width  | 2771.268 | 1245.998 | 739.330 |
| Height | 1245.578 | 1245.998 | 739.330 |
| Aspect | 2.225 : 1 | 1 : 1 (square) | 1 : 1 |

Content bounding box within viewBox:
- Logo: x `[234, 2498.6]`, y `[255, 993.9]` — frame outer edges + AI letters poking through top-left notch
- Icon: x `[224, 923.4]`, y `[235, 974.3]` — inside the 1246×1246 square
- Favicon source: tight-fit (viewBox = content bbox, no clearspace)

## Verification checklist

Before handing off:
- [ ] Open `_favicon_test.html` in a browser. Toggle theme top-right. Confirm both light and dark favicon variants look crisp at every size.
- [ ] Open `Logo/SVG/AIHeroes_Logo_FullColor_LightBG.svg` — gradient frame, dark text, light bg.
- [ ] Open `Logo/SVG/AIHeroes_Logo_White_Transparent.svg` — solid light mark, reads cleanly on dark surfaces.
- [ ] Open `Icon/PNG/512/AIHeroes_Icon_White_RedBG.png` — 512×512, icon centered.
- [ ] Open `Social/OG-1200x630.png` — logo on light, looks good at 1200×630.
- [ ] Open `Logo/PDF/AIHeroes_Logo_FullColor_LightBG.pdf` — zoom 800%, no pixelation.

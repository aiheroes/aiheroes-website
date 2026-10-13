---
name: AI Heroes house style, web translation (experiment)
description: The deck/post house style rendered as a scrollable homepage at /nl/experiment/huisstijl; not the live site's system.
colors:
  signal-red: "#D9534F"
  build-blue: "#2563EB"
  warm-ink: "#1C1917"
  cream-paper: "#FDFCF8"
  body-on-light: "rgba(28, 25, 23, .72)"
  micro-on-light: "rgba(28, 25, 23, .62)"
  body-on-dark: "rgba(253, 252, 248, .86)"
  micro-on-dark: "rgba(253, 252, 248, .55)"
  rule-on-light: "rgba(28, 25, 23, .16)"
  rule-on-dark: "rgba(253, 252, 248, .18)"
  grid-hair: "rgba(28, 25, 23, .09)"
  panel-edge: "rgba(28, 25, 23, .22)"
typography:
  display-cover:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 0.6rem + 5vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.025em"
    fontFeature: "'cv08'"
  display-cover-long:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(2rem, 0.5rem + 4.1vw, 6.25rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontFeature: "'cv08'"
  display-l:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 0.8rem + 5vw, 7rem)"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontFeature: "'cv08'"
  display-m:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.125rem, min(0.75rem + 4.4vw, 1rem + 6svh), 6rem)"
    fontWeight: 800
    lineHeight: 1.03
    letterSpacing: "-0.025em"
    fontFeature: "'cv08'"
  entry-title:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1rem + 1.7vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  stat:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.2rem + 4.4vw, 7rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "'cv08', 'tnum'"
  title:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 0.95rem + 1.2vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.018em"
  quote-lead:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, min(0.8rem + 1.3vw, 0.3rem + 2.8svh), 2.375rem)"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-0.02em"
  quote:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1rem + 0.35vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body-l:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 0.92rem + 0.7vw, 1.75rem)"
    fontWeight: 450
    lineHeight: 1.4
  body:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.94rem + 0.22vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.3
  micro:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.45
  button:
    fontFamily: "Inter HS, Inter, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.1
rounded:
  none: "0"
  field: "2px"
  control: "4px"
spacing:
  module: "clamp(24px, 6.25vw, 120px)"
  pad-x: "max(1.25rem, var(--module), calc((100vw - 105rem) / 2))"
  sec-y: "max(64px, calc(var(--module) * 1.5))"
  slide-y: "clamp(36px, 6svh, 88px)"
  slide-gap: "clamp(24px, 4.4svh, 60px)"
  nav-h: "64px"
  nav-h-wide: "76px"
components:
  button-dark:
    backgroundColor: "{colors.warm-ink}"
    textColor: "{colors.cream-paper}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "56px"
  button-dark-hover:
    backgroundColor: "{colors.cream-paper}"
    textColor: "{colors.warm-ink}"
  button-light:
    backgroundColor: "{colors.cream-paper}"
    textColor: "{colors.warm-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "56px"
  button-light-hover:
    backgroundColor: "{colors.warm-ink}"
    textColor: "{colors.cream-paper}"
  button-small:
    rounded: "{rounded.control}"
    padding: "0 1.125rem"
    height: "44px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.warm-ink}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
    height: "52px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.warm-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.field}"
    padding: "0 16px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.warm-ink}"
    textColor: "{colors.cream-paper}"
  nav-bar:
    backgroundColor: "{colors.cream-paper}"
    textColor: "{colors.warm-ink}"
    height: "{spacing.nav-h}"
  nav-brand-tile:
    backgroundColor: "{colors.warm-ink}"
    rounded: "{rounded.none}"
    size: "{spacing.nav-h}"
  entry-plane:
    textColor: "{colors.cream-paper}"
    rounded: "{rounded.none}"
    padding: "clamp(20px, 2.1vw, 40px)"
  cover-square:
    backgroundColor: "{colors.cream-paper}"
    rounded: "{rounded.none}"
  footer-square:
    backgroundColor: "{colors.cream-paper}"
    rounded: "{rounded.none}"
    size: "clamp(220px, 23vw, 380px)"
---

<!--
Recorded from the built code on 2026-10-06 (src/pages/nl/experiment/huisstijl.astro,
src/components/experiment/*.astro, hs.ts, hs-client.ts, src/styles/huisstijl.css).
This file replaces an earlier DESIGN.md that described a later, since reverted round
(scroll pinning, hide-on-scroll nav, unfold effect, an offer square on the cover). None of
those exist in the code; where this file and the code disagree, the code wins.
-->

# Design System: AI Heroes house style, web translation (experiment)

> **Scope.** This documents the experiment's web translation of the AI Heroes house style at `/nl/experiment/huisstijl` (noindex, NL only). The canonical rule sources are `aiheroes-present/template/DESIGN.md` (presentatietemplate 2.0) and `aiheroes-hub/docs/posttaal.md`. It is not yet the live site's design system; the live homepage is untouched. Asset provenance lives in `ASSETS.md` next to this file.

## Overview

**Creative North Star: "The Deck You Scroll"**

Every section is one slide class from the deck template or one post preset, stacked vertically: the L01 cover with a photo panel, the entries as a strip of colour fields (post "merkkaart"), L21 quotes on dark with an L15 logo wall, the "Bij elke bouw inbegrepen" poster on blue, the klantcase in numbers, the L09 place photo, a dark statement slide, the L17 contact offer and a closing footer slide. At 1024px and wider each section is literally a slide: at least one viewport tall below the nav, content centred vertically, with proximity scroll snapping between them. There is no scroll pinning and no scroll-driven choreography: sections build up once as they enter and then hold still.

The page is paced, not wall-to-wall colour. Red and blue appear as whole fields in three places only: the cover zone, the blue field of the standard and the contact zone; between them cream and warm-ink slides alternate and colour returns as accent (the three entry planes, red quote marks, the first case figure in red, the blue Groningen claim, the slogan's initials A and I in red). One family, Inter 4.1 variable with optical sizing and the serifed capital I (`cv08`), carries the whole voice through weight: 800 for display, 700 for titles and figures, 600 for actions and labels, 450 for lede, 400 for body and the clients' own words. Surfaces are flat: no gradients, no drop shadows, no glow. Rules and outlines are drawn as 1.5px inset strokes.

Density is low: one heading, one supporting paragraph, one action per slide. Photos never carry text: colour photos sit beside the cover headline, people are duotoned, the real place stays in colour. The cream square, the brand's signature geometry, appears twice: as the cover square holding the full-colour wordmark and as the footer square holding it again. The nav carries the white wordmark on a dark block.

**Key Characteristics:**
- Four colours; red and blue as whole fields only on the cover zone and the contact zone.
- Cream and warm-ink slides in between, colour as accent only.
- One family: Inter 4.1 variable, optical sizing on, `cv08` always on.
- One module = 1/16 of the viewport (`clamp(1.5rem, 6.25vw, 7.5rem)`); side padding is one module. All lengths are in rem; above 1920px the root font size is `max(100%, min(100vw / 120, 100vh / 67.5))`, so the page scales like a deck slide by the smaller of width and height against a 1920 x 1080 canvas: a 3840 x 2160 screen shows the 1920 layout at twice the size, an ultrawide 3440 x 1440 scales by its height (1.33x) and keeps the content in a centred measure with room on both sides.
- One viewport per section at 1024px and up, headings scaled by viewport height, with a compaction layer below 840px tall.
- Blueprint grid only behind a light zone with little text; no slide uses it at the moment.
- The square: wordmark square on the cover and in the footer.
- One icon set everywhere: IconPark Outline (Apache 2.0) on its 48 grid, stroke 4, square ends, mitred joins, drawn inline so each path can draw itself.
- Motion builds each section up once; reduced motion switches every transition, animation and the snap off, except the cover's clock (see Cover).

## Colors

Four flat brand colours plus a set of alpha tints of ink and cream for text, rules and hairlines.

### Primary
- **Signal Red** (`signal-red`): the default cover field and the first of the three entry planes; also the quote marks, the first case figure and the slogan's stacked initials A and I on the statement slide. Its duotone (`#hs-duo-red`) renders the case photo.

### Secondary
- **Build Blue** (`build-blue`): the alternate cover field (slides two and four, reached by a tab click), the second entry plane, the blue field of the standard, the contact zone field and the Groningen claim line. Its duotone filter (`#hs-duo-blue`) is defined but currently unused.

### Neutral
- **Warm Ink** (`warm-ink`): all text on light, the dark slides (quotes, case, statement, footer), the cover's lower band, the third entry plane, the nav brand block, the mobile menu, selected chips, the dark button, the focus ring on light and the scrollbar thumb.
- **Cream Paper** (`cream-paper`): the page ground, light slides, the squares, the light button, text on every colour field and the recoloured client logos.
- **Body on light / on dark** (`body-on-light`, `body-on-dark`): paragraph text; full ink or full cream is kept for headings, names and figures.
- **Micro on light / on dark** (`micro-on-light`, `micro-on-dark`): placeholders, captions' second line, footer column headings, legal line, inactive cover tabs.
- **Rule on light / on dark** (`rule-on-light`, `rule-on-dark`): the nav's bottom rule, link underlines at rest, the logo-wall and footer-legal top rules, the cover progress tracks.
- **Grid Hair** (`grid-hair`): the 1px blueprint grid lines.
- **Panel Edge** (`panel-edge`): the 1.5px outline of inputs and unselected chips.

### Named Rules
**The Two Fields Rule.** Red and blue fill a whole zone only on the cover and on the contact zone. Everywhere else they are accents on cream or ink.

**The Rotation Keeps The Field Rule.** Auto-rotation of the cover changes words, subline and photo inside one colour field; only a visitor's tab choice changes the field, by wiping the new colour in from the left (720ms).

**The Cream Text Rule.** Text on red, blue or ink is cream; paragraph copy on dark uses the 86% tint, never a grey.

## Typography

**Display Font:** Inter HS (Inter 4.1 variable, self-hosted `/fonts/inter/InterVariable.woff2`, weights 100 to 900), with `Inter, system-ui, sans-serif`
**Body Font:** the same family; optical sizing gives the display cut at large sizes

**Character:** One family speaking at five weights. Headings are tight and heavy (800, -0.025em, line-height about 1), body is open (1.55), and the clients' quotes are in regular 400 so they sound unlike our headings.

### Hierarchy
- **Display, cover** (`display-cover`, max-width 11em): the rotating cover headline. Headlines over 40 characters step down to `display-cover-long`, the deck's length ladder.
- **Display L** (`display-l`): the statement slide's slogan only, capped at 9.2vw so "tot Implementatie" fits a phone.
- **Display M** (`display-m`): every section heading. At 1024px and up its size is the minimum of a width term and a height term, so a slide fits a 768px-tall laptop. The contact heading uses its own smaller variant (up to 4.75rem, max 12ch).
- **Entry title** (`entry-title`, max 12ch): the title inside each colour plane.
- **Stat** (`stat`, tabular figures): the case figures; 3rem in a single column below 560px.
- **Title** (`title`): the contact "meet us" heading. The four lines of the standard take the same 700 weight at poster size.
- **Quote lead / quote** (`quote-lead`, `quote`): the lead testimonial and the other five; weight 400, `text-wrap: pretty`.
- **Body L** (`body-l`): section ledes, the case lede, the Groningen claim. The statement lede and footer tagline are close siblings (450, about 1.35 to 1.4).
- **Body** (`body`, 40 to 56ch measures): paragraphs.
- **Label** (`label`): form labels and legends, chip text, person names, figcaption names.
- **Micro** (`micro`): the legal line; the cover tab labels run at 0.8125rem 500.

### Named Rules
**The 800 Rule.** Weight 800 is for display only: the cover headline, section headings and the slogan (plus the red opening quote mark). Titles and figures stop at 700.

**The One Punch Rule.** A headline carries at most one emphasised word, a no-wrap `.punch` span; the copy may mark two, the build keeps one.

**The Pixel Frame Rule.** The wordmark's frame bars (46.66 of 2771 viewBox units) are drawn with `shape-rendering: crispEdges` (HsLogo), and every logo width snaps to a multiple of `--logo-step` (59.39px divided by the device pixel ratio, set per `min-resolution`), so the frame is a whole number of device pixels and all four sides render equally thick (nav 2px, cover square 4px at 1x). Without this, a 1.5px frame lands on different pixel fractions per side and looks heavier top-left.

**The Typesetter Rule.** Every text passes through `zet()` (hs.ts), which sets Dutch line breaks with non-breaking spaces and hyphens. A line never ends on an article or possessive ("de", "een", "je") or on another function word ("met", "vanaf", "en"); numbers stay with their neighbour ("artikel 4", "9723 JJ Groningen"); fixed combinations stay whole ("AI Act", "elke dag", "Europese partij"); the tail of a sentence or clause and the last two words of a block stay together; a short sentence in running text does not break; the first word of a sentence or clause stays with the next word; a short verb or pronoun leans on the word before it ("beter kan", "voldoe je"); "AI-" and short compounds ("hands-on", "4-16") never split at the hyphen. Each glued group has a maximum length per column (display 18, running text 26, narrower where the column is narrow: entry titles 12, spec titles 14, person hints 13, the lead quote 14); when a group is too long its weakest bond opens first. A few display lines are hand-set (`HAND_SET`, `" | "` marks the only allowed breaks), as is the case lede. On top of that, paragraphs use `text-wrap: pretty` and headings, ledes, hints and footer links `text-wrap: balance`. Checked for overflow at 320, 390, 768, 1024 and 1440px.

**The Punch Colour Rule.** From 640px wide the punch takes its colour from the background: red on light, paper and dark, ink on a red or blue field (`.hs .punch` in huisstijl.css; covers set the same per zone). On phones (below 640px) it keeps the heading colour, because a coloured word is too hard to read at that size; a long cover headline still gives it its own line (decision 2026-10-12, after launch). A long cover headline also gives its punch its own line.

**The Serifed I Rule.** `cv08` is always on, so "AI" never reads as "Al". Do not swap in a build of Inter that lacks it.

## Layout

The module is 1/16 of the viewport (`module`). Side padding `pad-x` is one module, never under 1.25rem, measured from the viewport so the cover, the band and every section share one left edge. Above 1920px the whole page scales with the root font size (by width or height, whichever is smaller), and on ultrawide screens the 105rem measure keeps the content centred with breathing room. Mobile and tablet sections use `sec-y` vertical padding.

**One viewport per section (1024px and up).** Every main section carries the snap class: min-height `calc(100svh - nav-h)`, content centred in a flex column, vertical padding `slide-y` and internal gaps `slide-gap`, both scaled by viewport height. The html element snaps with `scroll-snap-type: y proximity` and a 76px scroll padding; the footer is not a snap target. A compaction layer at `max-height: 840px` squares the people photos, tightens form and contact gaps to 16px, shrinks chips to 36px and closes up the logo wall.

**Section grids.** Cover: below 900px a single stack (photo at 16/10, colour zone, band); from 900px a two-row grid with the colour zone left, the photo spanning right, and below them the dark band beside the cream square, where the square's width equals the band's height (`--band`, `clamp(240px, 32svh, 340px)`; 38svh between 900 and 1199px). Entries: heading row 8fr/6fr, planes in three equal columns from 900px. Quotes: one column, two from 720px (lead spans the row up to 1199px), an even 3 x 2 grid from 1200px with the lead quote first and larger. Standard: one column; each line is icon auto and text 1fr, the icon on the first line. Case: text 7fr, photo 5fr on the right. Place: photo 45fr, text 55fr. Contact: zone 5fr, form 7fr from 1024px. Footer: body plus a square column `clamp(220px, 23vw, 380px)` from 900px; a 112px square above the body on mobile.

**Breakpoints observed:** 520, 560, 720, 768 (nav height 64 to 76px), 900 (most two-column splits), 1024 (slides, contact split), 1100 (desktop nav), 1200 (3-column quotes, one-row logo wall), max-height 840 (compaction).

### Named Rules
**The Slide Fits Rule.** At 1024px and up a section must fit one viewport below the nav on a 768px-tall screen; headings scale with `svh`, and short screens get the 840px compaction layer rather than a scroll inside the slide.

**The Grid Or Rules Rule.** The blueprint grid never sits behind running text or row dividers, and only on a light zone with little text; no slide uses it at the moment.

## Elevation & Depth

Flat. There is no drop shadow anywhere. Every `box-shadow` in the build is an inset stroke used as a border: the nav's 1.5px bottom rule, the cover square's 1.5px ink bottom rule, the logo-wall and legal top rules, input and chip outlines, and the 1.5px ring a button gains on hover. Depth comes from colour fields abutting edge to edge and from the photo panels.

### Named Rules
**The Inset Stroke Rule.** Lines are 1.5px inset strokes (2px for a focused input), never offset or blurred shadows.

## Shapes

Hard rectangles. Colour zones, photo panels, entry planes, squares and the nav brand block have no radius. Only interactive controls soften: buttons and the cover pause button at 4px, inputs and chips at 2px. The square is the recurring silhouette (cover square at band height, footer square). The person photos are unframed at 3/4 (1/1 on short screens).

## Components

### Buttons
Solid, full-contrast slabs that invert on hover.
- **Shape:** gently squared (4px), min-height 56px, padding 0 1.5rem; small variant 44px, used in the nav.
- **Dark:** ink with cream text, on light ground (nav CTA, form submit). **Light:** cream with ink text, on dark or colour ground (cover band CTA, mobile menu).
- **Hover / Focus:** background and text swap and a 1.5px inset ring in the original colour appears (150ms); a trailing arrow icon slides 4px right. Focus is a 2px outline offset 3px, ink on light and cream on dark/colour zones.

### Text links
Weight 600, 1.5px underline offset 0.3em at 35% of currentColor, full colour on hover; a trailing arrow slides 4px. Used for "Lees de hele case", the place CTA and the mobile menu's language link. Contact mail and phone are larger (up to 1.5rem) with the same treatment.

### Chips
Radio chips for topic, budget and ownership. 44px tall, 2px radius, 1.5px `panel-edge` inset outline, label type. Hover darkens the outline to ink; checked fills ink with cream text. Compacted to 40px (and 36px under 840px tall) at desktop.

### Inputs / Fields
Transparent field, 1.5px `panel-edge` inset outline, 2px radius, min-height 52px, padding 14px 16px, 400 1rem text. Hover outline goes to the micro tint, focus to a 2px ink outline with no browser ring. Labels sit above in label type. Textarea 140px (96px at desktop). The form is visual only: submit shows a status line and posts nothing.

### Navigation
- **Bar:** one cream bar, 64px (76px from 768px), with a 1.5px `rule-on-light` bottom rule. Fixed at the top (the page reserves its height with padding); it is there at the top of the page, moves out of the way (translateY(-100%), 300ms) while scrolling down and slides back in as soon as the visitor scrolls up. The direction comes from wheel, touch and keys, so a scroll snap settling onto a slide does not summon it. It stays while the mobile menu is open or focus is inside.
- **Brand block:** warm ink at the bar's height, running in from the left edge with `pad-x` as its left padding, so the white wordmark (1.18 x the bar height wide) starts on the content column; 0.36 x the bar height of padding on its right.
- **Links:** Inter 600 1rem, a 2px currentColor underline that scales in from the left on hover (300ms). From 1100px the four links, the EN switch (body tint, ink on hover) and the small dark CTA show; below it a "Menu" button opens a full-height ink panel under the bar with 700-weight links up to 3rem, a light CTA and an English link. Escape closes it and returns focus; page scroll locks while open. The order is Wat we bouwen, Hoe we werken, Over ons, Cases.
- **Sub-menu bar:** from 1100px, hovering (after a 90ms pause) or focusing a link with sub-pages drops a full-width bar, one line high (3.5rem), under the menu: a flat plane in red (Wat we bouwen), blue (Hoe we werken) or ink (Over ons), without a rule; it may run into a section of the same colour, such as the red cover, and that is accepted; its sub-pages in 700 at 19px (large text, so cream on red passes contrast), right-aligned on the menu's right edge on every screen. Each label says what a visitor who knows nothing of AI Heroes gets when clicking ("Eerste stap: de startsprint", "Kosten en opbrengst vooraf", "Software op je eigen servers"); the three entry planes on the page carry the same names. The open link keeps its underline. It drops in with a clip from the top (220ms); moving to another link keeps it open and wipes the next colour in from the left (300ms). It closes 260ms after the pointer leaves the menu, on a link without sub-pages, on Escape (focus back to the link), when focus leaves and when the page scrolls down. On touch the first tap opens a bar, the second follows the link. Below 1100px the menu panel lists the sub-pages under each link, one per line.

### Cover (signature)
Colour zone (red default, blue by choice) with the headline bottom-aligned, the photo panel beside it, the ink band below with subline, light CTA and four progress tabs, and the cream square holding the full-colour wordmark at 74% width, closed by a 1.5px ink bottom rule because the next section is cream too. The first slide leads with the core line. Each tab's 3px track fills over 7s and the end of the fill advances the slide; hover, focus, a hidden tab and the pause button pause it. Headline and subline crossfade (500ms after a 280ms delay, 10px rise), photos crossfade over 800ms. Arrow keys move between tabs. Below 520px the tab labels are visually hidden and only the tracks remain. With reduced motion the clock keeps running: the tracks still fill and advance the slides, which fade in place (200ms out, 400ms in, no rise; photos 600ms), a chosen colour switches without the wipe, and the pause button stays (decision 2026-10-13). The fill is a timer, not movement; stopping it left a full, frozen bar and only the first of four slides.

### Entry planes (signature)
Three linked colour planes in red, blue and ink, at least three modules tall (`clamp(150px, 23svh, 270px)` at desktop), with the title bottom-left and an up-right arrow top-right that nudges 4px on hover. Text and an underlined "more" action sit below on cream. On entry the planes grow from the bottom (600ms, 90ms stagger) before their content fades in.

### Quotes and logo wall (signature)
On ink: six testimonials, the lead quote first in `quote-lead` cream, the others in `quote` at the body-on-dark tint, each with an 800-weight red opening quote mark hung in the left gutter. Names in 600, roles in the micro tint. Below a 1.5px `rule-on-dark` top rule, seven client logos as cream SVGs straight on the dark field, heights set per logo for optical balance (22 to 42px), 88% opacity to 100% on hover, one row from 1200px and scaled to 82% / 74% below.

### Standard poster
A flat blue field (no grid, no rules). The heading "Bij elke bouw inbegrepen" sits small above (600, 1.125 to 1.75rem); below it the four things every build includes as large cream lines in 700 (1.75 to 5.5rem; from 1024px sized by min(.5rem + 4vw, 7.2svh) so each stays on one line and the slide fits), each a cream label as wide as its text with the text in blue (5.2:1; when a line wraps on phones the plane holds both lines as one block), its IconPark line icon in front in cream at .72em (chart-line, protect, peoples, switch). Squares around the icons were tried and dropped (2026-10-07). Only the titles; the descriptions live on the services pages. On phones the longer lines wrap to two, balanced. On entry the lines fade up 110ms apart, each label wipes in from the left like a marker stroke, plane and text together (500ms, 140ms apart), and its icon then draws its strokes (700ms); the slide stands after about 1.5s. Time-based on entry, never tied to the scroll position.

### Case in numbers
On ink: heading, cream lede, three figures over labels (the first in red), a paragraph and a text link; the duotone-red photo on the right. Figures count up from zero over 800ms (cubic ease-out) when the slide enters; the server-rendered text is the final value.

### Statement
A dark slide: the "how" paragraph as a 450-weight lede at the body-on-dark tint, then the slogan as "Van A / tot I" in `display-l`: a two-column grid with the lead words right-aligned, so the red initials A and I stack and read AI. The rows never wrap, so nothing reflows. With JavaScript, as soon as the slogan enters the screen (plays once, time-based, the scroll is never held) the letters after each initial rise into focus one by one: opacity, 0.16em rise and a 6px blur clearing over about 0.55s, 34ms apart, "mbitie" from 0.25s and "mplementatie" from 0.65s; the whole line stands after about 1.4s. The initials keep their capitals because they form the AI column. Without JavaScript or with reduced motion the full slogan stands.

### Contact (L17)
Blue zone with the heading, a lede, direct mail and phone links and three people cards with unframed black-and-white portraits, the deck's L24 "mono" treatment (`grayscale(1) contrast(1.08)`), so they stand apart from the blue (photo zooms to 1.04 on hover, name underlines) beside the cream form.

**Every page has the right door (decision 2026-10-13).** The start sprint is the door for visitors who are ready to build; `HsPageCover`'s default button ("Plan een startsprint") is only for those pages. A page for visitors who are not ready yet sets its own cover button (usually to `#contact`) and an `HsContact intent`: `verkenning` (business case), `kennismaking` (team, campaigns), `ai-act-check` (compliance), `training`, `developers` (extra developers). The intent adds and preselects its chip and swaps the ask and the question, so the form never asks "Wat wil je bouwen?" of someone who is not there yet. A "nog niet" link never leads to a page whose main button sends the visitor back to the start sprint.

### Footer
Ink band with a 450 tagline, four link columns (headings in 600 0.875rem micro tint, links at body tint turning cream and underlined on hover), a legal line above a 1.5px rule, and the cream square with the full-colour wordmark at 78%, aligned to the bottom right.

### Duotone people
SVG filter "C2 drieklank licht": desaturate, gamma lift 0.8, then map luminance onto dark accent, accent, cream. Applied with `contrast(1.05)`; red for the homepage case photo, blue for the contact people. Case stand-in photos (tiles and case covers) take the colour of the case's first entry: red or blue duotone, black and white for Lokaal AI draaien (decision 2026-10-12). The cover photos and the place photo stay in colour. The AI Salon speaker portraits are black and white without duotone (`grayscale(1)`, decision 2026-10-12).

## Do's and Don'ts

### Do:
- **Do** keep whole red or blue fields to the cover zone and the contact zone; use colour as accent everywhere else.
- **Do** set every heading in Inter HS with `cv08` on, 800 for display and 700 for titles and figures.
- **Do** keep at most one punch word per headline, coloured from 640px wide (red on light, paper and dark, ink on a red or blue field), plain on phones.
- **Do** size side padding in modules (`pad-x`) and keep each desktop section to one viewport, scaling headings with `svh`.
- **Do** draw rules and outlines as 1.5px inset strokes in the rule or panel-edge tints.
- **Do** keep text off photos; duotone people, keep places and cover scenes in colour.
- **Do** use the square: nav brand tile at bar height, wordmark squares on the cover and in the footer.
- **Do** build a section up once on entry and give every motion a reduced-motion fallback that shows the final state (the cover's clock is the one exception).

### Don't:
- **Don't** use drop shadows, gradients or glows; depth is colour fields and photos.
- **Don't** round colour zones, photos, planes or squares; radius belongs to controls only (2px, 4px).
- **Don't** put a label or kicker above a heading; emphasis comes from the punch, weight and size.
- **Don't** add scroll pinning, scroll-driven unfolding or a hide-on-scroll nav; sections hold still once built.
- **Don't** let auto-rotation change the cover's colour field; only a visitor's choice does.
- **Don't** use the blueprint grid behind long text or combine it with row dividers.
- **Don't** rely on the nav staying on screen while the global `overflow-x: hidden` on html and body remains; it scrolls away in practice.

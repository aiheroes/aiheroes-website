# Hosted presentation

`https://aiheroes.io/deck` serves the English SME pitch v6 (12 slides), dated
9 October 2026. It opens in scroll mode, reflows on phones, and retains the
original presentation controls: P to present, arrows to navigate, F for full
screen, S for notes, and Escape to exit.

The page uses the self-contained HTML export from the `aiheroes-present` repo:
`events/2026-10-09-sme-pitch-v6/dist/aiheroes-sme-pitch-v6.html`. Fonts, images,
icons, styles and the presentation runtime are embedded. No source-repo files
or local server are required after deployment.

To update it, rebuild the export in `aiheroes-present`, then copy it to
`src/assets/deck/sme-pitch-v6.html`. Keep that generated file unchanged. Copy
the event's `assets/LICENSE-TWEMOJI.txt` alongside it. The closing slide retains
the Twemoji attribution; the included license is CC BY 4.0.

`src/pages/deck.astro` adds hosting metadata and serves the full document without
site chrome. The edition-specific pitch is noindexed and excluded from the
sitemap. It is not linked in the main navigation.

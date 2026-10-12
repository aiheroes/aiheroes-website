# Relaunch: responsiveness-audit

Stand op 2026-10-12, branch `relaunch`, gemeten op de productie-build (`npm run build` +
`astro preview`). Elke pagina van de site (127) op elf formaten, plus de interacties en de chat.

## Formaten

| Naam | CSS-pixels | Dichtheid | Touch | Staat voor |
|---|---|---|---|---|
| phone-320 | 320 × 640 | 2 | ja | kleinste telefoon (iPhone SE 1) |
| fold-cover | 344 × 882 | 3 | ja | foldable dicht (Galaxy Z Fold, buitenscherm) |
| phone-390 | 390 × 844 | 3 | ja | gangbare telefoon |
| phone-land | 844 × 390 | 3 | ja | telefoon liggend |
| tablet-port | 820 × 1180 | 2 | ja | tablet staand |
| fold-open | 884 × 1104 | 2 | ja | foldable open |
| tablet-land | 1180 × 820 | 2 | ja | tablet liggend (krijgt het desktopmenu) |
| laptop | 1366 × 768 | 1 | nee | lage laptop |
| desktop | 1920 × 1080 | 1 | nee | desktop |
| qhd | 2560 × 1440 | 1 | nee | groot scherm |
| 4k | 3840 × 2160 | 1 | nee | 4K op 100 % |

## Wat er per pagina gemeten is

Na het doorscrollen van de hele pagina (zodat elke reveal gespeeld heeft):

- zijwaarts scrollen van de pagina, en elementen die buiten het scherm uitsteken;
- tekst die uit zijn vak loopt of wordt afgesneden (ook inline tekst en links);
- tekst die over andere tekst valt;
- tekst kleiner dan 12px;
- tikdoelen kleiner dan 24 × 24px op touch (WCAG 2.5.8), behalve links midden in een zin;
- kapotte beelden, en foto's die meer dan 1,35× worden opgeschaald (wazig op dat scherm);
- regels langer dan circa 95 tekens;
- consolefouten en een ontbrekende h1.

## Interacties (op alle elf formaten)

Menu openen en sluiten (ook met Escape, en de chatknop wijkt), het submenu vanaf 1100px (muis
en touch), de balk die verdwijnt bij naar beneden scrollen en terugkomt bij omhoog (wiel en
echte veegbewegingen), cover-tabs en pauze, contactformulier leeg versturen (melding en
gemarkeerde velden, chips, geen iOS-zoom), sollicitatieformulier, FAQ, filters, taalwissel,
de skip-link, kale paden (`/over-ons`, `/about`, `/ai-salon`) en de AI Salon-embeds.
Formulieren zijn alleen leeg verstuurd; er is geen echte mail verstuurd.

De chat op alle formaten zonder backend: de knop, het lege paneel en een nagebootst gesprek
met paginakaart, boekingskaart, bron en doorstuurformulier; het paneel past, het invoerveld is
bereikbaar, sluiten en "Verder met je gesprek" werken.

## Gevonden en opgelost

| Probleem | Waar | Oplossing |
|---|---|---|
| Kop met een accent van meerdere woorden liep uit zijn vak ("What does AI implementation cost?") | CTA-banden, alle formaten | `display()` laat de zetter een accent van meerdere woorden als één woord meten |
| Covertitels liepen 3 tot 42px uit op 320 en 344px (26 pagina's) | pagina-covers | minimale lettergrootte schaalt onder 390px mee met de schermbreedte |
| Kerncijfer met een woord ("Certificate") liep in de volgende kolom | cijferrijen, 820 tot 1180px | het cijfer krimpt tot het langste woord in de kolom past |
| Labels onder de covercijfers liepen uit ("to a working prototype") | pagina-covers, 390px | eerder afbreken |
| Footerkolommen liepen in elkaar en werden rechts afgesneden | footer, 320 en 344px | footerlinks mogen eerder afbreken; "AI-geletterdheids­training" met zacht afbreekstreepje |
| Woord van 37 tekens liep uit | kennisartikel AI en de AVG | zachte afbreekstreepjes |
| Tabellen op telefoons: kolommen van een paar woorden breed, derde kolom half zichtbaar | kennisartikelen | kolommen houden een minimumbreedte, de tabel scrolt zijwaarts |
| Coverfoto hoger dan het scherm bij een liggende telefoon | home en pagina-covers | foto begrensd tot 55 % van de schermhoogte |
| Tikdoelen te klein: taalknop (22px breed), footer-, kruimelpad-, auteur- en inhoudsopgavelinks (17 tot 23px hoog), toestemmingsvinkje (18px) | overal op touch | groter tikvlak zonder dat er iets verschuift; vinkje 24px |
| Menu-knop bleef "Menu" zeggen als het menu open was | mobiel menu | "✕ Sluiten" / "✕ Close", zonder dat de knop van breedte verandert |
| Navigatiebalk bleef staan na een tik op het menu | alle touch-formaten | alleen toetsenbordfocus houdt de balk nog vast |
| Bij een onvolledig formulier was de melding op telefoons buiten beeld | contact en sollicitatie | lege en foute velden krijgen een rode rand, tot je ze aanpast |
| Foto's tot 2,5× opgeschaald op 4K en schermen met hoge dichtheid | covers, case | varianten van 900 en 2800px naast de bestaande, via `srcset` |
| Chatkop brak over twee regels | chat, 320px | compacter onder 360px |
| Sectiekoppen en casetekst liepen tot 32px over de schermrand ("From WooCommerce" vastgelijmd) | 320 en 344px | koptekstmaten (`hs-d-l`, `hs-d-m`, `hs-d-s`, homepagecover) schalen onder 390px mee |
| Knoppen die niet mochten afbreken duwden hun kolom te breed ("Plan een gesprek met David", "Vraag ISO 42001-begeleiding aan") | teampagina 320px, artikelen op tablet liggend | een knop blijft op één regel zolang hij past en breekt pas af als hij breder is dan zijn kolom |
| Artikelcover te breed: "informatiebeveiliging" en vastgelijmde groepen in het korte antwoord | kennisartikelen, 320 en 344px | titelmaat schaalt mee, zacht afbreekstreepje in de titel (meta-tags laten het weg), het korte antwoord breekt eerder |
| "verwerkingsverantwoordelijke" (28 tekens) liep uit een notitieblok | kennisartikel AI en de AVG, 320px | zacht afbreekstreepje |

## Bewust zo gelaten

- **Covers op lage schermen.** Op 320 × 640 en een liggende telefoon staan de cover-tabs en de
  pauzeknop onder de vouw; ze zijn er na een korte scroll. De cover vult op telefoons meer dan
  één scherm, zoals in het goedgekeurde homepage-ontwerp.
- **Oprichtersportretten en de Groningen-foto** worden licht opgeschaald op tablets (1,47×).
  Ze worden vervangen door de eigen fotoshoot (`04-fotoshoot.md`): lever die foto's aan op
  minstens 2000px breed.
- **INQ22-screenshot** (1440px) wordt op 4K 1,56× opgeschaald; alleen op 4K bij 100 %.
- **`/deck`** (Davids deck) valt buiten de huisstijl en buiten deze audit.
- **Privacy (EN), 320px:** "We comply with the GDPR." steekt 4px in de marge; onzichtbaar.
- **Tablet liggend (1180px):** in een paar tweekoloms secties (kaarten, Groningen, case) is het
  vak van een kop 6 tot 8px breder dan zijn kolom; het valt in de binnenmarge, de tekst zelf past.
  Op de homepage is het vak van de coverkop 23px breder doordat de vier slides één cel delen;
  de zichtbare kop past ruim.
- **Meetkanttekening:** headless Chrome op deze laptop meldt `pointer: coarse`, dus de grotere
  tikvlakken gelden ook in de desktopmetingen; de 8px "overlap" tussen auteursnaam en datum op
  QHD en 4K is dat onzichtbare tikvlak, niet de tekst. Echte iOS Safari en Samsung Internet zijn
  niet getest; de site gebruikt `svh`/`dvh` en `safe-area-inset`, dus daar wordt hetzelfde
  verwacht.

## Eindstand

- **Pagina's:** 127 pagina's × 11 formaten = 1.397 metingen. Nergens zijwaarts scrollen, geen
  element over de schermrand, geen afgesneden tekst, geen tekst onder 12px, geen tikdoel onder
  24px, geen kapot beeld, geen consolefout, elke pagina een h1. Na de laatste fixes opnieuw
  gemeten op alle kennisartikelen, de teampagina's en vier regressiepagina's (320, 344, 390,
  tablet liggend, desktop): niets meer over de schermrand.
- **Interacties:** 22 tests per formaat, alle formaten geslaagd. Twee eenmalige fouten onder
  zware parallelle belasting (menu op 390px, submenu op desktop) slaagden los herhaald (37/37).
- **Chat:** 55 controles over 11 formaten, 0 fout.
- **Typecheck:** `npm run check` groen.

## Opnieuw draaien

De scripts staan niet in de repo (ze sturen een lokale Chrome aan via CDP). Werkwijze: bouwen,
`npx astro preview --port 4325`, en per formaat de pagina's langs met de controles hierboven.
Bij twijfel: bekijk het op de productie-build, niet op de dev-server (zie het `.html`-verschil in
`langOf()`).

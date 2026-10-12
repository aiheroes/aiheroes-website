# C0 De case-mal

| Categorie | URL | Geldt voor | Bron |
|---|---|---|---|
| Template | `/nl/cases/<slug>` (EN `/en/cases/<slug>`) | C1 t/m C9 en elke toekomstige case | Homepage-sectie "Case" (`HsCase.astro`), `docs/relaunch-2026.md` |

## 1. Wat stond er

Inventaris van de huidige opzet, alleen als feit:

- **Collectie:** `src/content/cases/{nl,en}/*.mdx`. Het frontmatter-schema in `src/content.config.ts` heeft `lang`, `slug`, `title`, `subtitle`, `seoTitle`, `description`, `accentColor`, `entry` (nieuw / vervangen / eigen-beheer), `era` (huidig / eerder), `client`, `order` en `draft`.
- **Structuur zit in de MDX-body.** Elke case is vrije MDX met eigen HTML-blokken: kaartjes, cijferblokken, een quote en een "Over"-blok. Er zijn geen vaste velden voor cijfers, quote, tijdlijn of foto. Daardoor ziet elke case er anders uit en kan geen andere pagina de cijfers hergebruiken.
- **Opbouw per case:** de koppen verschillen ("De vraag" / "De uitdaging", "Hoe we het aanpakten" / "De oplossing" / "De aanpak", "Het resultaat" / "De resultaten"). Daarna volgt telkens een "Over <klant>"-blok.
- **Label:** het overzicht (`src/pages/nl/cases/index.astro`) toont bij `era: eerder` een apart label in plaats van het entry-label.
- **Structured data:** per case een `Article`-schema (`[slug].astro`).
- **Foto's:** geen enkele case heeft een foto.
- **Blokken met side-stripes:** InnoEnergy en OLX hebben kaartjes met een gekleurde zijlijn en emoji-iconen. Die patronen zijn sinds 2026-09-29 verboden.
- **Broncode-claim:** "Broncode … is van de klant" staat als vast kaartje op Kwakkel, INQ22 en Strive. Dat klopt niet.
- **Homepage-case (`HsCase.astro`):**
  - het patroon is kicker "Case", een kop met de twee sterkste cijfers, één lede-zin, een cijferrij met tellers, één slotzin en een duotoonfoto;
  - de case is anoniem en heeft geen link.

## 2. Wat moet er staan

### Doel van de mal

Elke case laat in een halve minuut zien: dit was de vraag, dit hebben we gebouwd, dit leverde het op. Daarna stuurt hij de lezer naar de startsprint. De mal is één vast patroon, zodat een nieuwe case alleen invulwerk is. De homepage-sectie "Case" is er de compacte vorm van: dezelfde velden voeden beide.

### Velden (frontmatter, geen vrije HTML meer)

| Veld | Type | Verplicht | Gebruik |
|---|---|---|---|
| `client` | tekst | ja | Klantnaam, getoond tenzij `anonymous` |
| `anonymousLabel` | tekst | bij anoniem | Omschrijving zonder naam, bijv. "een Nederlandse zorgorganisatie" |
| `anonymous` | `{ home?: bool, overview?: bool, page?: bool }` | nee | Per plek anoniem tonen. Medux: `home: true`, rest naam |
| `sector` | enum (zorg, e-commerce, mkb-administratie, energie en investeren, publieke sector, overig) | ja | Filter, en later de basis voor sector-landings (bij twee cases per sector) |
| `entry` | lijst van nieuw / vervangen / eigen-beheer (één of meer) | ja | Kleur (rood / blauw / donker, zoals de entry-vlakken; bij meer entries de eerste), filter, koppeling aan pillar P3/P4/P5. Meervoudig omdat een case meer kan bewijzen: IC Commerce is `[nieuw, vervangen]` (WooCommerce vervangen, pipelines nieuw gebouwd) |
| `currentTeam` | bool | ja | Werk van het huidige team (sinds de overname eind 2025). Wordt nooit getoond; stuurt alleen de volgorde (proof-regel) en of het blok "Bij elke bouw inbegrepen" verschijnt |
| `landings` | lijst landing-ID's | nee | Welke landings deze case als bewijs tonen (bijv. Medux → L1) |
| `headline` | tekst | ja | De kop in de homepage-stijl: het resultaat in cijfers of in één feit. Handmatige regelbreuk met ` \| ` |
| `lede` | tekst, max ~40 woorden | ja | Voor wie, welk probleem, wat we bouwden. In één zin |
| `stats` | lijst `{ value, decimals, suffix, label }`, 0–3 | nee | Cijferrij met tellers. Alleen geverifieerde cijfers |
| `question` | tekst | ja | De vraag zoals de klant hem stelde, in hun woorden |
| `built` | lijst van 2–4 punten | ja | Wat we bouwden, concreet |
| `timeline` | lijst `{ step, text }` | nee | Van startsprint tot oplevering: startsprint, bouw, livegang, beheer |
| `standard` | lijst van de 4 standaard-iconen die aantoonbaar van toepassing waren | nee | Kleine rij IconPark-iconen: business case, compliance, team getraind, niet vast aan één AI-leverancier. Alleen bij `currentTeam: true`; bij oude cases blijft het veld leeg |
| `quote` | `{ text, author, role, approved: bool }` | nee | Alleen tonen bij `approved: true` (akkoord van de klant op tekst en naam) |
| `photo` | `{ src, alt, credit, kind: screenshot \| standIn \| eigen }` | nee | Screenshot van het echte werk waar het kan (INQ22, eigen stack, IC Commerce); anders een duotoon-stand-in (mensen) zoals op home, met herkomst in `ASSETS.md`, tot de eigen shoot |
| `liveUrl` | url | nee | "Bekijk het live" (INQ22) |
| `year` | jaartal | nee | Alleen voor sortering en structured data. Wordt niet als "eerdere case"-label getoond |
| `order` | getal | ja | Volgorde in het overzicht |

Uit het schema gaan `era` en `accentColor`: kleur volgt uit `entry`, en oude cases zijn gelijkwaardig, zonder label "eerdere case" (besluit §8). Het interne veld `currentTeam` vervangt `era` alleen voor de volgorde en het standaard-blok. In geen enkel veld komt een eigendomsclaim over broncode. Waar het past gebruiken we de standaardlijn: "niet vast aan één AI-leverancier".

### Blokvolgorde op de case-pagina

1. **Cover** (vlak in de entry-kleur plus foto): kicker "Case · <sector>", `headline`, `lede`.
2. **Cijferrij** (`stats`), met tellers zoals op home. Is het veld leeg, dan vervalt het blok en schuift de vraag omhoog.
3. **De vraag** (`question`): kort, in de woorden van de klant.
4. **Wat we bouwden** (`built`): punten met IconPark-iconen.
5. **Zo ging het** (`timeline`): een horizontale stappenrij op desktop, een lijst op mobiel. Leeg betekent dat het blok vervalt.
6. **Bij elke bouw inbegrepen** (`standard`): de iconenrij van home, alleen de items die voor deze case gelden, en alleen bij cases van het huidige team. Leeg betekent dat het blok vervalt.
7. **Quote** (`quote`, alleen als `approved` waar is), op een donker vlak zoals de quotes op home.
8. **Live bekijken** (`liveUrl`), als knop.
9. **Volgende stap:** "Plan een startsprint", met één zin die de case koppelt aan de entry. Bijvoorbeeld: "Ook een pakket dat niet meer past? Begin met een startsprint."
10. **Meer cases met dezelfde entry:** 2 kaarten met minstens één gedeelde `entry`, anoniem waar nodig.

Een case ziet er dus nooit leeg uit. Het minimum is cover, vraag, bouw en de volgende stap.

### Koppeling met de rest van de site

- **Pillars P3, P4 en P5** tonen automatisch de cases waarvan de `entry`-lijst die ingang bevat (IC Commerce verschijnt dus op P3 én P4). Daarbij weegt `order`; de cases van het huidige team staan vooraan, conform de proof-regel.
- **Landings** tonen de case(s) die het landing-ID in `landings` hebben.
- **Home** gebruikt dezelfde velden: `headline`, `lede`, `stats` en `photo`, plus de anoniem-variant.
- **Pillar P6 (Hoe we werken)** kan `timeline` hergebruiken als voorbeeld van het traject.

### Case-overzicht (`/nl/cases`, P16)

- **Uitgelicht bovenaan: Strive** (sterkste resultaat van het huidige team: in één jaar terugverdiend). Wisselt zodra een andere case sterkere, goedgekeurde cijfers heeft.
- Kaarten met de entry-kleur, klant (of `anonymousLabel` bij `overview: true`), sector, `headline` en het eerste cijfer.
- **Filter alleen op entry** (drie knoppen); de sector staat op de kaart, maar is geen filter. Een case met twee entries verschijnt onder beide.
- Sortering op `order`. Cases van het huidige team staan vooraan, maar krijgen geen label.

### Structured data

- `Article` blijft, nu gevuld vanuit de velden: `headline`, `description` = `lede`, `about` = sector, en `datePublished` op basis van `year`.
- Is er een goedgekeurde quote, dan komt er een `Review` bij met de auteur en `itemReviewed` = de AI Heroes-organisatie.
- Bij `anonymous.page` wordt nergens een klantnaam in de JSON-LD gezet.

### Copyregels per case

- Elke kop is een uitkomst of een feit. Geen "De uitdaging".
- Cijfers alleen als ze kloppen en de klant ze mag tonen. Een onbekend cijfer blijft leeg; we schatten niets.
- Geen claim dat een systeem nu nog draait, tenzij dat aantoonbaar zo is. Formuleren zonder tijd: "voert 4.000 gesprekken per maand" wordt "4.000 gesprekken per maand, 80% door AI".
- Geen em-dashes, geen "geen X maar Y", geen retired phrases. Geen wervelwoorden zoals "toonaangevend" of "transformatie".

### Besluiten

1. Blok "Bij elke bouw inbegrepen": alleen bij cases van het huidige team, weglaten bij oude cases (§8).
2. Foto's: screenshots waar het kan (INQ22, eigen stack, IC Commerce), anders duotoon-stand-ins tot de eigen shoot (§8).
3. Overzicht: filter alleen op entry, Strive uitgelicht (§8).
4. `entry` is meervoudig; IC Commerce is nieuw én vervangen (§3).
5. Oude cases gelijkwaardig, zonder label "eerdere case" (§8, company profile bijgewerkt).
6. Quotes alleen met akkoord van de klant (§8).

### Wacht op

- Quotes van Kwakkel, Strive en INQ22 (aanvragen; Frans, actiepunt) voor fase 3, de cases.
- Details over Trabu, InnoEnergy en OLX (Frans levert aan in fase 3).

# C5 Eigen stack (de website-assistent)

| Categorie | URL | Entry-type | Zoekdata (GSC, 6 mnd) | Gelinkt vanaf |
|---|---|---|---|---|
| Case | `/nl/cases/eigen-stack` (ongewijzigd) | Eigen beheer | geen vertoningen gemeten | case-overzicht, ai-consultancy-groningen, eu-consultancy, legal/ai-assistent |

## 1. Wat stond er

- **Klant:** AI Heroes zelf.
- **Sector:** n.v.t.
- **Probleem:** wie adviseert om AI in Europa te houden, moet het zelf ook doen. De vraag: een assistent die bezoekersvragen beantwoordt, op Europese infrastructuur.
- **Oplossing:** de AI-assistent op aiheroes.io:
  - functies in Frankfurt;
  - database bij een Europese vestiging;
  - antwoorden alleen uit een zoekindex over de publieke pagina's;
  - zegt het als hij iets niet weet;
  - AI Act-transparantie in het gesprek;
  - retentiebeleid met automatisch verwijderen;
  - doorschakelen naar een mens, met antwoord per mail.
- **Werkwijze:**
  - vraag eerst;
  - prototype getest met echte bezoekersvragen;
  - compliance in het ontwerp;
  - live met uitgavenlimiet, snelheidsbegrenzer en logging;
  - een vaste set testgesprekken moet slagen voor elke nieuwe versie;
  - het model is uitwisselbaar ("een configuratie, geen verbouwing");
  - werking openbaar gedocumenteerd op `/nl/legal/ai-assistent`.
- **Cijfers:** geen. Er zijn wel meetbare feiten mogelijk: aantal gesprekken, aandeel beantwoord zonder mens, retentietermijn.
- **Quote:** n.v.t.
- **Technologie:**
  - Vercel-functies in `fra1`;
  - Supabase EU;
  - zoekindex in `server/index-data`;
  - Resend voor de doorschakeling.
- **Foto:** geen.
- **Overig:** de case noemt zichzelf "het enige bewijs dat we zonder toestemming van een klant kunnen laten zien".
- **Wat niet meer klopt:** "Modelkeuze in eigen hand … een configuratie, geen verbouwing" is een "geen X maar Y"-constructie. Inhoudelijk past het wel bij de standaardlijn.

## 2. Wat moet er staan

**Kernboodschap:** we doen zelf wat we adviseren. De assistent op deze site draait in Europa, met de AI Act ingebouwd en een model dat we kunnen wisselen.

**Bewijst:** P5 (Software in eigen beheer), P9 (Compliance), L12 (AI op eigen servers of in de Europese cloud), L4 (Company wiki: AI op eigen kennis). Verder K7 (menselijk toezicht en logging) als voorbeeld.

| Veld | Inhoud |
|---|---|
| `client` | AI Heroes (eigen werk) |
| `sector` | overig |
| `entry` | `[eigen-beheer]` |
| `currentTeam` | true |
| `landings` | L12, L4 |
| `headline` | Voorstel: "Onze eigen AI-assistent, \| gehost in Europa" |
| `lede` | De assistent op deze site beantwoordt vragen uit onze eigen pagina's. Hij draait op Europese infrastructuur, laat zien dat hij AI is en geeft je een mens als hij het niet weet. |
| `stats` | Leeg: geen gebruikscijfers (besluit §8). Het blok vervalt |
| `question` | "Kan het op onze eigen servers, binnen Europa?" (de vraag van entry 3) |
| `built` | Antwoorden uit eigen pagina's, met bronnen · hosting in Frankfurt, database in de EU (zonder leveranciersnamen, besluit §8) · transparantie en een uitlegpagina · doorschakelen naar een mens · uitwisselbaar model · testset die moet slagen voor elke release |
| `timeline` | Vraag en grenzen · prototype met echte vragen · compliance in het ontwerp · live met limieten en logging · doorlopend: testset per versie |
| `standard` | Alle vier (eigen werk, aantoonbaar): business case n.v.t. of als "kosten per gesprek bewaakt", compliance, team getraind (bevestigen), niet vast aan één AI-leverancier |
| `quote` | n.v.t. |
| `photo` | Screenshot van de assistent in gesprek, in de nieuwe huisstijl (`kind: screenshot`) |
| `liveUrl` | De assistent zelf ("probeer hem rechtsonder"; hij blijft op de nieuwe site, besluit §8) + `/nl/legal/ai-assistent` |

**Titelvoorstel (SEO):** "Onze eigen AI-assistent: gehost in Europa, AI Act ingebouwd | AI Heroes"

### Besluiten

1. De assistent blijft op de nieuwe site en krijgt de nieuwe huisstijl; de case is daarmee een live demo (§8).
2. Geen gebruikscijfers (§8).
3. Leveranciers niet bij naam; "Frankfurt, EU-database" volstaat (§8).

### Wacht op

- De restyle van de assistent in de bouwdoos (fase 1); de screenshot volgt daarna.

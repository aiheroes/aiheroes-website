# Plan: team, vacatures en externe profielen

Datum: 22 september 2026
Status: goedgekeurd in interview, nog niet uitgevoerd
Hoort bij: `docs/transformatieplan-website-2026-09-21.md` (de positionering) en `docs/company-profile.md` (het profiel)

De site vertelt sinds 21 september één verhaal: wij bouwen software en AI die in productie draait, met de startsprint als eerste stap. Drie dingen lopen daar nog niet in mee, en ze hangen aan elkaar vast:

1. **De domeinen van Frans, David en Jan.** De site verdeelt het traject in drie fasen en hangt elke fase aan één persoon. Dat is niet hoe jullie werken: iedereen doet alles. De bezoeker die een afspraak boekt, kiest nu uit drie agenda's op basis van een verdeling die niet bestaat. Die afspraak is de eerste conversie, dus dit is geen detail.
2. **De vacatures.** Twee van de vier zijn er om groter te lijken dan jullie zijn. Alle vier vertellen het oude verhaal van training, consultancy en development. Jullie willen wél vacatures die de richting laten zien: AI-first developers, en op termijn mensen die jullie kunnen detacheren.
3. **LinkedIn en het Google-bedrijfsprofiel.** Beide vertellen nog het verhaal van voor de transformatie. Wie de site vindt via Google of LinkedIn, leest daar iets anders dan op de site.

Dit plan legt vast wat er verandert, waar, in welke volgorde, en welke teksten daarvoor nodig zijn. Copy volgt de tekstregels uit §3 van het transformatieplan, inclusief de zeven regels die op 22 september zijn toegevoegd (geen komma-slogans, geen geruststelling, geen beeldspraak, geen "Zoals"-zinnen, geen hedges, één motief per pagina, niet over hoeveel we zijn).

---

## 1. Beslissingen uit het interview

| # | Onderwerp | Besluit |
|---|---|---|
| 1 | Domeinen van de oprichters | **Iedereen doet alles.** Geen vaste fasen per persoon. Wie het gesprek voert, draagt het traject van kennismaking tot overdracht. |
| 2 | Titel | **Mede-eigenaar**, op alle Nederlandse pagina's. Engels: Co-owner. "Co-Founder" verdwijnt. |
| 3 | Bio's | Accent op **achtergrond**, niet op rol. Elke bio vertelt waar iemand vandaan komt en wat hij meebrengt. Nergens "bel Frans voor X". |
| 4 | Compliance | Blijft in het ontwerp zitten (AI Heroes-standaard). In Davids bio als achtergrond, niet als exclusief domein. |
| 5 | Eerste conversie | **Eén gedeelde agenda**, één afspraak: kennismaking, 30 minuten, online. De keuzelijst met drie agenda's verdwijnt. |
| 6 | Gedeelde agenda | Bestaat nog niet. Dit plan beschrijft de stappen (§3.4). |
| 7 | Vacatures die blijven | Sales & Business Development stagiair en Marketing stagiair, allebei herschreven rond de startsprint en de cases. |
| 8 | Vacatures die verdwijnen | AI Trainer / Workshop Lead en de huidige AI Engineer / Developer. |
| 9 | Nieuwe richtingvacatures | AI-first developer · AI-first product- of UX-designer · AI Act- en compliancespecialist. |
| 10 | Vorm | **Doorlopend**, zonder startdatum. Wel uren, locatie en salarisindicatie. Jullie nemen aan als de juiste persoon zich meldt. |
| 11 | Groeisignalen | Weg. "Wij groeien", "booming markt" en de trainingsstat verdwijnen; het werk zelf komt ervoor in de plaats. |
| 12 | Bouwteam | Jullie bouwen zelf. Geen freelance-schil op de site. |
| 13 | Detachering | **Ook als aanbod**: eigen pagina onder Wat we bouwen, prijs per maand op aanvraag, minimaal drie maanden. |
| 14 | LinkedIn | Bedrijfspagina, persoonlijke profielen van de drie mede-eigenaars en één vastgepinde post. Geen LinkedIn-vacatures in deze ronde. |
| 15 | Training extern | Alleen "AI-geletterdheid (artikel 4 AI Act)" blijft als specialisme en dienst. Workshops verdwijnen uit de profielen. |
| 16 | Google-bedrijfsprofiel | Primaire categorie is al Softwarebedrijf. Beschrijving, diensten, knoppen, foto's en Q&A worden bijgewerkt. |
| 17 | Afspraakknop extern | Wijst naar `https://aiheroes.io/nl/startsprint`, niet rechtstreeks naar de agenda. |
| 18 | Reviews | Ja, tegelijk met de quotes: Kwakkel BV, INQ22, Strive en IC Commerce krijgen één verzoek voor een quote én een Google-review. |

---

## 2. Wat er nu staat

### 2.1 De domeinen, overal waar ze voorkomen

De fase-verdeling staat op veertien plekken. Ze moeten allemaal tegelijk om, anders spreekt de site zichzelf tegen.

| Plek | Bestand | Wat er staat |
|---|---|---|
| Home, teamsectie | `constants.ts` `team.body` | "Frans maakt de business case, David bouwt, Jan zorgt dat je mensen ermee kunnen werken." |
| Over ons, teamblok | `constants.ts` `aboutPage.team` | Subtitel "Drie oprichters, één traject: van business case tot overdracht"; rollen "Co-Founder · Business case & scoping" enz. |
| Teampagina | `src/pages/nl/over-ons/team.astro`, `en/about/team.astro` | Intro "elk van hen een fase draagt"; drie rollen; SEO-description met de fasen |
| Afspraakknop | `constants.ts` `contactForm.meetings` | Drie agenda's met hints "Business case en scoping" / "Bouw, hosting en compliance" / "Adoptie en training bij je team" |
| Meeting chooser | `components/MeetingChooser.tsx`, `src/scripts/meeting-chooser.ts` | Het uitklapmenu op home, subpagina's en in de footer |
| Structured data | `src/data/schema.ts` `founder[]` | `jobTitle: 'Co-Founder, Business case & scoping'` enz. |
| Vacaturepagina, teams-blok | `constants.ts` `careersPage.departments` | "Elk traject wordt gedragen door drie rollen"; drie afdelingen op fase |
| Vacatures | `constants.ts` `careersPage.positions` | `departmentLabel` per vacature volgt de fasen |
| Perskit | `pages/nl/Pers.tsx`, `pages/en/Press.tsx` | "Drie oprichters: business case, bouw en adoptie" |
| llms.txt | `public/llms.txt` | Team-regel met de fasen |
| Chatassistent | `server/prompt.ts` | Beschrijft het team met de fasen (controleren bij uitvoering) |
| Profiel | `docs/company-profile.md` §8 en de tabel bovenaan | "Three co-founders, each carrying one phase" |
| Projectgeheugen | `AGENTS.md` (memory-regio) | Zelfde zin |
| Transformatieplan | `docs/transformatieplan-website-2026-09-21.md` §5.5, §9.4, §9.5 | De fase-verdeling als besluit; krijgt een verwijzing naar dit plan |

### 2.2 De vacatures

| Vacature | Status | Probleem |
|---|---|---|
| AI Engineer / Developer | nep | "Ons Consultancy team", "machine learning pipelines", cloudplatforms als eis. Vervalt; de AI-first developer komt ervoor in de plaats. |
| AI Trainer / Workshop Lead | nep | Draait volledig om losse workshops door het land. Vervalt. |
| Sales & Business Development Intern | echt | Opent met "snelgroeiende AI agency ... via training, consultancy en development". Herschrijven. |
| AI-Enabled Marketing Intern | echt | Maakt "content die onze expertise zichtbaar maakt" met AI-tools. Herschrijven: cases en bouwwerk zichtbaar maken. |

Daaromheen: hero "Wij groeien", intro "Ons team groeit mee met de vraag", stats "1000+ professionals getraind", perk "Groei met ons mee in een booming markt", en het teams-blok met de drie fasen.

Technisch: `types.ts` `CareersPageContent.departments[].pillar` is `'training' | 'consulting' | 'software'` en `JobPosition.department` volgt dat. De detailpagina's `src/pages/{nl,en}/{vacatures,careers}/[slug].astro` bouwen een JobPosting-schema per vacature.

### 2.3 Het aanbod "Extra bouwcapaciteit"

Op `src/pages/nl/diensten/software.astro` staat het blok "Extra bouwcapaciteit": "een tech lead en één tot vijf developers, binnen een week productief". Met drie mede-eigenaars die zelf bouwen is dat niet waar. Het profiel (§4, "extra build capacity (tech lead + 1–5 developers)") en llms.txt herhalen het. Dit blok wordt het detacheringsaanbod uit besluit 13, in eerlijke woorden.

### 2.4 LinkedIn en Google

Buiten de repo, dus niet geïnventariseerd. De aanname: beide dragen nog de tagline, beschrijving en specialismen van voor 21 september (full-service, drie pijlers, training vooraan). De teksten in §6 en §7 vervangen wat er staat, ongeacht de huidige inhoud.

---

## 3. De mede-eigenaars

### 3.1 Eén rol, drie achtergronden

De rol is voor alle drie hetzelfde en staat in één zin, overal waar het team voorkomt:

> Drie mede-eigenaars. Wie je spreekt bij de kennismaking, werkt ook mee aan de bouw en de overdracht.

De bio's verschillen in achtergrond, niet in rol. Conceptteksten (te scherpen bij uitvoering, Frans leest mee):

**Frans Hoorn, Mede-eigenaar**
Achtergrond in UX-design en productmanagement. Vertaalt een vage vraag naar een scope waar een team op kan bouwen, en houdt de business case scherp: wat kost het, wat levert het op en wanneer verdient het zich terug.

**David Homan, Mede-eigenaar**
Techniek en directiekamer in één persoon. Weet hoe AI-modellen onder de motorkap werken en wat dat betekent voor jouw processen. Bouwt zelf, en zorgt dat AI Act-classificatie, logging, toezicht en hosting vanaf de tekentafel in het ontwerp zitten.

**Jan Brusse, Mede-eigenaar**
Bouwde vier jaar lang het Smart Lab in het Groninger Forum op en trainde daar duizenden mensen in nieuwe technologie. Zorgt dat het team dat met het systeem gaat werken er op dag één mee overweg kan, en weet de weg in subsidieregelingen voor innovatie.

Engels: "Co-owner", zelfde drie bio's vertaald.

Wat verdwijnt: elke zin die een fase aan een persoon hangt, inclusief "Leidt de startsprint" (Frans), "Leidt de bouw" (David) en de vacature-afdelingen op fase.

### 3.2 Waar de teksten landen

| Bestand | Verandering |
|---|---|
| `constants.ts` `team.body` (nl/en) | De ene zin uit §3.1 |
| `constants.ts` `aboutPage.team` (nl/en) | Subtitel "Drie mede-eigenaars"; `role: "Mede-eigenaar"`; nieuwe `description` per persoon |
| `src/pages/nl/over-ons/team.astro`, `en/about/team.astro` | Intro, rollen, bio's, `seoDescription` zonder fasen. De bio's komen uit `constants.ts` (nu staan ze dubbel: verkort in `aboutPage.team`, lang op de teampagina; na dit plan één bron, de teampagina leest `aboutPage.team.members`) |
| `src/data/schema.ts` `founder[]` | `jobTitle: 'Mede-eigenaar'` (Engelse variant niet nodig, JSON-LD is één taal per site) |
| `pages/nl/Pers.tsx`, `pages/en/Press.tsx` | Kerngegeven "Team: drie mede-eigenaars" |
| `public/llms.txt` | Team-regel |
| `server/prompt.ts` | Teambeschrijving |
| `docs/company-profile.md` §8, tabel | Team-regel en drie profielen |
| `AGENTS.md` memory | Team-regel |
| `docs/transformatieplan-website-2026-09-21.md` §5.5, §9.4 | Eén regel: "vervangen door plan 2026-09-22" |

### 3.3 De afspraak: één link

De keuzelijst maakt plaats voor één link, overal waar `MeetingChooser` nu staat (`components/Contact.tsx`, `components/PageContactForm.tsx`, `components/Footer.tsx`):

> Plan een kennismaking · 30 minuten, online

De link wijst naar het gedeelde afsprakenschema uit §3.4. `contactForm.meetings` in `constants.ts` wordt `contactForm.meeting: { label, hint, url }`. `components/MeetingChooser.tsx`, `src/scripts/meeting-chooser.ts` en de scriptregel in `src/layouts/BaseLayout.astro` verdwijnen; het type `MeetingOption` in `types.ts` ook. (Het uitklapmenu is gisteren nog gerepareerd; dat werk vervalt hiermee. Dat is de juiste volgorde: eerst werkend, dan weg.)

De foto's van de drie blijven op de teampagina en op home; bij de afspraaklink komt geen foto meer, want de bezoeker kiest geen persoon.

Op de startsprintpagina blijft de knop "Plan een startsprint" naar het formulier gaan. De kennismaking is het lichte alternatief eronder, met dezelfde link als in de footer.

### 3.4 Het gedeelde afsprakenschema in Google Agenda

Google Agenda kent geen round-robin (om de beurt). Wat wél kan: één afsprakenschema met drie hosts, waarbij elke boeking bij alle drie in de agenda komt. Wie het gesprek voert, spreken jullie intern af.

Stappen (Frans, 20 minuten):

1. Controleer de Google Workspace-editie: co-hosts in afsprakenschema's zitten in Business Standard en hoger. Bij Business Starter werkt alleen de basisvariant met één host; dan is stap 5 niet mogelijk en wijst de link voorlopig naar één persoon.
2. Google Agenda → Maken → Afsprakenschema. Titel: "Kennismaking AI Heroes (30 min)". Duur: 30 minuten.
3. Beschikbaarheid: werkdagen, bijvoorbeeld 9:00 tot 17:00, buffer 15 minuten, maximaal twee boekingen per dag, minimaal 24 uur van tevoren.
4. Boekingsformulier: naam, e-mail, organisatie, en één open vraag: "Wat wil je bouwen?" Zo begint het gesprek waar de site ophoudt.
5. Co-hosts: David en Jan toevoegen. Elke boeking komt dan bij alle drie in de agenda met een Meet-link.
6. Bevestigingsmail: korte tekst in het je-verhaal, met de link naar `/nl/startsprint` als voorbereiding.
7. Boekingspagina publiceren, link kopiëren, in `constants.ts` zetten (`contactForm.meeting.url`) en in de profielen (§6 en §7 wijzen naar de startsprintpagina, die naar de agenda linkt).
8. Interne regel: de eerste die de uitnodiging accepteert, voert het gesprek; de andere twee wijzen af. Wie het gesprek voert, draagt het traject.

Als jullie later wél automatisch willen verdelen, is Cal.com (team round-robin) de lichtste optie. Niet nodig om te starten.

---

## 4. Vacatures

### 4.1 De nieuwe lijst

| # | Vacature | Vorm | Slug (nl / en) |
|---|---|---|---|
| 1 | AI-first developer | doorlopend, 32 tot 40 uur, Groningen en op locatie bij klanten | `ai-first-developer` / `ai-first-developer` |
| 2 | AI-first product- en UX-designer | doorlopend, 24 tot 40 uur, Groningen | `ai-first-designer` / `ai-first-designer` |
| 3 | AI Act- en compliancespecialist | doorlopend, 16 tot 32 uur, Groningen of op afstand | `ai-act-specialist` / `ai-act-specialist` |
| 4 | Stage sales en business development | minimaal vijf maanden, 32 tot 40 uur, Groningen | `sales-intern` (blijft) |
| 5 | Stage marketing en content | minimaal vijf maanden, 32 tot 40 uur, Groningen | `marketing-intern` (blijft) |

Verwijderd: `ai-engineer` en `ai-trainer`. Redirects in `vercel.json`: `/nl/vacatures/ai-engineer` → `/nl/vacatures/ai-first-developer`, `/en/careers/ai-engineer` → `/en/careers/ai-first-developer`, `/nl/vacatures/ai-trainer` → `/nl/vacatures`, `/en/careers/ai-trainer` → `/en/careers`.

### 4.2 Wat elke vacature zegt

Elke vacature heeft dezelfde opbouw: wat je bouwt (met een echte case als voorbeeld), hoe we werken (startsprint, sprints, de standaard), wat we van je vragen, wat je krijgt. Nergens een startdatum, nergens groeipraat. De openingszin van elke vacature is dezelfde:

> AI Heroes bouwt software en AI die in productie draait. We zoeken doorlopend mensen die dat met ons willen doen; we nemen aan als de juiste persoon zich meldt.

**1. AI-first developer.** Bouwt met AI-tooling als standaard werkwijze, niet als extraatje. Van prototype in de startsprint tot systeem in productie, gekoppeld aan ERP, CRM en de rest van het landschap. Werkt bij ons of, bij detachering, in het team van een klant. Voorbeelden: de administratie-automatisering voor Kwakkel BV, de webwinkel van INQ22, de vervanging bij Strive. Vraagt: TypeScript of Python, ervaring met LLM-integraties en agents, kunnen uitleggen wat je bouwt aan iemand zonder techniek. Salarisindicatie: **[ophalen]**.

**2. AI-first product- en UX-designer.** Maakt in de startsprint het prototype dat de klant op dag vijf ziet, en de interfaces die daarna in productie gaan. Werkt met AI-tools voor ontwerp én prototype. Vraagt: portfolio met werkende producten, kunnen tekenen én klikbaar maken, gevoel voor wat een gebruiker op de werkvloer nodig heeft. Salarisindicatie: **[ophalen]**.

**3. AI Act- en compliancespecialist.** Zorgt dat elke bouw voldoet: classificatie onder de AI Act, logging en menselijk toezicht in het ontwerp, documentatie, artikel 4-training van het klantteam. Parttime mogelijk. Vraagt: kennis van de AI Act en AVG, ervaring met technische documentatie, kunnen samenwerken met developers. Salarisindicatie: **[ophalen]**.

**4. Stage sales en business development.** Bouwt de pijplijn naar de kennismaking en de startsprint: prospects vinden die iets willen bouwen of vervangen, gesprekken plannen, meelopen in startsprints. Werkt direct met de drie mede-eigenaars. Stagevergoeding: **[bedrag ophalen]**.

**5. Stage marketing en content.** Maakt het bouwwerk zichtbaar: cases, demo's, posts over wat er deze week in productie ging. LinkedIn is het kanaal (twee tot drie posts per week, in de stem van de mede-eigenaars). Gebruikt AI-tools, maar het onderwerp is wat wij bouwen. Stagevergoeding: **[bedrag ophalen]**.

Engels: zelfde vijf, vertaald. Titels in het Engels: "AI-first developer", "AI-first product and UX designer", "AI Act and compliance specialist", "Sales and business development internship", "Marketing and content internship".

### 4.3 De vacaturepagina eromheen

| Onderdeel | Nu | Wordt |
|---|---|---|
| Hero | "Werken bij AI Heroes" / "Wij groeien. Sluit je aan bij een team dat..." | "Werken bij AI Heroes" / "Bouw mee aan software en AI die bij klanten in productie draait. Vanuit Groningen, voor heel Nederland en Europa." |
| Intro (`growth.text`) | "Ons team groeit mee met de vraag..." | "Wie hier werkt, bouwt mee aan het hele traject: de startsprint, de bouw in sprints, de overdracht. Je ziet je werk in productie bij de klant, en je hoort wat ervan terechtkomt." |
| Stats | 50+ · 1000+ getraind · 3 oprichters · 2019 | `6 dagen` van vraag naar prototype (Kwakkel BV) · `5` cases van het huidige team · `3` mede-eigenaars · `Groningen` AI-hoofdstad van Europa |
| trustedBy | Kwakkel BV, INQ22, UMCG, Tweede Kamer, Postcode Loterij, Envalior | Kwakkel BV, INQ22, Strive, IC Commerce, UMCG (bewijsregel: huidig team vooraan) |
| Teams-blok (`departments`) | Drie afdelingen op fase | Blok heet "Hoe we werken" met drie kaarten: de startsprint · bouwen in sprints · de AI Heroes-standaard. Geen afdelingen. |
| Perks | "Groei met ons mee: booming markt" | Vervangen door "Eigen bouw: je werkt met de mede-eigenaars, niet voor ze" |
| Waarden | vier, blijven | Alleen "Echte impact" herschrijven: "Wat je bouwt, draait bij de klant. Je ziet het in productie en hoort wat het oplevert." |
| Open sollicitatie | ontbreekt | Eén alinea onder de vacatures: "Herken je je in het verhaal, maar staat je rol er niet bij? Mail hello@aiheroes.io met wat je gebouwd hebt." |

Technisch: `departments` in `types.ts` en `constants.ts` verdwijnt of wordt `howWeWork`; `JobPosition.department` wordt `'bouw' | 'ontwerp' | 'compliance' | 'stage'` met bijbehorend `departmentLabel`. De detailpagina's blijven; het JobPosting-schema krijgt `employmentType` per vacature en geen `validThrough` (doorlopend). Filters en labels in `pages/nl/Vacatures.tsx` en `pages/en/Careers.tsx` volgen mee. `npm run check` is de poort.

### 4.4 Wat er buiten de vacaturepagina verandert

- Navigatie: "Vacatures · Bekijk openstaande posities" wordt "Vacatures · Bouwen bij AI Heroes".
- Footer: link blijft.
- `public/llms.txt`: vacatureregel bijwerken.
- `docs/company-profile.md`: §8 krijgt de nieuwe lijst; de "flexible shell of freelance trainers and a dev-pool" verdwijnt (besluit 12).

---

## 5. Detachering: een developer in jouw team

### 5.1 De pagina

Nieuw: `/nl/diensten/developer-in-je-team` en `/en/services/developer-in-your-team` (slugmap in `src/data/i18n.ts`). `SubpageLayout` met `badge="In jouw team"`, `showStandard`, formulier met de chip vooraf gekozen.

Kern van de pagina:

> **Een AI-first developer in jouw team.** Heb je zelf developers en loopt het bouwwerk vast op AI, dan werkt een developer van AI Heroes mee in jouw team. Op locatie of op afstand, minimaal drie maanden, per maand opzegbaar. Dezelfde werkwijze als bij onze eigen bouw: AI-tooling als standaard, compliance in het ontwerp, overdracht zonder lock-in. Prijs per maand op aanvraag; je hoort hem in de kennismaking.

Secties: voor wie (je hebt een team, je mist AI-bouwervaring, je wilt kennis die blijft); hoe het werkt (kennismaking, matching, eerste maand op proef, daarna per maand); wat de developer meebrengt (de AI Heroes-standaard, in jouw repo); veelgestelde vragen (opzegtermijn, wie stuurt aan, wat als het niet past, eigendom van code); de standaard-band; het formulier.

Eerlijkheid: geen "tech lead en één tot vijf developers". Het aanbod is één developer per klant, en alleen als er iemand beschikbaar is. Daarom staat er "op aanvraag" en geen levertijd. Zodra de eerste AI-first developer in dienst is, kan de pagina een beschikbaarheidsregel krijgen.

### 5.2 Waar het aanbod verder landt

| Plek | Verandering |
|---|---|
| `constants.ts` `nav.build.children` | Vierde item: "Een developer in jouw team · Extra bouwkracht in je eigen team, per maand" |
| `constants.ts` `contact.form.topicOptions` (nl/en) | Vijfde chip: "Een developer in mijn team" / "A developer in my team". `api/contact.ts` accepteert de waarde; de mail toont hem onder "Ingang". |
| `src/pages/nl/diensten/software.astro` blok `dedicated-teams` | Titel "Een developer in jouw team", nieuwe tekst, link naar de pagina |
| `src/pages/nl/diensten/index.astro`, `en/services/index.astro` | Onder de drie ingangen een korte regel: "Liever bouwen met je eigen team? Dan komt er een developer van ons bij." |
| `src/data/schema.ts` `hasOfferCatalog` | Vierde Offer |
| `public/llms.txt`, `server/prompt.ts`, chat-strings | Aanbod opnemen; prijs "op aanvraag", nooit een bedrag |
| `docs/company-profile.md` §4 | Regel over extra build capacity vervangen |
| Sitemap, hreflang | Automatisch via de slugmap |

`Entry` in `types.ts` blijft drie waarden; de nieuwe pagina is een aanbod naast de drie ingangen, geen vierde ingang. De kaarten op home blijven drie.

---

## 6. LinkedIn

Alles hieronder is tekst om te plakken. Plaatsen doen jullie; de teksten komen ook als los bestand in `docs/profielen/linkedin.md` zodat ze bij de bron blijven.

### 6.1 Bedrijfspagina

**Tagline** (maximaal 120 tekens):
> Software en AI die in productie draait. Van ambitie naar implementatie. Groningen.

**Branche:** Softwareontwikkeling.

**Knop:** "Meer informatie" → `https://aiheroes.io/nl/startsprint`.

**Over ons** (maximaal 2.000 tekens; concept):
> AI Heroes bouwt software en AI voor organisaties die verder willen dan een pilot. Wij ontwerpen, bouwen en implementeren, en zorgen dat het werkt: met een sluitende business case, compliance vanaf de tekentafel en een team dat ermee overweg kan.
>
> Drie manieren om binnen te komen: iets nieuws bouwen, vervangen wat niet meer voldoet, of AI in eigen beheer draaien op eigen servers of Europese hosting. Heb je zelf developers, dan werkt een AI-first developer van ons mee in jouw team.
>
> De eerste stap is altijd de startsprint: één week, vast bedrag vanaf € 8.000. Aan het eind heb je een werkend prototype of een bouwplan, en de business case op één A4. Daarna beslis je of we doorgaan.
>
> Bij elke bouw inbegrepen: business case vooraf, compliance vanaf de tekentafel (AI Act-classificatie, logging, menselijk toezicht, Europese hosting), training van het team dat ermee gaat werken, overdracht zonder lock-in.
>
> Drie mede-eigenaars: wie je spreekt bij de kennismaking, werkt ook mee aan de bouw en de overdracht. Vanuit Groningen, AI-hoofdstad van Europa, voor heel Nederland en Europa.
>
> Plan een kennismaking: aiheroes.io/nl/startsprint

**Specialismen** (maximaal 20, in deze volgorde):
Maatwerksoftware · AI-implementatie · AI-assistenten · Spraak-AI · Werkstroomautomatisering · Software vervangen · Legacy-vervanging · SaaS vervangen door eigen software · Soevereine AI · Europese hosting · Lokale AI-modellen · EU AI Act compliance · AI-geletterdheid (artikel 4 AI Act) · Business case voor AI · Prototyping · Startsprint · Webapplicaties · Klantportalen · Documentverwerking met AI · AI-first developers in jouw team

Weg: alles met workshop, training (behalve artikel 4), consultancy, strategie, change management.

### 6.2 Persoonlijke profielen

Zelfde opbouw voor alle drie, één accent verschilt.

**Headline** (maximaal 220 tekens):
> Mede-eigenaar AI Heroes | We bouwen software en AI die in productie draait | Startsprint: in één week van vraag naar werkend prototype

**Info** (concept, per persoon de eerste alinea eigen, de rest gelijk):

Frans:
> Ik kom uit UX-design en productmanagement. Wat ik het liefst doe: een vage vraag omzetten in een scope waar een team op kan bouwen, met een business case die klopt.

David:
> Ik zit tussen techniek en directiekamer in. Ik weet hoe AI-modellen onder de motorkap werken, bouw zelf, en zorg dat compliance vanaf de tekentafel in het ontwerp zit.

Jan:
> Ik bouwde vier jaar het Smart Lab in het Groninger Forum op en trainde daar duizenden mensen in nieuwe technologie. Nu zorg ik dat het team dat met onze software gaat werken er op dag één mee overweg kan.

Gedeeld vervolg:
> Met David en Jan / Frans en Jan / Frans en David ben ik mede-eigenaar van AI Heroes. We bouwen software en AI voor organisaties die verder willen dan een pilot, en we zetten het in productie. Drie manieren om binnen te komen: iets nieuws bouwen, vervangen wat niet meer voldoet, of AI in eigen beheer draaien. De eerste stap is altijd een startsprint van één week.
>
> Wil je weten of jouw idee kan, wat het kost en hoe het eruitziet? Plan een kennismaking via aiheroes.io/nl/startsprint.

**Ervaring:** functietitel "Mede-eigenaar" bij AI Heroes B.V., vanaf de overnamedatum eind 2025. Oudere functietitels als "Co-Founder" of iets met "trainer" aanpassen.

### 6.3 Vastgepinde post

Eén post, vastgepind op de bedrijfspagina, over de startsprint. Concept:

> Wat kun je in één week bouwen?
>
> Bij Kwakkel BV stond na zes dagen een werkend prototype voor de administratie-automatisering. Vraag op maandag, demo op vrijdag, business case op één A4 erbij.
>
> Dat is de startsprint: één week, vast bedrag vanaf € 8.000. Aan het eind weet je of het kan, wat het kost en hoe het eruitziet. Daarna beslis je of we doorgaan.
>
> Iets nieuws bouwen, software vervangen of AI in eigen beheer draaien: dit is de eerste stap.
>
> aiheroes.io/nl/startsprint

Met de foto van het team of een screenshot van het prototype (toestemming Kwakkel BV nodig voor een screenshot; anders het team).

---

## 7. Google-bedrijfsprofiel

Ook dit als los bestand in `docs/profielen/google-bedrijfsprofiel.md`.

| Veld | Wordt |
|---|---|
| Bedrijfsnaam | AI Heroes |
| Primaire categorie | Softwarebedrijf (staat al) |
| Secundaire categorieën | Controleren; alles met training, marketing of consultancy verwijderen. Hooguit "Softwareontwikkelaar" als die beschikbaar is. |
| Beschrijving (maximaal 750 tekens) | Zie hieronder |
| Website | `https://aiheroes.io` |
| Afspraaklink | `https://aiheroes.io/nl/startsprint` |
| Diensten | De startsprint · Iets nieuws bouwen (maatwerksoftware en AI) · Software vervangen · AI in eigen beheer (Europese hosting) · Een developer in jouw team · AI-geletterdheid (artikel 4 AI Act). Elke dienst met één zin en de link naar de pagina. Prijzen alleen waar de site ze noemt (startsprint vanaf € 8.000, maatwerk vanaf € 15.000, AI-geletterdheid vanaf € 2.500 per dag). |
| Kenmerken | Online afspraken · Op locatie · Identificeert zich als lokaal bedrijf (Groningen) |
| Openingstijden | Werkdagen 9:00 tot 17:00 |
| Foto's | De drie mede-eigenaars (bestaande portretten), het kantoor aan de Aarhusweg, logo, omslag met de slogan |
| Q&A | Drie vragen vooraf plaatsen en zelf beantwoorden, uit de FAQ van de Groningen-pagina: wat kost het, hoe snel kunnen we starten, helpen jullie met de AI Act |
| Berichten | Eén per maand. Eerste: de startsprint (zelfde tekst als de vastgepinde LinkedIn-post, ingekort). |

**Beschrijving** (concept, 640 tekens):
> AI Heroes bouwt software en AI voor organisaties die verder willen dan een pilot. Wij ontwerpen, bouwen en implementeren, en zorgen dat het werkt: met een sluitende business case, compliance vanaf de tekentafel en een team dat ermee overweg kan. Drie manieren om binnen te komen: iets nieuws bouwen, vervangen wat niet meer voldoet, of AI in eigen beheer draaien op Europese hosting. De eerste stap is de startsprint: één week, vast bedrag, werkend prototype of bouwplan plus business case. Gevestigd aan de Aarhusweg in Groningen, AI-hoofdstad van Europa. We werken door heel Nederland, op locatie en op afstand.

### 7.1 Reviews

Eén verzoek per klant, tegelijk met de quote voor de site (ophaalwerk uit het transformatieplan §12.2). Concept van het bericht, per mail vanuit de mede-eigenaar die het traject deed:

> Onderwerp: Twee kleine vragen over [project]
>
> Hoi [naam],
>
> We hebben onze website opnieuw ingericht rond wat we bouwen, en [project] staat daar vooraan. Daarvoor wil ik je twee dingen vragen, allebei in vijf minuten gedaan:
>
> 1. Eén of twee zinnen over hoe je de samenwerking en het resultaat ervaart, die we bij de case op de site mogen zetten met je naam erbij.
> 2. Diezelfde zinnen als review op ons Google-profiel: [reviewlink uit het bedrijfsprofiel].
>
> Zeg gerust ook als je iets niet wilt; dan zetten we het niet neer.
>
> [naam]

Naar: Kwakkel BV, INQ22, Strive, IC Commerce (voor IC Commerce alleen de review; de quote is er al). De reviewlink staat in het bedrijfsprofiel onder "Vraag om reviews".

---

## 8. Ophaalwerk en uitvoering buiten de repo

| Wat | Wie | Nodig voor |
|---|---|---|
| Workspace-editie controleren, afsprakenschema maken (§3.4), link aanleveren | Frans | Fase A |
| Salarisindicatie voor de drie richtingvacatures; stagevergoeding | de drie samen | Fase B |
| Bio's uit §3.1 lezen en aanscherpen (één ronde) | Frans, David, Jan | Fase A |
| LinkedIn-bedrijfspagina en drie profielen bijwerken met §6 | ieder zijn eigen profiel; bedrijfspagina Frans | Fase C |
| Google-bedrijfsprofiel bijwerken met §7 | wie beheerdersrechten heeft | Fase C |
| Review- en quoteverzoeken versturen (§7.1) | de mede-eigenaar per klant | Fase C |
| Toestemming Kwakkel BV voor een screenshot in de vastgepinde post | Frans | Fase C, optioneel |

---

## 9. Fasering

**Fase A: het team en de afspraak** (site, één commit-reeks)
Bio's, rol "Mede-eigenaar", de ene teamzin, teampagina leest uit `constants.ts`, JSON-LD, perskit, llms.txt, chatprompt, profiel, geheugen. De afspraaklink vervangt de meeting chooser; component en script weg. Kan pas live als de agendalink er is (§8); tot die tijd wijst de link naar één bestaande agenda, zodat de site nooit een lege link heeft. Engels in dezelfde commit.

**Fase B: vacatures en detachering** (site)
Vijf vacatures, vacaturepagina, types, schema, redirects, navigatie. De detacheringspagina met alle plekken uit §5.2. Salarisindicaties komen als placeholder `[ophalen]` niet live: zonder bedrag geen publicatie van die drie vacatures, wel de twee stages. Engels in dezelfde commit.

**Fase C: LinkedIn en Google** (buiten de repo, teksten in de repo)
`docs/profielen/linkedin.md` en `docs/profielen/google-bedrijfsprofiel.md` met de definitieve teksten, inclusief de reviewmail. Jullie plakken; ik controleer daarna of de teksten op beide platforms overeenkomen met de site (checklist in dezelfde bestanden).

**Volgorde:** A eerst, want B en C verwijzen naar "mede-eigenaar" en naar de afspraaklink. B en C kunnen daarna parallel.

---

## 10. Meetlat

- Nergens op de site, in de profielen of in de docs staat nog "Co-Founder", een fase aan een naam, of een van de drie oude agendalinks. Controle: `grep` op de dist na de build, zoals bij de transformatie.
- Elke afspraakknop op de site wijst naar dezelfde link; boeken kost één klik en één formulier.
- Vacatures: vijf, allemaal echt, allemaal met dezelfde openingszin. `ai-engineer` en `ai-trainer` geven een 301.
- Detachering: één pagina, één chip in het formulier, één regel in het schema, geen bedrag.
- LinkedIn en Google zeggen letterlijk wat de site zegt: dezelfde kernzin, dezelfde drie ingangen, dezelfde eerste stap.
- Binnen zes weken na fase C: minstens vier nieuwe Google-reviews (de vier huidige klanten) en een eerste meting van boekingen via de startsprintpagina.

# Transformatieplan website: van drie pijlers naar één belofte

**Status:** plan ter bespreking, geen code gewijzigd.
**Datum:** 21 september 2026.
**Basis:** het positioneringsgesprek van 21 september en een volledige copy-inventaris van de site (bijlage: `docs/copy-inventaris-2026-09-21.md`, 1.560 regels, elke pagina, elk onderdeel van `constants.ts`, alle artikelen en cases, de chatprompt, de schema's en de API-mails).
**Leeswijzer:** §1 en §2 zijn de basis (wat we worden en wat de site nu zegt). §3 en §4 zijn de regels en de structuur. §5 en §6 zijn de homepage en de hero's, in detail. §7 tot en met §10 zijn het werk per pagina. §11 tot en met §13 zijn volgorde, beslissingen en meetlat.

---

## 1. Waar we naartoe gaan

**Kernzin.** AI Heroes bouwt software en AI voor organisaties die verder willen dan een pilot. Wij ontwerpen, bouwen en implementeren, en zorgen dat het werkt: met een sluitende business case, compliance vanaf de tekentafel en een team dat ermee overweg kan.

**Slogan.** Van ambitie naar implementatie. Blijft, met "naar" in plaats van het huidige "tot".

**Drie ingangen** (de vragen waarmee klanten nu al binnenkomen):

1. **Iets nieuws bouwen.** "Kunnen jullie dit voor ons bouwen?" Bewijs: Medux, Trabu, InnoEnergy.
2. **Vervangen wat niet meer voldoet.** "We willen af van ons huidige pakket." Bewijs: IC Commerce, Avics, Jogo.
3. **In eigen beheer draaien.** "Kan het op onze eigen servers, binnen Europa?" Bewijs: Tweede Kamer, Envalior, onze eigen stack.

**De AI Heroes-standaard** (bij elke bouw inbegrepen; hier gaan de oude pijlers in op):

- Business case vooraf.
- Compliance vanaf de tekentafel.
- Je mensen kunnen ermee werken.
- Overdracht zonder lock-in.

**De voordeur.** De startsprint: één week, vast bedrag vanaf €8.000, uitkomst een werkend prototype of een bouwplan, altijd met de business case. Eén knop op elke pagina: *Plan een startsprint.*

**De klant.** Organisaties van 50 tot 2.000 medewerkers met een concreet proces, product of systeem dat geld kost of groei tegenhoudt, en een eigenaar die kan beslissen. Budget vanaf €8.000 voor de eerste stap, €15.000 tot ruim €100.000 voor de bouw. Niet: "de directie wil iets met AI", "we vragen tien bureaus om een trainingsofferte", een keynote.

**Besloten in het gesprek:** ook software zonder AI hoort op de voorpagina ("software en AI"). **Nog open:** de namen "startsprint" en "AI Heroes-standaard" (§12).

---

## 2. Wat de site nu zegt

De inventaris is compleet (zie bijlage). Dit zijn de conclusies die het plan dragen.

### 2.1 De cijfers

| Wat | Aantal | Waar |
|---|---|---|
| Pagina's NL / EN | 30 / 28 | `src/pages/**` |
| Pagina's die een catch-all verkopen ("drie pijlers", "onder één dak", "stap in waar je wilt") | 12 van 28 EN, hetzelfde beeld NL | diensten-hub, ai-bureau, groningen, aanpak, over-ons, team, eu-consultancy, digitale-onafhankelijkheid, de-ai-storm, resources, careers, index |
| Pagina's die training verkopen | 5 | training, incompany, ai-geletterdheid, eu-training, hanze |
| Pagina's die consultancy verkopen | 1 | consultancy |
| Pagina's die bouwen verkopen | 4 | software, eu-development, cases-index, menu |
| Plekken waar "onder één dak" of "drie pijlers" letterlijk staat | 11 van de 12 dienstenpagina's, plus hero, approach, footer, JSON-LD, `llms.txt`, chatprompt, `company-profile.md` | inventaris NL §Patronen 1, globaal §Samenvatting 4 |
| Plekken waar "stap in waar je wilt" of een variant staat | 8 | aanpak, eu-consultancy, consultancy, software, digitale-onafhankelijkheid |
| Verschillende knopteksten die allemaal naar `/#contact` gaan | 8 | Start gesprek, Plan een gesprek, Plan een kennismaking, Plan een training, Plan een workshop, Bespreek je project, Plan een consultatie, Direct contact |
| Artikelen die naar het contactformulier linken | 0 van 18 | content §A-samenvatting |
| Cases met harde cijfers | 1 van 4 (Medux) | content §B |
| Cases over training of consultancy | 0 van 4 | content §B |
| Testimonials over een workshop, en hun positie | 2 van 6, op positie 1 en 2 | `constants.ts:150-161` |
| Plekken waar "2 augustus 2026" in de toekomende tijd staat | 14, in 8 bestanden | content §E1 |

### 2.2 De vijf dingen die het plan moeten oplossen

1. **De workshop staat bij de voordeur.** Hero-slide 2 ("Plan een workshop"), de eerste vijf menu-items, de eerste dienstenkaart met de enige prijs ("Vanaf €2.500 per dag"), de eerste FAQ-vraag ("Hoe lang duurt een workshop?"), de eerste twee testimonials en de expliciete volgorde "Training → Consultancy → Software" op de aanpakpagina. Een bezoeker die niets anders leest dan wat het eerst in beeld komt, ziet een trainingsbureau.
2. **"Alles, onder één dak, stap in waar je wilt" is de organiserende zin van de hele site**, tot en met de JSON-LD, `llms.txt` en de chatprompt. Die zin zet de bezoeker aan het kiezen, en de bezoeker kiest het goedkoopste.
3. **Het bewijs wijst de andere kant op dan de tekst.** Alle vier de cases zijn bouwcases, vier van de zes testimonials gaan over bouwen, de enige pagina met echte productiecijfers is de softwarepagina. De tekst verkoopt drie dingen; het bewijs kan er maar één dragen.
4. **De artikelen sturen naar consultancy, en van daar nergens heen.** Zes van de negen artikelparen eindigen op de readiness scan. Geen enkel artikel linkt naar het formulier. Twee keer staat "plan een vrijblijvend gesprek" als platte tekst zonder link.
5. **De voordeur heeft geen drempel.** Acht verschillende knoppen leiden naar hetzelfde formulier met naam, mail, organisatie, onderwerp en bericht. Er wordt niets gevraagd dat een bouwvraag onderscheidt van een trainingsvraag.

### 2.3 Wat er al goed staat

- **De softwarepagina** heeft de juiste toon en het juiste bewijs: Medux-cijfers, PoC in zes dagen, "gebouwd voor productie, niet voor de demo", geen lock-in. Dit is het model voor de rest.
- **`/nl/menu`**, de printbare menukaart, heeft de nieuwe positionering al: kop "Wat wij bouwen", categorieën agents, automation, webdevelopment, dashboards, documentverwerking, business case & PoC, compliance & governance. Training komt er niet in voor.
- **De consultancypagina zegt al waarom het werkt:** "dezelfde partner die adviseert, kan ook bouwen wat in de roadmap staat". Dat argument verhuist naar de voorkant.
- **De compliance-content is actueel en goed** (AI Act-gids, artikel 4, soevereiniteit), alleen gedateerd op een verstreken deadline.
- **De chatassistent** is gebouwd op Europese infrastructuur en presenteert zichzelf als voorbeeld van wat AI Heroes bouwt. Dat is bewijs voor ingang 3.
- **De stijlregels bestaan al** (je-vorm, geen gedachtestreepjes, geen "geen X maar Y", schrijf als Tweakers) in de chatprompt en `company-profile.md`. Het plan volgt ze.

---

## 3. Tekstregels voor alles wat we schrijven

1. **Elke pagina beantwoordt drie vragen, in deze volgorde:** wat bouwen jullie voor mij, hoe beginnen we, waar is het bewijs.
2. **Eén knop, overal dezelfde:** *Plan een startsprint.* Tweede knop, waar nodig: *Bekijk wat we bouwden.* Alleen de trainingspagina's krijgen een tekstlink voor wie alleen een training wil.
3. **Prijzen alleen voor de startsprint en de bouw.** "Vanaf €2.500 per dag" komt nergens meer boven de vouw en verdwijnt uit seoTitles van pagina's in het menu.
4. **Bewijs begint met productiecijfers.** Medux eerst, dan Jogo, IC Commerce, Avics. Workshopreferenties als laatste.
5. **Verboden woorden en zinnen:** full-service, drie pijlers, onder één dak, alles van A tot I, stap in waar je wilt, van change management tot technische implementatie, het hele AI-traject. Ze mogen alleen nog in `company-profile.md` staan als "wat we vroeger zeiden".
6. **De pijlers worden fasen.** Training, business case en compliance worden nooit meer als losse producten genoemd zonder de zin "onderdeel van elke bouw".
7. **Nederlands eerst, dan Engels.** Alle tekst wordt in het Nederlands geschreven en daarna vertaald. Nederlandse werkwoorden (bouwen, koppelen, draaien, overdragen). Engelse termen alleen waar de markt ze zelf gebruikt: business case, compliance, AI Act, proof of concept, hosting, ERP, CRM.
8. **Huisstijl blijft:** je-vorm, korte zinnen, geen gedachtestreepjes, geen "geen X maar Y", geen hypewoorden, geen moraliserend slot.
9. **De toets per pagina:** voelt een COO met een vastgelopen proces zich aangesproken, en voelt een HR-manager die een bewustwordingsworkshop zoekt dat ze hier verkeerd zit? Allebei moet waar zijn.

---

## 4. Nieuwe structuur

### 4.1 Navigatie

| Nu | Straks |
|---|---|
| Diensten (megamenu, 15 items, training eerst) | **Wat we bouwen** → /nl/diensten: Iets nieuws bouwen · Bestaande software vervangen · In eigen beheer draaien · uitgelicht: De startsprint |
| Over ons (Aanpak · Team · Over · TV · Vacatures) | **Hoe we werken** → /nl/over-ons/aanpak: de startsprint · de AI Heroes-standaard · business case · compliance · training van je team |
| Cases (los item) | **Cases** → /nl/cases (blijft, schuift naar voren) |
| Resources (megamenu) | **Over ons** → /nl/over-ons: Het team · Vacatures · AI Salon · Zoals gezien op TV · Resources |
| AI Salon (los item) | (onder Over ons) |
| Contact (knop) | **Plan een startsprint** (knop) → /nl/startsprint |

### 4.2 URL's

Geen bestaande URL verdwijnt zonder 301. Nieuw zijn alleen `/nl/startsprint` en `/en/start-sprint`. Drie bestaande URL's krijgen een nieuwe rol: `/nl/diensten` wordt de bouwoverzichtspagina, `/nl/diensten/software` wordt "Iets nieuws bouwen", `/nl/diensten/eu-consultancy` wordt "In eigen beheer draaien". Voor "Vervangen wat niet meer voldoet" is een nieuwe URL nodig: `/nl/diensten/software-vervangen` en `/en/services/replace-software` (toevoegen aan de slugmap in `src/data/i18n.ts`). Drie URL's gaan op in andere (301): `eu-development`, `digitale-onafhankelijkheid`, en waarschijnlijk `incompany-ai-training` (§7.1).

### 4.3 Sitemap in één oogopslag

```
/                         homepage (§5)
/nl/startsprint           de voordeur (§10.1)
/nl/diensten              wat we bouwen: overzicht (§10.3)
  /software               iets nieuws bouwen (§10.2)
  /software-vervangen     vervangen wat niet meer voldoet (§10.2, nieuw)
  /eu-consultancy         in eigen beheer draaien (§10.2)
  /consultancy            fase: business case en scoping (§7.1)
  /training               fase: training van je team (§7.1)
  /ai-geletterdheid-training, /eu-training, /ai-bureau-nederland, /ai-consultancy-groningen   verdieping en SEO (§7.1)
/nl/over-ons/aanpak       hoe we werken (§10.4)
/nl/over-ons, /team       wie we zijn (§7.2)
/nl/cases, /cases/[slug]  bewijs (§7.3, §8)
/nl/resources/[slug]      artikelen (§8)
/nl/vacatures, /ai-salon, /de-ai-storm, /pers, /menu, legal   ongewijzigd of licht herkaderd (§7.3)
```

---

## 5. De homepage, sectie voor sectie

De homepage is een React-eiland (`pages/HomePage.tsx`) met snap-scroll: hero, diensten, referenties, team, aanpak, contact, footer. De structuur blijft. De inhoud van vrijwel elke sectie verandert, omdat elke sectie nu de drie pijlers herhaalt.

### 5.1 Hero (`components/Hero.tsx`, copy in `constants.ts` hero.slides)

**Nu.** Vier slides die elke zes seconden wisselen, met eigen kop, subkop en knop. Slide 1 "Alles van A tot I" / "Van ambitie tot implementatie" / "Eén vaste partner voor alles AI." Slide 2 "Training & Workshops" met knop "Plan een workshop" (springt naar het formulier met onderwerp Training voorgeselecteerd). Slide 3 "AI Consultancy" met knop "Start met een scan". Slide 4 "Software & Implementatie" met knop "Bespreek je project". De slides zijn letterlijk de pijlers. Een bezoeker die op seconde zeven binnenkomt, ziet "Plan een workshop" als eerste boodschap.

**Straks.** De slideshow blijft als mechaniek (hij is goed gebouwd en geeft de site zijn karakter), maar de vier slides worden: de belofte, en de drie ingangen. Elke slide heeft dezelfde knop. Zo kan de bezoeker nooit een verkeerde voordeur zien.

| # | Label (segment onderaan) | Kop | Subkop | Knop | Beeld |
|---|---|---|---|---|---|
| 1 | Van A naar I | Van <red>ambitie</red> naar <blue>implementatie</blue> | Je hebt een idee, een proces dat beter kan of software die aan vervanging toe is. Wij bouwen wat je nodig hebt en zorgen dat het draait. | Plan een startsprint | summit.webp (blijft) |
| 2 | Iets nieuws bouwen | Van <red>idee</red> naar <blue>werkend systeem</blue> | Een assistent, een werkstroom, een tool die er nog niet is. In zes dagen een werkend prototype, daarna door naar productie. | Plan een startsprint | hero-bg.webp (nu slide 4) |
| 3 | Vervangen wat niet meer voldoet | <red>Weg</red> met software die je <blue>tegenhoudt</blue> | Verouderde of te dure systemen vervangen door iets dat wél past. Gekoppeld aan je ERP, CRM en de rest van je landschap. | Plan een startsprint | glass.webp (nu slide 3) |
| 4 | In eigen beheer draaien | AI op <red>eigen</red> grond, <blue>Europees</blue> gehost | Op je eigen servers of bij een Europese partij. Zonder afhankelijkheid van Amerikaanse cloud, met de AI Act ingebouwd. | Plan een startsprint | road.webp (nu slide 2) |

Engels:

| # | Label | Kop | Subkop | Knop |
|---|---|---|---|---|
| 1 | From A to I | From <red>ambition</red> to <blue>implementation</blue> | You have an idea, a process that could work better, or software that needs replacing. We build what you need and make sure it runs. | Plan a start sprint |
| 2 | Build something new | From <red>idea</red> to <blue>running system</blue> | An assistant, a workflow, a tool that does not exist yet. A working prototype in six days, then on to production. | Plan a start sprint |
| 3 | Replace what no longer fits | <red>Out</red> with software that <blue>holds you back</blue> | Replace outdated or overpriced systems with something that fits, connected to your ERP, CRM and the rest of your landscape. | Plan a start sprint |
| 4 | Run it on your own terms | AI on <red>your own</red> ground, <blue>hosted in Europe</blue> | On your own servers or with a European provider. No dependency on US cloud, with the AI Act built in. | Plan a start sprint |

Technisch: `ctaTarget` wordt voor alle vier `/nl/startsprint` (resp. `/en/start-sprint`), zodat de `#contact?topic=` voorselectie (die het onderwerp "Training" in het formulier zet) vervalt. Het `selectTopic`-event in `Hero.tsx` en `Services.tsx` mag blijven bestaan voor later, maar wordt niet meer aangeroepen vanuit de hero.

Beslispunt voor de kop van slide 3 en 4: de rood/blauw-onderstreping vraagt om twee sleutelwoorden per kop. De voorstellen hierboven zijn geschreven op ritme en op de onderstreping. Als ze te stellig zijn ("Weg met software"), is het rustiger alternatief: "Van <red>verouderd</red> naar <blue>passend</blue>".

### 5.2 Diensten (`components/Services.tsx`, copy in `services`)

**Nu.** Kop "Alles van A tot I". Drie GlowCards: Training (rood, knop "Plan workshop", springt naar formulier met Training voorgeselecteerd), Consultancy (blauw, knop "Start een scan", link naar readiness scan), Software (zwart, "Bespreek project"). De kaartkleur is de pijlerkleur. Training staat links.

**Straks.** Kop: **Wat we voor je bouwen.** Drie kaarten voor de drie ingangen, in deze volgorde, alle drie met dezelfde onderste actie "Plan een startsprint" en een link naar de bijbehorende bouwpagina.

| Kaart | Tag | Titel | Tekst | Link |
|---|---|---|---|---|
| 1 | Nieuw | Iets nieuws bouwen | Een assistent, een werkstroom, een tool die er nog niet is. Van prototype in zes dagen tot systeem in productie. Zoals bij Medux: 4.000 gesprekken per maand, afgehandeld door AI die wij bouwden. | /nl/diensten/software |
| 2 | Vervangen | Vervangen wat niet meer voldoet | Software die te duur, te traag of te oud is, vervangen door iets dat past. Gekoppeld aan je ERP, CRM en de rest van je landschap. | /nl/diensten/software-vervangen |
| 3 | Eigen beheer | In eigen beheer draaien | AI en software op je eigen servers of bij een Europese partij. Zonder Amerikaanse cloud, met de AI Act ingebouwd. | /nl/diensten/eu-consultancy |

De kleurcodering blijft (rood, blauw, zwart) maar betekent voortaan niets meer; het is ritme, geen pijlerkleur. `CARD_CONFIG` in `Services.tsx` verliest de `tag`/`tooltip` per pijler en de `#contact?topic=`-ankers.

### 5.3 Nieuw blok: de AI Heroes-standaard

Dit blok bestaat nog niet op de homepage en is het belangrijkste nieuwe element: het is waar training, business case en compliance een plek krijgen zonder weer producten te worden. Positie: direct na de dienstenkaarten, als lichte band (past in het snap-ritme als extra sectie, of als onderste helft van de dienstensectie op desktop).

Kop: **Bij elke bouw inbegrepen.** Onderkop: *We noemen het de AI Heroes-standaard. Vier dingen die je nooit apart hoeft te kopen.*

1. **Business case vooraf.** Voordat we bouwen, weet je wat het kost, wat het oplevert en wanneer het zich terugverdient. Op één A4, klaar voor de directie.
2. **Compliance vanaf de tekentafel.** AI Act-classificatie, logging, menselijk toezicht en Europese hosting zitten in het ontwerp. Achteraf repareren is niet nodig.
3. **Je mensen kunnen ermee werken.** Het team dat het systeem gaat gebruiken, trainen we op dat systeem. Zo landt het op de werkvloer en voldoe je meteen aan artikel 4 van de AI Act.
4. **Overdracht zonder lock-in.** Broncode, documentatie en datamodel zijn van jou. Je kunt zonder ons verder als je dat wilt.

Engels: **Included in every build.** *We call it the AI Heroes standard. Four things you never have to buy separately.* Business case first. Compliance from the drawing board. Your people trained on it. Handover without lock-in.

Bouw: nieuw component `components/Standard.tsx` (vier kolommen, cijfer, kop, twee regels) en een `standard`-sleutel in `constants.ts`. Op subpagina's hergebruikt als `.astro`-blok (zie §6).

### 5.4 Referenties (`components/SocialProof.tsx`, copy in `socialProof`)

**Nu.** Logowand plus zes testimonials. Volgorde: Hanzehogeschool (workshop), Postcode Loterij (workshop), IC Commerce (bouw), Cloud Primero (samenwerking), Jogo (software), Avics (bouw). De eerste twee die een bezoeker leest, gaan over een workshop.

**Straks.** Kop: **Wat we bouwden, en wat het opleverde.** Volgorde: Medux (nieuw toe te voegen als testimonial of als cijferkaart: 4.000 gesprekken per maand, 70% lagere kosten, 80% automatisch afgehandeld), Jogo, IC Commerce, Avics, Cloud Primero, dan pas Postcode Loterij en Hanze. De logowand blijft ongewijzigd: enterprise-logo's zijn bewijs, ook als ze uit trainingen komen.

Als er een Medux-quote beschikbaar is, wordt dat de eerste. Zo niet, dan opent de sectie met een cijferkaart (StatGrid-stijl) boven de quotes.

### 5.5 Team (`components/Team.tsx`, copy in `team`)

**Nu.** "Geboren probleemoplossers" / "Drie oprichters, één gedeelde passie voor AI." Neutraal, kan blijven.

**Straks.** Eén wijziging: de subtekst krijgt een zin die het traject volgt in plaats van de pijlers: *Frans maakt de business case, David bouwt, Jan zorgt dat je mensen ermee kunnen werken.* Zo klopt het met de meeting chooser (§9.4) en de teampagina.

### 5.6 Aanpak (`components/Approach.tsx`, copy in `approach.p2`)

**Nu.** "AI raakt alles / Je strategie, je mensen, je technologie / Van change management tot technische implementatie / Eén agency voor het hele traject / We adviseren, trainen, bouwen en zorgen dat het werkt." Dit is het manifest van de drie pijlers, in het groot op een donkere sectie.

**Straks.** Zelfde vorm (grote serif, twee onderstreepte woorden), nieuwe tekst:

*Wij bouwen <red>software</red> die werkt op de dag dat we vertrekken.*
*Met een business case die klopt, compliance die vanaf dag één meeloopt*
*en mensen die ermee overweg kunnen.*
*Van ambitie naar <blue>implementatie</blue>. Eén partner, één traject.*

Engels: *We build <red>software</red> that works the day we leave. / With a business case that adds up, compliance that runs from day one / and people who know how to use it. / From ambition to <blue>implementation</blue>. One partner, one path.*

### 5.7 Contact (`components/Contact.tsx`, copy in `contact` en `contactForm`)

**Nu.** Kop "Start vandaag met AI". Onderwerpchips: Training, Consultancy, Software & Implementatie, Iets anders. Velden: naam, e-mail, organisatie, bericht. Meeting chooser met drie oprichters en hint per oprichter ("Training, use cases, AI-pipelines" bij Jan).

**Straks.** Kop: **Vertel wat je wilt bouwen.** Onderkop: *We reageren binnen 24 uur. Meestal met een voorstel voor een startsprint.* De onderwerpchips worden de drie ingangen plus "Weet ik nog niet": Iets nieuws bouwen, Bestaande software vervangen, In eigen beheer draaien, Weet ik nog niet. Twee velden erbij, allebei als keuzeknoppen (geen vrij tekstveld, dat kost de bezoeker niets extra):

- **Wat is het budget waar je aan denkt?** Onder €10.000 · €10.000 tot €25.000 · €25.000 tot €100.000 · Meer dan €100.000 · Nog geen idee
- **Wie is de eigenaar van dit project?** Ik beslis zelf · Ik beslis mee · Ik oriënteer me voor iemand anders

De antwoorden gaan mee in de e-mail (`api/contact.ts`: twee velden erbij in het schema en de mailbody). Let op: `PageContactForm.tsx` (het formulier onder elke subpagina) post nog naar het oude Netlify-pad (`POST /` met `form-name=contact`), terwijl `Contact.tsx` naar `/api/contact` post. De inventaris vond dit als afwijking; het subpaginaformulier moet naar `/api/contact`, anders komen de kwalificatievelden daar nooit aan.

Niemand wordt geweigerd op basis van het antwoord. Het bepaalt wél of een oprichter belt of dat een schriftelijk antwoord met de startsprintpagina volstaat.

Meeting chooser hints: Frans "Business case en scoping", David "Bouw, hosting en compliance", Jan "Adoptie en training bij je team". De "educationNote" ("Voor scholen en non-profits hebben we lagere tarieven") verdwijnt van de homepage; die zin hoort bij de trainingspagina.

### 5.8 Sticky knop en chat

De zwevende knop rechtsonder ("Start gesprek") opent nu de chat. Tekst wordt **Wat wil je bouwen?** en blijft de chat openen. De chatprompt krijgt de kwalificatievraag (§9.6).

### 5.9 SEO van de homepage

`src/pages/index.astro` en `src/pages/en/index.astro` plus `SEO_CONTENT` in `HomePage.tsx` (dubbel; het Astro-bestand wint bij build, de React-variant is dood gewicht en mag weg):

- NL titel: **AI Heroes | Wij bouwen software en AI die in productie draait** (of korter: *AI-software laten bouwen | AI Heroes, Groningen*)
- NL beschrijving: *AI Heroes bouwt software en AI voor organisaties die verder willen dan een pilot. Business case, compliance en training inbegrepen. Vanuit Groningen, voor heel Europa.*
- EN titel: **AI Heroes | Software and AI that runs in production**
- EN beschrijving: *AI Heroes builds software and AI for organisations that want more than a pilot. Business case, compliance and training included. From Groningen, for all of Europe.*

`PROFESSIONAL_SERVICE_SCHEMA` in `src/data/schema.ts`: `description` wordt de kernzin; `hasOfferCatalog` wordt herschreven van drie pijlers naar drie ingangen plus de startsprint als `Offer` met prijs; `founder[].jobTitle` volgt de nieuwe rollen.

---

## 6. Hero's op alle subpagina's (`src/layouts/SubpageLayout.astro`)

Elke statische pagina krijgt zijn hero van dit ene layoutbestand: badge, titel, subtitel, één knop, "Vertrouwd door"-rij. Drie dingen in het layoutbestand zelf sturen nu de pijlerlogica en moeten mee:

1. **`pillarBadge` en `heroImage`.** De badge ("Training", "Consultancy", "Software & Implementatie") kiest de hero-foto én wordt als `preselectedTopic` in het contactformulier onderaan gezet. Straks: de badge benoemt de ingang of de fase ("Iets nieuws bouwen", "In eigen beheer", "Onderdeel van de AI Heroes-standaard"). De foto volgt de ingang: nieuw = hero-bg, vervangen = glass, eigen beheer = road, overig = summit.
2. **Standaardknop.** Nu `Start gesprek` naar `/#contact`. Straks `Plan een startsprint` naar `/nl/startsprint`. Pagina's die de knop overschrijven (`ctaLabel`) doen dat straks alleen nog met een variant die naar dezelfde pagina wijst ("Bekijk de startsprint", "Start met een startsprint").
3. **Contactsectie onderaan.** `PageContactForm` blijft, met de twee nieuwe kwalificatievelden (§5.7) en de kop "Vertel wat je wilt bouwen".

Nieuw in de layout: een optioneel `standard`-blok (`<StandardBand />`) dat de vier punten van de AI Heroes-standaard toont, standaard aan op alle bouw- en fasepagina's, uit op legal, vacatures en events.


---

## 7. Pagina voor pagina: wat er met elke bestaande pagina gebeurt

Legenda voor "lot": **herschrijven** (zelfde URL, nieuwe rol en tekst), **herkaderen** (zelfde URL, alleen opening, knop, badge en slot veranderen; de rest blijft), **opgaan in** (inhoud verhuist naar een nieuwe pagina, oude URL blijft als korte doorverwijspagina of 301), **ongemoeid** (alleen de globale wijzigingen uit §6 en §9 werken door), **noindex** (blijft bestaan, maar niet meer vindbaar).

De Engelse pagina volgt in elke rij de Nederlandse; de EN-inventaris laat zien dat de EN-pagina's regel voor regel vertalingen zijn van de NL-pagina's, dus het lot is per paar gelijk. Afwijkingen staan erbij.

### 7.1 Diensten / Services

| URL (NL / EN) | Verkoopt nu | Lot | Nieuwe rol, titel en knop | Fase |
|---|---|---|---|---|
| /nl/diensten · /en/services | catch-all: "Drie pijlers, één partner", kaart Training met "Vanaf €2.500 per dag" vooraan, FAQ "Welke pijler heb ik nodig?" | **herschrijven** | Wordt de overzichtspagina "Wat we bouwen" (§10.3) op deze URL, zodat backlinks en ranking blijven. Titel **Wat we bouwen**. Subtitel *Software en AI die in productie draait. Drie manieren om te beginnen, één voordeur.* Kaarten: de drie ingangen. Dan het standaard-blok, cases, FAQ ("Bouwen jullie ook software zonder AI?", "Hoe beginnen we?", "Wat als we eerst willen leren wat AI kan?"). Knop *Plan een startsprint*. `/nl/bouwen` komt er niet als aparte URL; `diensten` is de bouwpagina. | 1 |
| /nl/diensten/software · /en/services/software | software build; sterkste pagina van de site (Medux-cijfers, PoC €8.000, "gebouwd voor productie, niet voor de demo") | **herschrijven** tot de bouwpagina **Iets nieuws bouwen** (§10.2) | Zelfde URL. Titel **Iets nieuws bouwen**. Badge *Iets nieuws bouwen*. De vijf aanbodkaarten (PoC, AI op maat, systeemintegratie, dedicated teams, digital twins) blijven als "Wat we bouwen", maar de PoC-kaart wordt de startsprint en de tekst "Bouwen, trainen en advies onder één dak" (:19, :93) en "Je stapt in op het niveau dat past" (:99) vervallen. Verwante diensten-blok wordt de twee andere ingangen. | 2 |
| /nl/diensten/consultancy · /en/services/consulting | consultancy; zes losse producten met prijzen (scan €3.000, roadmap €5.000), "Je stapt in waar het voor jou zinvol is" (:95) | **herkaderen** tot fasepagina **Business case en scoping** | Zelfde URL, uit het menu. Nieuwe opening: *Elke bouw begint bij ons met een business case. Deze pagina beschrijft hoe we die maken.* De zes producten blijven als verdieping (ze ranken en er wordt op gezocht), maar de eerste die genoemd wordt is de startsprint; de readiness scan en business case-analyse worden beschreven als "wat er in de startsprint zit". Prijzen onder de vouw. Knop *Plan een startsprint*. Badge *Onderdeel van de AI Heroes-standaard*. | 3 |
| /nl/diensten/training · /en/services/training | training; zes workshops, "Vanaf €2.500 per dag" in de seoTitle, hero-knop "Plan een training" | **herkaderen** tot fasepagina **Training van je team** | Zelfde URL, uit het menu, seoTitle behouden voor de vindbaarheid. Nieuwe opening: *Bij elke bouw trainen we het team dat ermee gaat werken. Dat is de training die het meest oplevert: op jouw systeem, met jouw data. Losse trainingen doen we ook; hieronder staat wat we aanbieden en wat het kost.* De zes workshops blijven. Prijs blijft, maar na de opening. Knop *Plan een startsprint* met tweede tekstlink *Alleen een training? Vraag hem hier aan* naar het formulier onderaan met onderwerp Training. Hier hoort ook de zin over lagere tarieven voor onderwijs en non-profit. | 3 |
| /nl/diensten/incompany-ai-training · /en/services/incompany-ai-training | training; ~90% duplicaat van training (zelfde FAQ, zelfde prijs), twee dode links (copilot-basics, ai-voor-developers) | **opgaan in** training | 301 naar /nl/diensten/training. Als de pagina op "incompany AI training" rankt: laten staan, herkaderen als training, dode links repareren. Beslissen op Search Console-data. | 3 |
| /nl/diensten/ai-geletterdheid-training · /en/services/ai-literacy-training | training, compliance-gedreven; "Voor 2 augustus aantoonbaar op orde?" | **herkaderen** | Zelfde URL. De deadline van 2 augustus 2026 is verstreken; de tekst gaat van "voor de deadline" naar "de toezichthouder is actief". Opening: *Artikel 4 vraagt om aantoonbare AI-geletterdheid. Bouwen wij voor je, dan zit die training in het traject en krijg je het bewijs erbij. Alleen de training kan ook.* Blijft als los product boekbaar, dit is het ene compliance-product dat zichzelf verkoopt. Knop *Plan een training*, blijft. | 3 |
| /nl/diensten/eu-consultancy · /en/services/eu-consultancy | catch-all in EU-vorm: "3 pijlers · Training · Scan · Bouw", "Je kunt instappen waar je wilt" | **opgaan in** bouwpagina **In eigen beheer draaien** | Deze URL wordt de bouwpagina voor de derde ingang (§10.2), omdat hij al rankt op "soevereine AI" en het uitgelichte menu-item was. Titel **In eigen beheer draaien**. De drie stappen (bewustwording, scan, implementatie) worden: startsprint met hostingontwerp en risicobeoordeling, bouw en migratie, training van je team. De CLOUD Act-uitleg blijft als "Waarom dit speelt". | 2 |
| /nl/diensten/eu-development · /en/services/eu-development | software build (EU-hosting) | **opgaan in** eu-consultancy (nieuwe eigen-beheerpagina) | 301 naar /nl/diensten/eu-consultancy. Inhoud (on-premises, Europese cloud, aanvullende diensten) verhuist mee als sectie "Wat we bouwen". | 2 |
| /nl/diensten/eu-training · /en/services/eu-training | training; hero-knop "Plan een workshop" | **herkaderen** | Zelfde URL, uit het menu. Wordt de trainingsmodule binnen de eigen-beheerpagina, met eigen URL voor de vindbaarheid. Knop *Plan een startsprint*; tekstlink naar het formulier voor wie alleen de sessie wil. | 3 |
| /nl/diensten/digitale-onafhankelijkheid · /en/services/digital-independence | catch-all: drie sporen (Training, Consultancy, Development) | **opgaan in** eu-consultancy | 301 naar /nl/diensten/eu-consultancy. De tijdlijn (AI Act, CLOUD Act) en het motievenverhaal verhuizen mee. | 2 |
| /nl/diensten/ai-bureau-nederland · /en/services/ai-agency-netherlands | catch-all SEO-lander: "Wat een full-service AI bureau voor je doet", drie pijlers | **herschrijven** | Zelfde URL (rankt op "AI bureau Nederland"). Titel blijft, body wordt: *Op zoek naar een AI-bureau dat bouwt?* De drie ingangen, de standaard, de cases. "Full-service" verdwijnt uit titel en tekst. Knop *Plan een startsprint*. | 3 |
| /nl/diensten/ai-consultancy-groningen · /en/services/ai-agency-groningen | catch-all lokaal: consultancy in de titel, drie pijlers in de body, alle prijzen op één hoop | **herschrijven** | Zelfde URL. Titel **AI-bureau in Groningen** (seoTitle mag "AI consultancy Groningen" houden). Body: dezelfde structuur als ai-bureau-nederland plus de Groningen-sectie (AI Fabriek, bezoekadres, AI Salon). Prijzen: alleen de startsprint. | 3 |

### 7.2 Over ons / About

| URL | Verkoopt nu | Lot | Nieuwe rol | Fase |
|---|---|---|---|---|
| /nl/over-ons · /en/about | catch-all; hero "full-service AI agency … van change management tot technische implementatie", stat "3 expertises onder één dak", sectie "Wat we doen" met drie pijlers, Engelstalige kaartkop "Practice over theory, results over reports" | **herschrijven** (copy in `constants.ts` aboutPage) | Hero-subtitel wordt de kernzin. Intro: het oprichtingsverhaal blijft (de markt is gefragmenteerd), maar de conclusie wordt "daarom bouwen wij, en nemen we business case, compliance en training mee". Stats: 50+ organisaties · sinds 2019 · 4.000 gesprekken per maand bij Medux. Teamrollen volgen het traject (§9.4). "Wat we doen" wordt de drie ingangen. Waarden blijven. Engelse kaartkop vertalen. | 3 |
| /nl/over-ons/aanpak · /en/about/approach | catch-all; het manifest: "Drie pijlers, één traject", "Instappen waar je wilt", "De natuurlijke volgorde is Training → Consultancy → Software", tarievenblok met alle drie prijzen | **herschrijven** tot **Hoe we werken** (§10.4) | Zelfde URL (geen nieuwe slug nodig; menu-label wordt "Hoe we werken"). Volledig nieuwe tekst: het traject in volgorde, de standaard uitgelegd, principes blijven. Tarievenblok: alleen startsprint en "bouw vanaf €15.000". seoTitle toevoegen (ontbreekt nu). | 2 |
| /nl/over-ons/team · /en/about/team | catch-all; rollen wijken af van constants.ts, slot "Of je nu een workshop wilt boeken of wilt sparren" | **herkaderen** | Rollen gelijktrekken met §9.4 op alle drie plekken (teampagina, over-ons, schema). Slot wordt *Vertel wat je wilt bouwen.* seoTitle toevoegen. | 3 |

### 7.3 Cases, resources, overige

| URL | Nu | Lot | Nieuwe rol | Fase |
|---|---|---|---|---|
| /nl/cases · /en/cases | software build; "Werkende AI die we samen met onze klanten hebben gebouwd" | **ongemoeid**, promoveren | Komt in het hoofdmenu (§9.1). Subtitel mag blijven. Kaart-eyebrow = `pillarBadge` uit de case-frontmatter; die badges ("Software & Implementatie", "Consulting + Software") worden de ingang ("Iets nieuws bouwen", "Vervangen"). Knop *Plan een startsprint*. | 2 |
| /nl/cases/[slug] · /en/cases/[slug] | template met default-knop "Start gesprek" naar de homepage | **herkaderen** | `ctaLabel` naar *Plan een startsprint*; `trustedBy` weglaten; onder de case een vaste regel *Zoiets laten bouwen? Een startsprint is de eerste stap.* met link. Zie §8 voor de inhoud per case. | 2 |
| /nl/resources · /en/resources | contentlijst; "Door een full-service AI bureau uit Groningen" | **herkaderen** | Verhuist in het menu onder Over ons. seoDescription zonder "full-service". Knop default. | 3 |
| /nl/resources/[slug] · /en/resources/[slug] | artikeltemplate zonder verwante links, hero-knop naar homepage | **herkaderen** | Vaste slotband onder elk artikel: *Wil je dit laten bouwen in plaats van erover lezen?* met startsprint-link; plus "Meer artikelen"-blok zoals de cases dat al hebben. Zie §8 voor de artikelen zelf. | 3 |
| /nl/vacatures, /nl/vacatures/[slug] · /en/careers | recruitment; "Van boardroom-workshops tot custom software" in de intro | **ongemoeid** | Alleen de intro-zin in `careersPage.hero.subtitle` en `intro` volgt de kernzin. Vacatureteksten laten staan. | 3 |
| /nl/de-ai-storm · /en/de-ai-storm | PR; herhaalt de drie pijlers als blokje en "onder één dak" (`AIStormFeature.astro:41-47`) | **herkaderen** | Het drie-pijlerblokje wordt het standaard-blok of de drie ingangen. Knop *Plan een startsprint*. Pull-quote "AI werkt als je weet hoe" mag blijven; het is de TV-context. | 3 |
| /nl/ai-salon · /en/ai-salon | community-event | **ongemoeid** | Eigen wereld, eigen toon. Geen wijziging. | – |
| /nl/pers · /en/press | perskit; boilerplate-tekst over het bedrijf | **herkaderen** | De boilerplate ("AI Heroes is een full-service AI agency…") in `pages/nl/Pers.tsx` wordt de kernzin. | 3 |
| /nl/menu | printbare menukaart "Wat wij bouwen" (agents, automation, web development, dashboards, documentverwerking, business case & POC, compliance & governance); noemt training níet | **ongemoeid**, en als voorbeeld gebruiken | Dit is de enige pagina die nu al de nieuwe positionering heeft: bouwen voorop, business case en compliance als onderdeel. De categorieën van deze pagina zijn een goede bron voor "Wat we bouwen" op de bouwpagina's. | – |
| /hanze | workshopwizard, noindex | **ongemoeid** | Tooling voor een lopende training. | – |
| /404 | hard Nederlands, ook voor EN; knop "Bekijk diensten"; redirectlijst bevat slugs die niet meer bestaan | **herkaderen** | Knop wordt *Wat we bouwen*. Redirectlijst opschonen. Taalkeuze op basis van pad (`/en/...` naar EN-tekst). | 3 |
| Legal (privacy, voorwaarden, ai-assistent) | juridisch; voorwaarden noemen "workshops, trainingen, advies en softwareontwikkeling"; hero-knop "Start gesprek" staat ook hier | **ongemoeid** inhoudelijk | Eén technische fix: `SubpageLayout` toont de hero-knop niet als `showContactForm={false}`. Voorwaarden mogen "software" als eerste noemen, maar dat is een juridische tekst; niet aanraken zonder de jurist. | 3 |

### 7.4 Wat de EN-inventaris extra opleverde

- Alle EN-pagina's zijn regel-voor-regel vertalingen van de NL-pagina's (zelfde regelnummers, zelfde volgorde). Dat bevestigt de werkwijze uit §4: NL eerst, dan EN.
- Twee dode links op de EN-incompany-pagina (`/en/services/copilot-basics`, `/en/services/ai-for-developers`), dezelfde als in het Nederlands.
- Hreflang-gat tussen `/nl/legal/ai-assistent` en `/en/legal/ai-assistant` (slugmap in `src/data/i18n.ts`).
- `ai-agency-netherlands` gebruikt "the AI Fabriek", `ai-agency-groningen` "The AI Factory". Eén term kiezen (advies: "AI Fabriek", het is een eigennaam).
- Een Nederlandse codecommentaar in `en/ai-salon.astro`.

---

## 8. Content collections: cases en artikelen

### 8.1 Cases (`src/content/cases/{nl,en}/*.mdx`)

De cases zijn het sterkste bezit van de site en het minst goed ingezet. Wat de inventaris laat zien: alle vier zijn bouwcases, alleen Medux heeft harde cijfers, OLX (het grootste merk) heeft geen enkel cijfer en geen quote, Trabu telt in de tekst acht dagen (twee dagen prototyping plus zes dagen sprint) waar de titel zes dagen claimt, en alle acht bestanden hebben hetzelfde hardgecodeerde slotblok "Wil je vergelijkbare resultaten?" met links naar een anker `#software` dat op de dienstenpagina niet bestaat.

| Case | Nu | Straks |
|---|---|---|
| Medux | badge "Software & Implementatie", 70% / 80% / 7.8 / 4.000 per maand, slotlink naar software-diensten als tekstlink | Badge **Iets nieuws bouwen**. Blijft het vlaggenschip. Eén alinea toevoegen over de standaard in de praktijk: welke business case eraan voorafging, hoe logging en doorschakeling de compliance-eis invullen, hoe het klantenserviceteam is getraind. Dat maakt Medux het bewijs voor de hele belofte, niet alleen voor de bouw. |
| OLX | badge "Consultancy + Software", geen cijfers, geen quote | Badge **Iets nieuws bouwen**. Cijfers opvragen bij OLX (zoekconversie, gebruik van visual search). Lukt dat niet, dan de case korter maken en eerlijk als productcase presenteren: "wat we bouwden" in plaats van "de resultaten". |
| Trabu | badge "Software & Implementatie", 6 dagen, enige klantquote | Badge **Iets nieuws bouwen**. Dagentelling gelijktrekken (zes werkdagen sprint na een tweedaagse voorbereiding, en dat ook zo zeggen). Wordt de standaardillustratie van de startsprint. |
| InnoEnergy | badge "Software & Implementatie", geen KPI's, klikbaar prototype | Badge **Iets nieuws bouwen**. Eerlijk als prototypecase: "van visie naar goedgekeurd prototype in [x] weken". Weken opvragen. |
| Nieuw: IC Commerce, Jogo, Avics | alleen testimonial | Drie korte cases van één scherm voor ingang 2, **Vervangen wat niet meer voldoet**. Zonder deze cases heeft de tweede ingang geen bewijs op de site. Materiaal: de bestaande testimonials plus één gesprek per klant. |
| Nieuw: eigen stack | alleen in de disclosure van de chat | Korte case **In eigen beheer draaien**: de chatassistent op aiheroes.io draait op Europese infrastructuur, met Supabase EU, model-routing en retentiebeleid. Het is het enige bewijs voor ingang 3 dat zonder klanttoestemming te publiceren is. |

Sjabloonwijzigingen (`src/pages/{nl,en}/cases/[slug].astro`): het slotblok "Wil je vergelijkbare resultaten?" verhuist uit de acht MDX-bestanden naar de template, met de tekst *Zoiets laten bouwen? Een startsprint is de eerste stap.* en de knop naar `/nl/startsprint`. `pillarBadge` wordt in het schema hernoemd naar `entry` met drie toegestane waarden. `seoTitle` invullen per case (staat in het schema, wordt nergens gezet). ProofRow op de cases-index: Prosus en Envalior eruit zolang er geen case van is.

### 8.2 Artikelen (`src/content/articles/*.mdx`, 9 paren)

De artikelen zijn goed geschreven en ranken; ze blijven allemaal. Drie ingrepen, allemaal aan de randen:

**A. De verstreken deadline.** Veertien plekken in acht bestanden zeggen dat de handhaving "vanaf 2 augustus 2026" begint, inclusief de hero-subtitel en slot-CTA van beide AI Act-artikelen. Sinds 2 augustus is de toezichthouder actief. Herschrijven naar tegenwoordige tijd: *Sinds 2 augustus 2026 is het Nederlandse toezicht operationeel.* Bestanden: `eu-ai-act-compliance*.mdx` (subtitle, :23, :73, description), `ai-geletterdheid.mdx`/`ai-literacy.mdx` (:14, :62), `ai-beleid-opstellen.mdx`/`ai-policy-guide.mdx` (:26), `ai-implementatie-mkb.mdx`/`ai-implementation-sme.mdx` (:19). `updatedDate` bijwerken.

**B. De slot-CTA.** Geen enkel artikel linkt naar het formulier; zes van de negen eindigen op de readiness scan. Elk artikel krijgt dezelfde slotalinea in de template (`resources/[slug].astro`), niet in de MDX: *Wil je dit laten bouwen in plaats van erover lezen? Een startsprint is de eerste stap: één week, vast bedrag, een werkend prototype of bouwplan.* De bestaande inline links naar consultancy en training blijven, want die pagina's blijven bestaan. De twee ongelinkte "plan een vrijblijvend gesprek"-zinnen (`wat-kost-ai-implementatie.mdx:73`, `ai-implementation-costs.mdx:75`) worden links naar de startsprint.

**C. Twee artikelen die de oude positionering hardop uitspreken.**

- `top-10-ai-consultancy-nederland.mdx` beschrijft AI Heroes als "Full-service AI agency met drie pijlers onder één dak" en zet het bureau in een lijst van tien vergelijkbare consultancies. Dat is precies het "één van tien bureaus"-probleem. De typering van nummer 1 wordt: *Bouwt software en AI en zet die in productie, met business case, compliance en training inbegrepen. Sterk voor organisaties met een concreet systeem of proces; minder logisch voor wie alleen een training of een adviesrapport zoekt.* De keuzehulp onderaan verwijst voor "alleen training" al naar een ander bureau; dat mag zo blijven, het is het filter in tekstvorm. De tabelregel volgt mee.
- `wat-kost-ai-implementatie.mdx` is de prijshub en zet training bovenaan de tabel. Volgorde omdraaien: startsprint, maatwerksoftware, systeemintegratie, dan business case en training als "inbegrepen bij een bouw, los ook mogelijk". De PoC-prijs in dit artikel ("vanaf EUR 15.000") wijkt af van de softwarepagina en `llms.txt` ("vanaf EUR 8.000"); gelijktrekken op €8.000 als startsprintprijs. Het jaartal "2026" in de titel wordt per 1 januari een probleem; de titel zonder jaartal maken en het jaartal in de subtitel zetten.

**D. Hygiëne die meeloopt.** Roadmapprijs "vanaf EUR 5.000" (strategiegids) versus "tienduizenden euro's" (kostenartikel): één cijfer kiezen. "50% betere uitkomsten" (NL) versus "40%" (EN) in het geletterdheidsartikel: één cijfer kiezen. `alternateSlug` in het schema wordt nergens gebruikt; laten staan of verwijderen, maar niet als waarheid behandelen. Een "Meer artikelen"-blok toevoegen aan de artikeltemplate, zoals de cases dat al hebben. Vier artikelen zonder `updatedDate` (soevereine AI, Europese ChatGPT-alternatieven, beide talen) zijn juist de snelst verouderende; datum zetten bij de eerstvolgende controle.

### 8.3 Resources-index

`/nl/resources` en `/en/resources`: seoDescription zonder "full-service AI bureau", `seoTitle` en `ctaLabel` toevoegen (de cases-index heeft ze wel), en de sortering op `publishDate` vervangen door een handmatige volgorde, want zeven van de negen NL-artikelen delen dezelfde publicatiedatum en de volgorde is nu willekeurig. Bovenaan: het kostenartikel en de AI Act-gids, de twee die het dichtst bij een bouwvraag zitten.

---

## 9. Globale elementen

### 9.1 Navigatie (`components/Navbar.tsx`, copy in `nav`)

**Nu.** "Diensten" is een megamenu met 15 items in drie kolommen; de eerste vijf zijn trainingen. Uitgelicht item: "EU AI Consultancy". Verder "Over ons" (drie kolommen), "Resources", "Contact".

**Straks.** Vijf items, geen megamenu voor diensten meer:

| Item | Doel | Submenu |
|---|---|---|
| Wat we bouwen | /nl/diensten | Iets nieuws bouwen · Bestaande software vervangen · In eigen beheer draaien · uitgelicht: De startsprint |
| Hoe we werken | /nl/over-ons/aanpak | De AI Heroes-standaard · Business case · Compliance · Training van je team |
| Cases | /nl/cases | Medux · OLX · InnoEnergy · Trabu |
| Over ons | /nl/over-ons | Het team · Vacatures · AI Salon · Zoals gezien op TV · Resources |
| Plan een startsprint | /nl/startsprint | (knop, accentkleur) |

"Resources" verhuist onder "Over ons". De artikelen blijven bestaan en vindbaar via zoekmachines; ze hoeven geen hoofdmenu-item te zijn. Training-, consultancy- en EU-pagina's verdwijnen uit het menu maar blijven live (§7).

### 9.2 Footer (`components/Footer.tsx`, copy in `footer`)

Tagline nu: "Full-service AI agency. Van change management tot technische implementatie, met een Europese aanpak." Straks: **Wij bouwen software en AI die in productie draait. Business case, compliance en training inbegrepen.** Kolommen volgen het nieuwe menu. "Development Partnerships"-kop wordt "Samenwerkingen". Case-lijst blijft.

### 9.3 Contactformulier en API (`components/Contact.tsx`, `components/PageContactForm.tsx`, `api/contact.ts`)

Zie §5.7. Extra: `FORM_CONTENT` in `PageContactForm.tsx` en `contact.form` in `constants.ts` zijn twee kopieën van dezelfde labels; samenvoegen in `constants.ts` zodat de kwalificatievelden maar op één plek leven.

### 9.4 Meeting chooser (`contactForm.meetings` in `constants.ts`)

Hints per oprichter volgen de fasen: Frans "Business case en scoping", David "Bouw, hosting en compliance", Jan "Adoptie en training bij je team". Volgorde: Frans, David, Jan (de volgorde van een traject).

### 9.5 Structured data en SEO-defaults (`src/data/schema.ts`, `src/data/seo.ts`, `src/layouts/BaseLayout.astro`)

- `PROFESSIONAL_SERVICE_SCHEMA.description`: de kernzin.
- `hasOfferCatalog`: drie catalogi (Nieuw bouwen, Vervangen, Eigen beheer) plus één `Offer` "Startsprint" met `price: 8000`, `priceCurrency: EUR`.
- `founder[].jobTitle`: "Co-Founder, Business case & scoping" / "Co-Founder, Bouw & compliance" / "Co-Founder, Adoptie & training".
- Titel-suffix en standaardbeschrijving in `BaseLayout.astro` controleren op "full-service".
- `NOINDEX_PATHS`: geen wijziging nodig, tenzij pagina's uit §7 op noindex gaan.
- `public/llms.txt`: de blurb ("full-service AI agency … Three pillars") wordt de kernzin in het Engels en Nederlands; de prijzen in dit bestand (PoC vanaf EUR 8.000) worden de startsprintprijs, en de linklijst volgt de nieuwe structuur. Dit bestand is wat AI-zoekmachines lezen; het moet in fase 1 mee.
- `public/og-image.png` en de generator: de tagline op het beeld controleren (nu waarschijnlijk drie pijlers).

### 9.6 Chatassistent (`server/prompt.ts`, `src/components/chat/strings.ts`)

De prompt beschrijft het bedrijf nu als "full-service AI agency" en stuurt op "read the right page, register for the AI Salon, book a conversation". Straks:

- Beschrijving: de kernzin.
- Nieuwe routeringsregel: *Als een bezoeker wil praten, plannen of bouwen, stel eerst één vraag: "Wat wil je bouwen, en wie is daar de eigenaar van?" Verwijs daarna naar de startsprint. Vraagt iemand om een workshop, training of inspiratiesessie zonder bouwvraag, verwijs naar de trainingspagina en zeg dat training bij ons onderdeel is van een bouwtraject.*
- `book_meeting` blijft, maar de prompt noemt de startsprint als standaard volgende stap.
- Openingszin en snelle antwoorden in `strings.ts` volgen mee ("Wat wil je bouwen?" als eerste suggestie).

### 9.7 Bedrijfsprofiel (`docs/company-profile.md`)

Dit document is de "source of truth for positioning" voor AI-tools en partners, en het codificeert precies wat we loslaten: "Company descriptor is always full-service AI agency", "Drie pijlers, één partner", "Alles van A tot I", "workshops as the entry product" en het ICP "Tier 1: MKB 10–350 FTE, workshops als instap". Zolang dit staat, schrijft elk hulpmiddel de oude positionering terug in nieuwe teksten. Aanpassen in dezelfde PR als de homepage: §1 (descriptor, one-liner), §3 (positionering), §5 (van pijlers naar ingangen en standaard), §6 (ICP), §12 (quick reference). De brandkleuren blijven, maar de koppeling kleur = pijler vervalt. De bannerregel "AI strategie. Implementatie. Training." wordt "Van ambitie naar implementatie."

---

## 10. Nieuwe pagina's

Drie soorten pagina's bestaan nu niet en dragen de nieuwe positionering. Zonder deze pagina's kan de rest van de site nergens naartoe wijzen.

### 10.1 De startsprint (`/nl/startsprint`, `/en/start-sprint`)

De enige voordeur, dus de best gebouwde pagina na de homepage. Zelfde kwaliteitslat als de homepage en AI Salon (eigen hero, eigen ritme, geen prose-dump).

- **Hero.** Badge: *De voordeur*. Titel: **De startsprint.** Subtitel: *Eén week. Vast bedrag. Aan het eind weet je of het kan, wat het kost en hoe het eruitziet.* Knop: *Plan een startsprint* (scrolt naar het formulier op deze pagina).
- **Wat je krijgt.** Drie kaarten, per ingang: bij iets nieuws bouwen een werkend prototype (Trabu: zes dagen, op tijd voor de investeerders); bij vervangen een architectuur en migratieplan met de koppelingen benoemd; bij eigen beheer een hostingontwerp en risicobeoordeling. Altijd: de business case op één A4.
- **Hoe de week eruitziet.** Dag 1 intake en scope. Dag 2 en 3 bouwen of ontwerpen. Dag 4 koppelen aan je echte data of systemen. Dag 5 demo, business case en go/no-go. (`ProcessSteps`-blok.)
- **Prijs.** Vanaf €8.000, vast bedrag, vooraf bekend. Gaat de bouw door, dan is de startsprint de eerste fase van het traject. Gaat hij niet door, dan houd je het prototype, het plan en de business case.
- **Voor wie.** Drie zinnen die de ICP beschrijven en de niet-ICP laten voelen: *Voor organisaties met een concreet proces, product of systeem, en een eigenaar die kan beslissen. Niet voor een eerste kennismaking met AI; daarvoor is een training een betere eerste stap.*
- **Bewijs.** StatGrid: 6 dagen tot prototype · 4.000 gesprekken per maand bij Medux · 50+ organisaties sinds 2019.
- **Veelgestelde vragen.** Wat als het niet lukt in een week? Moeten wij iemand vrijmaken? Wat gebeurt er na de sprint? Kunnen we ook zonder sprint starten? Werkt dit ook voor software zonder AI?
- **Formulier.** Het kwalificerende formulier van §5.7, met de ingang voorgeselecteerd als de bezoeker via een bouwpagina kwam.
- **Schema.** `Service` met `offers.price: 8000`, plus `FAQPage`.

### 10.2 Drie bouwpagina's (`/nl/diensten/software`, `/nl/diensten/software-vervangen` (nieuw), `/nl/diensten/eu-consultancy`; Engels `/en/services/software`, `/en/services/replace-software`, `/en/services/eu-consultancy`)

Eén sjabloon, drie invullingen. Elke pagina beantwoordt de drie vragen uit de tekstregels: wat bouwen jullie voor mij, hoe beginnen we, waar is het bewijs.

| Sectie | Nieuw bouwen | Vervangen | Eigen beheer |
|---|---|---|---|
| Hero-titel | Iets nieuws bouwen | Vervangen wat niet meer voldoet | In eigen beheer draaien |
| Herkenbare vraag (eerste alinea) | "Kunnen jullie dit voor ons bouwen?" | "We zijn ons huidige pakket zat. We willen iets dat past." | "Kan het ook op onze eigen servers? Onze data mag Europa niet uit." |
| Wat we bouwen | Assistenten, werkstromen, spraak-AI, interne tools, klantportalen, zoek- en documentsystemen | Vervanging van verouderde maatwerksystemen en te dure SaaS, gekoppeld aan ERP, CRM, Microsoft 365, legacy | Lokale modellen, Europese cloud (Mistral, Aleph Alpha, Nederlandse hosting), migratie weg van Amerikaanse processors |
| Bewijs | Medux, Trabu, InnoEnergy | IC Commerce, Avics, Jogo | Tweede Kamer (training), Envalior, eigen stack (de chat op deze site draait Europees) |
| Startsprint-uitkomst | Werkend prototype | Architectuur en migratieplan | Hostingontwerp en risicobeoordeling |
| Standaard-blok | ja | ja | ja, met compliance vooraan |
| FAQ | kosten, doorlooptijd, eigen developers, productie | datamigratie, doorlooptijd, koppelingen, lock-in | welke modellen, prestaties, kosten van eigen hardware, AI Act |

De inhoud van de huidige pagina's `software`, `eu-development`, `eu-consultancy` en `digitale-onafhankelijkheid` wordt hier grotendeels in opgenomen (§7 zegt per pagina wat er gebeurt).

### 10.3 Overzichtspagina Wat we bouwen (`/nl/diensten`, `/en/services`)

Zelfde URL als de huidige dienstenhub, nieuwe inhoud: de kernzin, de drie ingangen als kaarten, de AI Heroes-standaard, cases, startsprint-knop. Zie ook §7.1.

### 10.4 Hoe we werken (`/nl/over-ons/aanpak`, `/en/about/approach`)

Zelfde URL, menu-label wordt "Hoe we werken". Vertelt het traject in volgorde: startsprint, business case, bouwen in sprints, compliance vanaf de tekentafel, training van je team, overdracht zonder lock-in, en wat er daarna gebeurt (beheer, doorontwikkelen). Hier krijgen de oude pijlers hun uitleg als fasen: één sectie "Business case", één "Compliance", één "Training van je team", elk met een link naar de bijbehorende oude pagina die als verdieping blijft bestaan.

## 11. Fasering

De volgorde is gekozen zodat elke fase op zichzelf online kan en de lead-kwaliteit al na fase 1 verandert.

**Fase 0: beslissingen (één sessie met de drie oprichters).** De open punten uit §12. Zonder de namen "startsprint" en "AI Heroes-standaard" kan geen enkele pagina worden geschreven.

**Fase 1: de voordeur (één PR, één preview).**
- Homepage: alle secties uit §5.
- Startsprintpagina (§10.1).
- Navigatie en footer (§9.1, §9.2).
- Contactformulier met kwalificatievelden, API erbij (§9.3).
- `SubpageLayout`: standaardknop en badge-logica (§6).
- Chatprompt (§9.6), schema (§9.5), `company-profile.md` (§9.7).
- Testimonials herschikt (§5.4).
- Parity-check en `npm run check` groen; preview delen.

**Fase 2: de bouwpagina's (één PR).**
- Drie bouwpagina's en de overzichtspagina (§10.2, §10.3).
- Hoe we werken (§10.4).
- Bestaande software-, EU- en aanpakpagina's krijgen hun lot uit §7 (herschrijven, samenvoegen, doorverwijzen).
- Cases-index prominent, Medux-cijfers overal waar bewijs staat.

**Fase 3: de rest van de dienstenpagina's (één PR, of per pagina).**
- Training, consultancy, AI-geletterdheid, incompany, EU-training en de SEO-landers: openingsalinea en knop herschrijven naar "onderdeel van een bouwtraject", uit het menu, prijzen onder de vouw.
- Artikelen: knoppen en slotalinea's naar de startsprint, gedateerde AI Act-claims controleren.
- Teampagina en Over ons.

**Fase 4: Engels.** Pas als het Nederlands staat. Vertalen vanuit het Nederlands, pagina voor pagina, met de EN-slugs in `src/data/i18n.ts`.

**Fase 5: meten en bijsturen (zes weken na fase 1).** Zie §13.

## 12. Open beslissingen

| # | Beslissing | Voorstel | Wie |
|---|---|---|---|
| 1 | Naam van de voordeur | Startsprint | Frans, Jan, David |
| 2 | Naam van de inbegrepen laag | De AI Heroes-standaard | idem |
| 3 | Prijs en duur van de startsprint | Eén week, vanaf €8.000, vast bedrag | David (haalbaarheid), Frans (prijs) |
| 4 | Workshop als los product | Blijft leverbaar, alleen te boeken via de trainingspagina met vaste prijs en zonder kennismakingsgesprek | Jan |
| 5 | Nieuwe URL voor "Vervangen wat niet meer voldoet" | `/nl/diensten/software-vervangen` en `/en/services/replace-software`; alternatief is de inhoud op de softwarepagina houden met een anker, maar dan heeft ingang 2 geen eigen vindbare pagina | Frans |
| 6 | Software zonder AI op de voorpagina | Ja, "software en AI" in de kernzin (besloten in het gesprek van 21 september) | besloten |
| 7 | Medux-testimonial | Vragen aan Medux om een quote van één zin; anders cijferkaart | Frans |
| 8 | Koppen slide 3 en 4 van de hero | "Weg met software die je tegenhoudt" of het rustiger "Van verouderd naar passend" | Frans |
| 9 | Budgetvraag in het formulier | Vier bandbreedtes plus "nog geen idee" | Frans |
| 10 | Bedrijfsprofiel en offerings bible | In dezelfde week herschrijven, anders schrijft elke AI-tool de oude positionering terug | Frans |

## 13. Meetlat

Het doel is betere aanvragen. Meer bezoekers is geen doel. Dus meten we de aanvragen en laten we het verkeer voor wat het is.

- **Per aanvraag:** ingang gekozen, budgetband, eigenaarschap, en of hij via de startsprintpagina kwam. Dit zit in de e-mail zodra §9.3 live is; een simpel logboek (spreadsheet) per maand volstaat.
- **Doel na zes weken:** de meerderheid van de aanvragen noemt een concreet proces of systeem, en minstens een derde geeft een budgetband van €10.000 of hoger op.
- **Tegenindicator:** aantal aanvragen dat alleen om een workshop of dagtarief vraagt. Dat mag dalen; als het naar nul gaat zonder dat bouwaanvragen stijgen, is de toon te afstotend en moet de trainingspagina zichtbaarder.
- **Verkoopkosten:** aantal gesprekken per getekende startsprint. Nu onbekend; vanaf fase 1 bijhouden.
- **Vindbaarheid:** posities van de bestaande trainings- en consultancypagina's mogen niet instorten; ze blijven live met dezelfde URL. Controleren met de bestaande parity-suite en Search Console.

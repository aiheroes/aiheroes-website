# Relaunch: plekken voor de eigen fotoshoot

Het bouwplan (`02-bouwplan.md` §4) zegt: Unsplash-stand-ins nu, een eigen shoot later, met een lijst
van plekken die echte foto's verdienen. Dit is die lijst (stand 2026-10-12). Herkomst van de
huidige beelden: `src/components/hs/ASSETS.md`. Huisregels: mensen in duotoon, plekken en
werkscènes in kleur, nooit tekst op een foto.

## Hoogste prioriteit (veel bezoek of nu zonder passend beeld)

| Plek | Nu | Wat de eigen foto moet laten zien |
|---|---|---|
| Home, cover slide 1 en 2 (`HsCover`) | Unsplash (kantoor, twee mensen aan één scherm) | Het team of een klant aan het werk met iets dat wij bouwden, op de werkplek van de klant |
| Startsprint, Kwakkel-voorbeeld | Unsplash kantoor (duotoon) | Een demo op dag zes: eigenaar en gebruikers rond het scherm |
| Team en over ons | Portretten in duotoon | Eén teamfoto van Frans, David en Jan samen, plus portretten in dezelfde stijl en hetzelfde licht |
| Contactblok (alle pagina's) | Portretten | Dezelfde portretten, recent |
| AI Salon | Groningen-straatbeeld | Foto's van de kick-off en volgende edities (zaal, sprekers, publiek) |

## Cases (nu entry-vlak of stand-in)

| Case | Nu | Voorstel |
|---|---|---|
| Kwakkel BV | Unsplash kantoor | Medewerkers bij de administratie, met akkoord van Kwakkel |
| Strive | Entry-vlak, geen foto | De sportschool of de nieuwe software in gebruik aan de balie |
| IC Commerce | Entry-vlak | Screenshot van de productbeeld-pipeline of het magazijn |
| Eigen stack | Geen beeld | Screenshot van de assistent op de site (alleen vanaf productie te maken; op de dev-server start de chat niet) |
| Medux | Unsplash klantenservice (duotoon) | Blijft een stand-in: Medux werkt met een andere partij |
| INQ22 | Screenshot van inq22.com | In orde |
| Trabu, InnoEnergy, OLX | Entry-vlak | Screenshots van het prototype of product, als die er nog zijn |

## Pillars en landings (nu typografische cover)

Deze pagina's werken zonder foto, de kleurvlakken dragen het ontwerp. Een eigen beeld maakt ze wel
sterker:

- **Hoe we werken, business case:** een sessie met de business case op tafel.
- **Compliance en security:** een technische scène (code review, serverruimte) in kleur.
- **Training:** Jan op de werkvloer bij een klant, met het systeem op het scherm.
- **AI-klantenservice, administratie, company wiki:** schermbeelden van echte toepassingen (geanonimiseerd).
- **AI-bureau Groningen:** het kantoor aan de Aarhusweg of de stad; het huidige Groningen-beeld is een stand-in.

## Na de shoot

1. Foto's als WebP (lange zijde 1800 px voor covers, 1400 px voor cases) in `public/hs/photos/`.
2. Herkomst in `ASSETS.md`; akkoord van wie herkenbaar in beeld is.
3. Vervang de `photo`-velden in de collecties of de `photo`-props in de pagina's; mensen krijgen
   `duo`, plekken niet.

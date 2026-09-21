import type { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  nl: {
    nav: {
      build: {
        label: "Wat we bouwen",
        href: "/nl/diensten",
        children: [
          { label: "Iets nieuws bouwen", href: "/nl/diensten/software", description: "Van idee naar systeem in productie" },
          { label: "Vervangen wat niet meer voldoet", href: "/nl/diensten/software-vervangen", description: "Verouderde of te dure software eruit, iets dat past ervoor in de plaats" },
          { label: "In eigen beheer draaien", href: "/nl/diensten/eu-consultancy", description: "Op je eigen servers of bij een Europese partij" }
        ]
      },
      how: {
        label: "Hoe we werken",
        href: "/nl/over-ons/aanpak",
        children: [
          { label: "De startsprint", href: "/nl/startsprint", description: "Eén week, vast bedrag, werkend prototype of bouwplan" },
          { label: "De AI Heroes-standaard", href: "/nl/over-ons/aanpak#standaard", description: "Wat bij elke bouw inbegrepen is" },
          { label: "Business case en scoping", href: "/nl/diensten/consultancy", description: "Weten wat het kost en oplevert vóór we bouwen" },
          { label: "Compliance vanaf de tekentafel", href: "/nl/over-ons/aanpak#compliance", description: "AI Act, logging, toezicht en hosting in het ontwerp" },
          { label: "Training van je team", href: "/nl/diensten/training", description: "Je mensen leren werken met wat we bouwen" }
        ]
      },
      cases: {
        label: "Cases",
        href: "/nl/cases"
      },
      about: {
        label: "Over ons",
        href: "/nl/over-ons",
        columns: [
          { heading: "Bedrijf", items: [
            { label: "Over AI Heroes", href: "/nl/over-ons", description: "Wie we zijn en waarom we bouwen" },
            { label: "Het team", href: "/nl/over-ons/team", description: "Frans, David en Jan" },
            { label: "Vacatures", href: "/nl/vacatures", description: "Bekijk openstaande posities" }
          ]},
          { heading: "Media & community", items: [
            { label: "AI Salon Groningen", href: "/nl/ai-salon", description: "Tweemaandelijkse community-avond" },
            { label: "Zoals gezien op TV", href: "/nl/de-ai-storm", description: "De AI Storm bij RTL" },
            { label: "Pers", href: "/nl/pers", description: "Logo, huisstijl en perscontact" }
          ]},
          { heading: "Kennis", items: [
            { label: "Wat kost AI-implementatie?", href: "/nl/resources/wat-kost-ai-implementatie", description: "Echte prijzen en prijsbanden" },
            { label: "EU AI Act compliance", href: "/nl/resources/eu-ai-act-compliance", description: "Stappenplan voor Nederlandse organisaties" },
            { label: "Alle resources", href: "/nl/resources", description: "Alle artikelen en gidsen" }
          ]}
        ],
        children: [
          { label: "Over AI Heroes", href: "/nl/over-ons" },
          { label: "Het team", href: "/nl/over-ons/team" },
          { label: "Vacatures", href: "/nl/vacatures" },
          { label: "AI Salon Groningen", href: "/nl/ai-salon" },
          { label: "Zoals gezien op TV", href: "/nl/de-ai-storm" },
          { label: "Resources", href: "/nl/resources" }
        ]
      },
      cta: {
        label: "Plan een startsprint",
        href: "/nl/startsprint"
      },
      featured: {
        label: "De startsprint",
        href: "/nl/startsprint",
        description: "Eén week, vast bedrag. Daarna weet je of het kan, wat het kost en hoe het eruitziet."
      }
    },
    hero: {
      slides: [
        {
          label: "Van A naar I",
          headline: "Van <red>ambitie</red>\nnaar <blue>implementatie</blue>",
          subhead: "Je hebt een idee, een proces dat beter kan of software die aan vervanging toe is.\nWij bouwen wat je nodig hebt en zorgen dat het draait.",
          ctaLabel: "Plan een startsprint",
          ctaTarget: "/nl/startsprint",
          image: "/hero/summit.webp"
        },
        {
          label: "Iets nieuws bouwen",
          headline: "Van <red>idee</red> naar\n<blue>werkend systeem</blue>",
          subhead: "Een assistent, een werkstroom, een tool die er nog niet is.\nIn zes dagen een werkend prototype, daarna door naar productie.",
          ctaLabel: "Plan een startsprint",
          ctaTarget: "/nl/startsprint",
          image: "/hero-bg.webp"
        },
        {
          label: "Vervangen wat niet meer voldoet",
          headline: "<red>Weg</red> met software\ndie je <blue>tegenhoudt</blue>",
          subhead: "Verouderde of te dure systemen vervangen door iets dat wél past.\nGekoppeld aan je ERP, CRM en de rest van je landschap.",
          ctaLabel: "Plan een startsprint",
          ctaTarget: "/nl/startsprint",
          image: "/hero/glass.webp"
        },
        {
          label: "In eigen beheer draaien",
          headline: "AI op <red>eigen</red> grond,\n<blue>Europees</blue> gehost",
          subhead: "Op je eigen servers of bij een Europese partij.\nZonder afhankelijkheid van Amerikaanse cloud, met de AI Act ingebouwd.",
          ctaLabel: "Plan een startsprint",
          ctaTarget: "/nl/startsprint",
          image: "/hero/road.webp"
        }
      ]
    },
    services: {
      title: "Wat we voor je bouwen",
      intro: "Drie manieren om te beginnen, één voordeur.",
      cta: "Lees meer",
      items: [
        {
          entry: "nieuw",
          tag: "Nieuw",
          title: "Iets nieuws bouwen",
          description: "Een assistent, een werkstroom, een tool die er nog niet is. Van prototype in zes dagen tot systeem in productie. Zoals bij Kwakkel BV: in zes dagen een werkend prototype.",
          href: "/nl/diensten/software"
        },
        {
          entry: "vervangen",
          tag: "Vervangen",
          title: "Vervangen wat niet meer voldoet",
          description: "Software die te duur, te traag of te oud is, vervangen door iets dat past. Gekoppeld aan je ERP, CRM en de rest van je landschap. Zoals bij Strive: een te duur SaaS-pakket eruit, eigen software ervoor in de plaats.",
          href: "/nl/diensten/software-vervangen"
        },
        {
          entry: "eigen-beheer",
          tag: "Eigen beheer",
          title: "In eigen beheer draaien",
          description: "AI en software op je eigen servers of bij een Europese partij. Zonder Amerikaanse cloud, met de AI Act ingebouwd. Zoals de AI-assistent op deze site: door ons gebouwd, Europees gehost.",
          href: "/nl/diensten/eu-consultancy"
        }
      ]
    },
    standard: {
      eyebrow: "De AI Heroes-standaard",
      title: "Bij elke bouw inbegrepen",
      subtitle: "We noemen het de AI Heroes-standaard. Vier dingen die je nooit apart hoeft te kopen.",
      items: [
        {
          title: "Business case vooraf",
          description: "Voordat we bouwen, weet je wat het kost, wat het oplevert en wanneer het zich terugverdient. Op één A4, klaar voor de directie."
        },
        {
          title: "Compliance vanaf de tekentafel",
          description: "AI Act-classificatie, logging, menselijk toezicht en Europese hosting zitten in het ontwerp. Achteraf repareren is niet nodig."
        },
        {
          title: "Je mensen kunnen ermee werken",
          description: "Het team dat het systeem gaat gebruiken, trainen we op dat systeem. Zo landt het op de werkvloer en voldoe je meteen aan artikel 4 van de AI Act."
        },
        {
          title: "Overdracht zonder lock-in",
          description: "Broncode, documentatie en datamodel zijn van jou. Je kunt zonder ons verder als je dat wilt."
        }
      ]
    },
    approach: {
      text: "Wij bouwen <red>software</red> die werkt\nop de dag dat we vertrekken\n\nMet een business case die klopt,\ncompliance die vanaf dag één meeloopt\nen mensen die ermee overweg kunnen\n\nVan ambitie naar <blue>implementatie</blue>\nEén partner, één traject"
    },
    team: {
      title: "Geboren probleemoplossers",
      location: "Groningen, AI-hoofdstad van Europa",
      body: "Drie oprichters, één gedeelde passie voor AI.\nFrans maakt de business case, David bouwt, Jan zorgt dat je mensen ermee kunnen werken.",
      cta: {
        text: "Leer ons kennen",
        href: "/nl/over-ons/team"
      },
      image: {
        src: "/groningen.webp",
        alt: "Groningen - thuisbasis en AI-hoofdstad van Europa"
      }
    },
    socialProof: {
      title: "Een greep uit de organisaties waar we mee gewerkt hebben",
      heading: "Wat we bouwden, en wat het opleverde",
      back: "Terug",
      readMore: "Lees meer",
      prev: "Vorige",
      next: "Volgende",
      logos: ["IC Commerce", "Strive", "INQ22", "Kwakkel BV", "UMCG", "Tweede Kamer", "Postcode Loterij", "Envalior", "Banijay", "Prosus", "Hanze"],
      testimonials: [
        {
          text: "AI Heroes heeft ons geholpen elke stap van ons eCommerce platform te automatiseren met AI. Het is erg fijn om met een AI partner te werken die zoveel kennis van de markt en nu ook van ons bedrijf heeft.",
          highlight: "AI Heroes hielp ons elke stap van ons eCommerce platform te automatiseren met AI.",
          author: "P.R. Jeeninga",
          role: "IC Commerce"
        },
        {
          text: "Ondanks alle tegenslagen heeft het team van AI Heroes ons onberispelijke AI-software geleverd. Binnen de afgesproken deadline gingen ze verder dan verwacht en maakten ze al onze verwachtingen waar.",
          highlight: "Onberispelijke AI-software, binnen de deadline en verder dan verwacht.",
          author: "Baran Erdogan",
          role: "CTO, Jogo"
        },
        {
          text: "Bij de ontwikkeling van onze nieuwste optische zorgtoepassing heeft AI Heroes ons enorm geholpen met de analyse en de technische realisatie.",
          highlight: "AI Heroes hielp ons enorm met de analyse en technische realisatie van onze optische zorgtoepassing.",
          author: "Igor Stalpers-Croeze",
          role: "Manager Research & Development, Avics B.V."
        },
        {
          text: "De manier waarop AI Heroes samenwerkt met externe stakeholders tijdens onze projecten is mooi om te zien. Groot of klein, onze projecten worden met veel ervaring aangestuurd, en met zo'n flexibel team is het altijd leuk om samen nieuwe dingen in AI te verkennen.",
          highlight: "Met zo'n flexibel team is het altijd leuk om samen nieuwe dingen in AI te verkennen.",
          author: "Saad Saleem",
          role: "Project Manager, Cloud Primero"
        },
        {
          text: "Als organisatie wilden we AI een stapje voor zijn en hebben we ons team laten trainen. Frans gaf ons een fantastische, hands-on workshop met theorie én praktijk. Sindsdien hebben we de handvatten om AI behapbaar en toepasbaar te maken. Een echte aanrader!",
          highlight: "Een fantastische, hands-on workshop met theorie én praktijk. Een echte aanrader!",
          author: "Bobby Kremer",
          role: "Nationale Postcode Loterij"
        },
        {
          text: "Het team van AI Heroes heeft ons als docenten Technische Bedrijfskunde goed meegenomen in de wereld van AI. Door de interactieve en hands-on workshop hebben we nu praktische tools en tips gekregen om in ons onderwijs mee aan de slag te gaan.",
          highlight: "AI Heroes heeft ons als docenten Technische Bedrijfskunde goed meegenomen in de wereld van AI.",
          author: "Remi Thüss",
          role: "Hanzehogeschool Groningen, TBK"
        }
      ]
    },
    contact: {
      form: {
        name: "Naam",
        email: "E-mail",
        org: "Organisatie",
        topic: "Waar gaat het om?",
        topicOptions: [
          "Iets nieuws bouwen",
          "Bestaande software vervangen",
          "In eigen beheer draaien",
          "Weet ik nog niet"
        ],
        budget: {
          label: "Aan welk budget denk je?",
          options: ["Onder €10.000", "€10.000 tot €25.000", "€25.000 tot €100.000", "Meer dan €100.000", "Nog geen idee"]
        },
        owner: {
          label: "Wie beslist hierover?",
          options: ["Ik beslis zelf", "Ik beslis mee", "Ik oriënteer me voor iemand anders"]
        },
        message: "Wat wil je bouwen?",
        submit: "Verstuur",
        error: "Er ging iets mis. Probeer het opnieuw of mail ons direct."
      },
      success: {
        title: "Ontvangen",
        message: "We reageren binnen 24 uur, meestal met een voorstel voor een startsprint.",
        sendAnother: "Nog een versturen"
      }
    },
    contactForm: {
      title: "Vertel wat je wilt bouwen",
      subtitle: "We reageren binnen 24 uur. Meestal met een voorstel voor een startsprint.",
      emailLabel: "Of neem direct contact op:",
      email: "hello@aiheroes.io",
      phone: "050-200 3373",
      phoneHref: "tel:+31502003373",
      meetingLabel: "Plan een kennismaking",
      meetings: [
        {
          name: "Frans Hoorn",
          url: "https://calendar.app.google/juFpF3MDmikH4BVS8",
          photo: "/team/frans.webp",
          hint: "Business case en scoping"
        },
        {
          name: "David Homan",
          url: "https://calendar.app.google/GcA1oBNwzyFZtW5W6",
          photo: "/team/david.webp",
          hint: "Bouw, hosting en compliance"
        },
        {
          name: "Jan Brusse",
          url: "https://calendar.app.google/un3fLvb7ht4f7PBWA",
          photo: "/team/jan.webp",
          hint: "Adoptie en training bij je team"
        }
      ]
    },
    aboutPage: {
      hero: {
        title: "Over AI Heroes",
        subtitle: "AI Heroes bouwt software en AI voor organisaties die verder willen dan een pilot. Wij ontwerpen, bouwen en implementeren, en zorgen dat het werkt: met een sluitende business case, compliance vanaf de tekentafel en een team dat ermee overweg kan."
      },
      intro: {
        text: "De merknaam AI Heroes bestaat sinds 2019. Eind 2025 namen Frans Hoorn, David Homan en Jan Brusse het merk en de klantrelaties over en begonnen ze opnieuw, met één observatie als uitgangspunt: de AI-markt is gefragmenteerd. Adviesbureaus schrijven rapporten, trainingsbureaus trainen en vertrekken, techbedrijven bouwen tools die niemand snapt. Bijna niemand levert software die op de dag van oplevering werkt én blijft werken.\n\nDaarom bouwen wij. Elke bouw begint met een business case, heeft compliance in het ontwerp en eindigt met een team dat ermee kan werken. Vanuit Groningen, epicentrum van AI in Europa en thuisbasis van de AI Fabriek, voor organisaties door heel Nederland en Europa. Met een Europese aanpak: datasoevereiniteit, EU AI Act-compliance en geen vendor lock-in.",
        stats: [
          { metric: "50+", description: "Organisaties geholpen" },
          { metric: "1.000+", description: "Professionals getraind" },
          { metric: "6 dagen", description: "Van vraag naar werkend prototype" }
        ]
      },
      team: {
        title: "Het team",
        subtitle: "Drie oprichters, één traject: van business case tot overdracht",
        members: [
          {
            name: "Frans Hoorn",
            role: "Co-Founder · Business case & scoping",
            description: "Combineert strategisch denken met een scherp oog voor gebruikerservaring. Leidt de startsprint en de business case: wat kost het, wat levert het op en wanneer verdient het zich terug."
          },
          {
            name: "David Homan",
            role: "Co-Founder · Bouw & compliance",
            description: "De schakel tussen techniek en directiekamer. Leidt de bouw: van prototype tot systeem in productie, gekoppeld aan jouw landschap, met AI Act-classificatie, logging en hosting in het ontwerp."
          },
          {
            name: "Jan Brusse",
            role: "Co-Founder · Adoptie & training",
            description: "Specialist in het toegankelijk maken van complexe technologie. Zorgt dat het team dat met het systeem gaat werken er ook mee kan werken: training op het systeem zelf, op de werkvloer."
          }
        ]
      },
      cards: [
        {
          title: "Hoe we werken",
          description: "De startsprint, de AI Heroes-standaard en het traject van business case tot overdracht",
          href: "/nl/over-ons/aanpak",
          icon: "target"
        },
        {
          title: "Het team",
          description: "Ontmoet Frans, David en Jan en lees hun volledige profielen",
          href: "/nl/over-ons/team",
          icon: "users"
        }
      ],
      values: {
        title: "Wat ons drijft",
        items: [
          {
            title: "Eerlijkheid boven verkoop",
            description: "Als AI niet de oplossing is, zeggen we dat. Als de business case niet klopt, bouwen we niet."
          },
          {
            title: "Werkend boven af",
            description: "We meten succes in wat er draait op de dag dat we vertrekken, en in wat er een jaar later nog draait."
          },
          {
            title: "Practitioners die meedoen",
            description: "We adviseren niet alleen, we bouwen ook. Onze eigen AI-assistent draait op deze site, Europees gehost."
          },
          {
            title: "Groningen, AI-hoofdstad van Europa",
            description: "Geworteld in Groningen, thuisbasis van de AI Fabriek (een investering van €200M). Lokale basis, Europees werkgebied."
          }
        ]
      }
    },
    careersPage: {
      hero: {
        title: "Werken bij AI Heroes",
        subtitle: "Wij groeien. Sluit je aan bij een team dat software en AI bouwt voor organisaties door heel Europa, en zorgt dat het werkt."
      },
      growth: {
        text: "Wij bouwen software en AI die in productie draait, met een business case vooraf, compliance vanaf de tekentafel en training van het team dat ermee gaat werken. Ons team groeit mee met de vraag. We zoeken mensen die net zo graag als wij iets bouwen dat werkt op de dag dat we vertrekken.",
        stats: [
          { metric: "50+", description: "Organisaties geholpen" },
          { metric: "1000+", description: "Professionals getraind" },
          { metric: "3", description: "Oprichters, één traject" },
          { metric: "2019", description: "Opgericht" }
        ],
        trustedBy: ["Kwakkel BV", "INQ22", "UMCG", "Tweede Kamer", "Postcode Loterij", "Envalior"]
      },
      culture: {
        title: "Waarom AI Heroes?",
        values: [
          {
            title: "Echte impact",
            description: "Onze klanten zetten AI in om concrete problemen op te lossen, en jij helpt ze daarbij."
          },
          {
            title: "Autonomie & eigenaarschap",
            description: "Je krijgt verantwoordelijkheid vanaf dag één. We vertrouwen op je expertise en geven je de ruimte om je eigen werk vorm te geven."
          },
          {
            title: "Continu leren",
            description: "AI verandert elke week. Wij ook. Je krijgt tijd en budget om bij te blijven, te experimenteren en jezelf te ontwikkelen."
          },
          {
            title: "Eerlijk en direct",
            description: "We zeggen wat we denken, helpen elkaar en focussen op wat ertoe doet."
          }
        ],
        perks: [
          { title: "Kantoor in Groningen", description: "Werkplek in de AI-hoofdstad van Europa" },
          { title: "Flexibel werken", description: "Combineer kantoor en thuiswerk zoals het jou past" },
          { title: "Leerbudget", description: "Persoonlijk budget voor cursussen, conferenties en tools" },
          { title: "Diverse projecten", description: "Van startups tot multinationals, steeds nieuwe uitdagingen" },
          { title: "Informele cultuur", description: "Platte organisatie, korte lijnen, directe samenwerking" },
          { title: "Groei met ons mee", description: "Word onderdeel van een team dat snel groeit in een booming markt" }
        ]
      },
      departments: {
        title: "Onze teams",
        subtitle: "Elk traject wordt gedragen door drie rollen die samenwerken van business case tot overdracht.",
        items: [
          {
            name: "Adoptie & training",
            pillar: "training",
            description: "Zorgt dat het team van de klant kan werken met wat we bouwen: training op het systeem zelf, AI-geletterdheid volgens artikel 4 van de AI Act en begeleiding op de werkvloer."
          },
          {
            name: "Business case & scoping",
            pillar: "consulting",
            description: "Bepaalt vóór de bouw wat het kost, wat het oplevert en wanneer het zich terugverdient. Leidt de startsprint en houdt de scope scherp."
          },
          {
            name: "Bouw & compliance",
            pillar: "software",
            description: "Bouwt de software en AI, koppelt die aan het landschap van de klant en zorgt dat AI Act-classificatie, logging, toezicht en hosting in het ontwerp zitten. Van prototype in zes dagen tot systeem in productie."
          }
        ]
      },
      positions: {
        title: "Openstaande vacatures",
        subtitle: "Bekijk onze huidige vacatures en vind de rol die bij je past.",
        items: [
          {
            id: "ai-engineer",
            title: "AI Engineer / Developer",
            department: "software",
            departmentLabel: "Software & Implementatie",
            location: "Groningen",
            hours: "32-40 uur/week",
            type: "Fulltime",
            datePosted: "2026-06-08",
            summary: "Bouw custom AI-oplossingen voor onze klanten, van prototype tot productie.",
            description: [
              "Als AI Engineer bij AI Heroes werk je aan uiteenlopende projecten voor klanten in heel Europa. Je bouwt custom AI-oplossingen die echte bedrijfsproblemen oplossen: van intelligente documentsystemen tot geautomatiseerde workflows en machine learning pipelines.",
              "Je werkt nauw samen met ons Consultancy team om klantbehoeften te vertalen naar technische oplossingen, en met het team van de klant om te zorgen dat alles soepel integreert in hun bestaande systemen."
            ],
            requirements: [
              "Ervaring met Python en moderne AI/ML frameworks (PyTorch, LangChain, of vergelijkbaar)",
              "Kennis van LLM's, RAG-architecturen en/of computer vision",
              "Ervaring met cloud platforms (AWS, Azure, of GCP)",
              "Zelfstandig kunnen werken én goed functioneren in een team",
              "Goede communicatieve vaardigheden in Nederlands en/of Engels"
            ],
            offerings: [
              "Afwisselende projecten bij diverse organisaties",
              "Werken met de nieuwste AI-technologie",
              "Persoonlijk ontwikkelbudget",
              "Flexibele werkuren en locatie",
              "Competitief salaris"
            ]
          },
          {
            id: "ai-trainer",
            title: "AI Trainer / Workshop Lead",
            department: "training",
            departmentLabel: "Training & Workshops",
            location: "Groningen (+ reizen door Nederland)",
            hours: "24-40 uur/week",
            type: "Fulltime / Parttime",
            datePosted: "2026-06-08",
            summary: "Geef workshops en trainingen die organisaties AI-vaardig maken.",
            description: [
              "Als AI Trainer ben je het gezicht van AI Heroes bij onze klanten. Je geeft hands-on workshops aan teams variërend van C-level executives tot developers, en helpt ze begrijpen hoe ze AI effectief kunnen inzetten in hun dagelijks werk.",
              "Je ontwikkelt samen met ons team nieuw trainingsmateriaal, houdt bestaande content actueel en denkt mee over nieuwe trainingsformats. Je combineert didactische vaardigheden met diepgaande kennis van AI-tools en -toepassingen."
            ],
            requirements: [
              "Aantoonbare ervaring met het geven van trainingen of workshops",
              "Brede kennis van AI-tools en -toepassingen (ChatGPT, Copilot, Claude, etc.)",
              "Sterk in het vertalen van complexe concepten naar begrijpelijke taal",
              "Comfortabel met presenteren voor groepen van 5 tot 50 personen",
              "Bereid om te reizen door Nederland voor on-site trainingen",
              "Uitstekende beheersing van het Nederlands"
            ],
            offerings: [
              "Steeds nieuwe teams en organisaties",
              "Direct impact: je ziet deelnemers groeien tijdens je workshop",
              "Ruimte om eigen trainingsformats te ontwikkelen",
              "Flexibele inzet (parttime mogelijk)",
              "Competitieve dagvergoeding"
            ]
          },
          {
            id: "sales-intern",
            title: "Sales & Business Development Intern",
            department: "general",
            departmentLabel: "Business Development",
            location: "Groningen",
            hours: "32-40 uur/week",
            type: "Stage (min. 5 maanden)",
            datePosted: "2026-06-08",
            summary: "Bouw en onderhoud onze commerciële pipeline als onderdeel van het founding team.",
            description: [
              "AI Heroes is een snelgroeiende AI agency vanuit Groningen die bedrijven helpt het potentieel van kunstmatige intelligentie te benutten via training, consultancy en development. We maken AI praktisch en toegankelijk voor organisaties die het willen inzetten. We schalen snel op en zoeken commerciële versterking.",
              "Als onze Sales & Business Development Intern ben je verantwoordelijk voor het opbouwen en onderhouden van onze commerciële pipeline. Je werkt direct samen met de founders en krijgt veel eigenaarschap."
            ],
            requirements: [
              "Je studeert Commerciële Economie, International Business, of een vergelijkbare opleiding (HBO/Bachelor)",
              "Je bent proactief, zelfstandig en niet bang om de telefoon te pakken",
              "Je hebt affiniteit met technologie en AI",
              "Je bent minimaal 5 maanden beschikbaar, 32-40 uur per week"
            ],
            offerings: [
              "Stage bij een snelgroeiende AI agency met een ambitieuze, informele cultuur",
              "Direct samenwerken met de drie founders",
              "Veel ruimte voor initiatief en het ontwikkelen van je commerciële skills",
              "Eerlijke stagevergoeding",
              "Werkplek in Groningen"
            ]
          },
          {
            id: "marketing-intern",
            title: "AI-Enabled Marketing Intern",
            department: "training",
            departmentLabel: "Training & Marketing",
            location: "Groningen",
            hours: "32-40 uur/week",
            type: "Stage (min. 5 maanden)",
            datePosted: "2026-06-08",
            summary: "Creëer content die laat zien wat AI kan, met behulp van de nieuwste AI-tools.",
            description: [
              "Als Marketing Intern bij AI Heroes maak je content die onze expertise zichtbaar maakt: van LinkedIn-posts en blogs tot video's, visuals en nieuwsbrieven. Je gebruikt hierbij actief AI-tools zoals ChatGPT, Midjourney, Runway en Canva AI.",
              "Je werkt direct samen met de founders aan onze marketingstrategie en leert hoe een groeiende AI agency zichzelf positioneert. Je experimenteert continu met nieuwe AI-tools voor contentcreatie en deelt je bevindingen met het team."
            ],
            requirements: [
              "Je studeert Communicatie, Media, Marketing of een vergelijkbare opleiding (HBO/Bachelor)",
              "Je hebt ervaring met het maken van content voor social media (LinkedIn, Instagram, YouTube)",
              "Je bent nieuwsgierig naar AI-tools en gebruikt ze al voor je eigen werk",
              "Je kunt goed schrijven in het Nederlands, Engels is een plus",
              "Je bent minimaal 5 maanden beschikbaar, 32-40 uur per week"
            ],
            offerings: [
              "Hands-on ervaring met de nieuwste AI-tools voor contentcreatie",
              "Direct samenwerken met de founders",
              "Je eigen contentkalender opzetten en uitvoeren",
              "Eerlijke stagevergoeding",
              "Werkplek in Groningen"
            ]
          }
        ]
      },
      openApplication: {
        title: "Herken je jezelf niet in een vacature?",
        text: "We zijn altijd op zoek naar getalenteerde mensen die onze missie delen. Stuur een open sollicitatie en vertel ons wat jij kunt bijdragen aan AI Heroes.",
        cta: "Stuur een open sollicitatie"
      },
      applicationForm: {
        title: "Solliciteer",
        fields: {
          name: "Naam",
          email: "E-mail",
          phone: "Telefoonnummer",
          position: "Vacature",
          openApplicationLabel: "Open sollicitatie",
          motivation: "Motivatie",
          motivationPlaceholder: "Vertel ons waarom je bij AI Heroes wilt werken en wat je kunt bijdragen...",
          cv: "CV uploaden",
          cvHelp: "PDF of DOCX, maximaal 10MB",
          cvDrop: "Klik of sleep je CV hierheen",
          cvChange: "Wijzig bestand",
          gdpr: "Ik ga akkoord met de verwerking van mijn persoonsgegevens ten behoeve van deze sollicitatie conform het privacybeleid van AI Heroes.",
          submit: "Verstuur sollicitatie"
        },
        success: {
          title: "Sollicitatie ontvangen",
          message: "Bedankt voor je interesse in AI Heroes! We nemen je sollicitatie zorgvuldig door en nemen binnen 5 werkdagen contact met je op."
        },
        errors: {
          fileSize: "Bestand is te groot. Maximaal 10MB.",
          fileType: "Alleen PDF en DOCX bestanden worden geaccepteerd.",
          generic: "Er ging iets mis. Probeer het opnieuw."
        }
      },
      hiringProcess: {
        title: "Hoe werkt het?",
        steps: [
          { step: "1", title: "Sollicitatie", description: "Stuur je CV en motivatie via het formulier. We bevestigen de ontvangst binnen 2 werkdagen." },
          { step: "2", title: "Kennismaking", description: "Een informeel gesprek (30 min) om elkaar te leren kennen en te kijken of er een klik is." },
          { step: "3", title: "Verdieping", description: "Een inhoudelijk gesprek of praktijkopdracht, afhankelijk van de rol." },
          { step: "4", title: "Aanbod", description: "Past het? Dan doen we je een voorstel. We communiceren snel en transparant." }
        ]
      }
    },
    footer: {
      tagline: "Wij bouwen software en AI die in productie draait. Business case, compliance en training inbegrepen.",
      columns: {
        build: "Wat we bouwen",
        how: "Hoe we werken",
        cases: "Cases",
        company: "Bedrijf",
        knowledge: "Kennis"
      },
      partnersLabel: "We werken met",
      legal: {
        privacy: "Privacybeleid",
        terms: "Algemene Voorwaarden"
      },
      copyright: "© 2026 AI Heroes",
      madeIn: "Met trots gemaakt in Groningen, AI-hoofdstad van Europa"
    }
  },
  en: {
    nav: {
      build: {
        label: "What we build",
        href: "/en/services",
        children: [
          { label: "Build something new", href: "/en/services/software", description: "From idea to system in production" },
          { label: "Replace what no longer fits", href: "/en/services/replace-software", description: "Outdated or overpriced software out, something that fits in" },
          { label: "Run it on your own terms", href: "/en/services/eu-consultancy", description: "On your own servers or with a European provider" }
        ]
      },
      how: {
        label: "How we work",
        href: "/en/about/approach",
        children: [
          { label: "The start sprint", href: "/en/start-sprint", description: "One week, fixed fee, working prototype or build plan" },
          { label: "The AI Heroes standard", href: "/en/about/approach#standard", description: "What every build includes" },
          { label: "Business case and scoping", href: "/en/services/consulting", description: "Knowing the cost and the return before we build" },
          { label: "Compliance from the drawing board", href: "/en/about/approach#compliance", description: "AI Act, logging, oversight and hosting in the design" },
          { label: "Training your team", href: "/en/services/training", description: "Your people learn to work with what we build" }
        ]
      },
      cases: {
        label: "Cases",
        href: "/en/cases"
      },
      about: {
        label: "About",
        href: "/en/about",
        columns: [
          { heading: "Company", items: [
            { label: "About AI Heroes", href: "/en/about", description: "Who we are and why we build" },
            { label: "The team", href: "/en/about/team", description: "Frans, David and Jan" },
            { label: "Careers", href: "/en/careers", description: "View open positions" }
          ]},
          { heading: "Media & community", items: [
            { label: "AI Salon Groningen", href: "/en/ai-salon", description: "Bimonthly community evening" },
            { label: "As seen on TV", href: "/en/de-ai-storm", description: "De AI Storm on RTL" },
            { label: "Press", href: "/en/press", description: "Logo, brand and press contact" }
          ]},
          { heading: "Knowledge", items: [
            { label: "AI implementation costs", href: "/en/resources/ai-implementation-costs", description: "Real prices and price bands" },
            { label: "EU AI Act compliance", href: "/en/resources/eu-ai-act-compliance", description: "Step-by-step guide for Dutch organisations" },
            { label: "All resources", href: "/en/resources", description: "All articles and guides" }
          ]}
        ],
        children: [
          { label: "About AI Heroes", href: "/en/about" },
          { label: "The team", href: "/en/about/team" },
          { label: "Careers", href: "/en/careers" },
          { label: "AI Salon Groningen", href: "/en/ai-salon" },
          { label: "As seen on TV", href: "/en/de-ai-storm" },
          { label: "Resources", href: "/en/resources" }
        ]
      },
      cta: {
        label: "Plan a start sprint",
        href: "/en/start-sprint"
      },
      featured: {
        label: "The start sprint",
        href: "/en/start-sprint",
        description: "One week, fixed fee. Then you know whether it can be done, what it costs and what it looks like."
      }
    },
    hero: {
      slides: [
        {
          label: "From A to I",
          headline: "From <red>ambition</red>\nto <blue>implementation</blue>",
          subhead: "You have an idea, a process that could work better, or software that needs replacing.\nWe build what you need and make sure it runs.",
          ctaLabel: "Plan a start sprint",
          ctaTarget: "/en/start-sprint",
          image: "/hero/summit.webp"
        },
        {
          label: "Build something new",
          headline: "From <red>idea</red> to\n<blue>running system</blue>",
          subhead: "An assistant, a workflow, a tool that does not exist yet.\nA working prototype in six days, then on to production.",
          ctaLabel: "Plan a start sprint",
          ctaTarget: "/en/start-sprint",
          image: "/hero-bg.webp"
        },
        {
          label: "Replace what no longer fits",
          headline: "<red>Out</red> with software\nthat <blue>holds you back</blue>",
          subhead: "Replace outdated or overpriced systems with something that fits.\nConnected to your ERP, CRM and the rest of your landscape.",
          ctaLabel: "Plan a start sprint",
          ctaTarget: "/en/start-sprint",
          image: "/hero/glass.webp"
        },
        {
          label: "Run it on your own terms",
          headline: "AI on <red>your own</red> ground,\n<blue>hosted in Europe</blue>",
          subhead: "On your own servers or with a European provider.\nNo dependency on US cloud, with the AI Act built in.",
          ctaLabel: "Plan a start sprint",
          ctaTarget: "/en/start-sprint",
          image: "/hero/road.webp"
        }
      ]
    },
    services: {
      title: "What we build for you",
      intro: "Three ways to start, one front door.",
      cta: "Read more",
      items: [
        {
          entry: "nieuw",
          tag: "New",
          title: "Build something new",
          description: "An assistant, a workflow, a tool that does not exist yet. From prototype in six days to system in production. As at Kwakkel BV: a working prototype in six days.",
          href: "/en/services/software"
        },
        {
          entry: "vervangen",
          tag: "Replace",
          title: "Replace what no longer fits",
          description: "Software that is too expensive, too slow or too old, replaced by something that fits. Connected to your ERP, CRM and the rest of your landscape. As at Strive: an overpriced SaaS package out, custom software in.",
          href: "/en/services/replace-software"
        },
        {
          entry: "eigen-beheer",
          tag: "Own terms",
          title: "Run it on your own terms",
          description: "AI and software on your own servers or with a European provider. No US cloud, with the AI Act built in. Like the AI assistant on this site: built by us, hosted in Europe.",
          href: "/en/services/eu-consultancy"
        }
      ]
    },
    standard: {
      eyebrow: "The AI Heroes standard",
      title: "Included in every build",
      subtitle: "We call it the AI Heroes standard. Four things you never have to buy separately.",
      items: [
        {
          title: "Business case first",
          description: "Before we build, you know what it costs, what it returns and when it pays back. On one page, ready for the board."
        },
        {
          title: "Compliance from the drawing board",
          description: "AI Act classification, logging, human oversight and European hosting are part of the design. No repairs afterwards."
        },
        {
          title: "Your people can work with it",
          description: "We train the team that will use the system on that system. It lands on the work floor, and you meet Article 4 of the AI Act at the same time."
        },
        {
          title: "Handover without lock-in",
          description: "Source code, documentation and data model are yours. You can carry on without us if you want to."
        }
      ]
    },
    approach: {
      text: "We build <red>software</red> that works\nthe day we leave\n\nWith a business case that adds up,\ncompliance that runs from day one\nand people who know how to use it\n\nFrom ambition to <blue>implementation</blue>\nOne partner, one path"
    },
    team: {
      title: "Born problem-solvers",
      location: "Groningen, AI Capital of Europe",
      body: "Three founders, one shared passion for AI.\nFrans makes the business case, David builds, Jan makes sure your people can work with it.",
      cta: {
        text: "Meet the team",
        href: "/en/about/team"
      },
      image: {
        src: "/groningen.webp",
        alt: "Groningen - home base and AI Capital of Europe"
      }
    },
    socialProof: {
      title: "Some of the organizations we've worked with",
      heading: "What we built, and what it delivered",
      back: "Back",
      readMore: "Read more",
      prev: "Previous",
      next: "Next",
      logos: ["IC Commerce", "Strive", "INQ22", "Kwakkel BV", "UMCG", "Tweede Kamer", "Postcode Loterij", "Envalior", "Banijay", "Prosus", "Hanze"],
      testimonials: [
        {
          text: "AI Heroes helped us automate every step of our eCommerce platform with AI. It's great to work with an AI partner that knows the market so well, and now our business too.",
          highlight: "AI Heroes helped us automate every step of our eCommerce platform with AI.",
          author: "P.R. Jeeninga",
          role: "IC Commerce"
        },
        {
          text: "The team at AI Heroes has, despite any adversity thrown at them, provided us with impeccable AI software. In the timeline we gave them they went above and beyond and managed all our expectations.",
          highlight: "Impeccable AI software, delivered on deadline and going above and beyond.",
          author: "Baran Erdogan",
          role: "CTO, Jogo"
        },
        {
          text: "In developing our latest optical healthcare application, AI Heroes has helped us enormously with the analysis and technical realization.",
          highlight: "AI Heroes helped us enormously with the analysis and technical realization of our optical healthcare app.",
          author: "Igor Stalpers-Croeze",
          role: "Manager Research & Development, Avics B.V."
        },
        {
          text: "The way AI Heroes integrate with external stakeholders while working on our projects is satisfying to watch. Whether big or small, our projects are led with great experience, and with a team this flexible it's always fun to explore new things in AI together.",
          highlight: "With a team this flexible, it's always fun to explore new things in AI together.",
          author: "Saad Saleem",
          role: "Project Manager, Cloud Primero"
        },
        {
          text: "As an organization, we wanted to stay ahead of AI, so we had our team trained. Frans gave us a fantastic, hands-on workshop covering both theory and practice. We now have the tools to make AI manageable and applicable. Highly recommended!",
          highlight: "A fantastic, hands-on workshop of both theory and practice. Highly recommended!",
          author: "Bobby Kremer",
          role: "Nationale Postcode Loterij"
        },
        {
          text: "The AI Heroes team did a great job introducing us, as lecturers in Industrial Engineering, to the world of AI. Thanks to the interactive, hands-on workshop, we now have practical tools and tips to put to work in our teaching.",
          highlight: "AI Heroes did a great job introducing us, as lecturers in Industrial Engineering, to the world of AI.",
          author: "Remi Thüss",
          role: "Hanzehogeschool Groningen, TBK"
        }
      ]
    },
    contact: {
      form: {
        name: "Name",
        email: "Email",
        org: "Organization",
        topic: "What is it about?",
        topicOptions: [
          "Build something new",
          "Replace existing software",
          "Run it on our own terms",
          "Not sure yet"
        ],
        budget: {
          label: "What budget do you have in mind?",
          options: ["Under €10,000", "€10,000 to €25,000", "€25,000 to €100,000", "More than €100,000", "No idea yet"]
        },
        owner: {
          label: "Who decides on this?",
          options: ["I decide", "I share the decision", "I am exploring for someone else"]
        },
        message: "What do you want to build?",
        submit: "Send",
        error: "Something went wrong. Please try again or email us directly."
      },
      success: {
        title: "Received",
        message: "We reply within 24 hours, usually with a proposal for a start sprint.",
        sendAnother: "Send another"
      }
    },
    contactForm: {
      title: "Tell us what you want to build",
      subtitle: "We reply within 24 hours. Usually with a proposal for a start sprint.",
      emailLabel: "Or reach out directly:",
      email: "hello@aiheroes.io",
      phone: "+31 50 200 3373",
      phoneHref: "tel:+31502003373",
      meetingLabel: "Book an introduction",
      meetings: [
        {
          name: "Frans Hoorn",
          url: "https://calendar.app.google/juFpF3MDmikH4BVS8",
          photo: "/team/frans.webp",
          hint: "Business case and scoping"
        },
        {
          name: "David Homan",
          url: "https://calendar.app.google/GcA1oBNwzyFZtW5W6",
          photo: "/team/david.webp",
          hint: "Build, hosting and compliance"
        },
        {
          name: "Jan Brusse",
          url: "https://calendar.app.google/un3fLvb7ht4f7PBWA",
          photo: "/team/jan.webp",
          hint: "Adoption and training for your team"
        }
      ]
    },
    aboutPage: {
      hero: {
        title: "About AI Heroes",
        subtitle: "AI Heroes builds software and AI for organisations that want more than a pilot. We design, build and implement, and make sure it works: with a solid business case, compliance from the drawing board and a team that can run it."
      },
      intro: {
        text: "The AI Heroes brand dates back to 2019. At the end of 2025, Frans Hoorn, David Homan and Jan Brusse took over the brand and its client relationships and started again, with one observation as the starting point: the AI market is fragmented. Advisory firms write reports, training bureaus train and leave, tech companies build tools nobody understands. Almost nobody delivers software that works on the day of delivery and keeps working.\n\nSo we build. Every build starts with a business case, has compliance in the design and ends with a team that can work with it. From Groningen, the epicentre of AI in Europe and home of the AI Fabriek (AI Factory), for organisations across the Netherlands and Europe. With a European approach: data sovereignty, EU AI Act compliance and no vendor lock-in.",
        stats: [
          { metric: "50+", description: "Organisations helped" },
          { metric: "1,000+", description: "Professionals trained" },
          { metric: "6 days", description: "From question to working prototype" }
        ]
      },
      team: {
        title: "The team",
        subtitle: "Three founders, one path: from business case to handover",
        members: [
          {
            name: "Frans Hoorn",
            role: "Co-Founder · Business case & scoping",
            description: "Combines strategic thinking with a sharp eye for user experience. Leads the start sprint and the business case: what it costs, what it returns and when it pays back."
          },
          {
            name: "David Homan",
            role: "Co-Founder · Build & compliance",
            description: "The link between technology and the boardroom. Leads the build: from prototype to system in production, connected to your landscape, with AI Act classification, logging and hosting in the design."
          },
          {
            name: "Jan Brusse",
            role: "Co-Founder · Adoption & training",
            description: "Specialist in making complex technology accessible. Makes sure the team that will work with the system actually can: training on the system itself, on the work floor."
          }
        ]
      },
      cards: [
        {
          title: "How we work",
          description: "The start sprint, the AI Heroes standard and the path from business case to handover",
          href: "/en/about/approach",
          icon: "target"
        },
        {
          title: "The team",
          description: "Meet Frans, David and Jan and read their full profiles",
          href: "/en/about/team",
          icon: "users"
        }
      ],
      values: {
        title: "What drives us",
        items: [
          {
            title: "Honesty over sales",
            description: "If AI isn't the solution, we'll tell you. If the business case does not add up, we do not build."
          },
          {
            title: "Working over finished",
            description: "We measure success by what runs on the day we leave, and by what still runs a year later."
          },
          {
            title: "Practitioners who do the work",
            description: "We don't just advise, we build. Our own AI assistant runs on this site, hosted in Europe."
          },
          {
            title: "Groningen, AI Capital of Europe",
            description: "Rooted in Groningen, home of the AI Fabriek (AI Factory), a €200M investment. Local base, European reach."
          }
        ]
      }
    },
    careersPage: {
      hero: {
        title: "Work at AI Heroes",
        subtitle: "We are growing. Join a team that builds software and AI for organisations across Europe, and makes sure it works."
      },
      growth: {
        text: "We build software and AI that runs in production, with a business case first, compliance from the drawing board and training for the team that will use it. Our team grows with demand. We are looking for people who, like us, want to build something that works the day we leave.",
        stats: [
          { metric: "50+", description: "Organisations helped" },
          { metric: "1,000+", description: "Professionals trained" },
          { metric: "3", description: "Founders, one path" },
          { metric: "2019", description: "Founded" }
        ],
        trustedBy: ["Kwakkel BV", "INQ22", "UMCG", "Tweede Kamer", "Postcode Loterij", "Envalior"]
      },
      culture: {
        title: "Why AI Heroes?",
        values: [
          {
            title: "Real impact",
            description: "Our clients use AI to solve concrete problems, and you help them do it."
          },
          {
            title: "Autonomy & ownership",
            description: "You get responsibility from day one. We trust your expertise and give you the space to shape your own work."
          },
          {
            title: "Continuous learning",
            description: "AI changes every week. So do we. You get time and budget to stay current, experiment, and develop yourself."
          },
          {
            title: "Honest and direct",
            description: "We say what we think, help each other, and focus on what matters."
          }
        ],
        perks: [
          { title: "Office in Groningen", description: "Workspace in the AI Capital of Europe" },
          { title: "Flexible working", description: "Combine office and remote work as it suits you" },
          { title: "Learning budget", description: "Personal budget for courses, conferences, and tools" },
          { title: "Diverse projects", description: "From startups to multinationals, always new challenges" },
          { title: "Informal culture", description: "Flat organisation, short lines, direct collaboration" },
          { title: "Grow with us", description: "Join a team that's scaling fast in a booming market" }
        ]
      },
      departments: {
        title: "Our teams",
        subtitle: "Every project is carried by three roles that work together from business case to handover.",
        items: [
          {
            name: "Adoption & training",
            pillar: "training",
            description: "Makes sure the client's team can work with what we build: training on the system itself, AI literacy under Article 4 of the AI Act and guidance on the work floor."
          },
          {
            name: "Business case & scoping",
            pillar: "consulting",
            description: "Establishes before the build what it costs, what it returns and when it pays back. Leads the start sprint and keeps the scope sharp."
          },
          {
            name: "Build & compliance",
            pillar: "software",
            description: "Builds the software and AI, connects it to the client's landscape and makes sure AI Act classification, logging, oversight and hosting are part of the design. From prototype in six days to system in production."
          }
        ]
      },
      positions: {
        title: "Open positions",
        subtitle: "Explore our current openings and find the role that fits you.",
        items: [
          {
            id: "ai-engineer",
            title: "AI Engineer / Developer",
            department: "software",
            departmentLabel: "Software & Implementation",
            location: "Groningen",
            hours: "32-40 hours/week",
            type: "Full-time",
            datePosted: "2026-06-08",
            summary: "Build custom AI solutions for our clients, from prototype to production.",
            description: [
              "As an AI Engineer at AI Heroes, you work on diverse projects for clients across Europe. You build custom AI solutions that solve real business problems: from intelligent document systems to automated workflows and machine learning pipelines.",
              "You work closely with our Consulting team to translate client needs into technical solutions, and with the client's team to ensure smooth integration into their existing systems."
            ],
            requirements: [
              "Experience with Python and modern AI/ML frameworks (PyTorch, LangChain, or similar)",
              "Knowledge of LLMs, RAG architectures, and/or computer vision",
              "Experience with cloud platforms (AWS, Azure, or GCP)",
              "Able to work independently and thrive in a team",
              "Strong communication skills in English and/or Dutch"
            ],
            offerings: [
              "Varied projects across diverse organisations",
              "Work with cutting-edge AI technology",
              "Personal development budget",
              "Flexible working hours and location",
              "Competitive salary"
            ]
          },
          {
            id: "ai-trainer",
            title: "AI Trainer / Workshop Lead",
            department: "training",
            departmentLabel: "Training & Workshops",
            location: "Groningen (+ travel across the Netherlands)",
            hours: "24-40 hours/week",
            type: "Full-time / Part-time",
            datePosted: "2026-06-08",
            summary: "Deliver workshops and training that make organisations AI-ready.",
            description: [
              "As an AI Trainer, you are the face of AI Heroes at our clients. You deliver hands-on workshops to teams ranging from C-level executives to developers, helping them understand how to effectively use AI in their daily work.",
              "You develop new training material with our team, keep existing content up to date, and brainstorm new training formats. You combine didactic skills with deep knowledge of AI tools and applications."
            ],
            requirements: [
              "Demonstrable experience delivering training or workshops",
              "Broad knowledge of AI tools and applications (ChatGPT, Copilot, Claude, etc.)",
              "Strong at translating complex concepts into understandable language",
              "Comfortable presenting to groups of 5 to 50 people",
              "Willing to travel across the Netherlands for on-site training",
              "Excellent command of Dutch"
            ],
            offerings: [
              "Always new teams and organisations",
              "Direct impact: you see participants grow during your workshop",
              "Room to develop your own training formats",
              "Flexible scheduling (part-time possible)",
              "Competitive day rate"
            ]
          },
          {
            id: "sales-intern",
            title: "Sales & Business Development Intern",
            department: "general",
            departmentLabel: "Business Development",
            location: "Groningen",
            hours: "32-40 hours/week",
            type: "Internship (min. 5 months)",
            datePosted: "2026-06-08",
            summary: "Build and maintain our commercial pipeline as part of the founding team.",
            description: [
              "AI Heroes is a fast-growing AI agency based in Groningen, helping businesses unlock the potential of artificial intelligence through training, consultancy, and development. We make AI practical and accessible for organisations that want to put it to work. We're scaling quickly and looking for commercial reinforcement.",
              "As our Sales & Business Development Intern, you'll be responsible for building and maintaining our commercial pipeline. You'll work directly alongside the founders and get a lot of ownership."
            ],
            requirements: [
              "You're studying Commercial Economics, International Business, or a related programme (HBO/Bachelor level)",
              "You're proactive, independent, and not afraid to pick up the phone",
              "You have an affinity with technology and AI",
              "You're available for at least 5 months, 32-40 hours per week"
            ],
            offerings: [
              "An internship at a fast-growing AI agency with an ambitious, informal culture",
              "Working directly with the three founders",
              "Plenty of room for initiative and developing your commercial skills",
              "Fair internship compensation",
              "Office space in Groningen"
            ]
          },
          {
            id: "marketing-intern",
            title: "AI-Enabled Marketing Intern",
            department: "training",
            departmentLabel: "Training & Marketing",
            location: "Groningen",
            hours: "32-40 hours/week",
            type: "Internship (min. 5 months)",
            datePosted: "2026-06-08",
            summary: "Create content that showcases what AI can do, using the latest AI tools.",
            description: [
              "As a Marketing Intern at AI Heroes, you create content that makes our expertise visible: from LinkedIn posts and blogs to videos, visuals and newsletters. You actively use AI tools like ChatGPT, Midjourney, Runway and Canva AI.",
              "You work directly with the founders on our marketing strategy and learn how a growing AI agency positions itself. You continuously experiment with new AI tools for content creation and share your findings with the team."
            ],
            requirements: [
              "You're studying Communications, Media, Marketing or a related programme (HBO/Bachelor level)",
              "You have experience creating content for social media (LinkedIn, Instagram, YouTube)",
              "You're curious about AI tools and already use them for your own work",
              "You can write well in Dutch; English is a plus",
              "You're available for at least 5 months, 32-40 hours per week"
            ],
            offerings: [
              "Hands-on experience with the latest AI tools for content creation",
              "Working directly with the founders",
              "Set up and execute your own content calendar",
              "Fair internship compensation",
              "Office space in Groningen"
            ]
          }
        ]
      },
      openApplication: {
        title: "Don't see a role that fits?",
        text: "We're always looking for talented people who share our mission. Send an open application and tell us what you can bring to AI Heroes.",
        cta: "Send an open application"
      },
      applicationForm: {
        title: "Apply",
        fields: {
          name: "Name",
          email: "Email",
          phone: "Phone number",
          position: "Position",
          openApplicationLabel: "Open application",
          motivation: "Motivation",
          motivationPlaceholder: "Tell us why you want to work at AI Heroes and what you can contribute...",
          cv: "Upload CV",
          cvHelp: "PDF or DOCX, max 10MB",
          cvDrop: "Click or drag your CV here",
          cvChange: "Change file",
          gdpr: "I agree to the processing of my personal data for this application in accordance with AI Heroes' privacy policy.",
          submit: "Submit application"
        },
        success: {
          title: "Application received",
          message: "Thank you for your interest in AI Heroes! We'll carefully review your application and get back to you within 5 working days."
        },
        errors: {
          fileSize: "File is too large. Maximum 10MB.",
          fileType: "Only PDF and DOCX files are accepted.",
          generic: "Something went wrong. Please try again."
        }
      },
      hiringProcess: {
        title: "How it works",
        steps: [
          { step: "1", title: "Application", description: "Send your CV and motivation via the form. We'll confirm receipt within 2 working days." },
          { step: "2", title: "Introduction", description: "An informal chat (30 min) to get to know each other and see if there's a fit." },
          { step: "3", title: "Deep dive", description: "A substantive conversation or practical assignment, depending on the role." },
          { step: "4", title: "Offer", description: "If it's a match, we'll make you a proposal. We communicate quickly and transparently." }
        ]
      }
    },
    footer: {
      tagline: "We build software and AI that runs in production. Business case, compliance and training included.",
      columns: {
        build: "What we build",
        how: "How we work",
        cases: "Cases",
        company: "Company",
        knowledge: "Knowledge"
      },
      partnersLabel: "We work with",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms & Conditions"
      },
      copyright: "© 2026 AI Heroes",
      madeIn: "Proudly made in Groningen, AI Capital of Europe"
    }
  }
};

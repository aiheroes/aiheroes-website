import type { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  nl: {
    nav: {
      services: {
        label: "Diensten",
        href: "/nl/diensten",
        children: [
          { label: "AI Foundations", href: "/nl/diensten/ai-foundations", description: "De eerste stap van je team in AI", category: "training" },
          { label: "Copilot Training", href: "/nl/diensten/copilot-basics", description: "Microsoft 365 productiviteit", category: "training" },
          { label: "AI voor Developers", href: "/nl/diensten/ai-voor-developers", description: "Technische implementatie", category: "training" },
          { label: "Verantwoord AI-gebruik", href: "/nl/diensten/ai-privacy-security", description: "Governance & risicobeheer", category: "training" },
          { label: "AI & Desinformatie", href: "/nl/diensten/ai-media-literacy", description: "Deepfakes & desinformatie", category: "training" },
          { label: "Business Case Analyse", href: "/nl/diensten/opportunity-scouting", description: "Vind waar AI waarde creëert", category: "consulting" },
          { label: "AI Readiness Scan", href: "/nl/diensten/ai-readiness-scan", description: "Waar staat jouw organisatie?", category: "consulting" },
          { label: "AI Roadmap", href: "/nl/diensten/ai-roadmap", description: "Van inzicht naar implementatieplan", category: "consulting" },
          { label: "Implementatiebegeleiding", href: "/nl/diensten/ai-implementatiebegeleiding", description: "Hands-on begeleiding bij AI-uitrol", category: "consulting" },
          { label: "Procesoptimalisatie", href: "/nl/diensten/procesanalyse", description: "Ontdek waar AI waarde toevoegt", category: "consulting" },
          { label: "AI op Maat", href: "/nl/diensten/maatwerk-ai-oplossingen", description: "Custom AI, gebouwd met jouw team", category: "software" },
          { label: "Proof of Concept", href: "/nl/diensten/ai-prototyping", description: "Valideer je idee in 6 dagen", category: "software" },
          { label: "Systeemintegratie", href: "/nl/diensten/ai-integratie", description: "AI verbinden met je systemen", category: "software" },
          { label: "Dedicated Teams", href: "/nl/diensten/ai-development-teams", description: "Dedicated AI-ontwikkelcapaciteit", category: "software" },
          { label: "Digital Twins", href: "/nl/diensten/digital-twins", description: "Twin van je organisatie die zelf cases vindt en agents uitrolt", category: "software" }
        ]
      },
      about: {
        label: "Over ons",
        href: "/nl/over-ons",
        children: [
          { label: "Onze Aanpak", href: "/nl/over-ons/aanpak", description: "Hoe wij werken" },
          { label: "Het Team", href: "/nl/over-ons/team", description: "Ontmoet onze experts" },
          { label: "Vacatures", href: "/nl/vacatures", description: "Bekijk openstaande posities" }
        ]
      },
      resources: {
        label: "Resources",
        href: "/nl/resources",
        children: [
          { label: "AI Geletterdheid", href: "/nl/resources/ai-geletterdheid", description: "Waarom het ertoe doet" },
          { label: "AI Strategie Gids", href: "/nl/resources/ai-strategie-gids", description: "Aan de slag met AI-planning" }
        ]
      },
      contact: {
        label: "Contact",
        href: "/nl/contact"
      },
      featured: {
        label: "EU AI Consultancy",
        href: "/nl/diensten/eu-consultancy",
        description: "Europese AI zonder vendor lock-in"
      }
    },
    hero: {
      headline: "AI <red>werkt</red> als je\nweet <blue>hoe</blue>",
      subhead: "Eén agency van change management tot technische implementatie.\nVanuit Groningen, voor heel Europa.",
      primaryBtn: "Laten we praten",
      secondaryBtn: "Wat we doen",
      slides: [
        {
          label: "Alles van A tot I",
          headline: "AI <red>werkt</red> als je\nweet <blue>hoe</blue>",
          subhead: "Eén agency van change management tot technische implementatie.\nVanuit Groningen, voor heel Europa.",
          ctaLabel: "Laten we praten",
          ctaTarget: "#contact",
          image: "/hero/summit.webp"
        },
        {
          label: "Training & Workshops",
          headline: "Maak je <blue>team</blue>\nAI-<red>vaardig</red>",
          subhead: "Van boardroom tot werkvloer.\nPraktische workshops die bijblijven.",
          ctaLabel: "Plan een workshop",
          ctaTarget: "#contact?topic=0",
          image: "/hero/road.webp"
        },
        {
          label: "AI Consultancy",
          headline: "<red>Weet</red> waar AI\n<blue>waarde</blue> creëert",
          subhead: "AI-readiness scans, roadmaps\nen business cases.",
          ctaLabel: "Start met een scan",
          ctaTarget: "/nl/diensten/ai-readiness-scan",
          image: "/hero/glass.webp"
        },
        {
          label: "Software & Implementatie",
          headline: "Van <red>plan</red> naar\n<blue>oplossing</blue>",
          subhead: "Custom AI-oplossingen,\ngebouwd met jouw team.",
          ctaLabel: "Bespreek je project",
          ctaTarget: "#contact?topic=2",
          image: "/hero-bg.webp"
        }
      ]
    },
    services: {
      title: "Alles van A tot I",
      items: {
        training: {
          title: "Training & Workshops",
          description: "Maak je team AI-vaardig. Van AI Foundations tot EU AI Act compliance: praktische workshops die bijblijven."
        },
        consulting: {
          title: "AI Consultancy",
          description: "Van inzicht naar strategie. AI-readiness scans, roadmaps en change management, zodat AI landt in je hele organisatie."
        },
        software: {
          title: "Software & Implementatie",
          description: "Van plan naar werkende oplossing. Custom AI-toepassingen op Europese infrastructuur, gebouwd met jouw team."
        }
      }
    },
    approach: {
      title: "Hoe we werken",
      p1: "",
      p2: "AI raakt <red>alles</red>\nJe strategie, je mensen, je technologie\n\nVan change management tot technische implementatie\n\nEén agency voor het hele traject\nWe adviseren, trainen, bouwen\nen zorgen dat het <blue>werkt</blue>"
    },
    team: {
      title: "Geboren probleemoplossers",
      location: "Groningen, AI-hoofdstad van Europa",
      body: "Drie oprichters, één gedeelde passie voor AI.\nVanuit het hart van Europa's AI-hoofdstad.",
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
      testimonials: [
        {
          text: "Het team van AI Heroes heeft ons als docenten Technische Bedrijfskunde goed meegenomen in de wereld van AI. Door de interactieve en hands-on workshop hebben we nu praktische tools en tips gekregen om in ons onderwijs mee aan de slag te gaan.",
          author: "Docenten",
          role: "Hanzehogeschool Groningen, TBK"
        },
        {
          text: "Frans heeft ons een fantastische workshop gegeven waar we met de theorie en de praktijk aan de slag zijn gegaan. Sinds de workshop hebben we de handvatten om AI behapbaar en toepasbaar te maken.",
          author: "Bobby Kremer",
          role: "Nationale Postcode Loterij"
        }
      ]
    },
    contact: {
      title: "Interesse?",
      subtitle: "Laat je gegevens achter en we nemen contact op. Of mail ons direct:",
      educationNote: "Voor scholen en non-profits hebben we lagere tarieven.",
      form: {
        name: "Naam",
        email: "E-mail",
        org: "Organisatie",
        topic: "Onderwerp",
        topicOptions: [
          "Training",
          "Consultancy",
          "Software & Implementatie",
          "Iets anders"
        ],
        message: "Je bericht",
        submit: "Verstuur"
      },
      success: {
        title: "Ontvangen",
        message: "We nemen snel contact met je op.",
        sendAnother: "Nog een versturen"
      }
    },
    contactForm: {
      title: "Start vandaag met AI",
      subtitle: "Laat je gegevens achter en we nemen binnen 24 uur contact op.",
      emailLabel: "Of neem direct contact op:",
      email: "hello@aiheroes.io",
      phoneLabel: "",
      phone: "050-200 3373",
      phoneHref: "tel:+31502003373",
      meetingLabel: "Plan een kennismaking",
      meetingUrl: "https://calendar.app.google/juFpF3MDmikH4BVS8"
    },
    aboutPage: {
      hero: {
        title: "Over AI Heroes",
        subtitle: "AI Heroes is een full-service AI agency die organisaties door het hele AI-traject begeleidt, van change management tot technische implementatie. Vanuit Groningen, voor heel Europa."
      },
      intro: {
        text: "We zijn in 2019 begonnen vanuit een simpele observatie: de AI-markt is gefragmenteerd. Adviesbureaus schrijven rapporten, trainingsbureaus trainen en vertrekken, techbedrijven bouwen tools die niemand snapt. Niemand pakt het hele spectrum: van organisatieverandering tot technische implementatie.\n\nVanuit Groningen, epicentrum van AI in Europa en thuisbasis van de AI Fabriek, werken we met organisaties door heel Europa. Van startups tot Fortune 500 bedrijven, van gemeenten tot media-organisaties. Met een Europees-eerste aanpak: datasoevereiniteit, EU AI Act compliance en geen vendor lock-in.",
        stats: [
          { metric: "50+", description: "Organisaties geholpen" },
          { metric: "Sinds 2019", description: "Groningen, AI-hoofdstad van Europa" },
          { metric: "3", description: "Expertises onder één dak" }
        ]
      },
      team: {
        title: "Het team",
        subtitle: "Drie achtergronden, één gedeelde passie voor AI",
        members: [
          {
            name: "Frans Hoorn",
            role: "Co-Founder · AI Consultancy",
            description: "Combineert strategisch denken met een scherp oog voor gebruikerservaring. Leidt onze consultancy-pijler: AI-readiness scans, roadmaps en business cases die organisaties vooruit helpen."
          },
          {
            name: "David Homan",
            role: "Co-Founder · Software & Implementatie",
            description: "De schakel tussen techniek en boardroom. Leidt onze software-pijler: custom AI-oplossingen gebouwd met jouw team. Van prototype tot productie."
          },
          {
            name: "Jan Brusse",
            role: "Co-Founder · Training & Workshops",
            description: "Specialist in het toegankelijk maken van complexe technologie. Leidt onze training-pijler: van AI Foundations tot EU AI Act compliance, praktische workshops die bijblijven."
          }
        ]
      },
      cards: [
        {
          title: "Onze Aanpak",
          description: "Practice over theory, results over reports",
          href: "/nl/over-ons/aanpak",
          icon: "target"
        },
        {
          title: "Het Team",
          description: "Ontmoet Frans, Jan en David - lees hun volledige profielen",
          href: "/nl/over-ons/team",
          icon: "users"
        }
      ],
      values: {
        title: "Wat ons drijft",
        items: [
          {
            title: "Eerlijkheid boven verkoop",
            description: "Als AI niet de oplossing is, zeggen we dat. We verkopen alleen wat echt waarde toevoegt."
          },
          {
            title: "Maatwerk boven standaard",
            description: "Elke organisatie is anders. We passen onze aanpak aan jouw situatie, niet andersom."
          },
          {
            title: "Practitioners die meedoen",
            description: "We adviseren niet alleen, we bouwen ook. Kennis uit de praktijk, rechtstreeks toegepast in jouw organisatie."
          },
          {
            title: "Groningen, AI-hoofdstad van Europa",
            description: "Geworteld in Groningen, thuisbasis van de AI Fabriek (een investering van €200M). Lokale basis, Europees werkgebied."
          }
        ]
      }
    },
    resourcesPage: {
      hero: {
        title: "Resources",
        subtitle: "Praktische kennis over AI-strategie en geletterdheid. Gratis beschikbaar voor iedereen die AI begrijpt en toepast."
      },
      intro: {
        text: "AI heeft steeds meer impact op organisaties en samenleving. Het is dus belangrijk dat iedereen begrijpt hoe deze technologie werkt, ook buiten het tech-team.\n\nDaarom delen we onze kennis openlijk. Deze resources helpen je de basis te leggen voor AI-geletterdheid in je organisatie en een strategische koers uit te zetten.",
        stats: [
          { metric: "72%", description: "AI-adoptie onder bedrijven" },
          { metric: "2025", description: "EU AI Act verplicht" },
          { metric: "4 pijlers", description: "Van AI-geletterdheid" }
        ]
      },
      cards: [
        {
          title: "AI Geletterdheid",
          description: "Vanaf 2025 is begrip van AI niet langer optioneel door de EU AI Act",
          href: "/nl/resources/ai-geletterdheid",
          icon: "book"
        },
        {
          title: "AI Strategie Gids",
          description: "4-stappenplan om je AI-strategie praktisch vorm te geven",
          href: "/nl/resources/ai-strategie-gids",
          icon: "map"
        }
      ],
      why: {
        title: "Waarom deze resources",
        items: [
          {
            title: "Educatie voor implementatie",
            description: "Voordat je AI implementeert, moet je team begrijpen waar ze mee werken. Investeren in begrip voorkomt dure misstappen."
          },
          {
            title: "Transparantie en kennisdeling",
            description: "Wij geloven dat kennis over AI toegankelijk moet zijn. Geen marketing-praat, geen vendor lock-in, gewoon praktische info."
          },
          {
            title: "AI-geletterde organisaties bouwen",
            description: "Organisaties die succesvol zijn met AI hebben één ding gemeen: breed gedragen begrip van de mogelijkheden én beperkingen."
          },
          {
            title: "EU AI Act compliance",
            description: "Vanaf 2025 verplicht de EU AI Act organisaties om AI-geletterdheid aan te tonen. Begin nu met de basis leggen."
          }
        ]
      }
    },
    dienstenPage: {
      hero: {
        title: "Onze Diensten",
        subtitle: "Van change management tot technische implementatie, onder één dak. Waar je ook staat met AI, wij helpen je verder.",
        cta1: "Bekijk diensten",
        cta2: "Direct contact",
        credibility: "50+ organisaties geholpen sinds 2019"
      },
      valueProps: {
        title: "Waarom AI Heroes",
        items: [
          {
            title: "Wij bouwen zelf AI",
            description: "We bouwen zelf AI-producten en -systemen. Kennis uit de praktijk, rechtstreeks toegepast."
          },
          {
            title: "Praktijk boven theorie",
            description: "Elke workshop is hands-on. Je team werkt met echte tools aan echte use cases. Direct toepasbaar."
          },
          {
            title: "Focus op resultaat",
            description: "We leveren concrete skills en inzichten. Meetbare impact staat voorop."
          }
        ]
      },
      stats: [
        {
          metric: "70% minder kosten",
          description: "Medux reduceerde AI-kosten met 70% na ons traject"
        },
        {
          metric: "6 dagen tot prototype",
          description: "Gemiddelde tijd van eerste gesprek tot werkend prototype"
        },
        {
          metric: "3 expertises, 1 partner",
          description: "Training, consulting en software onder één dak"
        }
      ],
      heroServices: [
        {
          title: "Training & Workshops",
          description: "Maak je team AI-vaardig",
          benefit: "Van AI Foundations tot EU AI Act compliance. Praktische workshops van boardroom tot werkvloer die bijblijven."
        },
        {
          title: "AI Consultancy",
          description: "Van inzicht naar strategie",
          benefit: "AI-readiness scans, roadmaps en business cases. Weet precies waar AI waarde toevoegt in jouw organisatie."
        },
        {
          title: "Software & Implementatie",
          description: "Van plan naar werkende oplossing",
          benefit: "Custom AI-toepassingen, gebouwd met jouw team. Van prototype tot productie."
        }
      ],
      process: {
        title: "Wat gebeurt er als je contact opneemt",
        timeline: "Van eerste gesprek tot resultaat: gemiddeld 2 weken",
        steps: [
          {
            title: "Kennismakingsgesprek",
            description: "We luisteren naar je situatie, uitdagingen en doelen. Verstaan wat je nodig hebt staat voorop."
          },
          {
            title: "Voorstel op maat",
            description: "We stellen een aanpak voor die past bij je team, budget en tijdlijn. Transparant over kosten en verwachte resultaten."
          },
          {
            title: "Directe impact",
            description: "We gaan aan de slag met training, advies of ontwikkeling. Meetbare resultaten die direct waarde opleveren."
          }
        ]
      },
      guarantees: {
        title: "Onze garanties",
        items: [
          {
            title: "Geen vendor lock-in",
            description: "We leren je werken met algemene AI-tools. Je bent niet afhankelijk van één platform of leverancier."
          },
          {
            title: "Eerlijk advies",
            description: "Als AI niet de oplossing is, zeggen we dat. We verkopen alleen wat echt waarde toevoegt."
          }
        ]
      },
      faq: {
        title: "Veelgestelde vragen",
        items: [
          {
            question: "Hoe lang duurt een workshop?",
            answer: "De meeste workshops duren een dag (6-8 uur). Voor meerdaagse trajecten plannen we sessies in overleg."
          },
          {
            question: "Wat zijn de kosten?",
            answer: "Afhankelijk van de dienst. Training start vanaf €2.500 per dag, consulting vanaf €3.000 per traject, software vanaf €15.000 per project. Voor scholen en non-profits hebben we lagere tarieven."
          },
          {
            question: "Wat als AI niet geschikt blijkt?",
            answer: "Dan zeggen we dat eerlijk. Bij onze consulting trajecten krijg je altijd een helder advies, ook als dat betekent dat AI nog niet de juiste fit is."
          },
          {
            question: "Werken jullie op locatie of online?",
            answer: "Beiden. We geven voorkeur aan on-site voor betere interactie, maar online werkt ook uitstekend."
          },
          {
            question: "Wat is een AI-readiness scan?",
            answer: "Een scan van jouw organisatie: waar staan jullie met AI, waar liggen kansen, en wat is de beste eerste stap? Je ontvangt een concreet rapport met aanbevelingen."
          },
          {
            question: "Bouwen jullie ook software?",
            answer: "Ja. Via onze software-pijler bouwen we custom AI-oplossingen. Van prototype tot productie, zelfstandig of samen met jouw ontwikkelteam."
          }
        ]
      },
      contactSection: {
        title: "Start vandaag met AI",
        subtitle: "Laat je gegevens achter en we nemen binnen 24 uur contact op.",
        altCta: "Of mail ons direct:"
      }
    },
    careersPage: {
      hero: {
        title: "Werken bij AI Heroes",
        subtitle: "Wij groeien. Sluit je aan bij een ambitieus team dat organisaties door heel Europa helpt met AI: van strategie tot implementatie."
      },
      growth: {
        text: "Sinds 2019 helpen we organisaties door heel Europa met het hele AI-traject. Van boardroom-workshops tot custom software, ons team groeit mee met de vraag. We zoeken mensen die net zo gedreven zijn als wij om AI toegankelijk en impactvol te maken.",
        stats: [
          { metric: "50+", description: "Organisaties geholpen" },
          { metric: "1000+", description: "Professionals getraind" },
          { metric: "3", description: "Expertiseteams" },
          { metric: "2019", description: "Opgericht" }
        ],
        trustedBy: ["Postcode Loterij", "Banijay", "Prosus", "Medux", "Hanze", "Envalior"]
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
        subtitle: "AI Heroes bestaat uit drie gespecialiseerde teams die nauw samenwerken.",
        items: [
          {
            name: "Training & Workshops",
            pillar: "training",
            description: "Ons Training team ontwikkelt en levert workshops en programma's voor organisaties van MKB tot multinational. Van AI Foundations voor beginners tot gespecialiseerde tracks voor developers en beleidsmakers."
          },
          {
            name: "AI Consultancy",
            pillar: "consulting",
            description: "Ons Consultancy team helpt organisaties hun AI-strategie te bepalen. Van readiness scans en roadmaps tot implementatiebegeleiding: we vertalen ambitie naar actie."
          },
          {
            name: "Software & Implementatie",
            pillar: "software",
            description: "Ons Software team bouwt custom AI-oplossingen. Van rapid prototypes in 6 dagen tot enterprise-grade integraties, altijd in samenwerking met het team van de klant."
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
      tagline: "Full-service AI agency. Van change management tot technische implementatie, met een Europese aanpak.",
      caseStudies: {
        title: "Case Studies",
        items: ["Medux", "OLX", "Trabu", "InnoEnergy"]
      },
      partnerships: "Development Partnerships",
      legal: {
        privacy: "Privacy Policy",
        terms: "Algemene Voorwaarden"
      },
      copyright: "© 2026 AI Heroes",
      madeIn: "| Met trots gemaakt in Groningen, AI-hoofdstad van Europa"
    }
  },
  en: {
    nav: {
      services: {
        label: "Services",
        href: "/en/services",
        children: [
          { label: "AI Foundations", href: "/en/services/ai-foundations", description: "Your team's first step into AI", category: "training" },
          { label: "Copilot Training", href: "/en/services/copilot-basics", description: "Microsoft 365 productivity", category: "training" },
          { label: "AI for Developers", href: "/en/services/ai-for-developers", description: "Technical implementation", category: "training" },
          { label: "Responsible AI Use", href: "/en/services/ai-privacy-security", description: "Governance & risk management", category: "training" },
          { label: "AI & Disinformation", href: "/en/services/ai-media-literacy", description: "Deepfakes & misinformation", category: "training" },
          { label: "Business Case Analysis", href: "/en/services/opportunity-scouting", description: "Find where AI creates value", category: "consulting" },
          { label: "AI Readiness Scan", href: "/en/services/ai-readiness-scan", description: "Where does your organisation stand?", category: "consulting" },
          { label: "AI Roadmap", href: "/en/services/ai-roadmap", description: "From insight to implementation plan", category: "consulting" },
          { label: "Implementation Guidance", href: "/en/services/ai-implementation-guidance", description: "Hands-on guidance during AI rollout", category: "consulting" },
          { label: "Process Optimisation", href: "/en/services/process-analysis", description: "Discover where AI adds value", category: "consulting" },
          { label: "Custom AI", href: "/en/services/custom-ai-solutions", description: "Custom AI, built with your team", category: "software" },
          { label: "Proof of Concept", href: "/en/services/ai-prototyping", description: "Validate your idea in 6 days", category: "software" },
          { label: "System Integration", href: "/en/services/ai-integration", description: "Connect AI to your systems", category: "software" },
          { label: "Dedicated Teams", href: "/en/services/ai-development-teams", description: "Dedicated AI development capacity", category: "software" },
          { label: "Digital Twins", href: "/en/services/digital-twins", description: "A twin of your organisation that surfaces cases and deploys agents", category: "software" }
        ]
      },
      about: {
        label: "About",
        href: "/en/about",
        children: [
          { label: "Our Approach", href: "/en/about/approach", description: "How we work" },
          { label: "The Team", href: "/en/about/team", description: "Meet our experts" },
          { label: "Careers", href: "/en/careers", description: "View open positions" }
        ]
      },
      resources: {
        label: "Resources",
        href: "/en/resources",
        children: [
          { label: "Why AI Literacy Matters", href: "/en/resources/ai-literacy", description: "The case for organization-wide AI understanding" },
          { label: "AI Strategy Starter Guide", href: "/en/resources/ai-strategy-guide", description: "Getting started with strategic AI planning" }
        ]
      },
      contact: {
        label: "Contact",
        href: "/en/contact"
      },
      featured: {
        label: "EU AI Consultancy",
        href: "/en/services/eu-consultancy",
        description: "European AI without vendor lock-in"
      }
    },
    hero: {
      headline: "AI <red>works</red> if you\nknow <blue>how</blue>",
      subhead: "One agency from change management to technical implementation.\nFrom Groningen, for all of Europe.",
      primaryBtn: "Let's talk",
      secondaryBtn: "What we do",
      slides: [
        {
          label: "Everything A to I",
          headline: "AI <red>works</red> if you\nknow <blue>how</blue>",
          subhead: "One agency from change management to technical implementation.\nFrom Groningen, for all of Europe.",
          ctaLabel: "Let's talk",
          ctaTarget: "#contact",
          image: "/hero/summit.webp"
        },
        {
          label: "Training & Workshops",
          headline: "Make your <blue>team</blue>\nAI-<red>ready</red>",
          subhead: "From boardroom to work floor.\nPractical workshops that stick.",
          ctaLabel: "Plan a workshop",
          ctaTarget: "#contact?topic=0",
          image: "/hero/road.webp"
        },
        {
          label: "AI Consultancy",
          headline: "<red>Know</red> where AI\ncreates <blue>value</blue>",
          subhead: "AI-readiness scans, roadmaps\nand business cases.",
          ctaLabel: "Start with a scan",
          ctaTarget: "/en/services/ai-readiness-scan",
          image: "/hero/glass.webp"
        },
        {
          label: "Software & Implementation",
          headline: "From <red>plan</red> to\n<blue>solution</blue>",
          subhead: "Custom AI solutions,\nbuilt with your team.",
          ctaLabel: "Discuss your project",
          ctaTarget: "#contact?topic=2",
          image: "/hero-bg.webp"
        }
      ]
    },
    services: {
      title: "Everything A to I",
      items: {
        training: {
          title: "Training & Workshops",
          description: "Get your team AI-ready. From AI Foundations to EU AI Act compliance: practical workshops that stick."
        },
        consulting: {
          title: "AI Consulting",
          description: "From insight to strategy. AI-readiness scans, roadmaps and change management, so AI lands across your entire organisation."
        },
        software: {
          title: "Software & Implementation",
          description: "From plan to working solution. Custom AI applications on European infrastructure, built with your team."
        }
      }
    },
    approach: {
      title: "How we work",
      p1: "",
      p2: "AI touches <red>everything</red>\nYour strategy, your people, your technology\n\nFrom change management to technical implementation\n\nOne agency for the entire journey\nWe advise, train, build\nand make sure it <blue>works</blue>"
    },
    team: {
      title: "Born problem-solvers",
      location: "Groningen, AI Capital of Europe",
      body: "Three founders, one shared passion for AI.\nBased in the heart of Europe's AI Capital.",
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
      testimonials: [
        {
          text: "The AI Heroes team did a great job introducing us, as lecturers in Industrial Engineering, to the world of AI. Thanks to the interactive, hands-on workshop, we now have practical tools and tips to put to work in our teaching.",
          author: "Lecturers",
          role: "Hanzehogeschool Groningen, TBK"
        },
        {
          text: "Frans gave us a great workshop, theory and practice combined. Since then we have the tools to actually work with AI.",
          author: "Bobby Kremer",
          role: "Nationale Postcode Loterij"
        }
      ]
    },
    contact: {
      title: "Interested?",
      subtitle: "Leave your details and we'll get back to you. Or mail us directly:",
      educationNote: "For schools and non-profits we have lower rates.",
      form: {
        name: "Name",
        email: "Email",
        org: "Organization",
        topic: "Topic",
        topicOptions: [
          "Training",
          "Consulting",
          "Software & Implementation",
          "Something else"
        ],
        message: "Your message",
        submit: "Send"
      },
      success: {
        title: "Received",
        message: "We will be in touch shortly.",
        sendAnother: "Send another"
      }
    },
    contactForm: {
      title: "Start with AI today",
      subtitle: "Leave your details and we'll contact you within 24 hours.",
      emailLabel: "Or reach out directly:",
      email: "hello@aiheroes.io",
      phoneLabel: "",
      phone: "050-200 3373",
      phoneHref: "tel:+31502003373",
      meetingLabel: "Schedule an introduction",
      meetingUrl: "https://calendar.app.google/juFpF3MDmikH4BVS8"
    },
    aboutPage: {
      hero: {
        title: "About AI Heroes",
        subtitle: "AI Heroes is a full-service AI agency that guides organisations through the entire AI journey, from change management to technical implementation. Based in Groningen, serving all of Europe."
      },
      intro: {
        text: "We started in 2019 with a simple observation: the AI market is fragmented. Advisory firms write reports, training bureaus train and leave, tech companies build tools nobody understands. Nobody covers the full spectrum: from organisational change to technical implementation.\n\nBased in Groningen, the epicentre of AI in Europe and home to the AI Fabriek, we work with organisations across Europe. From startups to Fortune 500 companies, from municipalities to media organisations. With a European-first approach: data sovereignty, EU AI Act compliance, and no vendor lock-in.",
        stats: [
          { metric: "50+", description: "Organizations helped" },
          { metric: "Since 2019", description: "Groningen, AI Capital of Europe" },
          { metric: "3", description: "Expertises under one roof" }
        ]
      },
      team: {
        title: "The team",
        subtitle: "Three backgrounds, one shared passion for AI",
        members: [
          {
            name: "Frans Hoorn",
            role: "Co-Founder · AI Consulting",
            description: "Combines strategic thinking with a sharp eye for user experience. Leads our consulting pillar: AI-readiness scans, roadmaps and business cases that move organisations forward."
          },
          {
            name: "David Homan",
            role: "Co-Founder · Software & Implementation",
            description: "The link between tech and boardroom. Leads our software pillar: custom AI solutions built with your team. From prototype to production."
          },
          {
            name: "Jan Brusse",
            role: "Co-Founder · Training & Workshops",
            description: "Specialist in making complex technology accessible. Leads our training pillar: from AI Foundations to EU AI Act compliance, practical workshops that stick."
          }
        ]
      },
      cards: [
        {
          title: "Our Approach",
          description: "Practice over theory, results over reports",
          href: "/en/about/approach",
          icon: "target"
        },
        {
          title: "The Team",
          description: "Meet Frans, Jan and David - read their full profiles",
          href: "/en/about/team",
          icon: "users"
        }
      ],
      values: {
        title: "What drives us",
        items: [
          {
            title: "Honesty over sales",
            description: "If AI isn't the solution, we'll tell you. We only sell what truly adds value."
          },
          {
            title: "Custom over standard",
            description: "Every organization is different. We adapt our approach to your situation, not the other way around."
          },
          {
            title: "Practitioners who do the work",
            description: "We don't just advise, we also build. Knowledge from practice, directly applied in your organization."
          },
          {
            title: "Groningen, AI Capital of Europe",
            description: "Rooted in Groningen, home to the AI Fabriek (a €200M investment). Local base, European reach."
          }
        ]
      }
    },
    resourcesPage: {
      hero: {
        title: "Resources",
        subtitle: "Practical knowledge about AI strategy and literacy. Free for everyone who wants to understand and apply AI."
      },
      intro: {
        text: "AI has growing impact on organisations and society. Understanding how this technology works matters across the whole organisation, well beyond the tech team.\n\nThat's why we share our knowledge openly. These resources help you lay the foundation for AI literacy in your organization and chart a strategic course.",
        stats: [
          { metric: "72%", description: "AI adoption among companies" },
          { metric: "2025", description: "EU AI Act mandatory" },
          { metric: "4 pillars", description: "Of AI literacy" }
        ]
      },
      cards: [
        {
          title: "Why AI Literacy Matters",
          description: "From 2025, understanding AI is no longer optional due to the EU AI Act",
          href: "/en/resources/ai-literacy",
          icon: "book"
        },
        {
          title: "AI Strategy Starter Guide",
          description: "4-step practical guide to building your AI strategy",
          href: "/en/resources/ai-strategy-guide",
          icon: "map"
        }
      ],
      why: {
        title: "Why these resources",
        items: [
          {
            title: "Education before implementation",
            description: "Before you implement AI, your team needs to understand what they're working with. Investing in understanding prevents expensive mistakes."
          },
          {
            title: "Transparency and knowledge sharing",
            description: "We believe knowledge about AI should be accessible. No marketing speak, no vendor lock-in, just practical information."
          },
          {
            title: "Building AI-literate organizations",
            description: "Organizations that succeed with AI have one thing in common: widely supported understanding of both possibilities and limitations."
          },
          {
            title: "EU AI Act compliance",
            description: "From 2025, the EU AI Act requires organizations to demonstrate AI literacy. Start laying the foundation now."
          }
        ]
      }
    },
    servicesPage: {
      hero: {
        title: "Our Services",
        subtitle: "From change management to technical implementation, under one roof. Wherever you stand with AI, we help you forward.",
        cta1: "View services",
        cta2: "Get in touch",
        credibility: "50+ organizations helped since 2019"
      },
      valueProps: {
        title: "Why AI Heroes",
        items: [
          {
            title: "We build AI ourselves",
            description: "We build AI products and systems ourselves. Knowledge from practice, applied directly."
          },
          {
            title: "Practice over theory",
            description: "Every workshop is hands-on. Your team works with real tools on real use cases. Immediately applicable."
          },
          {
            title: "Focus on results",
            description: "We deliver concrete skills and insights. Measurable impact comes first."
          }
        ]
      },
      stats: [
        {
          metric: "70% lower costs",
          description: "Medux reduced AI costs by 70% after our engagement"
        },
        {
          metric: "6 days to prototype",
          description: "Average time from first conversation to working prototype"
        },
        {
          metric: "3 expertises, 1 partner",
          description: "Training, consulting and software under one roof"
        }
      ],
      heroServices: [
        {
          title: "Training & Workshops",
          description: "Get your team AI-ready",
          benefit: "From AI Foundations to EU AI Act compliance. Practical workshops from boardroom to work floor that stick."
        },
        {
          title: "AI Consulting",
          description: "From insight to strategy",
          benefit: "AI-readiness scans, roadmaps and business cases. Know exactly where AI adds value in your organisation."
        },
        {
          title: "Software & Implementation",
          description: "From plan to working solution",
          benefit: "Custom AI applications, built with your team. From prototype to production."
        }
      ],
      process: {
        title: "What happens when you reach out",
        timeline: "From first conversation to results: average 2 weeks",
        steps: [
          {
            title: "Discovery call",
            description: "We listen to your situation, challenges and goals. Understanding what you need comes first."
          },
          {
            title: "Tailored proposal",
            description: "We propose an approach that fits your team, budget and timeline. Transparent about costs and expected results."
          },
          {
            title: "Immediate impact",
            description: "We get to work on training, advice or development. Measurable results that deliver immediate value."
          }
        ]
      },
      guarantees: {
        title: "Our guarantees",
        items: [
          {
            title: "No vendor lock-in",
            description: "We teach you to work with general AI tools. You're not dependent on one platform or vendor."
          },
          {
            title: "Honest advice",
            description: "If AI isn't the solution, we'll tell you. We only sell what truly adds value."
          }
        ]
      },
      faq: {
        title: "Frequently asked questions",
        items: [
          {
            question: "How long does a workshop take?",
            answer: "Most workshops last one day (6-8 hours). For multi-day programmes we schedule sessions in consultation."
          },
          {
            question: "What are the costs?",
            answer: "Depends on the service. Training starts at €2,500 per day, consulting from €3,000 per engagement, software from €15,000 per project. We have lower rates for schools and non-profits."
          },
          {
            question: "What if AI turns out not to be suitable?",
            answer: "Then we'll tell you honestly. With our consulting engagements you always get clear advice, even if that means AI isn't the right fit yet."
          },
          {
            question: "Do you work on-site or online?",
            answer: "Both. We prefer on-site for better interaction, but online works excellently too."
          },
          {
            question: "What is an AI-readiness scan?",
            answer: "A scan of your organisation: where do you stand with AI, where are the opportunities, and what's the best first step? You receive a concrete report with recommendations."
          },
          {
            question: "Do you also build software?",
            answer: "Yes. Through our software pillar we build custom AI solutions. From prototype to production, independently or alongside your development team."
          }
        ]
      },
      contactSection: {
        title: "Start with AI today",
        subtitle: "Leave your details and we'll contact you within 24 hours.",
        altCta: "Or email us directly:"
      }
    },
    careersPage: {
      hero: {
        title: "Work at AI Heroes",
        subtitle: "We're growing. Join an ambitious team helping organisations across Europe with AI: from strategy to implementation."
      },
      growth: {
        text: "Since 2019, we've been helping organisations across Europe with the full AI journey. From boardroom workshops to custom software, our team grows with the demand. We're looking for people who are just as driven as we are to make AI accessible and impactful.",
        stats: [
          { metric: "50+", description: "Organisations helped" },
          { metric: "1,000+", description: "Professionals trained" },
          { metric: "3", description: "Expert teams" },
          { metric: "2019", description: "Founded" }
        ],
        trustedBy: ["Postcode Loterij", "Banijay", "Prosus", "Medux", "Hanze", "Envalior"]
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
        subtitle: "AI Heroes consists of three specialised teams that work closely together.",
        items: [
          {
            name: "Training & Workshops",
            pillar: "training",
            description: "Our Training team develops and delivers workshops and programmes for organisations from SMEs to multinationals. From AI Foundations for beginners to specialised tracks for developers and policymakers."
          },
          {
            name: "AI Consulting",
            pillar: "consulting",
            description: "Our Consulting team helps organisations define their AI strategy. From readiness scans and roadmaps to implementation guidance: we translate ambition into action."
          },
          {
            name: "Software & Implementation",
            pillar: "software",
            description: "Our Software team builds custom AI solutions. From rapid prototypes in 6 days to enterprise-grade integrations, always in collaboration with the client's team."
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
      tagline: "Full-service AI agency. From change management to technical implementation, with a European approach.",
      caseStudies: {
        title: "Case Studies",
        items: ["Medux", "OLX", "Trabu", "InnoEnergy"]
      },
      partnerships: "Development Partnerships",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms & Conditions"
      },
      copyright: "© 2026 AI Heroes",
      madeIn: "| Proudly made in Groningen, AI Capital of Europe"
    }
  }
};
import { Content, Language } from './types';

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
          { label: "Dedicated Teams", href: "/nl/diensten/ai-development-teams", description: "Dedicated AI-ontwikkelcapaciteit", category: "software" }
        ]
      },
      about: {
        label: "Over ons",
        href: "/nl/over-ons",
        children: [
          { label: "Onze Aanpak", href: "/nl/over-ons/aanpak", description: "Hoe wij werken" },
          { label: "Het Team", href: "/nl/over-ons/team", description: "Ontmoet onze experts" }
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
        label: "Digitale Onafhankelijkheid",
        href: "/nl/diensten/eu-consultancy",
        description: "Europese AI zonder vendor lock-in"
      }
    },
    hero: {
      headline: "AI <red>werkt</red> als je\nweet <blue>hoe</blue>",
      subhead: "Eén partner voor training, strategie en implementatie.\nWaar je ook staat met AI.",
      primaryBtn: "Laten we praten",
      secondaryBtn: "Wat we doen",
      slides: [
        {
          label: "Alles van A tot I",
          headline: "AI <red>werkt</red> als je\nweet <blue>hoe</blue>",
          subhead: "Eén partner voor training, strategie en implementatie.\nWaar je ook staat met AI.",
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
          description: "Maak je team AI-vaardig. Van AI Foundations tot EU AI Act compliance — praktische workshops die bijblijven."
        },
        consulting: {
          title: "AI Consultancy",
          description: "Van inzicht naar strategie. AI-readiness scans, roadmaps en business cases die je organisatie vooruit helpen."
        },
        software: {
          title: "Software & Implementatie",
          description: "Van plan naar werkende oplossing. Custom AI-toepassingen, gebouwd met jouw team."
        }
      }
    },
    approach: {
      title: "Hoe we werken",
      p1: "",
      p2: "AI raakt <red>alles</red>\nJe strategie, je team, je technologie\n\nWij pakken het allemaal op\n\nEén partner voor het hele traject\nWe adviseren, trainen, bouwen\nen zorgen dat het <blue>werkt</blue>"
    },
    team: {
      title: "Geboren probleemoplossers",
      location: "Gevestigd in Groningen",
      body: "Drie oprichters, één gedeelde passie voor AI.\nMet een lokaal netwerk van experts voor elk project.",
      cta: {
        text: "Leer ons kennen",
        href: "/nl/over-ons/team"
      },
      image: {
        src: "/groningen.webp",
        alt: "Groningen - onze thuisbasis"
      }
    },
    socialProof: {
      title: "Een greep uit de organisaties waar we mee gewerkt hebben",
      testimonial: {
        text: "Frans heeft ons een fantastische workshop gegeven waar we met de theorie en de praktijk aan de slag zijn gegaan. Sinds de workshop hebben we de handvatten om AI behapbaar en toepasbaar te maken.",
        author: "Bobby Kremer",
        role: "Nationale Postcode Loterij"
      }
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
      emailLabel: "Of mail ons direct:",
      email: "hello@aiheroes.io"
    },
    aboutPage: {
      hero: {
        title: "Over AI Heroes",
        subtitle: "AI Heroes is een AI consultancy die organisaties helpt in elk stadium van hun AI-reis. Van teams die nog niet weten wat AI is, tot bedrijven die klaar zijn om te bouwen."
      },
      intro: {
        text: "We zijn in 2019 begonnen vanuit een simpele observatie: de AI-markt is gefragmenteerd. Adviesbureaus schrijven rapporten, trainingsbureaus trainen en vertrekken, techbedrijven bouwen tools die niemand snapt. Niemand combineert alle drie.\n\nVanuit Groningen werken we met organisaties door heel Nederland en daarbuiten. Van startups tot Fortune 500 bedrijven, van gemeenten tot media-organisaties.",
        stats: [
          { metric: "50+", description: "Organisaties geholpen" },
          { metric: "Sinds 2019", description: "Gevestigd in Groningen" },
          { metric: "3", description: "Expertises onder één dak" }
        ]
      },
      team: {
        title: "Het team",
        subtitle: "Drie achtergronden, één gedeelde passie voor AI",
        members: [
          {
            name: "Frans Hoorn",
            role: "Managing Partner · AI Consultancy",
            description: "Combineert strategisch denken met een scherp oog voor gebruikerservaring. Leidt onze consultancy-pijler: AI-readiness scans, roadmaps en business cases die organisaties vooruit helpen."
          },
          {
            name: "David Homan",
            role: "Managing Partner · Software & Implementatie",
            description: "De schakel tussen techniek en boardroom. Leidt onze software-pijler: custom AI-oplossingen gebouwd met jouw team. Van prototype tot productie."
          },
          {
            name: "Jan Brusse",
            role: "Managing Partner · Training & Workshops",
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
            title: "Groningen sinds 2019",
            description: "Lokaal geworteld, internationaal actief. Vaste thuisbasis, flexibel werkgebied."
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
        text: "In een wereld waar AI steeds meer impact heeft op organisaties en de samenleving, is het cruciaal dat mensen begrijpen hoe deze technologie werkt. Niet alleen de techneuten, maar iedereen.\n\nDaarom delen we onze kennis openlijk. Deze resources helpen je de basis te leggen voor AI-geletterdheid in je organisatie en een strategische koers uit te zetten.",
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
        subtitle: "Training, consulting en software onder één dak. Waar je ook staat met AI, wij helpen je verder.",
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
            description: "We gaan aan de slag. Training, advies of ontwikkeling — meetbare resultaten die direct waarde opleveren."
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
    footer: {
      tagline: "Training, consulting en implementatie voor organisaties die AI willen inzetten.",
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
      madeIn: "| Met trots gemaakt in Groningen"
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
          { label: "Dedicated Teams", href: "/en/services/ai-development-teams", description: "Dedicated AI development capacity", category: "software" }
        ]
      },
      about: {
        label: "About",
        href: "/en/about",
        children: [
          { label: "Our Approach", href: "/en/about/approach", description: "How we work" },
          { label: "The Team", href: "/en/about/team", description: "Meet our experts" }
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
        label: "Digital Independence",
        href: "/en/services/eu-consultancy",
        description: "European AI without vendor lock-in"
      }
    },
    hero: {
      headline: "AI <red>works</red> if you\nknow <blue>how</blue>",
      subhead: "One partner for training, strategy and implementation.\nWherever you stand with AI.",
      primaryBtn: "Let's talk",
      secondaryBtn: "What we do",
      slides: [
        {
          label: "Everything A to I",
          headline: "AI <red>works</red> if you\nknow <blue>how</blue>",
          subhead: "One partner for training, strategy and implementation.\nWherever you stand with AI.",
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
          description: "Get your team AI-ready. From AI Foundations to EU AI Act compliance — practical workshops that stick."
        },
        consulting: {
          title: "AI Consulting",
          description: "From insight to strategy. AI-readiness scans, roadmaps and business cases that move your organisation forward."
        },
        software: {
          title: "Software & Implementation",
          description: "From plan to working solution. Custom AI applications, built with your team."
        }
      }
    },
    approach: {
      title: "How we work",
      p1: "",
      p2: "AI touches <red>everything</red>\nYour strategy, your team, your technology\n\nThat's why we tackle it all\n\nOne partner for the entire journey\nWe advise, train, build\nand make sure it <blue>works</blue>"
    },
    team: {
      title: "Born problem-solvers",
      location: "Based in Groningen",
      body: "Three founders, one shared passion for AI.\nWith a local network of experts for every project.",
      cta: {
        text: "Meet the team",
        href: "/en/about/team"
      },
      image: {
        src: "/groningen.webp",
        alt: "Groningen - our home base"
      }
    },
    socialProof: {
      title: "Some of the organizations we've worked with",
      testimonial: {
        text: "Frans gave us a great workshop, theory and practice combined. Since then we have the tools to actually work with AI.",
        author: "Bobby Kremer",
        role: "Nationale Postcode Loterij"
      }
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
      emailLabel: "Or email us directly:",
      email: "hello@aiheroes.io"
    },
    aboutPage: {
      hero: {
        title: "About AI Heroes",
        subtitle: "AI Heroes is an AI consultancy that helps organisations at every stage of their AI journey. From teams that don't yet know what AI is, to companies ready to build."
      },
      intro: {
        text: "We started in 2019 with a simple observation: the AI market is fragmented. Advisory firms write reports, training bureaus train and leave, tech companies build tools nobody understands. Nobody combines all three.\n\nBased in Groningen, we work with organizations throughout the Netherlands and beyond. From startups to Fortune 500 companies, from municipalities to media organizations.",
        stats: [
          { metric: "50+", description: "Organizations helped" },
          { metric: "Since 2019", description: "Based in Groningen" },
          { metric: "3", description: "Expertises under one roof" }
        ]
      },
      team: {
        title: "The team",
        subtitle: "Three backgrounds, one shared passion for AI",
        members: [
          {
            name: "Frans Hoorn",
            role: "Managing Partner · AI Consulting",
            description: "Combines strategic thinking with a sharp eye for user experience. Leads our consulting pillar: AI-readiness scans, roadmaps and business cases that move organisations forward."
          },
          {
            name: "David Homan",
            role: "Managing Partner · Software & Implementation",
            description: "The link between tech and boardroom. Leads our software pillar: custom AI solutions built with your team. From prototype to production."
          },
          {
            name: "Jan Brusse",
            role: "Managing Partner · Training & Workshops",
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
            title: "Groningen since 2019",
            description: "Locally rooted, internationally active. Fixed home base, flexible work area."
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
        text: "In a world where AI has increasing impact on organizations and society, it's crucial that people understand how this technology works. Not just the tech people, but everyone.\n\nThat's why we share our knowledge openly. These resources help you lay the foundation for AI literacy in your organization and chart a strategic course.",
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
        subtitle: "Training, consulting and software under one roof. Wherever you stand with AI, we help you forward.",
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
            description: "We get to work. Training, advice or development — measurable results that deliver immediate value."
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
    footer: {
      tagline: "Training, consulting and implementation for organisations that want to put AI to work.",
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
      madeIn: "| Proudly made in Groningen, The Netherlands"
    }
  }
};
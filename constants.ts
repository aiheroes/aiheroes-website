import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  nl: {
    nav: {
      services: {
        label: "Diensten",
        href: "/nl/diensten",
        children: [
          { label: "AI Foundations", href: "/nl/diensten/ai-foundations", description: "De eerste stap van je team in AI", category: "training" },
          { label: "Opportunity Scouting", href: "/nl/diensten/opportunity-scouting", description: "Vind waar AI waarde creëert", category: "strategy" },
          { label: "Copilot Basics", href: "/nl/diensten/copilot-basics", description: "Microsoft 365 productiviteit", category: "training" },
          { label: "AI voor Developers", href: "/nl/diensten/ai-voor-developers", description: "Technische implementatie", category: "training" },
          { label: "Specialistische Tracks", href: "/nl/diensten/specialistische-tracks", description: "Advanced prompting & LLM-integraties", category: "bespoke" },
          { label: "AI Privacy & Security", href: "/nl/diensten/ai-privacy-security", description: "Governance & risicobeheer", category: "awareness" },
          { label: "AI Media Literacy", href: "/nl/diensten/ai-media-literacy", description: "Deepfakes & desinformatie", category: "awareness" }
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
      }
    },
    hero: {
      headline: "AI <red>werkt</red> als je\nweet <blue>hoe</blue>",
      subhead: "Wij geven praktische workshops waar je iets aan hebt.\nSkills die voor je werken.",
      primaryBtn: "Laten we praten",
      secondaryBtn: "Wat we doen"
    },
    services: {
      title: "Onze Expertises",
      items: {
        foundations: {
          title: "AI Foundations",
          description: "Onze kernworkshop. We komen bij je langs en werken met je team tot iedereen het snapt. Zo maak je snel stappen met AI."
        },
        scouting: {
          title: "Opportunity Scouting",
          description: "Waar laat je geld liggen? We analyseren je processen en komen terug met een roadmap voor AI-implementatie."
        },
        specialized: {
          title: "Specialistische Tracks",
          description: "Van advanced prompting tot custom LLM-integraties. Voor teams die de basis al voorbij zijn en de diepte in willen."
        }
      }
    },
    approach: {
      title: "Hoe we werken",
      p1: "",
      p2: "Elke organisatie is anders.\nEen marketingteam zit met andere vragen dan een IT-afdeling.\nEen startup werkt anders dan een gemeente. Daar houden we rekening mee."
    },
    team: {
      title: "Wij zijn Frans, Jan en David",
      location: "Gevestigd in Groningen",
      body: "Sinds 2019. Groningen als thuisbasis, de wereld als werkterrein. Drie achtergronden, een missie: AI praktisch maken.",
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
          "Workshop",
          "Scouting",
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
        subtitle: "Sinds 2019 helpen we organisaties praktisch met AI. Wij zijn geen consultants die rapporten schrijven - wij zijn practitioners die bouwen en trainen."
      },
      intro: {
        text: "We zijn in 2019 begonnen vanuit een simpele observatie: organisaties hebben geen behoefte aan nog meer PowerPoints over AI. Ze willen concrete skills, werkende prototypes, en teams die zelfstandig met AI aan de slag kunnen.\n\nVanuit Groningen werken we met organisaties door heel Nederland en daarbuiten. Van startups tot Fortune 500 bedrijven, van gemeenten tot media-organisaties.",
        stats: [
          { metric: "50+", description: "Organisaties geholpen" },
          { metric: "Sinds 2019", description: "Gevestigd in Groningen" },
          { metric: "3", description: "Managing partners" }
        ]
      },
      team: {
        title: "Het team",
        subtitle: "Drie achtergronden, één missie: AI praktisch maken",
        members: [
          {
            name: "Frans Hoorn",
            role: "Managing Partner · Strategy & Product",
            description: "Combineert strategisch denken met een scherp oog voor gebruikerservaring. Helpt organisaties om AI niet als losstaande technologie te zien, maar als integraal onderdeel van hun product- en merkstrategie."
          },
          {
            name: "David Homan",
            role: "Managing Partner · AI & Development",
            description: "De schakel tussen techniek en boardroom. Begrijpt hoe AI-modellen onder de motorkap werken en vertaalt die kennis naar wat het betekent voor jouw bedrijfsprocessen. Bouwt zelf met tools als GitHub Copilot en lokale AI-modellen."
          },
          {
            name: "Jan Brusse",
            role: "Managing Partner · Training & Innovation",
            description: "Specialist in het toegankelijk maken van complexe technologie. Snapt als geen ander hoe je een taai onderwerp omzet naar een interactieve, praktische sessie die blijft hangen."
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
            title: "Practitioners, geen consultants",
            description: "We bouwen zelf met AI. Kennis uit de praktijk, rechtstreeks toegepast in jouw organisatie."
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
        subtitle: "Van AI Foundations tot specialistische tracks. Praktische training die je team direct toepasbaar maakt.",
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
          description: "Medux reduceerde AI-kosten met 70% na onze workshop"
        },
        {
          metric: "6 dagen tot prototype",
          description: "Gemiddelde tijd van eerste gesprek tot werkend prototype"
        },
        {
          metric: "50+ teams getraind",
          description: "Van startups tot Fortune 500 bedrijven"
        }
      ],
      heroServices: [
        {
          title: "AI Foundations",
          description: "Van nul tot AI-vaardig team in één dag",
          benefit: "Je team snapt AI fundamenteel en kan direct productief aan de slag met tools als ChatGPT en Claude."
        },
        {
          title: "Opportunity Scouting",
          description: "Ontdek waar AI 10x impact maakt",
          benefit: "Een concrete roadmap met gekwantificeerde ROI. Weet precies waar je AI moet inzetten voor maximale waarde."
        },
        {
          title: "Specialistische Tracks",
          description: "Advanced AI voor gevorderde teams",
          benefit: "Van advanced prompting tot custom LLM-integraties. Voor teams die voorbij de basis willen."
        }
      ],
      process: {
        title: "Wat gebeurt er als je contact opneemt",
        timeline: "Van eerste gesprek tot workshop: gemiddeld 2 weken",
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
            description: "We gaan aan de slag. Praktische training, concrete tools, meetbare resultaten. Direct toepasbaar in je werk."
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
            answer: "De meeste workshops duren een dag (6-8 uur). Voor specialistische tracks plannen we meerdere sessies in overleg."
          },
          {
            question: "Wat zijn de kosten?",
            answer: "Afhankelijk van de dienst en groepsgrootte. AI Foundations start vanaf €2.500 voor een team tot 15 personen. Voor scholen en non-profits hebben we lagere tarieven."
          },
          {
            question: "Wat als AI niet geschikt blijkt?",
            answer: "Dan zeggen we dat eerlijk. Bij Opportunity Scouting krijg je altijd een helder advies, ook als dat betekent dat AI nog niet de juiste fit is."
          },
          {
            question: "Werken jullie op locatie of online?",
            answer: "Beiden. We geven voorkeur aan on-site workshops voor betere interactie, maar online werkt ook uitstekend."
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
      tagline: "Wij helpen bedrijven AI te navigeren met praktische vaardigheden en strategisch inzicht.",
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
          { label: "Opportunity Scouting", href: "/en/services/opportunity-scouting", description: "Find where AI creates value", category: "strategy" },
          { label: "Copilot Basics", href: "/en/services/copilot-basics", description: "Microsoft 365 productivity", category: "training" },
          { label: "AI for Developers", href: "/en/services/ai-for-developers", description: "Technical implementation", category: "training" },
          { label: "Specialized Tracks", href: "/en/services/specialized-tracks", description: "Advanced prompting & LLM integrations", category: "bespoke" },
          { label: "AI Privacy & Security", href: "/en/services/ai-privacy-security", description: "Governance & risk management", category: "awareness" },
          { label: "AI Media Literacy", href: "/en/services/ai-media-literacy", description: "Deepfakes & misinformation", category: "awareness" }
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
      }
    },
    hero: {
      headline: "AI <red>works</red> if you\nknow <blue>how</blue>",
      subhead: "We give practical workshops that actually help.\nSkills to work for you.",
      primaryBtn: "Let's talk",
      secondaryBtn: "What we do"
    },
    services: {
      title: "Our Expertises",
      items: {
        foundations: {
          title: "AI Foundations",
          description: "Our core workshop. We come in and work with your team until everyone gets it. No fluff, just concrete tools."
        },
        scouting: {
          title: "Opportunity Scouting",
          description: "Where are you leaving money on the table? We analyze your processes and return with an AI roadmap that actually yields returns."
        },
        specialized: {
          title: "Specialized Tracks",
          description: "From advanced prompting to custom LLM integrations. For teams that are past the basics and want to go deep."
        }
      }
    },
    approach: {
      title: "How we work",
      p1: "",
      p2: "Every organization is different.\nA marketing team has different questions than an IT department.\nA startup works differently than a municipality. We take that into account."
    },
    team: {
      title: "We are Frans, Jan and David",
      location: "Based in Groningen",
      body: "Since 2019. Groningen as home base, the world as our workspace. Three backgrounds, one mission: making AI practical.",
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
          "Workshop",
          "Scouting",
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
        subtitle: "Since 2019, we've been helping organizations with practical AI. We're not consultants who write reports - we're practitioners who build and train."
      },
      intro: {
        text: "We started in 2019 with a simple observation: organizations don't need more PowerPoints about AI. They want concrete skills, working prototypes, and teams that can work independently with AI.\n\nBased in Groningen, we work with organizations throughout the Netherlands and beyond. From startups to Fortune 500 companies, from municipalities to media organizations.",
        stats: [
          { metric: "50+", description: "Organizations helped" },
          { metric: "Since 2019", description: "Based in Groningen" },
          { metric: "3", description: "Managing partners" }
        ]
      },
      team: {
        title: "The team",
        subtitle: "Three backgrounds, one mission: making AI practical",
        members: [
          {
            name: "Frans Hoorn",
            role: "Managing Partner · Strategy & Product",
            description: "Combines strategic thinking with a sharp eye for user experience. Helps organizations see AI not as standalone technology, but as an integral part of their product and brand strategy."
          },
          {
            name: "David Homan",
            role: "Managing Partner · AI & Development",
            description: "The link between tech and boardroom. Understands how AI models work under the hood and translates that knowledge into what it means for your business processes. Builds with tools like GitHub Copilot and local AI models."
          },
          {
            name: "Jan Brusse",
            role: "Managing Partner · Training & Innovation",
            description: "Specialist in making complex technology accessible. Knows like no other how to turn a tough subject into an interactive, practical session that sticks."
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
            title: "Practitioners, not consultants",
            description: "We build with AI ourselves. Knowledge from practice, directly applied in your organization."
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
        subtitle: "From AI Foundations to specialized tracks. Practical training that makes your team immediately productive.",
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
          description: "Medux reduced AI costs by 70% after our workshop"
        },
        {
          metric: "6 days to prototype",
          description: "Average time from first conversation to working prototype"
        },
        {
          metric: "50+ teams trained",
          description: "From startups to Fortune 500 companies"
        }
      ],
      heroServices: [
        {
          title: "AI Foundations",
          description: "From zero to AI-capable team in one day",
          benefit: "Your team understands AI fundamentally and can immediately work productively with tools like ChatGPT and Claude."
        },
        {
          title: "Opportunity Scouting",
          description: "Discover where AI creates 10x impact",
          benefit: "A concrete roadmap with quantified ROI. Know exactly where to deploy AI for maximum value."
        },
        {
          title: "Specialized Tracks",
          description: "Advanced AI for experienced teams",
          benefit: "From advanced prompting to custom LLM integrations. For teams ready to go beyond the basics."
        }
      ],
      process: {
        title: "What happens when you reach out",
        timeline: "From first conversation to workshop: average 2 weeks",
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
            description: "We get to work. Practical training, concrete tools, measurable results. Immediately applicable in your work."
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
            answer: "Most workshops last one day (6-8 hours). For specialized tracks we schedule multiple sessions in consultation."
          },
          {
            question: "What are the costs?",
            answer: "Depends on the service and group size. AI Foundations starts at €2,500 for a team up to 15 people. We have lower rates for schools and non-profits."
          },
          {
            question: "What if AI turns out not to be suitable?",
            answer: "Then we'll tell you honestly. With Opportunity Scouting you always get clear advice, even if that means AI isn't the right fit yet."
          },
          {
            question: "Do you work on-site or online?",
            answer: "Both. We prefer on-site workshops for better interaction, but online works excellently too."
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
      tagline: "Helping organizations navigate the complexities of Artificial Intelligence with practical skills and strategic insight.",
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
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
        src: "/campaign-photos/groningen.webp",
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
            title: "Practitioners, niet consultants",
            description: "We bouwen zelf AI-producten en -systemen. Geen theorie uit handboeken, maar kennis uit de praktijk."
          },
          {
            title: "Praktijk boven theorie",
            description: "Elke workshop is hands-on. Je team werkt met echte tools aan echte use cases. Direct toepasbaar."
          },
          {
            title: "Resultaat, geen rapporten",
            description: "We garanderen concrete skills en inzichten. Niet tevreden? Geld terug. Zo simpel is het."
          }
        ]
      },
      stats: [
        {
          metric: "70% kostenbesparing",
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
            description: "We luisteren naar je situatie, uitdagingen en doelen. Geen verkooppraatje, gewoon begrijpen wat je nodig hebt."
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
        src: "/campaign-photos/groningen.webp",
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
            title: "Practitioners, not consultants",
            description: "We build AI products and systems ourselves. No theory from textbooks, but knowledge from practice."
          },
          {
            title: "Practice over theory",
            description: "Every workshop is hands-on. Your team works with real tools on real use cases. Immediately applicable."
          },
          {
            title: "Results, not reports",
            description: "We guarantee concrete skills and insights. Not satisfied? Money back. It's that simple."
          }
        ]
      },
      stats: [
        {
          metric: "70% cost reduction",
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
            description: "We listen to your situation, challenges and goals. No sales pitch, just understanding what you need."
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
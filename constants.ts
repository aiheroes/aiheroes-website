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
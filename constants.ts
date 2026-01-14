import { Content, Language } from './types';

export const CONTENT: Record<Language, Content> = {
  nl: {
    nav: {
      services: {
        label: "Expertises",
        href: "/nl/diensten",
        children: [
          { label: "AI Foundations", href: "/nl/diensten/ai-foundations" },
          { label: "Opportunity Scouting", href: "/nl/diensten/opportunity-scouting" },
          { label: "ChatGPT Basics", href: "/nl/diensten/chatgpt-basics" },
          { label: "AI voor Developers", href: "/nl/diensten/ai-voor-developers" },
          { label: "AI Privacy & Security", href: "/nl/diensten/ai-privacy-security" },
          { label: "AI Media Literacy", href: "/nl/diensten/ai-media-literacy" }
        ]
      },
      about: {
        label: "Over ons",
        href: "/nl/over-ons",
        children: [
          { label: "Aanpak", href: "/nl/over-ons/aanpak" },
          { label: "Team", href: "/nl/over-ons/team" }
        ]
      },
      resources: {
        label: "Resources",
        href: "/nl/resources",
        children: [
          { label: "AI Geletterdheid", href: "/nl/resources/ai-geletterdheid" },
          { label: "AI Strategie Gids", href: "/nl/resources/ai-strategie-gids" }
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
          description: "Onze kernworkshop. We komen langs en werken met je team tot iedereen het snapt. Geen zweverig gedoe, maar concrete tools."
        },
        scouting: {
          title: "Opportunity Scouting",
          description: "Waar laat je geld liggen? We analyseren je processen en komen terug met een roadmap voor AI-implementatie die direct rendeert."
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
      intro: "Sinds 2019 helpen we bedrijven verder waar ze vastlopen met AI.",
      slides: [
        {
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
          alt: "Workshop presentatie"
        },
        {
          image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=2000",
          alt: "Team workshop"
        }
      ]
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
      copyright: "© 2025 AI Heroes",
      madeIn: "| Met trots gemaakt in Groningen"
    }
  },
  en: {
    nav: {
      services: {
        label: "Expertises",
        href: "/en/services",
        children: [
          { label: "AI Foundations", href: "/en/services/ai-foundations" },
          { label: "Opportunity Scouting", href: "/en/services/opportunity-scouting" },
          { label: "ChatGPT Basics", href: "/en/services/chatgpt-basics" },
          { label: "AI for Developers", href: "/en/services/ai-for-developers" },
          { label: "AI Privacy & Security", href: "/en/services/ai-privacy-security" },
          { label: "AI Media Literacy", href: "/en/services/ai-media-literacy" }
        ]
      },
      about: {
        label: "About",
        href: "/en/about",
        children: [
          { label: "Our Approach", href: "/en/about/approach" },
          { label: "The Team", href: "/en/about/team" }
        ]
      },
      resources: {
        label: "Resources",
        href: "/en/resources",
        children: [
          { label: "Why AI Literacy Matters", href: "/en/resources/why-ai-literacy-matters" },
          { label: "Getting Started with AI Strategy", href: "/en/resources/getting-started" }
        ]
      },
      contact: {
        label: "Contact",
        href: "/en/contact"
      }
    },
    hero: {
      headline: "AI <red>works</red> if you\nknow <blue>how</blue>",
      subhead: "We give workshops.\nPractical ones, where people actually learn something.\nSkills that work for you.",
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
      intro: "Since 2019 we help companies move forward where they get stuck with AI.",
      slides: [
        {
          image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000",
          alt: "Workshop presentation"
        },
        {
          image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=2000",
          alt: "Team workshop"
        }
      ]
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
      copyright: "© 2025 AI Heroes",
      madeIn: "| Proudly made in Groningen, The Netherlands"
    }
  }
};
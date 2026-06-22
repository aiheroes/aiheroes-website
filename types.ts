export type Language = 'nl' | 'en';

export interface NavChild {
  label: string;
  href: string;
  description?: string;
  category?: 'training' | 'consulting' | 'software';
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface FeaturedNavLink {
  label: string;
  href: string;
  description: string;
}

export interface NavStructure {
  services: NavItem;
  about: NavItem;
  resources: NavItem;
  contact: NavItem;
  featured?: FeaturedNavLink;
}

export interface HeroSlide {
  label: string;
  headline: string;
  subhead: string;
  ctaLabel: string;
  ctaTarget: string;
  image: string;
  topicIndex?: number;
}

export interface HeroContent {
  headline: string;
  subhead: string;
  primaryBtn: string;
  secondaryBtn: string;
  slides: HeroSlide[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  items: {
    training: ServiceItem;
    consulting: ServiceItem;
    software: ServiceItem;
  };
}

export interface ApproachContent {
  title: string;
  p1: string;
  p2: string; // The highlighted block
}

export interface TeamContent {
  title: string;
  location: string;
  body: string;
  cta: {
    text: string;
    href: string;
  };
  image: {
    src: string;
    alt: string;
  };
}

export interface SocialProofContent {
  title: string;
  testimonials: {
    text: string;
    author: string;
    role: string;
  }[];
}

export interface ContactContent {
  title: string;
  subtitle: string;
  educationNote: string;
  form: {
    name: string;
    email: string;
    org: string;
    topic: string;
    topicOptions: string[];
    message: string;
    submit: string;
  };
  success: {
    title: string;
    message: string;
    sendAnother: string;
  };
}

export interface FooterContent {
  tagline: string;
  caseStudies: {
    title: string;
    items: string[];
  };
  partnerships: string;
  legal: {
    privacy: string;
    terms: string;
  };
  copyright: string;
  madeIn: string;
}

export interface DienstenContent {
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    credibility: string;
  };
  valueProps: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  stats: Array<{
    metric: string;
    description: string;
  }>;
  heroServices: Array<{
    title: string;
    description: string;
    benefit: string;
  }>;
  process: {
    title: string;
    timeline: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  guarantees: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  faq: {
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contactSection: {
    title: string;
    subtitle: string;
    altCta: string;
  };
}

export interface ContactFormContent {
  title: string;
  subtitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  phoneHref: string;
  meetingLabel: string;
  meetingUrl: string;
}

export interface AboutPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    text: string;
    stats: Array<{
      metric: string;
      description: string;
    }>;
  };
  team: {
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      role: string;
      description: string;
    }>;
  };
  cards: Array<{
    title: string;
    description: string;
    href: string;
    icon: string;
  }>;
  values: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export interface ResourcesPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  intro: {
    text: string;
    stats: Array<{
      metric: string;
      description: string;
    }>;
  };
  cards: Array<{
    title: string;
    description: string;
    href: string;
    icon: string;
  }>;
  why: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
}

export interface JobPosition {
  id: string;
  title: string;
  department: 'training' | 'consulting' | 'software' | 'general';
  departmentLabel: string;
  location: string;
  hours: string;
  type: string;
  summary: string;
  description: string[];
  requirements: string[];
  offerings: string[];
  datePosted: string; // ISO date (YYYY-MM-DD) for JobPosting structured data
}

export interface CareersPageContent {
  hero: {
    title: string;
    subtitle: string;
  };
  growth: {
    text: string;
    stats: Array<{
      metric: string;
      description: string;
    }>;
    trustedBy: string[];
  };
  culture: {
    title: string;
    values: Array<{
      title: string;
      description: string;
    }>;
    perks: Array<{
      title: string;
      description: string;
    }>;
  };
  departments: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      pillar: 'training' | 'consulting' | 'software';
      description: string;
    }>;
  };
  positions: {
    title: string;
    subtitle: string;
    items: JobPosition[];
  };
  openApplication: {
    title: string;
    text: string;
    cta: string;
  };
  applicationForm: {
    title: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      position: string;
      openApplicationLabel: string;
      motivation: string;
      motivationPlaceholder: string;
      cv: string;
      cvHelp: string;
      cvDrop: string;
      cvChange: string;
      gdpr: string;
      submit: string;
    };
    success: {
      title: string;
      message: string;
    };
    errors: {
      fileSize: string;
      fileType: string;
      generic: string;
    };
  };
  hiringProcess: {
    title: string;
    steps: Array<{
      step: string;
      title: string;
      description: string;
    }>;
  };
}

export interface Content {
  nav: NavStructure;
  hero: HeroContent;
  services: ServicesContent;
  approach: ApproachContent;
  team: TeamContent;
  socialProof: SocialProofContent;
  contact: ContactContent;
  contactForm: ContactFormContent;
  aboutPage: AboutPageContent;
  resourcesPage: ResourcesPageContent;
  footer: FooterContent;
  dienstenPage?: DienstenContent;
  servicesPage?: DienstenContent;
  careersPage: CareersPageContent;
}

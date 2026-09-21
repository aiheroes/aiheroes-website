export type Language = 'nl' | 'en';

/** The three ways a client comes in. Drives cards, badges, hero images and form chips. */
export type Entry = 'nieuw' | 'vervangen' | 'eigen-beheer';

export interface NavChild {
  label: string;
  href: string;
  description?: string;
}

export interface NavColumn {
  heading: string;
  items: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
  /** Optional grouped columns for a mega-menu (Over ons). */
  columns?: NavColumn[];
}

export interface FeaturedNavLink {
  label: string;
  href: string;
  description: string;
}

export interface NavStructure {
  /** "Wat we bouwen": the three entries. */
  build: NavItem;
  /** "Hoe we werken": startsprint, standard, phases. */
  how: NavItem;
  cases: NavItem;
  about: NavItem;
  /** The single call to action: the startsprint page. */
  cta: NavItem;
  /** Highlighted link at the bottom of the build panel. */
  featured: FeaturedNavLink;
}

export interface HeroSlide {
  label: string;
  headline: string;
  subhead: string;
  ctaLabel: string;
  ctaTarget: string;
  image: string;
}

export interface HeroContent {
  slides: HeroSlide[];
}

export interface EntryCard {
  entry: Entry;
  tag: string;
  title: string;
  description: string;
  href: string;
}

export interface ServicesContent {
  title: string;
  intro: string;
  items: EntryCard[];
  /** Label on the arrow pill of each card. */
  cta: string;
}

export interface StandardContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: { title: string; description: string }[];
}

export interface ApproachContent {
  /** Large centred statement; supports <red>/<blue> underline markup and \n\n spacers. */
  text: string;
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
  heading: string;
  back: string;
  readMore: string;
  prev: string;
  next: string;
  /** Names on the logo wall, in order. */
  logos: string[];
  testimonials: {
    text: string;
    /** Short pull-quote for the wall; falls back to `text`. */
    highlight?: string;
    author?: string;
    role: string;
  }[];
}

export interface ChoiceField {
  label: string;
  options: string[];
}

export interface ContactContent {
  form: {
    name: string;
    email: string;
    org: string;
    topic: string;
    topicOptions: string[];
    budget: ChoiceField;
    owner: ChoiceField;
    message: string;
    submit: string;
    error: string;
  };
  success: {
    title: string;
    message: string;
    sendAnother: string;
  };
}

export interface FooterContent {
  tagline: string;
  columns: {
    build: string;
    how: string;
    cases: string;
    company: string;
    knowledge: string;
  };
  partnersLabel: string;
  legal: {
    privacy: string;
    terms: string;
  };
  copyright: string;
  madeIn: string;
}

export type MeetingOption = {
  name: string;
  url: string;
  photo: string;
  // Why you would pick this person, in a few words.
  hint: string;
};

export interface ContactFormContent {
  title: string;
  subtitle: string;
  emailLabel: string;
  email: string;
  phone: string;
  phoneHref: string;
  meetingLabel: string;
  meetings: MeetingOption[];
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
  standard: StandardContent;
  approach: ApproachContent;
  team: TeamContent;
  socialProof: SocialProofContent;
  contact: ContactContent;
  contactForm: ContactFormContent;
  aboutPage: AboutPageContent;
  footer: FooterContent;
  careersPage: CareersPageContent;
}

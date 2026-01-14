export type Language = 'nl' | 'en';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface NavStructure {
  services: NavItem;
  about: NavItem;
  resources: NavItem;
  contact: NavItem;
}

export interface HeroContent {
  headline: string;
  subhead: string;
  primaryBtn: string;
  secondaryBtn: string;
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServicesContent {
  title: string;
  items: {
    foundations: ServiceItem;
    scouting: ServiceItem;
    specialized: ServiceItem;
  };
}

export interface ApproachContent {
  title: string;
  p1: string;
  p2: string; // The highlighted block
}

export interface TeamSlide {
  image: string;
  alt: string;
}

export interface TeamContent {
  title: string;
  intro: string;
  slides: TeamSlide[];
}

export interface SocialProofContent {
  title: string;
  testimonial: {
    text: string;
    author: string;
    role: string;
  };
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

export interface Content {
  nav: NavStructure;
  hero: HeroContent;
  services: ServicesContent;
  approach: ApproachContent;
  team: TeamContent;
  socialProof: SocialProofContent;
  contact: ContactContent;
  footer: FooterContent;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface HeroContent {
  eyebrow: string;
  headingLine1: string;
  headingLine2: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  badgeText: string;
}

export interface CollectionItem {
  id: string;
  number: string;
  title: string;
  caption: string;
  image: string;
  category: string;
}

export interface ProductItem {
  id: string;
  name: string;
  metal: string;
  detail: string;
  image: string;
  pricePlaceholder?: string;
  description: string;
  purity: string;
  careInfo: string;
}

export interface HeritageMilestone {
  year: string;
  title: string;
  description: string;
}

export interface PromisePillar {
  icon: string;
  title: string;
  description: string;
}

export interface CraftsmanshipStage {
  step: string;
  title: string;
  caption: string;
  image?: string;
  src?: string;
  aspectRatio?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  year: string;
}

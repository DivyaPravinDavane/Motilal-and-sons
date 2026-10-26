import {
  NavigationItem,
  HeroContent,
  HeritageMilestone,
  CollectionItem,
  ProductItem,
  PromisePillar,
  CraftsmanshipStage,
  TestimonialItem,
} from "@/types";
import { images } from "@/lib/images";

// ============================================================================
// BRAND & SHOWROOM CONFIGURATION (EDITABLE PLACEHOLDERS)
// ============================================================================

export const brandDetails = {
  // TODO: Verify official legal registered name
  name: "MOTIWALA & SONS",
  // TODO: Confirm brand tagline / descriptor
  descriptor: "FINE JEWELLERY",
  tagline: "Heirlooms, in the making.",
  // TODO: Confirm establishment year (default: 1928)
  establishedYear: "1928",
  generations: "Third Generation",
  founderName: "Mohanlal Motiwala",

  // SINGLE FLAGSHIP SHOWROOM ENTRY
  showroom: {
    // TODO: Replace with verified flagship address
    title: "The Flagship Salon",
    address: "123, MG Road, Fort, Mumbai - 400001, Maharashtra, India",
    // TODO: Replace with verified telephone number
    phone: "+91 98765 43210",
    // TODO: Replace with verified official WhatsApp number in international format (+country code without spaces)
    whatsappNumber: "+919876543210",
    // TODO: Replace with official concierge email
    email: "concierge@motiwalaandsons.com",
    // TODO: Confirm weekly opening schedule
    hoursWeekday: "Monday – Saturday: 11:00 AM – 7:30 PM",
    hoursSunday: "Sunday: Private viewings by prior appointment",
    // TODO: Replace with exact Google Maps coordinates / embed link
    googleMapsUrl: "https://maps.google.com/?q=123+MG+Road+Fort+Mumbai+400001",
  },

  // SOCIAL CHANNELS
  socials: {
    // TODO: Replace with live Instagram handle and URL
    instagram: "https://instagram.com/motiwalaandsons",
    instagramHandle: "@motiwalaandsons",
    // TODO: Replace with official Facebook profile URL
    facebook: "https://facebook.com/motiwalaandsons",
    // TODO: Replace with official Pinterest board
    pinterest: "https://pinterest.com/motiwalaandsons",
    // TODO: Replace with official YouTube channel if applicable
    youtube: "https://youtube.com/@motiwalaandsons",
  },
};

// Helper for generating deep-link WhatsApp URLs
export function getWhatsAppUrl(message: string): string {
  const cleanNumber = brandDetails.showroom.whatsappNumber.replace(/[^0-9]/g, "");
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encoded}`;
}

// Backward-compatible alias for existing imports
export const flagshipShowroom = brandDetails.showroom;
export const brandConfig = {
  ...brandDetails,
  ...brandDetails.showroom,
  instagramHandle: brandDetails.socials.instagramHandle,
  instagramUrl: brandDetails.socials.instagram,
  location: "Fort Flagship",
};
export const getWhatsAppLink = getWhatsAppUrl;

// ============================================================================
// NAVIGATION
// ============================================================================

export const navigationItems: NavigationItem[] = [
  { label: "Collections", href: "#collections" },
  { label: "Heritage", href: "#heritage" },
  { label: "Bridal", href: "#bridal" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Showroom", href: "#showroom" },
];

// ============================================================================
// HERO CONTENT
// ============================================================================

export const heroContent: HeroContent = {
  eyebrow: "TIMELESS ELEGANCE",
  headingLine1: "Heirlooms,",
  headingLine2: "in the making.",
  description:
    "For generations, we have been more than jewellers — we are keepers of your most sacred milestones, handcrafting irreplaceable treasures to be cherished across lifetimes.",
  primaryCta: {
    label: "Explore Collections",
    href: "#collections",
  },
  secondaryCta: {
    label: "Book a Private Viewing",
    href: "#appointment",
  },
  badgeText: "A Legacy in Every Gem",
};

// ============================================================================
// MARQUEE TICKER
// ============================================================================

export const marqueeItems: string[] = [
  "Bridal",
  "Pearls",
  "Diamonds",
  "Gold",
  "Polki & Kundan",
  "Gifting",
];

// ============================================================================
// HERITAGE STORY & MILESTONES
// ============================================================================

export const heritageContent = {
  eyebrow: "OUR HERITAGE",
  headline: "A legacy of trust",
  headlineItalic: `since ${brandDetails.establishedYear}`,
  hugeNumeral: "1928",
  narrative: `What began in ${brandDetails.establishedYear} as a small family of pearl and diamond merchants in Fort, Mumbai has matured across three generations into an enduring sanctuary of artisanal mastery. Guided by uncompromising ethics, we source rare natural stones and shape timeless heirlooms that celebrate life's most transcendent moments.`,
  signatureText: "Motiwala & Sons",
  founderNoteLabel: "FOUNDER'S NOTE",
  milestones: [
    {
      year: "1928",
      title: "The Genesis",
      description: "Founded by our grandfather, a visionary merchant of natural South Sea pearls.",
    },
    {
      year: "1965",
      title: "Expanding Horizons",
      description: "Pioneering Antwerp diamond sourcing and bespoke polki bridal suites.",
    },
    {
      year: "1998",
      title: "Modern Grandeur",
      description: "Fusing centuries-old jadau techniques with contemporary architectural silhouettes.",
    },
    {
      year: "Today",
      title: "Third Generation",
      description: "Upholding timeless values for royal patrons and modern connoisseurs worldwide.",
    },
  ] as HeritageMilestone[],
};

// ============================================================================
// SIGNATURE COLLECTIONS
// ============================================================================

export const signatureCollections: CollectionItem[] = [
  {
    id: "bridal",
    number: "01",
    title: "Bridal Couture",
    caption: "For your most auspicious celebration",
    image: images.collections.bridal.src,
    category: "Bridal",
  },
  {
    id: "pearls",
    number: "02",
    title: "South Sea Pearls",
    caption: "Nature's rarest luminous wonders",
    image: images.collections.pearls.src,
    category: "Pearls",
  },
  {
    id: "diamonds",
    number: "03",
    title: "High Diamonds",
    caption: "Flawless brilliance, cut to eternity",
    image: images.collections.diamonds.src,
    category: "Diamonds",
  },
  {
    id: "polki",
    number: "04",
    title: "Polki & Kundan",
    caption: "Royal heritage in uncut gemstones",
    image: images.collections.polki.src,
    category: "Polki",
  },
  {
    id: "gold",
    number: "05",
    title: "Artisanal Gold",
    caption: "Textured masterworks in 22K yellow gold",
    image: images.collections.gold.src,
    category: "Gold",
  },
  {
    id: "gifting",
    number: "06",
    title: "Bespoke Gifting",
    caption: "Thoughtfully crafted memories",
    image: images.collections.gifting.src,
    category: "Gifting",
  },
];

// ============================================================================
// FEATURED PIECES (EDITORIAL MASONRY GRID)
// ============================================================================

export interface EditorialProduct extends ProductItem {
  altImage: string;
  gridSpan: "tall" | "wide" | "standard";
  priceNote?: string;
}

export const featuredProducts: EditorialProduct[] = [
  {
    id: "emerald-navratna-choker",
    name: "Imperial Emerald & Navratna Choker",
    metal: "18K Gold & Certified Emeralds",
    detail: "Triple-Strand Emerald Beads & Polki Centerpiece",
    image: images.featured.navratnaChoker.primary.src,
    altImage: images.featured.navratnaChoker.alt.src,
    gridSpan: "tall",
    description: "Triple-strand faceted Zambian emerald beads framing an imperial Navratna medallion of uncut polki diamonds, cabochon rubies, and luminous South Sea pearl drops, accompanied by matching cluster earrings.",
    purity: "18K BIS Hallmarked Gold",
    careInfo: "Gently wipe with soft micro-fiber cloth after wearing. Avoid contact with hair sprays and cosmetics.",
  },
  {
    id: "polki-ruby-jhumkas",
    name: "Royal Meenakari & Polki Jhumkas",
    metal: "22K Gold & Uncut Diamonds",
    detail: "Burmese Ruby Beads & Natural Basra Pearls",
    image: images.featured.polkiJhumkas.primary.src,
    altImage: images.featured.polkiJhumkas.alt.src,
    gridSpan: "standard",
    description: "Masterfully hand-crafted 22K gold jhumkas adorned with uncut polki diamonds, floral cabochon rubies, green meenakari enamel, and cascading ruby beads with natural pearl drops.",
    purity: "22K BIS Hallmarked Gold",
    careInfo: "Keep away from moisture and direct fragrance. Store safely in velvet-lined box.",
  },
  {
    id: "ruby-blossom-ring",
    name: "Orchid Blossom Cocktail Ring",
    metal: "18K Yellow Gold",
    detail: "Carved Rubies & Pave Diamonds",
    image: images.featured.blossomRing.primary.src,
    altImage: images.featured.blossomRing.alt.src,
    gridSpan: "standard",
    description: "Sculptural three-dimensional petals set with Burmese pigeon-blood rubies and micro-pavé diamonds, anchored by baguette accents.",
    purity: "18K BIS Hallmarked Gold",
    careInfo: "Keep away from moisture and harsh surfaces. Store in presentation box.",
  },
  {
    id: "ruby-diamond-bangles",
    name: "Articulated Marquee Bangles",
    metal: "18K Gold",
    detail: "The Art of Adornment",
    image: images.featured.rubyBangles.primary.src,
    altImage: images.featured.rubyBangles.alt.src,
    gridSpan: "standard",
    description: "Articulated bangle pair adorned with marquee rubies and micro-pave diamonds in warm yellow gold. The art of adornment, one bangle at a time.",
    purity: "18K BIS Hallmarked Gold",
    careInfo: "Professional inspection recommended annually. Wipe gently with jewelry cloth.",
  },
  {
    id: "imperial-polki-collar",
    name: "Imperial Kundan Polki Collar",
    metal: "22K Gold",
    detail: "Uncut Diamonds & Meenakari",
    image: images.featured.polkiChoker.primary.src,
    altImage: images.featured.polkiChoker.alt.src,
    gridSpan: "tall",
    description: "Regal open-setting uncut diamond polki choker accented with natural South Sea pearl drops and intricate reverse enameling.",
    purity: "22K BIS Hallmarked Gold",
    careInfo: "Keep away from moisture and water. Store flat in an airtight container.",
  },
  {
    id: "diamond-tennis-solitaire",
    name: "Emerald-Cut Diamond Tennis Suite",
    metal: "950 Platinum & 18K White Gold",
    detail: "Certified Emerald-Cut Diamonds & Solitaire",
    image: images.featured.solitaire.primary.src,
    altImage: images.featured.solitaire.alt.src,
    gridSpan: "standard",
    description: "Articulated continuous tennis bracelet set with hand-matched emerald-cut certified diamonds, paired with an architectural pear-shaped solitaire ring crafted in pure platinum.",
    purity: "Pt 950 & 18K Hallmarked · IGI / GIA Certified",
    careInfo: "Clean with mild warm soapy water and soft brush. Store in velvet casing.",
  },
];

// ============================================================================
// BRIDAL ATELIER
// ============================================================================

export const bridalAtelierContent = {
  eyebrow: "BRIDAL ATELIER",
  headline: "Your dream,",
  headlineItalic: "our expertise.",
  description:
    "From private custom commissions to curated trousseau consulting, our master ateliers bring your wedding vision to life with absolute discretion and peerless craft.",
  features: [
    "One-on-One Custom Design Commissions",
    "Comprehensive Trousseau Architecture",
    "Private Salon Appointments with Master Craftsmen",
  ],
  ctaLabel: "Book a Bridal Consultation",
  image: images.bridalAtelier.src,
};

// ============================================================================
// THE MOTIWALA PROMISE
// ============================================================================

export const promisePillars: PromisePillar[] = [
  {
    icon: "Gem",
    title: "Certified Purity",
    description: "100% BIS hallmarked gold and internationally certified IGI/GIA natural diamonds.",
  },
  {
    icon: "Tag",
    title: "Ethical Pricing",
    description: "Completely transparent breakdown of gemstone weights, purity, and labor valuation.",
  },
  {
    icon: "RefreshCw",
    title: "Lifetime Exchange",
    description: "Guaranteed lifetime upgrade and exchange terms honored transparently at our salon.",
  },
  {
    icon: "HeartHandshake",
    title: "Generational Trust",
    description: "Nearly a century of uncompromising family integrity and artisanal stewardship.",
  },
];

// ============================================================================
// CRAFTSMANSHIP SCROLL STORY
// ============================================================================

export const craftsmanshipStages: CraftsmanshipStage[] = images.craftsmanship;

// ============================================================================
// TESTIMONIALS (4 REALISTIC PLACEHOLDERS)
// ============================================================================

export const testimonials: TestimonialItem[] = [
  {
    id: "1",
    // TODO: Replace with verified client review
    quote:
      "Commissioning my bridal polki suite with Motiwala & Sons felt like stepping into a bygone royal court. Every single emerald was hand-picked, and the final choker took my family's breath away on my wedding day.",
    author: "Rhea Sharma",
    role: "Bride",
    year: "Mumbai",
  },
  {
    id: "2",
    // TODO: Replace with verified client review
    quote:
      "My grandmother purchased her wedding bangles from Motiwala & Sons in 1968, and fifty years later, they crafted my bespoke engagement solitaire with the exact same warmth, discretion, and perfection.",
    author: "Ananya Singhania",
    role: "Patron",
    year: "London & New Delhi",
  },
  {
    id: "3",
    // TODO: Replace with verified client review
    quote:
      "The private salon experience is unmatched anywhere in India. There is no sales pressure — only an extraordinary reverence for the stones and centuries of generational knowledge.",
    author: "Dev & Priya Mehta",
    role: "Collectors",
    year: "South Mumbai",
  },
  {
    id: "4",
    // TODO: Replace with verified client review
    quote:
      "Their South Sea pearl strands have a natural luster that photos simply cannot convey. Knowing our pieces are certified and built for generations gives my family complete peace of mind.",
    author: "Zoya Merchant",
    role: "Patron",
    year: "Dubai",
  },
];

// ============================================================================
// CLOSING STATEMENT
// ============================================================================

export const closingContent = {
  headline: "Your story deserves an heirloom.",
  subheadline:
    "Private consultations available at our Fort showroom or by bespoke appointment.",
  ctaLabel: "Schedule a Private Viewing",
};

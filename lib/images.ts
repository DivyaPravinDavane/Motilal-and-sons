export interface ImageSlot {
  src: string;
  alt: string;
  aspectRatio: string; // e.g. "16:9", "4:5", "1:1", "4:3"
}

export const images = {
  // 1. Hero Section (Full-bleed cinematic landscape)
  hero: {
    src: "/images/hero-bride-hd.jpg",
    alt: "South Asian bride wearing royal emerald, pearl, and uncut kundan diamond bridal jewellery",
    aspectRatio: "16:9",
  },

  // 2. Heritage Section (Archival portrait)
  heritage: {
    src: "/images/heritage-artisan.jpg",
    alt: "Archival portrait of master jeweller inspecting natural pearls and gemstones at workbench",
    aspectRatio: "4:5",
  },

  // 3. Signature Collections (Tall 4:5 cards)
  collections: {
    bridal: {
      src: "/images/emerald-choker-model.jpg",
      alt: "Bridal Couture Collection — Royal emerald and polki bridal choker suite",
      aspectRatio: "4:5",
    },
    pearls: {
      src: "/images/emerald-choker-real-model.jpg",
      alt: "South Sea Pearls & Emerald Beads Collection — Imperial Navratna choker",
      aspectRatio: "4:5",
    },
    diamonds: {
      src: "/images/diamond-necklace-model.jpg",
      alt: "Certified Diamonds Collection — Forever, always",
      aspectRatio: "4:5",
    },
    polki: {
      src: "/images/polki-ruby-jhumkas.jpg",
      alt: "Royal Polki & Kundan Collection — Handcrafted ruby and meenakari jhumkas",
      aspectRatio: "4:5",
    },
    gold: {
      src: "/images/bangles-art.jpg",
      alt: "Fine Gold Collection — Classic artistry in 22K and 18K yellow gold",
      aspectRatio: "4:5",
    },
    gifting: {
      src: "/images/ruby-floral-ring.jpg",
      alt: "Curated Luxury Gifting Collection — Thoughtful creations for life's milestones",
      aspectRatio: "4:5",
    },
  },

  // 4. Featured Pieces (Editorial grid with alternate angles on hover)
  featured: {
    navratnaChoker: {
      primary: {
        src: "/images/emerald-choker-real-model.jpg",
        alt: "Imperial Emerald & Navratna Choker Suite with Polki Centerpiece",
        aspectRatio: "4:5",
      },
      alt: {
        src: "/images/emerald-choker-model.jpg",
        alt: "Emerald Choker Suite reverse and side profile",
        aspectRatio: "4:5",
      },
    },
    polkiJhumkas: {
      primary: {
        src: "/images/polki-ruby-jhumkas.jpg",
        alt: "Royal Meenakari & Polki Jhumkas with Ruby and Basra Pearl Drops",
        aspectRatio: "4:5",
      },
      alt: {
        src: "/images/earring-model.jpg",
        alt: "Polki Jhumkas worn by royal bride",
        aspectRatio: "4:5",
      },
    },
    solitaire: {
      primary: {
        src: "/images/diamond-wrist-rings.jpg",
        alt: "Emerald-Cut Diamond Tennis Bracelet & Solitaire Ring on Silk",
        aspectRatio: "4:5",
      },
      alt: {
        src: "/images/earring-model.jpg",
        alt: "Diamond solitaire and fine diamond jewellery",
        aspectRatio: "4:5",
      },
    },
    pearlChoker: {
      primary: {
        src: "/images/emerald-choker-model.jpg",
        alt: "Regal Graduated Emerald Choker Set",
        aspectRatio: "1:1",
      },
      alt: {
        src: "/images/emerald-choker-real-model.jpg",
        alt: "Emerald Choker styling on model",
        aspectRatio: "1:1",
      },
    },
    polkiChoker: {
      primary: {
        src: "/images/emerald-choker-model.jpg",
        alt: "Imperial Kundan Polki Choker with Emerald Accents",
        aspectRatio: "3:4",
      },
      alt: {
        src: "/images/polki-ruby-jhumkas.jpg",
        alt: "Handcrafted Polki details and meenakari reverse",
        aspectRatio: "3:4",
      },
    },
    emeraldDrops: {
      primary: {
        src: "/images/earring-model.jpg",
        alt: "Imperial Bridal Earrings on Royal Muse",
        aspectRatio: "4:5",
      },
      alt: {
        src: "/images/polki-ruby-jhumkas.jpg",
        alt: "Meenakari reverse enamel details",
        aspectRatio: "4:5",
      },
    },
    rubyBangles: {
      primary: {
        src: "/images/bangles-art.jpg",
        alt: "Ruby & Diamond Articulated Bangles in 18K Yellow Gold",
        aspectRatio: "1:1",
      },
      alt: {
        src: "/images/diamond-wrist-rings.jpg",
        alt: "Bangles and diamond bracelet on silk",
        aspectRatio: "1:1",
      },
    },
    blossomRing: {
      primary: {
        src: "/images/ruby-floral-ring.jpg",
        alt: "Ruby & Diamond Orchid Blossom Cocktail Ring",
        aspectRatio: "4:5",
      },
      alt: {
        src: "/images/diamond-wrist-rings.jpg",
        alt: "Cocktail ring and bracelets on velvet",
        aspectRatio: "4:5",
      },
    },
  },

  // 5. Bridal Atelier (Full-bleed velvet section)
  bridalAtelier: {
    src: "/images/bridal-oxblood.jpg",
    alt: "Motiwala & Sons Bridal Atelier Couture in deep oxblood red",
    aspectRatio: "7:9",
  },

  // 6. Craftsmanship Scroll Story (5 sequential stages)
  craftsmanship: [
    {
      step: "01",
      title: "Design",
      caption: "From ethereal concept to master hand-drafted sketch",
      src: "/images/craft-01-design.jpg",
      aspectRatio: "4:3",
    },
    {
      step: "02",
      title: "Casting",
      caption: "Transforming molten precious metal into sculptural form",
      src: "/images/craft-02-casting.jpg",
      aspectRatio: "4:3",
    },
    {
      step: "03",
      title: "Setting",
      caption: "Securing each diamond and gemstone with microscopic precision",
      src: "/images/craft-03-setting.jpg",
      aspectRatio: "4:3",
    },
    {
      step: "04",
      title: "Finishing",
      caption: "Artisan hand-buffing to unlock luminous mirror brilliance",
      src: "/images/craft-04-finishing.jpg",
      aspectRatio: "4:3",
    },
    {
      step: "05",
      title: "Hallmarking",
      caption: "Official laser hallmark certification guaranteeing uncompromised purity",
      src: "/images/craft-05-hallmarking.jpg",
      aspectRatio: "4:3",
    },
  ],

  // 7. Curated Instagram Gallery (Masonry grid)
  instagram: [
    {
      src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
      alt: "South Sea Pearls styling",
      aspectRatio: "4:5",
    },
    {
      src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      alt: "Certified Solitaire diamond brilliance",
      aspectRatio: "1:1",
    },
    {
      src: "/images/earring-model.jpg",
      alt: "Bride in handcrafted wedding jewels",
      aspectRatio: "4:5",
    },
    {
      src: "/images/craft-02-casting.jpg",
      alt: "Gold casting at the private atelier",
      aspectRatio: "1:1",
    },
    {
      src: "/images/emerald-choker-model.jpg",
      alt: "Royal emerald choker necklace styling",
      aspectRatio: "4:5",
    },
    {
      src: "/images/ruby-floral-ring.jpg",
      alt: "Bespoke blossom cocktail ring in sunlight",
      aspectRatio: "1:1",
    },
  ],

  // 8. Showroom
  showroom: {
    src: "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?auto=format&fit=crop&w=1600&q=85",
    alt: "Motiwala & Sons flagship private salon in Fort, Mumbai",
    aspectRatio: "4:3",
  },

  // 9. Certifications
  certifications: {
    src: "/images/extracted/certifications.jpg",
    alt: "BIS Hallmark, GIA, and IGI Certified",
    aspectRatio: "5:1",
  },

  // 10. Instagram Collage (temporary backward-compat for existing section)
  instagramCollage: {
    src: "/images/extracted/instagram-collage.jpg",
    alt: "Motiwala & Sons Curated Instagram Gallery",
    aspectRatio: "4:2",
  },

  // 11. Heritage Craft (backward-compat alias)
  heritageCraft: {
    src: "/images/heritage-artisan.jpg",
    alt: "Archival photograph of master artisan examining gems and pearls at workbench",
    aspectRatio: "4:5",
  },
};

// Backward-compatible alias for existing imports
export const siteImages = images;

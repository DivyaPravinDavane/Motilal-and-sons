import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { CollectionMarquee } from "@/components/sections/CollectionMarquee";
import { CategoryBar } from "@/components/sections/CategoryBar";
import { Heritage } from "@/components/sections/Heritage";
import { SignatureCollections } from "@/components/sections/SignatureCollections";
import { FeaturedPieces } from "@/components/sections/FeaturedPieces";
import { BridalAndPromise } from "@/components/sections/BridalAndPromise";
import { CraftsmanshipAndInstagram } from "@/components/sections/CraftsmanshipAndInstagram";
import { Testimonials } from "@/components/sections/Testimonials";
import { VisitShowroom } from "@/components/sections/VisitShowroom";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#29241F] flex flex-col luxury-texture selection:bg-[#E5D2AE] selection:text-[#29241F]">
      {/* 1. Header & Navigation */}
      <Header />

      <main className="flex-1">
        {/* 2. Cinematic Hero */}
        <Hero />

        {/* 3. Collection Marquee Strip */}
        <CollectionMarquee />

        {/* 3.5 Category Navigation Bar matching prototype */}
        <CategoryBar />

        {/* 4. Our Heritage (Editorial narrative & 4-milestone timeline) */}
        <Heritage />

        {/* 5. 01 / Signature Collections (6-card gallery) */}
        <SignatureCollections />

        {/* 6. 02 / Featured Pieces (6 product items + WhatsApp enquiry + Detail Drawer) */}
        <FeaturedPieces />

        {/* 7. Bridal Atelier (Oxblood panel) & The Motiwala Promise (4 pillars) */}
        <BridalAndPromise />

        {/* 8. 03 / Craftsmanship (5 stages) & 04 / Instagram Gallery Collage */}
        <CraftsmanshipAndInstagram />

        {/* 9. 05 / Testimonials Carousel */}
        <Testimonials />

        {/* 10. 06 / Visit the Showroom & Private Appointment Form */}
        <VisitShowroom />
      </main>

      {/* 11. Complete Luxury Footer with Certifications */}
      <Footer />
    </div>
  );
}

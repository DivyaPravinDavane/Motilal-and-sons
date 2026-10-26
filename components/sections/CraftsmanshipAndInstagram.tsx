"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Instagram, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { siteImages } from "@/lib/images";
import { brandConfig } from "@/lib/brand";
import { Container } from "@/components/ui/Container";

export function CraftsmanshipAndInstagram() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = siteImages.craftsmanship;

  return (
    <section id="craftsmanship" className="py-24 sm:py-32 lg:py-40 bg-[#0C0A09] text-[#F7F2EA] border-b border-[#26211D] relative overflow-hidden select-none">
      {/* Background radial gold glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#C8A96A]/6 rounded-full blur-[140px] pointer-events-none" />

      <Container size="wide">
        {/* Section 03 / CRAFTSMANSHIP */}
        <div className="mb-24 sm:mb-32">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 border-b border-[#26211D] mb-12 sm:mb-16 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] text-[#C8A96A] uppercase font-medium">
                  03 / ATELIER ARCHITECTURE
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F2EA] tracking-tight font-normal">
                Generational Craftsmanship
              </h2>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar pb-1">
              {stages.map((stage, idx) => (
                <button
                  key={stage.step}
                  onClick={() => setActiveStage(idx)}
                  className={`px-3.5 py-1.5 text-[11px] font-sans tracking-widest uppercase transition-all duration-300 rounded-[1px] ${
                    activeStage === idx
                      ? "bg-[#C8A96A] text-[#0C0A09] font-medium shadow-[0_0_15px_rgba(200,169,106,0.3)]"
                      : "bg-[#161311] text-[#F7F2EA]/60 hover:text-[#E8D5A5] border border-[#26211D]"
                  }`}
                >
                  <span>{stage.step}</span> · <span>{stage.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Stage Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Stage Image with Crossfade */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full rounded-[1px] overflow-hidden border border-[#26211D] bg-[#161311] shadow-2xl group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={stages[activeStage].src}
                      alt={stages[activeStage].title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center filter brightness-[0.92] contrast-[1.04]"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Fine gold border overlay */}
                <div className="absolute inset-0 ring-1 ring-inset ring-[#C8A96A]/25 pointer-events-none" />

                {/* Stage Counter Overlay */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#0C0A09]/75 backdrop-blur-md border border-[#26211D] text-[10px] uppercase tracking-widest text-[#E8D5A5]">
                  Stage {stages[activeStage].step} of 05
                </div>

                {/* Navigation Chevrons */}
                <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
                  <button
                    onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                    aria-label="Previous Stage"
                    className="p-2.5 bg-[#0C0A09]/80 backdrop-blur-md border border-[#26211D] text-[#F7F2EA] hover:text-[#C8A96A] transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                    aria-label="Next Stage"
                    className="p-2.5 bg-[#0C0A09]/80 backdrop-blur-md border border-[#26211D] text-[#F7F2EA] hover:text-[#C8A96A] transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Stage Narrative Description */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[12px] font-sans tracking-widest text-[#C8A96A] font-semibold">
                      STEP {stages[activeStage].step}
                    </span>
                    <span className="w-6 h-[1px] bg-[#C8A96A]/60" />
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F2EA] font-normal mb-4">
                    {stages[activeStage].title}
                  </h3>

                  <p className="font-sans text-[14.5px] leading-relaxed text-[#F7F2EA]/80 mb-6 font-light">
                    {stages[activeStage].caption}
                  </p>

                  <div className="p-4 bg-[#161311] border border-[#26211D] rounded-[1px] text-xs text-[#F7F2EA]/70 mb-6">
                    <p className="font-light italic text-[#E8D5A5]">
                      &ldquo;Every facet is calibrated by hand under high-magnification stereomicroscopes, ensuring generational durability.&rdquo;
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Progress Bar Track */}
              <div className="w-full bg-[#161311] h-[2px] rounded-full overflow-hidden relative">
                <motion.div
                  className="bg-gradient-to-r from-[#C8A96A] to-[#E8D5A5] h-full"
                  animate={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 04 / INSTAGRAM GALLERY */}
        <div id="gallery" className="pt-12 border-t border-[#26211D]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 border-b border-[#26211D] mb-10 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] text-[#C8A96A] uppercase font-medium">
                  04 / SOCIAL SALON
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F2EA] tracking-tight font-normal">
                Follow {brandConfig.instagramHandle}
              </h2>
            </div>

            <a
              href={brandConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.24em] text-[#C8A96A] hover:text-[#E8D5A5] transition-colors group"
            >
              <Instagram className="w-4 h-4 text-[#C8A96A]" />
              <span>Visit Official Instagram</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Curated Instagram Grid (6 Aesthetic Tiles) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {siteImages.instagram.map((item, idx) => (
              <motion.a
                key={idx}
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group relative aspect-square w-full rounded-[1px] overflow-hidden border border-[#26211D] bg-[#161311] block"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-[#0C0A09]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-[#E8D5A5] transform group-hover:scale-110 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

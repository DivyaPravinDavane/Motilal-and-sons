"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check, Gem, Tag, RefreshCw, HeartHandshake, ArrowRight, Sparkles } from "lucide-react";
import { bridalAtelierContent, promisePillars } from "@/data/content";
import { siteImages } from "@/lib/images";
import { getWhatsAppUrl } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function BridalAndPromise() {
  return (
    <section id="bridal" className="py-24 sm:py-32 lg:py-40 bg-[#0C0A09] text-[#F7F2EA] border-b border-[#26211D] relative overflow-hidden select-none">
      {/* Background radial gold glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C8A96A]/8 rounded-full blur-[120px] pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Panel: Deep Oxblood / Burgundy Bridal Atelier Feature */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-[#5A1220] text-[#FFFDF9] p-8 sm:p-10 lg:p-12 rounded-[1px] relative overflow-hidden flex flex-col justify-between shadow-[0_20px_50px_rgba(90,18,32,0.35)] border border-[#781A2D]"
          >
            {/* Drifting soft velvet aura glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8A96A]/15 rounded-full blur-3xl pointer-events-none animate-float" />

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center relative z-10">
              {/* Bride Photo on left side of panel */}
              <div className="sm:col-span-5 relative aspect-[3/4.4] overflow-hidden rounded-[1px] border border-[#E8D5A5]/30 shadow-2xl group">
                <Image
                  src={siteImages.bridalAtelier.src}
                  alt="Motiwala & Sons Bridal Couture"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#5A1220]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Information */}
              <div className="sm:col-span-7 flex flex-col justify-center">
                <span className="text-[10px] uppercase tracking-[0.32em] text-[#E8D5A5] font-medium mb-3 block">
                  {bridalAtelierContent.eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl leading-[1.08] text-[#FFFDF9] mb-4">
                  <span>{bridalAtelierContent.headline}</span>{" "}
                  <span className="italic font-light text-[#E8D5A5] block">
                    {bridalAtelierContent.headlineItalic}
                  </span>
                </h2>

                <p className="font-sans text-[13px] leading-relaxed text-[#FFFDF9]/85 mb-6 font-light">
                  {bridalAtelierContent.description}
                </p>

                {/* Bullet Points */}
                <div className="space-y-3 mb-8">
                  {bridalAtelierContent.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-xs text-[#FFFDF9]/95 font-sans">
                      <div className="w-4 h-4 rounded-full border border-[#E8D5A5] flex items-center justify-center shrink-0 bg-[#5A1220]">
                        <Check className="w-2.5 h-2.5 text-[#E8D5A5] stroke-[2.5]" />
                      </div>
                      <span className="font-light">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Consultation CTA */}
                <div>
                  <a
                    href={getWhatsAppUrl("Hello Motiwala & Sons, I would like to book a private Bridal Atelier Consultation.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.24em] uppercase font-medium px-6 py-3.5 border border-[#E8D5A5] text-[#FFFDF9] hover:bg-[#E8D5A5] hover:text-[#5A1220] transition-all duration-300 shadow-sm"
                  >
                    <span>{bridalAtelierContent.ctaLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: The Motiwala Promise (Dark Ink Vault) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 bg-[#161311] border border-[#26211D] p-8 sm:p-10 lg:p-12 rounded-[1px] flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-4 h-[1px] bg-[#C8A96A]" />
                <span className="text-[10px] uppercase tracking-[0.32em] text-[#C8A96A] font-medium block">
                  THE MOTIWALA PROMISE
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F2EA] mb-8 font-normal">
                Purity. Ethics. Legacy.
              </h2>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-5 pt-2">
                {/* Pillar 1 */}
                <div className="flex flex-col p-4 rounded-[1px] bg-[#0C0A09] border border-[#26211D] hover:border-[#C8A96A]/60 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full border border-[#C8A96A]/40 bg-[#161311] flex items-center justify-center text-[#C8A96A] mb-3 group-hover:scale-110 group-hover:border-[#C8A96A] transition-all duration-300 shadow-sm">
                    <Gem className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-[15px] text-[#F7F2EA] font-medium mb-1 group-hover:text-[#E8D5A5] transition-colors">
                    Certified Purity
                  </h3>
                  <p className="font-sans text-[11px] leading-relaxed text-[#F7F2EA]/70 font-light">
                    100% BIS hallmarked gold & IGI/GIA certified diamonds
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="flex flex-col p-4 rounded-[1px] bg-[#0C0A09] border border-[#26211D] hover:border-[#C8A96A]/60 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full border border-[#C8A96A]/40 bg-[#161311] flex items-center justify-center text-[#C8A96A] mb-3 group-hover:scale-110 group-hover:border-[#C8A96A] transition-all duration-300 shadow-sm">
                    <Tag className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-[15px] text-[#F7F2EA] font-medium mb-1 group-hover:text-[#E8D5A5] transition-colors">
                    Ethical Valuation
                  </h3>
                  <p className="font-sans text-[11px] leading-relaxed text-[#F7F2EA]/70 font-light">
                    Transparent pricing and genuine gemstone weight breakdown
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="flex flex-col p-4 rounded-[1px] bg-[#0C0A09] border border-[#26211D] hover:border-[#C8A96A]/60 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full border border-[#C8A96A]/40 bg-[#161311] flex items-center justify-center text-[#C8A96A] mb-3 group-hover:scale-110 group-hover:border-[#C8A96A] transition-all duration-300 shadow-sm">
                    <RefreshCw className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-[15px] text-[#F7F2EA] font-medium mb-1 group-hover:text-[#E8D5A5] transition-colors">
                    Lifetime Exchange
                  </h3>
                  <p className="font-sans text-[11px] leading-relaxed text-[#F7F2EA]/70 font-light">
                    Guaranteed lifetime upgrade policies honored at our salon
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="flex flex-col p-4 rounded-[1px] bg-[#0C0A09] border border-[#26211D] hover:border-[#C8A96A]/60 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-full border border-[#C8A96A]/40 bg-[#161311] flex items-center justify-center text-[#C8A96A] mb-3 group-hover:scale-110 group-hover:border-[#C8A96A] transition-all duration-300 shadow-sm">
                    <HeartHandshake className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="font-serif text-[15px] text-[#F7F2EA] font-medium mb-1 group-hover:text-[#E8D5A5] transition-colors">
                    Generational Trust
                  </h3>
                  <p className="font-sans text-[11px] leading-relaxed text-[#F7F2EA]/70 font-light">
                    Nearly a century of family integrity in Fort, Mumbai
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[#26211D] mt-8 flex items-center justify-between text-xs text-[#F7F2EA]/60">
              <span className="font-serif italic text-base text-[#C8A96A]">
                The Motiwala Guarantee
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#E8D5A5]">
                Established 1928
              </span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

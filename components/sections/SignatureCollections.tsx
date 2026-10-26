"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, X, Sparkles } from "lucide-react";
import { signatureCollections, getWhatsAppUrl } from "@/data/content";
import { CollectionItem } from "@/types";
import { Container } from "@/components/ui/Container";

export function SignatureCollections() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState<CollectionItem | null>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scrollByAmount = (amount: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="collections"
      className="py-24 sm:py-32 lg:py-40 bg-[#0C0A09] text-[#F7F2EA] border-b border-[#26211D] vault-glow relative overflow-hidden select-none"
    >
      <Container size="wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#26211D] mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="text-[11px] font-sans tracking-widest text-[#C8A96A] uppercase font-medium">
                01 /
              </span>
              <span className="text-[10px] font-sans tracking-[0.35em] text-[#C8A96A] uppercase font-medium">
                HAUTE JOAILLERIE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F7F2EA] tracking-wide uppercase font-normal">
              Signature Collections
            </h2>
          </div>

          {/* Navigation Controls & Drag Cue */}
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline font-sans text-[10px] uppercase tracking-[0.25em] text-[#F7F2EA]/50">
              Drag or use arrows
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollByAmount(-340)}
                aria-label="Previous Collection"
                className="w-10 h-10 rounded-full border border-[#26211D] bg-[#161311] hover:border-[#C8A96A] hover:text-[#C8A96A] flex items-center justify-center transition-colors text-[#F7F2EA]/80"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollByAmount(340)}
                aria-label="Next Collection"
                className="w-10 h-10 rounded-full border border-[#26211D] bg-[#161311] hover:border-[#C8A96A] hover:text-[#C8A96A] flex items-center justify-center transition-colors text-[#F7F2EA]/80"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Drag & Scroll Track */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          data-cursor="drag"
          className="flex gap-5 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar pb-6 cursor-grab active:cursor-grabbing scroll-smooth"
        >
          {signatureCollections.map((col) => (
            <div
              key={col.id}
              onClick={() => setSelectedCollection(col)}
              className="group shrink-0 w-[260px] sm:w-[300px] md:w-[330px] aspect-[4/5] relative rounded-[2px] overflow-hidden border border-[#26211D] bg-[#161311] hover:border-[#C8A96A]/80 transition-all duration-700 shadow-xl"
            >
              {/* Collection Image */}
              <Image
                src={col.image}
                alt={col.title}
                fill
                sizes="(max-width: 768px) 260px, 330px"
                className="object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out filter brightness-[0.9] group-hover:brightness-100"
              />

              {/* Sophisticated Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-[#0C0A09]/25 to-transparent pointer-events-none" />

              {/* Card Meta Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-10">
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C8A96A] mb-1 font-medium">
                  {col.number} · Collection
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F7F2EA] leading-tight font-normal uppercase tracking-wider mb-1.5 group-hover:text-gold-gradient transition-all">
                  {col.title}
                </h3>
                <p className="font-sans text-xs text-[#F7F2EA]/75 font-light leading-relaxed mb-3 line-clamp-1">
                  {col.caption}
                </p>

                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#C8A96A] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>

              {/* Fine gold border highlight on hover */}
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[#C8A96A]/60 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Gold Hairline Progress Bar */}
        <div className="mt-8 flex items-center gap-4 max-w-xs mx-auto">
          <span className="text-[9px] font-sans tracking-widest text-[#F7F2EA]/40">
            01
          </span>
          <div className="flex-1 h-[1.5px] bg-[#26211D] overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-[#C8A96A] to-[#E8D5A5] transition-all duration-300"
              style={{ width: `${Math.max(16, scrollProgress)}%` }}
            />
          </div>
          <span className="text-[9px] font-sans tracking-widest text-[#C8A96A]">
            06
          </span>
        </div>
      </Container>

      {/* Full-Screen Collection Overlay Modal */}
      {selectedCollection && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0C0A09]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setSelectedCollection(null)}
        >
          <div
            className="w-full max-w-3xl bg-[#161311] border border-[#26211D] p-6 sm:p-10 rounded-[2px] shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCollection(null)}
              aria-label="Close"
              className="absolute top-6 right-6 p-2 text-[#F7F2EA]/60 hover:text-[#C8A96A] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/5] w-full rounded-[1px] overflow-hidden border border-[#26211D]">
                <Image
                  src={selectedCollection.image}
                  alt={selectedCollection.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C8A96A] font-medium">
                  {selectedCollection.number} · Haute Joaillerie
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F2EA] leading-tight font-normal uppercase mt-2 mb-3">
                  {selectedCollection.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#F7F2EA]/75 leading-relaxed mb-6 font-light">
                  {selectedCollection.caption}. Handcrafted with centuries-old precision at our Fort atelier, using certified natural gemstones, rare pearls, and hallmark gold.
                </p>

                <div className="p-4 bg-[#0C0A09] border border-[#26211D] rounded-[1px] space-y-2 mb-6 text-xs text-[#F7F2EA]/80 font-sans">
                  <div className="flex items-center justify-between">
                    <span className="text-[#C8A96A]">Commission:</span>
                    <span>Bespoke & Limited Series</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C8A96A]">Availability:</span>
                    <span>Private Viewing on Appointment</span>
                  </div>
                </div>

                <a
                  href={getWhatsAppUrl(`Hello Motiwala & Sons, I would like to enquire about the ${selectedCollection.title} collection.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#C8A96A] hover:bg-[#E8D5A5] text-[#0C0A09] text-xs tracking-widest uppercase font-medium transition-all shadow-md"
                >
                  <span>Request Private Viewing via WhatsApp</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

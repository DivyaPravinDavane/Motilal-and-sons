"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, X, Shield, Sparkles, ChevronRight, Check } from "lucide-react";
import { featuredProducts, EditorialProduct } from "@/data/content";
import { getWhatsAppUrl } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function FeaturedPieces() {
  const [selectedProduct, setSelectedProduct] = useState<EditorialProduct | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="featured" className="py-24 sm:py-32 lg:py-40 bg-[#FCF9F4] text-[#1E1915] border-b border-[#DED2C0] paper-grain relative select-none">
      <Container size="wide">
        {/* Section Heading Bar */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 border-b border-[#DED2C0] mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] text-[#8E7340] uppercase font-medium">
                02 / CURATED CREATIONS
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E1915] tracking-tight font-normal">
              Featured Pieces
            </h2>
          </div>

          <a
            href={getWhatsAppUrl("Hello Motiwala & Sons, I would like to enquire about bespoke creations from your Featured Pieces collection.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.24em] text-[#8E7340] hover:text-[#1E1915] transition-colors group"
          >
            <span>Request Full Catalogue</span>
            <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product, idx) => {
            const isHovered = hoveredId === product.id;

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedProduct(product)}
                className="group flex flex-col bg-[#FFFDF9] border border-[#DED2C0] p-4 sm:p-5 rounded-[1px] hover:border-[#C8A96A] hover:shadow-[0_16px_40px_rgba(41,36,31,0.07)] transition-all duration-500 cursor-pointer relative overflow-hidden"
              >
                {/* Diagonal Light Sweep on Hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-20" />

                {/* Product Image Frame with Dual-Angle Crossfade */}
                <div className="relative aspect-[4/4.2] w-full overflow-hidden rounded-[1px] bg-[#EFE8DC] mb-4">
                  {/* Primary Image */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover object-center transition-all duration-700 ease-out ${
                      isHovered ? "opacity-0 scale-105" : "opacity-100 scale-100"
                    }`}
                  />

                  {/* Alternate View Image on Hover */}
                  <Image
                    src={product.altImage}
                    alt={`${product.name} alternate view`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover object-center transition-all duration-700 ease-out ${
                      isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
                    }`}
                  />

                  {/* Fine Gold Frame Overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#C8A96A]/20 pointer-events-none" />

                  {/* Hover "Quick View" Pill */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-10 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161311]/80 backdrop-blur-sm text-[9.5px] uppercase tracking-widest text-[#E8D5A5] font-medium shadow-md">
                      <span>Quick View</span>
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Title & Specifications */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[9.5px] font-sans tracking-[0.25em] uppercase text-[#8E7340] font-medium block mb-1">
                      {product.metal}
                    </span>
                    <h3 className="font-serif text-[17px] sm:text-[18px] text-[#1E1915] font-medium leading-snug line-clamp-1 mb-1.5 group-hover:text-[#8E7340] transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-sans text-[12px] text-[#29241F]/70 font-light mb-4 line-clamp-2">
                      {product.detail}
                    </p>
                  </div>

                  {/* WhatsApp Direct Enquiry Button */}
                  <div className="pt-3 border-t border-[#DED2C0]/70 flex items-center justify-between mt-auto">
                    <a
                      href={getWhatsAppUrl(`Hello Motiwala & Sons, I would like to enquire about the "${product.name}" (${product.metal} | ${product.detail}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-[10px] font-sans tracking-[0.18em] uppercase font-medium text-[#1E1915] hover:text-[#8E7340] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#C8A96A]" />
                      <span>Enquire on WhatsApp</span>
                    </a>

                    <span className="text-[10px] text-[#8E7340] tracking-widest uppercase font-medium">
                      Bespoke
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Slide-over / Modal Detail Drawer */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-[#0C0A09]/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-3xl bg-[#F7F2EA] border border-[#DED2C0] shadow-[0_24px_60px_rgba(0,0,0,0.4)] p-6 sm:p-10 rounded-[1px] relative max-h-[92vh] overflow-y-auto paper-grain"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                aria-label="Close"
                className="absolute top-5 right-5 p-2 text-[#29241F]/60 hover:text-[#1E1915] transition-colors rounded-full hover:bg-black/5"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Images Preview Grid */}
                <div className="space-y-3">
                  <div className="relative aspect-square w-full rounded-[1px] overflow-hidden border border-[#DED2C0] bg-[#EFE8DC] shadow-sm">
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative aspect-square w-full rounded-[1px] overflow-hidden border border-[#DED2C0] bg-[#EFE8DC]">
                      <Image
                        src={selectedProduct.altImage}
                        alt="Angle view"
                        fill
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="relative aspect-square w-full rounded-[1px] overflow-hidden border border-[#DED2C0] bg-[#EFE8DC] flex flex-col items-center justify-center p-3 text-center">
                      <Sparkles className="w-5 h-5 text-[#C8A96A] mb-1.5" />
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#8E7340]">
                        Bespoke Atelier
                      </span>
                      <span className="text-[9px] text-[#29241F]/60 mt-1">
                        Handcrafted in Fort, Mumbai
                      </span>
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#8E7340] font-medium block mb-1">
                    HEIRLOOM CREATION · EST. 1928
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1915] font-normal leading-tight mb-2">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs font-sans text-[#8E7340] font-medium tracking-wide mb-4">
                    {selectedProduct.metal} · {selectedProduct.detail}
                  </p>

                  <p className="text-[13px] font-sans text-[#29241F]/80 leading-relaxed mb-6 font-light">
                    {selectedProduct.description}
                  </p>

                  {/* Specifications Box */}
                  <div className="bg-[#FFFDF9] border border-[#DED2C0] p-4 space-y-2.5 mb-6 text-xs text-[#29241F]/80 rounded-[1px]">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-[#1E1915]">Purity & Hallmarking:</span>
                      <span className="text-[#8E7340] font-medium">{selectedProduct.purity}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#DED2C0]/50 pt-2">
                      <span className="font-medium text-[#1E1915]">Artisanal Care:</span>
                      <span className="text-[11px] text-right max-w-[210px] text-[#29241F]/70">{selectedProduct.careInfo}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-[#DED2C0]/50 pt-2">
                      <span className="font-medium text-[#1E1915]">Certification:</span>
                      <span className="text-[11px] text-[#8E7340]">100% Certified Natural Stones</span>
                    </div>
                  </div>

                  {/* WhatsApp Action */}
                  <a
                    href={getWhatsAppUrl(`Hello Motiwala & Sons, I would like to book a private viewing and enquire about the "${selectedProduct.name}" (${selectedProduct.metal}).`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#C8A96A] hover:bg-[#8E7340] text-[#0C0A09] hover:text-[#FFFDF9] text-xs tracking-[0.24em] uppercase font-medium transition-all duration-300 shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Enquire via Salon WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

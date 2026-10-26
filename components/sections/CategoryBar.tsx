"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "BRIDAL", href: "#bridal", count: "Couture Suites" },
  { name: "PEARLS", href: "#collections", count: "South Sea Rare" },
  { name: "DIAMONDS", href: "#collections", count: "GIA / IGI Solitaires" },
  { name: "GOLD", href: "#collections", count: "22K Heritage Art" },
  { name: "POLKI & KUNDAN", href: "#collections", count: "Uncut Imperial" },
  { name: "GIFTING", href: "#featured", count: "Curated Heirlooms" },
];

export function CategoryBar() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#F7F2EA] border-y border-[#DED2C0] py-3.5 sm:py-4 relative z-20 overflow-hidden select-none paper-grain shadow-[0_2px_12px_rgba(41,36,31,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-2 sm:gap-6 md:justify-center md:gap-8 lg:gap-12">
          {categories.map((cat, idx) => (
            <React.Fragment key={cat.name}>
              <a
                href={cat.href}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative group shrink-0 py-1 px-2.5 transition-all duration-300"
              >
                <span className="font-sans text-[11px] sm:text-[12px] md:text-[12.5px] uppercase tracking-[0.28em] font-medium text-[#29241F] group-hover:text-[#8E7340] transition-colors inline-block">
                  {cat.name}
                </span>

                {/* Flowing animated gold underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#C8A96A] via-[#E8D5A5] to-[#8E7340] group-hover:w-full transition-all duration-300 ease-out" />

                {/* Subtle hover tooltip preview */}
                <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[9px] font-sans tracking-widest text-[#8E7340] whitespace-nowrap hidden sm:block">
                  {cat.count}
                </span>
              </a>

              {/* Diamond glyph separator */}
              {idx < categories.length - 1 && (
                <span className="shrink-0 text-[#C8A96A]/75 text-[10px] sm:text-[11px] select-none group-hover:rotate-45 transition-transform duration-500">
                  ◇
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

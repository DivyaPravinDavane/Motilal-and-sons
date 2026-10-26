"use client";

import React from "react";
import { marqueeItems } from "@/data/content";

export function CollectionMarquee() {
  // Triple the items for perfectly seamless infinite continuous scroll
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full bg-[#0C0A09] border-y border-[#26211D] py-4 sm:py-5 overflow-hidden select-none relative z-20 group">
      {/* Soft gradient edge fade masks */}
      <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#0C0A09] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#0C0A09] to-transparent z-10 pointer-events-none" />

      {/* Infinite Scrolling Ticker Track */}
      <div className="flex w-fit animate-ticker whitespace-nowrap group-hover:[animation-play-state:paused]">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="inline-flex items-center mx-5 sm:mx-8">
            <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.32em] font-medium text-[#C8A96A] hover:text-[#E8D5A5] transition-colors cursor-pointer">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 border border-[#C8A96A] bg-[#E8D5A5]/80 ml-5 sm:ml-8 shadow-[0_0_8px_rgba(200,169,106,0.5)]" />
          </div>
        ))}
      </div>
    </div>
  );
}

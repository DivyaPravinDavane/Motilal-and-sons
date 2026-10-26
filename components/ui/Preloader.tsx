"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    // Check if preloader already ran in this session
    const hasLoaded = sessionStorage.getItem("motiwala_preloader_viewed");
    if (hasLoaded) {
      setComplete(true);
      return;
    }

    const timer = setTimeout(() => {
      setComplete(true);
      sessionStorage.setItem("motiwala_preloader_viewed", "true");
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const brandLetters = "MOTIWALA & SONS".split("");

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0C0A09] text-[#F7F2EA] pointer-events-auto select-none"
        >
          {/* Top Gold Hairline that draws across */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#161311] overflow-hidden">
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#8E7340] via-[#C8A96A] to-[#E8D5A5]"
            />
          </div>

          <div className="flex flex-col items-center">
            {/* Official Logo Emblem with glowing entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-5"
            >
              <Image
                src="/images/logo-mark-gold.png"
                alt="Motiwala & Sons"
                width={140}
                height={81}
                priority
                className="h-16 w-auto object-contain filter drop-shadow-[0_0_16px_rgba(200,169,106,0.6)]"
              />
            </motion.div>
            <div className="overflow-hidden flex items-center justify-center mb-3">
              <span className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.28em] font-medium uppercase inline-flex">
                {brandLetters.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: 0.15 + i * 0.045,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className={letter === " " ? "inline-block w-3" : "inline-block"}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            </div>

            {/* Diamond Glyph & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center gap-3"
            >
              <span className="w-6 h-[0.5px] bg-[#C8A96A]/60" />
              <svg className="w-2.5 h-2.5 text-[#C8A96A]" viewBox="0 0 12 12" fill="currentColor">
                <polygon points="6,0 12,6 6,12 0,6" />
              </svg>
              <span className="font-sans text-[8px] tracking-[0.45em] uppercase text-[#C8A96A]">
                Fine Jewellery · Est. 1928
              </span>
              <span className="w-6 h-[0.5px] bg-[#C8A96A]/60" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { heritageContent } from "@/data/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";

export function Heritage() {
  const containerRef = useRef<HTMLElement | null>(null);
  const [activeMilestone, setActiveMilestone] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth parallax translation on the archival photo and watermark
  const photoY = useTransform(scrollYProgress, [0, 1], [-25, 30]);
  const numeralY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  // Interactive 3D tilt on the archival photo
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useSpring(useTransform(cardY, [-100, 100], [6, -6]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(cardX, [-100, 100], [-6, 6]), { damping: 20, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    cardX.set(x);
    cardY.set(y);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (
    <section
      ref={containerRef}
      id="heritage"
      className="relative py-20 sm:py-28 lg:py-36 bg-[#F7F2EA] text-[#1E1915] border-b border-[#DED2C0] paper-grain overflow-hidden select-none"
    >
      {/* Huge Watermark Outlined 1928 Numeral Floating in Background */}
      <motion.div
        style={{ y: numeralY }}
        className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0"
      >
        <span
          className="font-serif text-[150px] sm:text-[220px] md:text-[280px] lg:text-[340px] font-normal leading-none tracking-tight block text-transparent opacity-10"
          style={{
            WebkitTextStroke: "1.5px #C8A96A",
          }}
        >
          1928
        </span>
      </motion.div>

      {/* Floating Warm Golden Aura / Accent Dot */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#C8A96A]/70 blur-[1px] animate-glow-pulse pointer-events-none shadow-[0_0_14px_rgba(200,169,106,0.8)]" />

      <Container size="wide" className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Clean Archival Portrait with 3D Tilt & Parallax */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <motion.div
              style={{ y: photoY, rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full aspect-[4/2.8] max-w-[460px] overflow-hidden rounded-[1px] border border-[#DED2C0] shadow-[0_16px_40px_rgba(41,36,31,0.09)] bg-[#EFE8DC] group cursor-pointer"
            >
              <Image
                src={images.heritage.src}
                alt={images.heritage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
                className="object-cover object-center filter sepia-[0.14] contrast-[1.05] brightness-[0.98] transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Diagonal Light Glare sweep on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Fine gold border overlay */}
              <div className="absolute inset-0 ring-1 ring-inset ring-[#C8A96A]/30 pointer-events-none" />
            </motion.div>

            {/* Caption matching prototype: Our Heritage */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif italic text-base sm:text-[17px] text-[#6B5A45] mt-3.5 tracking-wide"
            >
              Our Heritage
            </motion.p>
          </div>

          {/* Center Column: Editorial Narrative & Founder's Note Signature */}
          <div className="lg:col-span-4 lg:px-2 flex flex-col justify-center">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-3.5"
            >
              <span className="text-[10.5px] uppercase tracking-[0.32em] text-[#8E7340] font-medium">
                {heritageContent.eyebrow}
              </span>
            </motion.div>

            {/* Headline with glowing gold italic */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.08] text-[#1E1915] mb-6 font-normal tracking-[-0.01em]"
            >
              <span>{heritageContent.headline}</span>{" "}
              <span className="italic font-light text-gold-gradient block sm:inline">
                {heritageContent.headlineItalic}
              </span>
            </motion.h2>

            {/* Narrative text with smooth line height */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-sans text-[13.5px] sm:text-[14.5px] leading-[1.85] text-[#29241F]/80 mb-8 font-light"
            >
              {heritageContent.narrative}
            </motion.p>

            {/* Authentic Calligraphic Signature Treatment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-2"
            >
              <span className="font-signature text-3xl sm:text-4xl text-[#1E1915] tracking-wide block font-normal hover:text-[#8E7340] transition-colors cursor-default">
                {heritageContent.signatureText}
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#8E7340] mt-1.5 block font-medium">
                {heritageContent.founderNoteLabel}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Animated Vertical Timeline */}
          <div className="lg:col-span-4 lg:pl-8 xl:pl-10 border-t lg:border-t-0 lg:border-l border-[#DED2C0] pt-10 lg:pt-0">
            <div className="relative space-y-7 sm:space-y-8">
              {/* Vertical Continuous Line running through circles */}
              <div className="hidden lg:block absolute left-[55px] top-3 bottom-5 w-[1px] bg-[#DED2C0]">
                {/* Flowing animated gold light bead traveling down the timeline */}
                <motion.div
                  className="w-full h-14 bg-gradient-to-b from-transparent via-[#C8A96A] to-transparent shadow-[0_0_8px_#C8A96A]"
                  animate={{ y: ["0%", "450%"] }}
                  transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                />
              </div>

              {heritageContent.milestones.map((item, idx) => {
                const isActive = activeMilestone === idx;
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 }}
                    onMouseEnter={() => setActiveMilestone(idx)}
                    className="flex items-start gap-4 sm:gap-5 relative group cursor-pointer"
                  >
                    {/* Year on the left of circle */}
                    <span
                      className={`w-12 text-right text-[12px] sm:text-[12.5px] font-sans tracking-wider shrink-0 pt-0.5 transition-colors duration-300 font-medium ${
                        isActive
                          ? "text-[#C8A96A] font-semibold"
                          : "text-[#8E7340] group-hover:text-[#C8A96A]"
                      }`}
                    >
                      {item.year}
                    </span>

                    {/* Timeline Node Circle: centered on the vertical line */}
                    <div className="hidden lg:flex w-3 h-3 rounded-full border border-[#C8A96A] bg-[#F7F2EA] shrink-0 mt-1.5 z-10 items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:bg-[#C8A96A] shadow-sm">
                      {isActive && (
                        <motion.div
                          layoutId="activeTimelineGlow"
                          className="w-1.5 h-1.5 rounded-full bg-[#8E7340]"
                        />
                      )}
                    </div>

                    {/* Content on the right */}
                    <div className="flex-1 pb-1">
                      <h3
                        className={`font-serif text-[16px] sm:text-[17.5px] leading-tight font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-[#8E7340]"
                            : "text-[#1E1915] group-hover:text-[#8E7340]"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p className="font-sans text-[12.5px] leading-relaxed text-[#29241F]/70 mt-1.5 font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance every 7 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="py-24 sm:py-32 lg:py-40 bg-[#0C0A09] text-[#F7F2EA] border-b border-[#26211D] vault-glow relative overflow-hidden select-none"
    >
      <Container size="narrow">
        {/* Eyebrow Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.32em] text-[#C8A96A] uppercase font-medium mb-3">
            05 / VOICES OF OUR PATRONS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F7F2EA] font-normal tracking-tight">
            Cherished Across Generations
          </h2>
        </div>

        {/* Content Box */}
        <div className="relative text-center px-4 sm:px-12">
          {/* Muted Gold Quotation Mark */}
          <div className="flex justify-center mb-6">
            <span className="w-12 h-12 rounded-full border border-[#C8A96A]/30 bg-[#161311] flex items-center justify-center text-[#C8A96A]">
              <Quote className="w-5 h-5 stroke-[1.5]" />
            </span>
          </div>

          {/* Animated Quote */}
          <div className="min-h-[160px] sm:min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
              >
                <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#F7F2EA] leading-[1.3] max-w-3xl mx-auto mb-8 font-light">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Attribution */}
                <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-[#F7F2EA]/75 font-sans font-light">
                  <span className="font-medium text-[#E8D5A5]">— {current.author}</span>
                  <span className="text-[#C8A96A]">·</span>
                  <span>
                    {current.role}, {current.year}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-5 mt-12">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-[#26211D] bg-[#161311] flex items-center justify-center text-[#F7F2EA]/70 hover:text-[#C8A96A] hover:border-[#C8A96A] transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Glowing Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === currentIndex
                      ? "w-8 bg-[#C8A96A] shadow-[0_0_10px_rgba(200,169,106,0.6)]"
                      : "w-1.5 bg-[#26211D] hover:bg-[#C8A96A]/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-[#26211D] bg-[#161311] flex items-center justify-center text-[#F7F2EA]/70 hover:text-[#C8A96A] hover:border-[#C8A96A] transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

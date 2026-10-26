"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroContent } from "@/data/content";
import { images } from "@/lib/images";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Floating gold light particles on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Disable on reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle definition
    const particleCount = 28;
    const particles = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.2,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -Math.random() * 0.45 - 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.y < 0) p.y = height;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 169, 106, ${p.alpha})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#E8D5A5";
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0C0A09] text-[#F7F2EA] select-none">
      {/* Background Cinematic Full-Bleed Image with Ken Burns Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          className="object-cover object-center animate-kenburns opacity-70 filter brightness-[0.78] contrast-[1.05]"
        />

        {/* Sophisticated Dark Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A09] via-[#0C0A09]/45 to-[#0C0A09]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0A09]/90 via-[#0C0A09]/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(200,169,106,0.18)_0%,transparent_60%)]" />
      </div>

      {/* Floating Gold Light Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      <Container size="wide" className="relative z-20 w-full pt-32 pb-24 lg:pt-36 lg:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow & Glass Chip */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <span className="w-8 h-[1px] bg-[#C8A96A]" />
            <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.32em] text-[#E8D5A5] font-medium">
              {heroContent.eyebrow}
            </span>

            {/* Glass Chip: A Legacy in Every Gem */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#C8A96A]/30 bg-[#161311]/50 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A] animate-pulse" />
              <span className="text-[9px] uppercase tracking-[0.24em] text-[#E8D5A5] font-medium">
                {heroContent.badgeText}
              </span>
            </div>
          </div>

          {/* Giant Editorial Headline */}
          <h1 className="font-serif text-[48px] sm:text-[68px] md:text-[84px] lg:text-[104px] xl:text-[120px] leading-[1.02] tracking-[-0.015em] font-normal mb-7 sm:mb-9 text-[#F7F2EA]">
            <span className="block">{heroContent.headingLine1}</span>
            <span className="block italic font-light text-gold-gradient">
              {heroContent.headingLine2}
            </span>
          </h1>

          {/* Narrative */}
          <p className="font-sans text-[14px] sm:text-[16px] md:text-[17.5px] leading-[1.75] text-[#F7F2EA]/80 max-w-2xl mb-10 sm:mb-12 font-light">
            {heroContent.description}
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <a
              href={heroContent.primaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#C8A96A] hover:bg-[#E8D5A5] text-[#0C0A09] text-[11.5px] tracking-[0.24em] uppercase font-medium transition-all duration-300 shadow-[0_4px_24px_rgba(200,169,106,0.3)] hover:scale-[1.02]"
            >
              <span>{heroContent.primaryCta.label}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2.5" />
            </a>

            <a
              href={heroContent.secondaryCta.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-[#C8A96A]/50 text-[#F7F2EA] hover:text-[#E8D5A5] hover:border-[#C8A96A] hover:bg-[#C8A96A]/10 text-[11px] tracking-[0.22em] uppercase font-medium transition-all duration-300 rounded-[1px]"
            >
              <span>{heroContent.secondaryCta.label}</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[#F7F2EA]/60 hover:text-[#C8A96A] transition-colors cursor-pointer">
          <span className="text-[9px] tracking-[0.3em] uppercase font-medium">
            Explore
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C8A96A]" />
        </div>
      </Container>
    </section>
  );
}

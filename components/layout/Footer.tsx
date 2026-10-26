"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Instagram, Facebook, Youtube } from "lucide-react";
import { brandConfig } from "@/lib/brand";
import { siteImages } from "@/lib/images";
import { navigationItems } from "@/data/content";
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0C0A09] border-t border-[#26211D] pt-16 pb-12 text-[#F7F2EA]/70 font-sans select-none">
      <Container size="wide">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-[#26211D]">
          {/* Left: Brand Logo & Wordmark (4 cols) */}
          <div className="md:col-span-4 flex justify-start">
            <Logo theme="dark" />
          </div>

          {/* Center: Navigation Links (4 cols) */}
          <div className="md:col-span-4 flex flex-wrap items-center justify-center gap-7">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] uppercase tracking-[0.26em] text-[#F7F2EA]/70 hover:text-[#E8D5A5] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: Social & Certification Seals (4 cols) */}
          <div className="md:col-span-4 flex flex-col sm:flex-row items-center justify-end gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={brandConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#26211D] bg-[#161311] flex items-center justify-center text-[#F7F2EA]/70 hover:text-[#C8A96A] hover:border-[#C8A96A] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-[#26211D] bg-[#161311] flex items-center justify-center text-[#F7F2EA]/70 hover:text-[#C8A96A] hover:border-[#C8A96A] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-8 h-8 rounded-full border border-[#26211D] bg-[#161311] flex items-center justify-center text-[#F7F2EA]/70 hover:text-[#C8A96A] hover:border-[#C8A96A] transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>

            {/* Certification Logos (BIS Hallmark, GIA, IGI) */}
            <div className="relative h-7 w-36 overflow-hidden opacity-80 filter invert contrast-125">
              <Image
                src={siteImages.certifications.src}
                alt={siteImages.certifications.alt}
                fill
                className="object-contain object-right"
              />
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#F7F2EA]/50 gap-4">
          <p>
            © {new Date().getFullYear()} {brandConfig.name}. All rights reserved.
          </p>

          <p className="font-serif italic text-sm text-[#C8A96A]/80 tracking-wide">
            Heirlooms, in the making.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#E8D5A5] transition-colors">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="#" className="hover:text-[#E8D5A5] transition-colors">
              Terms of Salon
            </a>
            <span>·</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 text-[#E8D5A5] hover:text-[#FFFDF9] transition-colors font-medium uppercase tracking-wider text-[10.5px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}

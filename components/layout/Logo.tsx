"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  theme?: "light" | "dark" | "gold" | "auto";
  height?: number;
}

export function Logo({ className = "", theme = "auto", height = 46 }: LogoProps) {
  // Determine appropriate logo asset based on theme
  const logoSrc =
    theme === "light"
      ? "/images/logo-mark-dark.png"
      : theme === "gold"
      ? "/images/logo-mark-gold.png"
      : "/images/logo-mark-gold.png";

  return (
    <a
      href="#"
      aria-label="Motiwala & Sons Home"
      className={`inline-flex items-center group focus:outline-none focus:ring-1 focus:ring-[#C8A96A] p-1 transition-all duration-300 hover:opacity-95 ${className}`}
    >
      <div className="relative flex items-center">
        <Image
          src={logoSrc}
          alt="Motiwala & Sons - Official Logo"
          width={150}
          height={87}
          priority
          style={{ height: `${height}px`, width: "auto" }}
          className="object-contain filter group-hover:drop-shadow-[0_0_12px_rgba(200,169,106,0.5)] transition-all duration-300"
        />
      </div>
    </a>
  );
}

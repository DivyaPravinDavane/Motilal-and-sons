"use client";

import React from "react";
import Image from "next/image";

interface WordmarkProps {
  className?: string;
  theme?: "light" | "dark" | "gold" | "auto";
  height?: number;
}

export function Wordmark({ className = "", theme = "auto", height = 44 }: WordmarkProps) {
  const logoSrc =
    theme === "light"
      ? "/images/logo-mark-dark.png"
      : "/images/logo-mark-gold.png";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <Image
        src={logoSrc}
        alt="Motiwala & Sons Logo"
        width={140}
        height={81}
        style={{ height: `${height}px`, width: "auto" }}
        className="object-contain"
      />
    </div>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // "IVORY & INK" Luxury Maison Design System
        ivory: {
          DEFAULT: "#F7F2EA",
          soft: "#FCF9F3",
          deep: "#EFE8DC",
          card: "#FFFDF9",
        },
        ink: {
          DEFAULT: "#0C0A09",
          soft: "#161311",
          elevated: "#1C1816",
          border: "#26211D",
        },
        gold: {
          DEFAULT: "#C8A96A",
          light: "#E8D5A5",
          deep: "#8E7340",
          hairline: "rgba(200, 169, 106, 0.3)",
          glow: "rgba(200, 169, 106, 0.15)",
        },
        burgundy: {
          DEFAULT: "#5A1220",
          dark: "#3B0A14",
          light: "#781A2D",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "system-ui", "sans-serif"],
        signature: ["var(--font-alex)", "cursive"],
      },
      letterSpacing: {
        widest: "0.25em",
        ultra: "0.3em",
        maison: "0.45em",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        kenburns: {
          "0%": { transform: "scale(1.05)" },
          "50%": { transform: "scale(1.15)" },
          "100%": { transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.15)" },
        },
        lightRay: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
      animation: {
        ticker: "ticker 40s linear infinite",
        kenburns: "kenburns 24s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 8s linear infinite",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "light-ray": "lightRay 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

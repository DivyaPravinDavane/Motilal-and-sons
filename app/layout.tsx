import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost, Alex_Brush } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";
import { CustomCursor } from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-jost",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-alex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Motiwala & Sons | Fine Jewellery & Bridal Haute Joaillerie",
  description:
    "Heirlooms, in the making since 1928. Discover timeless bridal suites, South Sea pearls, certified diamonds, and royal polki & kundan crafted across three generations in Fort, Mumbai.",
  keywords: [
    "Motiwala & Sons",
    "Fine Jewellery Mumbai",
    "Luxury Bridal Jewellery",
    "Polki Kundan Suite",
    "South Sea Natural Pearls",
    "Certified Solitaire Diamonds",
  ],
  authors: [{ name: "Motiwala & Sons" }],
  openGraph: {
    title: "Motiwala & Sons | Fine Jewellery · Est. 1928",
    description: "Heirlooms, in the making. Exceptional bridal, diamond, pearl, and polki jewellery.",
    type: "website",
    locale: "en_IN",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/images/logo-circle.png", type: "image/png", sizes: "674x674" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0A09",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${alexBrush.variable}`}>
      <body className="antialiased min-h-screen bg-[#0C0A09] text-[#F7F2EA]">
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

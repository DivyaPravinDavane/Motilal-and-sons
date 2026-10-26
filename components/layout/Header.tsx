"use client";

import React, { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X, ArrowRight } from "lucide-react";
import { navigationItems, brandDetails, getWhatsAppUrl } from "@/data/content";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [bagOpen, setBagOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Blur & glass effect threshold
      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 120) {
        if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 6) {
          setIsVisible(false); // scrolling down
        } else if (lastScrollY - currentScrollY > 6) {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#0C0A09]/90 backdrop-blur-md py-3.5 border-b border-[#26211D] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-6"
        }`}
      >
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Left: Crisp SVG Wordmark */}
            <div className="flex-1 lg:flex-initial">
              <Logo theme="dark" />
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-[11px] uppercase tracking-[0.28em] text-[#F7F2EA]/80 hover:text-[#E8D5A5] transition-colors relative py-1 group font-medium"
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full opacity-90" />
                </a>
              ))}
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Book an Appointment CTA */}
              <a
                href="#appointment"
                className="hidden sm:inline-flex items-center justify-center text-[10.5px] tracking-[0.24em] uppercase font-medium px-4 py-2 border border-[#C8A96A]/60 text-[#E8D5A5] hover:bg-[#C8A96A] hover:text-[#0C0A09] hover:border-[#C8A96A] transition-all duration-300 rounded-[1px]"
              >
                Book an Appointment
              </a>

              {/* Search Toggle */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Search Catalogue"
                className="p-2 text-[#F7F2EA]/80 hover:text-[#C8A96A] transition-colors"
              >
                <Search className="w-4 h-4 stroke-[1.6]" />
              </button>

              {/* Bespoke Selection Drawer */}
              <button
                onClick={() => setBagOpen(true)}
                aria-label="View Selection"
                className="p-2 text-[#F7F2EA]/80 hover:text-[#C8A96A] transition-colors relative"
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.6]" />
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#C8A96A]" />
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Navigation Menu"
                className="lg:hidden p-2 text-[#F7F2EA] hover:text-[#C8A96A] transition-colors"
              >
                <Menu className="w-5 h-5 stroke-[1.75]" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Search Modal */}
      {searchOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0C0A09]/80 backdrop-blur-md flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-2xl bg-[#161311] border border-[#26211D] shadow-2xl p-6 sm:p-8 rounded-[1px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#26211D]">
              <span className="text-[10.5px] uppercase tracking-[0.3em] text-[#C8A96A]">
                High Jewellery Search
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#F7F2EA]/60 hover:text-[#F7F2EA]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  autoFocus
                  placeholder="Search Solitaire, Polki, Pearls, Chokers, Bangles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-[#0C0A09] border border-[#26211D] px-4 py-3.5 pr-10 text-sm font-sans text-[#F7F2EA] placeholder:text-[#F7F2EA]/40 focus:outline-none focus:border-[#C8A96A]"
                />
                <Search className="w-4 h-4 text-[#C8A96A] absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>

              <div className="mt-5">
                <p className="text-[9.5px] tracking-[0.25em] uppercase text-[#F7F2EA]/50 mb-2.5">
                  Suggested Categories:
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Bridal Couture", "South Sea Pearls", "Polki Choker", "Solitaire Rings", "Ruby Bangles"].map(
                    (tag) => (
                      <a
                        key={tag}
                        href="#collections"
                        onClick={() => setSearchOpen(false)}
                        className="text-xs bg-[#0C0A09] hover:bg-[#26211D] text-[#E8D5A5] px-3 py-1.5 border border-[#26211D] transition-colors"
                      >
                        {tag}
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bespoke Concierge Drawer */}
      {bagOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0C0A09]/80 backdrop-blur-md flex justify-end"
          onClick={() => setBagOpen(false)}
        >
          <div
            className="w-full max-w-md bg-[#161311] h-full shadow-2xl p-6 sm:p-8 flex flex-col justify-between border-l border-[#26211D]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#26211D]">
                <h3 className="font-serif text-xl text-[#F7F2EA]">Bespoke Selection</h3>
                <button
                  onClick={() => setBagOpen(false)}
                  className="text-[#F7F2EA]/60 hover:text-[#F7F2EA]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-12 text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#0C0A09] border border-[#C8A96A]/40 flex items-center justify-center text-[#C8A96A] mb-4">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-lg text-[#F7F2EA] mb-2">
                  Heirlooms Are Individually Curated
                </h4>
                <p className="text-xs text-[#F7F2EA]/70 leading-relaxed max-w-xs mx-auto">
                  Every Motiwala & Sons creation is bespoke or crafted in strictly limited series. Enquire directly with our salon concierge for immediate private viewings.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-[#26211D] space-y-3">
              <a
                href={getWhatsAppUrl("Hello Motiwala & Sons, I would like to enquire about bespoke creations.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setBagOpen(false)}
                className="flex items-center justify-center w-full py-3.5 bg-[#C8A96A] hover:bg-[#8E7340] text-[#0C0A09] text-xs tracking-widest uppercase font-medium transition-colors shadow-sm"
              >
                <span>Concierge on WhatsApp</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <button
                onClick={() => setBagOpen(false)}
                className="w-full py-3 border border-[#26211D] text-[#F7F2EA]/60 hover:text-[#F7F2EA] text-xs tracking-widest uppercase transition-colors"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import React, { useEffect } from "react";
import { X, ArrowRight, MessageSquare, Phone } from "lucide-react";
import { navigationItems, brandDetails, getWhatsAppUrl } from "@/data/content";
import { Logo } from "./Logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col bg-[#0C0A09] text-[#F7F2EA] transition-opacity duration-300 animate-fadeIn"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-[#26211D]">
        <Logo theme="dark" />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[#F7F2EA] hover:text-[#C8A96A] transition-colors"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto px-8 py-10 flex flex-col justify-between">
        <div className="space-y-6">
          <p className="text-[9.5px] tracking-[0.35em] uppercase text-[#C8A96A] mb-4">
            Navigation
          </p>
          {navigationItems.map((item, idx) => (
            <div key={item.label} className="border-b border-[#26211D] pb-4">
              <a
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between text-2xl font-serif font-normal text-[#F7F2EA] hover:text-[#C8A96A] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-[10.5px] font-sans tracking-widest text-[#F7F2EA]/40 group-hover:text-[#C8A96A] group-hover:translate-x-1 transition-all">
                  0{idx + 1}
                </span>
              </a>
            </div>
          ))}

          <div className="pt-4">
            <a
              href="#appointment"
              onClick={onClose}
              className="flex items-center justify-between w-full py-4 px-6 bg-[#C8A96A] text-[#0C0A09] text-xs tracking-widest uppercase font-medium hover:bg-[#E8D5A5] transition-colors shadow-sm"
            >
              <span>Book an Appointment</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-8 border-t border-[#26211D] mt-8 text-xs text-[#F7F2EA]/60 space-y-3">
          <div className="flex items-center justify-between">
            <a
              href={getWhatsAppUrl("Hello Motiwala & Sons, I would like to enquire about your jewellery collections.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#E8D5A5] hover:text-[#F7F2EA]"
            >
              <MessageSquare className="w-4 h-4 text-[#C8A96A]" />
              <span>WhatsApp Concierge</span>
            </a>
            <a
              href={`tel:${brandDetails.showroom.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-2 hover:text-[#E8D5A5]"
            >
              <Phone className="w-4 h-4 text-[#C8A96A]" />
              <span>{brandDetails.showroom.phone}</span>
            </a>
          </div>
          <p className="text-[10.5px] text-[#F7F2EA]/40 text-center pt-2">
            Fort Showroom · Established {brandDetails.establishedYear}
          </p>
        </div>
      </nav>
    </div>
  );
}

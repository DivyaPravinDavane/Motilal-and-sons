"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, MessageSquare, ArrowRight, Sparkles } from "lucide-react";
import { brandDetails, flagshipShowroom, getWhatsAppUrl, closingContent } from "@/data/content";
import { siteImages } from "@/lib/images";
import { Container } from "@/components/ui/Container";

export function VisitShowroom() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    occasion: "Bridal Couture",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please provide your name and phone number for the appointment request.");
      return;
    }

    const message = `Hello Motiwala & Sons, I would like to request a Private Viewing Appointment.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPreferred Date: ${formData.date || "Flexible"}\nOccasion: ${formData.occasion}`;
    const link = getWhatsAppUrl(message);
    window.open(link, "_blank");
  };

  return (
    <>
      {/* 06 / VISIT THE SHOWROOM (Ivory paper-grain section) */}
      <section id="showroom" className="py-24 sm:py-32 lg:py-40 bg-[#F7F2EA] text-[#1E1915] border-b border-[#DED2C0] paper-grain relative select-none">
        <Container size="wide">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 sm:pb-8 border-b border-[#DED2C0] mb-12 sm:mb-16 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.3em] text-[#8E7340] uppercase font-medium">
                  06 / PRIVATE ATELIER
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1E1915] tracking-tight font-normal">
                Visit The Flagship Salon
              </h2>
            </div>

            <p className="font-sans text-xs sm:text-[13px] text-[#29241F]/70 max-w-sm">
              We welcome patrons for private viewings and trousseau consultations by appointment in our Fort salon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Showroom Photo with fine gold frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="relative aspect-[4/3.2] w-full rounded-[1px] overflow-hidden border border-[#DED2C0] bg-[#EFE8DC] shadow-[0_16px_40px_rgba(41,36,31,0.08)] group">
                <Image
                  src={siteImages.showroom.src}
                  alt={siteImages.showroom.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#C8A96A]/30 pointer-events-none" />
              </div>

              <p className="font-serif italic text-sm text-[#8E7340] mt-3">
                Flagship Salon · Fort, Mumbai
              </p>
            </motion.div>

            {/* Center Column: Showroom Details & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-4 flex flex-col justify-between space-y-6 text-xs sm:text-[13px] font-sans text-[#29241F]/80"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full border border-[#C8A96A]/40 bg-[#FFFDF9] flex items-center justify-center text-[#8E7340] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E1915] text-[14px]">{flagshipShowroom.address}</p>
                    <p className="text-[11.5px] text-[#8E7340] mt-0.5">Valet Parking & Private Salon Entrance</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full border border-[#C8A96A]/40 bg-[#FFFDF9] flex items-center justify-center text-[#8E7340] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E1915]">{flagshipShowroom.hoursWeekday}</p>
                    <p className="text-[11.5px] text-[#8E7340] mt-0.5">{flagshipShowroom.hoursSunday}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full border border-[#C8A96A]/40 bg-[#FFFDF9] flex items-center justify-center text-[#8E7340] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <a href={`tel:${flagshipShowroom.phone}`} className="font-medium text-[#1E1915] hover:text-[#8E7340] transition-colors">
                      {flagshipShowroom.phone}
                    </a>
                    <p className="text-[11px] text-[#29241F]/60">Dedicated Concierge Desk</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full border border-[#C8A96A]/40 bg-[#FFFDF9] flex items-center justify-center text-[#8E7340] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <a href={`mailto:${flagshipShowroom.email}`} className="font-medium text-[#1E1915] hover:text-[#8E7340] transition-colors">
                      {flagshipShowroom.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={flagshipShowroom.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#8E7340] text-[#1E1915] hover:bg-[#8E7340] hover:text-[#FFFDF9] text-[10.5px] uppercase tracking-[0.24em] font-medium transition-all duration-300"
                >
                  <span>Get Directions on Map</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            </motion.div>

            {/* Right Column: Book a Private Appointment Form */}
            <motion.div
              id="appointment"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 bg-[#FFFDF9] border border-[#DED2C0] p-6 sm:p-8 rounded-[1px] shadow-[0_16px_40px_rgba(41,36,31,0.06)]"
            >
              <h3 className="font-serif text-xl sm:text-2xl text-[#1E1915] font-normal mb-2">
                Book a Private Viewing
              </h3>
              <p className="text-xs text-[#29241F]/70 mb-5 font-light">
                Reserve an exclusive consultation with our master gemologists.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#FCF9F4] border border-[#DED2C0] px-4 py-3 text-xs font-sans text-[#1E1915] placeholder:text-[#29241F]/40 focus:outline-none focus:border-[#C8A96A]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (WhatsApp)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FCF9F4] border border-[#DED2C0] px-4 py-3 text-xs font-sans text-[#1E1915] placeholder:text-[#29241F]/40 focus:outline-none focus:border-[#C8A96A]"
                  />
                </div>

                <div>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FCF9F4] border border-[#DED2C0] px-4 py-3 text-xs font-sans text-[#1E1915] placeholder:text-[#29241F]/40 focus:outline-none focus:border-[#C8A96A]"
                  />
                </div>

                <div>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                    className="w-full bg-[#FCF9F4] border border-[#DED2C0] px-4 py-3 text-xs font-sans text-[#1E1915] focus:outline-none focus:border-[#C8A96A]"
                  >
                    <option value="Bridal Couture">Occasion: Bridal Couture</option>
                    <option value="High Solitaires & Diamonds">Occasion: High Solitaires & Diamonds</option>
                    <option value="Polki & Kundan Suites">Occasion: Polki & Kundan Suites</option>
                    <option value="South Sea Pearls">Occasion: South Sea Pearls</option>
                    <option value="Bespoke Milestone Commission">Occasion: Bespoke Milestone Commission</option>
                  </select>
                </div>

                {/* WhatsApp Button Styled in Champagne Gold & Ink (NOT default green) */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 bg-[#C8A96A] hover:bg-[#8E7340] text-[#0C0A09] hover:text-[#FFFDF9] text-[11px] tracking-[0.24em] uppercase font-medium transition-all duration-300 shadow-md mt-3"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Reserve on WhatsApp</span>
                </button>
              </form>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CLOSING STATEMENT (Dark Ink Vault Section) */}
      <section className="py-24 sm:py-32 lg:py-40 bg-[#0C0A09] text-[#F7F2EA] border-b border-[#26211D] relative overflow-hidden select-none">
        {/* Slow drifting spotlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,169,106,0.12)_0%,transparent_70%)] pointer-events-none animate-glow-pulse" />

        <Container size="narrow" className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="w-8 h-[1px] bg-[#C8A96A] mx-auto block mb-6" />

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.06] tracking-tight font-normal text-[#F7F2EA] mb-6">
              <span>{closingContent.headline.split(" ")[0]} </span>
              <span className="italic font-light text-gold-gradient">
                {closingContent.headline.split(" ").slice(1).join(" ")}
              </span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#F7F2EA]/75 max-w-xl mx-auto mb-10 font-light leading-relaxed">
              {closingContent.subheadline}
            </p>

            <a
              href="#appointment"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#C8A96A] hover:bg-[#E8D5A5] text-[#0C0A09] text-xs tracking-[0.26em] uppercase font-medium transition-all duration-300 shadow-[0_4px_24px_rgba(200,169,106,0.3)] hover:scale-105"
            >
              <span>{closingContent.ctaLabel}</span>
              <ArrowRight className="w-4 h-4 ml-2.5" />
            </a>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

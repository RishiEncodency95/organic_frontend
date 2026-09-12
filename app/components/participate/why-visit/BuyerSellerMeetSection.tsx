"use client";

import React from "react";
import Link from "next/link";
import {
  Calendar,
  ShieldCheck,
  Handshake,
  TrendingUp,
  ArrowRight,
  Users,
  Mic,
  Globe,
  MapPin,
  UserCircle2,
  Sparkles,
} from "lucide-react";

import vb2bbg from "@/app/assets/banner/vb2bbg.webp";
import b1og from "@/app/assets/icons/b1og.png";
import b2og from "@/app/assets/icons/b2og.png";
import b3og from "@/app/assets/icons/b3og.png";
import b4og from "@/app/assets/icons/b4og.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const Sparkle = ({
  style,
  color = "#ffdd00",
  shadow = "#ffa500",
}: {
  style?: React.CSSProperties;
  color?: string;
  shadow?: string;
}) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "12px",
      color,
      textShadow: `0 0 6px ${shadow}, 0 0 12px ${shadow}`,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const BUYER_SELLER_MEET_DATA = [
  {
    id: 1,
    header: {
      badge: "REASON TO VISIT",
      title: "Buyer–Seller Meet",
      subline: "MEET. CONNECT. GROW.",
      descLine1: "A focused platform to connect serious buyers with trusted ",
      descLine2: "exhibitors and build long-term business relationships.",
    },
    features: [
      {
        id: "f1",
        img: b1og,
        titleLine1: "Pre-scheduled",
        titleLine2: "Meetings",
        descLine1: "We connect you with",
        descLine2: "relevant exhibitors",
        descLine3: "before the expo.",
      },
      {
        id: "f2",
        img: b2og,
        titleLine1: "Quality",
        titleLine2: "Connections",
        descLine1: "Meet verified",
        descLine2: "manufacturers,",
        descLine3: "suppliers & brands.",
      },
      {
        id: "f3",
        img: b3og,
        titleLine1: "Save Time,",
        titleLine2: "Close Deals",
        descLine1: "One-to-one meetings",
        descLine2: "that help you discover,",
        descLine3: "compare & decide.",
      },
      {
        id: "f4",
        img: b4og,
        titleLine1: "Grow Your",
        titleLine2: "Business",
        descLine1: "Explore new products,",
        descLine2: "expand your portfolio",
        descLine3: "& increase margins.",
      },
    ],
    cta: {
      btnText: "REGISTER AS BUYER",
      btnHref: "/registration/buyer-registration",
      subtextTop: "Exclusive for",
      subtextBottom: "Serious Business Buyers",
    },
    stats: [
      { id: "s1", icon: Users, val: "200+", label: "EXHIBITORS", subtext: "Across the Organic Ecosystem" },
      { id: "s2", icon: Mic, val: "100+", label: "SPEAKERS", subtext: "Industry Leaders & Experts" },
      { id: "s3", icon: Globe, val: "8,000+", label: "BUSINESS VISITORS", subtext: "Traders, Buyers, Retailers & More" },
      { id: "s4", icon: Globe, val: "GLOBAL", label: "PARTICIPATION", subtext: "Connecting India with the World" },
    ],
    bottomStrip: {
      date: "19–21 FEBRUARY 2027",
      venue: "HALL 12, BHARAT MANDAPAM, NEW DELHI",
      ctaText: "PLAN YOUR VISIT NOW",
      ctaHref: "/registration/visitor-registration",
    },
  },
];

const BuyerSellerMeetSection = () => {
  return (
    <section className="py-6 sm:py-7 bg-white font-inter relative overflow-hidden min-h-[550px] sm:min-h-[585px] max-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src={vb2bbg.src}
          alt="Buyer-Seller Meet Background"
          className="w-full h-full object-cover object-left opacity-100 scale-110 sm:scale-108 translate-y-1 sm:translate-y-2"
        />
      </div>

      <SectionContainer className="relative z-10 py-1 max-w-7xl mx-auto">
        {BUYER_SELLER_MEET_DATA.map((section) => (
          <div key={section.id} className="w-full flex flex-col items-center lg:items-end">
            {/* Main Content Area */}
            <div className="w-full lg:w-[68%] xl:w-[65%] text-center">
              
              {/* HEADER */}
              <div className="text-center mb-3 flex flex-col items-center justify-center">
                {/* Top Capsule Badge */}
                <div className="inline-flex items-center justify-center bg-[#0c240f] text-white px-3.5 py-1 rounded-md font-poppins font-semibold text-[11px] uppercase tracking-widest shadow-sm mb-1.5">
                  <span>{section.header.badge}</span>
                </div>

                {/* Title */}
                <h2
                  className="font-poppins font-semibold text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] text-[#001810] leading-[1.05] mb-1"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
                >
                  {section.header.title}
                </h2>

                {/* Sub-headline with accent lines */}
                <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-[#1b5e20] font-poppins font-semibold text-sm sm:text-base md:text-[17px] tracking-widest uppercase mb-1.5">
                  <div className="h-[1.5px] w-6 sm:w-10 bg-[#1b5e20]/60" />
                  <span>{section.header.subline}</span>
                  <div className="h-[1.5px] w-6 sm:w-10 bg-[#1b5e20]/60" />
                </div>

                {/* Description Paragraph */}
                <p className="font-inter text-[13px] sm:text-sm md:text-[14.5px] font-bold text-[#131730] max-w-xl mx-auto leading-relaxed">
                  {section.header.descLine1} <br className="hidden sm:block" />
                  {section.header.descLine2}
                </p>
              </div>

              {/* 4 FEATURE CARDS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-[720px] mx-auto mb-3.5 font-inter">
                {section.features.map((feat) => (
                  <div
                    key={feat.id}
                    className="bg-[#FAFBF6] rounded-xl py-3.5 px-2 sm:px-2.5 border border-slate-200/80 hover:shadow-md transition-shadow text-center flex flex-col items-center justify-start min-h-[175px]"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                  >
                    <img
                      src={feat.img.src}
                      alt={feat.titleLine1}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain -mt-1.5 mb-1.5"
                    />
                    <h3 className="font-poppins font-semibold text-[13px] md:text-[14px] text-[#001810] leading-tight mb-1">
                      {feat.titleLine1} <br /> {feat.titleLine2}
                    </h3>
                    <div className="w-5 h-[1.5px] bg-[#1b5e20]/40 my-1" />
                    <p className="font-inter text-[10px] md:text-[11px] text-slate-800 font-semibold leading-snug mt-0.5">
                      {feat.descLine1} <br />
                      {feat.descLine2} <br />
                      {feat.descLine3}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA BUTTON & SIDE SUBTEXT */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mb-3">
                <div className="relative">
                  <Sparkle color="#007979" shadow="#004d4d" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                  <Sparkle color="#007979" shadow="#004d4d" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                  <Sparkle color="#007979" shadow="#004d4d" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                  <Link
                    href={section.cta.btnHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#007979] hover:bg-[#005f5f] text-white font-poppins font-semibold text-xs tracking-wider uppercase px-6 py-2 rounded-full shadow-md flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative z-10"
                  >
                    <UserCircle2 className="w-4 h-4 text-amber-300" />
                    <span>{section.cta.btnText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-left">
                  <div className="w-7 h-7 rounded-full bg-[#e8f3e7] flex items-center justify-center text-[#1b5e20] shrink-0 border border-[#1b5e20]/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-inter leading-tight">
                    <span className="block font-medium text-gray-700">{section.cta.subtextTop}</span>
                    <span className="block font-semibold text-[#001810]">{section.cta.subtextBottom}</span>
                  </div>
                </div>
              </div>

              {/* STATS ROW */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3.5 border border-slate-200/80 shadow-sm mb-3 font-inter">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
                  {section.stats.map((st, idx) => {
                    const IconComp = st.icon;
                    return (
                      <div key={st.id} className={`flex items-center gap-2.5 px-1.5 ${idx !== 0 ? "sm:pl-3 pt-2 sm:pt-0" : ""}`}>
                        <div className="w-8 h-8 rounded-full bg-[#e8f3e7] text-[#1b5e20] flex items-center justify-center shrink-0">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <h4 className="font-poppins font-semibold text-base text-[#001810] leading-tight">{st.val}</h4>
                          <p className="font-inter font-semibold text-[11px] text-[#001810] uppercase tracking-wide">{st.label}</p>
                          <p className="font-inter font-semibold text-[10px] sm:text-[11px] text-slate-700 leading-tight">{st.subtext}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* BOTTOM DARK GREEN STRIP */}
              <div className="bg-[#0c240f] text-white rounded-full p-2 sm:p-2.5 px-5 flex flex-col sm:flex-row items-center justify-between gap-2.5 shadow-lg">
                <div className="flex flex-wrap items-center gap-3 sm:gap-5 font-poppins font-semibold text-xs">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#a3e635]" />
                    <span>{section.bottomStrip.date}</span>
                  </div>
                  <div className="hidden sm:block w-px h-3.5 bg-white/20" />
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#a3e635]" />
                    <span>{section.bottomStrip.venue}</span>
                  </div>
                </div>

                <a
                  href={section.bottomStrip.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#a3e635] hover:bg-[#84cc16] text-[#0c240f] font-poppins font-bold text-[11px] px-4 py-1.5 rounded-full flex items-center gap-1.5 transition-all shadow-md shrink-0 group"
                >
                  <span>{section.bottomStrip.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>
          </div>
        ))}
      </SectionContainer>
    </section>
  );
};

export default BuyerSellerMeetSection;

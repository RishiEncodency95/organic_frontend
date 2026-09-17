"use client";

import React, { useEffect, useState } from "react";
import { MapPin, ArrowRight, Award, Medal, Calendar } from "lucide-react";
import bannerImg from "../../assets/awards/banner2.webp";
import SectionContainer from "@/app/components/layout/SectionContainer";

const Sparkle = ({ style, color = "#F2B40E", shadow }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "13px",
      color,
      textShadow: shadow ? `0 0 6px ${shadow}` : undefined,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const DEFAULT_DATA = {
  enabled: true,
  tagline: "BHARAT ORGANIC",
  titlePrimary: "EXCELLENCE",
  titleSecondary: "AWARDS 2027",
  highlights: [
    { id: 1, text: "Celebrating Excellence" },
    { id: 2, text: "Innovation" },
    { id: 3, text: "Sustainability" },
  ],
  description: "Honouring the changemakers, organisations and innovations driving India's organic, natural and sustainable future.",
  dateLine1: "19 - 21",
  dateLine2: "February 2027",
  venueLine1: "Hall 12, Bharat Mandapam",
  venueLine2: "PRAGATI MAIDAN, NEW DELHI, INDIA",
  buttons: [
    {
      id: "nominate",
      label: "NOMINATE NOW",
      href: "/awards/nominations",
      target: "_blank",
      rel: "noopener noreferrer",
      variant: "primary",
      icon: "Award",
    },
    {
      id: "categories",
      label: "VIEW CATEGORIES",
      href: "#categories",
      variant: "secondary",
      icon: "Medal",
    },
  ],
};

interface AwardsHeroProps {
  initialData?: any;
}

const AwardsHero = ({ initialData }: AwardsHeroProps) => {
  const [heroData, setHeroData] = useState<any>(initialData || DEFAULT_DATA);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Live fetch from backend API
  useEffect(() => {
    const fetchLiveHero = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001/api";
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4001";
        let res = await fetch(`${apiUrl}/website/awards/hero`, { cache: "no-store" }).catch(() => null);
        if (!res || !res.ok) {
          res = await fetch(`${serverUrl}/api/website/awards/hero`, { cache: "no-store" }).catch(() => null);
        }
        if (!res || !res.ok) {
          res = await fetch(`/api/website/awards/hero`, { cache: "no-store" }).catch(() => null);
        }
        if (res && res.ok) {
          const json = await res.json().catch(() => null);
          if (json?.data) {
            setHeroData(json.data);
          }
        }
      } catch (err) {
        console.error("Failed to load live awards hero:", err);
      }
    };
    fetchLiveHero();
  }, []);

  if (heroData.enabled === false) return null;

  // Normalized values
  const tagline = heroData.tagline || heroData.eyebrow || DEFAULT_DATA.tagline;

  const rawTitle = heroData.title || `${heroData.titlePrimary || DEFAULT_DATA.titlePrimary} ${heroData.titleSecondary || DEFAULT_DATA.titleSecondary}`;
  const titleWords = rawTitle.trim().split(/\s+/);
  const titlePrimary = heroData.titlePrimary || titleWords[0] || DEFAULT_DATA.titlePrimary;
  const titleSecondary = heroData.titleSecondary || titleWords.slice(1).join(" ") || DEFAULT_DATA.titleSecondary;

  let highlights = DEFAULT_DATA.highlights;
  if (Array.isArray(heroData.highlights) && heroData.highlights.length > 0) {
    highlights = heroData.highlights;
  } else if (heroData.subtitle) {
    highlights = heroData.subtitle
      .split("•")
      .map((txt: string, idx: number) => ({
        id: idx + 1,
        text: txt.trim(),
      }))
      .filter((x: any) => x.text.length > 0);
  }

  const description = heroData.description || heroData.shortDescription || DEFAULT_DATA.description;

  // Date parsing
  let dateLine1 = heroData.dateLine1;
  let dateLine2 = heroData.dateLine2;
  if (heroData.date) {
    const rawDate = String(heroData.date).trim();
    if (rawDate.includes("\n")) {
      const parts = rawDate.split("\n");
      dateLine1 = parts[0].trim();
      dateLine2 = parts.slice(1).join(" ").trim();
    } else {
      const match = rawDate.match(/^(\d+(?:\s*-\s*\d+)?)\s+(.*)$/);
      if (match) {
        dateLine1 = match[1].trim();
        dateLine2 = match[2].trim();
      } else {
        dateLine1 = rawDate;
        dateLine2 = "";
      }
    }
  }
  dateLine1 = dateLine1 || DEFAULT_DATA.dateLine1;
  dateLine2 = dateLine2 || DEFAULT_DATA.dateLine2;

  // Venue / Location parsing
  let venueLine1 = heroData.venueLine1;
  let venueLine2 = heroData.venueLine2;
  if (heroData.location) {
    const rawLoc = String(heroData.location).trim();
    if (rawLoc.includes("\n")) {
      const parts = rawLoc.split("\n");
      venueLine1 = parts[0].trim();
      venueLine2 = parts.slice(1).join(" ").trim();
    } else if (rawLoc.toLowerCase().includes("bharat mandapam,")) {
      const idx = rawLoc.toLowerCase().indexOf("bharat mandapam,") + "bharat mandapam,".length;
      venueLine1 = rawLoc.slice(0, idx - 1).trim();
      venueLine2 = rawLoc.slice(idx).trim();
    } else {
      const commaIdx = rawLoc.indexOf(",");
      if (commaIdx !== -1) {
        venueLine1 = rawLoc.slice(0, commaIdx).trim();
        venueLine2 = rawLoc.slice(commaIdx + 1).trim();
      } else {
        venueLine1 = rawLoc;
        venueLine2 = "";
      }
    }
  }
  venueLine1 = venueLine1 || DEFAULT_DATA.venueLine1;
  venueLine2 = venueLine2 || DEFAULT_DATA.venueLine2;

  // Buttons parsing
  const buttons = (Array.isArray(heroData.buttons) && heroData.buttons.length > 0)
    ? heroData.buttons.map((b: any, idx: number) => ({
        ...b,
        icon: idx === 0 ? Award : Medal,
      }))
    : [
        {
          id: "nominate",
          label: heroData.buttonLabel || DEFAULT_DATA.buttons[0].label,
          href: heroData.buttonHref || DEFAULT_DATA.buttons[0].href,
          target: "_blank",
          rel: "noopener noreferrer",
          variant: "primary",
          icon: Award,
        },
        {
          id: "categories",
          label: heroData.secondaryButtonLabel || DEFAULT_DATA.buttons[1].label,
          href: heroData.secondaryButtonHref || DEFAULT_DATA.buttons[1].href,
          variant: "secondary",
          icon: Medal,
        },
      ];

  return (
    <>
      <style>{`
        @keyframes sparkleAnim {
          0%   { opacity:0; transform:scale(0.5) translateY(0); }
          40%  { opacity:1; transform:scale(1.2) translateY(-4px); }
          80%  { opacity:0.5; transform:scale(0.9) translateY(-6px); }
          100% { opacity:0; transform:scale(0.5) translateY(-8px); }
        }
        @keyframes shimmerHero { 0% { left:-75%; } 100% { left:150%; } }
        @keyframes bgZoom {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1.0); }
        }
        .hero-bg-img {
          animation: bgZoom 8s ease-out forwards;
          transform-origin: center center;
        }
        .blue-btn-hero {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 30%, #0e3b1c 60%, #1b5e20 100%);
          background-size: 200% 200%;
          box-shadow: 0 0 16px 4px rgba(27,94,32,0.3), 0 4px 15px rgba(27,94,32,0.25);
          position: relative;
          overflow: hidden;
        }
        .blue-btn-hero::before {
          content: '';
          position: absolute;
          top: -50%; left: -75%;
          width: 50%; height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
        }
      `}</style>

      <section className="relative flex items-center pt-3 md:pt-5 pb-4 md:pb-6 overflow-hidden h-[68vh] md:h-[72vh] lg:h-[78vh] min-h-[400px] bg-[#fcfcf0] font-inter border-b-4 border-[#ea580c]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={heroData.image || bannerImg.src}
            alt="Bharat Organic Excellence Awards 2027 Banner"
            className="hero-bg-img w-full h-full object-left md:object-center object-cover"
          />
        </div>

        <SectionContainer className="relative z-20 py-1 md:py-2">
          <div
            className={`max-w-2xl transition-all duration-700 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {/* Top Tagline */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-[3px] h-4.5 bg-[#0b3b18] inline-block rounded-xs" />
              <span className="text-[#0b3b18] text-base sm:text-md font-bold uppercase tracking-[0.18em]">
                {tagline}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl md:text-5xl lg:text-[68px] font-semibold leading-[1.02] mb-3 text-left font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
            >
              <span className="block text-[#0b3b18] text-4xl sm:text-5xl md:text-[56px] lg:text-[66px] font-semibold tracking-tight uppercase mb-0.5">
                {titlePrimary}
              </span>
              <span className="block text-[#0b3b18] text-4xl sm:text-5xl md:text-[56px] lg:text-[66px] font-semibold tracking-tight uppercase">
                {titleSecondary}
              </span>
            </h1>

            {/* Subtitle / Key Highlights */}
            <p className="mb-2.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-[13.5px] font-bold uppercase tracking-wider text-[#0b3b18]">
              {highlights.map((h: any, idx: number) => (
                <React.Fragment key={h.id || idx}>
                  <span>{h.text}</span>
                  {idx < highlights.length - 1 && (
                    <span className="text-[#ea580c] text-sm">•</span>
                  )}
                </React.Fragment>
              ))}
            </p>

            {/* Description */}
            <p className="text-[#131730] font-medium text-xs sm:text-[13.5px] md:text-sm leading-relaxed max-w-lg mb-2">
              {description}
            </p>

            {/* Date & Venue */}
            <div className="mt-5 flex flex-col items-start gap-3 text-xs font-bold text-[#4B1426] sm:flex-row sm:items-center sm:gap-4 sm:text-sm md:text-[14px]">
              <div className="flex items-center gap-3">
                <Calendar className="h-[25px] w-[25px] shrink-0 text-emerald-900" />
                <div>
                  <p>{dateLine1}</p>
                  <p className="uppercase">{dateLine2}</p>
                </div>
              </div>
              <span className="hidden h-4 w-px bg-[#4B1426]/30 sm:block" />
              <div className="flex items-center gap-3">
                <MapPin className="h-[25px] w-[25px] shrink-0 text-emerald-900" />
                <div>
                  <p>{venueLine1}</p>
                  <p className="uppercase">{venueLine2}</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-3 my-4">
              {buttons.map((btn: any) => {
                const Icon = btn.icon;
                if (btn.variant === "primary") {
                  return (
                    <div key={btn.id} className="relative w-full sm:w-auto">
                      <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                      <Sparkle color="#86efac" shadow="#16a34a" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                      <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                      <a
                        href={btn.href}
                        target={btn.target}
                        rel={btn.rel}
                        className="blue-btn-hero text-white px-4 py-2.5 rounded-full font-semibold text-[10px] md:text-[10.5px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto"
                      >
                        {Icon && <Icon className="h-4 w-4 text-[#F2B40E]" />}
                        {btn.label} <ArrowRight size={14} />
                      </a>
                    </div>
                  );
                }
                return (
                  <div key={btn.id} className="relative w-full sm:w-auto">
                    <a
                      href={btn.href}
                      className="group relative inline-flex items-center justify-start gap-2 px-4 py-2.5 rounded-full font-semibold text-[10px] md:text-[10.5px] uppercase tracking-widest text-[#0b3b18] bg-white/90 border border-[#0b3b18]/30 transition-all active:scale-95 shadow-sm z-10 w-full sm:w-auto hover:bg-[#0b3b18] hover:text-white"
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {btn.label} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                );
              })}
            </div>

          </div>
        </SectionContainer>
      </section>
    </>
  );
};

export default AwardsHero;
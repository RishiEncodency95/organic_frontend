"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Calendar,
  MapPin,
  Globe,
  ShieldCheck,
  TrendingUp,
  Megaphone,
  Users,
  Building2,
  Leaf,
  GraduationCap,
  Stethoscope,
  Landmark,
  Handshake,
  Target,
  Award,
  Medal,
  Lightbulb,
  Mic,
  Calendar as CalendarIcon,
  Eye,
  Sprout,
  HeartPulse,
  Trophy,
  UserCheck,
  Briefcase,
  Sparkles,
  Zap,
  ShoppingBag,
  Coffee,
  Newspaper,
  Camera,
  Headphones,
  MessageCircle,
  Clock,
  Phone,
  Mail,
  Heart,
  Star,
  CheckCircle,
  Info,
} from "lucide-react";
import exhibitBg from "@/app/assets/banner/exhibitog.webp";

import x1 from "@/app/assets/icons/x1.png";
import x2 from "@/app/assets/icons/x2.png";
import x3 from "@/app/assets/icons/x3.png";
import x4 from "@/app/assets/icons/x4.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const getImgSrc = (src: any): string => (typeof src === "string" ? src : src?.src || "");

const formatImgSrc = (src: any): string => {
  if (!src) return "";
  if (typeof src !== "string") return src.src || "";
  if (src.startsWith("http") || src.startsWith("data:")) return src;
  const base = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";
  return `${base}${src.startsWith("/") ? "" : "/"}${src}`;
};

const DEFAULT_ICONS = [x1, x2, x3, x4];

const ICON_MAP: Record<string, React.ElementType> = {
  Globe,
  ShieldCheck,
  TrendingUp,
  Megaphone,
  Users,
  Building2,
  Leaf,
  GraduationCap,
  Stethoscope,
  Landmark,
  Handshake,
  Target,
  Award,
  Medal,
  Lightbulb,
  Mic,
  Calendar: CalendarIcon,
  Eye,
  Sprout,
  HeartPulse,
  Trophy,
  UserCheck,
  Briefcase,
  Sparkles,
  Zap,
  ShoppingBag,
  Coffee,
  Newspaper,
  Camera,
  Headphones,
  MessageCircle,
  Clock,
  Phone,
  Mail,
  Heart,
  Star,
  CheckCircle,
  Info,
};

const DEFAULT_HERO_DATA = {
  id: "why-exhibit-hero-1",
  tagline: "INDIA'S PREMIER ORGANIC & WELLNESS EVENT",
  titlePrefix: "CONNECT. COLLABORATE.",
  titleHighlight: "CULTIVATE A HEALTHIER TOMORROW.",
  description:
    "Bharat Organic Expo brings together global innovators, brands, buyers & experts to promote sustainable living and natural well-being.",
  bgImage: "",
  highlights: [
    { id: "h1", main: "Global", sub: "Exposure", img: "", icon: "" },
    { id: "h2", main: "Quality", sub: "Connections", img: "", icon: "" },
    { id: "h3", main: "Business", sub: "Growth", img: "", icon: "" },
    { id: "h4", main: "Brand", sub: "Visibility", img: "", icon: "" },
  ],
  buttons: [
    {
      id: "book-stall",
      label: "Book Your Stall",
      href: "/registration/book-a-stand",
      variant: "orange",
      sparkles: [
        { color: "#f97316", shadow: "#c2410c", style: { top: "-12px", left: "10%", animationDelay: "0s" } },
        { color: "#f97316", shadow: "#c2410c", style: { top: "-15px", left: "50%", animationDelay: "0.4s" } },
        { color: "#f97316", shadow: "#c2410c", style: { top: "-10px", right: "10%", animationDelay: "0.8s" } },
      ],
    },
    {
      id: "download-brochure",
      label: "Download Brochure",
      href: "/download/invited card.pdf",
      variant: "blue",
      sparkles: [
        { color: "#3b82f6", shadow: "#28396C", style: { top: "-12px", left: "10%", animationDelay: "0.2s" } },
        { color: "#3b82f6", shadow: "#28396C", style: { top: "-15px", left: "50%", animationDelay: "0.6s" } },
        { color: "#3b82f6", shadow: "#28396C", style: { top: "-10px", right: "10%", animationDelay: "1s" } },
      ],
    },
  ],
  eventCard: {
    dateRange: "19 – 21",
    monthYear: "FEBRUARY 2027",
    locationTitle: "BHARAT MANDAPAM,",
    locationSub: "NEW DELHI, INDIA",
    quoteLines: [
      { text: "A Global Convergence", color: "#1b5e20" },
      { text: "of Organic Trade &", color: "#4B1426" },
      { text: "Sustainable Business", color: "#1b5e20" },
    ],
  },
};

const Sparkle = ({ style, color = "#ffdd00", shadow = "#ffa500" }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
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

const HeroSection = ({ sectionData }: { sectionData?: any }) => {
  const [hero, setHero] = useState(() => {
    if (!sectionData) return DEFAULT_HERO_DATA;
    return {
      ...DEFAULT_HERO_DATA,
      tagline: sectionData.eyebrow || sectionData.tagline || DEFAULT_HERO_DATA.tagline,
      titlePrefix: sectionData.titlePrimary || sectionData.titlePrefix || DEFAULT_HERO_DATA.titlePrefix,
      titleHighlight: sectionData.titleSecondary || sectionData.titleHighlight || DEFAULT_HERO_DATA.titleHighlight,
      description: sectionData.description || DEFAULT_HERO_DATA.description,
      bgImage: sectionData.bgImage || "",
      highlights:
        Array.isArray(sectionData.items || sectionData.highlights) && (sectionData.items || sectionData.highlights).length > 0
          ? (sectionData.items || sectionData.highlights).map((h: any, idx: number) => ({
              id: h.id || `h-${idx}`,
              main: h.main ?? DEFAULT_HERO_DATA.highlights[idx]?.main ?? "",
              sub: h.sub ?? DEFAULT_HERO_DATA.highlights[idx]?.sub ?? "",
              img: h.image || h.img || "",
              image: h.image || h.img || "",
              icon: "",
            }))
          : DEFAULT_HERO_DATA.highlights,
      buttons: [
        {
          ...DEFAULT_HERO_DATA.buttons[0],
          label: sectionData.buttonLabel || sectionData.buttons?.[0]?.label || DEFAULT_HERO_DATA.buttons[0].label,
          href: sectionData.buttonHref || sectionData.buttons?.[0]?.href || DEFAULT_HERO_DATA.buttons[0].href,
        },
        {
          ...DEFAULT_HERO_DATA.buttons[1],
          label: sectionData.secondaryButtonLabel || sectionData.buttons?.[1]?.label || DEFAULT_HERO_DATA.buttons[1].label,
          href: sectionData.secondaryButtonHref || sectionData.buttons?.[1]?.href || DEFAULT_HERO_DATA.buttons[1].href,
        },
      ],
    };
  });

  useEffect(() => {
    if (sectionData) {
      setHero((prev) => ({
        ...prev,
        tagline: sectionData.eyebrow || sectionData.tagline || prev.tagline,
        titlePrefix: sectionData.titlePrimary || sectionData.titlePrefix || prev.titlePrefix,
        titleHighlight: sectionData.titleSecondary || sectionData.titleHighlight || prev.titleHighlight,
        description: sectionData.description || prev.description,
        bgImage: sectionData.bgImage || "",
        highlights:
          Array.isArray(sectionData.items || sectionData.highlights) && (sectionData.items || sectionData.highlights).length > 0
            ? (sectionData.items || sectionData.highlights).map((h: any, idx: number) => ({
                id: h.id || `h-${idx}`,
                main: h.main ?? prev.highlights[idx]?.main ?? "",
                sub: h.sub ?? prev.highlights[idx]?.sub ?? "",
                img: h.image || h.img || "",
                image: h.image || h.img || "",
                icon: "",
              }))
            : prev.highlights,
        buttons: [
          {
            ...prev.buttons[0],
            label: sectionData.buttonLabel || sectionData.buttons?.[0]?.label || prev.buttons[0].label,
            href: sectionData.buttonHref || sectionData.buttons?.[0]?.href || prev.buttons[0].href,
          },
          {
            ...prev.buttons[1],
            label: sectionData.secondaryButtonLabel || sectionData.buttons?.[1]?.label || prev.buttons[1].label,
            href: sectionData.secondaryButtonHref || sectionData.buttons?.[1]?.href || prev.buttons[1].href,
          },
        ],
      }));
    }
  }, [sectionData]);

  useEffect(() => {
    let isMounted = true;
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000";

    fetch(`${backendUrl}/api/website/participate/why-exhibit/hero`, { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch why exhibit hero");
        return res.json();
      })
      .then((json) => {
        if (!isMounted) return;
        const d = json?.data;
        if (d) {
          setHero((prev) => ({
            ...prev,
            tagline: d.tagline || prev.tagline,
            titlePrefix: d.titlePrefix || prev.titlePrefix,
            titleHighlight: d.titleHighlight || prev.titleHighlight,
            description: d.description || prev.description,
            bgImage: d.bgImage || "",
            highlights:
              Array.isArray(d.highlights) && d.highlights.length > 0
                ? d.highlights.map((h: any, idx: number) => ({
                    id: h.id || `h-${idx}`,
                    main: h.main ?? prev.highlights[idx]?.main ?? "",
                    sub: h.sub ?? prev.highlights[idx]?.sub ?? "",
                    img: h.image || h.img || "",
                    image: h.image || h.img || "",
                    icon: "", // always use image, not icons
                  }))
                : prev.highlights,
            buttons: [
              {
                ...prev.buttons[0],
                label: d.buttons?.[0]?.label || prev.buttons[0].label,
                href: d.buttons?.[0]?.href || prev.buttons[0].href,
              },
              {
                ...prev.buttons[1],
                label: d.buttons?.[1]?.label || prev.buttons[1].label,
                href: d.buttons?.[1]?.href || prev.buttons[1].href,
              },
            ],
            eventCard: d.eventCard
              ? {
                  dateRange: d.eventCard.dateRange || prev.eventCard.dateRange,
                  monthYear: d.eventCard.monthYear || prev.eventCard.monthYear,
                  locationTitle: d.eventCard.locationTitle || prev.eventCard.locationTitle,
                  locationSub: d.eventCard.locationSub || prev.eventCard.locationSub,
                  quoteLines:
                    Array.isArray(d.eventCard.quoteLines) && d.eventCard.quoteLines.length > 0
                      ? d.eventCard.quoteLines
                      : prev.eventCard.quoteLines,
                }
              : prev.eventCard,
          }));
        }
      })
      .catch((err) => {
        console.error("Could not load why-exhibit hero dynamically:", err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const bgUrl = hero.bgImage ? formatImgSrc(hero.bgImage) : getImgSrc(exhibitBg);

  return (
    <section className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden font-inter pt-3 md:pt-5 pb-4 md:pb-6 border-b-4 border-[#ea580c]">
      {/* BG Image */}
      <div className="absolute inset-0 z-0 w-full overflow-hidden pointer-events-none">
        <img
          loading="lazy"
          decoding="async"
          src={bgUrl}
          alt="Exhibit BG"
          className="w-full h-full object-cover object-center max-w-full"
        />
        <div className="absolute inset-0 bg-white/75 lg:bg-transparent" />
      </div>

      {/* Max Width Container aligned with Navbar */}
      <SectionContainer className="relative z-10 py-1 md:py-2">
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
          {/* Left Content Column */}
          <div className="w-full lg:w-[50%] xl:w-[46%] text-left shrink-0">
            {/* Green Line & Tagline */}
            <div className="flex items-center justify-start gap-2.5 mb-2">
              <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
              <p className="text-[#c2410c] text-[13px] md:text-[15px] lg:text-[16px] font-bold uppercase tracking-[0.18em] text-left">
                {hero.tagline}
              </p>
              <span className="w-8 h-[2.5px] bg-[#c2410c] shrink-0" />
            </div>

            {/* Main Titles */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.1] mb-2 text-left font-poppins">
              <span className="text-[#1b5e20] text-xl md:text-[26px] lg:text-[32px] block mb-0.5">{hero.titlePrefix}</span>
              <span className="text-[#4B1426] text-lg sm:text-[22px] md:text-[26px] lg:text-[30px] block font-semibold tracking-tight whitespace-nowrap">
                {hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#131730] text-[13px] md:text-[15px] lg:text-[16px] max-w-lg mb-4 font-semibold leading-relaxed text-left">
              {hero.description}
            </p>

            {/* Feature Highlights with Icons */}
            <div className="flex flex-wrap items-center justify-start gap-2.5 md:gap-3 mb-5">
              {hero.highlights.map((item: any, i: number, arr: any[]) => {
                const IconComponent = item.icon ? ICON_MAP[item.icon] : null;
                const fallbackImg = DEFAULT_ICONS[i % DEFAULT_ICONS.length];
                const rawImg = item.img || (item as any).image;
                const displayImg = rawImg ? formatImgSrc(rawImg) : null;

                return (
                  <React.Fragment key={item.id || i}>
                    <div className="flex items-center gap-1.5">
                      {displayImg ? (
                        <img
                          loading="lazy"
                          decoding="async"
                          src={displayImg}
                          alt={item.main}
                          className="w-7 md:w-8 lg:w-9 h-auto shrink-0"
                        />
                      ) : IconComponent ? (
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-md bg-white/80 shadow-xs border border-green-700/20 flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-[#1b5e20]" />
                        </div>
                      ) : (
                        <img
                          loading="lazy"
                          decoding="async"
                          src={getImgSrc(fallbackImg)}
                          alt={item.main}
                          className="w-7 md:w-8 lg:w-9 h-auto shrink-0"
                        />
                      )}
                      <div className="flex flex-col text-left">
                        <span className="text-[11px] md:text-[12px] lg:text-[13px] font-black text-[#1b5e20] uppercase leading-none">
                          {item.main}
                        </span>
                        <span className="text-[11px] md:text-[12px] lg:text-[13px] font-bold text-[#4B1426] uppercase tracking-tighter mt-0.5">
                          {item.sub}
                        </span>
                      </div>
                    </div>
                    {i < arr.length - 1 && <div className="h-6 w-[1px] bg-slate-300/50 hidden sm:block mx-0.5" />}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-3">
              {hero.buttons.map((btn) => (
                <div key={btn.id} className="relative w-full sm:w-auto">
                  {btn.sparkles.map((sp, sIdx) => (
                    <Sparkle key={sIdx} color={sp.color} shadow={sp.shadow} style={sp.style} />
                  ))}
                  {btn.variant === "orange" ? (
                    <Link
                      href={btn.href}
                      target={btn.href.startsWith("http") ? "_blank" : undefined}
                      rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group relative inline-flex items-center justify-start gap-2 px-5 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest text-white transition-all active:scale-95 shadow-2xl relative z-10 w-full sm:w-auto overflow-hidden cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, #ea580c, #c2410c)",
                        boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                      }}
                    >
                      <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                      {btn.label} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <a
                      href={btn.href.startsWith("http") || btn.href.startsWith("/") ? btn.href : `/${btn.href}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="blue-btn-hero text-white px-5 py-2.5 rounded-lg font-black text-[11px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 shadow-lg relative z-10 w-full sm:w-auto cursor-pointer"
                    >
                      {btn.label} <Download size={14} />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Info Card */}
          <div className="w-fit sm:w-[170px] lg:w-[165px]">
            <div className="bg-white/80 backdrop-blur-md px-3.5 py-3 lg:py-3.5 rounded-xl shadow-xl border border-white/60 flex flex-col gap-2 lg:gap-2.5 w-full">
              {/* Date */}
              <div className="flex items-center lg:items-start gap-2">
                <Calendar className="text-[#4B1426] shrink-0" size={20} strokeWidth={1.5} />
                <div className="flex flex-col text-left">
                  <h3 className="text-base md:text-lg font-bold text-[#4B1426] leading-none m-0 p-0">
                    {hero.eventCard.dateRange}
                  </h3>
                  <span className="text-[9px] font-semibold text-[#4B1426] uppercase tracking-wide mt-0.5 m-0 p-0">
                    {hero.eventCard.monthYear}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center lg:items-start gap-2">
                <MapPin className="text-[#4B1426] shrink-0" size={20} strokeWidth={1.5} />
                <div className="flex flex-col text-left">
                  <h3 className="text-[10px] font-bold text-[#1b5e20] leading-tight uppercase m-0 p-0">
                    {hero.eventCard.locationTitle}
                  </h3>
                  <span className="text-[9px] font-semibold text-[#1b5e20] uppercase tracking-tight m-0 p-0">
                    {hero.eventCard.locationSub}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-slate-200/80" />

              {/* Quote */}
              <div className="text-left lg:text-center flex flex-col gap-0.5 m-0 p-0">
                {hero.eventCard.quoteLines.map((line, qIdx) => (
                  <span
                    key={qIdx}
                    className="font-semibold text-[9.5px] leading-tight m-0 p-0"
                    style={{ color: line.color }}
                  >
                    {line.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default HeroSection;
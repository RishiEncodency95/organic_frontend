"use client";
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { CalendarDays, MapPin, ArrowRight, Hand, Handshake } from "lucide-react";
import bannerImg from "@/app/assets/participate/msme/home-banner.webp";
import leafImg from "@/app/assets/icons/leafs.png";
import SectionContainer from "@/app/components/layout/SectionContainer";
import handShake from "@/app/assets/participate/msme/handshake.png";
import Image from "next/image";
import { API_URL, SERVER_URL } from "@/lib/api";

interface MsmePmsBannerProps {
  eligibilityHref?: string;
  supportHref?: string;
}

const resolveImageUrl = (src: string): string => {
  if (!src) return src;
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) return src;
  return `${SERVER_URL}${src.startsWith("/") ? "" : "/"}${src}`;
};

const Sparkle = ({ style, color = "#F2B40E", shadow }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "13px",
      color,
      textShadow: shadow ? `0 0 6px ${shadow}` : undefined,
      animation: "sparkleAnim 3.2s ease-in-out infinite",
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

interface MsmeBannerData {
  image: string;
  imageAlt: string;
  category: string;
  titlePrimary: string;
  titleSecondary: string;
  subtitle: string;
  description: string;
  date: string;
  location: string;
  buttonLabel: string;
  buttonHref: string;
  secondaryButtonLabel: string;
  secondaryButtonHref: string;
}

const DEFAULT_BANNER_DATA: MsmeBannerData = {
  image: "",
  imageAlt: "MSME PMS Scheme",
  category: "MSME procurement & marketing support",
  titlePrimary: "MSME PMS Scheme",
  titleSecondary: "Exhibition Support",
  subtitle: "Exhibit. Connect. Grow with Government Support",
  description:
    "Eligible Micro & Small Enterprises can explore financial assistance for participation in Bharat Organic Expo 2027 under the applicable Procurement & Marketing Support (PMS) Scheme.",
  date: "19-21 February 2027",
  location: "Hall 12, Bharat Mandapam, New Delhi",
  buttonLabel: "CHECK PMS ELIGIBILITY",
  buttonHref: "/participate/msme/eligibility-check",
  secondaryButtonLabel: "GET PMS SUPPORT",
  secondaryButtonHref: "tel:+9654900525",
};

const SPARKLE_SETS = {
  primary: [
    { color: "#4ade80", shadow: "#1b5e20", style: { top: "-12px", left: "50%", animationDelay: "0.2s" } },
  ],
  secondary: [
    { color: "#f97316", shadow: "#c2410c", style: { top: "-12px", left: "50%", animationDelay: "0s" } },
  ],
};

export default function MsmePmsBanner({
  eligibilityHref,
  supportHref,
}: MsmePmsBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<MsmeBannerData>(DEFAULT_BANNER_DATA);

  useEffect(() => {
    let isMounted = true;
    fetch(`${API_URL}/settings?website=Organicexpo`, { cache: "no-store" })
      .then((res) => res.json())
      .then((res) => {
        if (!isMounted) return;
        const sections = res?.data?.msmePage?.sections || res?.msmePage?.sections || [];
        const section = Array.isArray(sections) ? sections.find((s: any) => s.key === "msme-pms-banner") : null;
        if (!section) return;
        setData({
          image: section.image || DEFAULT_BANNER_DATA.image,
          imageAlt: section.imageAlt || DEFAULT_BANNER_DATA.imageAlt,
          category: section.eyebrow || DEFAULT_BANNER_DATA.category,
          titlePrimary: section.titlePrimary || DEFAULT_BANNER_DATA.titlePrimary,
          titleSecondary: section.titleSecondary || DEFAULT_BANNER_DATA.titleSecondary,
          subtitle: section.subtitle || DEFAULT_BANNER_DATA.subtitle,
          description: section.description || DEFAULT_BANNER_DATA.description,
          date: section.date || DEFAULT_BANNER_DATA.date,
          location: section.location || DEFAULT_BANNER_DATA.location,
          buttonLabel: section.buttonLabel || DEFAULT_BANNER_DATA.buttonLabel,
          buttonHref: section.buttonHref || DEFAULT_BANNER_DATA.buttonHref,
          secondaryButtonLabel: section.secondaryButtonLabel || DEFAULT_BANNER_DATA.secondaryButtonLabel,
          secondaryButtonHref: section.secondaryButtonHref || DEFAULT_BANNER_DATA.secondaryButtonHref,
        });
      })
      .catch((err) => console.error("Failed to load MSME PMS banner:", err));
    return () => {
      isMounted = false;
    };
  }, []);

  // Text content renders statically now — no entrance animation on headings, subtitle,
  // description, meta row or buttons. The sparkle twinkle and button shimmer are separate
  // CSS keyframe effects below and are intentionally kept.

  return (
    <>
      <style>{`
        @keyframes sparkleAnim {
          0%   { opacity:0; transform:scale(0.5) translateY(0); }
          40%  { opacity:1; transform:scale(1.2) translateY(-4px); }
          80%  { opacity:0.5; transform:scale(0.9) translateY(-6px); }
          100% { opacity:0; transform:scale(0.5) translateY(-8px); }
        }
        @keyframes shimmerHero {
          0%, 25% { transform: translateX(0) skewX(-20deg); }
          40%, 100% { transform: translateX(450%) skewX(-20deg); }
        }
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
          animation: shimmerHero 6s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden bg-white border-b-4 border-[#ea580c]"
      >
        {/* Background Image with Ken Burns zoom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={data.image ? resolveImageUrl(data.image) : bannerImg}
            alt={data.imageAlt || "MSME PMS Scheme"}
            fill
            className="hero-bg-img w-full h-full object-cover"
          />
        </div>

        {/* Mobile-only gradient overlay for text readability (desktop remains untouched) */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-white/95 via-white/85 to-transparent/30 md:hidden pointer-events-none" />

        <div className="relative z-20 w-full h-full flex flex-col justify-center py-12 md:py-6 [perspective:800px]">
          <SectionContainer>
            {(() => {
              const titleWords = data.titlePrimary.trim().split(/\s+/);
              const titlePrefix = titleWords.slice(0, -1).join(" ");
              const titleLastWord = titleWords[titleWords.length - 1] || "";
              const expoMarker = "Bharat Organic Expo 2027";
              const descIdx = data.description.indexOf(expoMarker);
              const descBefore = descIdx >= 0 ? data.description.slice(0, descIdx) : data.description;
              const descAfter = descIdx >= 0 ? data.description.slice(descIdx + expoMarker.length) : "";
              const ctaButtons = [
                {
                  id: "eligibility",
                  label: data.buttonLabel,
                  href: eligibilityHref || data.buttonHref,
                  isExternal: true,
                  variant: "primary" as const,
                  sparkles: SPARKLE_SETS.primary,
                },
                {
                  id: "support",
                  label: data.secondaryButtonLabel,
                  href: supportHref || data.secondaryButtonHref,
                  isExternal: false,
                  variant: "secondary" as const,
                  sparkles: SPARKLE_SETS.secondary,
                },
              ];

              return (
              <div className="max-w-2xl text-left mt-6 md:mt-0 space-y-3.5 md:space-y-4 w-full bg-white/75 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-4 sm:p-6 md:p-0 rounded-2xl border border-white/60 md:border-none shadow-lg md:shadow-none">
                <div className="flex flex-col items-start justify-start">
                  <div className="w-full text-left mt-4">

                    {/* Tagline */}
                    <div className=" mb-1 flex gap-2">
                      <Image src={handShake} alt="Handshake" className="w-12 h-8" />
                      <span className="text-[#1b5e20] text-[12px] md:text-[15px] lg:text-[16px] font-semibold uppercase text-left">
                        {data.category}
                        <span className="block h-[2.5px] bg-[#c2410c]/20 shrink-0" />
                      </span>
                    </div>

                    {/* Heading */}
                    <h1
                      className="text-2xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold leading-[1.05] mb-3 md:mb-4 text-left font-poppins"
                      style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                    >
                      <span className="block overflow-hidden">
                        <span ref={line1Ref} style={{ display: "block" }} className="text-[#1b5e20] text-2xl sm:text-4xl md:text-5xl lg:text-[58px] font-semibold tracking-tight">
                          {titlePrefix} <span className="capitalize">{titleLastWord}</span>
                        </span>
                      </span>
                      <span className="block overflow-hidden">
                        <span ref={line2Ref} style={{ display: "block" }} className="text-[#1b5e20] text-[20px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-semibold mb-1 uppercase">
                          {data.titleSecondary}
                        </span>
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <div className="gap-2.5">
                      <span className=" font-semibold text-[12px] sm:text-[14px] md:text-[16px] uppercase">
                        {data.subtitle}
                      </span>
                      <div className="w-8 md:w-12 h-1 bg-[#d4a017] rounded-full shrink-0"></div>
                    </div>

                    {/* Description */}
                    <p
                      ref={subtitleRef}
                      className="text-[#131730] font-semibold text-[12.5px] sm:text-[13.5px] md:text-[15px] leading-relaxed max-w-lg mt-2 font-inter"
                    >
                      {descIdx >= 0 ? (
                        <>{descBefore}<span className="text-[#1b5e20]">{expoMarker}</span>{descAfter}</>
                      ) : (
                        data.description
                      )}
                    </p>

                    {/* Date & Venue */}
                    <div
                      ref={metaRef}
                      className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5 sm:gap-4 mt-2 md:mt-2 mb-4 md:mb-4 text-[#4B1426] text-xs sm:text-sm md:text-[15px] font-semibold"
                    >
                      <div className="flex items-center gap-2">
                        <CalendarDays size={17} className="shrink-0 text-[#ea580c]" />
                        <span>{data.date}</span>
                      </div>
                      <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30"></div>
                      <div className="flex items-center gap-2">
                        <MapPin size={17} className="shrink-0 text-[#ea580c]" />
                        <span>{data.location}</span>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div ref={btnsRef} className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-3">
                      {ctaButtons.map((btn) => {
                        const targetHref = btn.href;
                        return (
                          <div key={btn.id} className="relative w-fit sm:w-auto">
                            {btn.sparkles.map((sp, idx) => (
                              <Sparkle key={idx} color={sp.color} shadow={sp.shadow} style={sp.style} />
                            ))}
                            <Link
                              href={targetHref}
                              target={btn.isExternal ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className={
                                btn.variant === "primary"
                                  ? "blue-btn-hero text-white px-5 py-2.5 rounded-full font-semibold text-[11px] md:text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md relative z-10 w-full sm:w-auto"
                                  : "group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-[11px] md:text-[12px] uppercase tracking-wider text-white transition-all active:scale-95 shadow-xl z-10 w-full sm:w-auto overflow-hidden"
                              }
                              style={
                                btn.variant === "secondary"
                                  ? {
                                      background: "linear-gradient(135deg, #ea580c, #c2410c)",
                                      boxShadow: "0 4px 20px rgba(194,65,12,0.5), 0 0 12px rgba(249,115,22,0.3)",
                                    }
                                  : undefined
                              }
                            >
                              {btn.variant === "secondary" && (
                                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                              )}
                              {btn.label} <ArrowRight size={14} className={btn.variant === "secondary" ? "group-hover:translate-x-1 transition-transform" : ""} />
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              );
            })()}
          </SectionContainer>
        </div>
      </section>
    </>
  );
}


"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote, ChevronRight, MapPin, Play, ArrowRight,
  Globe, Users, Handshake, Leaf, Building2, Store, Calendar, HeartPulse, Mic
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { websiteApi } from '@/lib/api';
import SectionContainer from '../layout/SectionContainer';

import testImg from "../../assets/banner/testbg.webp";
import leafPng from "../../assets/home/leaf.webp";

// ─── Initials Generator ───
const getInitials = (name: string) => {
  if (!name || typeof name !== "string") return "";
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  const cleanWords = words.filter(w => !['dr.', 'dr', 'mr.', 'mr', 'ms.', 'ms', 'prof.', 'prof'].includes(w.toLowerCase()));
  const targetWords = cleanWords.length >= 2 ? cleanWords : words;
  const first = targetWords[0][0];
  const last = targetWords[targetWords.length - 1][0];
  return (first + last).toUpperCase();
};

// ─── Top Initials Circle ───
const InitialsCircle = ({ name, color, logo }: { name: string; color: string; logo?: string }) => (
  <div
    className="w-10 h-10 md:w-14 md:h-14 rounded-full border-[2px] md:border-[3px] border-white flex items-center justify-center font-poppins font-bold text-[12px] md:text-base shadow-md bg-white uppercase tracking-wider overflow-hidden"
    style={{
      boxShadow: "0 4px 14px rgba(0,0,0,0.13), 0 0 0 2px #e2e8f0",
      color: color || '#1b5e20',
      background: `linear-gradient(135deg, #ffffff 0%, ${color || '#1b5e20'}12 100%)`
    }}
  >
    {logo ? (
      <img src={logo} alt={name} className="w-full h-full object-cover" />
    ) : (
      getInitials(name)
    )}
  </div>
);

// ─── Dynamic Data Configuration ───
const sectionData = {
  heroBanner: {
    badge: "Industry Testimonials",
    titlePrefix: "WHAT GLOBAL EXPERTS SAY",
    titleHighlight: "ABOUT BHARAT ORGANIC EXPO",
    subtitle: (
      <>
        Bridging the gap between <span className="text-[#1b5e20]">Organic Buyers</span> and <span className="text-[#1b5e20]">Sustainable Brands</span>
      </>
    ),
    description: (
      <>
        Trusted by leaders across natural & organic sectors. Bharat Organic Expo serves <br className="hidden sm:block" />
        as the premier platform bridging the gap between sustainable brands, farmers, <br className="hidden sm:block" />
        and global buyers. We are committed to fostering B2B connections and <br className="hidden sm:block" />
        transforming the <span className="font-bold text-[#1b5e20]">organic business landscape</span> globally.
      </>
    )
  },
  sectionDividerText: "MORE INSPIRING STORIES",
  testimonials: [],
  videos: []
};


// ─── Testimonial Card Component ───
const TestimonialCard = ({ item, expandedCardId, setExpandedCardId }: { item: any; expandedCardId: string | null; setExpandedCardId: (id: string | null) => void }) => {
  const isExpanded = expandedCardId === item._id;
  const setIsExpanded = (val: boolean) => {
    setExpandedCardId(val ? item._id : null);
  };
  const CHAR_LIMIT = 155;
  const quoteText = item.quote || "";
  const isLong = quoteText.length > CHAR_LIMIT;

  return (
    <div
      className="relative flex flex-col w-[200px] md:w-[270px] flex-shrink-0 font-inter pt-[22px] md:pt-[32px]"
    >
      {/* ── Floating Logo Circle ── */}
      <div
        className="absolute top-0 left-1/2 z-20 flex items-center justify-center"
        style={{ transform: 'translateX(-50%)' }}
      >
        <InitialsCircle
          name={item.company1}
          color={item.color || '#1b5e20'}
          logo={item.logo}
        />
      </div>

      {/* ── Card Body ── */}
      <div
        className="relative bg-white rounded-[16px] md:rounded-[22px] border border-slate-100 flex flex-col overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500 h-[210px] md:h-[310px]"
        style={{
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        }}
      >
        {/* ── Expanded Full-Text Overlay ── */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 bg-white z-[60] flex flex-col rounded-[22px]"
              style={{ boxShadow: "inset 0 0 0 2px #e2e8f0" }}
            >
              {/* Expanded Header */}
              <div
                className="flex items-center justify-between px-4 py-3 border-b border-slate-100 flex-shrink-0"
                style={{ background: "linear-gradient(90deg, #f8fdf5 0%, #fff8f3 100%)" }}
              >
                <div className="flex items-center gap-1.5">
                  <Quote className="w-4 h-4 text-[#458a16] transform -scale-x-100" />
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Full Review</span>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
                  className="flex items-center gap-1 text-[10.5px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full transition-all duration-200"
                  style={{
                    color: '#23471d',
                    background: '#f0faf0',
                    border: '1px solid #c6e6c6',
                  }}
                >
                  ✕ Close
                </button>
              </div>

              {/* Expanded Content */}
              <div className="flex-1 overflow-y-auto px-4 py-3 font-inter">
                <p className="text-slate-800 text-[13px] font-medium leading-relaxed">
                  {item.quote}
                </p>
              </div>

              {/* Company info footer */}
              <div
                className="flex items-center gap-2.5 px-4 py-3 border-t border-slate-100 flex-shrink-0 font-inter"
                style={{ background: "#fafafa" }}
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-black flex-shrink-0" style={{ color: item.color || '#23471d' }}>
                  {item.company1?.substring(0, 2)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-[12px] leading-tight" style={{ color: item.color || '#23471d' }}>
                    {item.company1}
                  </div>
                  {item.company2 && (
                    <div className="font-semibold text-[10.5px] leading-tight text-[#4B1426] mt-0.5">
                      {item.company2}
                    </div>
                  )}
                  <div className="flex items-center gap-1 text-slate-500 text-[10px] mt-1">
                    <MapPin className="w-2.5 h-2.5 text-[#d26019] flex-shrink-0" />
                    {item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Top: Company Info (below floating logo) ── */}
        <div className="pt-[24px] md:pt-[50px] px-2 md:px-4 pb-0 text-center flex-shrink-0 min-h-[54px] md:min-h-[86px]">
          {/* Company 1 Slot */}
          <div className="min-h-[14px] md:min-h-[18px] mb-0.5">
            <div className="font-bold text-[10px] md:text-[13px] leading-tight px-1 flex items-center justify-center" style={{ color: item.color || '#23471d' }}>
              <span className={item.company1.length > 25 ? "truncate max-w-[180px] md:max-w-[220px]" : ""}>{item.company1}</span>
            </div>
          </div>

          {/* Company 2 / Title Slot */}
          <div className="min-h-[12px] md:min-h-[18px]">
            <div className="font-bold text-[8px] md:text-[11.5px] text-[#4B1426] leading-tight px-1 flex items-center justify-center">
              {item.company2 ? (
                <span className={item.company2.length > 30 ? "truncate max-w-[180px] md:max-w-[220px]" : ""}>{item.company2}</span>
              ) : ""}
            </div>
          </div>

          {/* Location Slot */}
          <div className="flex items-center justify-center gap-1 text-slate-500 text-[8px] md:text-[10.5px] mt-0.5 md:mt-1.5">
            <MapPin className="w-2.5 h-2.5 md:w-3 md:h-3 flex-shrink-0 text-[#d26019]" />
            <span className="truncate max-w-[160px] md:max-w-[180px]">{item.location}</span>
          </div>
        </div>

        {/* ── Gradient Divider ── */}
        <div
          className="h-[1px] md:h-[1.5px] mx-3 md:mx-4 mt-1.5 md:mt-2.5 rounded-full flex-shrink-0"
          style={{ background: `linear-gradient(90deg, ${item.color || '#23471d'}, #d26019)` }}
        />

        {/* ── Quote Section ── */}
        <div className="flex flex-col flex-1 px-3 md:px-4 pt-1.5 md:pt-2.5 pb-2 md:pb-3 relative min-h-0 font-inter">
          <Quote className="w-2.5 h-2.5 md:w-4 md:h-4 text-[#458a16] transform -scale-x-100 opacity-70 mb-0.5 md:mb-1 flex-shrink-0" />

          <div className="flex-1 overflow-hidden">
            <p className="text-slate-700 text-[9px] md:text-[13px] font-medium leading-[1.2] md:leading-relaxed">
              {isLong
                ? `${quoteText.substring(0, 110).trim()}…`
                : quoteText
              }
            </p>
          </div>

          {/* ── "Read More" Button ── */}
          <div className="mt-auto pt-1 md:pt-2 flex-shrink-0">
            {isLong && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="flex items-center gap-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest px-2 md:px-2.5 py-0.5 md:py-1 rounded-full transition-all duration-200 hover:gap-1.5"
                style={{
                  color: '#23471d',
                  background: 'linear-gradient(90deg, #eaf5e2 0%, #fff6ee 100%)',
                  border: '1px solid #c6e6c6',
                }}
              >
                Read more
                <span className="text-[7.5px] md:text-[10px]">→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Video Card Component ───
const VideoCard = ({ item, onSelectVideo }: { item: any; onSelectVideo: (item: any) => void }) => {
  const defaultColors = [
    "linear-gradient(160deg,#4a5568,#1a202c)",
    "linear-gradient(160deg,#3b5ea6,#1a2d5a)",
    "linear-gradient(160deg,#2d5a2d,#1a3a1a)"
  ];
  const bg = item.overlayGradient || defaultColors[item._id ? item._id.charCodeAt(0) % defaultColors.length : 0];
  const showOverlay = item.showOverlay !== false;

  let displayThumb = item.thumbnail;
  if (!displayThumb || displayThumb.includes("unsplash.com")) {
    const ytId = extractYouTubeId(item.videoUrl);
    if (ytId) {
      displayThumb = `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    }
  }

  return (
    <div
      onClick={() => onSelectVideo(item)}
      className="relative rounded-xl md:rounded-2xl overflow-hidden flex-1 min-w-full sm:min-w-[280px] md:min-w-0 h-[120px] md:h-52 group cursor-pointer shadow-lg font-inter bg-slate-900"
    >
      <div className="absolute inset-0">
        {displayThumb ? (
          <img
            src={displayThumb}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              showOverlay ? "opacity-80 group-hover:opacity-100" : "opacity-100"
            }`}
            alt={item.title || ""}
          />
        ) : (
          <div className="w-full h-full" style={{ background: bg }} />
        )}
      </div>

      {/* Dark Overlay (Controlled dynamically by user in Admin) */}
      {showOverlay && (
        <div
          className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60"
          style={{ background: bg, opacity: 0.72 }}
        />
      )}

      {/* Play Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <Play className="w-3.5 h-3.5 md:w-5 md:h-5 fill-[#4f8519] text-[#4f8519] ml-0.5" />
        </div>
      </div>

      {/* Bottom Title & Location */}
      <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent">
        <div className="text-white font-semibold text-[10px] md:text-sm truncate font-poppins">{item.title}</div>
        {item.location ? (
          <div className="text-white/80 text-[8.5px] md:text-[11px] font-medium mt-0 md:mt-0.5">{item.location}</div>
        ) : null}
      </div>
    </div>
  );
};

// ─── SVG Lineart Gradient Section Header ───
const SectionDivider = ({ text }: { text: string }) => (
  <div className="flex items-center gap-1.5 md:gap-3 px-2 md:px-16 pt-2 md:pt-5 pb-0 max-w-[1400px] mx-auto">
    <svg className="flex-1 h-3 md:h-5 overflow-visible" viewBox="0 0 300 18" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lg-left" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="65%" stopColor="#22c55e" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#23471d" />
        </linearGradient>
        <linearGradient id="lg-left2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor="#93c5fd" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path d="M0 9 Q30 4 60 9 Q90 14 120 9 Q150 4 180 9 Q210 13 240 9 Q265 5 300 9"
        fill="none" stroke="url(#lg-left)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M0 12 Q40 8 80 12 Q120 16 160 12 Q200 8 240 11 Q265 13 300 11"
        fill="none" stroke="url(#lg-left2)" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="293" cy="9" r="2.5" fill="#23471d" opacity="0.6" />
    </svg>

    <h2 className="text-center font-bold text-[10px] md:text-[14px] text-[#131730] tracking-widest uppercase font-poppins shrink-0 px-1">
      {text}
    </h2>

    <svg className="flex-1 h-3 md:h-5 overflow-visible" viewBox="0 0 300 18" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lg-right" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="25%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="65%" stopColor="#22c55e" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#23471d" />
        </linearGradient>
        <linearGradient id="lg-right2" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="40%" stopColor="#93c5fd" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <path d="M300 9 Q270 4 240 9 Q210 14 180 9 Q150 4 120 9 Q90 13 60 9 Q35 5 0 9"
        fill="none" stroke="url(#lg-right)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M300 12 Q260 8 220 12 Q180 16 140 12 Q100 8 60 11 Q35 13 0 11"
        fill="none" stroke="url(#lg-right2)" strokeWidth="0.8" strokeLinecap="round" />
      <circle cx="7" cy="9" r="2.5" fill="#23471d" opacity="0.6" />
    </svg>
  </div>
);

// Helper: Robust YouTube ID Extractor (supports Shorts, Watch, Live, Embed, youtu.be, and query params)
const extractYouTubeId = (url: string): string | null => {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (/^[a-zA-Z0-9_-]{11}$/.test(trimmed)) return trimmed;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=|shorts\/|live\/)|youtu\.be\/)([^"&?/\s]{11})/i;
  const match = trimmed.match(regExp);
  if (match && match[1]) return match[1];
  try {
    const parsed = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    if (parsed.searchParams.has("v")) {
      const v = parsed.searchParams.get("v");
      if (v && v.length === 11) return v;
    }
    const parts = parsed.pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    if (last && last.length === 11) return last;
  } catch {}
  return null;
};

// ─── Main Component ───
const TestimonialsCarousel = () => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [testimonialsList, setTestimonialsList] = useState<any[]>([]);
  const [videosList, setVideosList] = useState<any[]>([]);
  const [activeVideoModal, setActiveVideoModal] = useState<any | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchTestimonials = async () => {
      try {
        const res = await websiteApi.getTestimonialsCarousel();
        const serverData = res?.data || res;
        if (isMounted && serverData) {
          if (Array.isArray(serverData.testimonials)) {
            const active = serverData.testimonials.filter((t: any) => t.status !== "Hidden");
            setTestimonialsList(active);
          }
          if (Array.isArray(serverData.videos)) {
            const activeVids = serverData.videos.filter((v: any) => v.status !== "Hidden");
            setVideosList(activeVids);
          }
        }
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      }
    };
    fetchTestimonials();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSelectVideo = (item: any) => {
    if (item.videoType === "instagram" || (item.videoUrl && item.videoUrl.includes("instagram.com"))) {
      if (item.videoUrl) {
        window.open(item.videoUrl, "_blank");
        return;
      }
    }
    const ytId = extractYouTubeId(item.videoUrl);
    if (ytId || (item.videoUrl && (item.videoUrl.includes("youtube.com") || item.videoUrl.includes("youtu.be")))) {
      setActiveVideoModal(item);
    } else if (item.videoType === "upload" && item.videoUrl) {
      setActiveVideoModal(item);
    } else if (item.videoUrl) {
      window.open(item.videoUrl, "_blank");
    }
  };

  const total = testimonialsList.length;
  const totalVideos = videosList.length;

  return (
    <section className="relative bg-white overflow-hidden py-4">
      <style>{`
        @keyframes goldShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-4px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-6px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-8px); }
        }
        .golden-btn-premium {
          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(255,200,0,0.3), 0 4px 15px rgba(255,165,0,0.25);
          position: relative;
          overflow: hidden;
        }
        .golden-btn-premium::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
        @keyframes marqueeScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marqueeScrollRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .marquee-wrapper-cards {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeScrollRight 45s linear infinite;
        }
        .marquee-wrapper-cards:hover {
          animation-play-state: paused;
        }
        .marquee-wrapper-videos {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: marqueeScroll 30s linear infinite;
        }
        .marquee-wrapper-videos:hover {
          animation-play-state: paused;
        }
        .teal-btn {
          background: linear-gradient(135deg, #0A7C6E 0%, #0db39e 40%, #0A7C6E 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(10,124,110,0.45), 0 4px 20px rgba(13,179,158,0.35);
          position: relative;
          overflow: hidden;
        }
        .teal-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.45), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
      `}</style>

      {/* ─── TOP HERO BANNER ─── */}
      <div className="relative w-full min-h-[260px] md:min-h-[380px] flex items-center overflow-hidden py-6 md:py-4">
        <div className="absolute inset-0 z-0">
          <Image
            src={testImg}
            fill
            priority
            quality={75}
            sizes="100vw"
            className="w-full h-full object-cover opacity-60 md:opacity-100"
            style={{ objectPosition: "center 40%" }}
            alt="Bharat Organic Expo Background"
          />
          <div className="absolute inset-0 bg-white/40 md:hidden" />
        </div>

        <div className="w-full px-2 md:px-4 lg:px-14 relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-12">
          <div className="flex flex-col justify-center w-full max-w-3xl text-left font-inter">

            {/* Badge */}
            <div className="flex items-center justify-start gap-1.5 md:gap-2 mb-1.5 md:mb-3">
              <div className="w-5 h-5 md:w-7 md:h-7 rounded-md md:rounded-lg bg-[#1b5e20] flex items-center justify-center shadow">
                <Quote className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 text-white" />
              </div>
              <span className="text-[#1b5e20] font-bold text-[10px] md:text-[14px] tracking-wide uppercase font-poppins">
                {sectionData.heroBanner.badge}
              </span>
            </div>

            {/* Title with textShadow and colors #1b5e20 / #4B1426 */}
            <h1
              className="text-[17px] sm:text-3xl md:text-[36px] lg:text-[40px] font-semibold leading-[1.15] mb-1.5 md:mb-3 text-left font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              <span className="block text-[#1b5e20] font-semibold mb-0 md:mb-0.5">
                {sectionData.heroBanner.titlePrefix}
              </span>
              <span className="block text-[#4B1426] font-semibold tracking-tight md:whitespace-nowrap">
                {sectionData.heroBanner.titleHighlight}
              </span>
            </h1>



            {/* Subtitle */}
            <p className="text-[#131730] text-[11px] md:text-base max-w-3xl mb-1.5 md:mb-3 font-bold leading-snug md:leading-relaxed text-left">
              {sectionData.heroBanner.subtitle}
            </p>

            {/* Description */}
            <p className="text-[#131730] text-[10px] md:text-[15px] max-w-2xl mb-2 md:mb-4 font-semibold leading-tight md:leading-relaxed text-justify">
              {sectionData.heroBanner.description}
            </p>
          </div>
        </div>
      </div>

      {/* ─── SECTION HEADER & TESTIMONIAL CARDS MARQUEE (Right Scrolling) ─── */}
      {testimonialsList.length > 0 && (
        <>
          <SectionDivider text={sectionData.sectionDividerText} />

          <div className="relative pt-3 md:pt-8 pb-3 md:pb-6">
            <div className="w-full px-2 md:px-4 lg:px-14 relative z-10">
              <div className="w-full overflow-hidden">
                <div
                  className="marquee-wrapper-cards gap-3 md:gap-6"
                  style={{ animationDuration: `${Math.max(testimonialsList.length * 10, 25)}s` }}
                >
                  {[1, 2, 3, 4].map((set) => (
                    <div key={set} className="flex gap-3 md:gap-6">
                      {testimonialsList.map((item: any, i: number) => (
                        <div key={`${set}-${item._id || i}`} className="flex-shrink-0">
                          <TestimonialCard
                            item={item}
                            expandedCardId={expandedCardId}
                            setExpandedCardId={setExpandedCardId}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ─── VIDEO SECTION ─── */}
      {videosList.length > 0 && (
        <div className="relative pt-1 md:pt-2 pb-1 md:pb-2">
          <div className="absolute -left-10 bottom-0 w-32 h-32 md:w-44 md:h-44 opacity-20 pointer-events-none rotate-45 select-none z-0">
            <img src={leafPng.src} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="px-2 md:px-4 lg:px-14 relative z-10">
            <div className="flex flex-col md:flex-row items-stretch">
              <div className="w-full overflow-hidden">
                <div
                  className="marquee-wrapper-videos gap-2 md:gap-4"
                  style={{ animationDuration: `${Math.max(totalVideos * 10, 20)}s` }}
                >
                  {(totalVideos <= 2 ? [1, 2, 3, 4, 5, 6, 7, 8] : [1, 2, 3, 4]).map((set) => (
                    <div key={set} className="flex gap-2 md:gap-4">
                      {videosList.map((v: any, i: number) => (
                        <div key={`${set}-${v._id || i}`} className="w-[200px] md:w-[320px] flex-shrink-0">
                          <VideoCard item={v} onSelectVideo={handleSelectVideo} />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -right-12 bottom-4 w-36 h-36 md:w-48 md:h-48 opacity-20 pointer-events-none -rotate-12 select-none z-0">
            <img src={leafPng.src} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      )}

      {/* ─── VIDEO LIGHTBOX MODAL ─── */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-[999] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 font-inter"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition cursor-pointer"
            >
              ✕
            </button>

            {extractYouTubeId(activeVideoModal.videoUrl) ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${extractYouTubeId(activeVideoModal.videoUrl)}?autoplay=1&rel=0`}
                title={activeVideoModal.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <video
                src={activeVideoModal.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      )}

    </section>
  );

};

export default TestimonialsCarousel;

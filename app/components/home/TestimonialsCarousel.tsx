"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote, ChevronRight, MapPin, Play, ArrowRight,
  Globe, Users, Handshake, Leaf, Building2, Store, Calendar, HeartPulse, Mic
} from 'lucide-react';
import Link from 'next/link';
import SectionContainer from '../layout/SectionContainer';

import testImg from "../../assets/banner/testbg.png";
import leafPng from "../../assets/home/leaf.webp";

// ─── Sparkle component for golden button ───
const Sparkle = ({ style }: { style?: React.CSSProperties }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '12px',
      color: '#fff176',
      textShadow: '0 0 6px gold, 0 0 12px gold',
      animation: 'sparkleAnim 1.6s ease-in-out infinite',
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

// ─── Sparkle component for teal button ───
const TealSparkle = ({ style }: { style?: React.CSSProperties }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '12px',
      color: '#5ef5e0',
      textShadow: '0 0 6px #0A7C6E, 0 0 12px #0fe8d0',
      animation: 'sparkleAnim 1.6s ease-in-out infinite',
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

// ─── Initials Generator ───
const getInitials = (name: string) => {
  if (!name) return "";
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
const InitialsCircle = ({ name, color }: { name: string; color: string }) => (
  <div
    className="w-14 h-14 rounded-full border-[3px] border-white flex items-center justify-center font-poppins font-bold text-base shadow-md bg-white uppercase tracking-wider"
    style={{
      boxShadow: "0 4px 14px rgba(0,0,0,0.13), 0 0 0 2px #e2e8f0",
      color: color || '#1b5e20',
      background: `linear-gradient(135deg, #ffffff 0%, ${color}12 100%)`
    }}
  >
    {getInitials(name)}
  </div>
);


const TESTIMONIALS_DATA = [
  {
    _id: "1",
    company1: "Achaspati Kulwant",
    company2: "Chancellor, University of Patanjali",
    location: "Haridwar",
    quote: "The change is organizing activities with a vision. I wish the project a great success. It's a wonderful initiative for sustainable future. We must all come together to ensure that our environment is protected and cherished by the coming generations, creating a harmonious balance.",
    color: "#1b5e20",
    logoText: "PATANJALI"
  },
  {
    _id: "2",
    company1: "Khyati Nayak",
    company2: "PRO – Gujarat Tourism",
    location: "Gujarat",
    quote: "This platform will open eyes of our new generations towards organic living. It provides a unique opportunity to learn from global experts. By adopting these sustainable methodologies, we can actively contribute to a greener ecosystem and promote healthier lifestyle choices.",
    color: "#d26019",
    logoText: "GUJARAT\nTOURISM"
  },
  {
    _id: "3",
    company1: "Mukesh Kumar",
    company2: "The Yogshala Head",
    location: "New Delhi",
    quote: "It made me realize the impact of holistic wellness in our daily decisions. Every small step taken today safeguards our natural resources. Whether it is choosing chemical-free products or supporting local farmers, these choices collectively lead to a monumental positive shift in society.",
    color: "#00643b",
    logoText: "YOGSHALA"
  },
  {
    _id: "4",
    company1: "Dr. Subramanian Swamy",
    company2: "Bharatiya Janata Party (BJP)",
    location: "New Delhi",
    quote: "The Yogshala Expo is a great step towards a healthier and self-reliant India. It beautifully bridges traditional wisdom with modern practices. The integration of Ayurveda into everyday life ensures that our citizens maintain not just physical strength but also mental and spiritual well-being.",
    color: "#23471d",
    logoText: "BJP\nINDIA"
  },
  {
    _id: "5",
    company1: "Qazhf Khan",
    company2: "Father of Kairana Model",
    location: "Kairana",
    quote: "The Yogshala Expo ensures honest and responsible contributions. The collective commitment shown here will build a robust organic market. We are witnessing an incredible movement where ethical farming and conscientious consumption are becoming the new standard for a thriving nation.",
    color: "#164429",
    logoText: "KAIRANA"
  }
];

const VIDEOS_DATA = [
  {
    _id: "v1",
    title: "Bharat Organic Expo 2027: A New Era for Sustainable Farming",
    location: "Bharat Mandapam, New Delhi",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
  },
  {
    _id: "v2",
    title: "Exhibitors Speak: B2B Growth & Global Buyer Connections",
    location: "New Delhi, India",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
  },
  {
    _id: "v3",
    title: "Industry Leaders Panel: Insights into Organic & Eco Markets",
    location: "Hall 12, New Delhi",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop"
  }
];


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
      className="relative flex flex-col w-[280px] md:w-[270px] flex-shrink-0 font-inter"
      style={{ paddingTop: '32px' }}
    >
      {/* ── Floating Logo Circle ── */}
      <div
        className="absolute top-0 left-1/2 z-20 flex items-center justify-center"
        style={{ transform: 'translateX(-50%)' }}
      >
        <InitialsCircle
          name={item.company1}
          color={item.color || '#1b5e20'}
        />
      </div>

      {/* ── Card Body ── */}
      <div
        className="relative bg-white rounded-[22px] border border-slate-100 flex flex-col overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500"
        style={{
          boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
          height: '310px',
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
                    <div className="font-semibold text-[10.5px] leading-tight opacity-80 mt-0.5" style={{ color: item.color || '#23471d' }}>
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
        <div className="pt-[50px] px-4 pb-0 text-center flex-shrink-0 min-h-[86px]">
          {/* Company 1 Slot */}
          <div className="min-h-[18px] mb-0.5">
            <div className="font-bold text-[13px] leading-tight px-1 flex items-center justify-center" style={{ color: item.color || '#23471d' }}>
              <span className={item.company1.length > 25 ? "truncate max-w-[220px]" : ""}>{item.company1}</span>
            </div>
          </div>

          {/* Company 2 / Title Slot */}
          <div className="min-h-[18px]">
            <div className="font-bold text-[11.5px] leading-tight px-1 opacity-90 flex items-center justify-center" style={{ color: item.color || '#23471d' }}>
              {item.company2 ? (
                <span className={item.company2.length > 30 ? "truncate max-w-[220px]" : ""}>{item.company2}</span>
              ) : ""}
            </div>
          </div>

          {/* Location Slot */}
          <div className="flex items-center justify-center gap-1 text-slate-500 text-[10.5px] mt-1.5">
            <MapPin className="w-3 h-3 flex-shrink-0 text-[#d26019]" />
            <span className="truncate max-w-[180px]">{item.location}</span>
          </div>
        </div>

        {/* ── Gradient Divider ── */}
        <div
          className="h-[1.5px] mx-4 mt-2.5 rounded-full flex-shrink-0"
          style={{ background: `linear-gradient(90deg, ${item.color || '#23471d'}, #d26019)` }}
        />

        {/* ── Quote Section ── */}
        <div className="flex flex-col flex-1 px-4 pt-2.5 pb-3 relative min-h-0 font-inter">
          <Quote className="w-4 h-4 text-[#458a16] transform -scale-x-100 opacity-70 mb-1 flex-shrink-0" />

          <div className="flex-1 overflow-hidden">
            <p className="text-slate-700 text-[13px] font-medium leading-relaxed">
              {isLong
                ? `${quoteText.substring(0, 125).trim()}…`
                : quoteText
              }
            </p>
          </div>

          {/* ── "Read More" Button ── */}
          <div className="mt-auto pt-2 flex-shrink-0">
            {isLong && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(true);
                }}
                className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full transition-all duration-200 hover:gap-1.5"
                style={{
                  color: '#23471d',
                  background: 'linear-gradient(90deg, #eaf5e2 0%, #fff6ee 100%)',
                  border: '1px solid #c6e6c6',
                }}
              >
                Read more
                <span className="text-[10px]">→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Video Card Component ───
const VideoCard = ({ item }: { item: any }) => {
  const colors = [
    "linear-gradient(160deg,#4a5568,#1a202c)",
    "linear-gradient(160deg,#3b5ea6,#1a2d5a)",
    "linear-gradient(160deg,#2d5a2d,#1a3a1a)"
  ];
  const bg = colors[item._id ? item._id.charCodeAt(0) % colors.length : 0];

  return (
    <div
      onClick={() => window.open(item.videoUrl, '_blank')}
      className="relative rounded-2xl overflow-hidden flex-1 min-w-full sm:min-w-[280px] md:min-w-0 h-56 md:h-52 group cursor-pointer shadow-lg font-inter"
    >
      <div className="absolute inset-0" style={{ background: bg }}>
        {item.thumbnail && (
          <img src={item.thumbnail} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" alt="" />
        )}
      </div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
          <Play className="w-5 h-5 fill-[#4f8519] text-[#4f8519] ml-0.5" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
        <div className="text-white font-semibold text-xs md:text-sm truncate font-poppins">{item.title}</div>
        <div className="text-white/70 text-[11px] font-medium mt-0.5">{item.location}</div>
      </div>
    </div>
  );
};

// ─── SVG Lineart Gradient Section Header ───
const SectionDivider = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 px-4 md:px-16 pt-5 pb-0 max-w-[1400px] mx-auto">
    <svg className="flex-1 h-5 overflow-visible" viewBox="0 0 300 18" preserveAspectRatio="none">
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

    <div className="flex items-center gap-2 whitespace-nowrap">
      <Leaf className="w-3.5 h-3.5 text-[#23471d]" />
      <span className="font-bold text-[#6E1A37] text-[13px] md:text-[15px] tracking-[0.12em] uppercase font-poppins">
        {text}
      </span>
      <Leaf className="w-3.5 h-3.5 text-[#d26019]" />
    </div>

    <svg className="flex-1 h-5 overflow-visible" viewBox="0 0 300 18" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lg-right" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d26019" />
          <stop offset="35%" stopColor="#22c55e" stopOpacity="0.75" />
          <stop offset="75%" stopColor="#3b82f6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="lg-right2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#93c5fd" stopOpacity="0.18" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <circle cx="7" cy="9" r="2.5" fill="#d26019" opacity="0.6" />
      <path d="M0 9 Q35 13 60 9 Q90 5 120 9 Q150 14 180 9 Q210 4 240 9 Q270 14 300 9"
        fill="none" stroke="url(#lg-right)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M0 11 Q35 9 80 12 Q120 15 160 11 Q200 7 240 11 Q260 13 300 12"
        fill="none" stroke="url(#lg-right2)" strokeWidth="0.8" strokeLinecap="round" />
    </svg>
  </div>
);

// ─── Main Component ───
const TestimonialsCarousel = () => {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const total = TESTIMONIALS_DATA.length;
  const totalVideos = VIDEOS_DATA.length;

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
      <div className="relative w-full min-h-[420px] md:min-h-[380px] flex items-center overflow-hidden py-10 md:py-4">
        <div className="absolute inset-0 z-0">
          <img
            src={testImg.src}
            className="w-full h-full object-cover opacity-60 md:opacity-100"
            style={{ objectPosition: "center 40%" }}
            alt="Bharat Organic Expo Background"
          />
          <div className="absolute inset-0 bg-white/40 md:hidden" />
        </div>

        <SectionContainer className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-12 w-full">
          <div className="flex flex-col justify-center w-full max-w-3xl text-left font-inter">

            {/* Badge */}
            <div className="flex items-center justify-start gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#1b5e20] flex items-center justify-center shadow">
                <Quote className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-[#1b5e20] font-bold text-[13px] md:text-[14px] tracking-wide uppercase font-poppins">
                Industry Testimonials
              </span>
            </div>

            {/* Title with textShadow and colors #1b5e20 / #4B1426 */}
            <h1
              className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-semibold leading-[1.15] mb-3 text-left font-poppins"
              style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
            >
              <span className="block text-[#1b5e20] font-semibold mb-0.5">
                WHAT GLOBAL EXPERTS SAY
              </span>
              <span className="block text-[#4B1426] font-semibold tracking-tight md:whitespace-nowrap">
                ABOUT BHARAT ORGANIC EXPO
              </span>
            </h1>



            {/* Subtitle */}
            <p className="text-[#131730] text-sm md:text-base max-w-3xl mb-3 font-bold leading-relaxed text-left">
              Bridging the gap between <span className="text-[#1b5e20]">Organic Buyers</span> and <span className="text-[#1b5e20]">Sustainable Brands</span>
            </p>

            {/* Description */}
            <p className="text-[#131730] text-sm md:text-[15px] max-w-2xl mb-4 font-semibold leading-relaxed text-justify">
              Trusted by leaders across natural & organic sectors. Bharat Organic Expo serves <br className="hidden sm:block" />
              as the premier platform bridging the gap between sustainable brands, farmers, <br className="hidden sm:block" />
              and global buyers. We are committed to fostering B2B connections and <br className="hidden sm:block" />
              transforming the <span className="font-bold text-[#1b5e20]">organic business landscape</span> globally.
            </p>
          </div>
        </SectionContainer>
      </div>

      {/* ─── SECTION HEADER ─── */}
      <SectionDivider text="MORE INSPIRING STORIES" />

      {/* ─── TESTIMONIAL CARDS MARQUEE (Right Scrolling) ─── */}
      <div className="relative pt-8 pb-6">
        <SectionContainer className="relative z-10">
          <div className="w-full overflow-hidden">
            <div 
              className="marquee-wrapper-cards gap-6"
              style={{ animationDuration: `${Math.max(total * 10, 25)}s` }}
            >
              {[1, 2, 3, 4].map((set) => (
                <div key={set} className="flex gap-6">
                  {TESTIMONIALS_DATA.map((item: any, i: number) => (
                    <div key={`${set}-${i}`} className="flex-shrink-0">
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
        </SectionContainer>
      </div>

      {/* ─── VIDEO SECTION ─── */}
      <div className="relative pt-4 pb-2">
        <div className="absolute -left-10 bottom-0 w-44 h-44 opacity-20 pointer-events-none rotate-45 select-none z-0">
          <img src={leafPng.src} alt="" className="w-full h-full object-contain" />
        </div>

        <SectionContainer className="relative z-10">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="w-full overflow-hidden">
              <div 
                className="marquee-wrapper-videos gap-4"
                style={{ animationDuration: `${Math.max(totalVideos * 10, 20)}s` }}
              >
                {[1, 2, 3, 4].map((set) => (
                  <div key={set} className="flex gap-4">
                    {VIDEOS_DATA.map((v: any, i: number) => (
                      <div key={`${set}-${i}`} className="w-[280px] md:w-[320px] flex-shrink-0">
                        <VideoCard item={v} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionContainer>

        <div className="absolute -right-12 bottom-4 w-48 h-48 opacity-20 pointer-events-none -rotate-12 select-none z-0">
          <img src={leafPng.src} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

    </section>
  );

};

export default TestimonialsCarousel;

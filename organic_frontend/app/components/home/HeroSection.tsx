"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";
import gsap from "gsap";
import SectionContainer from "@/app/components/layout/SectionContainer";
import { websiteApi, SERVER_URL } from "@/lib/api";
import home1 from "../../assets/home/home11.webp";
import home2 from "../../assets/home/home22.webp";
import home3 from "../../assets/home/home33.webp";
import home4 from "../../assets/home/home44.webp";
import home5 from "../../assets/home/home55.webp";
import home6 from "../../assets/home/home1.webp";

export interface SlideData {
  id: number;
  img: StaticImageData | string;
  alt: string;
  tagline: string;
  titlePrimary: string;
  titleSecondary: string;
  subtitle: string;
  description: string;
  date: string;
  location: string;
  button1Name?: string;
  button1Link?: string;
  button2Name?: string;
  button2Link?: string;
}

/* ─────────────────────────────────────────
   SPARKLE
───────────────────────────────────────── */
const Sparkle = ({ style, color = "#F2B40E", shadow }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "15px",
      color,
      textShadow: shadow ? `0 0 8px ${shadow}, 0 0 16px ${shadow}` : undefined,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 25,
      ...style,
    }}
  >
    ✦
  </span>
);

/* ─────────────────────────────────────────
   DEFAULT SLIDE DATA (FALLBACK)
───────────────────────────────────────── */
const DEFAULT_SLIDES: SlideData[] = [
  {
    id: 0,
    img: home1,
    alt: "Organic Food & Beverages",
    tagline: "ORGANIC FOOD & BEVERAGES",
    titlePrimary: "PURE & CERTIFIED",
    titleSecondary: "ORGANIC STAPLES",
    subtitle: "Taste the purity of nature.",
    description:
      "Discover a diverse range of certified organic staples, farm-fresh produce, healthy snacks, and plant-based drinks.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
    button1Name: "Book Your Stall",
    button1Link: "/registration/book-a-stand",
    button2Name: "Register as Visitor",
    button2Link: "/registration/visitor-registration",
  },
  {
    id: 1,
    img: home2,
    alt: "Superfoods",
    tagline: "SUPERFOODS",
    titlePrimary: "BOOST YOUR",
    titleSecondary: "IMMUNITY",
    subtitle: "Health straight from the earth.",
    description:
      "Explore premium natural dietary supplements, organic protein powders, and powerful superfoods to fuel your everyday life.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
    button1Name: "Book Your Stall",
    button1Link: "/registration/book-a-stand",
    button2Name: "Register as Visitor",
    button2Link: "/registration/visitor-registration",
  },
  {
    id: 2,
    img: home5,
    alt: "Natural Beauty",
    tagline: "NATURAL BEAUTY",
    titlePrimary: "CLEAN & CRUELTY",
    titleSecondary: "FREE COSMETICS",
    subtitle: "Radiance without the chemicals.",
    description:
      "Source top-tier organic skincare, vegan cosmetics, and non-toxic personal hygiene products that care for you and the planet.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
    button1Name: "Book Your Stall",
    button1Link: "/registration/book-a-stand",
    button2Name: "Register as Visitor",
    button2Link: "/registration/visitor-registration",
  },
  {
    id: 3,
    img: home3,
    alt: "Smart & Sustainable Farming",
    tagline: "SMART & SUSTAINABLE FARMING",
    titlePrimary: "INNOVATING",
    titleSecondary: "AGRICULTURE",
    subtitle: "Empowering farmers with green tech.",
    description:
      "Experience the latest in organic seeds, bio-fertilizers, agri-tech innovations, and vertical farming solutions.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
    button1Name: "Book Your Stall",
    button1Link: "/registration/book-a-stand",
    button2Name: "Register as Visitor",
    button2Link: "/registration/visitor-registration",
  },
  {
    id: 4,
    img: home4,
    alt: "Herbal Wellness & Ayurveda",
    tagline: "HERBAL WELLNESS & AYURVEDA",
    titlePrimary: "ANCIENT WISDOM",
    titleSecondary: "MODERN HEALING",
    subtitle: "Balance your mind, body, and soul.",
    description:
      "Immerse yourself in authentic Ayurvedic therapies, holistic herbal supplements, essential oils, and detox solutions.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
    button1Name: "Book Your Stall",
    button1Link: "/registration/book-a-stand",
    button2Name: "Register as Visitor",
    button2Link: "/registration/visitor-registration",
  },
  {
    id: 5,
    img: home6,
    alt: "Live Expo & Networking",
    tagline: "LIVE EXPO & NETWORKING",
    titlePrimary: "EXPERIENCE THE",
    titleSecondary: "MEGA EVENT",
    subtitle: "Connect with industry leaders.",
    description:
      "Join thousands of experts, buyers, and exhibitors at the most anticipated organic and wellness mega event of the year.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
    button1Name: "Book Your Stall",
    button1Link: "/registration/book-a-stand",
    button2Name: "Register as Visitor",
    button2Link: "/registration/visitor-registration",
  },
];

const SLIDE_DURATION = 5000;

/* ─────────────────────────────────────────
   CINEMATIC PROGRESS BAR
───────────────────────────────────────── */
const ProgressBar = ({ cur, duration }: { cur: number; duration: number }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;
    gsap.fromTo(
      barRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: duration / 1000, ease: "none", transformOrigin: "left center" }
    );
    return () => {
      gsap.killTweensOf(barRef.current);
    };
  }, [cur, duration]);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-black/10 overflow-hidden" style={{ zIndex: 30 }}>
      <div
        ref={barRef}
        className="h-full w-full origin-left"
        style={{
          background: "linear-gradient(90deg, #2b5825, #7ca142, #a3c96a)",
          boxShadow: "0 0 8px 2px rgba(43,88,37,0.4)",
          transformOrigin: "left center",
        }}
      />
    </div>
  );
};

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
const HeroSection = () => {
  const [slides, setSlides] = useState<SlideData[]>(DEFAULT_SLIDES);
  const [cur, setCur] = useState(0);
  const curRef = useRef(0);
  const busyRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* layer refs */
  const sectionRef = useRef<HTMLElement>(null);
  const bgLayers = useRef<(HTMLDivElement | null)[]>([]);
  const imgEls = useRef<(HTMLImageElement | null)[]>([]);
  const panels = useRef<(HTMLDivElement | null)[]>([]);
  const lensRef = useRef<HTMLDivElement>(null);
  const vigRef = useRef<HTMLDivElement>(null);
  const revealBar = useRef<HTMLDivElement>(null);
  const kenTimeline = useRef<gsap.core.Tween | null>(null);

  // Fetch dynamic hero data from backend
  useEffect(() => {
    let isMounted = true;
    const fetchHeroData = async () => {
      try {
        const res = await websiteApi.getHomeHero();
        const items = Array.isArray(res) ? res : res?.data ? (Array.isArray(res.data) ? res.data : [res.data]) : [];
        if (items && items.length > 0 && isMounted) {
          const dynamicSlides: SlideData[] = items.map((item: any, idx: number) => {
            const fallback = DEFAULT_SLIDES[idx % DEFAULT_SLIDES.length];
            const rawImg = item.image || item.img;
            let imgSrc: StaticImageData | string = fallback.img;
            if (rawImg && typeof rawImg === "string" && rawImg.trim()) {
              imgSrc = rawImg.startsWith("http") ? rawImg : `${SERVER_URL}${rawImg}`;
            }
            return {
              id: idx,
              img: imgSrc,
              alt: item.alt || item.titlePrimary || fallback.alt,
              tagline: item.tagline || fallback.tagline,
              titlePrimary: item.titlePrimary || fallback.titlePrimary,
              titleSecondary: item.titleSecondary || fallback.titleSecondary,
              subtitle: item.subtitle || fallback.subtitle,
              description: item.description || fallback.description,
              date: item.date || fallback.date,
              location: item.location || fallback.location,
              button1Name: item.button1Name || item.buttonLabel || fallback.button1Name || "Book Your Stall",
              button1Link: item.button1Link || item.buttonHref || fallback.button1Link || "/registration/book-a-stand",
              button2Name: item.button2Name || item.secondaryButtonLabel || fallback.button2Name || "Register as Visitor",
              button2Link: item.button2Link || item.secondaryButtonHref || fallback.button2Link || "/registration/visitor-registration",
            };
          });
          setSlides(dynamicSlides);
        }
      } catch (err) {
        console.error("Failed to load hero section dynamic data:", err);
      }
    };
    fetchHeroData();
    return () => {
      isMounted = false;
    };
  }, []);

  /* ── Ken-Burns on current slide ── */
  const playKenBurns = useCallback((idx: number) => {
    if (kenTimeline.current) kenTimeline.current.kill();
    const img = imgEls.current[idx];
    if (!img) return;
    const origins = ["50% 50%", "40% 60%", "60% 40%", "55% 45%", "45% 55%", "50% 40%"];
    gsap.set(img, { scale: 1.0, transformOrigin: origins[idx % origins.length] });
    kenTimeline.current = gsap.to(img, { scale: 1.08, duration: 9, ease: "none" });
  }, []);

  /* ── Animate content OUT ── */
  const contentOut = useCallback((idx: number, done?: () => void) => {
    const panel = panels.current[idx];
    if (!panel) {
      done?.();
      return;
    }
    const items = panel.querySelectorAll("[data-anim]");
    gsap.to(items, {
      y: -30,
      opacity: 0,
      duration: 0.4,
      ease: "power3.in",
      stagger: { each: 0.045, from: "start" },
      onComplete: done,
    });
  }, []);

  /* ── Animate content IN ── */
  const contentIn = useCallback((idx: number) => {
    const panel = panels.current[idx];
    if (!panel) return;
    const items = panel.querySelectorAll("[data-anim]");
    gsap.set(items, { opacity: 0, y: 40, filter: "blur(4px)" });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.75,
      ease: "power3.out",
      stagger: { each: 0.08, from: "start" },
      delay: 0.1,
    });
  }, []);

  /* ── CORE TRANSITION ── */
  const goTo = useCallback(
    (targetIdx: number) => {
      if (busyRef.current || targetIdx === curRef.current) return;
      busyRef.current = true;
      if (timerRef.current) clearTimeout(timerRef.current);

      const prevIdx = curRef.current;
      const prevBg = bgLayers.current[prevIdx];
      const prevImg = imgEls.current[prevIdx];
      const nextBg = bgLayers.current[targetIdx];
      const nextImg = imgEls.current[targetIdx];

      curRef.current = targetIdx;

      if (kenTimeline.current) kenTimeline.current.kill();

      const tl = gsap.timeline({
        onComplete: () => {
          busyRef.current = false;
          gsap.set(prevBg, { zIndex: 1, clipPath: "inset(0 0% 0 0)", opacity: 1, x: 0 });
          gsap.set(prevImg, { scale: 1, filter: "none" });
          startTimer(targetIdx);
          playKenBurns(targetIdx);
        },
      });

      // 1. content exits
      tl.add(() => contentOut(prevIdx), 0);

      // 2. lens flare burst
      if (lensRef.current) {
        tl.fromTo(
          lensRef.current,
          { opacity: 0, scale: 0.3, x: "-50%", y: "-50%" },
          { opacity: 0.5, scale: 2.2, duration: 0.22, ease: "power2.out" },
          0.05
        ).to(lensRef.current, { opacity: 0, scale: 3, duration: 0.4, ease: "power2.in" }, 0.22);
      }

      // 3. vignette pulse
      if (vigRef.current) {
        tl.fromTo(
          vigRef.current,
          { opacity: 0 },
          { opacity: 0.5, duration: 0.25, ease: "power2.out", yoyo: true, repeat: 1 },
          0
        );
      }

      // 4. reveal bar wipe + next image clip-path unclip
      gsap.set(nextBg, { zIndex: 4 });
      gsap.set(nextImg, { scale: 1.1, filter: "brightness(0.92) saturate(0.85)" });

      if (revealBar.current) {
        tl.set(revealBar.current, { scaleX: 0, transformOrigin: "left center", opacity: 1 }, 0.08);
        tl.to(revealBar.current, { scaleX: 1, duration: 0.55, ease: "power4.inOut" }, 0.08);
      }

      gsap.set(nextBg, { clipPath: "inset(0 100% 0 0)" });
      tl.to(nextBg, { clipPath: "inset(0 0% 0 0)", duration: 0.55, ease: "power4.inOut" }, 0.08);

      if (revealBar.current) {
        tl.to(
          revealBar.current,
          { scaleX: 0, transformOrigin: "right center", duration: 0.4, ease: "power4.in", opacity: 0 },
          0.6
        );
      }

      // 5. prev slide drifts away
      tl.to(prevBg, { x: "-6%", opacity: 0, duration: 0.5, ease: "power2.in" }, 0.12);

      // 6. next image sharpens + settles
      tl.to(nextImg, { scale: 1, filter: "brightness(1) saturate(1)", duration: 0.85, ease: "power2.out" }, 0.35);

      // 7. state update + content in
      tl.add(() => {
        setCur(targetIdx);
        if (prevBg) gsap.set(prevBg, { x: 0 });
        if (nextBg) gsap.set(nextBg, { zIndex: 2 });
      }, 0.55);

      tl.add(() => contentIn(targetIdx), 0.6);
    },
    [contentOut, contentIn, playKenBurns]
  );

  const startTimer = useCallback(
    (idx: number) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        goTo((idx + 1) % slides.length);
      }, SLIDE_DURATION);
    },
    [goTo, slides.length]
  );

  /* ── INIT ── */
  useEffect(() => {
    bgLayers.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { zIndex: i === 0 ? 2 : 1, clipPath: "inset(0 0% 0 0)", opacity: 1, x: 0 });
    });

    panels.current.forEach((panel) => {
      if (!panel) return;
      const items = panel.querySelectorAll("[data-anim]");
      gsap.set(items, { opacity: 0, y: 40, filter: "blur(4px)" });
    });

    if (lensRef.current) gsap.set(lensRef.current, { opacity: 0, xPercent: -50, yPercent: -50 });
    if (vigRef.current) gsap.set(vigRef.current, { opacity: 0 });
    if (revealBar.current) gsap.set(revealBar.current, { scaleX: 0, opacity: 0 });

    const initPanel = panels.current[0];
    if (initPanel) {
      const items = initPanel.querySelectorAll("[data-anim]");
      gsap.set(items, { opacity: 0, y: 60, filter: "blur(8px)" });
      gsap.to(items, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.0,
        ease: "power4.out",
        stagger: { each: 0.1, from: "start" },
        delay: 0.3,
      });
    }

    playKenBurns(0);
    startTimer(0);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (kenTimeline.current) kenTimeline.current.kill();
    };
  }, [slides, playKenBurns, startTimer]);

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
        @keyframes dotPulseHero {
          0%,100% { box-shadow:0 0 0 0px rgba(43,88,37,0.35); }
          50%      { box-shadow:0 0 0 4px rgba(43,88,37,0.12); }
        }

        .hero-btn { position:relative; overflow:hidden; border:2px solid white !important; }
        .hero-btn::before {
          content:''; position:absolute; top:-50%; left:-75%; width:50%; height:200%;
          background:linear-gradient(to right,transparent,rgba(255,255,255,0.45),transparent);
          transform:skewX(-20deg); animation:shimmerHero 2.4s infinite;
        }
        .hero-btn-solid { background:#2b5825; }
        .hero-btn-solid:hover { background:#1f471b; }
        .hero-btn-lime { background:#7ca142; }
        .hero-btn-lime:hover { background:#688a35; }
        .hero-btn-outline { background:#ffffff; color:#2b5825; }
        .hero-btn-outline:hover { background:#f3f7ef; }
        .hero-btn-outline::before { background:linear-gradient(to right,transparent,rgba(43,88,37,0.1),transparent); }

        .dot-active-hero { animation: dotPulseHero 1.8s ease-in-out infinite; }

        .blue-btn-hero {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 30%, #0e3b1c 60%, #1b5e20 100%);
          background-size: 200% 200%;
          position: relative;
          overflow: hidden;
        }
        .blue-btn-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
        }

        .hide-scrollbar::-webkit-scrollbar { display:none; }
        .hide-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#fcfcf0] min-h-[460px] md:min-h-[400px] h-auto py-2 md:py-0 md:h-[72vh] lg:h-[78vh] flex items-center font-inter"
      >
        {/* ── BACKGROUND LAYERS ── */}
        {slides.map(({ id, img, alt }) => (
          <div
            key={id}
            ref={(el) => {
              bgLayers.current[id] = el;
            }}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: id === 0 ? 2 : 1, willChange: "clip-path, opacity, transform" }}
          >
            {typeof img === "string" ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                ref={(el) => {
                  imgEls.current[id] = el as any;
                }}
                src={img}
                alt={alt || `Bharat Organic Expo slide ${id + 1}`}
                className="w-full h-full object-cover select-none"
                style={{ willChange: "transform, filter" }}
              />
            ) : (
              <Image
                ref={(el) => {
                  imgEls.current[id] = el;
                }}
                src={img}
                alt={alt || `Bharat Organic Expo slide ${id + 1}`}
                className="w-full h-full object-cover select-none"
                style={{ willChange: "transform, filter" }}
                priority={id === 0}
              />
            )}
          </div>
        ))}

        {/* ── TRANSITION VIGNETTE PULSE ── */}
        <div ref={vigRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 7, background: "rgba(0,0,0,0.28)", opacity: 0 }} />

        {/* ── LENS FLARE ── */}
        <div
          ref={lensRef}
          className="absolute pointer-events-none"
          style={{
            zIndex: 8,
            top: "40%",
            left: "55%",
            width: 180,
            height: 180,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(200,255,150,0.85) 0%, rgba(124,161,66,0.4) 35%, transparent 70%)",
            mixBlendMode: "screen",
            opacity: 0,
          }}
        />

        {/* ── WIPE BAR ── */}
        <div
          ref={revealBar}
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 9,
            background: "linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.22) 50%, rgba(255,255,255,0.0) 100%)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
          }}
        />

        {/* ── BACKGROUND GRADIENT ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcf0]/30 via-[#fcfcf0]/10 to-transparent md:from-[#fcfcf0]/60 md:via-[#fcfcf0]/0 md:to-transparent z-10 pointer-events-none" />

        {/* ── CONTENT PANELS ── */}
        <SectionContainer
          className="relative z-20 h-full grid items-start pt-4 pb-6 md:py-0 md:items-center justify-items-start"
          style={{ zIndex: 20 }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              ref={(el) => {
                panels.current[slide.id] = el;
              }}
              className="col-start-1 row-start-1 w-full max-w-2xl lg:max-w-3xl mt-0 md:mt-0"
              style={{
                visibility: cur === slide.id ? "visible" : "hidden",
                pointerEvents: cur === slide.id ? "auto" : "none",
              }}
            >
              <div className="flex flex-col w-full bg-white/35 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-3.5 sm:p-0 rounded-2xl border border-white/40 md:border-none shadow-md md:shadow-none">
                {/* Tagline */}
                <div data-anim="1" className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-[2px] bg-[#c2410c]/80" />
                  <span className="text-[#c2410c] text-xs md:text-sm font-bold tracking-[0.14em] uppercase">
                    {slide.tagline}
                  </span>
                  <div className="w-7 h-[2px] bg-[#c2410c]/80" />
                </div>

                {/* Title */}
                <h1
                  data-anim="2"
                  className="text-3xl md:text-4xl lg:text-[54px] font-semibold leading-[1.06] font-poppins mb-3"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                >
                  <div className="text-[#1b5e20] tracking-tight">
                    {slide.titlePrimary}
                  </div>
                  <div className="text-[#F6A919] tracking-tight mt-0.5">
                    {slide.titleSecondary}
                  </div>
                </h1>

                {/* Subtitle */}
                <p data-anim="3" className="text-[#131730] font-bold text-sm md:text-base lg:text-lg leading-relaxed mb-2 font-inter">
                  {slide.subtitle}
                </p>

                {/* Description */}
                <p data-anim="4" className="text-[#131730] font-bold text-sm md:text-[15px] lg:text-base leading-relaxed max-w-lg mb-4 md:mb-5 font-inter">
                  {slide.description}
                </p>

                {/* Date / Location */}
                <div data-anim="5" className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#4B1426] text-sm md:text-[15px] lg:text-base font-bold mb-1 md:mb-1.5">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} className="shrink-0 text-[#ea580c]" />
                    <span>{slide.date}</span>
                  </div>
                  <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30"></div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="shrink-0 text-[#ea580c]" />
                    <span>{slide.location}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div data-anim="6" className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-3 pb-2 relative overflow-visible w-full max-w-xs sm:max-w-none">
                  {/* Button 1 (Book Your Stall) */}
                  <div className="relative shrink-0 w-full sm:w-auto">
                    <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "5%", animationDelay: "0s" }} />
                    <Sparkle color="#fdba74" shadow="#c2410c" style={{ top: "-15px", left: "28%", animationDelay: "0.3s" }} />
                    <Sparkle color="#ffedd5" shadow="#c2410c" style={{ top: "-13px", left: "50%", animationDelay: "0.6s" }} />
                    <Sparkle color="#fdba74" shadow="#c2410c" style={{ top: "-15px", left: "72%", animationDelay: "0.9s" }} />
                    <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", right: "5%", animationDelay: "1.2s" }} />
                    <Link
                      href={slide.button1Link || "/registration/book-a-stand"}
                      target={slide.button1Link?.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 md:px-5 md:py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest text-white hover:bg-[#c2410c] transition-all active:scale-95 relative z-10 w-full sm:w-auto overflow-hidden shadow-md border border-white/10"
                      style={{
                        background: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
                        boxShadow: "0 4px 20px rgba(194,65,12,0.4), 0 0 12px rgba(249,115,22,0.25)",
                      }}
                    >
                      <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                      {slide.button1Name || "Book Your Stall"} <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Button 2 (Register as Visitor) */}
                  <div className="relative shrink-0 w-full sm:w-auto">
                    <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                    <Sparkle color="#86efac" shadow="#16a34a" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                    <Sparkle color="#4ade80" shadow="#1b5e20" style={{ top: "-12px", right: "10%", animationDelay: "1s" }} />
                    <Link
                      href={slide.button2Link || "/registration/visitor-registration"}
                      target={slide.button2Link?.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="blue-btn-hero text-white px-4 py-2.5 md:px-5 md:py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center justify-center sm:justify-start gap-2 transition-all active:scale-95 relative z-10 w-full sm:w-auto whitespace-nowrap shadow-md"
                    >
                      {slide.button2Name || "Register as Visitor"} <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </SectionContainer>

        {/* ── PROGRESS BAR ── */}
        <ProgressBar cur={cur} duration={SLIDE_DURATION} key={cur} />

        {/* ── DOTS ── */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1">
          {slides.map(({ id }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className="p-2 flex items-center justify-center cursor-pointer focus:outline-none"
              aria-label={`Go to slide ${id + 1}`}
            >
              <span
                className={`block rounded-full border border-[#2b5825]/30 transition-all duration-400 ${
                  cur === id ? "w-5 h-2 bg-[#2b5825] dot-active-hero" : "w-2 h-2 bg-[#2b5825]/40 hover:bg-[#2b5825]/70"
                }`}
              />
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
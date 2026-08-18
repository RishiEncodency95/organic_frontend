"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { CalendarDays, MapPin, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import gsap from "gsap";
import home1 from "../../assets/home/home11.png";
import home2 from "../../assets/home/home22.png";
import home3 from "../../assets/home/home33.png";
import home4 from "../../assets/home/home44.png";
import home5 from "../../assets/home/home55.png";
import home6 from "../../assets/home/home1.jpg";

// -------------------------------------------------------------
// NOTE: run `npm install gsap` in your project before using this.
// -------------------------------------------------------------

/* ─────────────────────────────────────────
   SPARKLE
───────────────────────────────────────── */
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

/* ─────────────────────────────────────────
   SLIDE DATA
───────────────────────────────────────── */
const SLIDES = [
  {
    id: 0,
    img: home1,
    tagline: "ORGANIC FOOD & BEVERAGES",
    titlePrimary: "PURE & CERTIFIED",
    titleSecondary: "ORGANIC STAPLES",
    subtitle: "Taste the purity of nature.",
    description:
      "Discover a diverse range of certified organic staples, farm-fresh produce, healthy snacks, and plant-based drinks.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
  },
  {
    id: 1,
    img: home2,
    tagline: "SUPERFOODS",
    titlePrimary: "BOOST YOUR",
    titleSecondary: "IMMUNITY",
    subtitle: "Health straight from the earth.",
    description:
      "Explore premium natural dietary supplements, organic protein powders, and powerful superfoods to fuel your everyday life.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
  },
  {
    id: 2,
    img: home5,
    tagline: "NATURAL BEAUTY",
    titlePrimary: "CLEAN & CRUELTY",
    titleSecondary: "FREE COSMETICS",
    subtitle: "Radiance without the chemicals.",
    description:
      "Source top-tier organic skincare, vegan cosmetics, and non-toxic personal hygiene products that care for you and the planet.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
  },
  {
    id: 3,
    img: home3,
    tagline: "SMART & SUSTAINABLE FARMING",
    titlePrimary: "INNOVATING",
    titleSecondary: "AGRICULTURE",
    subtitle: "Empowering farmers with green tech.",
    description:
      "Experience the latest in organic seeds, bio-fertilizers, agri-tech innovations, and vertical farming solutions.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
  },
  {
    id: 4,
    img: home4,
    tagline: "HERBAL WELLNESS & AYURVEDA",
    titlePrimary: "ANCIENT WISDOM",
    titleSecondary: "MODERN HEALING",
    subtitle: "Balance your mind, body, and soul.",
    description:
      "Immerse yourself in authentic Ayurvedic therapies, holistic herbal supplements, essential oils, and detox solutions.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
  },
  {
    id: 5,
    img: home6,
    tagline: "LIVE EXPO & NETWORKING",
    titlePrimary: "EXPERIENCE THE",
    titleSecondary: "MEGA EVENT",
    subtitle: "Connect with industry leaders.",
    description:
      "Join thousands of experts, buyers, and exhibitors at the most anticipated organic and wellness mega event of the year.",
    date: "19-21 FEBRUARY 2027",
    location: "PRAGATI MAIDAN, NEW DELHI",
  },
];

const SLIDE_DURATION = 5000; // ms — same pacing as the reference carousel

/* ─────────────────────────────────────────
   CINEMATIC PROGRESS BAR
   Thin line at the bottom that fills up over
   the slide duration — remounts on `cur` change
   so the fill always restarts cleanly.
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [contentOut, contentIn, playKenBurns]
  );

  const startTimer = useCallback(
    (idx: number) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        goTo((idx + 1) % SLIDES.length);
      }, SLIDE_DURATION);
    },
    [goTo]
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        .carousel-arrow-hero {
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .carousel-arrow-hero:hover { transform: translateY(-50%) scale(1.15); background: rgba(255,255,255,0.92); }

        .hide-scrollbar::-webkit-scrollbar { display:none; }
        .hide-scrollbar { -ms-overflow-style:none; scrollbar-width:none; }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full overflow-hidden bg-[#fcfcf0] h-[68vh] md:h-[72vh] lg:h-[78vh] min-h-[400px] flex items-center font-inter"
      >
        {/* ── BACKGROUND LAYERS ── */}
        {SLIDES.map(({ id, img }) => (
          <div
            key={id}
            ref={(el) => {
              bgLayers.current[id] = el;
            }}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: id === 0 ? 2 : 1, willChange: "clip-path, opacity, transform" }}
          >
            <img
              ref={(el) => {
                imgEls.current[id] = el;
              }}
              src={img.src}
              alt={`Bharat Organic Expo slide ${id + 1}`}
              className="w-full h-full object-cover select-none"
              style={{ willChange: "transform, filter" }}
            />
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

        {/* ── BACKGROUND GRADIENT (Left to Right Fade) ── */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#fcfcf0]/60 via-[#fcfcf0]/0 to-transparent z-10 pointer-events-none" />

        {/* ── CONTENT PANELS ── */}
        <div
          className="relative container mx-auto max-w-[1400px] px-6 h-full grid items-center justify-items-start"
          style={{ zIndex: 20 }}
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.id}
              ref={(el) => {
                panels.current[slide.id] = el;
              }}
              className="col-start-1 row-start-1 w-full max-w-xl mt-16 md:mt-0"
              style={{
                visibility: cur === slide.id ? "visible" : "hidden",
                pointerEvents: cur === slide.id ? "auto" : "none",
              }}
            >
              <div className="flex flex-col w-full max-w-2xl">
                {/* Tagline */}
                <div data-anim="1" className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-[2px] bg-[#c2410c]/80" />
                  <span className="text-[#c2410c] text-[11px] md:text-[18px] font-semibold tracking-[0.14em] uppercase">
                    {slide.tagline}
                  </span>
                  <div className="w-7 h-[2px] bg-[#c2410c]/80" />
                </div>

                {/* Title */}
                <h1
                  data-anim="2"
                  className="leading-[1.15] font-bold uppercase font-poppins mb-3"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                >
                  <div className="text-[#1f471b] text-[26px] md:text-[38px] lg:text-[48px] tracking-tight">
                    {slide.titlePrimary}
                  </div>
                  <div className="text-[#7ca142] text-[26px] md:text-[38px] lg:text-[48px] tracking-tight mt-1">
                    {slide.titleSecondary}
                  </div>
                </h1>

                {/* Subtitle */}
                <p data-anim="3" className="text-[#1f471b] font-semibold text-[17px] md:text-[20px] lg:text-[23px] leading-[1.3] mb-3">
                  {slide.subtitle}
                </p>

                {/* Description */}
                <p data-anim="4" className="text-black font-medium text-[14px] md:text-[16px] leading-relaxed max-w-[560px] mb-6">
                  {slide.description}
                </p>

                {/* Date / Location */}
                <div data-anim="5" className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[#4B1426] font-bold text-[11px] lg:text-[15px] uppercase mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="shrink-0" />
                    <span>{slide.date}</span>
                  </div>
                  <span className="hidden sm:inline opacity-80">|</span>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="shrink-0" />
                    <span>{slide.location}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div data-anim="6" className="flex flex-nowrap items-center gap-2 sm:gap-3 pt-2 relative overflow-visible w-full overflow-x-auto hide-scrollbar pb-2">
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-12px", left: "10%", animationDelay: "0s" }} />
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-15px", left: "50%", animationDelay: "0.4s" }} />
                  <Sparkle color="#f97316" shadow="#c2410c" style={{ top: "-10px", right: "10%", animationDelay: "0.8s" }} />

                  {/* Book Your Stall — orange gradient matching why-exhibit */}
                  <div className="relative shrink-0">
                    <Link
                      href="/book-a-stand"
                      className="group relative inline-flex items-center justify-start gap-2 px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest text-white transition-all active:scale-95 relative z-10 w-full sm:w-auto overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #ea580c, #c2410c)",
                      }}
                    >
                      <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
                      Book Your Stall <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Register as Visitor — blue styling matching Download Brochure */}
                  <div className="relative shrink-0">
                    <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-12px", left: "10%", animationDelay: "0.2s" }} />
                    <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-15px", left: "50%", animationDelay: "0.6s" }} />
                    <Sparkle color="#3b82f6" shadow="#28396C" style={{ top: "-10px", right: "10%", animationDelay: "1s" }} />
                    <Link
                      href="/visitor-registration"
                      className="blue-btn-hero text-white px-4 py-2 rounded-lg font-semibold text-[10px] uppercase tracking-widest flex items-center justify-start gap-2 transition-all active:scale-95 relative z-10 w-full sm:w-auto whitespace-nowrap"
                    >
                      Register as Visitor <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── PROGRESS BAR ── */}
        <ProgressBar cur={cur} duration={SLIDE_DURATION} key={cur} />

        {/* ── DOTS ── */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-1.5">
          {SLIDES.map(({ id }) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`rounded-full border border-[#2b5825]/30 transition-all duration-400 ${cur === id ? "w-5 h-2 bg-[#2b5825] dot-active-hero" : "w-2 h-2 bg-[#2b5825]/40 hover:bg-[#2b5825]/70"
                }`}
              aria-label={`Go to slide ${id + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
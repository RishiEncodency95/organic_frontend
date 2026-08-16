"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Leaf } from "lucide-react";
import bannerImg from "../../assets/blog/banner.webp";

const BlogHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const rand = (n: number) => {
    const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
    return x - Math.floor(x);
  };

  const burstParticles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => {
        const angle = (i / 26) * Math.PI * 2 + rand(i) * 0.5;
        const dist = 70 + rand(i + 9) * 130;
        return {
          id: `b${i}`,
          bx: `${Math.round(Math.cos(angle) * dist)}px`,
          by: `${Math.round(Math.sin(angle) * dist)}px`,
          ps: `${(2 + rand(i + 3) * 4).toFixed(1)}px`,
          pdel: `${(1.05 + rand(i + 5) * 0.25).toFixed(2)}s`,
          gold: rand(i + 7) > 0.5,
        };
      }),
    []
  );

  const floatParticles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: `f${i}`,
        px: `${Math.round(rand(i * 5 + 2) * 100)}%`,
        pt: `${Math.round(rand(i * 5 + 3) * 100)}%`,
        ps: `${(1.5 + rand(i * 5 + 4) * 3.5).toFixed(1)}px`,
        pd: `${(4 + rand(i * 5 + 5) * 3).toFixed(2)}s`,
        pdel: `${(1.6 + rand(i * 5 + 6) * 2.2).toFixed(2)}s`,
        pdy: `${-Math.round(40 + rand(i * 5 + 7) * 90)}px`,
        gold: rand(i * 5 + 8) > 0.4,
      })),
    []
  );

  return (
    <section className="relative w-full overflow-hidden bg-white h-[580px] sm:h-[480px] md:h-[555px] lg:h-[610px] flex items-center">
      <style>{`
        @keyframes shimmerHero {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        .hero-shimmer-btn {
          position: relative;
          overflow: hidden;
        }
        .hero-shimmer-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmerHero 2.5s infinite;
        }
        .hero-shimmer-btn-dark::before {
          background: linear-gradient(to right, transparent, rgba(43,88,37,0.15), transparent);
        }

        /* ─── Dimension Entry Hero Reveal ─── */
        .dim-stage {
          perspective: 1200px;
        }

        @keyframes dimensionEntry {
          0%   { opacity: 0; transform: rotateX(14deg) rotateY(-10deg) translateY(44px) scale(1.35); filter: blur(18px); }
          30%  { opacity: 0.55; filter: blur(10px) drop-shadow(3px 0 rgba(255,80,80,0.45)) drop-shadow(-3px 0 rgba(70,140,255,0.45)); }
          45%  { opacity: 0.85; filter: blur(4px) drop-shadow(1.5px 0 rgba(255,80,80,0.3)) drop-shadow(-1.5px 0 rgba(70,140,255,0.3)); }
          60%  { opacity: 1; filter: blur(1.5px); }
          75%  { opacity: 1; transform: rotateX(2deg) rotateY(-1deg) translateY(7px) scale(1.012); filter: blur(0); }
          100% { opacity: 1; transform: rotateX(0) rotateY(0) translateY(0) scale(1); filter: blur(0); }
        }
        .dim-entry {
          animation: dimensionEntry 1.5s cubic-bezier(0.22, 0.61, 0.21, 1) 0.05s both;
        }

        @keyframes dimFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-7px) scale(1.011); }
        }
        .dim-float {
          animation: dimFloat 7s ease-in-out 1.7s infinite;
        }

        @keyframes dimFloatText {
          0%, 100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-5px) scale(1.004); }
        }
        .dim-float-text {
          animation: dimFloatText 7s ease-in-out 1.9s infinite;
        }

        @keyframes digiScan {
          0%   { top: -14%; opacity: 0; }
          14%  { opacity: 1; }
          86%  { opacity: 1; }
          100% { top: 112%; opacity: 0; }
        }
        .dim-scan {
          position: absolute;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg,
            transparent,
            rgba(124,196,96,0.95) 30%,
            rgba(255,214,130,0.95) 55%,
            rgba(124,196,96,0.95) 80%,
            transparent);
          filter: blur(1px);
          box-shadow: 0 0 22px rgba(140,220,110,0.8), 0 0 40px rgba(255,214,130,0.4);
          animation: digiScan 0.55s cubic-bezier(0.4, 0, 0.2, 1) 0.62s both;
        }

        @keyframes burstOut {
          0%   { transform: translate(0, 0) scale(0.4); opacity: 0.95; }
          100% { transform: translate(var(--bx), var(--by)) scale(1); opacity: 0; }
        }
        .dim-burst-particle {
          background: radial-gradient(circle, rgba(230,255,225,0.95) 0%, rgba(124,196,96,0.55) 45%, rgba(124,196,96,0) 70%);
          border-radius: 9999px;
          animation: burstOut 0.7s cubic-bezier(0.16, 0.84, 0.3, 1) var(--pdel) both;
        }
        .dim-burst-particle.gold {
          background: radial-gradient(circle, rgba(255,244,214,0.95) 0%, rgba(255,200,110,0.55) 45%, rgba(255,200,110,0) 70%);
        }

        @keyframes particleDrift {
          0%   { transform: translate3d(0, 0, 0); opacity: 0; }
          15%  { opacity: var(--po); }
          80%  { opacity: var(--po); }
          100% { transform: translate3d(var(--pdx), var(--pdy), 0); opacity: 0; }
        }
        .dim-ambient-particle {
          position: absolute;
          left: var(--px);
          top: var(--pt);
          width: var(--ps);
          height: var(--ps);
          border-radius: 9999px;
          filter: blur(1px);
          animation: particleDrift var(--pd) ease-out var(--pdel) both;
        }
        .dim-ambient-particle.green {
          background: radial-gradient(circle, rgba(190,235,170,0.9) 0%, rgba(124,196,96,0.45) 50%, rgba(124,196,96,0) 75%);
        }
        .dim-ambient-particle.gold {
          background: radial-gradient(circle, rgba(255,240,200,0.9) 0%, rgba(255,200,110,0.45) 50%, rgba(255,200,110,0) 75%);
        }

        @keyframes lightSweepFinal {
          0%       { transform: translateX(-140%) skewX(-16deg); opacity: 0; }
          12%      { opacity: 0.85; }
          55%      { transform: translateX(560%) skewX(-16deg); opacity: 0.85; }
          68%, 100% { opacity: 0; }
        }
        .dim-sweep {
          position: absolute;
          top: -10%;
          bottom: -10%;
          left: 0;
          width: 34%;
          background: linear-gradient(90deg,
            transparent,
            rgba(210,240,190,0.45) 38%,
            rgba(255,244,214,0.6) 52%,
            rgba(214,239,196,0.4) 66%,
            transparent);
          filter: blur(9px);
          animation: lightSweepFinal 1.7s cubic-bezier(0.45, 0, 0.25, 1) 1.75s both;
        }
      `}</style>

      {/* ── Dimension Entry Stage (banner image stays 100% unchanged) ── */}
      <div className="dim-stage absolute inset-0 z-0" aria-hidden="true">
        <div className="dim-entry absolute inset-0">
          <div className="dim-float absolute inset-0">
            <img
              src={bannerImg.src}
              alt="Bharat Organic Expo Blog Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="dim-scan" />
        <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 z-20">
          {burstParticles.map((p) => (
            <span
              key={p.id}
              className={`dim-burst-particle absolute ${p.gold ? "gold" : ""}`}
              style={
                {
                  width: p.ps,
                  height: p.ps,
                  "--bx": p.bx,
                  "--by": p.by,
                  "--pdel": p.pdel,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        {floatParticles.map((p) => (
          <span
            key={p.id}
            className={`dim-ambient-particle ${p.gold ? "gold" : "green"}`}
            style={
              {
                "--px": p.px,
                "--pt": p.pt,
                "--ps": p.ps,
                "--pd": p.pd,
                "--pdel": p.pdel,
                "--pdx": `${Math.round((rand(p.id.length + 40) - 0.5) * 60)}px`,
                "--pdy": p.pdy,
                "--po": (0.25 + rand(p.id.length + 41) * 0.35).toFixed(2),
              } as React.CSSProperties
            }
          />
        ))}
        <div className="dim-sweep" />
      </div>

      <div className="relative z-20 container mx-auto max-w-[1400px] px-6 h-full flex flex-col justify-center">
        <div className="dim-float-text max-w-xl text-left">
          {/* Tagline Badge */}
          <div className={`flex items-center gap-2 mb-3 transition-all duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}>
            <div className="w-8 h-[2px] bg-[#7ca142]/60"></div>
            <Leaf className="w-4 h-4 text-[#7ca142] fill-[#7ca142]" />
            <span className="text-[#1a3617] text-[12px] md:text-[13px] lg:text-[14px] font-extrabold tracking-widest uppercase">
              Bharat Organic Expo
            </span>
            <div className="w-8 h-[2px] bg-[#7ca142]/60"></div>
          </div>

          {/* Title */}
          <h1 className={`leading-[1.1] font-black uppercase pb-1 transition-all delay-100 duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}>
            <div className="text-[#1f471b] text-[34px] md:text-[48px] lg:text-[60px] tracking-tight">
              Blogs &amp;
            </div>
          </h1>
          <h1 className={`leading-[1.1] font-black uppercase pb-1 transition-all delay-200 duration-700 ease-out mt-1 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}>
            <div className="text-[#7ca142] text-[34px] md:text-[48px] lg:text-[60px] tracking-tight">
              News
            </div>
          </h1>

          {/* Subtitle */}
          <div className={`flex items-center gap-2 mb-3 transition-all delay-300 duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}>
            <span className="text-[#1f471b] font-sans font-medium text-[20px] md:text-[24px] lg:text-[28px] leading-[1.3]">
              Insights. Innovation. Impact.
            </span>
            <Leaf className="w-5 h-5 text-[#7ca142] fill-[#7ca142] animate-[spin_8s_linear_infinite]" />
          </div>

          {/* Description */}
          <p className={`text-[#4a4a4a] font-normal text-[16px] md:text-[18px] leading-[1.6] max-w-[480px] mb-6 transition-all delay-400 duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}>
            Stay updated with the latest trends, expert perspectives, innovations and success
            stories shaping India's organic food, agriculture and sustainable products industry.
          </p>

          {/* Action Buttons */}
          <div className={`flex flex-nowrap items-center gap-2 sm:gap-4 pt-2 transition-all delay-500 duration-700 ease-out ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}>
            <a
              href="/exhibitor-login"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-shimmer-btn w-fit bg-[#2b5825] hover:bg-[#1f471b] text-white px-4 py-2 sm:py-2.5 rounded-md font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-tight sm:tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap"
            >
              Exhibitor Login
            </a>
            <a
              href="/buyer-login"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-shimmer-btn hero-shimmer-btn-dark w-fit bg-white hover:bg-gray-50 text-[#2b5825] border border-[#2b5825] px-4 py-2 sm:py-2.5 rounded-md font-bold text-[10px] sm:text-[12px] md:text-[13px] tracking-tight sm:tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 text-center flex items-center justify-center whitespace-nowrap"
            >
              Buyer Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
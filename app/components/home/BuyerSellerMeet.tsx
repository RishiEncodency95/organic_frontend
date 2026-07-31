"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  UserCheck,
  CalendarClock,
  Handshake,
  TrendingUp,
  Users,
  Globe,
  Calendar,
  ArrowRight,
  MapPin
} from 'lucide-react';
import { useInView, animate } from 'framer-motion';
import rightImageBg from '../../assets/home/rightimage1.jpeg';

import buy1 from '../../assets/home/h1.png';
import buy2 from '../../assets/home/h2.png';
import buy3 from '../../assets/home/h3.png';
import buy4 from '../../assets/home/h4.png';

// ── Maroon Sparkle component ──
const MaroonSparkle = ({ style }: { style?: React.CSSProperties }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '11px',
      color: '#ff6b7a',
      textShadow: '0 0 5px #5E0006, 0 0 10px #a0000a, 0 0 18px rgba(94,0,6,0.9)',
      animation: 'maroonSparkleAnim 1.8s ease-in-out infinite',
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

// ── Animated counter — counts up when scrolled into view ──
const StatCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const numericValue = parseInt(value.replace(/,/g, '')) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: 'easeOut',
        onUpdate(v) {
          setDisplayValue(Math.floor(v));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const BuyerSellerMeet = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${rightImageBg.src})` }}
    >
      {/* ── GLOBAL STYLES ── */}
      <style>{`
        @keyframes maroonShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes maroonSweep {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        @keyframes maroonSparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.3) translateY(-5px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-8px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-11px); }
        }

        .b2b-maroon-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            #3a0004 0%,
            #5E0006 25%,
            #8b000b 50%,
            #5E0006 75%,
            #3a0004 100%
          );
          background-size: 200% 200%;
          animation: maroonShimmer 2.5s ease infinite;
          border: 1.5px solid #c0000f;
          box-shadow:
            0 0 16px 4px rgba(94,0,6,0.45),
            0 4px 15px rgba(94,0,6,0.35),
            0 1px 2px rgba(220,60,70,0.35) inset,
            0 -1px 2px rgba(30,0,2,0.25) inset;
          transition: filter 0.2s, transform 0.15s;
        }
        .b2b-maroon-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.25), transparent);
          transform: skewX(-20deg);
          animation: maroonSweep 2.2s infinite;
        }
        .b2b-maroon-btn:hover {
          filter: brightness(1.12);
          transform: translateY(-1px);
          box-shadow:
            0 0 24px 6px rgba(94,0,6,0.55),
            0 6px 20px rgba(94,0,6,0.4),
            0 1px 3px rgba(240,80,90,0.4) inset,
            0 -1px 3px rgba(30,0,2,0.3) inset;
        }
        .b2b-maroon-btn:active {
          transform: translateY(0px);
          filter: brightness(0.96);
        }
        .b2b-maroon-btn .btn-text {
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #fff;
          text-shadow: 0 1px 2px rgba(30,0,2,0.6);
          position: relative;
          z-index: 1;
        }
        .b2b-maroon-btn .btn-icon {
          color: #fff;
          position: relative;
          z-index: 1;
        }
        .b2b-maroon-btn .btn-arrow {
          color: #fff;
          transition: transform 0.2s;
          position: relative;
          z-index: 1;
        }
        .b2b-maroon-btn:hover .btn-arrow {
          transform: translateX(3px);
        }
      `}</style>

      {/* ── CONTENT OVERLAY ── */}
      <div className="relative z-10 pt-4 pb-1 max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11">
        <div className="flex flex-col lg:flex-row items-start gap-1 max-w-[1200px]">

          {/* ── LEFT CONTENT ── */}
          <div className="flex flex-col items-start w-full lg:w-fit shrink-0 lg:pr-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex gap-1">
                <div className="w-[2.5px] h-5 bg-[#519a27] -skew-x-[15deg]" />
                <div className="w-[2.5px] h-5 bg-[#519a27] -skew-x-[15deg]" />
              </div>
              <div
                className="bg-[#519a27] text-white px-4 py-1 shadow-md"
                style={{ transform: 'skewX(-12deg)', display: 'inline-block' }}
              >
                <span
                  className="inline-block font-bold text-[11px] tracking-[0.15em] uppercase"
                  style={{ transform: 'skewX(12deg)' }}
                >
                  Pre-Scheduled Meetings.
                </span>
              </div>
              <div className="flex gap-1">
                <div className="w-[2.5px] h-5 bg-[#519a27] -skew-x-[15deg]" />
                <div className="w-[2.5px] h-5 bg-[#519a27] -skew-x-[15deg]" />
              </div>
            </div>

            <h1 className="font-black leading-[1.0] mb-2 text-[32px] md:text-[42px]">
              <div className="text-[#001439]">BUYER-SELLER</div>
              <div>
                <span className="text-[#519a27]">MEET</span>{' '}
                <span className="text-[#001439]">2026</span>
              </div>
            </h1>

            <div className="w-[250px] h-[3px] bg-gradient-to-r from-[#006400] via-[#519a27] to-[#000000] mb-2 rounded-full" />

            <p className="font-bold uppercase tracking-[0.1em] mb-4 text-[12px] md:text-[13px]">
              <span className="text-[#232641]">WHERE</span>{' '}
              <span className="text-[#5e9f71]">CONNECTIONS</span>{' '}
              <span className="text-[#232641]">TURN INTO BUSINESS</span>
            </p>

            <div className="bg-[#0f172a] text-white py-1.5 px-4 rounded-full flex items-center gap-3 shadow-lg max-w-fit mb-4">
              <div className="w-7 h-7 rounded-full bg-[#16a34a] flex items-center justify-center shrink-0">
                <Users size={14} className="text-white" />
              </div>
              <p className="font-medium leading-tight text-[10px] md:text-[11px]">
                A dedicated B2B platform to connect<br />
                verified buyers with quality exhibitors.
              </p>
            </div>
          </div>

          {/* ── RIGHT CONTENT: Feature Box ── */}
          <div
            className="bg-[#FFFBF1] rounded-xl py-6 px-3 lg:py-8 lg:pl-2 lg:pr-2 lg:max-w-fit w-full flex flex-wrap lg:flex-nowrap items-start justify-center gap-y-5 lg:gap-0 lg:-mt-12"
            style={{ boxShadow: '4px -4px 12px rgba(0, 0, 0, 0.08)' }}
          >
            {[
              {
                icon: UserCheck,
                title: 'VERIFIED',
                sub: 'BUYERS',
                desc: <>Meet pre-verified<br />buyers across India<br />and abroad.</>,
                customImg: buy1,
                titleColor: '#278943',
                subColor: '#00153d'
              },
              {
                icon: CalendarClock,
                title: 'PRE-SCHEDULED',
                sub: 'MEETINGS',
                desc: 'Save time with smart matchmaking & fixed appointments.',
                customImg: buy2,
              },
              {
                icon: Handshake,
                title: 'QUALITY BUSINESS',
                sub: 'OPPORTUNITIES',
                desc: 'Build partnerships, generate leads and close deals faster.',
                customImg: buy3,
                titleColor: '#185b2c',
              },
              {
                icon: TrendingUp,
                title: 'GROW YOUR',
                sub: 'BUSINESS',
                desc: 'Expand market reach and strengthen long-term business growth.',
                customImg: buy4,
              },
            ].map((item, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="w-[47%] lg:w-[115px] flex flex-col items-center text-center px-1 lg:shrink-0">
                  <div className={`w-full h-20 flex items-center justify-center mb-0.5 ${item.customImg ? '' : 'rounded-full border-[2px] border-[#519a27] bg-white w-14 h-14'}`}>
                    {item.customImg ? (
                      <img loading="lazy" decoding="async" src={item.customImg.src} alt={item.title} className="w-20 h-20 object-contain" />
                    ) : (
                      <item.icon size={20} className="text-[#519a27]" />
                    )}
                  </div>
                  <h4 className="font-black uppercase leading-tight mb-1.5 text-[10.5px] md:text-[11.5px]">
                    <span style={{ color: item.titleColor || '#001439' }}>{item.title}</span>
                    <br />
                    <span style={{ color: item.subColor || '#001439' }}>{item.sub}</span>
                  </h4>
                  <p className="text-slate-900 leading-relaxed font-semibold text-[9px]">
                    {item.desc}
                  </p>
                </div>
                {idx < arr.length - 1 && (
                  <div className="hidden lg:block w-px bg-slate-300 my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── STATS BAND ── */}
        <div className="mt-6 mb-4 bg-white/30 backdrop-blur-sm rounded-2xl md:rounded-full py-2 px-5 md:px-8 shadow-xl border border-white/40 flex flex-wrap items-center justify-start gap-4 md:gap-10 w-full md:max-w-fit">
          {[
            { icon: Users, val: '8,000+', label: 'VISITORS / DELEGATES' },
            { icon: Handshake, val: '150+', label: 'EXHIBITORS', valColor: '#00153c', iconBg: '#00153c' },
            { icon: Globe, val: '1000+', label: 'GLOBAL BUYERS' },
            { icon: Calendar, val: '3 DAYS', label: 'OF MEETINGS', valColor: '#00153c', iconBg: '#00153c' },
          ].map((stat, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-3 justify-start">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-lg shrink-0"
                  style={{ backgroundColor: stat.iconBg || '#0b4d17' }}
                >
                  <stat.icon size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="font-black leading-none text-[18px]" style={{ color: stat.valColor || '#1a682d' }}>
                    {/^[\d,]+/.test(stat.val) ? <StatCounter value={stat.val} /> : stat.val}
                  </span>
                  <span className="font-bold text-[#00153c] uppercase tracking-widest text-[8.5px] mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
              {i < 3 && <div className="hidden md:block w-px h-6 bg-slate-400/40 shrink-0" />}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── FOOTER ACTION BAR ── */}
      <div className="w-full flex flex-col md:flex-row h-auto md:h-12 relative z-20">

        {/* Dark navy left: date + location */}
        <div className="bg-[#0f172a] flex items-center justify-center px-2 sm:px-4 md:px-8 py-2.5 md:py-0 gap-3 md:gap-6 w-full md:w-auto shrink-0 whitespace-nowrap overflow-hidden">
          <div className="flex items-center gap-1.5 md:gap-2 text-white">
            <Calendar size={12} className="md:w-[14px] md:h-[14px] text-[#4ade80]" />
            <span className="font-bold tracking-wider text-[8.5px] sm:text-[10px] md:text-[11.5px] whitespace-nowrap">
              21 – 23 AUGUST 2026
            </span>
          </div>
          <div className="w-px h-4 md:h-5 bg-white/20 shrink-0" />
          <div className="flex items-center gap-1.5 md:gap-2 text-white">
            <MapPin size={12} className="md:w-[14px] md:h-[14px] text-[#4ade80]" />
            <span className="font-bold tracking-wider uppercase text-[8.5px] sm:text-[10px] md:text-[11.5px] whitespace-nowrap">
              Pragati Maidan, New Delhi
            </span>
          </div>
        </div>

        {/* ── Center: MAROON SPARKLE BUTTON ── */}
        <div className="bg-[#0b4d17] flex items-center justify-center flex-1 py-2 md:py-0">
          <div className="relative group/btn">
            {/* Maroon Sparkles — top row */}
            <MaroonSparkle style={{ top: '-10px', left: '8%',   animationDelay: '0s'    }} />
            <MaroonSparkle style={{ top: '-12px', left: '30%',  animationDelay: '0.3s'  }} />
            <MaroonSparkle style={{ top: '-10px', left: '55%',  animationDelay: '0.6s'  }} />
            <MaroonSparkle style={{ top: '-12px', right: '12%', animationDelay: '0.15s' }} />
            {/* Maroon Sparkles — bottom row */}
            <MaroonSparkle style={{ bottom: '-10px', left: '18%',  animationDelay: '0.45s' }} />
            <MaroonSparkle style={{ bottom: '-12px', left: '42%',  animationDelay: '0.75s' }} />
            <MaroonSparkle style={{ bottom: '-10px', right: '20%', animationDelay: '0.2s'  }} />

            <Link 
              href="/buyer-registration" 
              target="_blank"
              rel="noopener noreferrer"
              className="b2b-maroon-btn flex items-center gap-3 px-7 h-9 rounded-xl no-underline"
            >
              <CalendarClock className="btn-icon w-4 h-4" />
              <span className="btn-text">Register As Buyer</span>
              <ArrowRight className="btn-arrow w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Dark navy right: tagline */}
        <div className="bg-[#0f172a] flex items-center justify-center gap-3 px-6 py-3 md:py-0 w-full md:w-[25%] shrink-0">
          <div className="w-8 h-8 rounded-full bg-[#1e3a5f] flex items-center justify-center shrink-0">
            <Users size={16} className="text-[#4ade80]" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white/70 font-medium text-[8px]">MEET. CONNECT.</span>
            <span className="text-[#4ade80] font-black uppercase text-[12px]">GROW TOGETHER.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyerSellerMeet;
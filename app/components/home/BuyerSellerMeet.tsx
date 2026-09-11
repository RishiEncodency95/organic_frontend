"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  CalendarDays,
  Users,
  Store,
  Globe,
  UserCheck,
  Handshake,
  ArrowRight,
  CalendarCheck,
  Leaf,
  MapPin
} from 'lucide-react';
import { useInView, animate } from 'framer-motion';
import rightImageBg from '../../assets/home/rightimage1.jpeg';
import bs_meet from '../../assets/home/bs_meet.webp';

const StatCounter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  const numericValue = parseInt(value.replace(/,/g, '')) || 0;
  const suffix = value.replace(/[0-9,]/g, '');

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2,
        onUpdate: (val) => setDisplayValue(Math.floor(val)),
        ease: "easeOut"
      });
      return controls.stop;
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

const Sparkle = ({ style, color = "#facc15", shadow = "#4B1426" }: { style?: React.CSSProperties; color?: string; shadow?: string }) => (
  <span
    style={{
      position: "absolute",
      pointerEvents: "none",
      fontSize: "13px",
      color,
      textShadow: `0 0 6px ${shadow}, 0 0 12px ${shadow}`,
      animation: "sparkleAnim 1.6s ease-in-out infinite",
      opacity: 0,
      zIndex: 25,
      ...style,
    }}
  >
    ✦
  </span>
);

// ── Dynamic Data Configuration ──
const sectionData = {
  leftSection: {
    badge: "Pre-Scheduled Meetings",
    titlePrefix: "BUYER-SELLER",
    titleHighlight: "MEET 2027",
    subtitle: (
      <>
        Bridging the gap between <span className="text-[#3b8c2a] font-semibold">Organic Buyers</span> and <span className="text-[#3b8c2a] font-semibold">Sustainable Brands</span>
      </>
    ),
    description: "Join India's most exclusive B2B networking platform for the organic sector. Our highly curated Buyer-Seller Meet brings together certified farmers, eco-friendly product manufacturers, and top-tier global buyers. Pre-schedule your 1-on-1 meetings to secure bulk orders and forge lasting partnerships in the booming sustainable market.",
    features: [
      { icon: UserCheck, title: 'VERIFIED', sub: 'ORGANIC BUYERS' },
      { icon: Handshake, title: '1-ON-1 B2B', sub: 'MEETINGS' },
      { icon: Globe, title: 'LUCRATIVE GREEN', sub: 'OPPORTUNITIES' },
      { icon: Store, title: 'EXPAND GLOBAL', sub: 'REACH' },
    ],
    buttons: {
      primary: { text: "Register Now", link: "/registration/buyer-registration" },
      secondary: { text: "View Schedule", link: "/schedule" }
    }
  },
  rightSection: {
    image: bs_meet,
    imageAlt: "Business Meeting at Expo"
  },
  statsBar: [
    { icon: Users, val: '8,000+', label: 'TRADE VISITORS' },
    { icon: Store, val: '200+', label: 'ORGANIC EXHIBITORS' },
    { icon: Globe, val: 'GLOBAL', label: 'BUYERS' },
    { icon: CalendarDays, val: '3 DAYS', label: 'OF NETWORKING' },
  ],
  premiumBand: {
    items: [
      { icon: Users, title: "GROW TOGETHER.", subtitle: "MEET. CONNECT." },
      { icon: CalendarDays, title: "19 \u2013 21", subtitle: "FEBRUARY 2027" },
      { icon: MapPin, title: "PRAGATI MAIDAN", subtitle: "NEW DELHI, INDIA" }
    ],
    button: {
      text: "REGISTER AS BUYER!",
      link: "/registration/buyer-registration"
    }
  }
};

const BuyerSellerMeet = () => {
  return (
    <>
      <section className="relative w-full bg-[#EFF7EE] py-2 md:py-4 lg:py-4 px-2 md:px-14 border-t border-gray-100 overflow-hidden font-inter">

        {/* Background Dotted Pattern */}
        <div className="absolute top-[30%] left-[45%] w-64 h-64 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b8c2a 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

        <div className="relative z-10 flex flex-col gap-3 md:gap-6 w-full">

          {/* Top Section: Text (Left) + Image (Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6">

            {/* Left: Text Content */}
            <div className="flex flex-col flex-1 w-full lg:max-w-[50%] font-inter">

              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 md:gap-2 bg-[#f4fcf6] border border-[#d1e8d6] rounded-md px-2 md:px-3 py-1 md:py-1.5 mb-2 md:mb-3 w-max shadow-sm">
                <CalendarCheck className="w-3 h-3 md:w-4 md:h-4 text-[#2c783c]" />
                <span className="text-[10px] md:text-[13px] lg:text-[14px] font-semibold text-[#2c783c] tracking-wider uppercase font-poppins">{sectionData.leftSection.badge}</span>
              </div>

              {/* Title */}
              <div className="flex items-center gap-1.5 md:gap-2 mb-1.5 md:mb-2">
                <h2
                  className="text-[16px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.2] text-[#1a1a1a] uppercase tracking-tight font-poppins"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
                >
                  {sectionData.leftSection.titlePrefix}{' '}
                  <span className="bg-gradient-to-r from-[#00643b] to-[#f58220] bg-clip-text text-transparent font-poppins">{sectionData.leftSection.titleHighlight}</span>
                </h2>
                <Leaf className="w-6 h-6 md:w-10 md:h-10 text-[#f58220] fill-[#f58220] self-end mb-0.5 md:mb-1" />
              </div>

              {/* Green Line Divider */}
              <div className="w-8 md:w-12 h-1 bg-[#3b8c2a] mb-2 md:mb-3"></div>

              {/* Subtitle */}
              <p className="text-[12px] md:text-[16px] font-semibold text-gray-700 uppercase tracking-wide mb-2 md:mb-4 font-poppins leading-tight md:leading-normal">
                {sectionData.leftSection.subtitle}
              </p>

              {/* Description */}
              <p className="text-[11px] md:text-[16px] text-gray-700 font-normal leading-tight md:leading-[1.6] max-w-[500px] mb-3 md:mb-4 font-inter">
                {sectionData.leftSection.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-1.5 md:gap-2 max-w-[520px] mb-3 md:mb-4">
                {sectionData.leftSection.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 md:gap-3 bg-[#f8fcf9] hover:bg-[#f0f9f3] transition-colors px-1.5 py-1.5 md:px-3 md:py-1.5 rounded-lg md:rounded-xl border border-[#3b8c2a]/10 shadow-sm">
                    <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-[#3b8c2a] shrink-0 border border-[#3b8c2a]/20 shadow-sm">
                      <feat.icon className="w-3.5 h-3.5 md:w-5 md:h-5" strokeWidth={2} />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <span className="text-[10px] md:text-[13px] font-semibold text-[#1a1a1a] leading-tight uppercase font-poppins truncate">{feat.title}</span>
                      <span className="text-[8px] md:text-[11px] font-medium text-gray-600 leading-tight uppercase font-inter truncate">{feat.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-2 md:gap-10">
                <Link
                  href={sectionData.leftSection.buttons.primary.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#3b8c2a] hover:bg-[#2d7a2d] text-white px-3 py-1.5 md:px-6 md:py-2 rounded-md font-semibold text-[10px] md:text-[12px] lg:text-[14px] tracking-widest uppercase transition-colors flex items-center gap-1.5 md:gap-2 shadow-lg shadow-green-600/20 min-h-[36px] md:min-h-[44px] font-poppins"
                >
                  <CalendarCheck className="w-3.5 h-3.5 md:w-5 md:h-5" />
                  {sectionData.leftSection.buttons.primary.text}
                  <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 ml-0.5 md:ml-1" />
                </Link>
                <Link
                  href={sectionData.leftSection.buttons.secondary.link}
                  className="bg-white hover:bg-gray-50 border border-gray-300 text-[#1a1a1a] px-3 py-1.5 md:px-6 md:py-2 rounded-md font-semibold text-[10px] md:text-[12px] lg:text-[14px] tracking-widest uppercase transition-colors flex items-center gap-1.5 md:gap-2 shadow-sm min-h-[36px] md:min-h-[44px] font-poppins"
                >
                  <CalendarDays className="w-3.5 h-3.5 md:w-5 md:h-5 text-[#3b8c2a]" />
                  {sectionData.leftSection.buttons.secondary.text}
                </Link>
              </div>

            </div>

            {/* Right: Image Card */}
            <div className="flex-1 w-full lg:max-w-[50%] relative mt-2 lg:mt-0">
              <div className="relative w-full h-[180px] sm:h-[300px] lg:h-[530px] rounded-[12px] md:rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.15)] md:shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[3px] md:border-[6px] border-white">
                <Image
                  src={sectionData.rightSection.image}
                  alt={sectionData.rightSection.imageAlt}
                  fill
                  priority
                  quality={80}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>

          </div>

          {/* Bottom Section: Stats Bar */}
          <div className="w-full bg-white rounded-[12px] md:rounded-[16px] shadow-[0_8px_20px_rgba(0,0,0,0.06)] md:shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 py-2 px-3 md:py-3 md:px-6">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-2 md:gap-4">
              {sectionData.statsBar.map((stat, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex items-center md:items-start gap-1.5 md:gap-3 shrink-0 text-left w-[48%] lg:w-auto">
                    <div className="w-6 h-6 md:w-9 md:h-9 rounded-full bg-[#f4fcf6] flex items-center justify-center text-[#3b8c2a] border border-[#3b8c2a]/20 shrink-0">
                      <stat.icon className="w-3 h-3 md:w-4 md:h-4" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[12px] md:text-[20px] font-semibold text-[#3b8c2a] leading-none mb-0.5 md:mb-1 font-poppins">
                        {/^[\d,]+/.test(stat.val) ? <StatCounter value={stat.val} /> : stat.val}
                      </span>
                      <span className="font-semibold text-gray-600 uppercase tracking-widest text-[8px] md:text-[12px] leading-none mt-0.5 md:mt-1 font-poppins">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                  {i < arr.length - 1 && <div className="hidden lg:block w-[1px] h-6 bg-gray-200 shrink-0"></div>}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── PREMIUM FULL WIDTH BAND ── */}
      <section className="hidden md:block w-full bg-[#1b5e20]  font-inter relative z-30 py-2 md:py-2.5 lg:py-3 border-y border-[#facc15]/20 shadow-[0_10px_40px_rgba(0,0,0,0.15)] overflow-visible">
        <style>{`
          @keyframes sparkleAnim {
            0%, 100% { opacity: 0; transform: scale(0.4) rotate(0deg); }
            50% { opacity: 1; transform: scale(1.2) rotate(180deg); }
          }
        `}</style>
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#1b5e20]/20 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#facc15]/10 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none"></div>

        <div className="px-3 md:px-14 grid grid-cols-2 md:flex md:flex-row xl:flex xl:items-center justify-between gap-y-3 gap-x-2 md:gap-6 xl:gap-4 relative z-10">

          {/* Mapped Premium Band Items */}
          {sectionData.premiumBand.items.map((item, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="flex items-center gap-1.5 md:gap-3 group">
                <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#facc15] shadow-sm group-hover:bg-[#facc15] group-hover:text-[#0b2912] transition-colors duration-300 shrink-0">
                  <item.icon className="w-3.5 h-3.5 md:w-5 md:h-5" strokeWidth={2} />
                </div>
                <div className="flex flex-col text-left font-inter min-w-0">
                  <span className="text-[10px] md:text-[14px] lg:text-[16px] font-semibold text-white leading-none mb-0.5 md:mb-1 uppercase truncate">{item.title}</span>
                  <span className="text-[7.5px] md:text-[11px] lg:text-[12px] font-semibold text-[#facc15] uppercase tracking-widest leading-none truncate">{item.subtitle}</span>
                </div>
              </div>

              <div className="hidden xl:block w-[1px] h-8 bg-white/10"></div>
            </React.Fragment>
          ))}

          {/* Register Button */}
          <div className="relative shrink-0 z-30 col-span-2 md:col-span-1 flex justify-center md:block mt-1 md:mt-0">
            <Sparkle color="#007979" shadow="#ffffff" style={{ top: "-12px", left: "5%", animationDelay: "0s" }} />
            <Sparkle color="#007979" shadow="#ffffff" style={{ top: "-15px", left: "28%", animationDelay: "0.3s" }} />
            <Sparkle color="#007979" shadow="#ffffff" style={{ top: "-13px", left: "50%", animationDelay: "0.6s" }} />
            <Sparkle color="#007979" shadow="#ffffff" style={{ top: "-15px", left: "72%", animationDelay: "0.9s" }} />
            <Sparkle color="#007979" shadow="#ffffff" style={{ top: "-12px", right: "5%", animationDelay: "1.2s" }} />
            <Link
              href={sectionData.premiumBand.button.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-1.5 md:gap-2.5 bg-[#007979] hover:bg-[#005f5f] text-white px-4 py-1.5 md:px-6 md:py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,121,121,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 shrink-0 font-inter overflow-hidden border border-white/20"
            >
              <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <span className="text-white font-semibold text-[11px] md:text-[13px] lg:text-[14px] tracking-widest uppercase relative z-10">
                {sectionData.premiumBand.button.text}
              </span>
              <div className="w-4 h-4 md:w-6 md:h-6 bg-white/20 rounded-full flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#007979] transition-colors relative z-10">
                <ArrowRight className="w-2.5 h-2.5 md:w-3.5 md:h-3.5" strokeWidth={3} />
              </div>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default BuyerSellerMeet;

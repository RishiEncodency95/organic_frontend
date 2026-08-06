"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
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

const BuyerSellerMeet = () => {
  return (
    <>
      <section className="relative w-full bg-[#fafafa] py-2 lg:py-4 px-2 lg:px-11  border-t border-gray-100 overflow-hidden">

        {/* Background Dotted Pattern */}
        <div className="absolute top-[30%] left-[45%] w-64 h-64 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3b8c2a 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>

        <div className=" relative z-10 flex flex-col gap-6">

          {/* Top Section: Text (Left) + Image (Right) */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6">

            {/* Left: Text Content */}
            <div className="flex flex-col flex-1 w-full lg:max-w-[50%]">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#f4fcf6] border border-[#d1e8d6] rounded-md px-3 py-1 mb-3 w-max shadow-sm">
                <CalendarCheck className="w-3.5 h-3.5 text-[#2c783c]" />
                <span className="text-[10px] font-bold text-[#2c783c] tracking-wider uppercase">Pre-Scheduled Meetings</span>
              </div>

              {/* Title */}
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-[32px] md:text-[42px] font-black leading-[1.05] text-[#1a1a1a] uppercase tracking-tight">
                  BUYER-SELLER <br />
                  <span className="bg-gradient-to-r from-[#00643b] to-[#f58220] bg-clip-text text-transparent">MEET 2027</span>
                </h2>
                <Leaf className="w-8 h-8 md:w-10 md:h-10 text-[#f58220] fill-[#f58220] self-end mb-1" />
              </div>

              {/* Green Line Divider */}
              <div className="w-12 h-1 bg-[#3b8c2a] mb-3"></div>

              {/* Subtitle */}
              <p className="text-[10px] md:text-[12px] font-bold text-gray-600 uppercase tracking-widest mb-3">
                Bridging the gap between <span className="text-[#3b8c2a]">Organic Buyers</span> and <span className="text-[#3b8c2a]">Sustainable Brands</span>
              </p>

              {/* Description */}
              <p className="text-[12px] md:text-[13px] text-gray-700 font-medium leading-relaxed max-w-[480px] mb-4">
                Join India's most exclusive B2B networking platform for the organic sector. Our highly curated Buyer-Seller Meet brings together certified farmers, eco-friendly product manufacturers, and top-tier global buyers. Pre-schedule your 1-on-1 meetings to secure bulk orders and forge lasting partnerships in the booming sustainable market.
              </p>

              {/* Features Row */}
              <div className="flex flex-wrap items-start gap-3 justify-between max-w-[480px] mb-5">
                {[
                  { icon: UserCheck, title: 'VERIFIED', sub: 'ORGANIC BUYERS' },
                  { icon: Handshake, title: '1-ON-1 B2B', sub: 'MEETINGS' },
                  { icon: Globe, title: 'LUCRATIVE GREEN', sub: 'OPPORTUNITIES' },
                  { icon: Store, title: 'EXPAND GLOBAL', sub: 'REACH' },
                ].map((feat, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="flex flex-col items-center text-center w-[20%] min-w-[60px]">
                      <div className="w-10 h-10 rounded-full bg-[#f4fcf6] flex items-center justify-center text-[#3b8c2a] mb-2 border border-[#3b8c2a]/20">
                        <feat.icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                      <span className="text-[8px] md:text-[9px] font-black text-[#1a1a1a] leading-tight uppercase">{feat.title}<br />{feat.sub}</span>
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="w-px h-10 bg-gray-200 mt-2 hidden sm:block"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/buyer-registration"
                  className="bg-[#3b8c2a] hover:bg-[#2d7a2d] text-white px-5 py-2.5 rounded-md font-bold text-[10px] md:text-[11px] tracking-widest uppercase transition-colors flex items-center gap-2 shadow-lg shadow-green-600/20"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  Register Now
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
                <Link
                  href="/schedule"
                  className="bg-white hover:bg-gray-50 border border-gray-300 text-[#1a1a1a] px-5 py-2.5 rounded-md font-bold text-[10px] md:text-[11px] tracking-widest uppercase transition-colors flex items-center gap-2 shadow-sm"
                >
                  <CalendarDays className="w-3.5 h-3.5 text-[#3b8c2a]" />
                  View Schedule
                </Link>
              </div>

            </div>

            {/* Right: Image Card */}
            <div className="flex-1 w-full lg:max-w-[50%] relative">
              <div className="relative w-full h-[300px] lg:h-[380px] rounded-[16px] lg:rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1200&auto=format&fit=crop"
                  alt="Buyer Seller Meet"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
            </div>

          </div>

          {/* Bottom Section: Stats Bar */}
          <div className="w-full bg-white rounded-[16px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 py-2 px-4 md:py-3 md:px-6">
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-4">
              {[
                { icon: Users, val: '10,000+', label: 'TRADE VISITORS' },
                { icon: Store, val: '300+', label: 'ORGANIC EXHIBITORS' },
                { icon: Globe, val: '2,500+', label: 'GLOBAL BUYERS' },
                { icon: CalendarDays, val: '3 DAYS', label: 'OF NETWORKING' },
              ].map((stat, i, arr) => (
                <React.Fragment key={i}>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-3 shrink-0 text-center md:text-left">
                    <div className="w-9 h-9 rounded-full bg-[#f4fcf6] flex items-center justify-center text-[#3b8c2a] border border-[#3b8c2a]/20 shrink-0">
                      <stat.icon className="w-4 h-4" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-black text-[16px] md:text-[20px] font-semibold text-[#3b8c2a] leading-none mb-1">
                        {/^[\d,]+/.test(stat.val) ? <StatCounter value={stat.val} /> : stat.val}
                      </span>
                      <span className="font-bold text-gray-500 uppercase tracking-widest text-[9px] md:text-[10px] leading-none">
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
      {/* ── FOOTER BANNER ── */}
      <section className="w-full bg-[#3b8c2a] relative z-20 py-1 lg:py-2 px-2 lg:px-11 border-y border-[#164429] shadow-2xl overflow-hidden">

        {/* Abstract Shape Overlay */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>

        <div className="w-full flex flex-col xl:flex-row items-center justify-between gap-4 relative z-10">

          {/* Item 1 */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-teal-600 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Users className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] lg:text-[14px] font-black text-white leading-tight uppercase">GROW TOGETHER.</span>
              <span className="text-[9px] lg:text-[10px] font-bold text-teal-50 uppercase tracking-wider">MEET. CONNECT.</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-6 bg-white/40"></div>

          {/* Item 2 */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-teal-600 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <CalendarDays className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] lg:text-[14px] font-black text-white leading-tight uppercase">19 &ndash; 21 FEBRUARY</span>
              <span className="text-[9px] lg:text-[10px] font-bold text-teal-50 uppercase tracking-wider">2027</span>
            </div>
          </div>

          <div className="hidden xl:block w-[1px] h-6 bg-white/40"></div>

          {/* Item 3 */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-teal-600 shadow-md group-hover:scale-105 transition-transform duration-300 shrink-0">
              <MapPin className="w-4 h-4" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[13px] lg:text-[14px] font-black text-white leading-tight uppercase">PRAGATI MAIDAN</span>
              <span className="text-[9px] lg:text-[10px] font-bold text-teal-50 uppercase tracking-wider">NEW DELHI, INDIA</span>
            </div>
          </div>

          {/* Right Side Button */}
          <Link
            href="/buyer-registration"
            className="bg-[#f58220] hover:bg-[#d97017] text-white px-5 py-2 lg:py-2 rounded-md font-black text-[12px] lg:text-[13px] tracking-widest uppercase transition-transform hover:scale-105 flex items-center justify-center gap-2 shadow-md shadow-[#f58220]/30 shrink-0"
          >
            <CalendarCheck className="w-4 h-4" strokeWidth={2.5} />
            REGISTER AS BUYER
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>

        </div>
      </section>
    </>
  );
};

export default BuyerSellerMeet;

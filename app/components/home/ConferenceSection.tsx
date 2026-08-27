"use client";

import React from 'react';
import { Leaf, ArrowRight, Calendar, MapPin, Users, CheckCircle, Mic, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import global1 from '../../assets/home/global1.png';



// ── Dynamic Data Configuration ──
const conferenceData = {
  sectionTag: "GLOBAL CONFERENCE & SEMINARS",
  titleMain: "Where Knowledge Meets",
  titleHighlight: "the Future of Organic",
  description: "Join expert-led sessions, panel discussions & thought leadership talks on the latest trends shaping the future of organic, natural and sustainable living.",
  checklist: [
    "Expert-led panel discussions & keynotes",
    "Emerging trends in organic farming & retail",
    "Sustainable business & growth strategies"
  ],
  button: {
    text: "View Conference Schedule",
    link: "https://arogya.namogange.org/"
  },
  eventInfo: [
    { icon: Calendar, title: '19 – 21', sub: 'FEBRUARY 2027' },
    { icon: MapPin, title: 'PRAGATI MAIDAN', sub: 'NEW DELHI' },
    { icon: Users, title: 'INSIGHTS. IDEAS.', sub: 'IMPACT.' },
    { icon: Mic, title: '50+ GLOBAL', sub: 'SPEAKERS' },
    { icon: BookOpen, title: '20+ KEY', sub: 'SESSIONS' },
  ],
  image: global1,
  imageAlt: "Conference and Seminars"
};

// Orange Sparkle component
const OrangeSparkle = ({ style }: { style?: React.CSSProperties }) => (
  <span
    style={{
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: '11px',
      color: '#ffb347',
      textShadow: '0 0 5px #ff8c00, 0 0 10px #ff6600, 0 0 18px rgba(255,140,0,0.8)',
      animation: 'orangeSparkleAnim 1.8s ease-in-out infinite',
      opacity: 0,
      zIndex: 20,
      ...style,
    }}
  >
    ✦
  </span>
);

const ConferenceSeminars = () => {
  return (
    <section className="bg-white py-2 md:py-4 lg:py-6 px-4 md:px-14 overflow-hidden relative shadow-[0_0_60px_rgba(245,130,32,0.1)] border-y border-[#f58220]/20 z-20">
      {/* Subtle Glowing Highlights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f58220]/[0.04] rounded-full blur-[80px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#3b8c2a]/[0.04] rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <style>{`
        /* ── Orange shimmer for button bg ── */
        @keyframes orangeShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* ── Sweep shine ── */
        @keyframes orangeSweep {
          0%   { left: -75%; }
          100% { left: 150%; }
        }

        /* ── Orange sparkle float-up ── */
        @keyframes orangeSparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.3) translateY(-5px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-8px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-11px); }
        }

        /* ── Orange Button ── */
        .orange-btn {
          position: relative;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            #ff6a00 0%,
            #ff8c00 25%,
            #ffb347 50%,
            #ff8c00 75%,
            #ff6a00 100%
          );
          background-size: 200% 200%;
          animation: orangeShimmer 2.5s ease infinite;
          border: 1.5px solid #ff9500;
          box-shadow:
            0 0 16px 4px rgba(255,140,0,0.35),
            0 4px 15px rgba(255,100,0,0.3),
            0 1px 2px rgba(255,200,100,0.5) inset,
            0 -1px 2px rgba(180,60,0,0.2) inset;
          transition: filter 0.2s, transform 0.15s;
        }
        .orange-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.35), transparent);
          transform: skewX(-20deg);
          animation: orangeSweep 2.2s infinite;
        }
        .orange-btn:hover {
          filter: brightness(1.08);
          transform: translateY(-1px);
          box-shadow:
            0 0 22px 6px rgba(255,140,0,0.45),
            0 6px 20px rgba(255,100,0,0.4),
            0 1px 3px rgba(255,210,120,0.6) inset,
            0 -1px 3px rgba(180,60,0,0.25) inset;
        }
        .orange-btn:active {
          transform: translateY(0px);
          filter: brightness(0.96);
        }
        .orange-btn .btn-text {
          font-weight: 800;
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #000;
          position: relative;
          z-index: 1;
        }
        .orange-btn .btn-arrow {
          color: #000;
          transition: transform 0.2s;
          position: relative;
          z-index: 1;
        }
        .orange-btn:hover .btn-arrow {
          transform: translateX(3px);
        }
      `}</style>

      <div className="flex flex-col xl:flex-row items-center justify-between gap-6 lg:gap-10 py-2">

        {/* LEFT IMAGE BOX */}
        <div className="flex flex-col md:flex-row items-center gap-2 lg:gap-4 flex-1 w-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-start w-full md:max-w-[70%]"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] md:text-[13px] lg:text-[14px] font-bold uppercase tracking-widest text-[#f58220] bg-[#f58220]/10 px-4 py-1.5 rounded-full border border-[#f58220]/20">
                {conferenceData.sectionTag}
              </span>
            </div>

            <h3 className="text-[18px] md:text-[24px] lg:text-[28px] font-medium text-[#1a1a1a] leading-[1.2] mb-4">
              {conferenceData.titleMain} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00643b] to-[#3b8c2a]">{conferenceData.titleHighlight}</span>
            </h3>

            <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] mb-6 font-normal border-l-4 border-[#f58220] pl-4">
              {conferenceData.description}
            </p>

            {/* Elegant Checklist */}
            <div className="flex flex-col gap-2 mb-5 w-full">
              {conferenceData.checklist.map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 bg-[#f58220]/10 p-0.5 rounded-full">
                    <CheckCircle className="w-4 h-4 text-[#f58220] shrink-0" />
                  </div>
                  <span className="text-[15px] md:text-[16px] font-medium text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            {/* Orange Sparkle Button */}
            <div className="relative group/btn w-max">
              {/* Orange Sparkles — same positions as Footer gold button */}
              <div className="hidden md:block">
                <OrangeSparkle style={{ top: '-9px', left: '10%', animationDelay: '0s' }} />
                <OrangeSparkle style={{ top: '-11px', left: '40%', animationDelay: '0.35s' }} />
                <OrangeSparkle style={{ top: '-7px', right: '14%', animationDelay: '0.7s' }} />
                <OrangeSparkle style={{ bottom: '-9px', left: '22%', animationDelay: '0.18s' }} />
                <OrangeSparkle style={{ bottom: '-11px', right: '28%', animationDelay: '0.55s' }} />
              </div>

              <Link href={conferenceData.button.link} target="_blank" rel="noopener noreferrer" className="relative z-10">
                <button className="flex items-center justify-center gap-2 px-8 py-2 rounded-xl bg-gradient-to-r from-[#f58634] to-[#ff9b4f] hover:from-[#e67929] hover:to-[#f58634] text-white font-semibold uppercase tracking-wider shadow-[0_5px_15px_rgba(245,134,52,0.3)] hover:shadow-[0_8px_25px_rgba(245,134,52,0.4)] transition-all duration-300 hover:-translate-y-1 min-h-[44px] group">
                  <span className="text-[12px] md:text-[14px]">{conferenceData.button.text}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-[1.5px] h-auto self-stretch my-4 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-100 shrink-0" />

          {/* Event Info Stack */}
          <div className="hidden md:flex flex-col gap-5 pl-2 shrink-0">
            {conferenceData.eventInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#fdf5ed] group-hover:bg-[#f58220] transition-colors duration-300 flex items-center justify-center border border-[#f58220]/30 shadow-sm shrink-0">
                  <item.icon className="w-5 h-5 text-[#f58220] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] md:text-[13px] lg:text-[14px] font-bold text-[#1a1a1a] leading-tight uppercase tracking-[0.1em]">
                    {item.title}
                  </span>
                  <span className="text-[11px] lg:text-[12px] font-semibold text-gray-500 leading-tight uppercase tracking-[0.15em] mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side  */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full xl:w-[45%] shrink-0"
        >
          <div className="relative rounded-[24px] overflow-hidden border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] group h-[300px] md:h-[390px]">
            <Image
              src={conferenceData.image}
              alt={conferenceData.imageAlt}
              width={600}
              height={400}
              sizes="(max-width: 1280px) 100vw, 45vw"
              quality={75}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-[#00643b]/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConferenceSeminars;
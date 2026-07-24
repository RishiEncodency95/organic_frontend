"use client";

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import {
  Users, Globe2, Store, Mic2, Handshake, Package, Camera, ChevronLeft, ChevronRight, Leaf, 
  Building2, Mic, Sparkles, Globe, X, ZoomIn
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const ICON_MAP: Record<string, React.ReactNode> = {
  Users: <Users className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Globe2: <Globe2 className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  Store: <Store className="w-5 h-5" />,
  Mic: <Mic className="w-5 h-5" />,
  Mic2: <Mic2 className="w-5 h-5" />,
  Handshake: <Handshake className="w-5 h-5" />,
  Package: <Package className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Camera: <Camera className="w-5 h-5" />,
};

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

const EventGlimpses = () => {
  const [selectedImg, setSelectedImg] = useState<any>(null);

  const glimpseData = {
    subheading: "EVENT GLIMPSES",
    heading: "GLIMPSES OF THE EVENT",
    description: "Experience the vibrant energy and impactful moments from our past events. Witness a confluence of ideas, organic innovations, and sustainable practices.",
    images: [
      { url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", title: "Inauguration" },
      { url: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80", title: "Panel Discussion" },
      { url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", title: "Exhibition" },
      { url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80", title: "Networking" },
      { url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", title: "Workshops" },
    ],
    counters: [
      { icon: "Users", number: "15,000+", label: "Attendees" },
      { icon: "Store", number: "500+", label: "Exhibitors" },
      { icon: "Mic", number: "120+", label: "Speakers" },
      { icon: "Globe", number: "30+", label: "Countries" },
    ],
    counterText: "Join thousands of experts and professionals shaping the organic future."
  };

  const images = glimpseData.images || [];
  const stats = glimpseData.counters || [];



  return (
    <section
      className="relative pt-4 pb-3 overflow-hidden font-inter"
      style={{ background: '#f5fdf6' }}
    >
      {/* ── BG DECORATIVE ELEMENTS ── */}

      {/* Top-left leaf cluster */}
      <svg
        className="absolute top-0 left-0 pointer-events-none"
        width="220" height="210"
        viewBox="0 0 220 210"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.18, zIndex: 0 }}
      >
        <g fill="#2f8f3a">
          <path d="M10 170 Q70 15 210 8 Q130 85 80 195 Z" opacity="0.75" />
          <path d="M0 105 Q45 38 140 28 Q75 85 28 160 Z" opacity="0.45" />
          <ellipse cx="42" cy="178" rx="32" ry="13" opacity="0.3" transform="rotate(-22 42 178)" />
        </g>
      </svg>

      {/* Top-right circle arc */}
      <svg
        className="absolute pointer-events-none"
        style={{ top: '-30px', right: '-30px', width: '170px', opacity: 0.13, zIndex: 0 }}
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="160" cy="20" r="120" fill="none" stroke="#2f8f3a" strokeWidth="18" />
        <circle cx="160" cy="20" r="90"  fill="none" stroke="#2f8f3a" strokeWidth="8"  />
      </svg>

      {/* Bottom-right dot grid */}
      <svg
        className="absolute pointer-events-none"
        style={{ bottom: '80px', right: '24px', opacity: 0.13, zIndex: 0 }}
        width="90" height="70"
        viewBox="0 0 90 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[10,30,50,70,90].map(x =>
          [10,30,50,70].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#2f8f3a" />
          ))
        )}
      </svg>

      {/* ── CONTENT ── */}
      <div className="w-full px-2 lg:px-11 relative z-10">

        {/* Header */}
        <div className="text-left md:text-center mb-4 px-4">
          <div className="flex items-center justify-start md:justify-center gap-2 mb-2.5">
            <Leaf size={20} className="text-[#2f8f3a]" />
            <span className="text-[#0b4d17] font-bold tracking-[0.25em] uppercase text-[12px] md:text-[14px]">
              {glimpseData.subheading || 'Event Glimpses'}
            </span>
            <Leaf size={20} className="text-[#2f8f3a] scale-x-[-1] hidden md:block" />
          </div>
          <h2 
            className="text-[16px] md:text-[29px] font-black text-[#0b2912] mb-2 uppercase tracking-tight flex flex-col justify-start md:justify-center items-center text-left md:text-center leading-[1.1] max-w-4xl mx-auto px-4"
          >
            {glimpseData.heading?.toUpperCase().includes("OF THE") ? (
              <>
                <span className="opacity-90 block text-[13px] md:text-[22px]">{glimpseData.heading.substring(0, glimpseData.heading.toUpperCase().indexOf("OF THE") + 6)}</span>
                <span className="text-[#2f8f3a] mt-0 block">{glimpseData.heading.substring(glimpseData.heading.toUpperCase().indexOf("OF THE") + 6)}</span>
              </>
            ) : (
              <span dangerouslySetInnerHTML={{ __html: glimpseData.heading }} />
            )}
          </h2>
          <div className="flex items-center justify-start md:justify-center gap-4 max-w-2xl md:mx-auto">
            <div className="hidden md:block h-[1px] w-12 bg-[#b6d9bb]" />
            <div 
              className="text-slate-700 text-sm md:text-base tracking-wide prose prose-sm max-w-none text-left md:text-center"
              dangerouslySetInnerHTML={{ __html: glimpseData.description }}
            />
            <div className="hidden md:block h-[1px] w-12 bg-[#b6d9bb]" />
          </div>
        </div>

        {/* Marquee Area */}
        <div className="relative mb-0 overflow-hidden rounded-2xl shadow-xl bg-white/40 backdrop-blur-sm">
          <style>{`
            .glimpse-marquee-container {
              display: flex;
              width: max-content;
              animation: scroll-glimpse 50s linear infinite;
            }
            @keyframes scroll-glimpse {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .glimpse-marquee-container:hover {
              animation-play-state: paused;
            }
            .glimpse-card {
              width: 280px;
              height: 260px;
              flex-shrink: 0;
              margin-left: -40px;
              clip-path: polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%);
              cursor: pointer;
              position: relative;
              transition: all 0.5s ease;
            }
            .glimpse-card:first-child {
              margin-left: 0;
            }
            @media (max-width: 768px) {
              .glimpse-card {
                width: 220px;
                height: 200px;
                margin-left: -30px;
              }
              @keyframes scroll-glimpse {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
            }
          `}</style>
          
          <div className="glimpse-marquee-container">
            {/* Double images for seamless loop */}
            {[...images, ...images, ...images].map((img: any, idx: number) => (
              <div
                key={idx}
                className="glimpse-card group/card"
                onClick={() => setSelectedImg(img)}
              >
                <img loading="lazy" decoding="async" src={img.url}
                  alt={img.title || 'Event Glimpse'}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                />
                
                {/* Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/card:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                    <ZoomIn className="text-white w-10 h-10 mb-2 transform scale-50 group-hover/card:scale-100 transition-transform duration-500" />
                    <span className="text-white font-bold text-center text-[12px] uppercase tracking-wider">{img.title}</span>
                </div>

                {/* Bottom Green Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0b4d17]/80 to-transparent opacity-60" />

                {/* Decorative Dots */}
                <div className="absolute bottom-6 right-8 opacity-40">
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-0.5 h-0.5 bg-white rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Footer Bar */}
        <div className="px-0 py-2 mt-2">
          <div className="w-full bg-white rounded-[24px] md:rounded-2xl p-1.5 flex flex-col md:flex-row items-stretch border border-[#3b8c2a]/10 shadow-[0_15px_40px_rgba(59,140,42,0.06)] gap-5 md:gap-0">
            <div className="flex-1 w-full grid grid-cols-2 sm:grid-cols-3 md:flex md:items-center md:justify-around px-2 py-2 md:py-0 gap-y-4 md:gap-0">
              {stats.map((stat: any, idx: number) => (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-2.5 px-3 md:px-5 md:border-r border-gray-100 last:border-r-0 flex-1 justify-center group">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#f3f9f4] border border-[#e8f5ec] flex items-center justify-center text-[#3b8c2a] flex-shrink-0 group-hover:bg-[#3b8c2a] group-hover:text-white transition-colors duration-300">
                    {ICON_MAP[stat.icon] || <Users size={18} />}
                  </div>
                  <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <span className="text-[#1e293b] font-black text-[16px] md:text-[20px] leading-tight mb-0.5">
                      {/^[\d,]+/.test(stat.number) ? <StatCounter value={stat.number} /> : stat.number}
                    </span>
                    <span className="text-[#64748b] text-[9px] md:text-[10px] uppercase tracking-widest font-bold leading-tight">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Pill */}
            <div className="bg-[#3b8c2a] rounded-[18px] md:rounded-full p-1.5 md:pr-5 flex items-center gap-2.5 w-full md:w-auto shadow-lg flex-shrink-0 hover:bg-[#2c6e1f] hover:shadow-xl transition-all duration-300 cursor-pointer group">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center text-[#3b8c2a] shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Camera size={18} />
              </div>
              <div className="flex flex-col py-0.5 justify-center">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className="text-white font-black text-[12px] md:text-[13px] uppercase tracking-tight leading-none">Endless</span>
                  <span className="text-white/80 text-[9px] font-bold uppercase tracking-widest leading-none">Opportunities</span>
                </div>
                <p className="text-white/90 text-[9px] md:text-[10px] leading-[1.2] font-semibold tracking-wide hidden md:block max-w-[180px]">
                  {glimpseData.counterText}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={32} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img loading="lazy" decoding="async" src={selectedImg.url}
                alt={selectedImg.title}
                className="w-full h-full object-contain rounded-xl shadow-2xl border border-white/10"
              />
              <div className="mt-6 text-center px-4">
                <h3 className="text-white font-black text-2xl uppercase tracking-widest">{selectedImg.title}</h3>
                <p className="text-white/60 text-sm mt-2">{glimpseData.counterText}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGlimpses;
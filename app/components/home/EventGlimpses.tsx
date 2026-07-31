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
      className="relative py-2 overflow-hidden font-inter"
      style={{ background: '#f5fdf6' }}
    >
      {/* ── BG DECORATIVE ELEMENTS ── */}
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
      <svg
        className="absolute pointer-events-none"
        style={{ top: '-30px', right: '-30px', width: '170px', opacity: 0.13, zIndex: 0 }}
        viewBox="0 0 180 180"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="160" cy="20" r="120" fill="none" stroke="#2f8f3a" strokeWidth="18" />
        <circle cx="160" cy="20" r="90" fill="none" stroke="#2f8f3a" strokeWidth="8" />
      </svg>
      <svg
        className="absolute pointer-events-none"
        style={{ bottom: '80px', right: '24px', opacity: 0.13, zIndex: 0 }}
        width="90" height="70"
        viewBox="0 0 90 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {[10, 30, 50, 70, 90].map(x =>
          [10, 30, 50, 70].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#2f8f3a" />
          ))
        )}
      </svg>

      {/* ── CONTENT ── */}
      <div className="w-full  px-2 lg:px-11 relative z-10">

        {/* Header - Side by Side (1 Row on Desktop) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 mb-4 ">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#2f8f3a]/10 border border-[#2f8f3a]/20 mb-2 shadow-sm">
              <Leaf size={16} className="text-[#2f8f3a]" />
              <span className="text-[#0b4d17] font-bold tracking-[0.2em] uppercase text-[11px] md:text-[12px]">
                {glimpseData.subheading}
              </span>
            </div>

            <h2 className="text-[18px] md:text-[26px] lg:text-[26px] font-semibold text-[#0b2912] uppercase tracking-tight leading-[1.1] flex flex-wrap md:flex-nowrap items-center gap-x-2 gap-y-1">
              {glimpseData.heading?.toUpperCase().includes("OF THE") ? (
                <>
                  <span className="text-slate-800 whitespace-nowrap">{glimpseData.heading.substring(0, glimpseData.heading.toUpperCase().indexOf("OF THE") + 6)}</span>
                  <span className="relative text-[#2f8f3a] inline-block whitespace-nowrap">
                    {glimpseData.heading.substring(glimpseData.heading.toUpperCase().indexOf("OF THE") + 6).trim()}
                    <svg className="absolute -bottom-1.5 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,8 Q50,12 100,2" fill="none" stroke="#2f8f3a" strokeWidth="4" strokeLinecap="round" opacity="0.3" />
                    </svg>
                  </span>
                </>
              ) : (
                <span dangerouslySetInnerHTML={{ __html: glimpseData.heading }} />
              )}
            </h2>
          </div>

          <div className="flex-1 md:border-l-2 border-[#2f8f3a]/20 md:pl-8">
            <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed max-w-lg font-medium">
              {glimpseData.description}
            </p>
          </div>
        </div>

        {/* Premium Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4 md:px-0">
          {images.map((img: any, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="group relative w-full h-[280px] md:h-[320px] rounded-[24px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-500"
              onClick={() => setSelectedImg(img)}
            >
              <img
                loading="lazy"
                decoding="async"
                src={img.url}
                alt={img.title || 'Event Glimpse'}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2912]/90 via-[#0b2912]/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500 ease-out">
                  <ZoomIn className="text-white w-6 h-6" />
                </div>
              </div>

              {/* Title Container */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[16px] px-5 py-1.5 flex items-center justify-between transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white font-bold text-[12px] md:text-[16px] uppercase tracking-wider drop-shadow-md">{img.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-[#2f8f3a] transition-colors duration-300">
                    <Camera size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Footer Bar (Original exactly) */}
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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedImg(null)}
          >
            <motion.button
              initial={{ scale: 0, rotate: -90 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 90 }}
              className="absolute top-6 right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 backdrop-blur-md"
            >
              <X size={28} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                loading="lazy"
                decoding="async"
                src={selectedImg.url}
                alt={selectedImg.title}
                className="w-full h-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center px-4 bg-black/50 py-3 px-8 rounded-full backdrop-blur-md border border-white/10"
              >
                <h3 className="text-white font-black text-xl uppercase tracking-widest">{selectedImg.title}</h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGlimpses;
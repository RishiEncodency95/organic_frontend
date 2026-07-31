"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const EventGlimpses = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  ];

  return (
    <section className="relative w-full bg-[#fcfdfc] py-20 md:py-28 overflow-hidden font-inter border-y border-[#3b8c2a]/10">
      
      {/* Premium Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f4fbf5]/50 to-white pointer-events-none" />

      {/* Top Left Leaf SVG Decoration */}
      <svg className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 text-[#3b8c2a] opacity-[0.04] pointer-events-none transform -rotate-12" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 C70 30, 90 50, 100 80 C80 90, 50 100, 20 80 C0 50, 20 30, 50 0 Z" />
        <path d="M50 0 C40 40, 20 70, 0 100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>
      
      {/* Top Right Leaf SVG Decoration */}
      <svg className="absolute -top-10 -right-10 w-64 h-64 md:w-96 md:h-96 text-[#3b8c2a] opacity-[0.04] pointer-events-none transform rotate-12 scale-x-[-1]" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 C70 30, 90 50, 100 80 C80 90, 50 100, 20 80 C0 50, 20 30, 50 0 Z" />
        <path d="M50 0 C40 40, 20 70, 0 100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-2">
          <div className="inline-flex items-center gap-2.5 px-4 py-1 rounded-full bg-[#3b8c2a]/10 border border-[#3b8c2a]/20 mb-4 shadow-sm backdrop-blur-sm">
            <span className="text-[#3b8c2a] text-lg">🌿</span>
            <span className="text-[#154726] font-bold tracking-[0.15em] uppercase text-[11px] md:text-[13px]">
              Moments That Inspire, Connections That Grow
            </span>
            <span className="text-[#3b8c2a] text-lg">🌿</span>
          </div>
          
          <h2 className="text-[16px] md:text-[26px] font-semibold uppercase tracking-tight leading-tight mb-4 drop-shadow-sm">
            <span className="text-[#0d2a1b]">EVENT</span> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3b8c2a] to-[#245e19]">GALLERY</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#3b8c2a] opacity-60 rounded-full"></div>
            <span className="text-[#3b8c2a] text-xl leading-none transform hover:rotate-180 transition-transform duration-700">🌿</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#3b8c2a] opacity-60 rounded-full"></div>
          </div>

          <p className="text-[#4b5563] text-[14px] md:text-[16px] max-w-2xl font-medium leading-relaxed">
            Glimpses from past events that reflect innovation, collaboration and growth in the organic industry.
          </p>
        </div>

        {/* Gallery Grid Wrapper with Slider UI */}
        <div className="relative w-full px-2 md:px-14">
          
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:ml-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 text-[#3b8c2a] hover:bg-[#3b8c2a] hover:text-white hover:scale-110 transition-all duration-300 z-20 cursor-pointer group">
            <ChevronLeft size={24} strokeWidth={2.5} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:mr-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-gray-100 text-[#3b8c2a] hover:bg-[#3b8c2a] hover:text-white hover:scale-110 transition-all duration-300 z-20 cursor-pointer group">
            <ChevronRight size={24} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {images.map((src, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="w-full aspect-[4/3] rounded-lg md:rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImg(src)}
              >
                <img 
                  src={src} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0d2a1b]/0 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-14">
          <div className="w-8 h-2.5 rounded-full bg-[#3b8c2a] cursor-pointer shadow-[0_0_10px_rgba(59,140,42,0.4)]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0] hover:bg-[#cbd5e1] transition-colors cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0] hover:bg-[#cbd5e1] transition-colors cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0] hover:bg-[#cbd5e1] transition-colors cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e2e8f0] hover:bg-[#cbd5e1] transition-colors cursor-pointer"></div>
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
                src={selectedImg}
                alt="Zoomed Event Glimpse"
                className="w-full h-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGlimpses;
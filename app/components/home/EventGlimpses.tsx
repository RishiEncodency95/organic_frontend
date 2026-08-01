"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const EventGlimpses = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const images = [
    // Top Row
    { src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80", span: 4 },
    { src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80", span: 7 },
    { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", span: 4 },
    { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", span: 5 },
    // Bottom Row
    { src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80", span: 5 },
    { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80", span: 6 },
    { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80", span: 4 },
    { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", span: 5 },
  ];

  return (
    <section className="relative w-full bg-white py-2 md:py-4 overflow-hidden font-inter">
      {/* Top Left Leaf Decoration */}
      <img 
        src="https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=2000&auto=format&fit=crop" 
        alt="" 
        className="absolute -top-32 -left-32 w-96 h-96 object-cover opacity-10 rounded-full blur-sm pointer-events-none mix-blend-multiply" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
      />
      {/* Top Right Leaf Decoration */}
      <img 
        src="https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=2000&auto=format&fit=crop" 
        alt="" 
        className="absolute -top-32 -right-32 w-96 h-96 object-cover opacity-10 rounded-full blur-sm pointer-events-none mix-blend-multiply scale-x-[-1]" 
      />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-2">
          <p className="text-[#3b8c2a] text-[13px] md:text-[15px] font-bold tracking-wide flex items-center justify-center gap-2 mb-3">
            <span className="text-lg">🌿</span>
            Moments That Inspire, Connections That Grow
            <span className="text-lg">🌿</span>
          </p>
          
          <h2 className="text-[16px] md:text-[26px] font-semibold uppercase tracking-tight leading-tight mb-4">
            <span className="text-[#0d2a1b]">EVENT</span> <span className="text-[#3b8c2a]">GALLERY</span>
          </h2>

          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="h-[1px] w-12 bg-[#3b8c2a] opacity-40"></div>
            <span className="text-[#3b8c2a] text-lg leading-none">🌿</span>
            <div className="h-[1px] w-12 bg-[#3b8c2a] opacity-40"></div>
          </div>

          <p className="text-[#4b5563] text-[14px] md:text-[16px] max-w-2xl font-medium">
            Glimpses from past events that reflect innovation, collaboration and growth.
          </p>
        </div>

        {/* Gallery Grid Wrapper with Slider UI */}
        <div className="relative w-full px-4 md:px-14">
          
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 text-[#3b8c2a] hover:bg-[#3b8c2a] hover:text-white transition-all z-20 cursor-pointer">
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 text-[#3b8c2a] hover:bg-[#3b8c2a] hover:text-white transition-all z-20 cursor-pointer">
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>

          {/* Custom CSS for Exact 20-Column Proportions */}
          <style dangerouslySetInnerHTML={{__html: `
            @media (min-width: 768px) {
              .gallery-exact-grid {
                display: grid;
                grid-template-columns: repeat(20, minmax(0, 1fr));
              }
              .g-span-4 { grid-column: span 4 / span 4; }
              .g-span-5 { grid-column: span 5 / span 5; }
              .g-span-6 { grid-column: span 6 / span 6; }
              .g-span-7 { grid-column: span 7 / span 7; }
            }
          `}} />

          {/* Exact Proportion Grid */}
          <div className="grid grid-cols-1 gap-3 md:gap-5 gallery-exact-grid">
            {images.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`w-full h-[180px] sm:h-[200px] lg:h-[240px] xl:h-[260px] rounded-2xl md:rounded-[16px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all g-span-${img.span}`}
                onClick={() => setSelectedImg(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-contain bg-[#f8f9f5] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0d2a1b]/0  transition-colors duration-300" />
              </motion.div>
            ))}
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#3b8c2a] cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#e5e7eb] hover:bg-[#d1d5db] transition-colors cursor-pointer"></div>
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
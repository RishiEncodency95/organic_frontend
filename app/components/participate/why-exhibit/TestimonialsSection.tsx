"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Quote } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

const defaultTestimonials = [
  {
    companyName1: "Green Earth Organics Pvt. Ltd.",
    companyName2: "Organic Food & Agri",
    location: "Mumbai, India",
    quote: "Bharat Organic Expo gave us direct access to 500+ qualified buyers in just 3 days. We signed 12 new distribution agreements and expanded our reach to Southeast Asia. A must-attend event for any organic food brand!",
    initials: "GE",
    color: "#1b5e20",
  },
  {
    companyName1: "NatureFarm Exports",
    companyName2: "Agriculture & Exports",
    location: "Pune, India",
    quote: "The B2B matchmaking sessions were incredibly productive. We met international importers we would never have connected with otherwise. Our export revenue grew 40% after the expo.",
    initials: "NF",
    color: "#4B1426",
  },
  {
    companyName1: "Herbal Heritage India",
    companyName2: "Ayush & Herbal Products",
    location: "Delhi, India",
    quote: "Outstanding platform for herbal and wellness brands. The quality of visitors and their genuine interest in organic products made every conversation meaningful. Already registered for next year!",
    initials: "HH",
    color: "#0e3b1c",
  },
  {
    companyName1: "PureGrow Technologies",
    companyName2: "Sustainable Agri-Tech",
    location: "Bengaluru, India",
    quote: "As a new startup, this expo gave us the visibility and credibility we needed. We connected with 3 major investors and received 200+ serious inquiries for our bio-inputs during the event.",
    initials: "PG",
    color: "#1b5e20",
  },
  {
    companyName1: "Vedic Wellness Corp",
    companyName2: "Natural Personal Care",
    location: "Jaipur, India",
    quote: "The expo exceeded all our expectations. The footfall was exceptional and the profile of visitors — distributors, retailers, and exporters — was exactly our target audience. Brilliant ROI!",
    initials: "VW",
    color: "#4B1426",
  },
  {
    companyName1: "OrganicIndia Solutions",
    companyName2: "Certification & Compliance",
    location: "Hyderabad, India",
    quote: "We launched our new organic certification services at this expo and got 80+ inquiries on day one itself. The event team was professional and supportive throughout.",
    initials: "OI",
    color: "#0e3b1c",
  },
];

const CHAR_LIMIT = 155;

const TestimonialCard = ({ item, index, expandedId, setExpandedId }: { item: typeof defaultTestimonials[0]; index: number; expandedId: number | null; setExpandedId: (id: number | null) => void }) => {
  const isExpanded = expandedId === index;
  const isLong = item.quote.length > CHAR_LIMIT;

  return (
    <div className="relative flex flex-col w-[250px] md:w-[230px] flex-shrink-0" style={{ paddingTop: "32px" }}>
      {/* Avatar */}
      <div className="absolute top-0 left-1/2 z-20 flex items-center justify-center" style={{ transform: "translateX(-50%)" }}>
        <div
          className="w-16 h-16 rounded-full border-[3px] border-white flex items-center justify-center font-black text-white text-lg"
          style={{ background: item.color, boxShadow: "0 4px 18px rgba(0,0,0,0.15), 0 0 0 2px #e2e8f0" }}
        >
          {item.initials}
        </div>
      </div>

      {/* Card */}
      <div
        className="relative bg-white rounded-[22px] border border-slate-100 flex flex-col overflow-hidden group hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] transition-all duration-500"
        style={{ boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px", height: "280px" }}
      >
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.22 }}
              className="absolute inset-0 bg-white z-[60] flex flex-col rounded-[22px]"
              style={{ boxShadow: "inset 0 0 0 2px #e2e8f0" }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 flex-shrink-0" style={{ background: "linear-gradient(90deg, #f8fdf5 0%, #fff8f3 100%)" }}>
                <div className="flex items-center gap-1.5">
                  <Quote className="w-4 h-4 text-[#1b5e20] transform -scale-x-100" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-inter">Full Review</span>
                </div>
                <button onClick={(e) => { e.stopPropagation(); setExpandedId(null); }} className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ color: "#1b5e20", background: "#f0faf0", border: "1px solid #c6e6c6" }}>
                  ✕ Close
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-3">
                <p className="text-slate-800 text-[11.5px] font-medium leading-relaxed font-inter">{item.quote}</p>
              </div>
              <div className="flex items-center gap-2.5 px-4 py-3 border-t border-slate-100 flex-shrink-0" style={{ background: "#fafafa" }}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-[11px] flex-shrink-0" style={{ background: item.color }}>
                  {item.initials}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-bold text-[10px] leading-tight text-[#1b5e20] font-inter">{item.companyName1}</div>
                  {item.companyName2 && <div className="font-semibold text-[9px] leading-tight text-[#4B1426] mt-0.5 font-inter">{item.companyName2}</div>}
                  <div className="flex items-center gap-1 text-slate-400 text-[8.5px] mt-1 font-inter">
                    <MapPin className="w-2.5 h-2.5 text-[#4B1426] flex-shrink-0" />{item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Header */}
        <div className="pt-[52px] px-4 pb-0 text-center flex-shrink-0 min-h-[82px]">
          <div className="font-bold text-[11.5px] leading-tight text-[#1b5e20] px-1 font-inter">{item.companyName1}</div>
          {item.companyName2 && <div className="font-bold text-[10.5px] leading-tight text-[#4B1426] uppercase tracking-widest px-1 opacity-90 mt-0.5 font-inter">{item.companyName2}</div>}
          <div className="flex items-center justify-center gap-1 text-slate-500 text-[9.5px] mt-2 font-inter">
            <MapPin className="w-2.5 h-2.5 flex-shrink-0 text-[#4B1426]" />
            <span className="truncate max-w-[150px]">{item.location}</span>
          </div>
        </div>

        <div className="h-[1.5px] mx-4 mt-3 rounded-full flex-shrink-0" style={{ background: "linear-gradient(90deg, #1b5e20, #4B1426)" }} />

        {/* Quote */}
        <div className="flex flex-col flex-1 px-4 pt-3 pb-3 relative min-h-0">
          <Quote className="w-5 h-5 text-[#1b5e20] transform -scale-x-100 opacity-70 mb-1.5 flex-shrink-0" />
          <div className="flex-1 overflow-hidden">
            <p className="text-slate-700 text-[11px] font-medium leading-relaxed font-inter">
              {isLong ? `${item.quote.substring(0, CHAR_LIMIT).trim()}…` : item.quote}
            </p>
          </div>
          <div className="mt-auto pt-2 flex-shrink-0">
            {isLong && (
              <button onClick={(e) => { e.stopPropagation(); setExpandedId(index); }} className="flex items-center gap-0.5 text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full font-inter" style={{ color: "#c2410c", background: "linear-gradient(90deg, #fff3ee 0%, #ffe8e0 100%)", border: "1px solid #f5c4b2" }}>
                Read more <span style={{ fontSize: "8px" }}>→</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const doubled = [...defaultTestimonials, ...defaultTestimonials];

  return (
    <section className="pt-4 pb-4 bg-white relative overflow-hidden">
      <style>{`
        @keyframes marqueeScrollTestimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScrollTestimonials 40s linear infinite;
        }
        .testimonials-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <SectionContainer className="relative z-10 !max-w-none px-0">
        <div className="text-center mb-10 px-4">
          <div className="flex items-center justify-center gap-4">
            <span className="w-10 md:w-16 h-[2px] bg-[#1b5e20] rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-[#1b5e20] uppercase tracking-tight font-poppins">What Our Exhibitors Say</h2>
            <span className="w-10 md:w-16 h-[2px] bg-[#1b5e20] rounded-full" />
          </div>
        </div>

        <div className="relative w-full overflow-hidden -mt-16">
          <div className="testimonials-marquee flex gap-10 py-12">
            {doubled.map((item, i) => (
              <TestimonialCard key={i} item={item} index={i} expandedId={expandedId} setExpandedId={setExpandedId} />
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default TestimonialsSection;

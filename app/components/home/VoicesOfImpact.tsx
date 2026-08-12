"use client";

import React from 'react';
import { Play, MapPin, Star, Leaf, Users, Globe, Store, Mic, CalendarHeart, HeartPulse, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: "Bharat Organic Expo 2025",
    subtitle: "Event Highlights",
    duration: "02:45",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Exhibitors Speak",
    subtitle: "Success Stories",
    duration: "03:12",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Leaders Panel",
    subtitle: "Insights & Visions",
    duration: "04:18",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Exhibitors Speak",
    subtitle: "Success Stories",
    duration: "03:12",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Bharat Organic Expo 2025",
    subtitle: "Event Highlights",
    duration: "02:45",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop"
  },
];

const testimonials = [
  {
    id: 1,
    name: "Achaspati Kulwant",
    designation: "Chancellor, University of Patanjali",
    location: "Haridwar",
    quote: "The change is organizing activities with a vision. I wish the project a great success. It's a wonderful initiative for sustainable future. We must all come together to ensure that our environment is protected and cherished by the coming generations, creating a harmonious balance.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Khyati Nayak",
    designation: "PRO – Gujarat Tourism",
    location: "Gujarat",
    quote: "This platform will open eyes of our new generations towards organic living. It provides a unique opportunity to learn from global experts. By adopting these sustainable methodologies, we can actively contribute to a greener ecosystem and promote healthier lifestyle choices.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Mukesh Kumar",
    designation: "The Yogshala Head",
    location: "New Delhi",
    quote: "It made me realize the impact of holistic wellness in our daily decisions. Every small step taken today safeguards our natural resources. Whether it is choosing chemical-free products or supporting local farmers, these choices collectively lead to a monumental positive shift in society.",
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 4,
    name: "Dr. Subramanian Swamy",
    designation: "Bharatiya Janata Party (BJP)",
    location: "New Delhi",
    quote: "The Yogshala Expo is a great step towards a healthier and self-reliant India. It beautifully bridges traditional wisdom with modern practices. The integration of Ayurveda into everyday life ensures that our citizens maintain not just physical strength but also mental and spiritual well-being.",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 5,
    name: "Qazhf Khan",
    designation: "Father of Kairana Model",
    location: "Kairana",
    quote: "The Yogshala Expo ensures honest and responsible contributions. The collective commitment shown here will build a robust organic market. We are witnessing an incredible movement where ethical farming and conscientious consumption are becoming the new standard for a thriving nation.",
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const stats = [
  { icon: Users, val: "8,000+", label: "Trade Visitors" },
  { icon: Globe, val: "1,000+", label: "Global Buyers" },
  { icon: Store, val: "300+", label: "Exhibitors" },
  { icon: Mic, val: "150+", label: "Expert Speakers" },
  { icon: CalendarHeart, val: "B2B", label: "Meetings" },
  { icon: HeartPulse, val: "5,000+", label: "Wellness Products" },
];

const VoicesOfImpact = () => {
  return (
    <section className="relative w-full bg-[#EFF7EE] py-2 md:py-4 lg:py-4 overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Decorative Leaves Top Corners */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-40 mix-blend-multiply">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,0 C100,50 50,100 0,100 Z" fill="#b4d3b2" opacity="0.5" />
          <path d="M0,50 C40,50 80,80 80,120 C80,160 40,200 0,200 Z" fill="#8cb98a" opacity="0.4" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-40 mix-blend-multiply rotate-90">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L100,0 C100,50 50,100 0,100 Z" fill="#b4d3b2" opacity="0.5" />
          <path d="M0,50 C40,50 80,80 80,120 C80,160 40,200 0,200 Z" fill="#8cb98a" opacity="0.4" />
        </svg>
      </div>

      <div className="w-full px-4 md:px-11 relative z-10">

        {/* Testimonials Header */}
        <div className="flex items-center justify-center gap-3 text-[#3b8c2a] font-bold text-[12px] md:text-[14px] lg:text-[15px] uppercase tracking-widest mb-6">
          <Leaf className="w-4 h-4" />
          <span>MORE INSPIRING STORIES</span>
          <Leaf className="w-4 h-4" />
        </div>

        {/* Testimonials Grid/Scroll */}
        <div className="relative mb-4 w-full overflow-hidden -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex w-max animate-scroll-left gap-5 py-2">
            {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testi, idx) => (
              <div key={`${testi.id}-${idx}`} className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#e8f2eb] min-w-[320px] w-[320px] h-[340px] shrink-0 flex flex-col transition-transform hover:-translate-y-1 duration-300 cursor-pointer">
                <div className="flex items-start gap-4 mb-3">
                  <div className="relative">
                    <img src={testi.image} alt={testi.name} className="w-14 h-14 rounded-full object-cover border-2 border-green-100" />
                    {/* Stars attached to image bottom */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white rounded-full px-1.5 py-0.5 flex items-center shadow-sm border border-gray-100">
                      {[1, 2, 3, 4, 5].map(s => (
                        <Star key={s} className="w-2.5 h-2.5 text-[#f58220]" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="font-bold text-[#00643b] text-[16px] md:text-[18px] leading-tight mb-1">{testi.name}</span>
                    <span className="text-gray-500 text-[12px] md:text-[13px] leading-snug mb-1">{testi.designation}</span>
                    <div className="flex items-center text-gray-400 text-[11px] md:text-[12px] font-medium">
                      <MapPin className="w-3.5 h-3.5 mr-1" />
                      {testi.location}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-[16px] leading-[1.6] mb-4 mt-2 flex-1 line-clamp-6">
                  {testi.quote}
                </p>

                <div className="flex items-center font-bold text-[#3b8c2a] text-[14px] md:text-[15px] group/link">
                  Read Story
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── Bottom Stats Strip (Edge to Edge) ── */}
      <div className="w-full bg-[#3b8c2a] relative z-20 py-1.5 lg:py-2 px-4 md:px-11 border-y border-[#164429] shadow-2xl overflow-x-auto hide-scrollbar">
        <div className="w-full flex items-center justify-between  gap-4">
          {stats.map((stat, i) => (
            <React.Fragment key={i}>
              <div className="flex items-center gap-2 md:gap-3 group cursor-pointer hover:scale-105 transition-transform duration-300">
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow shrink-0">
                  <stat.icon className="w-4 h-4 text-[#3b8c2a]" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-black text-[15px] md:text-[16px] lg:text-[18px] leading-tight tracking-wider uppercase mb-1">{stat.val}</span>
                  <span className="text-[#e8f2eb] font-bold text-[11px] md:text-[12px] leading-none tracking-wide uppercase">{stat.label}</span>
                </div>
              </div>

              {/* Separator Line */}
              {i < stats.length - 1 && (
                <div className="w-px h-6 bg-white/40 shrink-0 mx-1 md:mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>
        <style>{`
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  );
};

export default VoicesOfImpact;

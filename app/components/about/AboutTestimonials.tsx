"use client";

import React from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Organic Store, Delhi",
    quote: "Bharat Organic Expo is an excellent platform to showcase our organic products and connect with new buyers.",
    image: "https://i.pravatar.cc/150?u=10"
  },
  {
    name: "NutriHealth, Mumbai",
    quote: "We discovered new products, attended amazing sessions and connected with global experts.",
    image: "https://i.pravatar.cc/150?u=11"
  },
  {
    name: "Green Earth, Bengaluru",
    quote: "The best organic exhibition in India with great arrangements and valuable networking opportunities.",
    image: "https://i.pravatar.cc/150?u=12"
  },
];

const AboutTestimonials = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 py-16">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-[#3b8c2a] text-[16px] md:text-[18px] font-bold uppercase tracking-widest text-center">
          VISITOR SUCCESS STORIES
        </h2>
      </div>

      <div className="relative w-full">
        {/* Navigation Arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-6 w-10 h-10 rounded-full bg-white border border-[#e8f5ec] shadow-md flex items-center justify-center text-[#154726] hover:bg-[#3b8c2a] hover:text-white transition-colors z-10">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-6 w-10 h-10 rounded-full bg-white border border-[#e8f5ec] shadow-md flex items-center justify-center text-[#154726] hover:bg-[#3b8c2a] hover:text-white transition-colors z-10">
          <ChevronRight size={20} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-0">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl border border-[#e8f5ec] p-6 lg:p-8 shadow-sm flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <Quote className="text-[#3b8c2a] opacity-20 mb-4" size={32} />
              <p className="text-[#64748b] text-[12px] md:text-[13px] leading-relaxed mb-6 font-medium italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-[#154726] text-[12px] font-bold">{item.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default AboutTestimonials;

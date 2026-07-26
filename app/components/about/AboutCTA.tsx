"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutCTA = () => {
  return (
    <section className="w-full bg-[#154726] relative overflow-hidden pt-16 pb-0 md:pb-16 mt-8 border-t-[8px] border-[#3b8c2a]">
      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Content */}
        <div className="w-full md:w-3/5 text-white flex flex-col items-start md:pb-0">
          <span className="text-[#3b8c2a] text-[11px] font-bold tracking-widest uppercase mb-4 bg-white/10 px-3 py-1 rounded-full border border-white/20 backdrop-blur-sm">
            JOIN THE ORGANIC REVOLUTION
          </span>
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold leading-[1.1] mb-8">
            Be a Part of a Healthier<br className="hidden md:block" /> & Sustainable Future
          </h2>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/become-an-exhibitor"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-lg text-[13px] font-bold transition-all shadow-lg flex items-center gap-2"
            >
              Become an Exhibitor <ArrowRight size={16} />
            </Link>
            <Link 
              href="/visitor-registration"
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-[13px] font-bold transition-all"
            >
              Register as Visitor
            </Link>
            <Link 
              href="/sponsorship"
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-[13px] font-bold transition-all"
            >
              Become a Sponsor
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-[13px] font-bold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Veggies Basket Image */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-end md:absolute md:bottom-0 md:right-11 mt-10 md:mt-0">
          <div className="w-[300px] md:w-[450px] lg:w-[500px]">
            {/* Using a placeholder for the veggies basket */}
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop" 
              alt="Fresh Organic Vegetables" 
              className="w-full h-auto object-contain drop-shadow-2xl rounded-t-3xl border-t-8 border-x-8 border-white/10"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutCTA;

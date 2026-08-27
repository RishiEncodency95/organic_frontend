"use client";

import React from "react";
import Link from "next/link";
import { Users2, ArrowRight } from "lucide-react";

const ParticipateCta = () => {
  return (
    <section className="w-full px-4 md:px-14 py-2 md:py-3 font-inter">
      <div className="rounded-2xl bg-gradient-to-r from-[#031d0d] via-[#062914] to-[#041a0d] px-5 py-4 md:px-8 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 shadow-[0_10px_35px_rgba(0,0,0,0.18)] border border-[#1b5e20]/40 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#1b5e20]/20 blur-2xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bg-[#ea580c]/10 blur-2xl pointer-events-none" />

        {/* Left info with icon in 1 row */}
        <div className="flex items-center gap-3.5 text-center md:text-left relative z-10">
          <div className="hidden sm:flex h-11 w-11 md:h-12 md:w-12 p-2.5 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-inner">
            <Users2 className="h-5 w-5 md:h-6 md:w-6 text-[#a3e635]" />
          </div>
          <div>
            <h3 className="text-[14px] sm:text-base md:text-lg lg:text-[19px] font-bold text-white font-poppins uppercase tracking-tight leading-tight">
              READY TO CONNECT WITH THE RIGHT BUSINESSES?
            </h3>
            <p className="mt-0.5 text-xs sm:text-[13px] text-white/80 font-normal">
              Join the Buyer–Seller Meet at Bharat Organic Expo 2027.
            </p>
          </div>
        </div>

        {/* Right buttons in 1 row side-by-side */}
        <div className="flex flex-row flex-nowrap items-center justify-center gap-3 shrink-0 relative z-10">
          {/* Register as Buyer Button */}
          <Link
            href="/registration/buyer-registration"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#1b5e20] hover:bg-[#144a19] border border-white/20 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-[12.5px] font-bold font-poppins uppercase tracking-wider text-white shadow-[0_4px_14px_rgba(27,94,32,0.4)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
          >
            <span>REGISTER AS A BUYER</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Book Your Stall Button */}
          <Link
            href="/registration/book-a-stand"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-[#ea580c] to-[#c2410c] hover:from-[#f97316] hover:to-[#ea580c] px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs md:text-[12.5px] font-bold font-poppins uppercase tracking-wider text-white shadow-[0_4px_18px_rgba(234,88,12,0.45)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/15 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <span className="relative z-10">BOOK YOUR STALL</span>
            <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ParticipateCta;

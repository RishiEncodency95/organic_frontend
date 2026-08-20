"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import whyParticipateImg from "../../assets/conference/why_participate.webp";

const whyBuyers = [
  "Meet decision-makers from across the industry",
  "Explore new sourcing and business opportunities",
  "Compare products, solutions and suppliers",
  "Build strong, long-term business relationships",
  "Expand your market reach and business network",
  "Find reliable suppliers and quality products",
];

const ParticipateWhyParticipate = () => {
  return (
    <section className="w-full py-2 font-inter">
      <div className="rounded-2xl border border-gray-200/80 bg-[#f5f7f4] px-2 lg:px-11 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Left: Why Buyers */}
          <div className="lg:col-span-4">
            <h3 className="text-base sm:text-lg md:text-[19px] font-extrabold text-gray-900 font-poppins uppercase tracking-tight mb-4">
              WHY BUYERS SHOULD PARTICIPATE?
            </h3>
            <ul className="space-y-3.5">
              {whyBuyers.map((w) => (
                <li key={w} className="flex items-start gap-2.5 text-[13.5px] sm:text-[14px] text-gray-700 leading-snug font-medium">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1b5e20] fill-[#1b5e20]/20" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Center: Image */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="w-full max-w-[380px] lg:max-w-none">
              <img
                src={whyParticipateImg.src}
                alt="Why Buyers and Exhibitors Participate - Bharat Organic Expo 2027"
                className="h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Exhibitors */}
          <div className="lg:col-span-4">
            <h3 className="text-base sm:text-lg md:text-[19px] font-extrabold text-gray-900 font-poppins uppercase tracking-tight mb-3">
              EXHIBITORS: CONNECT WITH RELEVANT BUYERS
            </h3>
            <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-gray-600 font-normal mb-6">
              Exhibitors at Bharat Organic Expo 2027 can use the Buyer–Seller
              Meet platform to connect with highly relevant business buyers and
              explore sourcing, distribution, procurement and strategic
              partnership opportunities.
            </p>
            <Link
              href="/registration/book-a-stand"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#ea580c] hover:bg-[#c2410c] px-6 py-3 text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              PARTICIPATE AS AN EXHIBITOR
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParticipateWhyParticipate;

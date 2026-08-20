"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, UserPlus, HelpCircle } from "lucide-react";
import imgPlaceholder from "../../assets/image/footog.png";

export default function CtaBanner() {
  return (
    <section className="bg-[#0f2115] relative overflow-hidden font-inter border-b-4 border-green-700">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center">

          <div className="w-full md:w-1/4 lg:w-[22%] h-48 md:h-auto self-stretch relative hidden md:block">
            <img src={imgPlaceholder.src} alt="Buyer Seller Meet" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f2115]" />
          </div>

          <div className="w-full md:w-3/4 lg:w-[78%] p-6 md:py-8 md:px-8 lg:px-12 flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-4">

            {/* Text side */}
            <div className="flex-1 text-center md:text-left w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-semibold text-white leading-[1.15] mb-2 uppercase">
                READY TO CONNECT WITH <br className="hidden md:block" />
                <span className="text-[#facc15] whitespace-nowrap">NEW BUSINESS OPPORTUNITIES?</span>
              </h2>
              <p className="text-white/80 text-sm font-medium">
                Join the Buyer-Seller Meet at Bharat Organic Expo 2027.
              </p>
            </div>

            {/* Buttons side */}
            <div className="flex flex-col items-center xl:items-end gap-3 shrink-0 w-full xl:w-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-end gap-3 w-full">
                <Link
                  href="/registration/buyer-registration"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1b5e20] hover:bg-[#144a18] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-colors w-full sm:w-auto"
                >
                  REGISTER AS A BUYER <ArrowRight size={16} />
                </Link>
                <Link
                  href="/participate_as_exhibiture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ea580c] to-[#c2410c] hover:opacity-90 text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-opacity shadow-lg w-full sm:w-auto"
                >
                  PARTICIPATE AS AN EXHIBITOR <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex items-center justify-center xl:justify-end gap-2 text-[11px] md:text-xs font-bold text-[#facc15]">
                <HelpCircle size={14} />
                <span>Need Help? +91 96549 00525  |  info@namogangewellness.com</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

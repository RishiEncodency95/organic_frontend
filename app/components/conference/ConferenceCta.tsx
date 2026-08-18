"use client";

import React from "react";
import { Users2, ArrowRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";

const ConferenceCta = () => {
  return (
    <section className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4">
      <div className="relative overflow-hidden rounded-2xl bg-[#0b2912] p-8 sm:p-8">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5" />
        <div className="absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/5" />
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:p-0">
          <Reveal delay={0} direction="left">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="hidden h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#F2B40E]/40 sm:flex">
                <Users2 className="h-6 w-6 text-[#F2B40E] animate-[pulse_2.5s_ease-in-out_infinite]" />
              </div>
              <div>
                <h3 className="text-[16px] md:text-[18px] font-bold text-white sm:text-xl">
                  Ready to Connect with the Right Businesses?
                </h3>
                <p className="mt-1 text-[16px] text-[#b8d9b9]">
                  Join the Buyer-Seller Meet at Bharat Organic Expo 2027.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} direction="right">
            <div className="flex flex-shrink-0 flex-wrap justify-center gap-3">
              <button className="group inline-flex items-center gap-2 rounded-md bg-[#F2B40E] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#0b2912] shadow-md transition-all duration-300 hover:bg-[#ffc533] hover:shadow-lg hover:-translate-y-0.5">
                Register as a Buyer
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button className="group inline-flex items-center gap-2 rounded-md border-2 border-[#F2B40E] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#F2B40E] transition-all duration-300 hover:bg-[#F2B40E] hover:text-[#0b2912] hover:-translate-y-0.5">
                Book Your Stall
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ConferenceCta;
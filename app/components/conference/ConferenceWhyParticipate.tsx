"use client";

import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import whyParticipateImg from "../../assets/conference/why_participate.webp";

const whyBuyers = [
  "Meet decision-makers from across the industry",
  "Explore new sourcing and business opportunities",
  "Compare products, solutions and suppliers",
  "Build strong, long-term business relationships",
  "Expand your market reach and business network",
  "Find reliable suppliers and quality products",
];

const ConferenceWhyParticipate = () => {
  return (
    <section className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4">
      <div className="rounded-2xl border border-gray-200/60 bg-[#fcfcf0] p-6 sm:p-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          {/* Left: Why Buyers */}
          <Reveal delay={0} direction="left" className="h-full">
            <div>
              <SectionHeading>Why Buyers Should Participate?</SectionHeading>
              <ul className="mt-3 space-y-3">
                {whyBuyers.map((w, i) => (
                  <li
                    key={w}
                    className="flex items-start gap-3 text-[16px] text-gray-700 transition-transform duration-300 hover:translate-x-1"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#3b8c2a] transition-transform duration-300 group-hover:scale-125" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Center: Image */}
          <Reveal delay={150} direction="zoom" className="h-full">
            <div className="mx-auto w-full max-w-[540px]">
              <img
                src={whyParticipateImg.src}
                alt="Who Can Participate at Buyer-Seller Meet 2027 - Bharat Organic Expo"
                className="h-auto w-full rounded-2xl object-cover shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px] transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Right: Exhibitors */}
          <Reveal delay={300} direction="right" className="h-full">
            <div>
              <SectionHeading>Exhibitors: Connect with Relevant Buyers</SectionHeading>
              <p className="mt-3 text-[16px] leading-relaxed text-gray-600">
                Exhibitors at Bharat Bharat Organic Expo 2027 can use the
                Buyer-Seller Meet platform to connect with highly relevant
                business buyers and explore sourcing, distribution,
                procurement and strategic partnership opportunities.
              </p>
              <button className="group mt-5 inline-flex items-center gap-2 rounded-md bg-[#2b5825] px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:bg-[#1f471b] hover:shadow-lg">
                Participate as an Exhibitor
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ConferenceWhyParticipate;
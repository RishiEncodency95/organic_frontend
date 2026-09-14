"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import imgPlaceholder from "../../assets/image/footog.webp";
import SectionContainer from "@/app/components/layout/SectionContainer";
import { CTA_BANNER_DATA } from "@/app/data/buyerSellerMeetData";

export default function CtaBanner() {
  const data = CTA_BANNER_DATA[0];

  return (
    <section className="bg-[#0f2115] relative overflow-hidden font-inter border-b-4 border-green-700">
      <SectionContainer>
        <div className="flex flex-col md:flex-row items-center">

          <div className="w-full md:w-1/4 lg:w-[22%] h-48 md:h-auto self-stretch relative hidden md:block">
            <img src={imgPlaceholder.src} alt="Buyer Seller Meet" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0f2115]" />
          </div>

          <div className="w-full md:w-3/4 lg:w-[78%] p-6 md:py-8 md:px-8 lg:px-12 flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-4">

            {/* Text side */}
            <div className="flex-1 text-center md:text-left w-full">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-poppins font-semibold text-white leading-[1.15] mb-2 uppercase">
                {data.headingLine1} <br className="hidden md:block" />
                <span className="text-[#facc15] whitespace-nowrap">{data.headingHighlight}</span>
              </h2>
              <p className="text-white/80 text-sm font-medium">
                {data.subtitle}
              </p>
            </div>

            {/* Buttons side */}
            <div className="flex flex-col items-center xl:items-end gap-3 shrink-0 w-full xl:w-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-end gap-3 w-full">
                <Link
                  href={data.buyerButtonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#1b5e20] hover:bg-[#144a18] text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-colors w-full sm:w-auto"
                >
                  {data.buyerButtonLabel} <ArrowRight size={16} />
                </Link>
                <Link
                  href={data.exhibitorButtonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#ea580c] to-[#c2410c] hover:opacity-90 text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wide transition-opacity shadow-lg w-full sm:w-auto"
                >
                  {data.exhibitorButtonLabel} <ArrowRight size={16} />
                </Link>
              </div>

              <div className="flex items-center justify-center xl:justify-end gap-2 text-[11px] md:text-xs font-bold text-[#facc15]">
                <HelpCircle size={14} />
                <span>{data.helpText}</span>
              </div>
            </div>

          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

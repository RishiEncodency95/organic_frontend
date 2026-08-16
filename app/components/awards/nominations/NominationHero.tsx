"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Award, ArrowRight, Calendar, Leaf, MapPin, Medal } from "lucide-react";
import nominationBg from "../../../assets/awards/nomination.webp";

export default function NominationHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex w-full items-center overflow-hidden bg-[#f7f5ec] min-h-[510px] sm:min-h-[430px] md:min-h-[490px] lg:min-h-[530px]">
      <div
        className={`absolute inset-0 z-0 transition-all duration-[1300ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mounted ? "opacity-100 scale-100" : "opacity-0 scale-[1.03]"
        }`}
      >
        <Image
          src={nominationBg}
          alt="Bharat Organic Excellence Awards 2027 Nominations"
          fill
          sizes="100vw"
          priority
          className="h-full w-full object-cover"
        />
      </div>
      <Leaf className="pointer-events-none absolute -left-4 top-6 h-16 w-16 -rotate-12 text-lime-700/20" />
      <Leaf className="pointer-events-none absolute right-10 bottom-4 hidden h-20 w-20 rotate-45 text-lime-300/10 sm:block" />

      <div className="relative z-20 container mx-auto max-w-[1400px] px-6 py-6 sm:py-8 md:py-10">
        <div
          className={`max-w-xl will-change-transform transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
            mounted
              ? "opacity-100 [transform:perspective(1200px)_translateZ(0)_rotateY(0deg)_rotateX(0deg)]"
              : "opacity-0 [transform:perspective(1200px)_translateZ(-140px)_rotateY(-10deg)_rotateX(4deg)]"
          }`}
        >
          <h1 className="text-[42px] font-black uppercase leading-[1.05] tracking-tight text-[#0b2912] sm:text-[52px] md:text-[62px] lg:text-[72px]">
            <span className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[50px]">Bharat Organic</span>
            <br />
            Excellence
            <br />
            <span className="text-[#F2B40E]">Awards 2027</span>
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-bold uppercase tracking-wider text-[#0b2912] sm:text-base">
            <span>Celebrating Excellence</span>
            <span className="h-2 w-2 rounded-full bg-[#F2B40E]" />
            <span>Innovation</span>
            <span className="h-2 w-2 rounded-full bg-[#F2B40E]" />
            <span>Sustainability</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const formSection = document.getElementById("nomination-form");
                if (formSection) formSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[#0b2912] px-6 py-3 text-base font-bold uppercase tracking-wider text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123d1c] hover:shadow-xl"
            >
              <Award className="h-4 w-4 text-[#F2B40E]" />
              Submit Nomination
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="/awards"
              className="group inline-flex items-center gap-2.5 rounded-lg border-2 border-[#0b2912] bg-white px-6 py-2.5 text-base font-bold uppercase tracking-wider text-[#0b2912] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f0f7f0] hover:shadow-xl"
            >
              <Medal className="h-4 w-4 text-[#0b2912]" />
              View Categories
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 text-base font-medium text-[#0b2912] sm:gap-x-8">
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0b2912] bg-white">
                <Calendar className="h-5 w-5 text-[#F2B40E]" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold">31 December 2026</span>
                <span className="uppercase tracking-wider">Nominations Close</span>
              </span>
            </span>
            <span className="hidden h-10 w-px bg-[#0b2912]/20 sm:block" />
            <span className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#0b2912] bg-white">
                <MapPin className="h-5 w-5 text-[#F2B40E]" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold">19 – 21 February 2027</span>
                <span className="uppercase tracking-wider">Awards Ceremony</span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
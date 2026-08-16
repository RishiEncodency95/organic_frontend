"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
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
          <p className="mb-4 text-lg font-semibold italic text-lime-600 lg:text-xl">
            Nominate Now
          </p>
          <h1 className="text-[42px] font-black uppercase leading-[1.05] tracking-tight text-[#0b2912] sm:text-[52px] md:text-[62px] lg:text-[72px]">
            <span className="text-[26px] font-bold sm:text-[34px] md:text-[42px] lg:text-[50px]">Bharat Organic</span>
            <br />
            Excellence
            <br />
            <span className="text-[#F2B40E]">Awards 2027</span>
          </h1>

          <div className="mt-6 border-t border-lime-600/70 pt-3">
            <p className="text-base font-bold uppercase tracking-wider text-lime-600">
              Recognising Excellence. Honouring Impact.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const formSection = document.getElementById("nomination-form");
                if (formSection) formSection.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="group inline-flex items-center gap-2.5 rounded-lg bg-[#0b2912] px-5 py-3 text-base font-bold uppercase tracking-wider text-white shadow-lg ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123d1c] hover:shadow-xl"
            >
              Nominate Now
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400/40 transition-all duration-300 group-hover:ring-2 group-hover:ring-[#F2B40E]">
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
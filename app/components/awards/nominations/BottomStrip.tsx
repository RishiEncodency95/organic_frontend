"use client";

import { Reveal } from "../../shared/Reveal";
import celebratingLeaders from "../../../assets/awards/celebrating_leaders.png";
import Image from "next/image";
import leftImage from "../../../assets/awards/nominations/badge.webp";
import RightImage from "../../../assets/awards/nominations/leaf.webp";

export default function BottomStrip() {
  return (
    <Reveal>
      <section className="relative w-full overflow-hidden border-t border-emerald-900/10 bg-[#f2efe0]">
        <div className="absolute inset-0 z-0">
          <img
            src={celebratingLeaders.src}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f2efe0]/95 via-[#f2efe0]/80 to-[#f2efe0]/60" />
        </div>
        <Image
          src={RightImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-20 w-full object-cover opacity-30 lg:h-28"
        />
        <div className="relative z-10 container mx-auto max-w-[1400px] px-6 py-2 md:py-4 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-left">
          <div className="flex items-center gap-4">
            <Image
              src={leftImage}
              alt=""
              aria-hidden="true"
              className="shrink-0 object-cover"
              width={96}
              height={96}
            />
            <div>
              <p className="text-sm font-extrabold text-emerald-950">
                CELEBRATING LEADERS.
              </p>
              <p className="text-sm font-extrabold text-emerald-950">
                BUILDING A SUSTAINABLE FUTURE.
              </p>
            </div>
          </div>
          <span className="hidden h-12 w-0.5 shrink-0 rounded-full bg-emerald-900/25 sm:block" />
          <div className="flex items-center gap-3">
            <p className="max-w-xs text-xs text-emerald-950/70 md:text-sm">
              Your nomination today can inspire a greener, healthier and more
              sustainable tomorrow.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
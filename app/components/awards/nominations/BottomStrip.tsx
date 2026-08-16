"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Reveal } from "../../shared/Reveal";
import celebratingLeaders from "../../../assets/awards/celebrating_leaders.png";
import Image from "next/image";
import leftImage from "../../../assets/awards/nominations/badge.webp";
import RightImage from "../../../assets/awards/nominations/leaf.webp";

export default function BottomStrip() {
  const badgeRef = useRef<HTMLImageElement>(null);
  const descImageRef = useRef<HTMLImageElement>(null);
  const leftLeafRef = useRef<HTMLImageElement>(null);
  const rightLeafRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(badgeRef.current, {
        x: -80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
      gsap.from(descImageRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.15,
      });
      gsap.fromTo(
        leftLeafRef.current,
        { x: -140, opacity: 0, scaleX: -1 },
        { x: 0, opacity: 1, scaleX: -1, duration: 1.4, ease: "power3.out", delay: 0.2 }
      );
      gsap.from(rightLeafRef.current, {
        x: 140,
        opacity: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 0.2,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <Reveal>
      <section className="relative w-full overflow-hidden border-t border-emerald-900/10 bg-[#f2efe0]">
        <div className="absolute inset-0 z-0">
          <Image
            src={celebratingLeaders}
            alt=""
            aria-hidden="true"
            fill
            sizes="100vw"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f2efe0]/95 via-[#f2efe0]/80 to-[#f2efe0]/60" />
        </div>
        <Image
          ref={leftLeafRef}
          src={RightImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 z-0 h-20 w-36 -scale-x-100 object-cover opacity-15 lg:h-28 lg:w-48"
        />
        <Image
          ref={rightLeafRef}
          src={RightImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 z-0 h-20 w-36 object-cover opacity-30 lg:h-28 lg:w-48"
        />
        <div className="relative z-10 container mx-auto max-w-[1400px] px-6 py-2 md:py-4 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-center sm:gap-8 lg:gap-12 sm:text-left">
          <div className="flex items-center gap-4">
            <Image
              ref={badgeRef}
              src={leftImage}
              alt=""
              aria-hidden="true"
              className="shrink-0 object-cover"
              width={96}
              height={96}
            />
            <div>
              <p className="text-base font-extrabold text-emerald-950">
                CELEBRATING LEADERS.
              </p>
              <p className="text-base font-extrabold text-emerald-950">
                BUILDING A SUSTAINABLE FUTURE.
              </p>
            </div>
          </div>
          <span className="hidden h-12 w-0.5 shrink-0 rounded-full bg-emerald-900/25 sm:block" />
          <div className="flex items-center gap-3">
            <p className="max-w-xs text-base text-emerald-950/70 md:text-base">
              Your nomination today can inspire a greener, healthier and more
              sustainable tomorrow.
            </p>
               <Image
              ref={descImageRef}
              src={RightImage}
              alt=""
              aria-hidden="true"
              className="shrink-0 object-cover"
              width={96}
              height={96}
            />
          </div>
        </div>
      </section>
    </Reveal>
  );
}
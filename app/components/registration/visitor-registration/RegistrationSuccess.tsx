"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { DotLottieReact } from "@/lib/dotLottie";

/**
 * Success screen shown after a visitor registration form is saved — same look as the
 * Buyer Enquiry thank-you (green panel, animated tick, bold heading).
 */
export default function RegistrationSuccess({
  title = "Registration Successful!",
  name,
  message,
  registrationNo,
}: {
  title?: string;
  name?: string;
  message: string;
  registrationNo?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(el, { autoAlpha: 0, scale: 0.92 }, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "back.out(1.6)" })
        .fromTo(
          el.querySelectorAll("[data-rs-anim]"),
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.1, ease: "power2.out", clearProps: "transform" },
          "-=0.15"
        );
    }, el);
    return () => ctx.revert();
  }, []);

  const firstName = name?.trim().split(/\s+/)[0];

  return (
    <div
      ref={ref}
      className="mx-auto my-6 flex min-h-[420px] max-w-[760px] flex-col items-center justify-center rounded-[12px] border-2 border-green-500 bg-green-50 px-6 py-12 text-center shadow-lg sm:px-12"
    >
      <div data-rs-anim className="mb-6 h-24 w-24 sm:h-28 sm:w-28">
        <DotLottieReact src="/success-tick.lottie" autoplay className="h-full w-full" />
      </div>

      <h3 data-rs-anim className="mb-4 text-[24px] font-bold leading-tight text-gray-900 sm:text-[30px]">
        {title}
      </h3>

      <p data-rs-anim className="mb-6 max-w-md text-[15px] leading-relaxed text-gray-600 sm:text-[17px]">
        {firstName ? `Thank you, ${firstName}! ` : "Thank you! "}
        {message}
      </p>

      {registrationNo && (
        <div data-rs-anim className="mb-6 flex flex-col items-center gap-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">Your Registration No.</span>
          <span className="rounded-md border border-green-300 bg-white px-4 py-1.5 font-mono text-[17px] font-extrabold tracking-wider text-[#1b5e20] shadow-sm">
            {registrationNo}
          </span>
        </div>
      )}

      <div data-rs-anim className="flex items-center gap-2 text-[13px] text-gray-500">
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" aria-hidden="true" />
        Our team will contact you very soon.
      </div>
    </div>
  );
}

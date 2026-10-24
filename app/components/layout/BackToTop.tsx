"use client";

import { ArrowUp } from "lucide-react";

/** Round "back to top" button at the end of the footer bar; floats gently, scrolls the page to the top */
export default function BackToTop() {
  const scrollUp = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollUp}
      aria-label="Back to top"
      title="Back to top"
      className="boe-back-to-top grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full border border-white/70 text-white transition-colors duration-300 hover:border-[#F2B632] hover:bg-[#F2B632] hover:text-[#061a0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B632]"
    >
      <ArrowUp className="h-[18px] w-[18px]" strokeWidth={2} />
    </button>
  );
}

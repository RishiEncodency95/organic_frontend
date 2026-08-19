"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function SectionHeading({
  children,
  action,
}: {
  children: React.ReactNode;
  action?: string;
}) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2
        className="flex items-center gap-3 text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins tracking-tight"
      >
        <span className="w-1 h-[24px] bg-[#3b8c2a] rounded-full" />
        {children}
      </h2>
      {action && (
        <a
          href="#"
          className="group hidden sm:flex items-center gap-1 text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#3b8c2a] hover:text-[#2d7a2d] transition-colors"
        >
          {action}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
}
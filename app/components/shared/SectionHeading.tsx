"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SectionHeading({
  children,
  action,
  actionHref,
  bar = true,
  singleLine = false,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  action?: string;
  /** Where the action link goes ("#" when not given) */
  actionHref?: string;
  /** Green accent bar before the title */
  bar?: boolean;
  /** Keep the title and action on one line in a narrow column (smaller title) */
  singleLine?: boolean;
  /** "h1" when this is the page's main heading (the look stays the same) */
  as?: "h1" | "h2";
}) {
  return (
    <div className={`flex items-center justify-between mb-3 ${singleLine ? "gap-3" : ""}`}>
      <Tag
        className={`flex items-center gap-3 font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins tracking-tight ${
          singleLine ? "min-w-0 whitespace-nowrap text-[clamp(15px,1.35vw,20px)]" : "text-xl md:text-2xl"
        }`}
      >
        {bar && <span className="w-1 h-[24px] bg-[#3b8c2a] rounded-full" />}
        {children}
      </Tag>
      {action && (
        <Link
          href={actionHref || "#"}
          className="group hidden sm:flex shrink-0 whitespace-nowrap items-center gap-1 text-[12px] md:text-[13px] font-bold uppercase tracking-wider text-[#3b8c2a] hover:text-[#2d7a2d] transition-colors"
        >
          {action}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
"use client";
import React from "react";
import { Calendar, MapPin } from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";

// Hero shared by the /partnership/<slug> pages (hotel, travel, stall design, ...).
// `defaults` is each page's own text, shown until the admin saves the hero and for any
// field left empty; `data` is the admin record from /website/opportunities/partnership/sub-hero/<slug>.
export interface SubPartnershipHeroDefaults {
  title: string;
  subtitle: string;
  description: string;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
}

const pick = (value: unknown, fallback: string) =>
  typeof value === "string" && value.trim() ? value.trim() : fallback;

// Description lines for desktop: the admin's own line breaks if it has any, otherwise the
// text split into three lines of roughly equal length (the original hand-broken layout).
const toDescriptionLines = (text: string): string[] => {
  const manual = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
  if (manual.length > 1) return manual;
  const words = text.split(/\s+/).filter(Boolean);
  const target = text.length / 3;
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    current = current ? `${current} ${word}` : word;
    if (current.length >= target && lines.length < 2) {
      lines.push(current);
      current = "";
    }
  }
  if (current) lines.push(current);
  return lines;
};

export default function SubPartnershipHero({
  data,
  defaults,
  descriptionClassName = "max-w-2xl",
  splitDescription = true,
}: {
  data?: any;
  defaults: SubPartnershipHeroDefaults;
  descriptionClassName?: string;
  // Break the description into lines on desktop (all pages except Logistics did this).
  splitDescription?: boolean;
}) {
  const title = pick(data?.title, defaults.title);
  // H1 is a single admin field: the last word goes on the orange line, the rest green.
  const words = title.split(/\s+/);
  const titleLine1 = words.length > 1 ? words.slice(0, -1).join(" ") : "";
  const titleLine2 = words[words.length - 1];

  const subtitle = pick(data?.subtitle, defaults.subtitle);
  const description = pick(data?.description, defaults.description);
  const date = pick(data?.date, defaults.date);
  const location = pick(data?.location, defaults.location);
  const image = pick(data?.image, defaults.image);
  const imageAlt = pick(data?.imageAlt, defaults.imageAlt);

  return (
    <section className="relative z-10 w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-start bg-[#fcfcf0] overflow-hidden font-inter pt-10 md:pt-14 pb-4 md:pb-6 border-b-4 border-[#ea580c]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img src={image} alt={imageAlt} className="w-full h-full object-cover object-top" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="max-w-4xl flex flex-col items-start text-left">

          {/* Main Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-[54px] font-semibold leading-[1.05] mb-4 font-poppins mt-2 md:mt-8"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.4)" }}
          >
            {titleLine1 && (
              <>
                <span className="text-[#1b5e20]">{titleLine1}</span>
                <br />
              </>
            )}
            <span className="text-[#ea580c]">{titleLine2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#113217] text-sm md:text-base font-bold uppercase tracking-wider mb-6">
            {subtitle}
          </p>

          {/* Description */}
          <p className={`text-[#131730] text-sm md:text-[15px] font-bold leading-relaxed mb-5 ${descriptionClassName}`}>
            {splitDescription
              ? toDescriptionLines(description).map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <>
                        {" "}
                        <br className="hidden md:block" />
                      </>
                    )}
                    {line}
                  </React.Fragment>
                ))
              : description}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[#4B1426] text-xs sm:text-sm md:text-[15px] font-bold w-full max-w-4xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] shrink-0">
                <Calendar size={16} />
              </div>
              <span>{date}</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-[#4B1426]/30"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center text-[#ea580c] shrink-0">
                <MapPin size={16} />
              </div>
              <span>{location}</span>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}

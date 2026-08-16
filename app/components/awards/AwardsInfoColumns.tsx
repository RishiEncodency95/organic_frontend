"use client";

import React from "react";
import { Calendar, Users, Star, CheckCircle2 } from "lucide-react";
import { Reveal } from "../shared/Reveal";

const KEY_DATES = [
  { label: "Nominations Open", value: "1 July 2026" },
  { label: "Last Date for Nominations", value: "31 December 2026" },
  { label: "Shortlisting", value: "January 2027" },
  { label: "Awards Ceremony", value: "19–21 February 2027" },
];

const WHO_CAN_APPLY = [
  "Companies & Brands",
  "Startups & Entrepreneurs",
  "Farmers & Producer Groups",
  "Institutions, Organisations & NGOs",
  "Individuals & Professionals",
];

const WHY_PARTICIPATE = [
  "National & Global Recognition",
  "Enhance Brand Value & Credibility",
  "Networking with Industry Leaders",
  "Business Growth Opportunities",
  "Showcase Innovation & Impact",
];

const AwardsInfoColumns = () => {
  return (
    <section className="bg-white py-2 md:py-4">
      <div className="container mx-auto max-w-[1400px] px-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Key dates */}
        <Reveal className="h-full">
          <div className="h-full rounded-2xl border border-gray-200/60 bg-[#fcfdfc] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
            <h3 className="flex items-center gap-2 text-[14px] md:text-[15px] font-bold uppercase tracking-wide text-[#154726]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3b8c2a]/10">
                <Calendar className="h-4 w-4 text-[#3b8c2a]" />
              </span>
              Key Dates
            </h3>
            <dl className="mt-3 space-y-2">
              {KEY_DATES.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center justify-between gap-2 text-[12px] md:text-[13px] text-[#154726]/70"
                >
                  <dt>{d.label}</dt>
                  <dd className="font-semibold text-[#154726]">{d.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2.5 text-[10.5px] italic text-[#154726]/50">
              *Dates are subject to change.
            </p>
          </div>
        </Reveal>

        {/* Who can apply */}
        <Reveal delay={90} className="h-full">
          <div className="h-full rounded-2xl border border-gray-200/60 bg-[#fcfdfc] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
            <h3 className="flex items-center gap-2 text-[14px] md:text-[15px] font-bold uppercase tracking-wide text-[#154726]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3b8c2a]/10">
                <Users className="h-4 w-4 text-[#3b8c2a]" />
              </span>
              Who Can Apply?
            </h3>
            <ul className="mt-3 space-y-2">
              {WHO_CAN_APPLY.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] text-[#154726]/70"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3b8c2a]" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-2.5 text-[12px] font-medium text-[#154726]/60">
              Open to Indian &amp; International participants.
            </p>
          </div>
        </Reveal>

        {/* Why participate */}
        <Reveal delay={180} className="h-full">
          <div className="h-full rounded-2xl border border-gray-200/60 bg-[#fcfdfc] p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(0,0,0,0.14)]">
            <h3 className="flex items-center gap-2 text-[14px] md:text-[15px] font-bold uppercase tracking-wide text-[#154726]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3b8c2a]/10">
                <Star className="h-4 w-4 text-[#3b8c2a]" />
              </span>
              Why Participate?
            </h3>
            <ul className="mt-3 space-y-2">
              {WHY_PARTICIPATE.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[13px] text-[#154726]/70"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#3b8c2a]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AwardsInfoColumns;
"use client";

import React from "react";
import {
  Leaf,
  ClipboardList,
  ClipboardCheck,
  Users,
  Award,
  UserCheck,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { Reveal } from "../shared/Reveal";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="flex items-center justify-center gap-2.5 text-center">
      <Leaf className="h-3.5 w-3.5 shrink-0 -rotate-45 text-[#3b8c2a]" />
      <h2 className="text-[16px] md:text-[18px] lg:text-[20px] font-extrabold uppercase tracking-wide text-[#154726]">
        {children}
      </h2>
      <Leaf className="h-3.5 w-3.5 shrink-0 rotate-[135deg] text-[#3b8c2a]" />
    </Reveal>
  );
}

const PROCESS_STEPS = [
  {
    icon: ClipboardList,
    num: "01",
    title: "Nomination",
    desc: "Submit your nomination online in the relevant category.",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    title: "Eligibility Check",
    desc: "Our team verifies eligibility and supporting documents.",
  },
  {
    icon: Users,
    num: "03",
    title: "Evaluation",
    desc: "Nominations are evaluated by our expert jury panel based on defined criteria.",
  },
  {
    icon: Award,
    num: "04",
    title: "Shortlisting",
    desc: "Top nominees are shortlisted in each category.",
  },
  {
    icon: UserCheck,
    num: "05",
    title: "Jury Assessment",
    desc: "Final assessment by the jury to select the award winners.",
  },
  {
    icon: Trophy,
    num: "06",
    title: "Recognition",
    desc: "Winners are honoured at the Bharat Bharat Organic Expo 2027.",
  },
];

const AwardsProcess = () => {
  return (
    <section className="bg-[#fcfcf0] py-2 md:py-4">
      <div className="container mx-auto max-w-[1400px] px-6">
        <SectionHeading>Our Evaluation Process</SectionHeading>

        <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-2">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} delay={i * 90} className="relative">
                {i < PROCESS_STEPS.length - 1 && (
                  <ArrowRight className="pointer-events-none absolute right-[-12px] top-4 h-[18px] w-[18px] text-[#3b8c2a]/50 sm:top-5" />
                )}
                <div className="group flex flex-col items-center text-center">
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#2b5825] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-[18px] w-[18px]" />
                    <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#F2B40E] text-[8px] font-bold text-[#0b2912]">
                      {step.num}
                    </span>
                  </span>
                  <h3 className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-[#154726]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[10.5px] sm:text-[11px] leading-snug text-[#154726]/60">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AwardsProcess;
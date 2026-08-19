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
import SectionContainer from "@/app/components/layout/SectionContainer";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="flex items-center justify-center gap-2.5 text-center mb-6">
      <Leaf className="h-4 w-4 shrink-0 -rotate-45 text-[#1b5e20]" />
      <h2 className="text-xl md:text-2xl font-semibold text-[#1b5e20] uppercase leading-[1.1] font-poppins relative inline-block">
        {children}
      </h2>
      <Leaf className="h-4 w-4 shrink-0 rotate-[135deg] text-[#1b5e20]" />
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
    desc: "Winners are honoured at the Bharat Organic Expo 2027.",
  },
];

const AwardsProcess = () => {
  return (
    <section className="bg-[#f9f9f9] py-8 md:py-12 font-inter">
      <SectionContainer>
        <SectionHeading>Our Evaluation Process</SectionHeading>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.num} delay={i * 90} className="relative h-full">
                <div
                  className="group flex flex-col items-center text-center bg-white p-4 rounded-xl hover:shadow-md transition-shadow h-full"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px" }}
                >
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#1b5e20] text-white shadow-sm transition-transform duration-300 group-hover:scale-105 mb-2">
                    <Icon className="h-5 w-5" />
                    <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-[#ea580c] text-[9px] font-bold text-white">
                      {step.num}
                    </span>
                  </span>
                  <h3 className="text-xs sm:text-sm font-semibold text-[#1b5e20] uppercase font-poppins leading-tight mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-900 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

export default AwardsProcess;
"use client";

import {
  Award,
  ClipboardCheck,
  ClipboardList,
  Sprout,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "../../shared/Reveal";

const processSteps = [
  {
    n: "01",
    title: "Nomination",
    desc: "Submit your nomination online in the relevant category.",
    Icon: ClipboardList,
  },
  {
    n: "02",
    title: "Eligibility Check",
    desc: "Our team verifies eligibility and supporting documents.",
    Icon: ClipboardCheck,
  },
  {
    n: "03",
    title: "Evaluation",
    desc: "Nominations are evaluated by our expert jury panel based on defined criteria.",
    Icon: Users,
  },
  {
    n: "04",
    title: "Shortlisting",
    desc: "Top nominees are shortlisted in each category.",
    Icon: Award,
  },
  {
    n: "05",
    title: "Jury Assessment",
    desc: "Final assessment by the jury to select the award winners.",
    Icon: Star,
  },
  {
    n: "06",
    title: "Recognition",
    desc: "Winners are honoured at the Bharat Organic Expo 2027.",
    Icon: Trophy,
  },
];

export default function AwardProcess() {
  return (
    <section className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4">
      <Reveal>
        <div className="mb-6 flex items-center justify-center gap-2 text-emerald-900">
          <Sprout className="h-4 w-4 text-lime-600" />
          <h2 className="text-base md:text-[17px] font-bold tracking-widest">
            THE AWARD PROCESS
          </h2>
          <Sprout className="h-4 w-4 -scale-x-100 text-lime-600" />
        </div>
      </Reveal>

      <div className="grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-6 sm:gap-x-1">
        {processSteps.map((s, i) => (
          <Reveal key={s.n} delay={i * 100}>
            <div className="group flex flex-col items-center text-center">
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-lime-600/40 bg-lime-50 transition-all duration-300 group-hover:border-lime-600 group-hover:bg-lime-100 group-hover:shadow-lg group-hover:shadow-lime-600/20 group-hover:-translate-y-1">
                <s.Icon className="h-6 w-6 text-emerald-800 transition-transform duration-300 group-hover:scale-110" />
                {i < processSteps.length - 1 && (
                  <span className="absolute left-full top-1/2 hidden h-px w-full -translate-y-1/2 border-t-2 border-dashed border-lime-600/40 sm:block" />
                )}
              </div>
              <p className="mt-2 text-base font-bold text-amber-600">
                {s.n}
              </p>
              <p className="text-base font-bold uppercase text-emerald-950">
                {s.title}
              </p>
<p className="mt-1 text-base leading-snug text-emerald-950/75 md:text-base">
                  {s.desc}
                </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
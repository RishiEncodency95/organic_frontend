import React from "react";
import { Leaf, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";
import nominationImg from "@/app/assets/awards/nomination.png";
import eligibilityImg from "@/app/assets/awards/eligibility.png";
import evaluationImg from "@/app/assets/awards/evaluation-jury.png";
import shortlistingImg from "@/app/assets/awards/shortlisting.png";
import recognitionImg from "@/app/assets/awards/recognition.png";

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
    image: nominationImg,
    title: "Nomination",
    desc: "Submit your nomination online in the relevant category.",
  },
  {
    image: eligibilityImg,
    title: "Eligibility Check",
    desc: "Our team verifies eligibility and supporting documents.",
  },
  {
    image: evaluationImg,
    title: "Evaluation",
    desc: "Nominations are evaluated by our expert jury panel based on defined criteria.",
  },
  {
    image: shortlistingImg,
    title: "Shortlisting",
    desc: "Top nominees are shortlisted in each category.",
  },
  {
    image: evaluationImg,
    title: "Jury Assessment",
    desc: "Final assessment by the jury to select the award winners.",
  },
  {
    image: recognitionImg,
    title: "Recognition",
    desc: "Winners are honoured at the Bharat Organic Expo 2027.",
  },
];

const AwardsProcess = () => {
  return (
    <section className="bg-[#f9f9f9] py-4 font-inter">
      <SectionContainer>
        <SectionHeading>Our Evaluation Process</SectionHeading>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-center">
          {PROCESS_STEPS.map((step, i) => {
            return (
              <React.Fragment key={step.title}>
                <Reveal delay={i * 90} className="relative w-full md:w-[140px]">
                  <div className="group flex flex-col items-center text-center h-full">
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-lg mb-3">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={40}
                        height={40}
                        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1b5e20] uppercase font-poppins leading-tight mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-900 font-medium leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:flex items-center justify-center pt-5 px-2">
                    <ArrowRight className="h-6 w-6 text-[#1b5e20]/30" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
};

export default AwardsProcess;
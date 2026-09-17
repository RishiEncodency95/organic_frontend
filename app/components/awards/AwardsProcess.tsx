"use client";

import React, { useState, useEffect } from "react";
import { Leaf, ArrowRight } from "lucide-react";
import { Reveal } from "../shared/Reveal";
import SectionContainer from "@/app/components/layout/SectionContainer";
import nominationImg from "@/app/assets/awards/nomination.png";
import eligibilityImg from "@/app/assets/awards/eligibility.png";
import evaluationImg from "@/app/assets/awards/evaluation-jury.png";
import shortlistingImg from "@/app/assets/awards/shortlisting.png";
import recognitionImg from "@/app/assets/awards/recognition.png";

const defaultImages = [
  nominationImg,
  eligibilityImg,
  evaluationImg,
  shortlistingImg,
  evaluationImg,
  recognitionImg,
];

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

const DEFAULT_DATA = {
  enabled: true,
  eyebrow: "EVALUATION PROCESS",
  title: "Our Evaluation Process",
  steps: [
    {
      id: 1,
      image: "/assets/awards/nomination.png",
      title: "Nomination",
      desc: "Submit your nomination online in the relevant category.",
    },
    {
      id: 2,
      image: "/assets/awards/eligibility.png",
      title: "Eligibility Check",
      desc: "Our team verifies eligibility and supporting documents.",
    },
    {
      id: 3,
      image: "/assets/awards/evaluation-jury.png",
      title: "Evaluation",
      desc: "Nominations are evaluated by our expert jury panel based on defined criteria.",
    },
    {
      id: 4,
      image: "/assets/awards/shortlisting.png",
      title: "Shortlisting",
      desc: "Top nominees are shortlisted in each category.",
    },
    {
      id: 5,
      image: "/assets/awards/evaluation-jury.png",
      title: "Jury Assessment",
      desc: "Final assessment by the jury to select the award winners.",
    },
    {
      id: 6,
      image: "/assets/awards/recognition.png",
      title: "Recognition",
      desc: "Winners are honoured at the Bharat Organic Expo 2027.",
    },
  ],
};

interface AwardsProcessProps {
  initialData?: any;
}

const AwardsProcess = ({ initialData }: AwardsProcessProps) => {
  const [processData, setProcessData] = useState<any>(() => {
    if (!initialData) return DEFAULT_DATA;
    return {
      ...DEFAULT_DATA,
      ...initialData,
      steps: initialData.items || initialData.steps || DEFAULT_DATA.steps,
    };
  });

  useEffect(() => {
    const fetchLiveProcess = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4001/api";
        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4001";
        let res = await fetch(`${apiUrl}/website/awards/process`, { cache: "no-store" }).catch(() => null);
        if (!res || !res.ok) {
          res = await fetch(`${serverUrl}/api/website/awards/process`, { cache: "no-store" }).catch(() => null);
        }
        if (!res || !res.ok) {
          res = await fetch(`/api/website/awards/process`, { cache: "no-store" }).catch(() => null);
        }
        if (res && res.ok) {
          const json = await res.json().catch(() => null);
          if (json?.data) {
            setProcessData(json.data);
          }
        }
      } catch (err) {
        console.error("Failed to load live awards process:", err);
      }
    };
    fetchLiveProcess();
  }, []);

  if (processData.enabled === false) return null;

  const rawList = processData.items || processData.steps;
  const stepsList = Array.isArray(rawList) && rawList.length > 0 ? rawList : DEFAULT_DATA.steps;

  return (
    <section className="bg-[#f9f9f9] py-4 font-inter">
      <SectionContainer>
        <SectionHeading>{processData.title || processData.eyebrow || "Our Evaluation Process"}</SectionHeading>

        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-center">
          {stepsList.map((step: any, i: number) => {
            const rawImg = step.image || step.icon;
            const fallbackImg = defaultImages[i % defaultImages.length];
            const imgSrc =
              typeof rawImg === "string" && rawImg.trim().length > 0
                ? (rawImg.startsWith("/") || rawImg.startsWith("http")
                    ? rawImg
                    : `/assets/awards/${rawImg}.png`)
                : fallbackImg.src;

            const descText = step.description || step.desc || step.shortDescription || "";

            return (
              <React.Fragment key={step.title || i}>
                <Reveal delay={i * 90} className="relative w-full md:w-[140px]">
                  <div className="group flex flex-col items-center text-center h-full">
                    <span className="relative flex h-16 w-16 items-center justify-center rounded-lg mb-3">
                      <img
                        src={imgSrc}
                        alt={step.title || "Step"}
                        className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </span>
                    <h3 className="text-xs sm:text-sm font-semibold text-[#1b5e20] uppercase font-poppins leading-tight mb-1.5">
                      {step.title}
                    </h3>
                    {descText && (
                      <p className="text-[10px] sm:text-xs text-gray-900 font-medium leading-relaxed">
                        {descText}
                      </p>
                    )}
                  </div>
                </Reveal>
                {i < stepsList.length - 1 && (
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
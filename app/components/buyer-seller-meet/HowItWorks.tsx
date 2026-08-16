"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import h1og from "../../assets/icons/h1og.png";
import h2og from "../../assets/icons/h2og.png";
import h3og from "../../assets/icons/h3og.png";
import h4og from "../../assets/icons/h4og.png";
import h5og from "../../assets/icons/h5og.png";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      img: h1og.src,
      title: "REGISTER",
      desc: "Submit your business\nprofile and areas\nof interest.",
    },
    {
      num: "02",
      img: h2og.src,
      title: "PROFILE REVIEW",
      desc: "Registration details are\nreviewed for relevance to\nthe Buyer-Seller Meet.",
    },
    {
      num: "03",
      img: h3og.src,
      title: "BUSINESS MATCHING",
      desc: "Relevant buyer and seller\ninterests are identified\nbased on available profiles.",
    },
    {
      num: "04",
      img: h4og.src,
      title: "MEETING SCHEDULING",
      desc: "Eligible participants receive\nmeeting information/schedules,\nsubject to availability.",
    },
    {
      num: "05",
      img: h5og.src,
      title: "MEET AT THE EXPO",
      desc: "Participate in focused B2B\ninteractions during Bharat\nOrganic Expo 2027.",
    },
  ];

  return (
    <section id="how-it-works" className="pt-4 pb-4 bg-[#f9f9f9] font-inter text-center border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="flex items-center justify-center mb-6 w-full">
          <div className="h-[1px] bg-gray-200 flex-1"></div>
          <h2 className="px-4 text-[13px] md:text-sm font-semibold text-[#1b5e20] uppercase font-poppins">
            HOW IT WORKS
          </h2>
          <div className="h-[1px] bg-gray-200 flex-1"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-2 relative">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center w-full lg:w-[18%] text-center">
                <div className="mb-4">
                  <img src={step.img} alt={step.title} className="w-16 h-16 object-contain mx-auto" />
                </div>
                <h3 className="text-[13px] font-semibold text-[#ea580c] uppercase mb-2 font-poppins">
                  {step.title}
                </h3>
                <p className="text-[11px] md:text-[12px] text-gray-800 font-medium leading-snug max-w-[210px] mx-auto whitespace-pre-line">
                  {step.desc}
                </p>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center pt-6 text-[#1b5e20]">
                  <ArrowRight size={24} strokeWidth={1.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageSquare,
  Globe,
  Headphones,
  CheckCircle2,
  Users,
  ShieldCheck,
  Handshake,
  Clock,
  TrendingUp,
  FileText,
  ArrowRight,
  Leaf,
} from "lucide-react";
import callog from "@/app/assets/icons/callog.png";
import g1 from "@/app/assets/icons/g1.png";
import g2 from "@/app/assets/icons/g2.png";
import g3 from "@/app/assets/icons/g3.png";
import g4 from "@/app/assets/icons/g4.png";
import leafright from "@/app/assets/icons/leafright.png";
import pog from "@/app/assets/icons/pog.png";
import v1 from "@/app/assets/icons/v1.png";
import v2 from "@/app/assets/icons/v2.png";
import v3 from "@/app/assets/icons/v3.png";
import v4 from "@/app/assets/icons/v4.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

const NeedHelpSupport = () => {
  return (
    <section className="pt-1 sm:pt-2 pb-6 sm:pb-8 bg-[#fafdfa] font-inter relative overflow-hidden">
      <SectionContainer className="relative z-10">
        <div className="w-full">
          {/* TOP ROW: HEADER LEFT + WAYS TO CONNECT RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 items-stretch">

            {/* LEFT HEADER & COMMITMENT BOX */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div>
                <h2
                  className="font-poppins font-semibold text-4xl sm:text-5xl md:text-[50px] lg:text-[54px] text-[#001810] leading-[1.05] uppercase mb-1"
                  style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
                >
                  NEED HELP?
                </h2>

                <div className="flex items-center gap-2 text-[#001810] font-poppins font-semibold text-base sm:text-lg md:text-xl tracking-widest uppercase mb-2">
                  <span>WE’RE HERE TO SUPPORT YOU</span>
                </div>

                <p className="font-inter text-[13px] sm:text-sm md:text-[14.5px] font-medium text-[#131730] leading-relaxed">
                  <span className="block">Our dedicated team is ready to assist you at every step</span>
                  <span className="block">of your PMS application journey.</span>
                </p>
              </div>

              {/* OUR COMMITMENT BOX */}
              <div className="bg-[#eef6ed] border border-[#1b5e20]/20 rounded-2xl p-3 sm:p-3.5 inline-flex items-center justify-start gap-3 sm:gap-4 shadow-xs w-fit max-w-full">
                <img
                  src={callog.src}
                  alt="Our Commitment Support"
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
                />
                <div>
                  <h4 className="font-poppins font-semibold text-sm sm:text-base text-[#1b5e20] uppercase tracking-wider mb-0.5">
                    OUR COMMITMENT
                  </h4>
                  <p className="font-inter text-xs sm:text-sm text-gray-800 font-semibold leading-snug">
                    Transparent guidance. Timely support.
                    <br />
                    Stronger together for a sustainable future.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: WAYS TO CONNECT WITH US */}
            <div className="lg:col-span-8 flex flex-col justify-end">
              <div className="relative bg-white border border-[#023911] rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xs -top-3 lg:-top-6">
                {/* Top Right Overlapping Leaf Accent */}
                <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-6 pointer-events-none z-20">
                  <img
                    src={leafright.src}
                    alt="Decorative Leaf Accent"
                    className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto object-contain opacity-95"
                  />
                </div>

                {/* Top Pill Badge */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#023911] text-white px-4 py-1 rounded-full font-poppins font-semibold text-[11px] uppercase tracking-widest flex items-center gap-1.5 shadow-sm whitespace-nowrap">
                  <Leaf className="w-3 h-3 text-lime-300" />
                  <span>WAYS TO CONNECT WITH US</span>
                  <Leaf className="w-3 h-3 text-lime-300" />
                </div>

                {/* 4 Contact Columns */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 pt-3 sm:pt-2">
                  {/* Email Us */}
                  <div className="text-center px-1 pt-2 sm:pt-0 flex flex-col items-center">
                    <img
                      src={g1.src}
                      alt="Email Us"
                      className="w-11 h-11 sm:w-12 sm:h-12 object-contain mb-2 shrink-0"
                    />
                    <h5 className="font-poppins font-semibold text-[13px] sm:text-sm text-[#001810] uppercase tracking-wider mb-1">
                      EMAIL US
                    </h5>
                    <a
                      href="mailto:info@namogangewellness.com"
                      className="font-inter text-[10px] sm:text-[11px] font-semibold text-blue-600 hover:text-blue-800 hover:underline whitespace-nowrap leading-tight mb-1"
                    >
                      info@namogangewellness.com
                    </a>
                    <p className="font-inter text-[11px] sm:text-xs text-black font-medium leading-tight mt-auto">
                      We typically reply
                      <br />
                      within 24 hours.
                    </p>
                  </div>

                  {/* Call Us */}
                  <div className="text-center px-1 pt-2 sm:pt-0 sm:pl-2 flex flex-col items-center">
                    <img
                      src={g2.src}
                      alt="Call Us"
                      className="w-11 h-11 sm:w-12 sm:h-12 object-contain mb-2 shrink-0"
                    />
                    <h5 className="font-poppins font-semibold text-[13px] sm:text-sm text-[#001810] uppercase tracking-wider mb-1">
                      CALL US
                    </h5>
                    <p className="font-inter text-[11px] font-semibold text-gray-800 leading-tight mb-1">
                      +91-9654900525
                    </p>
                    <p className="font-inter text-[11px] sm:text-xs text-black font-medium leading-tight mt-auto">
                      Mon – Sat
                      <br />
                      10:00 AM – 6:00 PM
                    </p>
                  </div>

                  {/* WhatsApp */}
                  <div className="text-center px-1 pt-2 sm:pt-0 sm:pl-2 flex flex-col items-center">
                    <img
                      src={g3.src}
                      alt="WhatsApp"
                      className="w-11 h-11 sm:w-12 sm:h-12 object-contain mb-2 shrink-0"
                    />
                    <h5 className="font-poppins font-semibold text-[13px] sm:text-sm text-[#001810] uppercase tracking-wider mb-1">
                      WHATSAPP
                    </h5>
                    <p className="font-inter text-[11px] font-semibold text-gray-800 leading-tight mb-1">
                      +91-9654900525
                    </p>
                    <p className="font-inter text-[11px] sm:text-xs text-black font-medium leading-tight mt-auto">
                      Quick responses during working hours.
                    </p>
                  </div>

                  {/* Visit Website */}
                  <div className="text-center px-1 pt-2 sm:pt-0 sm:pl-2 flex flex-col items-center">
                    <img
                      src={g4.src}
                      alt="Visit Website"
                      className="w-11 h-11 sm:w-12 sm:h-12 object-contain mb-2 shrink-0"
                    />
                    <h5 className="font-poppins font-semibold text-[13px] sm:text-sm text-[#001810] uppercase tracking-wider mb-1">
                      VISIT WEBSITE
                    </h5>
                    <a
                      href="https://bharatorganicexpo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter text-[10px] sm:text-[11px] font-semibold text-blue-600 hover:text-blue-800 hover:underline whitespace-nowrap leading-tight mb-1"
                    >
                      www.bharatorganicexpo.com
                    </a>
                    <p className="font-inter text-[11px] sm:text-xs text-black font-medium leading-tight mt-auto">
                      Explore PMS details, guidelines & more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE ROW: WHY REACH OUT TO US LEFT + DEDICATED RELATIONSHIP MANAGERS RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">

            {/* LEFT: WHY REACH OUT TO US? */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="w-full sm:w-8/12">
                <h4 className="font-poppins font-semibold text-sm sm:text-base text-[#1b5e20] uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <span>WHY REACH OUT TO US?</span>
                  <span className="text-[#1b5e20] font-extrabold">&lt;&lt;</span>
                </h4>

                <ul className="space-y-2">
                  {[
                    "Clarify PMS scheme guidelines & eligibility",
                    "Get help with document preparation",
                    "Understand the application & reimbursement process",
                    "Track your application status",
                    "Resolve any issues or queries quickly",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1b5e20] shrink-0 mt-0.5" />
                      <span className="font-inter text-[12px] sm:text-[13px] text-black font-medium leading-tight whitespace-nowrap">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* POG Image Illustration */}
              <div className="w-full sm:w-4/12 flex items-center justify-center p-2">
                <img
                  src={pog.src}
                  alt="Why Reach Out Support"
                  className="w-28 sm:w-36 md:w-40 h-auto max-h-44 object-contain"
                />
              </div>
            </div>

            {/* RIGHT: DEDICATED RELATIONSHIP MANAGERS */}
            <div className="lg:col-span-6 bg-[#f8fbf8] border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1b5e20] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-sm sm:text-base text-[#1b5e20] uppercase tracking-wide mb-0.5">
                    DEDICATED RELATIONSHIP MANAGERS
                  </h4>
                  <p className="font-inter text-[13px] text-black font-medium leading-relaxed">
                    Personalised assistance from start to finish.
                    <br className="hidden sm:block" />
                    Your success is our priority.
                  </p>
                </div>
              </div>

              {/* 4 Stat Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 pt-3 border-t border-slate-200/80">
                <div className="text-center px-1 pt-1.5 sm:pt-0 flex flex-col items-center">
                  <img src={v1.src} alt="Trusted Support" className="w-10 h-10 object-contain mb-1" />
                  <h6 className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider mb-0.5">
                    TRUSTED
                  </h6>
                  <p className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider">
                    SUPPORT
                  </p>
                </div>

                <div className="text-center px-1 pt-1.5 sm:pt-0 sm:pl-2 flex flex-col items-center">
                  <img src={v2.src} alt="Expert Guidance" className="w-10 h-10 object-contain mb-1" />
                  <h6 className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider mb-0.5">
                    EXPERT
                  </h6>
                  <p className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider">
                    GUIDANCE
                  </p>
                </div>

                <div className="text-center px-1 pt-1.5 sm:pt-0 sm:pl-2 flex flex-col items-center">
                  <img src={v3.src} alt="Timely Assistance" className="w-10 h-10 object-contain mb-1" />
                  <h6 className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider mb-0.5">
                    TIMELY
                  </h6>
                  <p className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider">
                    ASSISTANCE
                  </p>
                </div>

                <div className="text-center px-1 pt-1.5 sm:pt-0 sm:pl-2 flex flex-col items-center">
                  <img src={v4.src} alt="Better Outcomes" className="w-10 h-10 object-contain mb-1" />
                  <h6 className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider mb-0.5">
                    BETTER
                  </h6>
                  <p className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider">
                    OUTCOMES
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* BOTTOM BANNER: TOGETHER, LET'S GROW A SUSTAINABLE INDIA + READY TO MOVE AHEAD? */}
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-md border border-slate-200">
            {/* Left Dark Green Banner */}
            <div className="lg:col-span-5 bg-[#1b5e20] text-white p-4 sm:p-5 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#1b5e20] shrink-0 shadow-sm">
                <Leaf className="w-6 h-6 fill-[#1b5e20]" />
              </div>
              <div>
                <h4 className="font-poppins font-semibold text-xs sm:text-sm tracking-wider uppercase mb-0.5">
                  TOGETHER, LET’S GROW A SUSTAINABLE INDIA
                </h4>
                <p className="font-inter text-xs text-emerald-100 font-medium leading-tight">
                  We look forward to supporting your journey at{" "}
                  <span className="font-semibold text-lime-300">
                    Bharat Organic Expo 2027.
                  </span>
                </p>
              </div>
            </div>

            {/* Right Light Banner with CTA */}
            <div className="lg:col-span-7 bg-[#f4f7f4] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-t lg:border-t-0 lg:border-l border-slate-200">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#1b5e20]/20 flex items-center justify-center text-[#1b5e20] shrink-0 shadow-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-poppins font-semibold text-xs sm:text-sm text-[#1b5e20] uppercase tracking-wide mb-0.5">
                    READY TO MOVE AHEAD?
                  </h5>
                  <p className="font-inter text-xs text-gray-600 font-medium leading-tight">
                    Start your PMS application today and unlock government support for your growth.
                  </p>
                </div>
              </div>

              <a
                href="/registration/book-a-stand"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1b5e20] hover:bg-[#144718] text-white font-poppins font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-sm transition-all shrink-0 whitespace-nowrap group"
              >
                <span>START YOUR APPLICATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default NeedHelpSupport;

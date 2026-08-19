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
import SectionContainer from "@/app/components/layout/SectionContainer";

const NeedHelpSupport = () => {
  return (
    <section className="pt-1 sm:pt-2 pb-6 sm:pb-8 bg-[#fafdfa] font-inter relative overflow-hidden">
      {/* Background Decorative Leaf Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-5 flex items-start justify-end p-4">
        <Leaf className="w-48 h-48 text-[#0b4d26]" />
      </div>

      <SectionContainer className="relative z-10">
        <div className="w-full">
          {/* TOP ROW: HEADER LEFT + WAYS TO CONNECT RIGHT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5 items-stretch">
            
            {/* LEFT HEADER & COMMITMENT BOX */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
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
              <div className="bg-[#eef6ed] border border-[#1b5e20]/20 rounded-2xl p-3 sm:p-3.5 flex items-center justify-start gap-3 sm:gap-4 shadow-xs">
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
            <div className="lg:col-span-7 flex flex-col justify-end">
              <div className="relative bg-white border border-[#023911] rounded-2xl p-4 sm:p-5 shadow-xs mt-3.5 sm:mt-4">
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
                    <div className="w-11 h-11 rounded-full bg-[#f0f7f0] border border-[#1b5e20]/20 flex items-center justify-center mb-2 shrink-0">
                      <Mail className="w-5 h-5 text-[#1b5e20]" />
                    </div>
                    <h5 className="font-poppins font-semibold text-xs text-[#1b5e20] uppercase tracking-wider mb-1">
                      EMAIL US
                    </h5>
                    <p className="font-inter text-[11px] font-semibold text-gray-800 break-all leading-tight mb-1">
                      msme.support@
                      <br className="hidden sm:block" />
                      bharatorganicexpo.in
                    </p>
                    <p className="font-inter text-[10px] text-gray-500 font-medium leading-tight mt-auto">
                      We typically reply within 24 hours.
                    </p>
                  </div>

                  {/* Call Us */}
                  <div className="text-center px-1 pt-2 sm:pt-0 sm:pl-2 flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-[#f0f7f0] border border-[#1b5e20]/20 flex items-center justify-center mb-2 shrink-0">
                      <Phone className="w-5 h-5 text-[#1b5e20]" />
                    </div>
                    <h5 className="font-poppins font-semibold text-xs text-[#1b5e20] uppercase tracking-wider mb-1">
                      CALL US
                    </h5>
                    <p className="font-inter text-[11px] font-semibold text-gray-800 leading-tight mb-1">
                      +91 11 4308 3738
                    </p>
                    <p className="font-inter text-[10px] text-gray-500 font-medium leading-tight mt-auto">
                      Mon – Sat
                      <br />
                      10:00 AM – 6:00 PM
                    </p>
                  </div>

                  {/* WhatsApp */}
                  <div className="text-center px-1 pt-2 sm:pt-0 sm:pl-2 flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-[#f0f7f0] border border-[#1b5e20]/20 flex items-center justify-center mb-2 shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#1b5e20]" />
                    </div>
                    <h5 className="font-poppins font-semibold text-xs text-[#1b5e20] uppercase tracking-wider mb-1">
                      WHATSAPP
                    </h5>
                    <p className="font-inter text-[11px] font-semibold text-gray-800 leading-tight mb-1">
                      +91 11 4308 3738
                    </p>
                    <p className="font-inter text-[10px] text-gray-500 font-medium leading-tight mt-auto">
                      Quick responses during working hours.
                    </p>
                  </div>

                  {/* Visit Website */}
                  <div className="text-center px-1 pt-2 sm:pt-0 sm:pl-2 flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-[#f0f7f0] border border-[#1b5e20]/20 flex items-center justify-center mb-2 shrink-0">
                      <Globe className="w-5 h-5 text-[#1b5e20]" />
                    </div>
                    <h5 className="font-poppins font-semibold text-xs text-[#1b5e20] uppercase tracking-wider mb-1">
                      VISIT WEBSITE
                    </h5>
                    <p className="font-inter text-[11px] font-semibold text-gray-800 break-all leading-tight mb-1">
                      www.bharatorganicexpo.in
                    </p>
                    <p className="font-inter text-[10px] text-gray-500 font-medium leading-tight mt-auto">
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
              <div className="w-full sm:w-7/12">
                <h4 className="font-poppins font-semibold text-xs sm:text-sm text-[#1b5e20] uppercase tracking-wider mb-3 flex items-center gap-1.5">
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
                      <span className="font-inter text-[11px] sm:text-xs text-gray-700 font-medium leading-tight">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Smartphone Illustration Box */}
              <div className="w-full sm:w-5/12 flex items-center justify-center p-2">
                <div className="relative w-28 h-40 sm:w-32 sm:h-44 bg-[#001810] rounded-[24px] border-4 border-slate-800 shadow-md p-1.5 flex flex-col justify-between overflow-hidden">
                  {/* Top Notch */}
                  <div className="w-12 h-2 bg-slate-800 rounded-full mx-auto mb-1"></div>
                  {/* Screen Content */}
                  <div className="w-full h-full bg-[#eef6ed] rounded-[16px] flex flex-col items-center justify-center p-2 text-center relative overflow-hidden">
                    {/* Decorative Leaves inside screen */}
                    <Leaf className="w-10 h-10 text-[#1b5e20] opacity-20 absolute -bottom-1 -left-1" />
                    <Leaf className="w-8 h-8 text-[#1b5e20] opacity-20 absolute -top-1 -right-1" />
                    <div className="w-10 h-10 rounded-full bg-[#1b5e20] flex items-center justify-center text-white mb-1 shadow-sm">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="w-12 h-1.5 bg-[#1b5e20]/40 rounded-full mb-1"></div>
                    <div className="w-8 h-1.5 bg-[#1b5e20]/30 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: DEDICATED RELATIONSHIP MANAGERS */}
            <div className="lg:col-span-6 bg-[#f8fbf8] border border-slate-200 rounded-2xl p-5 shadow-xs flex flex-col justify-between">
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#1b5e20] flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-poppins font-semibold text-xs sm:text-sm text-[#1b5e20] uppercase tracking-wide mb-0.5">
                    DEDICATED RELATIONSHIP MANAGERS
                  </h4>
                  <p className="font-inter text-xs text-gray-600 font-medium leading-relaxed">
                    Personalised assistance from start to finish.
                    <br className="hidden sm:block" />
                    Your success is our priority.
                  </p>
                </div>
              </div>

              {/* 4 Stat Features */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 pt-3 border-t border-slate-200/80">
                <div className="text-center px-1 pt-1.5 sm:pt-0">
                  <ShieldCheck className="w-5 h-5 text-[#1b5e20] mx-auto mb-1" />
                  <h6 className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider mb-0.5">
                    TRUSTED
                  </h6>
                  <p className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider">
                    SUPPORT
                  </p>
                </div>

                <div className="text-center px-1 pt-1.5 sm:pt-0 sm:pl-2">
                  <Handshake className="w-5 h-5 text-[#1b5e20] mx-auto mb-1" />
                  <h6 className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider mb-0.5">
                    EXPERT
                  </h6>
                  <p className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider">
                    GUIDANCE
                  </p>
                </div>

                <div className="text-center px-1 pt-1.5 sm:pt-0 sm:pl-2">
                  <Clock className="w-5 h-5 text-[#1b5e20] mx-auto mb-1" />
                  <h6 className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider mb-0.5">
                    TIMELY
                  </h6>
                  <p className="font-poppins font-semibold text-[11px] text-[#1b5e20] uppercase tracking-wider">
                    ASSISTANCE
                  </p>
                </div>

                <div className="text-center px-1 pt-1.5 sm:pt-0 sm:pl-2">
                  <TrendingUp className="w-5 h-5 text-[#1b5e20] mx-auto mb-1" />
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

              <Link
                href="/participate"
                className="bg-[#1b5e20] hover:bg-[#144718] text-white font-poppins font-semibold text-xs sm:text-sm px-5 py-3 rounded-xl flex items-center gap-2 shadow-sm transition-all shrink-0 whitespace-nowrap group"
              >
                <span>START YOUR APPLICATION</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default NeedHelpSupport;

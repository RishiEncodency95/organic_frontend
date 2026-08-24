"use client";

import React from "react";
import {
  Globe2,
  Users,
  TrendingUp,
  Leaf,
  Headset,
  Mail,
  Phone,
  MousePointerClick,
  ClipboardCheck,
  Handshake,
  FileEdit,
  ChevronRight,
} from "lucide-react";
import footerrightImg from "@/app/assets/icons/footerright.png";
import leafsImg from "@/app/assets/icons/leafs.png";
import ctaBannerImg from "@/app/assets/participate/msme/ctabanner.png";

const benefits = [
  {
    icon: Globe2,
    title: "GLOBAL EXPOSURE",
    desc: "Connect with international buyers & partners.",
  },
  {
    icon: Users,
    title: "GROW YOUR NETWORK",
    desc: "Meet industry leaders, buyers & decision makers.",
  },
  {
    icon: TrendingUp,
    title: "EXPAND YOUR BUSINESS",
    desc: "Access new markets and increase visibility.",
  },
  {
    icon: Leaf,
    title: "BE PART OF A MOVEMENT",
    desc: "Promote health, sustainability & a better future.",
  },
];

const steps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "APPLY ONLINE",
    desc: "Fill the application form on our website.",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "SUBMIT & REVIEW",
    desc: "Submit documents and our team will review your eligibility.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "GET APPROVED & PARTICIPATE",
    desc: "Receive approval and join Bharat Organic Expo 2027.",
  },
];

export default function WhatsNextBanner() {
  return (
    <section
      aria-labelledby="whats-next-heading"
      className="relative w-full overflow-hidden bg-[#F9FCF9] px-4 py-4 md:px-11"
    >
      <img
        src={footerrightImg.src}
        alt=""
        className="pointer-events-none absolute -left-8 bottom-0 h-36 w-36 rotate-[-20deg] object-contain opacity-10 sm:h-48 sm:w-48"
        aria-hidden="true"
      />
      <img
        src={leafsImg.src}
        alt=""
        className="pointer-events-none absolute left-0 top-1/2 h-64 w-40 -translate-y-1/2 object-contain object-left opacity-[0.07] sm:h-80 sm:w-52"
        aria-hidden="true"
      />
      <div className="mx-auto w-full">
        {/* ============ TOP: Heading+Intro  |  Logo+Benefits ============ */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-6">
          {/* Left: heading + intro copy */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2
              id="whats-next-heading"
              className="flex flex-wrap items-center gap-2 font-semibold uppercase leading-[0.95] tracking-tight text-[#1b5e20] text-[18px] md:text-[28px] lg:text-[32px]"
            >
              What&apos;s Next?
              <Leaf
                className="h-8 w-8 shrink-0 -rotate-12 text-[#3b8c2a]"
                aria-hidden="true"
              />
            </h2>
            <p className="mt-1 font-semibold uppercase leading-[0.95] tracking-tight text-slate-900 text-[20px] md:text-[26px] lg:text-[30px]">
              Take the Next Step Today
            </p>

            <div className="my-3 flex items-center gap-3" aria-hidden="true">
              <span className="h-[3px] w-16 bg-[#3b8c2a]" />
              <Leaf className="h-4 w-4 text-[#3b8c2a]" />
              <span className="h-px flex-1 bg-[#3b8c2a]/40" />
            </div>

            <p className="max-w-md text-[14px] sm:text-[15px] leading-relaxed text-slate-600">
              Join <span className="font-semibold text-slate-900">Bharat Organic Expo 2027</span> and
              be part of India&apos;s fastest growing Organic &amp; Natural marketplace.
            </p>
          </div>

          {/* Right: benefits card */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            {/* Benefits card */}
            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm px-4 py-4">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 sm:gap-x-0 sm:divide-x sm:divide-dashed sm:divide-gray-200">
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <li
                    key={title}
                    className="flex flex-col items-center px-2 text-center sm:px-3"
                  >
                    <span className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-[#EFF7EE]">
                      <Icon className="h-7 w-7 text-[#1b5e20]" aria-hidden="true" />
                    </span>
                    <h3 className="text-[13px] sm:text-[14px] font-semibold uppercase leading-tight text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 text-[13px] sm:text-sm leading-snug text-slate-600">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============ BOTTOM: 3 Steps | Help card ============ */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:mt-8 lg:grid-cols-12 lg:gap-6 lg:items-stretch">
          {/* 3 Easy Steps */}
          <div className="relative overflow-hidden lg:col-span-7 rounded-2xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
            {/* Ribbon */}
            <div className="relative z-10 mb-5">
              <h3 className="text-center text-[16px] font-semibold tracking-tight text-slate-900 md:text-[20px] lg:text-[22px]">
                Get Started in 3 Easy Steps
              </h3>
            </div>

            {/* Steps */}
            <ol className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-3">
              {steps.map(({ number, icon: Icon, title, desc }, i) => (
                <li key={number} className="relative flex flex-col items-center text-center">
                  {/* connector arrow (desktop only, between items) */}
                  {i < steps.length - 1 && (
                    <span
                      className="absolute right-[-1.1rem] top-10 hidden text-[#1b5e20] sm:block"
                      aria-hidden="true"
                    >
                      <ChevronRight className="h-5 w-5" strokeWidth={3} />
                    </span>
                  )}

                  <span className="relative mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-[#EFF7EE]">
                    <Icon className="h-8 w-8 text-[#1b5e20]" aria-hidden="true" />
                    <span className="absolute -top-1 -left-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#1b5e20] text-[11px] font-semibold text-white ring-3 ring-white">
                      {number}
                    </span>
                  </span>

                  <h3 className="text-[13px] sm:text-[14px] font-semibold uppercase leading-snug text-slate-900">
                    {title}
                  </h3>
                  <span className="mt-1 mb-1 h-0.5 w-6 bg-[#3b8c2a]" aria-hidden="true" />
                  <p className="max-w-[16rem] text-[13px] sm:text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* We're here to help */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-[#1b5e20] p-5 sm:p-6 text-white shadow-sm">
            <Leaf
              className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 text-[#1b5e20]/40"
              aria-hidden="true"
            />
            <div className="relative z-10 flex items-start gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Headset className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <h3 className="pt-1 text-[20px] sm:text-[24px] font-semibold leading-tight">
                We&apos;re Here to Help!
              </h3>
            </div>

            <p className="relative z-10 mt-3 max-w-sm text-[14px] sm:text-[15px] leading-relaxed text-white/80">
              Our team is ready to assist you at every step of the PMS
              application process.
            </p>

            <span className="relative z-10 mt-4 block h-px w-full bg-white/20" aria-hidden="true" />

            <div className="relative z-10 mt-3 flex flex-col gap-2 text-[14px] sm:text-[15px]">
              <a
                href="mailto:msme.support@bharatorganicexpo.in"
                className="flex items-center gap-3 text-white/90 hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#F2B40E]" aria-hidden="true" />
                <span className="break-all">msme.support@bharatorganicexpo.in</span>
              </a>
              <a
                href="tel:+911143083738"
                className="flex items-center gap-3 text-white/90 hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#F2B40E]" aria-hidden="true" />
                <span>+91 11 4308 3738</span>
              </a>
            </div>
          </div>
        </div>

        {/* ============ FOOTER STRIP ============ */}
        <div className="mt-3 lg:mt-4 flex flex-col overflow-hidden rounded-2xl bg-[#EFF7EE] sm:flex-row sm:items-center">
          {/* Let's grow together */}
          <div className="relative flex items-center gap-3 overflow-hidden pl-28 pr-4 py-3 sm:w-1/2 sm:pl-28 sm:pr-5 sm:py-3">
            <img
              src={ctaBannerImg.src}
              alt=""
              className="absolute left-0 bottom-0 h-[120%] w-24 object-contain opacity-20"
              aria-hidden="true"
            />
            <span className="relative hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1b5e20] sm:flex">
              <Leaf className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span className="relative hidden h-8 w-px self-stretch bg-[#1b5e20]/20 sm:block" aria-hidden="true" />
            <div className="relative">
              <p className="text-[18px] sm:text-[20px] font-semibold text-slate-900">
                Let&apos;s Grow Together
              </p>
              <p className="mt-1 max-w-xs text-[13px] text-slate-600">
                Your participation makes a healthier planet and a stronger
                future.
              </p>
            </div>
          </div>

          {/* Ready to take the next step / Apply now */}
          <div className="flex flex-1 flex-col gap-3 rounded-2xl border-t border-gray-200 bg-white px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:border-l sm:border-t-0 sm:px-5">
            <div className="flex items-center gap-3">
              <FileEdit className="h-8 w-8 shrink-0 text-[#1b5e20]" aria-hidden="true" />
              <div>
                <p className="text-[14px] sm:text-[15px] font-semibold uppercase leading-tight text-slate-900">
                  Ready to Take the Next Step?
                </p>
                <p className="mt-0.5 text-[14px] text-slate-600">
                  Apply now and grow your business with government support.
                </p>
              </div>
            </div>

            <a
              href="#apply"
              className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg bg-[#1b5e20] px-6 py-3 text-[14px] sm:text-[15px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2d7a2d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3b8c2a] focus-visible:ring-offset-2"
            >
              Apply Now
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

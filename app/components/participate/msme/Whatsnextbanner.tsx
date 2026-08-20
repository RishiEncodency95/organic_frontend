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

/**
 * WhatsNextBanner — "What's Next? Take the Next Step Today"
 * Promotional section for Bharat Organic Expo 2027.
 * Pure Tailwind, no background image (parent provides the bg).
 */

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
      className="w-full px-4 py-10 md:px-11 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full">
        {/* ============ TOP: Heading+Intro  |  Logo+Benefits ============ */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left: heading + intro copy */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2
              id="whats-next-heading"
              className="flex flex-wrap items-center gap-2 font-black uppercase italic leading-[0.95] tracking-tight text-emerald-800 text-4xl sm:text-5xl xl:text-6xl"
            >
              What&apos;s Next?
              <Leaf
                className="h-8 w-8 sm:h-10 sm:w-10 shrink-0 -rotate-12 text-emerald-600"
                aria-hidden="true"
              />
            </h2>
            <p className="mt-1 font-black uppercase italic leading-[0.95] tracking-tight text-slate-900 text-3xl sm:text-4xl xl:text-5xl">
              Take the Next Step Today
            </p>

            <div className="my-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-[3px] w-16 bg-emerald-700" />
              <Leaf className="h-4 w-4 text-emerald-600" />
              <span className="h-px flex-1 bg-emerald-700/40" />
            </div>

            <p className="max-w-md text-base sm:text-lg leading-relaxed text-slate-700">
              Join <span className="font-bold text-slate-900">Bharat Organic Expo 2027</span> and
              be part of India&apos;s fastest growing Organic &amp; Natural marketplace.
            </p>
          </div>

          {/* Right: logo lockup + benefits card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Logo lockup */}
            <div className="flex items-center justify-start gap-3 lg:justify-end">
              <Leaf className="h-10 w-10 shrink-0 text-emerald-600" aria-hidden="true" />
              <p className="text-2xl sm:text-3xl font-extrabold leading-tight text-emerald-800">
                Bharat
                <br />
                Organic
                <br />
                Expo <span className="text-amber-700">2027</span>
              </p>
            </div>

            {/* Benefits card */}
            <div className="rounded-2xl border border-emerald-100 bg-white/80 shadow-sm px-4 py-6 sm:px-8 sm:py-8">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 sm:gap-x-0 sm:divide-x sm:divide-dashed sm:divide-emerald-300">
                {benefits.map(({ icon: Icon, title, desc }) => (
                  <li
                    key={title}
                    className="flex flex-col items-center px-2 text-center sm:px-4"
                  >
                    <span className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
                      <Icon className="h-8 w-8 text-emerald-700" aria-hidden="true" />
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold uppercase leading-tight text-emerald-800">
                      {title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-snug text-slate-600">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ============ BOTTOM: 3 Steps | Help card ============ */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8 lg:items-stretch">
          {/* 3 Easy Steps */}
          <div className="lg:col-span-7 rounded-2xl border border-emerald-100 bg-white/80 p-5 sm:p-8 shadow-sm">
            {/* Ribbon */}
            <div className="mb-8 flex items-center justify-center gap-3">
              <Leaf className="hidden h-6 w-6 -rotate-45 text-emerald-500 sm:block" aria-hidden="true" />
              <div className="rounded-md bg-emerald-800 px-6 py-2.5 text-center text-sm sm:text-base font-extrabold uppercase tracking-wide text-white shadow">
                Get Started in 3 Easy Steps
              </div>
              <Leaf className="hidden h-6 w-6 rotate-45 scale-x-[-1] text-emerald-500 sm:block" aria-hidden="true" />
            </div>

            {/* Steps */}
            <ol className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4">
              {steps.map(({ number, icon: Icon, title, desc }, i) => (
                <li key={number} className="relative flex flex-col items-center text-center">
                  {/* connector arrow (desktop only, between items) */}
                  {i < steps.length - 1 && (
                    <span
                      className="absolute right-[-1.1rem] top-10 hidden text-emerald-700 sm:block"
                      aria-hidden="true"
                    >
                      <ChevronRight className="h-5 w-5" strokeWidth={3} />
                    </span>
                  )}

                  <span className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                    <Icon className="h-9 w-9 text-emerald-800" aria-hidden="true" />
                    <span className="absolute -top-2 -left-1 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-900 text-xs font-bold text-white ring-4 ring-white">
                      {number}
                    </span>
                  </span>

                  <h3 className="text-sm sm:text-base font-extrabold uppercase leading-snug text-emerald-800">
                    {title}
                  </h3>
                  <span className="mt-1 mb-2 h-0.5 w-8 bg-emerald-700" aria-hidden="true" />
                  <p className="max-w-[16rem] text-xs sm:text-sm leading-relaxed text-slate-600">
                    {desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* We're here to help */}
          <div className="lg:col-span-5 relative overflow-hidden rounded-2xl bg-emerald-950 p-6 sm:p-8 text-white shadow-sm">
            <Leaf
              className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 text-emerald-800/60"
              aria-hidden="true"
            />
            <div className="relative flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-700/70">
                <Headset className="h-7 w-7 text-white" aria-hidden="true" />
              </span>
              <h3 className="pt-1 text-2xl sm:text-3xl font-extrabold leading-tight">
                We&apos;re Here to Help!
              </h3>
            </div>

            <p className="relative mt-5 max-w-sm text-sm sm:text-base leading-relaxed text-emerald-50/90">
              Our team is ready to assist you at every step of the PMS
              application process.
            </p>

            <span className="relative mt-5 block h-px w-full bg-emerald-400/30" aria-hidden="true" />

            <div className="relative mt-5 flex flex-col gap-3 text-sm sm:text-base">
              <a
                href="mailto:msme.support@bharatorganicexpo.in"
                className="flex items-center gap-3 text-emerald-50 hover:text-white"
              >
                <Mail className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                <span className="break-all">msme.support@bharatorganicexpo.in</span>
              </a>
              <a
                href="tel:+911143083738"
                className="flex items-center gap-3 text-emerald-50 hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                <span>+91 11 4308 3738</span>
              </a>
            </div>
          </div>
        </div>

        {/* ============ FOOTER STRIP ============ */}
        <div className="mt-6 lg:mt-8 flex flex-col overflow-hidden rounded-2xl bg-emerald-50 sm:flex-row sm:items-center">
          {/* Let's grow together */}
          <div className="relative flex items-center gap-4 overflow-hidden px-5 py-6 sm:w-1/2 sm:px-8">
            <Leaf
              className="pointer-events-none absolute -left-4 -bottom-4 h-20 w-20 text-emerald-200"
              aria-hidden="true"
            />
            <span className="relative hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-900 sm:flex">
              <Leaf className="h-7 w-7 text-white" aria-hidden="true" />
            </span>
            <span className="relative hidden h-10 w-px self-stretch bg-emerald-800/20 sm:block" aria-hidden="true" />
            <div className="relative">
              <p className="font-serif text-xl sm:text-2xl italic font-semibold text-emerald-900">
                Let&apos;s Grow Together
              </p>
              <p className="mt-1 max-w-xs text-sm text-slate-600">
                Your participation makes a healthier planet and a stronger
                future.
              </p>
            </div>
          </div>

          {/* Ready to take the next step / Apply now */}
          <div className="flex flex-1 flex-col gap-4 border-t border-emerald-200 bg-white px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:border-l sm:border-t-0 sm:px-8">
            <div className="flex items-center gap-3">
              <FileEdit className="h-8 w-8 shrink-0 text-emerald-800" aria-hidden="true" />
              <div>
                <p className="text-sm sm:text-base font-extrabold uppercase leading-tight text-slate-900">
                  Ready to Take the Next Step?
                </p>
                <p className="mt-0.5 text-sm text-slate-600">
                  Apply now and grow your business with government support.
                </p>
              </div>
            </div>

            <a
              href="#apply"
              className="inline-flex shrink-0 items-center justify-center gap-1 rounded-lg bg-emerald-900 px-6 py-3 text-sm sm:text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-700 focus-visible:ring-offset-2"
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
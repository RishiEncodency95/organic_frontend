import React from "react";
import {
  Leaf,
  FileText,
  ShieldCheck,
  HandCoins,
  TrendingUp,
  MousePointerClick,
  UploadCloud,
  Search,
  ClipboardCheck,
  Headphones,
  Users,
  Mail,
  Phone,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import leafsImg from "@/app/assets/icons/leafs.png";
import howToApplyImg from "@/app/assets/participate/msme/how_to_apply.png";
import everySupportImg from "@/app/assets/participate/msme/every_support.png";

const highlightCards = [
  {
    icon: FileText,
    title: "Easy Application",
    description: "Simple documentation with expert support.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Eligibility",
    description: "Our team screens your documents & eligibility.",
  },
  {
    icon: HandCoins,
    title: "Financial Assistance",
    description: "Get up to applicable support as per PMS.",
  },
  {
    icon: TrendingUp,
    title: "Focus On Growth",
    description: "We handle the process, you grow your business.",
  },
];

const journeySteps = [
  {
    number: "01",
    icon: MousePointerClick,
    title: "Apply Online",
    description: "Fill in the PMS application form and share basic business details.",
  },
  {
    number: "02",
    icon: UploadCloud,
    title: "Submit Documents",
    description: "Upload required documents for verification and PMS eligibility.",
  },
  {
    number: "03",
    icon: Search,
    title: "Screening & Verification",
    description: "Our team verifies eligibility and matches with PMS scheme guidelines.",
  },
  {
    number: "04",
    icon: ClipboardCheck,
    title: "Approval & Submission",
    description: "We prepare and submit your application to the concerned MSME-DFO.",
  },
];

export default function PmsSupportSection() {
  return (
    <section
      aria-labelledby="pms-support-heading"
      className="relative w-full overflow-hidden bg-[#F7F8F0] px-4 py-4 md:px-11"
    >
      <img
        src={leafsImg.src}
        alt=""
        className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rotate-[20deg] object-contain opacity-10 sm:h-56 sm:w-56 lg:right-4"
        aria-hidden="true"
      />
      <div className="mx-auto flex w-full flex-col gap-6 sm:gap-8 lg:gap-10">
        {/* ---------- Top block: heading + hero image ---------- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          {/* Left: heading + intro + highlight cards */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">

              <h2
                id="pms-support-heading"
                className="text-[18px] font-semibold uppercase leading-[1.05] tracking-tight text-slate-900 md:text-[28px] lg:text-[32px]"
              >
                How to Apply
                <br />
                &amp; Get PMS Support
              </h2>

              <p className="max-w-sm text-[14px] leading-relaxed text-slate-600 sm:text-[15px]">
                A simple, guided process to help eligible MSEs receive financial
                assistance for participation.
              </p>

              <span className="h-1 w-16 rounded-full bg-[#3b8c2a]" aria-hidden="true" />
            </div>

            {/* Highlight cards */}
            <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-4 xl:grid-cols-4">
              {highlightCards.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex flex-col items-start gap-3 sm:gap-4">
                  <div className="flex flex-row gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EFF7EE] sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-[#1b5e20] sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[13px] font-semibold uppercase leading-tight text-slate-900 sm:text-[14px]">
                      {title}
                    </h3>
                  </div>
                  </div>
                    <p className="text-[13px] leading-snug text-slate-600 sm:text-sm">
                      {description}
                    </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: hero photo + expo badge */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
            <img
              src={howToApplyImg.src}
              alt="Bharat Organic Expo team assisting an exhibitor with the PMS application process"
              className="h-52 w-full object-cover object-top sm:h-64 lg:h-[22rem]"
              loading="lazy"
            />

            {/* Expo brand badge */}
            {/* <div className="absolute right-3 top-3 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 backdrop-blur-sm sm:right-4 sm:top-4">
              <Leaf className="h-6 w-6 shrink-0 text-[#1b5e20]" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase leading-tight text-slate-900 sm:text-[12px]">
                Bharat
                <br />
                Organic
                <br />
                <span className="text-[#F2B40E]">Expo 2027</span>
              </span>
            </div> */}
          </div>
        </div>

        {/* ---------- 4-step journey ---------- */}
        <div className="rounded-3xl bg-[#EFF7EE] p-4 ring-1 ring-black/5 sm:p-5">
          <div className="mb-5">
            <h3 className="text-center text-[16px] font-semibold tracking-tight text-slate-900 md:text-[20px] lg:text-[22px]">
              Your 4-Step Journey
            </h3>
          </div>

          <ol className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-12">
            {journeySteps.map(({ number, icon: Icon, title, description }, index) => (
              <li key={number} className="relative flex flex-col items-center text-center rounded-2xl bg-white px-4 py-6 shadow-sm ring-1 ring-black/5">
                {/* connecting arrow (desktop only, between cards) */}
                {index < journeySteps.length - 1 && (
                  <span
                    className="pointer-events-none absolute -right-6 top-9 hidden text-[#1b5e20]/60 lg:block z-10"
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                )}

                <span className="relative mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#EFF7EE] sm:h-16 sm:w-16">
                  <span className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[#1b5e20] text-[11px] font-semibold text-white ring-2 ring-white">
                    {number}
                  </span>
                  <Icon className="h-6 w-6 text-[#1b5e20] sm:h-7 sm:w-7" aria-hidden="true" />
                </span>

                <h4 className="mb-2 text-[13px] font-semibold uppercase tracking-wide text-slate-900 sm:text-[14px]">
                  {title}
                </h4>
                <span className="mb-2 h-[2px] w-8 rounded-full bg-[#1b5e20]" aria-hidden="true" />
                <p className="max-w-[16rem] text-[13px] leading-relaxed text-slate-600 sm:text-sm">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* ---------- Bottom row: support / contact / CTA ---------- */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {/* Expert support at every step */}
          <div className="flex overflow-hidden rounded-2xl bg-[#0b2912] text-white">
            <img
              src={everySupportImg.src}
              alt="Bharat Organic Expo support specialist ready to help with PMS applications"
              className="h-full w-28 shrink-0 object-cover sm:w-36"
              loading="lazy"
            />
            <div className="flex flex-col justify-center gap-2 p-4 sm:p-5">
              <div className="flex gap-2">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Headphones className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>

              <h3 className="text-[14px] font-semibold uppercase leading-tight sm:text-[15px]">
                Expert Support at Every Step
              </h3>
              <p className="text-[13px] leading-relaxed text-white/70 sm:text-sm">
                Our PMS experts guide you through documentation, submissions and
                follow-ups—so you get the support you deserve.
              </p>
              </div>
              </div>
            </div>
          </div>

          {/* Have questions / contact */}
          <div className="flex flex-col gap-3 rounded-2xl bg-[#EFF7EE] p-5 sm:p-6">
            <div className="flex flex-row gap-2">
            <span className="flex h-12 w-12 min-h-12 min-w-12 items-center justify-center rounded-full bg-white">
              <Users className="h-6 w-6 text-[#1b5e20]" aria-hidden="true" />
            </span>
            <div>

            <h3 className="text-[14px] font-semibold uppercase leading-tight text-slate-900 sm:text-[15px]">
              Have Questions?
            </h3>
            <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm">
              Our team is here to help you with eligibility, documents and the
              PMS process.
            </p>
            </div>
</div>
            <address className="mt-1 flex flex-col gap-1.5 text-[13px] not-italic text-slate-700 sm:text-sm">
              <a
                href="mailto:msme.support@bharatorganicexpo.in"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail className="h-5 w-5 shrink-0 text-[#1b5e20]" aria-hidden="true" />
                msme.support@bharatorganicexpo.in
              </a>
              <a href="tel:+911143083738" className="flex items-center gap-2 hover:underline">
                <Phone className="h-5 w-5 shrink-0 text-[#1b5e20]" aria-hidden="true" />
                +91 11 4308 3738
              </a>
            </address>
          </div>

          {/* Ready to apply / CTA */}
          <div className="flex flex-col justify-between gap-4 rounded-2xl bg-[#1b5e20] p-5 text-white sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-[14px] font-semibold uppercase leading-tight sm:text-[15px]">
                  Ready to Apply?
                </h3>
                <p className="text-[13px] leading-relaxed text-white/70 sm:text-sm">
                  Take the first step towards financial support and grow your
                  business with us.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-[#F2B40E] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-[#0b2912] transition-colors hover:bg-[#d4a00c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B40E] sm:text-sm"
            >
              Start Your Application
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

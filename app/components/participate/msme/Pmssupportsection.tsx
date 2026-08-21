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
} from "lucide-react";
import howToApplyImg from "@/app/assets/participate/msme/how_to_apply.png";
import everySupportImg from "@/app/assets/participate/msme/every_support.png";

/**
 * Section 05 — "How To Apply & Get PMS Support"
 * Bharat Organic Expo 2027
 *
 * Notes:
 * - No background image is included by design (parent/page is expected to supply it).
 * - Built mobile-first and fully responsive; grid/flex layouts collapse gracefully.
 * - Semantic HTML (section/h2/h3, address-like contact list) for SEO + a11y.
 * - Tailwind-only styling, lucide-react for icons.
 */

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
      className="relative w-full bg-gradient-to-br from-green-50 via-emerald-50/60 to-white px-4 py-6 md:px-11"
    >
      <div className="mx-auto flex w-full flex-col gap-8 sm:gap-10 lg:gap-12">
        {/* ---------- Top block: heading + hero image ---------- */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          {/* Left: heading + intro + highlight cards */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-3 sm:gap-4">

              <h2
                id="pms-support-heading"
                className="text-3xl font-semibold uppercase leading-[1.05] tracking-tight text-emerald-950 sm:text-4xl md:text-5xl"
              >
                How to Apply
                <br />
                &amp; Get PMS Support
              </h2>

              <p className="max-w-xl text-sm leading-relaxed text-emerald-950 sm:text-base">
                A simple, guided process to help eligible MSEs receive financial
                assistance for participation.
              </p>

              <span className="h-1 w-16 rounded-full bg-emerald-800" aria-hidden="true" />
            </div>

            {/* Highlight cards */}
            <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4 sm:gap-x-3 lg:grid-cols-2 lg:gap-x-4 xl:grid-cols-4">
              {highlightCards.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex flex-col items-start gap-3 sm:gap-4">
                  <div className="flex flex-row gap-3 sm:gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gray-200 sm:h-12 sm:w-12">
                    <Icon className="h-5 w-5 text-emerald-800 sm:h-6 sm:w-6" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xs font-semibold uppercase leading-tight text-emerald-950 sm:text-sm">
                      {title}
                    </h3>
                  </div>
                  </div>
                    <p className="text-xs leading-snug text-emerald-950 sm:text-sm">
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
              className="h-64 w-full object-cover sm:h-80 lg:h-[26rem]"
              loading="lazy"
            />

            {/* Expo brand badge */}
            <div className="absolute right-3 top-3 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 backdrop-blur-sm sm:right-4 sm:top-4">
              <Leaf className="h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase leading-tight text-emerald-950 sm:text-sm">
                Bharat
                <br />
                Organic
                <br />
                <span className="text-amber-600">Expo 2027</span>
              </span>
            </div>
          </div>
        </div>

        {/* ---------- 4-step journey ---------- */}
        <div className="rounded-3xl bg-emerald-50/80 p-4 ring-1 ring-emerald-900/5 sm:p-5">
          <div className="mb-5 flex justify-center">
            <h3 className="inline-flex items-center gap-2 rounded-full bg-emerald-950 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-white sm:px-6 sm:text-sm">
              Your 4-Step Journey
            </h3>
          </div>

          <ol className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-4">
            {journeySteps.map(({ number, icon: Icon, title, description }, index) => (
              <li key={number} className="relative flex flex-col items-center text-center">
                {/* connecting arrow (desktop only, between cards) */}
                {index < journeySteps.length - 1 && (
                  <span
                    className="pointer-events-none absolute -right-3 top-9 hidden text-emerald-800/70 lg:block"
                    aria-hidden="true"
                  >
                    <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
                  </span>
                )}

                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-950 text-xs font-semibold text-white">
                  {number}
                </span>

                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-sm sm:h-16 sm:w-16">
                  <Icon className="h-6 w-6 text-emerald-800 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>

                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-emerald-950 sm:text-base">
                  {title}
                </h4>
                <p className="max-w-[16rem] text-xs leading-relaxed text-emerald-950/60 sm:text-sm">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* ---------- Bottom row: support / contact / CTA ---------- */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {/* Expert support at every step */}
          <div className="flex overflow-hidden rounded-2xl bg-emerald-950 text-white">
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

              <h3 className="text-sm font-semibold uppercase leading-tight sm:text-base">
                Expert Support at Every Step
              </h3>
              <p className="text-xs leading-relaxed text-emerald-50/80 sm:text-sm">
                Our PMS experts guide you through documentation, submissions and
                follow-ups—so you get the support you deserve.
              </p>
              </div>
              </div>
            </div>
          </div>

          {/* Have questions / contact */}
          <div className="flex flex-col gap-3 rounded-2xl bg-emerald-50 p-5 sm:p-6">
            <div className="flex flex-row gap-2">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
              <Users className="h-6 w-6 text-emerald-800" aria-hidden="true" />
            </span>
            <div>

            <h3 className="text-sm font-semibold uppercase leading-tight text-emerald-950 sm:text-base">
              Have Questions?
            </h3>
            <p className="text-xs leading-relaxed text-emerald-950/60 sm:text-sm">
              Our team is here to help you with eligibility, documents and the
              PMS process.
            </p>
            </div>
</div>
            <address className="mt-1 flex flex-col gap-1.5 text-xs not-italic text-emerald-950 sm:text-sm">
              <a
                href="mailto:msme.support@bharatorganicexpo.in"
                className="flex items-center gap-2 hover:underline"
              >
                <Mail className="h-5 w-5 shrink-0 text-emerald-800" aria-hidden="true" />
                msme.support@bharatorganicexpo.in
              </a>
              <a href="tel:+911143083738" className="flex items-center gap-2 hover:underline">
                <Phone className="h-5 w-5 shrink-0 text-emerald-800" aria-hidden="true" />
                +91 11 4308 3738
              </a>
            </address>
          </div>

          {/* Ready to apply / CTA */}
          <div className="flex flex-col justify-between gap-4 rounded-2xl bg-emerald-950 p-5 text-white sm:p-6">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                <FileText className="h-6 w-6" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-semibold uppercase leading-tight sm:text-base">
                  Ready to Apply?
                </h3>
                <p className="text-xs leading-relaxed text-emerald-50/80 sm:text-sm">
                  Take the first step towards financial support and grow your
                  business with us.
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex w-fit items-center gap-1.5 rounded-lg bg-amber-400 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-emerald-950 transition-colors hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:text-sm"
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
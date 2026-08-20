"use client";

import { useRef, useEffect, useState } from "react";
import { Handshake, CheckCircle2, Calendar, MapPin, Building2, Headset, ChevronRight, Users, Award } from "lucide-react";
import { useInView, animate } from "framer-motion";
import bannerImg from "@/app/assets/participate/msme/home-banner.png";

interface MsmePmsBannerProps {
  eligibilityHref?: string;
  supportHref?: string;
}

const StatCounter = ({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericMatch = value.match(/^[\d,]+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0].replace(/,/g, "")) || 0 : 0;
  const suffix = value.replace(/^[\d,]+/, "");

  useEffect(() => {
    if (isInView && numericValue > 0) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(v) {
          setDisplayValue(Math.floor(v));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 text-center">
      <Icon className="h-5 w-5 text-[#D4A017]" aria-hidden="true" />
      <span className="text-xl font-extrabold text-emerald-900 sm:text-2xl">
        {numericValue > 0 ? displayValue.toLocaleString() + suffix : value}
      </span>
      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-emerald-900/70 sm:text-xs">
        {label}
      </span>
    </div>
  );
};

const stats = [
  { value: "200+", label: "Exhibitors", icon: Building2 },
  { value: "8,000+", label: "Trade Visitors", icon: Users },
  { value: "5,000 Sqm", label: "Exhibition Area", icon: Award },
  { value: "10+ Years", label: "Proven Experience", icon: Handshake },
];

export default function MsmePmsBanner({
  eligibilityHref = "#check-eligibility",
  supportHref = "#get-support",
}: MsmePmsBannerProps) {
  return (
    <section
      aria-labelledby="msme-pms-heading"
      className="relative w-full min-h-[380px] sm:min-h-[420px] md:min-h-[450px] lg:min-h-[470px] flex items-center overflow-hidden border-b-4 border-[#D4A017]"
    >
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 w-full overflow-hidden pointer-events-none">
        <img
          src={bannerImg.src}
          alt="Bharat Organic Expo MSME PMS Scheme"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full grid-cols-1 items-center gap-10 px-4 py-16 md:px-11 md:py-20 lg:grid-cols-2 lg:gap-8">
        {/* ---------------- Left column ---------------- */}
        <div className="flex flex-col">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex w-fit flex-col">
            <div className="flex items-center gap-2 text-[#8FD19E]">
              <Handshake className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className="text-xs font-bold tracking-wide sm:text-sm">
                MSME PROCUREMENT &amp; MARKETING SUPPORT
              </span>
            </div>
            <span className="mt-2 h-[3px] w-16 rounded-full bg-[#D4A017]" aria-hidden="true" />
          </div>

          {/* Heading */}
          <h1
            id="msme-pms-heading"
            className="text-[2.25rem] font-extrabold leading-[1.1] text-emerald-900 sm:text-5xl lg:text-[3.25rem]"
          >
            MSME PMS Scheme &amp; Exhibition Support
          </h1>

          {/* Subheading */}
          <h2 className="mt-4 text-lg font-semibold text-emerald-900/90 sm:text-xl">
            Exhibit. Connect. Grow with Government Support.
          </h2>
          <span className="mt-2 h-[3px] w-10 rounded-full bg-[#D4A017]" aria-hidden="true" />

          {/* Paragraph */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-emerald-900/80 sm:text-base">
            Eligible Micro &amp; Small Enterprises can explore financial assistance for
            participation in{" "}
            <span className="font-semibold text-[#0F5132]">Bharat Organic Expo 2027</span>{" "}
            under the applicable Procurement &amp; Marketing Support (PMS) Scheme.
          </p>

          {/* Approved pill */}
          <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-900/20 bg-white/60 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#0F5132]">
              <CheckCircle2 className="h-4 w-4 text-[#0F5132]" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold text-emerald-900 sm:text-sm">
              Bharat Organic Expo 2027 —{" "}
              <span className="text-[#D4A017]">Approved under MSME PMS Scheme*</span>
            </span>
          </div>

          {/* Event details row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-emerald-900/90 sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 shrink-0 text-[#0F5132]" aria-hidden="true" />
              <span>
                19–21
                <br className="hidden sm:block" /> February 2027
              </span>
            </div>
            <span className="hidden h-8 w-px bg-emerald-900/20 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0 text-[#0F5132]" aria-hidden="true" />
              <span>Hall 12</span>
            </div>
            <span className="hidden h-8 w-px bg-emerald-900/20 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 shrink-0 text-[#0F5132]" aria-hidden="true" />
              <span>
                Bharat Mandapam, <span className="font-semibold">New Delhi</span>
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={eligibilityHref}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#0F5132] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-all hover:bg-[#0c3f27] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5132] focus-visible:ring-offset-2 sm:text-base"
            >
              Check Your PMS Eligibility
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={supportHref}
              className="inline-flex items-center justify-center gap-1.5 rounded-md border-2 border-[#0F5132] bg-white/60 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0F5132] backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5132] focus-visible:ring-offset-2 sm:text-base"
            >
              Get PMS Support
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Help strip */}
          <div className="mt-7 flex items-start gap-3 rounded-xl bg-white/60 px-4 py-4 backdrop-blur-sm sm:items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F5132]">
              <Headset className="h-4.5 w-4.5 text-white" aria-hidden="true" />
            </span>
            <p className="text-sm text-emerald-900/90 sm:text-[0.9rem]">
              <span className="font-bold text-emerald-900">New to MSME/PMS? </span>
              Our team will guide you from registration &amp; eligibility to
              documentation, application and claim support.
            </p>
          </div>
        </div>

        {/* ---------------- Right column (visual) — hidden on mobile, shown on lg+ ---------------- */}
        <div className="relative mx-auto hidden w-full max-w-xl lg:block" />
      </div>

      {/* ── Stats Strip (bottom of banner) ── */}
      <div className="absolute bottom-0 left-0 z-10 w-full border-t border-emerald-900/10 bg-white/70 backdrop-blur-md">
        <div className="mx-auto grid w-full grid-cols-2 gap-4 px-4 py-4 sm:grid-cols-4 sm:gap-0 sm:py-5 md:px-11">
          {stats.map((stat) => (
            <StatCounter key={stat.label} value={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}

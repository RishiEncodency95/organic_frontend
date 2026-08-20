import { Handshake, CheckCircle2, Calendar, MapPin, Building2, Headset, ChevronRight } from "lucide-react";

interface MsmePmsBannerProps {
  /** URL for the right-side exhibition photo. Pass your own bg image here (or render it via CSS on the wrapper). */
  imageUrl?: string;
  eligibilityHref?: string;
  supportHref?: string;
}

export default function MsmePmsBanner({
  imageUrl,
  eligibilityHref = "#check-eligibility",
  supportHref = "#get-support",
}: MsmePmsBannerProps) {
  return (
    <section
      aria-labelledby="msme-pms-heading"
      className="relative w-full overflow-hidden bg-[#F8F6EF]"
    >
      <div className="mx-auto grid w-full grid-cols-1 items-center gap-10 px-4 py-10 md:px-11 sm:py-14 lg:grid-cols-2 lg:gap-8 lg:py-16">
        {/* ---------------- Left column ---------------- */}
        <div className="flex flex-col">
          {/* Eyebrow */}
          <div className="mb-5 inline-flex w-fit flex-col">
            <div className="flex items-center gap-2 text-[#0F5132]">
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
            className="text-[2.25rem] font-extrabold leading-[1.1] text-[#123524] sm:text-5xl lg:text-[3.25rem]"
          >
            MSME PMS Scheme &amp; Exhibition Support
          </h1>

          {/* Subheading */}
          <h2 className="mt-4 text-lg font-semibold text-[#1a1a1a] sm:text-xl">
            Exhibit. Connect. Grow with Government Support.
          </h2>
          <span className="mt-2 h-[3px] w-10 rounded-full bg-[#D4A017]" aria-hidden="true" />

          {/* Paragraph */}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#3f3f3f] sm:text-base">
            Eligible Micro &amp; Small Enterprises can explore financial assistance for
            participation in{" "}
            <span className="font-semibold text-[#0F5132]">Bharat Organic Expo 2027</span>{" "}
            under the applicable Procurement &amp; Marketing Support (PMS) Scheme.
          </p>

          {/* Approved pill */}
          <div className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#0F5132] bg-white px-4 py-2 shadow-sm">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#0F5132]">
              <CheckCircle2 className="h-4 w-4 text-[#0F5132]" aria-hidden="true" />
            </span>
            <span className="text-xs font-semibold text-[#123524] sm:text-sm">
              Bharat Organic Expo 2027 —{" "}
              <span className="text-[#B8860B]">Approved under MSME PMS Scheme*</span>
            </span>
          </div>

          {/* Event details row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[#1a1a1a] sm:text-base">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 shrink-0 text-[#0F5132]" aria-hidden="true" />
              <span>
                19–21
                <br className="hidden sm:block" /> February 2027
              </span>
            </div>
            <span className="hidden h-8 w-px bg-gray-300 sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 shrink-0 text-[#0F5132]" aria-hidden="true" />
              <span>Hall 12</span>
            </div>
            <span className="hidden h-8 w-px bg-gray-300 sm:block" aria-hidden="true" />
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
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-[#0F5132] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#0c3f27] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5132] focus-visible:ring-offset-2 sm:text-base"
            >
              Check Your PMS Eligibility
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={supportHref}
              className="inline-flex items-center justify-center gap-1.5 rounded-md border-2 border-[#0F5132] bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0F5132] transition-colors hover:bg-[#0F5132]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5132] focus-visible:ring-offset-2 sm:text-base"
            >
              Get PMS Support
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Help strip */}
          <div className="mt-7 flex items-start gap-3 rounded-xl bg-[#EAF3EC] px-4 py-4 sm:items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0F5132]">
              <Headset className="h-4.5 w-4.5 text-white" aria-hidden="true" />
            </span>
            <p className="text-sm text-[#1a1a1a] sm:text-[0.9rem]">
              <span className="font-bold text-[#123524]">New to MSME/PMS? </span>
              Our team will guide you from registration &amp; eligibility to
              documentation, application and claim support.
            </p>
          </div>
        </div>

        {/* ---------------- Right column (visual) ---------------- */}
        <div className="relative order-first mx-auto w-full max-w-xl lg:order-last">
          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] bg-[#0F5132]/10 bg-cover bg-center lg:aspect-[16/13]"
            style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
            role="img"
            aria-label="Exhibitors reviewing organic product samples at Bharat Organic Expo"
          />

          {/* Approved event seal */}
          <div className="absolute -left-3 -top-3 flex h-28 w-28 flex-col items-center justify-center rounded-full border-4 border-white bg-[#0F5132] text-center shadow-lg sm:-left-5 sm:-top-5 sm:h-32 sm:w-32">
            <div className="flex h-[88%] w-[88%] flex-col items-center justify-center rounded-full border-2 border-white/90 px-2 text-white">
              <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
              <span className="mt-1 text-[0.6rem] font-extrabold uppercase leading-tight sm:text-[0.65rem]">
                PMS
                <br />
                Approved
                <br />
                Event
              </span>
              <span className="mt-1 text-[0.55rem] font-bold tracking-widest sm:text-[0.6rem]">
                ★ ★ ★
              </span>
              <span className="text-[0.55rem] font-bold tracking-wide sm:text-[0.6rem]">MSME</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { BookOpenCheck, Globe, Store, Handshake, TrendingUp, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SchemeFeature {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const SCHEME_FEATURES: SchemeFeature[] = [
  {
    id: "market-access",
    number: "01",
    title: "Market Access",
    description:
      "Explore new domestic and international markets for your products and services.",
    icon: Globe,
  },
  {
    id: "exhibition-support",
    number: "02",
    title: "Exhibition Support",
    description:
      "Reduce the cost of participation in approved exhibitions and trade fairs.",
    icon: Store,
  },
  {
    id: "buyer-connections",
    number: "03",
    title: "Buyer Connections",
    description:
      "Meet buyers, distributors and industry professionals to grow your business network.",
    icon: Handshake,
  },
  {
    id: "business-growth",
    number: "04",
    title: "Business Growth",
    description:
      "Strengthen your brand, increase visibility and create new business opportunities.",
    icon: TrendingUp,
  },
];

export default function MsmePmsScheme() {
  return (
    <section
      aria-labelledby="msme-pms-heading"
      className="w-full py-8 px-4 md:px-11"
    >
      <div className="mx-auto w-full">
        {/* Eyebrow */}
        <div className="mb-6 flex items-center justify-center gap-3 sm:gap-4">
          <span className="h-px flex-1 max-w-[180px] sm:max-w-[320px] bg-gradient-to-r from-transparent via-amber-600/60 to-amber-600/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600" aria-hidden="true" />
          <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2">
            <BookOpenCheck className="h-5 w-5 text-emerald-800" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.15em] text-emerald-900 uppercase whitespace-nowrap">
              Know The Scheme
            </span>
          </div>
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600" aria-hidden="true" />
          <span className="h-px flex-1 max-w-[180px] sm:max-w-[320px] bg-gradient-to-l from-transparent via-amber-600/60 to-amber-600/60" />
        </div>

        {/* Heading */}
        <h2
          id="msme-pms-heading"
          className="text-center text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-emerald-950 text-balance"
        >
          What is the MSME PMS Scheme?
        </h2>

        {/* Divider */}
        <div className="mt-4 mb-6 flex items-center justify-center gap-2" aria-hidden="true">
          <span className="h-px w-16 bg-amber-600/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-600" />
          <span className="h-px w-16 bg-amber-600/70" />
        </div>

        {/* Intro paragraph */}
        <p className="mx-auto max-w-3xl text-center text-base sm:text-lg leading-relaxed text-neutral-700 text-balance">
          The <strong className="font-semibold text-neutral-900">Procurement &amp; Marketing Support (PMS) Scheme</strong> is
          an initiative of the Ministry of MSME aimed at improving market access for Micro
          &amp; Small Enterprises. Eligible MSEs can explore applicable financial assistance for
          participation in approved trade fairs and exhibitions.
        </p>

        {/* Feature cards */}
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SCHEME_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.id}
                className="relative flex flex-col items-center rounded-2xl bg-white/90 pt-8 pb-14 px-5 text-center shadow-sm ring-1 ring-black/5 overflow-hidden"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-300 bg-gray-100">
                  <Icon className="h-11 w-11 text-emerald-800" strokeWidth={1.75} aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-lg sm:text-xl font-semibold text-emerald-950">
                  {feature.title}
                </h3>

                <div className="mt-3 mb-3 flex items-center gap-2" aria-hidden="true">
                  <span className="h-px w-10 bg-amber-600/70" />
                  <span className="h-1 w-1 rounded-full bg-amber-600" />
                  <span className="h-px w-10 bg-amber-600/70" />
                </div>

                <p className="text-sm sm:text-[0.95rem] leading-relaxed text-neutral-600">
                  {feature.description}
                </p>

                <div
                  className="absolute bottom-0 left-1/2 h-14 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-950"
                  aria-hidden="true"
                />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-semibold text-white">
                  {feature.number}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Bottom banner */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-emerald-50/80 px-6 py-6 sm:px-8">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-950">
            <ShieldCheck className="h-7 w-7 text-white" aria-hidden="true" />
          </div>
          <p className="text-center sm:text-left text-base sm:text-lg text-neutral-800">
            The PMS Scheme empowers MSEs to participate, promote and prosper.{" "}
            <br />
            <strong className="block sm:inline font-semibold text-emerald-900">
              More Participation. More Exposure. More Growth.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
import { BookOpenCheck, Globe, Store, Handshake, TrendingUp, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import leafsImg from "@/app/assets/icons/leafs.png";
import ctaBannerImg from "@/app/assets/participate/msme/ctabanner.png";

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
      className="relative w-full overflow-hidden bg-[#F9FCF9] py-6 px-4 md:px-11"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(27,94,32,0.06),transparent)]"
        aria-hidden="true"
      />
      <img
        src={leafsImg.src}
        alt=""
        className="pointer-events-none absolute left-0 top-0 h-full w-[10%] object-contain opacity-10"
        aria-hidden="true"
      />
      <div className="mx-auto w-full">
        {/* Heading */}
        <h2
          id="msme-pms-heading"
          className="text-center text-[18px] font-semibold tracking-tight text-slate-900 text-balance md:text-[28px] lg:text-[32px]"
        >
          What is the MSME PMS Scheme?
        </h2>

        {/* Intro paragraph */}
        <p className="mx-auto max-w-3xl text-center text-[14px] sm:text-[15px] leading-relaxed text-slate-600 text-balance">
          The <strong className="font-semibold text-slate-900">Procurement &amp; Marketing Support (PMS) Scheme </strong> {" "}is
          an initiative of the Ministry of MSME aimed at improving market access for Micro
          &amp; Small Enterprises. Eligible MSEs can explore applicable financial assistance for
          participation in approved trade fairs and exhibitions.
        </p>

        {/* Feature cards */}
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {SCHEME_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li
                key={feature.id}
                className="relative flex flex-col items-center rounded-2xl bg-gradient-to-b from-[#f4f9f3] to-white pt-6 pb-10 px-4 text-center shadow-sm ring-1 ring-black/5 overflow-hidden"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#3b8c2a]/20 bg-[#EFF7EE]">
                  <Icon className="h-10 w-10 text-[#1b5e20]" strokeWidth={1.75} aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-[18px] sm:text-xl font-semibold text-[#1b5e20]">
                  {feature.title}
                </h3>
                <span className="mt-2 h-[2px] w-10 rounded-full bg-[#1b5e20]" aria-hidden="true" />

                <p className="mt-2 max-w-[200px] text-[14px] leading-relaxed text-[#1b5e20]">
                  {feature.description}
                </p>

                <div
                  className="absolute bottom-0 left-1/2 h-14 w-32 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#0b2912]"
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
        <div className="relative mt-6 overflow-hidden rounded-2xl bg-[#EFF7EE] px-4 py-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
              <ShieldCheck className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <p className="text-center sm:text-left text-[14px] sm:text-[15px] text-slate-700">
              The PMS Scheme empowers MSEs to participate, promote and prosper.{" "}
              <br />
              <strong className="block sm:inline font-semibold text-slate-900">
                More Participation. More Exposure. More Growth.
              </strong>
            </p>
          </div>
          <img
            src={ctaBannerImg.src}
            alt=""
            className="pointer-events-none absolute right-0 bottom-0 h-full w-auto object-contain opacity-20 sm:opacity-30"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
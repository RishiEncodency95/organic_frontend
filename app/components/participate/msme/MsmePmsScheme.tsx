import { Globe, Store, Handshake, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import leafsImg from "@/app/assets/icons/leafs.png";
import cardBg from "@/app/assets/participate/msme/card_image.png";
import secureImg from "@/app/assets/participate/msme/secure.png";
import rightLeaf from "@/app/assets/participate/msme/right_image.png";
import SectionContainer from "@/app/components/layout/SectionContainer";

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
      className="relative w-full overflow-hidden bg-[#F9FCF9] py-6"
    >
      {/* <img
        src={leafsImg.src}
        alt=""
        className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rotate-[20deg] object-contain opacity-10 sm:h-56 sm:w-56 lg:right-4"
        aria-hidden="true"
      /> */}
      <SectionContainer>
      <div className="mx-auto w-full">
        {/* Heading */}
        <h2
          id="msme-pms-heading"
          className="text-center text-[18px] font-semibold tracking-tight text-[#1b5e20] text-balance md:text-[28px] lg:text-[32px]"
        >
          What is the MSME PMS Scheme?
        </h2>

        {/* Golden decoration */}
        <div className="mb-4 flex items-center justify-center gap-2">
          <span className="h-px w-12 bg-[#d4a017]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#d4a017]" />
          <span className="h-px w-12 bg-[#d4a017]" />
        </div>

        {/* Intro paragraph */}
        <p className="mx-auto max-w-3xl text-center text-[14px] sm:text-[15px] leading-relaxed text-slate-600 text-balance">
          The <strong className="font-semibold text-[#1b5e20]">Procurement &amp; Marketing Support (PMS) Scheme</strong> is
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
                className="relative flex flex-col items-center rounded-2xl bg-white pt-8 pb-6 px-4 text-center shadow-sm ring-1 ring-black/5 overflow-hidden"
                style={{ backgroundImage: `url(${cardBg.src})`, backgroundSize: "cover", backgroundPosition: "center bottom" }}
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-gray-200 bg-gray-100">
                  <Icon className="h-12 w-12 text-[#1b5e20]" strokeWidth={1.75} aria-hidden="true" />
                </div>

                <h3 className="mt-4 text-[20px] sm:text-[22px] font-semibold text-[#1b5e20]">
                  {feature.title}
                </h3>

                <div className="mt-2 flex items-center justify-center gap-2">
                  <span className="h-px w-12 bg-[#d4a017]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#d4a017]" />
                  <span className="h-px w-12 bg-[#d4a017]" />
                </div>

                <p className="mt-2 mb-10 max-w-[180px] text-[15px] leading-relaxed text-black">
                  {feature.description}
                </p>

                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 text-[24px] font-bold text-white/80">
                  {feature.number}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Bottom banner */}
        <div className="relative mt-6 flex flex-col sm:flex-row items-center gap-4 rounded-2xl bg-gray-200 px-4 py-4 sm:px-6 overflow-hidden">
          <div className="w-14 h-14 shrink-0 rounded-full bg-gray-300 flex items-center justify-center">
            <Image src={secureImg} alt="Secure" className="w-8 h-8 object-contain" />
          </div>
          <p className="text-center sm:text-left text-[14px] sm:text-[15px] text-slate-700">
            The PMS Scheme empowers MSEs to participate, promote and prosper.{" "}
            <br />
            <strong className="block sm:inline font-semibold text-slate-900">
              More Participation. More Exposure. More Growth.
            </strong>
          </p>
          <Image src={rightLeaf} alt="Leaf" className="absolute right-0 bottom-0 h-28 w-auto object-contain opacity-30" />
        </div>
      </div>
      </SectionContainer>
    </section>
  );
}
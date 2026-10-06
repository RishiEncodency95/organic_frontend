"use client";
import React from "react";
import logiBg from "@/app/assets/banner/logiog.webp";
import SubPartnershipHero from "../SubPartnershipHero";

export const HERO_LOGISTICS_DATA = [
  {
    id: 1,
    titleLine1: "LOGISTICS",
    titleLine2: "PARTNER",
    subtitle: "Move Smart. Deliver Excellence.",
    descriptionLine1: "Partner with Bharat Organic Expo 2027 as our Logistics Partner",
    descriptionLine2: "and provide seamless supply chain, transport & handling solutions for exhibitors",
    descriptionLine3: "and organizers from across India and abroad.",
    date: "19-21 February 2027",
    location: "Pragati Maidan, New Delhi",
  },
];

// Admin-edited values (from /website/opportunities/partnership/sub-hero/logistics-partner) override
// these defaults; see SubPartnershipHero.
export default function Hero({ initialData }: { initialData?: any }) {
  const d = HERO_LOGISTICS_DATA[0];
  return (
    <SubPartnershipHero
      data={initialData}
      defaults={{
        title: `${d.titleLine1} ${d.titleLine2}`,
        subtitle: d.subtitle,
        description: `${d.descriptionLine1} ${d.descriptionLine2} ${d.descriptionLine3}`,
        date: d.date,
        location: d.location,
        image: logiBg.src,
        imageAlt: "Logistics Partner BG",
      }}
      descriptionClassName="max-w-2xl lg:max-w-[34vw]"
      splitDescription={false}
    />
  );
}

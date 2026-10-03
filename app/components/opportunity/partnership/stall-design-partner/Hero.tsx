"use client";
import React from "react";
import stallBg from "@/app/assets/banner/stallog.webp";
import SubPartnershipHero from "../SubPartnershipHero";

export const HERO_STALL_DATA = [
  {
    id: 1,
    titleLine1: "STALL DESIGN &",
    titleLine2: "FABRICATION PARTNER",
    subtitle: "Design Smart. Build Stronger.",
    descriptionLine1: "Partner with Bharat Organic Expo 2027 as our Stall Design & Fabrication Partner",
    descriptionLine2: "and deliver creative, customized booth designs and quality construction",
    descriptionLine3: "for leading brands and exhibitors at the expo.",
    date: "19-21 February 2027",
    location: "Pragati Maidan, New Delhi",
  },
];

// Admin-edited values (from /website/opportunities/partnership/sub-hero/stall-design-partner) override
// these defaults; see SubPartnershipHero.
export default function Hero({ initialData }: { initialData?: any }) {
  const d = HERO_STALL_DATA[0];
  return (
    <SubPartnershipHero
      data={initialData}
      defaults={{
        title: `${d.titleLine1} ${d.titleLine2}`,
        subtitle: d.subtitle,
        description: `${d.descriptionLine1} ${d.descriptionLine2} ${d.descriptionLine3}`,
        date: d.date,
        location: d.location,
        image: stallBg.src,
        imageAlt: "Stall Design Partner BG",
      }}
    />
  );
}

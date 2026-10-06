"use client";
import React from "react";
import manBg from "@/app/assets/banner/manog.webp";
import SubPartnershipHero from "../SubPartnershipHero";

export const HERO_MANPOWER_DATA = [
  {
    id: 1,
    titleLine1: "MANPOWER SUPPLY",
    titleLine2: "PARTNER",
    subtitle: "Empower Events. Provide Excellence.",
    descriptionLine1: "Partner with Bharat Organic Expo 2027 as our Manpower Supply Partner",
    descriptionLine2: "and supply trained hostesses, promoters, security & operational staff for exhibitors",
    descriptionLine3: "and organizers during the premier event.",
    date: "19-21 February 2027",
    location: "Pragati Maidan, New Delhi",
  },
];

// Admin-edited values (from /website/opportunities/partnership/sub-hero/manpower-supply-partner) override
// these defaults; see SubPartnershipHero.
export default function Hero({ initialData }: { initialData?: any }) {
  const d = HERO_MANPOWER_DATA[0];
  return (
    <SubPartnershipHero
      data={initialData}
      defaults={{
        title: `${d.titleLine1} ${d.titleLine2}`,
        subtitle: d.subtitle,
        description: `${d.descriptionLine1} ${d.descriptionLine2} ${d.descriptionLine3}`,
        date: d.date,
        location: d.location,
        image: manBg.src,
        imageAlt: "Manpower Supply Partner BG",
      }}
    />
  );
}

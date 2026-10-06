"use client";
import React from "react";
import printBg from "@/app/assets/banner/printog.webp";
import SubPartnershipHero from "../SubPartnershipHero";

export const HERO_PRINTING_DATA = [
  {
    id: 1,
    titleLine1: "PRINTING & BRANDING",
    titleLine2: "PARTNER",
    subtitle: "Print Perfection. Brand Prominence.",
    descriptionLine1: "Partner with Bharat Organic Expo 2027 as our Printing & Branding Partner",
    descriptionLine2: "and supply high-quality signage, banners, print collaterals & branding services",
    descriptionLine3: "for exhibitors and organizers during the flagship expo.",
    date: "19-21 February 2027",
    location: "Pragati Maidan, New Delhi",
  },
];

// Admin-edited values (from /website/opportunities/partnership/sub-hero/printing-branding-partner) override
// these defaults; see SubPartnershipHero.
export default function Hero({ initialData }: { initialData?: any }) {
  const d = HERO_PRINTING_DATA[0];
  return (
    <SubPartnershipHero
      data={initialData}
      defaults={{
        title: `${d.titleLine1} ${d.titleLine2}`,
        subtitle: d.subtitle,
        description: `${d.descriptionLine1} ${d.descriptionLine2} ${d.descriptionLine3}`,
        date: d.date,
        location: d.location,
        image: printBg.src,
        imageAlt: "Printing & Branding Partner BG",
      }}
    />
  );
}

"use client";
import React from "react";
import hotelBg from "@/app/assets/banner/hotelog.webp";
import SubPartnershipHero from "../SubPartnershipHero";

export const HERO_HOTEL_DATA = [
  {
    id: 1,
    titleLine1: "HOTEL & STAY",
    titleLine2: "PARTNER",
    subtitle: "Stay Smart. Partner Stronger.",
    descriptionLine1: "Partner with Bharat Organic Expo 2027 as our Hotel & Stay Partner",
    descriptionLine2: "and offer premium accommodation solutions to delegates, exhibitors",
    descriptionLine3: "and visitors from across India and the world.",
    date: "19-21 February 2027",
    location: "Pragati Maidan, New Delhi",
  },
];

// Admin-edited values (from /website/opportunities/partnership/sub-hero/hotel-stay-partner) override
// these defaults; see SubPartnershipHero.
export default function Hero({ initialData }: { initialData?: any }) {
  const d = HERO_HOTEL_DATA[0];
  return (
    <SubPartnershipHero
      data={initialData}
      defaults={{
        title: `${d.titleLine1} ${d.titleLine2}`,
        subtitle: d.subtitle,
        description: `${d.descriptionLine1} ${d.descriptionLine2} ${d.descriptionLine3}`,
        date: d.date,
        location: d.location,
        image: hotelBg.src,
        imageAlt: "Hotel Stay Partner BG",
      }}
    />
  );
}

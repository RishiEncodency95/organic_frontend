"use client";
import React from "react";
import traBg from "@/app/assets/banner/travelog.webp";
import SubPartnershipHero from "../SubPartnershipHero";

export const HERO_TRAVEL_DATA = [
  {
    id: 1,
    titleLine1: "TRAVEL",
    titleLine2: "PARTNER",
    subtitle: "Travel Seamless. Partner Stronger.",
    descriptionLine1: "Partner with Bharat Organic Expo 2027 as our Travel Partner",
    descriptionLine2: "and provide end-to-end travel, flight booking, shuttle & local transport solutions",
    descriptionLine3: "for delegates, exhibitors and visitors attending from India and abroad.",
    date: "19-21 February 2027",
    location: "Pragati Maidan, New Delhi",
  },
];

// Admin-edited values (from /website/opportunities/partnership/sub-hero/travel-partner) override
// these defaults; see SubPartnershipHero.
export default function Hero({ initialData }: { initialData?: any }) {
  const d = HERO_TRAVEL_DATA[0];
  return (
    <SubPartnershipHero
      data={initialData}
      defaults={{
        title: `${d.titleLine1} ${d.titleLine2}`,
        subtitle: d.subtitle,
        description: `${d.descriptionLine1} ${d.descriptionLine2} ${d.descriptionLine3}`,
        date: d.date,
        location: d.location,
        image: traBg.src,
        imageAlt: "Travel Partner BG",
      }}
    />
  );
}

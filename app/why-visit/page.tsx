import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/app/components/participate/why-visit/HeroSection";
import WhyVisitMatters from "@/app/components/participate/why-visit/WhyVisitMatters";
import IndustrySegments from "@/app/components/participate/why-visit/IndustrySegments";
import BuyerSellerMeetSection from "@/app/components/participate/why-visit/BuyerSellerMeetSection";
import AwardsHealthCamp from "@/app/components/participate/why-visit/AwardsHealthCamp";
import NeedHelpSupport from "@/app/components/participate/why-visit/NeedHelpSupport";
import WhoShouldVisit from "@/app/components/participate/why-visit/WhoShouldVisit";

export const metadata: Metadata = {
  title: "Why Visit | Bharat Organic Expo 2027",
  description:
    "Source better, connect directly, and grow your business at Bharat Organic Expo 2027. Meet 200+ exhibitors, 8,000+ visitors, and explore 6 major industry segments.",
  openGraph: {
    title: "Why Visit Bharat Organic Expo 2027",
    description:
      "Discover new products, meet manufacturers & suppliers across India's organic ecosystem. 19–21 February 2027, Hall 12, Bharat Mandapam, New Delhi.",
    url: "https://bharatorganicexpo.com/why-visit",
    type: "website",
  },
};

export default function WhyVisitPage() {
  return (
    <main className="min-h-screen bg-white font-inter">
      <HeroSection />
      <WhyVisitMatters />
      <IndustrySegments />
      <BuyerSellerMeetSection />
      <AwardsHealthCamp />
      <NeedHelpSupport />
      <WhoShouldVisit />
    </main>
  );
}

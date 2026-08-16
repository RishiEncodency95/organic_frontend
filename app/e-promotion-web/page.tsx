import React from "react";
import HeroSection from "../components/opportunity/epromotion-opportunity/HeroSection";
import WhyEPromote from "../components/opportunity/epromotion-opportunity/WhyEPromote";
import EPromotionOpportunities from "../components/opportunity/epromotion-opportunity/EPromotionOpportunities";

export const metadata = {
  title: "E-Promotion Opportunity | Bharat Organic Expo",
  description: "Maximize your brand visibility and connect with a highly targeted audience before, during and after the event.",
};

export default function EPromotionWebPage() {
  return (
    <main className="w-full bg-[#f9f9f9]">
      <HeroSection />
      <WhyEPromote />
      <EPromotionOpportunities />
    </main>
  );
}

import React from "react";
import HeroSection from "../components/opportunity/sponsorship/HeroSection";
import WhySponsor from "../components/opportunity/sponsorship/WhySponsor";
import SponsorshipPackages from "../components/opportunity/sponsorship/SponsorshipPackages";
import BottomOpportunities from "../components/opportunity/sponsorship/BottomOpportunities";
import ContactCTA from "../components/opportunity/sponsorship/ContactCTA";

export const metadata = {
  title: "Sponsorship Opportunities | Bharat Bharat Organic Expo 2027",
  description: "Maximize your brand visibility and connect with a highly targeted audience at Bharat Bharat Organic Expo 2027.",
};

export default function SponsorshipPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf0] overflow-x-hidden">
      <HeroSection />
      <WhySponsor />
      <SponsorshipPackages />
      <BottomOpportunities />
      <ContactCTA />
    </main>
  );
}

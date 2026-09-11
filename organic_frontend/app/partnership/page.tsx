import React from "react";
import HeroSection from "../components/opportunity/partnership/HeroSection";
import PartnershipOpportunities from "../components/opportunity/partnership/PartnershipOpportunities";
import WhyPartner from "../components/opportunity/partnership/WhyPartner";
import EnquiryForm from "../components/opportunity/partnership/EnquiryForm";

export const metadata = {
  title: "Partnership & Collaboration | Bharat Organic Expo 2027",
  description: "Partner with Bharat Organic Expo 2027 and be a part of India's leading platform for organic business, innovation, wellness and sustainability.",
};

export default function PartnershipPage() {
  return (
    <main className="w-full bg-[#fbfcf8]">
      <HeroSection />
      <PartnershipOpportunities />
      <WhyPartner />
      <EnquiryForm />
    </main>
  );
}

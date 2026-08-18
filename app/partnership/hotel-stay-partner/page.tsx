import React from "react";
import Hero from "../../components/opportunity/partnership/hotel-stay-partner/Hero";
import FeatureStrip from "../../components/buyer-seller-meet/FeatureStrip";
import KeyBenefits from "../../components/opportunity/partnership/hotel-stay-partner/KeyBenefits";
import Deliverables from "../../components/opportunity/partnership/hotel-stay-partner/Deliverables";
import WhyPartnerHotel from "../../components/opportunity/partnership/hotel-stay-partner/WhyPartnerHotel";

export const metadata = {
  title: "Official Hotel & Stay Partner | Bharat Organic Expo 2027",
  description: "Become the official hotel & stay partner of Bharat Organic Expo 2027. Connect with premium B2B delegates, exhibitors, and visitors globally.",
};

export default function HotelStayPartnerPage() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <FeatureStrip />
      <KeyBenefits />
      <Deliverables />
      <WhyPartnerHotel />
    </main>
  );
}

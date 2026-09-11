import React from "react";
import { Metadata } from "next";
import AdvisoryHero from "@/app/components/abouts/advisory_board_member/AdvisoryHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import ChairmanMessage from "@/app/components/abouts/advisory_board_member/ChairmanMessage";
import AdvisoryBoardGrid from "@/app/components/abouts/advisory_board_member/AdvisoryBoardGrid";
import WhyJoinAdvisory from "@/app/components/abouts/advisory_board_member/WhyJoinAdvisory";
import AdvisoryPartners from "@/app/components/abouts/advisory_board_member/AdvisoryPartners";

export const metadata: Metadata = {
  title: "Advisory Board Members | Bharat Organic Expo 2027",
  description: "Meet the distinguished leaders and professionals shaping the strategic direction of Bharat Organic Expo 2027.",
  alternates: {
    canonical: "/about/advisory_board_member",
  }
};

const AdvisoryBoardMemberPage = () => {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <AdvisoryHero />
      <AboutStrip />
      <ChairmanMessage />
      <AdvisoryBoardGrid />
      <WhyJoinAdvisory />
      <AdvisoryPartners />
    </div>
  );
};

export default AdvisoryBoardMemberPage;

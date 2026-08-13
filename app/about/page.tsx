// Force IDE refresh to clear cached TS errors
import React, { Suspense } from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Bharat Organic Expo 2027",
  description: "Learn about the core mission and visionary approach of the Bharat Organic Expo 2027.",
  alternates: {
    canonical: "/about",
  }
};

// Synchronous load for above the fold
import AboutHero from "@/app/components/abouts/about/AboutHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import EventOverview from "../components/abouts/about/EventOverview";
import FourPillars from "../components/abouts/about/FourPillars";
import AboutVenue from "../components/abouts/about/AboutVenue";
import AboutFaq from "../components/abouts/about/AboutFaq";
import VisionMission from "../components/abouts/about/VisionMission";
import AboutOrganizer from "../components/abouts/about/AboutOrganizer";
import HomeAbout from "@/app/components/abouts/about/HomeAbout";

const LoadingFallback = () => (
  <div className="w-full min-h-[300px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AboutPage = () => {
  return (
    <>
      <div className="bg-[#ffffff] min-h-screen">
        <AboutHero />
        <AboutStrip />

        <Suspense fallback={<LoadingFallback />}>
          <HomeAbout />
          <EventOverview />

          <AboutOrganizer />
          <VisionMission />
          <FourPillars />
          <AboutVenue />
          <AboutFaq />
        </Suspense>
      </div>
    </>
  );
};

export default AboutPage;
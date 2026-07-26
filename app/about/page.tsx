"use client";
// Force IDE refresh

import React, { Suspense, lazy } from "react";
import Head from "next/head";

// Synchronous load for above the fold
import AboutHero from "@/app/components/about/AboutHero";

// Lazy load below the fold components
const AboutIntro = lazy(() => import("@/app/components/about/AboutIntro"));
const AboutTimeline = lazy(() => import("@/app/components/about/AboutTimeline"));
const AboutMissionVision = lazy(() => import("@/app/components/about/AboutMissionVision"));
const AboutStatsBar = lazy(() => import("@/app/components/about/AboutStatsBar"));
const AboutWhy = lazy(() => import("@/app/components/about/AboutWhy"));
const AboutFeatures = lazy(() => import("@/app/components/about/AboutFeatures"));
const AboutHighlights = lazy(() => import("@/app/components/about/AboutHighlights"));
const AboutImpact = lazy(() => import("@/app/components/about/AboutImpact"));
const AboutTeamPartners = lazy(() => import("@/app/components/about/AboutTeamPartners"));
const AboutTestimonials = lazy(() => import("@/app/components/about/AboutTestimonials"));
const AboutRoadmapPresence = lazy(() => import("@/app/components/about/AboutRoadmapPresence"));
const AboutCTA = lazy(() => import("@/app/components/about/AboutCTA"));

const LoadingFallback = () => (
  <div className="w-full min-h-[300px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About Us | Bharat Organic Expo</title>
        <meta name="description" content="India's Largest Organic & Natural Products Exhibition" />
      </Head>

      <div className="bg-[#ffffff] min-h-screen">
        <AboutHero />
        
        <Suspense fallback={<LoadingFallback />}>
          <div className="w-full bg-white">
            <AboutIntro />
          </div>
          
          <div className="w-full bg-[#f8fdf9]">
            <AboutTimeline />
          </div>

          <div className="w-full bg-white">
            <AboutMissionVision />
          </div>

          <AboutStatsBar />

          <div className="w-full bg-white">
            <AboutWhy />
          </div>

          <div className="w-full bg-[#f8fdf9]">
            <AboutFeatures />
          </div>

          <div className="w-full bg-white">
            <AboutHighlights />
          </div>

          <div className="w-full bg-[#f8fdf9]">
            <AboutImpact />
          </div>

          <div className="w-full bg-white">
            <AboutTeamPartners />
          </div>

          <div className="w-full bg-[#f8fdf9]">
            <AboutTestimonials />
          </div>

          <div className="w-full bg-white">
            <AboutRoadmapPresence />
          </div>

          <AboutCTA />
        </Suspense>
      </div>
    </>
  );
};

export default AboutPage;
"use client";
// Force IDE refresh

import React, { Suspense, lazy } from "react";
import Head from "next/head";

// Synchronous load for above the fold
import AboutHero from "@/app/components/abouts/about/AboutHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";

// Lazy load below the fold components
const AboutIntro = lazy(() => import("@/app/components/abouts/about/AboutIntro"));
const AboutTimeline = lazy(() => import("@/app/components/abouts/about/AboutTimeline"));
const AboutWhy = lazy(() => import("@/app/components/abouts/about/AboutWhy"));
const AboutFeatures = lazy(() => import("@/app/components/abouts/about/AboutFeatures"));
const AboutHighlights = lazy(() => import("@/app/components/abouts/about/AboutHighlights"));
const AboutCTA = lazy(() => import("@/app/components/abouts/about/AboutCTA"));
import HomeAbout from "@/app/components/home/HomeAbout";

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
        <AboutStrip />

        <Suspense fallback={<LoadingFallback />}>
          <HomeAbout />
          <div className="w-full bg-white">
            <AboutIntro />
          </div>

          <div className="w-full bg-[#f8fdf9]">
            <AboutTimeline />
          </div>

          <div className="w-full bg-white">
            <AboutWhy />
          </div>

          <div className="w-full bg-[#f8fdf9]">
            <AboutFeatures />
          </div>

          <div className="w-full bg-white">
            <AboutHighlights />
          </div>


          <AboutCTA />
        </Suspense>
      </div>
    </>
  );
};

export default AboutPage;
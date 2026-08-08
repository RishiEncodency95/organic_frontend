"use client";
// Force IDE refresh to clear cached TS errors

import React, { Suspense, lazy } from "react";
import Head from "next/head";

// Synchronous load for above the fold
import AboutHero from "@/app/components/abouts/about/AboutHero";
import AboutStrip from "@/app/components/abouts/about/AboutStrip";
import EventOverview from "../components/abouts/about/EventOverview";
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
          <EventOverview />
        </Suspense>
      </div>
    </>
  );
};

export default AboutPage;
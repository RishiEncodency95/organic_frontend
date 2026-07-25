"use client";

import React, { Suspense, lazy } from "react";

// Synchronous load for above the fold
import ContactHero from "../components/contact/ContactHero";
import ContactStrip from "../components/contact/ContactStrip";

// Lazy load below the fold components to optimize performance
const ContactDetails = lazy(() => import("../components/contact/ContactDetails"));
const ContactMap = lazy(() => import("../components/contact/ContactMap"));
const ContactFormSection = lazy(() => import("../components/contact/ContactFormSection"));
const ContactDepartments = lazy(() => import("../components/contact/ContactDepartments"));
const ContactWhy = lazy(() => import("../components/contact/ContactWhy"));
const ContactProcess = lazy(() => import("../components/contact/ContactProcess"));
const ContactFaqNewsletter = lazy(() => import("../components/contact/ContactFaqNewsletter"));
const MovementBanner = lazy(() => import("../components/home/MovementBanner"));

const ContactPage = () => {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <ContactHero />
      <ContactStrip />
      
      <Suspense fallback={
        <div className="w-full min-h-[300px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <ContactDetails />
        <ContactMap />
        <ContactFormSection />
        <ContactDepartments />
        <ContactWhy />
        <ContactProcess />
        <ContactFaqNewsletter />
        <MovementBanner />
      </Suspense>
    </div>
  );
};

export default ContactPage;

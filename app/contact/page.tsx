"use client";

import React, { Suspense, lazy } from "react";

// Synchronous load for above the fold
import ContactHero from "../components/contact/ContactHero";
import ContactStrip from "../components/contact/ContactStrip";

// Lazy load below the fold components to optimize performance
const ContactFormSection = lazy(() => import("../components/contact/ContactFormSection"));

const ContactPage = () => {
  return (
    <div className="w-full bg-[#f4f7f4] min-h-screen">
      <ContactHero />
      <ContactStrip />

      <Suspense fallback={
        <div className="w-full min-h-[300px] flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>

        <ContactFormSection />
      </Suspense>
    </div>
  );
};

export default ContactPage;

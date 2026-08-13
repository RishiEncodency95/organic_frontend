import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

export const metadata: Metadata = {
  title: "Contact Us | Bharat Organic Expo 2027",
  description: "Get in touch with the Bharat Organic Expo team for any queries regarding exhibiting, visiting, or sponsoring.",
  alternates: {
    canonical: "/contact",
  }
};

// Synchronous load for above the fold
import ContactHero from "../components/contact/ContactHero";
import ContactStrip from "../components/contact/ContactStrip";

// Lazy load below the fold components using next/dynamic
const ContactFormSection = dynamic(() => import("../components/contact/ContactFormSection"), {
  loading: () => (
    <div className="w-full min-h-[300px] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
});

const ContactPage = () => {
  return (
    <div className="w-full bg-[#f4f7f4] min-h-screen">
      <ContactHero />
      <ContactStrip />

      <ContactFormSection />
    </div>
  );
};

export default ContactPage;

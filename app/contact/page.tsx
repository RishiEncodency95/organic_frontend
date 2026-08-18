import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

export const metadata: Metadata = {
  title: "Contact Us | Bharat Bharat Organic Expo 2027",
  description: "Get in touch with the Bharat Organic Expo team for any queries regarding exhibiting, visiting, or sponsoring.",
  alternates: {
    canonical: "/contact",
  }
};

// Synchronous load for above the fold
import ContactHero from "../components/contact/ContactHero";

// Lazy load below the fold components using next/dynamic
const ContactForm = dynamic(() => import("../components/contact/ContactForm"), {
  loading: () => (
    <div className="w-full min-h-[300px] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
});

const ContactBottom = dynamic(() => import("../components/contact/ContactBottom"), {
  loading: () => (
    <div className="w-full min-h-[300px] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
});

const ContactPage = () => {
  return (
    <div className="w-full bg-[#fbfcf7] min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactBottom />
    </div>
  );
};

export default ContactPage;

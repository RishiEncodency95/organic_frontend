import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SocialSidebar from "./components/layout/SocialSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bharatorganicexpo.com"), // Placeholder domain
  title: {
    default: "Bharat Organic Expo 2027",
    template: "%s | Bharat Organic Expo 2027",
  },
  description: "Join Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.",
  openGraph: {
    title: "Bharat Organic Expo 2027",
    description: "Join Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.",
    url: "https://bharatorganicexpo.com",
    siteName: "Bharat Organic Expo 2027",
    type: "website",
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Bharat Organic Expo 2027",
  "startDate": "2027-02-19",
  "endDate": "2027-02-21",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Pragati Maidan",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Delhi",
      "addressCountry": "IN"
    }
  },
  "description": "Join Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.",
  "organizer": {
    "@type": "Organization",
    "name": "Namo Gange Wellness Pvt. Ltd.",
    "url": "https://bharatorganicexpo.com"
  }
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Bharat Organic Expo",
  "url": "https://bharatorganicexpo.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-[16px] md:text-[18px] leading-[1.6]">
        <Topbar />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <SocialSidebar />
      </body>
    </html>
  );
}

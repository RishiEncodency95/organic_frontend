import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SocialSidebar from "./components/layout/SocialSidebar";
import SmoothScroll from "./components/SmoothScroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bharatorganicexpo.com"), // Placeholder domain
  title: {
    default: "Bharat Bharat Organic Expo 2027",
    template: "%s | Bharat Bharat Organic Expo 2027",
  },
  description: "Join Bharat Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.",
  openGraph: {
    title: "Bharat Bharat Organic Expo 2027",
    description: "Join Bharat Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.",
    url: "https://bharatorganicexpo.com",
    siteName: "Bharat Bharat Organic Expo 2027",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Bharat Bharat Organic Expo 2027",
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
  "description": "Join Bharat Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.",
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
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} h-full antialiased overflow-x-hidden`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-inter text-[16px] md:text-[18px] leading-[1.6] overflow-x-hidden w-full">
        <SmoothScroll>
          <Topbar />
          <Navbar />
          <main className="flex-grow overflow-x-hidden w-full">
            {children}
          </main>
          <Footer />
          <SocialSidebar />
        </SmoothScroll>
      </body>
    </html>
  );
}

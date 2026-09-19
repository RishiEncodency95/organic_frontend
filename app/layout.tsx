import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./components/layout/Topbar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SocialSidebar from "./components/layout/SocialSidebar";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
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

import DynamicCanonical from "./components/DynamicCanonical";
import {
  HeadScripts,
  FooterScripts,
  ClientScriptTracker,
} from "./components/seo/CustomScripts";

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:4001";
const API_URL =
  process.env.NEXT_PUBLIC_API_URL || `${SERVER_URL}/api`;

async function getAdvancedSeoSettings() {
  try {
    const res = await fetch(`${API_URL}/seo-settings/advanced`, {
      next: { revalidate: 60 },
    });
    if (res.ok) {
      const json = await res.json();
      return json?.data || null;
    }
  } catch (err) {
    console.warn("[layout] Could not fetch advanced SEO settings:", err);
  }
  return null;
}

const defaultSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV !== "production"
    ? "http://localhost:3002"
    : "https://bharatorganicexpo.com");

export const metadata: Metadata = {
  metadataBase: new URL(defaultSiteUrl),
  title: {
    default: "Bharat Organic Expo 2027",
    template: "%s | Bharat Organic Expo 2027",
  },
  description: "Join Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Bharat Organic Expo 2027",
    description: "Join Bharat Organic Expo 2027, the premier exhibition and conference for organic food, agriculture, and natural products in India.",
    url: defaultSiteUrl,
    siteName: "Bharat Organic Expo 2027",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

import StoreProvider from "./store/StoreProvider";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const seoData = await getAdvancedSeoSettings();
  const headerScripts = seoData?.headerScripts || "";
  const footerScripts = seoData?.footerScripts || "";

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} h-full antialiased overflow-x-hidden`}
    >
      <head>
        {/* Dynamic Header Scripts from Admin (Google Tag Manager, GA, Meta Pixel) */}
        <HeadScripts html={headerScripts} />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-inter text-[16px] md:text-[18px] leading-[1.6] overflow-x-hidden w-full">
        <DynamicCanonical />
        <SmoothScroll>
          <Topbar />
          <Navbar />
          <main className="flex-grow overflow-x-hidden w-full">
            {children}
          </main>
          <Footer />
          <SocialSidebar />
          <WhatsAppFloat />
        </SmoothScroll>
        {/* Dynamic Footer Scripts from Admin (GTM noscript, Chat, Conversion pixels) */}
        <FooterScripts html={footerScripts} />
        <ClientScriptTracker headerHtml={headerScripts} />
      </body>
    </html>
  );
}

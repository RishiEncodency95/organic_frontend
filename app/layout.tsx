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
      <head />
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
      </body>
    </html>
  );
}

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
import JsonLd from "@/components/seo/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import Script from "next/script";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const seoData = await getAdvancedSeoSettings();
  const headerScripts = seoData?.headerScripts || "";
  const footerScripts = seoData?.footerScripts || "";

  const configuredGa4Id = seoData?.ga4MeasurementId || process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
  const configuredGtmId = seoData?.gtmContainerId || process.env.NEXT_PUBLIC_GTM_CONTAINER_ID;
  const gscVerification = seoData?.googleSearchConsoleVerification || process.env.NEXT_PUBLIC_GSC_VERIFICATION;

  const ga4MeasurementId = /^G-[A-Z0-9]+$/i.test(configuredGa4Id ?? "") ? configuredGa4Id : undefined;
  const gtmContainerId = /^GTM-[A-Z0-9]+$/i.test(configuredGtmId ?? "") ? configuredGtmId : undefined;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${inter.variable} h-full antialiased overflow-x-hidden`}
    >
      <head>
        {gscVerification && (
          <meta name="google-site-verification" content={gscVerification} />
        )}
        {/* Dynamic Header Scripts from Admin */}
        <HeadScripts html={headerScripts} />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-inter text-[16px] md:text-[18px] leading-[1.6] overflow-x-hidden w-full">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
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
        {/* Dynamic Footer Scripts from Admin */}
        <FooterScripts html={footerScripts} />
        <ClientScriptTracker headerHtml={headerScripts} />

        {/* Dynamic GA4 Integration */}
        {ga4MeasurementId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga4MeasurementId}', { send_page_view: true });
              `}
            </Script>
          </>
        )}

        {/* Dynamic GTM Integration */}
        {gtmContainerId && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtag.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmContainerId}');
            `}
          </Script>
        )}
      </body>
    </html>
  );
}


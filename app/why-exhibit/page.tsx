import type { Metadata } from "next";
import HeroSection from "@/app/components/participate/why-exhibit/HeroSection";
import StatsBand from "@/app/components/participate/why-exhibit/StatsBand";
import ReasonsSection from "@/app/components/participate/why-exhibit/ReasonsSection";
import IndustriesSection from "@/app/components/participate/why-exhibit/IndustriesSection";
import BuyersSection from "@/app/components/participate/why-exhibit/BuyersSection";
import TestimonialsSection from "@/app/components/participate/why-exhibit/TestimonialsSection";

export const metadata: Metadata = {
  title: "Why Exhibit | Bharat Bharat Organic Expo 2027",
  description:
    "Exhibit at Bharat Bharat Organic Expo 2027 – India's premier B2B platform for organic food, agriculture, AYUSH and sustainable industries. Reach 8,000+ qualified buyers, 200+ exhibitors and global decision makers.",
  openGraph: {
    title: "Why Exhibit at Bharat Bharat Organic Expo 2027",
    description:
      "Showcase, connect and grow globally at India's leading organic B2B exhibition. 19–21 February 2027, Bharat Mandapam, New Delhi.",
    url: "https://bharatorganicexpo.com/why-exhibit",
    type: "website",
  },
};

export default function WhyExhibitPage() {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-inter">
      <style>{`
        @keyframes goldShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes shimmer {
          0%   { left: -75%; }
          100% { left: 150%; }
        }
        @keyframes sparkleAnim {
          0%   { opacity: 0; transform: scale(0.5) translateY(0); }
          40%  { opacity: 1; transform: scale(1.2) translateY(-4px); }
          80%  { opacity: 0.6; transform: scale(0.9) translateY(-6px); }
          100% { opacity: 0; transform: scale(0.5) translateY(-8px); }
        }
        .golden-btn-hero {
          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(255,200,0,0.3), 0 4px 15px rgba(255,165,0,0.25);
          position: relative;
          overflow: hidden;
        }
        .golden-btn-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
        .golden-btn-footer {
          background: linear-gradient(135deg, #f5c842 0%, #ffdd00 30%, #ffa500 60%, #f5c842 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(255,200,0,0.3), 0 4px 15px rgba(255,165,0,0.25);
          position: relative;
          overflow: hidden;
        }
        .golden-btn-footer::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
        .blue-btn-hero {
          background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 30%, #0e3b1c 60%, #1b5e20 100%);
          background-size: 200% 200%;
          animation: goldShift 2.5s ease infinite;
          box-shadow: 0 0 16px 4px rgba(27,94,32,0.3), 0 4px 15px rgba(27,94,32,0.25);
          position: relative;
          overflow: hidden;
        }
        .blue-btn-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -75%;
          width: 50%;
          height: 200%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
          transform: skewX(-20deg);
          animation: shimmer 2s infinite;
        }
      `}</style>

      <HeroSection />
      <StatsBand />
      <ReasonsSection />
      <IndustriesSection />
      <BuyersSection />
      <TestimonialsSection />
    </div>
  );
}

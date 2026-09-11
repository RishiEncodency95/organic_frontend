import { Metadata } from "next";
import ParticipateHero from "@/app/components/participate-as-exhibitor/ParticipateHero";
import ParticipateFeatureStrip from "@/app/components/participate-as-exhibitor/ParticipateFeatureStrip";
import WhoCanParticipate from "@/app/components/buyer-seller-meet/WhoCanParticipate";
import ParticipateWhyParticipate from "@/app/components/participate-as-exhibitor/ParticipateWhyParticipate";
import ParticipateCta from "@/app/components/participate-as-exhibitor/ParticipateCta";
import ParticipateStats from "@/app/components/participate-as-exhibitor/ParticipateStats";

export const metadata: Metadata = {
    title: "Who Can Participate at Buyer-Seller Meet 2027 | Bharat Organic Expo",
    description: "The Buyer-Seller Meet at Bharat Organic Expo 2027 brings together serious buyers and quality suppliers from the organic, natural and sustainable industry ecosystem. Register as a buyer or exhibitor today.",
    alternates: {
        canonical: "/participate-as-exhibitor",
    },
};

const ParticipateAsExhibitorPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
            <ParticipateHero />
            <ParticipateFeatureStrip />
            <WhoCanParticipate />
            <ParticipateWhyParticipate />
            <ParticipateCta />
            <ParticipateStats />
        </div>
    );
};

export default ParticipateAsExhibitorPage;

import { Metadata } from "next";
import ConferenceHero from "@/app/components/conference/ConferenceHero";
import ConferenceFeatureStrip from "@/app/components/conference/ConferenceFeatureStrip";
import ConferenceBuyerTypes from "@/app/components/conference/ConferenceBuyerTypes";
import ConferenceWhyParticipate from "@/app/components/conference/ConferenceWhyParticipate";
import ConferenceCta from "@/app/components/conference/ConferenceCta";
import ConferenceStats from "@/app/components/conference/ConferenceStats";

export const metadata: Metadata = {
    title: "Who Can Participate at Buyer-Seller Meet 2027 | Bharat Organic Expo",
    description: "The Buyer-Seller Meet at Bharat Organic Expo 2027 brings together serious buyers and quality suppliers from the organic, natural and sustainable industry ecosystem. Register as a buyer or exhibitor today.",
    alternates: {
        canonical: "/conference",
    },
};

const ConferencePage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-hidden">
            <ConferenceHero />
            <ConferenceFeatureStrip />
            <ConferenceBuyerTypes />
            <ConferenceWhyParticipate />
            <ConferenceCta />
            <ConferenceStats />
        </div>
    );
};

export default ConferencePage;
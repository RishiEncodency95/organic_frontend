import React from "react";
import NominateHero from "../../components/abouts/nominate/NominateHero";
import NominateForm from "../../components/abouts/nominate/NominateForm";
import NominateSidebar from "../../components/abouts/nominate/NominateSidebar";
import SectionContainer from "@/app/components/layout/SectionContainer";

export const metadata = {
    title: "Nominate Advisory Board Member | Bharat Organic Expo 2027",
    description: "Nominate distinguished leaders and industry experts to the Advisory Board of Bharat Organic Expo 2027.",
};

export default function NominateAdvisoryBoardPage() {
    return (
        <main className="min-h-screen bg-[#f9fafb]">
            {/* Hero Section */}
            <NominateHero />

            {/* Main Content Section */}
            <section className="w-full py-3 md:py-6">
                <SectionContainer>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 items-start">
                        {/* Left Column: Form */}
                        <div className="lg:col-span-8 w-full">
                            <NominateForm />
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 w-full sticky top-24">
                            <NominateSidebar />
                        </div>
                    </div>
                </SectionContainer>
            </section>
        </main>
    );
}

import { Metadata } from "next";
import AwardsHero from "@/app/components/awards/AwardsHero";
import AwardsStats from "@/app/components/awards/AwardsStats";
import AwardsAbout from "@/app/components/awards/AwardsAbout";
import AwardsCategories from "@/app/components/awards/AwardsCategories";
import AwardsGrandAwards from "@/app/components/awards/AwardsGrandAwards";
import AwardsProcess from "@/app/components/awards/AwardsProcess";
import AwardsCelebratingLeaders from "@/app/components/awards/AwardsCelebratingLeaders";
import AwardsInfoColumns from "@/app/components/awards/AwardsInfoColumns";
import AwardsCta from "@/app/components/awards/AwardsCta";

export const metadata: Metadata = {
    title: "Excellence Awards 2027 | Bharat Organic Expo",
    description: "Bharat Organic Excellence Awards 2027 recognise outstanding organisations, brands, entrepreneurs, farmers and professionals for their remarkable contribution to the growth and promotion of the organic, natural and sustainable industry.",
    alternates: {
        canonical: "/awards",
    },
};

const AwardsPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-hidden">
            <AwardsHero />
            <AwardsStats />
            <AwardsAbout />
            <AwardsCategories />
            <AwardsGrandAwards />
            <AwardsProcess />
            <AwardsCelebratingLeaders />
            <AwardsInfoColumns />
            <AwardsCta />
        </div>
    );
};

export default AwardsPage;
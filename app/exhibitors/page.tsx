import { Metadata } from "next";
import ExhibitorsSection from "@/app/components/exhibitors/ExhibitorsSection";
import { ApiExhibitor, fallbackExhibitors } from "@/app/components/exhibitors/data";

export const metadata: Metadata = {
    title: "Exhibitors | Bharat Organic Expo",
    description: "Meet leading health, Ayurveda, fitness and wellness brands at Bharat Organic Expo. Browse our exhibitors across Ayurveda, Pharma, Fitness, Organic Nutrition, Medical Devices and more.",
    alternates: {
        canonical: "/exhibitors",
    },
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "https://api.ihwe.in";
const PAGE_SIZE = 80;

const getExhibitors = async (): Promise<ApiExhibitor[]> => {
    return fallbackExhibitors;
};

const ExhibitorsPage = async () => {
    const exhibitors = await getExhibitors();

    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
            <ExhibitorsSection exhibitors={exhibitors} />
        </div>
    );
};

export default ExhibitorsPage;
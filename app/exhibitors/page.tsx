import { Metadata } from "next";
import ExhibitorsSection from "@/app/components/exhibitors/ExhibitorsSection";
import { ApiExhibitor, fallbackExhibitors, BACKEND_URL } from "@/app/components/exhibitors/data";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
    title: "Exhibitors | Bharat Organic Expo",
    description: "Meet leading health, Ayurveda, fitness and wellness brands at Bharat Organic Expo. Browse our exhibitors across Ayurveda, Pharma, Fitness, Organic Nutrition, Medical Devices and more.",
    alternates: {
        canonical: "/exhibitors",
    },
};

const getExhibitors = async (): Promise<ApiExhibitor[]> => {
    try {
        const res = await fetch(`${BACKEND_URL}/api/website/participate/exhibitor-list/items`, {
            cache: "no-store",
        });
        if (!res.ok) throw new Error("Failed to fetch exhibitors");
        const json = await res.json();
        const data = json.data;
        if (Array.isArray(data) && data.length > 0) {
            return data
                .filter((item: any) => item.status !== "Draft")
                .map((item: any) => ({
                    _id: item._id,
                    title: item.title || item.name || "Exhibitor",
                    name: item.name || item.title || "Exhibitor",
                    location: item.location || "India",
                    category: item.category || "ORGANIC FOOD",
                    order: typeof item.order === "number" ? item.order : 999,
                    image: item.image || item.logo || "/exhibitors/1.jpg",
                    logo: item.logo || item.image || "/exhibitors/1.jpg",
                    altText: item.altText || `${item.name || item.title} Logo`,
                    status: item.status || "Published",
                    websiteUrl: item.websiteUrl || "",
                }))
                .sort((a: ApiExhibitor, b: ApiExhibitor) => a.order - b.order);
        }
    } catch (error) {
        console.error("Error fetching exhibitors from backend:", error);
    }
    return fallbackExhibitors;
};

const getExhibitorsHeader = async (): Promise<{ title: string; subtitle: string }> => {
    try {
        const res = await fetch(`${BACKEND_URL}/api/website/participate/exhibitor-list/header`, {
            cache: "no-store",
        });
        if (res.ok) {
            const json = await res.json();
            if (json.data) {
                return {
                    title: json.data.title || "Our Previous Exhibitors",
                    subtitle: json.data.subtitle || "A Platform Trusted by Industry Leaders",
                };
            }
        }
    } catch (error) {
        console.error("Error fetching exhibitors header:", error);
    }
    return {
        title: "Our Previous Exhibitors",
        subtitle: "A Platform Trusted by Industry Leaders",
    };
};

const ExhibitorsPage = async () => {
    const [exhibitors, header] = await Promise.all([
        getExhibitors(),
        getExhibitorsHeader(),
    ]);

    return (
        <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
            <ExhibitorsSection exhibitors={exhibitors} header={header} />
        </div>
    );
};

export default ExhibitorsPage;
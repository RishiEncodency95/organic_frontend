import { Metadata } from "next";
import ExhibitorsSection from "@/app/components/exhibitors/ExhibitorsSection";
import { ApiExhibitor } from "@/app/components/exhibitors/data";

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
    try {
        const first = await fetch(`${API_BASE}/api/exhibitor?page=1&limit=${PAGE_SIZE}`, { cache: "force-cache" });
        if (!first.ok) return [];
        const firstJson = await first.json();
        const totalPages = firstJson.pagination?.totalPages ?? 1;
        const restPages =
            totalPages > 1
                ? await Promise.all(
                      Array.from({ length: totalPages - 1 }, (_, i) =>
                          fetch(`${API_BASE}/api/exhibitor?page=${i + 2}&limit=${PAGE_SIZE}`, { cache: "force-cache" }).then((r) => r.json())
                      )
                  )
                : [];

        const all = [firstJson, ...restPages].flatMap((j) => j.data ?? []);
        const seen = new Set<string>();
        return (all as ApiExhibitor[])
            .filter((e) => (seen.has(e._id) ? false : (seen.add(e._id), true)))
            .sort((a, b) => a.order - b.order);
    } catch {
        return [];
    }
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
export const API_BASE = "https://api.ihwe.in";

export interface ApiExhibitor {
    _id: string;
    title: string;
    location: string;
    category: string;
    order: number;
    websiteUrl?: string;
    image: string;
    altText?: string;
}

export const toAbsoluteImage = (image: string): string =>
    image.startsWith("http") ? image : `${API_BASE}${image}`;

export const HERO_STATS = [
    { value: "150+", label: "Exhibiting Brands" },
    { value: "20,000+", label: "Trade Visitors" },
    { value: "50+", label: "Expert Speakers" },
    { value: "2 Days", label: "Of Networking & Business" },
];

export const BOTTOM_STATS = [
    { value: "150+", label: "Exhibitors" },
    { value: "20,000+", label: "Visitors" },
    { value: "2 Days", label: "Expo Duration" },
    { value: "PAN India", label: "Participation" },
    { value: "B2B + B2C", label: "Business Opportunity" },
];
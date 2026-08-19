import f1 from "@/app/assets/icons/f1.png";
import f2 from "@/app/assets/icons/f2.png";
import f3 from "@/app/assets/icons/f3.png";
import f4 from "@/app/assets/icons/f4.png";
import f5 from "@/app/assets/icons/f5.png";
import f6 from "@/app/assets/icons/f6.png";
import f7 from "@/app/assets/icons/f7.png";
import f8 from "@/app/assets/icons/f8.png";

import z1 from "@/app/assets/icons/z1og.png";
import z2 from "@/app/assets/icons/z2og.png";
import z3 from "@/app/assets/icons/z3og.png";
import z4 from "@/app/assets/icons/z4og.png";
import z5 from "@/app/assets/icons/z5og.png";
import z6 from "@/app/assets/icons/z6og.png";
import z7 from "@/app/assets/icons/z7og.png";
import z8 from "@/app/assets/icons/z8og.png";

import s1 from "@/app/assets/icons/s1og.png";
import s2 from "@/app/assets/icons/s2og.png";
import s3 from "@/app/assets/icons/s3og.png";
import s4 from "@/app/assets/icons/s4og.png";
import s5 from "@/app/assets/icons/s5og.png";

import h1 from "@/app/assets/icons/h1og.png";
import h2 from "@/app/assets/icons/h2og.png";
import h3 from "@/app/assets/icons/h3og.png";
import h4 from "@/app/assets/icons/h4og.png";
import h5 from "@/app/assets/icons/h5og.png";

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

export const toAbsoluteImage = (image: string): string => {
    if (!image) return "";
    if (typeof image === "object" && (image as any).src) return (image as any).src;
    return image.startsWith("http") || image.startsWith("/") || image.startsWith("data:") ? image : `${API_BASE}${image}`;
};

export const fallbackExhibitors: ApiExhibitor[] = [
    { _id: "f1", title: "Organic India Expo", location: "New Delhi", category: "Organic Food", order: 1, image: f1.src },
    { _id: "f2", title: "AyurHerb Wellness", location: "Mumbai", category: "Ayush & Herbal", order: 2, image: f2.src },
    { _id: "f3", title: "Nature Life Organics", location: "Bengaluru", category: "Organic Food", order: 3, image: f3.src },
    { _id: "f4", title: "Pure Botanicals", location: "Pune", category: "Natural Care", order: 4, image: f4.src },
    { _id: "f5", title: "BioAgri Solutions", location: "Ahmedabad", category: "Agriculture", order: 5, image: f5.src },
    { _id: "f6", title: "Green Living Organics", location: "Jaipur", category: "Natural Care", order: 6, image: f6.src },
    { _id: "f7", title: "Ayurveda Essence", location: "Kochi", category: "Ayush & Herbal", order: 7, image: f7.src },
    { _id: "f8", title: "EcoPack Innovations", location: "Hyderabad", category: "GreenTech", order: 8, image: f8.src },

    { _id: "z1", title: "Organic Harvest Co.", location: "Chandigarh", category: "Organic Food", order: 9, image: z1.src },
    { _id: "z2", title: "Vedic Roots Nutrition", location: "Haridwar", category: "Ayush & Herbal", order: 10, image: z2.src },
    { _id: "z3", title: "Earth Care Organics", location: "Indore", category: "Organic Food", order: 11, image: z3.src },
    { _id: "z4", title: "Herbal Remedies India", location: "Lucknow", category: "Ayush & Herbal", order: 12, image: z4.src },
    { _id: "z5", title: "Green Farm Tech", location: "Nagpur", category: "Agriculture", order: 13, image: z5.src },
    { _id: "z6", title: "Natural Glow Botanicals", location: "Surat", category: "Natural Care", order: 14, image: z6.src },
    { _id: "z7", title: "BioOrganica Spices", location: "Kolkata", category: "Organic Food", order: 15, image: z7.src },
    { _id: "z8", title: "Eco-Friendly Life", location: "Bhopal", category: "GreenTech", order: 16, image: z8.src },

    { _id: "s1", title: "Pure Ayurveda Labs", location: "Dehradun", category: "Ayush & Herbal", order: 17, image: s1.src },
    { _id: "s2", title: "AgriTech Organics", location: "Ludhiana", category: "Agriculture", order: 18, image: s2.src },
    { _id: "s3", title: "Sustaina Pack", location: "Coimbatore", category: "GreenTech", order: 19, image: s3.src },
    { _id: "s4", title: "Clean Living India", location: "Gurugram", category: "Natural Care", order: 20, image: s4.src },
    { _id: "s5", title: "Fresh Fields Organic", location: "Noida", category: "Organic Food", order: 21, image: s5.src },

    { _id: "h1", title: "Divine Herbal Wellness", location: "Varanasi", category: "Ayush & Herbal", order: 22, image: h1.src },
    { _id: "h2", title: "Organic Green World", location: "Mysuru", category: "Organic Food", order: 23, image: h2.src },
    { _id: "h3", title: "BioFarm Innovations", location: "Vadodara", category: "Agriculture", order: 30, image: h3.src },
    { _id: "h4", title: "Pure Care Personal", location: "Thane", category: "Natural Care", order: 31, image: h4.src },
    { _id: "h5", title: "Eco Energy Solutions", location: "Rajkot", category: "GreenTech", order: 32, image: h5.src },
];

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
import l1 from "@/app/assets/list/1.jpg";
import l2 from "@/app/assets/list/2.jpg";
import l3 from "@/app/assets/list/3.jpg";
import l4 from "@/app/assets/list/4.jpg";
import l5 from "@/app/assets/list/5.jpg";
import l6 from "@/app/assets/list/6.jpg";
import l7 from "@/app/assets/list/7.jpg";
import l8 from "@/app/assets/list/8.jpg";
import l9 from "@/app/assets/list/9.jpg";
import l10 from "@/app/assets/list/10.jpg";
import l11 from "@/app/assets/list/11.jpg";
import l12 from "@/app/assets/list/12.jpg";
import l13 from "@/app/assets/list/13.jpg";
import l14 from "@/app/assets/list/14.jpg";
import l15 from "@/app/assets/list/15.jpg";
import l16 from "@/app/assets/list/16.jpg";
import l17 from "@/app/assets/list/17.jpg";
import l18 from "@/app/assets/list/18.jpg";
import l19 from "@/app/assets/list/19.jpg";
import l20 from "@/app/assets/list/20.jpg";
import l21 from "@/app/assets/list/21.jpg";
import l22 from "@/app/assets/list/22.jpg";
import l23 from "@/app/assets/list/23.jpg";
import l24 from "@/app/assets/list/24.jpg";
import l25 from "@/app/assets/list/25.jpg";
import l26 from "@/app/assets/list/26.jpg";
import l27 from "@/app/assets/list/27.jpg";
import l28 from "@/app/assets/list/28.jpg";
import l29 from "@/app/assets/list/29.jpg";
import l30 from "@/app/assets/list/30.jpg";
import l31 from "@/app/assets/list/31.jpg";
import l32 from "@/app/assets/list/32.jpg";
import l33 from "@/app/assets/list/33.jpg";
import l34 from "@/app/assets/list/34.jpg";
import l35 from "@/app/assets/list/35.jpg";
import l36 from "@/app/assets/list/36.jpg";
import l37 from "@/app/assets/list/37.jpg";
import l38 from "@/app/assets/list/38.jpg";
import l39 from "@/app/assets/list/39.jpg";
import l40 from "@/app/assets/list/40.jpg";
import l41 from "@/app/assets/list/41.jpg";
import l42 from "@/app/assets/list/42.jpg";
import l43 from "@/app/assets/list/43.jpg";
import l44 from "@/app/assets/list/44.jpg";
import l45 from "@/app/assets/list/45.jpg";
import l46 from "@/app/assets/list/46.jpg";
import l47 from "@/app/assets/list/47.jpg";
import l48 from "@/app/assets/list/48.jpg";

export const API_BASE = "https://api.ihwe.in";

export interface ApiExhibitor {
    _id: string;
    title: string;
    location: string;
    category: string;
    order: number;
    websiteUrl?: string;
    image: any;
    altText?: string;
}

export const toAbsoluteImage = (image: any): string => {
    if (!image) return "";
    if (typeof image === "object" && image.src) return image.src;
    if (typeof image !== "string") return "";
    return image.startsWith("http") || image.startsWith("/") || image.startsWith("data:") ? image : `${API_BASE}${image}`;
};

export const fallbackExhibitors: ApiExhibitor[] = [
    { _id: "ex1", title: "THE WORLD OF MARĪCT", location: "India", category: "ORGANIC FOOD", order: 1, image: l1 },
    { _id: "ex2", title: "SNOWFLAKZ", location: "India", category: "ORGANIC FOOD", order: 2, image: l2 },
    { _id: "ex3", title: "The Pahari Life", location: "Himachal Pradesh", category: "ORGANIC FOOD", order: 3, image: l3 },
    { _id: "ex4", title: "Heritiage Oils", location: "India", category: "ORGANIC FOOD", order: 4, image: l4 },
    { _id: "ex5", title: "Tripti Natural Himachal", location: "Himachal Pradesh", category: "NATURAL CARE", order: 5, image: l5 },
    { _id: "ex6", title: "FARMIYA ORGANICS", location: "India", category: "AGRICULTURE", order: 6, image: l6 },
    { _id: "ex7", title: "Saatwik Aaruyeda", location: "India", category: "AYURVEDA", order: 7, image: l7 },
    { _id: "ex8", title: "The Himavan Essence", location: "India", category: "AYURVEDA", order: 8, image: l8 },
    { _id: "ex9", title: "Prabhushree", location: "India", category: "ORGANIC FOOD", order: 9, image: l9 },
    { _id: "ex10", title: "SPICES & HERBS", location: "India", category: "ORGANIC FOOD", order: 10, image: l10 },
    { _id: "ex11", title: "Etbar", location: "India", category: "NATURAL CARE", order: 11, image: l11 },
    { _id: "ex12", title: "Safe Agri", location: "India", category: "AGRICULTURE", order: 12, image: l12 },
    { _id: "ex13", title: "SHREE HARI", location: "India", category: "AYURVEDA", order: 13, image: l13 },
    { _id: "ex14", title: "Ropuiliani", location: "India", category: "ORGANIC FOOD", order: 14, image: l14 },
    { _id: "ex15", title: "VEER FITNESS", location: "India", category: "HEALTH & WELLNESS", order: 15, image: l15 },
    { _id: "ex16", title: "Pratham Pahal", location: "India", category: "AGRICULTURE", order: 16, image: l16 },
    { _id: "ex17", title: "V S Natural", location: "India", category: "NATURAL CARE", order: 17, image: l17 },
    { _id: "ex18", title: "Viraj Agro Foods", location: "India", category: "ORGANIC FOOD", order: 18, image: l18 },
    { _id: "ex19", title: "CFEI", location: "India", category: "AGRICULTURE", order: 19, image: l19 },
    { _id: "ex20", title: "PELLE NUDA", location: "India", category: "NATURAL CARE", order: 20, image: l20 },
    { _id: "ex21", title: "Dadu Fresh", location: "India", category: "ORGANIC FOOD", order: 21, image: l21 },
    { _id: "ex22", title: "Bhukranti", location: "India", category: "AGRICULTURE", order: 22, image: l22 },
    { _id: "ex23", title: "Nutrelis", location: "India", category: "HEALTH & WELLNESS", order: 23, image: l23 },
    { _id: "ex24", title: "Herbal Eco", location: "India", category: "AYURVEDA", order: 24, image: l24 },
    { _id: "ex25", title: "Khasiyat", location: "India", category: "ORGANIC FOOD", order: 25, image: l25 },
    { _id: "ex26", title: "Shree Ratnam", location: "India", category: "AYURVEDA", order: 26, image: l26 },
    { _id: "ex27", title: "Star Holo India", location: "India", category: "OTHERS", order: 27, image: l27 },
    { _id: "ex28", title: "Baiso Organics", location: "India", category: "ORGANIC FOOD", order: 28, image: l28 },
    { _id: "ex29", title: "Kaki maa", location: "India", category: "ORGANIC FOOD", order: 29, image: l29 },
    { _id: "ex30", title: "Moorahav Organic", location: "India", category: "AGRICULTURE", order: 30, image: l30 },
    { _id: "ex31", title: "Mohan Ghee", location: "India", category: "ORGANIC FOOD", order: 31, image: l31 },
    { _id: "ex32", title: "Shabari Naturals", location: "India", category: "NATURAL CARE", order: 32, image: l32 },
    { _id: "ex33", title: "Raheja Solar Food Processing pvt. ltd", location: "India", category: "AGRICULTURE", order: 33, image: l33 },
    { _id: "ex34", title: "Shanara", location: "India", category: "NATURAL CARE", order: 34, image: l34 },
    { _id: "ex35", title: "Good And Grow", location: "India", category: "AGRICULTURE", order: 35, image: l35 },
    { _id: "ex36", title: "E-Bio-Cares", location: "India", category: "AYURVEDA", order: 36, image: l36 },
    { _id: "ex37", title: "Panchtattav foods Pvt Ltd", location: "India", category: "ORGANIC FOOD", order: 37, image: l37 },
    { _id: "ex38", title: "Sharekhan", location: "India", category: "OTHERS", order: 38, image: l38 },
    { _id: "ex39", title: "Bhartiye Crafts", location: "India", category: "OTHERS", order: 39, image: l39 },
    { _id: "ex40", title: "Vinayak Group", location: "India", category: "AGRICULTURE", order: 40, image: l40 },
    { _id: "ex41", title: "Sri Yamuna Essence", location: "India", category: "AYURVEDA", order: 41, image: l41 },
    { _id: "ex42", title: "Kajah Balm & Oil", location: "India", category: "AYURVEDA", order: 42, image: l42 },
    { _id: "ex43", title: "Soultatva", location: "India", category: "ORGANIC FOOD", order: 43, image: l43 },
    { _id: "ex44", title: "Shroonius", location: "India", category: "ORGANIC FOOD", order: 44, image: l44 },
    { _id: "ex45", title: "Skyrr Up", location: "India", category: "HEALTH & WELLNESS", order: 45, image: l45 },
    { _id: "ex46", title: "Achyutam Aahar", location: "India", category: "ORGANIC FOOD", order: 46, image: l46 },
    { _id: "ex47", title: "Grunwald", location: "India", category: "OTHERS", order: 47, image: l47 },
    { _id: "ex48", title: "Viridian", location: "India", category: "AYURVEDA", order: 48, image: l48 },
];

export const HERO_STATS = [
    { value: "200+", label: "Exhibiting Brands" },
    { value: "8,000+", label: "Trade Visitors" },
    { value: "50+", label: "Expert Speakers" },
    { value: "2 Days", label: "Of Networking & Business" },
];

export const BOTTOM_STATS = [
    { value: "200+", label: "Exhibitors" },
    { value: "8,000+", label: "Visitors" },
    { value: "3 Days", label: "Of Knowledge" },
    { value: "PAN India", label: "Participation" },
    { value: "B2B + B2C", label: "Business Opportunity" },
];
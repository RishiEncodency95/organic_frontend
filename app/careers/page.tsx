import type { Metadata } from "next";
import CareersClientContent from "./CareersClientContent";

export const metadata: Metadata = {
  title: "Careers | Join Bharat Organic Expo Team",
  description:
    "Explore career opportunities at Bharat Organic Expo and join our dynamic team driving the organic and wellness movement.",
  alternates: { canonical: "/careers" },
};

export default function CareerPage() {
  return <CareersClientContent />;
}
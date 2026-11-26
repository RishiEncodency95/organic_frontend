import type { Metadata } from "next";
import { adminSeoMetadata } from "@/lib/adminSeo";

// The page itself is a client component, so its title and description live here.
export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata("feedback", {
    title: "Share Your Feedback | Bharat Organic Expo 2027",
    description: "Tell us about your experience at Bharat Organic Expo. Your feedback helps us build a better event for exhibitors, buyers and visitors.",
    canonicalPath: "/feedback",
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

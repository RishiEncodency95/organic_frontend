import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: { absolute: "Share Your Feedback | Bharat Organic Expo 2027" },
  description: "Tell us about your experience at Bharat Organic Expo. Your feedback helps us build a better event for exhibitors, buyers and visitors.",
  alternates: { canonical: "/feedback" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

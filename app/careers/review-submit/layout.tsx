import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: { absolute: "Review & Submit Application | Careers | Bharat Organic Expo 2027" },
  description: "Review your job application before submitting it to the Bharat Organic Expo team.",
  alternates: { canonical: "/careers/review-submit" },
  // A step of a flow, not a page to land on from search.
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

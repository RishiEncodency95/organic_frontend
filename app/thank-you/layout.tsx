import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: { absolute: "Thank You for Your Feedback | Bharat Organic Expo 2027" },
  description: "Thank you for sharing your experience with Bharat Organic Expo.",
  alternates: { canonical: "/thank-you" },
  // A step of a flow, not a page to land on from search.
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

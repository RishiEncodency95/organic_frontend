import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: { absolute: "Job Application Form | Careers | Bharat Organic Expo 2027" },
  description: "Fill in your details to apply for an open position with the Bharat Organic Expo team.",
  alternates: { canonical: "/careers/application-form" },
  // A step of a flow, not a page to land on from search.
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

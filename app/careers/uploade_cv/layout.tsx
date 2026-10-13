import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: { absolute: "Upload Your CV | Careers | Bharat Organic Expo 2027" },
  description: "Upload your CV to apply for current openings with the Bharat Organic Expo team.",
  alternates: { canonical: "/careers/upload-cv" },
  // A step of a flow, not a page to land on from search.
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

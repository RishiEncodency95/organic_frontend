import type { Metadata } from "next";

// The page itself is a client component, so its title and description live here.
export const metadata: Metadata = {
  title: { absolute: "Submit Your Resume | Careers | Bharat Organic Expo 2027" },
  description: "Upload your resume and see how your profile matches open roles at Bharat Organic Expo.",
  alternates: { canonical: "/careers/submit-resume" },
  // A step of a flow, not a page to land on from search.
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

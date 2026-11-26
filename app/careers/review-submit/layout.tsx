import type { Metadata } from "next";
import { adminSeoMetadata } from "@/lib/adminSeo";

// The page itself is a client component, so its title and description live here.
export async function generateMetadata(): Promise<Metadata> {
  const meta = await adminSeoMetadata("careers/review-submit", {
    title: "Review & Submit Application | Careers | Bharat Organic Expo 2027",
    description: "Review your job application before submitting it to the Bharat Organic Expo team.",
    canonicalPath: "/careers/review-submit",
  });
  return { ...meta, robots: { index: false, follow: true } };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

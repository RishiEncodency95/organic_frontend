import type { Metadata } from "next";
import { adminSeoMetadata } from "@/lib/adminSeo";

// The page itself is a client component, so its title and description live here.
export async function generateMetadata(): Promise<Metadata> {
  const meta = await adminSeoMetadata("careers/application-form", {
    title: "Job Application Form | Careers | Bharat Organic Expo 2027",
    description: "Fill in your details to apply for an open position with the Bharat Organic Expo team.",
    canonicalPath: "/careers/application-form",
  });
  return { ...meta, robots: { index: false, follow: true } };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

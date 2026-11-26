import type { Metadata } from "next";
import { adminSeoMetadata } from "@/lib/adminSeo";

// The page itself is a client component, so its title and description live here.
export async function generateMetadata(): Promise<Metadata> {
  const meta = await adminSeoMetadata("careers/submit-resume", {
    title: "Submit Your Resume | Careers | Bharat Organic Expo 2027",
    description: "Upload your resume and see how your profile matches open roles at Bharat Organic Expo.",
    canonicalPath: "/careers/submit-resume",
  });
  return { ...meta, robots: { index: false, follow: true } };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

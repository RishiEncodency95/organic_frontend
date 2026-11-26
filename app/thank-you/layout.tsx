import type { Metadata } from "next";
import { adminSeoMetadata } from "@/lib/adminSeo";

// The page itself is a client component, so its title and description live here.
export async function generateMetadata(): Promise<Metadata> {
  const meta = await adminSeoMetadata("thank-you", {
    title: "Thank You for Your Feedback | Bharat Organic Expo 2027",
    description: "Thank you for sharing your experience with Bharat Organic Expo.",
    canonicalPath: "/thank-you",
  });
  return { ...meta, robots: { index: false, follow: true } };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

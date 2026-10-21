import type { Metadata } from "next";
import { ApplyStep } from "../../CareerSteps";

export const metadata: Metadata = {
  title: { absolute: "Apply | Careers | Bharat Organic Expo 2027" },
  description: "Upload your CV and check your eligibility for this role with the Bharat Organic Expo team.",
  // A step of the application, not a page to land on from search.
  robots: { index: false, follow: true },
};

export default async function ApplyPage({ params }: { params: Promise<{ job: string }> }) {
  const { job } = await params;
  return <ApplyStep jobKey={decodeURIComponent(job)} />;
}

import type { Metadata } from "next";
import { adminSeoMetadata } from "@/lib/adminSeo";
import { SubmittedStep } from "../CareerSteps";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await adminSeoMetadata("careers/application-submitted", {
    title: "Application Submitted | Careers | Bharat Organic Expo 2027",
    description: "Your application to the Bharat Organic Expo team has been submitted.",
  });
  return { ...meta, robots: { index: false, follow: true } };
}

export default function ApplicationSubmittedPage() {
  return <SubmittedStep />;
}

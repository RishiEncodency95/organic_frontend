import type { Metadata } from "next";
import { SubmittedStep } from "../CareerSteps";

export const metadata: Metadata = {
  title: { absolute: "Application Submitted | Careers | Bharat Organic Expo 2027" },
  description: "Your application to the Bharat Organic Expo team has been submitted.",
  robots: { index: false, follow: true },
};

export default function ApplicationSubmittedPage() {
  return <SubmittedStep />;
}

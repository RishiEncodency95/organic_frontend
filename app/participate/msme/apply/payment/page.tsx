import ApplicationHero from "../../../../components/participate/msme/apply/ApplicationHero";
import ApplySteps from "../../../../components/participate/msme/apply/ApplySteps";
import PaymentMain from "../../../../components/participate/msme/apply/payment/PaymentMain";
import PaymentSidebar from "../../../../components/participate/msme/apply/payment/PaymentSidebar";
import ApplyFooter from "../../../../components/participate/msme/apply/ApplyFooter";
import { settingsApi } from "@/lib/api";
import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";

import { getSectionGate } from "@/lib/sectionVisibility";
export const revalidate = 60;

const SEO_PAGE_KEY = "participate/msme/apply/payment";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Payment Details | Apply for PMS Support | Bharat Organic Expo",
    description: "Review and complete payment for your PMS Support application.",
  });
}

export default async function PaymentDetailsPage() {
  const seoData = await getAdminSeo(SEO_PAGE_KEY);
  const settings = await settingsApi.getSettings().catch(() => ({} as any));
  const pageConfig = settings?.msmeApplyPaymentPage || {};
  const sections = pageConfig.sections || [];
  const heroSec = sections.find((s: any) => s.key === "msme-payment-hero");
  const mainSec = sections.find((s: any) => s.key === "msme-payment-main-config");
  const sidebarSec = sections.find((s: any) => s.key === "msme-payment-sidebar");
  const footerSec = sections.find((s: any) => s.key === "msme-payment-footer-help");

  const show = await getSectionGate("msmeApplyPaymentPage");

  return (
    <div className="min-h-screen bg-[#f9faf9] font-sans text-neutral-800 flex flex-col">
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <main className="flex-1 w-full pb-10">
        {show("msme-payment-hero") && <ApplicationHero section={heroSec} />}
        <div className="w-full px-4 md:px-14 mt-[-30px] relative z-20">
          {/* We pass currentStep={3} to highlight the Payment step */}
          {show("msme-payment-stepper") && <ApplySteps currentStep={3} />}
        </div>

        <div className="w-full px-4 md:px-14 mt-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            
            {/* Left Column - Main Content */}
            <div className="w-full lg:w-[65%] flex flex-col gap-4">
              <PaymentMain section={mainSec} />
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="w-full lg:w-[35%] shrink-0 sticky top-4">
              {show("msme-payment-sidebar") && <PaymentSidebar section={sidebarSec} />}
            </div>

          </div>
        </div>

        {/* Footer (Only Help Banner for this step) */}
        {show("msme-payment-footer-help") && <ApplyFooter showDeclaration={false} section={footerSec} />}
      </main>
    </div>
  );
}

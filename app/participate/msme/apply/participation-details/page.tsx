import ApplicationHero from "../../../../components/participate/msme/apply/ApplicationHero";
import ApplySteps from "../../../../components/participate/msme/apply/ApplySteps";
import ParticipationForm from "../../../../components/participate/msme/apply/ParticipationForm";
import ParticipationSidebar from "../../../../components/participate/msme/apply/ParticipationSidebar";
import ApplyFooter from "../../../../components/participate/msme/apply/ApplyFooter";
import { settingsApi } from "@/lib/api";
import type { Metadata } from "next";
import AdminSchema from "@/components/seo/AdminSchema";
import { adminSeoMetadata, getAdminSeo } from "@/lib/adminSeo";

import { getSectionGate } from "@/lib/sectionVisibility";
export const revalidate = 60;

const SEO_PAGE_KEY = "participate/msme/apply/participation-details";

export async function generateMetadata(): Promise<Metadata> {
  return adminSeoMetadata(SEO_PAGE_KEY, {
    title: "Apply for PMS Support | Participation Details | Bharat Organic Expo",
    description: "Provide your participation details for PMS Support at the Bharat Organic Expo 2027.",
  });
}

export default async function ParticipationDetailsPage() {
  const seoData = await getAdminSeo(SEO_PAGE_KEY);
  const settings = await settingsApi.getSettings().catch(() => ({} as any));
  const pageConfig = settings?.msmeApplyParticipationDetailsPage || {};
  const sections = pageConfig.sections || [];
  const heroSec = sections.find((s: any) => s.key === "msme-participation-hero");
  const sidebarSec = sections.find((s: any) => s.key === "msme-participation-sidebar");
  const footerSec = sections.find((s: any) => s.key === "msme-participation-footer-help");

  const show = await getSectionGate("msmeApplyParticipationDetailsPage");

  return (
    <div className="min-h-screen bg-[#f9faf9] font-sans text-neutral-800 flex flex-col">
      <AdminSchema schema={seoData?.schemaMarkup || null} />
      <main className="flex-1 w-full pb-10">
        {show("msme-participation-hero") && <ApplicationHero section={heroSec} />}
        <div className="w-full px-4 md:px-14 mt-[-30px] relative z-20">
          {show("msme-participation-stepper") && <ApplySteps currentStep={2} />}
        </div>

        <div className="w-full px-4 md:px-14 mt-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            
            {/* Left Column - Main Form */}
            <div className="w-full lg:w-[70%] flex flex-col gap-4">
              <ParticipationForm />
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="w-full lg:w-[30%] shrink-0 sticky top-4">
              {show("msme-participation-sidebar") && <ParticipationSidebar section={sidebarSec} />}
            </div>

          </div>
        </div>

        {/* Footer (Only Help Banner for this step, as actions are inside the form) */}
        {show("msme-participation-footer-help") && <ApplyFooter showDeclaration={false} section={footerSec} />}
      </main>
    </div>
  );
}

import ApplicationHero from "../../../../components/participate/msme/apply/ApplicationHero";
import ApplySteps from "../../../../components/participate/msme/apply/ApplySteps";
import ParticipationForm from "../../../../components/participate/msme/apply/ParticipationForm";
import ParticipationSidebar from "../../../../components/participate/msme/apply/ParticipationSidebar";
import ApplyFooter from "../../../../components/participate/msme/apply/ApplyFooter";
import { settingsApi } from "@/lib/api";

export const metadata = {
  title: "Apply for PMS Support | Participation Details | Bharat Organic Expo",
  description: "Provide your participation details for PMS Support at the Bharat Organic Expo 2027.",
};

export default async function ParticipationDetailsPage() {
  const settings = await settingsApi.getSettings().catch(() => ({} as any));
  const pageConfig = settings?.msmeApplyParticipationDetailsPage || {};
  const sections = pageConfig.sections || [];
  const heroSec = sections.find((s: any) => s.key === "msme-participation-hero");
  const sidebarSec = sections.find((s: any) => s.key === "msme-participation-sidebar");
  const footerSec = sections.find((s: any) => s.key === "msme-participation-footer-help");

  return (
    <div className="min-h-screen bg-[#f9faf9] font-sans text-neutral-800 flex flex-col">
      <main className="flex-1 w-full pb-10">
        <ApplicationHero section={heroSec} />
        
        <div className="w-full px-4 md:px-14 mt-[-30px] relative z-20">
          <ApplySteps currentStep={2} />
        </div>

        <div className="w-full px-4 md:px-14 mt-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            
            {/* Left Column - Main Form */}
            <div className="w-full lg:w-[70%] flex flex-col gap-4">
              <ParticipationForm />
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="w-full lg:w-[30%] shrink-0 sticky top-4">
              <ParticipationSidebar section={sidebarSec} />
            </div>

          </div>
        </div>

        {/* Footer (Only Help Banner for this step, as actions are inside the form) */}
        <ApplyFooter showDeclaration={false} showActions={false} section={footerSec} />
      </main>
    </div>
  );
}

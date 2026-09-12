import ApplyHero from "../../../components/participate/msme/apply/ApplyHero";
import ApplySteps from "../../../components/participate/msme/apply/ApplySteps";
import EnterpriseForm from "../../../components/participate/msme/apply/EnterpriseForm";
import ApplySidebar from "../../../components/participate/msme/apply/ApplySidebar";
import ApplyFooter from "../../../components/participate/msme/apply/ApplyFooter";
import { settingsApi } from "@/lib/api";

export const metadata = {
  title: "Apply for PMS Support | Bharat Organic Expo",
  description: "Apply for PMS Support for the Bharat Organic Expo 2027.",
};

export default async function PMSApplyPage() {
  const settings = await settingsApi.getSettings().catch(() => ({} as any));
  const pageConfig = settings?.msmeApplyPage || {};
  const sections = pageConfig.sections || [];
  const stepperSec = sections.find((s: any) => s.key === "msme-apply-stepper") || {};
  const stepLabels = [stepperSec.step1Title, stepperSec.step2Title, stepperSec.step3Title].filter(Boolean);

  return (
    <div className="min-h-screen bg-[#f9faf9] font-sans text-neutral-800 flex flex-col">
      <main className="flex-1 w-full pb-4">
        <ApplyHero />

        <div className="w-full px-4 md:px-14 mt-[-30px] relative z-20">
          <ApplySteps customLabels={stepLabels.length > 0 ? stepLabels : undefined} />
        </div>

        <div className="w-full px-4 md:px-14 mt-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">

            {/* Left Column - Main Form */}
            <div className="w-[70%] flex flex-col gap-4">
              <EnterpriseForm />

            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="w-[30%] shrink-0 sticky top-4">
              <ApplySidebar />
            </div>

          </div>
        </div>
        <ApplyFooter />
      </main>
    </div>
  );
}

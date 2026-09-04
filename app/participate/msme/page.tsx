import { Metadata } from "next";
import MsmePmsBanner from "@/app/components/participate/msme/MsmePmsBanner";
import FeatureStrip from "@/app/components/participate/msme/FeatureStrip";
import OfficialRecognitionBanner from "@/app/components/participate/msme/OfficialRecognitionBanner";
import MsmePmsScheme from "@/app/components/participate/msme/MsmePmsScheme";
import Pmsfinancialassistancebanner from "@/app/components/participate/msme/Pmsfinancialassistancebanner";
import PmsSupportCoverSection from "@/app/components/participate/msme/PmsSupportCoverSection";
import Pmssupportsection from "@/app/components/participate/msme/Pmssupportsection";
import Whatsnextbanner from "@/app/components/participate/msme/Whatsnextbanner";
import NeedHelpSection from "@/app/components/participate/msme/NeedHelpSection";
import Reasontovisitbanner from "@/app/components/participate/msme/Reasontovisitbanner";
import OfficialMessageBanner from "@/app/components/participate/msme/Msmedirectormessage";
import Pmsdocumentsbanner from "@/app/components/participate/msme/Pmsdocumentsbanner";
import Whyparticipatesection from "@/app/components/participate/msme/Whyparticipatesection";
import Faqbanner from "@/app/components/participate/msme/FaqBanner";
import PmsFinalCtaSection from "@/app/components/participate/msme/PmsFinalCtaSection";

export const metadata: Metadata = {
  title: "MSME PMS Scheme & Exhibition Support | Bharat Organic Expo 2027",
  description:
    "Explore MSME Procurement & Marketing Support (PMS) Scheme for Bharat Organic Expo 2027. Check eligibility, financial assistance, documents required and apply for government-backed exhibition support.",
  alternates: {
    canonical: "/participate/msme",
  },
};

const MsmePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 overflow-x-clip">
      <MsmePmsBanner />
      <FeatureStrip />
      <OfficialRecognitionBanner />
      <MsmePmsScheme />
      <Pmsfinancialassistancebanner />
      <PmsSupportCoverSection />
      <Pmssupportsection />
      <Whatsnextbanner />
      <NeedHelpSection />
      {/* <Reasontovisitbanner /> */}
      <OfficialMessageBanner />
      <Pmsdocumentsbanner />
      <Whyparticipatesection />
      <Faqbanner />
      <PmsFinalCtaSection />
    </div>
  );
};

export default MsmePage;

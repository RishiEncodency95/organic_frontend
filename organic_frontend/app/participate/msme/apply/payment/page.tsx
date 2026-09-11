import ApplicationHero from "../../../../components/participate/msme/apply/ApplicationHero";
import ApplySteps from "../../../../components/participate/msme/apply/ApplySteps";
import PaymentMain from "../../../../components/participate/msme/apply/payment/PaymentMain";
import PaymentSidebar from "../../../../components/participate/msme/apply/payment/PaymentSidebar";
import ApplyFooter from "../../../../components/participate/msme/apply/ApplyFooter";

export const metadata = {
  title: "Payment Details | Apply for PMS Support | Bharat Organic Expo",
  description: "Review and complete payment for your PMS Support application.",
};

export default function PaymentDetailsPage() {
  return (
    <div className="min-h-screen bg-[#f9faf9] font-sans text-neutral-800 flex flex-col">
      <main className="flex-1 w-full pb-10">
        <ApplicationHero />
        
        <div className="w-full px-4 md:px-14 mt-[-30px] relative z-20">
          {/* We pass currentStep={3} to highlight the Payment step */}
          <ApplySteps currentStep={3} />
        </div>

        <div className="w-full px-4 md:px-14 mt-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            
            {/* Left Column - Main Content */}
            <div className="w-full lg:w-[65%] flex flex-col gap-4">
              <PaymentMain />
            </div>

            {/* Right Column - Sidebar Widgets */}
            <div className="w-full lg:w-[35%] shrink-0 sticky top-4">
              <PaymentSidebar />
            </div>

          </div>
        </div>

        {/* Footer (Only Help Banner for this step) */}
        <ApplyFooter showDeclaration={false} showActions={false} />
      </main>
    </div>
  );
}

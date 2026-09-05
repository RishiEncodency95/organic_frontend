import {
  Mail,
  Phone,
  MessageCircle,
  Globe,
  Headset,
  FileText,
  CheckCircle,
  Users,
  ShieldCheck,
  Handshake,
  Clock,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import SectionContainer from "@/app/components/layout/SectionContainer";
import supportRightImg from "@/app/assets/participate/msme/support_right.png";
import whyReachOutImg from "@/app/assets/participate/msme/why_reach_out.png";

const whyReachOut = [
  "Clarify PMS scheme guidelines & eligibility",
  "Get help with document preparation",
  "Understand the application & reimbursement process",
  "Track your application status",
  "Resolve any issues or queries quickly",
];

const connectMethods = [
  {
    icon: Mail,
    title: "EMAIL US",
    detail: "info@namogangewellness.com",
    sub: "We typically reply\n within 24 hours.",
  },
  {
    icon: Phone,
    title: "CALL US",
    detail: "+91 96549 00525",
    sub: "Mon – Sat\n10:00 AM – 6:00 PM",
  },
  {
    icon: MessageCircle,
    title: "WHATSAPP",
    detail: "+91 96549 00525",
    sub: "Quick responses\n during working hours.",
  },
  {
    icon: Globe,
    title: "VISIT WEBSITE",
    detail: "www.bharatorganicexpo.in",
    sub: "Explore PMS details,\n guidelines & more.",
  },
];

const features = [
  { icon: ShieldCheck, label: "TRUSTED\nSUPPORT" },
  { icon: Handshake, label: "EXPERT\nGUIDANCE" },
  { icon: Clock, label: "TIMELY\nASSISTANCE" },
  { icon: TrendingUp, label: "BETTER\nOUTCOMES" },
];

export default function NeedHelpSection() {
  return (
    <section className="pt-6 pb-0">
      <SectionContainer>
        {/* Top row */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_1.4fr]">
          {/* Left: Heading + commitment */}
          <div>
            <h2 className="text-[28px] font-semibold uppercase leading-tight text-[#0d4a1a] sm:text-[54px]">
              Need Help?
            </h2>
            <h3 className="text-[22px] font-semibold uppercase leading-tight sm:text-[28px]">
              We&apos;re Here to Support You
            </h3>
            <span className="mt-1 block h-[3px] w-16 rounded-full bg-[#1b5e20]" />

            <p className="mt-3 max-w-md text-[14px] leading-relaxed">
              Our dedicated team is ready to assist you at every step of your
              PMS application journey.
            </p>

            {/* Our commitment */}
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-blue-50 p-4 shadow-sm ring-1 ring-black/5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
                <Headset className="h-10 w-10 text-white" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[14px] font-semibold">
                  OUR COMMITMENT
                </p>
                <p className="mt-0.5 text-[13px] leading-snug">
                  Transparent guidance. Timely support.
                  <br />
                  Stronger together for a sustainable future.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Ways to connect */}
          <div className="relative rounded-2xl border border-gray-200 bg-white pt-10 pb-5 px-5 shadow-sm">
            <div className="absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
              <span className="whitespace-nowrap rounded-lg bg-[#1b5e20] px-5 py-1.5 text-[13px] font-semibold uppercase tracking-wide text-white shadow-md">
                Ways to Connect with Us
              </span>
            </div>

            <div className="grid grid-cols-2 gap-0 sm:grid-cols-4">
              {connectMethods.map((m, i) => {
                const isLast = i === connectMethods.length - 1;
                return (
                  <div
                    key={m.title}
                    className={`flex flex-col items-center px-3 py-2 text-center ${!isLast ? "border-r border-[#1b5e20]" : ""}`}
                  >
                    <span className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFF7EE]">
                      <m.icon className="h-6 w-6 text-[#1b5e20]" aria-hidden="true" />
                    </span>
                    <p className="text-[12px] font-semibold uppercase text-[#1b5e20]">
                      {m.title}
                    </p>
                    <p className="mt-0.5 text-[12px] font-semibold break-all">
                      {m.detail}
                    </p>
                    <div className="mt-auto flex flex-col items-center">
                      <span className="my-2 h-[2px] w-6 bg-[#1b5e20]/50" />
                      <p className="text-[12px] leading-snug whitespace-pre-line">
                        {m.sub}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Middle row */}
        <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Why reach out */}
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex-1 border-r border-gray-200 pr-4">
              <div className="flex items-center gap-2">
                <h4 className="text-[16px] font-semibold text-[#1b5e20]">
                  WHY REACH OUT TO US?
                </h4>
                <span className="text-[#1b5e20]">«</span>
              </div>

              <ul className="mt-3 space-y-2">
                {whyReachOut.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#1b5e20]" />
                    <span className="text-[13px] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={whyReachOutImg.src}
              alt=""
              className="hidden h-[160px] w-auto shrink-0 object-contain sm:block"
              loading="lazy"
            />
          </div>

          {/* Dedicated relationship managers */}
          <div className="rounded-2xl border border-gray-200 bg-blue-50 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
                <Users className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[15px] font-semibold text-[#1b5e20]">
                  DEDICATED RELATIONSHIP MANAGERS
                </p>
                <p className="mt-0.5 text-[13px] leading-snug">
                  Personalised assistance from start to finish.
                  <br />
                  Your success is our priority.
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-4 gap-3 border-t border-gray-200 pt-4">
              {features.map((f, i) => (
                <div key={f.label} className={`flex flex-col items-center text-center ${i < features.length - 1 ? "border-r border-gray-200" : ""}`}>
                  <span className="mb-2 flex h-11 w-11 items-center justify-center">
                    <f.icon className="h-7 w-7 text-[#1b5e20]" aria-hidden="true" />
                  </span>
                  <p className="text-[12px] font-semibold uppercase leading-tight whitespace-pre-line">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </SectionContainer>

      {/* Footer strip - full width */}
      <div className="mt-5 overflow-hidden bg-[#0d4a1a] py-2">
        <SectionContainer>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          {/* Left */}
          <div className="flex items-center gap-3 border-b-2 border-white pb-4 sm:w-1/2 sm:border-b-0 sm:border-r-2 sm:border-white sm:pr-6 sm:pb-0">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white">
              <img
                src={supportRightImg.src}
                alt=""
                className="h-12 w-12 object-contain"
              />
            </span>
            <div>
              <p className="text-[14px] font-semibold uppercase leading-tight text-white sm:text-[15px] border-b-2 border-white pb-1">
                Together, Let&apos;s Grow
                <br />A Sustainable India
              </p>
              <p className="mt-0.5 text-[12px] text-white/70">
                We look forward to supporting your <br/>journey at{" "}
                <span className="font-semibold text-[#F2B40E]">
                  Bharat Organic Expo 2027.
                </span>
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-1 items-center justify-between gap-3 rounded-2xl bg-white px-5 py-2 sm:py-2">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1b5e20]">
                <FileText className="h-8 w-8 text-white" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase">
                  Ready to Move Ahead?
                </p>
                <p className="text-[12px]">
                  Start your PMS application today and unlock
                  <br />
                  government support for your growth.
                </p>
              </div>
            </div>

            <a
              href="#apply"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#1b5e20] px-4 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2d7a2d]"
            >
              Start Your Application
              <div className="bg-white w-6 h-6 flex items-center justify-center rounded-full">

              <ChevronRight className="h-4 w-4 text-[#1b5e20]" aria-hidden="true" />
              </div>
            </a>
          </div>
        </div>
        </SectionContainer>
      </div>
    </section>
  );
}

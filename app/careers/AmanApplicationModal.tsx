"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  GraduationCap,
  LockKeyhole,
  Mail,
  MapPin,
  Pencil,
  Plane,
  Phone,
  User,
  X,
} from "lucide-react";

const DESIGN_WIDTH = 1500;
const DESIGN_HEIGHT = 900;

const assets = {
  headerLeaf: "/separated-assets/bharat-organic-leaf.png",
  headerBanner: "/separated-assets/ChatGPT Image Sep 16, 2026, 04_29_31 PM.png",
  sidebarFooter: "/separated-assets/grow-organic-grow-india.png",
  profile: "/career-submit-resume-assets/profile.png",
};

const profile = {
  name: "Vijay Sharma",
  designation: "Senior Sales Executive",
  phone: "+91 98765 43210",
  email: "vijay.sharma@gmail.com",
  linkedin: "linkedin.com/in/vijay-sharma",
};

function SectionHeader({
  icon: Icon,
  title,
  onEdit,
}: {
  icon: React.ElementType;
  title: string;
  onEdit?: () => void;
}) {
  return (
    <div className="flex h-[38px] items-center justify-between border-b border-[#dfece5] bg-gradient-to-r from-[#f1faf4] to-[#f8fcf9] px-[14px]">
      <div className="flex items-center gap-[10px]">
        <Icon className="h-[20px] w-[20px] text-[#086b45]" strokeWidth={2.4} />
        <h2 className="text-[17px] font-semibold text-[#075b43]">{title}</h2>
      </div>

      {onEdit && (
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-[4px] text-[12.5px] font-semibold text-[#0874d1]"
        >
          <Pencil className="h-[13px] w-[13px]" />
          Edit
        </button>
      )}
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-[8px] border border-[#dce9e2] bg-white ${className}`}>
      {children}
    </div>
  );
}

function ProgressSteps() {
  const steps = ["Upload CV", "AI Analysis", "Fill Application", "Review & Submit"];

  return (
    <div className="relative h-[48px] w-full">
      <div className="absolute left-[12%] right-[12%] top-[14px] h-[2px] bg-[#d7e1dc]" />
      <div className="absolute left-[12%] top-[14px] h-[2px] w-[76%] bg-[#168452]" />

      <div className="relative grid h-full grid-cols-4">
        {steps.map((step, index) => {
          const active = index === 3;
          return (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`grid h-[28px] w-[28px] place-items-center rounded-full text-[12px] font-semibold ${
                  active ? "bg-[#087f49] text-white" : "bg-[#087f49] text-white"
                }`}
              >
                {index < 3 ? <Check className="h-[16px] w-[16px]" strokeWidth={3} /> : "4"}
              </div>
              <span
                className={`mt-[3px] whitespace-nowrap text-[12.5px] ${
                  active ? "font-semibold text-[#075c40]" : "font-semibold text-[#294c69]"
                }`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CandidateProfile() {
  return (
    <Card className="flex flex-col justify-between">
      <SectionHeader icon={User} title="Candidate Profile" onEdit={() => {}} />

      <div className="grid grid-cols-[105px_1fr] gap-[12px] px-[14px] py-[8px]">
        <div className="relative h-[122px] overflow-hidden rounded-[6px] bg-[#edf4f0]">
          <Image src={assets.profile} alt={profile.name} fill className="object-cover" />
        </div>

        <div className="min-w-0 pt-[1px]">
          <h3 className="text-[18.5px] font-semibold text-[#123b67]">{profile.name}</h3>
          <p className="mt-[1px] text-[13.5px] font-semibold text-[#526d89]">{profile.designation}</p>
          <p className="mt-[1px] text-[12px] italic text-[#52706a]">
            Driving Partnerships for a Sustainable Future
          </p>

          <div className="mt-[6px] space-y-[4px] text-[13px] font-semibold text-[#284766]">
            <div className="flex items-center gap-[6px]">
              <Phone className="h-[14px] w-[14px] text-[#08764c]" />
              {profile.phone}
            </div>
            <div className="flex items-center gap-[6px]">
              <Mail className="h-[14px] w-[14px] text-[#08764c]" />
              {profile.email}
            </div>
            <div className="flex items-center gap-[6px]">
              <span className="grid h-[14px] w-[14px] place-items-center rounded-[2px] bg-[#0a73b9] text-[9.5px] font-semibold text-white">
                in
              </span>
              {profile.linkedin}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

function AddressCard() {
  return (
    <Card className="flex flex-col justify-between">
      <SectionHeader icon={MapPin} title="Address & Availability" onEdit={() => {}} />

      <div className="px-[14px] py-[6px]">
        <InfoRow icon={MapPin} label="Current Address" value="Sector 62, Noida, Uttar Pradesh – 201309" />
        <InfoRow icon={Plane} label="Willing to Relocate?" value="Yes, Pan India" />
        <InfoRow icon={Building2} label="Preferred Work Location" value="Delhi NCR (Preferred)" />
        <InfoRow icon={CalendarDays} label="Notice Period" value="30 Days" />
        <InfoRow icon={CalendarDays} label="Available to Join" value="1st Nov 2026" />
      </div>
    </Card>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="grid min-h-[30px] grid-cols-[20px_145px_1fr] items-center border-b border-[#e8efeb] py-[2px] last:border-b-0">
      <Icon className="h-[15px] w-[15px] text-[#086b45]" strokeWidth={2.4} />
      <span className="text-[12.5px] font-semibold text-[#153c65]">{label}</span>
      <span className="text-[12.5px] font-semibold text-[#294968]">{value}</span>
    </div>
  );
}

function ExperienceCard() {
  return (
    <Card className="flex flex-col justify-between">
      <SectionHeader icon={BriefcaseBusiness} title="Professional Experience" onEdit={() => {}} />

      <div className="relative px-[14px] py-[8px]">
        <div className="absolute left-[20px] bottom-[24px] top-[24px] w-[2px] bg-[#08774b]" />

        <ExperienceItem
          current
          company="ABC Exhibitions Pvt. Ltd."
          role="Senior Sales Executive"
          date="Jan 2022 – Present"
          duration="(3 Years 8 Months)"
          description="Handled domestic exhibition sales, key account management, and sponsorships across multiple trade shows."
        />

        <ExperienceItem
          company="Event Global Services"
          role="Sales Executive"
          date="Jun 2019 – Dec 2021"
          duration="(2 Years 6 Months)"
          description="Managed exhibitor relations, generated new business, and supported event operations."
        />
      </div>
    </Card>
  );
}

function ExperienceItem({
  current,
  company,
  role,
  date,
  duration,
  description,
}: {
  current?: boolean;
  company: string;
  role: string;
  date: string;
  duration: string;
  description: string;
}) {
  return (
    <div className="relative grid grid-cols-[20px_1fr_130px] gap-[6px] pb-[8px] last:pb-0">
      <div className="relative z-10 mt-[4px] h-[11px] w-[11px] rounded-full bg-[#08764a]" />

      <div>
        <div className="flex items-center gap-[6px]">
          <h3 className="text-[13.5px] font-semibold text-[#153b66]">{company}</h3>
          {current && (
            <span className="rounded-full bg-[#e0f4e8] px-[7px] py-[1.5px] text-[10px] font-semibold text-[#267354]">
              Current Company
            </span>
          )}
        </div>

        <p className="mt-[1px] text-[12.5px] font-semibold text-[#264a6b]">{role}</p>
        <p className="mt-[3px] max-w-[480px] text-[11.5px] leading-[1.3] text-[#58708a]">{description}</p>
      </div>

      <div className="text-right text-[11px] font-semibold text-[#667d95]">
        <div>{date}</div>
        <div className="mt-[1px]">{duration}</div>
      </div>
    </div>
  );
}

function EducationCard() {
  return (
    <Card className="flex flex-col justify-between">
      <SectionHeader icon={GraduationCap} title="Education" onEdit={() => {}} />

      <div className="px-[14px] py-[6px]">
        <EducationRow degree="MBA (Marketing)" university="Delhi University" years="2017 – 2019" />
        <EducationRow degree="B.Com (Hons.)" university="Delhi University" years="2014 – 2017" />
      </div>
    </Card>
  );
}

function EducationRow({ degree, university, years }: { degree: string; university: string; years: string }) {
  return (
    <div className="grid grid-cols-[24px_1fr_80px] items-center border-b border-[#e6eeea] py-[6px] last:border-b-0">
      <GraduationCap className="h-[16px] w-[16px] text-[#076e49]" />

      <div>
        <div className="text-[12.5px] font-semibold text-[#153b66]">{degree}</div>
        <div className="text-[11.5px] font-semibold text-[#294c6b]">{university}</div>
      </div>

      <div className="text-right text-[11.5px] font-semibold text-[#627991]">{years}</div>
    </div>
  );
}

function SkillsCard() {
  const skills = [
    "B2B Sales",
    "Client Acquisition",
    "Exhibition Sales",
    "Negotiation",
    "Relationship Management",
    "Business Development",
  ];

  return (
    <Card className="flex flex-col justify-between">
      <SectionHeader icon={Building2} title="Skills" onEdit={() => {}} />

      <div className="flex flex-wrap gap-[6px] px-[14px] py-[8px]">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-[#eef5f7] px-[10px] py-[3.5px] text-[11.5px] font-semibold text-[#234967]"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
}

function SalaryCard() {
  return (
    <Card className="flex flex-col justify-between">
      <SectionHeader icon={Building2} title="Salary Details" onEdit={() => {}} />

      <div className="grid grid-cols-3 px-[14px] py-[8px]">
        <SalaryItem title="Current CTC" value="₹ 6,00,000" sub="per annum" />
        <SalaryItem title="Expected CTC" value="₹ 8,00,000 – 10,00,000" sub="per annum" />
        <SalaryItem title="Other Benefits" value="Performance Incentive, Travel" sub="Allowance" />
      </div>
    </Card>
  );
}

function SalaryItem({ title, value, sub }: { title: string; value: string; sub: string }) {
  return (
    <div className="border-r border-[#e3ebe7] px-[6px] last:border-0">
      <div className="text-[11.5px] font-semibold text-[#193b61]">{title}</div>
      <div className="mt-[3px] text-[12.5px] font-semibold text-[#173d66]">{value}</div>
      <div className="mt-[1px] text-[10.5px] text-[#5d758d]">{sub}</div>
    </div>
  );
}

function AdditionalInfoCard() {
  return (
    <Card className="flex flex-col justify-between">
      <SectionHeader icon={Building2} title="Additional Information" onEdit={() => {}} />

      <div className="grid grid-cols-[135px_1fr] gap-[10px] px-[14px] py-[8px]">
        <div>
          <div className="text-[11.5px] font-semibold text-[#173c62]">Languages Known</div>
          <div className="mt-[3px] text-[11.5px] font-semibold text-[#294b69]">English, Hindi</div>
        </div>

        <div>
          <div className="text-[11.5px] font-semibold text-[#173c62]">Relevant Achievements</div>
          <div className="mt-[3px] text-[11px] leading-[1.35] text-[#294b69]">
            Increased exhibitor base by 30% in last financial year. Closed key sponsorship deals worth ₹50+ lakhs.
          </div>
        </div>
      </div>
    </Card>
  );
}

function MatchCard() {
  return (
    <div className="rounded-[8px] border border-[#dce9e2] bg-white p-[12px] shadow-sm">
      <h2 className="text-[16px] font-semibold text-[#075b43]">Your AI Match Score</h2>

      <div className="mt-[6px] grid grid-cols-[82px_1fr] items-center gap-[10px]">
        <div
          className="relative grid aspect-square place-items-center rounded-full"
          style={{
            background: "conic-gradient(#168e4f 0deg 259deg,#d7e4de 259deg 360deg)",
          }}
        >
          <div className="absolute inset-[7px] rounded-full bg-white" />
          <div className="relative z-10 text-center">
            <div className="text-[23px] font-semibold leading-none text-[#123963]">72%</div>
            <div className="mt-[2px] text-[9.5px] font-semibold text-[#234667]">Match Score</div>
          </div>
        </div>

        <div>
          <h3 className="text-[15px] font-semibold text-[#08704a]">🎉 Good Match!</h3>
          <p className="mt-[3px] text-[12px] leading-[1.3] text-[#315342]">
            Your profile matches the key requirements for this position.
          </p>

          <button type="button" className="mt-[6px] flex items-center gap-[5px] text-[12px] font-semibold text-[#086b45]">
            View Detailed Analysis
            <ArrowRight className="h-[13px] w-[13px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

function JobSummaryCard() {
  return (
    <div className="rounded-[8px] border border-[#dce9e2] bg-white p-[12px] shadow-sm">
      <h2 className="text-[16px] font-semibold text-[#123963]">Job Summary</h2>

      <div className="mt-[8px] space-y-[7px]">
        <SummaryRow icon={Building2} text="Namo Gange Wellness Pvt. Ltd." />
        <SummaryRow icon={MapPin} text="Delhi NCR" />
        <SummaryRow icon={BriefcaseBusiness} text="Full Time" />
        <SummaryRow icon={Building2} text="3 – 6 Years" />
        <SummaryRow icon={GraduationCap} text="Graduate (MBA/PGDM Preferred)" />
      </div>
    </div>
  );
}

function SummaryRow({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-[8px]">
      <Icon className="h-[17px] w-[17px] text-[#076d49]" />
      <span className="text-[12.5px] font-semibold text-[#284867]">{text}</span>
    </div>
  );
}

function LooksGoodCard() {
  const items = [
    "Personal details completed",
    "Work experience and skills added",
    "Education and salary details provided",
    "Availability and location preferences updated",
    "CV uploaded",
  ];

  return (
    <div className="rounded-[8px] border border-[#dce9e2] bg-gradient-to-br from-[#effaf3] to-white p-[12px] shadow-sm">
      <div className="flex items-center gap-[8px]">
        <div className="text-[28px]">🌿</div>

        <div>
          <h2 className="text-[17.5px] font-semibold text-[#086a46]">Looks Good!</h2>
          <p className="mt-[1px] text-[13px] font-semibold text-[#4a6a5b]">
            You&apos;re almost ready to submit your application.
          </p>
        </div>
      </div>

      <div className="mt-[10px] space-y-[6px]">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-[8px] text-[13.5px] font-semibold text-[#284e42]">
            <CheckCircle2 className="h-[18px] w-[18px] shrink-0 fill-[#0ca151] text-white" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[175px] overflow-hidden">
      <Image src={assets.sidebarFooter} alt="" fill sizes="36vw" className="object-cover object-top" />
    </div>
  );
}

function Sidebar({ onClose }: { onClose: () => void }) {
  return (
    <aside className="relative flex h-full min-h-0 flex-col justify-between overflow-hidden border-l border-[#e3ebe7] bg-gradient-to-b from-[#f8fcf9] to-[#edf8f1] pl-[28px] pr-[32px] pb-[16px] pt-[8px]">
      <SidebarFooter />

      <div className="relative z-10 space-y-[8px]">
        <MatchCard />
        <JobSummaryCard />
        <LooksGoodCard />

        <button
          type="button"
          onClick={() => alert("Application submitted")}
          className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-[6px] bg-[#087b45] text-[16px] font-semibold text-white shadow-[0_3px_8px_rgba(0,90,50,.18)] hover:bg-[#066b3c]"
        >
          Submit Application
          <ArrowRight className="h-[17px] w-[17px]" />
        </button>

        <div className="flex items-center gap-[5px] px-[2px] text-[11px] font-semibold text-[#526d64]">
          <LockKeyhole className="h-[15px] w-[15px] shrink-0 text-[#0a6847]" />
          Your data is secure and will only be used for recruitment purposes.
        </div>
      </div>
    </aside>
  );
}

function AmanApplicationContent({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="grid h-full w-full overflow-hidden bg-white text-[#10243f]"
      style={{ gridTemplateColumns: "64% 36%" }}
    >
      {/* LEFT PANEL */}
      <section className="relative flex h-full min-h-0 flex-col justify-between overflow-hidden px-[32px] pb-[14px] pt-[10px]">
        {/* HEADER LOGO & TAGLINE */}
        <div className="flex shrink-0 items-center gap-[8px] relative z-10">
          <Image
            src={assets.headerLeaf}
            alt=""
            width={82}
            height={92}
            priority
            className="h-[40px] w-[37px] shrink-0 object-contain"
          />

          <div className="min-w-0">
            <div className="truncate text-[22px] font-semibold leading-[1] text-[#103f31]">
              Bharat Organic Expo
            </div>
            <div className="mt-[2px] truncate text-[11.5px] font-semibold leading-[1.05] text-[#2d6f62]">
              People • Ideas • Partnerships for a Greener Tomorrow
            </div>
          </div>
        </div>

        {/* TOP TITLE & BACK */}
        <div className="relative z-10 mt-[4px]">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-[5px] text-[13px] font-semibold text-[#0c5e3f] hover:text-[#d92027] transition-colors"
          >
            <ArrowLeft className="h-[14px] w-[14px]" />
            Back
          </button>

          <h1 className="mt-[3px] text-[25px] font-semibold leading-[1.05] tracking-[-0.02em] text-[#123963]">
            Sales Manager – Domestic Exhibition Sales & Sponsorships
          </h1>

          <div className="mt-[3px] flex items-center gap-[10px] text-[14px] font-semibold text-[#254b70]">
            <span>Namo Gange Wellness Pvt. Ltd.</span>
            <span className="h-[14px] w-px bg-[#ccd7df]" />
            <span>Bharat Organic Expo</span>
          </div>
        </div>

        {/* PROGRESS BAR & LEAF BANNER ROW */}
        <div className="relative z-10 mt-[4px] flex items-center justify-between gap-[12px]">
          <div className="flex-1 min-w-0">
            <ProgressSteps />
          </div>

          <div className="relative h-[68px] w-[185px] shrink-0 -mt-[24px]">
            <Image
              src={assets.headerBanner}
              alt="Together for a Healthier Tomorrow"
              fill
              priority
              className="object-contain object-left-center"
            />
          </div>
        </div>

        {/* REVIEW APPLICATION TITLE & EDIT ALL */}
        <div className="relative z-10 mb-[4px] flex items-end justify-between">
          <div>
            <h2 className="text-[21px] font-semibold text-[#08704a]">Review Your Application</h2>
            <p className="mt-[1px] text-[12.5px] font-semibold text-[#3b5e7b]">
              Please review your details below. You can edit any section if required.
            </p>
          </div>

          <button
            type="button"
            className="flex h-[34px] items-center gap-[6px] rounded-[5px] border border-[#08744b] bg-white px-[12px] text-[12px] font-semibold text-[#08744b]"
          >
            <Pencil className="h-[13px] w-[13px]" />
            Edit All
          </button>
        </div>

        {/* MAIN CARDS GRID */}
        <div className="relative z-10 grid grid-cols-2 gap-[8px]">
          <CandidateProfile />
          <AddressCard />

          <ExperienceCard />

          <div className="flex flex-col gap-[8px]">
            <EducationCard />
            <SkillsCard />
          </div>

          <SalaryCard />
          <AdditionalInfoCard />
        </div>
      </section>

      {/* RIGHT SIDEBAR */}
      <Sidebar onClose={onClose} />
    </div>
  );
}

export function AmanApplicationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/45 p-[10px] overflow-hidden">
      <div
        className="relative overflow-hidden rounded-[16px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.3)]"
        style={{
          width: "min(96vw, 1500px)",
          aspectRatio: `${DESIGN_WIDTH} / ${DESIGN_HEIGHT}`,
          maxHeight: "96vh",
        }}
      >
        <div className="absolute inset-0">
          <AmanApplicationContent onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

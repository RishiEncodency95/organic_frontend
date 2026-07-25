"use client";

import { Leaf, FileText, Users, PhoneCall, Handshake, CheckCircle2, TicketCheck } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Submit Enquiry",
    desc: "Fill the form or reach out to us.",
    icon: FileText
  },
  {
    num: "02",
    title: "Team Reviews",
    desc: "Our team will review your enquiry",
    icon: Users
  },
  {
    num: "03",
    title: "Call Back",
    desc: "We will connect for further discussion",
    icon: PhoneCall
  },
  {
    num: "04",
    title: "Meeting / Discussion",
    desc: "Detailed meeting to understand needs",
    icon: Handshake
  },
  {
    num: "05",
    title: "Registration",
    desc: "Complete registration process",
    icon: TicketCheck
  },
  {
    num: "06",
    title: "Confirmation",
    desc: "Receive confirmation and next steps",
    icon: CheckCircle2
  }
];

const ContactProcess = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-10">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center gap-2 mb-1">
          <Leaf size={16} className="text-[#3b8c2a]" />
          <h2 className="text-[#154726] text-[22px] font-bold">Our Business Enquiry Process</h2>
          <Leaf size={16} className="text-[#3b8c2a]" />
        </div>
      </div>

      {/* Process Stepper */}
      <div className="relative">
        
        {/* Dotted Line (Desktop only) */}
        <div className="hidden lg:block absolute top-[24px] left-[8%] right-[8%] h-[2px] border-t-2 border-dashed border-[#3b8c2a]/30 -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center relative group">
                
                {/* Dotted connecting line for Mobile/Tablet */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-[24px] left-[50%] right-[-50%] h-[2px] border-t-2 border-dashed border-[#3b8c2a]/30 -z-10"></div>
                )}

                <div className="w-12 h-12 rounded-full bg-white border-2 border-[#3b8c2a] flex items-center justify-center mb-4 shadow-[0_4px_15px_rgba(59,140,42,0.15)] group-hover:bg-[#3b8c2a] transition-colors duration-300">
                  <Icon size={20} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <span className="text-[#3b8c2a] text-[10px] font-bold mb-1">{step.num}</span>
                <h4 className="text-[#111827] text-[13px] font-bold mb-1">{step.title}</h4>
                <p className="text-[#64748b] text-[10px] leading-relaxed max-w-[140px]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default ContactProcess;

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
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-2">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center gap-2 mb-1">
          <Leaf size={16} className="text-[#3b8c2a]" />
          <h2 className="text-[#154726] text-[22px] font-bold">Our Business Enquiry Process</h2>
          <Leaf size={16} className="text-[#3b8c2a]" />
        </div>
      </div>

      {/* Process Stepper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 relative z-10">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 p-3 pt-4 shadow-sm hover:shadow-lg hover:shadow-[#3b8c2a]/15 hover:bg-[#3b8c2a] hover:-translate-y-1 transition-all duration-1000 ease-in-out flex flex-col items-center text-center relative group cursor-pointer mt-2"
            >
              
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#154726] text-white text-[10px] font-bold flex items-center justify-center shadow-md z-10 group-hover:bg-white group-hover:text-[#154726] transition-colors duration-1000 ease-in-out">
                {step.num}
              </div>

              <div className="w-10 h-10 rounded-full bg-[#f8fdf9] border border-[#e8f5ec] flex items-center justify-center mb-2 mt-1 group-hover:bg-white/20 group-hover:border-transparent transition-colors duration-1000 ease-in-out">
                <Icon size={18} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-1000 ease-in-out" />
              </div>
              
              <h4 className="text-[#111827] text-[12px] font-bold mb-1 group-hover:text-white transition-colors duration-1000 ease-in-out">{step.title}</h4>
              <p className="text-[#64748b] text-[10px] leading-relaxed group-hover:text-white/90 transition-colors duration-1000 ease-in-out">
                {step.desc}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default ContactProcess;

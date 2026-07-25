"use client";

import { Leaf, Phone, Mail, Users, Megaphone, HelpCircle, Handshake } from "lucide-react";

const departments = [
  {
    title: "Sales Team",
    email: "sales@bharatorganicexpo.com",
    phone: "+91 98765 43211",
    icon: Phone
  },
  {
    title: "Support Team",
    email: "support@bharatorganicexpo.com",
    phone: "+91 98765 43212",
    icon: HelpCircle
  },
  {
    title: "Marketing Team",
    email: "marketing@bharatorganicexpo.com",
    phone: "+91 98765 43213",
    icon: Megaphone
  },
  {
    title: "Media Team",
    email: "media@bharatorganicexpo.com",
    phone: "+91 98765 43214",
    icon: Users
  },
  {
    title: "Exhibitor Support",
    email: "exhibitor@bharatorganicexpo.com",
    phone: "+91 98765 43215",
    icon: Users
  },
  {
    title: "Sponsorship Team",
    email: "sponsor@bharatorganicexpo.com",
    phone: "+91 98765 43216",
    icon: Handshake
  }
];

const ContactDepartments = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-10">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Leaf size={16} className="text-[#3b8c2a]" />
          <h2 className="text-[#154726] text-[22px] font-bold">Connect With Our Departments</h2>
          <Leaf size={16} className="text-[#3b8c2a]" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {departments.map((dept, index) => {
          const Icon = dept.icon;
          return (
            <div key={index} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-[#f8fdf9] border border-[#e8f5ec] flex items-center justify-center mb-3 group-hover:bg-[#3b8c2a] transition-colors duration-300">
                <Icon size={18} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-[#111827] text-[13px] font-bold mb-2">{dept.title}</h4>
              <a href={`mailto:${dept.email}`} className="text-[#64748b] text-[10px] hover:text-[#3b8c2a] transition-colors mb-1 break-all w-full">
                {dept.email}
              </a>
              <a href={`tel:${dept.phone.replace(/\s+/g, '')}`} className="text-[#64748b] text-[11px] font-medium hover:text-[#3b8c2a] transition-colors">
                {dept.phone}
              </a>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default ContactDepartments;

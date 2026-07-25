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
    <div className="w-full bg-[#f8fdf9] py-10 border-y border-[#e8f5ec]">
      <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11">
      
      {/* Title */}
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="flex items-center gap-2 mb-1">
          <Leaf size={16} className="text-[#3b8c2a]" />
          <h2 className="text-[#154726] text-[22px] font-bold">Connect With Our Departments</h2>
          <Leaf size={16} className="text-[#3b8c2a]" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
        {departments.map((dept, index) => {
          const Icon = dept.icon;
          return (
            <div 
              key={index} 
              className="bg-white rounded-2xl border border-gray-100 p-3 shadow-sm hover:shadow-lg hover:shadow-[#3b8c2a]/15 hover:bg-[#3b8c2a] hover:-translate-y-1 transition-all duration-1000 ease-in-out flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#f8fdf9] border border-[#e8f5ec] flex items-center justify-center mb-2 group-hover:bg-white/20 group-hover:border-transparent transition-colors duration-1000 ease-in-out">
                <Icon size={18} className="text-[#3b8c2a] group-hover:text-white transition-colors duration-1000 ease-in-out" />
              </div>
              <h4 className="text-[#111827] text-[13px] font-bold mb-1.5 group-hover:text-white transition-colors duration-1000 ease-in-out">{dept.title}</h4>
              <a 
                href={`mailto:${dept.email}`} 
                className="text-[#64748b] text-[10px] hover:underline mb-0.5 break-all w-full group-hover:text-white/90 transition-colors duration-1000 ease-in-out"
              >
                {dept.email}
              </a>
              {dept.phone && (
                <a 
                  href={`tel:${dept.phone.replace(/[^0-9+]/g, '')}`} 
                  className="text-[#64748b] text-[10px] hover:underline group-hover:text-white/90 transition-colors duration-1000 ease-in-out"
                >
                  {dept.phone}
                </a>
              )}
            </div>
          );
        })}
      </div>

      </section>
    </div>
  );
};

export default ContactDepartments;

"use client";

import { Leaf, PhoneCall } from "lucide-react";

const ContactFormSection = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-2">
            <h2 className="text-[#3b8c2a] text-[20px] font-bold">Send Us a Message</h2>
            <Leaf size={18} className="text-[#3b8c2a]" />
          </div>
          <p className="text-[#64748b] text-[12px] mb-8">
            We'd love to hear from you. Fill out the form and our team will get back to you shortly.
          </p>

          <form className="flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[11px] font-semibold">First Name *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[11px] font-semibold">Last Name *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[11px] font-semibold">Email Address *</label>
                <input type="email" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[11px] font-semibold">Phone Number *</label>
                <input type="tel" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[11px] font-semibold">Company / Organization</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[11px] font-semibold">Country *</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px] bg-white text-gray-500">
                  <option>Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[11px] font-semibold">Purpose of Contact *</label>
                <select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px] bg-white text-gray-500">
                  <option>Select Purpose</option>
                  <option>Exhibition</option>
                  <option>Sponsorship</option>
                  <option>Visitor Registration</option>
                  <option>Media Query</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[11px] font-semibold">Subject *</label>
                <input type="text" className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px]" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[#111827] text-[11px] font-semibold">Your Message *</label>
              <textarea rows={4} className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[13px] resize-none"></textarea>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#111827] text-[11px] font-semibold">Upload File (Optional)</label>
              <div className="flex items-center gap-3">
                <input type="file" id="file" className="hidden" />
                <label htmlFor="file" className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-[#111827] text-[11px] font-medium px-4 py-2 rounded-md transition-colors border border-gray-200">
                  Choose File
                </label>
                <span className="text-gray-400 text-[11px]">No file chosen</span>
              </div>
              <span className="text-gray-400 text-[9px] mt-0.5">PDF, DOC, DOCX, PNG, JPG (Max: 5MB)</span>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="terms" className="rounded border-gray-300 text-[#3b8c2a] focus:ring-[#3b8c2a]" />
              <label htmlFor="terms" className="text-[#64748b] text-[11px]">
                I agree to the <a href="#" className="text-[#3b8c2a] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#3b8c2a] hover:underline">Terms & Conditions</a>
              </label>
            </div>

            <div>
              <button type="button" className="bg-[#3b8c2a] hover:bg-[#2b6b1e] text-white px-6 py-2.5 rounded-md text-[12px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md">
                SEND MESSAGE →
              </button>
            </div>

          </form>
        </div>

        {/* Right Side: Office Timings & Quick Help */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          
          <div className="bg-[#154726] rounded-3xl p-6 md:p-8 shadow-xl text-white relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3b8c2a] opacity-20 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/4 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <h3 className="text-xl font-bold">Office Timings</h3>
                <Leaf size={20} className="text-[#aae639]" />
              </div>

              <div className="flex flex-col gap-4 text-[13px]">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/80">Monday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/80">Tuesday</span>
                  <span className="font-semibold text-[#aae639]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/80">Wednesday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/80">Thursday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/80">Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-white/80">Saturday</span>
                  <span className="font-semibold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8fdf9] rounded-3xl border border-[#e8f5ec] p-6 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
              <PhoneCall size={20} className="text-[#3b8c2a]" />
            </div>
            <div>
              <h4 className="text-[#111827] text-[14px] font-bold mb-1">Need Immediate Help?</h4>
              <p className="text-[#64748b] text-[11px] leading-relaxed mb-3">
                Call our support team for quick assistance.
              </p>
              <button className="bg-[#154726] hover:bg-[#0b2912] text-white px-5 py-2 rounded-md text-[12px] font-bold transition-all duration-300 flex items-center gap-2">
                <PhoneCall size={14} />
                +91 98765 43210
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;

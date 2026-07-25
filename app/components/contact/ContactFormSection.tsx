"use client";

import { Leaf, PhoneCall } from "lucide-react";

const ContactFormSection = () => {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-11 pb-8">
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Side: Form */}
        <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6">
          <div className="flex items-center gap-2 mb-1">
            <h2 className="text-[#3b8c2a] text-[18px] font-bold">Send Us a Message</h2>
            <Leaf size={16} className="text-[#3b8c2a]" />
          </div>
          <p className="text-[#64748b] text-[11px] mb-5">
            We'd love to hear from you. Fill out the form and our team will get back to you shortly.
          </p>

          <form className="flex flex-col gap-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[#111827] text-[10px] font-bold">First Name *</label>
                <input type="text" className="w-full px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9]" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#111827] text-[10px] font-bold">Last Name *</label>
                <input type="text" className="w-full px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9]" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#111827] text-[10px] font-bold">Email Address *</label>
                <input type="email" className="w-full px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9]" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#111827] text-[10px] font-bold">Phone Number *</label>
                <input type="tel" className="w-full px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9]" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#111827] text-[10px] font-bold">Company / Organization</label>
                <input type="text" className="w-full px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9]" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#111827] text-[10px] font-bold">Country *</label>
                <select className="w-full px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9] text-gray-700">
                  <option>Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#111827] text-[10px] font-bold">Purpose of Contact *</label>
                <select className="w-full px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9] text-gray-700">
                  <option>Select Purpose</option>
                  <option>Exhibition</option>
                  <option>Sponsorship</option>
                  <option>Visitor Registration</option>
                  <option>Media Query</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[#111827] text-[10px] font-bold">Subject *</label>
                <input type="text" className="w-full px-3 py-1.5 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9]" />
              </div>
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-[#111827] text-[10px] font-bold">Your Message *</label>
              <textarea rows={3} className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[12px] transition-colors bg-[#f8fdf9] resize-none"></textarea>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[#111827] text-[10px] font-bold">Upload File (Optional)</label>
              <div className="flex items-center gap-2">
                <input type="file" id="file" className="hidden" />
                <label htmlFor="file" className="cursor-pointer bg-white hover:bg-gray-50 text-[#111827] text-[10px] font-bold px-3 py-1.5 rounded border border-gray-200 shadow-sm transition-colors">
                  Choose File
                </label>
                <span className="text-gray-400 text-[10px]">No file chosen</span>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-1">
              <input type="checkbox" id="terms" className="rounded border-gray-300 w-3 h-3 text-[#3b8c2a] focus:ring-[#3b8c2a]" />
              <label htmlFor="terms" className="text-[#64748b] text-[10px]">
                I agree to the <a href="#" className="text-[#3b8c2a] hover:underline font-semibold">Privacy Policy</a> & <a href="#" className="text-[#3b8c2a] hover:underline font-semibold">Terms</a>
              </label>
            </div>

            <div className="mt-1">
              <button type="button" className="bg-[#3b8c2a] hover:bg-[#2b6b1e] text-white px-5 py-2 rounded text-[11px] font-bold uppercase tracking-wide transition-all duration-300 shadow-sm">
                SEND MESSAGE →
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Office Timings & Quick Help */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          
          <div className="bg-[#154726] rounded-2xl p-4 md:p-6 shadow-md text-white relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#3b8c2a] opacity-20 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/4 z-0"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-[16px] font-bold">Office Timings</h3>
                <Leaf size={16} className="text-[#aae639]" />
              </div>

              <div className="flex flex-col gap-2.5 text-[11px]">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Monday</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Tuesday</span>
                  <span className="font-bold text-[#aae639]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Wednesday</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Thursday</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Friday</span>
                  <span className="font-bold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-white/80">Saturday</span>
                  <span className="font-bold">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8fdf9] rounded-2xl border border-[#e8f5ec] p-4 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center shrink-0 shadow-sm">
              <PhoneCall size={16} className="text-[#3b8c2a]" />
            </div>
            <div>
              <h4 className="text-[#111827] text-[12px] font-bold mb-0.5">Need Immediate Help?</h4>
              <p className="text-[#64748b] text-[10px] leading-relaxed mb-2">
                Call our support team for quick assistance.
              </p>
              <button className="bg-[#154726] hover:bg-[#0b2912] text-white px-4 py-1.5 rounded text-[11px] font-bold transition-all duration-300 flex items-center gap-1.5">
                <PhoneCall size={12} />
                +91 98765 43210
              </button>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-[#F8FDF9] rounded-2xl p-4 md:p-5 shadow-sm relative overflow-hidden">
            {/* Soft subtle blur effect in corner */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-30 rounded-full blur-[20px] -translate-y-1/2 translate-x-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col">
              <h4 className="text-[#0a2312] text-[13px] font-bold mb-1">Stay Updated with Organic Expo</h4>
              <p className="text-[#0a2312]/80 text-[10px] font-medium leading-relaxed mb-3">
                Subscribe to our newsletter and never miss any update about events, offers and announcements.
              </p>
              
              <div className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full px-3 py-2 rounded-md bg-white/90 border border-transparent focus:outline-none focus:bg-white text-[11px] placeholder-gray-500 text-gray-800 transition-colors shadow-inner"
                />
                <button className="w-full bg-[#0a2312] hover:bg-[#154726] text-white px-4 py-2 rounded-md text-[11px] font-bold uppercase tracking-wide transition-colors duration-300 shadow-md">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;

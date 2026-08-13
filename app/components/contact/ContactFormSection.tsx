"use client";

import { Leaf } from "lucide-react";

const ContactFormSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-10">

        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-[#3b8c2a] text-[28px] md:text-[34px] lg:text-[40px] font-bold leading-[1.2]">Send Us a Message</h2>
            <Leaf size={32} className="text-[#3b8c2a]" />
          </div>
          <p className="text-[#64748b] text-[16px] md:text-[18px] leading-[1.6] mb-8">
            We'd love to hear from you. Fill out the form and our team will get back to you shortly.
          </p>

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">First Name *</label>
                <input type="text" className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">Last Name *</label>
                <input type="text" className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">Email Address *</label>
                <input type="email" className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">Phone Number *</label>
                <input type="tel" className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">Company / Organization</label>
                <input type="text" className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] min-h-[44px]" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">Country *</label>
                <select className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] text-gray-700 min-h-[44px]">
                  <option>Select Country</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#111827] text-[12px] md:text-[14px] font-bold">Your Message *</label>
              <textarea rows={4} className="w-full px-3 py-3 rounded-md border border-gray-200 focus:outline-none focus:border-[#3b8c2a] focus:ring-1 focus:ring-[#3b8c2a] text-[15px] md:text-[16px] transition-colors bg-[#f8fdf9] resize-none"></textarea>
            </div>

            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="terms" className="rounded border-gray-300 w-4 h-4 text-[#3b8c2a] focus:ring-[#3b8c2a]" />
              <label htmlFor="terms" className="text-[#64748b] text-[14px] md:text-[15px]">
                I agree to the <a href="#" className="text-[#3b8c2a] hover:underline font-semibold">Privacy Policy</a> & <a href="#" className="text-[#3b8c2a] hover:underline font-semibold">Terms</a>
              </label>
            </div>

            <div className="mt-4">
              <button type="button" className="bg-[#3b8c2a] hover:bg-[#2b6b1e] text-white px-6 py-3 rounded text-[15px] md:text-[16px] font-bold uppercase tracking-wide transition-all duration-300 shadow-sm w-full md:w-auto min-h-[44px]">
                SEND MESSAGE →
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Map */}
        <div className="w-full lg:w-1/2 flex flex-col gap-2">
          {/* <div className="flex items-center gap-2 mb-2 px-2">
            <h2 className="text-[#3b8c2a] text-[20px] font-bold">Find Us Easily</h2>
            <Leaf size={18} className="text-[#3b8c2a]" />
          </div> */}
          <div className="w-full flex-grow min-h-[300px] lg:min-h-full rounded-2xl overflow-hidden border border-gray-200 shadow-sm relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.971553531641!2d77.2346049!3d28.6186411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2d6771d9d43%3A0x6e9f1661642c8bc5!2sPragati%20Maidan%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Bharat Organic Expo Location"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactFormSection;

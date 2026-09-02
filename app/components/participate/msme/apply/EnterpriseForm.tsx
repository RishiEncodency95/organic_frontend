import { Building2, MapPin, Check, ChevronDown, Calendar } from "lucide-react";

export default function EnterpriseForm() {
  return (
    <div className="w-full bg-white rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] p-3 md:p-4">
      {/* Header */}
      <div className="mb-4 border-b border-[#e5e7eb] pb-3">
        <div className="flex items-center gap-2 mb-2">
          <Building2 size={22} className="text-[#176b27]" strokeWidth={2.5} />
          <h2 className="text-[17px] font-semibold uppercase text-[#176b27] tracking-wide">
            1. Enterprise Details
          </h2>
        </div>
        <p className="text-gray-500 text-[13px] font-medium">
          — Please provide your enterprise information as per Udyam Registration.
        </p>
      </div>

      {/* Form Fields - Section 1 */}
      <div className="flex flex-col gap-3">
        {/* Row 1 */}
        <div className="w-full">
          <label className="block text-[11px] font-semibold text-gray-700 mb-1">
            Udyam Registration Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              defaultValue="UDYAM-DL-02-0118490"
              readOnly
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#e8f3ea] text-[#176b27] px-2 py-1 rounded-md flex items-center gap-1">
              <Check size={14} strokeWidth={3} />
              <span className="text-[11px] font-semibold">Verified</span>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="w-full">
          <label className="block text-[11px] font-semibold text-gray-700 mb-1">
            Enterprise Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. RAMMANI TRADELINK PRIVATE LIMITED"
            className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
          />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Enterprise Type <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 appearance-none focus:outline-none">
              <option value="">Select Enterprise Type</option>
              <option value="Micro">Micro</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Major Activity <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 appearance-none focus:outline-none">
              <option value="">Select Major Activity</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Services">Services</option>
              <option value="Trading">Trading</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Constitution / Organisation <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 appearance-none focus:outline-none">
              <option value="">Select Constitution</option>
              <option value="Private Limited Company">Private Limited Company</option>
              <option value="Proprietorship">Proprietorship</option>
              <option value="Partnership">Partnership</option>
              <option value="LLP">LLP</option>
              <option value="Public Limited Company">Public Limited Company</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Entrepreneur Category <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 appearance-none focus:outline-none">
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC/ST">SC/ST</option>
              <option value="Women">Women</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Gender of Entrepreneur <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 appearance-none focus:outline-none">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Date of Incorporation <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>
      </div>


      {/* Section 2: Address */}
      <div className="mt-5 mb-4 border-b border-[#e5e7eb] pb-2 flex items-center gap-2">
        <MapPin size={18} className="text-[#176b27]" strokeWidth={2.5} />
        <h3 className="text-[13px] font-semibold uppercase text-[#176b27] tracking-wide">
          Registered Office Address
        </h3>
      </div>

      <div className="flex flex-col gap-3">
        <div className="w-full">
          <label className="block text-[11px] font-semibold text-gray-700 mb-1">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. East Delhi"
            className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              State <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 appearance-none focus:outline-none">
              <option value="">Select State</option>
              <option value="Delhi">Delhi</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full relative">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              District <span className="text-red-500">*</span>
            </label>
            <select className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 appearance-none focus:outline-none">
              <option value="">Select District</option>
              <option value="East Delhi">East Delhi</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-[23px] text-gray-400 pointer-events-none" />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              PIN Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 110092"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="10-digit mobile number"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Email ID <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="e.g. info@rammanitradelink.com"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              GSTIN <span className="text-gray-400 font-medium">(If available)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 07AAXCR1234R1Z5"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              PAN Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. AAXCR1234R"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>
      </div>


      {/* Section 3: Bank Details */}
      <div className="mt-5 mb-4 pb-1">
        <label className="block text-[13px] font-semibold text-gray-800 mb-1">
          Bank Account Details <span className="text-gray-500 font-medium">(For fund transfer, if applicable)</span>
        </label>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Account Holder Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Company or Individual Name"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Bank Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. HDFC BANK LTD."
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Account Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. 1234567894321"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              IFSC Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. HDFC0001234"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
          <div className="w-full">
            <label className="block text-[11px] font-semibold text-gray-700 mb-1">
              Branch <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. LAXMI NAGAR, DELHI"
              className="w-full h-[32px] px-3 bg-[#fafbfa] border border-[#e5e7eb] rounded-md text-[12px] font-semibold text-gray-800 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

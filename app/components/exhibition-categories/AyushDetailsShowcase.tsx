"use client";

import React from "react";
import Image from "next/image";
import { Check, Phone, ArrowRight, ShieldCheck, Users, Globe, Handshake, Target, MapPin, Calendar, Heart, Leaf, Sprout, Store, Star, Factory, Tag, Package, Coffee, Carrot, CheckCircle2, Navigation, Headphones, TrendingUp, Megaphone, Apple, CupSoda, Utensils, Wheat, BadgeCheck, Truck, ShoppingBag, GraduationCap, Droplet, FlaskConical, Stethoscope, Building2, Beaker, FileText, Briefcase } from "lucide-react";
import heroBg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/ayush-bg.png";
import ayurvedaImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/ayurveda.png";
import herbalImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/herbal.png";
import wellnessImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/wellnness.png";
import essentialImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/essential.png";
import naturalImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/natural.png";
import spaImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/spa.png";
import naturalPersonalImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/natural-personal.png";
import herbalTeasImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/herbal-teas.png";
import researchImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/research.png";
import certificationImg from "@/app/assets/exhibition-categories/ayush-ayurveda-herba/certification.png";

const productSegments = [
  {
    title: "Ayurveda & Classical\nMedicines",
    items: ["Ayurvedic formulations", "Rasashastra products", "Herbal healthcare solutions", "Bhasmas & classical remedies"],
    image: ayurvedaImg
  },
  {
    title: "Herbal Extracts &\nIngredients",
    items: ["Standardized extracts", "Phytochemicals & actives", "Herbal powders & granules", "Bulk herbs & raw materials"],
    image: herbalImg
  },
  {
    title: "Wellness &\nHolistic Solutions",
    items: ["Yoga & meditation aids", "Immunity & detox solutions", "Stress relief & sleep support", "Holistic lifestyle products"],
    image: wellnessImg
  },
  {
    title: "Essential Oils &\nAromatherapy",
    items: ["Pure essential oils", "Carrier oils & blends", "Aromatherapy products", "Diffusers & accessories"],
    image: essentialImg
  },
  {
    title: "Natural & Organic\nHealth Products",
    items: ["Natural supplements", "Organic superfoods", "Functional nutrition", "Plant-based wellness"],
    image: naturalImg
  },
  {
    title: "Spa, Panchkarma &\nTherapeutic Solutions",
    items: ["Panchkarma equipment", "Spa & wellness essentials", "Massage oils & balms", "Therapeutic care products"],
    image: spaImg
  },
  {
    title: "Natural Personal Care\n& Cosmetics",
    items: ["Herbal skincare", "Natural haircare", "Organic cosmetics", "Clean beauty solutions"],
    image: naturalPersonalImg
  },
  {
    title: "Herbal Teas &\nFunctional Beverages",
    items: ["Herbal teas & infusions", "Functional beverages", "Health tonics & syrups", "Ayurvedic drink mixes"],
    image: herbalTeasImg
  },
  {
    title: "Research, Education\n& Innovation",
    items: ["AYUSH research institutes", "Herbal innovation labs", "Educational resources", "Publications & studies"],
    image: researchImg
  },
  {
    title: "Certification, Testing\n& Quality Assurance",
    items: ["Certification bodies", "Testing laboratories", "Quality assurance services", "Compliance solutions"],
    image: certificationImg
  }
];

const exhibitors = [
  { label: "AYUSH Manufacturers", icon: Factory },
  { label: "Herbal & Wellness Brands", icon: Leaf },
  { label: "Wellness Centers & Spas", icon: Heart },
  { label: "Organic Product Companies", icon: Sprout },
  { label: "Research & Academic Institutes", icon: GraduationCap },
  { label: "Exporters & Importers", icon: Globe },
  { label: "Essential Oil & Aroma Companies", icon: Droplet },
  { label: "Distributors & Wholesalers", icon: Package },
  { label: "Consultants & Therapists", icon: Users },
  { label: "NGOs & Wellness Associations", icon: Handshake }
];

const targetVisitors = [
  { label: "Distributors & Retailers", icon: Store },
  { label: "Health & Wellness Centers", icon: Heart },
  { label: "Doctors & Practitioners", icon: Stethoscope },
  { label: "Pharmacies & Drug Stores", icon: ShieldCheck },
  { label: "Ayurveda & Yoga Institutes", icon: GraduationCap },
  { label: "Nutritionists & Therapists", icon: Target },
  { label: "Sourcing Agents & Importers", icon: Handshake },
  { label: "Hospitals & Clinics", icon: Building2 },
  { label: "Wellness Influencers", icon: Users },
  { label: "Health Conscious Consumers", icon: Leaf }
];

const whyExhibit = [
  "Tap into the rapidly growing global AYUSH & wellness market",
  "Showcase authentic & innovative natural health solutions",
  "Connect with global buyers, retailers & wellness professionals",
  "Build trust through quality, certification & research",
  "Expand distribution networks & business collaborations",
  "Promote holistic health, sustainability & conscious living"
];

const exhibitorExamples = [
  { label: "AYUSH Manufacturers", icon: Factory },
  { label: "Herbal Brands", icon: Leaf },
  { label: "Wellness Companies", icon: Heart },
  { label: "Essential Oil Producers", icon: Droplet },
  { label: "Organic Companies", icon: Sprout },
  { label: "Spa & Therapy Providers", icon: Users },
  { label: "Research Institutes", icon: Beaker },
  { label: "Consultants & Advisors", icon: Briefcase },
  { label: "Certification & Testing Labs", icon: BadgeCheck }
];

export default function AyushDetailsShowcase() {
  return (
    <div id="ayush-ayurveda-herbal" className="w-full bg-white font-inter text-gray-900 border-t border-gray-300 scroll-mt-[100px]">

      {/* ---------------- 1. HEADER SECTION ---------------- */}
      <section className="relative w-full bg-white overflow-hidden flex items-center shadow-inner">
        {/* Background Image Area (Right 55%) */}
        <div
          className="absolute right-0 top-0 w-full lg:w-[72%] h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg.src})`,
            maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)"
          }}
        />

        <div className="w-full px-6 lg:px-14 pt-10 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Left Text Block */}
          <div className="lg:w-[60%] flex flex-col relative z-20">
            <h1 className="text-[18px] lg:text-[56px] font-semibold uppercase leading-[0.9] tracking-[-0.02em] font-poppins mb-3">
              <span className="text-[#113d20]">AYUSH, AYURVEDA </span><br />
              <span className="text-[#e44c20]">& HERBAL</span>
            </h1>

            {/* Subtitle with diamond lines */}
            <div className="flex items-center gap-4 my-2">
              {/* <div className="flex items-center">
                <div className="w-2 h-2 rotate-45 bg-[#3b8c2a]"></div>
                <div className="w-16 h-[2px] bg-[#3b8c2a]"></div>
              </div> */}
              <h3 className="text-[#3b8c2a] font-semibold text-[18px] lg:text-[21px] tracking-wide ">
                Ancient Wisdom. Modern Science. Holistic Wellness for All.
              </h3>
              {/* <div className="flex items-center">
                <div className="w-16 h-[2px] bg-[#3b8c2a]"></div>
                <div className="w-2 h-2 rotate-45 bg-[#3b8c2a]"></div>
              </div> */}
            </div>

            <p className="text-[14px] lg:text-[15.5px] font-medium text-gray-800 max-w-[600px] leading-relaxed mt-2 pb-10">
              Discover authentic AYUSH, Ayurvedic & herbal solutions that blend ancient wisdom with modern science for holistic wellness — trusted, certified, and beneficial for all.
            </p>
          </div>

          {/* Circular Badge - Positioned perfectly over the blend line */}
          <div className="hidden lg:flex absolute left-[52%] top-2/3 -translate-y-1/2 w-[160px] h-[160px] rounded-full border-[3px] border-[#113d20] bg-white items-center justify-center shadow-2xl z-30">
            <div className="w-[146px] h-[146px] rounded-full border-[1.5px] border-dashed border-[#113d20] flex flex-col items-center justify-center p-2 text-center relative">
              <span className="text-[#113d20] font-bold text-[14px] leading-[1.3]">
                HEAL<br />NATURALLY<br />LIVE<br />HOLISTICALLY
              </span>
              <div className="flex items-center gap-0.5 mt-1.5 justify-center">
                <Leaf className="text-[#113d20] w-5 h-5 -rotate-12" strokeWidth={2} />
                <Leaf className="text-[#113d20] w-5 h-5 -scale-x-100 rotate-12" strokeWidth={2} />
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ---------------- 2. MAIN BODY (GRID + SIDEBAR) ---------------- */}
      <div className="w-full">
        <div className=" w-full  p-2 lg:px-14 lg:py-6 lg:pb-0 flex flex-col lg:flex-row gap-2">

          {/* LEFT: PRODUCTS & SEGMENTS (70%) */}
          <div className="lg:w-[73%] flex flex-col">

            {/* Products Title */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex items-center ">
                <div className="w-1.5 h-1.5 rotate-45 bg-[#3b8c2a]"></div>
                <div className="w-24 h-[1px] bg-[#3b8c2a]"></div>
              </div>
              <h2 className="text-[17px] font-semibold text-[#3b8c2a] uppercase tracking-[0.08em]">
                PRODUCTS & SEGMENTS ON DISPLAY
              </h2>
              <div className="flex items-center">
                <div className="w-24 h-[1px] bg-[#3b8c2a]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#3b8c2a]"></div>
              </div>
            </div>

            {/* Grid of 10 Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-1.5">
              {productSegments.map((prod, idx) => (
                <div key={idx} className="flex flex-col border border-gray-200 rounded-[12px] overflow-hidden bg-white hover:shadow-xl hover:border-gray-300 transition-all">

                  {/* Card Image Area */}
                  <div className="relative w-full h-[140px] bg-gray-100">
                    <Image
                      src={prod.image || heroBg} // Needs actual category image later
                      alt={prod.title.replace('\n', ' ')}
                      fill
                      className="object-cover"
                    />

                  </div>

                  {/* Card Content */}
                  <div className="p-3 lg:px-3 lg:py-3 flex flex-col flex-grow">
                    <h4 className="text-[15px] font-semibold text-[#3b8c2a] leading-[1.3] mb-3 whitespace-pre-line min-h-[34px]">
                      {prod.title}
                    </h4>
                    <ul className="text-[13px] font-medium text-gray-800 flex flex-col gap-2 flex-grow">
                      {prod.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 leading-[1.3]">
                          <span className="w-1 h-1 rounded-full bg-gray-600 shrink-0 mt-[5px]"></span>
                          <span className="whitespace-pre-line">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>


          {/* RIGHT: SIDEBAR (30%) */}
          <div className="lg:w-[27%] flex flex-col gap-2">

            {/* Box 1: WHO CAN EXHIBIT? */}
            <div className="border border-gray-200 rounded-[16px] bg-white p-2 shadow-sm">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Users className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  WHO CAN EXHIBIT?
                </h3>
              </div>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-2 mt-1">
                {exhibitors.map((exh, i) => (
                  <li key={i} className="flex items-center gap-2 group cursor-default">
                    <div className="w-6 h-6 rounded-full bg-[#f0f8ec] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] transition-colors shadow-sm">
                      <exh.icon className="w-3.5 h-3.5 text-[#3b8c2a] group-hover:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <span className="text-[12px] font-semibold text-gray-800 leading-tight group-hover:text-[#113d20] transition-colors">{exh.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: WHY EXHIBIT IN THIS CATEGORY? */}
            <div className="border border-gray-200 rounded-[16px] bg-white p-2 shadow-sm">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Target className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  WHY EXHIBIT IN THIS CATEGORY?
                </h3>
              </div>
              <ul className="flex flex-col gap-2 mt-1">
                {whyExhibit.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2.5 group cursor-default">
                    <div className="w-5 h-5 rounded-full bg-[#f0f8ec] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#3b8c2a] transition-colors shadow-sm">
                      <Check className="w-3.5 h-3.5 text-[#3b8c2a] group-hover:text-white transition-colors" strokeWidth={3} />
                    </div>
                    <span className="text-[13px] font-semibold text-gray-800 leading-[1.4] mt-0.5 group-hover:text-[#113d20] transition-colors">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: TARGET VISITORS */}
            <div className="border border-gray-200 rounded-[16px] bg-white p-2 shadow-sm">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Users className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  TARGET VISITORS
                </h3>
              </div>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-2 gap-x-2 mt-1">
                {targetVisitors.map((vis, i) => (
                  <li key={i} className="flex items-center gap-2 group cursor-default">
                    <div className="w-6 h-6 rounded-full bg-[#f0f8ec] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] transition-colors shadow-sm">
                      <vis.icon className="w-3.5 h-3.5 text-[#3b8c2a] group-hover:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <span className="text-[12px] font-semibold text-gray-800 leading-tight group-hover:text-[#113d20] transition-colors">{vis.label}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>


      {/* ---------------- 3. BOTTOM FOOTER SECTION ---------------- */}
      <div className="w-full bg-[#fdfcf9]">
        <div className="w-full  px-6 lg:px-14 py-4">

          <div className="flex flex-col xl:flex-row items-stretch justify-between gap-4 mb-4">

            {/* Box 1: Examples of Exhibitors */}
            <div className="border border-gray-200 rounded-[12px] bg-white px-4 py-2 flex-[1.2] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-[#3b8c2a]" />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase">
                  EXAMPLES OF EXHIBITORS
                </h3>
              </div>
              <div className="flex items-start justify-between w-full">
                {exhibitorExamples.map((ex, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center text-center gap-2 px-1 group cursor-pointer">
                      <div className="w-11 h-11 rounded-full border border-gray-100 bg-[#f8fcf5] group-hover:border-[#3b8c2a] group-hover:bg-[#f0f8ec] transition-all flex items-center justify-center shadow-sm">
                        <ex.icon className="w-[22px] h-[22px] text-[#113d20] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                      </div>
                      <span className="text-[9.5px] font-bold text-gray-700 leading-[1.2] max-w-[70px] group-hover:text-[#113d20] transition-colors">
                        {ex.label}
                      </span>
                    </div>
                    {i < exhibitorExamples.length - 1 && (
                      <div className="w-[1px] h-10 bg-gray-200 mt-2"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Box 2: Middle Banner */}
            <div className="rounded-[12px] bg-[#0c2f17] px-4 py-2 flex-[1.1] relative overflow-hidden flex flex-col justify-center shadow-md min-h-[140px]">
              {/* Background Image on Right */}
              <div
                className="absolute right-0 top-0 h-full w-[50%] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroBg.src})`,
                  maskImage: "linear-gradient(to right, transparent, black 65%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 65%)"
                }}
              ></div>

              <div className="relative z-10 w-[80%]">
                <h3 className="text-white text-[13px] font-semibold mb-3 leading-[1.4] uppercase">
                  BE PART OF INDIA'S PREMIER PLATFORM FOR ORGANIC, NATURAL & WELLNESS
                </h3>

                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-[11px]">Showcase. Connect. Grow.</span>
                    <a href="/registration/book-a-stand" target="_blank" rel="noopener noreferrer" className="bg-[#ff4500] hover:bg-[#e63e00] text-white text-[12px] font-bold px-4 py-1.5 rounded flex items-center justify-center gap-2 uppercase w-max transition-colors">
                      BOOK A STALL NOW <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* <div className="w-[1px] h-14 bg-white/20 mx-2"></div>

                  <div className="flex flex-col gap-2 justify-center">
                    <span className="text-white text-[11px] mb-0.5">Or Contact Us</span>
                    <div className="flex items-center gap-1.5 text-white/90 text-[10.5px]">
                      <Phone className="w-3.5 h-3.5" /> 9354811889, 9205645544
                    </div>
                    <div className="flex items-center gap-1.5 text-white/90 text-[10.5px]">
                      <Globe className="w-3.5 h-3.5" /> www.bharatorganicexpo.com
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Box 3: Need Help */}
            <div className="border border-gray-200 rounded-[12px] bg-white px-4 py-2 w-full xl:w-[220px] shrink-0 flex flex-col justify-between shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <Headphones className="w-6 h-6 text-[#3b8c2a]" strokeWidth={2} />
                  <div className="text-[14px] font-semibold text-[#3b8c2a]">NEED HELP?</div>
                </div>
                <div className="text-[11px] font-medium text-gray-600 leading-[1.4]">
                  Our team is here to help you find the right category for your business.
                </div>
              </div>
              <a href="/contact" target="_blank" rel="noopener noreferrer" className="text-[#ff4500] text-[12px] font-bold uppercase tracking-wide flex items-center gap-1 mt-4 hover:underline">
                CONTACT US <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </a>
            </div>

          </div>

          {/* Bottom Trust Bar */}
          <div className="pt-2 border-t border-gray-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 overflow-hidden">
            {[
              { icon: Globe, title: "Global Exposure", desc: "Connect with international\nbuyers and partners." },
              { icon: Users, title: "Right Audience", desc: "Meet verified buyers,\ndistributors & retailers." },
              { icon: TrendingUp, title: "Business Growth", desc: "Generate leads and\nexpand your market." },
              { icon: Megaphone, title: "Brand Visibility", desc: "Increase visibility and\nstrengthen your brand." },
              { icon: Leaf, title: "Sustainable Future", desc: "Be a part of the movement\nfor a better tomorrow." },
            ].map((trust, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="w-12 h-12 rounded-full border border-gray-200 bg-[#f8fcf5] flex items-center justify-center shrink-0">
                    <trust.icon className="w-[24px] h-[24px] text-[#3b8c2a]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-semibold text-[#3b8c2a] mb-0.5">{trust.title}</span>
                    <span className="text-[12px] font-medium text-gray-600 leading-[1.3] whitespace-pre-line">{trust.desc}</span>
                  </div>
                </div>
                {i < 4 && (
                  <div className="hidden xl:block w-[1px] h-10 bg-gray-200 shrink-0 mx-1"></div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

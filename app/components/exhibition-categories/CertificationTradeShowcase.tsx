import React from "react";
import Image from "next/image";
import { Check, ArrowRight, ShieldCheck, Users, Globe, Handshake, Target, Heart, Leaf, Sprout, Store, Factory, Package, Headphones, Truck, Briefcase, TestTube, Microscope, Droplet, Sparkles, Box, Sun, Droplets, Trash2, Lightbulb, Cpu, Building2, TrendingUp, Tractor, Wifi, Plane, Wind, Award, Network, FileText, BarChart, Scale, ShoppingCart, Landmark, GraduationCap, Monitor } from "lucide-react";
import heroBg from "@/app/assets/exhibition-categories/certification/certification-bg.png";
import certificationImg from "@/app/assets/exhibition-categories/certification/certification.png";
import exportImg from "@/app/assets/exhibition-categories/certification/export.png";
import globalImg from "@/app/assets/exhibition-categories/certification/global.png";
import marketImg from "@/app/assets/exhibition-categories/certification/market.png";
import legalImg from "@/app/assets/exhibition-categories/certification/legal.png";
import digitalImg from "@/app/assets/exhibition-categories/certification/digital.png";
import logisticsImg from "@/app/assets/exhibition-categories/certification/logistics.png";
import financeImg from "@/app/assets/exhibition-categories/certification/finance.png";
import sustainabilityImg from "@/app/assets/exhibition-categories/certification/sustainability.png";
import trainingImg from "@/app/assets/exhibition-categories/certification/training.png";

const productSegments = [
  {
    title: "Certification &\nAccreditation Services",
    items: ["Organic Certifications", "Global Standard Certifications", "ISO, HACCP, GMP & More", "Compliance & Audit Services"],
    image: certificationImg
  },
  {
    title: "Export-Import &\nTrade Facilitation",
    items: ["Export Promotion Councils", "Trade Facilitation Services", "Documentation & Clearance", "Market Entry Support"],
    image: exportImg
  },
  {
    title: "Global Business\nDevelopment",
    items: ["International Business Partners", "Country Pavilions & Delegations", "Joint Ventures & Collaborations", "Investment Opportunities"],
    image: globalImg
  },
  {
    title: "Market Research &\nConsultancy",
    items: ["Market Intelligence & Reports", "Feasibility Studies", "Business Strategy Consulting", "Regulatory Advisory"],
    image: marketImg
  },
  {
    title: "Legal, IP &\nBusiness Services",
    items: ["Legal & Regulatory Services", "Intellectual Property Rights", "Contract Drafting & Vetting", "Dispute Resolution"],
    image: legalImg
  },
  {
    title: "Digital Trade &\nE-Commerce Solutions",
    items: ["B2B Platforms & Marketplaces", "Digital Payment Solutions", "Supply Chain Transparency", "Trade Tech Solutions"],
    image: digitalImg
  },
  {
    title: "Logistics & Supply\nChain Services",
    items: ["Freight Forwarders & Logistics", "Warehousing & Cold Chain", "Packaging & Labeling", "Last Mile Solutions"],
    image: logisticsImg
  },
  {
    title: "Finance & Banking\nSolutions",
    items: ["Trade Finance", "Export Credit & Insurance", "Banking & Payment Solutions", "Investment & Funding"],
    image: financeImg
  },
  {
    title: "Sustainability &\nESG Consulting",
    items: ["ESG Strategy & Reporting", "Carbon Footprint Assessment", "Sustainability Certifications", "Green Financing Support"],
    image: sustainabilityImg
  },
  {
    title: "Training, Education &\nCapacity Building",
    items: ["Professional Training Programs", "Skill Development", "Workshops & Seminars", "Capacity Building Initiatives"],
    image: trainingImg
  }
];

const exhibitors = [
  { label: "Certification Bodies", icon: Award },
  { label: "Financial & Banking Institutions", icon: Landmark },
  { label: "Exporters & Importers", icon: Globe },
  { label: "Market Research Companies", icon: BarChart },
  { label: "Trade Promotion Councils", icon: Network },
  { label: "E-commerce & IT Solutions Providers", icon: Monitor },
  { label: "Consultants & Legal Firms", icon: Scale },
  { label: "Chambers of Commerce & Associations", icon: Building2 },
  { label: "Logistics & Supply Chain Companies", icon: Truck },
  { label: "Startups & Innovators", icon: Lightbulb }
];

const whyExhibit = [
  "Access international markets & global trade opportunities",
  "Build credibility through certification & compliance solutions",
  "Connect with global buyers, investors & partners",
  "Expand your business network across industries",
  "Stay updated on policies, regulations & market trends",
  "Drive growth through knowledge, innovation & collaboration"
];

const targetVisitors = [
  { label: "Exporters & Importers", icon: Globe },
  { label: "Logistics & Supply Chain Professionals", icon: Truck },
  { label: "Trade Delegations", icon: Users },
  { label: "Bankers & Financial Institutions", icon: Landmark },
  { label: "Government Officials", icon: ShieldCheck },
  { label: "Legal & IP Professionals", icon: Scale },
  { label: "Business Consultants", icon: Briefcase },
  { label: "Industry Associations & Chambers", icon: Building2 },
  { label: "Investors & Venture Capitalists", icon: TrendingUp },
  { label: "Entrepreneurs & Startups", icon: Lightbulb }
];

const exhibitorExamples = [
  { label: "Certification\nBodies", icon: Award },
  { label: "Export-Import\nCompanies", icon: Globe },
  { label: "Trade Promotion\nCouncils", icon: Network },
  { label: "Logistics & Freight\nForwarders", icon: Truck },
  { label: "Legal & IP\nFirms", icon: Scale },
  { label: "Financial\nInstitutions", icon: Landmark },
  { label: "Market Research\nCompanies", icon: BarChart },
  { label: "E-commerce &\nIT Solutions", icon: Monitor },
  { label: "Industry Associations\n& Chambers", icon: Building2 }
];

export default function CertificationTradeShowcase() {
  return (
    <div id="certification-export-trade" className="w-full bg-white font-inter text-gray-900 border-t border-gray-300 scroll-mt-[100px]">

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
              <span className="text-[#113d20]">TRADE, CERTIFICATION &</span><br />
              <span className="text-[#e44c20]">GLOBAL BUSINESS</span>
            </h1>

            {/* Subtitle with diamond lines */}
            <div className="flex items-center gap-4 my-2">
              <h3 className="text-[#3b8c2a] font-semibold text-[18px] lg:text-[21px] tracking-wide ">
                Connect. Comply. Collaborate. Grow Globally.
              </h3>
            </div>

            <p className="text-[14px] lg:text-[15.5px] font-medium text-gray-800 max-w-[600px] leading-relaxed mt-2 pb-10">
              Your gateway to global markets, certification solutions, trade services and business partnerships that empower your brand to grow beyond borders with trust and transparency.
            </p>
          </div>

          {/* Circular Badge - Positioned perfectly over the blend line */}
          <div className="hidden lg:flex absolute left-[52%] top-2/3 -translate-y-1/2 w-[160px] h-[160px] rounded-full border-[3px] border-[#113d20] bg-white items-center justify-center shadow-2xl z-30">
            <div className="w-[146px] h-[146px] rounded-full border-[1.5px] border-dashed border-[#113d20] flex flex-col items-center justify-center p-2 text-center relative">
              <h2 className="text-[#113d20] font-semibold text-[15px] leading-[1.4]">
                TRUSTED<br />TODAY<br />RECOGNISED<br />GLOBALLY<br />SUCCESS<br />TOMORROW
              </h2>
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
                PRODUCTS & SOLUTIONS ON DISPLAY
              </h2>
              <div className="flex items-center">
                <div className="w-24 h-[1px] bg-[#3b8c2a]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#3b8c2a]"></div>
              </div>
            </div>

            {/* Grid of 10 Cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-3 lg:gap-1.5">
              {productSegments.map((prod, idx) => (
                <div key={idx} className="flex flex-col border border-gray-200 rounded-[12px] overflow-hidden bg-white hover:shadow-xl hover:border-gray-300 transition-all">

                  {/* Card Image Area */}
                  <div className="relative w-full h-[120px] bg-gray-100">
                    <Image
                      src={prod.image}
                      alt={prod.title.replace('\n', ' ')}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-3 flex flex-col flex-grow">
                    <h4 className="text-[16px] font-semibold text-[#3b8c2a] leading-[1.3] mb-3 whitespace-pre-line min-h-[34px]">
                      {prod.title}
                    </h4>
                    <ul className="text-[14px] font-medium text-gray-800 flex flex-col gap-1.5 flex-grow">
                      {prod.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-[1.5]">
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
            <div className="border border-gray-200 rounded-[16px] bg-white p-2 shadow-sm flex flex-col flex-1 justify-center">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Users className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  WHO CAN EXHIBIT?
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-1 gap-x-1 mt-1">
                {exhibitors.map((exh, i) => (
                  <li key={i} className="flex items-center gap-1.5 group cursor-default">
                    <div className="w-5 h-5 rounded-full bg-[#f0f8ec] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] transition-colors shadow-sm">
                      <exh.icon className="w-3 h-3 text-[#3b8c2a] group-hover:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-800 leading-tight group-hover:text-[#113d20] transition-colors">{exh.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: WHY EXHIBIT IN THIS CATEGORY? */}
            <div className="border border-gray-200 rounded-[16px] bg-white p-2 shadow-sm flex flex-col flex-1 justify-center">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Target className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  WHY EXHIBIT IN THIS CATEGORY?
                </h3>
              </div>
              <ul className="flex flex-col gap-1.5">
                {whyExhibit.map((reason, i) => (
                  <li key={i} className="flex items-start gap-2 group cursor-default">
                    <div className="w-4 h-4 rounded-full bg-[#f0f8ec] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#3b8c2a] transition-colors shadow-sm">
                      <Check className="w-3 h-3 text-[#3b8c2a] group-hover:text-white transition-colors" strokeWidth={3} />
                    </div>
                    <span className="text-[11.5px] font-semibold text-gray-800 leading-[1.2] mt-0.5 group-hover:text-[#113d20] transition-colors">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3: TARGET VISITORS */}
            <div className="border border-gray-200 rounded-[16px] bg-white p-2 shadow-sm flex flex-col flex-1 justify-center">
              <div className="flex items-center gap-3 mb-1 pb-2 border-b border-gray-100">
                <Users className="w-5 h-5 text-[#3b8c2a]" strokeWidth={2.5} />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase tracking-wide">
                  TARGET VISITORS
                </h3>
              </div>
              <ul className="grid grid-cols-2 gap-y-1 gap-x-1 mt-1">
                {targetVisitors.map((vis, i) => (
                  <li key={i} className="flex items-center gap-1.5 group cursor-default">
                    <div className="w-5 h-5 rounded-full bg-[#f0f8ec] flex items-center justify-center shrink-0 group-hover:bg-[#3b8c2a] transition-colors shadow-sm">
                      <vis.icon className="w-3 h-3 text-[#3b8c2a] group-hover:text-white transition-colors" strokeWidth={2.5} />
                    </div>
                    <span className="text-[11px] font-semibold text-gray-800 leading-tight group-hover:text-[#113d20] transition-colors">{vis.label}</span>
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
            <div className="border border-gray-200 rounded-[12px] bg-white px-3 py-2 flex-[1.4] flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5 text-[#3b8c2a]" />
                <h3 className="text-[14px] font-semibold text-[#3b8c2a] uppercase">
                  EXAMPLES OF EXHIBITORS
                </h3>
              </div>
              <div className="flex items-start justify-between w-full">
                {exhibitorExamples.map((ex, i) => (
                  <React.Fragment key={i}>
                    <div className="flex flex-col items-center text-center gap-1.5 px-0.5 group cursor-pointer">
                      <div className="w-10 h-10 rounded-full border border-gray-100 bg-[#f8fcf5] group-hover:border-[#3b8c2a] group-hover:bg-[#f0f8ec] transition-all flex items-center justify-center shadow-sm">
                        <ex.icon className="w-[18px] h-[18px] text-[#113d20] group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                      </div>
                      <span className="text-[9px] font-bold text-gray-700 leading-[1.15] max-w-[60px] group-hover:text-[#113d20] transition-colors whitespace-pre-line">
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
            <div className="rounded-[12px] bg-[#0c2f17] px-4 py-2 flex-[1] relative overflow-hidden flex flex-col justify-center shadow-md min-h-[140px]">
              {/* Background Image on Right */}
              <div
                className="absolute right-0 top-0 h-full w-[50%] bg-cover bg-center"
                style={{
                  backgroundImage: `url(${heroBg.src})`,
                  maskImage: "linear-gradient(to right, transparent, black 65%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 65%)"
                }}
              ></div>

              <div className="relative z-10 w-[85%]">
                <h3 className="text-white text-[13px] font-semibold mb-3 leading-[1.4] uppercase">
                  BE PART OF INDIA'S PREMIER PLATFORM FOR GLOBAL TRADE & BUSINESS GROWTH
                </h3>

                <div className="flex items-center gap-2">
                  <div className="flex flex-col gap-2">
                    <span className="text-white text-[11px]">Showcase. Connect. Collaborate.</span>
                    <a href="/registration/book-a-stand" target="_blank" rel="noopener noreferrer" className="bg-[#ff4500] hover:bg-[#e63e00] text-white text-[12px] font-bold px-4 py-1.5 rounded flex items-center justify-center gap-2 uppercase w-max transition-colors">
                      BOOK A STALL NOW <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Need Help */}
            <div className="border border-gray-200 rounded-[12px] bg-white px-4 py-2 w-full xl:w-[200px] shrink-0 flex flex-col justify-between shadow-sm">
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
              { icon: ShieldCheck, title: "Certified & Trusted Platform", desc: "" },
              { icon: Users, title: "High Quality Buyers", desc: "& Decision Makers" },
              { icon: Globe, title: "Global Market Access", desc: "" },
              { icon: Handshake, title: "Strong Business Network", desc: "" },
              { icon: TrendingUp, title: "Growth & Collaboration", desc: "" },
              { icon: Leaf, title: "Sustainable Future", desc: "Together" },
            ].map((trust, i) => (
              <React.Fragment key={i}>
                <div className="flex items-center gap-2.5 w-full md:w-auto">
                  <div className="w-10 h-10 rounded-full border border-gray-200 bg-[#f8fcf5] flex items-center justify-center shrink-0">
                    <trust.icon className="w-[20px] h-[20px] text-[#3b8c2a]" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-semibold text-[#3b8c2a] mb-0.5">{trust.title}</span>
                    {trust.desc && <span className="text-[10.5px] font-medium text-gray-600 leading-[1.3] whitespace-pre-line">{trust.desc}</span>}
                  </div>
                </div>
                {i < 5 && (
                  <div className="hidden xl:block w-[1px] h-10 bg-gray-200 shrink-0 mx-0.5"></div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}

"use client";

import {
  Calendar,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "../../shared/Reveal";

function SidebarCheck({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-[13px] text-emerald-50/90">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime-400 transition-transform duration-200 group-hover:scale-110" />
      <span>{text}</span>
    </li>
  );
}

export default function NominationSidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24 self-start">
      <Reveal delay={100} className="group rounded-2xl bg-gradient-to-br from-emerald-950 to-emerald-900 p-5 text-white shadow-md transition-transform duration-300 hover:-translate-y-1">
        <div className="mb-2 flex items-center gap-2">
          <Trophy className="h-4 w-4 text-amber-400" />
          <h3 className="text-[13px] md:text-[14px] font-bold tracking-wide">
            WHY PARTICIPATE?
          </h3>
        </div>
        <ul className="space-y-1.5">
          <SidebarCheck text="National & Global Recognition" />
          <SidebarCheck text="Enhance Brand Value & Credibility" />
          <SidebarCheck text="Networking with Industry Leaders" />
          <SidebarCheck text="Business Growth Opportunities" />
          <SidebarCheck text="Showcase Innovation & Impact" />
        </ul>
      </Reveal>

      <Reveal delay={150} className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
        <div className="mb-2 flex items-center gap-2 text-emerald-950">
          <Calendar className="h-4 w-4 text-amber-500" />
          <h3 className="text-[13px] md:text-[14px] font-bold tracking-wide">
            IMPORTANT DATES
          </h3>
        </div>
        <ul className="space-y-1.5 text-[12px] text-emerald-950/80">
          <li className="flex justify-between border-b border-dashed border-emerald-900/10 pb-1">
            <span>Nominations Open</span>
            <span className="font-semibold">1 July 2026</span>
          </li>
          <li className="flex justify-between border-b border-dashed border-emerald-900/10 pb-1">
            <span>Last Date for Nominations</span>
            <span className="font-semibold">31 December 2026</span>
          </li>
          <li className="flex justify-between border-b border-dashed border-emerald-900/10 pb-1">
            <span>Shortlisting</span>
            <span className="font-semibold">January 2027</span>
          </li>
          <li className="flex justify-between pb-1">
            <span>Awards Ceremony</span>
            <span className="font-semibold">19 – 21 February 2027</span>
          </li>
        </ul>
        <p className="mt-1 text-[10px] italic text-emerald-950/40">
          *Dates are subject to change.
        </p>
      </Reveal>

      <Reveal delay={200} className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
        <div className="mb-2 flex items-center gap-2 text-emerald-950">
          <Users className="h-4 w-4 text-amber-500" />
          <h3 className="text-[13px] md:text-[14px] font-bold tracking-wide">
            WHO CAN APPLY?
          </h3>
        </div>
        <ul className="space-y-1.5 text-[12px] text-emerald-950/80">
          {[
            "Companies & Brands",
            "Startups & Entrepreneurs",
            "Farmers & Producer Groups",
            "Institutions, Organisations & NGOs",
            "Individuals & Professionals",
          ].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-lime-600" />
              {t}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-[11px] text-emerald-950/60">
          Open to Indian & International participants.
        </p>
      </Reveal>

      <Reveal delay={250} className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
        <div className="mb-2 flex items-center gap-2 text-emerald-950">
          <Phone className="h-4 w-4 text-amber-500" />
          <h3 className="text-[13px] md:text-[14px] font-bold tracking-wide">NEED HELP?</h3>
        </div>
        <p className="mb-2 text-[12px] text-emerald-950/70">
          For any assistance, feel free to contact our awards team.
        </p>
        <div className="space-y-1.5 text-[12px] text-emerald-950/80">
          <a href="tel:+919654900525" className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-600">
            <Phone className="h-3.5 w-3.5 text-emerald-700" />
            +91 96549 00525
          </a>
          <a href="mailto:awards@bharatorganicexpo.com" className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-600">
            <Mail className="h-3.5 w-3.5 text-emerald-700" />
            awards@bharatorganicexpo.com
          </a>
          <a href="https://www.bharatorganicexpo.com" className="flex items-center gap-2 transition-colors duration-200 hover:text-amber-600">
            <Globe className="h-3.5 w-3.5 text-emerald-700" />
            www.bharatorganicexpo.com
          </a>
        </div>
      </Reveal>
    </aside>
  );
}
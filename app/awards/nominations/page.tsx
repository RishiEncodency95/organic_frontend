"use client";

import { useState } from "react";
import AwardProcess from "../../components/awards/nominations/AwardProcess";
import BottomStrip from "../../components/awards/nominations/BottomStrip";
import NominationForm from "../../components/awards/nominations/NominationForm";
import NominationHero from "../../components/awards/nominations/NominationHero";
import NominationSidebar from "../../components/awards/nominations/NominationSidebar";
import NominationSuccess from "../../components/awards/nominations/NominationSuccess";

export default function NominationsPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <NominationSuccess onReset={() => setSubmitted(false)} />;
  }

  return (
    <div className="w-full min-h-screen overflow-x-clip bg-[#f7f5ec] font-sans">
      <NominationHero />
      <AwardProcess />
      <section
        id="nomination-form"
        className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4 grid grid-cols-1 gap-4 lg:gap-4 lg:grid-cols-[1fr_380px]"
      >
        <NominationForm onSubmitted={() => setSubmitted(true)} />
        <NominationSidebar />
      </section>
      <BottomStrip />
    </div>
  );
}
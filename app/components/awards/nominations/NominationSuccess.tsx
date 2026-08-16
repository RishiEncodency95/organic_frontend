"use client";

import { CheckCircle2 } from "lucide-react";
import { Reveal } from "../../shared/Reveal";

export default function NominationSuccess({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <div className="w-full bg-[#f7f5ec] font-sans min-h-screen flex items-center justify-center px-5 py-20">
      <Reveal className="max-w-lg w-full rounded-2xl border border-emerald-900/10 bg-white p-8 text-center shadow-lg">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-lime-100">
          <CheckCircle2 className="h-8 w-8 text-lime-600" />
        </div>
        <h2 className="mt-4 text-xl font-extrabold text-emerald-950">
          NOMINATION SUBMITTED!
        </h2>
        <p className="mt-2 text-sm text-emerald-950/70 leading-relaxed">
          Thank you for submitting your nomination for the{" "}
          <strong>Bharat Organic Excellence Awards 2027</strong>. Our jury team
          will review your application and contact you shortly.
        </p>
        <button
          onClick={onReset}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-950 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-900 active:scale-95"
        >
          Submit Another Nomination
        </button>
      </Reveal>
    </div>
  );
}
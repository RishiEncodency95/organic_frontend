"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

/** Body of a careers application step page (the site's navbar and footer stay around it) */
export function CareerPage({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-[#f4f7f1] px-3 py-5 sm:px-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </main>
  );
}

/**
 * A step's screen is laid out on a fixed design canvas (e.g. 1500 × 900). This scales the
 * canvas to the width of the page body, keeping its proportions — the same screen the
 * popup used to show, now inside the page.
 */
export function CareerCanvas({
  width,
  height,
  children,
  overlay,
}: {
  width: number;
  height: number;
  children: React.ReactNode;
  /** Rendered over the scaled canvas, unscaled (e.g. a progress screen) */
  overlay?: React.ReactNode;
}) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number | null>(null);

  useEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;
    const measure = () => setScale(frame.clientWidth / width);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div
      ref={frameRef}
      className="relative w-full overflow-hidden rounded-[18px] border border-[#e1e8de] bg-[#fbfcf9] shadow-[0_12px_40px_rgba(16,48,30,0.10)]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute left-0 top-0"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(${scale ?? 1})`,
          transformOrigin: "top left",
          // Hidden for the one frame before the width is measured, so the unscaled canvas never flashes
          visibility: scale === null ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
      {overlay}
    </div>
  );
}

/** Shown when a step page is opened without an application in progress (new tab, old link…) */
export function NoApplicationInProgress({ message }: { message?: string }) {
  return (
    <div className="mx-auto flex max-w-[620px] flex-col items-center rounded-[18px] border border-[#e1e8de] bg-white px-6 py-12 text-center shadow-[0_12px_40px_rgba(16,48,30,0.08)]">
      <span className="grid h-[68px] w-[68px] place-items-center rounded-full bg-[#eef7ef] text-[#0b6b3e]">
        <BriefcaseBusiness className="h-[32px] w-[32px]" strokeWidth={1.8} />
      </span>
      <h1 className="mt-5 text-[24px] font-semibold text-[#10243f]">No application in progress</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-[#475569]">
        {message || "Choose an open position and upload your CV to start your application."}
      </p>
      <Link
        href="/careers#current-openings"
        className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#08743e] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#065f33]"
      >
        View Current Openings <ArrowRight className="h-[18px] w-[18px]" />
      </Link>
    </div>
  );
}

/** Placeholder while the step reads the application from this tab's storage */
export function CareerStepLoading() {
  return <div className="mx-auto h-[420px] w-full animate-pulse rounded-[18px] bg-[#e7ede4]" aria-busy="true" />;
}

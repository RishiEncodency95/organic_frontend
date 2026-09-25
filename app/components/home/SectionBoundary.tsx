"use client";

import React from "react";

// Catches a crash (or a stuck/rejected lazy-load) in a single home-page section so it
// can't take the rest of the page down with it. Renders nothing on error — the section
// simply disappears instead of freezing everything after it in a permanent spinner.
class SectionErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Home section failed to render:", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

const defaultFallback = (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-4 border-[#3b8c2a] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function SectionBoundary({
  children,
  fallback = defaultFallback,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  return (
    <SectionErrorBoundary>
      <React.Suspense fallback={fallback}>{children}</React.Suspense>
    </SectionErrorBoundary>
  );
}

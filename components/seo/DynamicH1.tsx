import React from "react";

interface DynamicH1Props {
  h1Text?: string;
  fallback: string;
}

export default function DynamicH1({ h1Text, fallback }: DynamicH1Props) {
  const text = h1Text || fallback;
  return (
    <h1 className="sr-only">
      {text}
    </h1>
  );
}

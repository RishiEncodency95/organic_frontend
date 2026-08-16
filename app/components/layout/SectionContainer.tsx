"use client";
import React from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = "", style }) => {
  return (
    <div className={`max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 ${className}`} style={style}>
      {children}
    </div>
  );
};

export default SectionContainer;

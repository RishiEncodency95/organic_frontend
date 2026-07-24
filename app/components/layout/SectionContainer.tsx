import { ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * SectionContainer provides a standardized horizontal layout for all website sections.
 * It ensures that content aligns perfectly with the site logo and navigation,
 * maintaining a consistent container width and padding across all screen sizes.
 */
const SectionContainer = ({ children, className }: SectionContainerProps) => {
  return (
    <div className={cn("container mx-auto px-6 max-w-[1400px]", className)}>
      {children}
    </div>
  );
};

export default SectionContainer;

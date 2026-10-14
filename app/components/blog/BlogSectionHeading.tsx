"use client";

import type { ComponentProps } from "react";
import SectionHeading from "../shared/SectionHeading";

// Blog section titles: no green accent bar, and title + "View all" kept on one line
export default function BlogSectionHeading(props: ComponentProps<typeof SectionHeading>) {
  return <SectionHeading bar={false} singleLine {...props} />;
}

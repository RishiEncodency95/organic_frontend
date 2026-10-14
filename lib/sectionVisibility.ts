import { getSectionData } from "./serverData";
import { makeSectionGate, type SectionGate } from "./sectionGate";

export { makeSectionGate, type SectionGate };

// Admin → Pages & CMS → <page> → Page Sections → Enabled/Disabled switch.
// The admin saves each page's sections (with `enabled`) under settings[<pageKey>].sections;
// a section switched off there is not rendered on the website. Sections the admin never
// saved, or any we can't read (backend down), stay visible.
type SettingsSection = { key?: string; enabled?: boolean };
type SettingsData = Record<string, { sections?: SettingsSection[] } | undefined>;

/** Server-side: section keys switched off in admin for this page (settings key, e.g. "aboutPage"). */
export async function getDisabledSectionKeys(pageKey: string): Promise<string[]> {
  // Same cached request the root layout already makes, so this adds no extra fetch.
  const settings = await getSectionData<SettingsData>("/settings");
  const sections = settings?.[pageKey]?.sections;
  if (!Array.isArray(sections)) return [];
  return sections
    .filter((section) => section?.enabled === false && typeof section.key === "string")
    .map((section) => section.key as string);
}

/** Server-side: `const show = await getSectionGate("aboutPage"); {show("about-hero") && <AboutHero />}` */
export async function getSectionGate(pageKey: string): Promise<SectionGate> {
  return makeSectionGate(await getDisabledSectionKeys(pageKey));
}

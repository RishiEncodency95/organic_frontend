// Old address of the Printing & Branding Partner page: serves the real page (same content, SEO and visibility)
import PrintingBrandingPartnerPage, { generateMetadata } from "@/app/partnership/printing-branding-partner/page";

// Route config is read at build time, so it is written here, not re-exported (same as the real page)
export const revalidate = 60;

export { generateMetadata };
export default PrintingBrandingPartnerPage;

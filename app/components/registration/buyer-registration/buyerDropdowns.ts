import { labelsOf, toOptions, type DropdownLists, type DropdownOption } from "@/lib/dropdowns";

/**
 * Option lists of the buyer registration forms (domestic and international share them).
 * They are admin-managed in the Dropdown Manager; the values here are the fallback,
 * copied from the forms' original mockConfig and <option> lists.
 */
export const BUYER_DROPDOWNS = {
  "buyer-product-category": toOptions(["Organic Foods & Beverages", "Natural Health Products", "Ayurveda & Herbal", "Cosmetics & Personal Care"]),
  "buyer-secondary-category": toOptions(["Ayurveda", "Organic", "Wellness", "Pharma", "Cosmetics"]),
  "buyer-business-model": toOptions(["B2B", "D2C", "Retail", "Wholesale"]),
  "buyer-value-range": toOptions(["Below 10 Lakhs", "10-50 Lakhs", "50 Lakhs - 1 Crore", "1-5 Crore", "5+ Crore"]),
  "buyer-purchase-frequency": toOptions(["Weekly", "Monthly", "Quarterly", "Annually"]),
  "buyer-purchase-timeline": toOptions(["Immediate", "1–3 Months", "3–6 Months", "Exploring"]),
  "buyer-decision-role": toOptions(["Final Decision Maker", "Influencer", "Research Only"]),
  "buyer-region": toOptions(["North India", "South India", "East India", "West India", "Pan India", "Global"]),
  "buyer-supplier-type": toOptions(["Manufacturer", "Exporter", "MSME", "Startup", "Wholesaler"]),
  "buyer-company-size": toOptions(["Micro", "Small", "Medium", "Large"]),
  "buyer-certification": toOptions(["ISO", "GMP", "FDA", "AYUSH", "Organic", "Others"]),
  "buyer-meeting-category": toOptions(["Health Supplements", "Organic Food", "Herbal Cosmetics", "Ayurvedic Medicines"]),
  "buyer-exhibitor-type": toOptions(["Manufacturers", "Distributors", "Service Providers"]),
  "buyer-meeting-objective": toOptions([
    "Product Sourcing",
    "Partnership / Collaboration",
    "Distribution Opportunities",
    "Private label / OEM",
    "Investment / Business Expansion",
  ]),
  "buyer-preferred-business-type": toOptions(["Bulk Purchase", "Private label", "Franchise", "Exclusive Distribution"]),
  "buyer-meeting-day": toOptions(["Day 1", "Day 2", "Day 3"]),
  "buyer-business-role": [
    { label: "Distributor / Wholesaler", value: "Distributor" },
    { label: "Retailer (Single/Multi Store)", value: "Retailer" },
    { label: "Manufacturer / OEM", value: "Manufacturer" },
    { label: "Importer / Exporter", value: "Importer" },
    { label: "Consultant / Professional", value: "Consultant" },
  ],
  "buyer-business-type": toOptions(["Proprietorship", "Partnership", "Pvt Ltd", "LLP"]),
  "buyer-time-slot": toOptions(["Morning (10AM - 1PM)", "Afternoon (2PM - 4PM)"]),
  "buyer-meeting-count": toOptions(["3-5 Meetings", "5-10 Meetings"]),
  "yes-no": toOptions(["Yes", "No"]),
} satisfies Record<string, DropdownOption[]>;

export type BuyerDropdowns = DropdownLists<keyof typeof BUYER_DROPDOWNS>;

/**
 * The same lists as plain strings under the forms' original mockConfig keys, for the
 * checkbox groups and dropdowns that were written against mockConfig.
 */
export const buyerConfigFrom = (d: BuyerDropdowns) => ({
  primaryProductInterests: labelsOf(d["buyer-product-category"]),
  secondaryProductCategories: labelsOf(d["buyer-secondary-category"]),
  businessModelOptions: labelsOf(d["buyer-business-model"]),
  annualPurchaseValueRanges: labelsOf(d["buyer-value-range"]),
  purchaseFrequencyOptions: labelsOf(d["buyer-purchase-frequency"]),
  purchaseTimelines: labelsOf(d["buyer-purchase-timeline"]),
  roles: labelsOf(d["buyer-decision-role"]),
  regions: labelsOf(d["buyer-region"]),
  supplierTypes: labelsOf(d["buyer-supplier-type"]),
  companySizes: labelsOf(d["buyer-company-size"]),
  certificationOptions: labelsOf(d["buyer-certification"]),
  meetingCategoryOptions: labelsOf(d["buyer-meeting-category"]),
  exhibitorTypeOptions: labelsOf(d["buyer-exhibitor-type"]),
  meetingObjectiveOptions: labelsOf(d["buyer-meeting-objective"]),
  preferredBusinessTypeOptions: labelsOf(d["buyer-preferred-business-type"]),
  meetingDayOptions: labelsOf(d["buyer-meeting-day"]),
});

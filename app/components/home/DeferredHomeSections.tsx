import SponsorsAndAttend from "./SponsorsAndAttend";
import BecomeSponsor from "./BecomeSponsor";
import SponsorshipCategories from "./SponsorshipCategories";
import PartnersAndBrands from "./PartnersAndBrands";
import BuyerSellerMeet from "./BuyerSellerMeet";
import TestimonialsCarousel from "./TestimonialsCarousel";
import LatestInsights from "./LatestInsights";

export default function DeferredHomeSections({
  partners,
  blogs,
}: {
  partners?: any;
  blogs?: any;
}) {
  return (
    <>
      <SponsorsAndAttend />
      <BecomeSponsor />
      <SponsorshipCategories />
      <PartnersAndBrands initialData={partners} />
      <BuyerSellerMeet />
      <TestimonialsCarousel />
      <LatestInsights initialData={blogs} />
    </>
  );
}

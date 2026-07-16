import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { foodProcessingFacilityCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: foodProcessingFacilityCleaning.metaTitle,
  description: foodProcessingFacilityCleaning.metaDescription,
  keywords: [
    "food processing cleaning Scotland",
    "FSA compliant cleaning",
    "BRCGS cleaning contractor",
    "HACCP cleaning protocol",
    "allergen changeover validation",
    "listeria monitoring",
    "high-care zone cleaning",
    "Maundy Clean food",
  ],
  openGraph: {
    title: foodProcessingFacilityCleaning.metaTitle,
    description: foodProcessingFacilityCleaning.metaDescription,
    type: "website",
    images: [{ url: foodProcessingFacilityCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${foodProcessingFacilityCleaning.slug}` },
};

export default function FoodProcessingFacilityCleaningPage() {
  const service = foodProcessingFacilityCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceWhatsIncluded service={service} />
        <ServicePricing service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

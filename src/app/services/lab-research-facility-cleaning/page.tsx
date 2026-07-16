import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { labResearchFacilityCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: labResearchFacilityCleaning.metaTitle,
  description: labResearchFacilityCleaning.metaDescription,
  keywords: [
    "laboratory cleaning Scotland",
    "research facility cleaning",
    "GLP compliant cleaning",
    "MHRA aligned cleaning",
    "BSL-2 lab cleaning",
    "university research lab",
    "Maundy Clean lab",
  ],
  openGraph: {
    title: labResearchFacilityCleaning.metaTitle,
    description: labResearchFacilityCleaning.metaDescription,
    type: "website",
    images: [{ url: labResearchFacilityCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${labResearchFacilityCleaning.slug}` },
};

export default function LabResearchFacilityCleaningPage() {
  const service = labResearchFacilityCleaning;
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

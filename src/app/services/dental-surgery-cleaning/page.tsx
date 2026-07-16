import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { dentalSurgeryCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: dentalSurgeryCleaning.metaTitle,
  description: dentalSurgeryCleaning.metaDescription,
  keywords: [
    "dental surgery cleaning Scotland",
    "HTM 01-05 cleaning",
    "dental practice cleaning",
    "decontamination room cleaning",
    "blood-borne pathogen cleaning",
    "GDP compliant cleaning",
    "dental terminal clean",
    "Maundy Clean dental",
  ],
  openGraph: {
    title: dentalSurgeryCleaning.metaTitle,
    description: dentalSurgeryCleaning.metaDescription,
    type: "website",
    images: [{ url: dentalSurgeryCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${dentalSurgeryCleaning.slug}` },
};

export default function DentalSurgeryCleaningPage() {
  const service = dentalSurgeryCleaning;
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

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { patioPaverCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: patioPaverCleaning.metaTitle,
  description: patioPaverCleaning.metaDescription,
  keywords: [
    "patio cleaning Scotland",
    "paver cleaning",
    "driveway pressure washing",
    "patio pressure washing",
    "block paving cleaning",
    "Indian sandstone cleaning",
    "algae removal patio",
    "patio sealing",
    "Maundy Clean patio",
  ],
  openGraph: {
    title: patioPaverCleaning.metaTitle,
    description: patioPaverCleaning.metaDescription,
    type: "website",
    images: [{ url: patioPaverCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${patioPaverCleaning.slug}` },
};

export default function PatioPaverCleaningPage() {
  const service = patioPaverCleaning;
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

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { hospitalEnvironmentalServices } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: hospitalEnvironmentalServices.metaTitle,
  description: hospitalEnvironmentalServices.metaDescription,
  keywords: [
    "hospital environmental services Scotland",
    "NHS cleaning services",
    "hospital cleaning Scotland",
    "HTM 01-05 cleaning",
    "HAI control cleaning",
    "theatre cleaning service",
    "healthcare cleaning Scotland",
    "NHS Trust cleaning",
    "Maundy Clean hospital",
  ],
  openGraph: {
    title: hospitalEnvironmentalServices.metaTitle,
    description: hospitalEnvironmentalServices.metaDescription,
    type: "website",
    images: [{ url: hospitalEnvironmentalServices.heroImage }],
  },
  alternates: { canonical: `/services/${hospitalEnvironmentalServices.slug}` },
};

export default function HospitalEnvironmentalServicesPage() {
  const service = hospitalEnvironmentalServices;
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

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { waterDamageCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: waterDamageCleaning.metaTitle,
  description: waterDamageCleaning.metaDescription,
  keywords: [
    "water damage cleaning Scotland",
    "burst pipe cleanup",
    "flood damage cleaning",
    "water damage restoration",
    "24/7 water damage",
    "insurance water damage",
    "dehumidifier drying",
    "IICRC water damage",
    "Maundy Clean water damage",
  ],
  openGraph: {
    title: waterDamageCleaning.metaTitle,
    description: waterDamageCleaning.metaDescription,
    type: "website",
    images: [{ url: waterDamageCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${waterDamageCleaning.slug}` },
};

export default function WaterDamageCleaningPage() {
  const service = waterDamageCleaning;
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

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { solarPanelCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: solarPanelCleaning.metaTitle,
  description: solarPanelCleaning.metaDescription,
  keywords: [
    "solar panel cleaning Scotland",
    "PV panel cleaning",
    "solar array cleaning",
    "boost solar efficiency",
    "pure water solar cleaning",
    "IRATA rope access solar",
    "solar farm cleaning",
    "deionised water solar",
    "Maundy Clean solar",
  ],
  openGraph: {
    title: solarPanelCleaning.metaTitle,
    description: solarPanelCleaning.metaDescription,
    type: "website",
    images: [{ url: solarPanelCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${solarPanelCleaning.slug}` },
};

export default function SolarPanelCleaningPage() {
  const service = solarPanelCleaning;
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

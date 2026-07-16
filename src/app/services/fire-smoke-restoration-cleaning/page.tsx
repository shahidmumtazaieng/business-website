import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { fireSmokeRestorationCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: fireSmokeRestorationCleaning.metaTitle,
  description: fireSmokeRestorationCleaning.metaDescription,
  keywords: [
    "fire damage restoration Scotland",
    "smoke damage cleanup",
    "soot removal",
    "IICRC S700 protocol",
    "ozone deodorisation",
    "insurance-preferred contractor",
    "Maundy Clean fire",
  ],
  openGraph: {
    title: fireSmokeRestorationCleaning.metaTitle,
    description: fireSmokeRestorationCleaning.metaDescription,
    type: "website",
    images: [{ url: fireSmokeRestorationCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${fireSmokeRestorationCleaning.slug}` },
};

export default function FireSmokeRestorationCleaningPage() {
  const service = fireSmokeRestorationCleaning;
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

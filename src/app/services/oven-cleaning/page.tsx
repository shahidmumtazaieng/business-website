import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { ovenCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: ovenCleaning.metaTitle,
  description: ovenCleaning.metaDescription,
  keywords: [
    "oven cleaning Scotland",
    "oven cleaner Edinburgh",
    "oven cleaner Glasgow",
    "oven cleaning service",
    "non-caustic oven cleaning",
    "food-safe oven cleaning",
    "range cooker cleaning",
    "Aga cleaning Scotland",
    "Maundy Clean ovens",
  ],
  openGraph: {
    title: ovenCleaning.metaTitle,
    description: ovenCleaning.metaDescription,
    type: "website",
    images: [{ url: ovenCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${ovenCleaning.slug}` },
};

export default function OvenCleaningPage() {
  const service = ovenCleaning;
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

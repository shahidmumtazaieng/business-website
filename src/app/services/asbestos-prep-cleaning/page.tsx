import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { asbestosPrepCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: asbestosPrepCleaning.metaTitle,
  description: asbestosPrepCleaning.metaDescription,
  keywords: [
    "asbestos prep cleaning Scotland",
    "asbestos clearance cleaning",
    "CAR 2012 compliant",
    "HSG247 compliant",
    "HSG264 compliant",
    "post asbestos removal clean",
    "four stage clearance",
    "Maundy Clean asbestos",
  ],
  openGraph: {
    title: asbestosPrepCleaning.metaTitle,
    description: asbestosPrepCleaning.metaDescription,
    type: "website",
    images: [{ url: asbestosPrepCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${asbestosPrepCleaning.slug}` },
};

export default function AsbestosPrepCleaningPage() {
  const service = asbestosPrepCleaning;
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

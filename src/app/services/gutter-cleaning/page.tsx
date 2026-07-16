import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { gutterCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: gutterCleaning.metaTitle,
  description: gutterCleaning.metaDescription,
  keywords: [
    "gutter cleaning Scotland",
    "gutter clearing",
    "downpipe unblock",
    "CCTV gutter inspection",
    "cherry-picker gutter clear",
    "conservatory gutter cleaning",
    "gutter guard installation",
    "Maundy Clean gutters",
  ],
  openGraph: {
    title: gutterCleaning.metaTitle,
    description: gutterCleaning.metaDescription,
    type: "website",
    images: [{ url: gutterCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${gutterCleaning.slug}` },
};

export default function GutterCleaningPage() {
  const service = gutterCleaning;
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

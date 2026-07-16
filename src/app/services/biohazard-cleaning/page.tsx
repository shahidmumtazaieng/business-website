import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { biohazardCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: biohazardCleanup.metaTitle,
  description: biohazardCleanup.metaDescription,
  keywords: [
    "biohazard cleanup Scotland",
    "blood cleanup",
    "bodily fluids remediation",
    "sharps disposal",
    "sewage cleanup",
    "HSE HSG272 compliant",
    "Maundy Clean biohazard",
  ],
  openGraph: {
    title: biohazardCleanup.metaTitle,
    description: biohazardCleanup.metaDescription,
    type: "website",
    images: [{ url: biohazardCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${biohazardCleanup.slug}` },
};

export default function BiohazardCleaningPage() {
  const service = biohazardCleanup;
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

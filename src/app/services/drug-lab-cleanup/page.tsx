import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { drugLabCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: drugLabCleanup.metaTitle,
  description: drugLabCleanup.metaDescription,
  keywords: [
    "drug lab cleanup Scotland",
    "meth lab cleanup",
    "methamphetamine remediation",
    "clandestine lab cleanup",
    "COSHH compliant",
    "SEPA compliant",
    "toxic chemical decontamination",
    "Maundy Clean drug lab",
  ],
  openGraph: {
    title: drugLabCleanup.metaTitle,
    description: drugLabCleanup.metaDescription,
    type: "website",
    images: [{ url: drugLabCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${drugLabCleanup.slug}` },
};

export default function DrugLabCleanupPage() {
  const service = drugLabCleanup;
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

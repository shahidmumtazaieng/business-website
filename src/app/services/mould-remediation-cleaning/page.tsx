import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { mouldRemediationCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: mouldRemediationCleaning.metaTitle,
  description: mouldRemediationCleaning.metaDescription,
  keywords: [
    "mould remediation Scotland",
    "black mould removal",
    "HSE mould protocol",
    "HSG272 mould",
    "damp mould cleaning",
    "moisture source report",
    "HEPA air scrubbing mould",
    "Maundy Clean mould",
  ],
  openGraph: {
    title: mouldRemediationCleaning.metaTitle,
    description: mouldRemediationCleaning.metaDescription,
    type: "website",
    images: [{ url: mouldRemediationCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${mouldRemediationCleaning.slug}` },
};

export default function MouldRemediationCleaningPage() {
  const service = mouldRemediationCleaning;
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

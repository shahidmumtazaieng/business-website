import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { leadDustCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: leadDustCleanup.metaTitle,
  description: leadDustCleanup.metaDescription,
  keywords: [
    "lead dust cleanup Scotland",
    "lead paint remediation",
    "CLAW 2002 compliant",
    "lead decontamination",
    "shooting range cleanup",
    "industrial lead cleanup",
    "lead dust removal",
    "Maundy Clean lead",
  ],
  openGraph: {
    title: leadDustCleanup.metaTitle,
    description: leadDustCleanup.metaDescription,
    type: "website",
    images: [{ url: leadDustCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${leadDustCleanup.slug}` },
};

export default function LeadDustCleanupPage() {
  const service = leadDustCleanup;
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

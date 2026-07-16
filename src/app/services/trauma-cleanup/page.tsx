import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { traumaCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: traumaCleanup.metaTitle,
  description: traumaCleanup.metaDescription,
  keywords: [
    "trauma cleanup Scotland",
    "unattended death cleanup",
    "suicide cleanup",
    "accident cleanup",
    "HSE HSG272 compliant",
    "compassionate cleanup",
    "discreet trauma remediation",
    "Maundy Clean trauma",
  ],
  openGraph: {
    title: traumaCleanup.metaTitle,
    description: traumaCleanup.metaDescription,
    type: "website",
    images: [{ url: traumaCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${traumaCleanup.slug}` },
};

export default function TraumaCleanupPage() {
  const service = traumaCleanup;
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

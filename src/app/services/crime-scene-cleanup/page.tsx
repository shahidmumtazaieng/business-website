import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { crimeSceneCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: crimeSceneCleanup.metaTitle,
  description: crimeSceneCleanup.metaDescription,
  keywords: [
    "crime scene cleanup Scotland",
    "blood cleanup",
    "forensic residue removal",
    "HSE HSG272 compliant",
    "BSi PAS 9960",
    "post-police remediation",
    "trauma scene cleanup",
    "Maundy Clean crime scene",
  ],
  openGraph: {
    title: crimeSceneCleanup.metaTitle,
    description: crimeSceneCleanup.metaDescription,
    type: "website",
    images: [{ url: crimeSceneCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${crimeSceneCleanup.slug}` },
};

export default function CrimeSceneCleanupPage() {
  const service = crimeSceneCleanup;
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

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { vandalismGraffitiCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: vandalismGraffitiCleanup.metaTitle,
  description: vandalismGraffitiCleanup.metaDescription,
  keywords: [
    "vandalism cleanup Scotland",
    "graffiti removal",
    "smashed glass cleanup",
    "hate crime graffiti removal",
    "biological vandalism",
    "chemical damage restoration",
    "malicious damage cleanup",
    "Maundy Clean vandalism",
  ],
  openGraph: {
    title: vandalismGraffitiCleanup.metaTitle,
    description: vandalismGraffitiCleanup.metaDescription,
    type: "website",
    images: [{ url: vandalismGraffitiCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${vandalismGraffitiCleanup.slug}` },
};

export default function VandalismGraffitiCleanupPage() {
  const service = vandalismGraffitiCleanup;
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

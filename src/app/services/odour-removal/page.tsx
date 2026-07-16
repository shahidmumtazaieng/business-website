import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { odourRemoval } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: odourRemoval.metaTitle,
  description: odourRemoval.metaDescription,
  keywords: [
    "odour removal Scotland",
    "ozone treatment",
    "smoke odour removal",
    "pet urine odour removal",
    "thermal fogging",
    "enzymatic odour treatment",
    "cigarette smell removal",
    "hydroxyl generator",
    "Maundy Clean odour",
  ],
  openGraph: {
    title: odourRemoval.metaTitle,
    description: odourRemoval.metaDescription,
    type: "website",
    images: [{ url: odourRemoval.heroImage }],
  },
  alternates: { canonical: `/services/${odourRemoval.slug}` },
};

export default function OdourRemovalPage() {
  const service = odourRemoval;
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

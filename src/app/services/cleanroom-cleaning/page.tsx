import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { cleanroomCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: cleanroomCleaning.metaTitle,
  description: cleanroomCleaning.metaDescription,
  keywords: [
    "cleanroom cleaning Scotland",
    "ISO 14644 cleaning",
    "pharmaceutical cleanroom cleaning",
    "semiconductor cleanroom cleaning",
    "biotech cleanroom cleaning",
    "GMP cleaning service",
    "MHRA cleanroom cleaning",
    "sterile environment cleaning",
    "Maundy Clean cleanroom",
  ],
  openGraph: {
    title: cleanroomCleaning.metaTitle,
    description: cleanroomCleaning.metaDescription,
    type: "website",
    images: [{ url: cleanroomCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${cleanroomCleaning.slug}` },
};

export default function CleanroomCleaningPage() {
  const service = cleanroomCleaning;
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

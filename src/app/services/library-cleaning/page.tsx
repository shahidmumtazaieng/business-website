import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { libraryCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: libraryCleaning.metaTitle,
  description: libraryCleaning.metaDescription,
  keywords: [
    "library cleaning Scotland",
    "public library cleaning",
    "university library cleaning",
    "archive cleaning",
    "book-aware cleaning",
    "rare book cleaning",
    "mould monitoring library",
    "manuscript cleaning",
    "Maundy Clean libraries",
  ],
  openGraph: {
    title: libraryCleaning.metaTitle,
    description: libraryCleaning.metaDescription,
    type: "website",
    images: [{ url: libraryCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${libraryCleaning.slug}` },
};

export default function LibraryCleaningPage() {
  const service = libraryCleaning;
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

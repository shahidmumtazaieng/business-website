import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { veterinaryPracticeCleaning } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: veterinaryPracticeCleaning.metaTitle,
  description: veterinaryPracticeCleaning.metaDescription,
  keywords: [
    "veterinary practice cleaning Scotland",
    "vet surgery cleaning",
    "animal hospital cleaning",
    "veterinary cleaning service",
    "zoonotic disease cleaning",
    "RCVS cleaning standards",
    "equine practice cleaning",
    "vet clinic cleaning",
    "Maundy Clean veterinary",
  ],
  openGraph: {
    title: veterinaryPracticeCleaning.metaTitle,
    description: veterinaryPracticeCleaning.metaDescription,
    type: "website",
    images: [{ url: veterinaryPracticeCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${veterinaryPracticeCleaning.slug}` },
};

export default function VeterinaryPracticeCleaningPage() {
  const service = veterinaryPracticeCleaning;
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

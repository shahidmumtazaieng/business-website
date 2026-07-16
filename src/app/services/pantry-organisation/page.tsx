import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServiceProcess } from "@/components/service-detail/service-process";
import { ServiceBenefits } from "@/components/service-detail/service-benefits";
import { ServiceGallery } from "@/components/service-detail/service-gallery";
import { ServiceTestimonials } from "@/components/service-detail/service-testimonials";
import { ServiceFaq } from "@/components/service-detail/service-faq";
import { ServiceRelated } from "@/components/service-detail/service-related";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { pantryOrganisation } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: pantryOrganisation.metaTitle,
  description: pantryOrganisation.metaDescription,
  keywords: [
    "pantry organisation Scotland",
    "decant jars",
    "label pantry",
    "zone pantry",
    "FIFO date rotation",
    "allergen zoning",
    "Maundy Clean pantry",  ],
  openGraph: {
    title: pantryOrganisation.metaTitle,
    description: pantryOrganisation.metaDescription,
    type: "website",
    images: [{ url: pantryOrganisation.heroImage }],
  },
  alternates: { canonical: `/services/${pantryOrganisation.slug}` },
};

export default function PantryOrganisationPage() {
  const service = pantryOrganisation;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceWhatsIncluded service={service} />
        <ServiceProcess service={service} />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServiceTestimonials service={service} />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

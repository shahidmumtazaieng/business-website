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
import { petAreaSanitisation } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: petAreaSanitisation.metaTitle,
  description: petAreaSanitisation.metaDescription,
  keywords: [
    "pet area sanitisation Scotland",
    "pet-safe chemistry",
    "litter tray sanitise",
    "pet bed laundering",
    "enzymatic urine treatment",
    "HEPA vacuum pet hair",
    "Maundy Clean pets",  ],
  openGraph: {
    title: petAreaSanitisation.metaTitle,
    description: petAreaSanitisation.metaDescription,
    type: "website",
    images: [{ url: petAreaSanitisation.heroImage }],
  },
  alternates: { canonical: `/services/${petAreaSanitisation.slug}` },
};

export default function PetAreaSanitisationPage() {
  const service = petAreaSanitisation;
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

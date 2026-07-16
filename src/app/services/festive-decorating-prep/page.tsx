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
import { ServiceAreas } from "@/components/service-detail/service-areas";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { festiveDecoratingPrep } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: festiveDecoratingPrep.metaTitle,
  description: festiveDecoratingPrep.metaDescription,
  keywords: ["festive decorating prep Scotland","pre-Christmas clean","Christmas decoration prep","high-dusting festive","chandelier cleaning festive","post-festive pack-down","pine needle removal","Maundy Clean festive"],
  openGraph: {
    title: festiveDecoratingPrep.metaTitle,
    description: festiveDecoratingPrep.metaDescription,
    type: "website",
    images: [{ url: festiveDecoratingPrep.heroImage }],
  },
  alternates: { canonical: `/services/festive-decorating-prep` },
};

export default function FestiveDecoratingPrepPage() {
  const service = festiveDecoratingPrep;
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
        <ServiceAreas service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

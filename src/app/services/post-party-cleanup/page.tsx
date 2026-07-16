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
import { postPartyCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: postPartyCleanup.metaTitle,
  description: postPartyCleanup.metaDescription,
  keywords: [
    "post-party cleanup Scotland",
    "glassware wash",
    "red wine treatment",
    "candle wax removal",
    "glitter HEPA vacuum",
    "sticky floor mop",
    "Maundy Clean party",  ],
  openGraph: {
    title: postPartyCleanup.metaTitle,
    description: postPartyCleanup.metaDescription,
    type: "website",
    images: [{ url: postPartyCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${postPartyCleanup.slug}` },
};

export default function PostPartyCleanupPage() {
  const service = postPartyCleanup;
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

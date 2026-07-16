import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { ServiceProcess } from "@/components/service-detail/service-process";
import { ServiceBenefits } from "@/components/service-detail/service-benefits";
import { ServiceTestimonials } from "@/components/service-detail/service-testimonials";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { postConstructionCleaning } from "@/lib/service-detail-data";
import {
  PostConstructionSeoHeroBanner,
  PostConstructionSeoIntro,
  PostConstructionSeoWhy,
  PostConstructionSeoBooking,
  PostConstructionSeoIncludedDetail,
  PostConstructionSeoLeaseStages,
  PostConstructionSeoFaq,
  PostConstructionSeoNearMe,
  PostConstructionSeoFinalCta,
} from "@/components/service-detail/post-construction-cleaning-seo";

export const metadata: Metadata = {
  title: postConstructionCleaning.metaTitle,
  description: postConstructionCleaning.metaDescription,
  keywords: [
    "post-construction cleaning Scotland",
    "builder dust removal",
    "after-builders clean",
    "new build handover cleaning",
    "renovation cleaning",
    "extension cleaning",
    "HEPA vacuum construction dust",
    "paint removal from glass",
    "Maundy Clean post-construction",
    "post-construction cleaning Glasgow",
    "post-construction cleaning Edinburgh",
    "post-build cleaning Scotland",
    "tack-cloth cleaning method",
    "HEPA H-class vacuum cleaning",
    "silicone overspray removal",
    "adhesive residue removal floors",
    "construction dust cleanup",
    "renovation handover cleaning",
    "post-construction cleaning near me",
    "Scottish builder clean service",
  ],
  openGraph: {
    title: postConstructionCleaning.metaTitle,
    description: postConstructionCleaning.metaDescription,
    type: "website",
    images: [{ url: postConstructionCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${postConstructionCleaning.slug}` },
};

export default function PostConstructionCleaningPage() {
  const service = postConstructionCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Full-width banner hero with semantic H1 */}
        <PostConstructionSeoHeroBanner />

        {/* Long-form SEO intro + trust strip */}
        <PostConstructionSeoIntro />

        {/* Existing overview component (rich paragraphs from ServiceDetail data) */}
        <ServiceOverview service={service} />

        {/* Why Maundy Clean is the authority in post-construction cleaning (image + copy) */}
        <PostConstructionSeoWhy />

        {/* 3-step "Hassle-Free" booking process */}
        <PostConstructionSeoBooking />

        {/* Existing process component (4-step detail from ServiceDetail data) */}
        <ServiceProcess service={service} />

        {/* Comprehensive Post-Construction Cleaning Checklist (4 image-topped cards) */}
        <PostConstructionSeoIncludedDetail />

        {/* Existing whats-included + pricing from ServiceDetail data */}
        <div id="whats-included">
          <ServiceWhatsIncluded service={service} />
        </div>
        <ServicePricing service={service} />

        {/* Semantic interlinking — related services */}
        <PostConstructionSeoLeaseStages />

        {/* Existing benefits + testimonials from ServiceDetail data */}
        <ServiceBenefits service={service} />
        <ServiceTestimonials service={service} />

        {/* SEO FAQ */}
        <PostConstructionSeoFaq />

        {/* Final SEO CTA — placed above the NearMe section to avoid stacking two CTAs at the end; the existing ServiceFinalCta stays as the page closer */}
        <PostConstructionSeoFinalCta />

        {/* "Near me" location internal links */}
        <PostConstructionSeoNearMe />

        {/* Existing final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

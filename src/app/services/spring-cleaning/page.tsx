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
import { springCleaning } from "@/lib/service-detail-data";
import {
  SpringSeoHeroBanner,
  SpringSeoIntro,
  SpringSeoWhy,
  SpringSeoBooking,
  SpringSeoIncludedDetail,
  SpringSeoLeaseStages,
  SpringSeoFaq,
  SpringSeoNearMe,
  SpringSeoFinalCta,
} from "@/components/service-detail/spring-cleaning-seo";

export const metadata: Metadata = {
  title: springCleaning.metaTitle,
  description: springCleaning.metaDescription,
  keywords: [
    "spring cleaning Scotland",
    "spring clean Edinburgh",
    "spring clean Glasgow",
    "annual deep clean",
    "top-to-bottom clean",
    "seasonal cleaning",
    "post-winter clean",
    "home reset",
    "Maundy Clean spring",
    "one-off spring clean",
    "deep house cleaning Scotland",
    "eco-friendly spring clean",
    "64-point cleaning checklist",
    "PVG-checked cleaners Scotland",
    "30-day satisfaction guarantee cleaning",
    "behind furniture cleaning",
    "inside cupboards clean",
    "woodwork wash cleaning",
    "spring cleaning near me",
    "Scottish spring clean service",
  ],
  openGraph: {
    title: springCleaning.metaTitle,
    description: springCleaning.metaDescription,
    type: "website",
    images: [{ url: springCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${springCleaning.slug}` },
};

export default function SpringCleaningPage() {
  const service = springCleaning;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Full-width banner hero with semantic H1 */}
        <SpringSeoHeroBanner />

        {/* Long-form SEO intro + trust strip */}
        <SpringSeoIntro />

        {/* Existing overview component (rich paragraphs from ServiceDetail data) */}
        <ServiceOverview service={service} />

        {/* Why Maundy Clean is the authority in spring cleaning (image + copy) */}
        <SpringSeoWhy />

        {/* 3-step "Hassle-Free" booking process */}
        <SpringSeoBooking />

        {/* Existing process component (4-step detail from ServiceDetail data) */}
        <ServiceProcess service={service} />

        {/* Comprehensive Domestic Cleaning Scope (4 image-topped room cards) */}
        <SpringSeoIncludedDetail />

        {/* Existing whats-included + pricing from ServiceDetail data */}
        <div id="whats-included">
          <ServiceWhatsIncluded service={service} />
        </div>
        <ServicePricing service={service} />

        {/* Semantic interlinking — related services */}
        <SpringSeoLeaseStages />

        {/* Existing benefits + testimonials from ServiceDetail data */}
        <ServiceBenefits service={service} />
        <ServiceTestimonials service={service} />

        {/* SEO FAQ */}
        <SpringSeoFaq />

        {/* Final SEO CTA — placed above the NearMe section to avoid stacking two CTAs at the end; the existing ServiceFinalCta stays as the page closer */}
        <SpringSeoFinalCta />

        {/* "Near me" location internal links */}
        <SpringSeoNearMe />

        {/* Existing final CTA */}
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { IndustryHero } from "@/components/industry-detail/industry-hero";
import { IndustryOverview } from "@/components/industry-detail/industry-overview";
import { IndustryCompliance } from "@/components/industry-detail/industry-compliance";
import { IndustryServices } from "@/components/industry-detail/industry-services";
import { IndustryChallenges } from "@/components/industry-detail/industry-challenges";
import { IndustryStats } from "@/components/industry-detail/industry-stats";
import { IndustryProcess } from "@/components/industry-detail/industry-process";
import { IndustryBenefits } from "@/components/industry-detail/industry-benefits";
import { IndustryTestimonials } from "@/components/industry-detail/industry-testimonials";
import { IndustryAreas } from "@/components/industry-detail/industry-areas";
import { IndustryFaq } from "@/components/industry-detail/industry-faq";
import { IndustryRelated } from "@/components/industry-detail/industry-related";
import { IndustryFinalCta } from "@/components/industry-detail/industry-final-cta";
import { restaurantsQsr } from "@/lib/industry-detail-data";

export const metadata: Metadata = {
  title: restaurantsQsr.metaTitle,
  description: restaurantsQsr.metaDescription,
  keywords: [
    "restaurants-qsr cleaning Scotland",
    "sector-led cleaning",
    "PVG-checked crews",
    "compliance audit-ready",
    "Scottish restaurants-qsr",
    "Maundy Clean restaurants-qsr",
  ],
  openGraph: {
    title: restaurantsQsr.metaTitle,
    description: restaurantsQsr.metaDescription,
    type: "website",
    images: [{ url: restaurantsQsr.heroImage }],
  },
  alternates: { canonical: `/industries/restaurants-qsr` },
};

export default function RestaurantsQsrPage() {
  const industry = restaurantsQsr;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <IndustryHero industry={industry} />
        <IndustryOverview industry={industry} />
        <IndustryCompliance industry={industry} />
        <IndustryServices industry={industry} />
        <IndustryChallenges industry={industry} />
        <IndustryStats industry={industry} />
        <IndustryProcess industry={industry} />
        <IndustryBenefits industry={industry} />
        <IndustryTestimonials industry={industry} />
        <IndustryAreas industry={industry} />
        <IndustryFaq industry={industry} />
        <IndustryRelated industry={industry} />
        <IndustryFinalCta industry={industry} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

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
import { trainingTutoringCentres } from "@/lib/industry-detail-data";

export const metadata: Metadata = {
  title: trainingTutoringCentres.metaTitle,
  description: trainingTutoringCentres.metaDescription,
  keywords: [
    "training-tutoring-centres cleaning Scotland",
    "sector-led cleaning",
    "PVG-checked crews",
    "compliance audit-ready",
    "Scottish training-tutoring-centres",
    "Maundy Clean training-tutoring-centres",
  ],
  openGraph: {
    title: trainingTutoringCentres.metaTitle,
    description: trainingTutoringCentres.metaDescription,
    type: "website",
    images: [{ url: trainingTutoringCentres.heroImage }],
  },
  alternates: { canonical: `/industries/training-tutoring-centres` },
};

export default function TrainingTutoringCentresPage() {
  const industry = trainingTutoringCentres;
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

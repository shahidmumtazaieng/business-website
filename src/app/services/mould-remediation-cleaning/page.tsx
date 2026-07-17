import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { mouldRemediationCleaning } from "@/lib/service-detail-data";
import {
  MouldRemediationSeoHeroBanner,
  MouldRemediationSeoIntro,
  MouldRemediationSeoWhy,
  MouldRemediationSeoChecklist,
  MouldRemediationSeoBooking,
  MouldRemediationSeoInterlinking,
  MouldRemediationSeoNearMe,
  MouldRemediationSeoFinalCta,
  MouldRemediationSeoFaq,
} from "@/components/service-detail/mould-remediation-seo";

export const metadata: Metadata = {
  title: mouldRemediationCleaning.metaTitle,
  description: mouldRemediationCleaning.metaDescription,
  keywords: [
    "mould remediation Scotland",
    "black mould removal",
    "HSE mould protocol",
    "HSG272 mould",
    "damp mould cleaning",
    "moisture source report",
    "HEPA air scrubbing mould",
    "Maundy Clean mould",
  ],
  openGraph: {
    title: mouldRemediationCleaning.metaTitle,
    description: mouldRemediationCleaning.metaDescription,
    type: "website",
    images: [{ url: mouldRemediationCleaning.heroImage }],
  },
  alternates: { canonical: `/services/${mouldRemediationCleaning.slug}` },
};

export default function MouldRemediationCleaningPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* Step 1: Hero Banner */}
        <MouldRemediationSeoHeroBanner />

        {/* Step 2: Semantic Introduction */}
        <MouldRemediationSeoIntro />

        {/* Step 3: Why Choose Maundy Clean */}
        <MouldRemediationSeoWhy />

        {/* Step 4: Technical Checklist */}
        <MouldRemediationSeoChecklist />

        {/* Step 5: 3-Step Booking Process */}
        <MouldRemediationSeoBooking />

        {/* Step 6: Semantic Interlinking */}
        <MouldRemediationSeoInterlinking />

        {/* Step 7: Regional Map & Directory Hub */}
        <MouldRemediationSeoNearMe />

        {/* Step 8: Mid-page Conversion Banner */}
        <MouldRemediationSeoFinalCta />

        {/* Step 9: Accessible FAQ */}
        <MouldRemediationSeoFaq />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

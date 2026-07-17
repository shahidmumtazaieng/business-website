import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

// Near Me page components
import {
  LeadDustCleanupNearMeHero,
  LeadDustCleanupNearMeGrid,
  LeadDustCleanupNearMeDispatch,
  LeadDustCleanupNearMeCta,
  LeadDustCleanupNearMeFaq,
} from "@/components/service-detail/lead-dust-cleanup-near-me-page";

import { leadDustCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Professional Lead Dust Cleanup Near Me | Maundy Clean",
  description: "Find your local Maundy Clean lead dust cleanup and decontamination team. Serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish areas with under 2-hour response times.",
  keywords: [
    "lead dust cleanup near me",
    "lead decontamination near me Scotland",
    "local emergency dust extraction",
    "post lead removal clean near me",
    "Maundy Clean lead dust prep",
  ],
  openGraph: {
    title: "Professional Lead Dust Cleanup Near Me | Maundy Clean",
    description: "Find your local Maundy Clean lead dust cleanup and decontamination team. Serving Glasgow, Edinburgh, Aberdeen, Dundee, and all surrounding Scottish areas with under 2-hour response times.",
    type: "website",
    images: [{ url: leadDustCleanup.heroImage }],
  },
  alternates: { canonical: `/services/${leadDustCleanup.slug}-near-me` },
};

export default function LeadDustCleanupNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <LeadDustCleanupNearMeHero />
        <LeadDustCleanupNearMeGrid />
        <LeadDustCleanupNearMeDispatch />
        <LeadDustCleanupNearMeCta />
        <LeadDustCleanupNearMeFaq />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

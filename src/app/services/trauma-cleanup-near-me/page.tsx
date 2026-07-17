import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { TraumaCleanupNearMeHero } from "@/components/service-detail/trauma-cleanup-near-me-page";

export const metadata: Metadata = {
  title: "Trauma Cleanup Near Me in Scotland | 24/7 Regional Response | Maundy Clean",
  description: "Find certified, discreet, and HSE-compliant trauma scene and biohazard decontamination crews in your local Scottish area. On-site within 2 hours across the Central Belt.",
  keywords: [
    "trauma cleanup near me",
    "emergency biohazard cleaners Scotland",
    "discreet trauma decontamination near me",
    "blood cleaning Glasgow near me",
    "forensic hygiene services local",
  ],
  openGraph: {
    title: "Trauma Cleanup Near Me in Scotland | 24/7 Regional Response | Maundy Clean",
    description: "Find certified, discreet, and HSE-compliant trauma scene and biohazard decontamination crews in your local Scottish area. On-site within 2 hours across the Central Belt.",
    type: "website",
  },
  alternates: { canonical: "/services/trauma-cleanup-near-me" },
};

export default function TraumaCleanupNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <TraumaCleanupNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

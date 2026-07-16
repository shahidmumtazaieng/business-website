import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CrimeSceneCleanupNearMeHero } from "@/components/service-detail/crime-scene-cleanup-near-me-page";
import { crimeSceneCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Crime Scene Cleaning Near Me in Scotland | Local Trauma & Forensic Decontamination | Maundy Clean",
  description: "Certified, discreet, and fast crime scene and trauma scene decontamination near you in Scotland. On-site within 2 hours across Glasgow, Edinburgh, Aberdeen, and Dundee. 24/7 emergency dispatch.",
  keywords: [
    "crime scene cleaning near me",
    "trauma clean near me",
    "emergency biohazard cleanup",
    "crime scene cleaners near me",
    "forensic cleaning near me",
    "blood cleanup service near me",
    "discreet cleaning near me",
    "local trauma scene sanitisation",
  ],
  openGraph: {
    title: "Crime Scene Cleaning Near Me in Scotland | Local Trauma & Forensic Decontamination | Maundy Clean",
    description: "Certified, discreet, and fast crime scene and trauma scene decontamination near you in Scotland. On-site within 2 hours across Glasgow, Edinburgh, Aberdeen, and Dundee. 24/7 emergency dispatch.",
    type: "website",
    images: [{ url: crimeSceneCleanup.heroImage }],
  },
  alternates: { canonical: `/services/crime-scene-cleanup-near-me` },
};

export default function CrimeSceneCleanupNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CrimeSceneCleanupNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

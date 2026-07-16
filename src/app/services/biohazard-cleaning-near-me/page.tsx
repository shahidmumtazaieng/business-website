import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { BiohazardCleaningNearMeHero } from "@/components/service-detail/biohazard-cleaning-near-me-page";
import { biohazardCleanup } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: "Biohazard Cleaning Near Me in Scotland | Local Trauma & Infection Decontamination | Maundy Clean",
  description: "Certified, discreet, and fast biohazard cleaning and trauma scene decontamination near you in Scotland. On-site within 2 hours across Glasgow, Edinburgh, Aberdeen, and Dundee. 24/7 emergency dispatch.",
  keywords: [
    "biohazard cleaning near me",
    "trauma clean near me",
    "emergency biohazard cleanup",
    "crime scene cleaners near me",
    "infection control near me",
    "blood cleanup service near me",
    "discreet cleaning near me",
    "local trauma scene sanitisation",
  ],
  openGraph: {
    title: "Biohazard Cleaning Near Me in Scotland | Local Trauma & Infection Decontamination | Maundy Clean",
    description: "Certified, discreet, and fast biohazard cleaning and trauma scene decontamination near you in Scotland. On-site within 2 hours across Glasgow, Edinburgh, Aberdeen, and Dundee. 24/7 emergency dispatch.",
    type: "website",
    images: [{ url: biohazardCleanup.heroImage }],
  },
  alternates: { canonical: `/services/biohazard-cleaning-near-me` },
};

export default function BiohazardCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <BiohazardCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

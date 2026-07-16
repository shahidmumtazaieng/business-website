import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CorporateFacilityCleaningNearMeHero } from "@/components/service-detail/corporate-facility-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Corporate Facility Cleaning Near Me in Scotland | Local PVG-Checked Crews | Maundy Clean",
  description:
    "Find local PVG-checked corporate facility cleaning crews across Scotland. Nightly, weekly & after-hours. GDPR-aware, HSE-compliant, dedicated account manager, ESG reporting, £10m liability, 100% satisfaction guarantee. 72+ Scottish towns covered. From £15/hr.",
  keywords: [
    "corporate facility cleaning near me",
    "commercial cleaning near me Scotland",
    "corporate cleaning company near me",
    "corporate facility cleaning near me Glasgow",
    "corporate facility cleaning near me Edinburgh",
    "corporate facility cleaning near me Aberdeen",
    "corporate facility cleaning near me Dundee",
    "after hours corporate cleaning near me",
    "facility maintenance near me",
    "contract cleaning near me Scotland",
    "PVG checked corporate cleaners near me",
    "professional corporate cleaning company near me",
    "daily corporate cleaning near me",
    "weekly corporate cleaning near me",
    "Maundy Clean local corporate cleaning",
  ],
  openGraph: {
    title: "Corporate Facility Cleaning Near Me in Scotland | Local PVG-Checked Crews | Maundy Clean",
    description:
      "Find local PVG-checked corporate facility cleaning crews across Scotland. Nightly, weekly & after-hours. GDPR-aware, HSE-compliant, dedicated account manager. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/corporate-facility-cleaning-near-me",
  },
};

export default function CorporateFacilityCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CorporateFacilityCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

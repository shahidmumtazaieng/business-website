import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { EscalatorLiftCleaningNearMeHero } from "@/components/service-detail/escalator-lift-cleaning-near-me-page";

export const metadata: Metadata = {
  title:
    "Escalator & Lift Cleaning Services Near Me in Scotland | Local SafeContractor-Approved Specialists | Maundy Clean",
  description:
    "Find local SafeContractor-approved escalator & lift cleaning specialists across Scotland. Rosemor Rotomatic escalator cleaners, EN 14476 virucidal handrail sanitisation, HEPA dry mechanism vacuuming, LOLER-compliant lift-engineer support, HTM 01-05 clinical chemistry, mirror restoration, control panel disinfection. 36+ Scottish towns. From £180/visit. 4.9★.",
  keywords: [
    "escalator cleaning near me",
    "escalator cleaning near me Scotland",
    "escalator cleaning near me Glasgow",
    "escalator cleaning near me Edinburgh",
    "escalator cleaning near me Aberdeen",
    "escalator cleaning near me Dundee",
    "lift cleaning near me",
    "travelator cleaning near me",
    "Rosemor Rotomatic escalator cleaning near me",
    "lift shaft cleaning near me",
    "EN 14476 handrail sanitisation near me",
    "vetted escalator specialists near me",
    "Maundy Clean local escalator & lift care",
  ],
  openGraph: {
    title:
      "Escalator & Lift Cleaning Services Near Me in Scotland | Local SafeContractor-Approved Specialists | Maundy Clean",
    description:
      "Find local SafeContractor-approved escalator & lift cleaning specialists across Scotland. Rosemor Rotomatic escalator cleaners, EN 14476 virucidal sanitisation, HEPA dry mechanism vacuuming, LOLER-compliant support. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/escalator-lift-cleaning.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/escalator-lift-cleaning-near-me",
  },
};

export default function EscalatorLiftCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <EscalatorLiftCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

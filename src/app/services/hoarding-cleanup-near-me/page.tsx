import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { HoardingCleanupNearMeHero } from "@/components/service-detail/hoarding-cleanup-near-me-page";

export const metadata: Metadata = {
  title: "Hoarding Cleanup & Technical Property Resets Near Me in Scotland | Local Compassionate Specialists | Maundy Clean",
  description:
    "Find local compassionate hoarding cleanup crews across Scotland. Same trusted team every visit, PVG-checked, mental-health-trained, safeguarding-aware, RAMS compliance, donation & recycling streams, ozone odour neutralisation, child-safe eco supplies, 100% satisfaction guarantee. 72+ Scottish towns covered. From £22/hr.",
  keywords: [
    "hoarding cleanup near me",
    "hoarder house clearance near me Scotland",
    "hoarding cleanup company near me",
    "hoarding cleanup near me Glasgow",
    "hoarding cleanup near me Edinburgh",
    "hoarding cleanup near me Aberdeen",
    "hoarding cleanup near me Dundee",
    "compassionate cleaning near me",
    "safeguarding cleaning near me",
    "mental health cleaning near me",
    "deceased estate clearance near me",
    "PVG-checked hoarding cleanup near me",
    "social work cleaning referrals Scotland",
    "housing association hoarding cleanup",
    "Maundy Clean local hoarding cleanup",
  ],
  openGraph: {
    title: "Hoarding Cleanup & Technical Property Resets Near Me in Scotland | Local Compassionate Specialists | Maundy Clean",
    description:
      "Find local compassionate hoarding cleanup crews across Scotland. PVG-checked, mental-health-trained, safeguarding-aware, donation & recycling streams. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
      },
    ],
  },
  alternates: {
    canonical: "/services/hoarding-cleanup-near-me",
  },
};

export default function HoardingCleanupNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HoardingCleanupNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { OfficeCleaningNearMeHero } from "@/components/service-detail/office-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Office Cleaning Services Near Me in Scotland | Local PVG-Checked Crews | Maundy Clean",
  description:
    "Find local PVG-checked office cleaning crews across Scotland. Daily, weekly & after-hours. GDPR-aware, HSE-compliant, dedicated account manager, 100% satisfaction guarantee. 72+ Scottish towns covered. From £89/visit.",
  keywords: [
    "office cleaning near me",
    "commercial cleaning near me Scotland",
    "office cleaning company near me",
    "office cleaning near me Glasgow",
    "office cleaning near me Edinburgh",
    "office cleaning near me Aberdeen",
    "office cleaning near me Dundee",
    "after hours office cleaning near me",
    "janitorial services near me",
    "contract cleaning near me Scotland",
    "PVG checked office cleaners near me",
    "professional office cleaning company near me",
    "daily office cleaning near me",
    "weekly office cleaning near me",
    "Maundy Clean local office cleaning",
  ],
  openGraph: {
    title: "Office Cleaning Services Near Me in Scotland | Local PVG-Checked Crews | Maundy Clean",
    description:
      "Find local PVG-checked office cleaning crews across Scotland. Daily, weekly & after-hours. GDPR-aware, HSE-compliant, dedicated account manager. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/office-cleaning-near-me",
  },
};

export default function OfficeCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <OfficeCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

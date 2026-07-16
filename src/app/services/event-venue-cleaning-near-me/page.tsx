import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { EventVenueCleaningNearMeHero } from "@/components/service-detail/event-venue-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Event Venue Cleaning Near Me in Scotland | Local PVG-Checked Crews | Maundy Clean",
  description:
    "Find local vetted, PVG-checked event venue cleaning crews across Scotland. Stadia, arenas, concert halls, conference centres, wedding venues. Pre/during/post-event, surge capacity 20-50 cleaners, 90-minute turnaround, ride-on sweepers, HEPA vacuums for auditoria, industrial carpet extractors, bioremediation spill response, signed cleaning logs, 100% satisfaction guarantee. 72+ Scottish towns. From £14/hr.",
  keywords: [
    "event venue cleaning near me",
    "event venue cleaning near me Scotland",
    "stadium cleaning near me",
    "concert venue cleaning near me",
    "conference centre cleaning near me",
    "wedding venue cleaning near me",
    "festival cleaning near me",
    "vetted event cleaners near me",
    "event venue cleaning near me Glasgow",
    "event venue cleaning near me Edinburgh",
    "event venue cleaning near me Aberdeen",
    "event venue cleaning near me Dundee",
    "arena cleaning near me",
    "exhibition centre cleaning near me",
    "post-event cleaning near me",
    "pre-event cleaning near me",
    "day porter services events near me",
    "PVG-checked event cleaners near me",
    "Maundy Clean local event venue cleaning",
  ],
  openGraph: {
    title: "Event Venue Cleaning Near Me in Scotland | Local PVG-Checked Crews | Maundy Clean",
    description:
      "Find local vetted, PVG-checked event venue cleaning crews across Scotland. Stadia, arenas, concert halls, conference centres, wedding venues. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/event-venue-cleaning-near-me",
  },
};

export default function EventVenueCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <EventVenueCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

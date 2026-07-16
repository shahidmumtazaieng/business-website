import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { AutoDealershipCleaningNearMeHero } from "@/components/service-detail/auto-dealership-cleaning-near-me-page";

export const metadata: Metadata = {
  title:
    "Auto Dealership & Car Showroom Cleaning Near Me in Scotland | Local Vetted Crews | Maundy Clean",
  description:
    "Find local vetted, PVG-checked auto dealership & car showroom cleaning crews across Scotland. Main dealers, used car superstores, EV showrooms. Showroom floor restoration, oil & tyre mark removal, glass partition gleam, workshop degreasing, franchise audit compliance, chrome fixture buffing, customer lounge upholstery, flexible out-of-hours. 36+ Scottish towns. From £17/hr. 4.9★.",
  keywords: [
    "auto dealership cleaning near me",
    "car showroom cleaning near me",
    "dealership cleaning near me Scotland",
    "car dealership cleaning near me Glasgow",
    "car dealership cleaning near me Edinburgh",
    "car dealership cleaning near me Aberdeen",
    "car dealership cleaning near me Dundee",
    "forecourt cleaning near me",
    "workshop cleaning near me",
    "EV showroom cleaning near me",
    "main dealer cleaning near me",
    "used car showroom cleaning near me",
    "vetted dealership cleaners near me",
    "Maundy Clean local dealership cleaning",
  ],
  openGraph: {
    title:
      "Auto Dealership & Car Showroom Cleaning Near Me in Scotland | Local Vetted Crews | Maundy Clean",
    description:
      "Find local vetted, PVG-checked auto dealership & car showroom cleaning crews across Scotland. Main dealers, used car superstores, EV showrooms. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/auto-dealership-cleaning-near-me",
  },
};

export default function AutoDealershipCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <AutoDealershipCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

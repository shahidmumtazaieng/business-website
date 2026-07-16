import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { DayPorterServicesNearMeHero } from "@/components/service-detail/day-porter-services-near-me-page";

export const metadata: Metadata = {
  title:
    "Day Porter Services Near Me in Scotland | Local Vetted On-Site Crews | Maundy Clean",
  description:
    "Find local vetted, PVG-checked day porters across Scotland. Continuous daytime maintenance, reception & entryway care, washroom audits, breakout area hygiene, meeting room turnaround, spill & mess response, high-touch sanitisation. Fixed monthly retainer. 36+ Scottish towns. From £17/hr. 4.9★.",
  keywords: [
    "day porter services near me",
    "day porter near me",
    "on-site attendant cleaning near me Scotland",
    "day porter near me Glasgow",
    "day porter near me Edinburgh",
    "day porter near me Aberdeen",
    "day porter near me Dundee",
    "washroom attendant near me",
    "office porter near me",
    "meeting room turnaround near me",
    "corporate day porter near me",
    "facilities day porter near me",
    "vetted day porters near me",
    "Maundy Clean local day porter",
  ],
  openGraph: {
    title:
      "Day Porter Services Near Me in Scotland | Local Vetted On-Site Crews | Maundy Clean",
    description:
      "Find local vetted, PVG-checked day porters across Scotland. Continuous daytime maintenance, reception & entryway care, washroom audits, breakout hygiene, meeting room turnaround. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/day-porter-services-near-me",
  },
};

export default function DayPorterServicesNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <DayPorterServicesNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

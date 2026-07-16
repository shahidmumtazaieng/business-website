import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { NightlyJanitorialNearMeHero } from "@/components/service-detail/nightly-janitorial-near-me-page";

export const metadata: Metadata = {
  title:
    "Nightly Janitorial Services Near Me in Scotland | Local After-Hours Crews | Maundy Clean",
  description:
    "Find local vetted, PVG-checked night crews across Scotland. After-hours office cleaning, night shift janitorial, out-of-hours cleaning, desk & keyboard sanitisation, floor & carpet maintenance, washroom deep cleans, kitchenette refresh, bin & recycling handling. Fixed monthly retainer. 36+ Scottish towns. From £13/hr. 4.9★.",
  keywords: [
    "nightly janitorial near me",
    "night cleaning near me",
    "after hours office cleaning near me Scotland",
    "night cleaning near me Glasgow",
    "night cleaning near me Edinburgh",
    "night cleaning near me Aberdeen",
    "night cleaning near me Dundee",
    "out of hours cleaning near me",
    "night shift cleaning near me",
    "office janitorial near me",
    "school evening cleaning near me",
    "facility janitorial near me",
    "vetted night cleaners near me",
    "Maundy Clean local nightly janitorial",
  ],
  openGraph: {
    title:
      "Nightly Janitorial Services Near Me in Scotland | Local After-Hours Crews | Maundy Clean",
    description:
      "Find local vetted, PVG-checked night crews across Scotland. After-hours office cleaning, night shift janitorial, out-of-hours cleaning, desk & keyboard sanitisation, washroom deep cleans, kitchenette refresh. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/nightly-janitorial-near-me",
  },
};

export default function NightlyJanitorialNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <NightlyJanitorialNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

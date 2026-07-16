import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { CoWorkingSpaceCleaningNearMeHero } from "@/components/service-detail/co-working-space-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Co-Working Space Cleaning Near Me in Scotland | Local DBS-Checked Crews | Maundy Clean",
  description:
    "Find local vetted, DBS-checked co-working space cleaning crews across Scotland. Hot-desks, meeting rooms, shared kitchens, phone booths. Day porters, evening deep cleans, dual-shift strategy, HEPA vacuums for hot-desks, microfibre for glass partitions, EN 14476 virucidal disinfectants for shared kitchens, secure safe-key handling, signed cleaning logs, 100% satisfaction guarantee. 72+ Scottish towns. From £15/hr.",
  keywords: [
    "co-working space cleaning near me",
    "co-working space cleaning near me Scotland",
    "co-working cleaning near me",
    "flexible workspace cleaning near me",
    "hot-desk cleaning near me",
    "shared office cleaning near me",
    "meeting room cleaning near me",
    "serviced office cleaning near me",
    "vetted co-working cleaners near me",
    "co-working space cleaning near me Glasgow",
    "co-working space cleaning near me Edinburgh",
    "co-working space cleaning near me Aberdeen",
    "co-working space cleaning near me Dundee",
    "day porter services near me",
    "incubator cleaning near me",
    "dual-shift cleaning near me",
    "DBS-checked co-working cleaners near me",
    "Maundy Clean local co-working space cleaning",
  ],
  openGraph: {
    title: "Co-Working Space Cleaning Near Me in Scotland | Local DBS-Checked Crews | Maundy Clean",
    description:
      "Find local vetted, DBS-checked co-working space cleaning crews across Scotland. Hot-desks, meeting rooms, shared kitchens, day porters, evening deep cleans. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/co-working-space-cleaning-near-me",
  },
};

export default function CoWorkingSpaceCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <CoWorkingSpaceCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

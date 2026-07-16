import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ShowroomCleaningNearMeHero } from "@/components/service-detail/showroom-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Showroom Cleaning Near Me in Scotland | Local Vetted Crews | Maundy Clean",
  description:
    "Find local vetted, uniformed showroom cleaning crews across Scotland. Specialist surface care, brass restoration, child-safe eco supplies, signed cleaning logs, 100% satisfaction guarantee. 72+ Scottish towns covered. From £15/hr.",
  keywords: [
    "showroom cleaning near me",
    "showroom cleaning near me Scotland",
    "showroom cleaning company near me",
    "showroom cleaning near me Glasgow",
    "showroom cleaning near me Edinburgh",
    "showroom cleaning near me Aberdeen",
    "showroom cleaning near me Dundee",
    "after hours showroom cleaning near me",
    "car showroom cleaning near me",
    "kitchen showroom cleaning near me",
    "bathroom showroom cleaning near me",
    "furniture showroom cleaning near me",
    "luxury retail cleaning near me",
    "vetted showroom cleaners near me",
    "professional showroom cleaning company near me",
    "daily showroom cleaning near me",
    "weekly showroom cleaning near me",
    "Maundy Clean local showroom cleaning",
  ],
  openGraph: {
    title: "Showroom Cleaning Near Me in Scotland | Local Vetted Crews | Maundy Clean",
    description:
      "Find local vetted, uniformed showroom cleaning crews across Scotland. Specialist surface care, brass restoration, child-safe eco supplies. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/showroom-cleaning-near-me",
  },
};

export default function ShowroomCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ShowroomCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

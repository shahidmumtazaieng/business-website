import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { RestroomSanitationNearMeHero } from "@/components/service-detail/restroom-sanitation-near-me-page";

export const metadata: Metadata = {
  title:
    "Restroom Sanitation & Washroom Cleaning Near Me in Scotland | Local Vetted Hygiene Crews | Maundy Clean",
  description:
    "Find local vetted, PVG-checked washroom crews across Scotland. Toilet & urinal restoration, deep grout cleaning, chrome fixture buffing, sanitary disposal, consumables restocking, infection control, eco-friendly products, emergency cover, fixed monthly retainer. 36+ Scottish towns. From £14/hr. 4.9★.",
  keywords: [
    "restroom sanitation near me",
    "washroom cleaning near me",
    "washroom hygiene near me Scotland",
    "restroom cleaning near me Glasgow",
    "restroom cleaning near me Edinburgh",
    "restroom cleaning near me Aberdeen",
    "restroom cleaning near me Dundee",
    "toilet deep cleaning near me",
    "commercial washroom cleaning near me",
    "public restroom cleaning near me",
    "sanitary hygiene services near me",
    "vetted washroom cleaners near me",
    "Maundy Clean local restroom sanitation",
  ],
  openGraph: {
    title:
      "Restroom Sanitation & Washroom Cleaning Near Me in Scotland | Local Vetted Hygiene Crews | Maundy Clean",
    description:
      "Find local vetted, PVG-checked washroom crews across Scotland. Toilet & urinal restoration, deep grout cleaning, chrome buffing, sanitary disposal, consumables restocking, infection control. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/restroom-sanitation-near-me",
  },
};

export default function RestroomSanitationNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <RestroomSanitationNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

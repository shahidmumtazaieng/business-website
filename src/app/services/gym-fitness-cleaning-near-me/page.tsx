import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { GymFitnessCleaningNearMeHero } from "@/components/service-detail/gym-fitness-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Gym & Fitness Centre Cleaning Near Me in Scotland | Local Vetted Uniformed Crews | Maundy Clean",
  description:
    "Find local vetted uniformed gym & fitness centre cleaning crews across Scotland. EN 14476 virucidal disinfection, ATP swab verification, infection-control-trained teams, child-safe eco supplies, 100% satisfaction guarantee. 72+ Scottish towns covered. From £16/hr.",
  keywords: [
    "gym cleaning near me",
    "fitness centre cleaning near me Scotland",
    "gym cleaning company near me",
    "gym cleaning near me Glasgow",
    "gym cleaning near me Edinburgh",
    "gym cleaning near me Aberdeen",
    "gym cleaning near me Dundee",
    "after hours gym cleaning near me",
    "EN 14476 virucidal gym cleaning near me",
    "ATP swab testing gym cleaning near me Scotland",
    "vetted uniformed gym cleaners near me",
    "professional gym cleaning company near me",
    "daily gym cleaning near me",
    "weekly gym cleaning near me",
    "leisure centre cleaning near me",
    "boutique studio cleaning near me",
    "Maundy Clean local gym cleaning",
  ],
  openGraph: {
    title: "Gym & Fitness Centre Cleaning Near Me in Scotland | Local Vetted Uniformed Crews | Maundy Clean",
    description:
      "Find local vetted uniformed gym & fitness centre cleaning crews across Scotland. EN 14476 virucidal disinfection, ATP swab verification, infection-control-trained teams. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/gym-fitness-cleaning-near-me",
  },
};

export default function GymFitnessCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <GymFitnessCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

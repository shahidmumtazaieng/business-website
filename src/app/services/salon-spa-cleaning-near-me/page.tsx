import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { SalonSpaCleaningNearMeHero } from "@/components/service-detail/salon-spa-cleaning-near-me-page";

export const metadata: Metadata = {
  title: "Salon & Spa Cleaning Near Me in Scotland | Local Vetted Hygiene Crews | Maundy Clean",
  description:
    "Find local vetted, PVG-checked salon & spa cleaning crews across Scotland. Hair salons, beauty spas, aesthetics clinics, barbers, nail bars. Close-contact services, hair spray residue, treatment room sanitisation, mirror & chrome restoration, antimicrobial fogging, child-safe chemistry, flexible out-of-hours, PVG-checked crews. 36+ Scottish towns. From £16/hr. 4.9★.",
  keywords: [
    "salon cleaning near me",
    "spa cleaning near me",
    "hair salon cleaner near me",
    "beauty salon cleaning near me Scotland",
    "salon cleaning near me Glasgow",
    "salon cleaning near me Edinburgh",
    "salon cleaning near me Aberdeen",
    "salon cleaning near me Dundee",
    "nail bar cleaning near me",
    "barber shop cleaning near me",
    "aesthetics clinic cleaning near me",
    "vetted salon cleaners near me",
    "Maundy Clean local salon cleaning",
  ],
  openGraph: {
    title: "Salon & Spa Cleaning Near Me in Scotland | Local Vetted Hygiene Crews | Maundy Clean",
    description:
      "Find local vetted, PVG-checked salon & spa cleaning crews across Scotland. Hair salons, beauty spas, aesthetics clinics, barbers, nail bars. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/salon-spa-cleaning-near-me",
  },
};

export default function SalonSpaCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <SalonSpaCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

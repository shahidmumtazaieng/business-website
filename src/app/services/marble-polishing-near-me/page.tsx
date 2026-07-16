import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { MarblePolishingNearMeHero } from "@/components/service-detail/marble-polishing-near-me-page";

export const metadata: Metadata = {
  title:
    "Marble Polishing Services Near Me in Scotland | Local Stone-Trained Specialists | Maundy Clean",
  description:
    "Find local vetted, PVG-checked marble polishing specialists across Scotland. Diamond-grit honing, mechanical polishing, premium impregnating sealing, crystallisation, etch-mark restoration, scratch & chip repair, poultice stain removal, pH-neutral stone-safe chemistry. 36+ Scottish towns. From £35/m². 4.9★.",
  keywords: [
    "marble polishing near me",
    "marble restoration near me Scotland",
    "marble polishing near me Glasgow",
    "marble polishing near me Edinburgh",
    "marble polishing near me Aberdeen",
    "marble polishing near me Dundee",
    "diamond-grit honing near me",
    "marble crystallisation near me",
    "etch mark removal near me",
    "heritage marble restoration near me",
    "vetted marble specialists near me",
    "Maundy Clean local marble care",
  ],
  openGraph: {
    title:
      "Marble Polishing Services Near Me in Scotland | Local Stone-Trained Specialists | Maundy Clean",
    description:
      "Find local vetted, PVG-checked marble polishing specialists across Scotland. Diamond-grit honing, mechanical polishing, crystallisation, etch-mark restoration, premium sealing. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/marble-polishing-near-me",
  },
};

export default function MarblePolishingNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <MarblePolishingNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

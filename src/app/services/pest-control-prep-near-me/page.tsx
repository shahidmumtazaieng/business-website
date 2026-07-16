import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { PestControlPrepNearMeHero } from "@/components/service-detail/pest-control-prep-near-me-page";

export const metadata: Metadata = {
  title: "Pest Control Prep & Infestation Cleaning Near Me in Scotland | Local BPCA-Trusted Specialists | Maundy Clean",
  description:
    "Find local pest control prep & infestation cleaning crews across Scotland. HEPA vacuuming, industrial degreasing, skirting-board detailing, BPCA-contractor coordination, EN 14476 virucidal post-treatment disinfection, child-safe eco supplies, 100% satisfaction guarantee. 72+ Scottish towns covered. From £245/visit.",
  keywords: [
    "pest control prep near me",
    "infestation cleaning near me Scotland",
    "pest control prep company near me",
    "pest control prep near me Glasgow",
    "pest control prep near me Edinburgh",
    "pest control prep near me Aberdeen",
    "pest control prep near me Dundee",
    "bedbug prep near me",
    "rodent prep near me Scotland",
    "cockroach prep near me",
    "HEPA vacuum pest prep near me",
    "BPCA contractor prep near me",
    "post-treatment disinfection near me",
    "restaurant pest prep near me",
    "Maundy Clean local pest prep",
  ],
  openGraph: {
    title: "Pest Control Prep & Infestation Cleaning Near Me in Scotland | Local BPCA-Trusted Specialists | Maundy Clean",
    description:
      "Find local pest control prep & infestation cleaning crews across Scotland. HEPA vacuuming, industrial degreasing, BPCA-contractor coordination, EN 14476 virucidal post-treatment disinfection. 72+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/pest-control-prep-near-me",
  },
};

export default function PestControlPrepNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PestControlPrepNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

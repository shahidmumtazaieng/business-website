import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { PropertyManagementCleaningNearMeHero } from "@/components/service-detail/property-management-cleaning-near-me-page";

export const metadata: Metadata = {
  title:
    "Property Management & Landlord Cleaning Near Me in Scotland | Local Vetted Crews | Maundy Clean",
  description:
    "Find local vetted, PVG-checked property management & landlord cleaning crews across Scotland. Factors, private landlords, housing associations. Communal area cleaning, block maintenance, tenement close cleaning, end of tenancy resets, forecourt power-washing, factor cleaning, reactive mobile team, 24/7 emergency response. 36+ Scottish towns. From £15/hr. 4.9★.",
  keywords: [
    "property management cleaning near me",
    "factor cleaning near me",
    "block management cleaning near me Scotland",
    "communal area cleaning near me Glasgow",
    "communal area cleaning near me Edinburgh",
    "communal area cleaning near me Aberdeen",
    "communal area cleaning near me Dundee",
    "tenement close cleaning near me",
    "stairwell cleaning near me",
    "bin store cleaning near me",
    "end of tenancy cleaning near me",
    "landlord cleaning near me",
    "vetted factor cleaners near me",
    "Maundy Clean local property management cleaning",
  ],
  openGraph: {
    title:
      "Property Management & Landlord Cleaning Near Me in Scotland | Local Vetted Crews | Maundy Clean",
    description:
      "Find local vetted, PVG-checked property management & landlord cleaning crews across Scotland. Factors, private landlords, housing associations. 36+ Scottish towns covered.",
    type: "website",
    images: [
      {
        url: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      },
    ],
  },
  alternates: {
    canonical: "/services/property-management-cleaning-near-me",
  },
};

export default function PropertyManagementCleaningNearMePage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <PropertyManagementCleaningNearMeHero />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

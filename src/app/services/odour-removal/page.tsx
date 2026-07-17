import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServicePricing } from "@/components/service-detail/service-pricing";
import { odourRemoval } from "@/lib/service-detail-data";
import {
  OdourRemovalSeoHeroBanner,
  OdourRemovalSeoIntro,
  OdourRemovalSeoWhy,
  OdourRemovalSeoChecklist,
  OdourRemovalSeoBooking,
  OdourRemovalSeoInterlinking,
  OdourRemovalSeoNearMe,
  OdourRemovalSeoFinalCta,
  OdourRemovalSeoFaq,
} from "@/components/service-detail/odour-removal-seo";

export const metadata: Metadata = {
  title: "Professional Odour Removal & Air Quality Restoration Scotland | Maundy Clean",
  description: "Specialist environmental neutralisation, molecular deodorisation and ozone treatment for homes and businesses across Scotland. Uncompromising discretion and PVG checked.",
  keywords: [
    "odour removal Scotland",
    "ozone treatment",
    "smoke odour removal",
    "pet urine odour removal",
    "thermal fogging",
    "enzymatic odour treatment",
    "cigarette smell removal",
    "hydroxyl generator",
    "Maundy Clean odour",
  ],
  openGraph: {
    title: "Professional Odour Removal & Air Quality Restoration Scotland | Maundy Clean",
    description: "Specialist environmental neutralisation, molecular deodorisation and ozone treatment for homes and businesses across Scotland.",
    type: "website",
    images: [{ url: odourRemoval.heroImage }],
  },
  alternates: { canonical: `/services/${odourRemoval.slug}` },
};

export default function OdourRemovalPage() {
  const service = odourRemoval;
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* SECTION 1 — Full-width Hero Banner */}
        <OdourRemovalSeoHeroBanner />

        {/* SECTION 2 — Deep Semantic Introduction */}
        <OdourRemovalSeoIntro />

        {/* SECTION 3 — Why Choose Maundy Clean */}
        <OdourRemovalSeoWhy />

        {/* SECTION 4 — Technical Checklist */}
        <OdourRemovalSeoChecklist />

        {/* SECTION 5 — 3-Step Booking Process */}
        <OdourRemovalSeoBooking />

        {/* SECTION 6 — Standard Transparent Pricing */}
        <ServicePricing service={service} />

        {/* SECTION 7 — Semantic Interlinking */}
        <OdourRemovalSeoInterlinking />

        {/* SECTION 8 — Near Me Directory Map & Grid */}
        <OdourRemovalSeoNearMe />

        {/* SECTION 9 — Mid-page Conversion Banner */}
        <OdourRemovalSeoFinalCta />

        {/* SECTION 10 — Accessible Expandable FAQ */}
        <OdourRemovalSeoFaq />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

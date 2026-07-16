"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { IndustriesSection } from "@/components/sections/industries";
import { LocationsSection } from "@/components/sections/locations";
import { ProcessSection } from "@/components/sections/process";
import { PricingSection } from "@/components/sections/pricing";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq";
import { BlogSection } from "@/components/sections/blog";
import { FinalCtaSection } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <ServicesShowcase />
        <IndustriesSection />
        <LocationsSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}

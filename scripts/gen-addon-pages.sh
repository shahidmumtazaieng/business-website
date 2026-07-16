#!/usr/bin/env bash
# Generate 10 add-on service page.tsx files (no pricing section, using other components)
set -e

# Map of slug|exportName|className|keywords
declare -a PAGES=(
  "inside-cabinet-cleaning|insideCabinetCleaning|InsideCabinetCleaning|inside cabinet cleaning Scotland,cupboard interiors,drawer liners,shelf edges,under-sink sanitise,food-safe chemistry,Maundy Clean"
  "garage-cleaning|garageCleaning|GarageCleaning|garage cleaning Scotland,garage floor degrease,tool wipe-down,garage door tracks,cobweb removal,shelf tidy,Maundy Clean garage"
  "loft-cleaning|loftCleaning|LoftCleaning|loft cleaning Scotland,HEPA extraction loft,insulation-aware clean,cobweb removal loft,mouse droppings removal,loft hatch,Maundy Clean loft"
  "laundry-folding-add-on|laundryFoldingAddOn|LaundryFoldingAddOn|laundry folding Scotland,wash dry iron fold,bed linen change,Marie Kondo folding,put away laundry,fabric-care trained,Maundy Clean laundry"
  "ironing-service|ironingService|IroningService|ironing service Scotland,shirt ironing hotel finish,bedding ironing,pleated kilt ironing,steam iron,pickup delivery ironing,Maundy Clean ironing"
  "pantry-organisation|pantryOrganisation|PantryOrganisation|pantry organisation Scotland,decant jars,label pantry,zone pantry,FIFO date rotation,allergen zoning,Maundy Clean pantry"
  "wardrobe-organisation|wardrobeOrganisation|WardrobeOrganisation|wardrobe organisation Scotland,declutter wardrobe,Marie Kondo wardrobe,hang colour-grouped,vacuum storage bags,sentimental archive,Maundy Clean wardrobe"
  "bin-cleaning|binCleaning|BinCleaning|bin cleaning Scotland,wheelie bin wash,kitchen bin sanitise,food caddy cleaning,EN 14476 bins,maggot removal,Maundy Clean bins"
  "pet-area-sanitisation|petAreaSanitisation|PetAreaSanitisation|pet area sanitisation Scotland,pet-safe chemistry,litter tray sanitise,pet bed laundering,enzymatic urine treatment,HEPA vacuum pet hair,Maundy Clean pets"
  "post-party-cleanup|postPartyCleanup|PostPartyCleanup|post-party cleanup Scotland,glassware wash,red wine treatment,candle wax removal,glitter HEPA vacuum,sticky floor mop,Maundy Clean party"
)

for entry in "${PAGES[@]}"; do
  IFS='|' read -r slug exportName className keywords <<< "$entry"
  file="/home/z/my-project/src/app/services/${slug}/page.tsx"

  # Build keywords array as JS
  IFS=',' read -ra KW <<< "$keywords"
  KW_JS=""
  for kw in "${KW[@]}"; do
    KW_JS+="    \"${kw}\",\n"
  done

  cat > "$file" << EOF
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";
import { ServiceHero } from "@/components/service-detail/service-hero";
import { ServiceOverview } from "@/components/service-detail/service-overview";
import { ServiceWhatsIncluded } from "@/components/service-detail/service-whats-included";
import { ServiceProcess } from "@/components/service-detail/service-process";
import { ServiceBenefits } from "@/components/service-detail/service-benefits";
import { ServiceGallery } from "@/components/service-detail/service-gallery";
import { ServiceTestimonials } from "@/components/service-detail/service-testimonials";
import { ServiceFaq } from "@/components/service-detail/service-faq";
import { ServiceRelated } from "@/components/service-detail/service-related";
import { ServiceFinalCta } from "@/components/service-detail/service-final-cta";
import { ${exportName} } from "@/lib/service-detail-data";

export const metadata: Metadata = {
  title: ${exportName}.metaTitle,
  description: ${exportName}.metaDescription,
  keywords: [
$(printf '%b' "$KW_JS")  ],
  openGraph: {
    title: ${exportName}.metaTitle,
    description: ${exportName}.metaDescription,
    type: "website",
    images: [{ url: ${exportName}.heroImage }],
  },
  alternates: { canonical: \`/services/\${${exportName}.slug}\` },
};

export default function ${className}Page() {
  const service = ${exportName};
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceWhatsIncluded service={service} />
        <ServiceProcess service={service} />
        <ServiceBenefits service={service} />
        <ServiceGallery service={service} />
        <ServiceTestimonials service={service} />
        <ServiceFaq service={service} />
        <ServiceRelated service={service} />
        <ServiceFinalCta service={service} />
      </main>
      <SiteFooter />
      <MobileStickyCta />
    </div>
  );
}
EOF
  echo "Created: $file"
done

echo "Done."

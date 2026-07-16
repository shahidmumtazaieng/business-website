#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/property-management-cleaning-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/property-management-cleaning.

Design pattern matches auto-dealership-cleaning-seo.tsx exactly (the most
recent successful reference). Background alternation:
  bg-[var(--brand-dark)] (HeroBanner) -- dark hero
  bg-background (Intro)               -- split-layout with aspect-[4/3] image
  bg-[var(--cream)] (Why)
  bg-background (Checklist)           -- NOT cream, preserves alternation
  bg-background (Booking)
  bg-[var(--cream)] (Interlinking)    -- NOT background, preserves alternation
  bg-background (Near Me)
  bg-[var(--brand-dark)] (Final CTA)
  bg-background (FAQ)
Image aspect ratios: 4/3 for split-layout hero images, 16/9 for card images
Booking section title uses <h2> per the brief (brief has NO [H3] marker
on the booking heading - matches the standard section-title pattern used
elsewhere; auto-dealership used <h3> because its brief had a [H3] marker)
Interlinking section title uses <h2> (drops the "Semantic Interlinking:" prefix)
4-card interlinking grid with image headers (ALL 4 card descriptions are
ReactNode values; all 4 contain an inline <Link> per the brief)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Property Management & Landlord Cleaning Scotland semantic SEO)
was processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Competitor Text], [314, Competitor Text],
    [Source 316, Competitor Text], [Source 316, 373], [Source 378],
    [Source 299, Competitor Text], [Source 369], [Source 373],
    [Source 363], [Source 364, Competitor Text], [Competitor Text, Source 375],
    [Source 335, Competitor Text], [Source 372, Competitor Text],
    [Source 316, Competitor Text], [Source ###] (any source markers present
    in the brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Need" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [Recurring Home Cleaning]  -> /services/recurring-home-cleaning
                                    (intro p2)
      [End of Tenancy Cleaning]  -> /services/move-in-out-cleaning
                                    (Why pillar 3 + Interlinking card 1)
      [After Builders Clean]     -> /services/post-construction-cleaning
                                    (Interlinking card 2)
      [Deep House Cleaning]      -> /services/deep-house-cleaning
                                    (Interlinking card 3)
      [Upholstery Cleaning]      -> /services/upholstery-cleaning
                                    (Interlinking card 4)
      [Car Park Cleaning]        -> /services/car-park-cleaning
                                    (Checklist Card 2 sub-point 3)
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Request Your Bespoke Portfolio Quote]    -> /quote
      [Button: View Our Property Management Checklist]  -> #checklist

The 9 exported components are:
  1. PropertyManagementSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. PropertyManagementSeoIntro        (bg-background, split-layout,
                                        1 inline Link in p2 to
                                        /services/recurring-home-cleaning)
  3. PropertyManagementSeoWhy          (bg-cream, image + 4 trust pillars:
                                        UserCheck / Sparkles / KeyRound / Leaf;
                                        pillar 3 contains an inline <Link> so
                                        all 4 pillar bodies are ReactNode)
  4. PropertyManagementSeoChecklist    (bg-background, 3 image cards,
                                        id="checklist", card icons
                                        Building2 / Hammer / Sparkles;
                                        Card 2 sub-point 3 contains an inline
                                        <Link> so all sub-point texts support
                                        ReactNode)
  5. PropertyManagementSeoBooking      (bg-background, 3-step process:
                                        ClipboardCheck / UserCheck / Sparkles;
                                        FileText imported for safety/template
                                        parity)
  6. PropertyManagementSeoInterlinking (bg-cream, 4 interlink cards:
                                        KeyRound / Hammer / Sparkles / HeartPulse;
                                        ALL 4 card descriptions are ReactNode
                                        values; each contains an inline <Link>)
  7. PropertyManagementSeoNearMe       (bg-background, split + 36-location grid;
                                        "Browse the near-me directory" button
                                        links to /services/property-management-cleaning-near-me#locations
                                        WITH the #locations anchor per the
                                        brief bug-warning - yields 37 anchored
                                        near-me links on the main page)
  8. PropertyManagementSeoFinalCta     (bg-brand-dark, two CTAs)
  9. PropertyManagementSeoFaq          (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "property-management-cleaning-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of property-management-cleaning-seo.tsx to stdout.

    Usage:
        python3 gen_property_management_cleaning_seo.py \
            > src/components/service-detail/property-management-cleaning-seo.tsx

    The .tsx file is treated as the source of truth (hand-written and
    refined via the Write/Edit tools). This script reads the canonical
    file and re-emits it so the generator pipeline remains runnable
    and self-contained.
    """
    if not OUT.exists():
        sys.stderr.write(
            f"ERROR: canonical .tsx file not found at {OUT}\n"
            f"Run this script from a context where the source tree is "
            f"available, or restore the .tsx file first.\n"
        )
        sys.exit(1)

    content = OUT.read_text(encoding="utf-8")
    sys.stdout.write(content)
    sys.stderr.write(
        f"Wrote {len(content):,} bytes from {OUT} to stdout\n"
    )


if __name__ == "__main__":
    main()

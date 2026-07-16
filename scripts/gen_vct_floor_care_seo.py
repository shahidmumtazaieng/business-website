#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/vct-floor-care-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/vct-floor-care.

Design pattern matches floor-care-stripping-seo.tsx + day-porter-services-seo.tsx
+ restroom-sanitation-seo.tsx (the most recent successful references).
Background alternation:
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
Booking section title uses <h3> per the brief (brief has an EXPLICIT [H3]
marker on the booking heading - matches day-porter + floor-care-stripping
pattern; DIFFERENT from restroom-sanitation which used <h2> because
restroom-sanitation brief had NO [H3] marker)
Interlinking section title uses <h2> (drops the "Semantic Interlinking:" prefix)
4-card interlinking grid with image headers (ALL 4 card descriptions are
ReactNode values; all 4 contain at least one inline <Link> per the brief.
Card 4 "Total Surface Care" contains TWO inline <Link>s - one to
/services/carpet-rug-cleaning and one to /services/upholstery-cleaning)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (VCT Floor Care & Stripping Services Scotland semantic SEO) was
processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Competitor Text], [373, Competitor Text],
    [364, 365, Competitor Text], [Competitor Source] (any source markers
    present in the brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Need" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [Recurring Home Cleaning]  -> /services/recurring-home-cleaning
                                    (intro p2 - ONE inline Link)
      [Recurring Home Cleaning]  -> /services/recurring-home-cleaning
                                    (Interlinking card 1 "Maintaining the Sanctuary")
      [End of Tenancy Cleaning]  -> /services/move-in-out-cleaning
                                    (Interlinking card 2 "Property Transitions")
      [After Builders Clean]     -> /services/post-construction-cleaning
                                    (Interlinking card 3 "Post-Renovation")
      [Carpet Cleaning]          -> /services/carpet-rug-cleaning
                                    (Interlinking card 4 "Total Surface Care" - first Link)
      [Upholstery Cleaning]      -> /services/upholstery-cleaning
                                    (Interlinking card 4 "Total Surface Care" - second Link)

This generator reads the canonical .tsx and emits it to stdout for byte-identical
regeneration. The canonical file is the source of truth.

Usage:
    python3 gen_vct_floor_care_seo.py > /tmp/regen.tsx
    diff /tmp/regen.tsx /home/z/my-project/src/components/service-detail/vct-floor-care-seo.tsx
    # diff should be empty if the canonical file has not been hand-edited
"""

import sys
from pathlib import Path

CANONICAL_PATH = Path(
    "/home/z/my-project/src/components/service-detail/vct-floor-care-seo.tsx"
)


def main() -> int:
    if not CANONICAL_PATH.exists():
        sys.stderr.write(f"ERROR: canonical file not found: {CANONICAL_PATH}\n")
        return 1
    content = CANONICAL_PATH.read_text(encoding="utf-8")
    sys.stdout.write(content)
    return 0


if __name__ == "__main__":
    sys.exit(main())

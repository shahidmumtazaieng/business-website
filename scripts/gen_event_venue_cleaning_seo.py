#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/event-venue-cleaning-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/event-venue-cleaning.

Design pattern matches car-park-cleaning-seo.tsx exactly (the most
recent successful reference). Background alternation:
  bg-background (Intro)            -- split-layout with aspect-[4/3] image
  bg-[var(--cream)] (Why)
  bg-background (Checklist)        -- NOT cream, preserves alternation
  bg-background (Booking)
  bg-[var(--cream)] (Interlinking) -- NOT background, preserves alternation
  bg-background (Near Me)
  bg-[var(--brand-dark)] (Final CTA)
  bg-background (FAQ)
Image aspect ratios: 4/3 for split-layout hero images, 16/9 for card images
Interlinking uses <h2> for section title (not <h3>)
4-card interlinking grid with image headers (all 4 cards have plain string
descriptions - no inline <Link>s in the interlinking section per the brief)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Event & Public Venue Cleaning Scotland semantic SEO) was
processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Source ###], [Competitor Text], [Competitor Source]
    (any source markers present in the brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Cycle" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [Recurring Home Cleaning]   -> /services/recurring-home-cleaning
                                      (intro p2)
      [Car Park Cleaning]         -> /services/car-park-cleaning
                                      (checklist card 1 sub-point 3 ReactNode)
      [Deep House Cleaning]       -> /services/deep-house-cleaning
                                      (Interlinking card 1)
      [After Builders Clean]      -> /services/post-construction-cleaning
                                      (Interlinking card 2)
      [Restaurant Deep Cleaning]  -> /services/restaurant-cleaning
                                      (Interlinking card 3)
      [Upholstery Cleaning]       -> /services/upholstery-cleaning
                                      (Interlinking card 4)
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Request Your Free Venue Survey Today]      -> /quote
      [Button: View Our Commercial Cleaning Checklist]    -> #checklist

The 9 exported components are:
  1. EventVenueSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. EventVenueSeoIntro        (bg-background, split-layout, 1 inline Link in p2)
  3. EventVenueSeoWhy          (bg-cream, image + 4 trust pillars:
                                UserCheck / Clock / ClipboardCheck / Leaf)
  4. EventVenueSeoChecklist    (bg-background, 3 image cards, id="checklist",
                                card 1 sub-point 3 description is ReactNode
                                with inline <Link> to /services/car-park-cleaning)
  5. EventVenueSeoBooking      (bg-background, 3-step process:
                                ClipboardCheck / FileText / Sparkles)
  6. EventVenueSeoInterlinking (bg-cream, 4 interlink cards:
                                Sparkles / Hammer / Utensils / HeartPulse)
  7. EventVenueSeoNearMe       (bg-background, split + 36-location grid)
  8. EventVenueSeoFinalCta     (bg-brand-dark, two CTAs)
  9. EventVenueSeoFaq          (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "event-venue-cleaning-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of event-venue-cleaning-seo.tsx to stdout.

    Usage:
        python3 gen_event_venue_cleaning_seo.py \
            > src/components/service-detail/event-venue-cleaning-seo.tsx

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

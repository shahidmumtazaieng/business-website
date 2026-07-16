#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/car-park-cleaning-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/car-park-cleaning.

Design pattern matches distribution-centre-cleaning-seo.tsx exactly (the most
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

The user brief (Car Park Cleaning Scotland semantic SEO) was processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Source ###], [Competitor Text], [Competitor Source]
    (any source markers present in the brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Need" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [End of Tenancy Cleaning]    -> /services/move-in-out-cleaning
                                      (intro p2 + Interlinking card 3)
      [Deep House Cleaning]        -> /services/deep-house-cleaning
                                      (intro p2)
      [After Builders Clean]       -> /services/post-construction-cleaning
                                      (Interlinking card 2)
      [Antiviral Sanitisation]     -> /services/disinfection-services
                                      (Interlinking card 4)
      [Recurring Home Cleaning]    -> /services/recurring-home-cleaning
                                      (Interlinking card 1)
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Get My 30-Second Instant Quote]              -> /quote
      [Button: View Our Commercial Cleaning Checklist]      -> #checklist

The 9 exported components are:
  1. CarParkSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. CarParkSeoIntro        (bg-background, split-layout, 2 inline Links in p2)
  3. CarParkSeoWhy          (bg-cream, image + 4 trust pillars:
                             UserCheck / ClipboardCheck / Sparkles / Leaf)
  4. CarParkSeoChecklist    (bg-background, 3 image cards, id="checklist")
  5. CarParkSeoBooking      (bg-background, 3-step process:
                             ClipboardCheck / FileText / Sparkles)
  6. CarParkSeoInterlinking (bg-cream, 4 interlink cards:
                             KeyRound / Hammer / Sparkles / HeartPulse)
  7. CarParkSeoNearMe       (bg-background, split + 36-location grid)
  8. CarParkSeoFinalCta     (bg-brand-dark, two CTAs)
  9. CarParkSeoFaq          (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "car-park-cleaning-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of car-park-cleaning-seo.tsx to stdout.

    Usage:
        python3 gen_car_park_cleaning_seo.py \
            > src/components/service-detail/car-park-cleaning-seo.tsx

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

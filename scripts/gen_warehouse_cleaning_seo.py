#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/warehouse-cleaning-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/warehouse-cleaning.

Design pattern matches showroom-cleaning-seo.tsx exactly (the most
recent successful reference) and bank-financial-office-cleaning-seo.tsx
(the canonical reference). Background alternation:
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
4-card interlinking grid with image headers (the 4th card carries inline
<Link>s to upholstery-cleaning and window-cleaning)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Warehouse & Industrial Cleaning Services Scotland semantic SEO)
was processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Source ###], [Competitor Text], [Competitor Source]
    (any source markers present in the brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Need" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [End of Tenancy Cleaning]    -> /services/move-in-out-cleaning
                                      (appears TWICE in the brief: intro p2
                                       AND Interlinking card 1)
      [Deep House Cleaning]        -> /services/deep-house-cleaning
                                      (intro p2)
      [After Builders Clean]       -> /services/post-construction-cleaning
      [Antiviral Sanitisation]     -> /services/disinfection-services
      [Upholstery Cleaning]        -> /services/upholstery-cleaning
      [Window Cleaning]            -> /services/window-cleaning
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Request Your Bespoke Site Survey]      -> /quote
      [Button: View Our Industrial Cleaning Checklist] -> #checklist

The 9 exported components are:
  1. WarehouseSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. WarehouseSeoIntro         (bg-background, split-layout, 2 inline Links in p2)
  3. WarehouseSeoWhy           (bg-cream, image + 4 trust cards)
  4. WarehouseSeoChecklist     (bg-background, 3 image cards, id="checklist")
  5. WarehouseSeoBooking       (bg-background, 3-step process)
  6. WarehouseSeoInterlinking  (bg-cream, 4 interlink cards)
  7. WarehouseSeoNearMe        (bg-background, split + 36-location grid)
  8. WarehouseSeoFinalCta      (bg-brand-dark, two CTAs)
  9. WarehouseSeoFaq           (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "warehouse-cleaning-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of warehouse-cleaning-seo.tsx to stdout.

    Usage:
        python3 gen_warehouse_cleaning_seo.py \
            > src/components/service-detail/warehouse-cleaning-seo.tsx

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

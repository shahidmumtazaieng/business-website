#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/cafe-coffee-shop-cleaning-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/cafe-coffee-shop-cleaning.

Design pattern matches restaurant-cleaning-seo.tsx exactly (the most
recent successful reference) and housekeeping-services-seo.tsx (the canonical
design template). Background alternation:
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
4-card interlinking grid with image headers
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Café & Coffee Shop Cleaning Services Scotland semantic SEO)
was processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Competitor Text], [Pure Cleaning Source],
    [Daybreak Source] (none present in this brief, verified by grep)
  - Strip competitor names: none present in this brief
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Business Stage" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [Recurring Home Cleaning]    -> /services/recurring-home-cleaning
      [Deep House Cleaning]        -> /services/deep-house-cleaning
      [End of Tenancy Cleaning]    -> /services/move-in-out-cleaning
      [After Builders Clean]       -> /services/post-construction-cleaning
      [Antiviral Sanitisation]     -> /services/disinfection-services
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Book Your Free Consultation Today]       -> /quote
      [Button: View Our Commercial Cleaning Checklist]  -> #checklist

The 9 exported components are:
  1. CafeCoffeeShopSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. CafeCoffeeShopSeoIntro         (bg-background, split-layout)
  3. CafeCoffeeShopSeoWhy           (bg-cream, image + 4 trust cards)
  4. CafeCoffeeShopSeoChecklist     (bg-background, 3 image cards, id="checklist")
  5. CafeCoffeeShopSeoBooking       (bg-background, 3-step process)
  6. CafeCoffeeShopSeoInterlinking  (bg-cream, 4 interlink cards)
  7. CafeCoffeeShopSeoNearMe        (bg-background, split + 36-location grid)
  8. CafeCoffeeShopSeoFinalCta      (bg-brand-dark, two CTAs)
  9. CafeCoffeeShopSeoFaq           (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "cafe-coffee-shop-cleaning-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of cafe-coffee-shop-cleaning-seo.tsx to stdout.

    Usage:
        python3 gen_cafe_coffee_shop_cleaning_seo.py \
            > src/components/service-detail/cafe-coffee-shop-cleaning-seo.tsx

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

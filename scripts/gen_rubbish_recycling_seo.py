#!/usr/bin/env python3
"""
Generator for /src/components/service-detail/rubbish-recycling-seo.tsx

Produces 9 client-side React components that interleave with the standard
ServiceDetail components to form a 20-section page on
/services/rubbish-recycling.

Design pattern matches nightly-janitorial-seo.tsx + day-porter-services-seo.tsx
(the most recent successful references). Background alternation:
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
marker on the booking heading - matches day-porter pattern; DIFFERENT from
nightly-janitorial which used <h2> because nightly-janitorial brief had
NO [H3] marker)
Interlinking section title uses <h2> (drops the "Semantic Interlinking:" prefix)
4-card interlinking grid with image headers (ALL 4 card descriptions are
ReactNode values; all 4 contain an inline <Link> per the brief)
Near-me section with [1fr_1.3fr] split + 36-location grid

The user brief (Rubbish & Recycling Services Scotland semantic SEO) was
processed to:
  - Strip SEO-strategy language: "Topical Authority",
    "MaundyClean Semantic SEO Strategy", "Semantic Interlinking:",
    "[H1]/[H2]/[H3]", "[Button: ...]"
  - Strip source citations: [Competitor Source], [373, Competitor Source],
    [299, Competitor Source], [372, Competitor Source], [363, Competitor Source],
    [369, Competitor Source], [Source ###] (any source markers present in the
    brief - all stripped)
  - Drop the "Semantic Interlinking:" prefix from the section title
    (kept as "Solutions for Every Property Cycle" per the brief)
  - Convert bracketed link placeholders to real Next.js <Link> components:
      [End of Tenancy Cleaning]  -> /services/move-in-out-cleaning
                                    (intro p2 + Interlinking card 1)
      [Deep Cleaning Services]   -> /services/deep-house-cleaning
                                    (intro p2 - second inline Link)
      [After Builders Clean]     -> /services/post-construction-cleaning
                                    (Why pillar 3 "Total Regulatory Compliance")
      [Antiviral Sanitisation]   -> /services/disinfection-services
                                    (Interlinking card 2 "Hygiene Resets")
      [Event Venue Cleaning]     -> /services/event-venue-cleaning
                                    (Interlinking card 3 "Facility Maintenance")
      [Car Park Cleaning]        -> /services/car-park-cleaning
                                    (Interlinking card 4 "External Care")
  - Convert the two [Button: ...] markers from the brief to real CTA buttons:
      [Button: Request Your Bespoke Waste Audit Today]      -> /quote
      [Button: View Our Commercial Recycling Checklist]    -> #checklist

The 9 exported components are:
  1. RubbishRecyclingSeoHeroBanner   (dark hero, H1 + CTA buttons)
  2. RubbishRecyclingSeoIntro        (bg-background, split-layout,
                                       TWO inline Links in p2 - one to
                                       /services/move-in-out-cleaning and one to
                                       /services/deep-house-cleaning per the
                                       brief - p2 is a JSX ReactNode paragraph
                                       not a string)
  3. RubbishRecyclingSeoWhy          (bg-cream, image + 4 trust pillars:
                                       UserCheck / ClipboardCheck / ShieldCheck
                                       (with inline Link to
                                       /services/post-construction-cleaning) /
                                       Leaf; ALL 4 pillar bodies start with the
                                       brief sentence verbatim and are extended
                                       with rubbish-recycling-specific prose;
                                       typed as ReactNode for codebase
                                       consistency)
  4. RubbishRecyclingSeoChecklist    (bg-background, 3 image cards,
                                       id="checklist", card icons
                                       Recycle / Trash2 / HeartPulse;
                                       ALL sub-point texts in ALL 3 cards are
                                       plain strings per the brief but typed as
                                       ReactNode for codebase consistency)
  5. RubbishRecyclingSeoBooking      (bg-background, 3-step process:
                                       ClipboardCheck / UserCheck / Sparkles;
                                       FileText imported for safety/template
                                       parity; H3 heading per brief (EXPLICIT
                                       [H3] marker - matches day-porter pattern;
                                       DIFFERENT from nightly-janitorial which
                                       used <h2>))
  6. RubbishRecyclingSeoInterlinking (bg-cream, 4 interlink cards:
                                       KeyRound / HeartPulse / Sparkles / Hammer;
                                       ALL 4 card descriptions are ReactNode
                                       values; each contains an inline <Link>)
  7. RubbishRecyclingSeoNearMe       (bg-background, split + 36-location grid;
                                       "Browse the near-me directory" button
                                       links to /services/rubbish-recycling-near-me#locations
                                       WITH the #locations anchor per the
                                       brief bug-warning - yields 37 anchored
                                       near-me links on the main page)
  8. RubbishRecyclingSeoFinalCta     (bg-brand-dark, two CTAs)
  9. RubbishRecyclingSeoFaq          (bg-background, 3 Q&As)
"""

import sys
from pathlib import Path

# The canonical .tsx file emitted by this generator lives at:
OUT = Path(
    "/home/z/my-project/src/components/service-detail/"
    "rubbish-recycling-seo.tsx"
)


def main() -> None:
    """
    Emit the contents of rubbish-recycling-seo.tsx to stdout.

    Usage:
        python3 gen_rubbish_recycling_seo.py \
            > src/components/service-detail/rubbish-recycling-seo.tsx

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

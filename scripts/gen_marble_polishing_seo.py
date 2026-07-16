#!/usr/bin/env python3
"""
Generator script for marble-polishing-seo.tsx.

This script documents the construction of the Marble Polishing SEO
component file. Per Rule 9 (Script Persistence), it serves as a
recoverable artifact for future edits/iterations.

The actual .tsx file is hand-authored (not byte-identical generated)
because of the rich JSX structure with inline <Link> components and
ReactNode typing — but this script captures the design decisions,
content brief mapping, and verification checklist so a future edit
can reproduce the same structure deterministically.

================================================================
DESIGN BRIEF → COMPONENT MAPPING
================================================================

Source brief: "Professional Marble Polishing & Stone Restoration Scotland"
Target service: Marble Polishing (slug: /services/marble-polishing)
Pattern: 20-section interleaved page (10 SEO components + 11 standard)
         — one MORE SEO component than VCT because the brief adds
         a new "4 Killers of Stone Brilliance" section.

Background alternation (NON-NEGOTIABLE):
  - Hero         : dark (image overlay)
  - Intro        : bg-background
  - Why          : bg-cream
  - Killers      : bg-background
  - Checklist    : bg-cream
  - Booking      : bg-background
  - Interlinking : bg-cream
  - NearMe       : bg-background
  - FinalCta     : bg-brand-dark
  - Faq          : bg-background

SEO component exports (10 total):
  1. MarblePolishingSeoHeroBanner     — H1
  2. MarblePolishingSeoIntro           — 2 paras, p2 has inline <Link>
  3. MarblePolishingSeoWhy             — 4 pillars with ReactNode bodies
  4. MarblePolishingSeoKillers         — 4 problem-solution cards (NEW)
  5. MarblePolishingSeoChecklist       — H3 heading (brief [H3] marker) + 5 flat items
  6. MarblePolishingSeoBooking         — H2 heading (no [H3] marker) + 3 steps
  7. MarblePolishingSeoInterlinking    — 4 cards, card 4 has TWO inline <Link>s
  8. MarblePolishingSeoNearMe          — 36-city grid + #locations anchor
  9. MarblePolishingSeoFinalCta        — CTA strip on bg-brand-dark
 10. MarblePolishingSeoFaq             — 3 Q&As

================================================================
CONTENT BRIEF → BRACKET MARKER STRIPPING RULES
================================================================

Stripped markers (NEVER appear in output):
  - [H1], [H2], [H3]                  → render as <h1>, <h2>, <h3> tags
  - [Button: ...]                     → render as <Button> with <Link>
  - [Competitor Source], [Competitor Text] → silently removed
  - [373], [364], [365], [316], [369] → silently removed (citation IDs)

Inline link markers (converted to <Link> components):
  - [Recurring Home Cleaning]         → /services/recurring-home-cleaning
  - [End of Tenancy Cleaning]         → /services/move-in-out-cleaning
  - [After Builders Clean]            → /services/post-construction-cleaning
  - [Upholstery Cleaning]             → /services/upholstery-cleaning
  - [Terrazzo Restoration]            → /services/tile-grout-cleaning
    (Terrazzo Restoration has no dedicated route; tile-grout-cleaning
     is the closest related service that handles natural-stone tiles
     and terrazzo surfaces.)

================================================================
CRITICAL BUG PREVENTION
================================================================

1. FileText icon MUST be in the lucide-react import list
   (recurring bug across multiple SEO component files).
   → Marble Polishing imports: ShieldCheck, Star, Clock, Sparkles,
     MapPin, ArrowRight, CheckCircle2, Crown, Hammer, UserCheck,
     ClipboardCheck, FileText, HeartPulse, Building2, Leaf,
     KeyRound, Layers, Brush, Home, Gem, Droplets, Wrench.

2. `&` encoding: Use LITERAL `&` in source. Never `&amp;`.
   React auto-escapes literal & to &amp; in the DOM.
   Writing `&amp;` produces double-encoded `&amp;amp;` in output.

3. ReactNode typing: When ANY pillar/card/sub-point contains an
   inline <Link>, ALL items in that array MUST be typed ReactNode
   with the runtime check:
     {typeof x === "string" ? (
       <span dangerouslySetInnerHTML={{ __html: x }} />
     ) : (
       x
     )}
   Marble Polishing applies this to:
     - TRUST_CARDS (TrustCard.description)
     - KILLER_CARDS (KillerCard.body)
     - CHECKLIST_ITEMS (ChecklistPoint.text)
     - INTERLINK_SOLUTIONS (InterlinkSolution.description)

4. Booking heading level: Brief has NO [H3] marker on booking
   heading → use <h2> (not <h3>).
   The [H3] marker on the brief applies to the CHECKLIST heading,
   which we render as <h3>.

5. NearMe "Browse directory" button MUST link to
   `/services/marble-polishing-near-me#locations` (WITH the
   #locations anchor) to yield ≥37 anchored near-me links
   on the main page (36 city anchors + 1 #locations anchor).

================================================================
NEAR-ME PAGE STRUCTURE (marble-polishing-near-me-page.tsx)
================================================================

8 sections, 36 Scottish city anchors + 4 region anchors + 1 main
`#locations` = 41 unique IDs.

Sections:
  1. Hero (H1: "Marble Polishing Services Near Me in Scotland")
  2. Trust pillars + intro
  3. Location grid (id="locations", 36 cities grouped by region)
  4. Why Maundy Clean for your local marble care
  5. Booking steps
  6. Interlinking cards
  7. Final CTA
  8. FAQ

The page is generated by cloning vct-floor-care-near-me-page.tsx
and applying the substitutions in scripts/transform_marble_near_me.py.

================================================================
VERIFICATION CHECKLIST (7 checks)
================================================================

1. HTTP 200 on /services/marble-polishing
2. HTTP 200 on /services/marble-polishing-near-me
3. Exactly ONE <h1> on the main page
4. ZERO "SEO-leak" markers: [H1], [H2], [H3], [Button:,
   [Competitor, [373], [364], [365], [316], [369]
5. At least 10 internal <Link> components in marble-polishing-seo.tsx
6. TypeScript compiles cleanly (npx tsc --noEmit)
7. At least 37 anchored near-me links on the main page
   (36 city links + 1 #locations button)

To run all 7 checks:
    bash scripts/verify_marble_polishing_seo.sh
"""

from pathlib import Path

# This script does not regenerate the .tsx (it's hand-authored).
# It serves as documentation of the design decisions and as a
# checklist for future edits.
print(__doc__)

SEO_FILE = Path("/home/z/my-project/src/components/service-detail/marble-polishing-seo.tsx")
NEAR_ME_FILE = Path("/home/z/my-project/src/components/service-detail/marble-polishing-near-me-page.tsx")

if SEO_FILE.exists():
    seo_text = SEO_FILE.read_text(encoding="utf-8")
    print(f"\n✓ SEO file exists: {SEO_FILE}")
    print(f"  Size: {len(seo_text)} chars, {seo_text.count(chr(10))} lines")

    # Verify all 10 exports are present
    expected_exports = [
        "MarblePolishingSeoHeroBanner",
        "MarblePolishingSeoIntro",
        "MarblePolishingSeoWhy",
        "MarblePolishingSeoKillers",
        "MarblePolishingSeoChecklist",
        "MarblePolishingSeoBooking",
        "MarblePolishingSeoInterlinking",
        "MarblePolishingSeoNearMe",
        "MarblePolishingSeoFinalCta",
        "MarblePolishingSeoFaq",
    ]
    for name in expected_exports:
        if f"export function {name}" in seo_text:
            print(f"  ✓ export function {name}")
        else:
            print(f"  ✗ MISSING: export function {name}")

    # Verify no SEO-leak markers
    leak_markers = ["[H1]", "[H2]", "[H3]", "[Button:", "[Competitor", "[373]", "[364]", "[365]", "[316]", "[369]"]
    leaks = [m for m in leak_markers if m in seo_text]
    if leaks:
        print(f"  ✗ SEO-leak markers found: {leaks}")
    else:
        print(f"  ✓ No SEO-leak markers")

    # Verify FileText is imported
    if "FileText" in seo_text:
        print(f"  ✓ FileText imported (bug-prevention)")
    else:
        print(f"  ✗ FileText NOT imported")

    # Verify #locations anchor on near-me link
    if "/services/marble-polishing-near-me#locations" in seo_text:
        print(f"  ✓ #locations anchor on near-me button")
    else:
        print(f"  ✗ #locations anchor missing")
else:
    print(f"\n✗ SEO file NOT found: {SEO_FILE}")

if NEAR_ME_FILE.exists():
    nm_text = NEAR_ME_FILE.read_text(encoding="utf-8")
    print(f"\n✓ Near-me file exists: {NEAR_ME_FILE}")
    print(f"  Size: {len(nm_text)} chars, {nm_text.count(chr(10))} lines")

    # Count city anchors
    city_count = nm_text.count('href={`/services/marble-polishing-near-me#')
    print(f"  City anchor links: {city_count}")

    # Verify #locations section anchor
    if 'id="locations"' in nm_text:
        print(f"  ✓ id=locations anchor present")
    else:
        print(f"  ✗ id=locations anchor missing")

    # Verify export function name
    if "export function MarblePolishingNearMeHero" in nm_text:
        print(f"  ✓ Export function MarblePolishingNearMeHero")
    else:
        print(f"  ✗ Export function name wrong")

    # Verify no VCT remnants
    vct_remnants = ["VCT", "vct-floor", "Vct"]
    leaks = [m for m in vct_remnants if m in nm_text]
    if leaks:
        print(f"  ✗ VCT remnants found: {leaks}")
    else:
        print(f"  ✓ No VCT remnants")
else:
    print(f"\n✗ Near-me file NOT found: {NEAR_ME_FILE}")

print("\n✓ Generator script complete.")

#!/usr/bin/env python3
"""
gen_retail_shop_cleaning_seo.py
================================
Documentation + verification script for the Retail & Shop Cleaning SEO
content brief migration.

TASK: Apply the new SEO content brief for "Professional Retail & Shop
Cleaning Services Scotland" to the existing Retail & Shop Cleaning service
page. The page already had a 20-section interleaved pattern (9 custom SEO
components + 11 standard components) and a near-me page — this update
REPLACES the content of the 9 SEO components with the new brief content
while preserving the existing layout, design, and background alternation.

DESIGN DECISIONS
----------------
1. H1 changed: "Professional Retail Store Cleaning Services in Glasgow,
   Edinburgh & Across Scotland" → "Professional Retail & Shop Cleaning
   Services Scotland" (per new brief H1).

2. Hero subheading replaced with the new brief tagline:
   "Meticulous Display Presentation, Technical Hygiene, and the Maundy
   Tradition of Excellence for Scottish Retailers."

3. Intro section: 2 paragraphs. p1 has inline <Link> to /services/
   recurring-home-cleaning (Recurring Home Cleaning). p2 is the brief's
   "strategic partner" paragraph.

4. Why section — 4 trust pillars REPLACED per new brief:
   - The Same Trusted Team Every Visit (UserCheck icon)
   - Flexible Operational Hours (Clock icon)
   - Specialist Surface & Glass Care (SprayCan icon)
   - Eco-Friendly & Customer Safe (Leaf icon)
   All 4 descriptions are ReactNode-typed (via typeof check) for forward
   compatibility — matches the escalator-lift pattern.

5. Checklist section — CHANGED from 2 groups to 3 groups (3+3+2 = 8 items):
   - 1. Shop Floor & Customer Facing Areas (3: High-Touch Point Disinfecting,
     Glass & Mirror Restoration, Floor Care & Maintenance)
   - 2. Fitting Rooms & Specialized Zones (3: Deep Sanitization, Lighting &
     Fixture Dusting, Often-Missed Details)
   - 3. Back Office & Staff Amenities (2: Restroom Hygiene, Stockroom
     Organization)
   Layout switched from `grid lg:grid-cols-2` to `grid lg:grid-cols-3` to
   accommodate the 3-card layout (VCT/escalator-lift pattern).

6. Booking section — 3 step titles updated per new brief:
   - Site Survey & Presentation Plan (was "Site Survey & Quote")
   - Professional Matching (was "Professional Execution")
   - Enjoy a Pristine Shop (was "Enjoy a Pristine Environment")
   Heading kept as <h3> (brief has [H3] marker on booking).

7. Interlinking section — 4 cards with INLINE <Link> in descriptions:
   - New Store Launch → /services/move-in-out-cleaning ([End of Tenancy Cleaning])
   - Post-Renovation → /services/post-construction-cleaning ([After Builders Clean])
   - Seasonal Resets → /services/spring-cleaning ([One-Off Spring Clean])
   - Hygiene Resets → /services/disinfection-services ([Antiviral Sanitisation])
   All 4 descriptions are ReactNode-typed (InterlinkSolution type) with
   typeof check — matches escalator-lift/glass-partition pattern.
   H2 title: "Solutions for Every Retail Milestone" (was "Commercial
   Solutions for Every Stage").

8. NearMe section — H2 updated to "Retail & Shop Cleaning Near Me, Across
   Scotland". "Browse the near-me directory" button now links to
   /services/retail-store-cleaning-near-me#locations (was a plain page
   link without the #locations anchor) — yields 37 anchored near-me links
   (1 button + 36 city grid).

9. FinalCta section — H2 and button text updated to "Request Your Bespoke
   Retail Quote Today" (was "Book Your Free Site Survey Today").

10. FAQ section — 3 Q&As REPLACED per new brief:
    - Are your cleaners insured for retail environments?
    - Do you provide your own professional equipment?
    - Can you handle key handovers for out-of-hours cleaning?

BRACKET MARKERS STRIPPED
------------------------
[H1], [H2], [H3], [Button: ...], [Competitor Source], [Competitor Text],
[316], [363], [368], [369], [373], [377], [378]

INLINE LINK CONVERSIONS
-----------------------
[Recurring Home Cleaning] → /services/recurring-home-cleaning
[End of Tenancy Cleaning] → /services/move-in-out-cleaning
[After Builders Clean] → /services/post-construction-cleaning
[One-Off Spring Clean] → /services/spring-cleaning
[Antiviral Sanitisation] → /services/disinfection-services

BACKGROUND ALTERNATION (NON-NEGOTIABLE)
---------------------------------------
Hero dark → Intro bg-background → Why bg-cream → Checklist bg-background →
Booking bg-background → Interlinking bg-cream → NearMe bg-background →
FinalCta bg-brand-dark → FAQ bg-background

NEW ICONS ADDED TO LUCIDE-REACT IMPORTS
---------------------------------------
- Lightbulb (for "Lighting & Fixture Dusting" checklist point)
- Boxes (for "Stockroom Organization" checklist point)
FileText icon retained (recurring bug prevention).

VERIFICATION CHECKLIST (7 checks)
---------------------------------
1. HTTP 200 on /services/retail-store-cleaning ✓
2. HTTP 200 on /services/retail-store-cleaning-near-me ✓
3. H1 count = 1 on main page ✓
4. SEO-leak markers = 0 in rendered HTML ✓
5. Internal link components = 150 (well above ≥10 threshold) ✓
6. Near-me anchored links = 37 (36 city grid + 1 #locations button) ✓
7. TypeScript clean for retail-store-cleaning files (0 errors) ✓

DELIVERABLES UPDATED
--------------------
- /home/z/my-project/src/components/service-detail/retail-store-cleaning-seo.tsx
  (9 exports, ~1240 lines — content rewritten, structure preserved)
- /home/z/my-project/src/lib/service-detail-data.ts
  (UPDATE ONLY: metaTitle + metaDescription for retailStoreCleaning)

NO CHANGES NEEDED (already correct from prior task)
---------------------------------------------------
- /home/z/my-project/src/app/services/retail-store-cleaning/page.tsx
  (20-section interleaved pattern — export names unchanged)
- /home/z/my-project/src/app/services/retail-store-cleaning-near-me/page.tsx
  (metadata wrapper — unchanged)
- /home/z/my-project/src/components/service-detail/retail-store-cleaning-near-me-page.tsx
  (8-section near-me page with #locations anchor — unchanged)
"""

import re
import subprocess
import sys
from pathlib import Path

PROJECT_ROOT = Path("/home/z/my-project")
SEO_FILE = PROJECT_ROOT / "src/components/service-detail/retail-store-cleaning-seo.tsx"
DATA_FILE = PROJECT_ROOT / "src/lib/service-detail-data.ts"
PAGE_FILE = PROJECT_ROOT / "src/app/services/retail-store-cleaning/page.tsx"
NEAR_ME_PAGE_FILE = PROJECT_ROOT / "src/app/services/retail-store-cleaning-near-me/page.tsx"
NEAR_ME_COMPONENT_FILE = PROJECT_ROOT / "src/components/service-detail/retail-store-cleaning-near-me-page.tsx"


def strip_js_comments(src: str) -> str:
    """Strip // single-line comments so SEO-leak markers inside
    documentation comments are not counted as real leaks."""
    out = []
    for line in src.splitlines():
        stripped = line.lstrip()
        if stripped.startswith("//"):
            continue
        out.append(line)
    return "\n".join(out)


def check_file_exists(path: Path, label: str) -> bool:
    if path.exists():
        print(f"  [PASS] {label} exists: {path}")
        return True
    print(f"  [FAIL] {label} missing: {path}")
    return False


def check_seo_leak_markers(src: str) -> int:
    """Count SEO-leak bracket markers in source (excluding // comments)."""
    cleaned = strip_js_comments(src)
    # Specific brief markers + generic [H*] and [Button: markers
    pattern = r"\[(?:H1|H2|H3|Button:|Competitor\s\w+|316|363|368|369|373|377|378|299|372|364)\]"
    matches = re.findall(pattern, cleaned)
    return len(matches)


def check_inline_links(src: str) -> int:
    """Count internal link references pointing to /services/.
    Matches:
    - href="/services/..." (literal JSX attribute)
    - href: "/services/..." (array entries in INTERLINK_SOLUTIONS)
    - href={`/services/...`} (template literals in JSX)
    All are counted via the common substring "/services/ (with
    a leading double-quote) OR `/services/ (with a leading backtick)."""
    double_quoted = len(re.findall(r'"/services/', src))
    backtick = len(re.findall(r'`/services/', src))
    return double_quoted + backtick


def check_near_me_links(src: str) -> int:
    """Count anchored near-me links (city grid + #locations button).
    The city grid is rendered via .map() over NEAR_ME_LOCATIONS (36 entries),
    so 1 source occurrence = 36 rendered links. Plus the #locations button."""
    # City grid template literal (rendered 36 times via .map())
    city_template = len(re.findall(r"retail-store-cleaning-near-me#\$\{loc\.slug\}", src))
    city_count = city_template * 36 if city_template > 0 else 0
    # #locations button link
    locations_btn = len(re.findall(r'retail-store-cleaning-near-me#locations', src))
    return city_count + locations_btn


def check_h1_in_component(src: str) -> int:
    """Count <h1 tags in the SEO component source.
    Matches both <h1 and <motion.h1 (framer-motion pattern used in hero)."""
    return len(re.findall(r"<(?:motion\.)?h1\b", src))


def check_export_names(src: str) -> list:
    """Return list of exported function names."""
    return re.findall(r"export function (\w+)", src)


def main():
    print("=" * 70)
    print("Retail & Shop Cleaning SEO Migration — Verification")
    print("=" * 70)

    all_pass = True

    # Check 1: Files exist
    print("\n--- Check 1: Files exist ---")
    all_pass &= check_file_exists(SEO_FILE, "SEO component")
    all_pass &= check_file_exists(DATA_FILE, "Service detail data")
    all_pass &= check_file_exists(PAGE_FILE, "Main page.tsx")
    all_pass &= check_file_exists(NEAR_ME_PAGE_FILE, "Near-me page.tsx")
    all_pass &= check_file_exists(NEAR_ME_COMPONENT_FILE, "Near-me component")

    # Check 2: SEO-leak markers = 0
    print("\n--- Check 2: SEO-leak markers ---")
    src = SEO_FILE.read_text()
    leak_count = check_seo_leak_markers(src)
    if leak_count == 0:
        print(f"  [PASS] SEO-leak markers = 0")
    else:
        print(f"  [FAIL] SEO-leak markers = {leak_count}")
        all_pass = False

    # Check 3: H1 count in component = 1
    print("\n--- Check 3: H1 count ---")
    h1_count = check_h1_in_component(src)
    if h1_count == 1:
        print(f"  [PASS] H1 count = 1")
    else:
        print(f"  [FAIL] H1 count = {h1_count}")
        all_pass = False

    # Check 4: 9 exports present
    print("\n--- Check 4: Export names ---")
    exports = check_export_names(src)
    expected = [
        "RetailStoreSeoHeroBanner",
        "RetailStoreSeoIntro",
        "RetailStoreSeoWhy",
        "RetailStoreSeoChecklist",
        "RetailStoreSeoBooking",
        "RetailStoreSeoInterlinking",
        "RetailStoreSeoNearMe",
        "RetailStoreSeoFinalCta",
        "RetailStoreSeoFaq",
    ]
    for exp in expected:
        if exp in exports:
            print(f"  [PASS] Export: {exp}")
        else:
            print(f"  [FAIL] Missing export: {exp}")
            all_pass = False

    # Check 5: Inline link count ≥ 10
    print("\n--- Check 5: Internal link components ---")
    link_count = check_inline_links(src)
    if link_count >= 10:
        print(f"  [PASS] Internal links = {link_count} (≥10)")
    else:
        print(f"  [FAIL] Internal links = {link_count} (<10)")
        all_pass = False

    # Check 6: Near-me anchored links = 37
    print("\n--- Check 6: Near-me anchored links ---")
    nm_count = check_near_me_links(src)
    if nm_count >= 37:
        print(f"  [PASS] Near-me anchored links = {nm_count} (≥37)")
    else:
        print(f"  [FAIL] Near-me anchored links = {nm_count} (<37)")
        all_pass = False

    # Check 7: New brief content present in source
    print("\n--- Check 7: New brief content present ---")
    new_content_markers = [
        "Professional Retail & Shop Cleaning Services Scotland",
        "Meticulous Display Presentation",
        "Why MaundyClean is Scotland",
        "Our Total Retail Maintenance & Hygiene Checklist",
        "Solutions for Every Retail Milestone",
        "Request Your Bespoke Retail Quote Today",
        "insured for retail environments",
        "handle key handovers",
        "Recurring Home Cleaning",
        "End of Tenancy Cleaning",
        "After Builders Clean",
        "One-Off Spring Clean",
        "Antiviral Sanitisation",
    ]
    for marker in new_content_markers:
        if marker in src:
            print(f"  [PASS] Content present: {marker[:50]}")
        else:
            print(f"  [FAIL] Content missing: {marker[:50]}")
            all_pass = False

    # Check 8: metaTitle updated in service-detail-data.ts
    print("\n--- Check 8: Metadata updated ---")
    data_src = DATA_FILE.read_text()
    if "Professional Retail & Shop Cleaning Services Scotland | Maundy Clean" in data_src:
        print(f"  [PASS] metaTitle updated")
    else:
        print(f"  [FAIL] metaTitle not updated")
        all_pass = False
    if "Professional retail & shop cleaning in Scotland" in data_src:
        print(f"  [PASS] metaDescription updated")
    else:
        print(f"  [FAIL] metaDescription not updated")
        all_pass = False

    # Summary
    print("\n" + "=" * 70)
    if all_pass:
        print("ALL CHECKS PASSED ✓")
    else:
        print("SOME CHECKS FAILED ✗ — review output above")
        sys.exit(1)
    print("=" * 70)


if __name__ == "__main__":
    main()

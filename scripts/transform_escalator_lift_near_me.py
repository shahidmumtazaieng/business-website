#!/usr/bin/env python3
"""
Transform the cloned glass-partition-cleaning-near-me-page.tsx into
escalator-lift-cleaning-near-me-page.tsx via atomic string substitutions.

Strategy: read the file, apply substitutions in order (longer phrases first
to avoid double-substitution), verify no glass-partition remnants remain,
write back to the same path.
"""
import re
import sys
from pathlib import Path

SRC = Path("/home/z/my-project/src/components/service-detail/escalator-lift-cleaning-near-me-page.tsx")

if not SRC.exists():
    print(f"ERROR: source file not found at {SRC}", file=sys.stderr)
    sys.exit(1)

text = SRC.read_text(encoding="utf-8")

# ------------------------------------------------------------
# 1) Component name + export name (function declaration)
# ------------------------------------------------------------
text = text.replace(
    "export function GlassPartitionCleaningNearMeHero()",
    "export function EscalatorLiftCleaningNearMeHero()",
)

# ------------------------------------------------------------
# 2) Image references — escalator-lift uses its own hero image
#    (the existing escalator hero image at escalator-lift-cleaning.jpg)
# ------------------------------------------------------------
text = text.replace(
    '"https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg"',
    '"https://sfile.chatglm.cn/images-ppt/escalator-lift-cleaning.jpg"',
)

# ------------------------------------------------------------
# 3) Service-specific phrases — replace glass-partition terminology
#    with escalator & lift terminology. Longer phrases first.
# ------------------------------------------------------------

# Long compound phrases (must run before shorter substrings)
PHRASES = [
    # Headlines + brand identifiers
    ("Glass Partition Cleaning Services Near Me in Scotland | Local PVG-Checked Specialists | Maundy Clean",
     "Escalator & Lift Cleaning Services Near Me in Scotland | Local SafeContractor-Approved Specialists | Maundy Clean"),
    # Page-level terms
    ("glass partition cleaning near me Scotland",
     "escalator & lift cleaning near me Scotland"),
    ("glass partition cleaning near me Glasgow",
     "escalator & lift cleaning near me Glasgow"),
    ("glass partition cleaning near me Edinburgh",
     "escalator & lift cleaning near me Edinburgh"),
    ("glass partition cleaning near me Aberdeen",
     "escalator & lift cleaning near me Aberdeen"),
    ("glass partition cleaning near me Dundee",
     "escalator & lift cleaning near me Dundee"),
    ("glass partition cleaning near me",
     "escalator & lift cleaning near me"),
    # Search-intent variations
    ("office glass cleaning near me",
     "shopping centre escalator cleaning near me"),
    ("internal glazing cleaning near me",
     "lift car cleaning near me"),
    ("Reach and Wash near me",
     "Rosemor Rotomatic escalator cleaning near me"),
    ("Rope Access glass cleaning near me",
     "travelator cleaning near me"),
    ("mirror restoration near me",
     "lift shaft cleaning near me"),
    ("vetted glass specialists near me",
     "vetted escalator specialists near me"),
    ("Maundy Clean local glass care",
     "Maundy Clean local escalator & lift care"),
    # H1 / H2 page headings
    ("Glass Partition Cleaning Near Me in Scotland",
     "Escalator & Lift Cleaning Near Me in Scotland"),
    # Service-name phrases (longer first)
    ("glass partition cleaning crew",
     "escalator & lift cleaning crew"),
    ("glass partition cleaning specialists",
     "escalator & lift cleaning specialists"),
    ("glass partition cleaning client",
     "escalator & lift cleaning client"),
    ("glass partition cleaning teams",
     "escalator & lift cleaning teams"),
    ("glass partition cleaning service",
     "escalator & lift cleaning service"),
    ("glass-partition cleaning",
     "escalator & lift cleaning"),
    ("glass partition cleaning",
     "escalator & lift cleaning"),
    ("glass-partition crew",
     "escalator & lift crew"),
    ("glass partition crew",
     "escalator & lift crew"),
    ("glass partition & internal glazing cleaning",
     "escalator & lift cleaning"),
    ("glass partition &amp; internal glazing cleaning",
     "escalator &amp; lift cleaning"),
    ("Glass Partition &amp; Internal Glazing Cleaning",
     "Escalator &amp; Lift Cleaning"),
    ("glass partition specialist",
     "escalator & lift specialist"),
    ("Glass Partition Specialist",
     "Escalator & Lift Specialist"),
    # Crew / specialist descriptors
    ("PVG-checked glazing specialists",
     "SafeContractor-approved escalator & lift specialists"),
    ("PVG-checked glass partition cleaning crews",
     "SafeContractor-approved escalator & lift cleaning crews"),
    ("PVG-checked glass partition cleaning",
     "SafeContractor-approved escalator & lift cleaning"),
    ("PVG-checked, uniformed glazing specialists",
     "SafeContractor-approved, uniformed escalator & lift specialists"),
    # Specialty descriptors
    ("pure-water de-ionised systems",
     "Rosemor Rotomatic escalator cleaners"),
    ("Reach-and-Wash telescopic poles",
     "EN 14476 virucidal handrail sanitisation"),
    ("Rope Access",
     "HEPA dry mechanism vacuuming"),
    ("Mobile Platforms",
     "LOLER-compliant lift-engineer support"),
    ("squeegee-buff finishing",
     "stainless-steel grain-aligned polish"),
    ("frame and track detailing",
     "door-track maintenance"),
    ("mirror restoration",
     "mirror restoration (lift car)"),
    ("fascia and gutter refresh",
     "control panel disinfection"),
    ("ISO 14001 compliance",
     "SafeContractor compliance"),
    ("ISO 14001 environmental compliance",
     "SafeContractor compliance"),
    ("ISO 14001 environmental methodology",
     "SafeContractor methodology"),
    ("ISO 14001 compliant",
     "SafeContractor compliant"),
    # Geography anchor descriptors
    ("IFSD corporate towers",
     "shopping centres and corporate towers"),
    ("New Town hotel screens",
     "New Town hotel lift shafts"),
    ("energy-corridor offices",
     "energy-corridor transport hubs"),
    ("Waterfront retail atria",
     "Waterfront shopping centres"),
    # Industry / role descriptors
    ("office managers, facilities managers",
     "facilities managers, operations leads"),
    ("hotel general managers",
     "shopping-centre general managers"),
    ("retail operations leads",
     "transport-hub operations leads"),
    ("restaurant owners",
     "hotel general managers"),
    ("corporate estates teams",
     "corporate facilities directors"),
    # Pricing
    ("From £14/hr",
     "From £180/visit"),
    ("From &pound;14/hr",
     "From &pound;180/visit"),
    # Specialty badges / chips
    ("Pure-Water Streak-Free Finish",
     "Rosemor Rotomatic Deep Clean"),
    ("Same Trusted Glazing Crew Every Visit",
     "Same Trusted Escalator & Lift Crew Every Visit"),
    # Image alt strings
    ("Map of Scotland showing Maundy Clean glass partition &amp; internal glazing cleaning coverage areas",
     "Map of Scotland showing Maundy Clean escalator & lift cleaning coverage areas"),
    ("Maundy Clean glass partition cleaning crew",
     "Maundy Clean escalator & lift cleaning crew"),
    ("Maundy Clean glass partition cleaning specialist",
     "Maundy Clean escalator & lift cleaning specialist"),
    # Generic glass-partition terms
    ("glass-partition",
     "escalator-lift"),
    ("glass partition",
     "escalator & lift"),
    ("internal glazing",
     "vertical transport"),
    ("internal glazing cleaning",
     "escalator & lift cleaning"),
    ("internal glass",
     "lift car interior"),
    ("glazing specialist",
     "escalator & lift specialist"),
    ("glazing specialists",
     "escalator & lift specialists"),
    ("glazing crew",
     "escalator & lift crew"),
    ("glazing",
     "vertical transport"),
    # Crew descriptors (final sweep)
    ("glass care",
     "escalator care"),
    ("Glass Care",
     "Escalator Care"),
    # Specialty imagery descriptors
    ("streak-free crystal-clear finish",
     "speechlessly spotless finish"),
    ("streak-free",
     "showcase-finish"),
    # Commercial context descriptors
    ("commercial glass",
     "commercial escalator & lift"),
    ("corporate glass wall",
     "corporate escalator bank"),
]

# Apply phrase substitutions
for old, new in PHRASES:
    text = text.replace(old, new)

# ------------------------------------------------------------
# 4) Canonical-cased service name (fix any mixed-up cases)
# ------------------------------------------------------------
text = text.replace("escalator & lift Cleaning", "Escalator & Lift Cleaning")
text = text.replace("Escalator & lift Cleaning", "Escalator & Lift Cleaning")
text = text.replace("escalator & Lift Cleaning", "Escalator & Lift Cleaning")
text = text.replace("Escalator & Lift cleaning", "Escalator & Lift Cleaning")
text = text.replace("escalator-lift-cleaning-near-me", "escalator-lift-cleaning-near-me")  # already correct

# ------------------------------------------------------------
# 5) Anchor hrefs — point to /services/escalator-lift-cleaning-near-me#...
# ------------------------------------------------------------
text = text.replace(
    "/services/glass-partition-cleaning-near-me#",
    "/services/escalator-lift-cleaning-near-me#",
)

# ------------------------------------------------------------
# 6) Cross-links to specialist services (the interlinking section
#    on the near-me page): preserve the same target slugs as the
#    main SEO page — move-in-out, post-construction, marble-polishing,
#    disinfection-services. The link text is generic enough that it
#    should already be correct after phrase substitution.
# ------------------------------------------------------------

# ------------------------------------------------------------
# 7) Verify no glass-partition remnants remain (other than in URL slugs
#    that legitimately use 'glass-partition' for cross-link targets)
# ------------------------------------------------------------
remnant_patterns = [
    r"\bGlass Partition Cleaning\b",
    r"\bglass partition cleaning\b",
    r"\bglass-partition-cleaning\b",
    r"\bGlass Partition\b",
    r"\bglass partition\b",
    r"\bInternal Glazing\b",
    r"\binternal glazing\b",
    r"\bGlassPartitionCleaning\b",
    r"\bglazing specialist\b",
    r"\bglazing crew\b",
]
remnants = []
for pat in remnant_patterns:
    for m in re.finditer(pat, text):
        # Allowable: any line that is a /services/glass-partition-cleaning cross-link target
        # (these are legitimate interlinks to the OTHER service)
        line_start = text.rfind("\n", 0, m.start()) + 1
        line_end = text.find("\n", m.end())
        line = text[line_start:line_end]
        if "/services/glass-partition-cleaning" in line and "href" in line:
            continue  # legitimate cross-link
        remnants.append((m.start(), m.group(), line.strip()[:120]))

if remnants:
    print(f"WARNING: {len(remnants)} non-cross-link glass-partition remnants found:")
    for pos, match, line in remnants[:20]:
        print(f"  pos={pos} match={match!r} line={line!r}")
else:
    print("OK: no glass-partition remnants (except legitimate cross-link hrefs)")

# ------------------------------------------------------------
# 8) Verify 36 city anchor IDs are intact
# ------------------------------------------------------------
city_anchors = re.findall(r'href=\{`/services/escalator-lift-cleaning-near-me#([a-z\-]+)`\}', text)
unique_anchors = set(city_anchors)
print(f"City anchor count: {len(city_anchors)} (unique: {len(unique_anchors)})")

# Check for #locations anchor on the directory button
if "#locations" in text:
    print("OK: #locations anchor present")
else:
    print("WARNING: #locations anchor missing")

# ------------------------------------------------------------
# 9) Write back
# ------------------------------------------------------------
SRC.write_text(text, encoding="utf-8")
print(f"\nWrote {SRC} ({len(text.splitlines())} lines)")

#!/usr/bin/env python3
"""
transform_disinfection_near_me.py
==================================
Atomic substitution script that transforms the cloned escalator-lift
near-me page into a disinfection-services near-me page.

Pass 1: targeted string substitutions (longer phrases first to avoid
double-substitution). All substitutions are atomic — no regex, no
overlapping patterns.
"""

from pathlib import Path

SRC = Path("/home/z/my-project/src/components/service-detail/disinfection-services-near-me-page.tsx")

# Ordered substitutions — longer phrases first to avoid partial matches.
# Format: (old_string, new_string)
SUBSTITUTIONS = [
    # --- Route slugs (longest first) ---
    ("/services/escalator-lift-cleaning-near-me", "/services/disinfection-services-near-me"),
    ("/services/escalator-lift-cleaning", "/services/disinfection-services"),
    ("escalator-lift-cleaning-near-me", "disinfection-services-near-me"),
    ("escalator-lift-cleaning", "disinfection-services"),

    # --- Export names ---
    ("EscalatorLiftCleaningNearMe", "DisinfectionServicesNearMe"),
    ("EscalatorLiftCleaning", "DisinfectionServices"),

    # --- Page title and metadata ---
    ("Escalator & Lift Cleaning Services Near Me in Scotland",
     "Disinfection & Antiviral Sanitisation Services Near Me in Scotland"),

    # --- H1 and section headings ---
    ("Escalator & Lift Cleaning Near Me in Scotland",
     "Disinfection & Sanitisation Near Me in Scotland"),
    ("Escalator & Lift Cleaning Near Me, Across Scotland",
     "Disinfection & Sanitisation Near Me, Across Scotland"),

    # --- Brand/product names (longer first) ---
    ("escalator and lift cleaning", "disinfection and antiviral sanitisation"),
    ("escalator & lift cleaning", "disinfection & sanitisation"),
    ("escalator bank", "disinfection zone"),
    ("escalator", "disinfection"),
    ("lift car", "treatment zone"),
    ("lift cars", "treatment zones"),
    ("lift lobby", "reception area"),
    ("lift button", "touchpoint"),
    ("lift buttons", "touchpoints"),
    ("travelator", "sanitisation station"),
    ("travelators", "sanitisation stations"),
    ("step tread", "surface"),
    ("step treads", "surfaces"),
    ("handrail", "high-touch rail"),
    ("handrails", "high-touch rails"),
    ("comb plate", "threshold"),
    ("comb plates", "thresholds"),
    ("balustrade", "partition"),
    ("balustrades", "partitions"),

    # --- Equipment-specific terms ---
    ("Rosemor Rotomatic", "electrostatic sprayer"),
    ("EN 14476 virucidal handrail sanitisation", "EN 14476 virucidal fogging"),
    ("HEPA dry mechanism vacuuming", "ULV fogging"),
    ("LOLER-compliant lift-engineer support", "HSE Biological Agents compliance"),
    ("HTM 01-05 clinical chemistry", "EN 1276 bactericidal chemistry"),

    # --- Compliance badges ---
    ("SafeContractor-approved", "SafeContractor-approved"),
    ("PVG-Checked", "PVG-Checked"),

    # --- Body content phrases ---
    ("vertical transportation", "pathogen control"),
    ("vertical transport", "pathogen control"),
    ("Scottish commercial estate", "Scottish commercial facilities"),
    ("Scottish commercial escalator bank", "Scottish commercial facility"),
    ("shopping centre", "commercial facility"),
    ("transport hub", "facility"),
    ("corporate HQ", "commercial facility"),
    ("corporate hub", "commercial facility"),

    # --- Specific escalator/lift service descriptions ---
    ("escalator step tread deep clean", "EN 14476 virucidal fogging"),
    ("EN 14476 handrail virucidal sanitisation", "EN 14476 virucidal fogging"),
    ("HEPA dry mechanism vacuum", "ULV fogging treatment"),
    ("LOLER-compliant lift-engineer", "HSE Biological Agents"),

    # --- Generic cleanup (catch any remaining) ---
    ("escalator-lift", "disinfection"),
    ("Escalator-Lift", "Disinfection"),
    ("Escalator & Lift", "Disinfection &"),
    ("Escalator and Lift", "Disinfection and"),
    ("Escalator", "Disinfection"),
    ("escalator", "disinfection"),
]

def main():
    src = SRC.read_text()
    original_len = len(src)

    for old, new in SUBSTITUTIONS:
        count = src.count(old)
        if count > 0:
            src = src.replace(old, new)

    # Write the transformed file
    SRC.write_text(src)
    new_len = len(src)

    print(f"Transformed: {SRC}")
    print(f"  Original length: {original_len} chars")
    print(f"  New length: {new_len} chars")
    print(f"  Substitutions applied: {len(SUBSTITUTIONS)} patterns")

    # Verify no escalator remnants remain (excluding legitimate cross-links)
    escalator_remaining = src.lower().count("escalator")
    lift_remaining = src.lower().count("lift ")
    print(f"  Remaining 'escalator' mentions: {escalator_remaining}")
    print(f"  Remaining 'lift ' mentions: {lift_remaining}")

    # Check for #locations anchor
    if 'id="locations"' in src:
        print("  [PASS] #locations anchor present")
    else:
        print("  [FAIL] #locations anchor MISSING")

    # Check for 36 city anchors (via the .map() pattern)
    if "#{loc.slug}" in src:
        print("  [PASS] City grid .map() pattern present")
    else:
        print("  [FAIL] City grid .map() pattern MISSING")

if __name__ == "__main__":
    main()

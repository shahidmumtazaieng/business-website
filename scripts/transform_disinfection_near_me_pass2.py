#!/usr/bin/env python3
"""
transform_disinfection_near_me_pass2.py
========================================
Pass 2: body-content cleanup for the disinfection-services near-me page.
Catches the compound phrases that pass 1 left behind (e.g.
"disinfection & lift specialists", "disinfection-lift", "glass lift shaft").
"""

from pathlib import Path

SRC = Path("/home/z/my-project/src/components/service-detail/disinfection-services-near-me-page.tsx")

SUBSTITUTIONS = [
    # --- Compound remnants from pass 1 ---
    ("disinfection & lift specialists", "disinfection specialists"),
    ("disinfection & lift specialist", "disinfection specialist"),
    ("disinfection & lift cleaning", "disinfection & sanitisation"),
    ("disinfection & lift &amp; pathogen control", "disinfection &amp; pathogen control"),
    ("disinfection & lift crew", "disinfection crew"),
    ("disinfection-lift specialist", "disinfection specialist"),
    ("disinfection-lift specialists", "disinfection specialists"),
    ("disinfection-lift programme", "disinfection programme"),
    ("disinfection-lift", "disinfection"),

    # --- Equipment references that don't apply to disinfection ---
    ("glass lift shaft", "treatment zone"),
    ("hotel-lobby glass lift shaft", "hotel-lobby treatment zone"),
    ("treatment zone stainless steel", "surface stainless steel"),
    ("treatment zone-car stainless steel", "surface stainless steel"),
    ("step-tread rubber", "surface rubber"),
    ("step-tread", "surface"),
    ("comb-plate aluminium", "threshold aluminium"),
    ("comb-plate", "threshold"),
    ("door-track maintenance kit", "touchpoint maintenance kit"),
    ("door-track", "touchpoint"),
    ("electrostatic sprayer rotary-brush disinfection deep-cleaner", "electrostatic sprayer"),
    ("electrostatic sprayer disinfection cleaners", "electrostatic sprayers"),
    ("electrostatic sprayer disinfection cleaner", "electrostatic sprayer"),
    ("rotary-brush", "fogging"),
    ("high-reach internal and external pathogen control", "full-room environmental pathogen control"),
    ("high-reach", "full-room"),
    ("Ettore and Unger squeegees", "ULV fogging machines"),
    ("T-bar applicators", "UV-C cabinets"),
    ("IPAF/IRATA access certification", "HSE Biological Agents certification"),
    ("IRATA / IPAF certificates", "HSE Biological Agents certificates"),
    ("IRATA/IPAF", "HSE Biological Agents"),
    ("IRATA", "HSE"),
    ("IPAF", "HSE"),

    # --- Pricing ---
    ("£180 per visit for a single disinfection or treatment zone", "£180 per visit for a single-zone preventive treatment"),
    ("£180 per visit for a single disinfection", "£180 per visit for a single-zone preventive treatment"),

    # --- Context fixes ---
    ("Glasgow IFSD corporate disinfection zone", "Glasgow IFSD corporate facility"),
    ("Edinburgh retail-chain disinfection zone", "Edinburgh retail-chain facility"),
    ("Aberdeen hotel-lobby treatment zone", "Aberdeen hotel-lobby reception"),
    ("shopping-centre and transport-hub contracts", "commercial facility contracts"),

    # --- Alt text fixes ---
    ("squeegeeing a frameless internal disinfection & sanitisation specialist",
     "operating an electrostatic fogging machine for full-room virucidal disinfection"),
    ("frameless internal disinfection & sanitisation",
     "electrostatic fogging disinfection treatment"),

    # --- Section heading fixes ---
    ("Local disinfection &amp; lift cleaning &middot; Scotland-wide",
     "Local disinfection &amp; sanitisation &middot; Scotland-wide"),

    # --- CTA / cross-link text fixes ---
    ("Explore the full disinfection &amp; pathogen control service",
     "Explore the full disinfection &amp; sanitisation service"),
    ("Ready to book your local disinfection & lift crew?",
     "Ready to book your local disinfection crew?"),

    # --- Image alt for map ---
    ("Map of Scotland showing Maundy Clean disinfection &amp; lift cleaning coverage areas",
     "Map of Scotland showing Maundy Clean disinfection &amp; sanitisation coverage areas"),

    # --- Any remaining 'lift' as standalone word in disinfection context ---
    ("disinfection and lift equipment", "disinfection equipment"),
    ("disinfection & lift", "disinfection"),
    ("disinfection lift", "disinfection"),
]

def main():
    src = SRC.read_text()
    original_len = len(src)

    for old, new in SUBSTITUTIONS:
        count = src.count(old)
        if count > 0:
            src = src.replace(old, new)

    SRC.write_text(src)
    new_len = len(src)

    print(f"Pass 2 transformed: {SRC}")
    print(f"  Original length: {original_len} chars")
    print(f"  New length: {new_len} chars")

    # Verify no 'lift' remnants (excluding legitimate words like "lifted")
    import re
    lift_matches = re.findall(r'\blift\b', src, re.IGNORECASE)
    print(f"  Remaining standalone 'lift' mentions: {len(lift_matches)}")

    # Verify no 'escalator' remnants
    escalator_matches = re.findall(r'\bescalator\b', src, re.IGNORECASE)
    print(f"  Remaining 'escalator' mentions: {len(escalator_matches)}")

    # Check #locations anchor
    if 'id="locations"' in src:
        print("  [PASS] #locations anchor present")

    # Check city grid
    if 'locationsByRegion' in src and '.map(' in src:
        print("  [PASS] City grid structure present")

if __name__ == "__main__":
    main()

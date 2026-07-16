#!/usr/bin/env python3
"""
Second-pass cleanup of escalator-lift-cleaning-near-me-page.tsx.
Handles all remaining glass-partition / glazing / partition references
in body content that the first pass missed (long compound phrases).
"""
import re
from pathlib import Path

SRC = Path("/home/z/my-project/src/components/service-detail/escalator-lift-cleaning-near-me-page.tsx")
text = SRC.read_text(encoding="utf-8")

# Second-pass phrase replacements (longest first)
PHRASES_2 = [
    # H2 / H3 headings
    ("Find Your Local Glass-Partition Crew",
     "Find Your Local Escalator & Lift Crew"),
    ("Ready for a Glass-Partition Crew Near You?",
     "Ready for an Escalator & Lift Crew Near You?"),
    ("Request Your Bespoke Glass Quote Today",
     "Request Your Free Site Assessment Today"),
    ("Request Your Bespoke Glass Quote",
     "Request Your Free Site Assessment"),
    ("Beyond the glass clean &middot; property cycles",
     "Beyond the escalator clean &middot; property cycles"),
    ("Free Site Survey & Glass Audit",
     "Free Site Survey & Equipment Audit"),
    # Body content - glass-zone language → escalator-bank language
    ("Tell us about your glass zones, partition types, and access constraints",
     "Tell us about your escalator banks, lift cars, and access constraints"),
    ("tell us about your glass zones, partition types",
     "tell us about your escalator banks, lift cars"),
    ("glass-care quote",
     "equipment-care quote"),
    ("glass-trained specialist",
     "escalator-trained specialist"),
    ("glass specialist",
     "escalator specialist"),
    ("Glass Specialist",
     "Escalator Specialist"),
    ("local glass specialist",
     "local escalator specialist"),
    ("glass specialists",
     "escalator specialists"),
    ("glass specialists available",
     "escalator specialists available"),
    ("routine partition maintenance",
     "routine escalator maintenance"),
    ("full atrium high-reach clean",
     "full escalator bank deep clean"),
    ("external curtain-walling programmes",
     "multi-site estate programmes"),
    ("external curtain-walling programme",
     "multi-site estate programme"),
    # "partition" / "glass" within bodies — replace with escalator/lift context
    ("commercial meeting-room partition",
     "commercial escalator bank"),
    ("retail-chain balustrade",
     "retail-chain escalator bank"),
    ("hotel-lobby mirrored feature-wall",
     "hotel-lobby glass lift shaft"),
    ("partitions and frames",
     "lift cars and escalator treads"),
    ("internal partitions and frames",
     "lift car interiors and escalator treads"),
    ("freshly-cleaned glass wall",
     "freshly-cleaned escalator bank"),
    ("glass surface",
     "vertical-transport surface"),
    ("glass wall",
     "escalator bank"),
    ("glass zones",
     "escalator zones"),
    ("glass type",
     "equipment type"),
    ("Glass types covered",
     "Equipment types covered"),
    ("glass types",
     "equipment types"),
    ("glass care",
     "escalator care"),
    ("partition restoration",
     "escalator restoration"),
    ("partition cleaning",
     "escalator cleaning"),
    ("partition maintenance",
     "escalator maintenance"),
    ("partition types",
     "equipment types"),
    ("partitions",
     "lift cars"),
    ("vertical transport cleaning is performed",
     "escalator and lift cleaning is performed"),
    # Specific technical phrases
    ("annealed and toughened partitions through laminated, mirrored, low-E coated, anti-reflective coated, and privacy-filmed panels",
     "step-tread rubber, comb-plate aluminium, balustrade glass, handrail rubber, lift-car stainless steel, mirror, and control panel"),
    ("we identify the glass type, the coating register, and the access constraints before we touch the surface",
     "we identify the equipment type, the surface material, and the access constraints before we touch the surface"),
    ("pure de-ionised water with a T-bar applicator, professional Ettore or Unger squeegee, lint-free microfibre edge detailing",
     "Rosemor Rotomatic rotary-brush escalator deep-cleaner, EN 14476 virucidal handrail applicator, lint-free microfibre edge detailing"),
    ("wrong chemistry on coated glass equals permanent damage",
     "wrong chemistry on escalator rubber equals permanent damage"),
    ("pure-water squeegee work, Reach-and-Wash pole cleaning, and HEPA dry mechanism vacuuming high-reach programmes",
     "Rosemor Rotomatic step-tread deep cleaning, EN 14476 virucidal handrail sanitisation, and HEPA dry mechanism vacuuming high-reach programmes"),
    # Pricing — replace &pound;14/hour with &pound;180/visit for escalator service
    ("From &pound;14 per hour for routine escalator maintenance through to &pound;395 per visit for a full escalator bank deep clean with HEPA dry mechanism vacuuming",
     "From &pound;180 per visit for a single escalator or lift car through to &pound;POA for multi-site shopping-centre and transport-hub contracts with 24/7 coverage"),
    ("&pound;14 per hour for routine escalator maintenance through to",
     "&pound;180 per visit for a single escalator or lift car through to"),
    ("&pound;14-&pound;18/hour",
     "&pound;180-&pound;280/visit"),
    ("&pound;395+ per visit",
     "&pound;POA for multi-site"),
    ("&pound;395 per visit",
     "&pound;POA per multi-site contract"),
    ("(&pound;14-&pound;18/hour)",
     "(&pound;180-&pound;280/visit)"),
    ("(&pound;395+ per visit)",
     "(&pound;POA for multi-site)"),
    ("POA) are the annual cycle for the building perimeter &mdash; Reach-and-Wash or BMU cradle access, full curtain-wall clean, fascia refresh, gutter clear, and downpipe clean",
     "POA) are the annual cycle for multi-site estates &mdash; multi-team mobilisation, 24/7 coverage option, HTM 01-05 chemistry (clinical), specialist escalator machine, annual rate review, and performance bonus structure"),
    ("Reach-and-Wash or BMU cradle access, full curtain-wall clean, fascia refresh, gutter clear, and downpipe clean",
     "multi-team mobilisation, 24/7 coverage option, HTM 01-05 chemistry (clinical), specialist escalator machine, annual rate review, and performance bonus structure"),
    # Re-clean guarantee paragraph
    ("free re-clean within 24 to 48 hours",
     "free re-clean within 24 to 48 hours"),  # keep
    # FAQ Q&A phrases
    ("How quickly can a local glass specialist start?",
     "How quickly can a local escalator specialist start?"),
    ("Will the technician travel to me, or do I need to bring the glass to you?",
     "Will the technician travel to me, or do I need to bring the equipment to you?"),
    ("Do you have glass specialists available in rural Scotland?",
     "Do you have escalator specialists available in rural Scotland?"),
    ("What&rsquo;s the difference between routine partition maintenance, full atrium high-reach clean, and external curtain-walling programmes near me?",
     "What&rsquo;s the difference between routine escalator maintenance, full escalator bank deep clean, and multi-site estate programmes near me?"),
    ("All escalator & lift and vertical transport cleaning is performed on-site at your property &mdash; we never transport your partitions anywhere",
     "All escalator & lift cleaning is performed on-site at your property &mdash; we never transport your equipment anywhere"),
    # Booking step descriptions
    ("our same trusted crew maintains your vertical transport with pure-water, surface-safe products as part of every visit, catching wear patterns early and extending the life of the finish",
     "our same trusted crew maintains your escalators and lifts with EN 14476 virucidal sanitisation, surface-safe products, and HEPA dry mechanism vacuuming as part of every visit, catching wear patterns early and extending the life of the equipment"),
    ("Our End of Tenancy Cleaning includes a Deposit-Back Guarantee and professional partition restoration to ensure you PASS your inspection. We work to the letting agent&rsquo;s inventory, restore the vertical transport to its original appearance, and come back free of charge if anything is flagged.",
     "Our End of Tenancy Cleaning includes a Deposit-Back Guarantee and professional escalator and lift restoration to ensure you PASS your inspection. We work to the letting agent&rsquo;s inventory, restore the vertical transport to its original appearance, and come back free of charge if anything is flagged."),
    ("our After Builders Clean removes the fine dust that settles on internal partitions and frames. Fine construction dust left on a freshly-cleaned glass wall re-enters the air for months &mdash; we capture it at source before it becomes a long-term air-quality problem.",
     "our After Builders Clean removes the fine dust that settles on escalator treads and lift car interiors. Fine construction dust left on a freshly-cleaned escalator bank re-enters the air for months &mdash; we capture it at source before it becomes a long-term air-quality problem."),
    ("Refresh your high-touch hygiene alongside your partition cleaning for a comprehensive workplace refresh. Electrostatic disinfection of door handles, push-plates, and entry phone keypads, EN 14476 virucidal chemistry, and the same &ldquo;Maundy&rdquo; standard applied to every glass surface your staff and visitors touch.",
     "Refresh your high-touch hygiene alongside your escalator and lift cleaning for a comprehensive workplace refresh. Electrostatic disinfection of door handles, push-plates, and entry phone keypads, EN 14476 virucidal chemistry, and the same &ldquo;Maundy&rdquo; standard applied to every vertical-transport surface your staff and visitors touch."),
    # Specialist descriptors
    ("specialist squeegee, Reach-and-Wash, or HEPA dry mechanism vacuuming options",
     "Rosemor Rotomatic, EN 14476 virucidal sanitisation, or HEPA dry mechanism vacuuming options"),
    ("We match you with a vetted, glass-trained specialist in your postcode. They confirm the glass type, frame material, coating register, and access constraints of your partitions, flag any permanent scratches, coating degradation, or seal failure, and walk you through the pure-water and squeegee plan before any chemistry touches the surface",
     "We match you with a vetted, escalator-trained specialist in your postcode. They confirm the equipment type, surface material, access constraints, and operational window of your escalators and lifts, flag any step wear, handrail degradation, glass panel damage, or door-track obstruction, and walk you through the Rosemor Rotomatic and EN 14476 virucidal plan before any chemistry touches the surface"),
    ("We finish every visit with a flashlight inspection (the same test your facilities manager uses), a defect-flagging report, a care-card update, and a re-clean reminder for the next visit",
     "We finish every visit with a signed cleaning log, a defect-flagging report (step wear, handrail degradation, mechanism noise), a care-card update, and a re-clean reminder for the next visit"),
    # Trust pillar 3 (access)
    ("carbon-fibre telescopic Reach-and-Wash poles for high-reach internal atrium vertical transport up to 65 feet from ground level &mdash; no ladders, no MEWP, no scaffolding",
     "carbon-fibre telescopic poles for high-reach internal atrium vertical transport up to 65 feet from ground level &mdash; no ladders, no MEWP, no scaffolding"),
    ("all cleaning solutions are certified non-toxic, biodegradable, child-safe, and surface-safe &mdash; pure de-ionised water is COSHH-exempt. The glass is safe for staff and visitors to walk past mid-clean.",
     "all cleaning solutions are certified non-toxic, biodegradable, child-safe, and surface-safe &mdash; EN 14476 virucidal chemistry is REACH-compliant. The equipment is safe for staff and visitors to walk past mid-clean."),
    # Trust pillar 4
    ("every escalator & lift specialist is disclosure scotland pvg-checked",
     "every escalator & lift specialist is disclosure scotland pvg-checked"),  # keep
    # Stats card
    ('{ label: "Equipment types covered", value: "All types" }',
     '{ label: "Equipment covered", value: "All types" }'),
]

for old, new in PHRASES_2:
    if old not in text:
        print(f"SKIP (not found): {old[:80]!r}")
        continue
    count = text.count(old)
    text = text.replace(old, new)
    print(f"OK ({count}x): {old[:80]!r}")

SRC.write_text(text, encoding="utf-8")

# Final verification
remnants = []
for pat in [r"\bglass partition\b", r"\bGlass Partition\b", r"\bglazing\b",
            r"\bGlazing\b", r"\bpartition maintenance\b", r"\bpartition restoration\b",
            r"\bpartition cleaning\b", r"\bglass specialist\b", r"\bglass-trained\b",
            r"\bglass zones\b", r"\bglass type\b", r"\bglass wall\b", r"\bglass care\b"]:
    for m in re.finditer(pat, text, re.IGNORECASE):
        line_start = text.rfind("\n", 0, m.start()) + 1
        line_end = text.find("\n", m.end())
        line = text[line_start:line_end]
        # Allowable: legitimate cross-link href to /services/glass-partition-cleaning
        if "/services/glass-partition-cleaning" in line and "href" in line:
            continue
        remnants.append((m.start(), m.group(), line.strip()[:120]))

print(f"\n--- Final remnant check ---")
if remnants:
    print(f"WARNING: {len(remnants)} non-cross-link remnants:")
    for pos, match, line in remnants[:20]:
        print(f"  pos={pos} match={match!r} line={line!r}")
else:
    print("OK: no glass-partition / glazing remnants (except legitimate cross-link hrefs)")

print(f"\nWrote {SRC} ({len(text.splitlines())} lines)")

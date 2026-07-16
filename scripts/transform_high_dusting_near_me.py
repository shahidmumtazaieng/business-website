#!/usr/bin/env python3
"""
Transform high-dusting-near-me-page.tsx from VCT-themed clone
into a high-dusting-themed near-me page.

Strategy: targeted, context-aware replacements applied atomically.
Preserves the 8-section structure and 36-city anchor grid.
"""
from pathlib import Path

SRC = Path("/home/z/my-project/src/components/service-detail/high-dusting-near-me-page.tsx")

text = SRC.read_text(encoding="utf-8")

# Order matters: longer/more specific replacements first
# to avoid double-substitution.

replacements = [
    # --- Image URL (hero) ---
    ("https://sfile.chatglm.cn/images-ppt/vct-floor-care.jpg",
     "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg"),

    # --- Function / export name ---
    ("VctFloorCareNearMeHero", "HighDustingNearMeHero"),

    # --- Route slugs ---
    ("/services/vct-floor-care-near-me#", "/services/high-dusting-near-me#"),
    ("/services/vct-floor-care-near-me", "/services/high-dusting-near-me"),
    ("/services/vct-floor-care", "/services/high-dusting"),

    # --- Pricing (high-dusting uses per-visit / per-day pricing, not per-m²) ---
    ("£4/m²", "£395/visit"),
    ("£18/m²", "£1,495/day"),
    ("£4/m&sup2;", "£395/visit"),
    ("£18/m&sup2;", "£1,495/day"),
    ("£12-£18/m&sup2;", "£395-£1,495/visit"),
    ("£1.50/m&sup2;", "£150/visit"),
    ("From £35/m&sup2; for quarterly maintenance polish through to £75/m&sup2; for full restoration",
     "From £395/visit for a single-area clean through to £1,495/day for a full warehouse or factory"),
    ("From £395/visit for quarterly maintenance polish through to £1,495/day for full polish-and-seal",
     "From £395/visit for a single-area clean through to £1,495/day for a full warehouse or factory"),
    ("5-10 year guarantee on every full refinish",
     "5-10 year guarantee on every full restoration"),
    ("5-10 year guarantee", "100% satisfaction guarantee"),
    ("full strip and refinish with premium 30% solids polish",
     "full warehouse or factory high-dusting programme"),
    ("full strip-and-refinish", "full high-dusting programme"),
    ("full refinish", "full restoration"),
    ("full strip", "full restoration"),

    # --- Compound phrases (before standalone term replacements) ---
    ("VCT floor care & stripping coverage", "high-level dusting & commercial dusting coverage"),
    ("VCT floor care &amp; stripping coverage", "high-level dusting &amp; commercial dusting coverage"),
    ("VCT floor care & stripping", "high-level dusting & commercial dusting"),
    ("VCT floor care &amp; stripping", "high-level dusting &amp; commercial dusting"),
    ("VCT Floor Care Services Near Me", "High-Level Dusting Services Near Me"),
    ("VCT Floor Care Crew Near You", "High-Level Dusting Crew Near You"),
    ("VCT Floor Care", "High-Level Dusting"),
    ("VCT floor care", "high-level dusting"),
    ("VCT-trained", "IPAF-certified"),
    ("VCT specialist", "high-reach specialist"),
    ("VCT specialists", "high-reach specialists"),
    ("VCT zones", "high-reach zones"),
    ("VCT zone", "high-reach zone"),
    ("VCT strip-and-refinish", "high-dusting programme"),
    ("VCT strips", "high-dusting visits"),
    ("VCT care", "high-dusting care"),
    ("VCT crew", "high-dusting crew"),
    ("VCT is restored", "high-reach surfaces are restored"),
    ("VCT today", "high-reach surfaces today"),
    ("VCT for a comprehensive", "high dusting for a comprehensive"),
    ("commercial VCT", "commercial high dusting"),
    ("local VCT", "local high dusting"),
    ("stripping, refinishing, and burnishing", "high-level dusting, HEPA vacuuming, and defect reporting"),
    ("stripping, sealing, and finishing", "high-level dusting, HEPA vacuuming, and defect reporting"),
    ("stripping and refinishing", "high-level dusting and HEPA vacuuming"),
    ("strip and refinish", "high-dust and HEPA-vacuum"),
    ("strip-and-refinish", "high-dusting programme"),
    ("Stripping & Deep Cleaning", "High-Level Dusting & HEPA Capture"),
    ("Technical Sealing & Finishing", "Defect Reporting & Documentation"),
    ("high-speed burnish technology", "HEPA H-class vacuum technology"),
    ("high-speed burnishing", "HEPA H-class vacuuming"),
    ("high-speed burnish", "HEPA H-class vacuum"),
    ("wet-look gloss", "dust-free ceiling"),
    ("wet-look high-gloss", "dust-free high-reach"),
    ("wet-look shine", "dust-free finish"),
    ("metal-interlock polish", "HEPA H-class vacuum"),
    ("high-solids sealer", "carbon-fibre telescopic pole"),
    ("multi-layer waxing", "MEWP cherry-picker access"),
    ("alkaline stripper for VCT", "HEPA H-class vacuum for high dusting"),
    ("scrub-and-recoat", "single-area clean"),
    ("scot-school-holiday", "school-holiday"),
    ("school-holiday VCT strips", "school-holiday high-dusting visits"),
    ("VCT in corridors", "high dusting in corridors"),
    ("VCT in my Glasgow school", "high dusting in my Glasgow school"),
    ("25% commercial, 30% premium", "cherry-picker, scissor-lift, or carbon-fibre pole"),
    ("standard VCT", "standard high dusting"),
    ("homogeneous vinyl, safety vinyl, anti-static VCT for server rooms, and conductive VCT for theatres and operating rooms",
     "warehouse racking tops, hotel lobby cornicing, retail atrium ductwork, and food-processing facility ductwork"),
    ("vinyl composition tile", "high-reach surface"),
    ("VCT substrate", "high-reach surface"),
    ("fine abrasive dust that settles on hard floors",
     "fine dust that settles on high-reach surfaces"),
    ("stripped VCT floor", "high-dusted ceiling"),
    ("hard floor care", "high-reach cleaning"),
    ("hard floor reset", "high-reach reset"),
    ("hard floors", "high-reach surfaces"),
    ("VCT entrances", "warehouse entrances"),
    ("VCT corridors", "warehouse corridors"),
    ("VCT aisles", "retail aisles"),
    ("Find Your Local VCT Crew", "Find Your Local High-Dusting Crew"),
    ("Local VCT Floor Care You Can Trust", "Local High-Level Dusting You Can Trust"),
    ("Local VCT floor care, stripping &amp; refinishing &middot; Scotland-wide",
     "Local high-level dusting &amp; commercial dusting &middot; Scotland-wide"),
    ("Local VCT", "Local High Dusting"),
    ("commercial VCT", "commercial high dusting"),
    ("VCT-trained floor care", "IPAF-certified high-dusting"),
    ("stripped, refinished, and cured", "high-dusted, HEPA-vacuumed, and defect-reported"),
    ("slip-resistant polish additives", "carbon-fibre telescopic poles"),
    ("low-speed rotary machines, high-speed burnishers, HEPA-filtered wet/dry vacuums, air movers, gloss meters, colour-coded pad systems",
     "MEWP cherry-pickers, scissor-lifts, carbon-fibre telescopic poles, HEPA H-class vacuums, soft horsehair brushes, lint-free cloths"),
    ("commercial vinyl composition tile floor to a wet-look gloss",
     "high-reach surface in a Scottish commercial property to a dust-free standard"),
    ("VCT floor care specialist stripping, refinishing and burnishing a commercial vinyl composition tile floor to a wet-look gloss in a Scottish property",
     "high-level dusting specialist using MEWP cherry-picker access and HEPA H-class vacuum to remove dust from ceiling beams, ductwork, and high-mounted light fittings in a Scottish commercial property"),
    ("commercial VCT entrance", "commercial warehouse entrance"),
    ("retail-chain aisle", "retail-chain aisle"),
    ("school corridor", "warehouse corridor"),
    ("VCT entrance", "warehouse entrance"),
    ("local VCT floor care", "local high-level dusting"),
    ("local VCT-trained", "local IPAF-certified"),
    ("VCT and adjacent resilient surfaces", "high-reach surfaces and adjacent architectural features"),
    ("substrate, the existing finish, and the traffic pattern",
     "ceiling height, the access method, and the high-reach surfaces"),
    ("floor type", "building type"),
    ("VCT care quote", "high-dusting quote"),
    ("VCT zones, footprint, and traffic pattern", "high-reach zones, footprint, and ceiling height"),
    ("VCT-trained floor care specialist", "IPAF-certified high-dusting specialist"),
    ("VCT-trained standard", "IPAF-certified standard"),
    ("VCT specialist &mdash; wherever", "high-reach specialist &mdash; wherever"),
    ("VCT in corridors, halls, classrooms, and dining areas",
     "high dusting in corridors, halls, classrooms, and dining areas"),
    ("VCT floor care specialist near you", "high-level dusting specialist near you"),
    ("VCT floor care and restoration", "high-level dusting and restoration"),
    ("VCT floor care client", "high-level dusting client"),
    ("VCT floor care clients", "high-level dusting clients"),
    ("VCT floor care is the perfect reset", "high-level dusting is the perfect reset"),
    ("VCT is restored, keep it pristine", "high-reach surfaces are restored, keep them pristine"),
    ("VCT floor", "high-reach surface"),
    ("VCT tile", "ceiling tile"),
    ("VCT to its original appearance", "high-reach surfaces to their original appearance"),
    ("VCT standard", "high-dusting standard"),
    ("local VCT-trained floor care specialist",
     "local IPAF-certified high-dusting specialist"),
    ("VCT-trained floor care specialists",
     "IPAF-certified high-dusting specialists"),
    ("VCT-trained floor care specialist",
     "IPAF-certified high-dusting specialist"),
    ("floor care specialist", "high-dusting specialist"),
    ("floor care & stripping", "high-level dusting & commercial dusting"),
    ("floor care &amp; stripping", "high-level dusting &amp; commercial dusting"),
    ("floor care specialists", "high-dusting specialists"),
    ("floor care", "high dusting"),
    ("Floor Care", "High-Level Dusting"),
    ("local VCT floor care", "local high-level dusting"),
    ("Local VCT", "Local High Dusting"),
    ("VCT-trained", "IPAF-certified"),
    ("VCT specialist", "high-reach specialist"),
    ("VCT specialists", "high-reach specialists"),
    ("VCT floor care specialist", "high-level dusting specialist"),
    ("VCT floor care", "high-level dusting"),
    ("VCT Floor Care", "High-Level Dusting"),
    ("VCT care", "high-dusting care"),
    ("VCT standard", "high-dusting standard"),
    ("VCT substrate", "high-reach surface"),
    ("VCT zones", "high-reach zones"),
    ("VCT zone", "high-reach zone"),
    ("VCT crew", "high-dusting crew"),
    ("VCT entrances", "warehouse entrances"),
    ("VCT corridors", "warehouse corridors"),
    ("VCT aisles", "retail aisles"),
    ("VCT tile", "ceiling tile"),
    ("VCT today", "high-reach surfaces today"),
    ("VCT is restored", "high-reach surfaces are restored"),
    ("VCT for a comprehensive", "high dusting for a comprehensive"),
    ("commercial VCT", "commercial high dusting"),
    ("local VCT", "local high dusting"),
    ("VCT in corridors", "high dusting in corridors"),
    ("VCT in my Glasgow", "high dusting in my Glasgow"),
    ("VCT strips", "high-dusting visits"),
    ("VCT strip", "high-dusting visit"),
    ("VCT and adjacent", "high-reach surfaces and adjacent"),
    ("VCT floor", "high-reach surface"),
    ("VCT to its original", "high-reach surfaces to their original"),
    ("VCT", "high dusting"),

    # --- Cleanup: any leftover "stripping" / "burnish" ---
    ("high-speed burnishing program", "HEPA H-class vacuuming programme"),
    ("high-speed burnishing programme", "HEPA H-class vacuuming programme"),
    ("burnish program", "vacuum programme"),
    ("burnish programme", "vacuum programme"),
    ("burnish", "vacuum"),
    ("Burnishing", "Vacuuming"),
    ("Burnish", "Vacuum"),

    # --- "polish solids content" specific ---
    ("polish solids content (25% commercial, 30% premium)",
     "access method (cherry-picker, scissor-lift, or carbon-fibre pole)"),

    # --- "Quarters" / "-quarters" / specific phrases ---
    ("IFSD corporate VCT entrance", "IFSD corporate high-reach entrance"),
    ("IFSD corporate high-reach entrance", "IFSD corporate high-reach entrance"),  # idempotent
    ("IFSD corporate high dusting entrance", "IFSD corporate high-reach entrance"),

    # --- "VCT-trained" leftover ---
    ("high dusting high dusting", "high dusting"),  # cleanup any double-substitutions
    ("High Dusting High Dusting", "High Dusting"),
    ("high-dusting high-dusting", "high-dusting"),
    ("High-Dusting High-Dusting", "High-Dusting"),
]

# Apply replacements
for old, new in replacements:
    text = text.replace(old, new)

# Final cleanups for double-replacements
text = text.replace("high dusting high dusting", "high dusting")
text = text.replace("High Dusting High Dusting", "High Dusting")
text = text.replace("high-dusting high-dusting", "high-dusting")
text = text.replace("High-Dusting High-Dusting", "High-Dusting")
text = text.replace("high-level dusting high-level dusting", "high-level dusting")
text = text.replace("High-Level Dusting High-Level Dusting", "High-Level Dusting")
text = text.replace("high-reach high-reach", "high-reach")
text = text.replace("IPAF-certified IPAF-certified", "IPAF-certified")
text = text.replace("high dusting high-level dusting", "high-level dusting")
text = text.replace("High Dusting High-Level Dusting", "High-Level Dusting")
text = text.replace("high-level dusting high dusting", "high-level dusting")
text = text.replace("High-Level Dusting High Dusting", "High-Level Dusting")

SRC.write_text(text, encoding="utf-8")

print(f"Transformed: {SRC}")
print(f"New size: {len(text)} chars, {text.count(chr(10))} lines")

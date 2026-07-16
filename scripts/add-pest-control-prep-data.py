"""
Insert a new `pestControlPrep` ServiceDetail entry into service-detail-data.ts
before the leadDustCleanup export. We do this by reading the file, finding the
anchor point, and writing the entry inline.

The entry mirrors the disinfectionServices pattern (overview paragraphs, 6 whatsIncluded
items, 4 processSteps, 6 benefits, 3 pricing tiers, service areas, FAQs, testimonials,
related services, gallery) but with pest-control-prep-specific content drawn from the
brief the user provided.
"""

from pathlib import Path
import re

DATA_FILE = Path("/home/z/my-project/src/lib/service-detail-data.ts")

NEW_ENTRY = '''// ============================================================
// Specialty Service - Pest Control Prep (infestation cleaning prep)
// Mirrors the disinfectionServices content model. The page composes
// the standard ServiceDetail sections PLUS the pest-control-prep-seo.tsx
// SEO sections (Hero/Intro/Why/Checklist/Booking/Interlinking/NearMe/FinalCta/Faq).
// ============================================================
export const pestControlPrep: ServiceDetail = {
  slug: "pest-control-prep",
  name: "Pest Control Prep",
  category: "Specialty Cleaning",
  tagline: "Strategic technical preparation & infestation cleaning for effective professional extermination.",
  heroHeadline: "Treatment-ready\\nfirst time.\\nEvery time.",
  heroSubhead:
    "In the battle against household or commercial pests, the most effective insecticide or heat treatment is only as successful as the preparation that precedes it. Pest control professionals across Glasgow and Edinburgh often cannot treat properties that are cluttered or heavily soiled — debris provides hiding spots and reduces the efficacy of chemical applications. Our pest control prep service ensures your premises meet the exceptionally high cleaning criteria required for professional extermination.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  breadcrumbParent: "Specialty Cleaning",
  metaTitle: "Professional Pest Control Prep & Infestation Cleaning Scotland | Maundy Clean",
  metaDescription:
    "Professional pest control prep & infestation cleaning in Scotland. HEPA vacuuming, industrial degreasing, skirting-board detailing, 99.99% pathogen control, child-safe & pet-safe chemistry, full RAMS, 7-day scheduling. From £245/visit.",
  overviewParagraphs: [
    "Pest control prep is a discipline most cleaning companies get wrong. They treat it like a deep clean with extra vacuuming — but the brief from your pest controller is the opposite of a deep clean. The pest controller needs every harbourage exposed (furniture off skirtings, appliances pulled out, cupboards emptied, loft hatches open), every food source removed (crumbs, grease, spillages, bin residues), every surface accessible (no clutter, no stacked boxes, no stored items in front of voids), and every contamination trace cleaned (droppings, urine, hair, egg cases, webbing). Miss any one of these and the treatment fails — the pest survives, multiplies, and you pay for a second visit from the exterminator. We have built our pest control prep service around a 47-point technical checklist that maps exactly to the requirements of BPCA (British Pest Control Association) contractors.",
    "Our pest control prep sits between your pest controller\\'s survey and their treatment visit. The sequence is: (1) your pest controller surveys, identifies the pest, and issues their prep instructions; (2) we attend and execute the prep — decluttering, deep cleaning, contaminant removal, surface sanitisation, perimeter exposure; (3) your pest controller returns to a treatment-ready property and applies the insecticide, rodenticide, or heat treatment with 100% efficacy. We coordinate directly with your pest controller where you want us to — BPCA contractors across Glasgow, Edinburgh, Aberdeen, Dundee, and the Central Belt trust our prep because they know they will walk into a property that meets their brief without rework. We do not apply pesticides ourselves — that is your pest controller\\'s role — but we make sure their chemistry reaches every surface that matters.",
    "The third pillar of the service is post-treatment hygiene. After the exterminator has treated the property, the dead pests, droppings, urine, and shed cuticle remain — every one of which is a pathogen reservoir (salmonella from rodents, hantavirus from mouse urine, allergenic proteins from cockroach cuticle, histoplasmosis risk from bird droppings, leptospirosis from rat urine). We provide a post-treatment disinfection pass that removes the biological residue and applies an EN 14476 virucidal / EN 1276 bactericidal treatment to the surfaces the pests traversed. This is the difference between \\\"the pests are dead\\\" and \\\"the property is safe to reoccupy\\\" — and it is the step that generic cleaning companies routinely omit.",
  ],
  whatsIncluded: [
    {
      title: "Pre-treatment technical preparation",
      description:
        "Furniture migration away from skirting boards for full perimeter barrier treatment. Cupboards emptied and contents staged. Appliances pulled out (cookers, fridges, washing machines, dishwashers). Loft hatches opened and insulation lifted at eaves. Under-sink and behind-cabinet voids exposed. We follow your pest controller\\'s prep instructions to the letter — and we photograph every exposed void for the pest controller\\'s record.",
    },
    {
      title: "Kitchen & food-area neutralisation",
      description:
        "Technical cupboard clearing — every item removed, interiors wiped to remove crumbs, grease, and spillage that attract pests. Industrial degreasing behind and under appliances where pests nest. Sanitisation of high-touch points (door handles, kickplates, counter surfaces) to prevent cross-contamination. Food stored in sealed containers. Bin areas deep-cleaned and deodorised. The kitchen is the highest-activity zone for most infestations — we treat it that way.",
    },
    {
      title: "Living & sleeping area \\'reset\\'",
      description:
        "Furniture migration to expose perimeter skirtings and plug sockets. Intensive floor and carpet restoration using industrial-grade HEPA vacuums to remove eggs, larvae, cast skins, and debris from high-traffic surfaces. Bed frames dismantled and cleaned (bedbug protocol). Soft furnishings vacuumed and steam-treated where appropriate. Window and frame care — internal glass and frames cleaned to remove spider webbing, insect debris, and egg cases.",
    },
    {
      title: "Contaminant removal & disposal",
      description:
        "Droppings, urine, hair, egg cases, webbing, and shed cuticle removed using HEPA-filtered vacuums (no airborne recontamination). Contaminated materials bagged, sealed, and disposed of as soft clinical waste via licensed carrier. Soft furnishings flagged for laundering or specialist treatment. Carpets flagged for hot-water extraction post-treatment. Every contaminant source documented for your records and for your pest controller\\'s follow-up.",
    },
    {
      title: "EN 14476 virucidal post-treatment disinfection",
      description:
        "After the pest controller has treated the property, we return to remove the biological residue. Dead pests, droppings, and urine are removed under HEPA-negative-air containment. All surfaces the pests traversed are treated with EN 14476 virucidal / EN 1276 bactericidal chemistry (60-second contact time, food-safe, no rinse required). This is the step that addresses salmonella, hantavirus, leptospirosis, and the allergenic proteins from cockroach and rodent cuticle — and it is the step that turns \\\"the pests are dead\\\" into \\\"the property is safe to reoccupy.\\\"",
    },
    {
      title: "RAMS, COSHH & Treatment Certificate",
      description:
        "Full Risk Assessment & Method Statement prepared before mobilisation. COSHH datasheets for every chemistry used. Photo evidence of pre-prep condition, post-prep treatment-ready condition, and post-treatment disinfected condition. Treatment Certificate signed by the lead technician and emailed to you and your pest controller within 1 hour of completion. Suitable evidence for EHO inspection, landlord/letting-agent handover, insurer audit, and Care Inspectorate review where applicable.",
    },
  ],
  processSteps: [
    {
      step: "01",
      title: "Site survey & bespoke prep plan",
      description:
        "Contact us to organise a free site survey. We assess the level of preparation required based on your pest controller\\'s specific instructions — pest type (rodents, insects, bedbugs, fleas, wasps, birds), treatment method (chemical, heat, fumigation), property type (residential, commercial, HMO, food business), and re-entry window. We coordinate directly with your pest controller where you want us to. Fixed-price quote within 2 business days. No on-the-day upsells.",
      duration: "60-90 min survey",
    },
    {
      step: "02",
      title: "Pre-treatment prep visit",
      description:
        "Our crew attends before the pest controller\\'s treatment visit. We execute the 47-point prep checklist: furniture migration, cupboard clearing, appliance pull-out, void exposure, contaminant removal, kitchen neutralisation, living-area reset, HEPA vacuuming of carpets and floors, surface pre-clean. Every exposed void photographed for the pest controller\\'s record. Property left treatment-ready — your pest controller walks in and goes straight to work with 100% efficiency.",
      duration: "1-2 days (property dependent)",
    },
    {
      step: "03",
      title: "Pest controller treatment window",
      description:
        "Your pest controller attends and applies their treatment to the prepped property. We are not on-site during this step — but we have already done the work that determines whether their treatment succeeds or fails. Chemistry reaches every surface that matters. No harbourages remain untreated. No clutter to work around. No rework for the pest controller. The treatment efficacy is directly correlated with the quality of our prep — and our prep is technical, not cosmetic.",
      duration: "Per pest controller\\'s schedule",
    },
    {
      step: "04",
      title: "Post-treatment disinfection & handover",
      description:
        "After the pest controller\\'s treatment has taken effect (typically 7-14 days for chemical; immediate for heat), we return for the post-treatment disinfection pass. Dead pests, droppings, urine, and shed cuticle removed under HEPA containment. All traversed surfaces treated with EN 14476 virucidal / EN 1276 bactericidal chemistry. Treatment Certificate issued. Property restored to a biologically safe, re-occupiable condition — and we provide a 14-day re-clean guarantee if any biological residue is flagged.",
      duration: "1-2 days post-treatment",
    },
  ],
  benefits: [
    {
      icon: "Users",
      title: "The same trusted prep team",
      description:
        "Discretion and reliability are paramount during an infestation. We ensure the same vetted, background-checked professionals manage your prep to maintain privacy and build a deep understanding of your property\\'s \\\"risky\\\" hotspots. The same PAYE-employed, PVG-checked crew returns every visit — never a rotating cast of agency strangers walking your property during an infestation.",
    },
    {
      icon: "ShieldCheck",
      title: "99.99% pathogen & bacteria control",
      description:
        "Beyond clearing clutter, our disinfection service ensures equipment and surfaces are 99.99% virus and bacteria-free. This is critical after an infestation to remove health risks like salmonella or hantavirus often carried by pests. EN 14476 virucidal, EN 1276 bactericidal, EN 1650 fungicidal — three standards your insurer and Environmental Health ask about.",
    },
    {
      icon: "FileText",
      title: "Total regulatory compliance",
      description:
        "We support businesses and homeowners throughout Scotland to uphold required health and safety standards. Our teams follow robust decontamination protocols and provide full RAMS (Risk Assessments and Method Statements) for every site survey. SafeContractor-aligned, £5m public liability, audit-ready COSHH documentation.",
    },
    {
      icon: "Leaf",
      title: "Safe for families & pets",
      description:
        "Following treatment, your home must remain a sanctuary. We utilise only certified child-safe and pet-safe products, ensuring a fresh, non-toxic environment without the harsh chemical odors common with industrial cleaning agencies. No chlorine bleach, no quaternary-ammonium residue, no VOCs.",
    },
    {
      icon: "Clock",
      title: "7-day flexible scheduling",
      description:
        "We offer flexible scheduling 7 days a week, including early morning or late evening shifts, to ensure your property is ready exactly when your treatment specialist arrives. For commercial properties, we work overnight or out-of-hours to eliminate operational disruption. Pest control timing is critical — we meet it.",
    },
    {
      icon: "Award",
      title: "BPCA-contractor trusted",
      description:
        "British Pest Control Association contractors across Glasgow, Edinburgh, Aberdeen, Dundee, and the Central Belt refer their clients to us for prep — because they know they will walk into a property that meets their brief without rework. We coordinate directly with your pest controller where you want us to. References available on request.",
    },
  ],
  pricingTiers: [
    {
      name: "Single-Room Prep",
      tagline: "One affected room — kitchen, bedroom, or living room",
      price: "£245",
      unit: "/visit",
      features: [
        "Free site survey & bespoke prep plan",
        "Furniture migration & void exposure",
        "HEPA vacuuming of carpets and floors",
        "Surface pre-clean & contaminant removal",
        "Photo evidence for pest controller",
        "RAMS & COSHH documentation",
      ],
    },
    {
      name: "Whole-Property Prep",
      tagline: "Most popular — full residential or small commercial property",
      price: "£595",
      unit: "/visit",
      highlighted: true,
      features: [
        "Free site survey & bespoke prep plan",
        "All rooms prepped to 47-point checklist",
        "Kitchen neutralisation & industrial degreasing",
        "Living-area reset & perimeter exposure",
        "Contaminant removal & licensed disposal",
        "Photo evidence + Treatment Certificate",
        "Coordination with your pest controller",
      ],
    },
    {
      name: "Post-Treatment Disinfection",
      tagline: "EN 14476 virucidal pass after pest controller treatment",
      price: "£325",
      unit: "/visit",
      features: [
        "Scheduled 7-14 days post-treatment",
        "Dead pest & contaminant removal (HEPA)",
        "EN 14476 virucidal surface disinfection",
        "EN 1276 bactericidal wipe-down",
        "Allergen residue neutralisation",
        "Treatment Certificate + 14-day re-clean guarantee",
      ],
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Falkirk", "Perth", "Inverness",
    "Kilmarnock", "Ayr", "Paisley", "East Kilbride", "Livingston", "Motherwell",
    "Coatbridge", "Hamilton", "Cumbernauld", "Greenock", "Dunfermline", "Kirkcaldy",
  ],
  faqs: [
    {
      q: "Will you remove the pests yourselves?",
      a: "No. We do not apply pesticides, rodenticides, or heat treatments — that is the role of your British Pest Control Association (BPCA) registered pest controller. Our role is the technical preparation that determines whether their treatment succeeds or fails. We expose every harbourage, remove every food source, clear every clutter trap, and remove every contaminant — so the pest controller\\'s chemistry reaches every surface that matters. We coordinate directly with your pest controller where you want us to, and we can recommend trusted BPCA contractors across Scotland if you do not already have one.",
    },
    {
      q: "How soon after the prep can the pest controller treat?",
      a: "Same day in most cases. Our prep is completed and the property is treatment-ready when we leave — furniture off skirtings, cupboards emptied, appliances pulled out, voids exposed, contaminants removed. Your pest controller walks in and goes straight to work. For complex preps (multi-room residential, commercial kitchens, food businesses), we typically complete the prep the day before the treatment visit to allow a full drying cycle on any damp-wiped surfaces. We agree the timing with you and your pest controller at the site survey.",
    },
    {
      q: "Do I need to leave the property during the prep?",
      a: "Not usually — our prep chemistry is non-toxic, child-safe, and pet-safe, so you can remain in the property throughout. The exceptions are: (1) severe rodent infestations where we are removing large volumes of contaminated material (we recommend leaving for 2-4 hours for your comfort); (2) properties with asthma or allergy sufferers where we are disturbing allergenic dust (we recommend leaving for 4 hours during HEPA vacuuming); (3) post-treatment disinfection where we apply EN 14476 virucidal chemistry (8-minute dry time, then safe to re-enter). We will flag any recommended absence at the site survey.",
    },
    {
      q: "Can you work out-of-hours for commercial properties?",
      a: "Yes. We offer flexible scheduling 7 days a week, including early morning or late evening shifts, to ensure your property is ready exactly when your treatment specialist arrives. For restaurants, food-processing facilities, hotels, and retail units, we typically work overnight or pre-opening to eliminate operational disruption. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols — keys stored in a coded safe, alarm codes encrypted, never labelled with your address.",
    },
    {
      q: "Do you provide the equipment and chemistry?",
      a: "Yes. We supply all our own professional-grade equipment, including HEPA vacuums and non-toxic materials required for deep sanitisation, which are included in your competitive quote. Every crew arrives in a liveried van with HEPA-filtered vacuums (Miele Compressed Air or equivalent), industrial degreasers, EN 14476 virucidal chemistry, EN 1276 bactericidal wipes, PPE (Tyvek suit, FFP3 respirator, nitrile gloves), colour-coded microfibre cloths, and licensed waste-carrier documentation for any contaminated material we remove.",
    },
    {
      q: "Are your cleaners insured for infestation environments?",
      a: "Absolutely. Maundy Clean is a fully insured, registered professional cleaning company with extensive experience serving Scotland\\'s commercial and residential sectors in sensitive hygiene scenarios. We hold £5m public liability, £10m employer\\'s liability, are SafeContractor-approved, and can name your business on our policy as additional insured. Our technicians are PVG-checked, vaccinated against hepatitis B, and occupational-health monitored. COSHH datasheets, training records, and insurance certificates available on request.",
    },
  ],
  testimonials: [
    {
      name: "Fiona MacLeod",
      role: "Property Manager, Edinburgh Letting Agency",
      quote:
        "Recurring bedbug issue in a New Town flat — three failed treatments from a national pest controller. We brought Maundy Clean in for the prep on the fourth attempt. They exposed every void, dismantled the bed frame, HEPA-vacuumed every carpet, and prepped the property to a level the pest controller said he\\'d never seen. Fourth treatment worked first time. Now Maundy Clean is on our panel for every infestation case.",
      rating: 5,
    },
    {
      name: "James Cairns",
      role: "Operations Manager, Glasgow Restaurant Group",
      quote:
        "Mouse issue across three of our city-centre units. Our BPCA pest controller was clear — without proper prep the treatments would fail. Maundy Clean coordinated directly with the pest controller, prepped all three units overnight (no trading impact), and the treatments took first time. The post-treatment disinfection pass was the difference — the units were genuinely safe to re-enter, not just pest-free. Worth every penny.",
      rating: 5,
    },
    {
      name: "Dr. Aileen Stewart",
      role: "Practice Manager, Aberdeen Dental Practice",
      quote:
        "Pharaoh ant infestation in a clinical setting — every other cleaner refused to touch the prep because of the infection-control implications. Maundy Clean\\'s team understood immediately. They coordinated with our pest controller, prepped the clinical areas to our infection-control protocol, and the post-treatment disinfection was documented to a standard our CQC-equivalent inspector described as \\'exemplary.\\' Outstanding service.",
      rating: 5,
    },
  ],
  relatedServices: [
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description: "EN 14476 virucidal fogging & electrostatic spray — pair with pest prep for post-treatment biological reset.",
    },
    {
      name: "Biohazard Cleaning",
      href: "/services/biohazard-cleaning",
      description: "Licensed biohazard removal — for severe infestations with biological contamination beyond standard pest prep.",
    },
    {
      name: "Deep House Cleaning",
      href: "/services/deep-house-cleaning",
      description: "Whole-property deep clean — the right follow-on after pest treatment to restore the home to a 5-star standard.",
    },
    {
      name: "End of Tenancy Cleaning",
      href: "/services/move-in-out-cleaning",
      description: "End of tenancy clean with pest history — deposit-back guarantee, fully sanitised for handover.",
    },
    {
      name: "Recurring Home Cleaning",
      href: "/services/recurring-home-cleaning",
      description: "Weekly or fortnightly maintenance — preventing the buildup that attracts pests back after treatment.",
    },
    {
      name: "Hoarding Cleanup",
      href: "/services/hoarding-cleanup",
      description: "Compassionate hoarding clearance — often the underlying cause of severe infestations in residential properties.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Maundy Clean pest control prep technician HEPA-vacuuming a Scottish residential kitchen before extermination treatment",
      caption: "HEPA-filtered vacuum removal of eggs, larvae, and debris from a high-traffic kitchen floor — pre-treatment.",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
      alt: "Industrial degreasing behind a commercial cooker where pests had been nesting",
      caption: "Industrial degreasing behind appliances — the nesting sites that generic cleaning companies miss.",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
      alt: "Skirting board detailing with EN 14476 virucidal chemistry to ensure treatment chemicals adhere properly",
      caption: "Skirting board detailing — surfaces prepped so the pest controller\\'s chemistry adheres properly to every perimeter.",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
      alt: "Maundy Clean pest prep crew in full PPE removing contaminated material under HEPA containment",
      caption: "Vetted, PAYE-employed, PVG-checked pest prep crew — full PPE, HEPA containment, licensed waste disposal.",
    },
  ],
};

'''

text = DATA_FILE.read_text()

# Anchor: insert before the Lead Dust Cleanup export block
ANCHOR = """// ============================================================
// Specialty Service #105 - Lead Dust Cleanup
// ============================================================"""

if ANCHOR not in text:
    raise SystemExit("Anchor not found — file structure changed unexpectedly")

NEW_TEXT = text.replace(ANCHOR, NEW_ENTRY + ANCHOR, 1)
DATA_FILE.write_text(NEW_TEXT)

# Sanity check: count total ServiceDetail exports before & after
before_count = text.count("\nexport const ")
after_count = NEW_TEXT.count("\nexport const ")
print(f"ServiceDetail exports before: {before_count}")
print(f"ServiceDetail exports after:  {after_count}")
print(f"Added pestControlPrep entry: {after_count - before_count == 1}")

# Confirm the new entry is present
if "export const pestControlPrep: ServiceDetail" in NEW_TEXT:
    print("OK — pestControlPrep entry added successfully")
else:
    raise SystemExit("Failed — pestControlPrep entry not found in result")

// Industry detail content model — rich, per-industry data for industry landing pages.
// Each industry has: hero, overview, compliance standards, services delivered, challenges
// solved, stats, process, benefits, service areas, FAQ, testimonials, related industries, gallery.

export type IndustryCompliance = {
  code: string; // e.g., "HTM 01-05", "BRCGS", "HSG272"
  title: string; // Full name
  description: string; // How we apply it
};

export type IndustryChallenge = {
  icon: string; // lucide icon name
  title: string;
  description: string;
};

export type IndustryStat = {
  value: string; // e.g., "98%", "1,200+"
  label: string; // e.g., "audit pass rate"
};

export type IndustryService = {
  name: string; // Service name
  href: string; // Link to /services/...
  description: string;
};

export type IndustryFaq = {
  q: string;
  a: string;
};

export type IndustryTestimonial = {
  name: string;
  role: string;
  facility: string;
  quote: string;
  rating: number;
};

export type IndustryProcessStep = {
  step: string;
  title: string;
  description: string;
  duration?: string;
};

export type IndustryBenefit = {
  icon: string; // lucide icon name
  title: string;
  description: string;
};

export type IndustryDetail = {
  slug: string;
  name: string;
  category: string; // Healthcare, Hospitality & Retail, Education, etc.
  tagline: string;
  heroHeadline: string; // multi-line with \n
  heroSubhead: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  overviewParagraphs: string[];
  compliance: IndustryCompliance[];
  servicesDelivered: IndustryService[];
  challenges: IndustryChallenge[];
  stats: IndustryStat[];
  processSteps: IndustryProcessStep[];
  benefits: IndustryBenefit[];
  serviceAreas: string[];
  faqs: IndustryFaq[];
  testimonials: IndustryTestimonial[];
  relatedIndustries: { name: string; href: string; description: string }[];
  gallery: { src: string; alt: string; caption: string }[];
};

// Shared Scottish service-areas list used by every industry export.
const SCOTTISH_AREAS = [
  "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
  "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
  "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
  "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
];

// ============================================================
// Industry #1 — Hospitals & NHS Trusts (Healthcare)
// ============================================================
export const hospitalsNhsTrusts: IndustryDetail = {
  slug: "hospitals-nhs-trusts",
  name: "Hospitals & NHS Trusts",
  category: "Healthcare",
  tagline: "HTM 01-05 terminal cleans, AECC audits, and biohazard response across NHS Scotland estates.",
  heroHeadline: "Hospital-grade cleaning.\nNHS-proven protocols.\nAudit-ready, every shift.",
  heroSubhead:
    "We deliver terminal cleans, ward decants, and ongoing ward-level sanitation to NHS Health Boards and private hospital groups across Scotland. HTM 01-05 compliant, NHSSC framework-aligned, and led by crews trained in patient-present cleaning protocols.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  metaTitle: "Hospital & NHS Trust Cleaning Services Scotland | HTM 01-05 | Maundy Clean",
  metaDescription:
    "NHS-grade hospital cleaning across Scotland. HTM 01-05 terminal cleans, AECC compliance, biohazard response, and ward decant support. PVG-checked crews. NHSSC framework-aligned. 24/7 cover.",
  overviewParagraphs: [
    "Hospital cleaning is the most regulated cleaning environment in Scotland. Every protocol, every product, and every audit trail is governed by Health Technical Memorandum 01-05 — and inspected by Healthcare Improvement Scotland, the Health & Safety Executive, and your own Infection Prevention & Control team. Maundy Clean has spent over a decade inside NHS Health Board estates, from acute teaching hospitals in Glasgow and Edinburgh to community maternity units in the Highlands. We don't learn the rules on the job. We arrive already compliant.",
    "Our hospital division operates a dual-shift model: a day team covering wards, outpatient departments, and clinical treatment areas during operating hours, and a night team delivering terminal cleans, deep disinfection, and floor stripping in vacated bays. Every cleaner carries Disclosure Scotland PVG scheme membership, completes annual IPC training aligned to NHS Education for Scotland (NES) modules, and works to colour-coded zone protocols that prevent cross-contamination between isolation, surgical, and general ward areas.",
    "We integrate directly with your estate's CAFM system, log every task against a QR-coded asset register, and produce digital cleaning records that survive an unannounced Healthcare Improvement Scotland inspection. When a ward decant or outbreak response is needed, our on-call team mobilises within 4 hours anywhere on mainland Scotland — and within 24 hours on the islands. That's the level of operational resilience NHS procurement teams expect, and it's the level we deliver on every contract.",
  ],
  compliance: [
    {
      code: "HTM 01-05",
      title: "Health Technical Memorandum 01-05",
      description:
        "The de facto NHS cleaning standard. Our ward-level protocols, frequency schedules, and audit scoring map directly to the National Specifications for Cleanliness in the NHS.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include outlet flushing logs, water temperature checks, and showerhead descaling in our hospital scope — closing a common audit gap.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every chemical on site carries an up-to-date COSHH datasheet, dilution log, and trained-operators register. We never deploy a product your IPC team hasn't approved.",
    },
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "Disinfectants used in patient areas meet EN 14476 (norovirus, influenza, coronaviruses) and EN 1276 (bacterial) — verified by batch certification.",
    },
    {
      code: "NHSSC Framework",
      title: "National Healthcare Services Scotland Framework",
      description:
        "We hold places on the relevant cleaning services frameworks, so procurement teams can call off without a full OJEU exercise.",
    },
    {
      code: "ISO 9001",
      title: "Quality Management System",
      description:
        "Our hospital account management is ISO 9001 certified, with documented processes for mobilisation, audit response, and contract variation.",
    },
  ],
  servicesDelivered: [
    {
      name: "Hospital Environmental Services",
      href: "/services/hospital-environmental-services",
      description:
        "Full ward-level cleaning, day & night shifts, with IPC-trained crews and CAFM-integrated audit trails.",
    },
    {
      name: "Terminal Clean & Ward Decant",
      href: "/services/disinfection-services",
      description:
        "Patient-present and patient-absent terminal cleans following isolation discharge, outbreak stand-down, or pre-commissioning of new clinical space.",
    },
    {
      name: "Biohazard & Body Fluids Response",
      href: "/services/biohazard-cleaning",
      description:
        "Category 3 biohazard response — blood, vomit, faeces, urine — with properly licensed clinical waste disposal via your chosen contractor.",
    },
    {
      name: "Electrostatic Disinfection",
      href: "/services/electrostatic-disinfection-add-on",
      description:
        "Whole-room electrostatic spraying for rapid high-touch disinfection during outbreak response or between surgical lists.",
    },
    {
      name: "Restroom & Sanitary Area Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Patient and staff WCs descaled, disinfected, and re-stocked with audit-ready records on every visit.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Safety-floor machine scrubbing, VCT strip & re-seal, and slip-resistance testing aligned to HSE SLIPS guidance.",
    },
  ],
  challenges: [
    {
      icon: "Shield",
      title: "Audit pressure that never lets up",
      description:
        "Healthcare Improvement Scotland inspections can land unannounced. Our digital cleaning records and audit-ready checklists mean you're never caught short — every task is time-stamped, geo-verified, and exportable to PDF in seconds.",
    },
    {
      icon: "Zap",
      title: "Outbreak response at 2am",
      description:
        "Norovirus, C. diff, or RSV outbreaks don't wait for office hours. Our on-call hospital team mobilises within 4 hours on mainland Scotland, with dedicated outbreak kits and full PPE protocols already loaded.",
    },
    {
      icon: "Users",
      title: "Patient-present cleaning sensitivity",
      description:
        "Cleaning around patients requires training, empathy, and the right sequence. Our crews complete NHS Education for Scotland IPC modules and use quiet equipment, low-odour products, and clear patient communication.",
    },
    {
      icon: "TrendingUp",
      title: "Tightening budgets, higher standards",
      description:
        "NHS Boards face flat real-terms budgets against rising audit expectations. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping a single auditable task.",
    },
    {
      icon: "Heart",
      title: "Staff morale and patient experience",
      description:
        "Clean wards directly correlate with patient satisfaction scores and staff retention. We're not just a cleaning supplier — we're part of your patient experience strategy.",
    },
    {
      icon: "Building2",
      title: "Multi-site estate complexity",
      description:
        "From a 950-bed acute teaching hospital to a 12-bed community maternity unit, the protocols must scale. Our account managers handle multi-site rosters, consistent training, and consolidated reporting.",
    },
  ],
  stats: [
    { value: "11+", label: "years inside NHS estates" },
    { value: "98%", label: "audit pass rate first time" },
    { value: "4h", label: "outbreak response SLA" },
    { value: "1.4M", label: "sq ft cleaned daily" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Site survey & scoping",
      description:
        "Our NHS-trained account director walks your estate with your IPC lead and facilities manager. We map zones, traffic patterns, risk categories, and current audit pain points.",
      duration: "Days 1–3",
    },
    {
      step: "02",
      title: "Protocol & SLA design",
      description:
        "We produce a written cleaning schedule mapped to HTM 01-05 frequencies, an SLA document covering audit response and outbreak mobilisation, and a COSHH register pre-approved by your IPC team.",
      duration: "Days 3–5",
    },
    {
      step: "03",
      title: "Crew mobilisation",
      description:
        "PVG-checked, IPC-trained crews are rostered, badged, and inducted to your estate. Equipment is delivered, colour-coded by zone, and CAFM integration goes live.",
      duration: "Days 5–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & audit",
      description:
        "Daily cleaning to schedule, weekly quality walks, monthly audit reports, and quarterly frequency reviews. You see real-time KPI dashboards and a single named account manager.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Shield",
      title: "HTM 01-05 audit-ready, always",
      description:
        "Every task is logged digitally against your asset register. Auditors can pull a full cleaning history for any bay, anytime, in under 60 seconds.",
    },
    {
      icon: "Users",
      title: "Dedicated NHS-trained crews",
      description:
        "No agency temps on hospital contracts. Every cleaner is PAYE-employed, PVG-checked, and completes annual NES-aligned IPC training.",
    },
    {
      icon: "Zap",
      title: "4-hour outbreak response",
      description:
        "Mainland Scotland mobilisation within 4 hours of call-out. Dedicated outbreak kits pre-loaded with PPE, disinfectants, and clinical waste containment.",
    },
    {
      icon: "TrendingUp",
      title: "Frequency optimisation reviews",
      description:
        "Quarterly we re-examine every task frequency against your audit data. Typically we identify 8–12% efficiency gains without dropping any auditable line item.",
    },
    {
      icon: "Heart",
      title: "Patient-present sensitivity",
      description:
        "Our crews are trained in patient communication, quiet operation, and dignity-first cleaning. Patient experience scores consistently improve on wards we take over.",
    },
    {
      icon: "Building2",
      title: "Single point of accountability",
      description:
        "One named account manager across all your sites. One consolidated monthly report. One phone number for the on-call duty manager. No buck-passing.",
    },
  ],
  serviceAreas: SCOTTISH_AREAS,
  faqs: [
    {
      q: "Are you on the NHSSC cleaning services framework?",
      a: "Yes. We hold places on the relevant National Healthcare Services Scotland frameworks for cleaning services, which means procurement teams can call off our services without running a full OJEU exercise. Contact us for our framework reference numbers and lot coverage.",
    },
    {
      q: "How do you handle an outbreak like norovirus or C. diff?",
      a: "Our hospital on-call team mobilises within 4 hours on mainland Scotland. We deploy dedicated outbreak kits — PPE, EN 14476 virucidal disinfectants, chlorine-releasing tablets, and clinical waste containment — and follow a closed-unit protocol with separate crews, separate equipment, and a documented stand-down sequence signed off by your IPC lead.",
    },
    {
      q: "Do you use agency staff on NHS contracts?",
      a: "No. Every cleaner on a hospital contract is a PAYE-employed member of Maundy Clean staff. They carry Disclosure Scotland PVG scheme membership, complete annual NHS Education for Scotland IPC training, and work to a personal training record we share with your facilities team.",
    },
    {
      q: "Can you integrate with our CAFM system?",
      a: "Yes. We have live integrations with the major NHS CAFM platforms including Planon, Micad, and Estates & Facilities FM. Every task is logged against your asset register with a time-stamp, geo-location, and crew ID. If you use a bespoke system, our ops team will scope an integration as part of mobilisation.",
    },
    {
      q: "How do you handle patient-present cleaning?",
      a: "Crews follow a patient-present protocol: announce entry, observe dignity, use quiet equipment, avoid strong-odour products, and sequence tasks to minimise disruption. We never spray disinfectant near a patient without prior notice. Sensitivity is part of our IPC training, not an afterthought.",
    },
    {
      q: "What's your pricing model for NHS contracts?",
      a: "Most NHS contracts are priced as a fixed monthly fee based on scoped area, frequency schedule, and SLA. We provide transparent unit-rate cards so procurement can benchmark against framework pricing. Variable elements (outbreak response, decants, ad-hoc deep cleans) are quoted separately on a schedule of rates.",
    },
  ],
  testimonials: [
    {
      name: "Fiona McAllister",
      role: "Lead Nurse, Infection Prevention & Control",
      facility: "NHS Greater Glasgow & Clyde",
      quote:
        "Maundy Clean took over three acute wards in 2023. Our first Healthcare Improvement Scotland inspection after mobilisation scored 96% on environment cleanliness — up from 88% under our previous contractor. The audit trail alone was worth the switch.",
      rating: 5,
    },
    {
      name: "Dr Iain Robertson",
      role: "Director of Facilities",
      facility: "NHS Tayside",
      quote:
        "The 4-hour outbreak response isn't a marketing line — we've used it twice. Both times the crew arrived with full PPE and a stand-down protocol already drafted. That level of operational readiness is rare.",
      rating: 5,
    },
    {
      name: "Margaret Sinclair",
      role: "Senior Charge Nurse",
      facility: "Royal Infirmary of Edinburgh",
      quote:
        "The same faces every shift. The crew lead knows our bays, knows our high-risk patients, and knows when to wait. That continuity is what patient-present cleaning actually looks like.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "GP Surgeries & Clinics",
      href: "/industries/gp-surgeries-clinics",
      description:
        "Primary care cleaning aligned to Healthcare Improvement Scotland primary care standards.",
    },
    {
      name: "Dental Practices",
      href: "/industries/dental-practices",
      description:
        "HTM 01-05 dental compliance, instrument reprocessing zone cleaning, and surgery turnover.",
    },
    {
      name: "Veterinary Practices",
      href: "/industries/veterinary-practices",
      description:
        "Biosecure veterinary cleaning with zoonotic pathogen protocols and theatre-level disinfection.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
      alt: "Hospital ward cleaning by Maundy Clean",
      caption: "Acute ward day-shift cleaning, NHS Greater Glasgow & Clyde",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Terminal clean of hospital bay",
      caption: "Post-discharge terminal clean with EN 14476 virucidal disinfectant",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Hospital-grade eco supplies",
      caption: "Colour-coded zone equipment prevents cross-contamination",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Hospital floor care",
      caption: "Safety-floor machine scrubbing aligned to HSE SLIPS guidance",
    },
  ],
};

// ============================================================
// Industry #2 — GP Surgeries & Clinics (Healthcare)
// ============================================================
export const gpSurgeriesClinics: IndustryDetail = {
  slug: "gp-surgeries-clinics",
  name: "GP Surgeries & Clinics",
  category: "Healthcare",
  tagline: "Primary care cleaning aligned to Healthcare Improvement Scotland primary care standards.",
  heroHeadline: "A clean surgery\nis a confident\nsurgery team.",
  heroSubhead:
    "We clean GP practices, treatment rooms, and primary care clinics across Scotland — quietly, consistently, and in line with Healthcare Improvement Scotland primary care standards. PVG-checked crews, EN 14476 disinfectants, and digital records that survive CQC-equivalent inspection.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  metaTitle: "GP Surgery & Clinic Cleaning Scotland | HIS Primary Care Standards | Maundy Clean",
  metaDescription:
    "GP surgery cleaning across Scotland. Healthcare Improvement Scotland primary care standards, treatment room disinfection, EN 14476 virucidal products. PVG-checked crews. Daily, weekly, or ad-hoc visits.",
  overviewParagraphs: [
    "GP surgeries occupy a tricky regulatory space — they're healthcare premises, but they're also small businesses operating out of converted residential or retail buildings. Cleaning protocols have to meet Healthcare Improvement Scotland primary care standards, but the budget and footprint look more like a small office. Maundy Clean specialises in this middle ground: clinically compliant, operationally light, commercially sensible.",
    "Our GP surgery teams work before, after, or around clinic hours — typically a 6am start or a 7pm finish — so patients never see the mop bucket. We follow a colour-coded zone system that keeps waiting-area equipment away from treatment-room surfaces, use EN 14476 virucidal disinfectants on every clinical touchpoint, and replace cloth mop heads between zones to prevent cross-contamination. Every visit is logged digitally, with a time-stamped photo of any flagged area.",
    "Many of our GP clients are single-handed practices or two-partner setups with no dedicated facilities manager. That's why we assign every account a named regional manager who visits quarterly, sits in on practice meetings if requested, and handles everything from consumable re-ordering (gloves, paper towels, soap) to biohazard response when a sharps incident occurs. We're not just a cleaning supplier — we're part of your practice's compliance infrastructure.",
  ],
  compliance: [
    {
      code: "HIS PCS",
      title: "Healthcare Improvement Scotland Primary Care Standards",
      description:
        "Our cleaning schedules and audit format map directly to the HIS primary care cleanliness inspection criteria.",
    },
    {
      code: "HTM 01-05",
      title: "Health Technical Memorandum 01-05 (Primary Care extract)",
      description:
        "We apply the primary-care-relevant sections of HTM 01-05, including treatment-room turnover and clinical waste segregation.",
    },
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "All clinical touchpoints are wiped with EN 14476 virucidal disinfectant — effective against norovirus, influenza, and coronaviruses.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We avoid chlorine-based sprays in poorly ventilated treatment rooms where alternatives exist.",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Our crews are trained in patient confidentiality. Cleaning never disturbs patient records, prescription pads, or unattended screens.",
    },
  ],
  servicesDelivered: [
    {
      name: "Medical Office Cleaning",
      href: "/services/medical-office-cleaning",
      description:
        "Reception, waiting area, admin office, and staff kitchen cleaning — the non-clinical side of the practice.",
    },
    {
      name: "Clinic Room Disinfection",
      href: "/services/clinic-cleaning",
      description:
        "Treatment room turnover between clinics, end-of-day deep wipe-down, and couch roll / sharps bin top-up.",
    },
    {
      name: "Electrostatic Disinfection",
      href: "/services/electrostatic-disinfection-add-on",
      description:
        "Whole-surgery electrostatic spraying during outbreak response or post-flu-season deep clean.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Patient and staff WCs descaled, disinfected, and re-stocked with audit-ready records on every visit.",
    },
    {
      name: "Hard Floor & Carpet Care",
      href: "/services/vct-floor-care",
      description:
        "Waiting-room carpet hot-water extraction, safety-floor machine scrubbing, and entrance mat management.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Surgery exterior and interior windows, including high-level reception glazing, on a scheduled rotation.",
    },
  ],
  challenges: [
    {
      icon: "Clock",
      title: "Cleaning around clinic hours",
      description:
        "Most GP practices can't afford to close for cleaning. We work before clinics open or after the last patient leaves, and crews are trained to work discreetly if a clinic overruns.",
    },
    {
      icon: "Shield",
      title: "Patient-record confidentiality",
      description:
        "Reception desks, consulting rooms, and unattended screens are no-go zones during cleaning. Our crews complete confidentiality briefings and never move paperwork or prescriptions.",
    },
    {
      icon: "Users",
      title: "Vulnerable patient sensitivity",
      description:
        "Elderly patients, anxious patients, and parents with small children need calm, unobtrusive cleaning. Our crews use quiet equipment, low-odour products, and warm communication.",
    },
    {
      icon: "Zap",
      title: "Outbreak response in a small footprint",
      description:
        "A norovirus case in a 4-room surgery can shut the practice for a day. Our regional team mobilises within 4 hours with dedicated outbreak kits and a stand-down protocol signed off by the practice manager.",
    },
    {
      icon: "Building2",
      title: "Mixed-use building complexity",
      description:
        "Many surgeries share buildings with retail, residential, or other healthcare tenants. We coordinate with building management and respect shared-area protocols.",
    },
    {
      icon: "TrendingUp",
      title: "Tight budgets, rising expectations",
      description:
        "GMS contracts haven't kept pace with rising cleaning costs. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any auditable task.",
    },
  ],
  stats: [
    { value: "180+", label: "GP practices served" },
    { value: "96%", label: "client retention" },
    { value: "4h", label: "outbreak response SLA" },
    { value: "12+", label: "years in primary care" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Practice walk-through",
      description:
        "Our regional manager walks the practice with the practice manager or lead GP. We map zones, identify risk areas, and discuss preferred visit times and access arrangements.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Scoped schedule & quote",
      description:
        "Within 2 business days you receive a written cleaning schedule, frequency matrix, COSHH register, and a fixed monthly fee. No hidden extras.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A PVG-checked crew is inducted to the practice, introduced to staff, and walks the building with the practice manager. The first clean is supervised.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Quarterly review & audit",
      description:
        "Your regional manager visits quarterly for a joint walk-through, a KPI review, and a forward-plan discussion. Annual contract review covers SLA performance and any scope changes.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Users",
      title: "Same crew, every visit",
      description:
        "We assign a dedicated crew to your practice — they learn your building, your staff, and your patient rhythm. No rotating contractors who need re-briefing every week.",
    },
    {
      icon: "Shield",
      title: "PVG-checked & confidentiality-trained",
      description:
        "Every crew member carries Disclosure Scotland PVG scheme membership and completes a GP-specific confidentiality briefing before stepping foot in your building.",
    },
    {
      icon: "Zap",
      title: "4-hour outbreak response",
      description:
        "Norovirus, flu, or scabies incidents trigger an immediate response with dedicated outbreak kits and a documented stand-down protocol.",
    },
    {
      icon: "Clock",
      title: "Out-of-hours flexibility",
      description:
        "We work around your clinic hours — early mornings, late evenings, or weekends. If a clinic overruns, our crews wait discreetly or return later at no extra charge.",
    },
    {
      icon: "TrendingUp",
      title: "Frequency optimisation",
      description:
        "Quarterly we re-examine task frequencies against your audit data. Typically we find 8–12% efficiency gains without dropping any auditable line item.",
    },
    {
      icon: "Heart",
      title: "Named regional manager",
      description:
        "One phone number, one named contact. No call centres, no ticket systems. Your regional manager knows your practice by name and visits quarterly.",
    },
  ],
  serviceAreas: SCOTTISH_AREAS,
  faqs: [
    {
      q: "How do you handle cleaning when clinics overrun?",
      a: "Our crews are briefed to wait discreetly or to start in non-clinic areas. If a clinic overruns significantly, we'll either complete the clean later that evening or return the next morning at no extra charge. We never pressure practice staff to vacate rooms.",
    },
    {
      q: "Do you supply consumables like gloves, paper towels, and soap?",
      a: "Yes, optional. We can include a consumables package — clinical gloves, paper hand towels, hand soap, sanitising wipes, and toilet tissue — at a fixed monthly add-on. Many of our GP clients find this simpler than managing multiple suppliers.",
    },
    {
      q: "Can you handle sharps bin top-up and clinical waste segregation?",
      a: "We top up sharps bins as part of the cleaning schedule and ensure clinical waste segregation is correct (orange bag vs tiger bag vs black bag). We don't remove clinical waste ourselves — that requires a licensed clinical waste contractor — but we coordinate with your existing contractor.",
    },
    {
      q: "How do you handle patient-record confidentiality?",
      a: "Crews are briefed on entry that reception desks, consulting room desks, and any visible patient records are no-go zones. They don't move paperwork, don't log into computers, and don't photograph anything other than the cleaning task itself. This is reinforced at every quarterly review.",
    },
    {
      q: "What's your pricing model?",
      a: "Most GP contracts are priced as a fixed monthly fee based on surgery size, number of treatment rooms, and visit frequency. Typical GP surgeries (3–6 clinicians, 4–8 rooms) pay between £420 and £890 per month. We provide a transparent quote after the practice walk-through.",
    },
    {
      q: "Can you cover a single-handed practice or branch surgery?",
      a: "Yes. We have a dedicated small-practice team that covers single-handed GPs, branch surgeries, and remote rural practices. Minimum visit length is 2 hours; pricing scales accordingly.",
    },
  ],
  testimonials: [
    {
      name: "Dr Aileen Ferguson",
      role: "Senior Partner",
      facility: "Bruntsfield Medical Practice, Edinburgh",
      quote:
        "We switched to Maundy Clean after a disappointing spell with a national contractor. The difference is night and day — same crew every week, no records moved, no patient ever disturbed. The audit trail makes HIS inspections painless.",
      rating: 5,
    },
    {
      name: "Gordon Park",
      role: "Practice Manager",
      facility: "Carnbroe Medical Practice, Coatbridge",
      quote:
        "When we had a norovius case in the waiting area on a Friday morning, Maundy Clean had a crew on site within 3 hours. Stand-down protocol was already drafted. Practice stayed open. That's worth every penny.",
      rating: 5,
    },
    {
      name: "Dr Rabina Anwar",
      role: "GP Partner",
      facility: " Dennistoun Medical Practice, Glasgow",
      quote:
        "The named regional manager thing isn't a gimmick — I've got Shona's mobile, she picks up, and she knows our building. That's how cleaning support should work for a busy practice.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Hospitals & NHS Trusts",
      href: "/industries/hospitals-nhs-trusts",
      description:
        "Acute hospital cleaning aligned to HTM 01-05 and Healthcare Improvement Scotland standards.",
    },
    {
      name: "Dental Practices",
      href: "/industries/dental-practices",
      description:
        "HTM 01-05 dental compliance and surgery turnover for dental practices.",
    },
    {
      name: "Veterinary Practices",
      href: "/industries/veterinary-practices",
      description:
        "Biosecure veterinary cleaning with zoonotic pathogen protocols.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
      alt: "GP surgery cleaning",
      caption: "Treatment room turnover cleaning, Edinburgh practice",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "GP waiting room cleaning",
      caption: "Out-of-hours waiting room deep clean with low-odour products",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "GP surgery colour-coded equipment",
      caption: "Colour-coded zone equipment prevents cross-contamination",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "GP surgery floor care",
      caption: "Safety-floor machine scrubbing in treatment room corridor",
    },
  ],
};

// ============================================================
// Industry #3 — Dental Practices (Healthcare)
// ============================================================
export const dentalPractices: IndustryDetail = {
  slug: "dental-practices",
  name: "Dental Practices",
  category: "Healthcare",
  tagline: "HTM 01-05 dental compliance, instrument reprocessing zones, and surgery turnover — done properly.",
  heroHeadline: "A dental surgery\nclean enough to\nwork bare-handed.",
  heroSubhead:
    "We clean NHS, private, and mixed dental practices across Scotland — aligned to HTM 01-05 dental protocols, with separate zoning for instrument reprocessing, surgery turnover, and patient-facing areas. PVG-checked crews, EN 14476 disinfectants, and audit-ready records.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  metaTitle: "Dental Practice Cleaning Scotland | HTM 01-05 Dental | Maundy Clean",
  metaDescription:
    "Dental surgery cleaning across Scotland. HTM 01-05 dental compliance, instrument reprocessing zone cleaning, surgery turnover, EN 14476 disinfectants. PVG-checked crews. Daily or weekly visits.",
  overviewParagraphs: [
    "Dental practices occupy a unique regulatory position: HTM 01-05 applies in full, but the operating footprint is closer to a small clinic than a hospital ward. Surfaces are contaminated with blood, saliva, and aerosolised microbes from ultrasonic scalers and high-speed handpieces. The cleaning protocol has to be precise — not just thorough, but properly sequenced, properly zoned, and properly documented.",
    "Our dental division cleans NHS, private, and mixed practices across Scotland. We follow a strict three-zone protocol: clinical zone (surgeries and decontamination rooms) cleaned with EN 14476 virucidal disinfectants; patient-facing zone (waiting area, reception, WCs) cleaned with patient-safe products; and back-of-house zone (staff kitchen, offices, store rooms) cleaned on a standard commercial schedule. Colour-coded equipment prevents cross-contamination between zones, and mop heads are replaced between every surgery.",
    "We understand the rhythm of a dental day: morning huddle at 8:15, first patient at 8:30, lunchtime turnaround, afternoon list, end-of-day disinfection. Our crews work around that rhythm — early-morning start to ensure waiting area and reception are pristine before patients arrive, end-of-day surgery disinfection once the last handpiece is sterilised. Every task is logged in a digital cleaning record that maps directly to HTM 01-05 audit criteria.",
  ],
  compliance: [
    {
      code: "HTM 01-05",
      title: "Health Technical Memorandum 01-05 (Dental)",
      description:
        "Full dental application of HTM 01-05: instrument reprocessing zone cleaning, surgery turnover protocol, and validated disinfection of clinical surfaces.",
    },
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "All clinical surfaces wiped with EN 14476 virucidal disinfectant — effective against HIV, HBV, HCV, influenza, and coronaviruses.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We avoid aldehyde-based disinfectants where alternatives exist, given dental staff sensitisation risks.",
    },
    {
      code: "HIS PCS",
      title: "Healthcare Improvement Scotland Primary Care Standards",
      description:
        "Our audit format and cleaning schedules map directly to the HIS primary care cleanliness inspection criteria for dental services.",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Crews are trained in patient confidentiality. Patient records, prescription pads, and unattended clinical software are never disturbed during cleaning.",
    },
  ],
  servicesDelivered: [
    {
      name: "Dental Surgery Cleaning",
      href: "/services/dental-surgery-cleaning",
      description:
        "Full dental practice cleaning including surgery turnover, decontamination room, and patient-facing areas.",
    },
    {
      name: "Clinic Room Disinfection",
      href: "/services/clinic-cleaning",
      description:
        "Treatment room end-of-day disinfection, couch roll replacement, and spittoon cleaning.",
    },
    {
      name: "Electrostatic Disinfection",
      href: "/services/electrostatic-disinfection-add-on",
      description:
        "Whole-surgery electrostatic spraying for aerosol contamination control and post-outbreak response.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Patient and staff WCs descaled, disinfected, and re-stocked with audit-ready records on every visit.",
    },
    {
      name: "Hard Floor & Carpet Care",
      href: "/services/vct-floor-care",
      description:
        "Waiting-room carpet hot-water extraction, safety-floor machine scrubbing in surgeries, and entrance mat management.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Practice exterior and interior glazing, including high-level surgery windows, on a scheduled rotation.",
    },
  ],
  challenges: [
    {
      icon: "Shield",
      title: "Aerosol contamination from ultrasonics",
      description:
        "Ultrasonic scalers and high-speed handpieces create a 2-metre aerosol footprint. Our end-of-day disinfection protocol covers all surfaces within that radius, not just the obvious ones.",
    },
    {
      icon: "Clock",
      title: "Cleaning around tight appointment lists",
      description:
        "Dental schedules run on 10–15 minute intervals. Our crews work before the first patient and after the last — never during clinic time unless it's an emergency.",
    },
    {
      icon: "Users",
      title: "Anxious patient sensitivity",
      description:
        "Dental phobia is real. Our crews use quiet equipment, low-odour products, and discreet behaviour in patient areas — no clattering buckets, no strong chemicals, no unnecessary chat.",
    },
    {
      icon: "Zap",
      title: "Instrument reprocessing zone integrity",
      description:
        "The decontamination room has a strict dirty-to-clean workflow. Our crews are trained not to break that flow — dirty zone cleaning happens last, with separate equipment and a documented handwash protocol.",
    },
    {
      icon: "TrendingUp",
      title: "NHS contract margin pressure",
      description:
        "NHS dental work is paid per UDA, not per minute. Cleaning budgets are tight. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any auditable task.",
    },
    {
      icon: "Building2",
      title: "Multi-site group operations",
      description:
        "Many dental groups run 3–10 practices. We provide consolidated reporting, consistent protocols, and a single account manager across all sites — simplifying governance.",
    },
  ],
  stats: [
    { value: "240+", label: "dental practices served" },
    { value: "100%", label: "HTM 01-05 audit pass rate" },
    { value: "4h", label: "outbreak response SLA" },
    { value: "9+", label: "years in dental cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Practice walk-through",
      description:
        "Our regional manager walks the practice with the principal dentist or practice manager. We map zones, identify risk areas, and discuss preferred visit times and surgery turnover requirements.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Scoped schedule & quote",
      description:
        "Within 2 business days you receive a written cleaning schedule mapped to HTM 01-05, a COSHH register pre-approved by your practice, and a fixed monthly fee. No hidden extras.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A PVG-checked, dental-trained crew is inducted to the practice, introduced to staff, and walks the building with the practice manager. The first clean is supervised end-to-end.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Quarterly review & audit",
      description:
        "Your regional manager visits quarterly for a joint walk-through, a KPI review, and a forward-plan discussion. Annual contract review covers SLA performance and any scope changes.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Shield",
      title: "HTM 01-05 dental audit-ready",
      description:
        "Every task is logged digitally against your surgery's asset register. HIS inspectors can pull a full cleaning history for any surgery in under 60 seconds.",
    },
    {
      icon: "Users",
      title: "Dental-trained, PVG-checked crews",
      description:
        "Crews complete a dental-specific training module covering instrument reprocessing zones, aerosol footprints, and anxious patient protocols. PVG scheme membership throughout.",
    },
    {
      icon: "Zap",
      title: "4-hour outbreak response",
      description:
        "Norovirus, flu, or sharps incidents trigger immediate response with dedicated outbreak kits and a documented stand-down protocol signed off by your practice manager.",
    },
    {
      icon: "Clock",
      title: "Out-of-hours flexibility",
      description:
        "Early-morning starts, late-evening finishes, or weekend deep cleans — we work around your appointment list. If a clinic overruns, our crews return later at no extra charge.",
    },
    {
      icon: "TrendingUp",
      title: "Frequency optimisation",
      description:
        "Quarterly we re-examine task frequencies against your audit data. Typically we find 8–12% efficiency gains without dropping any auditable line item.",
    },
    {
      icon: "Heart",
      title: "Named regional manager",
      description:
        "One phone number, one named contact. No call centres. Your regional manager knows your practice by name and visits quarterly.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you clean the decontamination room without breaking the dirty-to-clean flow?",
      a: "Our crew is trained to clean the decontamination room in the correct sequence: clean zone first, then ultrasonic, then steriliser, then dirty zone — and only then with separate equipment. Mop heads and cloths used in the dirty zone are bagged separately and never re-used. This is reinforced at every quarterly review.",
    },
    {
      q: "Do you handle surgery turnover between patients?",
      a: "Surgery turnover is typically handled by dental nurses, not by our cleaning crew — that's the standard model. Our role is end-of-day disinfection and pre-opening reset. However, we can provide a mid-day touch-up service if your practice has heavy turnover and would prefer a dedicated cleaner on site during clinic hours.",
    },
    {
      q: "What products do you use in dental surgeries?",
      a: "All clinical surfaces are wiped with an EN 14476 virucidal disinfectant — typically a quaternary ammonium compound with documented efficacy against HIV, HBV, HCV, influenza, and coronaviruses. We avoid aldehyde-based products due to sensitisation risk for dental staff. Every product is pre-approved by your practice and carries a current COSHH datasheet.",
    },
    {
      q: "Can you supply consumables like gloves, bibs, and barrier sleeves?",
      a: "Yes, optional. We can supply dental-grade consumables — clinical gloves, bibs, barrier sleeves, suction tips, and disinfectant wipes — at a fixed monthly add-on. Many of our dental clients find this simpler than managing multiple suppliers.",
    },
    {
      q: "How do you handle anxious patients when cleaning is happening?",
      a: "Ideally, cleaning happens outside clinic hours. If a clean is in progress when a patient arrives — for example, an emergency appointment — our crew is briefed to step back, switch off any noisy equipment, and let the patient pass without engagement. Patient dignity always takes precedence over cleaning schedules.",
    },
    {
      q: "What's your pricing model?",
      a: "Most dental contracts are priced as a fixed monthly fee based on number of surgeries, treatment rooms, and visit frequency. Typical 2-surgery practices pay between £480 and £780 per month. We provide a transparent quote after the practice walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Dr Sarah MacKenzie",
      role: "Principal Dentist",
      facility: "Queensferry Dental Care, Edinburgh",
      quote:
        "We've used three cleaning contractors in 12 years. Maundy Clean is the first that genuinely understands dental. The decontamination room protocol is spot-on, and our last HIS inspection was the cleanest report we've ever had.",
      rating: 5,
    },
    {
      name: "Lynsey Hamilton",
      role: "Practice Manager",
      facility: "Bearsden Dental Practice, Glasgow",
      quote:
        "Same crew, same time, every week. They know our surgeries, they know our staff, and they know not to touch the decontamination room's clean zone. That consistency is worth its weight in gold.",
      rating: 5,
    },
    {
      name: "Dr Imran Malik",
      role: "Clinical Director",
      facility: "Smile Dental Group (5 practices, central belt)",
      quote:
        "Running five practices means governance is everything. Maundy Clean gives us consistent protocols across all five sites, consolidated monthly reporting, and one account manager who actually picks up the phone. Massive step up from our previous national contractor.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Hospitals & NHS Trusts",
      href: "/industries/hospitals-nhs-trusts",
      description:
        "Acute hospital cleaning aligned to HTM 01-05 and HIS standards.",
    },
    {
      name: "GP Surgeries & Clinics",
      href: "/industries/gp-surgeries-clinics",
      description:
        "Primary care cleaning aligned to HIS primary care standards.",
    },
    {
      name: "Veterinary Practices",
      href: "/industries/veterinary-practices",
      description:
        "Biosecure veterinary cleaning with zoonotic pathogen protocols.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
      alt: "Dental surgery cleaning",
      caption: "End-of-day dental surgery disinfection with EN 14476 virucidal wipe-down",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Dental decontamination room cleaning",
      caption: "Decontamination room cleaned in dirty-to-clean sequence with separate equipment",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Dental colour-coded equipment",
      caption: "Colour-coded zone equipment prevents clinical-to-reception cross-contamination",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Dental practice floor care",
      caption: "Safety-floor machine scrubbing in dental surgery corridor",
    },
  ],
};

// ============================================================
// Industry #4 — Veterinary Practices (Healthcare)
// ============================================================
export const veterinaryPractices: IndustryDetail = {
  slug: "veterinary-practices",
  name: "Veterinary Practices",
  category: "Healthcare",
  tagline: "Biosecure veterinary cleaning with zoonotic pathogen protocols and theatre-level disinfection.",
  heroHeadline: "A clean vet practice\nis a safe vet practice.\nFor pets and people.",
  heroSubhead:
    "We clean small-animal, large-animal, and equine veterinary practices across Scotland — biosecure protocols that handle zoonotic pathogens like MRSA, ringworm, and parvovirus. Theatre-level disinfection, kennel sanitation, and isolation zone integrity.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
  metaTitle: "Veterinary Practice Cleaning Scotland | Biosecure Protocols | Maundy Clean",
  metaDescription:
    "Veterinary practice cleaning across Scotland. Biosecure protocols for zoonotic pathogens, theatre-level disinfection, isolation zone integrity. EN 14476 virucidal disinfectants. PVG-checked crews.",
  overviewParagraphs: [
    "Veterinary practices face a unique cleaning challenge: the patients are non-verbal, the pathogens are often zoonotic (transmissible between animals and humans), and the cleaning chemicals have to be effective against a different spectrum of microbes than human healthcare. Ringworm, parvovirus, panleukopenia, kennel cough, MRSA, and leptospirosis all require specific disinfectant chemistries — not just generic quaternary ammonium sprays.",
    "Our veterinary division cleans small-animal clinics, mixed practices, equine hospitals, and university veterinary schools across Scotland. We follow a strict three-zone protocol: clinical zone (theatres, prep rooms, kennels) cleaned with veterinary-specific virucidal disinfectants; consult zone cleaned with patient-safe products; and isolation zone cleaned last, with dedicated equipment, full PPE, and a documented stand-down sequence. Colour-coded equipment prevents cross-contamination, and mop heads are replaced between every zone.",
    "We understand the rhythm of a veterinary day: morning admissions, theatre lists, consults from late morning, inpatient care throughout, and emergency on-call overnight. Our crews work around that rhythm — early-morning start to ensure consult rooms are pristine before the first client, end-of-day theatre disinfection once the last surgery is closed. We coordinate with nursing staff on isolation cases and adapt protocols for high-risk pathogens like parvovirus or ringworm outbreaks.",
  ],
  compliance: [
    {
      code: "RCVS",
      title: "Royal College of Veterinary Surgeons Practice Standards",
      description:
        "Our cleaning schedules and audit format align to RCVS Practice Standards Scheme criteria for cleanliness and infection control.",
    },
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "Disinfectants selected for efficacy against parvovirus, panleukopenia, feline calicivirus, and other non-enveloped viruses resistant to standard quaternary ammonium compounds.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use veterinary-safe chemistries that won't harm animals if residue remains on surfaces.",
    },
    {
      code: "Biosecurity",
      title: "Veterinary Biosecurity Protocols",
      description:
        "Isolation zone cleaning follows documented dirty-to-clean sequencing with dedicated equipment, PPE, and stand-down procedures signed off by the lead nurse.",
    },
    {
      code: "HSE ACD/L8",
      title: "HSE Approved Code of Practice L8 (Legionella)",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling in our scope — closing a common audit gap in veterinary practices with showers for animal washing.",
    },
  ],
  servicesDelivered: [
    {
      name: "Veterinary Practice Cleaning",
      href: "/services/veterinary-practice-cleaning",
      description:
        "Full veterinary practice cleaning including theatre, kennels, consult rooms, and reception areas.",
    },
    {
      name: "Biohazard & Body Fluids Response",
      href: "/services/biohazard-cleaning",
      description:
        "Blood, faeces, urine, and vomit response with veterinary-specific pathogen protocols and clinical waste disposal.",
    },
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description:
        "Whole-practice disinfection during outbreak response (parvovirus, ringworm, kennel cough) with documented stand-down.",
    },
    {
      name: "Electrostatic Disinfection",
      href: "/services/electrostatic-disinfection-add-on",
      description:
        "Whole-practice electrostatic spraying for rapid high-touch disinfection in theatre and kennel areas.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Client and staff WCs descaled, disinfected, and re-stocked with audit-ready records on every visit.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Safety-floor machine scrubbing, kennel floor disinfection, and slip-resistance testing aligned to HSE SLIPS guidance.",
    },
  ],
  challenges: [
    {
      icon: "Shield",
      title: "Zoonotic pathogen control",
      description:
        "MRSA, ringworm, leptospirosis, and other zoonotic pathogens require specific disinfectant chemistries. Generic quaternary ammonium isn't enough. We use veterinary-specific virucidal products with documented efficacy.",
    },
    {
      icon: "Zap",
      title: "Parvovirus and ringworm outbreaks",
      description:
        "A single parvovirus case can shut a kennel block for weeks. Our outbreak response team mobilises within 4 hours with dedicated equipment, full PPE, and a documented stand-down protocol signed off by the lead nurse.",
    },
    {
      icon: "Users",
      title: "Animal stress and noise sensitivity",
      description:
        "Animals in kennels are stressed by noise, smells, and unfamiliar people. Our crews use quiet equipment, low-odour products, and respectful behaviour — no clattering buckets, no strong chemicals, no sudden movements.",
    },
    {
      icon: "Clock",
      title: "Cleaning around consult lists",
      description:
        "Veterinary schedules run on 10–20 minute consult intervals. Our crews work before the first client and after the last surgery — never during consult time unless it's an emergency.",
    },
    {
      icon: "Building2",
      title: "Isolation zone integrity",
      description:
        "The isolation ward has a strict dirty-to-clean workflow. Our crews are trained not to break that flow — isolation cleaning happens last, with separate equipment and a documented handwash protocol.",
    },
    {
      icon: "TrendingUp",
      title: "Tight practice margins",
      description:
        "Independent vet practices operate on thin margins. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any auditable task.",
    },
  ],
  stats: [
    { value: "120+", label: "vet practices served" },
    { value: "100%", label: "RCVS audit pass rate" },
    { value: "4h", label: "outbreak response SLA" },
    { value: "7+", label: "years in veterinary cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Practice walk-through",
      description:
        "Our regional manager walks the practice with the lead veterinary nurse or practice manager. We map zones, identify current biosecurity pain points, and discuss preferred visit times.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Biosecurity protocol design",
      description:
        "We produce a written biosecurity cleaning protocol covering isolation, theatre, kennel, and consult zones — with veterinary-specific virucidal disinfectants pre-approved by your clinical team.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A PVG-checked, veterinary-trained crew is inducted, introduced to staff, and walked through the biosecurity protocol. The first clean is supervised end-to-end.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Quarterly review & audit",
      description:
        "Your regional manager visits quarterly for a joint walk-through, a KPI review, and a forward-plan discussion. Annual RCVS inspection prep included.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Shield",
      title: "Biosecurity-trained crews",
      description:
        "Every crew member completes a veterinary biosecurity module covering zoonotic pathogens, isolation protocols, and species-specific risks. PVG scheme membership throughout.",
    },
    {
      icon: "Zap",
      title: "4-hour outbreak response",
      description:
        "Parvovirus, ringworm, or kennel cough outbreaks trigger immediate response with dedicated equipment, full PPE, and a documented stand-down protocol.",
    },
    {
      icon: "Heart",
      title: "Animal-sensitive operation",
      description:
        "Quiet equipment, low-odour products, and respectful behaviour around inpatients. We coordinate with nursing staff before entering kennel or isolation areas.",
    },
    {
      icon: "Users",
      title: "Same crew, every visit",
      description:
        "We assign a dedicated crew to your practice — they learn your building, your staff, and your animal patients. No rotating contractors who need re-briefing every week.",
    },
    {
      icon: "TrendingUp",
      title: "RCVS inspection-ready records",
      description:
        "Every task is logged digitally with time-stamp and crew ID. RCVS inspectors can pull a full cleaning history for any zone in under 60 seconds.",
    },
    {
      icon: "Building2",
      title: "Named regional manager",
      description:
        "One phone number, one named contact. No call centres. Your regional manager knows your practice by name and visits quarterly.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "What disinfectants do you use for parvovirus and ringworm?",
      a: "Parvovirus is a non-enveloped virus resistant to quaternary ammonium compounds — it requires an oxidising disinfectant like potassium peroxymonosulfate (e.g., Virkon) or a specific aldehyde-based product. Ringworm requires a fungicidal disinfectant with documented sporicidal activity. We use veterinary-specific products with documented efficacy, pre-approved by your clinical team, and rotate chemistries to prevent resistance.",
    },
    {
      q: "How do you handle isolation ward cleaning?",
      a: "Isolation is cleaned last in the schedule, with dedicated colour-coded equipment that never leaves the zone. Crews wear full PPE (apron, gloves, mask) and follow a documented dirty-to-clean sequence. After cleaning, the crew showers out and the equipment is disinfected before storage. A stand-down record is signed off by the lead nurse.",
    },
    {
      q: "Can you clean around inpatients in kennels?",
      a: "Yes, with coordination. Our crews liaise with the nursing team before entering kennel areas. We use quiet equipment, low-odour products, and work around medication schedules and feeding times. Inpatients are never disturbed — if a kennel needs to be cleared for cleaning, the nursing team handles that, not us.",
    },
    {
      q: "Do you handle clinical waste and sharps disposal?",
      a: "We don't remove clinical waste or sharps — that requires a licensed veterinary waste contractor. But we coordinate with your existing contractor, top up sharps bins as part of the cleaning schedule, and ensure waste segregation is correct (clinical vs municipal vs pharmaceutical).",
    },
    {
      q: "How do you manage smell control in kennel areas?",
      a: "Odour control is a combination of frequent cleaning, enzymatic products for organic matter, and proper drainage management. We use enzymatic cleaners on urine and faecal matter before disinfection, and address drains weekly with bio-enzymatic treatments. Strong chemical fragrances are avoided — they mask problems rather than solve them, and animals find them stressful.",
    },
    {
      q: "What's your pricing model?",
      a: "Most veterinary contracts are priced as a fixed monthly fee based on number of theatres, consult rooms, kennel capacity, and visit frequency. Typical small-animal practices (1–2 theatres, 3–4 consult rooms) pay between £520 and £880 per month. We provide a transparent quote after the practice walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Dr Kirsten Baird",
      role: "Clinical Director",
      facility: "Edinburgh Veterinary Hospital",
      quote:
        "Maundy Clean's biosecurity protocol is the most thorough I've seen from a cleaning contractor. They understand parvovirus, they understand isolation, and they understand that a stressed cat doesn't need a noisy vacuum next to its cage. Exceptional.",
      rating: 5,
    },
    {
      name: "Gordon Macleod",
      role: "Practice Manager",
      facility: "Tayside Veterinary Group, Dundee",
      quote:
        "After a parvovirus case in our kennel block, Maundy Clean had a crew on site within 3 hours. Full PPE, dedicated equipment, stand-down protocol signed off by our lead nurse. We reopened on schedule. That's worth every penny.",
      rating: 5,
    },
    {
      name: "Dr Anna Foster",
      role: "Principal Vet",
      facility: "Highlands Equine Hospital, Inverness",
      quote:
        "Equine work is harder to clean for — bigger animals, bigger messes, bigger spaces. Maundy Clean handles it without fuss. Same crew every week, same standards. Our last RCVS inspection was flawless on environment cleanliness.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Hospitals & NHS Trusts",
      href: "/industries/hospitals-nhs-trusts",
      description:
        "Acute hospital cleaning aligned to HTM 01-05 and HIS standards.",
    },
    {
      name: "GP Surgeries & Clinics",
      href: "/industries/gp-surgeries-clinics",
      description:
        "Primary care cleaning aligned to HIS primary care standards.",
    },
    {
      name: "Dental Practices",
      href: "/industries/dental-practices",
      description:
        "HTM 01-05 dental compliance and surgery turnover for dental practices.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/2be4158b7bb6.jpg",
      alt: "Veterinary theatre cleaning",
      caption: "End-of-day theatre disinfection with veterinary-specific virucidal products",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Veterinary kennel cleaning",
      caption: "Kennel block cleaning with enzymatic pre-treatment and quiet equipment",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Veterinary colour-coded equipment",
      caption: "Colour-coded zone equipment prevents clinical-to-consult cross-contamination",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Veterinary practice floor care",
      caption: "Safety-floor machine scrubbing in theatre corridor",
    },
  ],
};

// ============================================================
// Industry #5 — Restaurants & QSR (Hospitality & Retail)
// ============================================================
export const restaurantsQsr: IndustryDetail = {
  slug: "restaurants-qsr",
  name: "Restaurants & QSR",
  category: "Hospitality & Retail",
  tagline: "EHO-compliant BOH deep cleans, FOH presentation standards, and HACCP-aligned audit trails.",
  heroHeadline: "A clean kitchen\nis a five-star\nEHO report.",
  heroSubhead:
    "We clean fine-dining restaurants, casual-dining chains, quick-service restaurants, and takeaways across Scotland. HACCP-aligned protocols, EHO-inspection-ready records, and extraction-clean certified crews. PVG-checked, food-safe, and discreet.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
  metaTitle: "Restaurant & QSR Cleaning Scotland | EHO Compliant | HACCP | Maundy Clean",
  metaDescription:
    "Restaurant and QSR cleaning across Scotland. EHO-compliant BOH deep cleans, FOH presentation, HACCP-aligned audit trails, extraction cleaning. PVG-checked, food-safe crews. Daily, weekly, or ad-hoc visits.",
  overviewParagraphs: [
    "Restaurant cleaning is a different discipline to office or residential cleaning. The soil profile is grease-heavy, the regulatory environment is Environmental Health, and the consequences of getting it wrong range from a 1-star EHO report to a food poisoning outbreak that closes the business. Maundy Clean has spent over a decade inside Scottish restaurants, from Michelin-listed fine dining in Edinburgh to multi-site QSR chains across the central belt.",
    "Our restaurant division operates a two-tier model: a daily FOH refresh team covering front-of-house, restrooms, and entrance areas before service; and a weekly or fortnightly BOH deep clean team covering kitchen extraction, canopy filters, fryer decarbonisation, floor degreasing, and behind-equipment cleans. Every task is logged against a HACCP-aligned cleaning schedule, with time-stamped photos and a digital audit trail that survives an unannounced EHO inspection.",
    "We understand the rhythm of a service kitchen: prep from 8am, lunch service 12–2:30pm, breakdown, reset, dinner service 5:30–10:30pm, deep clean after close. Our crews work around that rhythm — early-morning FOH reset to ensure the dining room is pristine before the first booking; overnight BOH deep cleans that don't disrupt service. We coordinate with head chefs on equipment downtime, and we never use chlorine-based products near food prep surfaces without a documented rinse-down.",
  ],
  compliance: [
    {
      code: "HACCP",
      title: "Hazard Analysis and Critical Control Points",
      description:
        "Our cleaning schedules map to your HACCP plan's cleaning-critical control points, with documented frequencies and verification audits.",
    },
    {
      code: "EHO",
      title: "Environmental Health Officer Standards",
      description:
        "Our audit format aligns to the Food Standards Scotland food hygiene rating scheme — the same criteria your EHO uses on inspection.",
    },
    {
      code: "FSA SFBB",
      title: "Food Standards Agency Safe Food Better Business",
      description:
        "Our cleaning records cross-reference to your SFBB diary, making it simple to demonstrate compliance during inspection.",
    },
    {
      code: "TR19",
      title: "TR19 Grease Extraction Cleaning Standard",
      description:
        "Kitchen extraction cleaning certified to TR19 standard — the industry-recognised benchmark for insurance compliance and fire safety.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every chemical on site carries a current COSHH datasheet. We use food-safe sanitisters on food contact surfaces and never deploy tainting chemistries near prep areas.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and sprayhead descaling in our scope — closing a common audit gap in restaurants with salad wash stations.",
    },
  ],
  servicesDelivered: [
    {
      name: "Restaurant Cleaning",
      href: "/services/restaurant-cleaning",
      description:
        "Full FOH and BOH cleaning — dining room, bar, kitchen, restrooms, and entrance areas.",
    },
    {
      name: "Kitchen Deep Clean",
      href: "/services/restaurant-cleaning",
      description:
        "BOH deep clean covering extraction, canopy, fryer decarbonisation, floor degreasing, and behind-equipment cleans.",
    },
    {
      name: "Café & Coffee Shop Cleaning",
      href: "/services/cafe-coffee-shop-cleaning",
      description:
        "Espresso zone cleaning, milk wand sanitisation, and EHO-compliant café protocols.",
    },
    {
      name: "Floor Care & Tile/Grout",
      href: "/services/tile-grout-cleaning",
      description:
        "Kitchen tile & grout degreasing, anti-slip treatment, and dining-room hardwood maintenance.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Customer and staff WCs descaled, disinfected, and re-stocked — the number one EHO touchpoint.",
    },
    {
      name: "Grease Trap & Drain Maintenance",
      href: "/services/restaurant-cleaning",
      description:
        "Scheduled grease trap emptying, drain bio-enzymatic treatment, and odour control.",
    },
  ],
  challenges: [
    {
      icon: "Shield",
      title: "EHO inspection at any moment",
      description:
        "Environmental Health Officers can arrive unannounced. Our digital cleaning records and HACCP-aligned schedules mean you're never caught short — every task is time-stamped and exportable to PDF in seconds.",
    },
    {
      icon: "Zap",
      title: "Extraction fire risk",
      description:
        "Grease-laden extraction canopies are a leading cause of kitchen fires. Our TR19-certified extraction cleaning removes grease build-up that insurance policies require you to manage.",
    },
    {
      icon: "Clock",
      title: "Service never stops",
      description:
        "Restaurants can't close for cleaning. Our crews work around service — early-morning FOH reset, overnight BOH deep cleans, or mid-afternoon touch-ups between services.",
    },
    {
      icon: "Users",
      title: "Customer-facing presentation",
      description:
        "Front-of-house cleanliness drives customer perception. Our FOH team delivers five-star-hotel standards — streak-free glass, polished brass, spotless restrooms, fresh-smelling entrance.",
    },
    {
      icon: "TrendingUp",
      title: "Tight margins, rising costs",
      description:
        "Restaurant margins are tighter than ever. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any EHO-critical task.",
    },
    {
      icon: "Building2",
      title: "Multi-site consistency",
      description:
        "Multi-site operators need consistent standards across every location. We provide consolidated reporting, identical protocols, and a single account manager across all sites.",
    },
  ],
  stats: [
    { value: "340+", label: "restaurants served" },
    { value: "4.8", label: "avg EHO rating delivered" },
    { value: "4h", label: "incident response SLA" },
    { value: "12+", label: "years in restaurant cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Site survey & scoping",
      description:
        "Our regional manager walks your restaurant with the head chef or operations manager. We map FOH and BOH zones, identify EHO pain points, and discuss preferred visit times around service.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "HACCP-aligned schedule & quote",
      description:
        "Within 2 business days you receive a written cleaning schedule mapped to HACCP critical control points, a COSHH register, and a fixed monthly fee. Extraction deep cleans quoted separately on TR19 rate card.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A food-safe, PVG-checked crew is inducted to your kitchen, walked through the cleaning schedule with the head chef, and the first deep clean is supervised end-to-end.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & audit",
      description:
        "Daily FOH refresh, scheduled BOH deep cleans, monthly KPI reports, and quarterly review meetings. EHO inspection prep included as standard.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Shield",
      title: "EHO inspection-ready, always",
      description:
        "Every task is logged digitally against a HACCP-aligned cleaning schedule. EHO inspectors can pull a full cleaning history for any zone in under 60 seconds.",
    },
    {
      icon: "Zap",
      title: "TR19-certified extraction cleans",
      description:
        "Kitchen extraction cleaning to TR19 standard — the benchmark your insurer wants to see. Certificate issued after every clean.",
    },
    {
      icon: "Users",
      title: "Food-safe, PVG-checked crews",
      description:
        "Crews complete food-safety training, wear colour-coded chef whites, and understand cross-contamination protocols. PVG scheme membership throughout.",
    },
    {
      icon: "Clock",
      title: "Service-aware scheduling",
      description:
        "We work around your service — early-morning FOH, overnight BOH, or mid-afternoon touch-ups. If a service overruns, our crews return later at no extra charge.",
    },
    {
      icon: "Heart",
      title: "Five-star FOH presentation",
      description:
        "Our FOH team delivers hotel-standard presentation — streak-free glass, polished brass, spotless restrooms, fresh-smelling entrance. The details customers actually notice.",
    },
    {
      icon: "Building2",
      title: "Multi-site consolidated reporting",
      description:
        "One account manager across all sites. One monthly report. Identical protocols. No more chasing three different regional managers for the same answer.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Can you clean around service hours?",
      a: "Yes. Our standard model is early-morning FOH reset (typically 6am start) before lunch service, and overnight BOH deep cleans after close. We can also provide a mid-afternoon touch-up team if you have a gap between lunch and dinner services. If a service overruns, our crews return later at no extra charge.",
    },
    {
      q: "Do you provide extraction cleaning certificates for insurance?",
      a: "Yes. Our extraction cleaning is TR19-certified — the industry-recognised standard. A certificate is issued after every clean and is accepted by all major insurers as evidence of grease management compliance. We recommend quarterly extraction cleans for high-volume kitchens and monthly for fryer-heavy QSR sites.",
    },
    {
      q: "What products do you use on food contact surfaces?",
      a: "Food contact surfaces are sanitised with food-safe, no-rinse sanitisers that meet EN 1276 (bacterial) and EN 14476 (virucidal) standards. We never use chlorine-based products near food prep surfaces without a documented rinse-down. Every product is pre-approved by your head chef and carries a current COSHH datasheet.",
    },
    {
      q: "How do you handle grease trap and drain maintenance?",
      a: "Scheduled grease trap emptying is part of our standard BOH scope — typically monthly for high-volume kitchens. We also treat drains weekly with bio-enzymatic products that break down fat, oil, and grease build-up. This combination eliminates most drain blockage call-outs and reduces odour significantly.",
    },
    {
      q: "Can you cover a single restaurant or a multi-site chain?",
      a: "Both. We have a dedicated independent restaurant team for single-site operators, and a multi-site account management team for chains. Multi-site clients get consolidated reporting, identical protocols across all sites, and a single named account manager. Pricing scales accordingly.",
    },
    {
      q: "What's your pricing model?",
      a: "Most restaurant contracts are priced as a fixed monthly fee based on covers per week, kitchen size, and visit frequency. Typical single-site restaurants pay between £680 and £1,400 per month, with extraction deep cleans quoted separately. We provide a transparent quote after the site walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Michael O'Hare",
      role: "Owner",
      facility: "The Stranger Restaurant, Edinburgh",
      quote:
        "Maundy Clean's BOH deep cleans are the most thorough I've seen in 20 years of running kitchens. Extraction certificates ready for the insurer, HACCP records ready for the EHO. We scored 5 on our last inspection — the first 5 in 8 years.",
      rating: 5,
    },
    {
      name: "Karen Whyte",
      role: "Operations Director",
      facility: "Saltire QSR Group (14 sites, central belt)",
      quote:
        "Running 14 QSR sites means standards have to be identical everywhere. Maundy Clean gives us that consistency. One account manager, one report, one protocol. The EHO ratings across all sites have gone up by an average of 0.6 since we switched.",
      rating: 5,
    },
    {
      name: "Tommy Bhatt",
      role: "Owner",
      facility: "Bhatt's Kitchen, Glasgow",
      quote:
        "Same crew every week. They know my kitchen, they know my equipment, they know my service rhythm. Extraction clean certificates on time, every quarter. No drama. That's all I ask.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Hotels & Resorts",
      href: "/industries/hotels-resorts",
      description:
        "Hotel cleaning — guest rooms, public areas, F&B outlets, and spa facilities.",
    },
    {
      name: "Retail Chains",
      href: "/industries/retail-chains",
      description:
        "Multi-site retail cleaning with brand-consistent presentation standards.",
    },
    {
      name: "Shopping Centres",
      href: "/industries/shopping-centres",
      description:
        "Shopping centre cleaning — malls, food courts, restrooms, and car parks.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Restaurant kitchen deep clean",
      caption: "BOH deep clean — extraction, canopy, fryer decarbonisation",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Restaurant FOH cleaning",
      caption: "Five-star-hotel FOH presentation — streak-free glass, polished brass",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Restaurant floor degreasing",
      caption: "Kitchen floor degreasing and anti-slip treatment",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
      alt: "Restaurant restroom cleaning",
      caption: "Customer restroom sanitation — the number one EHO touchpoint",
    },
  ],
};

// ============================================================
// Industry #6 — Retail Chains (Hospitality & Retail)
// ============================================================
export const retailChains: IndustryDetail = {
  slug: "retail-chains",
  name: "Retail Chains",
  category: "Hospitality & Retail",
  tagline: "Brand-consistent presentation across every store, every day — before the doors open.",
  heroHeadline: "A spotless floor\nbefore the first\ncustomer walks in.",
  heroSubhead:
    "We clean high-street retailers, fashion chains, electronics stores, and homeware stores across Scotland. Brand-standard protocols, daily opening-hour deadlines, and consolidated multi-site reporting. PVG-checked crews, polished floors, streak-free glass.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
  metaTitle: "Retail Chain Cleaning Scotland | Multi-Site | Brand Standards | Maundy Clean",
  metaDescription:
    "Multi-site retail chain cleaning across Scotland. Brand-consistent presentation, daily opening deadlines, polished floors, streak-free glass. Consolidated reporting. PVG-checked crews.",
  overviewParagraphs: [
    "Retail cleaning is the most presentation-driven cleaning discipline there is. Customers form a brand impression in the first 12 seconds of entering a store — and dirty floors, smudged glass, or overflowing bins cost sales. Maundy Clean has spent over a decade inside Scottish retail, from flagship department stores on Princes Street to multi-site fashion chains across the central belt.",
    "Our retail division operates a strict opening-hour model: crews arrive 90 minutes before doors open, complete the full FOH reset, and clear the building before staff arrive for opening. Floors are machine-scrubbed nightly in high-traffic stores, glass is squeegeed weekly, and POS displays are dusted and aligned. Every task follows the brand's visual merchandising standard — not a generic cleaning template.",
    "We understand the rhythm of retail: late-night deliveries, Sunday trading hours, seasonal peaks (Black Friday, Christmas, January sale), and refit programmes. Our crews work around all of it — out-of-hours deep cleans, post-refit snagging, and surge capacity for peak periods. Multi-site clients get consolidated monthly reporting, identical protocols across every store, and a single account manager who actually answers the phone.",
  ],
  compliance: [
    {
      code: "PUWER",
      title: "Provision and Use of Work Equipment Regulations",
      description:
        "All cleaning equipment is PUWER-compliant, PAT-tested, and operated by trained staff. Risk assessments for every machine and chemical.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use food-safe sanitisers where retail food halls exist, and avoid tainting chemistries near soft furnishings.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing and temperature checks in staff-only areas — closing a common audit gap.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Floor slip-resistance testing and wet-floor signage protocols aligned to HSE SLIPS guidance — protecting your public liability position.",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Crews are trained in customer-data confidentiality. POS terminals, back-office computers, and stockroom paperwork are never disturbed during cleaning.",
    },
  ],
  servicesDelivered: [
    {
      name: "Retail Store Cleaning",
      href: "/services/retail-store-cleaning",
      description:
        "Daily FOH reset, weekly deep clean, and seasonal deep clean for high-street retail.",
    },
    {
      name: "Showroom Cleaning",
      href: "/services/showroom-cleaning",
      description:
        "Premium showroom cleaning — cars, kitchens, bathrooms, and luxury retail display zones.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "VCT strip & re-seal, hardwood refinishing, and tile & grout deep cleaning for retail floors.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Shopfront exterior and interior glazing, including high-level display windows, on a scheduled rotation.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Customer and staff WCs descaled, disinfected, and re-stocked — the most common customer-complaint trigger.",
    },
    {
      name: "Post-Construction Cleaning",
      href: "/services/post-construction-cleaning",
      description:
        "Post-refit snagging cleans, builder-dust removal, and pre-opening presentation deep cleans.",
    },
  ],
  challenges: [
    {
      icon: "Clock",
      title: "Opening-hour deadlines",
      description:
        "Customers don't wait. Our crews arrive 90 minutes before opening and clear the building before staff arrive. If a clean overruns, we re-crew and finish before doors open — at no extra charge.",
    },
    {
      icon: "Shield",
      title: "Brand-standard presentation",
      description:
        "Every retailer has a brand-standard manual that defines presentation down to the angle of the mannequin. Our crews follow your brand standard, not a generic cleaning template.",
    },
    {
      icon: "Zap",
      title: "Seasonal peak surges",
      description:
        "Black Friday, Christmas, January sale — footfall doubles, cleaning frequency needs to double too. We provide surge capacity with trained crews, no notice required for existing clients.",
    },
    {
      icon: "Users",
      title: "Customer-facing discretion",
      description:
        "Customers don't want to see mop buckets and chemical sprays. Our crews work before opening or after close, and any daytime touch-ups are discreet and customer-aware.",
    },
    {
      icon: "Building2",
      title: "Multi-site consistency",
      description:
        "A customer in your Glasgow store should have the same cleanliness impression as in your Aberdeen store. Our consolidated protocols and reporting ensure consistency across the estate.",
    },
    {
      icon: "TrendingUp",
      title: "Tight retail margins",
      description:
        "Retail margins are under pressure. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any customer-visible standard.",
    },
  ],
  stats: [
    { value: "180+", label: "stores served daily" },
    { value: "98%", label: "opening-hour deadline hit rate" },
    { value: "12+", label: "national retail brands" },
    { value: "10+", label: "years in retail cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Store walk-through",
      description:
        "Our regional manager walks the store with the store manager or visual merchandiser. We map zones, identify brand-standard requirements, and discuss opening-hour constraints.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Brand-standard schedule & quote",
      description:
        "Within 2 business days you receive a written cleaning schedule mapped to your brand-standard manual, a COSHH register, and a fixed monthly fee. Multi-site clients receive a consolidated estate quote.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A PVG-checked, brand-trained crew is inducted to the store, introduced to staff, and the first clean is supervised by the regional manager. Brand-standard photos taken and shared.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & audit",
      description:
        "Daily opening cleans, monthly KPI reports, quarterly review meetings. Multi-site clients receive consolidated estate reporting and quarterly brand-standard audit.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Clock",
      title: "Opening-hour deadline guarantee",
      description:
        "98% hit rate on opening-hour deadlines. If we ever miss, we re-crew at our cost and finish before doors open. No charge, no excuse.",
    },
    {
      icon: "Shield",
      title: "Brand-standard trained crews",
      description:
        "Every crew is briefed on your brand-standard manual before stepping foot in store. POS handling, mannequin avoidance, display-zone protocols — all part of induction.",
    },
    {
      icon: "Zap",
      title: "Surge capacity for seasonal peaks",
      description:
        "Black Friday, Christmas, January sale — we double the crew and double the frequency. No notice required for existing clients. Surge pricing transparent and capped.",
    },
    {
      icon: "Users",
      title: "PVG-checked, customer-aware crews",
      description:
        "Every crew member carries Disclosure Scotland PVG scheme membership and completes customer-service training. Daytime touch-ups are discreet and customer-aware.",
    },
    {
      icon: "Building2",
      title: "Multi-site consolidated reporting",
      description:
        "One account manager across all sites. One monthly report. Identical protocols. No more chasing three different regional managers for the same answer.",
    },
    {
      icon: "TrendingUp",
      title: "Frequency optimisation",
      description:
        "Quarterly we re-examine task frequencies against footfall data. Typically we find 8–12% efficiency gains without dropping any customer-visible standard.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Can you guarantee opening-hour deadlines?",
      a: "Yes. We have a 98% hit rate on opening-hour deadlines across our retail portfolio. If we ever miss, we re-crew at our cost and finish before doors open — no charge, no excuse. We achieve this through redundant rosters, on-call regional cover, and a strict 90-minute pre-opening arrival window.",
    },
    {
      q: "How do you handle brand-standard compliance across multiple stores?",
      a: "Every crew is briefed on your brand-standard manual before stepping foot in store — POS handling, mannequin avoidance, display-zone protocols, signage placement. We photograph the first clean of every store and share with your visual merchandising team for sign-off. Quarterly brand-standard audits are conducted across the estate, with scorecards shared monthly.",
    },
    {
      q: "Can you provide surge capacity for Black Friday and Christmas?",
      a: "Yes. Existing clients get surge capacity with no notice required — we double the crew and double the frequency for the peak period. Surge pricing is transparent and capped at 1.6x normal rate. New clients need to book surge capacity at least 4 weeks in advance to guarantee availability.",
    },
    {
      q: "Do you handle post-refit snagging cleans?",
      a: "Yes. Post-refit snagging is one of our specialisms. We work with your fit-out contractor to schedule the snagging clean after construction is complete but before stock arrives. Builder-dust removal, glass polishing, floor finishing, and final presentation clean — all completed before store opening.",
    },
    {
      q: "How do you manage consumables like bags, receipt rolls, and cleaning supplies?",
      a: "Optional consumables package available — bin liners, paper towels, hand soap, sanitising wipes, and (for some clients) receipt rolls and shopping-bag restocking. Many multi-site retailers find this simpler than managing multiple suppliers. Pricing scales with store count and footfall.",
    },
    {
      q: "What's your pricing model?",
      a: "Most retail contracts are priced as a fixed monthly fee per store based on floor area, footfall, and visit frequency. Typical high-street stores (2,000–5,000 sq ft) pay between £420 and £890 per store per month. Multi-site clients receive a consolidated estate quote with volume discount. We provide a transparent quote after the store walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Sarah Borthwick",
      role: "Head of Retail Operations",
      facility: "Edinburgh Woollen Mill Group",
      quote:
        "Maundy Clean has handled our Scottish estate for four years. Opening-hour deadlines hit 99% of the time, brand-standard audits scored 4.8/5 across 23 stores. The consolidated monthly report saves my team two days a month.",
      rating: 5,
    },
    {
      name: "David Cowan",
      role: "Store Manager",
      facility: "John Lewis, Glasgow",
      quote:
        "Same crew, every morning, 5:30am start. They know the store, they know my visual merchandiser, they know what 'brand standard' actually means here. Black Friday surge was seamless — extra crew, no notice, no fuss.",
      rating: 5,
    },
    {
      name: "Lynn Reilly",
      role: "Facilities Director",
      facility: "Saltire Fashion Group (12 stores)",
      quote:
        "Switching from a national contractor to Maundy Clean was the best facilities decision I've made. One account manager, one phone number, one report. Brand-standard compliance is up, customer complaints are down, and we've saved 11% on cost.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Restaurants & QSR",
      href: "/industries/restaurants-qsr",
      description:
        "EHO-compliant BOH deep cleans and HACCP-aligned audit trails for restaurants.",
    },
    {
      name: "Shopping Centres",
      href: "/industries/shopping-centres",
      description:
        "Shopping centre cleaning — malls, food courts, restrooms, and car parks.",
    },
    {
      name: "Hotels & Resorts",
      href: "/industries/hotels-resorts",
      description:
        "Hotel cleaning — guest rooms, public areas, F&B outlets, and spa facilities.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
      alt: "Retail store cleaning",
      caption: "Pre-opening FOH reset — floors machine-scrubbed, glass squeegeed",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Retail floor care",
      caption: "VCT strip & re-seal on a high-street fashion store floor",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Retail colour-coded equipment",
      caption: "Colour-coded zone equipment prevents stockroom-to-FOH cross-contamination",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Retail showroom cleaning",
      caption: "Showroom-standard presentation — premium display zone cleaning",
    },
  ],
};

// ============================================================
// Industry #7 — Shopping Centres (Hospitality & Retail)
// ============================================================
export const shoppingCentres: IndustryDetail = {
  slug: "shopping-centres",
  name: "Shopping Centres",
  category: "Hospitality & Retail",
  tagline: "Mall-wide cleaning — food courts, restrooms, malls, car parks, and service yards.",
  heroHeadline: "A centre that\nfeels premium\nfrom the moment they park.",
  heroSubhead:
    "We clean shopping centres, retail parks, and outlet villages across Scotland. Mall-wide protocols covering 1.2 million+ sq ft, food court sanitation, restroom management at scale, and car park presentation. Day porter teams and overnight deep cleans, seven days a week.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
  metaTitle: "Shopping Centre Cleaning Scotland | Mall-Wide | Day Porter | Maundy Clean",
  metaDescription:
    "Shopping centre cleaning across Scotland. Mall-wide protocols, food court sanitation, restroom management at scale, car park presentation. Day porter teams and overnight deep cleans. 7 days a week.",
  overviewParagraphs: [
    "Shopping centre cleaning is a different scale and a different discipline to single-store retail. A typical regional shopping centre has 60–120 units, 4–8 million annual footfall, a food court, multiple restroom blocks, multi-storey car parks, and service yards running behind the scenes. The cleaning operation has to be 24/7, multi-team, and presentation-driven — customers notice a single overflowing bin within minutes.",
    "Our shopping centre division operates a three-team model: a day porter team (8am–8pm) handling spill response, restroom refresh, bin emptying, and customer-facing touchpoint cleaning; an overnight deep clean team (10pm–6am) handling floor machine-scrubbing, food court degreasing, and window cleaning; and a specialist facade and exterior team handling entrance canopies, car park sweeping, and landscape-zone litter picking. Every task is logged in a CAFM-integrated dashboard that the centre manager can see in real time.",
    "We understand the rhythm of a shopping centre: morning delivery window 6am–9am, opening at 9am, lunchtime peak 12pm–2pm, evening peak 5pm–8pm, close at 8pm, overnight deep clean 10pm–6am. Saturday is the busiest day; Sunday has shorter hours but the same expectation. Bank holidays and seasonal peaks (Christmas, Easter, school holidays) require surge capacity. Our crews work around all of it — and our account managers sit in on centre operations meetings to align cleaning with marketing events and tenant fit-outs.",
  ],
  compliance: [
    {
      code: "BSIF",
      title: "British Cleaning Council Standards",
      description:
        "Our protocols align to British Cleaning Council recommended standards for shopping centre cleaning — covering frequencies, methods, and audit criteria.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every chemical carries a current COSHH datasheet. Food court sanitisers are food-safe and non-tainting. Car park degreasers are environmentally screened for drain discharge.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Floor slip-resistance testing, wet-floor signage protocols, and spill response SLAs aligned to HSE SLIPS guidance — critical for public liability protection.",
    },
    {
      code: "PUWER",
      title: "Provision and Use of Work Equipment Regulations",
      description:
        "All cleaning equipment is PUWER-compliant, PAT-tested, and operated by trained staff. Pedestrian scrubber-dryers risk-assessed for public-area use.",
    },
    {
      code: "WRR",
      title: "Waste (Scotland) Regulations 2012",
      description:
        "We manage waste segregation at source — dry recyclables, food waste, general waste — in line with Scotland's zero-waste regulatory framework.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling in staff areas and customer shower facilities (where present).",
    },
  ],
  servicesDelivered: [
    {
      name: "Day Porter Services",
      href: "/services/day-porter-services",
      description:
        "Day-shift porter team — spill response, bin emptying, restroom refresh, customer-facing touchpoint cleaning.",
    },
    {
      name: "Nightly Janitorial",
      href: "/services/nightly-janitorial",
      description:
        "Overnight deep clean — floor machine-scrubbing, food court degreasing, window cleaning, full-building reset.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Large-format floor care — VCT strip & re-seal, terrazzo restoration, porcelain tile deep cleaning, anti-slip treatment.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Multi-block restroom management at scale — descale, disinfect, re-stock, and audit-ready records on every visit.",
    },
    {
      name: "Car Park Cleaning",
      href: "/services/car-park-cleaning",
      description:
        "Multi-storey and surface car park sweeping, degreasing, line-marking refresh, and ticket-machine sanitisation.",
    },
    {
      name: "Glass Partition & Window Cleaning",
      href: "/services/glass-partition-cleaning",
      description:
        "Mall glazing, balustrades, lift shafts, and high-level feature windows — including IPAF-certified high-access work.",
    },
  ],
  challenges: [
    {
      icon: "Clock",
      title: "24/7 operational rhythm",
      description:
        "Shopping centres never truly close. Our three-team model covers every hour of the week — day porters for live response, overnight for deep cleaning, specialists for facade and exterior.",
    },
    {
      icon: "Zap",
      title: "Spill response within minutes",
      description:
        "A coffee spill in a mall aisle is a slip risk and a brand risk. Our day porter team responds to spills within 5 minutes — wet-floor signage deployed immediately, spill cleared, area dried.",
    },
    {
      icon: "Users",
      title: "Customer-facing presentation",
      description:
        "Customers form an impression in 12 seconds. Our day porter team keeps restrooms fresh, bins empty, and floors dry — the three things that drive cleanliness complaints.",
    },
    {
      icon: "Building2",
      title: "Tenant coordination",
      description:
        "Tenants have their own cleaners, fit-out programmes, and delivery schedules. We coordinate with tenant operations teams to align cleaning with their rhythms and avoid duplication or gaps.",
    },
    {
      icon: "Shield",
      title: "Public liability exposure",
      description:
        "Slips, trips, and falls are the number one shopping centre liability. Our documented spill response SLA, signage protocols, and audit trail protect your legal position.",
    },
    {
      icon: "TrendingUp",
      title: "Service charge budget pressure",
      description:
        "Service charge budgets are scrutinised by tenants. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any customer-visible standard.",
    },
  ],
  stats: [
    { value: "1.4M", label: "sq ft cleaned daily" },
    { value: "5 min", label: "spill response SLA" },
    { value: "9", label: "shopping centres served" },
    { value: "11+", label: "years in centre cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Operations survey",
      description:
        "Our account director walks the centre with the centre manager and operations team. We map zones, footfall patterns, restroom blocks, food court, car parks, and service yards.",
      duration: "Days 1–3",
    },
    {
      step: "02",
      title: "Three-team schedule & quote",
      description:
        "We produce a written schedule covering day porter, overnight deep clean, and specialist facade teams. Fixed monthly fee with surge pricing for seasonal peaks.",
      duration: "Days 3–5",
    },
    {
      step: "03",
      title: "Crew mobilisation",
      description:
        "Day porter team starts first, followed by overnight deep clean team, then specialist facade team. All crews inducted to centre operations, safety, and tenant coordination protocols.",
      duration: "Days 5–10",
    },
    {
      step: "04",
      title: "Ongoing delivery & tenant liaison",
      description:
        "Daily cleaning, weekly KPI reports, monthly tenant liaison meetings, quarterly service charge review. Account manager sits in on centre operations meetings.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Clock",
      title: "Three-team 24/7 model",
      description:
        "Day porters, overnight deep clean, specialist facade — three coordinated teams covering every hour of the week. No gaps, no overlap, no buck-passing.",
    },
    {
      icon: "Zap",
      title: "5-minute spill response SLA",
      description:
        "Spill response within 5 minutes, anywhere in the centre. Wet-floor signage deployed immediately, spill cleared, area dried. Documented for liability protection.",
    },
    {
      icon: "Users",
      title: "Customer-aware day porters",
      description:
        "Day porters wear branded uniforms, carry ID, and are trained in customer service. They're part of the customer experience — not a hidden back-of-house function.",
    },
    {
      icon: "Building2",
      title: "Tenant coordination",
      description:
        "We sit in on tenant operations meetings, coordinate cleaning with tenant fit-outs, and align our schedule with tenant delivery windows. No duplication, no gaps.",
    },
    {
      icon: "Shield",
      title: "Documented liability protection",
      description:
        "Every spill response, every restroom check, every floor inspection is logged with time-stamp and crew ID. Your legal position is protected if a slip claim arises.",
    },
    {
      icon: "TrendingUp",
      title: "Service charge transparency",
      description:
        "Monthly KPI reports aligned to service charge audit criteria. Tenants see exactly what they're paying for. Quarterly frequency reviews deliver 8–12% cost-out.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you handle spill response in a busy shopping centre?",
      a: "Our day porter team carries radios and is deployed across the centre in zones. When a spill is reported (by staff, customer, or CCTV), the nearest porter responds within 5 minutes. Wet-floor signage is deployed immediately on arrival, the spill is cleared, the area is dried, and the signage stays for 15 minutes after drying. The whole incident is logged with time-stamp and photos.",
    },
    {
      q: "Can you handle a 1 million+ sq ft centre?",
      a: "Yes. Our largest current contract is 1.4 million sq ft cleaned daily. We scale by adding teams — typically one day porter per 50,000 sq ft of mall space, one overnight crew per 100,000 sq ft. Large centres also get a dedicated on-site supervisor who coordinates the teams and sits in on daily operations briefings.",
    },
    {
      q: "How do you coordinate with tenant cleaning teams?",
      a: "We sit in on monthly tenant liaison meetings, share our cleaning schedule with tenant operations teams, and align our overnight deep clean with tenant delivery windows. Tenants clean inside their units (in most cases); we clean common areas, restrooms, food court, car parks, and exterior. Boundaries are documented and reviewed quarterly.",
    },
    {
      q: "Do you provide surge capacity for Black Friday and Christmas?",
      a: "Yes. Existing clients get surge capacity with 2 weeks' notice — we add day porter shifts, extend overnight hours, and increase restroom refresh frequency. Surge pricing is transparent and capped at 1.5x normal rate. For seasonal peak periods (mid-November to early January), we typically increase crew count by 40%.",
    },
    {
      q: "How do you handle car park cleaning?",
      a: "Multi-storey and surface car parks are swept nightly (mechanical sweeper for surface, ride-on scrubber-dryer for multi-storey decks). Oil and fuel stains are degreased weekly. Ticket machines and barrier equipment are sanitised daily. Line-marking refresh is quoted separately as a specialist service.",
    },
    {
      q: "What's your pricing model?",
      a: "Most shopping centre contracts are priced as a fixed monthly fee based on total floor area, restroom count, and car park size. Typical regional centres (400,000–800,000 sq ft) pay between £18,000 and £42,000 per month. We provide a transparent quote after the operations survey.",
    },
  ],
  testimonials: [
    {
      name: "James Sutherland",
      role: "Centre Manager",
      facility: "Silverburn Shopping Centre, Glasgow",
      quote:
        "Maundy Clean has run our three-team model for three years. Spill response is genuinely 5 minutes, customer complaints about cleanliness are down 64%, and the service charge audit trail is the cleanest I've seen in 20 years of centre management.",
      rating: 5,
    },
    {
      name: "Catriona Bain",
      role: "Operations Director",
      facility: "The Centre, Livingston",
      quote:
        "Tenant liaison was a nightmare with our previous contractor — they didn't understand that tenants need to be communicated with, not cleaned around. Maundy Clean sits in on every tenant meeting, shares schedules, and the relationship is genuinely collaborative.",
      rating: 5,
    },
    {
      name: "Andrew Purvis",
      role: "Facilities Manager",
      facility: "Union Square, Aberdeen",
      quote:
        "Day porters, overnight deep clean, specialist facade team — three teams, one account manager, one report. Simple to manage, easy to audit, and the centre has never looked better. We saved 11% versus the previous contractor.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Retail Chains",
      href: "/industries/retail-chains",
      description:
        "Multi-site retail cleaning with brand-consistent presentation standards.",
    },
    {
      name: "Restaurants & QSR",
      href: "/industries/restaurants-qsr",
      description:
        "EHO-compliant BOH deep cleans and HACCP-aligned audit trails for food court tenants.",
    },
    {
      name: "Corporate Offices",
      href: "/industries/corporate-offices",
      description:
        "Corporate office cleaning for shopping centre management suites and back-office operations.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
      alt: "Shopping centre mall cleaning",
      caption: "Day porter team — live response, customer-aware, branded uniforms",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Shopping centre floor care",
      caption: "Overnight machine-scrubbing — 1.4M sq ft of mall floor cleaned nightly",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Shopping centre food court cleaning",
      caption: "Food court deep clean — degreasing, sanitising, and floor restoration",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Shopping centre restroom sanitation",
      caption: "Multi-block restroom management at scale — the top complaint driver",
    },
  ],
};

// ============================================================
// Industry #8 — Hotels & Resorts (Hospitality & Retail)
// ============================================================
export const hotelsResorts: IndustryDetail = {
  slug: "hotels-resorts",
  name: "Hotels & Resorts",
  category: "Hospitality & Retail",
  tagline: "Guest rooms, public areas, F&B outlets, and spa facilities — five-star presentation, every day.",
  heroHeadline: "A guest experience\nthat starts with\na spotless room.",
  heroSubhead:
    "We clean boutique hotels, country house hotels, business hotels, and resort properties across Scotland. Guest room turnover, public area presentation, F&B back-of-house, and spa sanitation. VisitScotland-aligned protocols, brand-standard compliance, and PVG-checked crews.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
  metaTitle: "Hotel & Resort Cleaning Scotland | Guest Rooms | Public Areas | Maundy Clean",
  metaDescription:
    "Hotel and resort cleaning across Scotland. Guest room turnover, public area presentation, F&B BOH, spa sanitation. VisitScotland-aligned. Brand-standard compliance. PVG-checked crews. 7 days a week.",
  overviewParagraphs: [
    "Hotel cleaning is the most presentation-driven cleaning discipline in commercial cleaning. A guest who finds a hair in the bathroom or a smudge on the mirror doesn't complain — they leave a 3-star review, and your RevPAR takes the hit. Maundy Clean has spent over a decade inside Scottish hotels, from 12-room boutique townhouses in Edinburgh to 200-room resort properties in the Highlands.",
    "Our hotel division operates a four-zone model: guest rooms (turnover and deep clean on a scheduled rotation), public areas (lobby, corridors, lifts, function suites — refreshed continuously through the day), F&B back-of-house (kitchen deep cleans aligned to HACCP and EHO), and spa/leisure facilities (pool hall, changing rooms, treatment rooms — sanitized to EN 14476 virucidal standard). Every zone has dedicated crews, colour-coded equipment, and brand-specific protocols.",
    "We understand the rhythm of a hotel: housekeeping starts at 8am, check-out is 11am, new arrivals from 3pm, evening turndown service, overnight public area deep clean, breakfast service from 6:30am. Our crews work alongside housekeeping, not against them — guest room deep cleans happen on a scheduled rotation (typically every 7–14 days depending on brand standard), public area deep cleans happen overnight, and F&B deep cleans happen between service periods.",
  ],
  compliance: [
    {
      code: "VisitScotland",
      title: "VisitScotland Quality Assurance Standards",
      description:
        "Our cleaning protocols map to VisitScotland QA grading criteria — the framework your hotel is graded against annually.",
    },
    {
      code: "HACCP",
      title: "Hazard Analysis and Critical Control Points",
      description:
        "F&B back-of-house cleaning aligned to your HACCP plan, with documented frequencies and verification audits.",
    },
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "Spa and treatment room surfaces wiped with EN 14476 virucidal disinfectant — critical for shared-use wellness facilities.",
    },
    {
      code: "Pool Water Treatment",
      title: "PWTAG Pool Water Treatment Standards",
      description:
        "Pool hall cleaning aligned to PWTAG standards — including surround disinfection, showerhead descaling, and changing room sanitation.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-fragrance products in guest rooms (allergy-aware) and food-safe sanitisers in F&B areas.",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Crews are trained in guest confidentiality. Lost property is logged and handed to reception; guest belongings are never moved or photographed.",
    },
  ],
  servicesDelivered: [
    {
      name: "Hotel & Hospitality Cleaning",
      href: "/services/hotel-hospitality-cleaning",
      description:
        "Full hotel cleaning — guest rooms, public areas, F&B, spa, and back-of-house. VisitScotland-aligned protocols.",
    },
    {
      name: "Holiday Let Turnover",
      href: "/services/holiday-let-turnover",
      description:
        "Airbnb and Booking.com guest-ready turnover for self-catering properties and aparthotels.",
    },
    {
      name: "Restaurant & Kitchen Deep Clean",
      href: "/services/restaurant-cleaning",
      description:
        "Hotel restaurant and kitchen deep clean — extraction, canopy, fryer decarbonisation, floor degreasing.",
    },
    {
      name: "Carpet & Upholstery Cleaning",
      href: "/services/carpet-rug-cleaning",
      description:
        "Guest room carpet hot-water extraction, upholstery cleaning, and curtain cleaning (where applicable).",
    },
    {
      name: "Window Cleaning (Low & High Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Hotel exterior glazing, atrium windows, and high-level feature glass — including IRATA-certified rope-access work.",
    },
    {
      name: "Restroom & Changing Room Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Public restroom, pool changing room, and spa facility sanitation with EN 14476 virucidal disinfectants.",
    },
  ],
  challenges: [
    {
      icon: "Clock",
      title: "Turnover deadline pressure",
      description:
        "Check-out 11am, check-in 3pm — a four-hour window for guest room turnover. Our crews work alongside your housekeeping team to deliver deep cleans and ad-hoc tasks without missing the turnover window.",
    },
    {
      icon: "Shield",
      title: "Brand-standard compliance",
      description:
        "Every hotel brand has a brand-standard manual defining presentation down to the fold of the toilet paper. Our crews follow your brand standard, not a generic cleaning template.",
    },
    {
      icon: "Users",
      title: "Guest-present discretion",
      description:
        "Public area cleaning happens around guests. Our crews wear branded uniforms, work discreetly, and are trained in guest-service etiquette — they're part of the guest experience.",
    },
    {
      icon: "Heart",
      title: "Allergy-aware product selection",
      description:
        "Guests have allergies. We use low-fragrance, low-VOC products in guest rooms as standard, and have hypoallergenic protocols available for hotels offering allergy-friendly rooms.",
    },
    {
      icon: "Zap",
      title: "Spa and pool sanitation",
      description:
        "Shared wellness facilities are a pathogen transmission risk. Our spa crews use EN 14476 virucidal disinfectants on all touchpoints, with documented frequencies that align to PWTAG.",
    },
    {
      icon: "TrendingUp",
      title: "RevPAR-driven budget pressure",
      description:
        "Hotel margins are under pressure from OTAs and rising costs. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any brand-standard task.",
    },
  ],
  stats: [
    { value: "65+", label: "hotels served" },
    { value: "4.8/5", label: "avg guest cleanliness score" },
    { value: "98%", label: "turnover deadline hit rate" },
    { value: "12+", label: "years in hotel cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Property walk-through",
      description:
        "Our account director walks the property with the general manager and head housekeeper. We map zones, identify brand-standard requirements, and discuss housekeeping integration.",
      duration: "Days 1–2",
    },
    {
      step: "02",
      title: "Brand-standard schedule & quote",
      description:
        "Within 3 business days you receive a written cleaning schedule mapped to your brand-standard manual, a COSHH register, and a fixed monthly fee. F&B and spa deep cleans quoted separately.",
      duration: "Days 3–5",
    },
    {
      step: "03",
      title: "Crew induction & integration",
      description:
        "A PVG-checked, brand-trained crew is inducted to the property, introduced to housekeeping, and integrated with your turnover rhythm. First deep clean supervised by account manager.",
      duration: "Days 5–10",
    },
    {
      step: "04",
      title: "Ongoing delivery & audit",
      description:
        "Scheduled deep cleans, overnight public area refresh, F&B BOH deep cleans, spa sanitation. Monthly KPI reports, quarterly brand-standard audit, annual VisitScotland prep.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Clock",
      title: "Turnover deadline guarantee",
      description:
        "98% hit rate on guest room deep clean schedules without missing turnover deadlines. We work alongside your housekeeping, not against them — no clattering equipment, no blocked corridors.",
    },
    {
      icon: "Shield",
      title: "Brand-standard trained crews",
      description:
        "Every crew is briefed on your brand-standard manual before stepping foot in the property. POS handling, amenity placement, linen standards — all part of induction.",
    },
    {
      icon: "Users",
      title: "Guest-present discretion",
      description:
        "Public area crews wear branded uniforms, work discreetly, and are trained in guest-service etiquette. They're part of the guest experience, not a hidden back-of-house function.",
    },
    {
      icon: "Heart",
      title: "Allergy-aware product selection",
      description:
        "Low-fragrance, low-VOC products in guest rooms as standard. Hypoallergenic protocols available for allergy-friendly rooms. Every product pre-approved by your housekeeping team.",
    },
    {
      icon: "Zap",
      title: "PWTAG-compliant spa and pool sanitation",
      description:
        "EN 14476 virucidal disinfectants on all spa touchpoints. Pool surround, showerheads, and changing rooms sanitised to PWTAG standard. Audit-ready records on every visit.",
    },
    {
      icon: "Building2",
      title: "Multi-property consolidated reporting",
      description:
        "Hotel groups get one account manager across all properties, one monthly report, identical protocols. No more chasing three regional managers for the same answer.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you integrate with our housekeeping team?",
      a: "We work alongside your housekeeping team, not in competition with them. Housekeeping handles daily turnover (beds, linen, bathrooms, amenities). We handle scheduled deep cleans (carpets, upholstery, behind beds, deep bathroom descaling, public area overnight refresh, F&B BOH, spa). Boundaries are documented, reviewed quarterly, and the account manager sits in on weekly housekeeping briefings.",
    },
    {
      q: "Can you handle spa and pool facilities?",
      a: "Yes. Spa and pool cleaning is a specialist sub-team within our hotel division. Crews are trained on PWTAG standards, EN 14476 virucidal disinfection, and shared-facility pathogen control. Pool surrounds, showerheads, changing rooms, treatment rooms, and thermal suite surfaces are all in scope.",
    },
    {
      q: "How do you handle brand-standard compliance?",
      a: "Every crew is briefed on your brand-standard manual before stepping foot in the property. POS handling, amenity placement, linen standards, bathroom presentation, turndown protocols — all part of induction. Quarterly brand-standard audits are conducted, with scorecards shared with the general manager and head housekeeper.",
    },
    {
      q: "What products do you use in guest rooms?",
      a: "Low-fragrance, low-VOC products as standard — we avoid the heavy floral air-freshener smell that many guests dislike and some are allergic to. For allergy-friendly rooms, we use hypoallergenic protocols with independently certified products. Every product is pre-approved by your housekeeping team and carries a current COSHH datasheet.",
    },
    {
      q: "Can you provide surge capacity for events and weddings?",
      a: "Yes. Existing clients get surge capacity with 2 weeks' notice — extra crew for function turnover, post-event deep cleans, and peak-season housekeeping support. Surge pricing is transparent and capped at 1.5x normal rate. For weddings and major events, we'll pre-schedule the post-event deep clean before the event starts.",
    },
    {
      q: "What's your pricing model?",
      a: "Most hotel contracts are priced as a fixed monthly fee based on number of rooms, public area size, F&B scope, and spa facilities. Typical 50-room hotels pay between £2,800 and £4,800 per month. Resort properties with spa and extensive grounds are scoped individually. We provide a transparent quote after the property walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Eleanor MacLeod",
      role: "General Manager",
      facility: "The Balmoral Hotel, Edinburgh",
      quote:
        "Maundy Clean has handled our deep cleans and overnight public area refresh for four years. Brand-standard audit scores have gone from 4.4 to 4.8. Guest cleanliness scores consistently above 4.85. They understand five-star hotel operations.",
      rating: 5,
    },
    {
      name: "Ian Cameron",
      role: "Head Housekeeper",
      facility: "Gleneagles Hotel, Perthshire",
      quote:
        "The integration with our in-house team is seamless. Maundy Clean's crews know our brand standard, work around our turnover rhythm, and never leave a footprint in guest areas. The spa team is particularly impressive — PWTAG-compliant, audit-ready, every visit.",
      rating: 5,
    },
    {
      name: "Fiona Stewart",
      role: "Operations Director",
      facility: "Boutique Hotels of Scotland (7 properties)",
      quote:
        "Running seven boutique properties across Scotland requires consistent standards without losing individual character. Maundy Clean delivers — one account manager, one report, identical protocols, but flexible enough to handle each property's quirks. Saved 9% versus the previous contractor.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Restaurants & QSR",
      href: "/industries/restaurants-qsr",
      description:
        "EHO-compliant BOH deep cleans and HACCP-aligned audit trails for hotel F&B outlets.",
    },
    {
      name: "Retail Chains",
      href: "/industries/retail-chains",
      description:
        "Multi-site retail cleaning with brand-consistent presentation standards for hotel retail concessions.",
    },
    {
      name: "Gyms & Fitness Studios",
      href: "/industries/gyms-fitness-studios",
      description:
        "Fitness facility cleaning for hotel gyms and leisure clubs.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
      alt: "Hotel lobby cleaning",
      caption: "Five-star hotel lobby — overnight public area deep clean, brand-standard compliant",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Hotel guest room cleaning",
      caption: "Guest room deep clean — carpet extraction, bathroom descaling, behind-bed dust",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Hotel spa cleaning",
      caption: "Spa facility sanitation — EN 14476 virucidal disinfection, PWTAG-compliant",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Hotel kitchen deep clean",
      caption: "Hotel restaurant kitchen deep clean — extraction, canopy, floor degreasing",
    },
  ],
};

// ============================================================
// Industry #9 — Primary & Secondary Schools (Education)
// ============================================================
export const schools: IndustryDetail = {
  slug: "schools",
  name: "Primary & Secondary Schools",
  category: "Education",
  tagline: "Care Inspectorate and Education Scotland aligned cleaning for Scotland's schools.",
  heroHeadline: "A clean school\nis a healthy\nlearning environment.",
  heroSubhead:
    "We clean primary schools, secondary schools, and additional support needs (ASN) schools across Scotland. Care Inspectorate and Education Scotland aligned protocols, low-allergen products, and PVG-checked crews who genuinely like working around children.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  metaTitle: "School Cleaning Scotland | Primary & Secondary | Care Inspectorate | Maundy Clean",
  metaDescription:
    "School cleaning across Scotland. Primary, secondary, and ASN schools. Care Inspectorate and Education Scotland aligned. Low-allergen products. PVG-checked crews. Daily term-time and deep clean during holidays.",
  overviewParagraphs: [
    "School cleaning is a unique discipline. The buildings are large, the occupants are children (some with complex additional support needs), the budgets are tight, and the regulatory framework involves both the Care Inspectorate (for early years and ASN provision) and Education Scotland. Maundy Clean has spent over a decade inside Scottish schools, from 40-pupil rural primaries to 1,400-pupil urban secondaries.",
    "Our school division operates a term-time daily model plus a holiday deep clean model. During term, a regular crew (typically 2–6 cleaners depending on school size) arrives at 3:30pm and works through to 7pm, resetting classrooms, sanitising toilets, mopping corridors, and prepping halls. During holidays, a deep clean team handles carpet extraction, floor stripping, window cleaning, and CLASP/EWG disinfection of all touchpoints — work that can't happen during term time.",
    "We understand the rhythm of a school: morning rush, mid-morning break, lunch hour, afternoon lessons, after-school clubs, staff meetings, parents' evenings, school shows. Our crews work around all of it — they don't enter classrooms during lessons, they avoid corridors during changeover, and they're trained in child-safeguarding protocols. Every cleaner is PVG-checked, every cleaner completes annual child protection training, and every cleaner is briefed on the school's specific safeguarding lead.",
  ],
  compliance: [
    {
      code: "Care Inspectorate",
      title: "Care Inspectorate National Care Standards",
      description:
        "Our protocols align to Care Inspectorate standards for early years and ASN provision — covering cleaning, infection control, and child-safety.",
    },
    {
      code: "Education Scotland",
      title: "Education Scotland How Good Is Our School?",
      description:
        "Our cleaning contributes to Education Scotland's HGIOS? quality indicator 3.2 (school environment) — part of your school's inspection framework.",
    },
    {
      code: "HSE",
      title: "HSE School Cleaning Guidance",
      description:
        "We follow HSE guidance on school cleaning — including safe use of chemicals around children, equipment storage, and slip-risk management.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-allergen, low-fragrance products as standard, and never spray disinfectants near children.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling in our scope — critical for schools with shower facilities.",
    },
    {
      code: "Child Protection",
      title: "Child Protection Training",
      description:
        "Every crew member completes annual child protection training aligned to Scotland's National Guidance for Child Protection, and is briefed on the school's designated safeguarding lead.",
    },
  ],
  servicesDelivered: [
    {
      name: "School & Nursery Cleaning",
      href: "/services/school-nursery-cleaning",
      description:
        "Daily term-time cleaning plus holiday deep cleans for primary and secondary schools.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Term-time maintenance and holiday deep clean of school floors — VCT strip & re-seal, hardwood refinishing, carpet extraction.",
    },
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description:
        "Whole-school disinfection during outbreak response (norovirus, flu, scarlet fever) with documented stand-down.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Pupil and staff WCs descaled, disinfected, and re-stocked with audit-ready records on every visit.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "School exterior and interior glazing, including high-level hall windows, on a scheduled rotation during holidays.",
    },
    {
      name: "Post-Construction Cleaning",
      href: "/services/post-construction-cleaning",
      description:
        "Post-extension or post-refurb snagging cleans, builder-dust removal, and pre-term presentation deep cleans.",
    },
  ],
  challenges: [
    {
      icon: "Users",
      title: "Child-safeguarding responsibility",
      description:
        "Every cleaner is PVG-checked and completes annual child protection training. They're briefed on the school's safeguarding lead and trained to report any concern immediately. Safeguarding is non-negotiable.",
    },
    {
      icon: "Shield",
      title: "Outbreak response in a school community",
      description:
        "Norovirus, flu, scarlet fever, headlice — schools are pathogen transmission hotspots. Our outbreak response team mobilises within 4 hours with dedicated equipment and documented stand-down protocols.",
    },
    {
      icon: "Heart",
      title: "Allergen and asthma management",
      description:
        "Children have asthma and allergies. We use low-allergen, low-fragrance, low-VOC products as standard. Spray disinfectants are never used near children — only wipes or pre-saturated cloths.",
    },
    {
      icon: "Clock",
      title: "Term-time vs holiday rhythm",
      description:
        "Term requires a 3:30–7pm daily crew. Holidays require a deep clean team. We provide both under one contract, with seamless handover between the two models.",
    },
    {
      icon: "TrendingUp",
      title: "Council budget pressure",
      description:
        "Local authority school cleaning budgets are tighter than ever. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any Care Inspectorate-critical task.",
    },
    {
      icon: "Building2",
      title: "Multi-school estate management",
      description:
        "Local authorities and independent school groups need consistent standards across multiple schools. We provide consolidated reporting, identical protocols, and a single account manager.",
    },
  ],
  stats: [
    { value: "85+", label: "schools served" },
    { value: "100%", label: "Care Inspectorate pass rate" },
    { value: "4h", label: "outbreak response SLA" },
    { value: "11+", label: "years in school cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "School walk-through",
      description:
        "Our regional manager walks the school with the head teacher and facilities manager. We map zones, identify Care Inspectorate-critical areas, and discuss term-time and holiday requirements.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Term & holiday schedule",
      description:
        "Within 3 business days you receive a written term-time daily schedule, a holiday deep clean schedule, a COSHH register, and a fixed monthly fee (with holiday deep cleans quoted separately).",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & PVG clearance",
      description:
        "PVG-checked, child-protection-trained crews are inducted to the school, introduced to the head and safeguarding lead, and the first clean is supervised end-to-end.",
      duration: "Days 4–10",
    },
    {
      step: "04",
      title: "Term & holiday delivery",
      description:
        "Daily term-time cleaning, holiday deep cleans, outbreak response, and Care Inspectorate audit prep. Monthly KPI reports and quarterly review meetings with the head teacher.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Users",
      title: "PVG-checked, child-protection-trained",
      description:
        "Every crew member carries Disclosure Scotland PVG scheme membership and completes annual child protection training aligned to Scotland's National Guidance. Safeguarding is non-negotiable.",
    },
    {
      icon: "Shield",
      title: "Care Inspectorate audit-ready",
      description:
        "Every task is logged digitally against Care Inspectorate criteria. Inspectors can pull a full cleaning history for any zone in under 60 seconds.",
    },
    {
      icon: "Zap",
      title: "4-hour outbreak response",
      description:
        "Norovirus, flu, or scarlet fever outbreaks trigger immediate response with dedicated equipment and a documented stand-down protocol signed off by the head teacher.",
    },
    {
      icon: "Heart",
      title: "Allergen and asthma-aware",
      description:
        "Low-allergen, low-fragrance, low-VOC products as standard. Spray disinfectants never used near children. Hypoallergenic protocols available for ASN provisions.",
    },
    {
      icon: "Clock",
      title: "Term and holiday coverage",
      description:
        "Daily term-time crew plus holiday deep clean team — one contract, one account manager, seamless handover between the two models.",
    },
    {
      icon: "Building2",
      title: "Multi-school consolidated reporting",
      description:
        "Local authorities and school groups get one account manager across all schools, one monthly report, identical protocols. Critical for governance and audit.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Are all your cleaners PVG-checked for school work?",
      a: "Yes. Every crew member carries Disclosure Scotland PVG scheme membership before stepping foot in a school. We renew PVG checks every 3 years as standard, and immediately if any concern is flagged. PVG certificates are available for inspection by the head teacher or local authority at any time.",
    },
    {
      q: "How do you handle child protection responsibilities?",
      a: "Every crew member completes annual child protection training aligned to Scotland's National Guidance for Child Protection. They're briefed on the school's designated safeguarding lead, trained to report any concern immediately, and instructed never to be alone with a child. Safeguarding is reinforced at every quarterly review.",
    },
    {
      q: "What products do you use around children?",
      a: "Low-allergen, low-fragrance, low-VOC products as standard. Spray disinfectants are never used near children — we use pre-saturated wipes or pour-and-wipe methods. For ASN provisions with complex medical needs, we use hypoallergenic protocols with independently certified products. Every product is pre-approved by the head teacher and carries a current COSHH datasheet.",
    },
    {
      q: "How do you handle outbreak response (norovirus, flu, etc.)?",
      a: "Outbreak response is mobilised within 4 hours. Dedicated equipment, full PPE, and a documented stand-down protocol signed off by the head teacher. For major outbreaks, we coordinate with the local health protection team and follow their guidance on school closure and re-opening. Detailed records are kept for Care Inspectorate inspection.",
    },
    {
      q: "Can you cover PPA days, in-service days, and holidays?",
      a: "Yes. Term-time daily cleaning covers PPA days and in-service days (with adjusted hours if needed). Holiday deep cleans cover October week, Christmas, Easter, and summer holidays — typically 1–2 weeks of deep clean work per holiday period. Summer holiday is the largest deep clean window — usually 3–4 weeks of work including floor stripping and carpet extraction.",
    },
    {
      q: "What's your pricing model?",
      a: "Most school contracts are priced as a fixed monthly fee based on floor area, pupil count, and visit frequency. Typical primary schools (200–400 pupils) pay between £1,800 and £3,200 per month. Secondary schools are scoped individually. Holiday deep cleans are quoted separately. We provide a transparent quote after the school walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Margaret Donnelly",
      role: "Head Teacher",
      facility: "Hillhead Primary School, Glasgow",
      quote:
        "Maundy Clean has been with us for three years. PVG-checked, child-protection-trained, allergy-aware. Our last Care Inspectorate report scored 'very good' on environment — the highest we've ever achieved. The holiday deep cleans are exceptional.",
      rating: 5,
    },
    {
      name: "Robert Sinclair",
      role: "Facilities Manager",
      facility: "Edinburgh City Council (cluster of 8 primary schools)",
      quote:
        "Eight schools, one account manager, one monthly report. The consistency across the cluster is exactly what the local authority needs for governance. Outbreak response has been flawless — norovirus at one school was contained and cleared within 48 hours.",
      rating: 5,
    },
    {
      name: "Susan McPherson",
      role: "Head Teacher",
      facility: "St Andrew's RC Secondary School, Glasgow",
      quote:
        "1,400 pupils, 90 staff, 80 classrooms. Maundy Clean handles it. Same term-time crew every day, deep clean team every holiday. The summer floor stripping was finished a week before term started — first time in years that's happened.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Universities & Colleges",
      href: "/industries/universities-colleges",
      description:
        "University campus cleaning — lecture theatres, labs, libraries, halls of residence, and student unions.",
    },
    {
      name: "Nurseries & Preschools",
      href: "/industries/nurseries-preschools",
      description:
        "Nursery and preschool cleaning with Care Inspectorate early years alignment.",
    },
    {
      name: "Training & Tutoring Centres",
      href: "/industries/training-tutoring-centres",
      description:
        "Training centre and tutoring facility cleaning with flexible scheduling around classes.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
      alt: "School cleaning",
      caption: "Term-time daily clean — classroom reset, floor mopping, touchpoint sanitising",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "School floor care",
      caption: "Summer holiday floor stripping — VCT strip & re-seal across the whole school",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "School colour-coded equipment",
      caption: "Colour-coded zone equipment prevents toilet-to-classroom cross-contamination",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "School restroom sanitation",
      caption: "Pupil toilet block sanitation — descaled, disinfected, audit-ready",
    },
  ],
};

// ============================================================
// Industry #10 — Universities & Colleges (Education)
// ============================================================
export const universitiesColleges: IndustryDetail = {
  slug: "universities-colleges",
  name: "Universities & Colleges",
  category: "Education",
  tagline: "Lecture theatres, labs, libraries, halls of residence, and student unions — at campus scale.",
  heroHeadline: "A campus that\nsupports world-class\nresearch and teaching.",
  heroSubhead:
    "We clean universities, colleges, and research institutes across Scotland. Campus-scale protocols covering lecture theatres, research laboratories, libraries, halls of residence, and student union buildings. APUC framework-aligned and AUDE-compatible.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  metaTitle: "University & College Cleaning Scotland | Campus Scale | APUC | Maundy Clean",
  metaDescription:
    "University and college cleaning across Scotland. Lecture theatres, labs, libraries, halls of residence, student unions. APUC framework-aligned. AUDE-compatible reporting. 24/7 cover during term.",
  overviewParagraphs: [
    "University cleaning is a discipline of scale and complexity. A typical Scottish university campus has 30–80 buildings, 15,000–35,000 students, multiple research laboratories (some containing CL2 or CL3 containment facilities), libraries open 24/7 during exam periods, halls of residence housing 1,000+ students, and student union buildings with bars, restaurants, and event spaces. The cleaning operation has to be 24/7, multi-disciplinary, and integrated with the university's estates and facilities management.",
    "Our university division operates a four-asset-class model: academic buildings (lecture theatres, seminar rooms, offices — cleaned overnight); research laboratories (cleaned to CL2/CL3 protocols, with separate teams for containment facilities); residential (halls of residence — daily turnover and weekly deep clean); and social (student unions, bars, restaurants — evening and overnight deep clean). Every asset class has dedicated crews, specialist training, and a clear scope boundary.",
    "We understand the rhythm of a university:Welcome Week in September (cleaning demand doubles), term-time steady-state, exam periods (libraries go 24/7), graduation weeks (high-profile presentation standards), summer vacation (deep clean window for major works), and ad-hoc events (conferences, open days, ceremonies). Our account managers sit in on estates operations meetings, align cleaning with academic calendar peaks, and provide surge capacity for Welcome Week and graduation without notice required.",
  ],
  compliance: [
    {
      code: "APUC",
      title: "Advanced Procurement for Universities & Colleges Framework",
      description:
        "We hold places on the relevant APUC cleaning services frameworks, so procurement can call off without a full OJEU exercise.",
    },
    {
      code: "AUDE",
      title: "Association of University Directors of Estates Standards",
      description:
        "Our reporting and KPI formats align to AUDE benchmarks, making it simple to compare our performance across the sector.",
    },
    {
      code: "HSE BSC",
      title: "HSE Biological Agents: Managing the Risks in Universities",
      description:
        "Laboratory cleaning follows HSE biological agents guidance, with separate protocols for CL1, CL2, and CL3 containment facilities.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. Lab cleaning chemicals are approved by the university's biological safety officer before deployment.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling across all campus buildings — closing a common audit gap.",
    },
    {
      code: "PUWER",
      title: "Provision and Use of Work Equipment Regulations",
      description:
        "All cleaning equipment is PUWER-compliant, PAT-tested, and operated by trained staff. Ride-on scrubber-dryers risk-assessed for pedestrian-area use.",
    },
  ],
  servicesDelivered: [
    {
      name: "University Campus Cleaning",
      href: "/services/university-campus-cleaning",
      description:
        "Full campus cleaning — academic buildings, libraries, social spaces, and circulation areas.",
    },
    {
      name: "Lab & Research Facility Cleaning",
      href: "/services/lab-research-facility-cleaning",
      description:
        "CL2/CL3 laboratory cleaning with biological-safety-officer-approved protocols and dedicated equipment.",
    },
    {
      name: "Library Cleaning",
      href: "/services/library-cleaning",
      description:
        "Library cleaning — reading rooms, book stacks, IT suites, and 24/7 examination-period cover.",
    },
    {
      name: "Halls of Residence Cleaning",
      href: "/services/holiday-let-turnover",
      description:
        "Halls of residence — daily common area cleaning, weekly deep clean, end-of-term strip-out.",
    },
    {
      name: "Nightly Janitorial",
      href: "/services/nightly-janitorial",
      description:
        "Overnight academic building reset — lecture theatre cleaning, office emptying, floor mopping.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Campus-wide floor care — VCT strip & re-seal, terrazzo restoration, hardwood refinishing, lab-floor anti-slip treatment.",
    },
  ],
  challenges: [
    {
      icon: "Building2",
      title: "Multi-building campus complexity",
      description:
        "A typical campus has 30–80 buildings with different functions, different risk profiles, and different cleaning requirements. Our asset-class model ensures each gets the right protocol — not a one-size-fits-all template.",
    },
    {
      icon: "Shield",
      title: "Research laboratory integrity",
      description:
        "CL2/CL3 laboratories can't be cleaned by generalists. Our lab team is trained on HSE biological agents guidance, uses biological-safety-officer-approved chemicals, and works to documented dirty-to-clean sequencing.",
    },
    {
      icon: "Clock",
      title: "24/7 academic calendar",
      description:
        "Libraries open 24/7 during exams. Welcome Week doubles cleaning demand. Graduation requires five-star presentation. We provide 24/7 cover and surge capacity for academic calendar peaks.",
    },
    {
      icon: "Users",
      title: "Student-present cleaning",
      description:
        "Students are everywhere, all the time. Our crews work around them — quiet equipment, discreet behaviour, and respect for study spaces. We never enter a laboratory without authorisation.",
    },
    {
      icon: "TrendingUp",
      title: "Tightening estates budgets",
      description:
        "University estates budgets are under pressure from frozen tuition fees and rising costs. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any auditable task.",
    },
    {
      icon: "Zap",
      title: "Outbreak response in dense populations",
      description:
        "Norovirus, flu, meningitis — universities are pathogen transmission hotspots. Our outbreak response team mobilises within 4 hours with dedicated equipment and documented stand-down protocols.",
    },
  ],
  stats: [
    { value: "6", label: "universities served" },
    { value: "2.1M", label: "sq ft cleaned daily" },
    { value: "24/7", label: "term-time cover" },
    { value: "11+", label: "years in university cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Campus estate survey",
      description:
        "Our account director walks the campus with the director of estates. We map buildings by asset class, identify laboratory requirements, and discuss academic calendar integration.",
      duration: "Days 1–5",
    },
    {
      step: "02",
      title: "Asset-class schedule & quote",
      description:
        "We produce a written schedule covering academic, lab, residential, and social asset classes. Fixed monthly fee with surge pricing for Welcome Week and graduation.",
      duration: "Days 5–10",
    },
    {
      step: "03",
      title: "Crew mobilisation",
      description:
        "Asset-class crews are mobilised — academic first, then lab (after BSO sign-off), then residential, then social. All crews inducted to campus security, lab protocols, and student-present behaviour.",
      duration: "Days 10–21",
    },
    {
      step: "04",
      title: "Ongoing delivery & estates liaison",
      description:
        "Daily cleaning, monthly KPI reports (AUDE-aligned), quarterly estates liaison meetings, annual APUC framework review. Account manager sits in on estates operations meetings.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Building2",
      title: "Four asset-class model",
      description:
        "Academic, lab, residential, social — each gets dedicated crews, specialist training, and the right protocol. No generalists mopping a CL2 lab. No lab specialists wasting time on a lecture theatre.",
    },
    {
      icon: "Shield",
      title: "CL2/CL3 laboratory trained",
      description:
        "Lab crews trained on HSE biological agents guidance. Chemicals approved by the university's biological safety officer. Documented dirty-to-clean sequencing with dedicated equipment.",
    },
    {
      icon: "Clock",
      title: "24/7 term-time cover",
      description:
        "Libraries 24/7 during exams. Halls of residence daily. Student unions overnight. Academic buildings before 8am lectures. Surge capacity for Welcome Week and graduation.",
    },
    {
      icon: "Users",
      title: "Student-aware operation",
      description:
        "Quiet equipment, discreet behaviour, respect for study spaces. Crews never enter laboratories without authorisation, never disturb personal belongings in halls, never block access routes during changeover.",
    },
    {
      icon: "TrendingUp",
      title: "AUDE-aligned reporting",
      description:
        "Monthly KPI reports in AUDE format — easy to benchmark against other universities. Quarterly frequency reviews deliver 8–12% cost-out without dropping any auditable task.",
    },
    {
      icon: "Zap",
      title: "4-hour outbreak response",
      description:
        "Norovirus, flu, or meningitis response mobilised within 4 hours. Dedicated equipment, full PPE, documented stand-down protocol coordinated with the university's occupational health team.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Can you handle CL2 and CL3 laboratory cleaning?",
      a: "Yes. Our lab team is trained on HSE Biological Agents: Managing the Risks guidance. Cleaning chemicals are pre-approved by the university's biological safety officer. Crews work to documented dirty-to-clean sequencing, use dedicated colour-coded equipment, and complete CL2/CL3-specific training before stepping foot in a containment facility. We also handle CL4 — but only via a separate specialist subcontractor managed under our account.",
    },
    {
      q: "How do you cover 24/7 library opening during exams?",
      a: "During exam periods, we deploy a dedicated library cleaning team covering 24/7. Crews work in shifts: a daytime porter (8am–8pm) handling touchpoint cleaning, spill response, and bin emptying; an overnight deep clean team (10pm–6am) handling floor machine-scrubbing, IT suite cleaning, and stack-aisle dusting. The library stays open throughout — we work around students.",
    },
    {
      q: "Can you provide surge capacity for Welcome Week?",
      a: "Yes. Welcome Week doubles cleaning demand across the campus — new students, parents, events, and elevated wear-and-tear. Existing clients get surge capacity with 2 weeks' notice — extra crew, extended hours, and dedicated event-response teams. Surge pricing is transparent and capped at 1.5x normal rate. We pre-schedule the post-Welcome-Week deep clean before term starts.",
    },
    {
      q: "How do you handle halls of residence cleaning?",
      a: "Halls of residence get a dedicated residential team. Daily common area cleaning (kitchens, corridors, laundries, common rooms), weekly deep clean of shared bathrooms and kitchens, end-of-term strip-out of vacated rooms. Student bedrooms are student responsibility (with the exception of shared ensuite bathrooms in some halls, which we clean weekly). Boundaries are documented and reviewed quarterly.",
    },
    {
      q: "Are you on the APUC framework?",
      a: "Yes. We hold places on the relevant APUC cleaning services frameworks, which means university procurement teams can call off our services without running a full OJEU exercise. Contact us for our framework reference numbers and lot coverage. We also hold places on similar frameworks for colleges and research institutes.",
    },
    {
      q: "What's your pricing model?",
      a: "Most university contracts are priced as a fixed monthly fee based on total floor area, asset-class mix, and visit frequency. Typical mid-sized universities (15,000–25,000 students) pay between £85,000 and £180,000 per month. Surge periods (Welcome Week, graduation) are quoted separately. We provide a transparent quote after the campus estate survey.",
    },
  ],
  testimonials: [
    {
      name: "Prof. Alan Reid",
      role: "Director of Estates",
      facility: "University of Strathclyde",
      quote:
        "Maundy Clean has handled our academic and residential cleaning for four years. The four asset-class model gives us specialist protocols for labs, consistent standards across halls, and surge capacity for Welcome Week. AUDE-aligned reporting makes benchmarking simple.",
      rating: 5,
    },
    {
      name: "Dr Mairi Spence",
      role: "Biological Safety Officer",
      facility: "University of Edinburgh",
      quote:
        "Lab cleaning was always a worry with previous contractors — generalists in containment zones, unapproved chemicals. Maundy Clean's lab team is properly trained, BSO-approved, and follows the protocol to the letter. Best lab cleaning operation I've worked with.",
      rating: 5,
    },
    {
      name: "Gordon Burns",
      role: "Head of Facilities",
      facility: "Heriot-Watt University",
      quote:
        "1.8 million sq ft, 80 buildings, 12,000 students. Maundy Clean handles it. 24/7 library cover during exams, surge capacity for graduation, seamless integration with our estates team. The monthly KPI report is the cleanest I've seen in 25 years of estates work.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Primary & Secondary Schools",
      href: "/industries/schools",
      description:
        "Primary, secondary, and ASN school cleaning with Care Inspectorate alignment.",
    },
    {
      name: "Nurseries & Preschools",
      href: "/industries/nurseries-preschools",
      description:
        "Nursery and preschool cleaning with Care Inspectorate early years alignment.",
    },
    {
      name: "Corporate Offices",
      href: "/industries/corporate-offices",
      description:
        "Corporate office cleaning for university professional services and administrative buildings.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
      alt: "University campus cleaning",
      caption: "Overnight lecture theatre reset — floors, desks, touchpoints, presentation ready",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
      alt: "University laboratory cleaning",
      caption: "CL2 laboratory cleaning — BSO-approved chemicals, dedicated equipment",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "University library cleaning",
      caption: "Library 24/7 cleaning during exam period — student-aware, quiet equipment",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/91c3c3de1361.jpg",
      alt: "University student union cleaning",
      caption: "Student union overnight deep clean — bar, kitchen, event space",
    },
  ],
};

// ============================================================
// Industry #11 — Nurseries & Preschools (Education)
// ============================================================
export const nurseriesPreschools: IndustryDetail = {
  slug: "nurseries-preschools",
  name: "Nurseries & Preschools",
  category: "Education",
  tagline: "Care Inspectorate early years alignment — protocols designed for crawling, mouthing, exploring children.",
  heroHeadline: "A nursery clean\nenough for a baby\nto crawl on.",
  heroSubhead:
    "We clean private nurseries, local authority nurseries, preschools, and playgroups across Scotland. Care Inspectorate early years alignment, with protocols designed for children who crawl, mouth toys, and explore at floor level. PVG-checked, low-allergen, child-safe.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  metaTitle: "Nursery & Preschool Cleaning Scotland | Care Inspectorate | Maundy Clean",
  metaDescription:
    "Nursery and preschool cleaning across Scotland. Care Inspectorate early years alignment, child-safe products, floor-level cleaning focus. PVG-checked crews. Daily term-time and deep clean during closures.",
  overviewParagraphs: [
    "Nursery cleaning is a discipline of constant vigilance. The children are at floor level most of the day — crawling, playing, mouthing toys, eating snacks, napping on mats. Every product you use has to be child-safe; every surface they touch has to be sanitised; every toy they mouth has to be cleaned. The Care Inspectorate inspects without warning, and parents scrutinise every detail. Maundy Clean has spent over a decade inside Scottish nurseries, from 20-place village playgroups to 120-place corporate nurseries.",
    "Our nursery division operates a child-safe protocol model. Every product is independently certified for use in early years settings — no chlorine-based sprays near soft furnishings, no quaternary ammonium compounds on toys that go in mouths, no strong-fragrance products that trigger asthma. We use a separate colour-coded system for toilets, food prep areas, general play areas, and sleep rooms. Mop heads are replaced between zones, and cloths are single-use for high-risk surfaces.",
    "We understand the rhythm of a nursery: morning drop-off from 7:30am, structured play, snack time, outdoor play (with muddy wellies!), lunch, nap time, afternoon activities, pick-up from 4pm. Our crews work before opening (typically 6am start) and after close (typically 6:30pm start) — never during operating hours unless it's an emergency. Sleep room cleaning is done with the quietest possible equipment. Outdoor play area cleaning happens on weekends.",
  ],
  compliance: [
    {
      code: "Care Inspectorate",
      title: "Care Inspectorate Early Years National Care Standards",
      description:
        "Our protocols align to Care Inspectorate early years standards — covering environment cleanliness, infection control, and food hygiene in nursery settings.",
    },
    {
      code: "HSE COSHH Early Years",
      title: "HSE COSHH Guidance for Early Years Settings",
      description:
        "Every product carries a current COSHH datasheet and is independently certified for use around children. No chlorine-based sprays on soft furnishings. No quats on mouthing toys.",
    },
    {
      code: "FSA SFBB",
      title: "Food Standards Agency Safer Food Better Business",
      description:
        "Snack and meal preparation areas cleaned to FSA SFBB standard — the same standard your kitchen is inspected against by Environmental Health.",
    },
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "Bodily fluid response (vomit, faeces, urine) uses EN 14476 virucidal disinfectant — effective against norovirus, rotavirus, and other common nursery pathogens.",
    },
    {
      code: "Child Protection",
      title: "Child Protection Training",
      description:
        "Every crew member completes annual child protection training aligned to Scotland's National Guidance, with specific briefings on early years safeguarding concerns.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead/nappy-change mat spray nozzle descaling in our scope — critical for nurseries with water play.",
    },
  ],
  servicesDelivered: [
    {
      name: "School & Nursery Cleaning",
      href: "/services/school-nursery-cleaning",
      description:
        "Daily term-time cleaning plus deep cleans during closure periods for nurseries and preschools.",
    },
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description:
        "Whole-nursery disinfection during outbreak response (norovirus, hand-foot-mouth, chickenpox) with documented stand-down.",
    },
    {
      name: "Biohazard & Body Fluids Response",
      href: "/services/biohazard-cleaning",
      description:
        "Vomit, faeces, urine response with EN 14476 virucidal disinfectant and proper clinical waste disposal.",
    },
    {
      name: "Restroom & Nappy Change Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Adult and child toilets, nappy change stations, and potty-training area sanitation with documented frequencies.",
    },
    {
      name: "Carpet & Upholstery Cleaning",
      href: "/services/carpet-rug-cleaning",
      description:
        "Play area carpet hot-water extraction, soft-furnishing cleaning, and sleep room mat sanitisation.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Nursery exterior and interior glazing, including low-level windows accessible to children, on a scheduled rotation.",
    },
  ],
  challenges: [
    {
      icon: "Heart",
      title: "Child-safe product selection",
      description:
        "Children mouth toys, crawl on floors, and have sensitive skin. Every product is independently certified for early years use. No chlorine on soft furnishings, no quats on mouthing toys, no strong fragrances that trigger asthma.",
    },
    {
      icon: "Users",
      title: "Safeguarding in an early years setting",
      description:
        "Every cleaner is PVG-checked and completes annual child protection training. They're briefed on the nursery's designated safeguarding lead and trained to report any concern immediately. They never work alone with a child.",
    },
    {
      icon: "Zap",
      title: "Outbreak response — norovirus, hand-foot-mouth, chickenpox",
      description:
        "Nurseries are pathogen hotspots. Our outbreak response team mobilises within 4 hours with dedicated equipment and documented stand-down protocols coordinated with the nursery manager.",
    },
    {
      icon: "Clock",
      title: "Operating-hours sensitivity",
      description:
        "Crews work before opening (6am start) or after close (6:30pm start) — never during operating hours. Sleep room cleaning uses the quietest possible equipment. Outdoor play area cleaning happens on weekends.",
    },
    {
      icon: "Shield",
      title: "Floor-level cleaning focus",
      description:
        "Children live at floor level. Our protocol gives special attention to floors, low-level touchpoints, and soft furnishings — the surfaces children actually touch, not just the ones adults notice.",
    },
    {
      icon: "TrendingUp",
      title: "Tight nursery margins",
      description:
        "Private nurseries operate on tight margins, and funded entitlement rates are fixed. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any Care Inspectorate-critical task.",
    },
  ],
  stats: [
    { value: "75+", label: "nurseries served" },
    { value: "100%", label: "Care Inspectorate pass rate" },
    { value: "4h", label: "outbreak response SLA" },
    { value: "10+", label: "years in nursery cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Nursery walk-through",
      description:
        "Our regional manager walks the nursery with the manager. We map zones (play, sleep, food prep, nappy change, outdoor), identify Care Inspectorate-critical areas, and discuss operating hours.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Child-safe schedule & quote",
      description:
        "Within 2 business days you receive a written cleaning schedule with independently certified child-safe products, a COSHH register, and a fixed monthly fee. Deep cleans during closure periods quoted separately.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & PVG clearance",
      description:
        "PVG-checked, child-protection-trained crews are inducted to the nursery, introduced to staff and the safeguarding lead, and the first clean is supervised end-to-end.",
      duration: "Days 4–10",
    },
    {
      step: "04",
      title: "Ongoing delivery & audit",
      description:
        "Daily cleaning, outbreak response, Care Inspectorate audit prep, and quarterly review meetings. Deep cleans during Christmas, Easter, and summer closure periods.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Heart",
      title: "Independently certified child-safe products",
      description:
        "Every product independently certified for use in early years settings. No chlorine on soft furnishings, no quats on mouthing toys, no strong fragrances. Hypoallergenic protocols available on request.",
    },
    {
      icon: "Users",
      title: "PVG-checked, child-protection-trained",
      description:
        "Every crew member carries Disclosure Scotland PVG scheme membership and completes annual child protection training aligned to Scotland's National Guidance. Safeguarding is non-negotiable.",
    },
    {
      icon: "Zap",
      title: "4-hour outbreak response",
      description:
        "Norovirus, hand-foot-mouth, chickenpox, or scarlet fever response mobilised within 4 hours. Dedicated equipment, full PPE, documented stand-down protocol coordinated with the nursery manager.",
    },
    {
      icon: "Shield",
      title: "Floor-level cleaning focus",
      description:
        "Children live at floor level. Our protocol gives special attention to floors, low-level touchpoints, soft furnishings, and toy-cleaning zones. Not just the surfaces adults notice.",
    },
    {
      icon: "Clock",
      title: "Operating-hours sensitive",
      description:
        "Crews work before opening or after close — never during operating hours. Sleep room cleaning uses the quietest possible equipment. Outdoor area cleaning happens on weekends.",
    },
    {
      icon: "Building2",
      title: "Multi-nursery consolidated reporting",
      description:
        "Nursery groups get one account manager across all settings, one monthly report, identical protocols. Critical for governance and Care Inspectorate inspection prep.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "What products do you use around babies and toddlers?",
      a: "Every product is independently certified for use in early years settings. We avoid chlorine-based sprays on soft furnishings (respiratory irritant), avoid quaternary ammonium compounds on mouthing toys (residual chemical), and avoid strong-fragrance products (asthma trigger). For nurseries with children who have eczema or allergies, we use hypoallergenic protocols with independently certified products. Every product is pre-approved by the nursery manager and carries a current COSHH datasheet.",
    },
    {
      q: "How do you clean toys that children put in their mouths?",
      a: "Mouthing toys are cleaned by the nursery staff during the day (with our child-safe sanitiser) and deep-cleaned by our crew at the end of each session. The protocol: rinse under warm water to remove organic matter, soak in food-safe sanitiser at the correct dilution for the documented contact time, rinse thoroughly with potable water, air-dry on a clean towel. We never use quaternary ammonium compounds on mouthing toys.",
    },
    {
      q: "How do you handle a vomit or diarrhoea incident?",
      a: "Our crews don't handle these during operating hours — nursery staff do, using our response kit (PPE, absorbent granules, EN 14476 virucidal disinfectant, clinical waste bag). At the end of the session, our crew does a deep clean of the affected area with full disinfection, and a stand-down record is logged. If the incident indicates a possible outbreak (multiple cases), our outbreak response team is mobilised within 4 hours.",
    },
    {
      q: "Can you clean during nap time?",
      a: "Ideally not. Nap time cleaning is disruptive — even quiet equipment can wake light sleepers. We prefer to clean before opening or after close. If nap-time cleaning is unavoidable (e.g., a spill in another room requiring equipment passage through the sleep room), we coordinate with the manager to time it for the deepest part of the nap, and use the quietest possible methods.",
    },
    {
      q: "Do you clean outdoor play areas?",
      a: "Yes, but on a different schedule — typically weekends or during closure periods. Outdoor play equipment (climbing frames, play houses, sandpit covers) is sanitised monthly. Artificial grass is machine-swept and sanitised quarterly. Mud kitchen equipment is deep-cleaned termly. We coordinate with the manager to align outdoor cleaning with weather and usage patterns.",
    },
    {
      q: "What's your pricing model?",
      a: "Most nursery contracts are priced as a fixed monthly fee based on floor area, number of children registered, and visit frequency. Typical 60-place nurseries pay between £780 and £1,400 per month. Closure-period deep cleans are quoted separately. We provide a transparent quote after the nursery walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Karen Thomson",
      role: "Nursery Manager",
      facility: "Bramble Lodge Nursery, Edinburgh",
      quote:
        "Maundy Clean understands nurseries. The child-safe products, the floor-level cleaning focus, the nap-time sensitivity — all of it. Our last Care Inspectorate report scored 'excellent' on environment. That's a direct result of their work.",
      rating: 5,
    },
    {
      name: "Lindsay Whyte",
      role: "Operations Manager",
      facility: "Little Stars Nursery Group (5 settings)",
      quote:
        "Five nurseries, one account manager, one report. The consistency across the group makes Care Inspectorate inspections straightforward — same protocols, same records, same outcome. Outbreak response at our Dundee setting was textbook.",
      rating: 5,
    },
    {
      name: "Fiona MacRae",
      role: "Nursery Manager",
      facility: "Sunshine Nursery, Inverness",
      quote:
        "Same crew, every evening. They know the children by name (from the photo wall), they know the play zones, they know which toys get mouthed most. That continuity is what nursery cleaning actually requires.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Primary & Secondary Schools",
      href: "/industries/schools",
      description:
        "Primary, secondary, and ASN school cleaning with Care Inspectorate and Education Scotland alignment.",
    },
    {
      name: "Training & Tutoring Centres",
      href: "/industries/training-tutoring-centres",
      description:
        "Training centre and tutoring facility cleaning with flexible scheduling around classes.",
    },
    {
      name: "Universities & Colleges",
      href: "/industries/universities-colleges",
      description:
        "University campus cleaning at scale — labs, libraries, halls, student unions.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
      alt: "Nursery cleaning",
      caption: "Out-of-hours nursery deep clean — play area carpet extraction, touchpoint sanitising",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Nursery colour-coded equipment",
      caption: "Colour-coded zone equipment — separate kit for nappy change, food prep, play, sleep",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Nursery kitchen cleaning",
      caption: "Snack preparation area cleaned to FSA SFBB standard",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Nursery floor care",
      caption: "Floor-level cleaning focus — the surface children actually touch",
    },
  ],
};

// ============================================================
// Industry #12 — Training & Tutoring Centres (Education)
// ============================================================
export const trainingTutoringCentres: IndustryDetail = {
  slug: "training-tutoring-centres",
  name: "Training & Tutoring Centres",
  category: "Education",
  tagline: "Flexible cleaning for adult learning, professional training, and after-school tutoring centres.",
  heroHeadline: "A learning space\nthat feels\nprofessional.",
  heroSubhead:
    "We clean private training centres, professional development facilities, language schools, and after-school tutoring centres across Scotland. Flexible scheduling around classes, low-allergen products, and presentation standards that match your brand.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  metaTitle: "Training & Tutoring Centre Cleaning Scotland | Flexible Scheduling | Maundy Clean",
  metaDescription:
    "Training and tutoring centre cleaning across Scotland. Adult learning, professional training, language schools, after-school tutoring. Flexible scheduling. Low-allergen. PVG-checked for child-facing settings.",
  overviewParagraphs: [
    "Training and tutoring centres occupy a unique position — they're educational environments, but they operate commercially with paying clients who expect presentation standards closer to a premium office than a school. Maundy Clean has spent over a decade inside Scottish training and tutoring facilities, from 5-room after-school tutoring centres to 30-classroom professional training facilities serving corporate clients.",
    "Our training centre division operates a flexible-schedule model. Most centres need cleaning either before opening (typically 6am start for corporate training facilities) or after close (typically 9pm start for after-school tutoring). Some centres need both. Some need weekend deep cleans. Some need surge capacity during school holiday intensive courses. We provide all of it under one contract, with one account manager and one monthly report.",
    "We understand the rhythm of a training centre: corporate training typically runs 9am–5pm with a lunch break; after-school tutoring typically runs 3:30pm–8pm with back-to-back 1-hour sessions; language schools often have morning and afternoon cohorts; weekend intensive courses run all day Saturday and Sunday. Our crews work around all of it — early-morning reset, evening deep clean, weekend rotation, or surge capacity for intensive weeks. We never disrupt a class in progress.",
  ],
  compliance: [
    {
      code: "HSE",
      title: "HSE Cleaning in Educational Environments",
      description:
        "We follow HSE guidance on cleaning in educational environments — including safe use of chemicals, equipment storage, and slip-risk management.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-allergen, low-fragrance products as standard, especially in facilities with asthmatic learners.",
    },
    {
      code: "Child Protection",
      title: "Child Protection Training (for child-facing settings)",
      description:
        "For tutoring centres serving under-18s, every crew member is PVG-checked and completes annual child protection training aligned to Scotland's National Guidance.",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Crews are trained in client confidentiality. Tutoring materials, exam papers, and learner records are never disturbed during cleaning.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing and temperature checks in staff and learner kitchen facilities — closing a common audit gap.",
    },
  ],
  servicesDelivered: [
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning",
      description:
        "Daily office cleaning for training centre reception, admin areas, and staff rooms.",
    },
    {
      name: "Co-Working Space Cleaning",
      href: "/services/co-working-space-cleaning",
      description:
        "Hot-desk and shared-space cleaning for training facilities with drop-in work areas.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Term-time maintenance and holiday deep clean of training centre floors — VCT, hardwood, carpet.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Learner and staff WCs descaled, disinfected, and re-stocked with audit-ready records on every visit.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Training centre exterior and interior glazing, including classroom partition glass, on a scheduled rotation.",
    },
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description:
        "Whole-centre disinfection during outbreak response or between intensive course cohorts.",
    },
  ],
  challenges: [
    {
      icon: "Clock",
      title: "Flexible scheduling around classes",
      description:
        "Training centres run on different schedules — 9–5 corporate, 3:30–8 after-school, weekend intensives. Our crews work around all of it. We never disrupt a class in progress.",
    },
    {
      icon: "Users",
      title: "Adult learner presentation expectations",
      description:
        "Adult learners paying for training expect presentation standards closer to a premium office than a school. Our crews deliver five-star-hotel standards — streak-free glass, polished floors, fresh-smelling entrance.",
    },
    {
      icon: "Shield",
      title: "Child-safeguarding for tutoring centres",
      description:
        "For tutoring centres serving under-18s, every cleaner is PVG-checked and completes annual child protection training. They're briefed on the centre's safeguarding lead and trained to report concerns immediately.",
    },
    {
      icon: "Zap",
      title: "Surge capacity for intensive courses",
      description:
        "School holiday intensive tutoring, exam-cram weeks, summer school programmes — these create surge demand. We provide surge capacity with trained crews, no notice required for existing clients.",
    },
    {
      icon: "Heart",
      title: "Allergen and asthma management",
      description:
        "Learners have asthma and allergies. We use low-allergen, low-fragrance, low-VOC products as standard. Spray disinfectants are never used during operating hours — only wipes or pre-saturated cloths.",
    },
    {
      icon: "TrendingUp",
      title: "Commercial training margins",
      description:
        "Training centres operate on thin margins, particularly in competitive urban markets. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any client-visible standard.",
    },
  ],
  stats: [
    { value: "45+", label: "training centres served" },
    { value: "98%", label: "schedule hit rate" },
    { value: "4.7/5", label: "avg client satisfaction" },
    { value: "9+", label: "years in training centre cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Centre walk-through",
      description:
        "Our regional manager walks the centre with the operations manager. We map zones (classrooms, reception, staff room, WCs), identify scheduling constraints, and discuss peak periods.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Flexible schedule & quote",
      description:
        "Within 2 business days you receive a written cleaning schedule built around your class times, a COSHH register, and a fixed monthly fee. Deep cleans and surge capacity quoted separately.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A PVG-checked, brand-trained crew is inducted to the centre, introduced to staff, and the first clean is supervised end-to-end. For child-facing settings, safeguarding briefing is included.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & review",
      description:
        "Daily cleaning, monthly KPI reports, quarterly review meetings. Surge capacity for intensive course periods booked in advance with capped surge pricing.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Clock",
      title: "Flexible scheduling around classes",
      description:
        "Early morning, evening, weekend, or surge capacity for intensives. We work around your class schedule, never the other way round. Class disruption is zero.",
    },
    {
      icon: "Users",
      title: "Adult learner presentation standards",
      description:
        "Paying adult learners expect premium presentation. Streak-free glass, polished floors, fresh-smelling entrance, spotless WCs — the details clients actually notice.",
    },
    {
      icon: "Shield",
      title: "PVG-checked for child-facing settings",
      description:
        "For tutoring centres serving under-18s, every crew member carries PVG scheme membership and completes annual child protection training. Safeguarding is non-negotiable.",
    },
    {
      icon: "Zap",
      title: "Surge capacity for intensive courses",
      description:
        "School holiday intensives, exam-cram weeks, summer schools — we provide extra crews with 1 week's notice for existing clients. Surge pricing transparent and capped at 1.5x.",
    },
    {
      icon: "Heart",
      title: "Allergen and asthma-aware",
      description:
        "Low-allergen, low-fragrance, low-VOC products as standard. Spray disinfectants never used during operating hours. Hypoallergenic protocols available on request.",
    },
    {
      icon: "Building2",
      title: "Multi-centre consolidated reporting",
      description:
        "Training groups get one account manager across all centres, one monthly report, identical protocols. Critical for governance and brand consistency.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Can you clean around back-to-back tutoring sessions?",
      a: "Yes. Our standard model for after-school tutoring centres is an evening deep clean starting after the last session (typically 9pm). For centres with back-to-back 1-hour sessions, we can also provide a 5-minute turnaround touch-up crew between sessions — wiping down desks, sanitising shared equipment, emptying the bin. Class disruption is zero.",
    },
    {
      q: "How do you handle child-safeguarding in a tutoring centre?",
      a: "For tutoring centres serving under-18s, every crew member carries Disclosure Scotland PVG scheme membership and completes annual child protection training aligned to Scotland's National Guidance. They're briefed on the centre's designated safeguarding lead, trained to report any concern immediately, and never work alone with a child. Crews work outside class hours wherever possible.",
    },
    {
      q: "Can you provide surge capacity for school holiday intensive courses?",
      a: "Yes. Existing clients get surge capacity with 1 week's notice — extra crew, extended hours, and dedicated touch-up teams during intensive weeks. Surge pricing is transparent and capped at 1.5x normal rate. We pre-book intensive-week deep cleans before the course starts, so the centre is pristine for the new cohort.",
    },
    {
      q: "What products do you use around adult learners with allergies?",
      a: "Low-allergen, low-fragrance, low-VOC products as standard. We avoid spray disinfectants during operating hours — only pre-saturated wipes or pour-and-wipe methods. For centres with learners who have severe allergies, we use hypoallergenic protocols with independently certified products. Every product is pre-approved by the centre manager and carries a current COSHH datasheet.",
    },
    {
      q: "Do you handle exam paper and assessment materials?",
      a: "No. Exam papers, assessment materials, and learner records are never touched by our crews. They're explicitly briefed on entry that desks with papers on them are no-go zones. If a desk needs cleaning, the centre staff clear the papers first. This is reinforced at every quarterly review and is part of induction.",
    },
    {
      q: "What's your pricing model?",
      a: "Most training centre contracts are priced as a fixed monthly fee based on floor area, number of classrooms, and visit frequency. Typical 5-classroom training centres pay between £680 and £1,200 per month. Surge capacity and deep cleans quoted separately. We provide a transparent quote after the centre walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Jennifer Walker",
      role: "Centre Director",
      facility: "Kip McGrath Education Centre, Glasgow",
      quote:
        "Maundy Clean has been with us for three years. Same crew, every evening. They know our classrooms, they know our safeguarding protocol, they know not to touch the desks with papers on. Five-star presentation, every morning, for our parents and pupils.",
      rating: 5,
    },
    {
      name: "David Ross",
      role: "Operations Manager",
      facility: "Scottrain Professional Development, Edinburgh",
      quote:
        "Corporate clients expect premium presentation — and Maundy Clean delivers. Streak-free glass, polished floors, fresh entrance. Surge capacity for our summer intensive programme was seamless. Surge pricing was transparent and capped. Couldn't ask for more.",
      rating: 5,
    },
    {
      name: "Maria Conti",
      role: "Centre Manager",
      facility: "LinguaTutor Edinburgh (3 centres)",
      quote:
        "Three language centres, one account manager, one report. Identical protocols, identical standards. Our corporate clients (who send staff for language training) consistently comment on the cleanliness of our centres. That's a direct revenue impact.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Primary & Secondary Schools",
      href: "/industries/schools",
      description:
        "Primary, secondary, and ASN school cleaning with Care Inspectorate alignment.",
    },
    {
      name: "Nurseries & Preschools",
      href: "/industries/nurseries-preschools",
      description:
        "Nursery and preschool cleaning with Care Inspectorate early years alignment.",
    },
    {
      name: "Corporate Offices",
      href: "/industries/corporate-offices",
      description:
        "Corporate office cleaning for training centres with corporate clients and presentation expectations.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
      alt: "Training centre cleaning",
      caption: "Pre-opening classroom reset — desks, floor, touchpoints, whiteboards",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Training centre floor care",
      caption: "Premium presentation — VCT strip & re-seal on corporate training centre floor",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Training centre reception cleaning",
      caption: "Reception presentation — the first thing corporate clients see",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Training centre restroom sanitation",
      caption: "Learner and staff WCs — the detail clients notice",
    },
  ],
};

// ============================================================
// Industry #13 — Corporate Offices (Commercial & Office)
// ============================================================
export const corporateOffices: IndustryDetail = {
  slug: "corporate-offices",
  name: "Corporate Offices",
  category: "Commercial & Office",
  tagline: "HQs, business centres, and business parks — cleaned to a standard your CEO would notice.",
  heroHeadline: "An office that\nreflects your brand\nbefore the meeting starts.",
  heroSubhead:
    "We clean corporate HQs, business centres, and business park offices across Scotland. Brand-standard presentation, boardroom-ready standards, and out-of-hours discretion. Day porter services, nightly janitorial, and quarterly deep cleans — all under one account manager.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  metaTitle: "Corporate Office Cleaning Scotland | HQs & Business Parks | Maundy Clean",
  metaDescription:
    "Corporate office cleaning across Scotland. HQs, business centres, business parks. Brand-standard presentation, boardroom-ready, out-of-hours discretion. Day porter, nightly janitorial, quarterly deep cleans.",
  overviewParagraphs: [
    "Corporate office cleaning is the discipline of presentation. The boardroom has to be flawless before the 9am pitch. The CEO's office has to look like the CEO's office. The reception has to make visitors feel they've arrived somewhere serious. Maundy Clean has spent over a decade inside Scottish corporate offices, from 20-person professional services firms in Edinburgh to 2,000-staff corporate HQs in Glasgow.",
    "Our corporate division operates a three-layer model: a day porter (8am–6pm) handling reception refresh, meeting room reset, kitchen restock, and ad-hoc requests; a nightly janitorial team (7pm–11pm) handling desk wiping, floor mopping, kitchen deep clean, and WC sanitation; and a quarterly deep clean team handling carpet extraction, upholstery, window cleaning, and high-level dusting. Every layer is staffed by trained, vetted, uniformed crews who work discreetly around your staff.",
    "We understand the rhythm of a corporate office: morning arrival peak 8:30–9:30am, lunch peak 12–2pm, meeting-heavy mornings, quiet post-lunch, evening departure 5:30–6:30pm. Our crews work around all of it — day porters handle meeting room resets between sessions, nightly janitorial does the heavy work after close, and quarterly deep cleans happen over weekends to avoid disruption. We never enter a private office without authorisation, never move papers on desks, and never discuss what we see.",
  ],
  compliance: [
    {
      code: "BSIF",
      title: "British Cleaning Council Standards",
      description:
        "Our protocols align to British Cleaning Council recommended standards for office cleaning — covering frequencies, methods, and audit criteria.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-fragrance, low-VOC products as standard for staff with allergies or sensitivities.",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Crews are trained in client confidentiality. Desks with documents are never touched, screens are never logged into, and confidential waste is never handled without authorisation.",
    },
    {
      code: "HSE DSE",
      title: "HSE Display Screen Equipment Guidance",
      description:
        "Our cleaning of monitors, keyboards, and DSE equipment follows HSE guidance — no spray-on screens, no chemical residue on keyboards.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling in staff shower facilities (where present).",
    },
    {
      code: "ISO 14001",
      title: "Environmental Management System",
      description:
        "Our corporate office cleaning aligns to ISO 14001 environmental principles — eco-labelled chemicals, reduced single-use plastics, waste segregation at source.",
    },
  ],
  servicesDelivered: [
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning",
      description:
        "Daily office cleaning — desks, kitchens, WCs, meeting rooms, reception. Nightly or early-morning shifts.",
    },
    {
      name: "Corporate Facility Cleaning",
      href: "/services/corporate-facility-cleaning",
      description:
        "Full corporate facility — HQs, business centres, multi-tenant buildings, business parks.",
    },
    {
      name: "Day Porter Services",
      href: "/services/day-porter-services",
      description:
        "Day-shift porter — reception refresh, meeting room reset, kitchen restock, ad-hoc requests.",
    },
    {
      name: "Nightly Janitorial",
      href: "/services/nightly-janitorial",
      description:
        "Overnight deep clean — desk wiping, floor mopping, kitchen deep clean, WC sanitation.",
    },
    {
      name: "Carpet & Upholstery Cleaning",
      href: "/services/carpet-rug-cleaning",
      description:
        "Quarterly carpet extraction, upholstery cleaning, and chair refresh for boardrooms and meeting rooms.",
    },
    {
      name: "Window Cleaning (Low & High Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Office exterior and interior glazing, including atrium windows — IRATA-certified rope-access for high-rise.",
    },
  ],
  challenges: [
    {
      icon: "Shield",
      title: "Confidentiality around sensitive documents",
      description:
        "Corporate offices contain commercially sensitive documents, screens, and conversations. Our crews never touch desks with papers, never log into screens, and never discuss what they see. GDPR-compliant throughout.",
    },
    {
      icon: "Clock",
      title: "Out-of-hours discretion",
      description:
        "Most corporate offices need cleaning outside working hours. Our crews work 7pm–11pm nightly, or 5am–7am early-morning shifts. Day porters work discreetly alongside staff — quiet equipment, low-profile uniforms.",
    },
    {
      icon: "Users",
      title: "Boardroom-ready presentation",
      description:
        "The boardroom has to be flawless before the 9am pitch. Our day porter resets meeting rooms between sessions — chairs aligned, glasses polished, whiteboards wiped, floor checked. Every meeting starts with a pristine room.",
    },
    {
      icon: "Zap",
      title: "Ad-hoc request response",
      description:
        "Spill in reception. Meeting room needed in 10 minutes. CEO's office needs a refresh before a visitor. Our day porter handles ad-hoc requests within 5 minutes — radio-dispatched, customer-aware, discreet.",
    },
    {
      icon: "Building2",
      title: "Multi-tenant and multi-floor complexity",
      description:
        "Business centres and multi-tenant buildings need consistent protocols across tenants and floors. We provide floor-specific schedules, tenant-aware crews, and consolidated building reporting.",
    },
    {
      icon: "TrendingUp",
      title: "Service charge budget scrutiny",
      description:
        "Service charges are scrutinised by tenants. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any client-visible standard.",
    },
  ],
  stats: [
    { value: "240+", label: "corporate offices served" },
    { value: "98%", label: "schedule hit rate" },
    { value: "5 min", label: "ad-hoc response SLA" },
    { value: "12+", label: "years in corporate cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Office walk-through",
      description:
        "Our regional manager walks the office with the facilities manager. We map zones (reception, desks, meeting rooms, kitchen, WCs, executive suites), identify presentation standards, and discuss scheduling.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Three-layer schedule & quote",
      description:
        "Within 2 business days you receive a written schedule covering day porter, nightly janitorial, and quarterly deep clean layers. COSHH register and fixed monthly fee included.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A uniformed, vetted, confidentiality-briefed crew is inducted to the office, introduced to facilities team, and the first clean is supervised end-to-end.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & review",
      description:
        "Daily cleaning, monthly KPI reports, quarterly review meetings. Day porter handles ad-hoc requests within 5 minutes. Deep cleans scheduled over weekends.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Shield",
      title: "GDPR-compliant confidentiality",
      description:
        "Crews trained in client confidentiality. Desks with documents never touched. Screens never logged into. Confidential waste handled only with authorisation. Privacy is non-negotiable.",
    },
    {
      icon: "Clock",
      title: "Three-layer operational model",
      description:
        "Day porter for live response, nightly janitorial for heavy work, quarterly deep clean for the details. Three coordinated teams, one account manager, one monthly report.",
    },
    {
      icon: "Users",
      title: "Boardroom-ready presentation",
      description:
        "Meeting rooms reset between sessions by day porter — chairs aligned, glasses polished, whiteboards wiped, floor checked. Every meeting starts with a pristine room.",
    },
    {
      icon: "Zap",
      title: "5-minute ad-hoc response",
      description:
        "Spill in reception. Meeting room needed urgently. Executive office refresh. Our day porter handles ad-hoc requests within 5 minutes — radio-dispatched, discreet, customer-aware.",
    },
    {
      icon: "Building2",
      title: "Multi-tenant consolidated reporting",
      description:
        "Business centres get floor-specific schedules, tenant-aware crews, and consolidated building reporting. One account manager, one monthly report, consistent standards.",
    },
    {
      icon: "TrendingUp",
      title: "Service charge transparency",
      description:
        "Monthly KPI reports aligned to service charge audit criteria. Tenants see exactly what they're paying for. Quarterly frequency reviews deliver 8–12% cost-out.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you handle confidential documents on desks?",
      a: "Crews are explicitly briefed that desks with documents are no-go zones. They don't move papers to wipe underneath, they don't tidy, they don't read. If a desk needs cleaning, the staff member clears it first. This is reinforced at every quarterly review and is part of induction. For executive suites and boardrooms, additional confidentiality briefings apply.",
    },
    {
      q: "Can you provide a day porter for meeting room reset?",
      a: "Yes. Day porter service is one of our core corporate offerings. The porter is on-site 8am–6pm, radio-dispatched, and handles meeting room resets between sessions, reception refresh, kitchen restock, and ad-hoc requests. Response time within 5 minutes. Day porters wear branded uniforms and are trained in customer service etiquette.",
    },
    {
      q: "How do you handle executive suites and C-suite offices?",
      a: "Executive suites get dedicated cleaners — typically the same person every visit, who knows the executive's preferences (specific paper handling, screen-off protocol, plant watering, calendar-aware scheduling). Cleaning happens outside the executive's working hours wherever possible, and never during meetings. Additional confidentiality briefings apply.",
    },
    {
      q: "Can you cover multi-tenant business centres?",
      a: "Yes. Multi-tenant business centres are one of our specialisms. We provide floor-specific schedules, tenant-aware crews (with different access protocols per tenant), and consolidated building reporting for the centre manager. Service charge allocation is documented and auditable. Tenants see exactly what they're paying for.",
    },
    {
      q: "Do you supply consumables like paper towels, soap, and bin liners?",
      a: "Yes, optional. We can include a consumables package — paper hand towels, toilet tissue, hand soap, sanitising wipes, bin liners, dishwasher tablets — at a fixed monthly add-on. Many corporate clients find this simpler than managing multiple suppliers. Stock levels monitored automatically; re-ordering handled by us.",
    },
    {
      q: "What's your pricing model?",
      a: "Most corporate office contracts are priced as a fixed monthly fee based on floor area, headcount, and visit frequency. Typical 100-staff corporate offices pay between £1,800 and £3,200 per month. Day porter service is an additional fixed monthly fee. Deep cleans quoted separately. We provide a transparent quote after the office walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Andrew Stewart",
      role: "Facilities Director",
      facility: "Standard Life Aberdeen, Edinburgh",
      quote:
        "Maundy Clean has run our three-layer model for five years. Day porter response is genuinely 5 minutes, boardroom presentation is flawless, and the confidentiality protocol is bulletproof. Service charge complaints have dropped to near-zero.",
      rating: 5,
    },
    {
      name: "Sarah Bingham",
      role: "Office Manager",
      facility: "Anderson Strathern LLP, Glasgow",
      quote:
        "Confidentiality matters in a law firm. Maundy Clean's crews are trained, briefed, and respectful of client papers and privileged information. Same crew every night, same standards, no breaches in four years.",
      rating: 5,
    },
    {
      name: "Mark Devlin",
      role: "Centre Manager",
      facility: "Cadogan Square Business Centre, Glasgow",
      quote:
        "Multi-tenant building, 14 floors, 22 tenants. Maundy Clean handles it all — floor-specific schedules, tenant-aware crews, consolidated reporting. Tenants are happier, service charge is more transparent, and we've saved 9% versus the previous contractor.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Co-Working Spaces",
      href: "/industries/co-working-spaces",
      description:
        "Co-working space cleaning with hot-desk protocols and high-turnover membership environments.",
    },
    {
      name: "Property Management Firms",
      href: "/industries/property-management-firms",
      description:
        "Property management firm cleaning — common areas, managed offices, residential blocks.",
    },
    {
      name: "Estate Agencies",
      href: "/industries/estate-agencies",
      description:
        "Estate agency cleaning — high-street branches, premium presentation, property viewing-ready standards.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Corporate office cleaning",
      caption: "Nightly janitorial — desk wiping, floor mopping, kitchen deep clean",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/2505b6c51368.jpg",
      alt: "Corporate boardroom cleaning",
      caption: "Boardroom-ready presentation — chairs aligned, glasses polished, whiteboards wiped",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Corporate reception cleaning",
      caption: "Reception presentation — the first thing visitors see",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Corporate kitchen cleaning",
      caption: "Staff kitchen deep clean — surfaces, appliances, floors",
    },
  ],
};

// ============================================================
// Industry #14 — Co-Working Spaces (Commercial & Office)
// ============================================================
export const coWorkingSpaces: IndustryDetail = {
  slug: "co-working-spaces",
  name: "Co-Working Spaces",
  category: "Commercial & Office",
  tagline: "Hot-desk protocols, high-turnover membership environments, and presentation that drives renewals.",
  heroHeadline: "A co-working space\nthat members\nwant to renew in.",
  heroSubhead:
    "We clean co-working spaces, serviced offices, and flexible workspaces across Scotland. Hot-desk protocols for shared surfaces, breakout area presentation, and member-facing discretion. Day porters, nightly resets, and event-ready surge capacity.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  metaTitle: "Co-Working Space Cleaning Scotland | Hot-Desk Protocols | Maundy Clean",
  metaDescription:
    "Co-working space cleaning across Scotland. Hot-desk protocols, breakout areas, member-facing discretion. Day porters, nightly resets, event-ready surge capacity. PVG-checked, uniformed crews.",
  overviewParagraphs: [
    "Co-working space cleaning is the discipline of high-turnover shared surfaces. Members hot-desk, share breakout areas, book meeting rooms by the hour, host clients in lounges, and expect everything to feel fresh and premium every time they walk in. Maundy Clean has spent over a decade inside Scottish co-working spaces, from 50-desk independent flexi-space operators to multi-site serviced office chains.",
    "Our co-working division operates a member-aware model. A day porter (8am–8pm) handles continuous touchpoint cleaning — desk resets between users, meeting room turnover between bookings, lounge refresh, kitchen restock, phone-booth sanitisation. A nightly reset team (10pm–2am) handles the deep work — floor machine-scrubbing, kitchen deep clean, WC sanitation, carpet spot-cleaning. Event-ready surge capacity handles member events, workshops, and networking sessions.",
    "We understand the rhythm of a co-working space: morning rush 8:30–10am as members arrive and grab a desk, lunch peak 12–2pm with kitchen and lounge pressure, afternoon meeting-heavy, evening wind-down 5–7pm, evening events 6–9pm, then overnight reset. Our crews work around all of it — day porters are part of the member experience (friendly, branded uniforms, never intrusive), nightly reset happens after the last member leaves.",
  ],
  compliance: [
    {
      code: "BSIF",
      title: "British Cleaning Council Standards",
      description:
        "Our protocols align to British Cleaning Council recommended standards for flexi-space cleaning — covering frequencies, methods, and audit criteria.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-fragrance, food-safe sanitisers in kitchens and member-facing areas.",
    },
    {
      code: "HSE DSE",
      title: "HSE Display Screen Equipment Guidance",
      description:
        "Shared DSE equipment (monitors, keyboards, mice) cleaned with screen-safe wipes between users — critical for hot-desk hygiene.",
    },
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "Shared touchpoints (door handles, light switches, lift buttons) wiped with EN 14476 virucidal disinfectant — protecting members from cross-contamination.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling in member shower facilities (where present).",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Crews trained in member confidentiality. Hot-desks with documents are never touched. Member meeting room whiteboards are wiped on request only.",
    },
  ],
  servicesDelivered: [
    {
      name: "Co-Working Space Cleaning",
      href: "/services/co-working-space-cleaning",
      description:
        "Full co-working space cleaning — hot-desks, meeting rooms, lounges, kitchens, phone booths, WCs.",
    },
    {
      name: "Day Porter Services",
      href: "/services/day-porter-services",
      description:
        "Day-shift porter — desk resets, meeting room turnover, kitchen restock, member-facing touchpoint cleaning.",
    },
    {
      name: "Nightly Janitorial",
      href: "/services/nightly-janitorial",
      description:
        "Overnight reset — floor machine-scrubbing, kitchen deep clean, WC sanitation, carpet spot-cleaning.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Member and staff WCs descaled, disinfected, and re-stocked — high-traffic, high-expectation.",
    },
    {
      name: "Carpet & Upholstery Cleaning",
      href: "/services/carpet-rug-cleaning",
      description:
        "Lounge furniture cleaning, breakout area carpet extraction, and meeting room chair refresh.",
    },
    {
      name: "Electrostatic Disinfection",
      href: "/services/electrostatic-disinfection-add-on",
      description:
        "Whole-space electrostatic spraying for rapid touchpoint disinfection during flu season or outbreak response.",
    },
  ],
  challenges: [
    {
      icon: "Zap",
      title: "Hot-desk surface turnover",
      description:
        "Members hot-desk — shared surfaces turn over every few hours. Our day porter wipes down monitors, keyboards, mice, and desk surfaces between users with screen-safe, food-safe sanitiser. Cross-contamination risk minimised.",
    },
    {
      icon: "Clock",
      title: "Meeting room turnover between bookings",
      description:
        "Meeting rooms are booked by the hour. Our day porter resets between bookings — chairs aligned, whiteboards wiped (with authorisation), glasses cleared, floor checked. Every meeting starts with a pristine room.",
    },
    {
      icon: "Users",
      title: "Member-facing discretion",
      description:
        "Members pay premium rates and expect premium experience. Day porters are friendly, branded, customer-aware — part of the member experience, not a hidden back-of-house function. Never intrusive on calls or meetings.",
    },
    {
      icon: "Heart",
      title: "Kitchen and lounge pressure",
      description:
        "Kitchens and lounges are the most-used, most-judged spaces in a co-working facility. Our day porter restocks continuously, the nightly team deep cleans, and spot-cleaning happens throughout the day.",
    },
    {
      icon: "Building2",
      title: "Event-ready surge capacity",
      description:
        "Member events, workshops, networking sessions create surge demand. We provide event-response teams with 48 hours' notice — set-up, during-event porter, post-event reset.",
    },
    {
      icon: "TrendingUp",
      title: "Membership retention pressure",
      description:
        "Member retention is driven by experience. Cleanliness is consistently in the top 3 factors in renewal decisions. Our protocols directly support your renewal rates — and we measure it.",
    },
  ],
  stats: [
    { value: "32+", label: "co-working spaces served" },
    { value: "94%", label: "member cleanliness satisfaction" },
    { value: "5 min", label: "meeting room reset SLA" },
    { value: "9+", label: "years in flexi-space cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Space walk-through",
      description:
        "Our regional manager walks the space with the community manager or operations lead. We map zones (hot-desks, meeting rooms, lounges, kitchens, phone booths, WCs, events space), discuss member rhythm, and identify surge periods.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Member-aware schedule & quote",
      description:
        "Within 2 business days you receive a written schedule covering day porter, nightly reset, and event surge. COSHH register and fixed monthly fee included. Event surge priced on a rate card.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first shift",
      description:
        "A uniformed, member-aware, confidentiality-briefed crew is inducted to the space, introduced to community team, and the first day shift is supervised end-to-end.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & review",
      description:
        "Daily cleaning, monthly KPI reports (including member satisfaction scores), quarterly review meetings. Event surge booked in advance with capped pricing.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Zap",
      title: "Hot-desk surface protocol",
      description:
        "Day porter wipes down monitors, keyboards, mice, and desk surfaces between users with screen-safe, food-safe sanitiser. Cross-contamination risk minimised. EN 14476 virucidal on shared touchpoints.",
    },
    {
      icon: "Clock",
      title: "Meeting room reset in 5 minutes",
      description:
        "Meeting rooms reset between bookings — chairs aligned, whiteboards wiped (with authorisation), glasses cleared, floor checked. Every meeting starts with a pristine room.",
    },
    {
      icon: "Users",
      title: "Member-facing discretion",
      description:
        "Day porters are friendly, branded, customer-aware — part of the member experience. Never intrusive on calls or in meetings. Trained in member-service etiquette.",
    },
    {
      icon: "Heart",
      title: "Kitchen and lounge focus",
      description:
        "Kitchens and lounges are the most-judged spaces. Continuous restock throughout the day, nightly deep clean, and spot-cleaning on demand. Always fresh, always stocked.",
    },
    {
      icon: "Building2",
      title: "Event-ready surge capacity",
      description:
        "Member events, workshops, networking — we provide event-response teams with 48 hours' notice. Set-up, during-event porter, post-event reset. Surge pricing transparent and capped.",
    },
    {
      icon: "TrendingUp",
      title: "Renewal-driven cleaning",
      description:
        "Cleanliness is in the top 3 factors in member renewal decisions. Our protocols directly support your renewal rates — and we measure it. Member satisfaction scores reported monthly.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you handle hot-desk cleaning without disrupting members?",
      a: "Day porters wipe down hot-desks between users — quickly, discreetly, with screen-safe sanitiser. If a member is on a call, we wait. If a member has documents open, we skip that desk and come back. Member experience always takes precedence over cleaning schedule.",
    },
    {
      q: "Can you reset meeting rooms between bookings?",
      a: "Yes — this is one of our core co-working services. Day porter resets between bookings: chairs aligned, whiteboards wiped (with member authorisation only), glasses cleared, bin emptied, floor checked. Typical reset takes 5 minutes. If a meeting overruns, the porter waits discreetly outside the room.",
    },
    {
      q: "How do you handle member events and workshops?",
      a: "Event surge capacity is available with 48 hours' notice for existing clients. We provide set-up cleaning before the event, a porter on-site during the event (handling spill response, restroom refresh, kitchen restock), and a full reset after the event. Event surge pricing is transparent and capped at 1.5x normal rate.",
    },
    {
      q: "What about confidential documents left on hot-desks?",
      a: "Hot-desks with documents are never touched. If a member has left documents on a desk, the day porter notes it and moves on. The documents are the member's responsibility — we never move, photograph, or read them. This is reinforced at every quarterly review and is part of induction. GDPR-compliant throughout.",
    },
    {
      q: "Can you supply consumables for kitchens and WCs?",
      a: "Yes, optional. We can include a consumables package — coffee, tea, milk, paper hand towels, toilet tissue, hand soap, sanitising wipes, dishwasher tablets — at a fixed monthly add-on. Many co-working operators find this simpler than managing multiple suppliers. Stock levels monitored automatically.",
    },
    {
      q: "What's your pricing model?",
      a: "Most co-working contracts are priced as a fixed monthly fee based on floor area, desk count, and member headcount. Typical 100-desk co-working spaces pay between £2,400 and £4,200 per month. Day porter is an additional fixed monthly fee. Event surge and deep cleans quoted separately. We provide a transparent quote after the space walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Catriona Ellis",
      role: "Community Manager",
      facility: "Codebase, Edinburgh",
      quote:
        "Maundy Clean's day porter team is genuinely part of our community. They know members by name, handle meeting room resets in 5 minutes, and member satisfaction with cleanliness is at 94%. Renewals are up 7% since they started.",
      rating: 5,
    },
    {
      name: "James Murphy",
      role: "Operations Director",
      facility: "Garage Workspace (3 sites, Glasgow)",
      quote:
        "Three co-working sites, one account manager, identical protocols. Event surge capacity has been flawless — our member events have never looked better. Confidentiality is bulletproof. Couldn't ask for more.",
      rating: 5,
    },
    {
      name: "Lucy Park",
      role: "Founder",
      facility: "The Suite Flexi-Space, Aberdeen",
      quote:
        "Hot-desk cleaning protocol is exactly what we needed. Members notice the difference — keyboards, mice, screens all wiped between users. Member feedback on cleanliness has gone from 'acceptable' to 'excellent'. Direct revenue impact.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Corporate Offices",
      href: "/industries/corporate-offices",
      description:
        "Corporate HQ and business park cleaning with brand-standard presentation.",
    },
    {
      name: "Property Management Firms",
      href: "/industries/property-management-firms",
      description:
        "Property management firm cleaning — common areas, managed offices, residential blocks.",
    },
    {
      name: "Training & Tutoring Centres",
      href: "/industries/training-tutoring-centres",
      description:
        "Training centre cleaning with flexible scheduling and adult learner presentation.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Co-working space cleaning",
      caption: "Day porter hot-desk reset — screen-safe sanitiser, member-aware discretion",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/2505b6c51368.jpg",
      alt: "Co-working meeting room reset",
      caption: "Meeting room turnover between bookings — 5-minute reset",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Co-working kitchen cleaning",
      caption: "Kitchen continuous restock — the most-judged space in a co-working facility",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Co-working lounge cleaning",
      caption: "Lounge upholstery and carpet spot-cleaning — premium presentation",
    },
  ],
};

// ============================================================
// Industry #15 — Property Management Firms (Commercial & Office)
// ============================================================
export const propertyManagementFirms: IndustryDetail = {
  slug: "property-management-firms",
  name: "Property Management Firms",
  category: "Commercial & Office",
  tagline: "Common areas, managed offices, residential blocks, and end-of-tenancy deep cleans — at portfolio scale.",
  heroHeadline: "A managed portfolio\nthat residents\nare proud to live in.",
  heroSubhead:
    "We clean for property management firms across Scotland — common areas of residential blocks, managed office suites, end-of-tenancy deep cleans, and communal areas of new-build developments. PVG-checked, resident-aware, with portfolio-scale consolidated reporting.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  metaTitle: "Property Management Cleaning Scotland | End-of-Tenancy | Maundy Clean",
  metaDescription:
    "Property management firm cleaning across Scotland. Common areas, managed offices, residential blocks, end-of-tenancy deep cleans. PVG-checked. Portfolio-scale consolidated reporting.",
  overviewParagraphs: [
    "Property management firm cleaning is a discipline of portfolio complexity. A typical Scottish property management firm looks after 20–200 buildings — mixed residential blocks, managed office suites, holiday-let portfolios, and new-build developments. Each building has different needs, different residents, different access arrangements — but the firm needs consistent standards and consolidated reporting across the portfolio. Maundy Clean has spent over a decade serving Scottish property management firms.",
    "Our property management division operates a portfolio model. A scheduled cleaning team handles regular common-area cleaning across the portfolio — typically weekly or fortnightly visits per building. A rapid-response team handles end-of-tenancy deep cleans, post-construction snagging, and ad-hoc requests. A specialist periodic team handles annual deep cleans, carpet extraction, and exterior window cleaning. All three teams report into a single account manager who is the property firm's one point of contact.",
    "We understand the rhythm of property management: end-of-month tenancy turnover peaks, quarterly building inspections, factor inspections, resident complaints that need immediate response, and annual AGM preparation. Our crews work around all of it — scheduled cleans happen on a documented rotation, end-of-tenancy deep cleans happen within 48 hours of request, and resident complaints trigger a same-day response. Every task is logged digitally and visible to the property firm in real time.",
  ],
  compliance: [
    {
      code: "BSIF",
      title: "British Cleaning Council Standards",
      description:
        "Our protocols align to British Cleaning Council recommended standards for residential and commercial common-area cleaning.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-fragrance products in residential common areas (allergy-aware) and food-safe sanitisers in managed office kitchens.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Floor slip-resistance testing, wet-floor signage, and spill response in communal areas aligned to HSE SLIPS guidance — critical for resident safety and liability protection.",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Crews trained in resident confidentiality. We never photograph residents, never discuss tenancy matters, and never enter private residences without authorisation.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling in communal shower rooms and managed office facilities.",
    },
    {
      code: "PUWER",
      title: "Provision and Use of Work Equipment Regulations",
      description:
        "All cleaning equipment is PUWER-compliant, PAT-tested, and risk-assessed for use in residential common areas with public access.",
    },
  ],
  servicesDelivered: [
    {
      name: "Property Management Cleaning",
      href: "/services/property-management-cleaning",
      description:
        "Portfolio-scale common area cleaning — residential blocks, managed offices, mixed-use developments.",
    },
    {
      name: "Move-In / Move-Out Cleaning",
      href: "/services/move-in-out-cleaning",
      description:
        "End-of-tenancy deep cleans — full property reset, deposit-return standard, factor-approved checklist.",
    },
    {
      name: "Post-Construction Cleaning",
      href: "/services/post-construction-cleaning",
      description:
        "Post-build snagging cleans, builder-dust removal, pre-handover presentation for new-build developments.",
    },
    {
      name: "Nightly Janitorial",
      href: "/services/nightly-janitorial",
      description:
        "Managed office nightly cleaning — desks, kitchens, WCs, meeting rooms, reception.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Communal floor care — VCT strip & re-seal, hardwood refinishing, carpet extraction, tile & grout deep cleaning.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Communal area glazing, stairwell windows, and entrance door glass on a scheduled rotation.",
    },
  ],
  challenges: [
    {
      icon: "Building2",
      title: "Portfolio complexity",
      description:
        "20–200 buildings, each with different needs. Our portfolio model handles scheduled, rapid-response, and periodic teams under one account manager. Consistent standards, consolidated reporting.",
    },
    {
      icon: "Clock",
      title: "End-of-tenancy turnaround deadlines",
      description:
        "Tenants move out, new tenants move in — and the deep clean has to happen in between. Our rapid-response team handles end-of-tenancy deep cleans within 48 hours of request, deposit-return standard.",
    },
    {
      icon: "Users",
      title: "Resident-aware operation",
      description:
        "Residents live in the buildings we clean. Our crews are PVG-checked, polite, never intrusive, and trained to handle resident complaints professionally. We never photograph or discuss residents.",
    },
    {
      icon: "Zap",
      title: "Rapid response to resident complaints",
      description:
        "A resident complaint about a spill, a missed clean, or a dirty lift is a property manager's headache. Our rapid-response team handles same-day response to any flagged issue — documented, time-stamped, resolved.",
    },
    {
      icon: "Shield",
      title: "Factor inspection readiness",
      description:
        "Factor inspections happen quarterly. Our digital cleaning records mean every common area is inspection-ready — every task logged, every floor checked, every bin emptied on schedule.",
    },
    {
      icon: "TrendingUp",
      title: "Service charge budget pressure",
      description:
        "Service charges are scrutinised by residents and owners. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any auditable standard.",
    },
  ],
  stats: [
    { value: "45+", label: "property firms served" },
    { value: "1,800+", label: "buildings under management" },
    { value: "48h", label: "end-of-tenancy turnaround SLA" },
    { value: "11+", label: "years in property cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Portfolio scoping",
      description:
        "Our account director meets the property firm's operations director to scope the portfolio — building types, common area sizes, access arrangements, current cleaning standards.",
      duration: "Days 1–3",
    },
    {
      step: "02",
      title: "Portfolio schedule & quote",
      description:
        "Within 5 business days you receive a written schedule covering scheduled, rapid-response, and periodic teams across the portfolio. COSHH register and consolidated monthly fee included.",
      duration: "Days 3–5",
    },
    {
      step: "03",
      title: "Crew mobilisation",
      description:
        "PVG-checked, resident-aware crews are mobilised per building. Each building gets a documented cleaning schedule, access protocol, and named regional supervisor.",
      duration: "Days 5–14",
    },
    {
      step: "04",
      title: "Portfolio delivery & reporting",
      description:
        "Scheduled cleaning, rapid response, periodic deep cleans. Monthly portfolio report covering all buildings. Quarterly review with operations director. Factor inspection prep included.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Building2",
      title: "Portfolio-scale model",
      description:
        "20–200 buildings under one contract. Scheduled, rapid-response, and periodic teams. One account manager, one monthly portfolio report, consistent standards across every building.",
    },
    {
      icon: "Clock",
      title: "48-hour end-of-tenancy turnaround",
      description:
        "Rapid-response team handles end-of-tenancy deep cleans within 48 hours of request. Deposit-return standard. Factor-approved checklist. New tenant ready on schedule.",
    },
    {
      icon: "Users",
      title: "Resident-aware, PVG-checked crews",
      description:
        "Crews trained in resident-aware operation — polite, never intrusive, never photograph or discuss residents. PVG scheme membership throughout. Complaints handled professionally.",
    },
    {
      icon: "Zap",
      title: "Same-day complaint response",
      description:
        "Resident complaints trigger same-day response. Documented, time-stamped, resolved. Property manager informed throughout. No more chasing contractors for updates.",
    },
    {
      icon: "Shield",
      title: "Factor inspection-ready",
      description:
        "Digital cleaning records mean every common area is inspection-ready. Every task logged, every floor checked, every bin emptied on schedule. Factor inspections pass without incident.",
    },
    {
      icon: "TrendingUp",
      title: "Service charge transparency",
      description:
        "Monthly portfolio report aligned to service charge audit criteria. Residents and owners see exactly what they're paying for. Quarterly frequency reviews deliver 8–12% cost-out.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Can you handle a portfolio of 50+ buildings?",
      a: "Yes. Our largest current property management client has 240 buildings under one contract. We scale by adding regional supervisors and crew teams, all reporting to a single account manager. The property firm gets one monthly portfolio report, one phone number, and one point of accountability.",
    },
    {
      q: "How do you handle end-of-tenancy deep cleans?",
      a: "Rapid-response team is mobilised within 24 hours of request and on-site within 48 hours. Full property deep clean — kitchen, bathrooms, all rooms, windows, floors, appliances. Deposit-return standard, factor-approved checklist. Photographic before-and-after record provided. New tenant ready on schedule.",
    },
    {
      q: "How do you handle access to residential blocks?",
      a: "Access arrangements are documented per building — key safe codes, factor keys, resident-aware entry protocols. Crews are PVG-checked and never enter private residences without authorisation. For buildings with concierge or factor presence, we coordinate arrival and departure with the on-site staff.",
    },
    {
      q: "How do you handle resident complaints?",
      a: "Resident complaints are routed to the property firm, who escalates to us. We mobilise same-day response — typically within 4 hours. The issue is resolved, documented with time-stamp and photos, and the property firm is informed throughout. Recurring complaints trigger a root-cause review with the operations director.",
    },
    {
      q: "Can you cover new-build developments pre-handover?",
      a: "Yes. Post-construction snagging and pre-handover presentation is one of our specialisms. We work with the developer to schedule the snagging clean after construction is complete but before residents move in. Builder-dust removal, glass polishing, floor finishing, and final presentation clean — all completed before handover.",
    },
    {
      q: "What's your pricing model?",
      a: "Most property management contracts are priced as a fixed monthly fee per building based on common area size and visit frequency, plus a rate card for end-of-tenancy deep cleans and ad-hoc work. Typical residential blocks (40–80 units) pay between £180 and £420 per month for common area cleaning. End-of-tenancy deep cleans priced per property. We provide a transparent portfolio quote after scoping.",
    },
  ],
  testimonials: [
    {
      name: "James Drummond",
      role: "Operations Director",
      facility: "Drummond Property Management, Edinburgh",
      quote:
        "Maundy Clean has handled our 120-building portfolio for four years. End-of-tenancy turnaround is genuinely 48 hours. Resident complaints down 70%. Factor inspections pass without incident. One monthly portfolio report saves my team three days a month.",
      rating: 5,
    },
    {
      name: "Lorraine Mackie",
      role: "Director",
      facility: "Mackie & Co Property Factors, Glasgow",
      quote:
        "Same-day complaint response, PVG-checked crews, factor inspection-ready records. Our residents notice the difference. Our owner-clients notice the difference. And our service charge complaints have all but disappeared.",
      rating: 5,
    },
    {
      name: "Andrew McCall",
      role: "Managing Director",
      facility: "McCall Residential (240 buildings)",
      quote:
        "240 buildings, one account manager, one monthly report. The portfolio model is exactly what a property firm our size needs. We've saved 11% versus the previous contractor, and our portfolio NPS has gone from +12 to +38.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Corporate Offices",
      href: "/industries/corporate-offices",
      description:
        "Corporate office cleaning for managed office suites within property portfolios.",
    },
    {
      name: "Estate Agencies",
      href: "/industries/estate-agencies",
      description:
        "Estate agency cleaning — high-street branches and property viewing-ready presentation.",
    },
    {
      name: "Hotels & Resorts",
      href: "/industries/hotels-resorts",
      description:
        "Hotel cleaning for aparthotels and serviced apartments within property portfolios.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Property common area cleaning",
      caption: "Residential block common area — lobby, lifts, stairwell, mail area",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
      alt: "End-of-tenancy deep clean",
      caption: "End-of-tenancy deep clean — deposit-return standard, factor-approved checklist",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Managed office cleaning",
      caption: "Managed office suite — nightly janitorial, day porter, presentation standards",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Property window cleaning",
      caption: "Communal glazing, stairwell windows, entrance door glass",
    },
  ],
};

// ============================================================
// Industry #16 — Estate Agencies (Commercial & Office)
// ============================================================
export const estateAgencies: IndustryDetail = {
  slug: "estate-agencies",
  name: "Estate Agencies",
  category: "Commercial & Office",
  tagline: "High-street branches with property viewing-ready presentation — every day.",
  heroHeadline: "An agency window\nthat makes buyers\nstop and look.",
  heroSubhead:
    "We clean high-street estate agency branches, premium property showrooms, and lettings offices across Scotland. Brand-standard window displays, viewing-ready presentation, and customer-facing discretion. Daily early-morning resets and weekly deep cleans.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  metaTitle: "Estate Agency Cleaning Scotland | High-Street Branches | Maundy Clean",
  metaDescription:
    "Estate agency cleaning across Scotland. High-street branches, premium property showrooms, lettings offices. Brand-standard window displays, viewing-ready presentation, daily early-morning resets.",
  overviewParagraphs: [
    "Estate agency cleaning is the discipline of high-street presentation. The shopfront window is your single most important marketing asset — it's what stops passing buyers and vendors. The reception area is where vendors form their first impression of your brand. The viewing cars and viewing offices need to feel premium. Maundy Clean has spent over a decade inside Scottish estate agencies, from independent high-street branches to multi-branch premium chains.",
    "Our estate agency division operates an early-morning reset model. A daily crew arrives at 6am and has the branch pristine by 8:30am — window display cleaned and aligned, reception polished, viewing rooms reset, kitchen restocked, WCs sanitised. A weekly deep clean team handles carpet extraction, upholstery, and exterior glazing. A flexible viewing-prep service handles ad-hoc cleaning before high-value viewings.",
    "We understand the rhythm of an estate agency: morning walk-past traffic 8–10am, vendor appointments from 10am, lunchtime window-shoppers, afternoon viewings, evening follow-up calls. Our crews work around all of it — early-morning reset is the backbone, weekly deep cleans happen on the agency's quietest day, and ad-hoc viewing-prep is available at short notice. We never clean during opening hours unless it's an emergency.",
  ],
  compliance: [
    {
      code: "BSIF",
      title: "British Cleaning Council Standards",
      description:
        "Our protocols align to British Cleaning Council recommended standards for retail and office cleaning.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-fragrance products in customer-facing areas and food-safe sanitisers in staff kitchens.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Floor slip-resistance testing, wet-floor signage, and spill response in customer areas aligned to HSE SLIPS guidance.",
    },
    {
      code: "GDPR",
      title: "General Data Protection Regulation",
      description:
        "Crews trained in client confidentiality. Vendor and buyer records, sales paperwork, and viewing schedules are never disturbed during cleaning.",
    },
    {
      code: "PUWER",
      title: "Provision and Use of Work Equipment Regulations",
      description:
        "All cleaning equipment is PUWER-compliant, PAT-tested, and risk-assessed for use in customer-facing retail areas.",
    },
  ],
  servicesDelivered: [
    {
      name: "Retail Store Cleaning",
      href: "/services/retail-store-cleaning",
      description:
        "Daily shopfront and retail floor cleaning for high-street estate agency branches.",
    },
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning",
      description:
        "Back-office and admin area cleaning — desks, kitchens, WCs, meeting rooms.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Shopfront window display cleaning — interior and exterior glazing, including display shelving glass.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Showroom floor care — VCT strip & re-seal, hardwood refinishing, carpet extraction for premium presentation.",
    },
    {
      name: "Carpet & Upholstery Cleaning",
      href: "/services/carpet-rug-cleaning",
      description:
        "Viewing room furniture cleaning, meeting room chair refresh, and reception area upholstery.",
    },
    {
      name: "Move-In / Move-Out Cleaning",
      href: "/services/move-in-out-cleaning",
      description:
        "End-of-tenancy and pre-completion deep cleans for client properties — coordinated with the lettings team.",
    },
  ],
  challenges: [
    {
      icon: "Users",
      title: "Customer-facing presentation",
      description:
        "Vendors and buyers form their brand impression in 12 seconds. Our crews deliver premium presentation — streak-free windows, polished floors, fresh entrance, spotless reception. The details customers actually notice.",
    },
    {
      icon: "Clock",
      title: "Early-morning opening deadlines",
      description:
        "High-street branches open at 9am. Our crews arrive at 6am and finish by 8:30am — three and a half hours of uninterrupted cleaning before staff arrive. If a clean overruns, we re-crew at our cost.",
    },
    {
      icon: "Shield",
      title: "Vendor and buyer confidentiality",
      description:
        "Sales paperwork, viewing schedules, offer details — all confidential. Our crews never touch desks with documents, never photograph or discuss client information. GDPR-compliant throughout.",
    },
    {
      icon: "Zap",
      title: "Viewing-prep at short notice",
      description:
        "High-value viewings need premium presentation. Our flexible viewing-prep service handles ad-hoc cleaning at short notice — typically within 4 hours of request.",
    },
    {
      icon: "Building2",
      title: "Multi-branch consistency",
      description:
        "Multi-branch agencies need consistent standards across every branch. We provide consolidated reporting, identical protocols, and a single account manager across all branches.",
    },
    {
      icon: "TrendingUp",
      title: "Tight agency margins",
      description:
        "Independent agencies operate on tight margins. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any customer-visible standard.",
    },
  ],
  stats: [
    { value: "85+", label: "estate agency branches served" },
    { value: "98%", label: "opening-hour deadline hit rate" },
    { value: "4h", label: "viewing-prep response SLA" },
    { value: "11+", label: "years in estate agency cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Branch walk-through",
      description:
        "Our regional manager walks the branch with the branch manager. We map zones (shopfront, reception, viewing rooms, offices, kitchen, WCs), identify brand-standard requirements, and discuss opening hours.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Branch schedule & quote",
      description:
        "Within 2 business days you receive a written schedule covering early-morning reset, weekly deep clean, and viewing-prep service. COSHH register and fixed monthly fee included.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A uniformed, brand-trained, confidentiality-briefed crew is inducted to the branch, introduced to staff, and the first clean is supervised end-to-end. Brand-standard photos taken and shared.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & review",
      description:
        "Daily early-morning resets, weekly deep cleans, viewing-prep on demand. Monthly KPI reports, quarterly review meetings. Multi-branch clients receive consolidated estate reporting.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Users",
      title: "Premium customer-facing presentation",
      description:
        "Streak-free windows, polished floors, fresh entrance, spotless reception. The details vendors and buyers actually notice — driving brand perception and instruction wins.",
    },
    {
      icon: "Clock",
      title: "Opening-hour deadline guarantee",
      description:
        "98% hit rate on opening-hour deadlines. If we ever miss, we re-crew at our cost and finish before doors open. No charge, no excuse. Achieved through redundant rosters and on-call cover.",
    },
    {
      icon: "Shield",
      title: "Vendor and buyer confidentiality",
      description:
        "Crews trained in client confidentiality. Sales paperwork, viewing schedules, offer details — never touched, never photographed, never discussed. GDPR-compliant throughout.",
    },
    {
      icon: "Zap",
      title: "4-hour viewing-prep response",
      description:
        "High-value viewings need premium presentation. Our viewing-prep service handles ad-hoc cleaning within 4 hours of request — viewing rooms, reception, WCs, all presentation-ready.",
    },
    {
      icon: "Building2",
      title: "Multi-branch consolidated reporting",
      description:
        "Multi-branch agencies get one account manager across all branches, one monthly report, identical protocols. Branch managers get consistent standards. Regional managers get consolidated visibility.",
    },
    {
      icon: "TrendingUp",
      title: "Frequency optimisation",
      description:
        "Quarterly we re-examine task frequencies against footfall and viewing data. Typically we find 8–12% efficiency gains without dropping any customer-visible standard.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Can you guarantee the branch is pristine before opening?",
      a: "Yes. We have a 98% hit rate on opening-hour deadlines across our estate agency portfolio. Crews arrive at 6am and finish by 8:30am — three and a half hours of uninterrupted cleaning before staff arrive. If we ever miss, we re-crew at our cost and finish before doors open. No charge, no excuse.",
    },
    {
      q: "How do you handle window display cleaning without disturbing the display?",
      a: "Crews are trained to clean around window display materials — interior glass, shelving, and signage cleaned with care. Display materials are never moved without branch manager authorisation. For complex displays (e.g., premium property marketing suites), the branch manager briefs the crew on the display layout before cleaning starts.",
    },
    {
      q: "Can you provide viewing-prep at short notice?",
      a: "Yes. Our viewing-prep service handles ad-hoc cleaning within 4 hours of request — viewing rooms, reception, WCs, all presentation-ready. Particularly useful for high-value viewings or pre-instruction vendor visits. Viewing-prep is priced on a rate card and can be added to any contract.",
    },
    {
      q: "How do you handle multi-branch agencies?",
      a: "Multi-branch agencies get one account manager across all branches, one monthly report, identical protocols. Branch managers get consistent standards and a single point of contact. Regional managers get consolidated visibility across the estate. Surge capacity for new branch openings and re-fits available with 2 weeks' notice.",
    },
    {
      q: "What about confidentiality of sales paperwork and client information?",
      a: "Crews are explicitly briefed that desks with sales paperwork, viewing schedules, or client information are no-go zones. They don't move papers, don't read, don't photograph. Confidential waste is never handled without authorisation. This is reinforced at every quarterly review and is part of induction. GDPR-compliant throughout.",
    },
    {
      q: "What's your pricing model?",
      a: "Most estate agency contracts are priced as a fixed monthly fee per branch based on floor area, number of viewing rooms, and visit frequency. Typical high-street branches (1,500–3,000 sq ft) pay between £380 and £720 per branch per month. Multi-branch clients receive a consolidated estate quote with volume discount. We provide a transparent quote after the branch walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Fiona Burrell",
      role: "Branch Manager",
      facility: "Savills Edinburgh",
      quote:
        "Premium presentation is non-negotiable for our brand. Maundy Clean delivers — same crew, every morning, brand-standard compliant. Window display, reception, viewing rooms, all pristine before doors open. Vendors notice. Buyers notice.",
      rating: 5,
    },
    {
      name: "Andrew Croll",
      role: "Operations Director",
      facility: "Rettie & Co. (8 branches)",
      quote:
        "Eight branches, one account manager, identical standards. The consolidated monthly report saves my team two days a month. Viewing-prep service has been used three times — every time within 4 hours, every time presentation-ready. Genuine partner.",
      rating: 5,
    },
    {
      name: "Lindsay Hepburn",
      role: "Owner",
      facility: "Hepburn Estate Agents, Stirling",
      quote:
        "Independent agency, one branch, big expectations. Maundy Clean treats us like a flagship client. Confidentiality is bulletproof, presentation is premium, and the early-morning reset has never missed. Couldn't ask for more.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Corporate Offices",
      href: "/industries/corporate-offices",
      description:
        "Corporate office cleaning for estate agency back-office and admin operations.",
    },
    {
      name: "Property Management Firms",
      href: "/industries/property-management-firms",
      description:
        "Property management cleaning for lettings departments and managed portfolios.",
    },
    {
      name: "Retail Chains",
      href: "/industries/retail-chains",
      description:
        "Multi-site retail cleaning with brand-consistent presentation standards.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Estate agency branch cleaning",
      caption: "Pre-opening reset — window display, reception, viewing rooms",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/2505b6c51368.jpg",
      alt: "Estate agency viewing room cleaning",
      caption: "Viewing room presentation — premium furniture, polished floors, brand-standard",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Estate agency reception cleaning",
      caption: "Reception presentation — the first impression vendors and buyers form",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Estate agency window cleaning",
      caption: "Shopfront window display cleaning — your most important marketing asset",
    },
  ],
};

// ============================================================
// Industry #17 — Food & Beverage Processing (Industrial)
// ============================================================
export const foodBeverageProcessing: IndustryDetail = {
  slug: "food-beverage-processing",
  name: "Food & Beverage Processing",
  category: "Industrial",
  tagline: "BRCGS, FSA, and HACCP-aligned cleaning for Scotland's food and drink manufacturing sector.",
  heroHeadline: "A processing line\nclean enough for\nan unannounced audit.",
  heroSubhead:
    "We clean food and beverage processing facilities across Scotland — dairies, bakeries, distilleries, breweries, meat processors, and packaged food manufacturers. BRCGS-aligned protocols, HACCP-critical control points, and audit-ready records.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
  metaTitle: "Food & Beverage Processing Cleaning Scotland | BRCGS | HACCP | Maundy Clean",
  metaDescription:
    "Food and beverage processing cleaning across Scotland. BRCGS-aligned, HACCP-critical control points, FSA-compliant. Dairies, bakeries, distilleries, breweries, meat processors. Audit-ready records.",
  overviewParagraphs: [
    "Food and beverage processing cleaning is the most regulated cleaning discipline in the industrial sector. Every protocol, every product, every audit trail is governed by BRCGS Global Standard for Food Safety, FSA regulations, HACCP critical control points, and (for many sites) customer-specific technical standards from major retailers. Maundy Clean has spent over a decade inside Scottish food and drink manufacturing — from Speyside distilleries to central-belt dairies and Highland seafood processors.",
    "Our food and beverage division operates a three-shift model covering production-clean (sanitation during changeovers), end-of-shift deep clean (full line sanitation), and periodic deep clean (weekly or monthly total-facility sanitisation). Every cleaner completes food-industry-specific training including HACCP awareness, allergen control, chemical residue management, and food-defence protocols. We use only food-safe, no-rinse sanitisers on food contact surfaces, and our chemical register is pre-approved by your technical team.",
    "We understand the rhythm of food manufacturing: morning shift start 6am, mid-morning break, lunch, afternoon shift, evening shift handover, overnight sanitation window. Our crews work around all of it — production-clean teams are trained to work safely during brief changeovers, end-of-shift teams mobilise within 15 minutes of line stoppage, and periodic deep cleans happen over scheduled shutdown windows. Every task is logged against your HACCP cleaning schedule and audit-ready for unannounced retailer or BRCGS inspection.",
  ],
  compliance: [
    {
      code: "BRCGS",
      title: "BRCGS Global Standard for Food Safety",
      description:
        "Our protocols map directly to BRCGS clause 4 (site standards) and clause 7 (cleaning) — the same clauses your auditor inspects.",
    },
    {
      code: "FSA",
      title: "Food Standards Scotland Regulations",
      description:
        "We operate to FSA regulations for food premises cleaning, including approved chemical lists and residue management.",
    },
    {
      code: "HACCP",
      title: "Hazard Analysis and Critical Control Points",
      description:
        "Our cleaning schedule maps to your HACCP plan's cleaning-critical control points, with documented frequencies and verification audits.",
    },
    {
      code: "EN 1276",
      title: "European Standard for Food-Borne Bactericidal Activity",
      description:
        "Food contact surface sanitisers meet EN 1276 (bacterial) and EN 1650 (fungicidal) — verified by batch certification.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every chemical carries a current COSHH datasheet. We use food-safe, no-rinse sanitisers on food contact surfaces, with documented rinse protocols where required.",
    },
    {
      code: "Allergen",
      title: "Allergen Control Protocols",
      description:
        "Our cleaning protocols include validated allergen removal procedures for the 14 named allergens — verified by ATP swab testing.",
    },
  ],
  servicesDelivered: [
    {
      name: "Food Processing Facility Cleaning",
      href: "/services/food-processing-facility-cleaning",
      description:
        "Full food processing facility cleaning — production lines, changeover sanitation, end-of-shift deep clean.",
    },
    {
      name: "Cleanroom Cleaning",
      href: "/services/cleanroom-cleaning",
      description:
        "Cleanroom cleaning for high-care food production areas — HEPA-filtered equipment, gowning protocols, validated sanitation.",
    },
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description:
        "Whole-facility disinfection during outbreak response, post-shutdown recommissioning, or pre-audit preparation.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Production floor degreasing, anti-slip treatment, drainage cleaning, and epoxy floor maintenance.",
    },
    {
      name: "High Dusting",
      href: "/services/high-dusting",
      description:
        "Overhead structure cleaning — rafters, ductwork, light fittings, high-level pipework (critical for food-fall prevention).",
    },
    {
      name: "Electrostatic Disinfection",
      href: "/services/electrostatic-disinfection-add-on",
      description:
        "Whole-area electrostatic spraying for rapid touchpoint disinfection between production runs.",
    },
  ],
  challenges: [
    {
      icon: "Shield",
      title: "BRCGS audit at any moment",
      description:
        "BRCGS audits can be unannounced. Our digital cleaning records and HACCP-aligned schedules mean you're never caught short — every task is time-stamped, geo-verified, and exportable to PDF in seconds.",
    },
    {
      icon: "Zap",
      title: "Allergen cross-contamination risk",
      description:
        "Allergen cross-contamination is a recall risk. Our validated allergen removal procedures cover the 14 named allergens, verified by ATP swab testing on every critical surface.",
    },
    {
      icon: "Clock",
      title: "Production-clean during changeovers",
      description:
        "Changeover windows are short — typically 30–90 minutes. Our production-clean teams are trained to work safely and effectively within those windows, without compromising sanitisation.",
    },
    {
      icon: "Building2",
      title: "Multi-zone facility complexity",
      description:
        "Food facilities have low-risk, high-risk, and high-care zones. Our crews are trained on zone protocols, use colour-coded equipment, and follow documented dirty-to-clean sequencing.",
    },
    {
      icon: "Users",
      title: "Food-defence protocols",
      description:
        "Food-defence (intentional contamination) is part of BRCGS. Our crews are vetted, supervised, and never work alone in high-care zones. Chemicals are stored securely with documented issue logs.",
    },
    {
      icon: "TrendingUp",
      title: "Retailer technical standards",
      description:
        "Major retailers (Tesco, M&S, Sainsbury's) impose customer-specific technical standards. Our protocols are adaptable to your customer audits — we've passed them all before.",
    },
  ],
  stats: [
    { value: "28+", label: "food & bev facilities served" },
    { value: "100%", label: "BRCGS audit pass rate" },
    { value: "15 min", label: "end-of-shift mobilisation SLA" },
    { value: "12+", label: "years in food & bev cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Technical site survey",
      description:
        "Our technical account manager walks the facility with your technical manager and QA lead. We map zones (low-risk, high-risk, high-care), identify HACCP critical control points, and review current cleaning protocols.",
      duration: "Days 1–3",
    },
    {
      step: "02",
      title: "HACCP-aligned schedule & quote",
      description:
        "Within 5 business days you receive a written cleaning schedule mapped to your HACCP plan, a COSHH register pre-approved by your technical team, and a fixed monthly fee. Periodic deep cleans quoted separately.",
      duration: "Days 3–5",
    },
    {
      step: "03",
      title: "Crew induction & mobilisation",
      description:
        "Food-industry-trained crews are inducted to the facility, complete site-specific training (allergens, food-defence, chemical handling), and mobilise across production-clean, end-of-shift, and periodic teams.",
      duration: "Days 5–14",
    },
    {
      step: "04",
      title: "Ongoing delivery & audit support",
      description:
        "Daily cleaning, weekly QA walks, monthly KPI reports, quarterly review meetings. BRCGS audit prep included as standard. ATP swab verification on critical surfaces.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Shield",
      title: "BRCGS audit-ready, always",
      description:
        "Every task is logged digitally against your HACCP cleaning schedule. BRCGS auditors can pull a full cleaning history for any line, any zone, any shift, in under 60 seconds.",
    },
    {
      icon: "Zap",
      title: "Validated allergen removal",
      description:
        "Documented allergen removal procedures for the 14 named allergens. ATP swab verification on every critical surface after allergen changeover. Recall risk minimised.",
    },
    {
      icon: "Clock",
      title: "Production-clean specialists",
      description:
        "Trained to work safely within 30–90 minute changeover windows. Production-clean teams mobilise within 15 minutes of line stoppage. Sanitisation never compromised by time pressure.",
    },
    {
      icon: "Building2",
      title: "Multi-zone protocol expertise",
      description:
        "Low-risk, high-risk, high-care — our crews are trained on zone protocols, use colour-coded equipment, and follow documented dirty-to-clean sequencing. Cross-contamination risk minimised.",
    },
    {
      icon: "Users",
      title: "Food-defence compliant",
      description:
        "Vetted, supervised crews. Never work alone in high-care zones. Chemicals stored securely with documented issue logs. Food-defence protocols aligned to BRCGS clause 4.2.",
    },
    {
      icon: "TrendingUp",
      title: "Retailer audit-tested protocols",
      description:
        "Our protocols have passed Tesco, M&S, Sainsbury's, Asda, and Lidl technical audits. We adapt to your customer-specific standards and provide audit support as standard.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Can you handle BRCGS Grade AA facilities?",
      a: "Yes. Our protocols support BRCGS Grade AA facilities. We've cleaned sites holding Grade AA across dairy, bakery, and packaged food sectors. Our digital cleaning records, HACCP-aligned schedules, and ATP swab verification meet the audit trail expectations of the most demanding BRCGS auditors.",
    },
    {
      q: "How do you handle allergen changeover cleaning?",
      a: "Allergen changeover follows a documented protocol: physical removal of visible soil, rinse with potable water, application of validated allergen-removal cleaning chemical at the correct dilution and contact time, final rinse, and ATP swab verification on critical surfaces. The protocol is validated per allergen group and per surface type, with documented records kept for audit.",
    },
    {
      q: "What chemicals do you use on food contact surfaces?",
      a: "Food-safe, no-rinse sanitisers that meet EN 1276 (bacterial) and EN 1650 (fungicidal) standards. Specific chemistry depends on your technical team's approved list — we never deploy a product your QA lead hasn't approved. Every product carries a current COSHH datasheet and is stored securely with documented issue logs.",
    },
    {
      q: "Can you cover production-clean during changeovers?",
      a: "Yes. Production-clean teams are trained to work safely within 30–90 minute changeover windows. They follow documented procedures, use dedicated colour-coded equipment, and complete sanitation to validated standards. If a changeover is too short for full sanitisation, we flag the risk to your technical team and propose alternative protocols.",
    },
    {
      q: "How do you handle high-care zones?",
      a: "High-care zones (e.g., ready-to-eat production) get dedicated crews who never work in other zones. Full gowning protocols, dedicated colour-coded equipment, and supervised operation — never alone. Chemicals are pre-approved by your technical team and stored in the high-care chemical store with documented issue logs.",
    },
    {
      q: "What's your pricing model?",
      a: "Most food and beverage contracts are priced as a fixed monthly fee based on facility size, number of production lines, shift pattern, and visit frequency. Typical mid-sized facilities (40,000–100,000 sq ft) pay between £8,500 and £22,000 per month. Periodic deep cleans and outage work quoted separately. We provide a transparent quote after the technical site survey.",
    },
  ],
  testimonials: [
    {
      name: "David MacIntyre",
      role: "Technical Manager",
      facility: "RS McCormick Foods, Glasgow",
      quote:
        "Maundy Clean has handled our cleaning for five years. BRCGS audits passed every year, including two unannounced. ATP swab results consistently in spec. Allergen changeover protocol is bulletproof. The technical account manager genuinely understands food.",
      rating: 5,
    },
    {
      name: "Karen Sutherland",
      role: "QA Director",
      facility: "Speyside Distillers Co-operative",
      quote:
        "Distillery cleaning is specialist work — wood, copper, and heritage equipment. Maundy Clean's crews are trained on our specific surfaces, use the right chemistry, and our visitor centre looks immaculate for tours. Audit-ready records for every shift.",
      rating: 5,
    },
    {
      name: "Ian Paterson",
      role: "Operations Director",
      facility: "Highland Fresh Foods (3 sites)",
      quote:
        "Three food production sites, one account manager, identical protocols. Retailer audits (Tesco, M&S, Lidl) passed without major non-conformities since we switched. Allergen management is exemplary. The technical depth is impressive.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Pharma & Life Sciences",
      href: "/industries/pharma-life-sciences",
      description:
        "Pharma and life sciences cleaning with cleanroom protocols and GMP compliance.",
    },
    {
      name: "Manufacturing Plants",
      href: "/industries/manufacturing-plants",
      description:
        "Manufacturing plant cleaning — production lines, warehousing, plant rooms, and offices.",
    },
    {
      name: "Logistics & Warehousing",
      href: "/industries/logistics-warehousing",
      description:
        "Logistics and warehousing cleaning for food distribution and cold storage facilities.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
      alt: "Food processing line cleaning",
      caption: "End-of-shift deep clean — full line sanitation, validated protocol",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c03f2f1596a1.jpg",
      alt: "Food facility floor care",
      caption: "Production floor degreasing, anti-slip treatment, drainage cleaning",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Food facility colour-coded equipment",
      caption: "Colour-coded zone equipment — low-risk, high-risk, high-care segregation",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Food facility high dusting",
      caption: "Overhead structure cleaning — critical for food-fall prevention",
    },
  ],
};

// ============================================================
// Industry #18 — Pharma & Life Sciences (Industrial)
// ============================================================
export const pharmaLifeSciences: IndustryDetail = {
  slug: "pharma-life-sciences",
  name: "Pharma & Life Sciences",
  category: "Industrial",
  tagline: "Cleanroom protocols, GMP compliance, and validated sanitation for Scotland's life sciences sector.",
  heroHeadline: "A cleanroom that\npasses every\nenvironmental monitoring round.",
  heroSubhead:
    "We clean pharmaceutical manufacturing facilities, biotech labs, and medical device manufacturers across Scotland. GMP-aligned protocols, cleanroom classification maintenance, and validated sanitation procedures. Audit-ready records for MHRA and FDA inspection.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
  metaTitle: "Pharma & Life Sciences Cleaning Scotland | GMP | Cleanroom | Maundy Clean",
  metaDescription:
    "Pharmaceutical and life sciences cleaning across Scotland. GMP-aligned, cleanroom classification maintenance, validated sanitation. MHRA and FDA audit-ready. PVG-checked, security-vetted crews.",
  overviewParagraphs: [
    "Pharma and life sciences cleaning is the most technically demanding cleaning discipline in the industrial sector. Cleanrooms operate at ISO Class 5–8, with environmental monitoring that detects a single colony-forming unit on a contact plate. Every cleaning protocol has to be validated, every chemical has to be GMP-compliant, every crew member has to be trained on gowning, aseptic technique, and contamination control. Maundy Clean has spent over a decade inside Scottish pharma and life sciences facilities — from pharmaceutical manufacturing plants to university biotech spinouts.",
    "Our pharma division operates a cleanroom-trained specialist team. Every cleaner completes GMP awareness training, cleanroom behaviour training, and validated cleaning procedure training before stepping foot in a classified area. We use only GMP-compliant chemicals (typically sterile 70% IPA, sterile disinfectants, and low-residue detergents), with documented rotation protocols to prevent microbial resistance. Every task is logged in a batch-record-style cleaning log that meets MHRA and FDA inspection standards.",
    "We understand the rhythm of pharma manufacturing: shift patterns covering 24/7 production, scheduled batch changeovers, periodic facility sanitisation, and unscheduled shutdowns for maintenance. Our crews work around all of it — daily cleanroom cleaning happens during shift handover or scheduled breaks, periodic deep cleans happen during planned shutdowns, and emergency response covers spillages or contamination events. Every task is documented to GMP standards and audit-ready for MHRA, FDA, or customer inspection.",
  ],
  compliance: [
    {
      code: "EU GMP",
      title: "EU Good Manufacturing Practice Annex 1",
      description:
        "Our cleanroom cleaning protocols align to EU GMP Annex 1 (manufacture of sterile medicinal products) — the most stringent cleanroom cleaning standard in the world.",
    },
    {
      code: "MHRA",
      title: "MHRA Good Manufacturing Practice",
      description:
        "Our cleaning records, validation procedures, and crew training meet MHRA inspection expectations — the UK regulator for pharmaceutical manufacturing.",
    },
    {
      code: "FDA 21 CFR",
      title: "FDA 21 CFR Part 211 (cGMP)",
      description:
        "For facilities exporting to the US, our cleaning records and validation procedures meet FDA 21 CFR Part 211 current Good Manufacturing Practice requirements.",
    },
    {
      code: "ISO 14644",
      title: "ISO 14644 Cleanroom Standards",
      description:
        "Our protocols maintain cleanroom classification to ISO 14644-1 (classification) and ISO 14644-5 (operations) — including documented cleaning frequencies and validation.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every chemical carries a current COSHH datasheet. We use only GMP-compliant chemicals — typically sterile 70% IPA, sterile disinfectants, low-residue detergents.",
    },
    {
      code: "GDP",
      title: "Good Distribution Practice",
      description:
        "For warehouse and distribution areas, our cleaning aligns to GDP requirements for pharmaceutical storage facilities.",
    },
  ],
  servicesDelivered: [
    {
      name: "Cleanroom Cleaning",
      href: "/services/cleanroom-cleaning",
      description:
        "Cleanroom cleaning and sanitisation to ISO 14644 standards, with validated protocols and GMP-compliant chemicals.",
    },
    {
      name: "Lab & Research Facility Cleaning",
      href: "/services/lab-research-facility-cleaning",
      description:
        "Laboratory cleaning for R&D facilities — biosafety cabinets, fume cupboards, bench surfaces, and equipment.",
    },
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description:
        "Whole-facility disinfection during decommissioning, post-contamination event, or pre-validation runs.",
    },
    {
      name: "High Dusting",
      href: "/services/high-dusting",
      description:
        "High-level structure cleaning in cleanroom plenums, ceiling grids, and HEPA housing (critical for particulate control).",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Cleanroom floor care — specialty static-dissipative floor maintenance, coving sanitation, and epoxy floor care.",
    },
    {
      name: "Electrostatic Disinfection",
      href: "/services/electrostatic-disinfection-add-on",
      description:
        "Electrostatic spraying for rapid whole-area disinfection — particularly useful for biological safety cabinet rooms.",
    },
  ],
  challenges: [
    {
      icon: "Shield",
      title: "MHRA and FDA inspection pressure",
      description:
        "MHRA and FDA inspections can be unannounced. Our GMP-aligned cleaning records mean you're never caught short — every task is documented to batch-record standards, with crew training records, chemical logs, and validation reports.",
    },
    {
      icon: "Zap",
      title: "Environmental monitoring failures",
      description:
        "A single CFU on a contact plate can trigger a deviation investigation. Our validated cleaning protocols, sterile chemicals, and gowning discipline minimise excursion risk. We've helped facilities maintain EM pass rates above 98%.",
    },
    {
      icon: "Clock",
      title: "Production-clean during shift handovers",
      description:
        "Cleanroom cleaning happens during shift handovers or scheduled breaks — typically 30–60 minutes. Our crews are trained to work efficiently within those windows, without compromising validated protocols.",
    },
    {
      icon: "Building2",
      title: "Multi-classification facility complexity",
      description:
        "Pharma facilities have ISO 5, 7, and 8 areas, plus unclassified support spaces. Our crews are trained on classification-specific protocols, with separate equipment, gowning, and procedures per classification.",
    },
    {
      icon: "Users",
      title: "Gowning and aseptic technique",
      description:
        "Crews working in ISO 5 areas complete full gowning training — sterile gown, sterile gloves, aseptic technique. They understand the contamination risk they pose and how to minimise it.",
    },
    {
      icon: "TrendingUp",
      title: "Validation documentation burden",
      description:
        "GMP cleaning requires extensive validation documentation. We provide validation protocols, execution records, and summary reports that integrate with your quality management system.",
    },
  ],
  stats: [
    { value: "12+", label: "pharma facilities served" },
    { value: "100%", label: "MHRA inspection pass rate" },
    { value: "98%+", label: "EM pass rate maintained" },
    { value: "11+", label: "years in pharma cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Technical site survey",
      description:
        "Our cleanroom specialist walks the facility with your QA lead and cleanroom manager. We map classifications (ISO 5, 7, 8, unclassified), review current protocols, and identify validation requirements.",
      duration: "Days 1–5",
    },
    {
      step: "02",
      title: "GMP-aligned protocol & quote",
      description:
        "Within 7 business days you receive a written cleaning protocol mapped to EU GMP Annex 1, a COSHH register with sterile chemicals, validation documentation templates, and a fixed monthly fee.",
      duration: "Days 5–10",
    },
    {
      step: "03",
      title: "Crew training & qualification",
      description:
        "Cleanroom-trained crews complete GMP awareness, cleanroom behaviour, and validated procedure training. Gowning qualification for ISO 5 areas. Site-specific induction. Training records provided for your QMS.",
      duration: "Days 10–21",
    },
    {
      step: "04",
      title: "Ongoing delivery & audit support",
      description:
        "Daily cleaning, weekly QA walks, monthly KPI reports, quarterly review meetings. MHRA/FDA inspection support included. Validation re-qualification on schedule.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Shield",
      title: "GMP audit-ready, always",
      description:
        "Every task documented to batch-record standards. Crew training records, chemical logs, validation reports — all GMP-compliant. MHRA and FDA inspectors can pull any cleaning record in under 60 seconds.",
    },
    {
      icon: "Zap",
      title: "Validated protocols for EM compliance",
      description:
        "Documented cleaning protocols validated per surface type and classification. Sterile chemicals with documented rotation. EM pass rates consistently above 98% at client sites.",
    },
    {
      icon: "Users",
      title: "Cleanroom-trained specialist crews",
      description:
        "Every cleaner completes GMP awareness, cleanroom behaviour, and validated procedure training. ISO 5 crews complete full gowning qualification. Training records provided for your QMS.",
    },
    {
      icon: "Building2",
      title: "Multi-classification expertise",
      description:
        "ISO 5, 7, 8, and unclassified areas — our crews are trained on classification-specific protocols. Separate equipment, gowning, and procedures per classification. No cross-contamination.",
    },
    {
      icon: "TrendingUp",
      title: "Validation documentation integrated",
      description:
        "Validation protocols, execution records, and summary reports integrated with your quality management system. Reduces your internal documentation burden. Audit-ready at any moment.",
    },
    {
      icon: "Heart",
      title: "Deviation investigation support",
      description:
        "If an EM excursion triggers a deviation investigation, our cleaning records are immediately available. Root-cause analysis support. Corrective and preventive action (CAPA) input. We're part of your quality system.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "Are your crews qualified to work in ISO 5 cleanrooms?",
      a: "Yes. Crews working in ISO 5 (Grade A) areas complete full gowning qualification — sterile gown donning, sterile glove technique, aseptic behaviour. They complete GMP awareness training, cleanroom behaviour training, and validated cleaning procedure training before stepping foot in a classified area. Training records are provided for your QMS and audit.",
    },
    {
      q: "What chemicals do you use in cleanrooms?",
      a: "Only GMP-compliant chemicals — typically sterile 70% IPA, sterile quaternary ammonium disinfectants, sterile sporicidal agents (e.g., hydrogen peroxide / peracetic acid blends), and low-residue detergents. Specific chemistry depends on your QMS approved list. Rotation protocols documented to prevent microbial resistance. Every chemical sterile-filtered and double-bagged for cleanroom transfer.",
    },
    {
      q: "How do you handle cleanroom classification maintenance?",
      a: "Our cleaning protocols maintain cleanroom classification to ISO 14644-1. Documented cleaning frequencies per surface type and classification. Validation per EU GMP Annex 1. Pre- and post-clean particle counts (where applicable) coordinated with your environmental monitoring team. Any classification excursion triggers immediate root-cause investigation.",
    },
    {
      q: "Can you support MHRA and FDA inspections?",
      a: "Yes. Inspection support is included as standard. Our cleaning records, validation documentation, and crew training records are immediately available for inspector review. We can provide on-site support during inspections, with our cleanroom specialist available to answer technical questions. We've supported multiple MHRA and FDA inspections without major findings.",
    },
    {
      q: "How do you handle deviation investigations?",
      a: "If an EM excursion or contamination event triggers a deviation investigation, our cleaning records are immediately available to your QA team. We provide root-cause analysis support, CAPA input, and corrective cleaning if needed. We're part of your quality system — not an external contractor that disappears when there's a problem.",
    },
    {
      q: "What's your pricing model?",
      a: "Most pharma contracts are priced as a fixed monthly fee based on cleanroom classification mix, total floor area, shift pattern, and validation requirements. Typical pharma facilities (10,000–50,000 sq ft of classified space) pay between £12,000 and £35,000 per month. Validation and audit support included as standard. We provide a transparent quote after the technical site survey.",
    },
  ],
  testimonials: [
    {
      name: "Dr Aileen MacLeod",
      role: "QA Director",
      facility: "Pharma Sciences Scotland, Edinburgh",
      quote:
        "Maundy Clean's cleanroom team is the most professional I've worked with. Validated protocols, GMP-compliant chemicals, gowning-qualified crews. Our last MHRA inspection found zero cleaning-related observations. That's a first in 12 years.",
      rating: 5,
    },
    {
      name: "Prof. Gordon McNeil",
      role: "Director of Operations",
      facility: "BioQuarter Innovation Centre, Edinburgh",
      quote:
        "Biotech spinout facilities have unique cleaning challenges — multiple tenants, varying classifications, research-grade standards. Maundy Clean handles it all. EM pass rates consistently above 98%. Audit-ready records. The technical depth is exceptional.",
      rating: 5,
    },
    {
      name: "Sarah Bennett",
      role: "Cleanroom Manager",
      facility: "MedTech Manufacturing, Livingston",
      quote:
        "FDA inspection passed without a single cleaning-related observation. That's the headline. The detail is that Maundy Clean's documentation, training records, and validation protocols made it possible. Genuine cleanroom cleaning specialists.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Food & Beverage Processing",
      href: "/industries/food-beverage-processing",
      description:
        "Food and beverage cleaning with BRCGS, FSA, and HACCP alignment.",
    },
    {
      name: "Manufacturing Plants",
      href: "/industries/manufacturing-plants",
      description:
        "Manufacturing plant cleaning — production lines, warehousing, plant rooms.",
    },
    {
      name: "Hospitals & NHS Trusts",
      href: "/industries/hospitals-nhs-trusts",
      description:
        "Hospital cleaning with HTM 01-05 alignment and terminal clean protocols.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
      alt: "Pharma cleanroom cleaning",
      caption: "ISO 5 cleanroom cleaning — full gowning, validated protocol, sterile chemicals",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Pharma cleanroom colour-coded equipment",
      caption: "Classification-specific colour-coded equipment prevents cross-contamination",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Pharma cleanroom floor care",
      caption: "Static-dissipative floor maintenance — critical for cleanroom classification",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c03f2f1596a1.jpg",
      alt: "Pharma facility high dusting",
      caption: "High-level HEPA housing and ceiling grid cleaning — particulate control",
    },
  ],
};

// ============================================================
// Industry #19 — Manufacturing Plants (Industrial)
// ============================================================
export const manufacturingPlants: IndustryDetail = {
  slug: "manufacturing-plants",
  name: "Manufacturing Plants",
  category: "Industrial",
  tagline: "Production lines, warehousing, plant rooms, and offices — clean enough for ISO 9001 audits.",
  heroHeadline: "A clean plant\nruns smoother,\nsafer, and longer.",
  heroSubhead:
    "We clean manufacturing plants across Scotland — electronics, precision engineering, automotive components, aerospace, and light manufacturing. HSE-aligned protocols, machine-aware crews, and audit-ready records. Day shift, night shift, and shutdown cover.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
  metaTitle: "Manufacturing Plant Cleaning Scotland | HSE Aligned | ISO 9001 | Maundy Clean",
  metaDescription:
    "Manufacturing plant cleaning across Scotland. Production lines, warehousing, plant rooms, offices. HSE-aligned, machine-aware crews. Day, night, and shutdown cover. ISO 9001 audit-ready records.",
  overviewParagraphs: [
    "Manufacturing plant cleaning is a discipline of operational sensitivity. The plant runs on tight production schedules, the machinery is expensive and often sensitive to contamination, the workforce is on shift patterns, and the regulatory environment involves HSE, ISO 9001, and (for many sites) customer-specific technical standards. Maundy Clean has spent over a decade inside Scottish manufacturing — from electronics plants in Livingston to precision engineering works in Aberdeen.",
    "Our manufacturing division operates a three-shift model: a day shift covering offices, canteens, WCs, and common areas; a night shift covering production line cleaning, machine degreasing, and floor care; and a shutdown team covering scheduled outage deep cleans, machinery paint-up, and post-maintenance presentation. Every cleaner completes manufacturing-specific training including machine awareness, chemical safety, lockout-tagout awareness, and HSE compliance.",
    "We understand the rhythm of manufacturing: shift handover 6am/2pm/10pm, planned maintenance windows, scheduled shutdowns (typically summer and Christmas), unscheduled breakdowns, customer audits, and ISO 9001 surveillance visits. Our crews work around all of it — day shift handles the people-facing spaces, night shift handles the heavy work, shutdown team covers the deep cleans that can only happen when production stops. Every task is logged digitally and audit-ready.",
  ],
  compliance: [
    {
      code: "HSE",
      title: "HSE Manufacturing Cleaning Guidance",
      description:
        "Our protocols align to HSE guidance on cleaning in manufacturing environments — including machine safety, chemical handling, and slip-risk management.",
    },
    {
      code: "ISO 9001",
      title: "ISO 9001 Quality Management System",
      description:
        "Our cleaning records and audit format align to ISO 9001 documentation expectations — supporting your quality management system.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use machine-safe chemicals that won't damage painted surfaces, rubber seals, or electrical components.",
    },
    {
      code: "PUWER",
      title: "Provision and Use of Work Equipment Regulations",
      description:
        "All cleaning equipment is PUWER-compliant, PAT-tested, and risk-assessed for use around manufacturing machinery. Lockout-tagout awareness training for all crews.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and cooling tower cleaning support (where applicable) in our scope.",
    },
    {
      code: "ISO 14001",
      title: "Environmental Management System",
      description:
        "Our cleaning aligns to ISO 14001 environmental principles — eco-labelled chemicals, reduced single-use plastics, waste segregation at source.",
    },
  ],
  servicesDelivered: [
    {
      name: "Warehouse Cleaning",
      href: "/services/warehouse-cleaning",
      description:
        "Warehouse and distribution area cleaning — aisles, racking, loading bays, plant rooms.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Production floor degreasing, anti-slip treatment, line-marking refresh, and epoxy floor maintenance.",
    },
    {
      name: "High Dusting",
      href: "/services/high-dusting",
      description:
        "Overhead structure cleaning — rafters, ductwork, light fittings, high-level pipework (critical for product-fall prevention).",
    },
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning",
      description:
        "Admin offices, meeting rooms, reception, canteens, and staff WCs — the people-facing side of the plant.",
    },
    {
      name: "Nightly Janitorial",
      href: "/services/nightly-janitorial",
      description:
        "Overnight production area cleaning — line cleaning, machine degreasing, floor scrubbing.",
    },
    {
      name: "Post-Construction Cleaning",
      href: "/services/post-construction-cleaning",
      description:
        "Post-installation snagging cleans, builder-dust removal, pre-commissioning presentation for new machinery.",
    },
  ],
  challenges: [
    {
      icon: "Shield",
      title: "Machine-aware operation",
      description:
        "Manufacturing machinery is expensive and often sensitive. Our crews are trained on machine awareness — what to clean, what to avoid, what needs lockout-tagout. We never spray liquids near electrical cabinets or moving parts.",
    },
    {
      icon: "Clock",
      title: "Production schedule sensitivity",
      description:
        "Production runs to tight schedules. Our night shift covers production line cleaning without disrupting shift handover. Shutdown team covers deep cleans during planned outages. Unscheduled breakdowns get emergency response within 4 hours.",
    },
    {
      icon: "Building2",
      title: "Multi-area plant complexity",
      description:
        "Manufacturing plants have production areas, warehouses, plant rooms, offices, canteens, and WCs. Each has different protocols. Our crews are trained on area-specific procedures, with colour-coded equipment to prevent cross-contamination.",
    },
    {
      icon: "Zap",
      title: "HSE inspection pressure",
      description:
        "HSE inspections can be unannounced. Our documented cleaning records, COSHH compliance, and machine-aware protocols mean you're never caught short. Audit-ready at any moment.",
    },
    {
      icon: "Users",
      title: "Shift pattern coverage",
      description:
        "Manufacturing runs on shift patterns. Our three-shift model (day, night, shutdown) covers every shift. Crews are trained for shift handover — documented, signed off, and ready for the next shift's first task.",
    },
    {
      icon: "TrendingUp",
      title: "Cost pressure in competitive manufacturing",
      description:
        "Manufacturing margins are tight. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any audit-critical task or HSE compliance line.",
    },
  ],
  stats: [
    { value: "38+", label: "manufacturing plants served" },
    { value: "100%", label: "HSE inspection pass rate" },
    { value: "4h", label: "emergency response SLA" },
    { value: "12+", label: "years in manufacturing cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Plant walk-through",
      description:
        "Our account director walks the plant with the operations manager and HSE lead. We map areas (production, warehouse, plant rooms, offices, canteens), identify machine-aware protocols, and discuss shift patterns.",
      duration: "Days 1–3",
    },
    {
      step: "02",
      title: "Three-shift schedule & quote",
      description:
        "Within 5 business days you receive a written schedule covering day shift, night shift, and shutdown teams. COSHH register, machine-aware protocols, and fixed monthly fee included.",
      duration: "Days 3–5",
    },
    {
      step: "03",
      title: "Crew induction & mobilisation",
      description:
        "Manufacturing-trained crews are inducted to the plant, complete site-specific training (machine awareness, chemical safety, lockout-tagout, HSE), and mobilise across all three shifts.",
      duration: "Days 5–14",
    },
    {
      step: "04",
      title: "Ongoing delivery & audit support",
      description:
        "Daily cleaning, weekly HSE walks, monthly KPI reports, quarterly review meetings. Shutdown deep cleans scheduled in advance. ISO 9001 and HSE audit support included.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Shield",
      title: "Machine-aware, lockout-tagout trained",
      description:
        "Crews trained on machine awareness — what to clean, what to avoid, what needs lockout-tagout. We never spray liquids near electrical cabinets or moving parts. Machine damage risk minimised.",
    },
    {
      icon: "Clock",
      title: "Three-shift model",
      description:
        "Day shift covers offices and people-facing spaces. Night shift covers production line cleaning. Shutdown team covers deep cleans. Every shift covered without disrupting production.",
    },
    {
      icon: "Building2",
      title: "Multi-area expertise",
      description:
        "Production, warehouse, plant rooms, offices, canteens, WCs — each gets area-specific protocols. Colour-coded equipment prevents cross-contamination. Consistent standards across every area.",
    },
    {
      icon: "Zap",
      title: "HSE audit-ready",
      description:
        "Documented cleaning records, COSHH compliance, machine-aware protocols. HSE inspectors can pull any cleaning record in under 60 seconds. Audit-ready at any moment.",
    },
    {
      icon: "Users",
      title: "Shift handover discipline",
      description:
        "Crews trained for shift handover — documented, signed off, ready for the next shift's first task. No gaps, no overlap, no buck-passing between shifts.",
    },
    {
      icon: "TrendingUp",
      title: "Frequency optimisation",
      description:
        "Quarterly we re-examine task frequencies against production data. Typically we find 8–12% efficiency gains without dropping any HSE-critical task. Cost-out without compliance risk.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you clean around sensitive manufacturing machinery?",
      a: "Crews are trained on machine awareness for every machine in your plant. We document what to clean, what to avoid, what needs lockout-tagout authorisation. We never spray liquids near electrical cabinets, moving parts, or sensors. For particularly sensitive machinery (e.g., CNC, electronics), we use dry methods or manufacturer-approved cleaning protocols. Your operations team approves all machine-specific protocols before cleaning starts.",
    },
    {
      q: "Can you cover three-shift operation?",
      a: "Yes. Our three-shift model covers day, night, and shutdown. Day shift handles offices, canteens, WCs, and common areas. Night shift handles production line cleaning, machine degreasing, and floor care. Shutdown team covers deep cleans during planned outages. Each shift has dedicated crews, documented handover, and audit-ready records.",
    },
    {
      q: "How do you handle planned shutdowns?",
      a: "Shutdown deep cleans are scheduled in advance — typically aligned to your planned outage windows (summer, Christmas, or machine-specific maintenance shutdowns). The shutdown team mobilises on the first day of outage and completes deep clean, machinery paint-up, and post-maintenance presentation before production restarts. We coordinate with your maintenance team on machine availability and lockout-tagout requirements.",
    },
    {
      q: "What about emergency response for breakdowns and spills?",
      a: "Emergency response within 4 hours for existing clients. Typical emergencies: oil spills, coolant leaks, machine breakdown cleanup, post-fire cleanup. Crews mobilise with appropriate PPE and spill response equipment. Documented incident report provided after the response. Emergency response priced on a rate card.",
    },
    {
      q: "Do you handle chemical storage and COSHH compliance?",
      a: "We manage our own chemical storage in compliance with COSHH — locked storage, documented issue logs, current datasheets. Your HSE team has access to our chemical register at any time. We never deploy a chemical that hasn't been pre-approved by your HSE lead. COSHH compliance is non-negotiable.",
    },
    {
      q: "What's your pricing model?",
      a: "Most manufacturing contracts are priced as a fixed monthly fee based on total floor area, shift pattern, and visit frequency. Typical mid-sized manufacturing plants (30,000–100,000 sq ft) pay between £4,500 and £14,000 per month. Shutdown deep cleans and emergency response quoted separately. We provide a transparent quote after the plant walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Gordon McAllister",
      role: "Operations Director",
      facility: "Alba Precision Engineering, Livingston",
      quote:
        "Maundy Clean's machine-aware protocol is genuinely impressive. They understand our CNC equipment, they understand lockout-tagout, they understand shift handover. HSE inspections pass without cleaning-related findings. The night shift team is exceptional.",
      rating: 5,
    },
    {
      name: "Sarah Williamson",
      role: "HSE Manager",
      facility: "Clyde Electronics Manufacturing, East Kilbride",
      quote:
        "Electronics manufacturing has zero tolerance for particulate contamination. Maundy Clean's protocols, gowning discipline, and audit-ready records have supported our ISO 9001 surveillance audits without a single cleaning-related observation. Genuine specialists.",
      rating: 5,
    },
    {
      name: "Ian Sutherland",
      role: "Plant Manager",
      facility: "Highland Aerospace Components, Aberdeen",
      quote:
        "Aerospace manufacturing demands precision in everything — including cleaning. Maundy Clean delivers. Three-shift coverage, shutdown deep cleans that finish on time, machine-aware crews that don't break anything. Twelve years of partnership and counting.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Logistics & Warehousing",
      href: "/industries/logistics-warehousing",
      description:
        "Logistics and warehousing cleaning for distribution centres, cross-docks, and cold storage.",
    },
    {
      name: "Food & Beverage Processing",
      href: "/industries/food-beverage-processing",
      description:
        "Food and beverage processing cleaning with BRCGS and HACCP alignment.",
    },
    {
      name: "Pharma & Life Sciences",
      href: "/industries/pharma-life-sciences",
      description:
        "Pharma and life sciences cleaning with GMP and cleanroom protocols.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
      alt: "Manufacturing plant cleaning",
      caption: "Night shift production line cleaning — machine-aware, lockout-tagout trained",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c03f2f1596a1.jpg",
      alt: "Manufacturing floor care",
      caption: "Production floor degreasing, anti-slip treatment, line-marking refresh",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Manufacturing office cleaning",
      caption: "Admin offices, meeting rooms, reception — the people-facing side of the plant",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Manufacturing high dusting",
      caption: "Overhead structure cleaning — critical for product-fall prevention",
    },
  ],
};

// ============================================================
// Industry #20 — Logistics & Warehousing (Industrial)
// ============================================================
export const logisticsWarehousing: IndustryDetail = {
  slug: "logistics-warehousing",
  name: "Logistics & Warehousing",
  category: "Industrial",
  tagline: "Distribution centres, cross-docks, and cold storage — cleaned without disrupting throughput.",
  heroHeadline: "A warehouse floor\nclean enough for\nforklift cameras.",
  heroSubhead:
    "We clean distribution centres, warehouses, cross-dock facilities, and cold storage across Scotland. MHE-aware protocols, anti-slip floor care, and dock-door sanitation. Night shift and shutdown cover for 24/7 operations.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
  metaTitle: "Logistics & Warehouse Cleaning Scotland | Distribution Centres | Maundy Clean",
  metaDescription:
    "Logistics and warehouse cleaning across Scotland. Distribution centres, cross-docks, cold storage. MHE-aware protocols, anti-slip floor care, dock-door sanitation. 24/7 night shift and shutdown cover.",
  overviewParagraphs: [
    "Logistics and warehousing cleaning is a discipline of operational continuity. Distribution centres run 24/7, MHE (material handling equipment) operates continuously, throughput targets are tight, and any cleaning activity that blocks aisles or docks costs money. Maundy Clean has spent over a decade inside Scottish logistics — from 50,000 sq ft regional distribution centres to 500,000 sq ft national hubs.",
    "Our logistics division operates a night-shift-dominant model. Day shift covers offices, canteens, WCs, and welfare areas — typically 2–4 cleaners. Night shift covers the operational area — aisle-by-aisle floor machine-scrubbing, dock-door sanitation, racking inspection cleaning, spill response — typically 6–20 cleaners depending on facility size. Shutdown team covers periodic deep cleans, racking deep clean, and high-level structure cleaning during planned outages.",
    "We understand the rhythm of logistics: inbound receiving peaks, outbound dispatch peaks, shift handover 6am/6pm, MHE charging windows, planned maintenance shutdowns, peak season (Black Friday, Christmas), and SLA-driven dispatch deadlines. Our crews work around all of it — night shift cleans aisle-by-aisle while MHE is on charge, day shift handles welfare areas without disrupting operations, shutdown team covers deep cleans during planned outages. Every task is logged digitally and SLA-aligned.",
  ],
  compliance: [
    {
      code: "HSE",
      title: "HSE Warehousing & Storage Guidance",
      description:
        "Our protocols align to HSE warehousing and storage guidance — including MHE safety, pedestrian segregation, and slip-risk management.",
    },
    {
      code: "PUWER",
      title: "Provision and Use of Work Equipment Regulations",
      description:
        "All cleaning equipment is PUWER-compliant, PAT-tested, and risk-assessed for use around MHE. Ride-on scrubber-dryers equipped with hazard lights and reversing alarms.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use food-safe degreasers in cold storage areas and avoid silicones near MHE tyres.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Warehouse floors are high-slip-risk. Our floor care includes anti-slip treatment, spill response SLA, and wet-floor signage protocols aligned to HSE SLIPS guidance.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling in welfare areas and driver shower facilities (where present).",
    },
    {
      code: "GDP",
      title: "Good Distribution Practice (where applicable)",
      description:
        "For pharmaceutical and food distribution, our cleaning aligns to GDP requirements for storage facilities — including temperature-controlled area sanitation.",
    },
  ],
  servicesDelivered: [
    {
      name: "Warehouse Cleaning",
      href: "/services/warehouse-cleaning",
      description:
        "Full warehouse cleaning — aisles, racking, loading bays, dock doors, plant rooms, welfare areas.",
    },
    {
      name: "Distribution Centre Cleaning",
      href: "/services/distribution-centre-cleaning",
      description:
        "Large-format distribution centre cleaning — night shift dominant, MHE-aware, SLA-aligned.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Warehouse floor care — ride-on scrubber-dryer, anti-slip treatment, line-marking refresh, epoxy maintenance.",
    },
    {
      name: "High Dusting",
      href: "/services/high-dusting",
      description:
        "Overhead structure cleaning — rafters, ductwork, light fittings, high-level racking tops (critical for product-fall prevention).",
    },
    {
      name: "Office Cleaning",
      href: "/services/office-cleaning",
      description:
        "Admin offices, transport office, meeting rooms, canteens, WCs — the people-facing side of the operation.",
    },
    {
      name: "Nightly Janitorial",
      href: "/services/nightly-janitorial",
      description:
        "Overnight warehouse floor scrubbing, dock-door sanitation, welfare area cleaning, spill response.",
    },
  ],
  challenges: [
    {
      icon: "Clock",
      title: "24/7 operational continuity",
      description:
        "Distribution centres run 24/7. Cleaning can't block aisles or docks. Our night-shift-dominant model cleans aisle-by-aisle while MHE is on charge, with documented re-opening protocols.",
    },
    {
      icon: "Shield",
      title: "MHE-aware operation",
      description:
        "MHE (forklifts, reach trucks, pallet trucks) operates continuously. Our crews are trained on MHE awareness — high-visibility PPE, reversing alarm awareness, pedestrian segregation, no-go zones during MHE movement.",
    },
    {
      icon: "Zap",
      title: "Spill response and SLA pressure",
      description:
        "Spills in a warehouse block aisles and risk slips. Our spill response SLA is 15 minutes during night shift, 30 minutes during day shift. Wet-floor signage deployed immediately, spill cleared, area dried.",
    },
    {
      icon: "Building2",
      title: "Large-format complexity",
      description:
        "500,000 sq ft distribution centres need a different operational model than 50,000 sq ft warehouses. Our crew-to-area ratios, scheduling, and supervision scale with facility size.",
    },
    {
      icon: "Users",
      title: "Peak season surge",
      description:
        "Black Friday, Christmas, peak season — throughput doubles, cleaning frequency needs to double too. We provide surge capacity with 2 weeks' notice for existing clients.",
    },
    {
      icon: "TrendingUp",
      title: "Cost pressure in competitive logistics",
      description:
        "Logistics margins are tight. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any HSE-critical task or SLA.",
    },
  ],
  stats: [
    { value: "42+", label: "warehouses served" },
    { value: "6.2M", label: "sq ft cleaned nightly" },
    { value: "15 min", label: "spill response SLA" },
    { value: "11+", label: "years in logistics cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Operations survey",
      description:
        "Our account director walks the facility with the operations manager and HSE lead. We map aisles, dock doors, racking, welfare areas, and MHE traffic patterns. Discuss shift patterns and SLA requirements.",
      duration: "Days 1–3",
    },
    {
      step: "02",
      title: "Night-shift-dominant schedule & quote",
      description:
        "Within 5 business days you receive a written schedule covering day shift, night shift, and shutdown teams. MHE-aware protocols, spill response SLA, and fixed monthly fee included.",
      duration: "Days 3–5",
    },
    {
      step: "03",
      title: "Crew induction & mobilisation",
      description:
        "Logistics-trained crews are inducted, complete MHE awareness training and HSE briefing, and mobilise across all shifts. High-visibility PPE issued. Pedestrian segregation protocols briefed.",
      duration: "Days 5–14",
    },
    {
      step: "04",
      title: "Ongoing delivery & SLA reporting",
      description:
        "Nightly cleaning, daily SLA reports, monthly KPI reviews, quarterly operations meetings. Peak season surge capacity booked in advance. Shutdown deep cleans scheduled.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Clock",
      title: "Night-shift-dominant model",
      description:
        "Aisle-by-aisle floor machine-scrubbing while MHE is on charge. Documented re-opening protocols. Zero throughput disruption. Day shift handles welfare areas without operational impact.",
    },
    {
      icon: "Shield",
      title: "MHE-aware, HSE-compliant",
      description:
        "Crews trained on MHE awareness — high-visibility PPE, reversing alarm awareness, pedestrian segregation. HSE SLIPS-aligned floor care. Slip-risk minimised.",
    },
    {
      icon: "Zap",
      title: "15-minute spill response SLA",
      description:
        "Spill response within 15 minutes during night shift, 30 minutes during day shift. Wet-floor signage deployed immediately, spill cleared, area dried. Documented for liability protection.",
    },
    {
      icon: "Building2",
      title: "Scales with facility size",
      description:
        "50,000 sq ft or 500,000 sq ft — our crew-to-area ratios, scheduling, and supervision scale with facility size. Same protocols, same standards, same SLA reporting.",
    },
    {
      icon: "Users",
      title: "Peak season surge capacity",
      description:
        "Black Friday, Christmas, peak season — we double the crew with 2 weeks' notice for existing clients. Surge pricing transparent and capped at 1.5x. No throughput disruption.",
    },
    {
      icon: "TrendingUp",
      title: "SLA-aligned reporting",
      description:
        "Daily SLA reports, monthly KPI reviews. Every task logged with time-stamp and crew ID. Liability protection if a slip claim arises. Cost-out without SLA compromise.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you clean a 24/7 distribution centre without disrupting throughput?",
      a: "Our night-shift-dominant model is the answer. Aisles are cleaned one at a time, with documented re-opening protocols — typically an aisle is closed for 30–45 minutes while the floor is machine-scrubbed and dried. We coordinate with shift managers on MHE charging windows to minimise disruption. High-traffic areas (dock doors, main aisles) are cleaned during the lowest-throughput window (typically 2am–5am).",
    },
    {
      q: "How do you handle MHE safety during cleaning?",
      a: "Crews wear high-visibility PPE (Class 3 hi-vis vests, hi-vis trousers). They're trained on MHE awareness — reversing alarm awareness, pedestrian segregation, blind-spot awareness, no-go zones during MHE movement. Ride-on scrubber-dryers are equipped with hazard lights, reversing alarms, and beacon. Pedestrian segregation barriers respected. HSE SLIPS-aligned floor signage deployed.",
    },
    {
      q: "What's your spill response SLA?",
      a: "15 minutes during night shift (when most of our crews are on site), 30 minutes during day shift. Wet-floor signage deployed immediately on spill report, spill cleared with appropriate absorbents, area dried, signage stays for 15 minutes after drying. Whole incident logged with time-stamp and photos for liability protection.",
    },
    {
      q: "Can you provide surge capacity for Black Friday and Christmas?",
      a: "Yes. Existing clients get surge capacity with 2 weeks' notice — we add night shift crew, extend cleaning hours, and increase dock-door sanitation frequency. Surge pricing is transparent and capped at 1.5x normal rate. For peak season (mid-November to late December), we typically increase crew count by 40–60% depending on throughput forecast.",
    },
    {
      q: "Do you handle cold storage and temperature-controlled areas?",
      a: "Yes. Cold storage cleaning requires specialist protocols — insulated clothing, anti-slip floor care (condensation is a slip risk), food-safe sanitisers, documented temperature logging. Our cold storage crews complete additional training on cold-environment safety and food safety (where applicable). GDP compliance for pharmaceutical cold storage available.",
    },
    {
      q: "What's your pricing model?",
      a: "Most logistics contracts are priced as a fixed monthly fee based on total floor area, shift pattern, MHE count, and visit frequency. Typical 200,000 sq ft distribution centres pay between £6,500 and £14,000 per month. Surge periods and shutdown deep cleans quoted separately. We provide a transparent quote after the operations survey.",
    },
  ],
  testimonials: [
    {
      name: "James Hamilton",
      role: "Operations Director",
      facility: "Score Group Distribution, Dunfermline",
      quote:
        "Maundy Clean has handled our 350,000 sq ft DC for four years. Night-shift aisle-by-aisle protocol is genuinely throughput-neutral. Spill response is 12 minutes on average. Peak season surge was seamless. The SLA reporting is the cleanest I've seen in 20 years of logistics.",
      rating: 5,
    },
    {
      name: "Karen MacLeod",
      role: "HSE Manager",
      facility: "Caledonian Logistics Hub, Bellshill",
      quote:
        "MHE-aware operation is genuinely MHE-aware. Crews in Class 3 hi-vis, pedestrian segregation respected, scrubber-dryers with beacons and reversing alarms. HSE inspections pass without cleaning-related findings. Slip incidents down 80% since they started.",
      rating: 5,
    },
    {
      name: "Andrew Baird",
      role: "Site Manager",
      facility: "Highland Cold Storage, Aberdeen",
      quote:
        "Cold storage cleaning is specialist work. Maundy Clean's crews are trained, equipped, and GDP-compliant. Our pharmaceutical customer audits pass without cleaning-related findings. The temperature logging discipline is exemplary.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Manufacturing Plants",
      href: "/industries/manufacturing-plants",
      description:
        "Manufacturing plant cleaning — production lines, plant rooms, offices.",
    },
    {
      name: "Food & Beverage Processing",
      href: "/industries/food-beverage-processing",
      description:
        "Food and beverage processing cleaning with BRCGS and HACCP alignment.",
    },
    {
      name: "Retail Chains",
      href: "/industries/retail-chains",
      description:
        "Retail chain cleaning for store deliveries and stockroom support operations.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
      alt: "Warehouse cleaning",
      caption: "Night shift aisle-by-aisle floor machine-scrubbing — throughput-neutral",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c03f2f1596a1.jpg",
      alt: "Warehouse floor care",
      caption: "Ride-on scrubber-dryer with hazard lights and reversing alarm",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Warehouse dock door cleaning",
      caption: "Dock door sanitation — high-traffic, high-contamination zone",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Warehouse office cleaning",
      caption: "Transport office and welfare areas — the people-facing side",
    },
  ],
};

// ============================================================
// Industry #21 — Gyms & Fitness Studios (Specialty)
// ============================================================
export const gymsFitnessStudios: IndustryDetail = {
  slug: "gyms-fitness-studios",
  name: "Gyms & Fitness Studios",
  category: "Specialty",
  tagline: "Disinfection, changing rooms, and studio presentation — for the gyms members want to renew in.",
  heroHeadline: "A gym that\nsmells fresh\nat 5pm peak.",
  heroSubhead:
    "We clean gyms, fitness studios, leisure centres, and boutique fitness concepts across Scotland. EN 14476 virucidal disinfection, sweat-management protocols, and presentation that drives member retention. Day porters and overnight deep cleans.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
  metaTitle: "Gym & Fitness Studio Cleaning Scotland | Disinfection | Maundy Clean",
  metaDescription:
    "Gym and fitness studio cleaning across Scotland. EN 14476 virucidal disinfection, sweat management, changing room sanitation. Day porters and overnight deep cleans. Member retention-driven protocols.",
  overviewParagraphs: [
    "Gym cleaning is a discipline of disinfection and presentation. Members touch shared surfaces (weights, machines, mats, lockers) continuously, sweat transfers bacteria and viruses, and the smell of a gym at peak time is the single biggest driver of member churn. Maundy Clean has spent over a decade inside Scottish gyms — from independent boutique studios to multi-site leisure chains.",
    "Our gym division operates a two-team model: a day porter team (6am–10pm) handling continuous touchpoint disinfection, equipment wipe-downs, changing room refresh, and bin emptying; and an overnight deep clean team (10pm–6am) handling floor machine-scrubbing, mat sanitisation, shower deep clean, and air-handling unit cleaning. Every task follows gym-specific protocols validated against EN 14476 virucidal standards.",
    "We understand the rhythm of a gym: pre-work peak 6am–8am, mid-morning quiet, lunchtime rush 12pm–2pm, afternoon quiet, evening peak 5pm–9pm. Our crews work around all of it — day porters are part of the member experience (friendly, branded uniforms, never intrusive on workouts), overnight team does the heavy work. We never spray disinfectant near members — only pre-saturated wipes or pour-and-wipe methods during opening hours.",
  ],
  compliance: [
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "All shared touchpoints (weights, machines, mats, lockers) wiped with EN 14476 virucidal disinfectant — effective against influenza, HPV, athlete's foot fungus, and other gym-relevant pathogens.",
    },
    {
      code: "EN 1276",
      title: "European Standard for Bactericidal Activity",
      description:
        "Disinfectants meet EN 1276 bacterial efficacy — verified by batch certification. Critical for MRSA and staph control in shared-equipment environments.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-fragrance, skin-safe products as standard — many members have eczema or sensitivities.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Gym floors (especially wet changing rooms and shower areas) are high-slip-risk. Anti-slip treatment, wet-floor signage, and spill response aligned to HSE SLIPS.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include showerhead descaling, water outlet flushing, and temperature checks — critical for gyms with shower facilities.",
    },
    {
      code: "Pool Water Treatment",
      title: "PWTAG Pool Water Treatment Standards (where applicable)",
      description:
        "For gyms with pools — pool hall cleaning, surround disinfection, and changing room sanitation aligned to PWTAG standards.",
    },
  ],
  servicesDelivered: [
    {
      name: "Gym & Fitness Centre Cleaning",
      href: "/services/gym-fitness-cleaning",
      description:
        "Full gym cleaning — gym floor, studios, changing rooms, reception, café area. Day porter and overnight deep clean.",
    },
    {
      name: "Day Porter Services",
      href: "/services/day-porter-services",
      description:
        "Day-shift porter — equipment wipe-downs, touchpoint disinfection, changing room refresh, bin emptying.",
    },
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description:
        "Whole-gym disinfection during outbreak response (staph, ringworm, COVID) or between member cohorts.",
    },
    {
      name: "Restroom & Changing Room Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Changing rooms, showers, lockers, and WCs descaled, disinfected, and re-stocked with audit-ready records.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Gym floor care — rubber floor deep clean, studio floor sanitisation, anti-slip treatment in wet areas.",
    },
    {
      name: "Electrostatic Disinfection",
      href: "/services/electrostatic-disinfection-add-on",
      description:
        "Whole-gym electrostatic spraying for rapid touchpoint disinfection — particularly effective for outbreak response.",
    },
  ],
  challenges: [
    {
      icon: "Zap",
      title: "Shared-equipment pathogen control",
      description:
        "Weights, machines, mats, and lockers are touched by hundreds of members daily. MRSA, athlete's foot, ringworm, HPV — all transmittable via shared equipment. EN 14476 virucidal disinfection on every touchpoint.",
    },
    {
      icon: "Heart",
      title: "Sweat and odour management",
      description:
        "Gym smell is the single biggest driver of member churn. Our protocols address sweat at source — mat sanitisation, fabric upholstery extraction, air-handling unit cleaning, and active odour control (not just masking).",
    },
    {
      icon: "Users",
      title: "Member-present discretion",
      description:
        "Members don't want to see mop buckets or smell bleach during their workout. Day porters use pre-saturated wipes and quiet equipment, wear branded uniforms, and work discreetly around workouts.",
    },
    {
      icon: "Clock",
      title: "Peak-hour presentation pressure",
      description:
        "5pm–9pm is peak — and it's also when the gym looks worst. Day porters handle continuous refresh during peak, with extra crews mobilised for the post-peak reset.",
    },
    {
      icon: "Building2",
      title: "Multi-site leisure chain consistency",
      description:
        "Multi-site gym chains need consistent standards across every site. We provide consolidated reporting, identical protocols, and a single account manager across all sites.",
    },
    {
      icon: "TrendingUp",
      title: "Member retention pressure",
      description:
        "Cleanliness is consistently in the top 3 factors in gym member renewal decisions. Our protocols directly support retention rates — and we measure it via member satisfaction scores.",
    },
  ],
  stats: [
    { value: "55+", label: "gyms served" },
    { value: "94%", label: "member cleanliness satisfaction" },
    { value: "5 min", label: "spill response SLA" },
    { value: "10+", label: "years in gym cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Site walk-through",
      description:
        "Our regional manager walks the gym with the operations manager. We map zones (gym floor, studios, changing rooms, reception, café), identify peak periods, and discuss member rhythm.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Two-team schedule & quote",
      description:
        "Within 2 business days you receive a written schedule covering day porter and overnight deep clean teams. EN 14476 virucidal protocols, COSHH register, and fixed monthly fee included.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A uniformed, member-aware, gym-trained crew is inducted to the site, introduced to staff, and the first clean is supervised end-to-end. EN 14476 virucidal protocols briefed.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & review",
      description:
        "Daily cleaning, monthly KPI reports (including member satisfaction scores), quarterly review meetings. Surge capacity for New Year resolution peak available with 1 week's notice.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Zap",
      title: "EN 14476 virucidal disinfection",
      description:
        "Every shared touchpoint wiped with EN 14476 virucidal disinfectant — effective against influenza, HPV, athlete's foot fungus, and other gym-relevant pathogens. Cross-contamination risk minimised.",
    },
    {
      icon: "Heart",
      title: "Sweat and odour management",
      description:
        "Sweat addressed at source — mat sanitisation, fabric upholstery extraction, air-handling unit cleaning. Active odour control (not just masking with fragrances). The single biggest retention driver.",
    },
    {
      icon: "Users",
      title: "Member-aware discretion",
      description:
        "Day porters use pre-saturated wipes and quiet equipment, wear branded uniforms, and work discreetly around workouts. Never intrusive, never smelly, never disruptive.",
    },
    {
      icon: "Clock",
      title: "Peak-hour continuous refresh",
      description:
        "5pm–9pm peak gets continuous day porter coverage — equipment wipe-downs, bin emptying, changing room refresh, spill response. Post-peak reset handled by extra crews.",
    },
    {
      icon: "Building2",
      title: "Multi-site consolidated reporting",
      description:
        "Gym chains get one account manager across all sites, one monthly report, identical protocols. Member satisfaction scores tracked across the estate. Critical for chain governance.",
    },
    {
      icon: "TrendingUp",
      title: "Retention-driven cleaning",
      description:
        "Cleanliness is in the top 3 factors in member renewal decisions. Our protocols directly support retention rates — and we measure it. Member satisfaction scores reported monthly.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you disinfect shared equipment without disrupting workouts?",
      a: "Day porters use pre-saturated disinfectant wipes — quick, discreet, no spray, no smell. Wipe-down of a machine takes 30 seconds. Members are encouraged to wipe down after use (we provide wipes stations), and our porters do a deeper disinfection rotation throughout the day. During peak hours, we focus on high-touch touchpoints (handles, grips, mats) — full wipe-down of every machine happens overnight.",
    },
    {
      q: "How do you handle the gym smell problem?",
      a: "Gym smell is bacteria breaking down sweat — not just 'sweat itself'. Our protocols address the bacteria at source: mat sanitisation with EN 14476 virucidal disinfectant, fabric upholstery hot-water extraction, air-handling unit cleaning (where dust and biofilm accumulate), and active odour-neutraliser treatment (not just fragrance masking). We measure odour improvement via member satisfaction scores.",
    },
    {
      q: "Can you handle outbreak response (staph, ringworm, COVID)?",
      a: "Yes. Outbreak response is mobilised within 4 hours. Dedicated equipment, full PPE, EN 14476 virucidal disinfectant, documented stand-down protocol. Whole-gym electrostatic spraying available for rapid touchpoint disinfection. We coordinate with the gym's health & safety lead and follow public health guidance on gym closure and re-opening.",
    },
    {
      q: "How do you handle New Year resolution peak in January?",
      a: "Existing clients get surge capacity with 1 week's notice — extra day porter shifts, extended overnight hours, and additional weekend deep cleans. Surge pricing is transparent and capped at 1.5x normal rate. New Year's resolution peak typically requires 50–80% more cleaning capacity for 4–6 weeks.",
    },
    {
      q: "Do you handle pools, spas, and saunas?",
      a: "Yes. Pool hall cleaning aligned to PWTAG standards, including surround disinfection, showerhead descaling, and changing room sanitation. Spa and sauna facilities cleaned with EN 14476 virucidal disinfectants on all touchpoints. Specialist pool-chemical protocols followed. Audit-ready records on every visit.",
    },
    {
      q: "What's your pricing model?",
      a: "Most gym contracts are priced as a fixed monthly fee based on floor area, number of members, and visit frequency. Typical 10,000–20,000 sq ft gyms pay between £1,800 and £3,200 per month. Boutique studios (under 5,000 sq ft) priced individually. Multi-site chains receive a consolidated estate quote with volume discount. We provide a transparent quote after the site walk-through.",
    },
  ],
  testimonials: [
    {
      name: "David Ferguson",
      role: "Operations Director",
      facility: "PureGym Scotland (12 sites)",
      quote:
        "Twelve sites, one account manager, identical protocols. Member satisfaction with cleanliness is at 94% across the estate. New Year surge was seamless. The smell management protocol has genuinely reduced churn. Couldn't ask for more.",
      rating: 5,
    },
    {
      name: "Karen Borthwick",
      role: "Owner",
      facility: "Barry's Bootcamp Edinburgh",
      quote:
        "Boutique fitness demands premium presentation. Maundy Clean delivers — day porters are part of the member experience, overnight deep cleans are flawless, and the smell protocol is the best I've experienced. Member feedback consistently mentions cleanliness.",
      rating: 5,
    },
    {
      name: "Gordon Stewart",
      role: "General Manager",
      facility: "Edinburgh Leisure (5 sites)",
      quote:
        "Public leisure centres are demanding — pools, gyms, studios, changing rooms, all under one roof. Maundy Clean handles it all. PWTAG-compliant pool cleaning, EN 14476 gym disinfection, member-aware day porters. Five sites, one account manager, one monthly report.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Hotels & Resorts",
      href: "/industries/hotels-resorts",
      description:
        "Hotel cleaning for leisure clubs, spa facilities, and hotel gyms.",
    },
    {
      name: "Salons & Spas",
      href: "/industries/salons-spas",
      description:
        "Salon and spa cleaning with shared-equipment protocols and EN 14476 virucidal disinfection.",
    },
    {
      name: "Corporate Offices",
      href: "/industries/corporate-offices",
      description:
        "Corporate office cleaning for in-office gyms and corporate wellness facilities.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
      alt: "Gym cleaning",
      caption: "Day porter touchpoint disinfection — EN 14476 virucidal wipes",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Gym changing room cleaning",
      caption: "Changing room and shower deep clean — anti-slip, PWTAG-aligned",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Gym floor care",
      caption: "Rubber gym floor deep clean — sweat extraction, sanitisation",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Gym studio cleaning",
      caption: "Studio floor sanitisation — mat cleaning, air-handling unit cleaning",
    },
  ],
};

// ============================================================
// Industry #22 — Auto Dealerships (Specialty)
// ============================================================
export const autoDealerships: IndustryDetail = {
  slug: "auto-dealerships",
  name: "Auto Dealerships",
  category: "Specialty",
  tagline: "Showroom presentation, service bay degreasing, and customer lounge standards — premium brand-aligned.",
  heroHeadline: "A showroom floor\nthat sells the car\nbefore the test drive.",
  heroSubhead:
    "We clean car dealerships, showrooms, service centres, and bodyshops across Scotland. Brand-standard showroom presentation, service bay degreasing, and customer lounge standards. Daily early-morning resets and weekly deep cleans.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
  metaTitle: "Auto Dealership Cleaning Scotland | Showroom | Service Bay | Maundy Clean",
  metaDescription:
    "Auto dealership cleaning across Scotland. Showrooms, service centres, bodyshops. Brand-standard presentation, service bay degreasing, customer lounge. Daily early-morning resets and weekly deep cleans.",
  overviewParagraphs: [
    "Auto dealership cleaning is a discipline of premium presentation. The showroom floor has to sell the car before the salesperson does. The customer lounge has to feel like a premium brand experience. The service reception has to look professional, not industrial. And the service bay — well, the service bay has to be degreased regularly enough that customers walking through don't notice the oil. Maundy Clean has spent over a decade inside Scottish auto dealerships, from independent used-car showrooms to multi-franchise premium brand groups.",
    "Our auto dealership division operates a four-zone model: showroom (premium presentation — floor polishing, glass squeegeeing, vehicle-display dusting); customer lounge (premium hospitality standards — café-style kitchen, lounge furniture, customer WCs); service reception (professional presentation — service counter, customer waiting area, vehicle handover zone); and service bay (industrial degreasing — floor degreasing, bay cleaning, technician welfare areas). Each zone has dedicated crews, equipment, and protocols.",
    "We understand the rhythm of a dealership: showroom opens 9am, customer appointments throughout the day, service drop-off 7:30am–9am, service collection 4pm–6pm, weekend is the busiest sales period. Our crews work around all of it — early-morning reset (6am–8:30am) before the showroom opens, day porter (9am–6pm) handling continuous touchpoint refresh, overnight deep clean (10pm–6am) handling floor polishing and service bay degreasing. Brand-standard compliance audited weekly.",
  ],
  compliance: [
    {
      code: "HSE",
      title: "HSE Motor Vehicle Repair Guidance",
      description:
        "Our service bay cleaning aligns to HSE motor vehicle repair guidance — including slip-risk management, COSHH for workshop chemicals, and equipment storage.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. Service bay degreasers are environmentally screened for oil separator discharge. Showroom products are low-fragrance, surface-safe.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Service bay floors are high-slip-risk (oil, coolant, water). Anti-slip treatment, spill response, and wet-floor signage aligned to HSE SLIPS guidance. Showroom floors polished to brand-standard slip rating.",
    },
    {
      code: "PUWER",
      title: "Provision and Use of Work Equipment Regulations",
      description:
        "All cleaning equipment is PUWER-compliant, PAT-tested, and risk-assessed for use around vehicles. Ride-on scrubber-dryers equipped with hazard lights and vehicle-aware operation.",
    },
    {
      code: "Environmental",
      title: "Environmental Discharge Compliance",
      description:
        "Service bay cleaning effluent routed through oil separators. No chemical discharge to surface drains. Used cleaning cloths disposed of as contaminated waste where appropriate.",
    },
  ],
  servicesDelivered: [
    {
      name: "Showroom Cleaning",
      href: "/services/showroom-cleaning",
      description:
        "Premium showroom cleaning — floor polishing, glass squeegeeing, vehicle-display dusting, brand-standard presentation.",
    },
    {
      name: "Auto Dealership Cleaning",
      href: "/services/auto-dealership-cleaning",
      description:
        "Full dealership cleaning — showroom, customer lounge, service reception, service bay. Daily and weekly protocols.",
    },
    {
      name: "Day Porter Services",
      href: "/services/day-porter-services",
      description:
        "Day-shift porter — showroom touchpoint refresh, customer lounge restock, ad-hoc response.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Showroom floor polishing and re-sealing, service bay floor degreasing, anti-slip treatment.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Showroom exterior and interior glazing — including large showroom display windows on a scheduled rotation.",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Customer and staff WCs — premium standard for customer WCs, robust standard for staff/technician WCs.",
    },
  ],
  challenges: [
    {
      icon: "Users",
      title: "Showroom premium presentation",
      description:
        "The showroom sells the car. Floor has to gleam. Glass has to be streak-free. Display vehicles have to be dust-free. Brand-standard compliance audited weekly. Premium presentation, every day.",
    },
    {
      icon: "Clock",
      title: "Early-morning opening deadline",
      description:
        "Showroom opens at 9am. Our crews arrive at 6am and finish by 8:30am — three and a half hours of uninterrupted cleaning before staff and customers arrive. If we ever miss, we re-crew at our cost.",
    },
    {
      icon: "Shield",
      title: "Vehicle-safe operation",
      description:
        "Display vehicles are expensive. Our crews are trained on vehicle-aware cleaning — no spray near paintwork, no equipment touching vehicles, no chemical drips on bodywork. Display-vehicle dusting uses soft detailing brushes only.",
    },
    {
      icon: "Building2",
      title: "Multi-zone complexity",
      description:
        "Showroom, customer lounge, service reception, service bay — four zones with different protocols, different standards, different equipment. Our crews are zone-trained, with colour-coded equipment to prevent cross-contamination.",
    },
    {
      icon: "Zap",
      title: "Service bay industrial degreasing",
      description:
        "Service bay floors collect oil, coolant, and brake dust. Our overnight team handles degreasing, anti-slip treatment, and oil separator maintenance. Environmental discharge compliance throughout.",
    },
    {
      icon: "TrendingUp",
      title: "Brand-standard compliance",
      description:
        "Premium auto brands impose customer-experience standards on dealerships. Our protocols align to your franchise's brand manual — VW, Audi, BMW, Mercedes, JLR, Porsche. Brand-standard audits passed.",
    },
  ],
  stats: [
    { value: "32+", label: "dealerships served" },
    { value: "98%", label: "opening-hour deadline hit rate" },
    { value: "4.7/5", label: "avg customer experience score" },
    { value: "10+", label: "years in dealership cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Dealership walk-through",
      description:
        "Our regional manager walks the dealership with the general manager and brand experience manager. We map zones (showroom, customer lounge, service reception, service bay), identify brand-standard requirements, and discuss opening hours.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Four-zone schedule & quote",
      description:
        "Within 2 business days you receive a written schedule covering all four zones with brand-standard protocols. COSHH register, vehicle-aware protocols, and fixed monthly fee included.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A uniformed, brand-trained, vehicle-aware crew is inducted to the dealership, introduced to staff, and the first clean is supervised end-to-end. Brand-standard photos taken and shared.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & brand audit",
      description:
        "Daily early-morning resets, day porter coverage, overnight deep cleans. Monthly KPI reports, quarterly brand-standard audit, quarterly review with general manager.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Users",
      title: "Premium showroom presentation",
      description:
        "Floor gleaming, glass streak-free, display vehicles dust-free. Brand-standard compliance audited weekly. The showroom sells the car before the salesperson does.",
    },
    {
      icon: "Clock",
      title: "Opening-hour deadline guarantee",
      description:
        "98% hit rate on opening-hour deadlines. Crews arrive 6am, finish 8:30am. If we ever miss, we re-crew at our cost. No charge, no excuse.",
    },
    {
      icon: "Shield",
      title: "Vehicle-aware operation",
      description:
        "Crews trained on vehicle-aware cleaning — no spray near paintwork, no equipment touching vehicles, no chemical drips. Display-vehicle dusting uses soft detailing brushes only.",
    },
    {
      icon: "Building2",
      title: "Four-zone expertise",
      description:
        "Showroom, customer lounge, service reception, service bay — each gets zone-specific protocols. Colour-coded equipment prevents cross-contamination. Consistent standards across every zone.",
    },
    {
      icon: "Zap",
      title: "Service bay degreasing",
      description:
        "Overnight degreasing, anti-slip treatment, oil separator maintenance. Environmental discharge compliance throughout. Service bay looks professional, not industrial — customers walking through don't notice the oil.",
    },
    {
      icon: "TrendingUp",
      title: "Brand-standard compliance",
      description:
        "Our protocols align to your franchise's brand manual. Brand-standard audits passed. Customer experience scores consistently above 4.5/5. Direct revenue impact on sales.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you clean around display vehicles without damaging them?",
      a: "Crews are explicitly trained on vehicle-aware cleaning. No spray near paintwork — only pre-saturated cloths. No cleaning equipment touching vehicles — buckets, mops, and scrubbers kept at safe distance. No chemical drips on bodywork. Display-vehicle dusting uses soft detailing brushes only, with brand-approved detailing spray. Display vehicles are never moved by our crews. Vehicle damage risk is zero.",
    },
    {
      q: "Can you cover all four zones — showroom, lounge, service reception, service bay?",
      a: "Yes. Our four-zone model is the standard for auto dealership contracts. Each zone has dedicated crews, colour-coded equipment, and zone-specific protocols. Showroom gets premium-presentation specialists. Customer lounge gets hospitality-trained cleaners. Service reception gets professional-presentation crews. Service bay gets industrial-degreasing specialists. One account manager across all four zones.",
    },
    {
      q: "How do you handle service bay degreasing and environmental compliance?",
      a: "Service bay floors are degreased with environmentally-screened degreasers (no chlorinated solvents). Effluent routed through oil separators — no chemical discharge to surface drains. Used cleaning cloths disposed of as contaminated waste where appropriate. Anti-slip treatment applied after degreasing. HSE SLIPS-aligned wet-floor signage during cleaning. Environmental discharge compliance throughout.",
    },
    {
      q: "Do you handle bodyshops and paint booths?",
      a: "Yes, but paint booths require specialist protocols. Bodyshop general cleaning (masking areas, panel prep, technician welfare) is in scope. Paint booth interior cleaning requires shutdown coordination and specialist protocols — quoted separately as a periodic service. We coordinate with your bodyshop manager on shutdown windows and contamination control.",
    },
    {
      q: "Can you provide brand-standard compliance audits?",
      a: "Yes. Our quarterly brand-standard audit covers all four zones against your franchise's brand manual (VW, Audi, BMW, Mercedes, JLR, Porsche, etc.). Photographic evidence, scorecard, and improvement action plan provided. Audit results shared with the general manager and brand experience manager. Many of our clients use our audits as part of their franchise compliance evidence.",
    },
    {
      q: "What's your pricing model?",
      a: "Most auto dealership contracts are priced as a fixed monthly fee based on showroom size, service bay count, and visit frequency. Typical medium-sized dealerships (8,000–15,000 sq ft showroom + service) pay between £2,200 and £4,500 per month. Multi-site groups receive a consolidated estate quote with volume discount. We provide a transparent quote after the dealership walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Andrew Park",
      role: "General Manager",
      facility: "BMW Edinburgh",
      quote:
        "Premium brand demands premium presentation. Maundy Clean delivers — showroom gleaming by 8:30am, customer lounge spotless, service bay degreased overnight. Brand-standard audits consistently 4.8/5. Genuine partner in customer experience.",
      rating: 5,
    },
    {
      name: "Sarah Drummond",
      role: "Operations Director",
      facility: "Snows Motor Group (4 sites)",
      quote:
        "Four dealerships, four franchises (VW, Audi, Seat, Skoda), one account manager, one report. Brand-standard compliance across all four. Customer experience scores up 0.4 since we switched. Saved 11% versus the previous contractor.",
      rating: 5,
    },
    {
      name: "Gordon Mitchell",
      role: "Dealer Principal",
      facility: "Porsche Centre Glasgow",
      quote:
        "Porsche has the highest brand-standard expectations in the industry. Maundy Clean meets them. Showroom presentation is flawless, vehicle-aware cleaning is genuinely vehicle-aware, and the quarterly brand audit gives me confidence for franchise reviews. Exceptional.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Retail Chains",
      href: "/industries/retail-chains",
      description:
        "Retail chain cleaning with brand-consistent presentation standards.",
    },
    {
      name: "Showroom Cleaning",
      href: "/services/showroom-cleaning",
      description:
        "Premium showroom cleaning for cars, kitchens, bathrooms, and luxury retail.",
    },
    {
      name: "Corporate Offices",
      href: "/industries/corporate-offices",
      description:
        "Corporate office cleaning for dealership admin and management suites.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
      alt: "Auto dealership showroom cleaning",
      caption: "Pre-opening showroom reset — floor polishing, glass squeegeeing, display-vehicle dusting",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Customer lounge cleaning",
      caption: "Customer lounge — premium hospitality standards, café-style kitchen",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/117ddf841aef.jpg",
      alt: "Service bay cleaning",
      caption: "Service bay overnight degreasing — environmental discharge compliant",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Dealership floor care",
      caption: "Showroom floor polishing and re-sealing — brand-standard slip rating",
    },
  ],
};

// ============================================================
// Industry #23 — Salons & Spas (Specialty)
// ============================================================
export const salonsSpas: IndustryDetail = {
  slug: "salons-spas",
  name: "Salons & Spas",
  category: "Specialty",
  tagline: "Hair salons, beauty clinics, and spa facilities — presentation that drives repeat bookings.",
  heroHeadline: "A salon that\nfeels as premium\nas the price list.",
  heroSubhead:
    "We clean hair salons, beauty clinics, nail bars, medspas, and day spas across Scotland. Shared-equipment disinfection, treatment room sanitation, and premium customer-facing presentation. PVG-checked, EN 14476 virucidal, brand-standard compliant.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
  metaTitle: "Salon & Spa Cleaning Scotland | Hair | Beauty | Medspa | Maundy Clean",
  metaDescription:
    "Salon and spa cleaning across Scotland. Hair salons, beauty clinics, nail bars, medspas, day spas. Shared-equipment disinfection, treatment room sanitation, premium presentation. EN 14476 virucidal.",
  overviewParagraphs: [
    "Salon and spa cleaning is a discipline of premium presentation and shared-equipment hygiene. Customers pay premium prices and expect premium experience — from the moment they walk into reception to the moment they leave the treatment room. Shared equipment (scissors, brushes, towels, massage tables, nail tools) is a pathogen transmission risk. Maundy Clean has spent over a decade inside Scottish salons and spas — from independent hair salons to multi-site medspa groups.",
    "Our salon and spa division operates a two-team model: a daily reset team (typically 6am–9am or 8pm–11pm depending on opening hours) handling floor mopping, mirror polishing, surface disinfection, and towel restock; and a weekly deep clean team handling carpet extraction, upholstery, treatment room deep sanitisation, and shower/plumbing fixture descaling. Every task follows salon-specific protocols validated against EN 14476 virucidal standards.",
    "We understand the rhythm of a salon: morning setup 9am, first clients 9:30am, lunch break (often skipped), afternoon appointments, evening peak 5pm–8pm, close 8pm. Spas have a different rhythm — typically 10am–6pm with treatment rotations. Our crews work around all of it — early-morning reset before opening, evening reset after close, weekly deep cleans on the salon's quietest day. We never clean during client appointments unless it's an emergency.",
  ],
  compliance: [
    {
      code: "EN 14476",
      title: "European Standard for Virucidal Activity",
      description:
        "Shared touchpoints (chairs, mirrors, treatment beds, handles, product testers) wiped with EN 14476 virucidal disinfectant — effective against HPV, herpes, hepatitis, and other salon-relevant pathogens.",
    },
    {
      code: "EN 1276",
      title: "European Standard for Bactericidal Activity",
      description:
        "Disinfectants meet EN 1276 bacterial efficacy — critical for MRSA, staph, and fungal control in shared-equipment environments.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-fragrance, skin-safe products as standard — many salon clients have sensitivities or are undergoing treatments.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include showerhead descaling, water outlet flushing, and temperature checks — critical for spas with shower facilities and hydrotherapy pools.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Salon floors (especially hair salon floors with cut hair and water) are slip-risk. Anti-slip treatment, wet-floor signage, and spill response aligned to HSE SLIPS.",
    },
    {
      code: "PWTAG",
      title: "PWTAG Pool Water Treatment Standards (where applicable)",
      description:
        "For spas with pools, hydrotherapy, or thermal suites — pool hall cleaning, surround disinfection, and changing room sanitation aligned to PWTAG standards.",
    },
  ],
  servicesDelivered: [
    {
      name: "Salon & Spa Cleaning",
      href: "/services/salon-spa-cleaning",
      description:
        "Full salon and spa cleaning — hair salons, beauty clinics, nail bars, medspas, day spas. Daily reset and weekly deep clean.",
    },
    {
      name: "Disinfection Services",
      href: "/services/disinfection-services",
      description:
        "Whole-salon disinfection during outbreak response or between high-risk treatment cohorts.",
    },
    {
      name: "Restroom & Changing Room Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Client and staff WCs, changing rooms, and shower facilities — descaled, disinfected, re-stocked.",
    },
    {
      name: "Carpet & Upholstery Cleaning",
      href: "/services/carpet-rug-cleaning",
      description:
        "Salon floor carpet extraction, treatment room upholstery cleaning, waiting area furniture refresh.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Salon floor care — VCT strip & re-seal, hardwood refinishing, tile & grout deep cleaning, anti-slip treatment.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Salon exterior and interior glazing, including large shopfront display windows, on a scheduled rotation.",
    },
  ],
  challenges: [
    {
      icon: "Zap",
      title: "Shared-equipment pathogen control",
      description:
        "Scissors, brushes, towels, massage tables, nail tools — shared by hundreds of clients. HPV, herpes, hepatitis, fungal infections, MRSA — all transmittable. EN 14476 virucidal disinfection on every touchpoint.",
    },
    {
      icon: "Users",
      title: "Premium customer-facing presentation",
      description:
        "Clients paying £80+ for a haircut or £150+ for a facial expect premium presentation. Mirrors streak-free, floors spotless, products dusted, towels fresh, reception immaculate. Brand-standard compliance.",
    },
    {
      icon: "Clock",
      title: "Operating-hours sensitivity",
      description:
        "Salons operate 9am–8pm typically. Spas 10am–6pm. Our crews work before opening or after close — never during client appointments. Weekly deep cleans happen on the salon's quietest day (typically Monday for salons, Tuesday for spas).",
    },
    {
      icon: "Heart",
      title: "Skin-safe, low-fragrance products",
      description:
        "Salon clients have sensitivities, eczema, or are undergoing treatments. We use low-fragrance, skin-safe products as standard. No spray disinfectants near clients — only pre-saturated wipes or pour-and-wipe during opening hours.",
    },
    {
      icon: "Building2",
      title: "Multi-site salon group consistency",
      description:
        "Multi-site salon groups need consistent standards across every site. We provide consolidated reporting, identical protocols, and a single account manager across all sites.",
    },
    {
      icon: "TrendingUp",
      title: "Repeat booking pressure",
      description:
        "Salon revenue depends on repeat bookings. Cleanliness is consistently in the top 3 factors in client renewal decisions. Our protocols directly support repeat booking rates — and we measure it via client satisfaction scores.",
    },
  ],
  stats: [
    { value: "65+", label: "salons & spas served" },
    { value: "94%", label: "client cleanliness satisfaction" },
    { value: "98%", label: "opening-hour deadline hit rate" },
    { value: "10+", label: "years in salon cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Salon walk-through",
      description:
        "Our regional manager walks the salon with the owner or manager. We map zones (reception, styling stations, treatment rooms, WCs, staff areas), identify brand-standard requirements, and discuss opening hours.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Two-team schedule & quote",
      description:
        "Within 2 business days you receive a written schedule covering daily reset and weekly deep clean teams. EN 14476 virucidal protocols, COSHH register, and fixed monthly fee included.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & first clean",
      description:
        "A uniformed, salon-trained, skin-safe-product-trained crew is inducted to the salon, introduced to staff, and the first clean is supervised end-to-end. EN 14476 virucidal protocols briefed.",
      duration: "Days 4–7",
    },
    {
      step: "04",
      title: "Ongoing delivery & review",
      description:
        "Daily cleaning, monthly KPI reports (including client satisfaction scores), quarterly review meetings. Multi-site groups receive consolidated estate reporting.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Zap",
      title: "EN 14476 virucidal disinfection",
      description:
        "Every shared touchpoint wiped with EN 14476 virucidal disinfectant — effective against HPV, herpes, hepatitis, fungal infections, MRSA. Cross-contamination risk minimised. Audit-ready records.",
    },
    {
      icon: "Users",
      title: "Premium presentation",
      description:
        "Mirrors streak-free, floors spotless, products dusted, towels fresh, reception immaculate. Brand-standard compliance audited. The premium experience clients pay for.",
    },
    {
      icon: "Clock",
      title: "Operating-hours sensitive",
      description:
        "Crews work before opening or after close — never during client appointments. Weekly deep cleans on the salon's quietest day. Client experience never disrupted by cleaning.",
    },
    {
      icon: "Heart",
      title: "Skin-safe, low-fragrance products",
      description:
        "Low-fragrance, skin-safe products as standard. No spray disinfectants near clients. Hypoallergenic protocols available for medspas and aesthetic clinics. Every product pre-approved by the salon owner.",
    },
    {
      icon: "Building2",
      title: "Multi-site consolidated reporting",
      description:
        "Salon groups get one account manager across all sites, one monthly report, identical protocols. Client satisfaction scores tracked across the estate. Critical for group governance.",
    },
    {
      icon: "TrendingUp",
      title: "Repeat-booking-driven cleaning",
      description:
        "Cleanliness is in the top 3 factors in client repeat-booking decisions. Our protocols directly support repeat booking rates — and we measure it via client satisfaction scores.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you disinfect shared salon equipment?",
      a: "Day porters or end-of-day crews wipe down shared touchpoints (chairs, mirrors, treatment beds, handles, product testers, styling stations) with EN 14476 virucidal disinfectant wipes. For equipment that goes on or near skin (massage tables, facial beds, nail stations), we use skin-safe, no-rinse sanitisers that meet EN 1276 (bacterial) and EN 14476 (virucidal) standards. Tools (scissors, brushes, nail tools) are sterilised by the salon team — we don't handle those, but we clean the sterilisation equipment.",
    },
    {
      q: "Can you clean around clients during appointments?",
      a: "Ideally not. We prefer to clean before opening or after close. If cleaning is required during operating hours (e.g., a spill in reception, a treatment room changeover), our crews use quiet equipment, pre-saturated wipes, and discreet behaviour — never spray disinfectants, never use noisy equipment, never disrupt client experience. Client experience always takes precedence over cleaning schedule.",
    },
    {
      q: "How do you handle treatment room sanitation?",
      a: "Treatment rooms are deep cleaned at end of day — treatment bed sanitised, side surfaces wiped, floors mopped, waste emptied, linen restocked. For medspas and aesthetic clinics, we use hypoallergenic, low-residue protocols with independently certified products. EN 14476 virucidal disinfectant on all touchpoints. Audit-ready records on every visit.",
    },
    {
      q: "What products do you use around clients with sensitivities?",
      a: "Low-fragrance, skin-safe products as standard — we avoid the heavy floral fragrances that many clients dislike and some are allergic to. For medspas and aesthetic clinics, we use hypoallergenic protocols with independently certified products. Every product is pre-approved by the salon owner and carries a current COSHH datasheet. No spray disinfectants during operating hours.",
    },
    {
      q: "Can you handle spa pools, hydrotherapy, and thermal suites?",
      a: "Yes. Pool hall cleaning aligned to PWTAG standards, including surround disinfection, showerhead descaling, and changing room sanitation. Hydrotherapy pools, thermal suites (sauna, steam, sanarium), and plunge pools all in scope. Specialist pool-chemical protocols followed. Audit-ready records on every visit.",
    },
    {
      q: "What's your pricing model?",
      a: "Most salon contracts are priced as a fixed monthly fee based on floor area, number of treatment rooms, and visit frequency. Typical 1,500–3,000 sq ft salons pay between £480 and £980 per month. Multi-site groups receive a consolidated estate quote with volume discount. Spas with pool facilities are scoped individually. We provide a transparent quote after the salon walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Lucy Henderson",
      role: "Owner",
      facility: "Henderson Hair Atelier, Edinburgh",
      quote:
        "Premium salon demands premium presentation. Maundy Clean delivers — same crew every evening, mirrors streak-free, floors spotless, towels fresh. Client feedback consistently mentions cleanliness. Repeat bookings up 14% since they started.",
      rating: 5,
    },
    {
      name: "Dr Aisha Patel",
      role: "Medical Director",
      facility: "Edinburgh Medspa Clinic",
      quote:
        "Medspa cleaning is specialist work — treatment rooms, medical-grade equipment, hypoallergenic protocols. Maundy Clean's crew is trained, EN 14476-compliant, and discreet. Audit-ready records for our regulator. Genuine partner in client experience.",
      rating: 5,
    },
    {
      name: "Fiona Mackenzie",
      role: "Operations Manager",
      facility: "The Spa Group (3 day spas)",
      quote:
        "Three day spas, all with pools. PWTAG-compliant pool cleaning, EN 14476 virucidal treatment rooms, premium presentation in relaxation areas. One account manager, one monthly report. Client satisfaction scores consistently 94%+ across the group.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Gyms & Fitness Studios",
      href: "/industries/gyms-fitness-studios",
      description:
        "Gym and fitness studio cleaning with shared-equipment disinfection protocols.",
    },
    {
      name: "Hotels & Resorts",
      href: "/industries/hotels-resorts",
      description:
        "Hotel cleaning for spa facilities, treatment rooms, and wellness centres.",
    },
    {
      name: "Dental Practices",
      href: "/industries/dental-practices",
      description:
        "Dental practice cleaning with HTM 01-05 compliance and treatment room protocols.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
      alt: "Salon cleaning",
      caption: "End-of-day salon reset — floors, mirrors, styling stations, towels",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Treatment room cleaning",
      caption: "Treatment room deep clean — EN 14476 virucidal, hypoallergenic protocols",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Salon floor care",
      caption: "Salon floor care — VCT strip & re-seal, anti-slip treatment",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/7fb67803598c.jpg",
      alt: "Spa pool cleaning",
      caption: "Spa pool surround disinfection — PWTAG-compliant",
    },
  ],
};

// ============================================================
// Industry #24 — Faith-Based Facilities (Specialty)
// ============================================================
export const faithBasedFacilities: IndustryDetail = {
  slug: "faith-based-facilities",
  name: "Faith-Based Facilities",
  category: "Specialty",
  tagline: "Churches, mosques, gurdwaras, synagogues, and temples — respectful cleaning for sacred spaces.",
  heroHeadline: "A sacred space\nclean enough\nfor worship.",
  heroSubhead:
    "We clean churches, mosques, gurdwaras, synagogues, temples, and faith community centres across Scotland. Respectful protocols for sacred spaces, culturally-aware crews, and flexible scheduling around worship times. PVG-checked, eco-friendly, community-minded.",
  heroImage: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
  metaTitle: "Faith-Based Facility Cleaning Scotland | Churches | Mosques | Maundy Clean",
  metaDescription:
    "Faith-based facility cleaning across Scotland. Churches, mosques, gurdwaras, synagogues, temples, community centres. Respectful protocols, culturally-aware crews, flexible scheduling around worship times.",
  overviewParagraphs: [
    "Faith-based facility cleaning is a discipline of respect. These buildings are sacred spaces — places of worship, prayer, meditation, community gathering, and significant life events (weddings, funerals, baptisms, festivals). The cleaning has to be done with cultural awareness, religious sensitivity, and operational flexibility around worship times. Maundy Clean has spent over a decade inside Scottish faith communities — from historic Church of Scotland kirks to urban mosques, suburban gurdwaras, and city-centre synagogues.",
    "Our faith-based division operates a flexible-schedule model. We clean around worship times — typically after services or on the facility's quietest day. We use respectful protocols (no cleaning during prayer, no equipment in sacred areas without authorisation, no disturbance of religious texts or objects). Crews are briefed on the specific faith tradition of each facility — what's sacred, what's off-limits, what requires removal of footwear, what requires head covering, what requires gender-matched teams.",
    "We understand the rhythm of faith facilities: weekly worship (Sunday for churches, Friday for mosques, Saturday for synagogues), daily prayers (mosques 5 times daily, gurdwaras continuous), festivals (Christmas, Easter, Ramadan, Eid, Diwail, Vaisakhi, Passover, High Holy Days), life events (weddings, funerals, baptisms, naming ceremonies), and community activities (food banks, youth clubs, elderly lunches, language schools). Our crews work around all of it — flexible scheduling, festival surge capacity, and respectful discretion.",
  ],
  compliance: [
    {
      code: "HSE",
      title: "HSE Place of Worship Guidance",
      description:
        "Our protocols align to HSE guidance on health and safety in places of worship — including slip-risk management, chemical safety, and access for people with disabilities.",
    },
    {
      code: "COSHH",
      title: "Control of Substances Hazardous to Health",
      description:
        "Every product carries a current COSHH datasheet. We use low-fragrance, eco-friendly products as standard — many faith communities have environmental stewardship commitments.",
    },
    {
      code: "HSE SLIPS",
      title: "HSE Slips and Trips Guidance",
      description:
        "Faith facilities have varied flooring (stone, wood, carpet) and high footfall during services. Anti-slip treatment, wet-floor signage, and spill response aligned to HSE SLIPS.",
    },
    {
      code: "Heritage",
      title: "Historic Building Conservation",
      description:
        "Many faith facilities are listed buildings. We use conservation-appropriate products and methods for stone, wood, metal, and stained glass — no abrasives, no harsh chemicals.",
    },
    {
      code: "HSG 272",
      title: "HSE Guidance on Legionnaires' Disease",
      description:
        "We include water outlet flushing, temperature checks, and showerhead descaling in facilities with shower rooms or kitchens.",
    },
    {
      code: "Eco-Friendly",
      title: "Environmental Stewardship Alignment",
      description:
        "Many faith communities have environmental commitments (Laudato Si', Islamic environmental teachings, Eco-Sangha). We align to those commitments with eco-labelled chemicals and reduced-waste protocols.",
    },
  ],
  servicesDelivered: [
    {
      name: "Housekeeping Services",
      href: "/services/housekeeping-services",
      description:
        "Faith facility housekeeping — worship area, community rooms, kitchen, WCs, entrance. Respectful, culturally-aware protocols.",
    },
    {
      name: "Floor Care & VCT Stripping",
      href: "/services/vct-floor-care",
      description:
        "Heritage floor care — stone floor restoration, hardwood refinishing, carpet extraction. Conservation-appropriate methods.",
    },
    {
      name: "Window Cleaning (Low Rise)",
      href: "/services/window-cleaning-low-rise",
      description:
        "Faith facility glazing, including stained glass protective glazing, on a scheduled rotation. Specialist care for historic windows.",
    },
    {
      name: "Carpet & Upholstery Cleaning",
      href: "/services/carpet-rug-cleaning",
      description:
        "Worship area carpet extraction, community room furniture cleaning, prayer rug cleaning (where appropriate).",
    },
    {
      name: "Restroom Sanitation",
      href: "/services/restroom-sanitation",
      description:
        "Worshipper and staff WCs, including ablution facilities (where present), descaled, disinfected, and re-stocked.",
    },
    {
      name: "High Dusting",
      href: "/services/high-dusting",
      description:
        "High-level structure cleaning in historic worship spaces — rafters, beams, chandeliers, high windows. Conservation-aware methods.",
    },
  ],
  challenges: [
    {
      icon: "Heart",
      title: "Sacred space respect",
      description:
        "Faith facilities are sacred. Our crews are briefed on the specific tradition — what's sacred, what's off-limits, what requires removal of footwear, what requires head covering, what requires gender-matched teams. Respect is non-negotiable.",
    },
    {
      icon: "Users",
      title: "Cultural and religious awareness",
      description:
        "Crews briefed on faith-specific protocols — Quran handling (never touch without wudu), Torah respect (never touch the scroll), Gurdwara protocols (head covering, no tobacco), church communion items (never moved). Cultural awareness training included.",
    },
    {
      icon: "Clock",
      title: "Worship schedule flexibility",
      description:
        "Friday prayers, Sunday services, Saturday Shabbat, daily prayers 5 times — every faith has different worship times. Our scheduling flexes around them. No cleaning during worship. Festival surge capacity available.",
    },
    {
      icon: "Building2",
      title: "Heritage building conservation",
      description:
        "Many faith facilities are listed buildings — historic stone, wood, metal, stained glass. We use conservation-appropriate methods — no abrasives, no harsh chemicals, no high-pressure washing on delicate surfaces.",
    },
    {
      icon: "Shield",
      title: "Festival surge capacity",
      description:
        "Ramadan, Eid, Diwali, Christmas, Easter, Vaisakhi — festivals bring high footfall and surge cleaning demand. We provide surge capacity with culturally-aware crews, no notice required for existing clients during festivals.",
    },
    {
      icon: "TrendingUp",
      title: "Volunteer-led budget pressure",
      description:
        "Many faith facilities are volunteer-led with tight budgets. Our frequency optimisation reviews typically deliver 8–12% cost-out without dropping any community-critical task. Eco-friendly protocols align with stewardship values.",
    },
  ],
  stats: [
    { value: "45+", label: "faith facilities served" },
    { value: "8", label: "faith traditions served" },
    { value: "100%", label: "cultural awareness training" },
    { value: "10+", label: "years in faith facility cleaning" },
  ],
  processSteps: [
    {
      step: "01",
      title: "Facility walk-through",
      description:
        "Our regional manager walks the facility with the faith leader or facilities coordinator. We map zones (worship area, community rooms, kitchen, WCs, entrance), discuss sacred/off-limits areas, and review worship schedule.",
      duration: "Day 1",
    },
    {
      step: "02",
      title: "Respectful schedule & quote",
      description:
        "Within 3 business days you receive a written schedule built around worship times, a COSHH register with eco-friendly products, and a fixed monthly fee. Festival surge capacity included.",
      duration: "Days 2–3",
    },
    {
      step: "03",
      title: "Crew induction & cultural briefing",
      description:
        "A PVG-checked, culturally-aware crew is inducted to the facility, briefed on faith-specific protocols by the faith leader, and the first clean is supervised end-to-end.",
      duration: "Days 4–10",
    },
    {
      step: "04",
      title: "Ongoing delivery & community liaison",
      description:
        "Scheduled cleaning around worship times, festival surge capacity, and quarterly review meetings with the faith leader or facilities coordinator.",
      duration: "Ongoing",
    },
  ],
  benefits: [
    {
      icon: "Heart",
      title: "Sacred space respect",
      description:
        "Crews briefed on the specific faith tradition — what's sacred, what's off-limits, what requires special protocols. Respect is non-negotiable. No cleaning during worship. No disturbance of religious items.",
    },
    {
      icon: "Users",
      title: "Cultural and religious awareness",
      description:
        "Crews complete cultural awareness training before stepping foot in a faith facility. Faith-specific protocols briefed by the faith leader. Quran handling, Torah respect, Gurdwara protocols, communion items — all respected.",
    },
    {
      icon: "Clock",
      title: "Worship-schedule flexibility",
      description:
        "Scheduling flexes around worship times — no cleaning during services or prayers. Festival surge capacity available with no notice required for existing clients. Heritage building schedules respected.",
    },
    {
      icon: "Building2",
      title: "Heritage conservation methods",
      description:
        "Conservation-appropriate methods for historic stone, wood, metal, and stained glass. No abrasives, no harsh chemicals, no high-pressure washing on delicate surfaces. Listed building protocols followed.",
    },
    {
      icon: "Shield",
      title: "Festival surge capacity",
      description:
        "Ramadan, Eid, Diwali, Christmas, Easter, Vaisakhi — festivals bring surge demand. Culturally-aware crews available with no notice for existing clients. Festival-specific protocols pre-agreed.",
    },
    {
      icon: "TrendingUp",
      title: "Eco-friendly stewardship alignment",
      description:
        "Eco-labelled chemicals, reduced-waste protocols, alignment to faith environmental commitments (Laudato Si', Islamic environmental teachings, Eco-Sangha). Stewardship values respected. 8–12% cost-out without community-critical task loss.",
    },
  ],
  serviceAreas: [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth", "Inverness",
    "Paisley", "East Kilbride", "Livingston", "Hamilton", "Cumbernauld", "Coatbridge",
    "Motherwell", "Dunfermline", "Kirkcaldy", "Falkirk", "St Andrews", "Ayr", "Kilmarnock",
    "Dumfries", "Greenock", "Elgin", "Peterhead", "Inverurie", "Oban", "Fort William",
  ],
  faqs: [
    {
      q: "How do you handle sacred items and religious texts?",
      a: "Crews are explicitly briefed on sacred items and religious texts — they don't touch them. Quran is never touched without wudu (and we don't perform wudu, so we never touch it). Torah scrolls are never touched. Gurdwara Guru Granth Sahib is never touched. Church communion items are never moved. Hindu and Buddhist sacred images are never moved or wiped. If a sacred item needs cleaning, the faith leader or designated community member does it — we provide the eco-friendly products.",
    },
    {
      q: "Do you provide gender-matched cleaning teams?",
      a: "Yes, where the faith tradition requires it. For mosques, we provide male crews for the men's prayer area and female crews for the women's prayer area. For Orthodox Jewish synagogues, we respect mechitza boundaries. For gurdwaras, we respect gender-specific seating areas. Crews briefed on the specific gender protocols of each facility.",
    },
    {
      q: "How do you handle footwear protocols?",
      a: "Crews respect footwear protocols — removing shoes before entering prayer areas in mosques, gurdwaras, Hindu temples, and Buddhist centres. We provide indoor-only shoes or overshoes for crews. Shoe covers are stocked and used per facility protocol. We never walk on prayer rugs with outdoor footwear.",
    },
    {
      q: "Can you cover festivals and high-footfall events?",
      a: "Yes. Festival surge capacity is a core part of our faith facility service. Ramadan (mosques — nightly tarawih prayers bring high footfall), Eid, Diwali, Christmas, Easter, Vaisakhi — we provide extra crews with no notice required for existing clients. Pre-festival deep clean and post-festival reset both available. Culturally-aware crews throughout.",
    },
    {
      q: "How do you handle heritage and listed buildings?",
      a: "Many faith facilities are listed buildings. We use conservation-appropriate methods — no abrasives, no harsh chemicals, no high-pressure washing on delicate surfaces. Stone floors cleaned with pH-neutral products. Wood treated with conservation-approved waxes. Stained glass protective glazing cleaned with soft cloths only. Historic metal fixtures cleaned with non-abrasive methods. We coordinate with your conservation architect if needed.",
    },
    {
      q: "What's your pricing model?",
      a: "Most faith facility contracts are priced as a fixed monthly fee based on floor area, frequency, and community activities. Typical medium-sized facilities (3,000–8,000 sq ft) pay between £380 and £880 per month. Volunteer-led facilities and small community centres receive discounted rates. Festival surge and deep cleans quoted separately. We provide a transparent quote after the facility walk-through.",
    },
  ],
  testimonials: [
    {
      name: "Rev. James McLeod",
      role: "Minister",
      facility: "St Giles' Cathedral, Edinburgh",
      quote:
        "Maundy Clean has cleaned our cathedral for five years. Heritage-aware, worship-schedule-flexible, and respectful of sacred space at every turn. The cathedral has never looked better. Visitors comment on it constantly.",
      rating: 5,
    },
    {
      name: "Imam Abdul Rahman",
      role: "Imam",
      facility: "Glasgow Central Mosque",
      quote:
        "Gender-matched crews, footwear protocols respected, Ramadan surge capacity flawless. The crews understand mosque operations — they don't enter during prayers, they don't touch the Quran, they don't walk on prayer rugs with outdoor shoes. Genuine cultural awareness.",
      rating: 5,
    },
    {
      name: "Rabbi Sarah Jacobs",
      role: "Rabbi",
      facility: "Giffnock & Newlands Synagogue, Glasgow",
      quote:
        "Shabbat and Yom Tov schedules respected. High Holy Days surge capacity booked in advance. Mechitza boundaries respected. Torah scrolls never approached. The crew understands our tradition and our building. Couldn't ask for more.",
      rating: 5,
    },
  ],
  relatedIndustries: [
    {
      name: "Schools",
      href: "/industries/schools",
      description:
        "School cleaning for faith schools and religious education facilities.",
    },
    {
      name: "Nurseries & Preschools",
      href: "/industries/nurseries-preschools",
      description:
        "Nursery cleaning for faith-based early years settings.",
    },
    {
      name: "Community & Charity Facilities",
      href: "/industries/faith-based-facilities",
      description:
        "Community centre and charity facility cleaning with flexible scheduling around activities.",
    },
  ],
  gallery: [
    {
      src: "https://sfile.chatglm.cn/images-ppt/155be6f29550.jpg",
      alt: "Faith facility cleaning",
      caption: "Worship area cleaning — respectful protocols, heritage-aware methods",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
      alt: "Heritage floor care",
      caption: "Historic stone floor care — pH-neutral, conservation-appropriate",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
      alt: "Community room cleaning",
      caption: "Community room and kitchen — eco-friendly products for stewardship alignment",
    },
    {
      src: "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
      alt: "Heritage window cleaning",
      caption: "Stained glass protective glazing cleaning — soft cloth, no abrasives",
    },
  ],
};

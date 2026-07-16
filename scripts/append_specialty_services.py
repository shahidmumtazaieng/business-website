#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Append 6 specialty cleaning service detail objects to service-detail-data.ts.

Services added:
  1. crimeSceneCleanup         -> /services/crime-scene-cleanup
  2. traumaCleanup             -> /services/trauma-cleanup
  3. vandalismGraffitiCleanup  -> /services/vandalism-graffiti-cleanup
  4. asbestosPrepCleaning      -> /services/asbestos-prep-cleaning
  5. leadDustCleanup           -> /services/lead-dust-cleanup
  6. drugLabCleanup            -> /services/drug-lab-cleanup

Each service is defined as a Python dict and serialized to TypeScript
using the same shape as the existing ServiceDetail type.

Usage:
  python /home/z/my-project/scripts/append_specialty_services.py
"""

from pathlib import Path

DATA_FILE = Path("/home/z/my-project/src/lib/service-detail-data.ts")

# ------------------------------------------------------------------
# Serializer (Python dict -> TypeScript literal)
# ------------------------------------------------------------------

def ts_string(s: str) -> str:
    """Serialize a Python str to a TypeScript double-quoted string literal."""
    escaped = s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")
    return f'"{escaped}"'


def ts_value(v, indent: int) -> str:
    if isinstance(v, bool):
        return "true" if v else "false"
    if isinstance(v, (int, float)):
        return str(v)
    if isinstance(v, str):
        return ts_string(v)
    if isinstance(v, list):
        return ts_list(v, indent)
    if isinstance(v, dict):
        return ts_dict(v, indent)
    raise TypeError(f"Unsupported type for value: {type(v)} -> {v!r}")


def ts_list(items, indent: int) -> str:
    if not items:
        return "[]"
    pad = " " * indent
    inner = " " * (indent + 2)
    parts = [f"{inner}{ts_value(item, indent + 2)}" for item in items]
    return "[\n" + ",\n".join(parts) + ",\n" + pad + "]"


def ts_dict(d, indent: int) -> str:
    pad = " " * indent
    inner = " " * (indent + 2)
    parts = [f"{inner}{k}: {ts_value(v, indent + 2)}" for k, v in d.items()]
    return "{\n" + ",\n".join(parts) + ",\n" + pad + "}"


def service_to_ts(svc: dict) -> str:
    """Render one service as an `export const ... : ServiceDetail = {...};` block."""
    comment = (
        "// ============================================================\n"
        f"// {svc['_service_number']} - {svc['_name']}\n"
        "// ============================================================"
    )
    # strip internal keys
    fields = {k: v for k, v in svc.items() if not k.startswith("_")}
    return (
        "\n" + comment + "\n"
        f"export const {svc['_const_name']}: ServiceDetail = {ts_dict(fields, 0)};\n"
    )


# ------------------------------------------------------------------
# Shared constants
# ------------------------------------------------------------------

SCOTLAND_AREAS = [
    "Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Stirling", "Perth",
    "Falkirk", "Inverness", "Ayr", "Kilmarnock", "Livingston", "East Kilbride",
    "Paisley", "Hamilton", "Motherwell", "Dunfermline", "Kirkcaldy",
    "Musselburgh", "Dalkeith", "Bathgate", "Cumbernauld", "Coatbridge",
    "St Andrews", "Elgin", "Peterhead", "Stonehaven", "Inverurie",
    "Oban", "Fort William", "Aviemore",
]

# Reusable image URLs (kept consistent with existing services)
IMG_SPECIALTY_1 = "https://sfile.chatglm.cn/images-ppt/biohazard-cleaning.jpg"
IMG_SPECIALTY_2 = "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg"
IMG_SPECIALTY_3 = "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg"
IMG_SPECIALTY_4 = "https://sfile.chatglm.cn/images-ppt/post-party-cleanup.jpg"
IMG_SPECIALTY_5 = "https://sfile.chatglm.cn/images-ppt/578618d70f52.png"


# ------------------------------------------------------------------
# Service 1 - Crime Scene Cleanup
# ------------------------------------------------------------------

CRIME_SCENE = {
    "_const_name": "crimeSceneCleanup",
    "_service_number": "Specialty Service #101",
    "_name": "Crime Scene Cleanup",
    "slug": "crime-scene-cleanup",
    "name": "Crime Scene Cleanup",
    "category": "Specialty Cleaning",
    "tagline": "Discreet, HSE-compliant forensic remediation after police release - blood, bodily fluids & trauma-scene decontamination.",
    "heroHeadline": "Compassion,\ndiscretion,\ncompliance.",
    "heroSubhead": "When the police leave, the scene remains. Our crime scene cleanup team works under HSE HSG272 and BSi PAS 9960 to remove blood, bodily fluids, fingerprint powder, and forensic residue safely and discreetly. Unmarked vans, 24/7 response, full PPE/RPE, EN 14476 virucidal chemistry, licensed biohazard waste consignment - and a single point of contact who handles insurers, landlords, and family liaison so you don't have to.",
    "heroImage": IMG_SPECIALTY_1,
    "breadcrumbParent": "Specialty Cleaning",
    "metaTitle": "Crime Scene Cleanup Scotland | HSE HSG272 Compliant | Maundy Clean",
    "metaDescription": "Discreet crime scene cleanup across Scotland. Blood, bodily fluids, forensic residue. HSE HSG272 compliant. 24/7 response. From £680/visit. 4.9-star. Unmarked vans.",
    "overviewParagraphs": [
        "Crime scene cleanup is a specialist discipline that sits at the intersection of public health, criminal-justice process, and human compassion. Once Police Scotland and the forensic team release a scene, the property owner inherits a contaminated, often traumatic environment that cannot be restored by general cleaners. Blood and bodily fluids carry HIV, Hepatitis B and C, MRSA, and other bloodborne pathogens. Forensic powders, chemical reagents (Luminol, ninhydrin, acid violet 17), and fingerprint residues add chemical contamination on top of biological risk. General cleaners are not trained, not equipped, and not insured for this work - and attempting DIY cleanup risks both infection and the destruction of any residual evidence the police may need to re-examine.",
        "Our crime scene remediation protocol follows HSE HSG272 (the Health and Safety Executive's guidance on biological agents in the workplace) and BSi PAS 9960 (the British Standard for biohazard remediation). The six-stage protocol mirrors our biohazard process but adds scene-preservation discipline: we never start until we have written confirmation that Police Scotland have released the scene, and we photograph and document the scene in its released state before any treatment begins. This protects you, us, and any subsequent investigation. We carry £5m public liability, hold a current Upper-tier SEPA waste carrier registration, and our operatives are trained in HSE HSG272, BSi PAS 9960, and COSHH, with annual refresher training and health surveillance.",
        "We work for private homeowners, landlords, housing associations, local authorities, NHS Trusts, Police Scotland liaison officers, funeral directors, and insurers. We've handled 200+ crime scene remediations across Scotland in the last five years, from domestic incidents in Glasgow tenements to commercial property contamination in Edinburgh city-centre premises. Discretion is non-negotiable: unmarked vans, plain uniform (no crime-scene branding), operatives who never discuss the job in public, and where possible side or rear access. We provide a single point of contact for the duration of the job - usually a senior remediation technician - who liaises with insurers, landlords, family liaison officers, and anyone else involved so the family or property owner doesn't have to repeat the story.",
    ],
    "whatsIncluded": [
        {
            "title": "Police release verification & scene preservation",
            "description": "Before any work starts, we require written confirmation from Police Scotland that the scene has been released. We photograph the scene in its released state, document visible contamination, and flag any items that may have evidential value. We never discard anything without explicit client (and where relevant, police) authorisation. This stage protects the integrity of any future investigation and gives you a defensible chain of documentation.",
        },
        {
            "title": "Risk assessment, method statement & containment",
            "description": "Site-specific risk assessment identifies biohazard type (blood, bodily fluids, tissue, forensic chemicals), scope (area, surface type, contamination level), and risk profile. A written Risk Assessment and Method Statement (RAMS) is produced and signed off before any operative enters the scene. Containment: area sealed with 6-mil polythene sheeting and tape, negative-pressure HEPA extraction where cross-contamination risk is high, exclusion zone marked with biohazard signage, HVAC isolated if contamination risk extends to ductwork.",
        },
        {
            "title": "Gross contamination removal",
            "description": "Physical removal of all visible biological contamination. Sharps (needles, scalpels, broken glass with biological contamination) picked up with tongs and placed in UN-approved sharps containers. Blood and bodily fluids absorbed with specialist biohazard granules and placed in biohazard bags (UN3291) for incineration. Contaminated porous materials (carpet, underlay, fabric, plasterboard, insulation that cannot be disinfected) bagged for incineration. Forensic chemical residues neutralised per substance-specific protocol. All waste double-bagged, sealed, labelled per UN requirement.",
        },
        {
            "title": "EN 14476 virucidal disinfection",
            "description": "EN 14476 virucidal chemistry applied to all surfaces by sprayer or fogger. Proven effective against enveloped and non-enveloped viruses, bacteria, fungi, and bloodborne pathogens including HIV, Hepatitis B/C, MRSA, Norovirus, and Coronavirus. Contact time per manufacturer (typically 5-15 minutes). Double application in high-risk zones (visible contamination areas, splash zones, adjacent soft furnishings). Porous surfaces (wood, unsealed concrete, plaster) treated twice. HVAC ductwork fogged if contamination risk. Final wipe-down with disinfectant-soaked microfibre cloths, colour-coded per room to prevent cross-contamination.",
        },
        {
            "title": "ATP swab verification",
            "description": "ATP (adenosine triphosphate) swab test on key surfaces post-clean. ATP measures organic residue - pass threshold <30 RLU (relative light units) for crime scene zones. Swabs taken from highest-risk areas (visible contamination zones, splash zones, adjacent high-touch surfaces, grout lines, joints). Results in 60 seconds via handheld luminometer. Any swab above threshold triggers re-clean and re-swab. Full verification pack: ATP swab results, pre- and post-clean surface photos, chemical application log, waste consignment notes. Issued within 24 hours of completion.",
        },
        {
            "title": "Licensed biohazard waste consignment & documentation pack",
            "description": "Biohazard waste consigned to a licensed carrier under the Hazardous Waste (Scotland) Regulations 2005. Consignment note issued per uplift - kept on file for 3 years per SEPA requirement. Waste tracked from site to carrier to incineration facility, with certificate of destruction provided. Full documentation pack issued to client: risk assessment, RAMS, chemical application log, ATP swab results, pre- and post-clean photos, waste consignment notes, certificate of destruction, £5m public liability certificate, operative training records. Suitable for insurer claims, landlord hand-back, and regulatory audit.",
        },
    ],
    "processSteps": [
        {
            "step": "01",
            "title": "Emergency call & police release verification",
            "description": "Trained operator takes initial details - scene type, location, whether police have released, urgency, access arrangements. We require written confirmation of police release before dispatching operatives; if not yet released, we book a mobilisation slot and stay on standby. Initial risk assessment over the phone. Single point of contact assigned - usually a senior remediation technician who will be your liaison throughout.",
            "duration": "15-30 min call + standby until release",
        },
        {
            "step": "02",
            "title": "Mobilisation, scene documentation & containment",
            "description": "Team mobilised - typically 60-90 minute response in the central belt, 2-3 hours in remote areas. On arrival: scene photographed in released state, site-specific risk assessment, biohazard type confirmed, scope confirmed. Exclusion zone set up with polythene sheeting and biohazard signage. Negative-pressure HEPA extraction deployed if cross-contamination risk is high. H&S briefing for all operatives. RAMS signed off before work starts. Client briefing on scope, timeline, and what we'll dispose of.",
            "duration": "1-2 hours",
        },
        {
            "step": "03",
            "title": "Gross removal, disinfection & ATP verification",
            "description": "Operatives in full RPE/PPE (FFP3 respirator, full-face mask, Type 5/6 coverall, double nitrile gloves, gumboots). Sharps in UN-approved containers, biological waste in biohazard bags (UN3291), contaminated porous materials bagged for incineration. Forensic chemical residues neutralised. EN 14476 virucidal chemistry applied to all surfaces by sprayer or fogger, double application in high-risk zones. ATP swab verification on key surfaces - pass threshold <30 RLU. Any swab above threshold triggers re-clean and re-swab.",
            "duration": "4-12 hours depending on scene size",
        },
        {
            "step": "04",
            "title": "Waste consignment, documentation & handback",
            "description": "Biohazard waste consigned to licensed carrier - consignment note issued per uplift, kept on file 3 years per SEPA. Waste tracked from site to carrier to incineration. Certificate of destruction provided. Area handed back to client ready for reoccupation or refurbishment. Full documentation pack issued within 24 hours: risk assessment, RAMS, chemical application log, ATP swab results, pre- and post-clean photos, waste consignment notes, certificate of destruction, £5m public liability certificate. Operatives debriefed; equipment decontaminated or disposed of per protocol.",
            "duration": "1-2 hours on site + 24-hour documentation",
        },
    ],
    "benefits": [
        {
            "icon": "Shield",
            "title": "HSE HSG272 & BSi PAS 9960 compliant",
            "description": "Our crime scene remediation protocol follows HSE HSG272 (biological agents in the workplace) and BSi PAS 9960 (biohazard remediation). Six-stage protocol: scene release verification, risk assessment & containment, gross removal, EN 14476 disinfection, ATP verification, licensed waste consignment. Every stage documented. Operatives trained and annually refreshed. We work for local authorities, housing associations, NHS Trusts, and Police Scotland liaison officers - all of whom require HSE HSG272 compliance.",
        },
        {
            "icon": "Droplet",
            "title": "EN 14476 virucidal - bloodborne pathogens killed",
            "description": "EN 14476 virucidal chemistry proven effective against enveloped and non-enveloped viruses, bacteria, fungi, bloodborne pathogens including HIV, Hepatitis B/C, MRSA, Norovirus, Influenza, and Coronavirus. Chemistry applied by sprayer or fogger for full coverage. Contact time per manufacturer (typically 5-15 minutes). Double application in high-risk zones. Porous surfaces treated twice. Soft furnishings that cannot be disinfected removed for incineration. The chemistry is the defence - and we use the right chemistry for the right biohazard.",
        },
        {
            "icon": "Award",
            "title": "ATP swab verification - proof of clean",
            "description": "ATP (adenosine triphosphate) swab test on key surfaces post-clean. ATP measures organic residue - pass threshold <30 RLU for crime scene zones. Results in 60 seconds via handheld luminometer. Any swab above threshold triggers re-clean and re-swab. Documentation: ATP swab results, surface photos pre- and post-clean, chemical application log, waste consignment notes. Verification pack provided within 24 hours. We don't just say it's clean - we prove it, with audit-ready documentation for insurers, landlords, and regulators.",
        },
        {
            "icon": "Lock",
            "title": "Discreet, unmarked, single point of contact",
            "description": "Unmarked vans - no crime-scene branding, no attention. Operatives in plain uniform. Side or rear access where possible. We never discuss the job in public, on social media, or with neighbours. A single senior remediation technician is your point of contact from first call to documentation handover - they liaise with insurers, landlords, family liaison officers, and anyone else so you don't have to repeat the story. Discretion is part of our protocol, not an add-on.",
        },
        {
            "icon": "Clock",
            "title": "24/7 response across Scotland",
            "description": "Crime scenes don't wait for business hours, and neither do we. 24/7 emergency response: 60-90 minute mobilisation in the central belt (Glasgow, Edinburgh, Stirling, Falkirk, Livingston), 2-3 hours in remote and rural areas (Highlands, Borders, Argyll, Islands). Standby mode while awaiting police release. We cover all 32 Scottish local authority areas. When you call at 3am on a Sunday, you speak to a trained operator - not a call centre, not a voicemail.",
        },
        {
            "icon": "FileText",
            "title": "Insurer-ready documentation pack",
            "description": "Full documentation pack issued within 24 hours of completion: risk assessment, RAMS, chemical application log, ATP swab results, pre- and post-clean photos, waste consignment notes, certificate of destruction, £5m public liability certificate, operative training records. Suitable for direct insurer claims, landlord hand-back, regulatory audit, and legal chain-of-custody. We work with all major UK property insurers and loss adjusters - our documentation has never been rejected in 5 years of operation.",
        },
    ],
    "pricingTiers": [
        {
            "name": "Single-room scene",
            "tagline": "Contained scene in one room - typical domestic incident",
            "price": "£680",
            "unit": "+ VAT",
            "features": [
                "Single-room containment & remediation",
                "Up to 4 hours on site",
                "2-person HSE HSG272 trained crew",
                "EN 14476 virucidal disinfection",
                "ATP swab verification (4 swabs)",
                "Biohazard waste consignment",
                "Full documentation pack",
                "24/7 response within 90 min (central belt)",
            ],
        },
        {
            "name": "Multi-room scene",
            "tagline": "Most common - blood/fluids across multiple rooms",
            "price": "£1,450",
            "unit": "+ VAT",
            "highlighted": True,
            "features": [
                "Multi-room containment & remediation",
                "Up to 10 hours on site",
                "3-person HSE HSG272 trained crew",
                "EN 14476 virucidal disinfection",
                "ATP swab verification (10 swabs)",
                "Negative-pressure HEPA extraction",
                "Biohazard waste consignment",
                "Full documentation pack",
                "Insurer liaison by your SPOC",
            ],
        },
        {
            "name": "Major scene",
            "tagline": "Whole-property contamination or commercial premises",
            "price": "From £2,400",
            "unit": "+ VAT",
            "features": [
                "Whole-property containment & remediation",
                "Multi-day on-site if required",
                "4+ person HSE HSG272 trained crew",
                "EN 14476 virucidal disinfection",
                "ATP swab verification (20+ swabs)",
                "Negative-pressure HEPA extraction",
                "HVAC ductwork fogging if required",
                "Biohazard waste consignment (multi-uplift)",
                "Full documentation pack + SPOC insurer liaison",
            ],
        },
    ],
    "serviceAreas": SCOTLAND_AREAS,
    "faqs": [
        {
            "q": "When can you start - do you have to wait for the police to finish?",
            "a": "We cannot enter a crime scene until Police Scotland have officially released it. Once they have, we need written confirmation (an email from the officer in the case or a release form) before we mobilise. We can take your call anytime 24/7, scope the job over the phone, and book a mobilisation slot - then deploy within 60-90 minutes of receiving release confirmation. If police release is delayed, we stay on standby at no charge until release is confirmed.",
        },
        {
            "q": "Will my insurance cover crime scene cleanup?",
            "a": "In most cases, yes - crime scene cleanup is typically covered under the 'accidental damage', 'trace and access', or 'alternative accommodation' provisions of buildings and contents insurance. We work with all major UK property insurers and loss adjusters, and our documentation pack is designed to satisfy insurer requirements. We can liaise directly with your insurer on your behalf, and we can invoice the insurer directly (with their authorisation) so you don't have to pay upfront. We never start work without confirming cover.",
        },
        {
            "q": "How discreet are you? I don't want neighbours to know.",
            "a": "Discretion is built into our protocol. Unmarked vans (no crime-scene branding), operatives in plain uniform (no biohazard-branded clothing), side or rear access where the property allows, and operatives who never discuss the job in public. We don't post about jobs on social media, our website, or anywhere else. Your case is referenced internally by job number, not address. Our SPOC handles all external liaison (insurers, landlords, family liaison) so you don't have to. We've never had a confidentiality breach in 5 years of operation.",
        },
        {
            "q": "Do you remove carpet and underlay, or just disinfect it?",
            "a": "If carpet, underlay, or other porous materials are contaminated with blood or bodily fluids, they must be removed and consigned as biohazard waste - disinfection alone is not sufficient. Porous materials absorb contamination and cannot be reliably disinfected to a safe standard. We remove contaminated porous materials, bag them in biohazard bags (UN3291), and consign them to licensed incineration. We then disinfect the subfloor. This is the only protocol that meets HSE HSG272 and BSi PAS 9960. Non-porous surfaces (sealed wood, tile, metal, glass) can be disinfected in place.",
        },
        {
            "q": "How long does crime scene cleanup take?",
            "a": "Most domestic single-room scenes take 4-6 hours on site. Multi-room scenes take 8-12 hours, often completed in one shift. Major scenes (whole-property contamination, hoarding叠加 trauma) can take 2-5 days. The clock starts when we arrive on site and stops when ATP swab verification passes. We don't leave a scene until ATP verification is clean - regardless of how long it takes. Documentation pack is issued within 24 hours of completion.",
        },
        {
            "q": "What about the smell - can you remove that too?",
            "a": "Yes. Post-decomposition, post-trauma, and post-biohazard odours are addressed as part of the remediation. After EN 14476 disinfection, we deploy hydroxyl generators (which break down odour molecules at the structural level rather than masking them) for 24-72 hours depending on severity. We also fog with an enzymatic odour digester. In extreme cases, we may recommend removing contaminated plasterboard or flooring. Odour removal is included in the quoted price - it's not an add-on. We don't consider a scene 'done' until the smell is gone.",
        },
    ],
    "testimonials": [
        {
            "name": "Sarah M.",
            "role": "Homeowner, Glasgow (via insurer referral)",
            "quote": "After what happened, I couldn't face going back into the house. Maundy Clean's technician called me within an hour of the police releasing the scene, talked me through everything, and dealt directly with my insurer. The van was unmarked. The crew were respectful and quiet. When they said it was done, the house smelled clean - not chemically, just clean. I will never forget what they did for me that week.",
            "rating": 5,
        },
        {
            "name": "DCI R. Ferguson",
            "role": "Police Scotland Family Liaison (retired)",
            "quote": "Over a 14-year career I referred maybe 30 families to Maundy Clean. Never once had a complaint. They wait for our release, they preserve the scene documentation we need, they treat families with respect, and their paperwork is bulletproof for the insurer. I wouldn't recommend anyone else in Scotland for this work.",
            "rating": 5,
        },
        {
            "name": "James L.",
            "role": "Loss Adjuster, Major UK Insurer",
            "quote": "Maundy Clean is on our approved panel for trauma and crime scene remediation. Their documentation pack is the most thorough of any contractor we use - ATP swabs, chemical logs, waste consignment notes, photos, certificates. We can settle claims within days rather than weeks because the paperwork is audit-ready on day one. They also liaise directly with the policyholder, which reduces our handling costs.",
            "rating": 5,
        },
    ],
    "relatedServices": [
        {"name": "Biohazard Cleanup", "href": "/services/biohazard-cleaning", "description": "Broader biohazard remediation - blood, bodily fluids, sharps, sewage. HSE HSG272 compliant. 24/7 response."},
        {"name": "Trauma Cleanup", "href": "/services/trauma-cleanup", "description": "Compassionate cleanup after unattended death, suicide, or accident. Discreet, 24/7, with family liaison support."},
        {"name": "Hoarding Cleanup", "href": "/services/hoarding-cleanup", "description": "Multi-stage hoarding remediation with mental health-aware approach. Often combined with trauma cleanup."},
        {"name": "Odour Removal", "href": "/services/odour-removal", "description": "Hydroxyl, ozone, and enzymatic odour remediation. Included in trauma scenes but available standalone."},
        {"name": "Disinfection Services", "href": "/services/disinfection-services", "description": "EN 14476 virucidal disinfection for medical, commercial, and high-risk environments."},
        {"name": "Vandalism & Graffiti Cleanup", "href": "/services/vandalism-graffiti-cleanup", "description": "Restoration after vandalism, malicious damage, or hate-crime graffiti. Fast discreet response."},
    ],
    "gallery": [
        {"src": IMG_SPECIALTY_1, "alt": "Crime scene remediation operatives in full PPE/RPE", "caption": "Full RPE/PPE protocol: FFP3 respirator, full-face mask, Type 5/6 coverall, double nitrile gloves, gumboots. Operatives are HSE HSG272 trained with annual refreshers and health surveillance."},
        {"src": IMG_SPECIALTY_2, "alt": "Containment zone with polythene sheeting and biohazard signage", "caption": "Containment zone with 6-mil polythene sheeting and biohazard signage. Negative-pressure HEPA extraction deployed where cross-contamination risk is high."},
        {"src": IMG_SPECIALTY_3, "alt": "EN 14476 virucidal chemistry applied by sprayer", "caption": "EN 14476 virucidal chemistry applied by electrostatic sprayer for full surface coverage. Contact time per manufacturer, double application in high-risk zones."},
        {"src": IMG_SPECIALTY_4, "alt": "ATP swab luminometer showing pass result", "caption": "ATP swab verification - handheld luminometer shows pass result (<30 RLU). Audit-ready documentation issued within 24 hours of completion."},
    ],
}


# ------------------------------------------------------------------
# Service 2 - Trauma Cleanup
# ------------------------------------------------------------------

TRAUMA = {
    "_const_name": "traumaCleanup",
    "_service_number": "Specialty Service #102",
    "_name": "Trauma Cleanup",
    "slug": "trauma-cleanup",
    "name": "Trauma Cleanup",
    "category": "Specialty Cleaning",
    "tagline": "Compassionate, discreet cleanup after a traumatic event - unattended death, suicide, accident, or family crisis.",
    "heroHeadline": "When the worst\nhappens, we\nhandle it.",
    "heroSubhead": "A traumatic event - a sudden death, a suicide, a serious accident - leaves behind contamination that no family should ever have to face. Our trauma cleanup team works discreetly, compassionately, and to the same HSE HSG272 standard as our crime scene protocol. We liaise with funeral directors, insurers, landlords, and GPs so you don't have to. Unmarked vans, plain uniform, single point of contact, 24/7 response across Scotland.",
    "heroImage": IMG_SPECIALTY_2,
    "breadcrumbParent": "Specialty Cleaning",
    "metaTitle": "Trauma Cleanup Scotland | Compassionate & Discreet | Maundy Clean",
    "metaDescription": "Compassionate trauma cleanup across Scotland. Unattended death, suicide, accident. HSE HSG272 compliant. 24/7 discreet response. From £520/visit. 4.9-star.",
    "overviewParagraphs": [
        "Trauma cleanup is the most human work we do. When a family has lost someone suddenly - through suicide, an unattended death, a serious accident, or a medical emergency that left biological contamination - the last thing they need is to face the scene themselves. General cleaners are not trained or equipped for this work, and asking family members to clean up a loved one's biological residue is a recognised cause of complex PTSD. Our job is to remove that burden entirely, discreetly, and to a standard that protects everyone who re-enters the property afterwards.",
        "Our trauma cleanup protocol follows the same HSE HSG272 and BSi PAS 9960 standard as our crime scene remediation, with additional emphasis on the human dimensions of the work. Every operative on the trauma team has completed mental-health-aware training (Scotland's Mental Health First Aid or equivalent) and works to a 'minimum family contact' principle - we coordinate with a nominated family member or funeral director, we don't ask the family to relive the event, and we never discuss the deceased in operational conversations. Compassion is built into the protocol, not an add-on.",
        "We work for families (direct and via insurer), funeral directors (who refer families to us as part of their service), housing associations (void properties where a tenant has died), local authorities, NHS Trusts (community deaths), GPs (sudden deaths in the community), and the Procurator Fiscal's office (where the death is reportable). We've handled 300+ trauma remediations across Scotland in the last five years. We carry £5m public liability, hold SEPA Upper-tier waste carrier registration, and our operatives are trained in HSE HSG272, BSi PAS 9960, COSHH, and infection prevention and control. Discretion is non-negotiable - unmarked vans, plain uniform, operatives who never discuss the job in public.",
    ],
    "whatsIncluded": [
        {
            "title": "Compassionate first call & family liaison",
            "description": "Your first call is answered by a trained operator - not a call centre. We take initial details gently, confirm whether the scene is ready for remediation (Procurator Fiscal release if applicable), and assign a single point of contact (SPOC) - usually a senior trauma remediation technician who will be your liaison throughout. The SPOC coordinates with the funeral director, insurer, landlord, GP, and anyone else so the family doesn't have to repeat the story. We never ask the family for graphic details of the event.",
        },
        {
            "title": "Risk assessment, containment & scene documentation",
            "description": "Site-specific risk assessment identifies biohazard type (blood, bodily fluids, tissue, decomposition fluid), scope (area, surface type, contamination level), and risk profile. Containment: area sealed with 6-mil polythene sheeting and tape, negative-pressure HEPA extraction where cross-contamination risk is high, exclusion zone marked with discreet signage (no 'biohazard' branding visible from outside). Scene documented with photos before any work starts - both for our records and to support any insurer or Procurator Fiscal requirements.",
        },
        {
            "title": "Gross contamination removal",
            "description": "Physical removal of all visible biological contamination. Sharps (medical equipment, broken glass with biological contamination) picked up with tongs and placed in UN-approved sharps containers. Blood and bodily fluids absorbed with specialist biohazard granules and placed in biohazard bags (UN3291) for incineration. Contaminated porous materials (carpet, underlay, fabric, bedding, soft furnishings, plasterboard, insulation that cannot be disinfected) bagged for incineration. Decomposition fluid treated with enzyme digester before removal. All waste double-bagged, sealed, labelled per UN requirement.",
        },
        {
            "title": "EN 14476 virucidal disinfection",
            "description": "EN 14476 virucidal chemistry applied to all surfaces by sprayer or fogger. Proven effective against enveloped and non-enveloped viruses, bacteria, fungi, bloodborne pathogens including HIV, Hepatitis B/C, MRSA, Norovirus, and Coronavirus. Contact time per manufacturer (typically 5-15 minutes). Double application in high-risk zones (visible contamination areas, splash zones, decomposition zones). Porous surfaces (wood, unsealed concrete, plaster) treated twice. HVAC ductwork fogged if contamination risk. Final wipe-down with disinfectant-soaked microfibre cloths, colour-coded per room to prevent cross-contamination.",
        },
        {
            "title": "Odour remediation (hydroxyl + enzymatic)",
            "description": "Trauma scenes - particularly unattended deaths - carry odours that disinfection alone cannot address. After EN 14476 disinfection, we deploy hydroxyl generators (which break down odour molecules at the structural level rather than masking them) for 24-72 hours depending on severity. We also fog with an enzymatic odour digester. In extreme cases, we may recommend removing contaminated plasterboard, flooring, or subfloor. Odour removal is included in the quoted price - it's not an add-on. We don't consider a scene 'done' until the smell is gone.",
        },
        {
            "title": "ATP swab verification, waste consignment & documentation",
            "description": "ATP (adenosine triphosphate) swab test on key surfaces post-clean. Pass threshold <30 RLU. Swabs taken from highest-risk areas. Results in 60 seconds. Any swab above threshold triggers re-clean and re-swab. Biohazard waste consigned to licensed carrier under Hazardous Waste (Scotland) Regulations 2005 - consignment note per uplift, kept on file 3 years. Certificate of destruction provided. Full documentation pack issued to family (or insurer/executor) within 24 hours: risk assessment, RAMS, chemical application log, ATP swab results, pre- and post-clean photos, waste consignment notes, certificate of destruction, £5m public liability certificate.",
        },
    ],
    "processSteps": [
        {
            "step": "01",
            "title": "First call & SPOC assignment",
            "description": "Trained operator takes initial details gently - location, what happened (in your own words, no pressure for detail), whether the scene is ready for remediation, who else is involved (funeral director, insurer, landlord, GP). SPOC assigned - a senior trauma remediation technician who will be your liaison throughout. If Procurator Fiscal release is needed, we book a mobilisation slot and stay on standby at no charge until release.",
            "duration": "15-30 min call",
        },
        {
            "step": "02",
            "title": "Discreet mobilisation & scene assessment",
            "description": "Team mobilised in unmarked van - typically 60-90 minute response in the central belt, 2-3 hours in remote areas. Plain uniform, no biohazard branding. On arrival: scene photographed for documentation, site-specific risk assessment, biohazard type confirmed, scope confirmed. Containment set up with discreet signage. H&S briefing for operatives. RAMS signed off. Brief check-in with family or funeral director - we don't enter until you're ready.",
            "duration": "1-2 hours",
        },
        {
            "step": "03",
            "title": "Gross removal, disinfection & odour remediation",
            "description": "Operatives in full RPE/PPE. Sharps in UN-approved containers. Biological waste in biohazard bags (UN3291). Contaminated porous materials bagged for incineration. Decomposition fluid treated with enzyme digester before removal. EN 14476 virucidal chemistry applied to all surfaces by sprayer or fogger, double application in high-risk zones. Hydroxyl generators deployed for 24-72 hours depending on odour severity. Enzymatic odour fogger applied. We don't leave until the scene is biologically and olfactorily clean.",
            "duration": "6-16 hours depending on scene",
        },
        {
            "step": "04",
            "title": "ATP verification, waste consignment & documentation",
            "description": "ATP swab verification on key surfaces - pass threshold <30 RLU. Any swab above threshold triggers re-clean and re-swab. Biohazard waste consigned to licensed carrier - consignment note issued per uplift, kept on file 3 years per SEPA. Waste tracked from site to carrier to incineration. Certificate of destruction provided. Full documentation pack issued within 24 hours. Scene handed back to family (or landlord/executor) ready for reoccupation or refurbishment. SPOC debrief with family if wanted - we never leave a family without a closing call.",
            "duration": "1-2 hours on site + 24-hour documentation",
        },
    ],
    "benefits": [
        {
            "icon": "Heart",
            "title": "Compassion built into the protocol",
            "description": "Every trauma team operative has completed Scotland's Mental Health First Aid (or equivalent). We work to a 'minimum family contact' principle - we coordinate with one nominated family member or funeral director, we don't ask the family to relive the event, and we never discuss the deceased in operational conversations. We've handled 300+ trauma remediations across Scotland in the last 5 years. Compassion is not an add-on - it's in the protocol.",
        },
        {
            "icon": "Shield",
            "title": "HSE HSG272 & BSi PAS 9960 compliant",
            "description": "Our trauma remediation protocol follows HSE HSG272 and BSi PAS 9960 - the same standard as our crime scene work. Six-stage protocol: scene release verification, risk assessment & containment, gross removal, EN 14476 disinfection, ATP verification, licensed waste consignment. Every stage documented. Operatives trained and annually refreshed. Suitable for Procurator Fiscal, insurer, and regulatory audit.",
        },
        {
            "icon": "Lock",
            "title": "Discreet, unmarked, single point of contact",
            "description": "Unmarked vans. Plain uniform. Side or rear access where the property allows. Operatives who never discuss the job in public, on social media, or with neighbours. A single senior remediation technician is your point of contact from first call to documentation handover - they liaise with funeral directors, insurers, landlords, GPs, and anyone else so the family doesn't have to repeat the story. Discretion is part of our protocol.",
        },
        {
            "icon": "Wind",
            "title": "Hydroxyl odour remediation included",
            "description": "Trauma scenes - particularly unattended deaths - carry odours that disinfection alone cannot address. We deploy hydroxyl generators (which break down odour molecules at the structural level rather than masking them) for 24-72 hours depending on severity. We also fog with an enzymatic odour digester. Odour removal is included in the quoted price - it's not an add-on. We don't consider a scene 'done' until the smell is gone.",
        },
        {
            "icon": "Clock",
            "title": "24/7 response across Scotland",
            "description": "Traumatic events don't wait for business hours, and neither do we. 24/7 emergency response: 60-90 minute mobilisation in the central belt, 2-3 hours in remote and rural areas. Standby mode while awaiting Procurator Fiscal release. We cover all 32 Scottish local authority areas. When you call at 3am on a Sunday, you speak to a trained operator - not a call centre, not a voicemail.",
        },
        {
            "icon": "FileText",
            "title": "Insurer & executor-ready documentation",
            "description": "Full documentation pack issued within 24 hours of completion: risk assessment, RAMS, chemical application log, ATP swab results, pre- and post-clean photos, waste consignment notes, certificate of destruction, £5m public liability certificate. Suitable for insurer claims, executor/estate administration, Procurator Fiscal requirements, and landlord hand-back. Our documentation has never been rejected in 5 years of operation.",
        },
    ],
    "pricingTiers": [
        {
            "name": "Single-room scene",
            "tagline": "Contained scene in one room - most common",
            "price": "£520",
            "unit": "+ VAT",
            "features": [
                "Single-room containment & remediation",
                "Up to 4 hours on site",
                "2-person HSE HSG272 trained crew",
                "EN 14476 virucidal disinfection",
                "Hydroxyl odour remediation (24 hrs)",
                "ATP swab verification (4 swabs)",
                "Biohazard waste consignment",
                "Full documentation pack",
                "SPOC family liaison",
            ],
        },
        {
            "name": "Multi-room scene",
            "tagline": "Contamination across multiple rooms - decomposition cases",
            "price": "£1,180",
            "unit": "+ VAT",
            "highlighted": True,
            "features": [
                "Multi-room containment & remediation",
                "Up to 10 hours on site",
                "3-person HSE HSG272 trained crew",
                "EN 14476 virucidal disinfection",
                "Hydroxyl odour remediation (48 hrs)",
                "ATP swab verification (10 swabs)",
                "Negative-pressure HEPA extraction",
                "Biohazard waste consignment",
                "Full documentation pack + SPOC",
            ],
        },
        {
            "name": "Major scene",
            "tagline": "Whole-property contamination, hoarding + trauma, prolonged discovery",
            "price": "From £2,100",
            "unit": "+ VAT",
            "features": [
                "Whole-property containment & remediation",
                "Multi-day on-site if required",
                "4+ person HSE HSG272 trained crew",
                "EN 14476 virucidal disinfection",
                "Hydroxyl odour remediation (72 hrs)",
                "ATP swab verification (20+ swabs)",
                "Negative-pressure HEPA extraction",
                "HVAC ductwork fogging if required",
                "Multi-uplift biohazard waste consignment",
                "Full documentation pack + SPOC + insurer liaison",
            ],
        },
    ],
    "serviceAreas": SCOTLAND_AREAS,
    "faqs": [
        {
            "q": "My relative died alone and wasn't found for several days. Can you help?",
            "a": "Yes. Unattended deaths are one of the most common trauma remediations we handle, and we approach them with the same compassion and discretion as any other scene. After the Procurator Fiscal (or in some cases the police) has released the property, we mobilise within 60-90 minutes (central belt) or 2-3 hours (remote). Decomposition fluid is treated with enzyme digester before removal. We deploy hydroxyl generators for 24-72 hours to break down odour at the molecular level. The family does not need to enter the property at any stage - we can liaise via a nominated family member, funeral director, or executor.",
        },
        {
            "q": "Do I need to pay for this myself, or will insurance cover it?",
            "a": "Most buildings and contents insurance policies cover trauma cleanup under 'accidental damage' or 'alternative accommodation' provisions. We work with all major UK property insurers and loss adjusters, and our documentation pack is designed to satisfy insurer requirements. We can liaise directly with your insurer on your behalf, and we can invoice the insurer directly (with their authorisation) so you don't have to pay upfront. If insurance won't cover, we offer interest-free payment plans for bereaved families - ask your SPOC.",
        },
        {
            "q": "I don't want my neighbours to know what happened. How discreet are you?",
            "a": "Discretion is built into our protocol. Unmarked vans (no biohazard branding), operatives in plain uniform, side or rear access where the property allows, and operatives who never discuss the job in public. We don't post about jobs on social media, our website, or anywhere else. Your case is referenced internally by job number, not address. Our SPOC handles all external liaison (insurers, landlords, funeral director) so the family doesn't have to. We've never had a confidentiality breach in 5 years of operation.",
        },
        {
            "q": "Will you remove the carpet, sofa, bed - or just clean them?",
            "a": "Porous materials (carpet, underlay, fabric, bedding, soft furnishings, plasterboard, insulation) that are contaminated with blood, bodily fluids, or decomposition fluid cannot be reliably disinfected and must be removed and consigned as biohazard waste. This is the only protocol that meets HSE HSG272 and BSi PAS 9960. Non-porous surfaces (sealed wood, tile, metal, glass) can be disinfected in place. We will discuss what needs to be removed with you before any work starts - nothing is removed without your authorisation.",
        },
        {
            "q": "How long does trauma cleanup take?",
            "a": "Most domestic single-room scenes take 4-6 hours on site, plus 24-48 hours of hydroxyl odour remediation (we can leave the hydroxyl generator running and collect it later). Multi-room decomposition cases take 8-12 hours on site, plus 48-72 hours of hydroxyl. Major scenes (whole-property, hoarding叠加 trauma) can take 2-5 days. The clock starts when we arrive and stops when ATP swab verification passes. Documentation pack is issued within 24 hours of completion.",
        },
        {
            "q": "Can you work with our funeral director?",
            "a": "Yes - we work with funeral directors across Scotland, and many refer families to us as part of their service. Your SPOC will coordinate directly with the funeral director on timing, access, and any specific family requests. We can also liaise with the Procurator Fiscal's office if the death is reportable, the GP if a death certificate is pending, the landlord if the property is rented, and the insurer if a claim is being made. The family should not have to coordinate any of this themselves.",
        },
    ],
    "testimonials": [
        {
            "name": "Anonymous",
            "role": "Daughter, Edinburgh (via funeral director referral)",
            "quote": "Dad died alone and wasn't found for a week. The funeral director put us in touch with Maundy Clean. They sent one of their senior technicians to talk us through it, dealt with the insurer, and we never had to go back into the flat. When they said it was done, it smelled clean - just clean. I cannot describe the relief of not having to face that. I would recommend them to anyone in the same situation, though I hope no one ever is.",
            "rating": 5,
        },
        {
            "name": "Gordon P.",
            "role": "Funeral Director, Fife",
            "quote": "We've referred maybe 40 families to Maundy Clean over the last 6 years. Every single one has come back to thank us for the introduction. They are compassionate, discreet, and their paperwork is bulletproof for the insurer. We don't recommend anyone else for this kind of work in Scotland.",
            "rating": 5,
        },
        {
            "name": "Housing Association Operations Manager",
            "role": "Registered Social Landlord, Central Belt",
            "quote": "We use Maundy Clean for all our void-property trauma remediations. They understand the housing association context - tenant liaison, sensitive re-letting, documentation for our board. Their ATP swab verification gives us a defensible hand-back standard. We've never had a complaint from a subsequent tenant about a property they've remediated.",
            "rating": 5,
        },
    ],
    "relatedServices": [
        {"name": "Crime Scene Cleanup", "href": "/services/crime-scene-cleanup", "description": "Post-forensic remediation after police release. HSE HSG272 compliant, discreet, 24/7."},
        {"name": "Biohazard Cleanup", "href": "/services/biohazard-cleaning", "description": "Broader biohazard remediation - blood, bodily fluids, sharps, sewage. 24/7 response."},
        {"name": "Hoarding Cleanup", "href": "/services/hoarding-cleanup", "description": "Multi-stage hoarding remediation with mental health-aware approach. Often combined with trauma."},
        {"name": "Odour Removal", "href": "/services/odour-removal", "description": "Hydroxyl, ozone, and enzymatic odour remediation. Included in trauma scenes but available standalone."},
        {"name": "Disinfection Services", "href": "/services/disinfection-services", "description": "EN 14476 virucidal disinfection for medical, commercial, and high-risk environments."},
        {"name": "Deep House Cleaning", "href": "/services/deep-house-cleaning", "description": "Whole-house deep clean after trauma remediation - to bring the property back to liveable standard."},
    ],
    "gallery": [
        {"src": IMG_SPECIALTY_2, "alt": "Trauma remediation team in full PPE", "caption": "Trauma remediation team in full RPE/PPE. All operatives have completed Scotland's Mental Health First Aid or equivalent. Compassion is built into the protocol, not an add-on."},
        {"src": IMG_SPECIALTY_3, "alt": "Hydroxyl generator deployed for odour remediation", "caption": "Hydroxyl generator deployed for 24-72 hours of odour remediation. Breaks down odour molecules at the structural level - no masking, no chemical residue, safe for soft furnishings."},
        {"src": IMG_SPECIALTY_1, "alt": "Biohazard waste bagged in UN3291 containers", "caption": "Biohazard waste double-bagged in UN3291 bags for licensed incineration. Consignment note issued per uplift, kept on file 3 years per SEPA."},
        {"src": IMG_SPECIALTY_4, "alt": "ATP swab luminometer with pass result", "caption": "ATP swab verification - pass threshold <30 RLU. Audit-ready documentation pack issued to family or executor within 24 hours of completion."},
    ],
}


# ------------------------------------------------------------------
# Service 3 - Vandalism & Graffiti Cleanup
# ------------------------------------------------------------------

VANDALISM_GRAFFITI = {
    "_const_name": "vandalismGraffitiCleanup",
    "_service_number": "Specialty Service #103",
    "_name": "Vandalism & Graffiti Cleanup",
    "slug": "vandalism-graffiti-cleanup",
    "name": "Vandalism & Graffiti Cleanup",
    "category": "Specialty Cleaning",
    "tagline": "Fast, discreet restoration after vandalism - graffiti, smashed glass, paint, faeces, and malicious damage.",
    "heroHeadline": "Vandalism\nrestored. Fast.\nDiscreetly.",
    "heroSubhead": "Waking up to find your property vandalised - whether by opportunistic graffiti, smashed windows, paint stripper on your car, or worse - is a horrible experience. Our vandalism restoration team removes graffiti from any substrate, boards and replaces broken glass, sanitises biological vandalism (faeces, urine), neutralises chemical damage, and restores your property to pre-incident condition. We work with insurers, police, and landlords. 24/7 response across Scotland.",
    "heroImage": IMG_SPECIALTY_3,
    "breadcrumbParent": "Specialty Cleaning",
    "metaTitle": "Vandalism & Graffiti Cleanup Scotland | 24/7 Response | Maundy Clean",
    "metaDescription": "Vandalism & graffiti cleanup across Scotland. Spray paint, smashed glass, paint, faeces, chemical damage. 24/7 discreet response. From £280/visit. 4.9-star.",
    "overviewParagraphs": [
        "Vandalism is more than just graffiti on a wall. It can include smashed windows and glass doors, spray paint and marker pen on brickwork, render, stone, glass, and metal, paint stripper or acid thrown on cars or surfaces, faeces and urine left in porches or stairwells, malicious fly-tipping, damaged locks and door furniture, and in the worst cases hate-crime graffiti targeting race, religion, sexuality, or disability. Each of these requires a different remediation approach, and getting it wrong can permanently damage the substrate or, in the case of biological vandalism, leave a public health risk.",
        "Our vandalism restoration team is trained across the full spectrum of malicious-damage remediation. For graffiti, we use substrate-specific chemistry - alkaline gel removers for porous stone and brick, solvent gel for metal and painted surfaces, poultice systems for heritage stonework where surface damage is unacceptable, and dry-ice or soda-blasting for stubborn cases. For smashed glass, we make safe, board up, and arrange replacement glazing. For chemical damage (paint stripper, acid), we neutralise, assess substrate damage, and arrange repair. For biological vandalism, we follow our biohazard protocol - PPE, EN 14476 disinfection, ATP verification, licensed waste consignment.",
        "We work for homeowners, landlords, housing associations, local authorities, commercial property owners, retail chains, schools, and places of worship. We understand the urgency - a boarded-up shopfront or hate-crime graffiti on a family home cannot wait for business hours. 24/7 response: 60-90 minutes in the central belt, 2-3 hours in remote areas. We carry £5m public liability, hold SEPA waste carrier registration, and our operatives are trained in COSHH, working at height (for high-wall graffiti), and biohazard remediation (for biological vandalism). Discreet unmarked vans available on request. References from Police Scotland, local authorities, and major retail chains available on request.",
    ],
    "whatsIncluded": [
        {
            "title": "Substrate-specific graffiti removal",
            "description": "We don't use one-size-fits-all graffiti remover. Substrate assessment determines the right chemistry: alkaline gel remover for porous stone, brick, and concrete (dwell time 30-60 minutes, agitate, pressure-rinse); solvent gel for metal, painted surfaces, and powder-coated cladding (dwell time 10-20 minutes, wipe, rinse); poultice system for heritage stonework, sandstone tenement facades, and listed buildings (apply, cover, dwell 4-24 hours, peel, rinse - no surface damage); dry-ice or soda-blasting for stubborn cases on robust substrates. We test on a small inconspicuous area first.",
        },
        {
            "title": "Biological vandalism remediation",
            "description": "Faeces, urine, and other biological vandalism are treated as biohazard - not general cleaning. Operatives in full RPE/PPE (FFP3 respirator, full-face mask, coverall, double nitrile gloves). Biological waste absorbed with biohazard granules, placed in biohazard bags (UN3291), and consigned to licensed incineration. EN 14476 virucidal chemistry applied to all affected surfaces. ATP swab verification - pass threshold <30 RLU. Suitable for porches, stairwells, lifts, bin stores, play areas, and any enclosed space where biological vandalism has occurred.",
        },
        {
            "title": "Smashed glass make-safe & glazing coordination",
            "description": "Smashed windows and glass doors made safe on first visit - glass fragments swept (and consigned as sharp waste if biologically contaminated), opening boarded with marine ply or security mesh, locks assessed for damage. We coordinate replacement glazing with our trusted local glazier network - single pane, double-glazed units, toughened/laminated glass, leaded lights, listed-building profiles. Boarding is included in the initial visit cost; replacement glazing is quoted separately based on size and specification. Most residential replacement glazing fitted within 48-72 hours.",
        },
        {
            "title": "Chemical damage neutralisation & repair",
            "description": "Paint stripper, acid, brake fluid, and other chemical attacks require neutralisation before any cleaning. We identify the chemical (if unknown, test with pH paper), apply the appropriate neutraliser (alkaline for acid, acid for alkaline, solvent for solvent-based), and rinse thoroughly. Substrate damage is then assessed - paint may need re-finishing, metal may need re-treatment, render may need patching. We coordinate with trusted decorators and repair specialists for the remediation work, or hand back to your own contractor. We document the original damage for insurer claims.",
        },
        {
            "title": "Hate-crime & sensitive-incident response",
            "description": "Hate-crime graffiti (racist, homophobic, transphobic, religious, or disability-targeted) requires a particular response. We prioritise same-day removal - ideally within 4 hours of report - to minimise the trauma to the targeted family or community. We liaise with Police Scotland (who often want to photograph the graffiti before removal - we wait for their authorisation). We work with affected families, places of worship, community centres, and schools with the same discretion and compassion as our trauma cleanup. We've handled 60+ hate-crime remediations in the last 3 years. References from community organisations available.",
        },
        {
            "title": "Documentation for police & insurers",
            "description": "Full documentation pack issued within 24 hours of completion: pre-clean photos of all damage (with scale reference), substrate assessment, chemistry application log, post-clean photos, ATP swab results (if biological), waste consignment notes (if biohazard), glazing replacement quote, and itemised invoice. Suitable for Police Scotland evidence (where authorised), insurer claims, landlord hand-back, and regulatory audit. We work with all major UK property insurers and loss adjusters - our documentation has never been rejected in 5 years of operation.",
        },
    ],
    "processSteps": [
        {
            "step": "01",
            "title": "Emergency call & triage",
            "description": "Trained operator takes details - what's happened, location, property type, urgency, whether police have been informed. If the vandalism is hate-crime graffiti or biological, we prioritise same-day response. If glass is smashed, we dispatch a make-safe team within 60-90 minutes (central belt). Initial substrate assessment over the phone to determine the right chemistry. Single point of contact assigned for the duration of the job.",
            "duration": "10-15 min call",
        },
        {
            "step": "02",
            "title": "Site assessment & make-safe",
            "description": "Team mobilised in unmarked van (or marked van if you prefer - some commercial clients want visible security response). On arrival: full damage assessment and photos (with scale reference). Substrate tests on inconspicuous area to confirm right chemistry. Make-safe any hazards - board smashed glass, cordon off biological contamination, neutralise chemical damage. RAMS signed off. Brief client (or landlord, insurer, police liaison) on scope and timeline.",
            "duration": "60-90 min response + 1-2 hours on site",
        },
        {
            "step": "03",
            "title": "Graffiti removal, biological remediation & chemical neutralisation",
            "description": "Substrate-specific graffiti chemistry applied - dwell time per substrate. Agitation with appropriate tools (nylon brush for porous, soft cloth for painted, scraper for stubborn). Pressure-rinse (low pressure for delicate substrates, higher for robust). Biological vandalism remediated per HSE HSG272 protocol - PPE, EN 14476 disinfection, ATP swab verification. Chemical damage neutralised and assessed for substrate repair. Repeat application if shadowing persists.",
            "duration": "2-8 hours depending on scope",
        },
        {
            "step": "04",
            "title": "Glazing replacement, documentation & handback",
            "description": "If glazing replacement is required, our trusted local glazier attends within 48-72 hours (residential) or arranges a scheduled visit (commercial). Final photos taken post-completion. Full documentation pack issued within 24 hours: pre-clean photos, substrate assessment, chemistry log, post-clean photos, ATP swab results (if biological), waste consignment notes (if biohazard), glazing invoice, itemised cleanup invoice. Suitable for police evidence (if authorised), insurer claims, landlord hand-back.",
            "duration": "1-2 hours on site + 24-hour documentation",
        },
    ],
    "benefits": [
        {
            "icon": "SprayCan",
            "title": "Substrate-specific graffiti chemistry",
            "description": "One-size-fits-all graffiti removers permanently damage substrates. We use substrate-specific chemistry - alkaline gel for porous stone, solvent gel for metal, poultice for heritage stonework, dry-ice blasting for stubborn cases. We test on inconspicuous areas first. We've removed graffiti from Category A listed buildings, sandstone tenement facades, modern powder-coated cladding, glass, brick, render, and metal - without substrate damage. References from heritage organisations available.",
        },
        {
            "icon": "Shield",
            "title": "HSE HSG272 biological vandalism protocol",
            "description": "Faeces, urine, and other biological vandalism are biohazards - not general cleaning. Our operatives work in full RPE/PPE, use EN 14476 virucidal chemistry, verify with ATP swabs (pass <30 RLU), and consign waste as UN3291 clinical waste. We carry £5m public liability, hold SEPA Upper-tier waste carrier registration, and our operatives are HSE HSG272 trained. General cleaners are not equipped for this - we are.",
        },
        {
            "icon": "Heart",
            "title": "Same-day hate-crime response",
            "description": "Hate-crime graffiti on a family home, place of worship, or community building is a trauma, not a cleaning job. We prioritise same-day removal - ideally within 4 hours of report. We liaise with Police Scotland (who often need to photograph first - we wait). We work with affected families and communities with the same discretion and compassion as our trauma cleanup. We've handled 60+ hate-crime remediations in the last 3 years across Scotland.",
        },
        {
            "icon": "Clock",
            "title": "24/7 response across Scotland",
            "description": "Vandalism doesn't wait for business hours, and neither do we. 24/7 emergency response: 60-90 minute mobilisation in the central belt, 2-3 hours in remote and rural areas. Make-safe for smashed glass within 90 minutes (central belt). Same-day hate-crime graffiti removal. We cover all 32 Scottish local authority areas. When you call at 3am on a Sunday, you speak to a trained operator - not a call centre, not a voicemail.",
        },
        {
            "icon": "Lock",
            "title": "Discreet, unmarked vans",
            "description": "Unmarked vans available on request - we don't attract attention. Plain uniform. Operatives who never discuss the job in public. For commercial clients who want visible security response, we can deploy marked vans - your choice. We never post about jobs on social media, our website, or anywhere else. Your case is referenced internally by job number, not address. SPOC handles all external liaison (police, insurer, landlord) so you don't have to.",
        },
        {
            "icon": "FileText",
            "title": "Police & insurer-ready documentation",
            "description": "Full documentation pack issued within 24 hours: pre-clean photos (with scale reference), substrate assessment, chemistry log, post-clean photos, ATP swab results (if biological), waste consignment notes (if biohazard), glazing invoice, itemised cleanup invoice. Suitable for Police Scotland evidence (where authorised), insurer claims, landlord hand-back, and regulatory audit. We work with all major UK property insurers - our documentation has never been rejected.",
        },
    ],
    "pricingTiers": [
        {
            "name": "Small-area graffiti",
            "tagline": "Tag on one wall or surface - up to 4 square metres",
            "price": "£280",
            "unit": "+ VAT",
            "features": [
                "Single-visit graffiti removal",
                "Up to 4 sqm affected area",
                "Substrate-specific chemistry",
                "Test on inconspicuous area first",
                "1-person crew, 2-3 hours on site",
                "Pre- and post-clean photos",
                "Documentation pack for insurer",
                "Within 24-hour response",
            ],
        },
        {
            "name": "Multi-surface vandalism",
            "tagline": "Most common - graffiti + smashed glass + biological",
            "price": "£640",
            "unit": "+ VAT",
            "highlighted": True,
            "features": [
                "Multi-surface graffiti removal",
                "Smashed glass make-safe + boarding",
                "Biological remediation (HSE HSG272)",
                "Up to 8 hours on site",
                "2-person trained crew",
                "ATP swab verification (if biological)",
                "Biohazard waste consignment",
                "Full documentation pack",
                "Glazing replacement coordination",
            ],
        },
        {
            "name": "Major vandalism restoration",
            "tagline": "Whole-property, chemical damage, hate-crime, or commercial",
            "price": "From £1,400",
            "unit": "+ VAT",
            "features": [
                "Whole-property remediation",
                "Multi-day on-site if required",
                "3+ person trained crew",
                "Substrate-specific graffiti chemistry",
                "Chemical damage neutralisation",
                "Biological remediation (HSE HSG272)",
                "Negative-pressure HEPA if required",
                "Glazing replacement coordination",
                "Heritage / listed-building specialist chemistry",
                "Full documentation pack + SPOC + insurer liaison",
            ],
        },
    ],
    "serviceAreas": SCOTLAND_AREAS,
    "faqs": [
        {
            "q": "Will graffiti remover damage my stone wall?",
            "a": "Not if we use the right chemistry. We never apply alkaline graffiti remover to limestone or sandstone without testing first - it can etch the surface. For porous stone and brick, we use alkaline gel removers with controlled dwell time. For heritage stonework, listed buildings, and delicate substrates, we use poultice systems that lift the graffiti without surface damage. For metal and powder-coated surfaces, we use solvent gel. We always test on a small inconspicuous area first. If we have any doubt about substrate compatibility, we'll discuss with you before proceeding.",
        },
        {
            "q": "Someone smeared faeces on my front door - can you help?",
            "a": "Yes, and we treat this as a biohazard, not general cleaning. Our operatives work in full RPE/PPE (FFP3 respirator, coverall, double nitrile gloves). Biological waste is absorbed with biohazard granules, placed in UN3291 biohazard bags, and consigned to licensed incineration. The affected surface is then disinfected with EN 14476 virucidal chemistry, with double application in the contamination zone. ATP swab verification confirms the surface is biologically clean (pass <30 RLU). This is the only protocol that meets HSE HSG272. Most remediations complete in 2-3 hours on site.",
        },
        {
            "q": "I've been the victim of a hate crime. How quickly can you remove the graffiti?",
            "a": "We prioritise same-day removal for hate-crime graffiti - ideally within 4 hours of your call. We understand the trauma of having to see it on your home or place of worship. We liaise with Police Scotland, who usually want to photograph the graffiti before removal - we wait for their authorisation, which is typically given within 1-2 hours. We work with affected families, community organisations, and places of worship with the same discretion and compassion as our trauma cleanup. There may be grant funding available to cover the cost - ask us when you call.",
        },
        {
            "q": "Will my insurance cover vandalism cleanup?",
            "a": "Most buildings and contents insurance policies cover vandalism under 'malicious damage' provisions, including graffiti removal, glass replacement, and biological remediation. We work with all major UK property insurers and loss adjusters, and our documentation pack is designed to satisfy insurer requirements. We can liaise directly with your insurer on your behalf, and we can invoice the insurer directly (with their authorisation) so you don't have to pay upfront. If the vandalism is part of a police investigation, we provide the documentation they need too.",
        },
        {
            "q": "Can you replace the smashed glass as well as clean up?",
            "a": "Yes. On our first visit we make the opening safe - sweep glass fragments, board with marine ply or security mesh, assess lock damage. We then coordinate replacement glazing with our trusted local glazier network. Residential single-pane or double-glazed units are typically fitted within 48-72 hours. Leaded lights, listed-building profiles, and large commercial glazing take longer. The make-safe boarding is included in our initial visit cost; replacement glazing is quoted separately based on size and specification. We can also fit security film to make the new glass harder to break.",
        },
        {
            "q": "How discreet are you? I don't want to attract more attention.",
            "a": "Discretion is built into our protocol. Unmarked vans (no security or biohazard branding), operatives in plain uniform, and operatives who never discuss the job in public. We don't post about jobs on social media, our website, or anywhere else. For commercial clients who want visible security response (e.g. a boarded-up shopfront with branded security mesh), we can deploy marked vans - your choice. We never leave signage on site advertising what we've done. Your SPOC handles all external liaison (police, insurer, landlord) so you don't have to.",
        },
    ],
    "testimonials": [
        {
            "name": "Mrs K. Patel",
            "role": "Homeowner, East Kilbride",
            "quote": "We woke up to racist graffiti spray-painted across our garage door. The police came, photographed it, and called Maundy Clean. They were at our house within 2 hours, talked us through what they'd do, and removed every trace. You couldn't tell it had ever been there. They were respectful, kind, and discreet. We are so grateful.",
            "rating": 5,
        },
        {
            "name": "Centre Manager",
            "role": "Community Centre, Glasgow",
            "quote": "We've been vandalised three times in two years - smashed windows, faeces in the porch, graffiti on the back wall. Maundy Clean are now on retainer. They come out within 90 minutes every time, the work is excellent, and the paperwork is bulletproof for our insurer and board. They even sent the same technician each time so we had continuity. Wouldn't use anyone else.",
            "rating": 5,
        },
        {
            "name": "Facilities Manager",
            "role": "National Retail Chain, Scotland Region",
            "quote": "Our stores get hit by vandalism fairly regularly. Maundy Clean are on our approved call-out list - 90-minute response time across the central belt, substrate-aware graffiti chemistry that doesn't damage our powder-coated cladding, and documentation that satisfies our insurer and our board. They board up smashed windows fast and coordinate replacement glazing without us having to project manage.",
            "rating": 5,
        },
    ],
    "relatedServices": [
        {"name": "Graffiti Removal", "href": "/services/graffiti-removal", "description": "Standalone graffiti removal from exterior walls, cladding, and masonry. Substrate-specific chemistry."},
        {"name": "Biohazard Cleanup", "href": "/services/biohazard-cleaning", "description": "Full biohazard remediation for biological vandalism - faeces, urine, sharps. HSE HSG272 compliant."},
        {"name": "Crime Scene Cleanup", "href": "/services/crime-scene-cleanup", "description": "Post-forensic remediation after police release. HSE HSG272 compliant, discreet, 24/7."},
        {"name": "Pressure Washing", "href": "/services/pressure-washing", "description": "Exterior pressure washing for stubborn graffiti shadowing or large-area masonry cleaning."},
        {"name": "Soft Wash Roof Cleaning", "href": "/services/soft-wash-roof-cleaning", "description": "Soft-wash chemistry for delicate exterior surfaces where pressure washing would damage."},
        {"name": "Window Cleaning", "href": "/services/window-cleaning", "description": "Post-vandalism window cleaning - includes paint and adhesive removal from glass."},
    ],
    "gallery": [
        {"src": IMG_SPECIALTY_3, "alt": "Graffiti removal in progress on brick wall", "caption": "Alkaline gel graffiti remover applied to porous brick. Dwell time 30-60 minutes, agitate with nylon brush, low-pressure rinse. No substrate damage."},
        {"src": IMG_SPECIALTY_1, "alt": "Operative in full PPE remediating biological vandalism", "caption": "Biological vandalism is biohazard - full RPE/PPE protocol, EN 14476 virucidal chemistry, ATP swab verification, UN3291 biohazard waste consignment."},
        {"src": IMG_SPECIALTY_2, "alt": "Smashed window boarded with marine ply", "caption": "Smashed window made safe with marine ply boarding within 90 minutes. Replacement glazing coordinated within 48-72 hours."},
        {"src": IMG_SPECIALTY_4, "alt": "Pre- and post-clean comparison photos", "caption": "Pre- and post-clean photos with scale reference - audit-ready documentation for Police Scotland, insurers, and landlord hand-back."},
    ],
}


# ------------------------------------------------------------------
# Service 4 - Asbestos Preparation Cleaning
# ------------------------------------------------------------------

ASBESTOS_PREP = {
    "_const_name": "asbestosPrepCleaning",
    "_service_number": "Specialty Service #104",
    "_name": "Asbestos Preparation Cleaning",
    "slug": "asbestos-prep-cleaning",
    "name": "Asbestos Preparation Cleaning",
    "category": "Specialty Cleaning",
    "tagline": "Pre-asbestos removal site prep and post-removal clearance cleaning under Control of Asbestos Regulations 2012.",
    "heroHeadline": "CAR 2012\ncompliant. From\nprep to clearance.",
    "heroSubhead": "Asbestos is the biggest single cause of work-related death in the UK - around 5,000 deaths a year. Our asbestos preparation and clearance cleaning service supports licensed asbestos removal contractors (LARC) and building owners with pre-removal site preparation, post-removal deep cleaning, four-stage clearance Reoccupation Certificate cleaning, and final hand-back clean. Fully compliant with Control of Asbestos Regulations 2012, HSG247, and HSG264. We do not handle licensed asbestos removal ourselves - we partner with your LARC.",
    "heroImage": IMG_SPECIALTY_4,
    "breadcrumbParent": "Specialty Cleaning",
    "metaTitle": "Asbestos Prep Cleaning Scotland | CAR 2012 Compliant | Maundy Clean",
    "metaDescription": "Asbestos preparation and clearance cleaning across Scotland. Pre-removal prep, post-removal clean, four-stage clearance. CAR 2012 compliant. From £780/visit. 4.9-star.",
    "overviewParagraphs": [
        "Asbestos is a category 1 carcinogen and the single biggest cause of work-related death in the UK - around 5,000 deaths a year from mesothelioma, lung cancer, and asbestosis. Asbestos-containing materials (ACMs) were used extensively in Scottish buildings right up to the 1999 ban - artex ceilings, textured coatings, asbestos insulating board (AIB), asbestos cement, vinyl floor tiles, pipe lagging, boiler insulation, and gaskets. Any building built or refurbished before 2000 should be presumed to contain asbestos until proven otherwise. If you're planning refurbishment, demolition, or maintenance work that will disturb ACMs, you need a licensed asbestos removal contractor (LARC) to remove them - and you need a specialist cleaning team to prepare the site beforehand and clean it afterwards.",
        "Maundy Clean does not handle licensed asbestos removal ourselves - that work requires an HSE-licensed LARC and we partner with several across Scotland. What we do is the specialist cleaning either side of the removal: pre-removal site preparation (cleaning the area to remove dust and debris that would otherwise become contaminated during removal, protecting fixtures and fittings, setting up decontamination zones), and post-removal clearance cleaning (deep cleaning after the LARC has removed the bulk ACMs but before the four-stage clearance Reoccupation Certificate can be issued by the analyst). Our work is governed by the Control of Asbestos Regulations 2012 (CAR 2012), HSG247 (Asbestos: The Licensed Contractors' Guide), and HSG264 (Asbestos: The Survey Guide).",
        "Our asbestos cleaning operatives are trained in CAR 2012, HSG247, HSG264, and COSHH. They work in full RPE/PPE (FFP3 respirator or powered respirator, Type 5/6 coverall, double nitrile gloves, gumboots), use H-class HEPA-filtered vacuums (M-class is not sufficient for asbestos), wet-wipe all surfaces with controlled water (to prevent fibre release), and dispose of all waste as hazardous (double-bagged in UN-approved red asbestos bags, consigned under Hazardous Waste (Scotland) Regulations 2005). We carry £5m public liability, hold SEPA Upper-tier waste carrier registration, and our documentation pack is designed to satisfy the analyst's four-stage clearance inspection. We work for LARCs, building owners, housing associations, local authorities, and commercial property owners.",
    ],
    "whatsIncluded": [
        {
            "title": "Pre-removal site preparation",
            "description": "Before the LARC starts removing ACMs, the site needs preparation. We clean the area to remove dust and debris that would otherwise become contaminated with asbestos fibres during removal - this reduces the volume of hazardous waste and makes the removal cleaner and faster. We protect fixtures, fittings, and equipment that cannot be removed (wrap in polythene sheeting, tape securely). We set up decontamination zones (transit airlock, bag lock, hygiene unit connection). We pre-clean adjacent areas that will become part of the exclusion zone. This is governed by HSG247 - the Licensed Contractors' Guide.",
        },
        {
            "title": "H-class HEPA vacuum cleaning",
            "description": "Asbestos cleaning requires H-class HEPA-filtered vacuums - M-class is not sufficient. H-class captures 99.995% of particles, including asbestos fibres. We vacuum all surfaces in the work area (walls, floors, ceilings, fixtures, ledges, ductwork) systematically. Vacuum bags are double-bagged in UN-approved red asbestos bags and consigned as hazardous waste. We never use brush attachments that can flick fibres into the air - we use dedicated asbestos vacuum tools. Our H-class vacuums are serviced and tested every 6 months per HSG247, with filter change records kept on file.",
        },
        {
            "title": "Wet-wipe surface cleaning",
            "description": "After vacuuming, we wet-wipe all surfaces with controlled water (Class B wetting agent added to reduce fibre release). We use disposable rags, changed frequently, and double-bagged as hazardous waste after use. Wet-wiping is more effective than dry dusting - it captures fibres rather than redistributing them. We work methodically (top to bottom, far to near) to avoid re-contaminating cleaned areas. Surfaces are wipe-tested for residual dust after cleaning. This stage is repeated until all visible dust is removed.",
        },
        {
            "title": "Post-removal deep clean (before four-stage clearance)",
            "description": "After the LARC has removed the bulk ACMs, the area must be deep-cleaned before the analyst can conduct the four-stage clearance inspection (which leads to the Reoccupation Certificate). We vacuum all surfaces (H-class HEPA), wet-wipe all surfaces, clean the floor, and clean the decontamination zone. We remove and bag the polythene sheeting. We clean and inspect the airlocks and bag locks. The aim is to leave the area visibly clean with no dust or debris, ready for the analyst's inspection. The analyst's stage 3 inspection (air monitoring) requires this level of cleanliness.",
        },
        {
            "title": "Hazardous asbestos waste consignment",
            "description": "All asbestos waste (vacuum bags, used rags, polythene sheeting, used PPE, any residual ACM fragments) is double-bagged in UN-approved red asbestos bags, labelled per CAR 2012 requirements, and consigned to a licensed hazardous waste facility under the Hazardous Waste (Scotland) Regulations 2005. Consignment note issued per uplift - kept on file for 3 years per SEPA. Waste tracked from site to carrier to disposal facility. Certificate of destruction provided. Asbestos waste must be consigned within 6 months of bagging - we never store it on site longer than necessary.",
        },
        {
            "title": "Documentation pack for analyst & regulator",
            "description": "Full documentation pack issued within 24 hours of completion: site-specific risk assessment, RAMS, operative training records (CAR 2012, HSG247, HSG264, COSHH), H-class vacuum service records, chemical application log, photos (pre-clean, during clean, post-clean), waste consignment notes, certificate of destruction, £5m public liability certificate, SEPA waste carrier registration. Suitable for the analyst's four-stage clearance inspection, HSE audit, regulator audit, and client records. We work with all the major UK asbestos analysts and our documentation has never been rejected.",
        },
    ],
    "processSteps": [
        {
            "step": "01",
            "title": "Site survey & coordination with LARC",
            "description": "We attend site alongside your LARC to survey the work area, review the LARC's plan of work, and agree our scope. We confirm the ACM type (chrysotile, amosite, crocidolite - though all require the same cleaning protocol), the work area boundary, the decontamination zone layout, and the sequencing. We produce our site-specific risk assessment and method statement (RAMS) - signed off before work starts. We coordinate with the LARC's site supervisor throughout.",
            "duration": "1-2 hours on site + documentation",
        },
        {
            "step": "02",
            "title": "Pre-removal preparation",
            "description": "Before the LARC starts removing ACMs, we clean the area to remove dust and debris that would otherwise become contaminated. We protect fixtures and fittings with polythene sheeting. We set up the decontamination zone (transit airlock, bag lock, hygiene unit connection). We pre-clean adjacent areas that will become part of the exclusion zone. Pre-removal preparation reduces the volume of hazardous waste and makes the removal cleaner and faster - saving the LARC time and the client money.",
            "duration": "Half day to 2 days depending on area",
        },
        {
            "step": "03",
            "title": "Post-removal deep clean",
            "description": "After the LARC has removed the bulk ACMs, we deep-clean the area. Operatives in full RPE/PPE (FFP3 respirator, Type 5/6 coverall, double nitrile gloves, gumboots). H-class HEPA vacuuming of all surfaces - walls, floors, ceilings, fixtures, ledges, ductwork. Wet-wiping with Class B wetting agent. Polythene sheeting removed and bagged. Airlocks and bag locks cleaned and inspected. Floor cleaned. Area left visibly clean, ready for the analyst's stage 3 inspection (air monitoring).",
            "duration": "1-3 days depending on area size",
        },
        {
            "step": "04",
            "title": "Waste consignment & documentation",
            "description": "All asbestos waste double-bagged in UN-approved red asbestos bags, labelled per CAR 2012, consigned to licensed hazardous waste facility. Consignment note issued per uplift - kept on file 3 years per SEPA. Certificate of destruction provided. Full documentation pack issued within 24 hours: risk assessment, RAMS, training records, H-class vacuum service records, chemical log, photos, waste consignment notes, certificate of destruction, liability certificate. Suitable for analyst's four-stage clearance, HSE audit, and regulator audit.",
            "duration": "1-2 hours on site + 24-hour documentation",
        },
    ],
    "benefits": [
        {
            "icon": "Shield",
            "title": "CAR 2012, HSG247 & HSG264 compliant",
            "description": "Our asbestos cleaning protocol follows the Control of Asbestos Regulations 2012, HSG247 (Licensed Contractors' Guide), and HSG264 (Survey Guide). We do not handle licensed asbestos removal - that requires an HSE-licensed LARC, and we partner with several across Scotland. Our role is the specialist cleaning either side of removal - pre-removal prep and post-removal deep clean. Our documentation pack satisfies the analyst's four-stage clearance inspection and HSE audit.",
        },
        {
            "icon": "Wind",
            "title": "H-class HEPA filtration",
            "description": "Asbestos cleaning requires H-class HEPA-filtered vacuums - M-class is not sufficient. H-class captures 99.995% of particles, including asbestos fibres. Our H-class vacuums are serviced and tested every 6 months per HSG247, with filter change records kept on file. We never use brush attachments that can flick fibres into the air - we use dedicated asbestos vacuum tools. H-class is non-negotiable for asbestos work.",
        },
        {
            "icon": "Droplet",
            "title": "Controlled wet-wipe protocol",
            "description": "After vacuuming, we wet-wipe all surfaces with Class B wetting agent (added to reduce fibre release). Wet-wiping captures fibres rather than redistributing them. We use disposable rags, changed frequently, and double-bagged as hazardous waste after use. We work methodically (top to bottom, far to near) to avoid re-contaminating cleaned areas. Surfaces are wipe-tested for residual dust after cleaning. This stage is repeated until all visible dust is removed.",
        },
        {
            "icon": "Award",
            "title": "Analyst-ready four-stage clearance",
            "description": "Our post-removal deep clean prepares the area for the analyst's four-stage clearance inspection (which leads to the Reoccupation Certificate). Stage 1: thorough visual inspection (area visibly clean, no dust or debris). Stage 2: decontamination zone inspection (clean, intact, properly sealed). Stage 3: air monitoring (clearance indicator <10 fibres per millilitre). Stage 4: final assessment and Reoccupation Certificate. Our cleaning is calibrated to pass stages 1 and 2 first time, minimising re-clean costs.",
        },
        {
            "icon": "Lock",
            "title": "Licensed hazardous waste consignment",
            "description": "All asbestos waste double-bagged in UN-approved red asbestos bags, labelled per CAR 2012, consigned to licensed hazardous waste facility under Hazardous Waste (Scotland) Regulations 2005. Consignment note per uplift - kept on file 3 years per SEPA. Waste tracked from site to carrier to disposal. Certificate of destruction provided. Asbestos waste consigned within 6 months of bagging. We never dispose of asbestos in general waste - that's a criminal offence.",
        },
        {
            "icon": "FileText",
            "title": "HSE-audit-ready documentation",
            "description": "Full documentation pack issued within 24 hours: site-specific risk assessment, RAMS, operative training records (CAR 2012, HSG247, HSG264, COSHH), H-class vacuum service records, chemical application log, pre/during/post photos, waste consignment notes, certificate of destruction, £5m public liability certificate, SEPA waste carrier registration. Suitable for analyst's four-stage clearance, HSE audit, regulator audit, and client records. We work with all the major UK asbestos analysts.",
        },
    ],
    "pricingTiers": [
        {
            "name": "Single-room prep & clean",
            "tagline": "Artex ceiling or single AIB panel removal - one room",
            "price": "£780",
            "unit": "+ VAT",
            "features": [
                "Pre-removal site preparation",
                "Post-removal deep clean",
                "Up to 1 day on site",
                "2-person CAR 2012 trained crew",
                "H-class HEPA vacuum cleaning",
                "Controlled wet-wipe protocol",
                "Hazardous waste consignment",
                "Full documentation pack",
                "Coordination with your LARC",
            ],
        },
        {
            "name": "Multi-room prep & clean",
            "tagline": "Most common - several rooms or a full floor",
            "price": "£1,850",
            "unit": "+ VAT",
            "highlighted": True,
            "features": [
                "Multi-room pre-removal preparation",
                "Multi-room post-removal deep clean",
                "Up to 3 days on site",
                "3-person CAR 2012 trained crew",
                "H-class HEPA vacuum cleaning",
                "Controlled wet-wipe protocol",
                "Decontamination zone setup",
                "Hazardous waste consignment (multi-uplift)",
                "Full documentation pack + LARC coordination",
            ],
        },
        {
            "name": "Major project support",
            "tagline": "Whole-building refurbishment or demolition",
            "price": "From £4,200",
            "unit": "+ VAT",
            "features": [
                "Whole-building pre-removal preparation",
                "Whole-building post-removal deep clean",
                "Multi-week on site if required",
                "4+ person CAR 2012 trained crew",
                "Multiple H-class HEPA vacuums deployed",
                "Multiple decontamination zones",
                "Airlock and hygiene unit coordination",
                "Hazardous waste consignment (multi-uplift over project)",
                "Dedicated site supervisor + LARC coordination",
                "Full documentation pack + project audit trail",
            ],
        },
    ],
    "serviceAreas": SCOTLAND_AREAS,
    "faqs": [
        {
            "q": "Do you remove asbestos yourself?",
            "a": "No. Licensed asbestos removal requires an HSE-licensed asbestos removal contractor (LARC) - it is a criminal offence for non-licensed contractors to remove licensable ACMs. We partner with several LARCs across Scotland and provide the specialist cleaning either side of removal: pre-removal site preparation and post-removal deep clean. If you don't yet have a LARC, we can recommend one from our trusted partner network. If you already have one, we coordinate directly with them. We do not handle any work that requires an HSE licence ourselves.",
        },
        {
            "q": "What's the difference between H-class and M-class vacuums?",
            "a": "H-class HEPA vacuums capture 99.995% of particles (including asbestos fibres). M-class captures 99.9%. For asbestos work, M-class is not sufficient - it's a criminal offence under CAR 2012 to use M-class for asbestos cleaning. All our vacuums are H-class, serviced and tested every 6 months per HSG247, with filter change records kept on file. We never use brush attachments (which can flick fibres into the air) - we use dedicated asbestos vacuum tools. If you're comparing quotes, ask for proof of H-class certification. If a contractor can't provide it, don't use them.",
        },
        {
            "q": "How soon can you come out to do the cleaning?",
            "a": "We typically mobilise within 24-48 hours of confirmation, depending on the LARC's schedule (we work to their timeline - the cleaning has to happen immediately before and after their removal work). For emergency situations (e.g. accidental ACM disturbance during other building work), we offer same-day response in the central belt. We cover all 32 Scottish local authority areas. We always work in sequence with your LARC - we won't mobilise until the LARC is on site or about to be. We can hold on standby at no charge if the LARC's schedule slips.",
        },
        {
            "q": "Will the area be safe to reoccupy after your cleaning?",
            "a": "Not after our cleaning alone - our cleaning prepares the area for the analyst's four-stage clearance inspection, which is the only process that can issue a Reoccupation Certificate. The four stages are: (1) thorough visual inspection, (2) decontamination zone inspection, (3) air monitoring (clearance indicator <10 fibres per millilitre), (4) final assessment and Reoccupation Certificate. Our cleaning is calibrated to pass stages 1 and 2 first time, minimising the risk of re-clean costs. The analyst (a UKAS-accredited independent) issues the certificate - we don't. Once the certificate is issued, the area is safe to reoccupy.",
        },
        {
            "q": "What asbestos waste do you produce, and how is it disposed of?",
            "a": "All waste from our cleaning - vacuum bags, used rags, polythene sheeting, used PPE, any residual ACM fragments - is double-bagged in UN-approved red asbestos bags, labelled per CAR 2012 requirements, and consigned to a licensed hazardous waste facility under the Hazardous Waste (Scotland) Regulations 2005. Consignment note issued per uplift - kept on file for 3 years per SEPA. Waste tracked from site to carrier to disposal facility. Certificate of destruction provided. Asbestos waste must be consigned within 6 months of bagging. We never dispose of asbestos waste in general waste - that's a criminal offence.",
        },
        {
            "q": "We're a housing association with multiple properties - can you support a programme?",
            "a": "Yes. We work with several housing associations and local authorities on multi-property asbestos programmes - void property refurbishment, kitchen and bathroom replacement programmes, decent-homes upgrades. We can provide a dedicated site supervisor for the duration of the programme, hold a register of all operatives trained and available for the work, and provide a single point of contact for your asset management team. We can also provide an annual framework agreement with pre-agreed rates. References from housing association clients available on request.",
        },
    ],
    "testimonials": [
        {
            "name": "D. Stewart",
            "role": "Operations Director, Licensed Asbestos Removal Contractor",
            "quote": "We use Maundy Clean on around 30 asbestos projects a year across Scotland. Their pre-removal prep saves us significant time on the removal itself - the area is cleaner, the waste volumes are lower, the four-stage clearance passes first time more often. Their H-class vacuum records and CAR 2012 documentation are bulletproof. They're the only cleaning contractor we work with on asbestos.",
            "rating": 5,
        },
        {
            "name": "Asset Manager",
            "role": "Registered Social Landlord, West Lothian",
            "quote": "We have an ongoing kitchen and bathroom replacement programme across 4,000 properties, many of which have asbestos artex ceilings. Maundy Clean are on our framework - they coordinate directly with our LARC, they hit their deadlines, and their documentation satisfies our insurer and our board. We've never had an analyst reject one of their cleans. They've saved us significant re-clean costs over the years.",
            "rating": 5,
        },
        {
            "name": "J. McAllister",
            "role": "Building Owner, Edinburgh Commercial Premises",
            "quote": "We discovered AIB during a refurbishment of our 1960s office building. Panic. Our LARC recommended Maundy Clean for the cleaning side. They came out the next day, walked us through the protocol, dealt with the HSE notification, and the four-stage clearance passed first time. Their documentation pack was comprehensive enough to satisfy our insurer and our landlord. Calm, professional, and clearly experts.",
            "rating": 5,
        },
    ],
    "relatedServices": [
        {"name": "Lead Dust Cleanup", "href": "/services/lead-dust-cleanup", "description": "Lead dust decontamination from old paint, industrial sites, and shooting ranges. CLAW 2002 compliant."},
        {"name": "Mould Remediation Cleaning", "href": "/services/mould-remediation-cleaning", "description": "Mould remediation in damp Scottish properties. Often combined with asbestos work in older buildings."},
        {"name": "Biohazard Cleanup", "href": "/services/biohazard-cleaning", "description": "Biohazard remediation - blood, bodily fluids, sharps, sewage. HSE HSG272 compliant."},
        {"name": "Post-Construction Cleaning", "href": "/services/post-construction-cleaning", "description": "Post-construction deep clean - often sequenced after asbestos removal and clearance."},
        {"name": "Hoarding Cleanup", "href": "/services/hoarding-cleanup", "description": "Multi-stage hoarding remediation - often reveals asbestos in older properties during clearance."},
        {"name": "Disinfection Services", "href": "/services/disinfection-services", "description": "EN 14476 virucidal disinfection for medical, commercial, and high-risk environments."},
    ],
    "gallery": [
        {"src": IMG_SPECIALTY_4, "alt": "Asbestos cleaning operative in full RPE/PPE with H-class HEPA vacuum", "caption": "Asbestos cleaning operative in full RPE/PPE (FFP3 respirator, Type 5/6 coverall, double nitrile gloves, gumboots) using H-class HEPA vacuum. H-class captures 99.995% of particles - M-class is not sufficient for asbestos."},
        {"src": IMG_SPECIALTY_1, "alt": "Decontamination zone with transit airlock and bag lock", "caption": "Decontamination zone with transit airlock and bag lock - set up per HSG247 (Licensed Contractors' Guide). Polythene sheeting, taped seams, negative-pressure air management."},
        {"src": IMG_SPECIALTY_2, "alt": "UN-approved red asbestos waste bags being double-bagged", "caption": "All asbestos waste double-bagged in UN-approved red asbestos bags, labelled per CAR 2012, consigned to licensed hazardous waste facility. Consignment note per uplift, kept on file 3 years per SEPA."},
        {"src": IMG_SPECIALTY_3, "alt": "Four-stage clearance Reoccupation Certificate issued by UKAS analyst", "caption": "Four-stage clearance Reoccupation Certificate issued by UKAS-accredited analyst. Our cleaning is calibrated to pass stages 1 (visual) and 2 (decon zone) first time, minimising re-clean costs."},
    ],
}


# ------------------------------------------------------------------
# Service 5 - Lead Dust Cleanup
# ------------------------------------------------------------------

LEAD_DUST = {
    "_const_name": "leadDustCleanup",
    "_service_number": "Specialty Service #105",
    "_name": "Lead Dust Cleanup",
    "slug": "lead-dust-cleanup",
    "name": "Lead Dust Cleanup",
    "category": "Specialty Cleaning",
    "tagline": "Lead dust decontamination from old paint, industrial sites, and shooting ranges - CLAW 2002 compliant.",
    "heroHeadline": "Lead dust\ndecontaminated.\nTo CLAW 2002.",
    "heroSubhead": "Lead is a neurotoxin. There is no safe blood-lead level in children. Scottish buildings built before 1992 almost certainly contain lead paint; industrial sites, foundries, and engineering works may have lead dust contamination; indoor shooting ranges accumulate lead from primer and bullet fragmentation. Our lead dust cleanup service decontaminates all these environments to CLAW 2002 (Control of Lead at Work Regulations) standards, with full RPE/PPE, HEPA vacuuming, and licensed hazardous waste consignment.",
    "heroImage": IMG_SPECIALTY_5,
    "breadcrumbParent": "Specialty Cleaning",
    "metaTitle": "Lead Dust Cleanup Scotland | CLAW 2002 Compliant | Maundy Clean",
    "metaDescription": "Lead dust cleanup across Scotland. Old paint, industrial sites, shooting ranges. CLAW 2002 compliant. HEPA vacuuming. From £620/visit. 4.9-star.",
    "overviewParagraphs": [
        "Lead is a cumulative neurotoxin. There is no safe blood-lead level in children - even low levels are linked to reduced IQ, behavioural problems, and developmental delay. In adults, lead exposure causes hypertension, kidney damage, reproductive problems, and nerve disorders. Scottish buildings built or decorated before 1992 almost certainly contain lead paint (banned in the UK in 1992, but older paint layers remain under newer coats). Industrial sites - foundries, battery recyclers, engineering works, radiator repair shops, printing works - may have lead dust contamination. Indoor shooting ranges accumulate lead from primer (lead styphnate) and bullet fragmentation. All of these pose serious health risks if disturbed without proper controls.",
        "Our lead dust cleanup service decontaminates all these environments to the Control of Lead at Work Regulations 2002 (CLAW 2002) standard, supported by HSE guidance INDG355 (Lead and You) and L132 (ACOP for CLAW 2002). The protocol involves: risk assessment (identifying lead source and contamination scope), containment (prevent cross-contamination), HEPA vacuuming (M-class minimum, H-class preferred), wet-wiping with lead-specific chelating detergent, post-clean verification (wipe sampling and laboratory analysis), and licensed hazardous waste consignment. We carry £5m public liability, hold SEPA Upper-tier waste carrier registration, and our operatives are CLAW 2002 trained with annual blood-lead monitoring.",
        "We work for homeowners (pre-refurbishment lead paint assessment and decontamination, particularly in tenement flats with original 1900s-1950s paint), housing associations (void property refurbishment, decent-homes programmes), local authorities (council housing, schools, nurseries), commercial property owners (former industrial sites being redeveloped), indoor shooting ranges (regular decontamination as part of CLAW 2002 compliance), and NHS Trusts (community health premises). We do not handle lead paint removal itself - that requires a specialist paint removal contractor - but we clean the lead dust that disturbance creates. References from local authorities, housing associations, and the shooting sports community available on request.",
    ],
    "whatsIncluded": [
        {
            "title": "Lead risk assessment & source identification",
            "description": "Site-specific risk assessment identifies the lead source - old lead paint (typically under newer coats in pre-1992 buildings), industrial lead dust (foundries, engineering works, battery recyclers), or shooting range lead (primer residue and bullet fragmentation). Contamination scope assessed: surface dust (lead-loaded dust on floors, sills, fixtures), paint flake contamination (in soil around pre-1992 buildings), airborne lead (in active industrial sites). Risk profile documented - particularly important if children or pregnant women are present. RAMS produced and signed off before work starts.",
        },
        {
            "title": "Containment & RPE/PPE protocol",
            "description": "Containment: area sealed with polythene sheeting and tape, negative-pressure HEPA extraction where cross-contamination risk is high, exclusion zone marked with lead hazard signage. HVAC isolated. Adjacent areas protected. Operatives in full RPE/PPE - P3-powered respirator or FFP3 (lead is a substance hazardous to health under COSHH), Type 5/6 coverall, double nitrile gloves, gumboots. Operatives wash down before leaving the work area. Dirty and clean zones established. Used PPE bagged as hazardous waste (lead-contaminated). Health surveillance: annual blood-lead monitoring for all operatives working on lead projects.",
        },
        {
            "title": "M-class or H-class HEPA vacuuming",
            "description": "All surfaces vacuumed with M-class or H-class HEPA-filtered vacuums (M-class captures 99.9%, H-class captures 99.995% - we use H-class as standard for lead work). Lead dust is heavy and tends to settle on horizontal surfaces - floors, sills, ledges, tops of cupboards, ductwork. We vacuum systematically (top to bottom, far to near), with particular attention to dust traps (carpet edges, under furniture, behind radiators, in ductwork). Vacuum bags double-bagged as hazardous waste. We never use brush attachments - we use dedicated lead vacuum tools. Vacuums serviced and tested every 6 months per COSHH.",
        },
        {
            "title": "Wet-wipe with lead chelating detergent",
            "description": "After vacuuming, all surfaces wet-wiped with a lead-specific chelating detergent. The chelating agent binds to lead particles, lifting them from the surface. We use disposable rags (changed frequently), working methodically (top to bottom, far to near). Wet-wiping is more effective than dry dusting for lead - it captures particles rather than redistributing them. Hard-to-reach areas (window tracks, door hinges, behind radiators) given particular attention. Surfaces wipe-tested after cleaning. This stage is repeated until wipe tests pass.",
        },
        {
            "title": "Post-clean verification (wipe sampling & lab analysis)",
            "description": "Post-clean verification by wipe sampling. Surfaces wiped with certified lead dust wipes, sent to a UKAS-accredited laboratory for analysis. Pass thresholds (per US HUD/EPA guidance, adopted as best practice in the UK): floors <10 micrograms per square foot (approx. 108 micrograms per square metre); window sills <100 micrograms per square foot; window troughs <400 micrograms per square foot. Where UK-specific thresholds apply (e.g. CLAW 2002 workplace exposure limits), we use those. Any wipe above threshold triggers re-clean and re-sample. Lab results provided in the documentation pack.",
        },
        {
            "title": "Licensed hazardous waste consignment",
            "description": "All lead-contaminated waste (vacuum bags, used rags, polythene sheeting, used PPE, any removed paint flakes) consigned as hazardous waste under the Hazardous Waste (Scotland) Regulations 2005. Waste double-bagged, labelled per CLAW 2002 requirements, consigned to a licensed hazardous waste facility. Consignment note per uplift - kept on file for 3 years per SEPA. Waste tracked from site to carrier to disposal. Certificate of destruction provided. Lead waste is consigned within 6 months of bagging. We never dispose of lead waste in general waste - that's a criminal offence.",
        },
    ],
    "processSteps": [
        {
            "step": "01",
            "title": "Risk assessment & source identification",
            "description": "Site survey and risk assessment - lead source identified (paint, industrial, shooting range), contamination scope assessed (surface dust, paint flakes, soil, air), risk profile documented (children, pregnant women, workers on site). RAMS produced. Wipe samples taken pre-clean to establish baseline contamination levels. Adjacent areas assessed for cross-contamination risk. Client briefing on scope, timeline, and reoccupation criteria.",
            "duration": "2-4 hours on site + lab analysis",
        },
        {
            "step": "02",
            "title": "Containment & RPE/PPE deployment",
            "description": "Containment set up - area sealed with polythene sheeting, negative-pressure HEPA extraction deployed where cross-contamination risk is high, exclusion zone marked with lead hazard signage. HVAC isolated. Adjacent areas protected. Decontamination zone established (dirty/clean transition). Operatives in full RPE/PPE - P3-powered respirator or FFP3, Type 5/6 coverall, double nitrile gloves, gumboots. H&S briefing for all operatives. Operatives wash-down protocol established before leaving the work area.",
            "duration": "2-4 hours",
        },
        {
            "step": "03",
            "title": "HEPA vacuuming, wet-wiping & detail cleaning",
            "description": "H-class HEPA vacuuming of all surfaces - walls, floors, ceilings, fixtures, ledges, ductwork. Vacuum bags double-bagged as hazardous waste. Wet-wiping with lead-specific chelating detergent - all surfaces, top to bottom, far to near. Disposable rags changed frequently, bagged as hazardous waste. Hard-to-reach areas given particular attention - window tracks, door hinges, behind radiators, under furniture, carpet edges. Repeat application if wipe tests show residual lead. Final inspection before post-clean verification.",
            "duration": "1-3 days depending on area size",
        },
        {
            "step": "04",
            "title": "Wipe sampling, waste consignment & documentation",
            "description": "Post-clean verification by wipe sampling - certified lead dust wipes sent to UKAS-accredited lab for analysis. Pass thresholds per US HUD/EPA guidance (adopted as UK best practice) or CLAW 2002 workplace exposure limits. Any wipe above threshold triggers re-clean and re-sample. Lead waste consigned to licensed hazardous waste facility - consignment note per uplift, kept on file 3 years per SEPA. Certificate of destruction provided. Full documentation pack issued within 24-48 hours (depending on lab turnaround): risk assessment, RAMS, training records, lab results, photos, waste consignment notes, liability certificate.",
            "duration": "1-2 hours on site + 48-hour lab analysis + documentation",
        },
    ],
    "benefits": [
        {
            "icon": "Shield",
            "title": "CLAW 2002 compliant",
            "description": "Our lead dust cleanup protocol follows the Control of Lead at Work Regulations 2002 (CLAW 2002), supported by HSE guidance INDG355 (Lead and You) and L132 (ACOP for CLAW 2002). All operatives are CLAW 2002 trained with annual blood-lead monitoring. We work for local authorities, housing associations, NHS Trusts, industrial site owners, and shooting ranges - all of whom require CLAW 2002 compliance. We carry £5m public liability and SEPA Upper-tier waste carrier registration.",
        },
        {
            "icon": "Wind",
            "title": "H-class HEPA filtration (not M-class)",
            "description": "Lead dust requires M-class or H-class HEPA vacuums - we use H-class as standard for lead work. H-class captures 99.995% of particles. M-class captures 99.9%. For lead, the extra 0.095% matters - lead is a cumulative neurotoxin with no safe blood-lead level in children. Our vacuums are serviced and tested every 6 months per COSHH, with filter change records kept on file. We never use brush attachments (which can flick lead dust into the air) - we use dedicated lead vacuum tools.",
        },
        {
            "icon": "Droplet",
            "title": "Lead-specific chelating detergent",
            "description": "Standard detergent doesn't lift lead particles effectively. We use a lead-specific chelating detergent - the chelating agent binds to lead particles, lifting them from the surface. Wet-wiping captures particles rather than redistributing them. We use disposable rags (changed frequently), working methodically. Hard-to-reach areas (window tracks, door hinges, behind radiators) given particular attention. Surfaces wipe-tested after cleaning. This stage is repeated until wipe tests pass.",
        },
        {
            "icon": "Award",
            "title": "Lab-verified post-clean sampling",
            "description": "We don't just say it's clean - we prove it with lab analysis. Post-clean verification by wipe sampling: certified lead dust wipes sent to UKAS-accredited lab. Pass thresholds per US HUD/EPA guidance (adopted as UK best practice): floors <10 micrograms per square foot, window sills <100, window troughs <400. Where CLAW 2002 workplace exposure limits apply, we use those. Any wipe above threshold triggers re-clean and re-sample. Lab results provided in the documentation pack. Audit-ready for insurers, regulators, and landlords.",
        },
        {
            "icon": "Lock",
            "title": "Licensed hazardous waste consignment",
            "description": "All lead-contaminated waste consigned as hazardous waste under Hazardous Waste (Scotland) Regulations 2005. Double-bagged, labelled per CLAW 2002, consigned to licensed hazardous waste facility. Consignment note per uplift - kept on file 3 years per SEPA. Waste tracked from site to carrier to disposal. Certificate of destruction provided. Lead waste consigned within 6 months of bagging. We never dispose of lead waste in general waste - that's a criminal offence.",
        },
        {
            "icon": "Heart",
            "title": "Child-safe reoccupation protocol",
            "description": "Lead is a neurotoxin. There is no safe blood-lead level in children. Our child-safe reoccupation protocol is calibrated to the strictest standards (US HUD/EPA thresholds, adopted as UK best practice) - not the more permissive workplace exposure limits. We don't consider a lead dust cleanup 'done' until wipe tests pass child-safe thresholds. This is particularly important in pre-1992 tenement flats (which almost always have lead paint under newer coats), schools, nurseries, and any home with young children or pregnant women.",
        },
    ],
    "pricingTiers": [
        {
            "name": "Single-room lead dust cleanup",
            "tagline": "Pre-refurbishment cleanup in one room - typical tenement flat",
            "price": "£620",
            "unit": "+ VAT",
            "features": [
                "Single-room lead dust decontamination",
                "Up to 1 day on site",
                "2-person CLAW 2002 trained crew",
                "H-class HEPA vacuum cleaning",
                "Lead chelating detergent wet-wipe",
                "Wipe sampling & lab analysis (4 samples)",
                "Hazardous waste consignment",
                "Full documentation pack",
            ],
        },
        {
            "name": "Multi-room / whole-flat cleanup",
            "tagline": "Most common - full pre-refurbishment lead dust cleanup",
            "price": "£1,520",
            "unit": "+ VAT",
            "highlighted": True,
            "features": [
                "Multi-room lead dust decontamination",
                "Up to 3 days on site",
                "3-person CLAW 2002 trained crew",
                "H-class HEPA vacuum cleaning",
                "Lead chelating detergent wet-wipe",
                "Wipe sampling & lab analysis (12 samples)",
                "Negative-pressure HEPA extraction",
                "Hazardous waste consignment (multi-uplift)",
                "Full documentation pack",
            ],
        },
        {
            "name": "Industrial / shooting range decontamination",
            "tagline": "Heavy contamination - industrial site, foundry, or indoor range",
            "price": "From £3,400",
            "unit": "+ VAT",
            "features": [
                "Whole-site lead dust decontamination",
                "Multi-week on-site if required",
                "4+ person CLAW 2002 trained crew",
                "Multiple H-class HEPA vacuums deployed",
                "Lead chelating detergent wet-wipe",
                "Wipe sampling & lab analysis (30+ samples)",
                "Negative-pressure HEPA extraction",
                "Air monitoring during works",
                "Multi-uplift hazardous waste consignment",
                "Full documentation pack + CLAW 2002 compliance audit",
            ],
        },
    ],
    "serviceAreas": SCOTLAND_AREAS,
    "faqs": [
        {
            "q": "How do I know if my home has lead paint or lead dust?",
            "a": "If your home was built or decorated before 1992, you should presume lead paint is present until proven otherwise. Lead paint was banned in the UK in 1992, but older paint layers remain under newer coats - particularly on skirting boards, doors, window frames, and radiators. When this paint is disturbed (sanding, scraping, stripping, or even just flaking with age), it generates lead dust. We can arrange a lead paint survey (a specialist surveyor takes paint chip samples for lab analysis) and a lead dust survey (wipe samples sent for lab analysis). The lab results tell you whether lead is present and at what concentration. Surveys are quoted separately from the cleanup itself.",
        },
        {
            "q": "I'm pregnant / have a young child. Should I be worried about lead paint?",
            "a": "Lead is a neurotoxin. There is no safe blood-lead level in children - even low levels are linked to reduced IQ, behavioural problems, and developmental delay. Lead crosses the placenta, so pregnant women should also be cautious. If your home was built before 1992 and you're planning any work that disturbs paint (sanding, scraping, stripping), or if paint is flaking, we recommend a lead survey. If lead is present, we recommend professional lead dust cleanup before any disturbance, and CLAW 2002-compliant protocols during the disturbance work. Do not attempt DIY lead paint removal - it generates large volumes of lead dust and is a major cause of lead poisoning in children.",
        },
        {
            "q": "We run an indoor shooting range - how often should we have lead dust cleanup?",
            "a": "Indoor shooting ranges accumulate lead from primer (lead styphnate) and bullet fragmentation. Under CLAW 2002, range operators must monitor lead exposure and arrange decontamination when workplace exposure limits are exceeded. As a rule of thumb: light-use ranges (club use, occasional training) should be decontaminated annually; moderate-use ranges (regular training, weekly competitions) every 6 months; heavy-use ranges (police, military, daily use) quarterly. We provide scheduled decontamination contracts - ask us for a quote based on your range's usage. We also clean bullet traps, ventilation systems, and floor coverings as part of the protocol.",
        },
        {
            "q": "We're a housing association - can you support a void property programme?",
            "a": "Yes. We work with several housing associations on void property refurbishment programmes, particularly for pre-1992 tenement stock. We can provide a dedicated site supervisor, a register of CLAW 2002-trained operatives available for the programme, and pre-agreed framework rates. We coordinate directly with your void property team and your refurbishment contractors. Our documentation satisfies your insurer, your board, and the regulator. References from housing association clients available on request - we decontaminate around 200 void properties a year across Scotland.",
        },
        {
            "q": "Do you remove the lead paint itself, or just the dust?",
            "a": "We do not handle lead paint removal itself - that requires a specialist paint removal contractor using CLAW 2002-compliant methods (chemical stripping, infra-red stripping, or controlled abrasive methods with HEPA extraction). We clean the lead dust that disturbance creates - either before paint removal (to reduce dust load), during (as part of a CLAW 2002-compliant method), or after (post-removal decontamination). We can recommend trusted lead paint removal contractors from our partner network. We coordinate with them throughout the project to ensure dust is contained and removed safely.",
        },
        {
            "q": "How do you verify the area is safe to reoccupy?",
            "a": "By wipe sampling and laboratory analysis. After cleaning, we take certified lead dust wipe samples from the highest-risk surfaces (floors, window sills, window troughs). Wipes are sent to a UKAS-accredited laboratory for analysis. Pass thresholds per US HUD/EPA guidance (adopted as UK best practice): floors <10 micrograms per square foot, window sills <100, window troughs <400. These are child-safe thresholds - significantly stricter than CLAW 2002 workplace exposure limits. We use these stricter thresholds for any home with young children or pregnant women. Lab results provided in the documentation pack, typically within 48 hours of sampling.",
        },
    ],
    "testimonials": [
        {
            "name": "Dr A. Robertson",
            "role": "Public Health Consultant, NHS Board",
            "quote": "We refer families with elevated blood-lead levels to Maundy Clean for home decontamination. Their child-safe reoccupation protocol uses US HUD/EPA thresholds (not the more permissive CLAW 2002 workplace limits), which is the right standard for any home with young children. Their lab-verified wipe sampling gives us defensible evidence that the home is safe to reoccupy. They are the only contractor in Scotland I'd recommend for this work.",
            "rating": 5,
        },
        {
            "name": "R. Mackenzie",
            "role": "Range Officer, Indoor Shooting Range, Perth",
            "quote": "We've used Maundy Clean for our quarterly lead decontamination for the last 4 years. They clean the bullet traps, the ventilation ducts, the floor coverings - everything. The CLAW 2002 compliance documentation is bulletproof for our HSE inspection. Our members' blood-lead levels have dropped since we started using them. They are professional, discreet, and clearly experts.",
            "rating": 5,
        },
        {
            "name": "Asset Manager",
            "role": "Registered Social Landlord, Glasgow",
            "quote": "Our pre-1992 tenement stock almost always has lead paint - we discovered this the hard way when a contractor sanded a ceiling without controls. Maundy Clean are now on our void property framework. They come in before refurbishment starts, decontaminate, and the lab results give us defensible hand-back to the new tenant. They've also trained our void property team on lead awareness, which has prevented further incidents.",
            "rating": 5,
        },
    ],
    "relatedServices": [
        {"name": "Asbestos Preparation Cleaning", "href": "/services/asbestos-prep-cleaning", "description": "Pre-asbestos removal site prep and post-removal clearance. CAR 2012 compliant. Often combined with lead dust work in older buildings."},
        {"name": "Mould Remediation Cleaning", "href": "/services/mould-remediation-cleaning", "description": "Mould remediation in damp Scottish properties - often combined with lead dust work in older tenements."},
        {"name": "Biohazard Cleanup", "href": "/services/biohazard-cleaning", "description": "Biohazard remediation - blood, bodily fluids, sharps, sewage. HSE HSG272 compliant."},
        {"name": "Post-Construction Cleaning", "href": "/services/post-construction-cleaning", "description": "Post-construction deep clean - often sequenced after lead dust decontamination in refurbishment projects."},
        {"name": "Tenement Cleaning", "href": "/services/tenement-cleaning", "description": "Specialist tenement cleaning - common areas, stairs, close entrances. Lead paint awareness built in."},
        {"name": "Deep House Cleaning", "href": "/services/deep-house-cleaning", "description": "Whole-house deep clean - lead-safe protocols available for pre-1992 properties."},
    ],
    "gallery": [
        {"src": IMG_SPECIALTY_5, "alt": "Lead dust cleanup operative in full RPE/PPE with H-class HEPA vacuum", "caption": "Operative in full RPE/PPE (P3-powered respirator, Type 5/6 coverall, double nitrile gloves) using H-class HEPA vacuum. H-class captures 99.995% of particles - we use H-class as standard for lead work."},
        {"src": IMG_SPECIALTY_1, "alt": "Lead dust wipe sampling being taken from a window sill", "caption": "Lead dust wipe sampling - certified wipes sent to UKAS-accredited lab for analysis. Pass thresholds: floors <10 micrograms per square foot, window sills <100, window troughs <400 (US HUD/EPA guidance, adopted as UK best practice)."},
        {"src": IMG_SPECIALTY_2, "alt": "Containment zone with lead hazard signage", "caption": "Containment zone with polythene sheeting, negative-pressure HEPA extraction, and lead hazard signage. HVAC isolated. Dirty/clean decontamination zone established."},
        {"src": IMG_SPECIALTY_3, "alt": "Lead-specific chelating detergent being applied to surface", "caption": "Lead-specific chelating detergent binds to lead particles, lifting them from the surface. Standard detergent doesn't work for lead - the chelating agent is essential."},
    ],
}


# ------------------------------------------------------------------
# Service 6 - Drug Lab Cleanup
# ------------------------------------------------------------------

DRUG_LAB = {
    "_const_name": "drugLabCleanup",
    "_service_number": "Specialty Service #106",
    "_name": "Drug Lab Cleanup",
    "slug": "drug-lab-cleanup",
    "name": "Drug Lab Cleanup",
    "category": "Specialty Cleaning",
    "tagline": "Clandestine drug lab (meth lab) remediation - toxic chemical decontamination under HSE, SEPA & COSHH.",
    "heroHeadline": "Drug labs\nremediated.\nTo HSE standard.",
    "heroSubhead": "Clandestine drug labs (meth labs) are the most contaminated residential properties we encounter - every surface can be coated in toxic chemical residue from methamphetamine manufacture, including solvents, acids, alkalis, phosphorus compounds, and heavy metals. Our drug lab cleanup service decontaminates these properties to a reoccupiable standard under HSE, SEPA, and COSHH, with full RPE/PPE, sealed containment, chemical-specific neutralisation, and licensed hazardous waste consignment. We work with police, insurers, landlords, and local authorities.",
    "heroImage": IMG_SPECIALTY_1,
    "breadcrumbParent": "Specialty Cleaning",
    "metaTitle": "Drug Lab Cleanup Scotland | Meth Lab Remediation | Maundy Clean",
    "metaDescription": "Drug lab (meth lab) cleanup across Scotland. Toxic chemical decontamination. HSE, SEPA & COSHH compliant. From £3,200/site. 4.9-star. Discreet.",
    "overviewParagraphs": [
        "Clandestine drug labs - typically methamphetamine (meth) labs, but also fentanyl and other synthetic drug operations - are the most contaminated residential properties we encounter. Methamphetamine manufacture uses highly toxic, highly reactive chemicals: solvents (acetone, toluene, ethanol, methylated spirits), acids (hydrochloric acid, sulphuric acid), alkalis (sodium hydroxide, anhydrous ammonia), red phosphorus, iodine, lithium (from batteries), and pseudoephedrine (the precursor). Every surface in the lab - walls, floors, ceilings, fixtures, soft furnishings, HVAC ductwork, plumbing - can be coated in toxic residue. One cook can contaminate a property to a level that requires complete remediation, including removal of all porous materials and chemical neutralisation of all hard surfaces.",
        "Our drug lab cleanup service decontaminates these properties to a reoccupiable standard under HSE (Health and Safety Executive), SEPA (Scottish Environment Protection Agency), and COSHH (Control of Substances Hazardous to Health). The protocol involves: risk assessment (identifying the chemicals used in the lab - often with police forensic reports), containment (sealed negative-pressure enclosure), chemical-specific neutralisation (different chemicals require different neutralisers), HEPA vacuuming, solvent vapour remediation, surface sampling and laboratory analysis, and licensed hazardous waste consignment. We carry £5m public liability, hold SEPA Upper-tier waste carrier registration, and our operatives are CLAW 2002, COSHH, and HSE HSG272 trained.",
        "We work with Police Scotland (who notify us when a lab is raided and the property is released), the Procurator Fiscal's office (where the lab is part of a prosecution), local authority environmental health departments (who have statutory powers to require remediation), housing associations (whose property has been used as a lab, often by tenants), private landlords (whose tenant has been operating a lab), and commercial property owners. We've handled 25+ drug lab remediations across Scotland in the last 5 years. The work is intense, multi-day, and requires significant specialist expertise. Discretion is critical - we work with police, we use unmarked vans, and we never discuss operational details. References from Police Scotland and local authority environmental health departments available on request.",
    ],
    "whatsIncluded": [
        {
            "title": "Risk assessment & chemical identification",
            "description": "Site-specific risk assessment identifies the chemicals used in the lab. We work from police forensic reports (where available) and our own on-site chemical identification (pH paper, colour-change reagent tests for common meth precursors, photoionisation detector for solvent vapours). The chemical profile determines the neutralisation protocol - different chemicals require different neutralisers. Risk profile documented: acute chemical hazard (solvents, acids, alkalis, phosphorus, lithium), chronic chemical hazard (long-term meth residue), biological hazard (if sharps or biological contamination present), physical hazard (electrical, gas, structural). RAMS produced and signed off before work starts.",
        },
        {
            "title": "Sealed negative-pressure containment",
            "description": "Drug lab remediation requires the strictest containment of any cleaning service we offer. Area sealed with 6-mil polythene sheeting, all seams taped with gas-proof tape, all openings (windows, doors, vents, drains) sealed. Negative-pressure HEPA extraction deployed - air is drawn through the work area, filtered through HEPA and activated carbon (to capture solvent vapours as well as particulates), and vented to outside. Exclusion zone marked with chemical hazard signage. Access restricted to authorised operatives only. Adjacent areas (including other flats in a tenement) monitored for cross-contamination. HVAC fully isolated and sealed.",
        },
        {
            "title": "Chemical-specific neutralisation",
            "description": "Different chemicals require different neutralisers. Acids (hydrochloric, sulphuric) neutralised with weak alkaline solution. Alkalis (sodium hydroxide, ammonia) neutralised with weak acid solution. Solvents (acetone, toluene) absorbed with activated carbon and ventilated. Red phosphorus carefully wetted to prevent ignition, then collected as hazardous waste. Lithium (highly reactive with water) carefully collected dry and consigned as hazardous waste. Iodine neutralised with sodium thiosulphate. Meth residue dissolved with solvent and surface-wiped. All neutralisation done by trained operatives in full RPE/PPE, with chemical-specific first-aid response on standby.",
        },
        {
            "title": "HEPA vacuuming & solvent vapour remediation",
            "description": "After chemical neutralisation, all surfaces vacuumed with H-class HEPA-filtered vacuums (H-class captures 99.995% of particles). Lead, phosphorus, and lithium contamination require H-class - M-class is not sufficient. Vacuum bags double-bagged as hazardous waste. Solvent vapour remediation: hydroxyl generators and activated carbon scrubbers deployed for 24-72 hours to break down residual solvent vapour at the molecular level. HVAC ductwork fogged with neutralising agent. Soft furnishings (carpet, curtains, sofa, mattress, bedding) cannot be effectively decontaminated and are removed for incineration as hazardous waste.",
        },
        {
            "title": "Surface sampling & laboratory analysis",
            "description": "Post-clean verification by surface sampling. Wipe samples taken from highest-risk surfaces (countertops, sinks, floors near cook location, ventilation ducts, plumbing fixtures) and sent to a UKAS-accredited laboratory for methamphetamine residue analysis. Pass threshold: <0.1 micrograms of methamphetamine per 100 square centimetres (per US EPA guidance, adopted as UK best practice - there is no UK-specific statutory threshold). Any sample above threshold triggers re-clean and re-sample. Lab results provided in the documentation pack, typically within 5-10 working days. We don't consider a drug lab 'done' until lab results pass.",
        },
        {
            "title": "Licensed hazardous waste consignment",
            "description": "All drug lab waste (vacuum bags, used rags, polythene sheeting, used PPE, neutralised chemicals, removed soft furnishings, any bulk chemical containers) consigned as hazardous waste under Hazardous Waste (Scotland) Regulations 2005. Waste double-bagged in UN-approved containers, labelled per SEPA requirements, consigned to a licensed hazardous waste facility capable of handling meth lab waste. Consignment note per uplift - kept on file for 3 years. Waste tracked from site to carrier to disposal. Certificate of destruction provided. Drug lab waste is some of the most heavily regulated waste in Scotland - we have an unblemished consignment record.",
        },
    ],
    "processSteps": [
        {
            "step": "01",
            "title": "Police release, risk assessment & chemical identification",
            "description": "We cannot enter a drug lab until Police Scotland have raided the property, completed their forensic examination, and officially released the property. Once released, we attend site for risk assessment - reviewing police forensic reports, conducting our own on-site chemical identification (pH paper, reagent tests, photoionisation detector for solvent vapours). Chemical profile documented. Risk assessment and method statement (RAMS) produced. Local authority environmental health department notified. Insurer notified. Site-specific method statement signed off before work starts.",
            "duration": "1-2 days after police release",
        },
        {
            "step": "02",
            "title": "Containment & RPE/PPE deployment",
            "description": "Sealed negative-pressure containment set up - 6-mil polythene sheeting, gas-proof taped seams, all openings sealed, negative-pressure HEPA extraction with activated carbon filter (for solvent vapours). Exclusion zone marked with chemical hazard signage. HVAC fully isolated and sealed. Adjacent properties (including other flats in a tenement) monitored for cross-contamination. Operatives in full RPE/PPE - P3-powered respirator with combined vapour/particulate filter, Type 5/6 chemical-resistant coverall, double nitrile gloves, gumboots, eye protection. Decontamination zone established.",
            "duration": "1-2 days",
        },
        {
            "step": "03",
            "title": "Gross removal, chemical neutralisation & HEPA vacuuming",
            "description": "Gross chemical contamination removed - bulk chemical containers carefully packaged as hazardous waste. Acids, alkalis, solvents, phosphorus, lithium, iodine each neutralised with chemical-specific neutraliser. Neutralised residues wet-wiped and bagged. All surfaces H-class HEPA vacuumed. Soft furnishings (carpet, curtains, soft furniture, bedding) removed for incineration as hazardous waste - these cannot be effectively decontaminated. HVAC ductwork fogged with neutralising agent. Plumbing fixtures flushed and neutralised. Wall and floor surfaces chemically neutralised and wet-wiped. This stage typically takes 3-7 days depending on lab size.",
            "duration": "3-7 days",
        },
        {
            "step": "04",
            "title": "Solvent vapour remediation, sampling & documentation",
            "description": "Hydroxyl generators and activated carbon scrubbers deployed for 24-72 hours to break down residual solvent vapour. Surface sampling - wipe samples from highest-risk surfaces sent to UKAS-accredited lab for methamphetamine residue analysis (pass threshold <0.1 micrograms per 100 sq cm per US EPA guidance). Any sample above threshold triggers re-clean and re-sample. Hazardous waste consigned to licensed facility under SEPA - consignment note per uplift, kept on file 3 years. Certificate of destruction provided. Full documentation pack issued within 5-10 working days (depending on lab turnaround): risk assessment, RAMS, training records, chemical log, lab results, photos, waste consignment notes, certificate of destruction, £5m public liability certificate.",
            "duration": "2-3 days on site + 5-10 day lab analysis",
        },
    ],
    "benefits": [
        {
            "icon": "Shield",
            "title": "HSE, SEPA & COSHH compliant",
            "description": "Drug lab remediation is governed by multiple overlapping regimes: HSE (Control of Substances Hazardous to Health, Control of Lead at Work if lead present, Control of Asbestos if asbestos disturbed), SEPA (Hazardous Waste (Scotland) Regulations 2005), and the Environmental Protection Act 1990. Our protocol satisfies all of them. We carry £5m public liability, hold SEPA Upper-tier waste carrier registration, and our operatives are CLAW 2002, COSHH, and HSE HSG272 trained with annual refreshers. We work with Police Scotland and local authority environmental health departments.",
        },
        {
            "icon": "Lock",
            "title": "Sealed negative-pressure containment",
            "description": "Drug lab remediation requires the strictest containment of any cleaning service we offer. Sealed 6-mil polythene enclosure, gas-proof taped seams, negative-pressure HEPA extraction with activated carbon filter (to capture solvent vapours as well as particulates). Adjacent properties (including other flats in a tenement) monitored for cross-contamination. HVAC fully isolated and sealed. We've never had a cross-contamination incident in 5 years of drug lab remediation. Containment is non-negotiable - solvent vapours and meth residue can travel through walls, ductwork, and plumbing if not properly sealed.",
        },
        {
            "icon": "FlaskConical",
            "title": "Chemical-specific neutralisation",
            "description": "Different chemicals require different neutralisers - using the wrong one can be catastrophic. Acids neutralised with weak alkaline. Alkalis with weak acid. Solvents absorbed and ventilated. Red phosphorus wetted to prevent ignition. Lithium (highly reactive with water) collected dry. Iodine with sodium thiosulphate. Meth residue dissolved with solvent and surface-wiped. Our operatives are trained in meth lab chemistry and carry the full range of neutralisers on site. Chemical-specific first-aid response on standby. This is not a job for general cleaners - it requires specialist chemistry expertise.",
        },
        {
            "icon": "Award",
            "title": "Lab-verified meth residue sampling",
            "description": "We don't just say it's clean - we prove it with lab analysis. Post-clean verification by surface sampling: wipe samples from highest-risk surfaces sent to UKAS-accredited lab for methamphetamine residue analysis. Pass threshold: <0.1 micrograms per 100 square centimetres (per US EPA guidance, adopted as UK best practice - there is no UK-specific statutory threshold). Any sample above threshold triggers re-clean and re-sample. Lab results provided in the documentation pack. Audit-ready for environmental health departments, insurers, and regulators.",
        },
        {
            "icon": "Wind",
            "title": "Solvent vapour remediation",
            "description": "Solvents (acetone, toluene, ethanol) used in meth manufacture off-gas for weeks or months after the lab is shut down. These vapours are toxic, flammable, and pervasive - they penetrate plasterboard, wood, and even concrete. After surface cleaning, we deploy hydroxyl generators and activated carbon scrubbers for 24-72 hours to break down residual solvent vapour at the molecular level. HVAC ductwork fogged with neutralising agent. We don't consider a drug lab 'done' until solvent vapour readings drop below COSHH workplace exposure limits.",
        },
        {
            "icon": "Lock",
            "title": "Discreet, police-cleared operation",
            "description": "Drug lab remediation is sensitive. We work with Police Scotland, who notify us when a lab is raided and the property is released. We use unmarked vans (no chemical or biohazard branding), plain uniform, and operatives who never discuss the job in public. We coordinate with local authority environmental health departments, who have statutory powers to require remediation. We never discuss operational details. Your case is referenced internally by job number, not address. References from Police Scotland and local authority environmental health departments available on request.",
        },
    ],
    "pricingTiers": [
        {
            "name": "Small lab (single room)",
            "tagline": "Small-scale operation in one room - typical 'user lab' not commercial production",
            "price": "From £3,200",
            "unit": "+ VAT",
            "features": [
                "Single-room drug lab remediation",
                "5-7 days on site",
                "3-person specialist crew",
                "Sealed negative-pressure containment",
                "Chemical-specific neutralisation",
                "H-class HEPA vacuum cleaning",
                "Hydroxyl + activated carbon vapour remediation",
                "Surface sampling & lab analysis (10 samples)",
                "Hazardous waste consignment",
                "Full documentation pack",
            ],
        },
        {
            "name": "Standard lab (multiple rooms)",
            "tagline": "Most common - contamination across multiple rooms",
            "price": "From £7,800",
            "unit": "+ VAT",
            "highlighted": True,
            "features": [
                "Multi-room drug lab remediation",
                "10-14 days on site",
                "4-person specialist crew",
                "Sealed negative-pressure containment",
                "Chemical-specific neutralisation",
                "H-class HEPA vacuum cleaning",
                "Hydroxyl + activated carbon vapour remediation (72 hrs)",
                "Surface sampling & lab analysis (25 samples)",
                "Soft-furnishing removal & incineration",
                "HVAC ductwork fogging",
                "Hazardous waste consignment (multi-uplift)",
                "Full documentation pack + environmental health liaison",
            ],
        },
        {
            "name": "Commercial-scale lab",
            "tagline": "Large-scale production - whole-property contamination",
            "price": "From £18,000",
            "unit": "+ VAT",
            "features": [
                "Whole-property drug lab remediation",
                "3-6 weeks on site",
                "6+ person specialist crew",
                "Whole-property sealed containment",
                "Full chemical neutralisation protocol",
                "Multiple H-class HEPA vacuums",
                "Extended hydroxyl + activated carbon vapour remediation",
                "Surface sampling & lab analysis (60+ samples)",
                "Extensive soft-furnishing & porous material removal",
                "HVAC system remediation or replacement",
                "Plumbing & drainage neutralisation",
                "Multi-uplift hazardous waste consignment",
                "Full documentation pack + environmental health + insurer liaison",
            ],
        },
    ],
    "serviceAreas": SCOTLAND_AREAS,
    "faqs": [
        {
            "q": "How do I know if my property has been used as a drug lab?",
            "a": "Signs include: unusual chemical smells (ammonia, solvents, cat urine), yellow-brown stains on walls or fixtures, corroded metal fittings (taps, door handles), unusual ventilation modifications (fans installed in odd places, windows blacked out), red or yellow staining in sinks or bathtubs, large quantities of empty chemical containers in bins, dead vegetation in the garden (from chemical dumping), and unusually high utility bills (meth cooks use significant electricity). If you suspect a property has been used as a lab, do not enter - call Police Scotland on 101 (or 999 if active). Once police have investigated and released the property, we can attend for risk assessment and decontamination.",
        },
        {
            "q": "We're a landlord - our tenant was running a meth lab. What do we do?",
            "a": "Call Police Scotland immediately if you suspect active manufacture. Do not enter the property or disturb anything - meth lab chemicals are extremely hazardous. Once police have investigated and released the property, call us for a risk assessment. We'll coordinate with police (for forensic reports), your insurer (most landlords insurance covers drug lab remediation under malicious damage provisions), and the local authority environmental health department (who have statutory powers to require remediation). We can usually mobilise within 48 hours of police release. The property will not be safe to re-let (or even to enter without PPE) until lab-verified remediation is complete.",
        },
        {
            "q": "Can the property be made safe, or does it need to be demolished?",
            "a": "Most drug lab properties can be remediated to a reoccupiable standard without demolition, though the work is extensive. The protocol involves: chemical-specific neutralisation of all hard surfaces, removal of all porous materials (carpet, curtains, soft furniture, bedding, sometimes plasterboard and insulation), H-class HEPA vacuuming, solvent vapour remediation (hydroxyl + activated carbon), HVAC ductwork fogging, and lab-verified surface sampling. In extreme cases (prolonged commercial-scale manufacture, severe structural contamination), partial demolition may be recommended - but this is rare. We'll give you an honest assessment after the initial risk assessment.",
        },
        {
            "q": "Will my insurance cover drug lab cleanup?",
            "a": "Most landlords and property owners insurance policies cover drug lab remediation under 'malicious damage' or 'criminal acts' provisions, though cover varies - check your policy. We work with all major UK property insurers and loss adjusters, and our documentation pack is designed to satisfy insurer requirements. We can liaise directly with your insurer on your behalf, and we can invoice the insurer directly (with their authorisation) so you don't have to pay upfront. If insurance won't cover, the property owner is legally responsible for remediation under the Environmental Protection Act 1990 - local authorities can serve remediation notices and ultimately compulsory purchase.",
        },
        {
            "q": "How long does drug lab remediation take?",
            "a": "Small labs (single room, user-scale): 5-7 days on site plus 5-10 days for lab analysis. Standard labs (multi-room): 10-14 days on site plus lab analysis. Commercial-scale labs (whole property): 3-6 weeks on site plus lab analysis. The clock starts when we mobilise after police release and stops when lab-verified surface sampling passes (pass threshold <0.1 micrograms of methamphetamine per 100 square centimetres, per US EPA guidance). Documentation pack issued within 5-10 working days of completion (depending on lab turnaround). We don't consider a drug lab 'done' until lab results pass and the property is certified safe for reoccupation.",
        },
        {
            "q": "Are you discreet? We don't want the neighbours to know.",
            "a": "Discretion is built into our protocol. We use unmarked vans (no chemical or biohazard branding), operatives in plain uniform, and operatives who never discuss the job in public. We coordinate with Police Scotland and the local authority environmental health department, who also operate discreetly. We never post about jobs on social media, our website, or anywhere else. Your case is referenced internally by job number, not address. We've handled 25+ drug lab remediations across Scotland in the last 5 years and have never had a confidentiality breach. Discretion is non-negotiable.",
        },
    ],
    "testimonials": [
        {
            "name": "Environmental Health Officer",
            "role": "Local Authority, Central Belt",
            "quote": "Maundy Clean are on our approved panel for drug lab remediation. Their documentation satisfies our statutory requirements under the Environmental Protection Act 1990, and their lab-verified surface sampling gives us defensible evidence that a property is safe to re-let. They coordinate with Police Scotland, the Procurator Fiscal, the insurer, and the landlord without us having to project-manage. They've handled six drug labs for us in the last two years - every one has passed first-time sampling.",
            "rating": 5,
        },
        {
            "name": "M. Thompson",
            "role": "Private Landlord, Dundee",
            "quote": "I discovered my tenant had been running a meth lab in my rental flat. Absolute nightmare. Police raided, then I was left with a contaminated property and a £9,000 remediation bill. Maundy Clean dealt with my insurer directly, coordinated with environmental health, and three weeks later the lab results came back clean. The property is now re-let to a new tenant. Without them I'd have lost the property. They were professional, discreet, and clearly experts at this very specialist work.",
            "rating": 5,
        },
        {
            "name": "Loss Adjuster",
            "role": "Major UK Property Insurer",
            "quote": "Drug lab claims are some of the most complex we handle - multiple regulatory regimes, hazardous waste, multi-week timelines, lab-verified sampling. Maundy Clean is one of maybe three contractors in Scotland I'd trust with this work. Their documentation is the most thorough of any contractor we use, and they understand the insurer context - they don't gold-plate the work, but they don't cut corners either. We settle their claims within days rather than weeks because the paperwork is audit-ready on day one.",
            "rating": 5,
        },
    ],
    "relatedServices": [
        {"name": "Crime Scene Cleanup", "href": "/services/crime-scene-cleanup", "description": "Post-forensic remediation after police release. HSE HSG272 compliant, discreet, 24/7."},
        {"name": "Biohazard Cleanup", "href": "/services/biohazard-cleaning", "description": "Biohazard remediation - blood, bodily fluids, sharps, sewage. HSE HSG272 compliant."},
        {"name": "Trauma Cleanup", "href": "/services/trauma-cleanup", "description": "Compassionate cleanup after traumatic events. Discreet, 24/7, with family liaison support."},
        {"name": "Asbestos Preparation Cleaning", "href": "/services/asbestos-prep-cleaning", "description": "Pre-asbestos removal prep and post-removal clearance. CAR 2012 compliant."},
        {"name": "Lead Dust Cleanup", "href": "/services/lead-dust-cleanup", "description": "Lead dust decontamination from old paint, industrial sites, shooting ranges. CLAW 2002 compliant."},
        {"name": "Odour Removal", "href": "/services/odour-removal", "description": "Hydroxyl, ozone, and enzymatic odour remediation. Often required after drug lab solvent neutralisation."},
    ],
    "gallery": [
        {"src": IMG_SPECIALTY_1, "alt": "Drug lab remediation operative in chemical-resistant RPE/PPE", "caption": "Operative in full chemical-resistant RPE/PPE (P3-powered respirator with combined vapour/particulate filter, Type 5/6 coverall, double nitrile gloves, gumboots). Different chemicals require different neutralisers - our operatives are trained in meth lab chemistry."},
        {"src": IMG_SPECIALTY_2, "alt": "Sealed negative-pressure containment with chemical hazard signage", "caption": "Sealed 6-mil polythene containment with gas-proof taped seams, negative-pressure HEPA extraction with activated carbon filter. HVAC fully isolated. Adjacent properties monitored for cross-contamination."},
        {"src": IMG_SPECIALTY_3, "alt": "Hydroxyl generators and activated carbon scrubbers deployed", "caption": "Hydroxyl generators and activated carbon scrubbers deployed for 24-72 hours to break down residual solvent vapour at the molecular level. No masking - vapours are chemically neutralised."},
        {"src": IMG_SPECIALTY_4, "alt": "Surface wipe sampling being taken for lab analysis", "caption": "Surface wipe sampling for methamphetamine residue analysis at UKAS-accredited lab. Pass threshold <0.1 micrograms per 100 sq cm (US EPA guidance, adopted as UK best practice). Lab results in 5-10 working days."},
    ],
}


# ------------------------------------------------------------------
# Main
# ------------------------------------------------------------------

ALL_SERVICES = [
    CRIME_SCENE,
    TRAUMA,
    VANDALISM_GRAFFITI,
    ASBESTOS_PREP,
    LEAD_DUST,
    DRUG_LAB,
]


def main() -> None:
    if not DATA_FILE.exists():
        raise SystemExit(f"Data file not found: {DATA_FILE}")

    original_text = DATA_FILE.read_text(encoding="utf-8")
    original_lines = len(original_text.splitlines())

    # Ensure trailing newline before appending
    if not original_text.endswith("\n"):
        original_text += "\n"

    # Idempotency check - skip if any service already exported
    already_present = []
    for svc in ALL_SERVICES:
        marker = f"export const {svc['_const_name']}: ServiceDetail"
        if marker in original_text:
            already_present.append(svc["_const_name"])

    if already_present:
        print(f"Already present, skipping: {already_present}")
        services_to_add = [s for s in ALL_SERVICES if s["_const_name"] not in already_present]
    else:
        services_to_add = ALL_SERVICES

    if not services_to_add:
        print("Nothing to append - all services already present.")
        return

    # Build the TS block to append
    append_block = "".join(service_to_ts(s) for s in services_to_add)

    new_text = original_text + append_block
    DATA_FILE.write_text(new_text, encoding="utf-8")

    new_line_count = len(new_text.splitlines())
    added_lines = new_line_count - original_lines

    print("=" * 60)
    print("APPEND COMPLETE")
    print("=" * 60)
    print(f"File: {DATA_FILE}")
    print(f"Original lines: {original_lines}")
    print(f"Added lines:    {added_lines}")
    print(f"New total:      {new_line_count}")
    print()
    print(f"Services appended ({len(services_to_add)}):")
    for svc in services_to_add:
        slug = svc["slug"]
        const_name = svc["_const_name"]
        name = svc["_name"]
        print(f"  - {name}")
        print(f"      const:  {const_name}")
        print(f"      route:  /services/{slug}")
    if already_present:
        print()
        print(f"Already present (skipped): {already_present}")
    print("=" * 60)


if __name__ == "__main__":
    main()

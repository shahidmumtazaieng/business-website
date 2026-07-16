"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Leaf,
  Star,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Droplets,
  SprayCan,
  Crown,
  Users,
  Home,
  KeyRound,
  Hammer,
  Zap,
  Truck,
  CalendarCheck,
  Award,
  Gem,
  Layers,
  Wrench,
  Brush,
  Eye,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistInspect:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  checklistExecute:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistFinal:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
// ============================================================
const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Aberdeen", slug: "aberdeen" },
  { city: "Dundee", slug: "dundee" },
  { city: "Stirling", slug: "stirling" },
  { city: "Perth", slug: "perth" },
  { city: "Falkirk", slug: "falkirk" },
  { city: "Inverness", slug: "inverness" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Livingston", slug: "livingston" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Paisley", slug: "paisley" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "Musselburgh", slug: "musselburgh" },
  { city: "Dalkeith", slug: "dalkeith" },
  { city: "Bathgate", slug: "bathgate" },
  { city: "Cumbernauld", slug: "cumbernauld" },
  { city: "Coatbridge", slug: "coatbridge" },
  { city: "St Andrews", slug: "st-andrews" },
  { city: "Elgin", slug: "elgin" },
  { city: "Peterhead", slug: "peterhead" },
  { city: "Stonehaven", slug: "stonehaven" },
  { city: "Inverurie", slug: "inverurie" },
  { city: "Oban", slug: "oban" },
  { city: "Fort William", slug: "fort-william" },
  { city: "Aviemore", slug: "aviemore" },
  { city: "Dumfries", slug: "dumfries" },
  { city: "Stranraer", slug: "stranraer" },
  { city: "Wick", slug: "wick" },
  { city: "Thurso", slug: "thurso" },
  { city: "Lerwick", slug: "lerwick" },
  { city: "Kirkwall", slug: "kirkwall" },
];

// ============================================================
// Section 0 - Full-width hero banner
// Semantic H1: "Professional Blind & Shade Cleaning Services in Scotland"
// ============================================================

export function BlindShadeSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean blind & shade technician restoring Venetian blinds in a Scottish living room"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-dark)]/95 via-[var(--brand-dark)]/75 to-[var(--brand-dark)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/80 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-20 lg:py-28">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="max-w-3xl"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur border border-white/25 text-xs font-semibold text-white mb-5"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[var(--gold)] animate-pulse-ring" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-[var(--gold)]" />
            </span>
            Blind &amp; Shade Restoration · Glasgow · Edinburgh · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Blind &amp; Shade Cleaning Services in Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Restoring the Beauty of Your Home with Meticulous Care and Technical Excellence. Blinds
            and shades are the &ldquo;lungs&rdquo; of your home, constantly filtering city-center
            dust, pollen, and allergens. While your{" "}
            <Link
              href="/services/recurring-home-cleaning"
              className="font-semibold text-[var(--gold)] hover:text-white underline underline-offset-4"
            >
              recurring home cleaning
            </Link>{" "}
            keeps your floors and surfaces pristine, window treatments often require a specialized
            technical touch to avoid damage and ensure total hygiene. At Maundy Clean, we provide a
            premium blind cleaning and restoration service that treats every slat, cord, and
            mechanism with the &ldquo;Maundy&rdquo; tradition of care and service.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-7 flex flex-col sm:flex-row gap-3"
          >
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
              </Link>
            </Button>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-4 h-4 fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>
              <span className="font-semibold text-white">4.9/5</span>
              <span className="text-white/70">&middot; 6,200+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; Vetted
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe Products
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Same Crew Every Visit
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 1 - Long-form semantic SEO intro
// Sits right after the hero, before the existing ServiceOverview.
// ============================================================

export function BlindShadeSeoIntro() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1100px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Specialist blind &amp; shade restoration &middot; Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Window Treatment Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Built on the <strong className="font-semibold text-[var(--ink)]">Maundy tradition of
            service and care</strong>, we provide a premium alternative to impersonal national
            agencies. Serving Glasgow, Edinburgh, and the Central Belt, we are your neighborly
            experts committed to making your home sparkle again. We offer an uncomplicated,
            straightforward approach to a task many homeowners find a headache &mdash; combining
            custom care for every blind type, certified eco-friendly products, free collection and
            delivery, and a 100% satisfaction guarantee on every visit.
          </p>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Blind types handled", value: "6+" },
            { label: "Per-blind price from", value: "&pound;15" },
            { label: "Same-day on-site", value: "60-90 min" },
            { label: "Star rating", value: "4.9/5" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--brand)]/10 text-center"
              dangerouslySetInnerHTML={{ __html: `
                <div class="font-display font-extrabold text-2xl text-gradient-brand">${stat.value}</div>
                <div class="text-xs text-[var(--muted-foreground)] mt-1">${stat.label}</div>
              ` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is the Authority in Blind Maintenance
// (Semantic H2: "Why Maundy Clean is the Authority in Blind Maintenance")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: Users,
    title: "The Same Trusted Professional",
    description:
      "Reliability is built on familiarity. Whether part of your regular house cleaning schedule or a one-off restoration, we ensure the same vetted professional manages your service. Your allocated technician knows your blind types, your window layouts, and the specific care each treatment needs &mdash; we don&rsquo;t send rotating crews of strangers to your property.",
  },
  {
    icon: Layers,
    title: "Custom Care Approach",
    description:
      "We personalize our cleaning methods based on your specific material &mdash; from delicate Roman fabrics to sturdy Venetian wood. Our specialists ensure every mechanism gets the gentle yet effective care it needs: ultrasonic for aluminium and faux-wood Venetian, low-moisture hand-clean for fabric blinds, wood-safe products for real timber, delicate hand-clean only for pleated and honeycomb.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Family Safe",
    description:
      "Your health is paramount. We use only certified non-toxic, eco-friendly solutions and child-safe products, ensuring a healthy environment for your loved ones and pets. All pre-sprays, rinse agents, and fabric cleaners are low-VOC, food-safe, and free from harsh solvents, optical brighteners, and perfume. Blinds are safe for crawling babies and pets once dry &mdash; no compromise, ever.",
  },
  {
    icon: Award,
    title: "Worry-Free Guarantee",
    description:
      "We take pride in our standards. You only pay when you are completely satisfied with the cleanliness and service provided in your home. Our 30-day satisfaction guarantee means if you are not happy with the result for any reason, call us within 30 days and we&rsquo;ll re-clean free of charge or refund &mdash; your choice. We&rsquo;d rather lose an hour of a technician&rsquo;s time than have an unhappy customer.",
  },
];

export function BlindShadeSeoWhy() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center mb-14">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.whyCrew}
                alt="Maundy Clean blind & shade technician &mdash; uniformed, vetted, and material-trained"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Trusted Presence in Your Home
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, uniformed, and trained in material-specific chemistry.
                  Same crew every visit &mdash; never a rotating cast of strangers.
                </p>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 bg-white rounded-xl shadow-xl p-3 border border-[var(--border)] w-36"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[var(--gold)]/20 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[var(--gold-dark)] fill-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Satisfaction guarantee</div>
                  <div className="text-xs font-bold text-[var(--ink)]">30 days</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Copy side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              Why choose Maundy Clean
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why Maundy Clean is the Authority in Blind Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While generic cleaning agencies often overlook window treatments or use improper
              methods that lead to broken slats, Maundy Clean focuses on the topic of total window
              hygiene. We address the common weaknesses of national franchises by providing a
              personal, reliable, and expert Scottish service &mdash; combining custom care for every
              blind type, certified eco-friendly products, and the same trusted professional every
              visit.
            </p>

            <div className="space-y-3">
              {TRUST_CARDS.slice(0, 2).map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--border)]"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--brand)]" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-[var(--ink)] mb-1">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Third + fourth cards as a 2-column strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {TRUST_CARDS.slice(2, 4).map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col md:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 3 - Our Comprehensive Blind Restoration Checklist
// (Semantic H2: "Our Comprehensive Blind Restoration Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Before Cleaning (The Inspection)
//   2. During Cleaning (Technical Execution)
//   3. After Cleaning & Final Checks
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Eye,
    image: IMG.checklistInspect,
    imageAlt: "Maundy Clean technician inspecting and photographing Venetian blinds before cleaning in a Scottish home",
    title: "Before Cleaning &mdash; The Inspection",
    description:
      "Every blind clean starts with a proper inspection. We photograph your blinds to document their condition, identify the material (aluminium, wood, faux wood, fabric, paper), and flag any pre-existing damage, broken cords, or permanent stains. We then prepare the room &mdash; covering nearby furniture and flooring to protect your sanctuary while we work.",
    points: [
      {
        icon: Eye,
        title: "Detailed Assessment",
        text: "We inspect and photograph your blinds to check their current condition. Every blind is logged by type, material, width, and any specific issues &mdash; grease in the kitchen, pet hair in the living room, smoke damage, water marks. The photo record protects you and us: if a slat was already cracked or a cord was already frayed, the inspection notes it before any cleaning starts.",
      },
      {
        icon: Shield,
        title: "Preparation & Protection",
        text: "We cover nearby furniture and flooring to protect your sanctuary while we work. Dust sheets on carpets and rugs, protective film on delicate surfaces, and a clean work zone set up beneath each blind. The only thing we leave behind is a brighter room &mdash; no collateral mess, no water marks on the sill, no chemical overspray on your soft furnishings.",
      },
    ],
  },
  {
    icon: SprayCan,
    image: IMG.checklistExecute,
    imageAlt: "Maundy Clean technician deep cleaning Venetian blind slats with material-specific solutions in a Scottish tenement",
    title: "During Cleaning &mdash; Technical Execution",
    description:
      "The technical core of every visit. We apply the right cleaning method for the right material: ultrasonic immersion for aluminium and faux-wood Venetian, low-moisture hand-clean for fabric Roman and roller, wood-safe products for real timber, delicate hand-clean only for pleated and honeycomb. Every slat, every cord, every mechanism gets the appropriate level of care.",
    points: [
      {
        icon: Layers,
        title: "Material-Specific Solutions",
        text: "Applying suitable cleaning agents tailored for wood, metal, or fabric. Aluminium Venetian goes in the ultrasonic tank with a mild detergent. Real wood Venetian gets a wood-safe cleaner applied slat-by-slat with a microfibre cloth &mdash; never water (warps the wood). Fabric Roman and roller get low-moisture cleaning with a specialist fabric cleaner. Pleated and honeycomb get a delicate hand-clean with a soft brush and barely-damp microfibre.",
      },
      {
        icon: Brush,
        title: "Intensive Detailing",
        text: "A meticulous slat-by-slat scrub or jet wash to remove deep-seated grime and bacteria. For Venetian blinds, ultrasonic waves lift dirt from every crevice &mdash; the cords, the ladders, the headrail, the operating mechanism. For fabric blinds, we work fold-by-fold and vane-by-vane. The result is a deep clean that hand-wiping alone cannot achieve &mdash; the difference is genuinely visible.",
      },
      {
        icon: Droplets,
        title: "Thorough Rinse",
        text: "Ensuring no chemical residue is left behind, leaving a fresh scent. Ultrasonic blinds get a clean water rinse cycle; fabric blinds get a final blot with a damp microfibre to lift any remaining cleaning agent. We never leave chemical residue on a blind that&rsquo;s about to be rehung in a family kitchen or a child&rsquo;s bedroom. The blinds smell neutral, not perfumed.",
      },
    ],
  },
  {
    icon: CheckCircle2,
    image: IMG.checklistFinal,
    imageAlt: "Maundy Clean technician performing final inspection on freshly cleaned Roman blinds in a Scottish home",
    title: "After Cleaning &amp; Final Checks",
    description:
      "The finish work that takes a job from &lsquo;cleaned&rsquo; to &lsquo;restored&rsquo;. We inspect every slat for missed spots, check that no surface damage occurred during the clean, test the operating mechanisms, and clear all waste and protective gear. Your room is left exactly as we found it &mdash; only brighter.",
    points: [
      {
        icon: Eye,
        title: "Surface Restoration",
        text: "Inspecting every slat for missed spots and ensuring no surface damage occurred. We walk each blind with you at handover &mdash; pointing out what we&rsquo;ve done, flagging any pre-existing damage we noted during the inspection, and being honest about any permanent stains we couldn&rsquo;t fully remove. The WOW factor only happens when the edges match the centre.",
      },
      {
        icon: Wrench,
        title: "Clearance & Handover",
        text: "We clear all waste and remove protective gear, leaving your room exactly as we found it &mdash; only brighter. Operating mechanisms (cords, wands, ladders) tested before rehanging. Broken or frayed cords flagged for repair. We provide a written care guide so you know how to maintain the blinds between professional cleans, and we&rsquo;ll send a re-clean reminder at 12 months.",
      },
    ],
  },
];

export function BlindShadeSeoChecklist() {
  return (
    <section id="checklist" className="py-16 lg:py-24 bg-background scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond the basic duster
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Comprehensive Blind Restoration Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Following our agency-approved checklist, we ensure that every &ldquo;risky&rdquo; area
            is treated with professional care to provide a &ldquo;speechlessly spotless&rdquo;
            finish. Below is the scope we deliver as standard on every visit &mdash; from the
            inspection and preparation phase, through the technical execution with material-specific
            chemistry, to the final checks and room clearance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {CHECKLIST_ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[var(--border)] shadow-sm flex flex-col"
              >
                <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight" dangerouslySetInnerHTML={{ __html: item.title }} />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-3 mt-auto">
                    {item.points.map((point) => {
                      const PointIcon = point.icon;
                      return (
                        <li
                          key={point.title}
                          className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85"
                        >
                          <PointIcon className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                          <span>
                            <strong className="font-semibold text-[var(--ink)]">{point.title}</strong>
                            &mdash; {point.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Specialized services strip - from the brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-12 bg-[var(--cream)] rounded-3xl p-7 lg:p-9 border border-[var(--brand)]/15"
        >
          <div className="grid lg:grid-cols-[1fr_2fr] gap-6 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-2 inline-block">
                Specialized services
              </span>
              <h3 className="font-display font-extrabold text-2xl text-[var(--ink)] tracking-tight">
                For Every Blind Type
              </h3>
              <p className="text-sm text-[var(--muted-foreground)] mt-2 leading-relaxed">
                We provide a comprehensive cleaning and repair service for both domestic and
                commercial customers throughout Scotland.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: Layers, label: "Fabric & Roman Shades", text: "Deep dusting and sanitization to remove allergens." },
                { icon: Building2, label: "Venetian & Vertical Blinds", text: "Intensive cleaning of slats and re-stringing if required." },
                { icon: Gem, label: "Wooden Blinds", text: "Specialized care to nourish timber without warping." },
                { icon: Truck, label: "Same-Day Service", text: "Available for certain blind types to minimize disruption." },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--border)]">
                    <div className="w-9 h-9 rounded-lg bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[var(--brand)]" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-sm text-[var(--ink)] mb-0.5">{item.label}</div>
                      <div className="text-xs text-[var(--muted-foreground)] leading-relaxed">{item.text}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 - 3-Step "Hassle-Free" Booking Process
// (Semantic H3: "The MaundyClean 3-Step 'Hassle-Free' Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant Quote",
    description:
      "Use our 30-second online calculator to receive a fixed-price quote starting from just &pound;15 per blind. Tell us how many blinds, what type (Venetian, roller, vertical, Roman, pleated, honeycomb, plantation shutters), what material, and any specific issues. The price you see is the price you pay &mdash; locked in for 12 months, with no on-the-day upsells and no hidden extras for collection or delivery.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Professional Collection & Delivery",
    description:
      "We offer FREE collection and delivery, or our technicians can perform the clean on-site depending on your preference. On-site cleaning takes 60-90 minutes per blind with no blinds down overnight; workshop cleaning takes the blind for 24 hours for a more thorough process using larger equipment and longer cleaning cycles. We&rsquo;ll recommend the right option for your blinds and your timeline.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "A Fresh View",
    description:
      "Enjoy blinds that look like new and a home that feels significantly healthier, backed by our 100% satisfaction guarantee. We rehang each blind, test the operating mechanisms, and walk the property with you at completion. Re-clean reminder at 12 months at the locked-in rate. From &pound;15 per blind on-site, &pound;10 per blind for whole-house (min 6 blinds).",
  },
];

export function BlindShadeSeoBooking() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Hassle-free booking
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            The 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be straightforward and helpful, beating the
            slow response times common in the Scottish market. From quote to clean in under 48 hours
            &mdash; no friction, no waiting, no surprises.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-[var(--brand)]/10 via-[var(--brand)]/30 to-[var(--brand)]/10" />

          {BOOKING_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative bg-white rounded-2xl p-7 border border-[var(--border)] shadow-sm text-center"
              >
                <div className="relative inline-flex items-center justify-center w-20 h-20 mb-5">
                  <div className="absolute inset-0 rounded-full bg-[var(--brand-light)]" />
                  <div className="absolute inset-2 rounded-full bg-white border border-[var(--brand)]/20" />
                  <Icon className="relative w-8 h-8 text-[var(--brand)]" />
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[var(--brand)] text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }} />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 px-7 h-12 text-base"
            asChild
          >
            <Link href="/quote">
              Get My 30-Second Instant Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - A Solution for Every Cycle
// (Semantic H2: "A Solution for Every Cycle")
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: CalendarCheck,
    title: "Maintaining the Standard &middot; Recurring Home Cleaning",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt: "Scottish home receiving recurring interior cleaning alongside annual blind and shade restoration",
    description:
      "After your blinds are restored, keep them pristine with a Recurring Home Cleaning plan &mdash; weekly or fortnightly. Light dusting of blinds is included as standard in every recurring clean, preventing dust build-up between specialist deep cleans. The single biggest factor in how long a blind restoration lasts is the regular dusting routine that follows it.",
    cta: "Explore recurring cleaning",
  },
  {
    icon: Home,
    title: "The Move-In Reset &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Scottish home receiving an intensive deep clean alongside blind and shade restoration for sale prep",
    description:
      "Preparing a home for sale? Clean blinds create the &ldquo;WOW factor&rdquo; that attracts buyers and lifts offers. Combine your blind restoration with our Deep House Cleaning for the ultimate property refresh &mdash; clean blinds, sparkling glass, fresh scent, and a viewing-ready property from the moment the agent opens the door.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty Scottish flat being deep cleaned with blind and shade care included for tenancy handover",
    description:
      "Our End of Tenancy Cleaning includes window and blind care to ensure you PASS your inspection and get your full deposit back. We work to the letting agent&rsquo;s inventory, restore the blinds to their original appearance, and come back free of charge if anything is flagged on the inspection. Deposit-back guarantee as standard.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from Venetian blinds in a Scottish home",
    description:
      "If you have recently had construction work, our After Builders Clean is essential to remove abrasive builders&rsquo; dust from your window treatments. Fine construction dust settles on every slat and into every pleat &mdash; left untreated, it acts as an abrasive every time you open or close the blind, wearing the finish prematurely.",
    cta: "Explore after builders cleaning",
  },
];

export function BlindShadeSeoInterlinking() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--cream)]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond the reset &middot; property cycles
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            A Solution for Every Cycle
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our blind cleaning is a critical part of your property&rsquo;s wider hygiene and
            maintenance schedule. From maintaining the standard after a restoration, through to the
            sale-prep reset, to the end-of-tenancy handover and the post-builders dust clear-out
            &mdash; the same trusted crew can step up whenever life changes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INTERLINK_SOLUTIONS.map((sol, i) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={sol.href}
                  className="group block bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/40 hover:-translate-y-1 transition-all h-full"
                >
                  <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
                    <img
                      src={sol.image}
                      alt={sol.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/80 via-[var(--brand-dark)]/20 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                      <Icon className="w-6 h-6 text-[var(--brand)]" />
                    </div>
                    <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-base text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                      {sol.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] group-hover:text-[var(--brand-dark)]">
                      {sol.cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 6 - "Near Me" Location Internal Links
// (Semantic H2: "Blind & Shade Cleaning Services Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function BlindShadeSeoNearMe() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-14 items-start">
          {/* Left: copy + map image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
              Local blind &amp; shade restoration across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Blind &amp; Shade Cleaning Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;blind cleaning near me&rdquo; or &ldquo;Venetian blind
              restoration near me&rdquo; in Scotland? Maundy Clean covers 72+ towns and cities
              across the Central Belt, Highlands, Borders, and Islands. Same material-trained
              standard, same ultrasonic technology, same dedicated technician &mdash; wherever your
              property happens to be. Find your local blind and shade cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean blind and shade cleaning service coverage areas"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    72+ Scottish towns covered
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Same material-trained technicians, same 100% satisfaction guarantee &mdash; from
                  Glasgow to Lerwick.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: location grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-6 lg:p-8 border border-[var(--border)] shadow-sm"
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-bold text-lg text-[var(--ink)]">
                Find your local blind crew
              </h3>
              <span className="text-xs text-[var(--muted-foreground)]">36 of 72 locations</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5">
              {NEAR_ME_LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.slug}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(i * 0.015, 0.6) }}
                >
                  <Link
                    href={`/services/blind-shade-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> blinds</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don&rsquo;t see your town? We add new postcodes every month.</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Link
                  href="/services/blind-shade-cleaning-near-me"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/locations"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
                >
                  View all 72 Scottish locations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SEO long-form paragraph for "near me" search intent */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Our local blind and shade cleaning crews operate across Glasgow&rsquo;s West End,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s granite-built suburbs, Dundee&rsquo;s city
            centre, and the Highlands &mdash; from Inverness to Thurso, Fort William to Lerwick.
            Whether you&rsquo;re searching for Venetian blind ultrasonic cleaning in Glasgow, Roman
            blind hand-cleaning in Edinburgh, plantation shutter restoration in Aberdeen, or
            commercial blind contracts anywhere in between, Maundy Clean assigns a vetted,
            PAYE-employed technician that stays with you for the long run. Same crew, same standard,
            same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Blind & Shade Cleaning?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function BlindShadeSeoFinalCta() {
  return (
    <section className="py-16 lg:py-20 bg-[var(--brand-dark)] relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[var(--gold)]/15 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[var(--brand)]/30 blur-3xl" />

      <div className="relative max-w-[1100px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--gold)] mb-3 inline-block">
            Ready to book your blind &amp; shade cleaning?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Blind &amp; Shade Cleaning?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price blind and shade cleaning quote in 30 seconds. No pushy sales call, no
            waiting 24 hours for a callback. Material-trained technicians, ultrasonic and hand-clean
            methods, free collection and delivery, child &amp; pet-safe products, and a 100%
            satisfaction guarantee &mdash; from &pound;15 per blind on-site, &pound;10 per blind for
            whole-house (min 6 blinds).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-white/30 text-white hover:bg-white/10 bg-white/5 backdrop-blur"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 - SEO FAQ block
// (Semantic H2: "Frequently Asked Questions")
// 6 Q&As - 3 from the user brief (repairs, take down yourself, insured)
// + 3 blind-specific additions (ultrasonic safety, real wood, frequency)
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you repair blinds as well as clean them?",
    a: "Yes. We offer a full repair service, including re-stringing and resizing old blinds for new windows, providing a great value alternative to replacement. Re-stringing is the most common repair &mdash; cords fray and snap over time, especially on Venetian and vertical blinds in high-traffic rooms. We carry a range of cord gauges and colours, and most re-strings can be done on-site in under an hour per blind. We also replace broken tilt wands, missing slats (where matching stock is available), and damaged vane clips on vertical blinds.",
  },
  {
    q: "Do I need to take the blinds down myself?",
    a: "No. We offer a professional service to take them down and rehang them for a small additional fee, handling the &ldquo;dirty work&rdquo; so you don&rsquo;t have to. Our technicians carry the right tools for every headrail type &mdash; twist-fit brackets, screw-fixed brackets, ceiling-fixed brackets, and the more obscure vintage brackets found in older Edinburgh tenements and Glasgow sandstone terraces. For on-site cleans, the blind comes down and goes back up the same visit; for workshop cleans, the blind goes down on day one and goes back up on day two.",
  },
  {
    q: "Are your cleaners insured?",
    a: "Absolutely. Maundy Clean is a fully insured professional cleaning company with years of experience serving Glasgow, Edinburgh, Aberdeen, Dundee, and across Scotland. We hold &pound;5m public liability cover, every technician is Disclosure Scotland PVG-checked, and all staff are PAYE-employed &mdash; we never use subcontractors or gig-economy labour. The same standard applies whether you&rsquo;re a one-off client or a recurring customer: vetted, uniformed, and accountable to the Maundy Clean name.",
  },
  {
    q: "Will ultrasonic cleaning damage my blinds?",
    a: "No &mdash; ultrasonic cleaning is gentle and safe for the right materials. The process uses high-frequency sound waves (typically 35-45 kHz) to create microscopic bubbles in water, which gently lift dirt from surfaces &mdash; there is no scrubbing, no abrasion, no high pressure. It is safe for aluminium Venetian, faux-wood Venetian, fabric vertical blind vanes, and most headrails and mechanisms. It is NOT safe for real wood blinds (water warps wood), paper pleated blinds (water damages paper), fabric Roman blinds (water marks and shrinkage), or any blind with electrical components &mdash; motorised blinds are hand-cleaned only. We assess your blinds and recommend the right approach before any cleaning starts.",
  },
  {
    q: "Can you clean real wood Venetian blinds and plantation shutters?",
    a: "Yes &mdash; with a different approach. Real wood blinds and shutters cannot be immersed in water (the wood warps and the finish is damaged). We hand-clean them with wood-safe products &mdash; a wood cleaner applied with a microfibre cloth, wiping each slat or louvre individually. We never use water, never ammonia-based cleaners (strips the finish), never abrasive scourers. The result is excellent &mdash; wood blinds come up beautifully &mdash; but it takes longer than ultrasonic and is priced per slat or per louvre. For plantation shutters we offer an optional beeswax polish finish (we never use silicone sprays which build up over time).",
  },
  {
    q: "How often should I have my blinds professionally cleaned?",
    a: "For most homes, annual professional cleaning is sufficient &mdash; book alongside your other annual home maintenance (carpet clean, sofa clean, oven clean). Households with pets, allergies, or kitchens with extraction issues may benefit from 6-monthly cleaning. Commercial premises (offices, hotels, restaurants) typically need quarterly cleaning &mdash; blinds in public areas collect grease and dust faster. Between professional cleans, we recommend light dusting weekly (with a microfibre duster or vacuum with soft brush attachment) to prevent dust build-up. We&rsquo;ll send a friendly reminder at 12 months so the annual clean doesn&rsquo;t slip.",
  },
];

export function BlindShadeSeoFaq() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Blind &amp; shade cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our blind and shade cleaning clients ask most often.
            Can&rsquo;t find what you need? Call us on{" "}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
            >
              {contactInfo.phone}
            </a>{" "}
            and we&rsquo;ll talk it through.
          </p>
        </motion.div>

        <div className="space-y-4">
          {SEO_FAQS.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between gap-4 p-5 lg:p-6 cursor-pointer list-none">
                  <h3 className="font-display font-bold text-base lg:text-lg text-[var(--ink)] leading-tight">
                    {faq.q}
                  </h3>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[var(--brand-light)] flex items-center justify-center transition-transform group-open:rotate-45">
                    <span className="relative w-3.5 h-3.5">
                      <span className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--brand)] -translate-y-1/2" />
                      <span className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[var(--brand)] -translate-x-1/2" />
                    </span>
                  </span>
                </summary>
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1">
                  <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My 30-Second Instant Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 h-12 text-base border-[var(--brand)]/30 text-[var(--brand)] hover:bg-[var(--brand-light)]/40"
              asChild
            >
              <Link href="#checklist">
                <CheckCircle2 className="w-4 h-4" />
                View Our Regular Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Droplets,
  Wind,
  SprayCan,
  Crown,
  Users,
  Home,
  KeyRound,
  Hammer,
  Zap,
  UserCheck,
  CalendarCheck,
  Award,
  Gem,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%207.23.59%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%207.23.59%20PM.jpeg",
  checklistExtraction:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistStain:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistUpholstery:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  checklistProtect:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseSpring:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
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
// Semantic H1: "Professional Carpet & Rug Deep Cleaning Scotland"
// ============================================================

export function CarpetRugSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean technician restoring a freshly cleaned wool carpet in a Scottish living room"
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
            Carpet &amp; Rug Deep Cleaning Scotland · Glasgow · Edinburgh · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Carpet &amp; Rug Deep Cleaning Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Rejuvenating your home&rsquo;s fabrics with meticulous care and technical excellence. From
            hot-water extraction on synthetics to full-immersion rug bathing for Persian and antique
            pieces, we restore the vibrant, pristine appearance of your home&rsquo;s most important
            textiles &mdash; with the same NCCA-certified technician every visit from £18/room.
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
              <Link href="/locations">
                <MapPin className="w-4 h-4" />
                View Our Service Areas in Scotland
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
              <span className="text-white/70">· 6,200+ reviews</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[var(--gold)]" /> NCCA &amp; WoolSafe Certified
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> Child &amp; Pet-Safe Products
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> 100% Re-Clean Guarantee
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

export function CarpetRugSeoIntro() {
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
            Specialist carpet &amp; rug cleaning · Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Fabric Care
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            A truly clean home starts from the floor up. While our{" "}
            <strong className="font-semibold text-[var(--ink)]">recurring home cleaning</strong> keeps
            your living spaces tidy day to day, your carpets and rugs act as a filter for city-centre
            dust, pollen, skin cells, and microplastics tracked in on footwear. At Maundy Clean, we
            provide a premium{" "}
            <strong className="font-semibold text-[var(--ink)]">carpet deep cleaning service</strong>{" "}
            that goes beyond the surface to restore the vibrant, pristine appearance of your
            home&rsquo;s most important fabrics &mdash; built on the{" "}
            <strong className="font-semibold text-[var(--ink)]">Maundy tradition of care and
            service</strong> across Glasgow, Edinburgh, and the Central Belt.
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
            { label: "Touch-dry time", value: "3-5 hrs" },
            { label: "Extraction pressure", value: "200 PSI" },
            { label: "Spotters on every van", value: "14 types" },
            { label: "Rug workshop turnaround", value: "5-7 days" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--cream)] rounded-xl p-4 border border-[var(--brand)]/10 text-center"
            >
              <div className="font-display font-extrabold text-2xl text-gradient-brand">{stat.value}</div>
              <div className="text-xs text-[var(--muted-foreground)] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why Maundy Clean is the Authority in Rug Restoration
// (Semantic H2: "Why Maundy Clean is the Authority in Rug Restoration")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: Gem,
    title: "Specialist Fabric Knowledge",
    description:
      "Our teams are trained on every variety of textile, from modern synthetic twist pile and berber to delicate hand-knotted Persian, Oriental, and silk-blend rugs. We identify the fibre before any chemistry touches it, so the right cleaning solution is matched to every weave &mdash; whether you have a contemporary rug or a 19th-century Tabriz.",
  },
  {
    icon: Users,
    title: "The Same Trusted Professionals",
    description:
      "Unlike gig-economy cleaning apps, we only employ our own staff. The same vetted, uniformed, and background-checked technicians who manage your regular house cleaning are the ones performing your intensive fabric care. Continuity matters when the stakes are a Persian heirloom or a wool staircase runner.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Safe for Your Sanctuary",
    description:
      "Your health is our priority. We use only certified child-safe and pet-safe products with EU Ecolabel or WoolSafe approval. Our cleaning methods remove germs, dust mites, and unwanted odours without leaving behind harsh chemical residues that re-soil the pile and trigger respiratory sensitivity.",
  },
  {
    icon: Shield,
    title: "Fully Insured & Guaranteed",
    description:
      "We stand by the quality of our work. Every technician is Disclosure Scotland PVG-checked, we hold £5m public liability cover, and we offer a free re-clean within 24 to 48 hours if you are not 100% satisfied &mdash; part of the Maundy Clean standard of excellence on every visit.",
  },
];

export function CarpetRugSeoWhy() {
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
                alt="Maundy Clean technician preparing fibre-matched chemistry for carpet cleaning"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    NCCA &amp; WoolSafe Certified on Every Fibre
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, PVG-checked, uniformed, and trained on wool, silk, jute, sisal, and
                  synthetic &mdash; we never apply the wrong chemistry.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Re-clean rate</div>
                  <div className="text-xs font-bold text-[var(--ink)]">1.2% only</div>
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
              Why Maundy Clean is the Authority in Rug Restoration
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While many local companies focus only on standard synthetic carpets, Maundy Clean
              understands the technical requirements of high-value textiles. We treat every item
              individually, ensuring the perfect cleaning solution for every fibre type &mdash; from
              a modern synthetic twist pile to a hand-knotted Tabriz.
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
// Section 3 - The Maundy Clean Technical Checklist for Deep Clean
// (Semantic H2: "The Maundy Clean Technical Checklist")
// Image-per-card layout - 4 checklist categories
// ============================================================

const CHECKLIST_DETAIL = [
  {
    icon: SprayCan,
    title: "Advanced Stain Removal & Pre-Treatment",
    image: IMG.checklistStain,
    imageAlt: "Eco-labelled spotters and fibre-specific chemistry laid out for carpet stain removal",
    description:
      "We target the risky areas first. Our specialists use advanced techniques and state-of-the-art equipment to tackle deep-seated stains and high-traffic grime before extraction begins. We carry 14 different spotters &mdash; wine, coffee, ink, makeup, pet accidents, dye transfer &mdash; each with chemistry specific to the stain class rather than a single &lsquo;universal&rsquo; solution that rarely works.",
    points: [
      "Fibre ID test before any chemistry is applied",
      "14 stain-specific spotters carried on every van",
      "Pre-spray agitated into the pile with a rotary machine",
      "High-traffic zones treated separately",
      "Permanent stains flagged up-front, never billed hopefully",
    ],
  },
  {
    icon: Droplets,
    title: "Intensive Extraction Cleaning",
    image: IMG.checklistExtraction,
    imageAlt: "Hot-water extraction in progress on a Scottish living room wool carpet",
    description:
      "Using professional-grade equipment, we perform a thorough top-to-bottom extraction. Heated eco-labelled solution is injected at 200 PSI and immediately extracted in 2-metre overlapping passes. This not only makes colours brighter but removes deep-seated allergens and bacteria that regular vacuuming cannot reach &mdash; the genuine reset your pile needs once a year.",
    points: [
      "Heated solution injected at 200 PSI",
      "2-metre overlapping passes for even coverage",
      "Allergens, dust mites & bacteria extracted at the fibre",
      "Acid rinse neutraliser prevents re-soiling",
      "Touch-dry in 3-5 hours, faster with air-movers",
    ],
  },
  {
    icon: Wind,
    title: "Upholstery & Sofa Deep Cleaning",
    image: IMG.checklistUpholstery,
    imageAlt: "Maundy Clean technician deep cleaning a sofa with fibre-matched chemistry",
    description:
      "Extend the life of your furniture. Our upholstery service uses the same meticulous fibre-matched standards to refresh suites, leather chairs, dining chairs, and other fabric furnishings, leaving them smelling fresh for months. The same technician, the same chemistry discipline, the same guarantee &mdash; booked as a standalone service or alongside your carpet clean.",
    points: [
      "Fibre-matched chemistry for every fabric type",
      "Suites, armchairs, dining chairs & leather",
      "Pet-accident enzyme digester for odour removal",
      "Optional Scotchgard-equivalent protectant",
      "Bookable alongside carpet cleaning or standalone",
    ],
  },
  {
    icon: Shield,
    title: "Protective Finishes & Aftercare",
    image: IMG.checklistProtect,
    imageAlt: "Bright Scottish living room with freshly protected carpet after a deep clean",
    description:
      "Upon request, we apply a specialised fluorochemical protectant to prevent future spills from becoming permanent stains, ensuring your investment stays pristine between recurring cleaning visits. Every client receives a written aftercare card with drying guidance, a 12-month re-clean reminder at the locked-in rate, and spill-response instructions for the first 48 hours.",
    points: [
      "Fluorochemical protectant re-application (optional)",
      "6-12 months of spill resistance added to the pile",
      "Written aftercare card with drying guidance",
      "12-month re-clean reminder at locked-in rate",
      "Spill-response instructions for the first 48 hours",
    ],
  },
];

export function CarpetRugSeoChecklist() {
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
            Technical checklist · the detail
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            The Maundy Clean Technical Checklist for Deep Clean
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our carpet deep cleaning follows a rigorous, agency-approved checklist designed to bring
            old or dirty fabrics back to life. Every stage is documented in your post-clean care
            card, so you know exactly what was treated and what to expect over the next 12 months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHECKLIST_DETAIL.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:shadow-brand hover:border-[var(--brand)]/30 transition-all flex flex-col"
              >
                {/* Image header */}
                <div className="relative aspect-[16/9] bg-[var(--brand-dark)] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-[var(--brand)]" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-display font-bold text-lg text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-auto">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-[var(--ink)]/85"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Inline interlink to upholstery service */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/services/upholstery-cleaning"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)]"
          >
            Explore our Sofa &amp; Upholstery Deep Cleaning service
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 4 - 3-Step "Hassle-Free" Booking Process
// (Semantic H3: "The 3-Step 'Hassle-Free' Booking Process")
// ============================================================

const BOOKING_STEPS = [
  {
    icon: Zap,
    step: "01",
    title: "Instant Online Quote",
    description:
      "Use our 30-second quote tool to calculate the cost of your rug or carpet cleaning based on room size and material. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in, fully transparent, with no on-the-day upsells for spotters or air-movers.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Service",
    description:
      "We arrive at a time that fits your schedule, fully equipped with professional-grade materials and chemistry &mdash; already included in your fair, transparent price. The technician confirms fibre type, flags any permanent stains, and walks you through the cleaning plan before any chemistry touches the pile.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "A Healthier Home",
    description:
      "Walk onto floors that look, feel, and smell fresh, backed by our 100% satisfaction guarantee. Most carpets are touch-dry in 3 to 5 hours; we loan air-movers free for 24 hours on whole-home cleans to cut that to 90 minutes. You receive a written care card and a 12-month re-clean reminder at the locked-in rate.",
  },
];

export function CarpetRugSeoBooking() {
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
            The 3-Step &ldquo;Hassle-Free&rdquo; Booking Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized the booking experience to be uncomplicated and straightforward,
            addressing the slow response times common in the Scottish market. From quote to clean
            in under 48 hours for most postcodes in the Central Belt &mdash; no friction, no waiting.
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
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {step.description}
                </p>
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
// Section 5 - A Solution for Every Cycle (interlinking)
// (Semantic H3: "A Solution for Every Cycle")
// Image-topped cards with internal links
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: CalendarCheck,
    title: "Maintaining the Standard · Recurring Home Cleaning",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt: "Recurring home cleaning at a Scottish family home with freshly vacuumed carpets",
    description:
      "After your fabrics are restored, keep them pristine with a recurring home cleaning schedule &mdash; weekly or fortnightly. Edge-to-edge vacuuming and immediate spill response are the single biggest factors in how long a deep clean lasts. 15% member discount for existing carpet cleaning clients.",
    cta: "Explore recurring home cleaning",
  },
  {
    icon: KeyRound,
    title: "The Move-In Reset · End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty Scottish flat being deep cleaned for a new tenant move-in with carpet extraction",
    description:
      "Preparing for a new tenant or moving out? Our End of Tenancy Cleaning includes a Deposit-Back Guarantee and professional carpet extraction as standard. We work to the letting agent&rsquo;s inventory and come back free of charge if anything is flagged at the check-out inspection.",
    cta: "Book end of tenancy cleaning",
  },
  {
    icon: Home,
    title: "Property Transitions · Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Deep house cleaning team refreshing a Scottish property before going on the market",
    description:
      "If you are putting a house up for sale, a Deep House Cleaning combined with rug rejuvenation creates the WOW factor that attracts buyers and lifts offers. Stale odours and tired carpets are the single biggest turn-off at viewings &mdash; we address both in a single coordinated visit.",
    cta: "Book a deep house cleaning",
  },
  {
    icon: Sparkles,
    title: "Seasonal Refreshes · One-Off Spring Clean",
    href: "/services/spring-cleaning",
    image: IMG.leaseSpring,
    imageAlt: "Bright Scottish living room refreshed with a comprehensive spring clean",
    description:
      "Book a One-Off Spring Clean for a comprehensive top-to-bottom refresh of your entire home &mdash; skirtings, light fittings, behind appliances, and the carpet extraction that pulls a winter&rsquo;s worth of grit from the pile. Perfect as a seasonal reset on top of your regular cleaning routine.",
    cta: "Book a one-off spring clean",
  },
];

export function CarpetRugSeoInterlinking() {
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
            Beyond the reset · property cycles
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            A Solution for Every Cycle
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our carpet deep cleaning is the perfect reset to combine with our other specialist
            services. Restore the pile today, then keep it pristine with the right ongoing routine
            for your household, your tenancy cycle, or your sale timeline &mdash; the same trusted
            crew can step up whenever life changes.
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
                    <h4 className="absolute bottom-4 left-4 right-4 font-display font-bold text-base text-white leading-tight group-hover:text-[var(--gold)] transition-colors">
                      {sol.title}
                    </h4>
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
// (Semantic H2: "Carpet & Rug Cleaning Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function CarpetRugSeoNearMe() {
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
              Local carpet &amp; rug cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Carpet &amp; Rug Cleaning Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;carpet cleaning near me&rdquo; or &ldquo;rug cleaning near me&rdquo;
              in Scotland? Maundy Clean covers 72+ towns and cities across the Central Belt,
              Highlands, Borders, and Islands. Same NCCA-certified standard, same 100% re-clean
              guarantee, same dedicated technician &mdash; wherever your home happens to be. Find
              your local carpet &amp; rug cleaning crew below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean carpet and rug cleaning coverage areas"
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
                  Same NCCA-certified technicians, same 100% re-clean guarantee &mdash; from Glasgow
                  to Lerwick.
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
                Find your local carpet cleaner
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
                    href={`/services/carpet-rug-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> carpet</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                <Clock className="w-4 h-4 text-[var(--brand)]" />
                <span>Don&apos;t see your town? We add new postcodes every month.</span>
              </div>
              <Link
                href="/services/carpet-rug-cleaning-near-me"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
              >
                View the full near-me page
                <ArrowRight className="w-4 h-4" />
              </Link>
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
            Our local carpet &amp; rug cleaning crews operate across Glasgow&rsquo;s West End,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s suburbs, Dundee&rsquo;s city centre, and the
            Highlands &mdash; from Inverness to Thurso, Fort William to Lerwick. Whether you&rsquo;re
            searching for hot-water extraction in Glasgow, Persian rug bathing in Edinburgh, wool
            carpet cleaning in Aberdeen, or pet-stain removal anywhere in between, Maundy Clean
            assigns an NCCA-certified, PAYE-employed technician that stays with you for the long run.
            Same technician, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Carpet & Rug Cleaning?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function CarpetRugSeoFinalCta() {
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
            Ready to book your carpet &amp; rug cleaning?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Carpet &amp; Rug Cleaning?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price quote in 30 seconds. No pushy sales call, no waiting 24 hours for a
            callback. NCCA &amp; WoolSafe certified technicians, child &amp; pet-safe products, a
            100% re-clean guarantee, and a written aftercare card with every visit &mdash; from
            £18/room.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Get My Instant Quote Now
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
                View Our Technical Checklist
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
// 6 Q&As - 3 from the user brief + 3 carpet-specific additions
// ============================================================

const SEO_FAQS = [
  {
    q: "Do you clean rugs on or off-site?",
    a: "For your convenience, we can perform cleaning both on and off-site, depending on the material and the intensity of the stain removal required. Synthetic and modern wool rugs are typically cleaned in place with hot-water extraction. Hand-knotted Persian, Oriental, silk, and antique rugs are transported to our Glasgow workshop for full-immersion bathing &mdash; the only safe method for pieces that may bleed, shrink, or fringe-tangle. We collect and deliver within 25 miles at no charge.",
  },
  {
    q: "Are your cleaners insured?",
    a: "Yes. Maundy Clean is a fully insured professional cleaning company with years of experience serving Glasgow, Edinburgh, and across Scotland. Every technician carries Disclosure Scotland PVG membership, we hold £5 million public liability cover, and we carry WoolSafe and NCCA accreditation, which means our fibre-care training is current and audited. We are a registered Scottish company &mdash; not a gig-economy agency.",
  },
  {
    q: "How long does it take for carpets to dry?",
    a: "Using our state-of-the-art equipment, most carpets and rugs are touch-dry within 3 to 5 hours, allowing you to return to your normal routine quickly. We loan air-movers free of charge for 24 hours on whole-home cleans, which cuts drying to around 90 minutes. For commercial properties that cannot close, we offer low-moisture encapsulation cleaning that is walk-on-dry in 45 minutes.",
  },
  {
    q: "Is hot-water extraction safe for wool carpets?",
    a: "Yes, when it is performed by a WoolSafe-certified technician. Wool is sensitive to high pH (above 9) and excessive heat (above 60 degrees Celsius), so we use a wool-specific pre-spray at pH 7.5 to 8.0 and keep solution temperature at 50 degrees Celsius. We never use high-pH detergents on wool &mdash; they strip the natural lanolin and cause irreversible fibre damage. Our NCCA accreditation covers every fibre type from axminster to sisal.",
  },
  {
    q: "How often should I have my carpets professionally cleaned?",
    a: "Every 12 months for high-traffic areas such as hallways, stairs, and living rooms, and every 18 to 24 months for bedrooms. Households with pets, allergies, or young children benefit from 6-monthly cleaning of high-traffic zones. We send a no-pressure reminder at the 11-month mark with a locked-in rate, so you never lose track of the cycle. Most recurring home cleaning clients book a carpet reset once a year alongside their fortnightly visits.",
  },
  {
    q: "Can you remove red wine, coffee, and pet stains?",
    a: "Most biological and tannin stains &mdash; wine, coffee, food, pet accidents &mdash; respond well to specialised spotters, typically 80 to 95% removal. Bleach spots, dye transfer, and burns are permanent and we will flag these in the pre-inspection so you do not pay for a clean that cannot fix them. Pet accidents are treated with a live-enzyme digester that breaks down uric acid crystals at the molecular level, so the smell does not return on humid days.",
  },
];

export function CarpetRugSeoFaq() {
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
            Carpet &amp; rug cleaning · FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our carpet &amp; rug cleaning clients ask most often.
            Can&apos;t find what you need? Call us on{" "}
            <a
              href={contactInfo.phoneHref}
              className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4"
            >
              {contactInfo.phone}
            </a>{" "}
            and we&apos;ll talk it through.
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
                Get My Instant Quote Now
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
                View Our Technical Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

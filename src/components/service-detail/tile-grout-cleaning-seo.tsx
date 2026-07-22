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
  Brush,
  Layers,
  Palette,
  Wrench,
  Bath,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// ============================================================
const IMG = {
  heroWide:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%207.59.05%20PM.jpeg",
  whyCrew:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-21%20at%207.59.05%20PM.jpeg",
  checklistDeep:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistProtect:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistRestore:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  leaseDeep:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
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
// Semantic H1: "Professional Tile & Grout Cleaning Services Scotland"
// ============================================================

export function TileGroutSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean tile & grout technician restoring a Scottish bathroom floor with a high-pressure extraction tool"
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
            Tile &amp; Grout Restoration · Glasgow · Edinburgh · Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Tile &amp; Grout Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Restoring the Brilliance of Your Stone and Ceramic Surfaces with Meticulous Care. In
            the damp climate of the Scottish Central Belt, bathroom and kitchen surfaces face a
            constant battle against moisture, limescale, and environmental grime. At Maundy Clean,
            we understand that a standard surface wipe is rarely enough to maintain the long-term
            beauty of your home. Built on the{" "}
            <Link
              href="/services/recurring-home-cleaning"
              className="font-semibold text-[var(--gold)] hover:text-white underline underline-offset-4"
            >
              Maundy tradition of service and care
            </Link>
            , our tile and grout cleaning provides a technical &ldquo;reset&rdquo; for your
            property &mdash; ensuring your floors and walls remain as flawless and unified as the
            day they were installed.
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

export function TileGroutSeoIntro() {
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
            Specialist tile &amp; grout restoration &middot; Scotland
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
            The Maundy Clean Standard for Surface Restoration
          </h2>
          <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
            Built on the <strong className="font-semibold text-[var(--ink)]">Maundy tradition of
            service and care</strong>, we provide a premium alternative to impersonal national
            agencies, ensuring your tile and grout restoration is handled with the same meticulous
            attention as your weekly housekeeping. Whether you are preparing a property for the
            market with our Sale Ready Service or looking to refresh your urban sanctuary in Glasgow
            or Edinburgh, our high-end technical restoration delivers a &ldquo;speechlessly
            spotless&rdquo; finish that standard cleaners simply cannot match &mdash; combining
            specialist material knowledge, certified child-safe products, and a 100% satisfaction
            guarantee on every visit.
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
            { label: "Tile materials handled", value: "6+" },
            { label: "Extraction pressure", value: "800-1,200 PSI" },
            { label: "Sealed grout longevity", value: "3-5 yrs" },
            { label: "Star rating", value: "4.9/5" },
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
// Section 2 - Why MaundyClean is Scotland's Authority in Tile Restoration
// (Semantic H2: "Why Maundy Clean is Scotland's Authority in Tile Restoration")
// Image+copy split layout with 4 trust cards
// ============================================================

const TRUST_CARDS = [
  {
    icon: Gem,
    title: "Specialist Material Knowledge",
    description:
      "Our technicians are vocationally trained to handle a wide variety of surfaces, including Travertine, Marble, Porcelain, Ceramic, Slate, and Natural Stone. We identify the tile material before quoting &mdash; acid on marble etches the surface, high pressure on Victorian tiles cracks the bed, alkaline on slate strips the colour. Wrong chemistry on wrong material equals permanent damage, so we refuse to clean what we cannot safely treat.",
  },
  {
    icon: Users,
    title: "The Same Trusted Professionals",
    description:
      "Reliability is built on trust. The same vetted, uniformed staff who manage your recurring home cleaning are trained in our meticulous restoration processes. Your crew is allocated to your property and your time slot &mdash; they don&rsquo;t get reassigned, shared, or pulled elsewhere. Continuity is what turns an annual restoration into a relationship with someone who knows your surfaces.",
  },
  {
    icon: Palette,
    title: "Precision Grout Recolouring",
    description:
      "Our flagship restoration service deep cleans and seals existing grout lines with durable, stain-resistant, and precision-applied colourants. Available in 12 standard shades, this enhances the aesthetic of your bathroom or kitchen while providing long-lasting protection against dirt, mould, and moisture. Re-coloured grout stays clean for 3-5 years versus 3-6 months for unsealed grout &mdash; a genuine transformation, not a temporary fix.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly & Family Safe",
    description:
      "Your health is paramount. We use only certified child-safe and pet-safe products that effectively remove bacteria and odours without leaving harsh chemical residues. All pre-sprays, rinse agents, and sealers are food-safe, low-VOC, and suitable for kitchens, bathrooms, hallways, and children&rsquo;s play areas. Floor is safe for crawling babies and pets once dry &mdash; no perfume, no optical brighteners, no compromise.",
  },
];

export function TileGroutSeoWhy() {
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
                alt="Maundy Clean tile & grout technician &mdash; uniformed, vetted, and material-trained"
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Grout recolour lasts</div>
                  <div className="text-xs font-bold text-[var(--ink)]">3-5 yrs</div>
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
              Why Maundy Clean is Scotland&rsquo;s Authority in Tile Restoration
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              While most companies offer generic domestic help, Maundy Clean focuses on the topic of
              total surface hygiene. We move beyond the &ldquo;surface clean&rdquo; to address the
              porous nature of grout and the unique requirements of various materials &mdash;
              combining specialist material knowledge, precision grout recolouring, certified
              eco-friendly products, and the same trusted professionals every visit.
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
// Section 3 - Our Total Surface Maintenance Checklist
// (Semantic H2: "Our Total Surface Maintenance Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Deep Cleaning & Sanitisation
//   2. Precision Sealing & Protection
//   3. Floor & Wall Restoration
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: SprayCan,
    image: IMG.checklistDeep,
    imageAlt: "Alkaline pre-spray being agitated into a Scottish bathroom tile floor with a rotating brush",
    title: "Deep Cleaning & Sanitisation",
    description:
      "The technical core of every restoration. We move beyond the surface mop to address the porous grout joint and the tile micropores &mdash; where the real contamination lives. Aggressive chemistry, matched dwell times, and mechanical agitation are how we shift years of build-up that mop-and-bucket cleaning simply redistributes.",
    points: [
      {
        icon: Brush,
        title: "Intensive Scrubbing",
        text: "Removing deep-seated grime and bacteria from grout lines and textured tile surfaces. A rotating brush head agitates the alkaline pre-spray into the grout joint at 800-1,200 PSI for ceramic and porcelain &mdash; the only method that physically flushes the dissolved soil out of the joint.",
      },
      {
        icon: Droplets,
        title: "Limescale & Mould Removal",
        text: "Targeting high-moisture areas in showers, cloakrooms, and utility rooms. We dissolve limescale with pH-appropriate chemistry (never acid on marble or limestone) and kill mould at the root with a biocidal pre-treatment that prevents regrowth for 12-18 months on most Scottish bathroom surfaces.",
      },
      {
        icon: Shield,
        title: "High-Touch Point Care",
        text: "Disinfecting all ceramic items and buffing chrome fixtures to a high shine as part of the surrounding area care. We never leave a job with dirty adjacent surfaces &mdash; taps, shower frames, and chrome trims are detailed as standard, not as a &pound;50 add-on tacked on at the end.",
      },
    ],
  },
  {
    icon: Shield,
    image: IMG.checklistProtect,
    imageAlt: "Pigmented grout sealer being precision-applied to a freshly cleaned tile floor",
    title: "Precision Sealing & Protection",
    description:
      "Cleaning without sealing is a temporary fix &mdash; the grout darkens again within 3-6 months. Our protection step is what makes the result last for 3-5 years. We apply the right sealer for the right material &mdash; pigmented sealer for grout, penetrating sealer for natural stone, topical sealer for Victorian encaustic tiles.",
    points: [
      {
        icon: Layers,
        title: "Grout Sealing",
        text: "Applying a protective barrier to prevent future spills from becoming permanent stains. Penetrating sealer bonds below the grout surface and repels water, oil, and soil &mdash; with correct maintenance, the grout stays clean for years, not months. Re-apply every 3-5 years and we&rsquo;ll remind you.",
      },
      {
        icon: Palette,
        title: "Recolouring & Unifying",
        text: "Restoring discoloured grout to a flawless, tailored style that enhances your entire room. Available in 12 standard colours &mdash; from white and grey to charcoal and black &mdash; this gives a uniform appearance regardless of the underlying stain and transforms the look of the floor in a single visit.",
      },
      {
        icon: Wrench,
        title: "Surface Repairs",
        text: "Addressing minor damages, cracks, and wear and tear that detract from the functionality of your space. We flag cracked or missing grout during the clean and recommend a tiler where re-grouting is required. We can also re-seal the joints with pigmented sealer to fill micro-cracks and provide a uniform colour.",
      },
    ],
  },
  {
    icon: Building2,
    image: IMG.checklistRestore,
    imageAlt: "Restored Victorian encaustic tile hallway in a Scottish tenement with topical sealer applied",
    title: "Floor & Wall Restoration",
    description:
      "The finish work that takes a job from &lsquo;cleaned&rsquo; to &lsquo;restored&rsquo;. We address the surrounding surfaces &mdash; hard floors, skirtings, door frames, and window sills &mdash; so the entire room feels reset, not just the centre of the floor. Particularly critical for sale prep and end-of-tenancy handovers.",
    points: [
      {
        icon: Home,
        title: "Hard Floor Care",
        text: "Intensive mopping and sanitising of hard floors to kill germs and maintain freshness. We finish with a pH-neutral rinse that removes all chemical residue &mdash; no sticky film, no re-soiling, no slippery surface. The floor is damp, not soaking, and dry in 4-8 hours with ventilation.",
      },
      {
        icon: CheckCircle2,
        title: "Detail Finishing",
        text: "Meticulous cleaning of skirting boards, door frames, and window sills surrounding the tiled area. The most common complaint with cheaper tile cleaners is that they leave dirty edges &mdash; we hand-detail every perimeter surface as standard. The &lsquo;WOW factor&rsquo; only happens when the edges match the centre.",
      },
    ],
  },
];

export function TileGroutSeoChecklist() {
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
            Beyond the basic mop
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Surface Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our tile and grout cleaning follows a rigorous, agency-approved checklist designed to
            deliver a &ldquo;speechlessly spotless&rdquo; finish that standard cleaners often miss.
            Below is the scope we deliver as standard on every restoration visit &mdash; from the
            technical core of deep extraction, through to precision sealing, to the detail finishing
            that makes the room feel genuinely reset.
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
                  <h3 className="absolute bottom-4 left-4 right-4 font-display font-bold text-lg text-white leading-tight">
                    {item.title}
                  </h3>
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
    title: "Instant 30-Second Quote",
    description:
      "Use our online price calculator to receive a simple, fixed-price quote based on your room size and tile type. No pushy sales call, no waiting 24 hours for a callback. The price you see is the price you pay &mdash; locked in for 12 months, with no contracts tying you in and no on-the-day upsells for sealer or recolour.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Assessment",
    description:
      "Our experienced team arrives fully equipped to establish a schedule and standard of excellence tailored to your home&rsquo;s specific layout. We confirm the tile material (ceramic, porcelain, travertine, marble, slate, or Victorian encaustic), flag any permanent stains, and walk you through the cleaning plan before any water touches the surface.",
  },
  {
    icon: CalendarCheck,
    step: "03",
    title: "Enjoy a Revitalised Sanctuary",
    description:
      "Experience a home that feels fresh, clean, and &ldquo;showcase&rdquo; ready, backed by our Maundy Clean satisfaction guarantee. We finish with sealing or recolouring as appropriate, walk the property with you at completion, and re-treat on the spot if anything is flagged. Care card and re-clean reminder at 12 months &mdash; from &pound;149 per room.",
  },
];

export function TileGroutSeoBooking() {
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
            We have optimized our booking system to be uncomplicated and straightforward,
            addressing the slow response times common in the Scottish market. From quote to first
            clean in under 48 hours &mdash; no friction, no waiting, no surprises.
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
// Section 5 - A Solution for Every Property Cycle
// (Semantic H2: "A Solution for Every Property Cycle")
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: CalendarCheck,
    title: "Maintaining the Standard &middot; Recurring Home Cleaning",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt: "Scottish home receiving recurring interior cleaning alongside annual tile and grout restoration",
    description:
      "After your surfaces are restored, keep them pristine with a Recurring Home Cleaning plan &mdash; weekly or fortnightly. Edge-to-edge vacuuming, immediate spill response, and quarterly deep cleans prevent the environmental buildup that darkens grout and dulls tile. The single biggest factor in how long a restoration lasts.",
    cta: "Explore recurring cleaning",
  },
  {
    icon: Home,
    title: "The Move-In Reset &middot; Deep House Cleaning",
    href: "/services/deep-house-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Scottish home receiving an intensive deep clean alongside tile and grout restoration for sale prep",
    description:
      "Preparing to sell? Our Sale Ready Service combined with a Deep House Cleaning creates the &ldquo;WOW factor&rdquo; that attracts buyers and adds value to your property. Stale odours, dark grout, and tired bathrooms are the single biggest turn-off at viewings &mdash; we fix all three in a single coordinated visit.",
    cta: "Explore deep house cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty Scottish flat being deep cleaned with bathroom and kitchen tile restoration included",
    description:
      "Our End of Tenancy Cleaning includes professional bathroom and kitchen sanitation to ensure you get your full deposit back. We work to the letting agent&rsquo;s inventory, restore the tile and grout to its original appearance, and come back free of charge if anything is flagged on the inspection.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-builders cleanup removing fine construction dust from tile grout lines in a Scottish kitchen",
    description:
      "If you have recently had home improvements, our After Builders Clean removes the heavy layers of construction dust that settle in grout lines. Includes steam-cleaning of grout, fine-dust wipe-down of all surfaces, and high-pressure extraction of the cement and grout residue the builders left behind.",
    cta: "Explore after builders cleaning",
  },
];

export function TileGroutSeoInterlinking() {
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
            Beyond the reset &middot; property milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            A Solution for Every Property Cycle
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our tile and grout cleaning is the technical foundation for a healthy home, but it works
            best when integrated into your wider maintenance schedule. From maintaining the standard
            after a restoration, to a sale-prep reset, to the heavy-duty post-builders clear-out
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
// (Semantic H2: "Tile & Grout Cleaning Services Near Me in Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function TileGroutSeoNearMe() {
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
              Local tile &amp; grout restoration across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Tile &amp; Grout Cleaning Services Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;tile and grout cleaning near me&rdquo; or &ldquo;grout recolour
              near me&rdquo; in Scotland? Maundy Clean covers 72+ towns and cities across the
              Central Belt, Highlands, Borders, and Islands. Same material-trained standard, same
              100% satisfaction guarantee, same dedicated technician &mdash; wherever your property
              happens to be. Find your local tile and grout restoration specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean tile and grout cleaning service coverage areas"
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
                Find your local tile &amp; grout crew
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
                    href={`/services/tile-grout-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> tile cleaning</span>
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
                  href="/services/tile-grout-cleaning-near-me"
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
            Our local tile and grout restoration crews operate across Glasgow&rsquo;s West End,
            Edinburgh&rsquo;s New Town, Aberdeen&rsquo;s suburbs, Dundee&rsquo;s city centre, and
            the Highlands &mdash; from Inverness to Thurso, Fort William to Lerwick. Whether
            you&rsquo;re searching for bathroom grout restoration in Glasgow, kitchen tile cleaning
            in Edinburgh, Victorian tile restoration in Aberdeen, or commercial wet-room sanitisation
            anywhere in between, Maundy Clean assigns a vetted, PAYE-employed technician that stays
            with you for the long run. Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H3: "Ready to Book Your Tile & Grout Cleaning?")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function TileGroutSeoFinalCta() {
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
            Ready to book your tile &amp; grout cleaning?
          </span>
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Ready to Book Your Tile &amp; Grout Cleaning?
          </h3>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Get a fixed-price tile and grout cleaning quote in 30 seconds. No pushy sales call, no
            waiting 24 hours for a callback. Material-trained technicians, precision grout
            recolouring in 12 shades, child &amp; pet-safe products, and a 100% satisfaction
            guarantee &mdash; from &pound;149 per room.
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
// 6 Q&As - 3 from the user brief (clean without replacing, deep vs regular, insured)
// + 3 tile-grout-specific additions (pressure damage, dry time, Victorian tiles)
// ============================================================

const SEO_FAQS = [
  {
    q: "Can you clean tiles without replacing them?",
    a: "Yes. Our process is designed to transform your tiled surfaces for an amazingly affordable price without the need for expensive replacements. In 90% of cases, high-pressure hot-water extraction returns the grout to its original colour in real-time as the head passes. For heavily stained grout where full restoration isn&rsquo;t possible, we offer grout recolour (pigmented sealer in 12 standard shades) which gives a uniform appearance regardless of the underlying stain &mdash; a fraction of the cost of re-tiling.",
  },
  {
    q: "Do I need a deep clean or a regular clean?",
    a: "A regular house clean is for ongoing maintenance &mdash; vacuuming, mopping, surface wiping. Our tile restoration is a specialized service recommended for surfaces that require a &ldquo;top-to-bottom&rdquo; intensive refresh or repair. If your grout has darkened from light grey to charcoal or black, if your tiles have lost their shine, or if you&rsquo;re preparing for sale or end-of-tenancy, you need the restoration. If the floor just needs a mop, book our recurring cleaning &mdash; we&rsquo;ll tell you straight either way.",
  },
  {
    q: "Are your technicians insured?",
    a: "Absolutely. Maundy Clean is a fully insured, registered professional cleaning company with years of experience serving the Central Belt of Scotland. We hold &pound;5m public liability cover, every technician is Disclosure Scotland PVG-checked, and all staff are PAYE-employed &mdash; we never use subcontractors or gig-economy labour. The same standard applies whether you&rsquo;re a one-off client or a recurring customer: vetted, uniformed, and accountable to the Maundy Clean name.",
  },
  {
    q: "Will high-pressure extraction damage my tiles or grout?",
    a: "Not when it is done correctly &mdash; and that&rsquo;s exactly why we identify the material before quoting. We cap pressure by surface: 800-1,200 PSI for ceramic and porcelain, 300-500 PSI for natural stone (travertine, limestone, marble, slate, sandstone), and hand-cleaning only for Victorian encaustic tiles. We never use acid-based cleaners on marble or limestone (they dissolve the calcium carbonate), never use high pressure on Victorian tiles (it cracks the lime-bed), and never use alkaline on slate (it strips the colour). Better to walk away than ruin a Victorian hallway.",
  },
  {
    q: "How long until the floor is usable after cleaning?",
    a: "4-8 hours after cleaning (without sealer) &mdash; the floor is damp, not soaking, thanks to simultaneous vacuum extraction. 24 hours after sealing (with sealer) &mdash; the sealer needs to fully cure before furniture is returned. Light foot traffic in socks is fine after 4 hours. Pets should be kept off until the floor is fully dry. We&rsquo;ll advise on the day based on humidity and ventilation &mdash; in winter with the windows closed, allow the full 8 hours; in summer with a through-draft, 4 hours is usually enough.",
  },
  {
    q: "Can you restore Victorian encaustic tiles in a tenement hallway?",
    a: "Yes, and we specialise in them. Victorian encaustic tiles (common in Edinburgh and Glasgow tenement hallways) are 100+ years old, often laid on a lime-bed, and require a hand-cleaning approach. We use minimal water (no high-pressure extraction &mdash; too risky for the bed), neutral pH cleaner, soft brushes, and a topical sealer to restore the depth of colour. We have restored dozens of tenement hallways &mdash; references available on request. Three firms may have told you it can&rsquo;t be done; we&rsquo;ll show you the photos from the last one we did.",
  },
];

export function TileGroutSeoFaq() {
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
            Tile &amp; grout cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our tile and grout cleaning clients ask most often.
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

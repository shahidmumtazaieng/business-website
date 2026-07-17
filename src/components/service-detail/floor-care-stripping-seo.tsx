"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Crown,
  Hammer,
  UserCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Building2,
  Leaf,
  KeyRound,
  Gem,
  Layers,
  Brush,
  Home,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches property-management + auto-dealership + salon-spa + day-porter + nightly-janitorial + hardwood-floor-care pool)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/floor-care-stripping.jpg",
  introSplit:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.12.26%20PM.jpeg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistStone:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistWood:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.28.09%20PM.jpeg",
  checklistVinyl:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  leaseTenancy:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2011.14.04%20PM.jpeg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseSpring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseUpholstery:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  nearMeMap:
    "https://maundyclean.sirv.com/Images/WhatsApp%20Image%202026-07-17%20at%2010.47.32%20PM.jpeg",
};

// ============================================================
// 36 Scottish locations covered by the near-me grid
// (city-centre + neighbourhood coverage across Scotland)
// ============================================================
const NEAR_ME_LOCATIONS: { city: string; slug: string }[] = [
  { city: "Glasgow", slug: "glasgow" },
  { city: "Edinburgh", slug: "edinburgh" },
  { city: "Aberdeen", slug: "aberdeen" },
  { city: "Dundee", slug: "dundee" },
  { city: "Stirling", slug: "stirling" },
  { city: "Inverness", slug: "inverness" },
  { city: "Perth", slug: "perth" },
  { city: "Falkirk", slug: "falkirk" },
  { city: "Paisley", slug: "paisley" },
  { city: "East Kilbride", slug: "east-kilbride" },
  { city: "Livingston", slug: "livingston" },
  { city: "Hamilton", slug: "hamilton" },
  { city: "Ayr", slug: "ayr" },
  { city: "Kilmarnock", slug: "kilmarnock" },
  { city: "Greenock", slug: "greenock" },
  { city: "Coatbridge", slug: "coatbridge" },
  { city: "Airdrie", slug: "airdrie" },
  { city: "Motherwell", slug: "motherwell" },
  { city: "Wishaw", slug: "wishaw" },
  { city: "Dunfermline", slug: "dunfermline" },
  { city: "Kirkcaldy", slug: "kirkcaldy" },
  { city: "Glenrothes", slug: "glenrothes" },
  { city: "Dundonald", slug: "dundonald" },
  { city: "Bearsden", slug: "bearsden" },
  { city: "Milngavie", slug: "milngavie" },
  { city: "Bishopbriggs", slug: "bishopbriggs" },
  { city: "Lenzie", slug: "lenzie" },
  { city: "Giffnock", slug: "giffnock" },
  { city: "Newton Mearns", slug: "newton-mearns" },
  { city: "Clarkston", slug: "clarkston" },
  { city: "Barrhead", slug: "barrhead" },
  { city: "Johnstone", slug: "johnstone" },
  { city: "Renfrew", slug: "renfrew" },
  { city: "Rutherglen", slug: "rutherglen" },
  { city: "Cambuslang", slug: "cambuslang" },
  { city: "Bellshill", slug: "bellshill" },
];

// ============================================================
// Section 0 - Full-width hero banner
// Semantic H1: "Professional Floor Care & Stripping Services Scotland"
// ============================================================

export function FloorCareStrippingSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean floor care specialist stripping, refinishing and burnishing a commercial hard floor to a wet-look gloss in a Scottish property"
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
            Floor Care &amp; Stripping &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Floor Care &amp; Stripping Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Restore, Maintain, and Preserve: Technical Surface Finishing,
            Manufacturer-Standard Care, and the Maundy Tradition of Excellence.
            MaundyClean brings vetted floor care specialists, technical stripping
            and re-sealing, diamond-grit restoration for natural stone and
            terrazzo, wood floor preservation, commercial vinyl and resilient
            surface protocols, colour-coded pad systems, eco-friendly non-toxic
            chemistry, heritage &amp; architectural specialist techniques, and a
            &ldquo;speechlessly spotless&rdquo; finish to every floor we serve
            &mdash; from heritage-listed Edinburgh New Town pine to modern
            Glasgow corporate VCT entrances.
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
                Request Your Free Floor Estimate Today
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
                View Our Hard Floor Care Checklist
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
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> Fully Insured &amp; PVG-Checked
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Floor Crew Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Diamond-Grit Restoration
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
// Split-layout with aspect-[4/3] image on the left and the
// verbatim intro paragraphs on the right. Paragraph 2 contains
// ONE inline <Link>: /services/recurring-home-cleaning for
// "Recurring Home Cleaning". The brief gives three intro
// paragraphs (p1 + p2-with-link + p3).
// ============================================================

export function FloorCareStrippingSeoIntro() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-14 items-center">
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
                src={IMG.introSplit}
                alt="Maundy Clean floor care specialist restoring a hard floor with diamond-grit honing and high-solids metal-interlock polish in a Scottish property"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Motivated Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy, &ldquo;same-staff&rdquo; consistency, and
                  &ldquo;sanctuary&rdquo; care we bring to Scotland&rsquo;s finest properties
                  &mdash; applied to your natural stone, wood, vinyl, linoleum, rubber,
                  terrazzo, and sealed concrete floors.
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
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m</div>
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
              Floor care &amp; stripping &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Floor Restoration
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the historic and architectural landscapes of Glasgow, Edinburgh,
              and the Central Belt, your floors are the foundation of your
              property&rsquo;s character. Whether you manage a heritage site with
              original solid wood or a modern commercial space with polished
              concrete, keeping your floors in fantastic condition is essential.
              At <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide a premium floor care and stripping service designed to
              ensure your floors look great, can be relied on, and remain a source
              of pride for years to come.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s finest residences, we bring that same level of
              technical intimacy and meticulous attention to detail to the complex
              world of hard floor restoration. We act as your strategic partner,
              utilizing contemporary and traditional cleaning methodologies to
              protect your architectural investment.
            </p>

            {/* Compact trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { label: "Visits completed in 2025", value: "99.6%" },
                { label: "PVG-checked operatives", value: "100%" },
                { label: "From per m&sup2;", value: "&pound;4" },
                { label: "Star rating", value: "4.9/5" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--cream)] rounded-xl p-3 border border-[var(--brand)]/10 text-center"
                >
                  <div
                    className="font-display font-extrabold text-xl text-gradient-brand"
                    dangerouslySetInnerHTML={{ __html: stat.value }}
                  />
                  <div
                    className="text-[11px] text-[var(--muted-foreground)] mt-0.5"
                    dangerouslySetInnerHTML={{ __html: stat.label }}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is Scotland's Expert in Floor Restoration
// (Semantic H2: "Why MaundyClean is Scotland's Expert in Floor Restoration")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / Building2 / Hammer / Leaf
// (icons chosen to reflect the brief's pillar themes: same trusted
// team every visit / heritage & architectural specialists / latest
// technology in machinery / sustainable & safe products).
// ALL 4 pillar bodies start with the brief sentence verbatim and
// are extended with floor-care-specific prose (no inline Links),
// but typed as ReactNode for codebase consistency with
// restroom-sanitation-seo.tsx (which uses ReactNode so a pillar
// can support an inline Link when needed).
// ============================================================

type TrustCard = {
  icon: typeof ShieldCheck;
  title: string;
  description: ReactNode;
};

const TRUST_CARDS: TrustCard[] = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is built on familiarity. We ensure the same vetted professionals manage your floor maintenance to build a deep understanding of your specific floor coverings and the nuances of your property&rsquo;s layout. The same PVG-checked floor care specialists return every visit &mdash; learning your floor type map (VCT here, linoleum there, marble in the lobby, sealed concrete in the warehouse), your traffic patterns, your polish spec, your access window, and your inspection regime. When your regular crew is on annual leave, we send a trained backup who has been briefed on your floors &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking a Scottish heritage floor.",
  },
  {
    icon: Building2,
    title: "Heritage & Architectural Specialists",
    description:
      "We provide highly detailed cleaning and restoration services for all floor coverings in Heritage & Architectural properties, ensuring that historical integrity is maintained through specialized preservation techniques. Original Edinburgh tenement pine boards (often 100-130 years old, sometimes paint-stripped, sometimes original-oiled), Glasgow sandstone-terrace encaustic tiles, Aberdeen granite-entrance terrazzo, Stirling heritage-listed marbles &mdash; each substrate demands its own protocol. We work with conservation officers where required, document our methods, and refuse to apply modern film-forming coatings to substrates that require traditional breathable treatments. We never use wax on natural stone, we never use alkaline chemistry on linoleum, and we never use aggressive pads on marble softer than the silicon carbide in the pad.",
  },
  {
    icon: Hammer,
    title: "Latest Technology in Machinery",
    description:
      "We utilize the latest technology in cleaning machinery and professional-grade stripping equipment to remove old seals and ingrained city-center grime without compromising the material&rsquo;s surface. Low-speed rotary machines (175 RPM) for stripping and scrubbing, high-speed burnishers (1500-2000 RPM) for wet-look gloss restoration, diamond-grit honing systems (50-grit through 3000-grit) for natural stone and terrazzo restoration, HEPA-filtered dust extractors for dust-free stripping where possible, professional wet/dry vacuums for slurry pickup, air movers for fast curing, gloss meters for objective measurement, and colour-coded pad systems (black strip, green heavy scrub, red light scrub, white polish, hogs-hair burnish) to prevent the cross-contamination mistakes that damage floors permanently.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Safe Products",
    description:
      "We use only sustainable, safe cleaning products that are certified non-toxic. This is essential for maintaining a healthy environment in private homes and commercial spaces while protecting delicate natural stones. pH-neutral chemistry for linoleum (alkaline-sensitive), water-based acrylic for rubber (solvent-based discolours permanently), non-toxic biodegradable strippers where floor type allows, EN 14476 virucidal chemistry for clinical zones, fragrance-free and child-safe surface cleaners by default, COSHH-documented biodegradable chemistry, and impregnating sealers (penetrating, not film-forming) that protect without trapping moisture. The finishes you&rsquo;ve invested in are protected &mdash; and the staff who walk on the floor the morning after are not walking into chemical fumes.",
  },
];

export function FloorCareStrippingSeoWhy() {
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
                alt="Maundy Clean floor care crew &mdash; PVG-checked, uniformed, trained in stripping, refinishing, burnishing, diamond-grit restoration, sealing, and finishing"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Motivated Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, PVG-checked, uniformed, and trained in
                  floor-care-specific protocols &mdash; stripping, refinishing,
                  burnishing, diamond-grit restoration, sealing, finishing, anti-slip
                  treatment, grout &amp; tile detailing, and stain removal. Same crew
                  every visit &mdash; never a rotating cast of agency strangers
                  walking a Scottish commercial or heritage floor.
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
                  <ShieldCheck className="w-4 h-4 text-[var(--gold-dark)]" />
                </div>
                <div>
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m</div>
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
              Why MaundyClean is Scotland&rsquo;s Expert in Floor Restoration
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Every floor is unique, and a &ldquo;one-size-fits-all&rdquo; approach can
              lead to permanent damage. MaundyClean focuses on specialist knowledge
              and vocational training to deliver a &ldquo;speechlessly spotless&rdquo;
              and preserved finish. Our floor care crews carry the technical kit,
              the chemistry, and the protocols standard mopping cannot match
              &mdash; and the same vetted team returns every visit to build the deep
              familiarity your floors deserve.
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
                        {typeof card.description === "string" ? (
                          <span dangerouslySetInnerHTML={{ __html: card.description }} />
                        ) : (
                          card.description
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TRUST_CARDS.slice(2).map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[var(--border)] flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed">
                    {typeof card.description === "string" ? (
                      <span dangerouslySetInnerHTML={{ __html: card.description }} />
                    ) : (
                      card.description
                    )}
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
// Section 3 - Our Total Floor Maintenance & Stripping Checklist
// (Semantic H2: "Our Total Floor Maintenance & Stripping Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Natural Stone & Concrete Restoration
//   2. Wood Floor Preservation
//   3. Commercial Vinyl & Resilient Surfaces
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO intro paragraphs on the 3 checklist cards
// (just H3 title + sub-points). ALL sub-point bodies in ALL 3
// cards are plain strings per the brief (no inline Links), but
// typed as ReactNode (via ChecklistPoint.text) for codebase
// consistency with restroom-sanitation-seo.tsx.
// ============================================================

type ChecklistPoint = {
  title: string;
  text: ReactNode;
};

const CHECKLIST_ITEMS: {
  icon: typeof Building2;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  points: ChecklistPoint[];
}[] = [
  {
    icon: Gem,
    image: IMG.checklistStone,
    imageAlt:
      "Maundy Clean floor care specialist restoring natural stone, marble and polished concrete floors with diamond-grit honing in a Scottish property",
    title: "1. Natural Stone & Concrete Restoration",
    description: "",
    points: [
      {
        title: "Stone Floor Cleaning",
        text: "Specialized care for natural stone like marble and limestone, removing traffic film and restoring natural luster. Marble (Mohs 3 &mdash; softer than aggressive silicon-carbide pads), limestone, travertine, slate, and granite each require their own protocol. We diamond-hone through 50-grit to 3000-grit, then crystallise marble (acid-based chemical reaction creates a harder, glossier surface), apply an impregnating sealer (penetrating, not film-forming), and poultice for stain removal (oil, rust, organic stains). We do NOT use wax on natural stone &mdash; wax traps moisture and discolours. Annual re-polish maintains the gloss.",
      },
      {
        title: "Concrete Floor Polishing",
        text: "Professional cleaning and buffing of polished concrete to maintain a high-gloss, durable finish. Lithium-silicate densifier applied (reacts with calcium hydroxide in concrete to form calcium silicate hydrate, hardening the surface), floor then diamond-polished through 200-grit to 3000-grit to the desired gloss level, impregnating sealer applied for stain resistance. No film-forming coating (which would peel under forklift traffic). Annual re-polish with 800-grit and burnish to maintain gloss. Stain removal with alkaline degreaser and poultice. The right way to care for sealed concrete &mdash; long-lasting, low-maintenance, no peeling.",
      },
      {
        title: "Grout & Tile Detailing",
        text: "Intensive cleaning of floor tiles and grout lines to remove deep-seated bacteria and stains. Rotary-machine deep scrub with anti-fungal treatment on tile joints (the main odour reservoir in any commercial kitchen, washroom, or entrance), alkaline degreaser for ingrained soil on ceramic and porcelain tiles, steam treatment for sanitisation, grout colour restoration where the original colour has been lost to staining, and silicone grout sealer applied to slow future soiling. The detail work that lifts the floor from &lsquo;cleaned&rsquo; to &lsquo;restored&rsquo; &mdash; and the work most general cleaners skip.",
      },
    ],
  },
  {
    icon: Brush,
    image: IMG.checklistWood,
    imageAlt:
      "Maundy Clean floor care specialist maintaining and preserving a solid wood floor with non-damaging solutions and high-quality seals in a Scottish heritage property",
    title: "2. Wood Floor Preservation",
    description: "",
    points: [
      {
        title: "Solid & Engineered Wood",
        text: "Meticulous maintenance for all types of timber, using non-damaging solutions to restore grain clarity. Solid timber (oak, ash, pine, walnut, beech), engineered wood (veneer over ply substrate &mdash; sensitive to over-wetting), parquet and herringbone (finger blocks, complex patterns), and laminate (which cannot be refinished &mdash; only maintained). We identify species, cut, and finish before we touch the floor, then apply the right protocol: pH-neutral cleaner for lacquer, oil-replenishing products for oiled finishes, ultra-low moisture for engineered veneers, dry-only methods for laminate joins. Wrong chemistry on wrong timber equals permanent damage.",
      },
      {
        title: "Sealing & Finishing",
        text: "Applying high-quality seals and finishes to protect wood from moisture and high-traffic wear and tear. Hardwax oil (Osmo Polyx-Oil, Blanchon) for oiled finishes &mdash; breathable, repairable, food-safe. Bona Traffic HD or Junckers HP lacquer for film-forming finishes &mdash; durable, high-traffic-rated, 5-10 year guarantee. Screen-and-recoat (light sand of existing finish, new topcoat applied) to extend floor life by 3-5 years without the dust and disruption of a full sand. Full sand and refinish (drum sanding, edge sanding, optional stain colour change, multiple finish coats) for the complete restoration. The right seal and finish for the right floor &mdash; we never apply film-forming over oiled, and we never apply wax over lacquer.",
      },
    ],
  },
  {
    icon: Layers,
    image: IMG.checklistVinyl,
    imageAlt:
      "Maundy Clean floor care specialist stripping and re-sealing a commercial VCT vinyl composition tile floor with high-solids metal-interlock polish in a Scottish retail or commercial space",
    title: "3. Commercial Vinyl & Resilient Surfaces",
    description: "",
    points: [
      {
        title: "Stripping & Re-Sealing",
        text: "Technical removal of old, discolored floor wax and application of fresh, protective coatings on Vinyl, Linoleum, Rubber, and Cork. Full strip back to bare floor &mdash; chemical stripper (chemistry matched to floor type: alkaline for VCT, pH-neutral for linoleum, water-based for rubber), aggressive pad (black for VCT, green for linoleum, white for rubber), wet vacuum pickup, double-rinse with clean water, neutraliser rinse to bring floor back to pH 7 (critical &mdash; alkaline residue prevents polish bonding). Then refinish: 4-6 coats of high-solids metal-interlock polish (25% solids commercial, 30% premium), each coat dried 30-45 minutes. Final coat cured 24 hours before traffic. Floor restored to wet-look gloss.",
      },
      {
        title: "Anti-Slip Treatment",
        text: "Ensuring your floors are not only beautiful but also compliant with health and safety standards. Slip-resistance testing (pendulum test to BS 7976) on high-risk zones (entrance matting transitions, wet washroom surrounds, commercial kitchen wet zones, swimming pool surrounds). Anti-slip polish additives for VCT and linoleum, anti-slip tapes and coatings for stair nosings, and slip-resistant matting specification where polish alone cannot meet the HSE requirement. Quarterly slip audit with documented pendulum readings for your compliance file. The right treatment for the right risk zone &mdash; and the documentation that proves to your insurer and your HSE inspector that you take floor safety seriously.",
      },
    ],
  },
];

export function FloorCareStrippingSeoChecklist() {
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
            Beyond the standard mop
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Floor Maintenance &amp; Stripping Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for floors move beyond the standard mop to
            include technical stripping, sealing, and finishing tailored to your
            specific material. From natural stone diamond-grit restoration through
            wood floor preservation to commercial vinyl and resilient surface
            protocols &mdash; every floor type has its own chemistry, its own pad,
            its own technique. Below is the scope we deliver as standard,
            regardless of building type, footprint, or occupancy schedule.
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
                  {item.description ? (
                    <p
                      className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                  ) : null}
                  <ul className="space-y-3 mt-auto">
                    {item.points.map((point) => {
                      const PointIcon = CheckCircle2;
                      return (
                        <li
                          key={point.title}
                          className="flex items-start gap-2.5 text-sm text-[var(--ink)]/85"
                        >
                          <PointIcon className="w-4 h-4 text-[var(--brand)] shrink-0 mt-0.5" />
                          <span>
                            <strong className="font-semibold text-[var(--ink)]">{point.title}</strong>
                            &mdash;{" "}
                            {typeof point.text === "string" ? (
                              <span dangerouslySetInnerHTML={{ __html: point.text }} />
                            ) : (
                              point.text
                            )}
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
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// (FileText imported for safety/template parity even if not used.)
// Brief HAS a [H3] marker on this heading, so we use <h3>
// (matches the day-porter pattern; restroom-sanitation had
// no [H3] marker so it used <h2>).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Free Estimate & Floor Analysis",
    description:
      "Contact us for a free estimate. Our team will advise on the best specialist cleaning, sealing, and finishing options for your unique floor type. On-site floor audit: every floor type identified and mapped (VCT, linoleum, rubber, terrazzo, sealed concrete, natural stone, solid wood, engineered wood, parquet, laminate). Floor condition assessed (existing polish depth, scratch level, stain extent, traffic pattern). Existing chemistry checked (if any). Polish type, seal type, and finishing schedule recommended per floor type per traffic pattern. Strip/refinish schedule designed (annual for high-traffic, biennial for medium, quarterly scrub-and-recoat for top-up, annual re-polish for stone/terrazzo/concrete). Burnish programme scoped if required. Priced per m&sup2; per protocol. Itemised proposal within 2 business days.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with the necessary qualifications to handle architectural materials and heritage settings. Your allocated floor care crew is PVG-checked, uniformed, and trained in floor-care-specific protocols &mdash; stripping, refinishing, burnishing, diamond-grit restoration, sealing, finishing, anti-slip treatment, grout &amp; tile detailing, stain removal, and heritage conservation techniques where required. We brief the crew on your floor type map, your polish spec, your access window (in-hours presence, after-hours unsupervised, key-safes and alarm codes), your staff communications protocol, your premium finishes, and any listed-building constraints on chemistry or method. The same crew returns every visit, building real knowledge of your floors and your inspection regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Foundation",
    description:
      "Experience a floor that looks brand new and is protected for the future, backed by our MaundyClean satisfaction guarantee. You receive a signed floor care log after every visit (crew name, time in/out, areas treated, products used, gloss meter reading, polish depth, and any issues flagged), arrival and departure times, before-and-after photographs for major restoration work, and issue-flagging for low-gloss zones, scratch patterns, stain build-up, or polish pop &mdash; before they undermine a client visit, an environmental health inspection, or a guest impression. From &pound;4 per m&sup2; for quarterly scrub-and-recoat through to &pound;28 per m&sup2; for full diamond-grit restoration. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function FloorCareStrippingSeoBooking() {
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
            The MaundyClean 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be uncomplicated and
            straightforward, providing the responsive expertise Scottish property
            owners expect. From free estimate and floor analysis through specialist
            crew matching to a pristine foundation &mdash; no friction, no waiting,
            no surprises. Just a restored floor, every entrance, every corridor,
            every heritage board, and a compliance file that&rsquo;s audit-ready
            the day an environmental health officer, insurer, or conservation
            officer walks in.
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
                <p
                  className="text-sm text-[var(--muted-foreground)] leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: step.description }}
                />
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
              Request Your Free Floor Estimate Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Need
// (Semantic H2: "Solutions for Every Property Need")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (each contains an
// inline <Link> per the brief) - rendered via the
// typeof sol.description === "string" check.
// ============================================================

type InterlinkSolution = {
  icon: typeof Sparkles;
  title: string;
  href: string;
  image: string;
  imageAlt: string;
  description: ReactNode;
  cta: string;
};

const INTERLINK_SOLUTIONS: InterlinkSolution[] = [
  {
    icon: KeyRound,
    title: "Property Transitions",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy handover clean including hard floor reset for a Scottish commercial or residential unit being vacated",
    description: (
      <>
        Moving out? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        protocol includes hard floor resets to ensure you pass your final
        inspection. Every surface detailed top-to-bottom, deposit-back guarantees
        met, and the same trusted vetted crew your floor care team knows &mdash;
        so your unit handover starts from a &ldquo;speechlessly spotless&rdquo;
        baseline.
      </>
    ),
    cta: "Explore end of tenancy cleaning",
  },
  {
    icon: Hammer,
    title: "Post-Renovation",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt:
      "After builders clean removing heavy layers of builders dust and plaster from newly laid floors in a Scottish post-construction site",
    description: (
      <>
        If you&rsquo;ve had construction work, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy layers of builders&rsquo; dust and plaster
        from your newly laid floors. Fine dust left on a freshly laid floor acts
        like sandpaper under foot traffic &mdash; we vacuum, damp-wipe, and
        protect the finish before the dust causes permanent scratches.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: Home,
    title: "The Sanctuary Standard",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseSpring,
    imageAlt:
      "Recurring home cleaning bringing floor-care standards of meticulous maintenance to a Scottish private residence on a weekly or fortnightly basis",
    description: (
      <>
        Maintain your newly restored floors with our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        service, customized to your specific floor aftercare needs. The same
        vetted uniformed crew, the same child-safe eco chemistry, the same signed
        cleaning log after every visit &mdash; so the standard you see in your
        commercial space follows you home.
      </>
    ),
    cta: "Explore recurring home cleaning",
  },
  {
    icon: HeartPulse,
    title: "Total Interior Care",
    href: "/services/upholstery-cleaning",
    image: IMG.leaseUpholstery,
    imageAlt:
      "Upholstery cleaning refreshing furniture alongside a newly restored hard floor for a comprehensive Scottish property refresh",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/upholstery-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Upholstery Cleaning
        </Link>{" "}
        to refresh your furniture alongside your floors for a comprehensive
        property refresh. Stain-specific chemistry for fabric, leather, and
        microfibre suites, hot-water extraction for deep soil, and the same
        &ldquo;Maundy&rdquo; standard applied to every cushion, arm, and back.
      </>
    ),
    cta: "Explore upholstery cleaning",
  },
];

export function FloorCareStrippingSeoInterlinking() {
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
            Beyond the floor &middot; property lifecycle
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Need
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our floor care provides the heartbeat of your property&rsquo;s
            preservation, but we offer specialized &ldquo;resets&rdquo; for major
            property milestones: from end-of-tenancy handover cleans and
            post-renovation dust clear-outs through recurring home cleaning that
            maintains your newly restored floors, and upholstery cleaning that
            refreshes the furniture on top of them. The same trusted, vetted crew
            can step up whenever your property needs more than a standard
            floor care visit.
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
                      {typeof sol.description === "string" ? (
                        <span dangerouslySetInnerHTML={{ __html: sol.description }} />
                      ) : (
                        sol.description
                      )}
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
// (Semantic H2: "Floor Care & Stripping Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/floor-care-stripping-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function FloorCareStrippingSeoNearMe() {
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
              Local floor care &amp; stripping across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Floor Care &amp; Stripping Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;floor care near me&rdquo; or &ldquo;floor
              stripping and refinishing near me&rdquo; in Scotland? Maundy Clean
              covers facilities managers, office managers, building operations
              leads, heritage property owners, and commercial estates across the
              Central Belt, Highlands, Borders, and Islands &mdash; from
              Glasgow&rsquo;s IFSD and Edinburgh&rsquo;s New Town to
              Aberdeen&rsquo;s granite-built West End and Dundee&rsquo;s
              Waterfront, plus commercial estates in Stirling, Perth, Inverness,
              and Ayr. Same PVG-checked, uniformed floor care specialists, same
              dedicated crew every visit, same rapid response to spills and
              finish failures &mdash; wherever your property happens to be. Find
              your local floor care specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean floor care &amp; stripping coverage areas"
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
                  Same PVG-checked floor care crews, same 100% satisfaction guarantee &mdash; from
                  Glasgow to Inverness.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                asChild
              >
                <Link href="/services/floor-care-stripping-near-me#locations">
                  <MapPin className="w-4 h-4" />
                  Browse the near-me directory
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
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
                Find your local floor care crew
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
                    href={`/services/floor-care-stripping-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> floor care</span>
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
              <Link
                href="/locations"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] whitespace-nowrap"
              >
                View all 72 Scottish locations
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
            Our local floor care crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City and West End
            corporate towers (facilities managers, office managers and building
            operations leads), Edinburgh&rsquo;s Exchange District, New Town and
            Quartermile business quarters (heritage property owners and corporate
            estates), Aberdeen&rsquo;s energy-corridor West End and Tullos
            industrial offices (energy operators and service companies),
            Dundee&rsquo;s Waterfront and City Centre professional services
            buildings (facilities teams and office managers), and Scottish
            commercial and heritage districts across the Central Belt &mdash; from
            Inverness to Perth, Falkirk to Ayr. Whether you&rsquo;re searching for
            a VCT strip-and-refinish in Glasgow, a marble diamond-grit restoration
            in Edinburgh, a terrazzo polish in Aberdeen, or a heritage pine board
            sand-and-refinish anywhere in between, Maundy Clean assigns a vetted,
            PAYE-employed, PVG-checked floor care crew that stays with you for the
            long run. Same crew, same standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Free Floor Estimate Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function FloorCareStrippingSeoFinalCta() {
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
            Ready to book your free floor estimate?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Free Floor Estimate Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Facilities managers, office managers, heritage property owners and
            building operations leads &mdash; book a free, no-obligation floor
            estimate with our management team and receive an itemised proposal
            within 2 business days. Technical stripping and re-sealing, diamond-grit
            restoration for natural stone and terrazzo, wood floor preservation,
            commercial vinyl and resilient surface protocols, colour-coded pad
            systems, eco-friendly non-toxic chemistry, heritage &amp; architectural
            specialist techniques, a fixed per-m&sup2; rate that locks for 12
            months, PVG-checked uniformed professionals who become part of your
            team, and the multi-site one-invoice convenience that lets you
            consolidate every Scottish property on a single audit-ready
            compliance file. From &pound;4 per m&sup2; for quarterly
            scrub-and-recoat through to &pound;28 per m&sup2; for full diamond-grit
            restoration. No pushy sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Free Floor Estimate Today
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
                View Our Hard Floor Care Checklist
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
// 3 Q&As from the brief (insured technicians, provide own
// machinery, heritage-listed buildings)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your floor technicians insured?",
    a: "Absolutely. MaundyClean is a fully insured, certified professional cleaning company with extensive experience in both residential and commercial flooring sectors. We carry &pound;5m public liability as standard &mdash; covering VCT, linoleum, rubber, terrazzo, sealed concrete, natural stone, solid wood, engineered wood, parquet, and laminate floors &mdash; and every floor care specialist is PVG-checked (essential for buildings where staff and visitors are present), uniformed, and trained in floor-care-specific protocols: stripping, refinishing, burnishing, diamond-grit restoration, sealing, finishing, anti-slip treatment, grout &amp; tile detailing, and heritage conservation techniques where required. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, listed-building consents, and corporate insurance compliance files. Our documentation is audit-ready for environmental health inspection, HSE review, and conservation officer review; we provide signed floor care logs, gloss meter readings, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file. We will not begin work until your facilities or office manager has the documentation they need.",
  },
  {
    q: "Do you provide your own cleaning machinery?",
    a: "Yes. We supply all our own latest-technology machinery and eco-friendly materials required for stripping and restoration, which are included in your quote. From low-speed rotary machines (175 RPM) for stripping and scrubbing, high-speed burnishers (1500-2000 RPM) for wet-look gloss restoration, diamond-grit honing systems (50-grit through 3000-grit) for natural stone and terrazzo restoration, HEPA-filtered dust extractors for dust-free stripping where possible, professional wet/dry vacuums for slurry pickup, air movers for fast curing, gloss meters for objective measurement, and colour-coded pad systems (black strip, green heavy scrub, red light scrub, white polish, hogs-hair burnish) to prevent cross-contamination. Chemistry is matched to floor type &mdash; alkaline stripper for VCT, pH-neutral for linoleum, water-based acrylic for rubber, lithium-silicate densifier for concrete, crystallisation compound for marble, impregnating sealer (penetrating, not film-forming) for natural stone. COSHH-documented chemistry on file. Non-toxic, biodegradable, child-safe, and surface-safe by default. You provide the floor and the access; we provide everything else.",
  },
  {
    q: "Can you handle heritage-listed buildings?",
    a: "Yes. We specialize in providing highly detailed restoration and maintenance for all types of heritage and architectural buildings across Scotland. Original Edinburgh tenement pine boards (often 100-130 years old, sometimes paint-stripped, sometimes original-oiled), Glasgow sandstone-terrace encaustic tiles, Aberdeen granite-entrance terrazzo, Stirling heritage-listed marbles, Perth listed-building oak parquet, Inverness heritage church flagstones &mdash; each substrate demands its own protocol. We work with conservation officers where required, document our methods, and refuse to apply modern film-forming coatings to substrates that require traditional breathable treatments. We never use wax on natural stone (wax traps moisture and discolours), we never use alkaline chemistry on linoleum (causes permanent damage), we never use aggressive pads on marble softer than the silicon carbide in the pad (causes deep scratching), and we never use solvent-based chemistry on rubber (causes permanent discoloration). Heritage Scotland, local authority conservation teams, and listed-building owners trust us with their floors because we treat every substrate with the respect its age and provenance deserves.",
  },
];

export function FloorCareStrippingSeoFaq() {
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
            Floor care &amp; stripping &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our floor care clients ask most often.
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
                  <p
                    className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.a }}
                  />
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
                Request Your Free Floor Estimate Today
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
                View Our Hard Floor Care Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
  Layers,
  Brush,
  Home,
  Gem,
  Droplets,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (Marble-specific imagery, drawn from the existing marble
// gallery plus the dedicated marble hero image)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistStrip:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistFinish:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  checklistDetail:
    "https://sfile.chatglm.cn/images-ppt/fffec8f75cf2.jpg",
  leaseRecurring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseUpholstery:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  nearMeMap:
    "https://sfile.chatglm.cn/images-ppt/392a7cbbe123.jpg",
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
// Semantic H1: "Professional Marble Polishing & Stone Restoration Scotland"
// ============================================================

export function MarblePolishingSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean marble polishing specialist diamond-grit honing, polishing and restoring a natural stone marble floor to a mirror finish in a Scottish property"
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
            Marble Polishing &amp; Stone Restoration &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Marble Polishing &amp; Stone Restoration Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Restore the Natural Luster, Technical Stone Preservation, and the
            Maundy Tradition of Excellence for Your Architectural Sanctuary.
            MaundyClean brings vetted stone specialists, diamond-grit honing,
            multi-stage mechanical polishing, premium breathable impregnating
            sealers, commercial crystallisation treatments, advanced poultice
            stain removal, etch-mark restoration, scratch &amp; chip repair,
            pH-neutral stone-safe chemistry, heritage-marble protocols, and a
            &ldquo;speechlessly spotless&rdquo; mirror finish to every natural
            stone floor we serve &mdash; from Glasgow hotel lobbies and
            Edinburgh retail flagships to Aberdeen office receptions and
            Dundee luxury residences.
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
                Request Your Free Stone Assessment Today
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Stone Crew Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Diamond-Grit Mirror Finish
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
// "Recurring Home Cleaning". The brief gives two intro
// paragraphs (p1 + p2-with-link).
// ============================================================

export function MarblePolishingSeoIntro() {
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
                alt="Maundy Clean marble polishing specialist applying diamond-grit honing and polishing compound to restore a natural stone marble floor in a Scottish property"
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
                  &mdash; applied to your marble entrances, hotel lobbies, retail flagships,
                  office receptions, fireplaces, and luxury residential stone.
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
              Marble polishing &amp; stone restoration &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Marble Restoration
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              With its striking veining and diverse range of colors, marble
              adds a touch of timeless elegance to any Scottish residence or
              commercial space. However, many beautiful marble floors in
              Glasgow and Edinburgh are over 100 years old and require
              specialist care to maintain their original splendour. Due to its
              relatively soft and porous nature, marble is susceptible to
              etching, staining, and the inevitable dulling caused by
              city-center foot traffic. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>,
              we provide a premium marble polishing service that breathes life
              and beauty back into your floors, ensuring they remain a
              centerpiece for generations to come.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              While we are the recognized authority in{" "}
              <Link
                href="/services/recurring-home-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Recurring Home Cleaning
              </Link>{" "}
              for Scotland&rsquo;s most prestigious homes, we bring that same
              level of technical intimacy and &ldquo;same-staff&rdquo;
              consistency to the specialized field of natural stone restoration.
              We act as your strategic partner, utilizing the latest technology
              and traditional methodologies to provide a &ldquo;speechlessly
              spotless&rdquo; finish that generic cleaning companies cannot
              achieve.
            </p>

            {/* Compact trust strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7"
            >
              {[
                { icon: UserCheck, label: "Same crew every visit" },
                { icon: Gem, label: "Diamond-grit honing" },
                { icon: Leaf, label: "pH-neutral stone-safe" },
                { icon: ShieldCheck, label: "Heritage protocols" },
              ].map((badge) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 bg-white rounded-lg p-2.5 border border-[var(--border)]"
                  >
                    <Icon className="w-4 h-4 text-[var(--brand)] shrink-0" />
                    <span className="text-xs font-semibold text-[var(--ink)] leading-tight">
                      {badge.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 2 - Why MaundyClean is Scotland's Expert in Marble Maintenance
// (Semantic H2: "Why MaundyClean is Scotland's Expert in Marble Maintenance")
// Image+copy split layout with 4 trust pillars.
// Per the brief: pillars UserCheck / MapPin / FileText / Leaf
// (icons chosen to reflect the brief's pillar themes: same trusted
// team every visit / Central Scotland coverage / total regulatory
// compliance / sustainable & stone-safe products).
// ALL 4 pillar bodies start with the brief sentence verbatim and
// are extended with marble-specific prose (no inline Links),
// but typed as ReactNode for codebase consistency with
// vct-floor-care-seo.tsx and floor-care-stripping-seo.tsx
// (which use ReactNode so a pillar can support an inline Link
// when needed).
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
      "Reliability is built on familiarity. We ensure the same vetted professionals manage your restoration project to build a deep understanding of your floor&rsquo;s history and your specific &ldquo;showcasing&rdquo; requirements. The same PVG-checked stone specialists return every visit &mdash; learning your marble type (Carrara, Calacatta, Statuary, Crema Marfil, Emperador, Nero Marquina, plus travertine, limestone and terrazzo where applicable), your etch-mark pattern (which zones suffer acid spills from perfume, wine, citrus, vinegar), your traffic-flow map (entrance grit zones, lift-lobby scuffing, reception desk foot-traffic), your polish spec (matte, satin, high-gloss mirror), and your inspection regime. When your regular crew is on annual leave, we send a trained backup who has been briefed on your floors &mdash; and we tell you in advance. Never a rotating cast of agency strangers walking a Scottish heritage marble floor.",
  },
  {
    icon: MapPin,
    title: "Central Scotland Coverage",
    description:
      "Our expert team covers all of Central Scotland, including Glasgow, Edinburgh, the Lothians, Lanark, and East Renfrewshire, providing rapid response for both residential and commercial stone needs. From a Glasgow West End Carrara bathroom to an Edinburgh New Town hotel-lobby Crema Marfil, from an Aberdeen granite-belt office reception to a Dundee Waterfront retail flagship, from a Stirling heritage townhouse to a Perth country estate &mdash; the same specialist stone crew, the same diamond-grit honing protocols, the same pH-neutral stone-safe chemistry, the same signed stone-care log after every visit. Same-day emergency callout for spill damage (acid etching, oil staining, chip repair) across the Central Belt &mdash; because a wine spill on a Carrara bathroom floor at 9pm Saturday needs specialist response by 9am Sunday, not a callback on Monday morning.",
  },
  {
    icon: FileText,
    title: "Total Regulatory Compliance",
    description:
      "We take the health of your home and staff seriously. Every restoration project includes a full RAMS package and COSHH sheets as standard, ensuring we meet exceptionally high cleaning criteria. Risk Assessment &amp; Method Statement tailored to your site (occupancy, access, heritage constraints, listed-building consents where required), COSHH datasheets for every chemistry we bring on site (diamond-slurry suppressants, polishing compounds, penetrating sealers, crystallisation agents, poultice carriers), full employer&rsquo;s liability and &pound;5m public liability insurance, PVG-checks on every operative (essential for heritage properties, hotels, retail, and any building where the public is present), and audit-ready documentation for your compliance file. We can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, and retail-chain compliance.",
  },
  {
    icon: Leaf,
    title: "Sustainable & Stone-Safe Products",
    description:
      "We utilize only certified non-toxic and pH-neutral products. This is CRUCIAL for marble, as acidic substances can cause permanent damage, ensuring a fresh, safe environment for your family and pets. The cardinal rule of marble care: nothing acidic touches the stone. No vinegar, no lemon, no limescale remover, no ammonia, no bleach &mdash; all of these dissolve calcium carbonate and etch the surface within seconds. We use pH-neutral maintenance chemistry (Lithofin Easy-Care, Aqua Mix Concentrated Tile Cleaner), biodegradable diamond-slurry suppressants, low-VOC penetrating sealers (food-safe, child-safe, pet-safe once cured in 24 hours), fragrance-free polish compounds, and water-based crystallisation agents for occupied buildings. The finishes you&rsquo;ve invested in are protected &mdash; and the staff and guests who walk on the floor the morning after are not walking into chemical fumes.",
  },
];

export function MarblePolishingSeoWhy() {
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
                alt="Maundy Clean marble polishing crew &mdash; PVG-checked, uniformed, trained in diamond-grit honing, mechanical polishing, crystallisation, sealing, and stain removal for natural stone marble floors"
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
                  marble-specific protocols &mdash; diamond-grit honing,
                  multi-stage mechanical polishing, crystallisation, premium
                  impregnating sealing, etch-mark restoration, scratch &amp;
                  chip repair, poultice stain removal, and heritage-marble
                  methodologies. Same crew every visit &mdash; never a
                  rotating cast of agency strangers walking a Scottish
                  heritage marble floor.
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
              Why choose Maundy Clean for marble
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Why MaundyClean is Scotland&rsquo;s Expert in Marble Maintenance
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many contractors offer a basic &ldquo;wash and wax&rdquo; that can
              actually trap dirt and lead to yellowing. MaundyClean addresses
              these exploitable weaknesses through vocational training and
              specialized stone technicality. Our stone crews carry the
              diamond-grit honing kit, the pH-neutral chemistry, and the
              heritage-marble protocols standard mopping cannot match
              &mdash; and the same vetted team returns every visit to build the
              deep familiarity your stone deserves.
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
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
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
// Section 3 - Addressing the 4 Killers of Stone Brilliance
// (Semantic H2: "Addressing the 4 Killers of Stone Brilliance")
// Brief-specific section with 4 problem-solution cards:
//   1. Etching Restoration (diamond-pad honing)
//   2. Advanced Stain Removal (poultice)
//   3. Luster Restoration (multi-stage polishing)
//   4. Scratch & Chip Repair (marble fireplace repair, tile restoration)
// Icons: Droplets (etching), HeartPulse (stain), Sparkles (lustre),
// Wrench (scratch/chip repair).
// All 4 bodies start with the brief sentence verbatim and are
// extended with marble-specific prose. Plain strings typed as
// ReactNode via the KillerCard.body field for codebase consistency.
// ============================================================

type KillerCard = {
  icon: typeof ShieldCheck;
  title: string;
  body: ReactNode;
};

const KILLER_CARDS: KillerCard[] = [
  {
    icon: Droplets,
    title: "Etching Restoration",
    body:
      "We remove dull spots and rings caused by acidic substances like lemon juice or vinegar through professional diamond-pad honing. Etch marks are not stains &mdash; they are physical damage to the marble surface where the acid has dissolved the calcium carbonate, leaving a dull, lighter-coloured patch that no cleaner can lift. The only fix is mechanical: we diamond-hone the etched zone with a 200- or 400-grit pad to remove the damaged layer, then progressively re-polish through 800, 1500, 3000 and 5000 grit until the patch matches the surrounding floor. Done well, the repair is invisible. We have restored Glasgow West End Carrara bathroom floors where other firms said replacement was the only option &mdash; every etch mark, every perfume drip, every citrus splash, gone.",
  },
  {
    icon: HeartPulse,
    title: "Advanced Stain Removal",
    body:
      "Because marble is prone to absorbing liquids, we use specialized poultice to extract discolored areas caused by wine, coffee, and oil-based substances. A poultice is a paste of absorbent clay (typically kaolin or diatomaceous earth) mixed with the correct chemistry for the stain type &mdash; hydrogen peroxide for organic stains (wine, coffee, tea), solvent-based poultice for oil-based stains (cooking oil, hand cream, cosmetics), rust remover for iron-bearing stains (metal-flower-pot rings, hair-dye stains). The poultice is applied 6-12mm thick, covered with plastic film, left for 24-48 hours, then lifted. As it dries, it draws the stain out of the marble from below the surface. Multiple treatments may be required for deep stains &mdash; we tell you in advance if a stain is unlikely to fully lift before we start.",
  },
  {
    icon: Sparkles,
    title: "Luster Restoration",
    body:
      "Over time, improper cleaning and foot traffic cause stone to lose its shine. We use a multi-stage polishing process to restore its natural luster and original splendour. The process is mechanical &mdash; no chemical can restore a polish that has been walked off. We start with the coarsest diamond grit needed (typically 200-grit for moderate dullness, 400-grit for routine maintenance), then progress through 800, 1500, 3000 and 5000 grit &mdash; each pass finer than the last, removing the scratches from the previous grit. The final polish uses a 5000-grit buffing pad with a marble polishing compound (tin oxide or aluminium oxide) that melts into the surface at the molecular level, filling micro-scratches and producing the mirror finish. Light reflects cleanly off the surface &mdash; the showroom-quality finish that signals luxury in hotel lobbies, retail flagships, and luxury homes.",
  },
  {
    icon: Wrench,
    title: "Scratch & Chip Repair",
    body:
      "Everyday wear and tear lead to visible scratches. We provide comprehensive repair services for natural stone, including marble fireplace repair and tile restoration. Light scratches (caught with a fingernail but not deep) are removed by localised diamond honing and re-polishing of the affected tile or zone. Deeper scratches (felt easily with a fingernail) require a wider hone-out to feather the repair into the surrounding floor &mdash; we blend across 3-5 tiles rather than one to avoid a visible dip. Chip repair uses a colour-matched stone resin, hand-filled, cured, then diamond-honed flush with the surrounding surface. Fireplace repair (where heat-cracking has split a marble surround) uses the same resin-bonding technique plus a colour-matched filler. Tile restoration where a tile has cracked through &mdash; we can replace a single tile and re-polish to match the surrounding floor, avoiding a full floor replacement.",
  },
];

export function MarblePolishingSeoKillers() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
        >
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--brand)] mb-3 inline-block">
            Beyond the surface shine
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Addressing the 4 Killers of Stone Brilliance
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our marble polishing protocol is designed to address the specific
            challenges that cause stone surfaces to appear lackluster and worn.
            Each of the four killers below requires a different specialist
            response &mdash; there is no &ldquo;one polish fixes all&rdquo;
            approach to natural stone. MaundyClean carries the diamond-grit
            kit, the poultice chemistry, the resin-bonding compounds, and the
            trained eye to diagnose which killer has struck your floor and
            deploy the correct response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KILLER_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-[var(--border)] shadow-sm flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-[var(--ink)] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {typeof card.body === "string" ? (
                      <span dangerouslySetInnerHTML={{ __html: card.body }} />
                    ) : (
                      card.body
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
// Section 4 - Our Total Marble Polishing & Preservation Checklist
// (Semantic H3: "Our Total Marble Polishing & Preservation Checklist")
// Brief-specific section with H3 main heading (per brief [H3] marker)
// and 5 flat checklist items (no grouped sub-cards).
// Carries the id="checklist" anchor that the CTA buttons link to.
// Per the brief: NO card-grouped layout &mdash; 5 items in a single
// 3-column grid with icon, title, and explanatory body. ALL item
// bodies are plain strings per the brief (no inline Links), but
// typed as ReactNode (via ChecklistPoint.text) for codebase
// consistency.
// ============================================================

type ChecklistPoint = {
  icon: typeof Building2;
  title: string;
  text: ReactNode;
};

const CHECKLIST_ITEMS: ChecklistPoint[] = [
  {
    icon: Gem,
    title: "Diamond Abrasive Honing",
    text:
      "Removing the top layer of damage to reach fresh, unblemished stone. Weighted rotary machine with progressive diamond-grit pads &mdash; we start at the coarsest grit needed (typically 50- or 100-grit for deep scratches and etch marks, 200-grit for moderate dullness, 400-grit for routine maintenance), then progress through 800, 1500, 3000 and 5000 grit. Each pass finer than the last, removing the scratches from the previous grit. Slurry (water + marble dust) extracted continuously with a wet-vac, floor rinsed between grits, area divided into 4-6m&sup2; sections for even coverage. Process takes 6-12 hours per 20m&sup2; depending on damage severity. The technical reset your marble needs &mdash; not a &ldquo;top-up polish&rdquo; that leaves the underlying damage intact.",
  },
  {
    icon: Sparkles,
    title: "High-Gloss Mechanical Polishing",
    text:
      "Utilizing industrial-grade machinery to achieve the desired level of shine, from matte to a high-mirror finish. The final polish uses a 5000-grit buffing pad with a marble polishing compound (tin oxide or aluminium oxide) that melts into the marble surface at the molecular level, filling micro-scratches and producing the mirror finish. For commercial floors (hotel lobbies, retail flagships, office receptions), we then apply a crystallisation treatment &mdash; a magnesium fluorosilicate compound that chemically hardens the surface and intensifies the polish, creating a micro-layer of calcium fluorosilicate that is harder and more wear-resistant than the underlying marble. The depth of shine is your choice: matte (low-maintenance, residential), satin (warm, hospitality), high-gloss mirror (luxury, showcase).",
  },
  {
    icon: ShieldCheck,
    title: "Technical Sealing",
    text:
      "Applying premium, breathable impregnating sealers to protect against future staining. The sealer is the foundation of long-term marble care &mdash; it penetrates below the surface, bonds with the calcium carbonate, and blocks moisture and stain pathways from inside the stone. Premium-grade impregnating sealer applied in 1-2 thin coats (not thick &mdash; thick sealer pools on the surface, cures cloudy, and has to be stripped), each coat dried 20-30 minutes before the next. Breathable formulation (essential &mdash; non-breathable sealers trap moisture vapour from the sub-floor and cause the marble to spall). Food-safe, child-safe, pet-safe once cured in 24 hours. The right sealer for the right environment: standard impregnating sealer for general residential, commercial-grade fluoropolymer sealer for high-traffic commercial, slip-resistant sealer additive for wet zones (bathrooms, entrance lobbies).",
  },
  {
    icon: Brush,
    title: "Often-Missed Details",
    text:
      "Our technicians meticulously wipe visible skirting boards and door frames to ensure no polishing residue remains. Diamond-slurry splashes 10-20cm up the skirting during the rotary machine work &mdash; if left, it dries to a chalky alkaline residue that discolours paint and damages varnish. We hand-wipe every linear metre of skirting with a pH-neutral-dampened microfibre cloth, then dry-buff to a clean finish. Door frames, architraves, radiator backs, and pipework collars get the same treatment. The perimeter work that separates a &ldquo;floor polish&rdquo; from a &ldquo;stone reset&rdquo; &mdash; and the work your facilities manager, interior designer, or heritage officer will inspect first on the snagging walk.",
  },
  {
    icon: FileText,
    title: "Inside Window Care",
    text:
      "Cleaning internal glass to maximize natural light and enhance the reflective beauty of your restored floors. The mirror finish of a freshly polished marble floor is wasted if the internal glass partitions, low-level internal glazing, and glass balustrades are smeared &mdash; the floor reflects the smears, not the light. We squeegee internal glass partitions, low-level internal glazing, and glass balustrades with a non-streak glass cleaner. Frame tracks vacuumed. Handles and push-plates sanitised. Window reveals (the plaster returns around the window) wiped down. The finishing touch that makes the floor look as good as it is &mdash; and the touch most contractors skip because it&rsquo;s &ldquo;not in the brief&rdquo;. At MaundyClean, it&rsquo;s in every brief.",
  },
];

export function MarblePolishingSeoChecklist() {
  return (
    <section id="checklist" className="py-16 lg:py-24 bg-[var(--cream)] scroll-mt-20">
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
          <h3 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Marble Polishing &amp; Preservation Checklist
          </h3>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for stone follow a rigorous,
            agency-approved checklist designed to protect your architectural
            investment. From diamond abrasive honing through high-gloss
            mechanical polishing, premium impregnating sealing, perimeter
            detail work, and internal glass care &mdash; below is the scope we
            deliver as standard, regardless of marble type, footprint, or
            occupancy schedule.
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
                className="bg-white rounded-2xl p-7 border border-[var(--border)] shadow-sm flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--brand-light)] flex items-center justify-center shrink-0 mb-4">
                  <Icon className="w-7 h-7 text-[var(--brand)]" />
                </div>
                <h4 className="font-display font-bold text-lg text-[var(--ink)] mb-3 leading-tight">
                  {item.title}
                </h4>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {typeof item.text === "string" ? (
                    <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  ) : (
                    item.text
                  )}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - 3-Step "Hassle-Free" Booking Process
// (Semantic H2: "The MaundyClean 3-Step 'Hassle-Free' Process")
// Per the brief: icons ClipboardCheck / UserCheck / Sparkles
// (FileText imported for safety/template parity even if not used.)
// Brief HAS NO [H3] marker on this heading, so we use <h2>
// (matches the VCT pattern when no [H3] marker is present).
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Stone Analysis",
    description:
      "Contact us for a free site survey. We will assess the condition of your marble and develop a bespoke restoration plan &mdash; the more detail we have, the better the result. On-site stone audit: every marble zone mapped (entrances, hotel lobbies, retail flagships, office receptions, bathrooms, fireplaces, feature walls, staircases), marble type identified (Carrara, Calacatta, Statuary, Crema Marfil, Emperador, Nero Marquina, travertine, limestone, terrazzo), existing damage assessed (etch marks, staining, scratching, chipping, dullness level, sealer integrity), gloss meter reading taken (60-degree GU). Honest advice on expected results &mdash; deep scratches may not fully remove without dipping the floor below level. Polish type and seal type recommended per zone per traffic pattern. Restoration schedule designed (annual polish for high-traffic, biennial for medium, 5-10 year re-seal, annual crystallisation for commercial). Priced per m&sup2; per protocol. Itemised proposal within 2 business days.",
  },
  {
    icon: UserCheck,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with the necessary certifications to handle natural stone restoration. Your allocated marble crew is PVG-checked, uniformed, and trained in marble-specific protocols &mdash; diamond-grit honing, multi-stage mechanical polishing, crystallisation, premium impregnating sealing, etch-mark restoration, scratch &amp; chip repair, poultice stain removal, and heritage-marble methodologies. We brief the crew on your stone audit (marble type, damage map, polish spec, sealer spec), your access window (in-hours presence, after-hours unsupervised, key-safes and alarm codes), your occupancy constraints (occupied property section-by-section work, heritage property listed-building consents), your premium finishes (fireplace surrounds, feature walls, balustrades), and any operational constraints on chemistry or method. The same crew returns every visit, building real knowledge of your floors and your inspection regime.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Foundation",
    description:
      "Experience a floor that feels fresh, safe, and professional, backed by our MaundyClean satisfaction guarantee. You receive a signed stone-care log after every visit (crew name, time in/out, areas treated, diamond grits used, polishing compound, sealer batch, gloss meter reading before/after, and any issues flagged), arrival and departure times, before-and-after photographs for major restoration work, and issue-flagging for low-gloss zones, scratch patterns, etch-mark recurrence, or stain build-up &mdash; before they undermine a client visit, an environmental health inspection, or a guest impression. From &pound;35 per m&sup2; for quarterly maintenance polish through to &pound;75 per m&sup2; for full restoration with 200-grit progressive hone, etch-mark treatment, and re-seal. POA for deep restoration with 50-grit hone and commercial crystallisation. We hold &pound;5m public liability as standard and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function MarblePolishingSeoBooking() {
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
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            The MaundyClean 3-Step &ldquo;Hassle-Free&rdquo; Process
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            We have optimized our booking experience to be uncomplicated and
            straightforward, providing the responsive expertise Scottish
            property owners, facilities managers, and hotel operations teams
            demand. From free site survey and stone analysis through
            specialist crew matching to a pristine foundation &mdash; no
            friction, no waiting, no surprises. Just a restored marble floor,
            every entrance, every lobby, every fireplace, and a compliance
            file that&rsquo;s audit-ready the day a heritage officer, insurer,
            or operations director walks in.
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
              Request Your Free Stone Assessment Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 6 - Solutions for Every Property Milestone
// (Semantic H2: "Solutions for Every Property Milestone")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services.
// All 4 card descriptions are ReactNode values (each contains an
// inline <Link> per the brief) - rendered via the
// typeof sol.description === "string" check.
// Card 4 (Total Surface Care) has TWO inline <Link>s per the brief
// ("Ask about our [Upholstery Cleaning] or [Terrazzo Restoration]").
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
    icon: Home,
    title: "The Sanctuary Standard",
    href: "/services/recurring-home-cleaning",
    image: IMG.leaseRecurring,
    imageAlt:
      "Recurring home cleaning bringing marble-care standards of meticulous pH-neutral maintenance to a Scottish private residence on a weekly or fortnightly basis",
    description: (
      <>
        Maintain your newly polished marble with our{" "}
        <Link
          href="/services/recurring-home-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Recurring Home Cleaning
        </Link>{" "}
        service, customized to ensure the correct non-acidic products are used
        weekly. The same vetted uniformed crew, the same pH-neutral stone-safe
        chemistry, the same signed cleaning log after every visit &mdash; so
        the mirror finish you saw on day one is still mirror-finish on day
        three-hundred-and-sixty-four.
      </>
    ),
    cta: "Explore recurring home cleaning",
  },
  {
    icon: KeyRound,
    title: "Property Transitions",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt:
      "End of tenancy handover clean including marble floor reset for a Scottish commercial or residential unit being vacated",
    description: (
      <>
        Moving into a home with tired stone? Our{" "}
        <Link
          href="/services/move-in-out-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          End of Tenancy Cleaning
        </Link>{" "}
        protocol includes hard floor resets to ensure properties are
        front-line ready. Every surface detailed top-to-bottom, deposit-back
        guarantees met, and the same trusted vetted crew your marble care
        team knows &mdash; so your unit handover starts from a
        &ldquo;speechlessly spotless&rdquo; baseline.
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
      "After builders clean removing heavy layers of builders dust and plaster from newly laid or restored marble floors in a Scottish post-construction site",
    description: (
      <>
        If your home has undergone improvements, our{" "}
        <Link
          href="/services/post-construction-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          After Builders Clean
        </Link>{" "}
        is designed to remove heavy layers of builders&rsquo; dust and plaster
        from your delicate stone surfaces. Fine dust left on a freshly polished
        marble floor acts like sandpaper under foot traffic &mdash; we vacuum,
        damp-wipe, and protect the finish before the dust causes permanent
        micro-scratches.
      </>
    ),
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Total Surface Care",
    href: "/services/upholstery-cleaning",
    image: IMG.leaseUpholstery,
    imageAlt:
      "Upholstery cleaning and tile & grout restoration refreshing soft furnishings and adjacent hard surfaces alongside a newly restored marble floor in a Scottish commercial space",
    description: (
      <>
        Ask about our{" "}
        <Link
          href="/services/upholstery-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Upholstery Cleaning
        </Link>{" "}
        or{" "}
        <Link
          href="/services/tile-grout-cleaning"
          className="font-semibold text-[var(--brand)] underline underline-offset-2 hover:text-[var(--brand-dark)]"
        >
          Terrazzo Restoration
        </Link>{" "}
        to refresh your entire interior environment. Stain-specific chemistry
        for fabric, leather, and microfibre suites, hot-water extraction for
        deep soil, terrazzo and natural-stone tile restoration with the same
        diamond-grit methodology &mdash; and the same &ldquo;Maundy&rdquo;
        standard applied to every fibre, cushion, and adjacent hard surface.
      </>
    ),
    cta: "Explore upholstery & terrazzo care",
  },
];

export function MarblePolishingSeoInterlinking() {
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
            Beyond the marble &middot; property lifecycle
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Milestone
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our stone restoration provides the heartbeat of your property&rsquo;s
            preservation, but we offer specialized resets for major milestones:
            from recurring home cleaning that maintains your sanctuary standard
            through end-of-tenancy handovers and post-renovation dust
            clear-outs to upholstery and adjacent surface refreshes that
            complete the picture. The same trusted, vetted crew can step up
            whenever your property needs more than a standard marble care
            visit.
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
// Section 7 - "Near Me" Location Internal Links
// (Semantic H2: "Marble Polishing Near Me in Scotland")
// Split layout with map image + 36-location grid.
// The "Browse the near-me directory" button links to
// /services/marble-polishing-near-me#locations
// (WITH the #locations anchor) per the brief bug-warning —
// yields 37 anchored near-me links on the main page.
// ============================================================

export function MarblePolishingSeoNearMe() {
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
              Local marble polishing &amp; stone restoration across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Marble Polishing Near Me in Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;marble polishing near me&rdquo; or
              &ldquo;marble restoration near me&rdquo; in Scotland? Maundy
              Clean covers hotel general managers, facilities managers, retail
              operations leads, heritage officers, interior designers, and
              luxury-home owners across the Central Belt, Highlands, Borders,
              and Islands &mdash; from Glasgow&rsquo;s IFSD corporate towers
              and Edinburgh&rsquo;s New Town townhouses to Aberdeen&rsquo;s
              granite-built West End and Dundee&rsquo;s Waterfront, plus
              heritage estates in Stirling, Perth, Inverness, and Ayr. Same
              PVG-checked, uniformed stone specialists, same dedicated crew
              every visit, same rapid response to etch-mark emergencies and
              spill damage &mdash; wherever your property happens to be. Find
              your local marble polishing specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean marble polishing &amp; stone restoration coverage areas"
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
                  Same PVG-checked marble polishing crews, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/marble-polishing-near-me#locations">
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
                Find your local marble polishing crew
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
                    href={`/services/marble-polishing-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> marble care</span>
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
            Our local marble polishing crews operate across Glasgow&rsquo;s
            International Financial Services District, Merchant City and West
            End (luxury homeowners, boutique hotels, and corporate reception
            suites), Edinburgh&rsquo;s New Town, Exchange District and
            Quartermile (5-star hotels, retail flagships, and heritage
            townhouses), Aberdeen&rsquo;s energy-corridor West End and Tullos
            industrial offices (energy operators and corporate headquarters),
            Dundee&rsquo;s Waterfront and City Centre professional services
            buildings (facilities teams and boutique retail), and Scottish
            commercial and residential districts across the Central Belt
            &mdash; from Inverness to Perth, Falkirk to Ayr. Whether
            you&rsquo;re searching for a marble floor restoration in Glasgow,
            a hotel-lobby crystallisation programme in Edinburgh, a
            heritage-marble fireplace repair in Aberdeen, or a Carrara
            bathroom etch-mark removal anywhere in between, Maundy Clean
            assigns a vetted, PAYE-employed, PVG-checked stone care crew that
            stays with you for the long run. Same crew, same standard, same
            locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 8 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Free Stone Assessment Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function MarblePolishingSeoFinalCta() {
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
            Ready to book your free stone assessment?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Free Stone Assessment Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Hotel general managers, facilities managers, retail operations
            leads, heritage officers, interior designers, and luxury-home
            owners &mdash; book a free, no-obligation stone assessment with
            our management team and receive an itemised proposal within 2
            business days. Diamond-grit honing, multi-stage mechanical
            polishing, commercial crystallisation, premium impregnating
            sealing, etch-mark restoration, scratch &amp; chip repair,
            poultice stain removal, pH-neutral stone-safe chemistry,
            heritage-marble protocols, a fixed per-m&sup2; rate that locks
            for 12 months, PVG-checked uniformed professionals who become
            part of your team, and the multi-property one-invoice convenience
            that lets you consolidate every Scottish property on a single
            audit-ready compliance file. From &pound;35 per m&sup2; for
            quarterly maintenance polish through to &pound;75 per m&sup2;
            for full restoration with etch-mark treatment and re-seal. POA
            for deep commercial restoration with crystallisation. No pushy
            sales call, no waiting 24 hours for a callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Free Stone Assessment Today
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
// Section 9 - SEO FAQ block
// (Semantic H2: "Frequently Asked Questions")
// 3 Q&As from the brief (insured technicians, provide own equipment,
// heritage marble floors)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your stone technicians insured?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with extensive experience in the high-value architectural sector. We carry &pound;5m public liability as standard &mdash; covering marble, travertine, limestone, terrazzo, and related natural-stone surfaces &mdash; and every stone specialist is PVG-checked (essential for hotels, retail flagships, heritage properties, listed buildings, and any building where the public, guests, or staff are present), uniformed, and trained in marble-specific protocols: diamond-grit honing, multi-stage mechanical polishing, crystallisation, premium impregnating sealing, etch-mark restoration, scratch &amp; chip repair, poultice stain removal, and heritage-marble methodologies. We hold full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability, and we can name your business on our policy as additional insured &mdash; a common requirement for facilities management contracts, head-lease landlord approvals, retail-chain compliance, and corporate insurance files. Our documentation is audit-ready for environmental health inspection, heritage officer review, and operations director review; we provide signed stone-care logs, gloss meter readings, RAMS, COSHH datasheets, training records, and vetting records (PVG) for your compliance file.",
  },
  {
    q: "Do you provide your own professional equipment?",
    a: "Yes. We supply all our own latest-technology machinery and stone-safe materials, which are included in your competitive quote. From weighted rotary machines (175 RPM) for diamond-grit honing, progressive diamond-grit pads (50, 100, 200, 400, 800, 1500, 3000, 5000 grit), wet-vacuum slurry extractors, air movers for fast curing between seal coats, gloss meters for objective 60-degree GU measurement, hand-tools for chip repair and resin-bonding, to colour-coded pad systems to prevent cross-contamination between marble types and zones. Chemistry is matched to stone type and environment &mdash; pH-neutral maintenance cleaners (Lithofin Easy-Care, Aqua Mix Concentrated Tile Cleaner), tin-oxide and aluminium-oxide polishing compounds, magnesium fluorosilicate crystallisation agents for commercial floors, penetrating impregnating sealers (food-safe, child-safe, pet-safe), poultice carriers (kaolin, diatomaceous earth) and stain-specific chemistry (hydrogen peroxide for organic, solvent for oil-based, rust remover for iron-bearing). COSHH-documented chemistry on file. Non-toxic, biodegradable, surface-safe by default. You provide the floor and the access; we provide everything else &mdash; machinery, chemistry, pads, PPE, signage, and the crew trained to use all of it.",
  },
  {
    q: "Can you restore heritage marble floors?",
    a: "Yes. We specialize in the care and attention required for floors over 100 years old, ensuring traditional methodologies are respected during the restoration. Heritage marble &mdash; whether a Glasgow Victorian tenement hallway, an Edinburgh New Town drawing-room fireplace, an Aberdeen granite-belt hotel lobby, or a Scottish country-house estate entrance &mdash; requires a different approach from modern marble. Lower machine pressure (older substrates can be fragile), finer starting grit (200-grit rather than 50-grit &mdash; the heritage stone is often already thin from a century of polishing), pH-neutral chemistry throughout (no aggressive alkaline strippers), breathable impregnating sealers only (non-breathable sealers trap sub-floor moisture vapour and cause heritage stone to spall), and listed-building consent checks where required (Category A or B listed buildings in Scotland may require prior consent from the local planning authority for any work that affects the historic fabric). We document every heritage project with before-and-after photography, method statements, and a stone-care log that becomes part of the building&rsquo;s maintenance history &mdash; the audit trail a heritage officer, conservation architect, or insurance underwriter will ask to see.",
  },
];

export function MarblePolishingSeoFaq() {
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
            Marble polishing &amp; stone restoration &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our marble polishing clients ask
            most often. Can&rsquo;t find what you need? Call us on{" "}
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
                Request Your Free Stone Assessment Today
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

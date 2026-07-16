"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Leaf,
  Star,
  Clock,
  Sparkles,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Crown,
  KeyRound,
  Hammer,
  UserCheck,
  ClipboardCheck,
  FileText,
  HeartPulse,
  SprayCan,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches bank-financial + corporate-facility image pool)
// ============================================================
const IMG = {
  heroWide:
    "https://sfile.chatglm.cn/images-ppt/4b2ba7df1e86.jpg",
  introSplit:
    "https://sfile.chatglm.cn/images-ppt/3e21505dadac.jpg",
  whyCrew:
    "https://sfile.chatglm.cn/images-ppt/92ca5d04541e.jpg",
  checklistFront:
    "https://sfile.chatglm.cn/images-ppt/c915ed688be7.jpg",
  checklistCounter:
    "https://sfile.chatglm.cn/images-ppt/dea1c37b8960.jpeg",
  checklistKitchen:
    "https://sfile.chatglm.cn/images-ppt/578618d70f52.png",
  leaseSpring:
    "https://sfile.chatglm.cn/images-ppt/ee5b0f8279a8.jpg",
  leaseTenancy:
    "https://sfile.chatglm.cn/images-ppt/9a55cbb5acf7.jpg",
  leaseBuilders:
    "https://sfile.chatglm.cn/images-ppt/853d939edb7b.jpg",
  leaseAntiviral:
    "https://sfile.chatglm.cn/images-ppt/8a7c4d6e0b51.jpg",
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
// Semantic H1: "Professional Showroom Deep Cleaning Services Scotland"
// ============================================================

export function ShowroomSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean uniformed, vetted cleaning team resetting a Scottish showroom before opening"
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
            Showroom Deep Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Showroom Deep Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Pristine Presentation, Technical Surface Care, and the Maundy Tradition of Excellence
            for Scottish Showrooms. In the world of high-end retail and automotive sales, your
            showroom is the physical manifestation of your brand&rsquo;s quality &mdash; a
            &ldquo;standard clean&rdquo; is never enough when your goal is to showcase luxury
            assets. MaundyClean keeps your environment &ldquo;speechlessly spotless&rdquo;,
            reflecting the prestige of the products you sell.
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
                Request Your Bespoke Quote Today
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
                View Our Commercial Cleaning Checklist
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
              <UserCheck className="w-4 h-4 text-[var(--gold)]" /> Same Trusted Team Every Visit
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[var(--gold)]" /> Specialist Surface &amp; Brass Restoration
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Out-of-Hours, 5 to 7 Days a Week
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
// Split-layout with aspect-[4/3] image on the left and the two
// verbatim intro paragraphs on the right (paragraph 2 contains
// the two inline <Link>s to /services/move-in-out-cleaning for
// "End of Tenancy Cleaning" and /services/deep-house-cleaning
// for "Deep Cleaning Services").
// ============================================================

export function ShowroomSeoIntro() {
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
                alt="Maundy Clean uniformed, vetted crew resetting a Scottish showroom after closing"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Strategic Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  The same level of technical intimacy, &ldquo;same-staff&rdquo; consistency, and
                  &ldquo;sanctuary&rdquo; care we bring to Scotland&rsquo;s most demanding property
                  transitions &mdash; applied to your car dealership, kitchen showroom, bathroom
                  showroom, furniture showroom, or luxury retail floor.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m cover</div>
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
              Showroom deep cleaning &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Showrooms
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the world of high-end retail and automotive sales, your showroom is the physical
              manifestation of your brand&rsquo;s quality. A &ldquo;standard clean&rdquo; is never
              enough when your goal is to showcase luxury assets. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we provide a
              premium showroom deep cleaning service that ensures your environment is
              &ldquo;speechlessly spotless&rdquo;, reflecting the prestige of the products you sell.
            </p>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75]">
              While we are the recognized authority in{" "}
              <Link
                href="/services/move-in-out-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                End of Tenancy Cleaning
              </Link>{" "}
              and{" "}
              <Link
                href="/services/deep-house-cleaning"
                className="font-semibold text-[var(--brand)] hover:text-[var(--brand-dark)] underline underline-offset-4 decoration-[var(--brand)]/30"
              >
                Deep Cleaning Services
              </Link>{" "}
              for Scotland&rsquo;s most demanding property transitions, we bring that same level of
              technical intimacy, &ldquo;same-staff&rdquo; consistency, and &ldquo;sanctuary&rdquo;
              care to the commercial sector. Serving Glasgow, Edinburgh, and the Central Belt, we
              act as your strategic partner in ongoing quality control and relationship management.
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
                { label: "Vetted uniformed crews", value: "100%" },
                { label: "From per hour", value: "&pound;15" },
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
// Section 2 - Why MaundyClean is the Authority in Showroom Presentation
// (Semantic H2: "Why MaundyClean is the Authority in Showroom Presentation")
// Image+copy split layout with 4 trust cards.
// Per the brief: icons UserCheck / Sparkles / ClipboardCheck / Leaf
// ============================================================

const TRUST_CARDS = [
  {
    icon: UserCheck,
    title: "The Same Trusted Team Every Visit",
    description:
      "Reliability is built on familiarity. We ensure the same vetted professionals manage your showroom every time. This allows our team to build a deep understanding of your specific display layouts, lighting fixtures, and high-value materials &mdash; from floor-to-ceiling glass partitions and mirror walls through to polished concrete floors, lacquered car paint, leather upholstery, chrome tapware, marble worktops, and brass-trimmed display cabinetry. When the regular crew lead is on annual leave, we send a trained backup who has been briefed on your site, your display layouts, your lighting fixtures, and your access preferences &mdash; and we tell you in advance. Never a rotating cast of agency strangers handling your &pound;60,000 display car or your &pound;15,000 kitchen, never a &ldquo;new face every week&rdquo; on your CCTV.",
  },
  {
    icon: Sparkles,
    title: "Specialist Surface &amp; Brass Restoration",
    description:
      "High-end showrooms often feature unique materials. Unlike generic cleaners, our teams are trained in brass restoration and the maintenance of delicate finishes, ensuring your fixtures shine as brightly as your products. We use the right product for every surface: microfibre cloths on high-gloss units (never paper towels &mdash; they scratch), specialist glass cleaner on mirrors and screens (streak-free), pH-neutral stone cleaner on marble and granite (never vinegar &mdash; it etches), detailing products on cars (Autoglym, Meguiar&rsquo;s), and brass polish on display cabinetry hardware, door furniture, and light fittings. Our team leaders run a flashlight test on high-gloss surfaces (a torch beam at an angle reveals dust and smears invisible to the naked eye) and a black-glove test on chrome (any residue shows up on a black cotton glove) before sign-off. The Maundy Standard, every visit.",
  },
  {
    icon: ClipboardCheck,
    title: "Total Hands-On Management",
    description:
      "We pride ourselves on a &ldquo;professional, thorough, and tailored&rdquo; approach. Our management team conducts regular inspections to ensure our &ldquo;Maundy Standard&rdquo; of excellence is strictly adhered to. Every showroom client gets a dedicated account manager who knows your facility, your team, your display rotation schedule, and your access protocols &mdash; direct mobile number, 24-hour response, quarterly on-site walk-throughs alongside your showroom manager. After every visit you receive a signed cleaning log (operative signature, showroom-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a smudge on a shower screen, a fingerprint on a door handle, or a dust bloom on a display pedestal &mdash; before they undermine a customer&rsquo;s first impression. We offer a free re-clean within 24 to 48 hours if you are not 100% satisfied.",
  },
  {
    icon: Leaf,
    title: "Safe for Staff and Clients",
    description:
      "Your health is paramount. We utilize only certified child-safe and pet-safe products. This ensures a fresh, non-toxic environment that is welcoming for families and clients without the harsh chemical odors common in industrial cleaning. Our HSE-compliant chemistry is COSHH-documented and food-safe where required (kitchen showroom displays, hospitality touchpoints); we use pH-neutral cleaners on polished concrete and stone, alcohol-free anti-static screen cleaners on lighting control panels and interactive displays, eco-labelled alternatives on customer seating and fabric suites, and EN 14476 virucidal disinfectant with a verified 60-second contact time on high-touch points like door handles, payment terminals, and reception desks. VOC-low, fragrance-controlled, and never the bleach-and-ammonia tang that signals &ldquo;cleaned by a contractor&rdquo; the moment a customer walks in.",
  },
];

export function ShowroomSeoWhy() {
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
                alt="Maundy Clean showroom cleaning crew &mdash; uniformed, vetted and trained in technical surface care, brass restoration, and luxury retail presentation"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-dark)]/55 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Crown className="w-4 h-4 text-[var(--brand)]" />
                  <span className="text-xs font-bold text-[var(--ink)] uppercase tracking-wider">
                    A Strategic Partner, Not an Impersonal Agency
                  </span>
                </div>
                <p className="text-xs text-[var(--muted-foreground)] leading-relaxed">
                  Employed, vetted, uniformed, and trained in technical surface care, brass
                  restoration, and luxury-retail presentation. Same crew every visit &mdash; never a
                  rotating cast of strangers handling your display products.
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
                  <div className="text-[10px] text-[var(--muted-foreground)]">Public liability</div>
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;5m cover</div>
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
              Why MaundyClean is the Authority in Showroom Presentation
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Many commercial cleaning companies rely on high-turnover agency staff, leading to
              inconsistent standards that can damage your brand&rsquo;s image. MaundyClean addresses
              these weaknesses by focusing on vocational training and professional reliability. We
              combine vetted uniformed teams, the same dedicated crew every visit, specialist
              surface-care and brass-restoration training, child-safe and pet-safe eco chemistry,
              and out-of-hours flexibility as standard &mdash; so the high-end showroom your
              customers walk into looks, feels, and smells premium every single day.
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
                      <p
                        className="text-sm text-[var(--muted-foreground)] leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: card.description }}
                      />
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
                  <p
                    className="text-sm lg:text-base text-[var(--muted-foreground)] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
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
// Section 3 - Our Total Showroom Maintenance & Technical Checklist
// (Semantic H2: "Our Total Showroom Maintenance & Technical Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Display & Public Facing Areas
//   2. Technical Floor & Fabric Care
//   3. Often-Missed Technical Details
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Sparkles,
    image: IMG.checklistFront,
    imageAlt: "Maundy Clean crew restoring glass partitions, display cases and mirrors in a Scottish showroom to a streak-free crystal-clear finish",
    title: "1. Display &amp; Public Facing Areas",
    description:
      "The customer forms their &ldquo;quality&rdquo; judgement of your brand within the first eight seconds of walking in &mdash; long before they touch a product or speak to a salesperson. A fingerprint on a glass partition, a smear on a mirror wall, a dust bloom on a display pedestal, or a streak on a floor-to-ceiling window undermines the prestige of a &pound;60,000 display car or a &pound;15,000 kitchen in an instant. Our display-area protocol uses specialist glass cleaner, microfibre detailing, and a flashlight-test sign-off on every high-gloss surface &mdash; applied by trained crews who understand the visual standards of high-end retail.",
    points: [
      {
        title: "Glass &amp; Mirror Restoration",
        text: "Meticulous cleaning of all display cases, partitions, and mirrors to a streak-free, crystal-clear finish. We squeegee (never wipe) every floor-to-ceiling glass partition, mirror wall, display-cabinet glazing, shower screen, and car-showroom frontage &mdash; specialist glass cleaner, lint-free microfibre, and a final squeegee pass that leaves no streak. Sticker residue, sellotape marks, and promotional-window clingfilm are removed with a food-safe citrus degreaser, never a scraper that could etch the surface.",
      },
      {
        title: "Surface Polishing",
        text: "Detailed dusting and polishing of all furniture, pedestals, and shelving. We move items to clean &ldquo;behind and underneath&rdquo; to ensure no dust traps remain. Display pedestals, side tables, reception desks, plinth tops, and shelving units are damp-wiped with a pH-neutral sanitiser, dried with a lint-free cloth, and finished with a food-safe beeswax on timber surfaces. We move display items (with your showroom manager&rsquo;s permission) to clean underneath and behind &mdash; a dust trap behind a kitchen display unit or under a furniture plinth is the kind of detail a high-end customer notices subconsciously and judges silently.",
      },
      {
        title: "Window Cleaning",
        text: "Professional cleaning of the inside and outside of your windows to maximize natural light and street-level &ldquo;WOW factor&rdquo;. Inside glazing squeegeed every visit; external window cleaning scheduled weekly (or daily for high-street units exposed to bus-stop and traffic grime). A streaked or spotted street-facing window kills the &ldquo;WOW factor&rdquo; the moment a customer approaches your showroom &mdash; we treat the glazing as the most important showcase surface of every visit, because it&rsquo;s the first one a customer sees.",
      },
    ],
  },
  {
    icon: SprayCan,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean crew deep cleaning showroom hard floors, polished concrete, marble and tile, and refreshing client seating upholstery in Scotland",
    title: "2. Technical Floor &amp; Fabric Care",
    description:
      "Showroom floors and soft furnishings are the highest-wear, highest-visibility surfaces in any high-end retail environment &mdash; customer footfall, sales-team traffic, delivery trolleys, and product repositioning all leave their mark within hours. Our technical floor and fabric protocol uses the right chemistry for every surface type: dust-mop and neutral-cleaner scrub-and-buff on polished concrete, vacuum and flat-mop on tile, wood-safe microfibre mop on hardwood (no steam, no water), and hot-water extraction on carpet and upholstery. We never use a one-size-fits-all chemistry on a luxury showroom floor.",
    points: [
      {
        title: "Deep Carpet Cleaning",
        text: "Intensive vacuuming and shampooing to remove city-center dust and high-traffic stains, bringing old or dirty carpets back to life. Commercial-grade HEPA-filtered upright (Sebo BS36/BS46, Henry HVR200) &mdash; no beater bar on premium wool carpets in lounge-style showroom areas, where it can damage the fibre. Periodic hot-water extraction on carpeted customer seating areas, sales desks, and entrance matting to lift coffee-spill marks, city-centre grime, and the deep dust load that settles into carpet fibre over a busy trading week. Stain removal with a pH-appropriate spotter, never bleach.",
      },
      {
        title: "Hard Floor Maintenance",
        text: "Meticulous cleaning and buffing of hard floors, including specialized care for marble, tile, or polished concrete. Polished concrete: dust-mopped, machine-scrubbed with a neutral cleaner, then buffed to a high-shine finish. Marble and granite: pH-neutral stone cleaner (never vinegar &mdash; it etches), soft microfibre flat-mop, periodic re-sealing per manufacturer spec. Porcelain and ceramic tile: vacuumed, mopped with a neutral cleaner, grout lines periodically deep-cleaned with a dedicated grout brush. Hardwood: wood-safe cleaner and microfibre mop only (no steam, no water). Vinyl: swept, mopped with a vinyl-safe cleaner. The right chemistry for the right floor &mdash; every time.",
      },
      {
        title: "Upholstery Care",
        text: "Deep cleaning of client seating areas and fabric suites to remove germs and unwanted odors. Lounge-style customer seating, sales-desk chairs, leather sofas, and fabric suites are hot-water-extracted or low-moisture-encapsulation cleaned (depending on fabric type) to lift body oils, food odours, and the deep dust load that builds up in a busy showroom. Leather seating is wiped with a pH-neutral conditioner; timber-frame furniture is detailed; cushion covers are plumped, rotated, and re-positioned. A stained or odour-marked customer seat undermines the perceived quality of the &pound;15,000 sofa behind it &mdash; we treat soft furnishings as part of the display.",
      },
    ],
  },
  {
    icon: Search,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean crew detailing skirting boards, door frames, window sills and chrome fixtures in a Scottish showroom washroom and back-of-house area",
    title: "3. Often-Missed Technical Details",
    description:
      "The surfaces that turn a &ldquo;clean showroom&rdquo; into a &ldquo;speechlessly spotless&rdquo; showroom are the ones most cleaners skip: skirting boards, door frames, window sills, light switches, chrome tapware, ceramic sanitaryware, and the customer-washroom zone. These are the surfaces a high-end customer notices subconsciously and judges silently &mdash; a dusty skirting board or a smudged chrome tap chips away at the prestige of your brand in ways that are hard to recover. Our standard service includes every one of these details on every visit, with a flashlight-test sign-off before we leave.",
    points: [
      {
        title: "Visible Skirting Boards &amp; Sills",
        text: "Our cleaners meticulously wipe all skirting boards, door frames, and window sills as part of our standard service. Skirting boards are damp-wiped with a pH-neutral cleaner; door frames, architraves, switch plates, and handrails are detailed; window sills are vacuumed then damp-wiped; ceiling light fixtures, air-conditioning vents, and extractor grilles are dusted and degreased with extendable HEPA-filtered attachments (we don&rsquo;t just brush the dust back into the air). Cable trays, picture frames, display-plinth edges, and merchandising-stand trims are wiped down. A dusty vent or a stained sill undermines a polished showroom within seconds &mdash; these are the surfaces that high-end customers notice subconsciously.",
      },
      {
        title: "Washroom &amp; Janitorial Supplies",
        text: "Deep sanitization of all facilities, including buffing chrome to a high shine and disinfecting all ceramic items. Toilets are descaled with a non-abrasive acid, disinfected with an EN 1276-certified bactericide, and polished. Tiles and grout are scrubbed, partition screens are disinfected, mirrors are squeegeed, and floors are mopped with a slip-resistant sanitiser. Chrome taps, soap dispensers, towel dispensers, hand-dryer nozzles, door furniture, and cubicle locks are buffed with a streak-free stainless-steel cleaner to a high shine. Sanitary bins are checked, emptied, and replaced. Consumables (toilet paper, hand soap, paper towel, hand sanitiser) are checked and replenished on every visit, or we can manage consumable restocking for an additional monthly fee &mdash; you never run out during trading.",
      },
    ],
  },
];

export function ShowroomSeoChecklist() {
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
            Beyond the standard surface wipe
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Our Total Showroom Maintenance &amp; Technical Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for showrooms follow a rigorous, agency-approved checklist
            designed to address the high-visibility requirements of luxury retail. We deliver
            technical depth in every area of your showroom &mdash; from the floor-to-ceiling glass
            partitions, mirror walls, and display pedestals through the technical floor and fabric
            care zone to the often-missed skirting boards, sills, and customer washrooms. Below is
            the scope we deliver as standard, regardless of showroom size, footprint, or daily
            customer volume.
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
                  <p
                    className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
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
                            &mdash; <span dangerouslySetInnerHTML={{ __html: point.text }} />
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
// Per the brief: icons ClipboardCheck / FileText / Sparkles
// ============================================================

const BOOKING_STEPS = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Site Survey & Bespoke Plan",
    description:
      "Contact us to organize a free site survey. We walk your showroom with your showroom manager and your facilities team, identify your display layouts, your lighting fixtures, your high-value materials (polished concrete, marble, lacquered paint, leather upholstery, chrome tapware, mirror walls), your access windows (early morning, evening, or split shift), and your quality-control checkpoints. We develop a bespoke schedule and standards of excellence tailored to your showroom&rsquo;s unique operational needs. We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained technicians with in-depth knowledge of &ldquo;showcasing&rdquo; requirements and high-standard cleaning. Your allocated crew lead is briefed on your facility layout, your display rotation schedule, your lighting fixtures, your high-gloss and chrome surfaces, and your high-traffic &ldquo;risky&rdquo; areas (customer washroom, customer seating, reception desk, floor-to-ceiling glazing) &mdash; so cleaning happens around your trading hours, not through them. The same crew returns for every scheduled session, building real knowledge of your showroom&rsquo;s routines, your signage protocol, your screen-sensitive surfaces, and your access preferences. We arrive in liveried vehicles, in uniform with photo I.D., with commercial-grade HEPA-filtered equipment, microfibre flat-mop systems, specialist glass cleaners, brass polish, and COSHH-compliant, child-safe, pet-safe cleaning chemistry. Operatives are PVG-checked, uniformed, and trained in showroom-specific protocols before stepping foot on site.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Environment",
    description:
      "Experience a showroom that looks, smells, and feels premium every single day, backed by our MaundyClean satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, showroom-manager counter-signature on request), arrival and departure times, tasks completed, and any issues flagged &mdash; like a smudge on a shower screen, a fingerprint on a door handle, a dust bloom on a display pedestal, or a streak on a floor-to-ceiling window &mdash; before they undermine a customer&rsquo;s first impression. From &pound;15 per hour for a small single-showroom site through to a fully bespoke retainer for a multi-site dealership network. We hold &pound;5m public liability as standard (with higher limits available for premium contracts) and can name your business on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function ShowroomSeoBooking() {
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
            We have optimized our booking experience to be uncomplicated and straightforward,
            providing the responsive support Scottish businesses demand. From site survey and
            bespoke plan to first clean in under a week &mdash; no friction, no waiting, no
            surprises. Just a pristine showroom, every visit, on schedule, and a customer experience
            that reflects the prestige of the products you sell.
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
              Request Your Bespoke Quote Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 5 - Solutions for Every Property Milestone
// (Semantic H2: "Solutions for Every Property Milestone")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: KeyRound,
    title: "New Location Launch &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty showroom unit being deep cleaned for lease handover and grand opening by Maundy Clean in Scotland",
    description:
      "Opening a new showroom? Our End of Tenancy Cleaning protocol ensures the space is front-line ready for your grand opening. We work to the letting agent&rsquo;s inventory, restore the unit to its original condition, and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to take on a new car dealership, kitchen showroom, bathroom showroom, furniture showroom, or luxury retail floor.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish showroom before reopening day",
    description:
      "If your showroom has undergone refitting or home improvements, our After Builders Clean is designed to remove heavy layers of builders&rsquo; dust and grime. Fine dust left on a display car, a marble worktop, or a floor-to-ceiling glass partition undermines the customer-trust signal the moment the showroom re-opens &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage your products or your customers&rsquo; first impression on reopening day.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: Sparkles,
    title: "Seasonal Resets &middot; One-Off Spring Clean",
    href: "/services/spring-cleaning",
    image: IMG.leaseSpring,
    imageAlt: "Top-to-bottom spring clean of a Scottish showroom ahead of peak sales season by Maundy Clean",
    description:
      "Prepare for peak sales periods with a One-Off Spring Clean for a comprehensive top-to-bottom refresh. We strip back the showroom to its bare display surfaces, deep-clean every zone (glass, floors, fabrics, washrooms, behind and underneath), and finish with a flashlight-test sign-off on every high-gloss surface &mdash; the right reset before a new collection launch, a January sale, a spring event, or a customer open weekend.",
    cta: "Explore one-off spring clean",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets &middot; Antiviral Sanitisation",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt: "Antiviral sanitisation treatment being applied to high-touch showroom surfaces, customer seating and reception desks in Scotland",
    description:
      "Ask about our Antiviral Sanitisation services to keep your staff and customers safe from germs and viruses. EN 14476 virucidal chemistry is fogged and wiped across every high-touch surface in your showroom &mdash; from door handles, payment terminals, and reception desks to customer seating, washroom fittings, and display touchscreens &mdash; reducing the spread of seasonal colds, flu, and norovirus among your staff and customers during peak trading and outbreak response.",
    cta: "Explore antiviral sanitisation",
  },
];

export function ShowroomSeoInterlinking() {
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
            Beyond the daily clean &middot; showroom milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Milestone
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning is the heartbeat of your showroom&rsquo;s presentation, but we offer
            specialized &ldquo;resets&rdquo; for major property milestones &mdash; from new location
            launches and post-renovation dust clear-outs to seasonal spring resets and antiviral
            hygiene resets. The same trusted, vetted crew can step up whenever your showroom needs
            more than a standard visit, with the same child-safe, pet-safe protocols in force.
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
                    <p
                      className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-4"
                      dangerouslySetInnerHTML={{ __html: sol.description }}
                    />
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
// (Semantic H2: "Showroom Cleaning Near Me, Across Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function ShowroomSeoNearMe() {
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
              Local showroom cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Showroom Cleaning Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;showroom cleaning near me&rdquo; or &ldquo;car showroom cleaning
              company near me&rdquo; in Scotland? Maundy Clean covers car dealerships, kitchen
              showrooms, bathroom showrooms, furniture showrooms, and luxury retail floors across
              the Central Belt, Highlands, Borders, and Islands. Same vetted uniformed crews, same
              specialist surface-care and brass-restoration training, same dedicated crew every
              visit &mdash; wherever your showroom happens to be. Find your local showroom cleaning
              specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean showroom cleaning service coverage areas"
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
                  Same vetted uniformed crews, same 100% satisfaction guarantee &mdash; from
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
                <Link href="/services/showroom-cleaning-near-me">
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
                Find your local showroom crew
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
                    href={`/services/showroom-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> showroom</span>
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
            Our local showroom cleaning crews operate across Glasgow&rsquo;s Style Mile (Buchanan
            Street, Merchant City, Ingram Street), Edinburgh&rsquo;s New Town and George Street,
            Aberdeen&rsquo;s Union Street and Holburn Junction, Dundee&rsquo;s City Square and
            Perth Road retail corridor, and the Highlands &mdash; from Inverness to Perth, Falkirk
            to Ayr. Whether you&rsquo;re searching for daily display-product detailing in Glasgow,
            after-hours deep cleaning in Edinburgh, car showroom floor polishing in Aberdeen, or
            neighbourhood kitchen showroom cleaning anywhere in between, Maundy Clean assigns a
            vetted, PAYE-employed crew that stays with you for the long run. Same crew, same
            standard, same locked-in rate for 12 months.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// Section 7 - Final SEO CTA strip (companion to ServiceFinalCta)
// (Semantic H2: "Request Your Bespoke Quote Today")
// Placed BEFORE the FAQ sections so the page does not end with two stacked CTAs
// ============================================================

export function ShowroomSeoFinalCta() {
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
            Ready to request your bespoke quote?
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight mb-4">
            Request Your Bespoke Quote Today
          </h2>
          <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
            Book a free, no-obligation site survey with our management team and receive an itemised
            proposal within 2 business days. Vetted uniformed crews, the same dedicated team every
            visit, specialist surface-care and brass-restoration training, child-safe and pet-safe
            chemistry, signed cleaning logs, &pound;5m public liability as standard (with higher
            limits available for premium contracts), and a 100% satisfaction guarantee &mdash; from
            &pound;15 per hour for a small single-showroom site through to a fully bespoke
            multi-site dealership network retainer. No pushy sales call, no waiting 24 hours for a
            callback.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--ink)] shadow-brand gap-2 px-7 h-12 text-base"
              asChild
            >
              <Link href="/quote">
                Request Your Bespoke Quote Today
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
                View Our Commercial Cleaning Checklist
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
// 3 Q&As from the brief (insured for high-value showrooms,
// provide own professional equipment, out-of-hours)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for high-value showrooms?",
    a: "Absolutely. MaundyClean is a fully insured, registered professional cleaning company with years of experience serving both the residential and commercial sectors across Scotland. We hold &pound;5m public liability cover as standard (with higher limits available for premium showroom contracts and multi-site dealership networks), full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability. Every crew member carries Disclosure Scotland PVG scheme membership, wears an official uniform with photo I.D., is re-vetted annually, and is trained in showroom-specific protocols &mdash; specialist surface care, brass restoration, glass-and-mirror squeegee technique, hard-floor chemistry, upholstery hot-water extraction, and the &ldquo;Maundy Standard&rdquo; flashlight-test sign-off on every high-gloss surface. We can name your business on our policy as additional insured &mdash; a common requirement for car dealership leasehold agreements, kitchen showroom franchise contracts, and luxury retail landlord consent &mdash; and we provide enhanced background checks for staff handling high-value display products (display cars, designer kitchens, premium furniture suites, jewellery and watch showrooms). Certificates of insurance and our full compliance file (COSHH datasheets, risk assessments, method statements, training records, vetting records, liability certificates) are available on request; we will not begin work until your facilities team and your compliance team have the documentation they need.",
  },
  {
    q: "Do you provide your own cleaning equipment?",
    a: "Yes. We supply all our own professional-grade equipment and supplies, which are included in your competitive quote. Every crew arrives in a liveried van with commercial-grade HEPA-filtered vacuums (Sebo BS36/BS46, Henry HVR200), microfibre flat-mop systems with separate dirty-water extraction (no double-dipping), colour-coded cloths (red for high-contamination touchpoints like door handles and washroom fittings, green for customer-facing surfaces like display pedestals and reception desks, yellow for washroom and kitchenette, blue for back-of-house and staff areas), HSE-compliant chemicals with COSHH datasheets on file, PPE, squeegees for windows and mirrors (never spray-and-wipe, which leaves streaks), specialist glass cleaner, microfibre detailing cloths for high-gloss units (never paper towels &mdash; they scratch), pH-neutral stone cleaner for marble and granite (never vinegar &mdash; it etches), brass polish for display cabinetry hardware and door furniture, 180&deg;C dry-steam sanitizers for tile, grout, and chrome, and detailing products on cars (Autoglym, Meguiar&rsquo;s). We use non-toxic, child-safe, pet-safe products by default in customer-facing and staff areas, with eco-labelled alternatives for customer seating areas and fabric suites. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee so you never run out during trading.",
  },
  {
    q: "Can you work out-of-hours?",
    a: "Yes. We offer flexible appointments across 5 to 7 days a week, including early mornings or evenings, to suit your showroom&rsquo;s opening hours. The most common windows are early-morning pre-open (6am-8am) for a front-line ready reset before customer trading begins, evening post-close (6pm-8pm) for a full deep turnover after the day&rsquo;s footfall, or full out-of-hours (9pm-midnight) service for deep floor care, hot-water extraction of carpets and upholstery, and detail work that&rsquo;s difficult to deliver around live customers. We can also split: light touch during the day (washroom checks and touchpoint wipes every couple of hours), deep clean after hours. Showroom cleaning has to happen outside opening hours so customers never see wet floors, cleaning equipment, or a half-cleaned display &mdash; the prestige signal is &ldquo;always immaculate&rdquo;, not &ldquo;just been cleaned&rdquo;. We arrive in liveried vehicles, in uniform with photo I.D., with commercial-grade equipment, and we sign in at arrival and out at departure. Your account manager will advise on the best schedule for your specific showroom footprint, density, and opening hours.",
  },
];

export function ShowroomSeoFaq() {
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
            Showroom cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our showroom cleaning clients ask most often.
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
                Request Your Bespoke Quote Today
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
                View Our Commercial Cleaning Checklist
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

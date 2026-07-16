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
  Users,
  ClipboardCheck,
  FileText,
  HeartPulse,
  Landmark,
  Building2,
  SprayCan,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/site-data";

// ============================================================
// Images - hand-picked from in-house search service
// (matches gym-fitness + corporate-facility image pool)
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
  leaseDeep:
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
// Semantic H1: "Professional Bank & Financial Office Cleaning Services Scotland"
// ============================================================

export function BankFinancialSeoHeroBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMG.heroWide}
          alt="Maundy Clean uniformed, security-cleared cleaning team resetting a Scottish bank branch before opening"
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
            Bank &amp; Financial Office Cleaning &middot; Glasgow &middot; Edinburgh &middot; Central Belt
          </motion.div>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Professional Bank &amp; Financial Office Cleaning Services Scotland
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="mt-5 text-base lg:text-lg text-white/85 max-w-2xl leading-relaxed"
          >
            Secure, Meticulous, and Trusted Maintenance for High-Stakes Financial Environments.
            In the financial sector, a clean and well-maintained environment is a direct extension
            of your brand&rsquo;s credibility &mdash; trust is built from the moment a customer
            walks through your doors, and maintaining an immaculate premise is essential for
            presenting a polished, professional image.
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
              <ShieldCheck className="w-4 h-4 text-[var(--gold)]" /> Fully Vetted &amp; Security-Cleared
            </div>
            <div className="flex items-center gap-1.5">
              <Leaf className="w-4 h-4 text-[var(--gold)]" /> PCI-DSS-Aware, GDPR-Aligned
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[var(--gold)]" /> Pre-Open &amp; Post-Close, 7 Days
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

export function BankFinancialSeoIntro() {
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
                alt="Maundy Clean uniformed, vetted and security-cleared crew resetting a Scottish bank or financial office after closing"
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
                  &ldquo;Maundy&rdquo; tradition of service we bring to Scotland&rsquo;s finest
                  residences &mdash; applied to your bank, building society, or financial office.
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
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;10m cover</div>
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
              Bank &amp; financial office care &middot; Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-5">
              The MaundyClean Standard for Scottish Financial Institutions
            </h2>
            <p className="text-base lg:text-lg text-[var(--ink)]/85 leading-[1.75] mb-5">
              In the financial sector, a clean and well-maintained environment is a direct extension
              of your brand&rsquo;s credibility. Trust is built from the moment a customer walks
              through your doors, and maintaining an immaculate premise is essential for presenting a
              polished, professional image. At{" "}
              <strong className="font-semibold text-[var(--ink)]">MaundyClean</strong>, we provide a
              specialist banking and financial institution cleaning service designed to handle the
              unique challenges of high-traffic financial spaces across Glasgow, Edinburgh, and the
              Central Belt.
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
              for Scotland&rsquo;s most prestigious properties, we bring that same level of
              technical intimacy and meticulous care to the secure world of finance. We act as a
              strategic partner, ensuring your facility remains safe, welcoming, and
              &ldquo;speechlessly spotless&rdquo; for both personal and business customers.
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
                { label: "Vetted &amp; security-cleared crews", value: "100%" },
                { label: "From per hour", value: "&pound;19" },
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
// Section 2 - Why MaundyClean is Scotland's Choice for Secure Financial Cleaning
// (Semantic H2: "Why MaundyClean is Scotland's Choice for Secure Financial Cleaning")
// Image+copy split layout with 4 trust cards.
// Per the brief: icons ShieldCheck / UserCheck / Users / Clock
// ============================================================

const TRUST_CARDS = [
  {
    icon: ShieldCheck,
    title: "Fully Vetted & Security-Cleared Professionals",
    description:
      "Security is our primary priority. Every MaundyClean operative is fully vetted, background-checked (Disclosure Scotland PVG scheme membership, with annual re-vetting), and trained to work safely within sensitive financial areas, ensuring your premises and data remain protected at all times. We carry &pound;10m public liability for financial services contracts (higher than our standard &pound;5m), full employer&rsquo;s liability, professional indemnity, and we name your institution on our policy as additional insured. PCI-DSS-aware operatives never touch desk paperwork, never photograph screens, never handle USB devices, never enter cardholder-data zones unsupervised. GDPR-aligned confidential-waste protocols are built into every visit. We have never had a PCI-DSS, GDPR, or security incident in 11 years of cleaning for financial services clients.",
  },
  {
    icon: UserCheck,
    title: "Discretion and Professionalism",
    description:
      "Our staff are uniformed, carry official photo-I.D. badges, and are trained in the &ldquo;Maundy&rdquo; tradition of service and care. We operate with the highest level of discretion, supporting a professional appearance that reflects the quality of your organization. Operatives arrive in liveried vehicles, sign in at arrival and out at departure, and never discuss client business outside the site. Anti-bribery and confidentiality clauses are written into every employment contract. Photo evidence of any defect (a leaking tap, a blown bulb, a cracked partition) is captured only with explicit branch-manager permission and stored under access control. Audit-ready documentation is provided every visit, including arrival and departure times, tasks completed, and any issues flagged before they become compliance findings.",
  },
  {
    icon: Users,
    title: "The Same Trusted Team",
    description:
      "Reliability is built on familiarity. We ensure the same vetted team manages your branch or office to build a deep understanding of your specific security protocols, keyholder register, dual-control procedures, and facility layout. The same crew lead returns every visit, building real accountability to your compliance file, your branch-manager relationship, and your member-experience score. When the regular crew lead is on annual leave, we send a trained backup who has been briefed on your site, your restricted zones (vault, strongroom, server room, cash-handling), your signage protocol, and your access preferences &mdash; and we tell you in advance. Never a rotating cast of agency strangers handling your secure environment, never a &ldquo;new face every week&rdquo; on your CCTV.",
  },
  {
    icon: Clock,
    title: "Flexible Operational Hours",
    description:
      "Banks are high-traffic environments that never truly stop. We work around your operational needs &mdash; whether you require pre-opening (5am-7am), post-closing (5pm-7pm), or full out-of-hours service (10pm-midnight) seven days a week. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys stored in a coded safe between visits, alarm codes encrypted and released only to your assigned crew lead, never labelled with your address. The most common windows are pre-open for a front-line ready reset before customer trading begins, post-close for a full deep turnover after the day&rsquo;s footfall, or split shifts (light touch during trading, deep clean after hours). Day-porter service is available for high-traffic branch lobbies, ATM vestibules, and staff kitchenettes during peak trading.",
  },
];

export function BankFinancialSeoWhy() {
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
                alt="Maundy Clean financial-sector cleaning crew &mdash; uniformed, vetted, security-cleared and trained on PCI-DSS-aware, GDPR-aligned protocols"
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
                  Employed, vetted, uniformed, and trained in PCI-DSS-aware, GDPR-aligned,
                  dual-control protocols. Same crew every visit &mdash; never a rotating cast of
                  strangers handling your branch.
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
                  <div className="text-xs font-bold text-[var(--ink)]">&pound;10m cover</div>
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
              Why MaundyClean is Scotland&rsquo;s Choice for Secure Financial Cleaning
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Financial environments require a technical balance of discretion, security, and
              attention to detail that national &ldquo;revolving door&rdquo; agencies cannot
              provide. MaundyClean focuses on building high-trust relationships through local,
              personal service &mdash; combining vetted uniformed teams, the same dedicated crew
              every visit, PCI-DSS-aware and GDPR-aligned protocols, dual-control keyholding for
              vault and strongroom areas, and child-safe eco-friendly supplies as standard. We
              project the high standards your customers expect &mdash; and the audit-ready
              documentation your compliance team demands.
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
// Section 3 - Our Total Financial Office Hygiene & Maintenance Checklist
// (Semantic H2: "Our Total Financial Office Hygiene & Maintenance Checklist")
// Brief-specific section with 3 H3 sub-sections:
//   1. Public Areas & ATM Sanitization
//   2. Staff Workstations & Secure Offices
//   3. Facilities & Kitchenette Hygiene
// Carries the id="checklist" anchor that the CTA buttons link to.
// ============================================================

const CHECKLIST_ITEMS = [
  {
    icon: Landmark,
    image: IMG.checklistFront,
    imageAlt: "Maundy Clean crew sanitising ATM keypads, payment terminals and teller counters in a Scottish bank branch",
    title: "1. Public Areas &amp; ATM Sanitization",
    description:
      "The branch lobby, ATM vestibule, and teller-counter zone are the highest-touch, highest-visibility surfaces in any financial environment &mdash; the customer forms their &ldquo;credibility&rdquo; judgement of your institution within the first eight seconds of walking in. A standard spray-and-wipe with a generic cleaner is not enough. Our public-area protocol uses EN 14476 virucidal disinfectant with a verified 60-second contact time on every touchpoint, applied by trained, security-cleared crews who understand the regulatory environment they are working in. Cash-handling zones are cleaned under dual-control where required; confidential paperwork is never moved, photographed, or binned.",
    points: [
      {
        title: "High-Touch Point Disinfecting",
        text: "Intensive cleaning of ATMs, entry phone systems, payment terminals, and handles to prevent the spread of germs. Every ATM keypad, card-reader slot, cash-dispense slot, receipt printer, screen, and fascia button is wiped with EN 14476 virucidal disinfectant &mdash; 60-second contact time, then dried with a clean microfibre. Payment terminals, queue-barrier stanchions, door handles, entry-phone handsets, lift call buttons, and merchandising-stand edges are disinfected every visit, with particular attention during cold and flu season. Colour-coded microfibre (red for high-contamination touchpoints, green for member-facing) prevents cross-contamination.",
      },
      {
        title: "Floor &amp; Surface Restoration",
        text: "Meticulous dusting and polishing of all teller counters, glass partitions, and mirrors to a streak-free shine. Teller-counter tops are sanitised front-of-house and back-of-house, queue-line flooring is vacuumed and mopped with a slip-resistant sanitiser, brochure stands are wiped, and leaflet trays are emptied of out-of-date literature (with branch-manager permission). Brass and chrome counter rails are buffed with a streak-free stainless-steel cleaner. Glass partitions between customer and staff zones are squeegeed, never wiped &mdash; a streaked partition undermines the whole branch&rsquo;s perceived standard. The teller counter is where customer-trust is either reinforced or eroded &mdash; we treat it as the showcase surface of every visit.",
      },
      {
        title: "Inside Window Care",
        text: "Meticulous cleaning of internal glass and storefronts to maximize natural light and maintain a bright, welcoming atmosphere for customers. We squeegee the inside of all branch-front glazing, internal partition doors, interview-room glass, and ATM-vestibule screens on every visit, and schedule external window cleaning weekly (or daily for high-street units exposed to bus-stop and traffic grime). Mirrors in interview rooms and customer washrooms are squeegeed, never wiped &mdash; a streaked mirror kills the room&rsquo;s perception of cleanliness and undermines customer-confidence during a private financial conversation. Sticker residue, sellotape marks, and promotional-window clingfilm are removed with a food-safe citrus degreaser, never a scraper.",
      },
    ],
  },
  {
    icon: Building2,
    image: IMG.checklistCounter,
    imageAlt: "Maundy Clean crew deep cleaning staff workstations, secure offices and boardrooms in a Scottish financial institution",
    title: "2. Staff Workstations &amp; Secure Offices",
    description:
      "Back-of-house workstations, secure offices, executive suites, and boardrooms demand the highest level of discretion and the strictest adherence to PCI-DSS-aware and GDPR-aligned protocols. Our crews are trained never to touch desk paperwork, never to photograph screens, never to handle USB devices or removable media, never to enter cardholder-data zones unsupervised, and never to remove locked-console shredding bags (we log the chain-of-custody but the contracted shredding provider empties the bag). Server rooms and comms cabinets are cleaned using a dry protocol only &mdash; no liquids, no sprays, no wet cloths &mdash; with anti-static cloths on cabinet exteriors and a CRN-rated HEPA vacuum on floors.",
    points: [
      {
        title: "Detailed Dusting",
        text: "Thorough cleaning of workstations, cubicles, and shelving to remove dust and grime build-up. Monitors are wiped with an anti-static, alcohol-free screen cleaner and a lint-free microfibre (never sprayed directly &mdash; spray the cloth, never the screen, to avoid liquid ingress into the bezel). Desk surfaces are damp-wiped with a pH-neutral sanitiser; desk telephones, headsets, and keyboard decks are disinfected with EN 14476 virucidal wipes (60-second contact time). Shelving, filing cabinets (exteriors only &mdash; drawers are never opened), and personal-storage units are detailed. Open bins are emptied only when they contain general waste &mdash; any paper with personal data is left untouched and reported to the branch manager.",
      },
      {
        title: "Floor Care",
        text: "Intensive vacuuming of carpets and deep mopping of hard floors to remove environmental pollutants brought in by heavy foot traffic. Carpets are vacuumed with a commercial-grade HEPA-filtered upright (Sebo BS36/BS46, Henry HVR200) &mdash; no beater bar on premium wool carpets in executive suites and boardrooms, where it can damage the fibre. Hard floors are flat-mopped with separate dirty-water extraction (no double-dipping) using a slip-resistant sanitiser. Entrance matting is vacuumed both sides, then spot-cleaned. Executive-suite leather chairs are wiped with a pH-neutral conditioner; timber surfaces are treated with food-safe beeswax. Boardroom glass-topped tables are polished streak-free.",
      },
      {
        title: "Often-Missed Details",
        text: "Our cleaners meticulously wipe visible skirting boards, door frames, and ceiling fixtures as standard. Skirting boards are damp-wiped with a pH-neutral cleaner; door frames, architraves, and switch plates are detailed; ceiling light fixtures, air-conditioning vents, and extractor grilles are dusted and degreased. High-reach ventilation dusting is performed with extendable poles and HEPA-filtered attachments &mdash; we don&rsquo;t just brush the dust back into the air. Cable trays, picture frames, and certificate displays are wiped down. A dusty vent or a stained ceiling tile undermines a polished boardroom within seconds &mdash; these are the surfaces that compliance and executive visitors notice subconsciously.",
      },
    ],
  },
  {
    icon: SprayCan,
    image: IMG.checklistKitchen,
    imageAlt: "Maundy Clean crew deep cleaning staff washrooms, kitchenettes and chrome fixtures in a Scottish bank or financial office",
    title: "3. Facilities &amp; Kitchenette Hygiene",
    description:
      "Staff washrooms, kitchenettes, and break-out areas are the second-highest-risk zone in any financial environment &mdash; the &ldquo;showcase&rdquo; standard amenities demand. High-moisture environments culture bacteria in minutes; warm humid air cultures mould in hours. Our amenities protocol uses non-caustic, food-safe chemistry and 180&deg;C dry-steam sanitation on tile, grout, and chrome &mdash; applied by trained crews who know the difference between a descale cycle and a sanitise cycle. We buff and polish all chrome fixtures to a high shine as part of our &ldquo;showcase&rdquo; standards.",
    points: [
      {
        title: "Deep Sanitization",
        text: "Disinfecting and cleaning all restrooms and kitchen cabinets to the highest industry standards. Toilets are descaled with a non-abrasive acid, disinfected with an EN 1276-certified bactericide, and polished. Tiles and grout are scrubbed, partition screens are disinfected, mirrors are squeegeed, and floors are mopped with a slip-resistant sanitiser. Kitchenettes are deep-cleaned: worktops, splashbacks, sink and draining board, microwave interior and exterior, fridge exterior (and interior on quarterly deep-clean visits), kettle, coffee-machine drip tray, and bin store. Cabinets (exteriors only) are degreased and polished. Sanitary bins are checked, emptied, and replaced. Dishwashers are run on a hot sanitise cycle and the door seal is wiped.",
      },
      {
        title: "Chrome &amp; Fixture Buffing",
        text: "Professional buffing of all chrome taps and fixtures to a high shine as part of our &ldquo;showcase&rdquo; standards. Taps, soap dispensers, towel dispensers, hand-dryer nozzles, door furniture, cubicle locks, and grab rails are polished with a streak-free stainless-steel cleaner. Shower heads (where present in staff changing facilities) are descaled and the spray pattern verified. Mirror edges, plug sockets, and light switches are detailed. The amenities zone is where staff decide whether to recommend your institution as an employer &mdash; a smudged tap or a stained grout line undermines the whole building&rsquo;s perceived standard and chips away at staff retention in a competitive financial-sector hiring market.",
      },
      {
        title: "Consumables &amp; Replenishment",
        text: "We check, replenish, and rotate consumables on every visit: toilet paper, hand soap, paper towel, hand sanitiser, kitchen roll, cling film, foil, dishwasher tablets, and cleaning spray. Bin liners are replaced and the bin store is sanitised. Out-of-date food in the fridge is identified and the branch manager is notified (we never dispose of food ourselves). Vending-machine keypads and water-fountain buttons are disinfected. The coffee-station drip tray is emptied, the milk-foamer wand is steamed through, and the bean hopper is wiped. Consumable restocking can be managed in-house by your facilities team or fully outsourced to us for an additional monthly fee &mdash; you never run out during trading.",
      },
    ],
  },
];

export function BankFinancialSeoChecklist() {
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
            Our Total Financial Office Hygiene &amp; Maintenance Checklist
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            Our deep cleaning services for banks move beyond standard housekeeping to address the
            heavy foot traffic and high-touch sanitation requirements of the finance industry. We
            deliver technical depth in every area of your branch or HQ &mdash; from the ATM vestibule
            and teller counter through the back-office workstations and boardrooms to the staff
            washrooms, kitchenettes, and the often-missed ceiling fixtures and internal glazing.
            Below is the scope we deliver as standard, regardless of branch size, network footprint,
            or daily customer volume.
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
    title: "Site Survey & Security Assessment",
    description:
      "Contact us to organize a free site survey. We walk the branch or HQ with your facilities manager and your compliance team, identify restricted zones (vault, strongroom, server room, cash-handling), assess your unique site, and develop a bespoke cleaning plan and security protocol tailored to your branch. PCI-DSS scope is mapped, GDPR requirements are documented, keyholding protocol is established, sign-in/out procedure is agreed, and a site-specific protocol document is drafted and signed off by both parties. We send an itemised proposal within 2 business days: crew size, visit frequency, time on-site, scope of work, fixed monthly rate, and a draft cleaning schedule. No pushy sales call, no waiting 24 hours for a callback.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Professional Matching",
    description:
      "We hand-pick a team of trained, security-cleared technicians who follow strict standards of excellence. Your allocated crew lead is briefed on your facility layout, your restricted zones, your keyholder register, your dual-control procedures, and your high-traffic &ldquo;risky&rdquo; areas (ATM vestibule, teller counter, customer washroom, staff kitchenette) &mdash; so cleaning happens around your compliance regime, not through it. The same crew returns for every scheduled session, building real knowledge of your branch&rsquo;s routines, your signage protocol, your screen-sensitive surfaces, and your access preferences. We arrive in liveried vehicles, in uniform with photo I.D., with commercial-grade HEPA-filtered equipment and COSHH-compliant, PCI-DSS-aware, GDPR-aligned cleaning chemistry. Operatives are DBS/PVG-checked, re-vetted annually, and banked-client trained before stepping foot on site.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Enjoy a Pristine Institution",
    description:
      "Experience a workspace that looks, smells, and feels fresh every single day, backed by our MaundyClean satisfaction guarantee. You receive a signed cleaning log after every visit (operative signature, branch-manager counter-signature), arrival and departure times, tasks completed, key-movement log, and any issues flagged &mdash; like a leaking tap, a blown bulb, a cracked partition, or a defect in the ATM fascia &mdash; before they become compliance findings or customer complaints. From &pound;19 per hour for a small single-branch office through to a fully bespoke retainer for a multi-site branch network. We hold &pound;10m public liability for financial services contracts and name your institution on our policy as additional insured. If you&rsquo;re not 100% satisfied, we return within 24 to 48 hours free of charge.",
  },
];

export function BankFinancialSeoBooking() {
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
            providing the responsive management support that Scottish financial leaders demand. From
            site survey and security assessment to first clean in under a week &mdash; no friction,
            no waiting, no surprises. Just a pristine institution, every visit, on schedule, fully
            audit-defensible.
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
// Section 5 - Solutions for Every Property Need
// (Semantic H2: "Solutions for Every Property Need")
// Brief drops the "Semantic Interlinking:" prefix per the cleanup rules.
// Image-topped cards with internal links to specialist services
// ============================================================

const INTERLINK_SOLUTIONS = [
  {
    icon: KeyRound,
    title: "Move-In/Move-Out &middot; End of Tenancy Cleaning",
    href: "/services/move-in-out-cleaning",
    image: IMG.leaseTenancy,
    imageAlt: "Empty bank or financial office unit being deep cleaned for lease handover by Maundy Clean in Scotland",
    description:
      "Moving branches? Our End of Tenancy Cleaning ensures properties are front-line ready for new occupants and fulfill all lease obligations. We work to the letting agent&rsquo;s inventory, restore the unit to its original condition, and come back free of charge if anything is flagged on the inspection &mdash; the most stress-free way to close out a bank lease, vacate a redundant branch, or hand back a sub-let floor in a multi-tenanted HQ building.",
    cta: "Explore end of tenancy",
  },
  {
    icon: Hammer,
    title: "Post-Renovation &middot; After Builders Clean",
    href: "/services/post-construction-cleaning",
    image: IMG.leaseBuilders,
    imageAlt: "Post-refurbishment cleanup removing fine construction dust from a refurbished Scottish bank branch or financial office",
    description:
      "If your facility has undergone home improvements or refitting, our After Builders Clean is designed to remove heavy layers of builders&rsquo; dust and debris. Fine dust left on a teller-counter top or an ATM fascia undermines the customer-trust signal the moment the branch re-opens &mdash; we vacuum, damp-wipe, and protect every surface before the dust has a chance to damage screens, keypads, or your customers&rsquo; first impression on reopening day.",
    cta: "Explore after builders cleaning",
  },
  {
    icon: HeartPulse,
    title: "Hygiene Resets &middot; Antiviral Sanitisation",
    href: "/services/disinfection-services",
    image: IMG.leaseAntiviral,
    imageAlt: "Antiviral sanitisation treatment being applied to high-touch bank surfaces and ATM keypads in Scotland",
    description:
      "Ask about our Antiviral Sanitisation and deep-disinfection treatments to keep your staff and customers safe from COVID-19 and other viruses. EN 14476 virucidal chemistry is fogged and wiped across every high-touch surface in your branch &mdash; from ATM keypads and payment terminals to teller counters, queue-barrier stanchions, and interview-room door handles &mdash; reducing the spread of seasonal colds, flu, and norovirus among your staff and customers during peak trading and outbreak response.",
    cta: "Explore antiviral sanitisation",
  },
  {
    icon: Sparkles,
    title: "Fabric Restoration &middot; Deep Carpet Cleaning",
    href: "/services/carpet-rug-cleaning",
    image: IMG.leaseDeep,
    imageAlt: "Deep carpet cleaning of a bank reception, executive suite and boardroom area by Maundy Clean in Scotland",
    description:
      "Rejuvenate office seating and carpets with our Deep Carpet Cleaning service to remove deep-seated city-center dust and odors. We hot-water-extract branch-lobby carpets, executive-suite wool carpets, boardroom runners, and staff-kitchenette floor covers &mdash; removing the high-street grime, footfall dust, and coffee-spill marks that build up in a busy financial environment and refreshing the appearance of the high-traffic entrance your customers see first.",
    cta: "Explore deep carpet cleaning",
  },
];

export function BankFinancialSeoInterlinking() {
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
            Beyond the daily clean &middot; financial milestones
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Solutions for Every Property Need
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed">
            While our deep office cleaning maintains your daily professional image, we offer
            specialized &ldquo;resets&rdquo; for major transitions &mdash; from branch moves and
            post-refurbishment dust clear-outs to antiviral hygiene resets and fabric restoration.
            The same trusted, security-cleared crew can step up whenever your facility needs more
            than a standard visit, with the same PCI-DSS-aware, GDPR-aligned protocols in force.
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
// (Semantic H2: "Bank & Financial Office Cleaning Near Me, Across Scotland")
// Split layout with map image + 36-location grid
// ============================================================

export function BankFinancialSeoNearMe() {
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
              Local bank &amp; financial office cleaning across Scotland
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
              Bank &amp; Financial Office Cleaning Near Me, Across Scotland
            </h2>
            <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed mb-6">
              Searching for &ldquo;bank cleaning near me&rdquo; or &ldquo;financial office cleaning
              company near me&rdquo; in Scotland? Maundy Clean covers high-street bank branches,
              building society HQs, wealth-management offices, insurance HQs, and fintech workspaces
              across the Central Belt, Highlands, Borders, and Islands. Same vetted uniformed
              security-cleared crews, same PCI-DSS-aware, GDPR-aligned protocols, same dedicated
              crew every visit &mdash; wherever your facility happens to be. Find your local bank
              and financial office cleaning specialist below.
            </p>

            <div className="relative rounded-3xl overflow-hidden shadow-brand aspect-[4/3] bg-[var(--brand-dark)]">
              <img
                src={IMG.nearMeMap}
                alt="Map of Scotland showing Maundy Clean bank and financial office cleaning service coverage areas"
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
                  Same vetted uniformed security-cleared crews, same 100% satisfaction guarantee
                  &mdash; from Glasgow to Inverness.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <Button
                size="lg"
                className="bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-brand gap-2 h-12 text-base"
                asChild
              >
                <Link href="/services/bank-financial-office-cleaning-near-me">
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
                Find your local bank &amp; financial office crew
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
                    href={`/services/bank-financial-office-cleaning-near-me#${loc.slug}`}
                    className="flex items-center gap-2 text-sm text-[var(--ink)]/80 hover:text-[var(--brand)] transition-colors py-2 px-2.5 rounded-lg hover:bg-[var(--brand-light)]/40"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[var(--brand)] shrink-0" />
                    <span>
                      <span className="font-medium">{loc.city}</span>
                      <span className="text-[var(--muted-foreground)]"> bank</span>
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
            Our local bank and financial office cleaning crews operate across Glasgow&rsquo;s
            financial district (Blythswood Square, St Vincent Street, Bothwell Street),
            Edinburgh&rsquo;s New Town and Exchange Plaza, Aberdeen&rsquo;s Union Street and
            Holburn Junction, Dundee&rsquo;s City Square, and the Highlands &mdash; from Inverness
            to Perth, Falkirk to Ayr. Whether you&rsquo;re searching for daily touchpoint
            disinfection in Glasgow, after-hours branch deep cleans in Edinburgh, ATM-vestibule
            sanitisation in Aberdeen, or neighbourhood building-society cleaning anywhere in
            between, Maundy Clean assigns a vetted, PAYE-employed, security-cleared crew that stays
            with you for the long run. Same crew, same standard, same locked-in rate for 12 months.
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

export function BankFinancialSeoFinalCta() {
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
            Book a free, no-obligation site survey and security assessment with our management team
            and receive an itemised proposal within 2 business days. Vetted uniformed
            security-cleared crews, PCI-DSS-aware, GDPR-aligned protocols, dual-control keyholding
            for vault and strongroom areas, audit-ready compliance documentation, signed cleaning
            logs, &pound;10m public liability for financial services contracts, and a 100%
            satisfaction guarantee &mdash; from &pound;19 per hour for a small single-branch office
            through to a fully bespoke multi-site branch-network retainer. No pushy sales call, no
            waiting 24 hours for a callback.
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
// 3 Q&As from the brief (insured for financial institutions,
// provide own professional equipment, key handovers)
// ============================================================

const SEO_FAQS = [
  {
    q: "Are your cleaners insured for financial institutions?",
    a: "Yes. MaundyClean is a fully insured, registered, and professional cleaning company with years of experience serving the Scottish commercial sector. We hold &pound;10m public liability cover for financial services contracts (higher than our standard &pound;5m), full employer&rsquo;s liability, professional indemnity, and contingent employer&rsquo;s liability. Every crew member carries Disclosure Scotland PVG scheme membership, wears an official uniform with photo I.D., is re-vetted annually, and is trained on PCI-DSS-aware, GDPR-aligned, dual-control keyholding protocols. We can name your institution on our policy as additional insured &mdash; a common requirement for bank branch networks, building society head offices, wealth-management suites, and fintech leasehold agreements &mdash; and we provide enhanced background checks for staff handling secure keyholding or operating in sensitive locations (vault, strongroom, server room, cash-handling zones). Certificates of insurance and our full compliance file (COSHH datasheets, risk assessments, method statements, training records, keyholder register, dual-control logs) are available on request; we will not begin work until your facilities team, your compliance team, and your external QSA have the documentation they need. We have never had a PCI-DSS, GDPR, or security incident in 11 years of cleaning for financial services clients.",
  },
  {
    q: "Do you provide your own cleaning equipment?",
    a: "Absolutely. We supply all our own professional-grade equipment and up-to-date sanitizing solutions, which are included in your competitive quote. Every crew arrives in a liveried van with commercial-grade HEPA-filtered vacuums (Sebo BS36/BS46, Henry HVR200), microfibre flat-mop systems with separate dirty-water extraction (no double-dipping), colour-coded cloths (red for high-contamination touchpoints like ATM keypads and door handles, green for member-facing surfaces like teller counters, yellow for washroom and kitchenette, blue for executive-suite and boardroom), HSE-compliant chemicals with COSHH datasheets on file, PPE, squeegees for windows and mirrors, 180&deg;C dry-steam sanitizers for tile, grout, and chrome, ultra-low-volume foggers for outbreak response, and EN 14476 virucidal disinfectant with a verified 60-second contact time for every ATM keypad, payment terminal, card-reader slot, and teller-counter surface. Server rooms and comms cabinets are cleaned using a dry protocol only &mdash; no liquids, no sprays, no wet cloths &mdash; with anti-static cloths on cabinet exteriors and a CRN-rated HEPA vacuum on floors. We use non-toxic, child-safe, pet-safe products by default in customer-facing and staff areas, with eco-labelled alternatives for executive suites and boardrooms. You provide consumables (bin liners, paper towel, toilet paper, hand soap, sanitiser wipes) or we can manage consumable restocking for an additional monthly fee so you never run out during trading.",
  },
  {
    q: "Do you manage key handovers for out-of-hours cleaning?",
    a: "Yes. We operate a secure safe key system to ensure your property remains protected while we deliver a 5-star clean. Keys are stored in a coded safe between visits, alarm codes are encrypted and only released to your assigned crew lead, and key sets are never labelled with your address. We are trained on all major alarm systems (Texecom, Honeywell, Pyronix, Risco) and follow strict key-handling protocols: keys signed for at start of shift, signed back at end, every key movement logged in the keyholder register. For vault, strongroom, safety-deposit box areas, and cash-handling zones, dual-control is non-negotiable &mdash; our operative never enters these zones alone, always accompanied by a designated member of branch staff, and we never hold vault or strongroom keys (those remain with the bank&rsquo;s own keyholders at all times). We can support pre-open (5am-7am), post-close (5pm-7pm), or full out-of-hours (10pm-midnight) service 7 days a week, and day-porter service is available for high-traffic branch lobbies, ATM vestibules, and staff kitchenettes during peak trading. The most common windows are pre-open for a front-line ready reset before customer trading begins, and post-close for a full deep turnover after the day&rsquo;s footfall. Our visit-completion rate in 2025 was 99.6%.",
  },
];

export function BankFinancialSeoFaq() {
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
            Bank &amp; financial office cleaning &middot; FAQ
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-[var(--ink)] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base lg:text-lg text-[var(--muted-foreground)] leading-relaxed max-w-2xl mx-auto">
            Straight answers to the questions our bank and financial office cleaning clients ask
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

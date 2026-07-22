"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronDown,
  ArrowRight,
  Search,
  Phone,
  Menu,
  X,
  MapPin,
  Building2,
  Factory,
  Home,
  Stethoscope,
  Utensils,
  GraduationCap,
  ClipboardList,
  PlusCircle,
  Trees,
  CheckCircle2,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  type NavChild,
  serviceCategories,
  industryCategories,
  locationCategories,
  companyPages,
} from "@/lib/site-data";

type MegaKey = "services" | "industries" | "locations" | "company" | null;

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  home: Home,
  building: Building2,
  "clipboard-list": ClipboardList,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  factory: Factory,
  trees: Trees,
  "plus-circle": PlusCircle,
  utensils: Utensils,
  "graduation-cap": GraduationCap,
  "map-pin": MapPin,
};

export function SiteHeader() {
  const [active, setActive] = React.useState<MegaKey>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [hoveredGroup, setHoveredGroup] = React.useState<string | null>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMenu = (k: Exclude<MegaKey, null>) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActive(k);
  };
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActive(null), 120);
  };

  // Top nav items
  const navItems: { key: Exclude<MegaKey, null>; label: string }[] = [
    { key: "services", label: "Services" },
    { key: "industries", label: "Industries" },
    { key: "locations", label: "Locations" },
    { key: "company", label: "Company" },
  ];

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden lg:block bg-[var(--ink)] text-white/90 text-xs">
        <div className="max-w-[1400px] mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Star className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
              4.9 ★ · 6,200+ reviews
            </span>
            <span className="opacity-60">|</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[var(--brand)]" />
              PVG-Checked · Insured · Trusted
            </span>
            <span className="opacity-60">|</span>
            <span>30 Scottish Locations</span>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/help" className="hover:text-[var(--gold)] transition-colors">Help</Link>
            <Link href="/contact" className="hover:text-[var(--gold)] transition-colors">Contact</Link>
            <a
              href="tel:+447735322362"
              className="flex items-center gap-1.5 text-[var(--gold)] hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> +44 7735 322362
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className="sticky top-0 z-50 glass-nav"
        onMouseLeave={closeMenu}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center shadow-brand">
                <Sparkles className="w-5 h-5 text-white" />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[var(--gold)] ring-2 ring-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-extrabold text-lg tracking-tight">
                  Maundy<span className="text-[var(--brand)]">Clean</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-[var(--muted-foreground)] -mt-0.5">
                  Premium Cleaning Co.
                </div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onMouseEnter={() => openMenu(item.key)}
                  onFocus={() => openMenu(item.key)}
                  className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                    active === item.key
                      ? "text-[var(--brand)] bg-[var(--brand-light)]/40"
                      : "text-[var(--ink)] hover:text-[var(--brand)]"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform ${active === item.key ? "rotate-180" : ""}`}
                  />
                </button>
              ))}
              <Link
                href="/pricing"
                className="px-4 py-2.5 text-sm font-medium rounded-lg text-[var(--ink)] hover:text-[var(--brand)] transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="px-4 py-2.5 text-sm font-medium rounded-lg text-[var(--ink)] hover:text-[var(--brand)] transition-colors"
              >
                Blog
              </Link>
            </nav>

            {/* CTAs */}
            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Button variant="ghost" size="sm" className="gap-1.5">
                <Search className="w-4 h-4" /> Search
              </Button>
              <Button
                size="sm"
                className="gap-1.5 bg-[var(--brand)] hover:bg-[var(--brand-dark)] shadow-brand"
                asChild
              >
                <Link href="/quote">
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--muted)]"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* MEGA MENU PANEL */}
        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute left-0 right-0 top-full hidden lg:block"
              onMouseEnter={() => openMenu(active)}
            >
              <div className="mx-6 mt-1 rounded-2xl bg-white border border-[var(--border)] shadow-2xl overflow-hidden">
                {active === "services" && (
                  <ServicesMega hovered={hoveredGroup} setHovered={setHoveredGroup} />
                )}
                {active === "industries" && (
                  <IndustriesMega hovered={hoveredGroup} setHovered={setHoveredGroup} />
                )}
                {active === "locations" && (
                  <LocationsMega hovered={hoveredGroup} setHovered={setHoveredGroup} />
                )}
                {active === "company" && <CompanyMega />}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile drawer */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}

/* ---------- SERVICES MEGA (left nav + right preview, 117 services) ---------- */
function ServicesMega({
  hovered,
  setHovered,
}: {
  hovered: string | null;
  setHovered: (v: string | null) => void;
}) {
  const activeGroup =
    serviceCategories.find((g) => g.title === hovered) ?? serviceCategories[0];
  const totalServices = serviceCategories.reduce(
    (n, g) => n + g.children.length,
    0
  );

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-[520px]">
      {/* LEFT: categories */}
      <div className="bg-[var(--cream)] border-r border-[var(--border)] p-3 mega-scroll overflow-y-auto max-h-[560px]">
        <div className="px-3 pt-2 pb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            All Service Categories
          </span>
          <span className="text-[10px] font-semibold text-[var(--brand)] bg-white px-1.5 py-0.5 rounded-full">
            {totalServices}
          </span>
        </div>
        {serviceCategories.map((g) => {
          const Icon = iconMap[g.icon ?? ""] ?? Sparkles;
          const isActive = activeGroup.title === g.title;
          return (
            <button
              key={g.title}
              onMouseEnter={() => setHovered(g.title)}
              className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                isActive
                  ? "bg-white shadow-sm text-[var(--brand)]"
                  : "hover:bg-white/60 text-[var(--ink)]"
              }`}
            >
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? "bg-[var(--brand)] text-white"
                    : "bg-white text-[var(--brand)] group-hover:bg-[var(--brand-light)]"
                }`}
              >
                <Icon className="w-4 h-4" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold leading-tight">
                  {g.title}
                </span>
                <span className="block text-[11px] text-[var(--muted-foreground)] mt-0.5">
                  {g.children.length} services
                </span>
              </span>
              <ArrowRight
                className={`w-3.5 h-3.5 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* RIGHT: services in active category */}
      <div className="p-6 mega-scroll overflow-y-auto max-h-[560px]">
        <div className="flex items-end justify-between mb-4 gap-3">
          <div className="flex items-center gap-3">
            {/* Category image thumbnail */}
            <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeGroup.image}
                alt={activeGroup.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[var(--brand-dark)]/30" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-[var(--ink)]">
                {activeGroup.title}
              </h3>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                Browse {activeGroup.children.length} specialised services — click any for pricing & details
              </p>
            </div>
          </div>
          <a
            href="#"
            className="text-xs font-semibold text-[var(--brand)] hover:underline flex items-center gap-1 shrink-0"
          >
            View all <ArrowRight className="w-3 h-3" />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {activeGroup.children.map((c, idx) => (
            <motion.a
              key={c.name}
              href={c.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: idx * 0.015 }}
              className="group relative p-3 rounded-lg border border-[var(--border)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)]/30 transition-all"
            >
              {c.popular && (
                <span className="absolute top-2 right-2 text-[9px] font-bold uppercase tracking-wide text-[var(--gold-dark)] bg-[var(--gold)]/20 px-1.5 py-0.5 rounded">
                  Popular
                </span>
              )}
              <div className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--brand)] transition-colors pr-12">
                {c.name}
              </div>
              {c.description && (
                <div className="text-[11px] text-[var(--muted-foreground)] mt-1 leading-snug">
                  {c.description}
                </div>
              )}
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-[var(--brand-dark)] to-[var(--brand)] text-white flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold">Not sure which service you need?</div>
            <div className="text-xs text-white/80 mt-0.5">
              Answer 5 questions and we'll recommend the perfect plan.
            </div>
          </div>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white text-[var(--brand-dark)] hover:bg-white/90"
          >
            Service Quiz <ArrowRight className="w-3.5 h-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* ---------- INDUSTRIES MEGA ---------- */
function IndustriesMega({
  hovered,
  setHovered,
}: {
  hovered: string | null;
  setHovered: (v: string | null) => void;
}) {
  const activeGroup =
    industryCategories.find((g) => g.title === hovered) ?? industryCategories[0];

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-[440px]">
      <div className="bg-[var(--cream)] border-r border-[var(--border)] p-3">
        <div className="px-3 pt-2 pb-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            Industries We Serve
          </span>
        </div>
        {industryCategories.map((g) => {
          const Icon = iconMap[g.icon ?? ""] ?? Sparkles;
          const isActive = activeGroup.title === g.title;
          return (
            <button
              key={g.title}
              onMouseEnter={() => setHovered(g.title)}
              className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                isActive
                  ? "bg-white shadow-sm text-[var(--brand)]"
                  : "hover:bg-white/60 text-[var(--ink)]"
              }`}
            >
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? "bg-[var(--brand)] text-white"
                    : "bg-white text-[var(--brand)] group-hover:bg-[var(--brand-light)]"
                }`}
              >
                <Icon className="w-4 h-4" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold leading-tight">
                  {g.title}
                </span>
                <span className="block text-[11px] text-[var(--muted-foreground)] mt-0.5">
                  {g.children.length} sectors
                </span>
              </span>
              <ArrowRight
                className={`w-3.5 h-3.5 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="p-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h3 className="font-display text-xl font-bold text-[var(--ink)]">
              {activeGroup.title}
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] mt-1">
              Specialized protocols, compliance & certifications for each sector
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {activeGroup.children.map((c, idx) => (
            <motion.a
              key={c.name}
              href={c.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: idx * 0.04 }}
              className="group p-4 rounded-xl border border-[var(--border)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)]/30 transition-all flex items-start gap-3"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--brand-light)] flex items-center justify-center group-hover:bg-[var(--brand)] group-hover:text-white text-[var(--brand)] transition-colors shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--brand)]">
                    {c.name}
                  </span>
                  {c.popular && (
                    <span className="text-[9px] font-bold uppercase tracking-wide text-[var(--gold-dark)] bg-[var(--gold)]/20 px-1.5 py-0.5 rounded">
                      Top
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-[var(--muted-foreground)] mt-1">
                  Compliance-ready · Custom SLA · Dedicated manager
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- LOCATIONS MEGA ---------- */
function LocationsMega({
  hovered,
  setHovered,
}: {
  hovered: string | null;
  setHovered: (v: string | null) => void;
}) {
  const activeGroup =
    locationCategories.find((g) => g.title === hovered) ?? locationCategories[0];
  const totalLocations = locationCategories.reduce(
    (n, g) => n + g.children.length,
    0
  );

  return (
    <div className="grid grid-cols-[260px_1fr] min-h-[440px]">
      <div className="bg-[var(--cream)] border-r border-[var(--border)] p-3">
        <div className="px-3 pt-2 pb-3 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
            Service Regions
          </span>
          <span className="text-[10px] font-semibold text-[var(--brand)] bg-white px-1.5 py-0.5 rounded-full">
            {totalLocations} cities
          </span>
        </div>
        {locationCategories.map((g) => {
          const isActive = activeGroup.title === g.title;
          return (
            <button
              key={g.title}
              onMouseEnter={() => setHovered(g.title)}
              className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all ${
                isActive
                  ? "bg-white shadow-sm text-[var(--brand)]"
                  : "hover:bg-white/60 text-[var(--ink)]"
              }`}
            >
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  isActive
                    ? "bg-[var(--brand)] text-white"
                    : "bg-white text-[var(--brand)] group-hover:bg-[var(--brand-light)]"
                }`}
              >
                <MapPin className="w-4 h-4" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-semibold leading-tight">
                  {g.title}
                </span>
                <span className="block text-[11px] text-[var(--muted-foreground)] mt-0.5">
                  {g.children.length} cities
                </span>
              </span>
              <ArrowRight
                className={`w-3.5 h-3.5 transition-opacity ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
      <div className="p-6">
        <div className="flex items-end justify-between mb-4">
          <div>
            <h3 className="font-display text-xl font-bold text-[var(--ink)]">
              {activeGroup.title}
            </h3>
            <p className="text-xs text-[var(--muted-foreground)] mt-1">
              Local crews, local dispatch — same Maundy standard everywhere
            </p>
          </div>
          <a href="#" className="text-xs font-semibold text-[var(--brand)] hover:underline">
            View coverage map <ArrowRight className="w-3 h-3 inline" />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {activeGroup.children.map((c, idx) => (
            <motion.a
              key={c.name}
              href={c.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: idx * 0.03 }}
              className="group p-3 rounded-lg border border-[var(--border)] hover:border-[var(--brand)] hover:bg-[var(--brand-light)]/30 transition-all flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[var(--brand)] shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--brand)] truncate">
                  {c.name}
                </div>
                <div className="text-[10px] text-[var(--muted-foreground)]">
                  Maundy Clean of {c.name.split(",")[0]}
                </div>
              </div>
              {c.popular && (
                <span className="text-[9px] font-bold uppercase tracking-wide text-[var(--gold-dark)] bg-[var(--gold)]/20 px-1.5 py-0.5 rounded shrink-0">
                  Hub
                </span>
              )}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- COMPANY MEGA ---------- */
function CompanyMega() {
  return (
    <div className="grid grid-cols-[1fr_300px] min-h-[360px]">
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-[var(--ink)] mb-4">
          About Maundy Clean
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {companyPages.map((p, idx) => (
            <motion.a
              key={p.name}
              href={p.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.15, delay: idx * 0.025 }}
              className="group p-3 rounded-lg hover:bg-[var(--brand-light)]/30 transition-all flex items-start justify-between gap-2"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-[var(--ink)] group-hover:text-[var(--brand)]">
                    {p.name}
                  </span>
                  {p.popular && (
                    <span className="text-[9px] font-bold uppercase tracking-wide text-[var(--gold-dark)] bg-[var(--gold)]/20 px-1.5 py-0.5 rounded">
                      Popular
                    </span>
                  )}
                </div>
                {p.description && (
                  <div className="text-[11px] text-[var(--muted-foreground)] mt-0.5">
                    {p.description}
                  </div>
                )}
              </div>
              <ArrowRight className="w-3.5 h-3.5 text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
            </motion.a>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand)] p-6 text-white flex flex-col">
        <div className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-semibold">
          Why Maundy
        </div>
        <div className="mt-3 space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
            <span>Same crew every visit — never a stranger</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
            <span>W-2 employees, never contractors</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
            <span>Free re-clean within 24 hrs if unhappy</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-[var(--gold)] mt-0.5 shrink-0" />
            <span>EPA Safer Choice supplies standard</span>
          </div>
        </div>
        <Button asChild className="mt-auto bg-[var(--gold)] text-[var(--ink)] hover:bg-[var(--gold-dark)] hover:text-white">
          <Link href="/quote">
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

/* ---------- MOBILE NAV ---------- */
function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expanded, setExpanded] = React.useState<string | null>("services");
  const [subExpanded, setSubExpanded] = React.useState<string | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[60] lg:hidden"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 240 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-[420px] bg-white shadow-2xl flex flex-col lg:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
              <span className="font-display font-bold text-lg">Menu</span>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-[var(--muted)]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 mega-scroll">
              {/* Services */}
              <MobileSection
                title="Services"
                count="117"
                expanded={expanded === "services"}
                onToggle={() => setExpanded(expanded === "services" ? null : "services")}
              >
                {serviceCategories.map((g) => (
                  <MobileSubSection
                    key={g.title}
                    title={g.title}
                    count={g.children.length}
                    expanded={subExpanded === g.title}
                    onToggle={() =>
                      setSubExpanded(subExpanded === g.title ? null : g.title)
                    }
                    items={g.children}
                  />
                ))}
              </MobileSection>

              {/* Industries */}
              <MobileSection
                title="Industries"
                count="24"
                expanded={expanded === "industries"}
                onToggle={() => setExpanded(expanded === "industries" ? null : "industries")}
              >
                {industryCategories.map((g) => (
                  <MobileSubSection
                    key={g.title}
                    title={g.title}
                    count={g.children.length}
                    expanded={subExpanded === g.title}
                    onToggle={() =>
                      setSubExpanded(subExpanded === g.title ? null : g.title)
                    }
                    items={g.children}
                  />
                ))}
              </MobileSection>

              {/* Locations */}
              <MobileSection
                title="Locations"
                count="36"
                expanded={expanded === "locations"}
                onToggle={() => setExpanded(expanded === "locations" ? null : "locations")}
              >
                {locationCategories.map((g) => (
                  <MobileSubSection
                    key={g.title}
                    title={g.title}
                    count={g.children.length}
                    expanded={subExpanded === g.title}
                    onToggle={() =>
                      setSubExpanded(subExpanded === g.title ? null : g.title)
                    }
                    items={g.children}
                  />
                ))}
              </MobileSection>

              {/* Company links flat */}
              <MobileSection
                title="Company"
                expanded={expanded === "company"}
                onToggle={() => setExpanded(expanded === "company" ? null : "company")}
              >
                <div className="space-y-1 pl-2">
                  {companyPages.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={onClose}
                      className="block py-2 text-sm text-[var(--ink)] hover:text-[var(--brand)]"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              </MobileSection>

              <div className="pt-2">
                <Link href="/pricing" onClick={onClose} className="block py-2.5 text-sm font-medium hover:text-[var(--brand)]">
                  Pricing
                </Link>
                <Link href="/blog" onClick={onClose} className="block py-2.5 text-sm font-medium hover:text-[var(--brand)]">
                  Blog
                </Link>
              </div>
            </div>
            <div className="p-4 border-t border-[var(--border)] space-y-2">
              <Link href="/quote" onClick={onClose}>
                <Button className="w-full bg-[var(--brand)] hover:bg-[var(--brand-dark)]">
                  Get Free Quote
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                <Phone className="w-4 h-4 mr-2" /> +44 7735 322362
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function MobileSection({
  title,
  count,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  count?: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-[var(--border)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 px-1"
      >
        <span className="flex items-center gap-2">
          <span className="font-semibold text-[var(--ink)]">{title}</span>
          {count && (
            <span className="text-[10px] font-semibold text-[var(--brand)] bg-[var(--brand-light)] px-1.5 py-0.5 rounded-full">
              {count}
            </span>
          )}
        </span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && <div className="pb-2">{children}</div>}
    </div>
  );
}

function MobileSubSection({
  title,
  count,
  expanded,
  onToggle,
  items,
}: {
  title: string;
  count: number;
  expanded: boolean;
  onToggle: () => void;
  items: NavChild[];
}) {
  return (
    <div className="ml-2 border-l-2 border-[var(--brand-light)] pl-3 mb-1">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-2"
      >
        <span className="flex items-center gap-2 text-sm text-[var(--ink)]">
          {title}
          <span className="text-[10px] text-[var(--muted-foreground)]">({count})</span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      {expanded && (
        <div className="space-y-0.5">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-1.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--brand)]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

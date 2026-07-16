"use client";

import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";
import {
  serviceCategories,
  industryCategories,
  locationCategories,
  companyPages,
  contactInfo,
} from "@/lib/site-data";

export function SiteFooter() {
  const totalServices = serviceCategories.reduce(
    (n, g) => n + g.children.length,
    0
  );
  const totalIndustries = industryCategories.reduce(
    (n, g) => n + g.children.length,
    0
  );
  const totalLocations = locationCategories.reduce(
    (n, g) => n + g.children.length,
    0
  );

  return (
    <footer className="bg-[var(--ink)] text-white/80 mt-auto">
      {/* Top CTA banner */}
      <div className="bg-gradient-to-r from-[var(--brand-dark)] via-[var(--brand)] to-[var(--brand-dark)]">
        <div className="max-w-[1400px] mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
              Ready for a spotless space?
            </h3>
            <p className="text-white/85 text-sm mt-1.5 max-w-xl">
              Get a personalised quote in 60 seconds. No contracts. Free re-clean guarantee. Cancel anytime.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--brand-dark)] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[var(--gold)] hover:text-white transition-colors"
            >
              Get Free Quote <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border border-white/30 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" /> {contactInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-6 py-14">
        {/* ============ TOP ROW: Brand + Company + Industries + Locations ============ */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8">
          {/* Brand block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--brand)] to-[var(--brand-dark)] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-extrabold text-lg text-white">
                  Maundy<span className="text-[var(--brand)]">Clean</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-white/50 -mt-0.5">
                  Premium Cleaning Co. · Scotland
                </div>
              </div>
            </a>
            <p className="text-sm text-white/70 leading-relaxed mb-5 max-w-xs">
              Premium residential &amp; commercial cleaning across 30 Scottish locations.
              Same crew every visit. PAYE employees, never contractors.
              Free re-clean guarantee.
            </p>
            <div className="space-y-2 text-sm">
              <a href={contactInfo.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="w-4 h-4 text-[var(--brand)]" /> {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="w-4 h-4 text-[var(--brand)]" /> {contactInfo.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[var(--brand)] mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-5">
              {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--brand)] flex items-center justify-center transition-colors"
                  aria-label="social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-display font-bold text-white text-sm mb-3 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              {companyPages.map((p) => (
                <li key={p.name}>
                  <a href={p.href} className="hover:text-[var(--brand)] transition-colors">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries — ALL 24 grouped by 6 categories */}
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                Industries We Serve
              </h4>
              <span className="text-[10px] font-semibold text-[var(--brand)] bg-white/10 px-2 py-0.5 rounded-full">
                {totalIndustries}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {industryCategories.map((cat) => (
                <div key={cat.title}>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand)] mb-2">
                    {cat.title}
                  </h5>
                  <ul className="space-y-1.5 text-sm">
                    {cat.children.map((c) => (
                      <li key={c.name}>
                        <a
                          href={c.href}
                          className="hover:text-[var(--brand)] transition-colors text-white/70"
                        >
                          {c.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Locations — ALL 30 grouped by 6 Scottish regions */}
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">
                Service Locations
              </h4>
              <span className="text-[10px] font-semibold text-[var(--brand)] bg-white/10 px-2 py-0.5 rounded-full">
                {totalLocations}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {locationCategories.map((cat) => (
                <div key={cat.title}>
                  <h5 className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand)] mb-2">
                    {cat.title}
                  </h5>
                  <ul className="space-y-1.5 text-sm">
                    {cat.children.map((c) => (
                      <li key={`${cat.title}-${c.name}`}>
                        <a
                          href={c.href}
                          className="hover:text-[var(--brand)] transition-colors text-white/70"
                        >
                          {c.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============ SERVICES BLOCK — ALL 117 grouped by 8 categories ============ */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <h4 className="font-display font-bold text-white text-base uppercase tracking-wider">
              All Services
            </h4>
            <span className="text-[11px] font-semibold text-[var(--brand)] bg-white/10 px-2.5 py-1 rounded-full">
              {totalServices} services across {serviceCategories.length} categories
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {serviceCategories.map((cat) => (
              <div key={cat.title}>
                <h5 className="text-xs font-bold uppercase tracking-wider text-[var(--brand)] mb-3 pb-2 border-b border-white/10">
                  {cat.title}
                  <span className="ml-2 text-[10px] text-white/40 font-normal normal-case tracking-normal">
                    {cat.children.length}
                  </span>
                </h5>
                <ul className="space-y-1.5 text-sm">
                  {cat.children.map((c) => (
                    <li key={c.name}>
                      <a
                        href={c.href}
                        className="hover:text-[var(--brand)] transition-colors text-white/70 leading-snug inline-block"
                      >
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-[var(--brand)]" />
            </div>
            <div className="text-xs font-semibold text-white">Insured &amp; PVG-Checked</div>
            <div className="text-[10px] text-white/60">£5m Public Liability</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
              <Star className="w-5 h-5 text-[var(--gold)] fill-[var(--gold)]" />
            </div>
            <div className="text-xs font-semibold text-white">4.9 / 5 Average</div>
            <div className="text-[10px] text-white/60">6,200+ verified reviews</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
              <Sparkles className="w-5 h-5 text-[var(--brand)]" />
            </div>
            <div className="text-xs font-semibold text-white">Eco-Labelled</div>
            <div className="text-[10px] text-white/60">Low-VOC supplies standard</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-[var(--brand)]" />
            </div>
            <div className="text-xs font-semibold text-white">100% Guarantee</div>
            <div className="text-[10px] text-white/60">Free re-clean within 24h</div>
          </div>
        </div>
      </div>

      {/* Bottom legal bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/55">
          <div>
            © 2026 Maundy Clean Ltd · Registered in Scotland {contactInfo.companyNumber} · {contactInfo.vatNumber}
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Accessibility</a>
            <a href="#" className="hover:text-white">Sitemap</a>
            <a href="#" className="hover:text-white">Cookie Preferences</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

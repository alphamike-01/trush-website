import React from "react";
import Link from "next/link";
import { FIRM_DETAILS } from "@/lib/constants";
import { Scale, Mail, MapPin, ShieldAlert, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-legal-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          {/* Column 1: Firm Overview */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-legal-900 border border-gold-600/40 flex items-center justify-center text-gold-400">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                {FIRM_DETAILS.name}
              </span>
            </div>
            <p className="text-xs text-gold-400 font-medium mb-3">
              {FIRM_DETAILS.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed mb-6">
              Specialized legal practice centered on revenue records, land disputes, property title verification, and conveyancing documentation.
            </p>

            <div className="bg-legal-900/80 border border-slate-800 rounded-lg p-3.5">
              <span className="text-[11px] font-bold text-gold-400 uppercase tracking-wider block mb-2">
                Advocates & Legal Practitioners
              </span>
              <ul className="space-y-1.5 text-xs text-slate-200">
                {FIRM_DETAILS.lawyers.map((lawyer) => (
                  <li key={lawyer.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
                    <span className="font-semibold text-white">{lawyer.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4 pb-2 border-b border-slate-800/80">
              Practice Areas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/revenue-law" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Revenue Law & Mutation Entries
                </Link>
              </li>
              <li>
                <Link href="/land-disputes" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Land & Property Disputes
                </Link>
              </li>
              <li>
                <Link href="/title-verification" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Property Title Verification
                </Link>
              </li>
              <li>
                <Link href="/title-clearance" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Title Clearance & Opinions
                </Link>
              </li>
              <li>
                <Link href="/revenue-record-entry" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Revenue Record Entries
                </Link>
              </li>
              <li>
                <Link href="/legal-documentation" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Legal Documentation & Deeds
                </Link>
              </li>
              <li>
                <Link href="/property-search" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Property & Revenue Search
                </Link>
              </li>
              <li>
                <Link href="/banking-services" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Banking & Financial Services
                </Link>
              </li>
              <li>
                <Link href="/legal-opinion" className="text-slate-400 hover:text-white transition flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-gold-500" /> Legal Research & Opinion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4 pb-2 border-b border-slate-800/80">
              Information & Firm
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition">
                  About TRUSH LEGAL FIRM
                </Link>
              </li>
              <li>
                <Link href="/practice-areas" className="text-slate-400 hover:text-white transition">
                  Comprehensive Practice Overview
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-slate-400 hover:text-white transition">
                  Legal Articles & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition">
                  Consultation & Office Location
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-white transition">
                  Legal Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/admin/login" className="text-slate-500 hover:text-slate-300 transition text-[11px]">
                  Internal Portal (Admin)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4 pb-2 border-b border-slate-800/80">
              Office Location
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300 leading-relaxed">
                  <strong className="text-white block font-serif">TRUSH LEGAL FIRM</strong>
                  {FIRM_DETAILS.office.line1}<br />
                  {FIRM_DETAILS.office.line2}<br />
                  {FIRM_DETAILS.office.cityStateZip}
                </address>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${FIRM_DETAILS.email}`}
                  className="text-slate-300 hover:text-gold-400 transition"
                >
                  {FIRM_DETAILS.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-8 p-4 rounded-lg bg-legal-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200 block mb-1">LEGAL DISCLAIMER:</strong>
            {FIRM_DETAILS.disclaimer}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {FIRM_DETAILS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/disclaimer" className="hover:text-slate-400">
              Disclaimer
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-slate-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

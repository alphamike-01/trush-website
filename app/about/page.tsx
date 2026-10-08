import React from "react";
import type { Metadata } from "next";
import { FIRM_DETAILS } from "@/lib/constants";
import AttorneysSection from "@/components/AttorneysSection";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import Link from "next/link";
import {
  Scale,
  CheckCircle2,
  MapPin,
  Mail,
  ShieldCheck,
  FileSpreadsheet,
  FileCheck2,
  Landmark,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Learn about TRUSH LEGAL FIRM, our specialized practice in Revenue Law and Property Law in Ahmedabad, and our advocates Adv. Akshay J. Radadiya & Adv. Dhruvik A. Gabani.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Header Banner */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5" /> Professional Legal Firm
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              About TRUSH LEGAL FIRM
            </h1>
            <p className="text-gold-300 font-serif text-lg sm:text-xl italic mb-4">
              &ldquo;{FIRM_DETAILS.tagline}&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Committed to deep documentary scrutiny, statutory revenue law compliance, and strategic dispute resolution across Ahmedabad and Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Firm Identity
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-legal-950 mb-6">
                Who We Are
              </h2>
              <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>{FIRM_DETAILS.name}</strong> is a dedicated legal firm established to provide comprehensive, analytical, and reliable legal assistance in <strong>Revenue Law, Property Law, Land Disputes, Title Verification, and Legal Documentation</strong>.
                </p>
                <p>
                  Land and real estate jurisprudence in India is characterized by a fundamental interaction between administrative revenue records (such as Village Form 7/12 extracts, 8A khatas, and Hak Patrak mutation entries) and substantive registered ownership deeds. Misunderstandings at this critical juncture often lead to long-drawn disputes, challenged titles, and costly litigation.
                </p>
                <p>
                  At TRUSH LEGAL FIRM, our practice is designed specifically to assist landholders, property buyers, sellers, partition claimants, and financial institutions in examining records with surgical detail, identifying latent title risks, and asserting their statutory rights before appropriate administrative and judicial forums.
                </p>
              </div>

              {/* Office Details Card */}
              <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-serif font-bold text-legal-950 text-base mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-600" /> Office & Location
                </h3>
                <address className="not-italic text-sm text-slate-700 leading-relaxed">
                  <strong>{FIRM_DETAILS.name}</strong><br />
                  {FIRM_DETAILS.office.line1}<br />
                  {FIRM_DETAILS.office.line2}<br />
                  {FIRM_DETAILS.office.cityStateZip}
                </address>
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-gold-600" />
                  <span className="text-slate-600">Email:</span>
                  <a href={`mailto:${FIRM_DETAILS.email}`} className="font-semibold text-legal-900 hover:text-gold-700">
                    {FIRM_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Why Choose Us Recap */}
            <div className="lg:col-span-5">
              <div className="bg-legal-950 text-white rounded-2xl p-6 sm:p-8 border border-gold-600/30 shadow-md">
                <span className="text-xs font-mono uppercase tracking-wider text-gold-400 font-bold block mb-2">
                  Practice Tenets
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-6">
                  Core Foundations of Our Practice
                </h3>

                <ul className="space-y-4">
                  {FIRM_DETAILS.whyChooseUs.map((item, idx) => (
                    <li key={item.title} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gold-600/20 text-gold-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 border border-gold-500/30">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-gold-300">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gold-600 hover:bg-gold-500 text-legal-950 font-bold text-xs uppercase tracking-wider transition"
                  >
                    <span>Consult With Our Advocates</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE FIRM'S APPROACH SECTION (CLIENT REQUIREMENT 3 & 6) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Rigorous Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-legal-950 mb-3">
              The Firm&apos;s Approach
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every matter entrusted to TRUSH LEGAL FIRM is analyzed through our structured seven-pillar legal protocol.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIRM_DETAILS.approachPillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center font-serif font-bold text-sm mb-4 border border-gold-600/30">
                    0{index + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-legal-950 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-gold-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Standard Firm Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTORNEYS / LAWYERS SECTION */}
      <AttorneysSection />

      {/* DISCLAIMER */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalDisclaimer />
        </div>
      </section>
    </div>
  );
}

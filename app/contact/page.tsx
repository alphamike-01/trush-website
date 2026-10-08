import React from "react";
import type { Metadata } from "next";
import { FIRM_DETAILS } from "@/lib/constants";
import ConsultationForm from "@/components/ConsultationForm";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import {
  MapPin,
  Mail,
  Scale,
  Clock,
  ShieldCheck,
  Building2,
  FileCheck2,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Consultation | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Contact TRUSH LEGAL FIRM in Ahmedabad. Office: B-320, Sun West Bank, Nr. Shiv Cinema, Ashram Road, Ahmedabad – 380009. Email: trushlegalf@gmail.com. Advocates Adv. Akshay J. Radadiya & Adv. Dhruvik A. Gabani.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5" /> Direct Legal Assistance
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Contact TRUSH LEGAL FIRM
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Professional Legal Assistance in Revenue, Land & Property Matters&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Reach out to our advocates to schedule a document evaluation or preliminary consultation at our Ashram Road office in Ahmedabad.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Info on Left, Working Form on Right */}
      <section className="py-16 sm:py-20 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Client-supplied contact details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Firm & Lawyers Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-1">
                  Advocates & Practitioners
                </span>
                <h2 className="font-serif text-2xl font-bold text-legal-950 mb-4">
                  {FIRM_DETAILS.name}
                </h2>

                <div className="space-y-4 mb-6">
                  {FIRM_DETAILS.lawyers.map((lawyer) => (
                    <div
                      key={lawyer.name}
                      className="p-3.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        {lawyer.name
                          .split(" ")
                          .filter((p) => p.startsWith("Adv.") || p.length > 2)
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <div>
                        <div className="font-serif font-bold text-sm text-legal-950">
                          {lawyer.name}
                        </div>
                        <div className="text-xs text-gold-700 font-medium">
                          {lawyer.role} • {lawyer.designation}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {lawyer.specialization}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-4 text-xs sm:text-sm text-slate-700">
                  {/* Exact Office Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-legal-950 font-semibold mb-0.5">
                        Office Address:
                      </strong>
                      <address className="not-italic leading-relaxed text-slate-600">
                        {FIRM_DETAILS.office.line1}<br />
                        {FIRM_DETAILS.office.line2}<br />
                        {FIRM_DETAILS.office.cityStateZip}
                      </address>
                    </div>
                  </div>

                  {/* Exact Email */}
                  <div className="flex items-start gap-3 pt-2">
                    <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-legal-950 font-semibold mb-0.5">
                        Official Email:
                      </strong>
                      <a
                        href={`mailto:${FIRM_DETAILS.email}`}
                        className="text-legal-900 font-semibold hover:text-gold-700 transition"
                      >
                        {FIRM_DETAILS.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Guidelines Card */}
              <div className="bg-legal-950 text-white rounded-2xl p-6 sm:p-7 border border-gold-600/30">
                <h3 className="font-serif font-bold text-lg text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  What to Bring for Consultation
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Latest certified Village Form 7/12 & 8A extracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Certified copies of relevant Village Form 6 Hak Patrak entries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Registered title deed copies (Sale Deeds, Gift Deeds, Banakhat)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <span>Any notice, summon, or order received from revenue or civil authority</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Working Real Consultation Enquiry Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalDisclaimer />
        </div>
      </section>
    </div>
  );
}

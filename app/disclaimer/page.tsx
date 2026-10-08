import React from "react";
import type { Metadata } from "next";
import { FIRM_DETAILS } from "@/lib/constants";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import Link from "next/link";
import { ShieldAlert, Scale, ArrowLeft, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Disclaimer & Regulatory Notice | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Official regulatory notice and legal disclaimer for TRUSH LEGAL FIRM Ahmedabad in accordance with Bar Council of India guidelines.",
};

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldAlert className="w-3.5 h-3.5" /> Official Regulatory Compliance
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Legal Disclaimer & Terms of Access
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Statutory information regarding website access, informational scope, and advocate-client communication parameters.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-white min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 border border-amber-300 text-amber-950">
            <h2 className="font-serif font-bold text-xl sm:text-2xl mb-4 text-amber-950 flex items-center gap-2">
              <Scale className="w-6 h-6 text-amber-800" />
              Client-Supplied Statutory Notice
            </h2>
            <div className="text-sm sm:text-base leading-relaxed text-amber-950 font-medium space-y-4">
              <p>{FIRM_DETAILS.disclaimer}</p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-700 space-y-6 text-sm sm:text-base leading-relaxed border-t border-slate-200 pt-8">
            <h3 className="font-serif text-xl font-bold text-legal-950">
              1. Informational Scope Only
            </h3>
            <p>
              The content provided across the TRUSH LEGAL FIRM website—including descriptions of revenue proceedings, mutation entry mechanisms, RTS appeals, title verification workflows, and articles—is presented solely for general educational and informational convenience. It is not intended to serve as professional legal counsel, binding statutory interpretation, or definitive procedural direction.
            </p>

            <h3 className="font-serif text-xl font-bold text-legal-950">
              2. Absence of Advocate-Client Relationship
            </h3>
            <p>
              Accessing this website, viewing its informational resources, transmitting messages, or submitting an enquiry through the online consultation request form does not constitute or create an advocate-client relationship between you and TRUSH LEGAL FIRM, Adv. Akshay J. Radadiya, Adv. Dhruvik A. Gabani, or any associate advocate. An advocate-client relationship is formally established only upon mutual execution of a vakalatnama or written professional engagement agreement.
            </p>

            <h3 className="font-serif text-xl font-bold text-legal-950">
              3. Case-by-Case Legal Remedies & Forum Selection
            </h3>
            <p>
              Under Indian property and revenue jurisprudence, appropriate legal remedies, statutory limitation periods, and proper forum selection (e.g. Mamlatdar, Sub-Divisional Officer / Prant Officer, District Collector, Special Secretary Revenue Department, or Civil Court) depend fundamentally on the specific facts, certified Village Form 6 Hak Patrak entries, 7/12 extracts, registered deeds, and documentation of each individual matter. No action should be taken or omitted in reliance upon the general information contained on this website without obtaining independent, personalized legal counsel.
            </p>

            <h3 className="font-serif text-xl font-bold text-legal-950">
              4. Bar Council of India Compliance
            </h3>
            <p>
              In strict accordance with the rules framed by the Bar Council of India prohibiting advertisement and solicitation by legal practitioners, TRUSH LEGAL FIRM does not intend or seek to solicit clients, advertise legal services, or induce any person to retain legal counsel through this website. The user acknowledges that they have accessed this website autonomously to seek information regarding the firm and its practice disciplines.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <strong className="block text-legal-950 font-serif text-base mb-1">
                Have questions or need to schedule an in-person consultation?
              </strong>
              <span className="text-xs text-slate-600">
                Contact our Ashram Road office or submit an enquiry via our portal.
              </span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-legal-900 text-gold-400 font-bold text-xs uppercase tracking-wider hover:bg-legal-850 transition"
            >
              <span>Contact Firm</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

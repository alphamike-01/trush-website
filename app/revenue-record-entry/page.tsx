import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  FileSpreadsheet,
  CheckCircle2,
  FileCheck,
  Split,
  Gift,
  ShoppingBag,
  FileEdit,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Property Owner & Revenue Record Entry | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Assistance with Ownership-related revenue entries, Mutation applications, Inheritance (Varsai) entries, Purchase entries, Gift & Partition entries, and Record Corrections in Gujarat.",
};

export default function RevenueRecordEntryPage() {
  const entryTypes = [
    {
      title: "Ownership-Related Revenue Entries",
      icon: FileSpreadsheet,
      description:
        "Drafting and submitting statutory intimations to the Talati-cum-Mantri to record ownership changes pursuant to registered deeds and civil court adjudications.",
    },
    {
      title: "Mutation Applications (Hak Patrak)",
      icon: FileCheck,
      description:
        "Formulating procedural applications under Section 135-C of the Land Revenue Code along with mandatory supporting evidentiary proofs and affidavits.",
    },
    {
      title: "Inheritance Entries (Varsai Nondh)",
      icon: Split,
      description:
        "Recording legal heir succession following the demise of a recorded landholder, ensuring lawful inclusion of all coparceners and statutory Class-I heirs.",
    },
    {
      title: "Purchase Entries",
      icon: ShoppingBag,
      description:
        "Regularizing mutation entries following execution and registration of Sale Deeds, ensuring prompt issuance of Section 135-D notices and timely certification.",
    },
    {
      title: "Gift Entries (Baxix Nondh)",
      icon: Gift,
      description:
        "Entering registered Gift Deeds executed in favor of family members or third parties into revenue registers and removing donor liabilities.",
    },
    {
      title: "Partition Entries (Vahanchni Nondh)",
      icon: Split,
      description:
        "Effecting physical or consensual revenue partition among joint holders, creating independent khata accounts (8A) and demarcated 7/12 entries.",
    },
    {
      title: "Correction of Revenue Records",
      icon: FileEdit,
      description:
        "Initiating statutory rectification proceedings to correct clerical, computational, typographical, or historical errors in area, tenure, or owner names.",
    },
    {
      title: "Objections to Incorrect Entries",
      icon: AlertTriangle,
      description:
        "Drafting and filing formal legal objections within the 30-day notice period under Section 135-D to challenge fraudulent or unauthorized proposed entries.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileSpreadsheet className="w-3.5 h-3.5" /> Revenue Record Regularization
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Property Owner & Revenue Record Entry
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Mutation Applications • Varsai Entries • Partition • Record Rectification&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Legal guidance for landholders and property purchasers to ensure Village Form 6 Hak Patrak entries and 7/12 extracts accurately reflect legal transactions and succession.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Entry Categories
            </span>
            <h2 className="font-serif text-3xl font-bold text-legal-950 mb-3">
              Revenue Entry Services
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We assist in drafting intimations, compiling registered documentation, and representing matters through certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entryTypes.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold-700 font-bold block mb-1">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-legal-950 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-gold-700 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Statutory Compliance</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Initiate Record Update
              </span>
              <h3 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Consult on Revenue Record Regularization
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Need to record a succession entry (Varsai), register a purchase mutation, or rectify an erroneous name in Village Form 7/12? Provide your details for legal evaluation.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong>Mandatory Statutory Notice:</strong> Revenue entries require formal notice under Section 135-D of the Land Revenue Code. Prompt objection filing preserves legal remedies.
              </div>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm defaultMatter="Mutation Entry" />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalDisclaimer />
        </div>
      </section>
    </div>
  );
}

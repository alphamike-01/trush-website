import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  FileCheck2,
  CheckCircle2,
  ShieldCheck,
  Search,
  FileSpreadsheet,
  AlertOctagon,
  FileSignature,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Property Title Verification & Search | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Comprehensive Property Title Verification, 30-Year Chain of Title Search, Mutation Entry Verification, Encumbrance Checks, and Formal Legal Opinions in Gujarat.",
};

export default function TitleVerificationPage() {
  const verificationPillars = [
    {
      title: "Property Document Examination",
      description:
        "Comprehensive scrutiny of primary property deeds, conveyance instruments, sanction plans, Non-Agricultural (NA) permissions, and revenue extract history.",
    },
    {
      title: "Previous Title Document Examination",
      description:
        "Retrospective vetting of antecedent documents through which the current vendor or prior owners acquired their rights over the preceding 30+ years.",
    },
    {
      title: "Revenue Record Search",
      description:
        "Detailed search across Talati records, Village Forms 7/12, 8A, and City Survey property cards to verify landholding continuity and fiscal liability.",
    },
    {
      title: "Mutation Entry Verification",
      description:
        "Tracing certified copies of Village Form No. 6 (Hak Patrak) mutation entries to confirm proper recording and certification of past transfers.",
    },
    {
      title: "Ownership Verification",
      description:
        "Verifying whether the vendor holds absolute, marketable ownership free from undisclosed co-sharer interests, minor rights, or statutory liens.",
    },
    {
      title: "Encumbrance-Related Examination",
      description:
        "Scrutinizing Sub-Registrar Index-II registers, bank mortgage notations, court attachments, lis pendens notices, and municipal tax dues.",
    },
    {
      title: "Chain of Title Examination",
      description:
        "Constructing a chronological, unbroken link of title transfers showing how each owner's title lawfully derived from the preceding title holder.",
    },
    {
      title: "Identification of Potential Title Issues",
      description:
        "Spotting latent vulnerabilities including missing link documents, uncertified mutation entries, tenancy restrictions (Section 63), or inheritance disputes.",
    },
    {
      title: "Legal Opinion Regarding Property Title",
      description:
        "Drafting a formal, written Title Search Report and Legal Opinion advising whether the title is clear, marketable, and safe for purchase or mortgaging.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileCheck2 className="w-3.5 h-3.5" /> Due Diligence Services
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Property Title Verification & Search
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Chain of Title • Revenue Record Search • Encumbrance Examination • Written Legal Opinion&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Before purchasing or financing real property, verify every antecedent link in the ownership chain with rigorous legal examination.
            </p>
          </div>
        </div>
      </section>

      {/* PROMINENT MANDATORY CLIENT CTA BANNER */}
      <section className="bg-gold-500/10 border-b border-gold-500/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-legal-950 rounded-2xl p-8 sm:p-10 border border-gold-600/40 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-400 font-bold block mb-2">
                Essential Buyer Precaution
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 leading-snug">
                Planning to Purchase Property? Get Your Title Checked Before You Proceed.
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Under the Indian law principle of <em>Caveat Emptor</em> (buyer beware), the onus is on the purchaser to ascertain that the seller has clear, marketable title. Do not commit funds without verifying the 30-year documentary chain.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="#verification-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-gold-600 hover:bg-gold-500 text-legal-950 font-bold text-xs uppercase tracking-wider transition shadow-lg border border-gold-400"
              >
                <span>Initiate Title Search</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Pillars Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Exhaustive Scope
            </span>
            <h3 className="font-serif text-3xl font-bold text-legal-950 mb-3">
              Components of Our Title Verification
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every title report synthesized by TRUSH LEGAL FIRM covers these essential documentary streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verificationPillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center font-bold text-sm mb-4 border border-gold-600/30">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-legal-950 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-gold-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Standard Due Diligence Protocol</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200" id="verification-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Title Review
              </span>
              <h3 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Request Title Verification & Opinion
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Provide preliminary details regarding the immovable property (survey number, village/taluka, and proposed transaction) to schedule a title search.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <p>
                  <strong>What you receive:</strong> A comprehensive, advocate-signed Title Search Report analyzing registered deeds, Hak Patrak entries, encumbrances, and clear advice on marketability.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm defaultMatter="Property Title" />
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

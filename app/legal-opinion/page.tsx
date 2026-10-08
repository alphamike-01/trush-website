import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  FileSignature,
  Scale,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Research & Written Opinion | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Formal legal opinions and legal research regarding Land Ownership, Property Title, Revenue Entries, Mutation Disputes, and Jurisdiction in Gujarat.",
};

export default function LegalOpinionPage() {
  const opinionCategories = [
    {
      title: "Land Ownership Legal Opinions",
      description:
        "Analyzing substantive ownership claims, ancestral versus self-acquired titles, coparcenary rights, and validity of conveyances.",
    },
    {
      title: "Property Title Marketability Opinions",
      description:
        "Comprehensive assessment of title validity, absence of encumbrances, bankability, and conditions precedent for safe acquisition.",
    },
    {
      title: "Revenue Entries & Hak Patrak Opinions",
      description:
        "Evaluating the legality, certification validity, and statutory regularity of Village Form 6 mutation entries and Village Form 7/12 records.",
    },
    {
      title: "Mutation Disputes Legal Strategies",
      description:
        "Rendering strategic written advice on options for challenging or defending disputed mutation entries under the Land Revenue Code.",
    },
    {
      title: "Property Transaction Risk Opinions",
      description:
        "Scrutinizing pending development agreements, agreements to sell (Banakhat), power of attorney structures, and stamp duty implications.",
    },
    {
      title: "Revenue Jurisdiction & Authority Remedies",
      description:
        "Advising on the precise jurisdictional competence of Mamlatdar, Sub-Divisional Officer (Prant), Collector, or Civil Court for specific grievances.",
    },
    {
      title: "Documentation Enforceability Opinions",
      description:
        "Reviewing the legal enforceability, registration compliance, and evidentiary admissibility of existing property deeds and covenants.",
    },
    {
      title: "Land Dispute Resolution Opinions",
      description:
        "Providing comprehensive legal assessments of pending civil litigation, RTS appeals, injunction prospects, and statutory limitation bars.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileSignature className="w-3.5 h-3.5" /> Analytical Legal Service
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Legal Research & Written Opinion
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Document-Based Analysis • Statutory Interpretation • Written Legal Guidance&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Clear, definitive written legal opinions on complex revenue, land, and property disputes, grounded in applicable statutes and authoritative judicial rulings.
            </p>
          </div>
        </div>
      </section>

      {/* MANDATORY STATEMENT (CLIENT REQUIREMENT 16) */}
      <section className="py-10 bg-amber-50/70 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl bg-white border border-amber-300 shadow-sm flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-700 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-serif font-bold text-amber-950 text-base mb-1">
                Firm Opinion Policy: Document-Based Examination
              </h2>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                <strong>Legal opinions are provided strictly after examination of relevant documents and facts.</strong> TRUSH LEGAL FIRM does not offer speculative advice without first scrutinizing the underlying registered deeds, Village Form 7/12, Hak Patrak mutation entries, and judicial orders affecting the subject land parcel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Areas Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Advisory Scopes
            </span>
            <h3 className="font-serif text-3xl font-bold text-legal-950 mb-3">
              Written Opinions Covered
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We deliver structured, actionable written opinions across the spectrum of land and revenue jurisprudence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {opinionCategories.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-legal-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-gold-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Formal Written Opinion</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Opinion Request
              </span>
              <h3 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Commission a Formal Written Opinion
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Share a synopsis of your matter along with the list of available deeds and revenue extracts. Our advocates will schedule a document inspection.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong>Deliverable:</strong> Formal advocate-signed written opinion setting out material facts, legal issues, applicable statutory provisions, judicial case law, and specific advisory recommendations.
              </div>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm defaultMatter="Other" />
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

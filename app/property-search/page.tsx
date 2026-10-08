import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";
import {
  Search,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  FileCheck2,
  FileSignature,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Property & Revenue Record Search Workflow | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Systematic examination of available revenue records and property documents to identify ownership history, mutation entries, and related information in Gujarat.",
};

export default function PropertySearchPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Search className="w-3.5 h-3.5" /> Investigation Protocol
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Property & Revenue Record Search
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Historical Revenue Records • Sub-Registrar Indexes • Ownership History Trace&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We examine available revenue records and property documents to reconstruct ownership history, identify certified and uncertified mutation entries, and reveal underlying legal encumbrances.
            </p>
          </div>
        </div>
      </section>

      {/* CORE WORKFLOW VISUALIZATION (CLIENT REQUIREMENT 14) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Step-by-Step Methodology
            </span>
            <h2 className="font-serif text-3xl font-bold text-legal-950 mb-3">
              The 5-Phase Search & Verification Workflow
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Each search progresses systematically through five distinct operational phases, culminating in a written Legal Opinion.
            </p>
          </div>

          <WorkflowVisualizer />
        </div>
      </section>

      {/* In-Depth Explanation Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Documentary Scope
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-legal-950 mb-4">
                What Records Are Examined?
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                Our search protocol involves inspecting both administrative land revenue archives and statutory registration records to eliminate information asymmetries:
              </p>

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Village Form No. 6 (Hak Patrak):</strong> Certified copies of every mutation entry recorded against the survey number over 30+ years.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Village Form 7/12 & 8A Extracts:</strong> Historical and current cultivator, possession, tenant, and khata entries.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sub-Registrar Index-II Registers:</strong> Public index archives recording registered sales, mortgages, gifts, and leases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>City Survey Property Cards:</strong> Urban property cards verifying measurement sheets and municipal municipal holdings.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-legal-950 text-white border border-gold-600/30">
              <h4 className="font-serif text-xl font-bold text-gold-400 mb-3">
                Why Unverified Records Pose High Risk
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Property transactions conducted without tracing previous revenue mutation entries frequently inherit latent disputes—such as unnotified family heirs, uncertified entries, or tenancy violations that surface years later.
              </p>
              <div className="p-4 rounded-xl bg-legal-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <em>&ldquo;Detailed examination of documents, revenue records, and legal research form the cornerstone of secure real estate transactions.&rdquo;</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Request */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Order Search
              </span>
              <h3 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Initiate a Property & Revenue Search
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Provide the survey number, village, taluka, and available document copies to commission our advocates for a multi-phase record search and written opinion.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm defaultMatter="Property Search" />
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalDisclaimer />
        </div>
      </section>
    </div>
  );
}

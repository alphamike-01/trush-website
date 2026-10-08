import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  FolderLock,
  CheckCircle2,
  FileCheck2,
  FileText,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Title Clearance & Certification | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Title Clearance services, Public Notice publication, chain of ownership verification, sale deed examination, and discrepancy rectification in Gujarat.",
};

export default function TitleClearancePage() {
  const clearanceComponents = [
    {
      title: "Title Search",
      description: "Thorough multi-tier search across government registries and land revenue offices spanning at least 30 years.",
    },
    {
      title: "Chain of Ownership Verification",
      description: "Establishing that each transfer of title was lawful, uninterrupted, duly stamped, and executed by authorized parties.",
    },
    {
      title: "Sale Deed Examination",
      description: "In-depth review of recitals, property descriptions, boundary schedules, consideration clauses, and seller covenants in conveyance deeds.",
    },
    {
      title: "Registered-Document Examination",
      description: "Inspecting all registered instruments (mortgages, gifts, release deeds, powers of attorney, partition deeds) registered at the Sub-Registrar.",
    },
    {
      title: "Revenue Record Verification",
      description: "Correlating registered deeds against Village Forms 7/12, 8A, and City Survey property cards for total consistency.",
    },
    {
      title: "Mutation Entry Verification",
      description: "Confirming that each change of ownership was duly recorded and certified in Village Form No. 6 Hak Patrak.",
    },
    {
      title: "Discrepancy Identification",
      description: "Pinpointing clerical errors, survey number mismatches, boundary discrepancies, missing heir consents, or unresolved charges.",
    },
    {
      title: "Title-Related Legal Opinion",
      description: "Issuing formal written findings evaluating whether the property has clear, marketable, and unencumbered title.",
    },
    {
      title: "Transaction Documentation Requirements",
      description: "Advising on statutory stamp duty, registration prerequisites, indemnity undertakings, and NOC requirements prior to execution.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FolderLock className="w-3.5 h-3.5" /> Title Due Diligence
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Title Verification & Title Clearance
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Deed Examination • Public Notices • Discrepancy Rectification • Title Opinions&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Eliminate title defects and transaction risks through systematic scrutiny of registered conveyances, revenue records, and public claims.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Scope of Work
            </span>
            <h2 className="font-serif text-3xl font-bold text-legal-950 mb-3">
              Title Clearance Methodology
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our title clearance process covers each fundamental step required to establish unassailable marketability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clearanceComponents.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-legal-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-gold-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mandatory Scrutiny Item</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Request */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Clearance Consultation
              </span>
              <h3 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Request Title Clearance Assistance
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Whether executing a high-value property acquisition or preparing documentation for banking sanction, our advocates verify every title instrument.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <p>
                  <strong>Deliverable:</strong> Title Clearance Certificate, Title Search Report, and discrepancy rectification recommendations.
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

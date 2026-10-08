"use client";

import React, { useState } from "react";
import {
  Search,
  FileSpreadsheet,
  FileCheck2,
  Scale,
  FileSignature,
  ArrowDown,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "PROPERTY SEARCH",
    subtitle: "Preliminary Identification & Registry Index Inspection",
    icon: Search,
    description:
      "Locating and identifying the subject parcel across municipal/panchayat records, Sub-Registrar Index-II databases, and revenue survey numbers.",
    details: [
      "Verification of revenue survey numbers, block numbers, or TP/FP scheme allotments",
      "Inspection of Sub-Registrar registration indexes for registered transactions",
      "Assessment of geographical coordinates, boundaries, and physical identity",
    ],
  },
  {
    step: 2,
    title: "REVENUE RECORD EXAMINATION",
    subtitle: "Historical Scrutiny of Hak Patrak & Extracts",
    icon: FileSpreadsheet,
    description:
      "Deep examination of certified Village Form No. 6 (Hak Patrak), 7/12 extracts, and 8A khata records covering 30+ years of revenue entries.",
    details: [
      "Extraction and reading of certified Village Form 6 mutation entries",
      "Analysis of Village Form 7 (ownership/possession) and 12 (crops/tenancy/liens)",
      "Cross-referencing 8A Khata holdings to determine ancestral versus self-acquired lineage",
    ],
  },
  {
    step: 3,
    title: "DOCUMENT VERIFICATION",
    subtitle: "Chain of Title & Registered Deed Scrutiny",
    icon: FileCheck2,
    description:
      "Verification of original and registered conveyances to establish a coherent, uninterrupted 30-year chain of title ownership.",
    details: [
      "Scrutiny of previous sale deeds, gift deeds, release deeds, and partition instruments",
      "Checking valid registration endorsements, stamp duty adequacy, and execution dates",
      "Review of Non-Agricultural (NA) orders, development permissions, or layout plans",
    ],
  },
  {
    step: 4,
    title: "LEGAL ANALYSIS",
    subtitle: "Statutory Compliance & Dispute Assessment",
    icon: Scale,
    description:
      "Application of substantive land and revenue laws to identify defects, pending disputes, tenancy encumbrances, or statutory restrictions.",
    details: [
      "Scrutiny under Gujarat Tenancy Act (Sec 63 farmer eligibility), fragmentation & ceiling laws",
      "Detection of pending RTS cases, civil court lis pendens, or tax liabilities",
      "Assessment of legal heirs' rights, minor interests, or unregistered claims",
    ],
  },
  {
    step: 5,
    title: "OPINION",
    subtitle: "Comprehensive Formal Title / Legal Opinion",
    icon: FileSignature,
    description:
      "Issuance of a formal written Title Verification / Legal Opinion report detailing title findings, risks, and recommended safeguards.",
    details: [
      "Clear findings on title validity, marketability, and ownership status",
      "Detailed chronological timeline of mutation entries and registered conveyances",
      "Specific legal recommendations and transaction safeguards prior to execution",
    ],
  },
];

export default function WorkflowVisualizer() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Top Header */}
      <div className="bg-legal-950 p-6 sm:p-8 text-white border-b border-gold-600/30">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
          Methodological Legal Due Diligence
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
          Property & Revenue Record Search Workflow
        </h3>
        <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
          Our systematic five-phase examination protocol ensures every revenue entry, registered deed, and statutory compliance factor is verified before property decisions are made.
        </p>
      </div>

      {/* Step Tabs for Desktop & Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-5 border-b border-slate-200 bg-slate-50/60 divide-y md:divide-y-0 md:divide-x divide-slate-200">
        {WORKFLOW_STEPS.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeStep === index;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`p-4 text-left transition flex items-center md:flex-col md:items-start gap-3.5 focus:outline-none ${
                isActive
                  ? "bg-white border-b-2 md:border-b-0 md:border-t-4 border-gold-600 shadow-sm"
                  : "hover:bg-slate-100/70 opacity-80 hover:opacity-100"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs flex-shrink-0 transition ${
                  isActive
                    ? "bg-legal-950 text-gold-400"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {item.step}
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                  Phase 0{item.step}
                </div>
                <div
                  className={`font-serif font-bold text-xs sm:text-sm leading-tight ${
                    isActive ? "text-legal-950" : "text-slate-700"
                  }`}
                >
                  {item.title}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Display */}
      <div className="p-6 sm:p-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <div className="text-xs uppercase font-bold tracking-wider text-gold-600 mb-1">
                Phase {WORKFLOW_STEPS[activeStep].step} of 5
              </div>
              <h4 className="font-serif text-2xl font-bold text-legal-950">
                {WORKFLOW_STEPS[activeStep].title}
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                {WORKFLOW_STEPS[activeStep].subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-3.5 py-1.5 rounded-md border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 transition"
              >
                Previous Phase
              </button>
              <button
                type="button"
                disabled={activeStep === WORKFLOW_STEPS.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(WORKFLOW_STEPS.length - 1, prev + 1))}
                className="px-3.5 py-1.5 rounded-md bg-legal-900 text-gold-400 text-xs font-semibold hover:bg-legal-850 disabled:opacity-40 transition"
              >
                Next Phase
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Scope & Objectives
              </h5>
              <p className="text-sm text-slate-700 leading-relaxed mb-6">
                {WORKFLOW_STEPS[activeStep].description}
              </p>

              <div className="p-4 rounded-lg bg-gold-50/60 border border-gold-200/70 text-xs text-gold-950 leading-relaxed">
                <strong>Why this step matters:</strong> Examining available revenue records and property documents enables precise identification of ownership history, mutation entries, and underlying rights before committing to transactions.
              </div>
            </div>

            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Key Verification Items
              </h5>
              <ul className="space-y-3">
                {WORKFLOW_STEPS[activeStep].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Sequence Chain */}
      <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-600">
        <span>PROPERTY SEARCH</span>
        <ArrowRight className="w-3.5 h-3.5 text-gold-600 hidden sm:inline" />
        <ArrowDown className="w-3.5 h-3.5 text-gold-600 inline sm:hidden" />
        <span>REVENUE RECORD EXAMINATION</span>
        <ArrowRight className="w-3.5 h-3.5 text-gold-600 hidden sm:inline" />
        <ArrowDown className="w-3.5 h-3.5 text-gold-600 inline sm:hidden" />
        <span>DOCUMENT VERIFICATION</span>
        <ArrowRight className="w-3.5 h-3.5 text-gold-600 hidden sm:inline" />
        <ArrowDown className="w-3.5 h-3.5 text-gold-600 inline sm:hidden" />
        <span>LEGAL ANALYSIS</span>
        <ArrowRight className="w-3.5 h-3.5 text-gold-600 hidden sm:inline" />
        <ArrowDown className="w-3.5 h-3.5 text-gold-600 inline sm:hidden" />
        <span className="text-legal-950 font-bold bg-gold-100 px-2 py-0.5 rounded border border-gold-300">
          OPINION
        </span>
      </div>
    </div>
  );
}

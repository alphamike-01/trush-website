import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  Landmark,
  ShieldCheck,
  CheckCircle2,
  FileCheck2,
  FileSignature,
  FileSpreadsheet,
  ArrowRight,
  Briefcase,
  Building2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Banking & Financial Institution Legal Services | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Institutional title scrutiny, property document verification, title opinions, and mortgage documentation services for Banks, NBFCs, HFCs, and financial institutions.",
};

export default function BankingServicesPage() {
  const institutionalServices = [
    {
      title: "Property Document Verification",
      description:
        "Meticulous verification of primary title deeds, chain conveyances, building permits, NA orders, and layout sanctions presented by loan applicants.",
    },
    {
      title: "Title Search (30-Year Retrospective)",
      description:
        "Comprehensive 30-year documentary search across revenue archives and Sub-Registrar Index-II registers to detect unrecorded alienations.",
    },
    {
      title: "Title Search Report & Opinion (TIR)",
      description:
        "Drafting professional, structured Title Investigation Reports and Opinions analyzing title marketability, risks, and conditions precedent for loan disbursement.",
    },
    {
      title: "Document Scrutiny & Vetting",
      description:
        "Critical legal scrutiny of applicant title documents, powers of attorney, succession deeds, and developer agreements to prevent fraudulent loan collateralization.",
    },
    {
      title: "Registration-Related Assistance",
      description:
        "Facilitating lawful execution and registration of mortgage deeds, memoranda of entry, and deposit of title deeds before Sub-Registrar offices.",
    },
    {
      title: "Mortgage Documentation",
      description:
        "Drafting simple mortgages, registered mortgages, memoranda of entry for equitable mortgage, and declarations for deposit of original title deeds.",
    },
    {
      title: "Property-Related Legal Documentation",
      description:
        "Formulating supplementary loan covenants, tripartite agreements, developer NOCs, borrower affidavits, and legal indemnity undertakings.",
    },
    {
      title: "Revenue Record Verification",
      description:
        "Cross-verifying borrower land parcels against certified Village Forms 7/12, 8A, Hak Patrak entries, and revenue lien notations.",
    },
  ];

  const targetInstitutions = [
    { name: "Scheduled Commercial Banks", focus: "Retail home loans, commercial real estate financing, and agricultural lending due diligence." },
    { name: "Non-Banking Financial Companies (NBFCs)", focus: "Loan Against Property (LAP), project funding, and builder finance title vetting." },
    { name: "Housing Finance Companies (HFCs)", focus: "Affordable housing title verification, individual plot loans, and apartment title scrutiny." },
    { name: "Private Financial Institutions & Funds", focus: "Structured credit collateral verification and specialized real estate security documentation." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Landmark className="w-3.5 h-3.5" /> Institutional Legal Services
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Banking & Financial Institution Services
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Title Scrutiny • Mortgage Documentation • Vetting & Title Opinions&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Providing professional legal title scrutiny, document verification, and mortgage perfection services tailored for institutional lenders operating in Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Target Audience Overview */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-1">
              Institutional Capabilities
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-legal-950">
              Services Designed For Institutional Lenders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetInstitutions.map((item) => (
              <div
                key={item.name}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between"
              >
                <div>
                  <Building2 className="w-6 h-6 text-legal-900 mb-3" />
                  <h3 className="font-serif font-bold text-base text-legal-950 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Scope of Deliverables
            </span>
            <h3 className="font-serif text-3xl font-bold text-legal-950 mb-3">
              Title Scrutiny & Vetting Portfolio
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Structured to safeguard institutional capital against title defects, double mortgaging, and regulatory non-compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {institutionalServices.map((srv, idx) => (
              <div
                key={srv.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-legal-950 mb-2">
                    {srv.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-gold-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Due Diligence Protocol</span>
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
                Institutional Contact
              </span>
              <h3 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Connect for Institutional Legal Support
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Connect with our advocates to discuss title verification, loan documentation vetting, or institutional representation across Ahmedabad.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
                <p>
                  <strong>Professional Policy:</strong> Services are offered on a formal professional engagement basis in accordance with Bar Council of India guidelines.
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

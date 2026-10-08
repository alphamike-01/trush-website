import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  FileText,
  FileCheck2,
  CheckCircle2,
  ShieldCheck,
  Building,
  Key,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Documentation & Conveyancing | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Expert drafting of Sale Deeds, Agreements to Sell (Banakhat), Gift Deeds, Partition Deeds, Release Deeds, Powers of Attorney, Legal Notices, and Affidavits in Ahmedabad.",
};

export default function LegalDocumentationPage() {
  const documentTypes = [
    {
      title: "Sale Deed (Vechan Dastavej)",
      description:
        "Drafting substantive conveyance deeds conveying absolute ownership title, incorporating rigorous seller indemnities, exact metes and bounds, and encumbrance covenants.",
    },
    {
      title: "Agreement to Sell (Banakhat / Satakhat)",
      description:
        "Structuring enforceable agreements specifying terms of earnest money, condition precedents, NOC requirements, payment timelines, and consequences of default.",
    },
    {
      title: "Gift Deed (Baxix Dastavej)",
      description:
        "Drafting voluntary conveyances transferring property without monetary consideration to blood relatives, compliant with stamp laws and Registration Act provisions.",
    },
    {
      title: "Mortgage Documents & Deeds",
      description:
        "Drafting simple mortgages, registered mortgages, memoranda of entry for deposit of title deeds, and loan security documentation.",
    },
    {
      title: "Partition Deed (Vahanchni Dastavej)",
      description:
        "Drafting legally binding division instruments among coparceners and co-sharers defining individual physical boundaries, revenue shares, and mutual waivers.",
    },
    {
      title: "Release Deed (Chhut Dastavej / Relinquishment)",
      description:
        "Drafting deeds wherein a co-owner or legal heir renounces and surrenders their undivided interest in immovable property in favor of other co-sharers.",
    },
    {
      title: "Power of Attorney (Mukhtyarnama)",
      description:
        "Drafting General and Special Powers of Attorney with precise authorizations, revocability clauses, and statutory stamp duty structuring.",
    },
    {
      title: "Affidavits & Sworn Undertakings",
      description:
        "Preparing statutory sworn declarations for revenue authorities, family trees (Pedhinama), heirship affidavits, and identity discrepancy declarations.",
    },
    {
      title: "Statutory Undertakings & Indemnities",
      description:
        "Drafting indemnity bonds safeguarding purchasers, banks, or developers against future third-party litigation or undisclosed succession disputes.",
    },
    {
      title: "Legal Notices",
      description:
        "Drafting and serving formal demand notices, notices for specific performance of sale agreements, revocation of power of attorney, and title defect notices.",
    },
    {
      title: "Property-Related Agreements",
      description:
        "Drafting Joint Development Agreements (JDA), development rights transfers, commercial leases, leave & license agreements, and easements.",
    },
    {
      title: "Other Legal Documentation",
      description:
        "Custom legal instruments tailored to non-standard transactions, family settlements, rectification deeds (Durasti Dastavej), and supplementary covenants.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileText className="w-3.5 h-3.5" /> Conveyancing & Drafting
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Legal Documentation & Drafting
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Sale Deeds • Agreements to Sell • Gift & Partition Deeds • Legal Notices&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every clause in property documentation shapes legal consequences. Our advocates prepare legally sound, unambiguous instruments compliant with Indian registration and stamp laws.
            </p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Drafting Capabilities
            </span>
            <h2 className="font-serif text-3xl font-bold text-legal-950 mb-3">
              Comprehensive Legal Documentation
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Precision drafting designed to protect rights, prevent future litigation, and secure enforceability before registration authorities and courts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentTypes.map((doc, idx) => (
              <div
                key={doc.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-legal-950 mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-gold-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Drafted by Advocates</span>
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
                Drafting Request
              </span>
              <h3 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Request Drafting of Legal Instruments
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Executing a property conveyance, family settlement, or notice? Provide the transaction details and party information to schedule drafting with our advocates.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong>Important:</strong> Agreements to sell do not convey title by themselves; a properly stamped and registered sale deed is required under Section 54 of the Transfer of Property Act.
              </div>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm defaultMatter="Legal Documentation" />
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

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FIRM_DETAILS } from "@/lib/constants";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import {
  FileSpreadsheet,
  Scale,
  FileCheck2,
  FileText,
  Search,
  Landmark,
  Gavel,
  ShieldCheck,
  ArrowRight,
  FolderLock,
  Building,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Practice Areas | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Comprehensive overview of legal practice areas at TRUSH LEGAL FIRM: Revenue Law, Land Law, Property Law, Title Verification, Legal Documentation, Property Search, Banking Law, and Civil Litigation.",
};

export default function PracticeAreasPage() {
  const practiceAreasList = [
    {
      id: "revenue-law",
      title: "Revenue Law",
      subtitle: "Mutation, Hak Patrak, RTS & Collector Proceedings",
      icon: FileSpreadsheet,
      href: "/revenue-law",
      summary:
        "Comprehensive representation and advisory on land revenue records under the Gujarat Land Revenue Code, Village Form 6 Hak Patrak entries, disputed mutations, and administrative revenue appeals.",
      services: [
        "Mutation Entries (Purchase, Inheritance/Varsai, Gift, Partition)",
        "Revenue Entry Disputes & Objections (Takrari Nondh)",
        "RTS Proceedings (Dispute cases before Mamlatdar, Appeals to Prant Officer)",
        "Collector Proceedings & Revision Applications",
        "Mamlatdar & Prant Officer Administrative Matters",
        "Agricultural and Non-Agricultural (NA) Land Revenue Matters",
      ],
    },
    {
      id: "land-law",
      title: "Land Law & Land Disputes",
      subtitle: "Ownership, Possession & Boundary Conflicts",
      icon: Scale,
      href: "/land-disputes",
      summary:
        "Adjudication and dispute handling concerning agricultural land holdings, possession disputes, boundary demarcations, partition claims, and differentiating revenue entries from substantive civil title rights.",
      services: [
        "Ownership and Title-Related Disputes",
        "Possession and Dispossession Claims",
        "Boundary and Encroachment Disputes",
        "Inheritance & Ancestral Land Disputes",
        "Agricultural Tenancy & Section 63 Compliance",
        "Partition Disputes among Co-Sharers",
      ],
    },
    {
      id: "property-law",
      title: "Property Law",
      subtitle: "Immovable Property Rights & Conveyancing",
      icon: Building,
      href: "/land-disputes",
      summary:
        "Legal advisory and dispute management governing immovable property transactions, transfer of property covenants, co-ownership rights, and contractual enforcement of agreements to sell.",
      services: [
        "Property Transaction Advisory & Due Diligence",
        "Transfer of Property Act Compliance",
        "Specific Performance of Sale Agreements (Banakhat)",
        "Co-Ownership, Joint Property & Partition Rights",
        "Lease, Tenancy & License Structuring",
        "Commercial & Residential Property Legal Audits",
      ],
    },
    {
      id: "title-verification",
      title: "Title Verification & Search",
      subtitle: "30-Year Chain of Title Due Diligence",
      icon: FileCheck2,
      href: "/title-verification",
      summary:
        "Exhaustive title examination investigating 30+ years of previous registered conveyances, revenue records, Sub-Registrar encumbrance indexes, and issuing formal written Title Opinions.",
      services: [
        "Unbroken Chain of Title Scrutiny (30 Years)",
        "Previous Registered Conveyance Inspection",
        "Village Form 6 Hak Patrak Mutation Trace",
        "Sub-Registrar Encumbrance Certificate Verification",
        "Identification of Latent Title Defects & Risks",
        "Formal Written Legal Opinion & Title Certificate",
      ],
    },
    {
      id: "title-clearance",
      title: "Title Clearance",
      subtitle: "Public Notices & Defect Rectification",
      icon: FolderLock,
      href: "/title-clearance",
      summary:
        "Structured title clearance process involving registered deed scrutiny, discrepancy identification, publication of public title notices in newspapers, and issuance of clearance certificates.",
      services: [
        "Public Title Notice drafting & newspaper publication",
        "Handling third-party objections and claims",
        "Rectification of deed discrepancies (correction deeds)",
        "Title Clearance Certificates for buyers & developers",
        "Pre-transaction documentation requirements",
      ],
    },
    {
      id: "legal-documentation",
      title: "Legal Documentation",
      subtitle: "Deeds, Conveyancing & Agreements",
      icon: FileText,
      href: "/legal-documentation",
      summary:
        "Drafting robust, enforceable, and legally precise conveyancing instruments, deeds, powers of attorney, legal notices, and property-related affidavits.",
      services: [
        "Sale Deeds (Vechan Dastavej) & Conveyance Instruments",
        "Agreements to Sell (Banakhat) & Memorandums",
        "Gift Deeds (Baxix Dastavej) & Release Deeds (Chhut Dastavej)",
        "Partition Deeds (Vahanchni Dastavej)",
        "General & Special Powers of Attorney (Mukhtyarnama)",
        "Mortgage Deeds, Legal Notices & Sworn Affidavits",
      ],
    },
    {
      id: "property-search",
      title: "Property & Revenue Record Search",
      subtitle: "5-Phase Verification Protocol",
      icon: Search,
      href: "/property-search",
      summary:
        "Historical revenue and registration archives search reconstructing the ownership lineage, mutation history, and official record status of immovable property parcels.",
      services: [
        "Village Form 7/12 & 8A Historical Search",
        "Village Form 6 Hak Patrak Mutation Retrieval",
        "Sub-Registrar Index-II Archive Inspection",
        "City Survey Property Card Examination",
        "Identification of Past Transactions & Liens",
      ],
    },
    {
      id: "banking-law",
      title: "Banking & Financial Institution Services",
      subtitle: "Title Scrutiny & Lending Due Diligence",
      icon: Landmark,
      href: "/banking-services",
      summary:
        "Institutional property document verification, title search reports, mortgage documentation scrutiny, and title vetting tailored for Banks, NBFCs, and Housing Finance Companies (HFCs).",
      services: [
        "Title Investigation Reports (TIR) for Lenders",
        "Mortgage Document Scrutiny & Perfection",
        "Equitable and Registered Mortgage Drafting",
        "Revenue Record Vetting for Project Finance",
        "Registration Assistance & Document Verification",
      ],
    },
    {
      id: "civil-litigation",
      title: "Civil Litigation",
      subtitle: "Declaratory Suits, Injunctions & Appeals",
      icon: Gavel,
      href: "/land-disputes",
      summary:
        "Civil advocacy before competent civil courts in Ahmedabad and Gujarat for declaration of ownership, cancellation of fraudulent deeds, injunctions against interference, and partition suits.",
      services: [
        "Declaratory Suits under Specific Relief Act",
        "Permanent & Temporary Injunction Suits",
        "Cancellation of Defective / Fraudulent Sale Deeds",
        "Civil Suits for Partition & Separate Possession",
        "Civil Appeals & Revision Petitions",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-400 font-bold block mb-3">
              TRUSH LEGAL FIRM • Practice Overview
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Practice Areas
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Specialized legal advocacy, document scrutiny, and representation centered on revenue administration, property law, and land disputes across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreasList.map((area) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center mb-5 border border-gold-600/30">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold-700 font-bold block mb-1">
                      {area.subtitle}
                    </span>

                    <h2 className="font-serif text-2xl font-bold text-legal-950 mb-3">
                      {area.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                      {area.summary}
                    </p>

                    <div className="border-t border-slate-100 pt-4 mb-6">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                        Core Matters & Services
                      </span>
                      <ul className="space-y-2">
                        {area.services.map((srv, idx) => (
                          <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-gold-600 flex-shrink-0 mt-1.5"></span>
                            <span>{srv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <Link
                      href={area.href}
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-50 hover:bg-legal-950 hover:text-gold-400 text-legal-950 border border-slate-200 text-xs font-bold uppercase tracking-wider transition"
                    >
                      <span>Detailed Practice Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Title Clearance Callout */}
      <section className="bg-legal-950 text-white py-14 border-t border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Planning to Purchase Property? Get Your Title Checked Before You Proceed.
          </h3>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto mb-6">
            Ensure that previous registered deeds, mutation entries, and encumbrance checks are verified prior to executing contracts.
          </p>
          <Link
            href="/title-verification"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-600 hover:bg-gold-500 text-legal-950 font-bold text-xs uppercase tracking-wider transition shadow-md"
          >
            <span>Learn About Title Verification</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalDisclaimer />
        </div>
      </section>
    </div>
  );
}

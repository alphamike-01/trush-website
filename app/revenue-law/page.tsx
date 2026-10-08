import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  FileSpreadsheet,
  Scale,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Gavel,
  Landmark,
  Layers,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Revenue Law & Mutation Entries | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Expert legal representation in Revenue Law, Village Form 6 Mutation Entries, RTS Cases & Appeals, Collector Proceedings, and Mamlatdar matters in Gujarat.",
};

export default function RevenueLawPage() {
  const mutationSections = [
    {
      title: "Mutation Entries (Hak Patrak / Village Form 6)",
      description:
        "Comprehensive procedural assistance in recording, certifying, and regularizing mutation entries reflecting transfers of immovable agricultural and revenue land.",
      items: [
        "Purchase transactions (conveyance and sale deed entries)",
        "Inheritance entries (Varsai nondh / legal heir succession)",
        "Gift-related entries (Baxix nondh)",
        "Partition-related entries (Vahanchni nondh among co-owners)",
        "Release deed entries and mortgage lien notations",
        "Other statutory mutation proceedings",
      ],
    },
    {
      title: "Revenue Entry Disputes & Objections",
      description:
        "Legal advocacy to contest fraudulent, erroneous, or unauthorized mutation entries and defend legitimate landholder interests.",
      items: [
        "Filing objections to tentative revenue entries (Takrari nondh) under Section 135-D",
        "Challenging disputed mutation entries during certification inquiries",
        "Cancellation and correction proceedings for irregular historical entries",
        "Representation before revenue officers during summary spot inquiries",
        "Entry-related legal representation and statutory written submissions",
      ],
    },
    {
      title: "RTS Proceedings (Revenue Takrari Sarta)",
      description:
        "Statutory dispute adjudication under the Gujarat Land Revenue Code and Record of Rights Rules.",
      items: [
        "RTS Dispute Cases contested before the Mamlatdar",
        "RTS Statutory Appeals preferred before the Sub-Divisional Officer (Prant Officer)",
        "RTS Revision applications before the District Collector",
        "Appeals before Special Secretary, Revenue Department (SSRD)",
        "Revenue proceedings concerning land record corrections and delay condonation",
      ],
    },
    {
      title: "Collector Proceedings & Appellate Forums",
      description:
        "Strategic advocacy and representation in high-level district revenue administrative proceedings.",
      items: [
        "Legal representation before the District Collector and Additional Collector",
        "Revenue appeals arising from subordinate revenue officer orders",
        "Revision proceedings examining legality, propriety, and record regularity",
        "Land-related administrative proceedings under Land Revenue Code provisions",
        "Review of breach of condition proceedings (Sharat Bhang)",
      ],
    },
    {
      title: "Mamlatdar & Prant Officer Matters",
      description:
        "Handling day-to-day administrative revenue inquiries, certificate applications, and field verification matters.",
      items: [
        "Revenue proceedings initiated under Section 135 and connected rules",
        "Land-related applications and khata amalgamations/subdivisions",
        "Proceedings concerning possession under the Mamlatdar Courts Act, 1906",
        "Boundary demarcation disputes and measurement verifications",
        "Proceedings concerning possession, tenancy claims, and revenue records",
      ],
    },
    {
      title: "Land Revenue & Land-Use Matters",
      description:
        "Comprehensive regulatory guidance covering agricultural tenure, zoning, and non-agricultural conversion.",
      items: [
        "Agricultural land eligibility issues under Section 63 of Tenancy Laws",
        "Non-Agricultural (NA) land conversion permissions and revenue assessments",
        "Land-use change, zoning classifications, and development clearances",
        "Revenue record issues concerning old tenure (Juni Sharat) vs new tenure (Navi Sharat)",
        "Regularization of fragmented holdings (Tukda Dhara compliance)",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileSpreadsheet className="w-3.5 h-3.5" /> Core Legal Practice
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Revenue Law & Land Record Proceedings
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Mutation Entries • RTS Appeals • Collector Proceedings • Mamlatdar Matters&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              TRUSH LEGAL FIRM provides targeted legal advocacy in revenue proceedings across Ahmedabad and Gujarat, navigating the vital intersections of Village Form 7/12, Hak Patrak, and administrative land records.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Notice */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="font-serif text-xl font-bold text-legal-950 mb-1">
                Navigating Revenue Administration in Gujarat
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                Land revenue records govern fiscal recognition and possession prima facie. An erroneous or disputed mutation entry in Village Form No. 6 can disrupt property rights, stall transactions, or impede agricultural status.
              </p>
            </div>
            <Link
              href="#revenue-consult"
              className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-legal-900 text-gold-400 font-bold text-xs uppercase tracking-wider hover:bg-legal-850 transition shadow"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Consult On Revenue Entry</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Sections */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mutationSections.map((sec, idx) => (
              <div
                key={sec.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center font-bold text-sm mb-4 border border-gold-600/30">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-legal-950 mb-2">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {sec.description}
                  </p>
                  <ul className="space-y-2 border-t border-slate-100 pt-4">
                    {sec.items.map((item, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-gold-700">
                  Advocate Representation Available
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Consultation Section */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200" id="revenue-consult">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Revenue Matter Evaluation
              </span>
              <h2 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Discuss Your Revenue Entry or RTS Matter
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Have an objection to a Village Form 6 mutation entry? Need to file an RTS appeal before the Prant Officer or Collector? Submit your matter details for legal evaluation by our advocates.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <strong className="text-legal-950 block mb-1">Documents typically examined:</strong>
                Certified copies of Village Form 6 (Hak Patrak entries), Village Form 7/12 extract, Village Form 8A khata copy, and registered conveyance or succession proofs.
              </div>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm defaultMatter="Revenue Law" />
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

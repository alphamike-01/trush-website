import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import ConsultationForm from "@/components/ConsultationForm";
import {
  Scale,
  ShieldAlert,
  CheckCircle2,
  AlertTriangle,
  Gavel,
  BookOpen,
  ArrowRight,
  Split,
  Map,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Land & Property Disputes | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Legal guidance in Land & Property Disputes, Ownership, Possession, Boundary, Partition, Agricultural land conflicts, and Revenue vs Civil Title rights in Gujarat.",
};

export default function LandDisputesPage() {
  const disputeCategories = [
    {
      title: "Ownership & Title-Related Disputes",
      description:
        "Conflicts concerning competing claims of ownership over immovable property, fraudulent sale conveyances, or unauthorized alienations.",
      remedies: "Declaratory civil suits, cancellation of fraudulent deeds, injunctions against third-party transfers.",
    },
    {
      title: "Possession & Dispossession Disputes",
      description:
        "Protecting actual physical possession against illegal encroachment, dispossession without due process of law, or boundary trespass.",
      remedies: "Possessory injunction suits under Specific Relief Act, proceedings under the Mamlatdar Courts Act.",
    },
    {
      title: "Boundary & Encroachment Disputes",
      description:
        "Disputes arising from inaccurate site measurements, overlapping survey parcels, encroachment by adjacent plot owners, or missing demarcation stones.",
      remedies: "Government DILR land measurement verifications, panchnama documentation, boundary restoration petitions.",
    },
    {
      title: "Inheritance & Succession Land Disputes",
      description:
        "Disputes among legal heirs regarding ancestral agricultural land, exclusion of coparceners or female heirs in Varsai entries, or contested wills.",
      remedies: "Succession record rectifications, challenge to improper mutation entries, suits for ancestral declaration.",
    },
    {
      title: "Partition Disputes (Vahanchni)",
      description:
        "Contentious divisions of joint family holdings, coparcenary lands, or undivided shares among siblings or co-owners.",
      remedies: "Suits for partition and separate possession by metes and bounds, revenue partition under Section 85 of Land Revenue Code.",
    },
    {
      title: "Agricultural Land & Tenancy Disputes",
      description:
        "Issues involving agriculturist status verification under Section 63 of the Bombay Tenancy and Agricultural Lands Act, protected tenant claims, or tribal land restrictions (Section 73AA).",
      remedies: "Representation before Tenancy Mamlatdars, Agricultural Lands Tribunals (ALT), and Deputy Collectors.",
    },
    {
      title: "Revenue Record & Mutation Entry Disputes",
      description:
        "Disputes where names are wrongly added, mutated, or omitted from Village Form 7/12 or Village Form 6 Hak Patrak.",
      remedies: "Filing objections under Section 135-D, preferring RTS appeals before the Sub-Divisional Officer / Collector.",
    },
    {
      title: "Property Transaction & Agreement Disputes",
      description:
        "Breach of registered or unregistered Agreements to Sell (Banakhat), failure to execute sale deeds, forfeited earnest money, or forged power of attorney transactions.",
      remedies: "Suits for Specific Performance of Contract, recovery of consideration, cancellation of illegal agreements.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5" /> Dispute Advisory & Resolution
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Land & Property Disputes
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Ownership • Possession • Boundaries • Partition • Agricultural Conflicts&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Strategic legal representation in resolving contentious real property disputes through thorough documentary research, appropriate forum selection, and diligent advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* CORE LEGAL DISTINCTION BOX (CLIENT REQUIREMENT 9) */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-2 border-legal-900 bg-slate-50 p-6 sm:p-8 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-legal-950 text-gold-400 flex items-center justify-center flex-shrink-0 border border-gold-600/40">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-1">
                  Foundational Legal Principle
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-legal-950 mb-3">
                  Distinction Between Revenue Records & Substantive Civil Title Rights
                </h2>
                <div className="prose prose-slate text-sm sm:text-base text-slate-700 leading-relaxed space-y-3">
                  <p>
                    A critical principle of Indian property jurisprudence is that <strong>entries in revenue records (such as Village Form 7/12 extracts or Village Form 6 Hak Patrak mutation entries) are maintained primarily for fiscal purposes</strong>—specifically, determining who is liable to pay land revenue to the State Government.
                  </p>
                  <p>
                    <strong>A revenue entry itself does not establish, confer, or extinguish substantive ownership or civil title.</strong> Civil title to immovable property is created exclusively through valid registered title deeds (Sale Deeds, Gift Deeds, Partition Deeds) or competent Civil Court judgments under the Transfer of Property Act and Specific Relief Act.
                  </p>
                  <p className="text-xs text-slate-500 italic">
                    Note: The appropriate forum (Revenue Mamlatdar/Collector versus competent Civil Court) and specific legal remedy depend strictly on the individual facts, documentary records, and statutory provisions governing each matter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dispute Categories Grid */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Dispute Scenarios
            </span>
            <h3 className="font-serif text-3xl font-bold text-legal-950 mb-3">
              Common Land & Property Dispute Matters
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We examine the documentary trail, previous conveyances, and revenue entries to determine the proper forum and legal strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {disputeCategories.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold">
                      Category 0{idx + 1}
                    </span>
                    <Scale className="w-4 h-4 text-slate-400" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-legal-950 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 text-xs">
                  <strong className="text-slate-800 block mb-0.5">Potential Procedural Remedies:</strong>
                  <span className="text-slate-600 leading-relaxed">{item.remedies}</span>
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
                Dispute Consultation
              </span>
              <h3 className="font-serif text-3xl font-bold text-legal-950 mb-4">
                Consult on a Land or Property Conflict
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Facing a disputed mutation entry, boundary encroachment, or partition disagreement? Share the details of the land and relevant records for preliminary evaluation.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed space-y-2">
                <p>
                  <strong>Strategic Note:</strong> Early documentary analysis often prevents improper limitation bars and ensures proceedings are initiated before the correct statutory forum.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm defaultMatter="Land Dispute" />
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

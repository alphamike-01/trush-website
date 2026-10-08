"use client";

import React from "react";
import Link from "next/link";
import { FIRM_DETAILS } from "@/lib/constants";
import { useConsultationModal } from "@/components/ConsultationModal";
import ConsultationForm from "@/components/ConsultationForm";
import WorkflowVisualizer from "@/components/WorkflowVisualizer";
import FAQAccordion from "@/components/FAQAccordion";
import AttorneysSection from "@/components/AttorneysSection";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import {
  Scale,
  FileCheck,
  FileSpreadsheet,
  Building2,
  FileText,
  Search,
  Landmark,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock,
  Compass,
  FileSearch,
} from "lucide-react";

export default function HomePage() {
  const { openModal } = useConsultationModal();

  const coreServices = [
    {
      title: "Revenue Law",
      subtitle: "Mutation & RTS Matters",
      description:
        "Handling mutation entries, disputed entries, RTS cases, appeals, and revision proceedings before Mamlatdar, Prant Officer, and Collector.",
      href: "/revenue-law",
      icon: FileSpreadsheet,
      highlights: ["Mutation Entries", "RTS Proceedings", "Collector Appeals"],
    },
    {
      title: "Land & Property Disputes",
      subtitle: "Ownership & Possession",
      description:
        "Strategic handling of agricultural and non-agricultural land conflicts, boundary disputes, partition issues, and title claims.",
      href: "/land-disputes",
      icon: Scale,
      highlights: ["Ownership & Possession", "Partition Disputes", "Agricultural Land"],
    },
    {
      title: "Title Verification",
      subtitle: "Chain of Ownership Search",
      description:
        "Rigorous 30-year documentary examination, revenue record search, and legal opinion to identify hidden title defects prior to purchase.",
      href: "/title-verification",
      icon: FileCheck,
      highlights: ["30-Year Title Search", "Encumbrance Check", "Written Legal Opinion"],
    },
    {
      title: "Title Clearance",
      subtitle: "Conveyance Verification",
      description:
        "Comprehensive scrutiny of registered sale deeds, discrepancy identification, public notices, and title clearance certificates.",
      href: "/title-clearance",
      icon: FileSearch,
      highlights: ["Registered Deed Scrutiny", "Discrepancy Identification", "Title Certification"],
    },
    {
      title: "Revenue Record Entry",
      subtitle: "Hak Patrak & Khata Regularization",
      description:
        "Assistance with ownership-related revenue entries, purchase entries, inheritance (Varsai), partition, and record corrections.",
      href: "/revenue-record-entry",
      icon: FileSpreadsheet,
      highlights: ["Varsai Entries", "Partition Entries", "Record Correction"],
    },
    {
      title: "Legal Documentation",
      subtitle: "Conveyancing & Deeds",
      description:
        "Precision drafting of Sale Deeds, Agreements to Sell, Gift Deeds, Partition Deeds, Release Deeds, Powers of Attorney, and Affidavits.",
      href: "/legal-documentation",
      icon: FileText,
      highlights: ["Sale Deeds & Banakhat", "Gift & Partition Deeds", "Powers of Attorney"],
    },
    {
      title: "Property & Revenue Search",
      subtitle: "Historical Verification Workflow",
      description:
        "Systematic search across revenue records and Sub-Registrar books to ascertain past transactions and mutation lineage.",
      href: "/property-search",
      icon: Search,
      highlights: ["Hak Patrak Search", "Sub-Registrar Indexes", "Village Forms 7/12 & 8A"],
    },
    {
      title: "Banking & Financial Services",
      subtitle: "Institutional Title Scrutiny",
      description:
        "Title search reports, document verification, mortgage documentation, and title vetting for financial institutions and lenders.",
      href: "/banking-services",
      icon: Landmark,
      highlights: ["Title Scrutiny Reports", "Mortgage Documentation", "Lender Due Diligence"],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* HERO SECTION */}
      <section className="relative bg-legal-950 text-white legal-texture py-20 lg:py-28 overflow-hidden border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Tag / Category Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-3.5 h-3.5" />
              <span>{FIRM_DETAILS.specialties}</span>
            </div>

            {/* Firm Name */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-[1.15]">
              {FIRM_DETAILS.name}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl text-gold-300 font-serif italic mb-6 leading-relaxed">
              &ldquo;{FIRM_DETAILS.tagline}&rdquo;
            </p>

            {/* Introductory Context */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl font-light">
              Representing property owners, agricultural landholders, purchasers, and institutions before revenue and judicial authorities in Ahmedabad and across Gujarat. Focused on meticulous document examination, revenue record verification, and strategic dispute resolution.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openModal()}
                className="px-7 py-3.5 rounded-lg bg-gold-600 hover:bg-gold-500 text-legal-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-gold-500/20 transition active:scale-95 flex items-center gap-2 border border-gold-400"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Book a Consultation</span>
              </button>

              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-lg bg-legal-900/90 hover:bg-legal-850 text-white border border-slate-700 font-semibold text-sm tracking-wide transition hover:border-slate-500"
              >
                Contact Us
              </Link>

              <Link
                href="/practice-areas"
                className="px-6 py-3.5 rounded-lg text-slate-300 hover:text-gold-400 font-semibold text-sm tracking-wide transition flex items-center gap-1.5"
              >
                <span>Our Legal Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Accent Bar */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-40"></div>
      </section>

      {/* WHO WE ARE & CORE APPROACH OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Who We Are */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-gold-700 font-bold mb-3">
                <Compass className="w-4 h-4" /> About The Firm
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-legal-950 mb-5 leading-tight">
                Dedicated Legal Practice in Revenue & Property Matters
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                <strong>{FIRM_DETAILS.name}</strong> is a specialized law firm established in Ahmedabad, focusing on the intricate legal framework governing land revenue records, immovable property title, mutation proceedings, and real estate documentation.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Under the leadership of <strong>Adv. Akshay J. Radadiya</strong> and <strong>Adv. Dhruvik A. Gabani</strong>, our practice bridges the critical divide between administrative revenue entries and substantive civil title rights, helping clients safeguard their real property interests with rigorous documentary scrutiny.
              </p>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/90">
                <h4 className="text-xs font-bold uppercase tracking-wider text-legal-950 mb-2">
                  Head Office Location
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {FIRM_DETAILS.office.fullAddress}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Official Correspondence:</span>
                  <a
                    href={`mailto:${FIRM_DETAILS.email}`}
                    className="font-semibold text-gold-700 hover:text-gold-800"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: The Firm's 7 Approach Pillars */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block">
                      Methodology
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-legal-950">
                      Our Firm&apos;s Approach
                    </h3>
                  </div>
                  <Scale className="w-8 h-8 text-gold-600/40" />
                </div>

                <div className="space-y-4">
                  {FIRM_DETAILS.approachPillars.map((pillar, idx) => (
                    <div
                      key={pillar.title}
                      className="p-3.5 rounded-lg bg-white border border-slate-200/70 shadow-sm flex items-start gap-3.5"
                    >
                      <div className="w-7 h-7 rounded-full bg-legal-950 text-gold-400 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-sm text-legal-950">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Legal Capabilities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-legal-950 mb-3">
              Practice Areas
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Targeted legal advocacy and analytical scrutiny across land revenue administration, property dispute resolution, title verification, and transactional conveyancing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between legal-card-hover group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-legal-50 border border-legal-100 flex items-center justify-center text-legal-900 mb-5 group-hover:bg-legal-950 group-hover:text-gold-400 group-hover:border-gold-600/40 transition">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono uppercase tracking-wider text-gold-700 font-bold block mb-1">
                      {service.subtitle}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-legal-950 mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                      {service.highlights.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-legal-900 group-hover:text-gold-700 transition"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/practice-areas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition shadow-sm"
            >
              <span>View All Practice Areas & Sub-Proceedings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW VISUALIZER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WorkflowVisualizer />
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Firm Strengths
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-legal-950 mb-3">
              Why Choose TRUSH LEGAL FIRM
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We anchor every legal recommendation in exhaustive documentary inspection, statutory revenue knowledge, and transparent client communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FIRM_DETAILS.whyChooseUs.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-xl border border-slate-200/90 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-gold-100/60 text-gold-700 flex items-center justify-center font-serif font-bold text-base mb-4 border border-gold-200">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-legal-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Sixth highlight card: Prompt Consultation */}
            <div className="bg-legal-950 text-white rounded-xl border border-gold-600/40 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-gold-600 text-legal-950 flex items-center justify-center font-bold text-base mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-2">
                  Actionable Legal Roadmap
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  We outline practical legal options, jurisdiction of authorities, and procedural timelines so you move forward with clarity and confidence.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => openModal()}
                  className="text-xs font-bold uppercase tracking-wider text-gold-400 hover:text-gold-300 flex items-center gap-1"
                >
                  <span>Request Review</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATTORNEYS / LAWYERS SECTION */}
      <AttorneysSection />

      {/* TITLE VERIFICATION CALLOUT BANNER (CLIENT REQUIREMENT 10) */}
      <section className="bg-legal-950 text-white py-14 border-t border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-legal-900/90 border border-gold-600/30 p-8 sm:p-10 rounded-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-400 font-bold block mb-2">
                Property Acquisition Due Diligence
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
                Planning to Purchase Property? Get Your Title Checked Before You Proceed.
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Discovering title defects, encumbrances, or unresolved revenue disputes after transaction execution can jeopardize your investment. Have registered deeds, Hak Patrak entries, and chain documents thoroughly vetted by our advocates.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={() => openModal("Property Title")}
                className="px-7 py-3.5 rounded-lg bg-gold-600 hover:bg-gold-500 text-legal-950 font-bold text-sm tracking-wide shadow-md transition active:scale-95 flex items-center gap-2 border border-gold-400"
              >
                <FileCheck className="w-4 h-4" />
                <span>Verify Property Title</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-slate-50" id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
              Legal FAQs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-legal-950 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Clear informational answers regarding revenue entries, ownership rights, title searches, and dispute procedures.
            </p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* CONSULTATION ENQUIRY FORM SECTION */}
      <section className="py-20 bg-white border-t border-slate-200" id="consultation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block mb-2">
                Initiate Contact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-legal-950 mb-4">
                Schedule a Consultation
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Submit details regarding your property transaction, mutation entry dispute, or title verification requirement. Our advocates will review your submission and contact you to arrange an in-person or remote consultation.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">
                    Document-first legal review of 7/12, Hak Patrak, and registered deeds.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">
                    Transparent guidance regarding statutory remedies and forums (Mamlatdar, Prant, Collector).
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700">
                    Strict client confidentiality throughout all communications.
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                <strong className="block text-legal-950 mb-1">Direct Firm Email:</strong>
                <a href={`mailto:${FIRM_DETAILS.email}`} className="text-gold-700 font-semibold hover:underline">
                  {FIRM_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* LEGAL DISCLAIMER SECTION */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalDisclaimer />
        </div>
      </section>
    </div>
  );
}

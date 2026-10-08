import React from "react";
import { FIRM_DETAILS } from "@/lib/constants";
import { Scale, ShieldCheck } from "lucide-react";

export default function AttorneysSection() {
  return (
    <section className="py-16 bg-slate-50 border-t border-b border-slate-200/80" id="attorneys">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-legal-100 text-legal-900 text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-gold-600" /> Legal Practitioners
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-legal-950 mb-3">
            Our Legal Team
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Advocates representing TRUSH LEGAL FIRM, dedicated to meticulous document examination, legal research, and strategic representation in revenue and property matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {FIRM_DETAILS.lawyers.map((lawyer) => (
            <div
              key={lawyer.name}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-legal-950 text-gold-400 flex items-center justify-center mb-5 font-serif text-xl font-bold border border-gold-600/30">
                  {lawyer.name
                    .split(" ")
                    .filter((part) => part.startsWith("Adv.") || part.length > 2)
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div className="mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-gold-700 font-bold block">
                    {lawyer.role}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-legal-950">
                    {lawyer.name}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">
                    {lawyer.designation} • TRUSH LEGAL FIRM
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Practice Focus
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {lawyer.specialization}
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-3 border border-slate-100 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Ashram Road Office, Ahmedabad</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

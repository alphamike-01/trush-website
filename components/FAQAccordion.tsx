"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3.5" role="region" aria-label="Frequently Asked Questions">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;
        const headingId = `faq-heading-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div
            key={item.question}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-gold-500/40 bg-gold-50/20 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300"
            }`}
          >
            <button
              id={headingId}
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full text-left px-5 py-4.5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-4 h-4 flex-shrink-0 transition ${isOpen ? "text-gold-600" : "text-slate-400"}`} />
                <span className="font-serif font-semibold text-sm sm:text-base text-legal-950">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? "rotate-180 text-gold-600" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headingId}
                className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-slate-100"
              >
                <p>{item.answer}</p>
                <div className="mt-3 text-[11px] text-slate-500 italic">
                  * General statutory information only. Not a substitute for case-specific legal opinion.
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

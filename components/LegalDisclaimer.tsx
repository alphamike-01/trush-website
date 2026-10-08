import React from "react";
import { FIRM_DETAILS } from "@/lib/constants";
import { AlertTriangle } from "lucide-react";

interface LegalDisclaimerProps {
  className?: string;
  variant?: "standard" | "compact" | "banner";
}

export default function LegalDisclaimer({
  className = "",
  variant = "standard",
}: LegalDisclaimerProps) {
  if (variant === "compact") {
    return (
      <div className={`p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2.5 ${className}`}>
        <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong>Legal Notice:</strong> {FIRM_DETAILS.disclaimer}
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-xl border border-amber-200 bg-amber-50/60 p-6 md:p-8 text-amber-950 ${className}`}
      role="region"
      aria-label="Legal Disclaimer"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-9 h-9 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 flex-shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-serif font-bold text-amber-950 text-base mb-2">
            Important Legal Disclaimer & Regulatory Information
          </h4>
          <p className="text-xs sm:text-sm text-amber-900 leading-relaxed mb-3">
            {FIRM_DETAILS.disclaimer}
          </p>
          <p className="text-xs text-amber-800 italic">
            This website adheres strictly to the Bar Council of India guidelines regarding informational professional web presence and does not engage in advertisement or solicitation.
          </p>
        </div>
      </div>
    </div>
  );
}

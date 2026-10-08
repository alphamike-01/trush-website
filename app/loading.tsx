import React from "react";
import { Scale, Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white py-16 px-4">
      <div className="w-14 h-14 rounded-2xl bg-legal-950 text-gold-400 flex items-center justify-center mb-4 border border-gold-600/30 animate-pulse">
        <Scale className="w-7 h-7" />
      </div>
      <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500">
        <Loader2 className="w-4 h-4 animate-spin text-gold-600" />
        <span>Loading TRUSH LEGAL FIRM records...</span>
      </div>
    </div>
  );
}

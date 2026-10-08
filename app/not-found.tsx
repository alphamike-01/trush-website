import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-legal-950 text-gold-400 flex items-center justify-center mx-auto mb-6 border border-gold-600/30">
          <Scale className="w-8 h-8" />
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-gold-700 font-bold mb-1">
          404 Error
        </div>
        <h1 className="font-serif text-2xl font-bold text-legal-950 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm leading-relaxed mb-8">
          The requested legal page or document could not be located. It may have been moved or the address may have been entered incorrectly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-legal-900 hover:bg-legal-850 text-gold-400 font-bold text-xs uppercase tracking-wider transition"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition"
          >
            <span>Contact Firm</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

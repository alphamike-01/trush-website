import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface PracticeCardProps {
  title: string;
  subtitle?: string;
  description: string;
  href: string;
  icon: LucideIcon;
  highlights?: string[];
}

export default function PracticeCard({
  title,
  subtitle,
  description,
  href,
  icon: Icon,
  highlights = [],
}: PracticeCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between legal-card-hover group">
      <div>
        <div className="w-12 h-12 rounded-lg bg-legal-50 border border-legal-100 flex items-center justify-center text-legal-900 mb-5 group-hover:bg-legal-950 group-hover:text-gold-400 group-hover:border-gold-600/40 transition">
          <Icon className="w-6 h-6" />
        </div>

        {subtitle && (
          <span className="text-[11px] font-mono uppercase tracking-wider text-gold-700 font-bold block mb-1">
            {subtitle}
          </span>
        )}

        <h3 className="font-serif text-xl font-bold text-legal-950 mb-2 group-hover:text-legal-900 transition">
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
            {highlights.slice(0, 3).map((item, idx) => (
              <li key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-600"></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-2 border-t border-slate-100">
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-legal-900 group-hover:text-gold-700 transition"
        >
          <span>Explore Practice Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

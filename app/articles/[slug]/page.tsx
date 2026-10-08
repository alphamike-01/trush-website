import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { FIRM_DETAILS } from "@/lib/constants";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Scale,
  Tag,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

interface ArticleDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: ArticleDetailPageProps): Promise<Metadata> {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article) {
    return {
      title: "Article Not Found | TRUSH LEGAL FIRM",
    };
  }

  return {
    title: `${article.title} | TRUSH LEGAL FIRM`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const article = await prisma.article.findUnique({
    where: { slug: params.slug },
  });

  if (!article || !article.published) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-legal-950 text-white legal-texture py-14 sm:py-16 border-b border-gold-600/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-white transition mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Articles</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-md bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-300">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1 text-xs text-slate-300">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(article.createdAt).toLocaleDateString("en-IN", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article Body Content */}
      <section className="py-16 bg-white min-h-[50vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Info Bar */}
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-200 text-xs text-slate-500">
            <div>
              Published by: <strong className="text-legal-950">{article.author}</strong>
            </div>
            <div>
              Jurisdiction: <strong>Gujarat, India</strong>
            </div>
          </div>

          {/* Formatted Content */}
          <div className="prose prose-slate max-w-none text-slate-800 leading-relaxed space-y-6 text-sm sm:text-base">
            {article.content.split("\n\n").map((block, idx) => {
              if (block.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="font-serif text-xl sm:text-2xl font-bold text-legal-950 mt-8 mb-3"
                  >
                    {block.replace("### ", "")}
                  </h3>
                );
              }
              if (block.startsWith("#### ")) {
                return (
                  <h4
                    key={idx}
                    className="font-serif text-lg font-bold text-legal-950 mt-6 mb-2"
                  >
                    {block.replace("#### ", "")}
                  </h4>
                );
              }
              if (block.startsWith("*Disclaimer:")) {
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 italic my-6"
                  >
                    {block.replace(/^\*|\*$/g, "")}
                  </div>
                );
              }
              return (
                <p key={idx} className="leading-relaxed text-slate-700">
                  {block}
                </p>
              );
            })}
          </div>

          {/* Consultation Callout Box */}
          <div className="mt-12 p-8 rounded-2xl bg-legal-950 text-white border border-gold-600/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-gold-400 font-bold block mb-1">
                Have Specific Questions on this Topic?
              </span>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                Consult With TRUSH LEGAL FIRM Advocates
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Every property and revenue record matter has unique documentary characteristics. Speak directly with our advocates for case-specific examination.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gold-600 hover:bg-gold-500 text-legal-950 font-bold text-xs uppercase tracking-wider transition"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Consultation</span>
            </Link>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-12">
            <LegalDisclaimer />
          </div>
        </div>
      </section>
    </div>
  );
}

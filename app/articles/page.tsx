import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { prisma } from "@/lib/db";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import { BookOpen, Calendar, Clock, ArrowRight, Tag, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Legal Articles & Knowledge Center | TRUSH LEGAL FIRM Ahmedabad",
  description:
    "Legal articles and informational guides on Revenue Law, Mutation Entries, Title Verification, RTS Proceedings, and Property Law in Gujarat.",
};

// Server component fetching published articles
export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const selectedCategory = searchParams.category || "ALL";

  const categories = [
    "ALL",
    "Revenue Law",
    "Property Law",
    "Land Disputes",
    "Title Verification",
    "Legal Documentation",
  ];

  const whereClause: { published: boolean; category?: string } = {
    published: true,
  };

  if (selectedCategory !== "ALL") {
    whereClause.category = selectedCategory;
  }

  const articles = await prisma.article.findMany({
    where: whereClause,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-legal-950 text-white legal-texture py-16 sm:py-20 border-b border-gold-600/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <BookOpen className="w-3.5 h-3.5" /> Informational Knowledge Base
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Legal Articles & Insights
            </h1>
            <p className="text-gold-300 font-serif text-lg italic mb-4">
              &ldquo;Procedural Guides on Revenue Records, Mutation Entries & Land Title Rights&rdquo;
            </p>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Informative overviews designed to help property owners, buyers, and agricultural holders understand key statutory concepts in Gujarat land and revenue laws.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" /> Filter Category:
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <Link
                  key={cat}
                  href={cat === "ALL" ? "/articles" : `/articles?category=${encodeURIComponent(cat)}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition ${
                    isSelected
                      ? "bg-legal-950 text-gold-400 shadow-sm"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-300/80"
                  }`}
                >
                  {cat === "ALL" ? "All Articles" : cat}
                </Link>
              );
            })}
          </div>

          {/* Articles Grid */}
          {articles.length === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center border border-slate-200">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-slate-800 mb-1">
                No Articles Found in this Category
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Please select another category or check back soon.
              </p>
              <Link
                href="/articles"
                className="text-xs font-bold text-legal-900 hover:underline"
              >
                View All Articles
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 flex flex-col justify-between hover:border-gold-500/50 hover:shadow-md transition duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-gold-50 text-gold-800 text-[11px] font-bold uppercase tracking-wider border border-gold-200">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400 font-medium">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-legal-950 mb-3 hover:text-legal-900 leading-snug">
                      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(article.createdAt).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>

                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-legal-900 hover:text-gold-700 transition"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LegalDisclaimer />
        </div>
      </section>
    </div>
  );
}

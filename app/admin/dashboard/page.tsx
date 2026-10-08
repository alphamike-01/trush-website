import React from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { getAdminSessionFromCookies } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  Users,
  FileSpreadsheet,
  BookOpen,
  CheckCircle,
  Clock,
  ArrowRight,
  ShieldCheck,
  LogOut,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Admin Dashboard | TRUSH LEGAL FIRM",
};

export default async function AdminDashboardPage() {
  const session = await getAdminSessionFromCookies();
  if (!session) {
    redirect("/admin/login");
  }

  const [
    totalEnquiries,
    pendingEnquiries,
    underReviewEnquiries,
    resolvedEnquiries,
    totalArticles,
    recentEnquiries,
  ] = await Promise.all([
    prisma.enquiry.count(),
    prisma.enquiry.count({ where: { status: "PENDING" } }),
    prisma.enquiry.count({ where: { status: "UNDER_REVIEW" } }),
    prisma.enquiry.count({ where: { status: "RESOLVED" } }),
    prisma.article.count(),
    prisma.enquiry.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Top Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Authenticated Session
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-legal-950 mt-1">
              Admin Portal Overview
            </h1>
            <p className="text-xs text-slate-500">
              Welcome back, <strong>{session.username}</strong> ({session.role})
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold transition"
            >
              <span>View Public Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <form action="/api/auth/logout" method="POST">
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-semibold transition"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </form>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
              Total Enquiries
            </div>
            <div className="font-serif text-3xl font-bold text-legal-950">
              {totalEnquiries}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">All time received</div>
          </div>

          <div className="bg-amber-50/60 rounded-xl border border-amber-200 p-5 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-amber-800 font-semibold mb-1">
              Pending Review
            </div>
            <div className="font-serif text-3xl font-bold text-amber-950">
              {pendingEnquiries}
            </div>
            <div className="text-[11px] text-amber-700 mt-1">Action required</div>
          </div>

          <div className="bg-blue-50/60 rounded-xl border border-blue-200 p-5 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-blue-800 font-semibold mb-1">
              Under Review
            </div>
            <div className="font-serif text-3xl font-bold text-blue-950">
              {underReviewEnquiries}
            </div>
            <div className="text-[11px] text-blue-700 mt-1">Lawyer scrutinizing</div>
          </div>

          <div className="bg-emerald-50/60 rounded-xl border border-emerald-200 p-5 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-emerald-800 font-semibold mb-1">
              Resolved / Contacted
            </div>
            <div className="font-serif text-3xl font-bold text-emerald-950">
              {resolvedEnquiries}
            </div>
            <div className="text-[11px] text-emerald-700 mt-1">Completed initial consultation</div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">
              Published Articles
            </div>
            <div className="font-serif text-3xl font-bold text-legal-950">
              {totalArticles}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">Knowledge base guides</div>
          </div>
        </div>

        {/* Quick Actions & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-legal-950" />
                <h2 className="font-serif text-xl font-bold text-legal-950">
                  Enquiry Management
                </h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                View all prospective client enquiries, filter by matter type (Revenue Law, Land Dispute, Property Title, etc.), review brief matter descriptions, update workflow statuses, and record advocate notes.
              </p>
            </div>
            <Link
              href="/admin/enquiries"
              className="inline-flex items-center justify-between px-5 py-3 rounded-lg bg-legal-950 text-gold-400 hover:bg-legal-900 text-xs font-bold uppercase tracking-wider transition"
            >
              <span>Manage Client Enquiries ({totalEnquiries})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-legal-950" />
                <h2 className="font-serif text-xl font-bold text-legal-950">
                  Article Management (CMS)
                </h2>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Publish, edit, and organize legal articles across categories: Revenue Law, Property Law, Land Disputes, Title Verification, and Legal Documentation.
              </p>
            </div>
            <Link
              href="/admin/articles"
              className="inline-flex items-center justify-between px-5 py-3 rounded-lg bg-legal-950 text-gold-400 hover:bg-legal-900 text-xs font-bold uppercase tracking-wider transition"
            >
              <span>Manage Articles ({totalArticles})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Recent Enquiries Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-lg font-bold text-legal-950">
                Recent Consultation Submissions
              </h3>
              <p className="text-xs text-slate-500">
                Latest 5 enquiries received through the website portal.
              </p>
            </div>
            <Link
              href="/admin/enquiries"
              className="text-xs font-bold text-gold-700 hover:text-gold-900 flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {recentEnquiries.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-sm">
              No consultation enquiries received yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-semibold">
                    <th className="p-4">Date</th>
                    <th className="p-4">Client Name</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Matter Category</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {recentEnquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50/70">
                      <td className="p-4 whitespace-nowrap text-slate-500">
                        {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>
                      <td className="p-4 font-semibold text-legal-950">
                        {enq.name}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <div>{enq.mobile}</div>
                        <div className="text-slate-400 text-[11px]">{enq.email}</div>
                      </td>
                      <td className="p-4 font-medium text-slate-800">
                        {enq.matterType}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            enq.status === "PENDING"
                              ? "bg-amber-100 text-amber-800"
                              : enq.status === "UNDER_REVIEW"
                              ? "bg-blue-100 text-blue-800"
                              : enq.status === "RESOLVED"
                              ? "bg-emerald-100 text-emerald-800"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {enq.status.replace("_", " ")}
                        </span>
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <Link
                          href="/admin/enquiries"
                          className="text-xs font-semibold text-legal-900 hover:text-gold-700"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

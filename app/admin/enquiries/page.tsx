"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Search,
  Filter,
  CheckCircle,
  Clock,
  Trash2,
  Edit3,
  Phone,
  Mail,
  RefreshCw,
  AlertCircle,
  Eye,
  X,
} from "lucide-react";
import { MATTER_TYPES } from "@/lib/constants";

interface EnquiryItem {
  id: string;
  name: string;
  mobile: string;
  email: string;
  matterType: string;
  description: string;
  status: string;
  adminNotes: string | null;
  ipAddress: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [matterFilter, setMatterFilter] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState<EnquiryItem | null>(null);
  const [editingNotes, setEditingNotes] = useState("");
  const [updating, setUpdating] = useState(false);

  const fetchEnquiries = useCallback(async () => {
    setLoading(true);
    try {
      const url = new URL("/api/enquiries", window.location.origin);
      if (statusFilter !== "ALL") url.searchParams.set("status", statusFilter);
      if (matterFilter !== "ALL") url.searchParams.set("matterType", matterFilter);

      const res = await fetch(url.toString());
      if (res.ok) {
        const data = await res.json();
        setEnquiries(data.enquiries || []);
      }
    } catch (err) {
      console.error("Failed to fetch enquiries:", err);
    } finally {
      setLoading(false);
    }
  }, [statusFilter, matterFilter]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
        if (selectedEnquiry && selectedEnquiry.id === id) {
          setSelectedEnquiry({ ...selectedEnquiry, status: newStatus });
        }
      }
    } catch (err) {
      console.error("Status update error:", err);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedEnquiry) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/enquiries/${selectedEnquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ adminNotes: editingNotes }),
      });
      if (res.ok) {
        setEnquiries((prev) =>
          prev.map((e) =>
            e.id === selectedEnquiry.id ? { ...e, adminNotes: editingNotes } : e
          )
        );
        setSelectedEnquiry({ ...selectedEnquiry, adminNotes: editingNotes });
      }
    } catch (err) {
      console.error("Failed to update notes:", err);
    } finally {
      setUpdating(false);
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this enquiry record?")) return;
    try {
      const res = await fetch(`/api/enquiries/${id}`, { method: "DELETE" });
      if (res.ok) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
        if (selectedEnquiry?.id === id) setSelectedEnquiry(null);
      }
    } catch (err) {
      console.error("Delete enquiry error:", err);
    }
  };

  const filteredEnquiries = enquiries.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      e.mobile.includes(searchTerm) ||
      e.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <Link
              href="/admin/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-legal-950 transition mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Admin Dashboard</span>
            </Link>
            <h1 className="font-serif text-2xl font-bold text-legal-950">
              Client Consultation Enquiries
            </h1>
            <p className="text-xs text-slate-500">
              Manage client submissions, review matter briefs, and record advocate notes.
            </p>
          </div>

          <button
            onClick={fetchEnquiries}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-300 text-xs font-semibold text-slate-700 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Refresh</span>
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, phone, email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500/20 text-slate-900"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none"
              >
                <option value="ALL">All Statuses</option>
                <option value="PENDING">Pending</option>
                <option value="UNDER_REVIEW">Under Review</option>
                <option value="CONTACTED">Contacted</option>
                <option value="RESOLVED">Resolved</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Matter:</span>
              <select
                value={matterFilter}
                onChange={(e) => setMatterFilter(e.target.value)}
                className="text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-800 focus:outline-none"
              >
                <option value="ALL">All Categories</option>
                {MATTER_TYPES.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Enquiries Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-slate-500 text-xs">
              Loading client submissions...
            </div>
          ) : filteredEnquiries.length === 0 ? (
            <div className="p-12 text-center text-slate-500 text-xs">
              No enquiries match the current criteria.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 uppercase font-semibold">
                    <th className="p-4">Submission Date</th>
                    <th className="p-4">Client Name</th>
                    <th className="p-4">Contact Details</th>
                    <th className="p-4">Matter Category</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {filteredEnquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-50/80">
                      <td className="p-4 whitespace-nowrap text-slate-500">
                        {new Date(enq.createdAt).toLocaleDateString("en-IN", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </td>
                      <td className="p-4 font-semibold text-legal-950">
                        {enq.name}
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <div className="font-mono text-slate-900">{enq.mobile}</div>
                        <div className="text-slate-400 text-[11px]">{enq.email}</div>
                      </td>
                      <td className="p-4 font-medium text-slate-800">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {enq.matterType}
                        </span>
                      </td>
                      <td className="p-4 whitespace-nowrap">
                        <select
                          value={enq.status}
                          onChange={(e) => handleUpdateStatus(enq.id, e.target.value)}
                          className={`text-[11px] font-bold uppercase rounded-md px-2.5 py-1 border focus:outline-none ${
                            enq.status === "PENDING"
                              ? "bg-amber-50 text-amber-800 border-amber-300"
                              : enq.status === "UNDER_REVIEW"
                              ? "bg-blue-50 text-blue-800 border-blue-300"
                              : enq.status === "RESOLVED"
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                              : "bg-slate-50 text-slate-700 border-slate-300"
                          }`}
                        >
                          <option value="PENDING">Pending</option>
                          <option value="UNDER_REVIEW">Under Review</option>
                          <option value="CONTACTED">Contacted</option>
                          <option value="RESOLVED">Resolved</option>
                          <option value="ARCHIVED">Archived</option>
                        </select>
                      </td>
                      <td className="p-4 whitespace-nowrap text-right space-x-2">
                        <button
                          onClick={() => {
                            setSelectedEnquiry(enq);
                            setEditingNotes(enq.adminNotes || "");
                          }}
                          className="px-3 py-1 rounded bg-slate-100 hover:bg-legal-950 hover:text-gold-400 text-slate-700 text-xs font-semibold transition"
                        >
                          Inspect Brief
                        </button>
                        <button
                          onClick={() => handleDeleteEnquiry(enq.id)}
                          className="p-1 rounded text-red-500 hover:bg-red-50 transition"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Detail Inspection Modal */}
      {selectedEnquiry && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-2xl w-full overflow-hidden animate-fadeIn">
            <div className="bg-legal-950 p-6 text-white flex items-center justify-between border-b border-gold-600/30">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 block">
                  Enquiry ID: {selectedEnquiry.id}
                </span>
                <h3 className="font-serif text-xl font-bold text-white">
                  {selectedEnquiry.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedEnquiry(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto text-xs sm:text-sm">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-slate-400 block text-xs">Mobile Number</span>
                  <a
                    href={`tel:${selectedEnquiry.mobile}`}
                    className="font-semibold text-legal-950 hover:text-gold-700 font-mono"
                  >
                    {selectedEnquiry.mobile}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Email Address</span>
                  <a
                    href={`mailto:${selectedEnquiry.email}`}
                    className="font-semibold text-legal-950 hover:text-gold-700"
                  >
                    {selectedEnquiry.email}
                  </a>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Matter Type</span>
                  <span className="font-semibold text-legal-950">
                    {selectedEnquiry.matterType}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-xs">Received At</span>
                  <span className="text-slate-700">
                    {new Date(selectedEnquiry.createdAt).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <div>
                <strong className="block text-legal-950 font-serif text-sm mb-2">
                  Client&apos;s Description of Matter:
                </strong>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 leading-relaxed whitespace-pre-wrap">
                  {selectedEnquiry.description}
                </div>
              </div>

              {/* Internal Advocate Notes */}
              <div className="pt-2">
                <label className="block font-serif font-bold text-legal-950 text-sm mb-1.5">
                  Internal Advocate Notes
                </label>
                <textarea
                  rows={3}
                  value={editingNotes}
                  onChange={(e) => setEditingNotes(e.target.value)}
                  placeholder="Record internal consultation notes, revenue file references, or next scheduled steps..."
                  className="w-full p-3 text-xs rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500/20 text-slate-900"
                />
                <button
                  type="button"
                  disabled={updating}
                  onClick={handleSaveNotes}
                  className="mt-2 px-4 py-2 rounded-lg bg-legal-900 text-gold-400 hover:bg-legal-850 font-bold text-xs uppercase tracking-wider transition disabled:opacity-50"
                >
                  {updating ? "Saving Notes..." : "Save Advocate Notes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

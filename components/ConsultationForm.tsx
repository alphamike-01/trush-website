"use client";

import React, { useState } from "react";
import { MATTER_TYPES, MatterType } from "@/lib/constants";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

interface ConsultationFormProps {
  defaultMatter?: MatterType;
  onSuccess?: () => void;
  className?: string;
  isCompact?: boolean;
}

export default function ConsultationForm({
  defaultMatter,
  onSuccess,
  className = "",
  isCompact = false,
}: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    matterType: defaultMatter || ("Revenue Law" as MatterType),
    description: "",
    websiteHoneypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [successResult, setSuccessResult] = useState<{
    message: string;
    enquiryId: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);
    setFieldErrors({});

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || "Failed to submit enquiry. Please check your inputs.");
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        return;
      }

      setSuccessResult({
        message: data.message,
        enquiryId: data.enquiryId,
      });

      setFormData({
        name: "",
        mobile: "",
        email: "",
        matterType: defaultMatter || "Revenue Law",
        description: "",
        websiteHoneypot: "",
      });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.error("Consultation submission error:", err);
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (successResult) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center text-emerald-900 animate-fadeIn">
        <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold font-serif mb-2 text-emerald-950">
          Consultation Enquiry Submitted
        </h3>
        <p className="text-emerald-800 text-sm max-w-md mx-auto mb-4">
          {successResult.message}
        </p>
        <div className="inline-block bg-white border border-emerald-300 rounded-md px-4 py-2 text-xs font-mono text-emerald-700 font-semibold mb-6">
          Reference ID: {successResult.enquiryId}
        </div>
        <p className="text-xs text-emerald-700 italic max-w-sm mx-auto mb-6">
          Note: This submission does not establish an advocate-client relationship. Our team will review the initial details and reach out via mobile/email.
        </p>
        <button
          type="button"
          onClick={() => setSuccessResult(null)}
          className="text-xs uppercase tracking-wider font-semibold text-emerald-700 hover:text-emerald-900 underline"
        >
          Submit Another Enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white rounded-xl shadow-sm border border-slate-200/80 p-6 md:p-8 ${className}`}
      noValidate
    >
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-legal-950">
          Request Legal Consultation
        </h3>
        <p className="text-slate-600 text-sm mt-1">
          Provide your matter details for preliminary document and legal review.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-5 p-4 bg-red-50 border-l-4 border-red-500 rounded text-red-800 text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Hidden Honeypot Field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="websiteHoneypot">Leave this blank</label>
        <input
          type="text"
          id="websiteHoneypot"
          name="websiteHoneypot"
          tabIndex={-1}
          autoComplete="off"
          value={formData.websiteHoneypot}
          onChange={(e) => setFormData({ ...formData, websiteHoneypot: e.target.value })}
        />
      </div>

      <div className={`grid grid-cols-1 ${isCompact ? "gap-4" : "md:grid-cols-2 gap-5"} mb-5`}>
        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Patel"
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${
              fieldErrors.name ? "border-red-400 bg-red-50/30" : "border-slate-300 focus:border-gold-600"
            } focus:ring-2 focus:ring-gold-500/20 outline-none transition text-slate-900`}
          />
          {fieldErrors.name && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.name[0]}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label htmlFor="mobile" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            required
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            placeholder="10-digit mobile number"
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${
              fieldErrors.mobile ? "border-red-400 bg-red-50/30" : "border-slate-300 focus:border-gold-600"
            } focus:ring-2 focus:ring-gold-500/20 outline-none transition text-slate-900`}
          />
          {fieldErrors.mobile && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.mobile[0]}</p>
          )}
        </div>
      </div>

      <div className={`grid grid-cols-1 ${isCompact ? "gap-4" : "md:grid-cols-2 gap-5"} mb-5`}>
        {/* Email Address */}
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@example.com"
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${
              fieldErrors.email ? "border-red-400 bg-red-50/30" : "border-slate-300 focus:border-gold-600"
            } focus:ring-2 focus:ring-gold-500/20 outline-none transition text-slate-900`}
          />
          {fieldErrors.email && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.email[0]}</p>
          )}
        </div>

        {/* Type of Matter */}
        <div>
          <label htmlFor="matterType" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
            Type of Matter <span className="text-red-500">*</span>
          </label>
          <select
            id="matterType"
            required
            value={formData.matterType}
            onChange={(e) => setFormData({ ...formData, matterType: e.target.value as MatterType })}
            className={`w-full px-4 py-2.5 text-sm rounded-lg border ${
              fieldErrors.matterType ? "border-red-400 bg-red-50/30" : "border-slate-300 focus:border-gold-600"
            } focus:ring-2 focus:ring-gold-500/20 outline-none transition bg-white text-slate-900`}
          >
            {MATTER_TYPES.map((matter) => (
              <option key={matter} value={matter}>
                {matter}
              </option>
            ))}
          </select>
          {fieldErrors.matterType && (
            <p className="text-red-600 text-xs mt-1">{fieldErrors.matterType[0]}</p>
          )}
        </div>
      </div>

      {/* Brief Description of Matter */}
      <div className="mb-6">
        <label htmlFor="description" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
          Brief Description of Matter <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          required
          rows={isCompact ? 3 : 4}
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Briefly state facts regarding the land/property, mutation entry number, dispute stage, or documents to be verified..."
          className={`w-full px-4 py-3 text-sm rounded-lg border ${
            fieldErrors.description ? "border-red-400 bg-red-50/30" : "border-slate-300 focus:border-gold-600"
          } focus:ring-2 focus:ring-gold-500/20 outline-none transition text-slate-900`}
        />
        {fieldErrors.description ? (
          <p className="text-red-600 text-xs mt-1">{fieldErrors.description[0]}</p>
        ) : (
          <p className="text-slate-400 text-xs mt-1">Minimum 10 characters.</p>
        )}
      </div>

      {/* Disclaimer Acknowledgement */}
      <div className="mb-6 bg-slate-50 border border-slate-200/80 rounded-lg p-3.5 text-xs text-slate-600 leading-relaxed">
        <strong>Confidentiality Notice:</strong> Transmitting matter details through this portal is for initial consultation scheduling and document evaluation. It does not establish an advocate-client relationship until formal engagement is confirmed.
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-legal-900 hover:bg-legal-850 text-gold-400 font-semibold text-sm tracking-wide shadow-md hover:shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed group border border-gold-600/40"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-gold-400" />
            <span>Processing Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 text-gold-400 group-hover:translate-x-0.5 transition-transform" />
            <span>Submit Enquiry</span>
          </>
        )}
      </button>
    </form>
  );
}

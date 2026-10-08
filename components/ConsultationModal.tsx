"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import ConsultationForm from "./ConsultationForm";
import { X, Scale } from "lucide-react";
import { MatterType } from "@/lib/constants";

interface ConsultationModalContextType {
  isOpen: boolean;
  openModal: (matterType?: MatterType) => void;
  closeModal: () => void;
}

const ConsultationModalContext = createContext<ConsultationModalContextType | undefined>(
  undefined
);

export function ConsultationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMatter, setSelectedMatter] = useState<MatterType | undefined>(undefined);

  const openModal = (matterType?: MatterType) => {
    setSelectedMatter(matterType);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ConsultationModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 animate-fadeIn">
            <div className="bg-legal-950 px-6 py-4 flex items-center justify-between border-b border-gold-600/30">
              <div className="flex items-center gap-2.5">
                <Scale className="w-5 h-5 text-gold-400" />
                <span className="font-serif font-bold text-white text-base tracking-wide">
                  TRUSH LEGAL FIRM
                </span>
                <span className="text-gold-400/80 text-xs hidden sm:inline">• Consultation Request</span>
              </div>
              <button
                onClick={closeModal}
                className="text-slate-400 hover:text-white transition p-1 rounded-lg hover:bg-slate-800"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 md:p-8 max-h-[85vh] overflow-y-auto">
              <ConsultationForm
                defaultMatter={selectedMatter}
                onSuccess={() => {
                  // Keep open to let them see reference ID, or auto close after delay if preferred
                }}
              />
            </div>
          </div>
        </div>
      )}
    </ConsultationModalContext.Provider>
  );
}

export function useConsultationModal() {
  const context = useContext(ConsultationModalContext);
  if (!context) {
    throw new Error("useConsultationModal must be used within a ConsultationModalProvider");
  }
  return context;
}

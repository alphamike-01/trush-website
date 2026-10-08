"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConsultationModal } from "./ConsultationModal";
import { FIRM_DETAILS, NAV_LINKS } from "@/lib/constants";
import {
  Scale,
  Menu,
  X,
  ChevronDown,
  Mail,
  MapPin,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useConsultationModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPracticeDropdownOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-200">
      {/* Top Bar for Location & Email */}
      <div className="bg-legal-950 text-slate-300 text-xs py-2 px-4 sm:px-8 border-b border-gold-600/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <span>Ashram Road, Ahmedabad – 380009</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <a
              href={`mailto:${FIRM_DETAILS.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-gold-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-gold-400" />
              <span>{FIRM_DETAILS.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-gold-400 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Revenue • Land • Property Matters
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all ${scrolled ? "py-3" : "py-4"}`}>
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-legal-900 border border-gold-600/40 flex items-center justify-center text-gold-400 shadow-sm group-hover:bg-legal-850 transition">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-extrabold tracking-tight text-legal-950 block leading-tight">
                {FIRM_DETAILS.name}
              </span>
              <span className="text-[10px] sm:text-xs text-gold-700 font-semibold tracking-wider uppercase block">
                Advocates & Legal Consultants
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                const isActive = pathname.startsWith("/practice-areas") ||
                  link.dropdown.some((item) => pathname === item.href);

                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setPracticeDropdownOpen(true)}
                    onMouseLeave={() => setPracticeDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition ${
                        isActive
                          ? "text-gold-600 font-semibold bg-gold-50/50"
                          : "text-slate-700 hover:text-legal-900 hover:bg-slate-50"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4 text-slate-500" />
                    </Link>

                    {practiceDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-200/90 py-2.5 z-50 animate-fadeIn">
                        <div className="px-3 py-1.5 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-gold-700">
                          Practice Areas
                        </div>
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className={`block px-4 py-2 text-xs font-medium transition ${
                              pathname === subItem.href
                                ? "bg-gold-50 text-gold-700 font-semibold"
                                : "text-slate-700 hover:bg-slate-50 hover:text-legal-900"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "text-gold-600 font-semibold bg-gold-50/50"
                      : "text-slate-700 hover:text-legal-900 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => openModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-legal-900 hover:bg-legal-850 text-gold-400 border border-gold-600/40 text-xs uppercase tracking-wider font-bold shadow hover:shadow-md transition active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>CONSULT A LAWYER</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openModal()}
              className="px-3 py-1.5 rounded bg-legal-900 text-gold-400 border border-gold-600/30 text-[11px] uppercase tracking-wider font-bold"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-legal-950 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                return (
                  <div key={link.label} className="py-1">
                    <button
                      onClick={() => setPracticeDropdownOpen(!practiceDropdownOpen)}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-semibold text-slate-800 rounded-md hover:bg-slate-50"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${practiceDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {practiceDropdownOpen && (
                      <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50/70 rounded-md mt-1">
                        <Link
                          href="/practice-areas"
                          className="block px-3 py-1.5 text-xs font-semibold text-gold-700"
                        >
                          Overview: All Practice Areas
                        </Link>
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-3 py-1.5 text-xs text-slate-600 hover:text-legal-900"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    pathname === link.href
                      ? "text-gold-700 font-bold bg-gold-50/50"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-legal-900 text-gold-400 border border-gold-600/40 text-xs uppercase tracking-wider font-bold shadow"
              >
                <PhoneCall className="w-4 h-4" />
                <span>CONSULT A LAWYER</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

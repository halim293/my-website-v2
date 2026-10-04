import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, GraduationCap } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

interface NavbarProps {
  onApplyClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onApplyClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Teachers", href: "#teachers" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FFFFFF] border-b border-slate-200/80 shadow-xs">
      {/* Top micro contact bar */}
      <div className="bg-[#123B5D] text-slate-200 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B942]"></span>
              Main City Kotri, Jamshoro, Sindh
            </span>
            <span className="text-slate-400">|</span>
            <span>Admissions Open for Academic Year 2026</span>
          </div>
          <div className="flex items-center gap-5 font-mono text-[11px] tabular-nums">
            <a 
              href={`tel:${INSTITUTE_INFO.phone}`} 
              className="flex items-center gap-1 hover:text-[#F4B942] transition-colors"
            >
              <Phone className="w-3 h-3 text-[#F4B942]" />
              {INSTITUTE_INFO.phone}
            </a>
            <a 
              href={INSTITUTE_INFO.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 hover:text-emerald-400 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              WhatsApp Helpdesk
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Zone 1: Single text element wordmark */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-[#123B5D] text-[#F4B942] flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-[#1F7A6E] transition-colors">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-[#123B5D]">
              The Talent Master Institute
            </span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#123B5D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#123B5D] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary action */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={INSTITUTE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-[#1F7A6E] bg-emerald-50 hover:bg-emerald-100 rounded-md border border-emerald-200 transition-colors whitespace-nowrap"
            >
              WhatsApp
            </a>
            <button
              onClick={onApplyClick}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#123B5D] hover:bg-[#0e2c46] active:scale-[0.99] rounded-md shadow-xs transition-all whitespace-nowrap"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onApplyClick}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#123B5D] rounded-md"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-slate-50 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#123B5D] rounded-md"
            >
              Apply Now
            </button>
            <a
              href={INSTITUTE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-sm font-semibold text-emerald-800 bg-emerald-50 rounded-md border border-emerald-200"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

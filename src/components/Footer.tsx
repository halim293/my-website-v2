import React, { useState } from 'react';
import { GraduationCap, MapPin, Phone, MessageSquare, Mail } from 'lucide-react';
import { INSTITUTE_INFO, TAGLINES } from '../data/instituteData';
import { PolicyModal } from './PolicyModal';

export const Footer: React.FC = () => {
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Courses", href: "#courses" },
    { label: "Admissions", href: "#admissions" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#123B5D] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-slate-700/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#F4B942] text-[#123B5D] flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5 text-[#123B5D]" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {INSTITUTE_INFO.name}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              The Talent Master Institute is committed to providing quality education, professional skills and academic guidance for students and learners.
            </p>

            {/* Tagline chips */}
            <div className="space-y-1 text-xs text-[#F4B942] font-medium pt-1">
              <div>"{TAGLINES[0]}"</div>
              <div className="text-slate-400">"{TAGLINES[1]}"</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setPolicyType('privacy')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPolicyType('terms')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms &amp; Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Programs Covered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Key Programs
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Law Admission Test (LAT) Preparation</li>
              <li>GAT Preparation (General &amp; Law-GAT)</li>
              <li>English Language Courses &amp; Diploma</li>
              <li>Computer Courses (CIT &amp; DIT)</li>
              <li>Matric &amp; Intermediate Board Coaching</li>
              <li>Tuition Classes (Classes 1 to 8)</li>
              <li>University Entrance Tests (MDCAT / ECAT)</li>
            </ul>
          </div>

          {/* Campus Coordinates */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Kotri Campus
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4B942] shrink-0 mt-0.5" />
                <span>{INSTITUTE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${INSTITUTE_INFO.phone}`} className="hover:text-white font-mono">
                  {INSTITUTE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={INSTITUTE_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white"
                >
                  WhatsApp: {INSTITUTE_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`mailto:${INSTITUTE_INFO.email}`} className="hover:text-white break-all">
                  {INSTITUTE_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Unboxed Footer Nav */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 pt-2">
          <p>© 2026 The Talent Master Institute. All Rights Reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <span aria-hidden="true">·</span>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <span aria-hidden="true">·</span>
            <a href="#courses" className="hover:text-white transition-colors">Courses</a>
            <span aria-hidden="true">·</span>
            <a href="#admissions" className="hover:text-white transition-colors">Admissions</a>
            <span aria-hidden="true">·</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <span aria-hidden="true">·</span>
            <button onClick={() => setPolicyType('privacy')} className="hover:text-white cursor-pointer">
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button onClick={() => setPolicyType('terms')} className="hover:text-white cursor-pointer">
              Terms &amp; Conditions
            </button>
          </div>
        </div>

      </div>

      {/* Policy Modal */}
      <PolicyModal type={policyType} onClose={() => setPolicyType(null)} />
    </footer>
  );
};

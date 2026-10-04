import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { HERO_DATA, TAGLINES, INSTITUTE_INFO } from '../data/instituteData';

interface HeroProps {
  onApplyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onApplyClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      {/* Subtle background graphic texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F7A6E]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#123B5D]/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tagline kicker bar */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5 text-[#123B5D] bg-slate-100 px-3 py-1 rounded-sm border border-slate-200">
            <MapPin className="w-3.5 h-3.5 text-[#1F7A6E]" />
            Kotri, Jamshoro, Sindh
          </span>
          <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
          <span className="text-[#1F7A6E] font-medium hidden sm:inline">
            {TAGLINES[0]}
          </span>
          <span className="hidden md:inline text-slate-300" aria-hidden="true">·</span>
          <span className="text-slate-500 font-normal hidden md:inline">
            {TAGLINES[1]}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#123B5D] leading-[1.15] text-balance">
              {HERO_DATA.headline}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {HERO_DATA.subheadline}
            </p>

            {/* Core guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A6E] shrink-0" />
                <span>Specialized LAT, GAT &amp; MDCAT Test Prep</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A6E] shrink-0" />
                <span>Certified CIT &amp; DIT Computer Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A6E] shrink-0" />
                <span>English Language Spoken &amp; Diploma</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1F7A6E] shrink-0" />
                <span>Matric &amp; Intermediate Board Coaching</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
              <button
                onClick={onApplyClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#123B5D] hover:bg-[#0c273e] active:scale-[0.99] rounded-md shadow-xs transition-all cursor-pointer"
              >
                <span>{HERO_DATA.primary_cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#123B5D] bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-md transition-all text-center"
              >
                {HERO_DATA.secondary_cta}
              </a>

              <a
                href={INSTITUTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors text-center"
              >
                <Sparkles className="w-4 h-4 text-[#F4B942]" />
                <span>Admissions Help: 0311 3089899</span>
              </a>
            </div>

            {/* Micro accreditation / trust notice */}
            <div className="pt-4 border-t border-slate-100 flex items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#1F7A6E] shrink-0" />
              <span>
                Committed to disciplined learning, individual student attention, and ethical educational mentorship.
              </span>
            </div>
          </div>

          {/* Right Column: Hero Visual Carrier */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group">
              <img
                src={HERO_DATA.heroImage}
                alt="Students studying at The Talent Master Institute in Kotri, Jamshoro"
                className="w-full h-80 sm:h-96 lg:h-[440px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#123B5D]/90 via-[#123B5D]/30 to-transparent"></div>

              {/* In-image caption card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-lg border border-slate-200 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#123B5D] uppercase tracking-wider">
                    {INSTITUTE_INFO.name}
                  </span>
                  <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    Open for Admission
                  </span>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">
                  "Where Talent Meets the Right Direction." Academic coaching, LAT/GAT entrance preparation, and computer skills training.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Stats strip below hero */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HERO_DATA.stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#123B5D] font-mono tabular-nums tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

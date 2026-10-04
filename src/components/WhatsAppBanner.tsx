import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

export const WhatsAppBanner: React.FC = () => {
  return (
    <section className="bg-emerald-700 text-white py-12 border-b border-emerald-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-emerald-800/60 border border-emerald-600/40 p-6 sm:p-8 rounded-xl shadow-xs">
          
          <div className="space-y-2 text-center lg:text-left max-w-2xl">
            <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4 text-emerald-300" />
              <span>Direct WhatsApp Guidance</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need Admission Guidance?
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed font-normal">
              Chat with our admissions team on WhatsApp to learn about courses, schedules, eligibility and admission details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923113089899?text=Hello%20The%20Talent%20Master%20Institute,%20I%20would%20like%20to%20inquire%20about%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-emerald-950 bg-white hover:bg-emerald-50 rounded-md shadow-xs transition-all"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-800" />
            </a>

            <div className="text-center sm:text-left text-xs font-mono text-emerald-200">
              0311 3089899
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

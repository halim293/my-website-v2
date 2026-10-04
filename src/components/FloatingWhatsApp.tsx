import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-end gap-2">
      {/* Tooltip chip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs px-3 py-2 rounded-lg shadow-lg border border-slate-200 animate-in fade-in slide-in-from-right-2">
          <span>Admissions Inquiry on WhatsApp?</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={INSTITUTE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Admissions on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all group relative"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="sr-only">Chat on WhatsApp</span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F4B942] rounded-full border-2 border-white"></span>
      </a>
    </div>
  );
};

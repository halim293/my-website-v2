import React from 'react';
import { X, Clock, UserCheck, BookOpen, Check, ArrowRight } from 'lucide-react';
import { Program } from '../data/instituteData';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
  onSelectCourseForAdmission: (courseName: string) => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  program,
  onClose,
  onSelectCourseForAdmission,
}) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-5 sm:p-6 flex items-start justify-between z-10">
          <div>
            <span className="text-xs font-semibold text-[#1F7A6E] tracking-wider uppercase">
              Program Details
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#123B5D] mt-0.5">
              {program.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-6">
          
          {/* Quick Meta Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-4 rounded-lg border border-slate-200">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#123B5D] shrink-0" />
              <div>
                <span className="text-slate-500 font-normal">Duration: </span>
                <span className="font-semibold text-slate-900">{program.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#1F7A6E] shrink-0" />
              <div>
                <span className="text-slate-500 font-normal">Schedule: </span>
                <span className="font-semibold text-slate-900">{program.scheduleType || "Regular & Flexible Batches"}</span>
              </div>
            </div>
          </div>

          {/* Eligibility */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-[#1F7A6E]" />
              Eligibility Criteria
            </div>
            <p className="text-xs sm:text-sm text-slate-700 bg-emerald-50/60 border border-emerald-100 p-3 rounded-md">
              {program.eligibility}
            </p>
          </div>

          {/* Detailed Course Overview */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Course Overview &amp; Curriculum Focus
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {program.long_description}
            </p>
          </div>

          {/* What You Will Learn */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Key Learning Outcomes &amp; Topics Covered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {program.what_you_will_learn.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-slate-50 p-2.5 rounded-md border border-slate-200/80">
                  <Check className="w-4 h-4 text-[#1F7A6E] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Program Highlights if available */}
          {program.highlights && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Pedagogical Highlights
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {program.highlights.map((h, i) => (
                  <span key={i} className="text-slate-700 bg-slate-100 px-2.5 py-1 rounded-sm border border-slate-200">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 hidden sm:inline">
            Seats allocated on first-come eligibility basis.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-200 rounded-md transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectCourseForAdmission(program.name);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-[#123B5D] hover:bg-[#0c273e] rounded-md shadow-xs transition-colors"
            >
              <span>Apply for this Program</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

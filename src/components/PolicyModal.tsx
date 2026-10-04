import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#1F7A6E]" />
            ) : (
              <FileText className="w-5 h-5 text-[#123B5D]" />
            )}
            <h3 className="text-lg font-bold text-[#123B5D]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions of Admission'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>The Talent Master Institute</strong> respects the privacy of our students, parents, and prospective applicants. This Privacy Policy details how we handle information submitted through our online admission portals and campus inquiry desks.
              </p>
              
              <h4 className="font-bold text-slate-900 text-sm pt-2">1. Collection of Academic &amp; Contact Data</h4>
              <p>
                When you submit an admission or inquiry form, we collect essential educational details such as your full name, father's name, date of birth, CNIC/B-Form, last completed qualification, desired program of study, phone, and residential address in Kotri / Jamshoro / Sindh.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">2. Use of Information</h4>
              <p>
                Your information is used strictly to evaluate program eligibility, generate admission reference records, contact you regarding timetable schedules, conduct diagnostic assessment reviews, and notify you of upcoming entrance test registrations (such as LAT, GAT, or MDCAT).
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">3. Confidentiality &amp; Third Parties</h4>
              <p>
                We do not sell, rent, or trade student records or contact numbers to external marketing third parties. Student performance data remains confidential between the learner, guardians, and assigned academic instructors.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">4. Contact Information</h4>
              <p>
                For questions regarding student record confidentiality or updates, contact our administration desk at <span className="font-medium text-slate-900">{INSTITUTE_INFO.email}</span> or WhatsApp <span className="font-medium text-slate-900">{INSTITUTE_INFO.phone}</span>.
              </p>
            </>
          ) : (
            <>
              <p>
                By enrolling or submitting an application to <strong>The Talent Master Institute</strong>, students and parents agree to observe the institutional guidelines and code of conduct outlined below.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">1. Eligibility &amp; Accurate Information</h4>
              <p>
                Applicants are responsible for providing truthful academic records, certificates, and personal identity documents. Any misrepresentation may result in cancellation of enrollment.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">2. Attendance &amp; Classroom Discipline</h4>
              <p>
                Punctuality and consistent attendance are mandatory for test preparation modules (LAT, GAT, MDCAT) and diploma programs (CIT, DIT). Students are expected to maintain courteous conduct towards instructors, staff, and fellow peers.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">3. Assessments &amp; Mock Tests</h4>
              <p>
                Students are required to participate in scheduled periodic assessments, chapter drills, and grand mock tests. These evaluations are integral to achieving target board and university admissions scores.
              </p>

              <h4 className="font-bold text-slate-900 text-sm pt-2">4. Fee Policies &amp; Institute Discretion</h4>
              <p>
                All tuition, coaching, and lab fees must be cleared in accordance with the schedule agreed upon at enrollment. Course schedules, batch timings, and seat caps are subject to institute policies and availability.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-slate-50 border-t border-slate-200 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#123B5D] hover:bg-[#0c273e] rounded-md transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

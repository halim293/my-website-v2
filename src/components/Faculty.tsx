import React from 'react';
import { UserCheck, BookOpen, Scale, Binary, Monitor, School } from 'lucide-react';
import { FACULTY } from '../data/instituteData';

export const Faculty: React.FC = () => {
  const getSubjectIcon = (name: string) => {
    if (name.includes('Adv.')) return <Scale className="w-4 h-4 text-[#123B5D]" />;
    if (name.includes('Haya')) return <Binary className="w-4 h-4 text-[#1F7A6E]" />;
    if (name.includes('Usama') || name.includes('Mohsin')) return <Monitor className="w-4 h-4 text-[#123B5D]" />;
    return <School className="w-4 h-4 text-[#1F7A6E]" />;
  };

  return (
    <section id="teachers" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1F7A6E]">
              Dedicated Mentorship
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D] tracking-tight">
              Meet Our Teachers
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Experienced legal practitioners, IT specialists, and subject mentors committed to student success.
            </p>
          </div>
          <div className="text-xs text-slate-500 font-medium hidden sm:block">
            Individual Student Guidance · Kotri Campus
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FACULTY.map((teacher, idx) => (
            <div
              key={idx}
              className="bg-[#F7F9FC] rounded-xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-[#123B5D]/40 transition-all shadow-2xs group"
            >
              <div className="space-y-4">
                
                {/* Header Lockup */}
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 text-[#123B5D] flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-[#123B5D] group-hover:text-white transition-colors">
                    {teacher.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#123B5D] group-hover:text-[#1F7A6E] transition-colors">
                      {teacher.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {teacher.role}
                    </p>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {teacher.bio}
                </p>

                {/* Subjects Assigned */}
                <div className="pt-3 border-t border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {getSubjectIcon(teacher.name)}
                    <span>Subjects &amp; Programs Taught:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {teacher.subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium text-[#123B5D] bg-white px-2.5 py-1 rounded-sm border border-slate-200"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1 text-[#1F7A6E]">
                  <UserCheck className="w-3.5 h-3.5" />
                  Regular Guidance
                </span>
                <span className="font-mono text-[11px]">Faculty #0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

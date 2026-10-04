import React, { useState } from 'react';
import { Search, Clock, ArrowRight, BookOpen, GraduationCap, Monitor, Scale, Languages, Sparkles } from 'lucide-react';
import { Program, PROGRAMS } from '../data/instituteData';
import { ProgramModal } from './ProgramModal';

interface ProgramsProps {
  onSelectCourseForAdmission: (courseName: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onSelectCourseForAdmission }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'tests' | 'language' | 'computer' | 'academic'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Programs' },
    { id: 'tests', label: 'Entrance & Law Tests' },
    { id: 'language', label: 'English Language' },
    { id: 'computer', label: 'Computer & IT' },
    { id: 'academic', label: 'Board Coaching & Tuition' }
  ] as const;

  const filteredPrograms = PROGRAMS.filter((prog) => {
    // Category filter
    let matchesTab = true;
    if (activeTab === 'tests') {
      matchesTab = prog.id === 'lat-preparation' || prog.id === 'gat-preparation' || prog.id === 'university-entry-tests';
    } else if (activeTab === 'language') {
      matchesTab = prog.id === 'english-language';
    } else if (activeTab === 'computer') {
      matchesTab = prog.id === 'computer-courses';
    } else if (activeTab === 'academic') {
      matchesTab = prog.id === 'matric-intermediate-coaching' || prog.id === 'tuition-classes';
    }

    // Search query filter
    const matchesSearch = 
      prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.short_description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prog.what_you_will_learn.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  const getProgramIcon = (id: string) => {
    switch (id) {
      case 'english-language':
        return <Languages className="w-5 h-5 text-[#123B5D]" />;
      case 'lat-preparation':
        return <Scale className="w-5 h-5 text-[#123B5D]" />;
      case 'gat-preparation':
        return <GraduationCap className="w-5 h-5 text-[#123B5D]" />;
      case 'computer-courses':
        return <Monitor className="w-5 h-5 text-[#123B5D]" />;
      case 'matric-intermediate-coaching':
      case 'tuition-classes':
        return <BookOpen className="w-5 h-5 text-[#123B5D]" />;
      case 'university-entry-tests':
        return <Sparkles className="w-5 h-5 text-[#123B5D]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#123B5D]" />;
    }
  };

  return (
    <section id="courses" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#1F7A6E]">
              Academic &amp; Professional Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D] tracking-tight">
              Our Comprehensive Courses
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Structured preparation for legal entrance exams, university tests, English fluency, computer diplomas, and school-to-college academic coaching.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses or topics..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#123B5D] focus:border-[#123B5D] bg-slate-50 transition-colors"
            />
          </div>
        </div>

        {/* Filter Bar (Segmented Controls) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#123B5D] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-300 space-y-3">
            <p className="text-sm text-slate-600">No programs found matching "{searchQuery}".</p>
            <button
              onClick={() => { setActiveTab('all'); setSearchQuery(''); }}
              className="text-xs font-semibold text-[#123B5D] hover:underline"
            >
              Reset filters to view all 7 programs
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-xl border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group hover:border-[#123B5D]/40"
              >
                <div>
                  {/* Optional Program Image Banner if available */}
                  {prog.image && (
                    <div className="h-44 w-full overflow-hidden bg-slate-100 border-b border-slate-200 relative">
                      <img
                        src={prog.image}
                        alt={prog.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                      <span className="absolute bottom-2.5 left-3 text-[11px] font-medium text-white/90">
                        Specialized Training Unit
                      </span>
                    </div>
                  )}

                  <div className="p-6 space-y-4">
                    {/* Unboxed Metadata (Zero-pill discipline) */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5 text-[#123B5D]">
                        {getProgramIcon(prog.id)}
                        <span className="font-semibold">{prog.duration}</span>
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>Kotri Campus</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#123B5D] leading-snug group-hover:text-[#1F7A6E] transition-colors">
                      {prog.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {prog.short_description}
                    </p>

                    {/* What you will learn sneak peek */}
                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Syllabus Highlights:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {prog.what_you_will_learn.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#1F7A6E] font-bold">›</span>
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="text-xs font-semibold text-slate-700 hover:text-[#123B5D] transition-colors py-1.5 cursor-pointer"
                  >
                    View Syllabus
                  </button>

                  <button
                    onClick={() => onSelectCourseForAdmission(prog.name)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-[#123B5D] hover:bg-[#0c273e] px-3.5 py-2 rounded-md shadow-2xs transition-colors cursor-pointer"
                  >
                    <span>Apply Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Program Details Modal */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onSelectCourseForAdmission={onSelectCourseForAdmission}
      />
    </section>
  );
};

import React from 'react';
import { Users, LayoutTemplate, FileCheck2, HeartHandshake, Wrench, GraduationCap } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/instituteData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Users className="w-5 h-5 text-[#123B5D]" />;
      case 1:
        return <LayoutTemplate className="w-5 h-5 text-[#1F7A6E]" />;
      case 2:
        return <FileCheck2 className="w-5 h-5 text-[#123B5D]" />;
      case 3:
        return <HeartHandshake className="w-5 h-5 text-[#1F7A6E]" />;
      case 4:
        return <Wrench className="w-5 h-5 text-[#123B5D]" />;
      case 5:
        return <GraduationCap className="w-5 h-5 text-[#1F7A6E]" />;
      default:
        return <FileCheck2 className="w-5 h-5 text-[#123B5D]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-[#F7F9FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Title */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1F7A6E]">
            Educational Integrity &amp; Pedagogy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D] tracking-tight">
            Why Choose The Talent Master Institute?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We provide an educational ecosystem that combines structured academic rigor with genuine student encouragement.
          </p>
        </div>

        {/* 6 Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-xl border border-slate-200/90 shadow-2xs hover:border-[#123B5D]/40 transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {getIcon(idx)}
                </div>
                <span className="font-mono text-xs font-semibold text-slate-400">
                  0{idx + 1}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#123B5D]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs font-medium text-[#1F7A6E]">
                {item.metric}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

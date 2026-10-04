import React from 'react';
import { ArrowRight, Trophy, BookCheck, LineChart, Sparkles } from 'lucide-react';

interface StudentSuccessProps {
  onJoinClick: () => void;
}

export const StudentSuccess: React.FC<StudentSuccessProps> = ({ onJoinClick }) => {
  const pillars = [
    {
      title: "Weekly Diagnostic Mock Exams",
      desc: "Simulated exam conditions for LAT, GAT, and Board examinations ensure students eliminate exam-day anxiety and master time management.",
      icon: BookCheck
    },
    {
      title: "Personalized Progress Reviews",
      desc: "Individual feedback on mock results, essay writing assessments, and problem areas to ensure steady conceptual advancement.",
      icon: LineChart
    },
    {
      title: "Confidence & Expression Training",
      desc: "Speaking clubs, presentation sessions, and mock courtroom debates build articulate communication and leadership poise.",
      icon: Trophy
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#123B5D] text-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1F7A6E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#F4B942]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Learning. Progress. Achievement.
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl mx-auto font-normal">
            Our students are at the heart of everything we do. We are committed to supporting learners through quality teaching, regular practice, academic guidance and a positive learning environment.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xs border border-white/10 rounded-xl p-6 sm:p-7 space-y-3 hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#F4B942]/10 border border-[#F4B942]/30 flex items-center justify-center text-[#F4B942]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action Banner */}
        <div className="pt-4 text-center">
          <button
            onClick={onJoinClick}
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-[#123B5D] bg-[#F4B942] hover:bg-[#e8af3c] active:scale-[0.99] rounded-md shadow-md transition-all cursor-pointer"
          >
            <span>Join The Talent Master Institute</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

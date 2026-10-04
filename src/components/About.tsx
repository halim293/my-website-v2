import React from 'react';
import { Target, Compass, Award, CheckCircle } from 'lucide-react';
import { ABOUT_DATA } from '../data/instituteData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F7F9FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1F7A6E]">
            About The Talent Master Institute
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D] tracking-tight text-balance">
            Empowering Students Through Disciplined Academic Mentorship
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            A trusted academic and professional development institute in Kotri, Jamshoro, committed to real learning outcomes.
          </p>
        </div>

        {/* Story Grid: Text + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p className="font-medium text-slate-900">
              The Talent Master Institute is a professional educational institute in Pakistan dedicated to helping students discover their potential, strengthen their academic foundations and prepare confidently for competitive examinations and future careers.
            </p>
            <p>
              We offer English language courses, law admission test preparation, GAT preparation, computer education, school and college coaching, tuition classes and university entrance-test preparation. Our approach combines quality teaching, structured learning, regular assessment, practical guidance and individual attention.
            </p>
            <p>
              We believe that every student possesses unique abilities that can be developed through the right environment, consistent effort and effective mentorship. From school-level academic support to professional skills and competitive-test preparation, our programs are designed to meet the changing educational needs of students.
            </p>
            <p className="text-[#123B5D] font-medium border-l-2 border-[#1F7A6E] pl-4 italic">
              At The Talent Master Institute, we aim to create a disciplined, supportive and motivating learning environment where knowledge is transformed into confidence, competence and meaningful opportunities for the future.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-white">
              <img
                src={ABOUT_DATA.image}
                alt="Interactive learning and classroom coaching at The Talent Master Institute"
                className="w-full h-72 sm:h-80 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-5 bg-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#123B5D]">
                  <Award className="w-4 h-4 text-[#F4B942]" />
                  <span>Interactive &amp; Structured Classroom Environment</span>
                </div>
                <p className="text-xs text-slate-500">
                  Combining conceptual lectures with daily homework feedback, weekly diagnostic testing, and individualized mentorship.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mission and Vision: 2 Column Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center">
                <Target className="w-5 h-5 text-[#123B5D]" />
              </div>
              <h3 className="text-xl font-bold text-[#123B5D]">Our Mission</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {ABOUT_DATA.mission}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-7 rounded-xl border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#1F7A6E]/10 text-[#1F7A6E] flex items-center justify-center">
                <Compass className="w-5 h-5 text-[#1F7A6E]" />
              </div>
              <h3 className="text-xl font-bold text-[#123B5D]">Our Vision</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {ABOUT_DATA.vision}
            </p>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#1F7A6E]">
                Guiding Principles
              </div>
              <h3 className="text-2xl font-bold text-[#123B5D]">Our Core Values</h3>
            </div>
            <span className="text-xs text-slate-500">
              The foundational pillars of our educational community
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ABOUT_DATA.core_values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-lg border border-slate-200/90 shadow-2xs hover:border-[#1F7A6E]/40 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#1F7A6E] shrink-0" />
                  <h4 className="text-sm font-bold text-[#123B5D]">{val.name}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Programs } from './components/Programs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Faculty } from './components/Faculty';
import { StudentSuccess } from './components/StudentSuccess';
import { AdmissionSection } from './components/AdmissionSection';
import { WhatsAppBanner } from './components/WhatsAppBanner';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [preselectedCourse, setPreselectedCourse] = useState<string | null>(null);

  const scrollToAdmissions = () => {
    const el = document.getElementById('admissions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCourseForAdmission = (courseName: string) => {
    setPreselectedCourse(courseName);
    scrollToAdmissions();
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#1F2937] flex flex-col font-sans selection:bg-[#123B5D] selection:text-white">
      {/* 1. Header & Navigation Bar */}
      <Navbar onApplyClick={scrollToAdmissions} />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onApplyClick={scrollToAdmissions} />

        {/* 3. About Section (History, Mission, Vision, Core Values) */}
        <About />

        {/* 4. Programs / Courses Section */}
        <Programs onSelectCourseForAdmission={handleSelectCourseForAdmission} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 6. Meet Our Teachers / Faculty */}
        <Faculty />

        {/* 7. Student Success Section */}
        <StudentSuccess onJoinClick={scrollToAdmissions} />

        {/* 8. Admissions Section & Interactive 13-Field Form */}
        <AdmissionSection
          preselectedCourse={preselectedCourse}
          onClearPreselectedCourse={() => setPreselectedCourse(null)}
        />

        {/* 9. WhatsApp Admission Guidance Banner */}
        <WhatsAppBanner />

        {/* 10. Contact Us & Campus Coordinates */}
        <ContactSection />
      </main>

      {/* 11. Institutional Footer & Legal Notices */}
      <Footer />

      {/* 12. Floating WhatsApp Quick-Connect */}
      <FloatingWhatsApp />
    </div>
  );
}

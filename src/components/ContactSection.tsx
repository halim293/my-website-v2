import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { INSTITUTE_INFO } from '../data/instituteData';

export const ContactSection: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquiryCourse, setInquiryCourse] = useState('General Question');
  const [sent, setSent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryPhone.trim() || !inquiryMessage.trim()) return;

    setSent(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F7F9FC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1F7A6E]">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D] tracking-tight">
            Contact The Talent Master Institute
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Visit our campus in Kotri, Jamshoro, call our helpdesk, or drop us an inquiry message.
          </p>
        </div>

        {/* Contact Grid: Info Cards + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Campus Details & Direct Channels */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 shadow-2xs space-y-6">
              <h3 className="text-lg font-bold text-[#123B5D] border-b border-slate-100 pb-3">
                Official Campus Details
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#123B5D]/10 text-[#123B5D] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#123B5D]" />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-xs font-medium uppercase tracking-wider">
                      Campus Location
                    </span>
                    <p className="font-semibold text-slate-900 mt-0.5">
                      {INSTITUTE_INFO.address}
                    </p>
                    <span className="text-xs text-slate-500">
                      Easily accessible from Kotri main market, railway junction, and Jamshoro road.
                    </span>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-xs font-medium uppercase tracking-wider">
                      Phone &amp; WhatsApp
                    </span>
                    <a
                      href={`tel:${INSTITUTE_INFO.phone}`}
                      className="font-mono text-sm font-bold text-[#123B5D] hover:text-[#1F7A6E] transition-colors block mt-0.5"
                    >
                      {INSTITUTE_INFO.phone}
                    </a>
                    <a
                      href={INSTITUTE_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-emerald-700 hover:underline flex items-center gap-1 mt-0.5"
                    >
                      <MessageSquare className="w-3 h-3" />
                      Direct WhatsApp: 0311 3089899
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 border border-blue-100">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-xs font-medium uppercase tracking-wider">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${INSTITUTE_INFO.email}`}
                      className="font-semibold text-[#123B5D] hover:underline break-all mt-0.5 block"
                    >
                      {INSTITUTE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5 border border-amber-100">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-slate-500 text-xs font-medium uppercase tracking-wider">
                      Academic Hours
                    </span>
                    <p className="text-slate-800 font-medium mt-0.5">
                      {INSTITUTE_INFO.operatingHours}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Kotri / Jamshoro regional directions note */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 text-xs text-slate-600 space-y-2">
              <span className="font-semibold text-slate-900 block">
                Transportation &amp; Accessibility Note:
              </span>
              <p>
                Our campus is situated in central Kotri, Jamshoro district, enabling straightforward public and private transit connectivity for students from Kotri City, Jamshoro university area, and surrounding Sindh localities.
              </p>
            </div>

          </div>

          {/* Right Column: Quick Inquiry Form */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-[#123B5D] mb-1">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Have questions regarding class timings, fee structure, or faculty? Leave a message below.
            </p>

            {sent ? (
              <div className="py-8 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-[#123B5D]">
                  Inquiry Message Sent
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out to The Talent Master Institute. Our administration desk will respond to your provided phone number shortly.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-xs font-semibold text-[#123B5D] hover:underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#123B5D] focus:border-[#123B5D] bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryPhone}
                    onChange={(e) => setInquiryPhone(e.target.value)}
                    placeholder="03113089899"
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#123B5D] focus:border-[#123B5D] bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Inquiry Topic / Program
                  </label>
                  <select
                    value={inquiryCourse}
                    onChange={(e) => setInquiryCourse(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#123B5D] focus:border-[#123B5D] bg-slate-50"
                  >
                    <option value="General Question">General Admission Inquiry</option>
                    <option value="LAT Preparation">Law Admission Test (LAT) Preparation</option>
                    <option value="GAT Preparation">GAT Preparation (General &amp; Law)</option>
                    <option value="English Language">English Language Courses &amp; Diploma</option>
                    <option value="Computer Courses">Computer Courses (CIT / DIT)</option>
                    <option value="Coaching Classes">Coaching Classes (Matric &amp; Intermediate)</option>
                    <option value="Tuition Classes">Tuition Classes (Classes 1–8)</option>
                    <option value="University Tests">University Entrance Tests (MDCAT/ECAT)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Question or Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Ask about batch timings, fee policies, or enrollment..."
                    className="w-full px-3 py-2 text-xs rounded-md border border-slate-300 focus:outline-none focus:ring-1 focus:ring-[#123B5D] focus:border-[#123B5D] bg-slate-50"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#123B5D] hover:bg-[#0c273e] rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

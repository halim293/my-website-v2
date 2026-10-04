import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, FileText, Phone, HelpCircle } from 'lucide-react';
import { ADMISSION_FIELDS, ADMISSION_INSTRUCTIONS, FEE_NOTE, INSTITUTE_INFO } from '../data/instituteData';

interface AdmissionSectionProps {
  preselectedCourse: string | null;
  onClearPreselectedCourse: () => void;
}

interface FormState {
  full_name: string;
  father_name: string;
  date_of_birth: string;
  gender: string;
  cnic_bform: string;
  last_qualification: string;
  course: string;
  class: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  referral_source: string;
}

const initialForm: FormState = {
  full_name: '',
  father_name: '',
  date_of_birth: '',
  gender: '',
  cnic_bform: '',
  last_qualification: '',
  course: '',
  class: '',
  phone: '',
  whatsapp: '',
  email: '',
  address: '',
  referral_source: ''
};

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({
  preselectedCourse,
  onClearPreselectedCourse
}) => {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationRef, setApplicationRef] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync preselected course from Programs section
  useEffect(() => {
    if (preselectedCourse) {
      // Find matching course option
      const courseField = ADMISSION_FIELDS.find(f => f.name === 'course');
      const matched = courseField?.options?.find(opt => 
        opt.toLowerCase().includes(preselectedCourse.toLowerCase()) ||
        preselectedCourse.toLowerCase().includes(opt.toLowerCase())
      );
      if (matched) {
        setFormData(prev => ({ ...prev, course: matched }));
      }
    }
  }, [preselectedCourse]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!formData.father_name.trim()) newErrors.father_name = "Father's name is required";
    if (!formData.date_of_birth) newErrors.date_of_birth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!formData.cnic_bform.trim()) newErrors.cnic_bform = "CNIC or B-Form is required";
    if (!formData.last_qualification.trim()) newErrors.last_qualification = "Qualification is required";
    if (!formData.course) newErrors.course = "Please select a course";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number is required";
    if (!formData.address.trim()) newErrors.address = "Complete address is required";

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    // Simulate generation of application ref
    const refCode = `TMI-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    setTimeout(() => {
      setApplicationRef(refCode);
      setIsSubmitted(true);
      setIsSubmitting(false);
      onClearPreselectedCourse();
    }, 600);
  };

  const generateWhatsAppMessageUrl = () => {
    const text = `*New Admission Application - The Talent Master Institute*
*Ref:* ${applicationRef}
*Name:* ${formData.full_name}
*Father's Name:* ${formData.father_name}
*Course:* ${formData.course}
*Class:* ${formData.class || 'N/A'}
*CNIC/B-Form:* ${formData.cnic_bform}
*Last Qualification:* ${formData.last_qualification}
*Phone:* ${formData.phone}
*WhatsApp:* ${formData.whatsapp}
*Address:* ${formData.address}
*Kotri Campus Inquiry*`;

    return `https://wa.me/923113089899?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="admissions" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#1F7A6E]">
            Enrollment 2026
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#123B5D] tracking-tight">
            Start Your Journey with The Talent Master Institute
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Complete the admission form and our admissions team will contact you with course details, schedule and admission guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-8 bg-[#F7F9FC] rounded-xl border border-slate-200 p-6 sm:p-8 shadow-2xs">
            
            {isSubmitted ? (
              <div className="py-8 space-y-6 text-center animate-in fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl font-bold text-[#123B5D]">
                    Application Submitted Successfully!
                  </h3>
                  <div className="text-xs font-mono font-bold bg-white text-slate-800 py-1.5 px-3 rounded-md border border-slate-200 inline-block">
                    Reference ID: {applicationRef}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pt-2">
                    Thank you for applying to The Talent Master Institute. Your admission application has been received successfully. Our admissions team will contact you shortly to confirm the next steps.
                  </p>
                </div>

                {/* Candidate summary snippet */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 text-left text-xs space-y-1.5 max-w-md mx-auto text-slate-700">
                  <div className="font-semibold text-slate-900 border-b border-slate-100 pb-1">
                    Application Summary:
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Applicant:</span>
                    <span className="font-medium">{formData.full_name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Course Selected:</span>
                    <span className="font-medium text-[#123B5D]">{formData.course}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Contact:</span>
                    <span className="font-medium">{formData.phone}</span>
                  </div>
                </div>

                {/* Instant WhatsApp Action */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={generateWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Application via WhatsApp</span>
                  </a>

                  <button
                    onClick={() => {
                      setFormData(initialForm);
                      setIsSubmitted(false);
                    }}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 px-4 py-2"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Personal Information */}
                <div className="space-y-4">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className="text-sm font-bold text-[#123B5D] uppercase tracking-wider">
                      1. Personal Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.full_name ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.full_name && <p className="text-[11px] text-red-500 mt-1">{errors.full_name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Father's Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="father_name"
                        value={formData.father_name}
                        onChange={handleChange}
                        placeholder="Enter father's name"
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.father_name ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.father_name && <p className="text-[11px] text-red-500 mt-1">{errors.father_name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Date of Birth <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.date_of_birth ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.date_of_birth && <p className="text-[11px] text-red-500 mt-1">{errors.date_of_birth}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Gender <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.gender ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      >
                        <option value="">Select gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Prefer not to say">Prefer not to say</option>
                      </select>
                      {errors.gender && <p className="text-[11px] text-red-500 mt-1">{errors.gender}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        CNIC / B-Form Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="cnic_bform"
                        value={formData.cnic_bform}
                        onChange={handleChange}
                        placeholder="Enter CNIC or B-Form number"
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.cnic_bform ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.cnic_bform && <p className="text-[11px] text-red-500 mt-1">{errors.cnic_bform}</p>}
                    </div>
                  </div>
                </div>

                {/* 2. Academic Information */}
                <div className="space-y-4 pt-2">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className="text-sm font-bold text-[#123B5D] uppercase tracking-wider">
                      2. Academic Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Last Qualification <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="last_qualification"
                        value={formData.last_qualification}
                        onChange={handleChange}
                        placeholder="e.g. Matric, Intermediate, Bachelor's"
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.last_qualification ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.last_qualification && <p className="text-[11px] text-red-500 mt-1">{errors.last_qualification}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Course Applying For <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.course ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      >
                        <option value="">Select a course</option>
                        {ADMISSION_FIELDS.find(f => f.name === 'course')?.options?.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      {errors.course && <p className="text-[11px] text-red-500 mt-1">{errors.course}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Class (if applicable)
                      </label>
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-xs rounded-md bg-white border border-slate-300 focus:border-[#123B5D] focus:outline-none focus:ring-1"
                      >
                        <option value="">Select class if applicable</option>
                        {ADMISSION_FIELDS.find(f => f.name === 'class')?.options?.map(opt => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Contact Information */}
                <div className="space-y-4 pt-2">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className="text-sm font-bold text-[#123B5D] uppercase tracking-wider">
                      3. Contact Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="03113089899"
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        WhatsApp Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="03113089899"
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.whatsapp ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.whatsapp && <p className="text-[11px] text-red-500 mt-1">{errors.whatsapp}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address (optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Complete Address <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="address"
                        rows={2}
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Enter your complete residential address in Kotri / Jamshoro / Sindh"
                        className={`w-full px-3 py-2 text-xs rounded-md bg-white border ${errors.address ? 'border-red-400 focus:ring-red-400' : 'border-slate-300 focus:border-[#123B5D]'} focus:outline-none focus:ring-1`}
                      />
                      {errors.address && <p className="text-[11px] text-red-500 mt-1">{errors.address}</p>}
                    </div>
                  </div>
                </div>

                {/* 4. Additional Information */}
                <div className="space-y-4 pt-2">
                  <div className="border-b border-slate-200 pb-2">
                    <h3 className="text-sm font-bold text-[#123B5D] uppercase tracking-wider">
                      4. Additional Information
                    </h3>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      How did you hear about us?
                    </label>
                    <select
                      name="referral_source"
                      value={formData.referral_source}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-xs rounded-md bg-white border border-slate-300 focus:border-[#123B5D] focus:outline-none focus:ring-1"
                    >
                      <option value="">Select an option</option>
                      {ADMISSION_FIELDS.find(f => f.name === 'referral_source')?.options?.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 hidden sm:inline">
                    Required fields marked with <span className="text-red-500">*</span>
                  </span>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-[#123B5D] hover:bg-[#0c273e] rounded-md shadow-xs transition-all cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Processing Application...' : 'Submit Admission Application'}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Column: Instructions & Policies */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Admission Instructions Box */}
            <div className="bg-[#F7F9FC] rounded-xl border border-slate-200 p-6 space-y-4">
              <div className="flex items-center gap-2 text-[#123B5D]">
                <FileText className="w-5 h-5 text-[#1F7A6E]" />
                <h3 className="text-base font-bold">Admission Instructions</h3>
              </div>

              <ol className="space-y-3 text-xs text-slate-600 list-decimal pl-4 leading-relaxed">
                {ADMISSION_INSTRUCTIONS.map((instruction, idx) => (
                  <li key={idx} className="pl-1">
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {/* Fee Note Box */}
            <div className="bg-amber-50/70 border border-amber-200/90 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                <AlertCircle className="w-4 h-4 text-amber-700" />
                <span>Fee Information</span>
              </div>
              <p className="text-xs text-amber-800 leading-relaxed">
                {FEE_NOTE}
              </p>
            </div>

            {/* Need Direct Help? */}
            <div className="bg-emerald-50/60 border border-emerald-200/90 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-950">
                <HelpCircle className="w-4 h-4 text-emerald-700" />
                <span>Admissions Helpdesk</span>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Have questions about document requirements, timings, or seat availability? Connect directly with our admissions officer.
              </p>
              <a
                href={INSTITUTE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 hover:text-emerald-950"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Chat on WhatsApp: {INSTITUTE_INFO.whatsapp}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

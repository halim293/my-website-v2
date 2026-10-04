import heroImg from '../assets/images/hero_advocate_uzair.jpg';
import classroomImg from '../assets/images/classroom_learning_session_1790915966326.jpg';
import lawImg from '../assets/images/legal_lat_study_materials_1790915977508.jpg';
import computerImg from '../assets/images/computer_lab_training_1790915988068.jpg';

export interface Program {
  id: string;
  name: string;
  category: 'language' | 'law' | 'gat' | 'computer' | 'academic' | 'tuition' | 'university';
  duration: string;
  eligibility: string;
  short_description: string;
  long_description: string;
  what_you_will_learn: string[];
  image?: string;
  highlights?: string[];
  scheduleType?: string;
}

export interface FacultyMember {
  name: string;
  role: string;
  subjects: string[];
  bio: string;
}

export const INSTITUTE_INFO = {
  name: "The Talent Master Institute",
  shortName: "Talent Master",
  country: "Pakistan",
  city: "Kotri, Jamshoro",
  address: "Main City Kotri, Jamshoro, Sindh, Pakistan",
  type: "Educational Institute",
  positioning: "Professional, student-focused and result-oriented academic and test preparation institute",
  phone: "03113089899",
  whatsapp: "03113089899",
  whatsappUrl: "https://wa.me/923113089899",
  email: "info.thetalentmasterinstitute@gmail.com",
  operatingHours: "Monday – Saturday: 8:00 AM – 8:30 PM | Sunday: Special Test Sessions"
};

export const TAGLINES = [
  "Unlock Your Talent. Build Your Future.",
  "Where Talent Meets the Right Direction.",
  "Learn Today. Lead Tomorrow."
];

export const HERO_DATA = {
  headline: "Unlock Your Potential. Master Your Future.",
  subheadline: "The Talent Master Institute provides quality education, professional skills training, academic coaching and entrance-test preparation to help students move confidently toward their academic and career goals.",
  primary_cta: "Apply Now",
  secondary_cta: "Explore Courses",
  heroImage: heroImg,
  stats: [
    { value: "7+", label: "Academic & Professional Programs" },
    { value: "100%", label: "Curriculum & Syllabus Coverage" },
    { value: "Experienced", label: "Legal, Tech & Academic Faculty" },
    { value: "Kotri, Jamshoro", label: "Central Accessible Campus" }
  ]
};

export const ABOUT_DATA = {
  title: "About The Talent Master Institute",
  content: "The Talent Master Institute is a professional educational institute in Pakistan dedicated to helping students discover their potential, strengthen their academic foundations and prepare confidently for competitive examinations and future careers. We offer English language courses, law admission test preparation, GAT preparation, computer education, school and college coaching, tuition classes and university entrance-test preparation. Our approach combines quality teaching, structured learning, regular assessment, practical guidance and individual attention. We believe that every student possesses unique abilities that can be developed through the right environment, consistent effort and effective mentorship. From school-level academic support to professional skills and competitive-test preparation, our programs are designed to meet the changing educational needs of students. At The Talent Master Institute, we aim to create a disciplined, supportive and motivating learning environment where knowledge is transformed into confidence, competence and meaningful opportunities for the future.",
  mission: "To provide accessible, quality-oriented education and professional training that develops students' knowledge, skills, confidence and readiness for academic and career opportunities.",
  vision: "To become a trusted educational institute recognized for academic excellence, professional skills development, student mentorship and meaningful learning outcomes.",
  image: classroomImg,
  core_values: [
    { name: "Academic Excellence", desc: "Rigorous standards and high-caliber subject teaching across all grades and courses." },
    { name: "Integrity", desc: "Transparent admissions, honest student guidance, and ethical educational conduct." },
    { name: "Student-Centered Learning", desc: "Tailoring instructional pace to individual learning styles and academic backgrounds." },
    { name: "Professionalism", desc: "Qualified educators, structured syllabi, punctuality, and systematic tracking." },
    { name: "Continuous Improvement", desc: "Regular mock tests, student feedback loops, and updated exam patterns." },
    { name: "Discipline", desc: "Consistent study routines, focused learning spaces, and accountability." },
    { name: "Inclusivity", desc: "Welcoming students from diverse academic tiers with dedicated remedial guidance." },
    { name: "Commitment to Results", desc: "Dedicated preparation geared toward tangible admissions, board scores, and certificates." }
  ]
};

export const PROGRAMS: Program[] = [
  {
    id: "english-language",
    name: "English Language Courses & Diploma",
    category: "language",
    duration: "3 to 6 months",
    eligibility: "Students, graduates, professionals and learners seeking to improve their English language skills.",
    short_description: "A practical English language program designed to improve speaking, listening, reading, writing, grammar and vocabulary for academic, professional and everyday communication.",
    long_description: "The English Language Courses & Diploma program is designed for learners who want to communicate confidently and effectively in English. The course focuses on practical language development rather than memorization alone. Students receive structured practice in grammar, vocabulary, pronunciation, speaking, listening, reading and writing. Activities such as conversations, presentations, discussions and written exercises help learners apply English in real-life situations. The program can benefit students preparing for higher education, professionals seeking better workplace communication and individuals who want to develop their overall confidence in English.",
    what_you_will_learn: [
      "English grammar and sentence structure",
      "Speaking and conversational English",
      "Vocabulary and pronunciation",
      "Reading and comprehension skills",
      "Formal and academic writing"
    ],
    highlights: ["Interactive Speaking Circles", "Presentation Training", "Grammar Drills & Vocabulary Boost", "Diploma Certificate upon Completion"],
    scheduleType: "Morning & Evening Batches"
  },
  {
    id: "lat-preparation",
    name: "Law Admission Test (LAT) Preparation",
    category: "law",
    duration: "2 to 3 months",
    eligibility: "Students preparing to appear for the Law Admission Test and seeking admission to an LLB program.",
    short_description: "Focused LAT preparation covering English, General Knowledge, Pakistan Studies, Islamiat, Urdu, Mathematics, essay writing and personal statement skills.",
    long_description: "The LAT Preparation Program is designed for students aspiring to pursue legal education and preparing for the Law Admission Test. The program provides systematic preparation across relevant test areas, including English, General Knowledge, Pakistan Studies, Islamiat, Urdu and basic Mathematics, along with written components such as essay writing and personal statements. Students practice through topic-wise exercises, mock tests, time-management techniques and examination-oriented guidance. Regular assessment helps identify weaknesses and improve performance. The objective is to provide students with a structured preparation environment and the confidence required to approach the LAT effectively.",
    what_you_will_learn: [
      "LAT English preparation",
      "General Knowledge and Current Affairs",
      "Pakistan Studies and Islamiat",
      "Basic Mathematics and Urdu",
      "Essay writing and personal statement preparation"
    ],
    image: lawImg,
    highlights: ["Taught by practicing Advocates", "Full HEC Syllabus Coverage", "Weekly Mock LAT Exams", "Personal Statement & Essay Mastery"],
    scheduleType: "Intensive Crash & Regular Sessions"
  },
  {
    id: "gat-preparation",
    name: "GAT Preparation – General & Law-GAT",
    category: "gat",
    duration: "2 to 3 months",
    eligibility: "Graduates and eligible candidates preparing for GAT General or Law-GAT examinations.",
    short_description: "Structured preparation for GAT examinations with emphasis on analytical reasoning, quantitative reasoning, verbal ability, legal concepts and examination strategies.",
    long_description: "The GAT Preparation Program is designed for graduates preparing for relevant GAT examinations, including GAT General and Law-GAT where applicable. Students receive focused preparation in verbal reasoning, quantitative reasoning, analytical thinking and other relevant examination areas. Law-GAT preparation additionally emphasizes legal concepts and subject-specific practice. The program uses topic-based learning, practice questions, timed exercises, mock examinations and performance reviews. Students are guided in identifying question patterns, improving accuracy, managing examination time and developing effective problem-solving strategies.",
    what_you_will_learn: [
      "Verbal reasoning and vocabulary",
      "Quantitative reasoning",
      "Analytical reasoning",
      "Law-GAT subject preparation",
      "Mock tests and examination strategies"
    ],
    highlights: ["Analytical Reasoning Shortcuts", "Quantitative Speed Building", "Comprehensive Law-GAT Practice", "Timed Computer-Format Mocks"],
    scheduleType: "Weekend & Evening Options"
  },
  {
    id: "computer-courses",
    name: "Computer Courses – CIT, DIT & Short Courses",
    category: "computer",
    duration: "1 to 12 months depending on program",
    eligibility: "Students, beginners, job seekers and individuals seeking computer and digital skills.",
    short_description: "Practical computer education including CIT, DIT and other short courses designed to develop useful academic, professional and digital skills.",
    long_description: "The Computer Courses Program provides practical digital education for students and learners at different skill levels. CIT and DIT programs are designed to build foundational and intermediate computer competencies, while short courses can focus on specific digital skills. Students may learn computer fundamentals, office productivity tools, internet usage, documentation, presentations, spreadsheets, databases and other relevant digital skills. Practical exercises are integrated into learning so students can apply concepts instead of relying only on theory.",
    what_you_will_learn: [
      "Computer fundamentals",
      "Microsoft Office and productivity tools",
      "Internet and digital literacy",
      "Documents, spreadsheets and presentations",
      "Practical computer and workplace skills"
    ],
    image: computerImg,
    highlights: ["Hands-on PC Workstation per Student", "CIT & DIT Diplomas", "Office Automation Proficiency", "Practical Lab Projects"],
    scheduleType: "Daily 1-2 Hour Lab Sessions"
  },
  {
    id: "matric-intermediate-coaching",
    name: "Coaching Classes – Matric & Intermediate",
    category: "academic",
    duration: "Academic year / customized session",
    eligibility: "Students enrolled in Classes 9, 10, 11 and 12.",
    short_description: "Academic coaching for Matric and Intermediate students across Science, Arts and Commerce groups with subject-focused teaching and regular assessments.",
    long_description: "The Matric and Intermediate Coaching Program provides academic support for students in Classes 9 to 12. Programs can be structured according to Science, Arts and Commerce groups and the subjects offered by the relevant board or institution. Teachers explain concepts systematically, provide practice material, conduct assessments and help students prepare for examinations. Special emphasis is placed on strengthening fundamentals, solving questions, improving written expression and developing effective study habits.",
    what_you_will_learn: [
      "Board-oriented subject preparation",
      "Conceptual understanding",
      "Question-solving techniques",
      "Revision and examination preparation",
      "Time management and study skills"
    ],
    highlights: ["Science, Arts & Commerce Groups", "BISE Board Past Papers & Model Papers", "Regular Monthly Chapter Tests", "Revision & Pre-Board Series"],
    scheduleType: "After-school & Evening Sessions"
  },
  {
    id: "tuition-classes",
    name: "Tuition Classes – Classes 1 to 8",
    category: "tuition",
    duration: "Academic year / customized session",
    eligibility: "Students studying in Classes 1 to 8.",
    short_description: "Foundation-focused tuition for Classes 1 to 8, helping students strengthen concepts, complete coursework and develop effective study habits.",
    long_description: "The Tuition Classes for Classes 1 to 8 are designed to provide students with a strong academic foundation. The program supports students in understanding school subjects, completing assignments, revising lessons and preparing for school examinations. Teachers focus on clear explanations, age-appropriate practice and regular feedback. Particular attention can be given to English, Mathematics, Science, Urdu and other core subjects according to the student's requirements.",
    what_you_will_learn: [
      "Strong academic fundamentals",
      "English and language skills",
      "Mathematics and problem-solving",
      "Science concepts",
      "Homework, revision and study skills"
    ],
    highlights: ["Individualized Child Attention", "Daily Homework & Concept Support", "Foundation in Math & English", "Safe & Inspiring Study Atmosphere"],
    scheduleType: "Daily Afternoon Batches"
  },
  {
    id: "university-entry-tests",
    name: "University Entrance Test Preparation",
    category: "university",
    duration: "2 to 6 months depending on examination",
    eligibility: "Students preparing for university entrance examinations such as MDCAT, ECAT and other relevant admission tests.",
    short_description: "Targeted preparation for university entrance examinations with conceptual teaching, practice questions, mock tests and examination strategies.",
    long_description: "The University Entrance Test Preparation Program supports students preparing for competitive university admission tests, including examinations such as MDCAT, ECAT and other relevant entrance assessments. Preparation is organized around the syllabus and testing framework applicable to the target examination. Students strengthen concepts, practice objective questions, improve speed and accuracy and participate in mock examinations. Teachers guide students in managing examination time, improving performance and developing effective test-taking strategies.",
    what_you_will_learn: [
      "Syllabus-based conceptual preparation",
      "MCQ solving techniques",
      "Time management and speed building",
      "Full-length mock examinations",
      "Exam strategy and performance analysis"
    ],
    highlights: ["MDCAT, ECAT & University Aptitude Tests", "Negative Marking Strategy Drills", "1,000+ Topic-Wise MCQs", "Comprehensive Grand Mocks"],
    scheduleType: "Morning & Intensive Evening Batches"
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Faculty",
    description: "Learn from dedicated teachers with subject-specific knowledge and teaching experience.",
    metric: "Dedicated Advocates & Specialists"
  },
  {
    title: "Structured Learning",
    description: "Follow organized course plans designed around clear learning objectives.",
    metric: "Step-by-Step Milestones"
  },
  {
    title: "Regular Assessments",
    description: "Practice tests and assessments help students monitor progress and identify areas for improvement.",
    metric: "Weekly & Monthly Testing"
  },
  {
    title: "Student-Centered Guidance",
    description: "We focus on individual learning needs, academic challenges and student development.",
    metric: "Mentorship & Doubt Clearing"
  },
  {
    title: "Practical Skills",
    description: "Our language and computer programs emphasize practical skills that students can apply beyond the classroom.",
    metric: "Real-World Application"
  },
  {
    title: "Academic & Career Focus",
    description: "We help students prepare for academic examinations, higher education and future professional opportunities.",
    metric: "Future-Ready Outcomes"
  }
];

export const FACULTY: FacultyMember[] = [
  {
    name: "Adv. Uzair Kumbhar",
    role: "Senior Legal Instructor & Test Prep Lead",
    subjects: ["LAT Preparation", "GAT Preparation", "English Language"],
    bio: "Practicing advocate and experienced educator dedicated to coaching students through competitive law entrance exams and advanced analytical preparation."
  },
  {
    name: "Adv. Sindhu Uzair",
    role: "Senior Legal Educator & Verbal Specialist",
    subjects: ["LAT Preparation", "GAT Preparation", "English Language"],
    bio: "Legal practitioner specializing in constitutional concepts, jurisprudence overview, essay composition, and English verbal proficiency."
  },
  {
    name: "Miss Haya Baloch",
    role: "Mathematics & Analytical Faculty",
    subjects: ["Mathematics"],
    bio: "Specialist in building mathematical foundations, quantitative problem solving, and analytical reasoning techniques for school and competitive tests."
  },
  {
    name: "Mr. Usama",
    role: "Lead IT & Computer Instructor",
    subjects: ["Computer", "CIT", "DIT"],
    bio: "Experienced technology instructor guiding students through practical IT skills, software office suites, hardware basics, and diploma coursework."
  },
  {
    name: "Mr. Mohsin",
    role: "Computer Applications & Digital Skills Instructor",
    subjects: ["Computer", "CIT", "DIT"],
    bio: "Hands-on IT educator focusing on office automation, spreadsheets, digital literacy, and practical lab assignments."
  },
  {
    name: "Miss Sakina",
    role: "Academic Coaching & Foundation Lead",
    subjects: ["Coaching Classes", "Tuition Classes"],
    bio: "Dedicated academic mentor fostering disciplined study habits, board curriculum mastery, and core foundational learning for primary and secondary students."
  }
];

export const ADMISSION_FIELDS = [
  { name: "full_name", label: "Full Name", type: "text", placeholder: "Enter your full name", required: true },
  { name: "father_name", label: "Father's Name", type: "text", placeholder: "Enter father's name", required: true },
  { name: "date_of_birth", label: "Date of Birth", type: "date", placeholder: "Select date of birth", required: true },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    placeholder: "Select gender",
    options: ["Male", "Female", "Prefer not to say"],
    required: true
  },
  { name: "cnic_bform", label: "CNIC / B-Form", type: "text", placeholder: "e.g. 41201-XXXXXXX-X", required: true },
  { name: "last_qualification", label: "Last Qualification", type: "text", placeholder: "e.g. Matric, Intermediate, Bachelor's", required: true },
  {
    name: "course",
    label: "Course Applying For",
    type: "select",
    placeholder: "Select a course",
    options: [
      "English Language Courses & Diploma",
      "LAT Preparation",
      "GAT Preparation – General / Law-GAT",
      "Computer Courses – CIT / DIT / Short Courses",
      "Matric & Intermediate Coaching",
      "Tuition Classes – Classes 1 to 8",
      "University Entrance Test Preparation – MDCAT / ECAT / Other"
    ],
    required: true
  },
  {
    name: "class",
    label: "Class (if applicable)",
    type: "select",
    placeholder: "Select class if applicable",
    options: [
      "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
      "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
      "Class 11", "Class 12", "Not Applicable"
    ],
    required: false
  },
  { name: "phone", label: "Phone Number", type: "tel", placeholder: "03113089899", required: true },
  { name: "whatsapp", label: "WhatsApp Number", type: "tel", placeholder: "03113089899", required: true },
  { name: "email", label: "Email Address", type: "email", placeholder: "Enter your email address", required: false },
  { name: "address", label: "Complete Address", type: "textarea", placeholder: "Enter your complete residential address in Kotri / Jamshoro / Sindh", required: true },
  {
    name: "referral_source",
    label: "How did you hear about us?",
    type: "select",
    placeholder: "Select an option",
    options: [
      "Google Search", "Facebook", "Instagram", "YouTube", "WhatsApp",
      "Friend / Family", "School / College", "Other"
    ],
    required: false
  }
];

export const ADMISSION_INSTRUCTIONS = [
  "Provide accurate and complete information in the admission form.",
  "Select the course according to your academic needs and eligibility.",
  "Applicants may be required to provide relevant educational documents during admission.",
  "Course schedules and available seats should be confirmed with the institute before enrollment.",
  "Admission is subject to eligibility requirements, seat availability and institute policies."
];

export const FEE_NOTE = "For complete fee information and available payment options, please contact The Talent Master Institute directly.";

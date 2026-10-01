export type FaqItem = [question: string, answer: string];

export const ALL_FAQS: FaqItem[] = [
  [
    "Who can join BOA?",
    "BOA is open to any learner, whatever their age. You can enrol in the full Nigerian curriculum programme or come to us for a single subject or skill. There is no age cutoff and no fixed stage requirement.",
  ],
  [
    "What do you teach?",
    "BOA covers four focus areas: Academic Catch-up and Excellence, Entrance Exam Preparation, Reading Mastery, and Cultural Identity. Subjects include Maths, English, Science, Health Education, Yoruba, Hausa, Igbo, Arts, Creative Writing, Mental Maths, Physics, Chemistry, Biology, Computer Studies, Coding, French, Geography, Literature and Music.",
  ],
  [
    "How do classes work?",
    "Classes are live and online. Sessions run in small groups three times a week and last 1 hour, 1 hour 30 minutes or 2 hours. Personalised one-to-one sessions are also available.",
  ],
  [
    "How much does it cost?",
    "Fees depend on the programme you choose. A BOA team member will share the details when you start the enrolment process. You can also reach us on WhatsApp or by email if you prefer to ask first.",
  ],
  [
    "How do I pay?",
    "Fees are paid online through the parent portal once you are enrolled. A receipt is available to download after each payment.",
  ],
  [
    "How will I know how my child is doing?",
    "You will have access to the parent dashboard showing attendance, test scores and teacher comments. BOA also sends regular progress reports, and tutors contact parents directly when something needs attention.",
  ],
  [
    "How do I speak to a teacher?",
    "Through the Contact page, on WhatsApp, or by requesting a meeting through the portal with Ms Zika or another tutor.",
  ],
  [
    "How do I start?",
    "Fill in the enrolment form and a BOA team member will follow up with you directly, usually within one business day.",
  ],
  [
    "Do you help with entrance exams?",
    "Yes. Entrance Exam Preparation is one of BOA's four focus areas. Tutors work through proven strategies and past questions.",
  ],
  [
    "Can my child learn a local language with you?",
    "Yes. Cultural Identity is a dedicated focus area. Yoruba, Hausa and Igbo are currently offered.",
  ],
];

export const HOME_FAQS = ALL_FAQS.slice(0, 3);

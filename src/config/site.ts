/**
 * Single source of truth for all BOA brand, contact and configuration data.
 * Import from here whenever you need a phone number, URL, social link or
 * class-format detail. Never hardcode these values elsewhere.
 */
export const siteConfig = {
  name: "Bridge Online Academy",
  shortName: "BOA",
  slogan: "Your Personal Study Companion",
  url: "https://www.bridgeonlineacademy.org",

  contact: {
    phones: [
      {
        label: "Primary",
        display: "+234 705 659 0881",
        e164: "+2347056590881",
      },
      {
        label: "Secondary",
        display: "+234 802 758 2081",
        e164: "+2348027582081",
      },
    ],
    whatsapp: {
      e164: "+2347056590881",
      base: "https://wa.me/2347056590881",
    },
    email: "Bridgeonlineacademy@gmail.com",
  },

  social: {
    tiktok: "https://www.tiktok.com/@bridgeonlineacademy",
    instagram: "https://www.instagram.com/angyzika",
  },

  fees: {
    /** Monthly tuition in GBP. Confirm with client before displaying publicly. */
    currency: "GBP",
    monthly: 70,
  },

  classFormat: {
    sessionLengths: ["1 hour", "1 hour 30 minutes", "2 hours"] as const,
    sessionsPerWeek: 3,
  },

  focusAreas: [
    {
      id: "academic",
      title: "Academic Catch-up and Excellence",
      description:
        "Core subjects taught carefully, with attention to gaps in learning. Whether a child needs to catch up or push ahead, lessons are matched to where they actually are.",
    },
    {
      id: "entrance",
      title: "Entrance Exam Preparation",
      description:
        "Proven strategies and past questions to help children prepare for entrance exams with confidence. Tutors work through the specific papers and techniques that make a real difference.",
    },
    {
      id: "reading",
      title: "Reading Mastery",
      description:
        "Phonics, comprehension and fluency programmes that build strong readers. Children learn to decode, understand and engage with texts at every level.",
    },
    {
      id: "cultural",
      title: "Cultural Identity",
      description:
        "Lessons and practice to help children speak their local dialect fluently and stay connected to their roots. Language is taught as something to be proud of.",
    },
  ] as const,

  differentiators: [
    {
      id: "personalised",
      title: "Personalised Learning",
      description:
        "Every lesson is matched to the child's level and goals. There is no one-size-fits-all approach here.",
    },
    {
      id: "team",
      title: "From One Teacher to a Team",
      description:
        "BOA started with Ms Zika and grew deliberately. Each new tutor joined to give children more support, more feedback and more opportunities.",
    },
    {
      id: "whole-child",
      title: "Whole-Child Focus",
      description:
        "Confidence, communication and character are part of what BOA builds. Pride in language and culture is taken seriously alongside academic progress.",
    },
    {
      id: "partnership",
      title: "Parent Partnership",
      description:
        "Regular updates, progress reports and an open-door policy. Parents stay informed and involved. The child's growth is a shared goal.",
    },
  ] as const,
} as const;

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
      title: "Academic Catch-up & Excellence",
      description:
        "Covering core subjects and filling learning gaps. Whether a child needs to catch up or push ahead, lessons are matched to where they actually are.",
    },
    {
      id: "entrance",
      title: "Entrance Exam Preparation",
      description:
        "Proven strategies and past questions to help children pass with confidence. Tutors work through the specific papers and techniques that make a real difference.",
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
        "We don't use a one-size-fits-all approach. Every lesson is tailored to your child's level and goals.",
    },
    {
      id: "team",
      title: "From 1 Teacher to a Team",
      description:
        "We started small with Ms Zika and have intentionally grown our teaching team so every child gets more attention and support.",
    },
    {
      id: "whole-child",
      title: "Whole-Child Focus",
      description:
        "Beyond grades, we work on confidence, communication and character, including pride in language and culture.",
    },
    {
      id: "partnership",
      title: "Parent Partnership",
      description:
        "We keep you involved with regular updates, progress reports and an open-door policy. Your child's growth is our shared mission.",
    },
  ] as const,
} as const;

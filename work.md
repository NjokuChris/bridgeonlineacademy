We're simplifying the Bridge Online Academy (BOA) website. Current state:
a Next.js/Tailwind/Framer Motion site built for a large established online
school (mega menus, announcement bar, utility nav, multi-portal architecture).
Reality: BOA is a new academy with one lead educator (Ms. Zika), teaching
Primary and Secondary students the Nigerian curriculum via live online
classes. No student/parent/teacher portals — this is a marketing/admissions
site only. Goal: parent lands, understands what BOA offers, trusts it,
submits an enquiry.

TASKS:

1. Navigation — flatten it
   - Replace mega menu system with flat links: Home, Programmes, About, FAQ
   - Keep "Enquire" as a standalone button CTA in the nav
   - Remove NAV_ITEMS mega/feature config from navData; simplify to
     {label, href}[]
   - Remove the announcement bar and its localStorage dismiss logic entirely
   - Remove the navy utility bar (phone + utility links row)
   - Keep: sticky header, mobile drawer (simplified to flat links, no
     accordion), floating WhatsApp button

2. Pages — reduce to 5
   - Home (see structure below)
   - About (Ms. Zika's story, BOA's founding, teaching philosophy)
   - Programmes (Primary + Secondary — ages, subjects, what's taught,
     no "Exam Preparation" as separate tier unless we actually offer it)
   - FAQ (5-6 real questions: what ages, curriculum, live vs recorded,
     class size, cost, how to enrol)
   - Enquire (form + WhatsApp link)
     Do not build: student/parent/teacher dashboards, admissions portal,
     blog, careers, term dates, safeguarding policy pages — anything
     requiring content we don't have yet.

3. Homepage — rebuild to 6 sections only, in this order:
   a. Hero — headline "Quality education, wherever your child learns."
   subhead about live teacher-led Nigerian curriculum classes,
   primary CTA "Make an Enquiry", secondary "Explore Programmes"
   b. Trust strip — 3-4 short facts only (e.g. "Primary–Secondary ·
   Nigerian Curriculum · Live Online Classes"), no fabricated stats
   c. Programmes — Primary and Secondary as two cards, ages + what's
   covered, link to Programmes page
   d. Meet the educator — Ms. Zika photo, short bio, teaching philosophy,
   link to About
   e. FAQ — 5-6 questions, accordion style
   f. Enquiry form — Parent name, email, WhatsApp number, child's age,
   current class, message. Submit button + "Prefer WhatsApp? Chat
   with BOA" link beside it.

   Remove from current build: the 4-step "how it works" funnel, the
   6-card "why families choose us" grid, classroom-experience gallery,
   testimonials section (including the "illustrative" placeholder quotes) —
   these get re-added later once there's real content to fill them.

4. Footer — trim to:
   - Explore: Home, About, Programmes, FAQ
   - Admissions: Make an Enquiry
   - Contact: WhatsApp, Phone, Email
   - Legal: Privacy, Terms
     Remove: Careers, Open events, Blog, IT support, Computer requirements,
     Safeguarding, Prospectus, Term dates, Exam information sections.

5. Brand consistency
   - Standardize on "Bridge Online Academy" / "BOA" everywhere — fix
     inconsistent instances of "BBridge", "Bridge online", etc.
   - Keep navy + gold + off-white palette, but tone down borders/gradients

6. Fix the CTA contradiction
   - Hero currently says "Join our next open event" while another section
     says no open event is scheduled. Replace hero CTA with "Make an
     Enquiry" or "Speak to Admissions" until a real event exists.

Work through this file by file. Start with navData.ts (strip mega menu
config), then Header.tsx (remove announcement bar, utility nav, mega
menu rendering, simplify mobile drawer), then homepage sections. Flag
anything you need real content/copy for rather than inventing it.

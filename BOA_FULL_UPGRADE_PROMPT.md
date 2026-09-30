# BRIDGE ONLINE ACADEMY: FULL SITE UPGRADE AND PORTAL BUILD

You are a senior full-stack engineer working inside an existing Next.js and TypeScript codebase for Bridge Online Academy (BOA), live at https://www.bridgeonlineacademy.org. Your job is to upgrade the public website so it matches the client's real positioning, fix the factual and functional problems on the live site, and build a complete school portal for parents, students, tutors and admins.

Read this whole document before writing any code. Work through it in the order given. Do not skip sections. When something is ambiguous, follow the rules in Section 2 and record your assumption in `docs/ASSUMPTIONS.md` instead of stopping to ask.

---

## 0. HOW TO USE THIS DOCUMENT

- Sections 1 to 4 are context and rules. They apply to everything.
- Sections 5 to 8 cover the public website.
- Sections 9 to 22 cover the portal and its backend.
- Sections 23 to 28 cover quality, delivery and reporting.
- Every workstream ends with acceptance criteria. A workstream is not done until every criterion is met and verified.
- Where this document says MUST, it is not optional. Where it says SHOULD, follow it unless you have a written reason not to.

---

## 1. PROJECT CONTEXT

### 1.1 What BOA is

BOA is a learning community that helps children grow with confidence academically, personally and culturally. It started with one teacher, Ms Zika, and has grown into a team of tutors working alongside her. Lessons run online, live, in small groups and in personalised one-to-one style sessions.

BOA is NOT a traditional school with one fixed curriculum path. A family can choose the full Nigerian curriculum programme, or pick standalone subjects and skills such as coding or video editing. BOA does not cap enrolment at a fixed age. Never state an upper or lower age limit anywhere on the site.

### 1.2 The client's slogan

"Your Personal Study Companion"

Use it exactly as written, with that capitalisation, wherever a slogan is needed (header tagline, footer, metadata, hero support line).

### 1.3 Existing codebase

- Framework: Next.js with TypeScript.
- The public site already exists with these routes: `/`, `/programmes`, `/about`, `/faq`, `/teach`, `/enrol`, `/privacy`, `/terms`.
- The existing site has a shared CTA component used on the landing page. Every page MUST reuse that same component.
- The existing site has a partial enrolment form: the student fills in details, the admin receives an email, and the admin follows up. There is no "enquire" framing anywhere.
- There is no portal yet. You are building it.

Before changing anything, inspect the repository: read `package.json`, the `app` or `pages` directory, the component folders, the styling setup, any existing API routes and any environment variable usage. Write a short summary of what you found at the top of `docs/ASSUMPTIONS.md`.

### 1.4 Target stack for new work

Unless the repository already uses something different for the same purpose, use:

- Next.js App Router with TypeScript in strict mode.
- Supabase for authentication, Postgres, storage and row-level security.
- Zod for all input validation on the server and the client.
- Server actions or route handlers for mutations. Pick one pattern and use it consistently.
- A transactional email provider (Resend is the default choice) behind a small internal `sendEmail` wrapper so the provider can be swapped.
- Deployment target is Vercel. Nothing you write may require a long-running server process.

If the repository already contains an ORM, an auth library or an email library, reuse it and note the decision in `docs/ASSUMPTIONS.md`.

---

## 2. GROUND RULES

### 2.1 Scope of visual changes: NONE

This is the most important rule in the document.

- Do NOT change the visual design of the site. Do not change colours, fonts, spacing scales, layouts, radii, shadows, animations, imagery or iconography.
- Do NOT introduce a new design language, new visual patterns or new decorative elements.
- When you build new pages and portal screens, assemble them from the components, tokens and utility classes that already exist in the codebase. If a component you need does not exist, build it using the same tokens and conventions as its nearest existing sibling.
- If you believe a visual problem exists, list it in `docs/OBSERVATIONS.md` and leave it alone.

This document contains no design direction on purpose. Your task is content, structure, data, logic and behaviour.

### 2.2 Copy rules

All user-facing text you write or rewrite MUST follow these rules:

1. No em dashes and no en dashes used as punctuation. Use commas, full stops, colons or parentheses. Numeric ranges may use the word "to".
2. No AI-sounding filler. Avoid phrases such as "unlock your potential", "embark on a journey", "in today's fast-paced world", "seamless", "cutting-edge", "world-class", "empower", "elevate", "holistic approach", "tailored solutions" and "we pride ourselves".
3. Do not use the construction "not just X, but Y" or "more than just X".
4. Plain, warm, specific sentences. Say what happens, who does it and how often.
5. Never invent statistics, awards, qualifications, class sizes, results, testimonials or teacher names.
6. Never claim a feature exists unless it exists on the site or is confirmed in Section 4.
7. Write for Nigerian parents and for Nigerian families abroad. Use British spelling (programme, enrol, personalised, colour).
8. Keep paragraphs short. One idea per paragraph.
9. Do not refer to "Primary" and "Secondary" as the site's structure. Do not state ages.

### 2.3 Fact discipline

The only trusted sources of fact are Section 4 (the client's brand pack) and the live behaviour of the codebase. Anything else the live site currently claims is UNVERIFIED and MUST be removed, softened or flagged (see Section 3).

### 2.4 Working method

1. Make a plan for each workstream before coding it.
2. Make small, reviewable commits with clear messages, one concern per commit.
3. Run type checks, lint and tests before every commit.
4. Never leave placeholder data in production paths. If you must stub something, gate it behind a clearly named environment flag and list it in `docs/STUBS.md`.
5. Never commit secrets. Use environment variables and document them in `.env.example`.
6. Prefer boring, well-understood solutions over clever ones.
7. When a requirement conflicts with another, the higher-numbered priority loses: (1) security and child data protection, (2) correctness of facts, (3) the no-visual-change rule, (4) functionality, (5) convenience.

### 2.5 Things you MUST NOT do

- Do not delete existing routes or components without replacing them.
- Do not change the enrolment form's existing fields without keeping every current field's data flowing to the admin.
- Do not store card numbers or any raw payment credentials anywhere.
- Do not expose one family's data to another family under any circumstance.
- Do not log personal data (names, emails, phone numbers, child details) to the console in production.
- Do not add analytics or tracking scripts that are not listed in this document.

---

## 3. AUDIT OF THE LIVE SITE (WHAT IS WRONG TODAY)

These findings come from reading the live homepage. Fix every one of them. Confirm each in the code before fixing, since the live output may differ slightly from the source.

### 3.1 Broken or wrong contact details

- The WhatsApp link points to `https://wa.me/2348000000000`, which is a placeholder.
- The phone link points to `tel:+2348000000000`, which is a placeholder.
- The footer email is `admissions@bridgeonlineacademy.com`. This is on a different domain from the site (`.org`) and is not the client's address.
- TikTok and Instagram links are missing from the footer and the contact areas.

### 3.2 Positioning conflicts with the client

- The hero copy and metadata describe the school as "Primary and Secondary" and "Primary through Senior Secondary".
- The Programmes block shows "Ages 5 to 10" and "Ages 11 to 17".
- The FAQ answer states BOA teaches children "aged approximately 5 to 17".
- All three conflict with the client's position that BOA teaches any age and is not restricted to two stages.
- The page title claims "Nigeria's Leading Online School". This is unverifiable and MUST be removed.

### 3.3 Unverified claims

Each of these appears on the live site but not in the client's brand pack. Do not delete the underlying feature, but change the wording so it makes no claim the client has not confirmed, and list every one in `docs/CLAIMS_TO_CONFIRM.md` for the client:

- Recordings are available for missed classes.
- Teachers are "degree-qualified" and "subject-specialist".
- Online clubs, assemblies, competitions and student leadership exist.
- Students "shape a schedule that fits their family life" (this may conflict with the fixed three sessions a week format).
- Classes run "every teaching day" (the client says three times a week).
- Learners can join "from Lagos, Abuja, Port Harcourt or abroad" (acceptable in spirit, but confirm before naming cities).
- The stats block: expert teacher count, subjects offered, thousands of students, percentage of live lessons. The live output shows zeros because of animated counters. No figures are confirmed.
- Three testimonials labelled "Illustrative". These are fabricated placeholders.

### 3.4 Missing content the client supplied

The live site does not mention:

- The four focus areas: Academic Catch-up and Excellence, Entrance Exam Preparation, Reading Mastery, Cultural Identity.
- The class format: 1 hour, 1 hour 30 minutes or 2 hours, three times a week, in small groups plus personalised online sessions.
- The "from one teacher to a team" story.
- Parent partnership: regular updates, progress reports and an open-door policy.
- The vision statement.
- The slogan.
- Entrance exam preparation with past questions.
- Phonics, comprehension and fluency programmes.
- Local dialect fluency as a teaching goal (only three language names appear as subject chips).

### 3.5 Structural gaps

- `/privacy` and `/terms` exist but must contain real content. Confirm and fill.
- The `/teach` page must list the standards a tutor must meet and provide a working application path. Confirm what exists.
- The FAQ has collapsed answers with no content visible for five of the six questions. Confirm all six have complete answers in the source.

---

## 4. SOURCE OF TRUTH: THE CLIENT'S BRAND PACK

This section is the authoritative content. Store the structured parts in a single typed config module (Section 5). Rewrite prose per the copy rules in Section 2.2, but never change a fact.

### 4.1 Identity and contact

- Name: Bridge Online Academy (abbreviation: BOA)
- Slogan: Your Personal Study Companion
- Phone 1: +234 705 659 0881
- Phone 2: +234 802 758 2081
- Email: Bridgeonlineacademy@gmail.com
- TikTok: https://www.tiktok.com/@bridgeonlineacademy
- Instagram handle: angyzika (build the URL as https://www.instagram.com/angyzika)
- Website: https://www.bridgeonlineacademy.org

Normalise phone numbers into E.164 for links: `+2347056590881` and `+2348027582081`. Display them in a readable spaced format.

WhatsApp click-to-chat MUST use the first phone number: `https://wa.me/2347056590881`. Support an optional prefilled message parameter.

### 4.2 About BOA (client wording, to be cleaned per copy rules)

BOA is a learning community dedicated to helping every child grow with confidence: academically, personally and culturally.

The client believes every child deserves quality teaching, personal attention and the tools to thrive both in school and in life.

### 4.3 Vision

To raise a generation of confident, capable and compassionate learners who excel in academics, speak with pride and serve others. BOA builds foundations for school success, for life skills and for community leadership.

### 4.4 Teachers

- BOA started with Ms Zika, whose passion and dedication laid the foundation of the school.
- BOA now has a team of experienced, caring tutors who work alongside Ms Zika to give every child more support, more feedback and more opportunities.
- Tutors are trained to meet children where they are, explain concepts clearly and make learning engaging, online or in class.

### 4.5 Curriculum: four key areas

1. Academic Catch-up and Excellence: core subjects and filling learning gaps.
2. Entrance Exam Preparation: proven strategies and past questions to help children pass with confidence.
3. Reading Mastery: phonics, comprehension and fluency programmes that build strong readers.
4. Cultural Identity: lessons and practice to help children speak their local dialect fluently and stay connected to their roots.

Learners may take the full Nigerian curriculum programme or standalone subjects and skills (for example coding and video editing).

### 4.6 Class format

- Sessions last 1 hour, 1 hour 30 minutes or 2 hours.
- Sessions happen 3 times a week.
- Groups are small. Personalised online sessions are also offered.
- The purpose stated by the client: no child gets left behind.

### 4.7 What makes BOA different

1. Personalised Learning: every lesson is tailored to the child's level and goals, with no one-size-fits-all approach.
2. From One Teacher to a Team: BOA started small with Ms Zika and intentionally grew its teaching team.
3. Whole-Child Focus: confidence, communication and character, including pride in language and culture.
4. Parent Partnership: regular updates, progress reports and an open-door policy. The child's growth is a shared mission.

### 4.8 Closing statement

BOA treats each child as family. The goal is learners who are ready for exams, ready for life and proud of who they are.

### 4.9 Portal flows described by the client

**Parents (purpose: stay informed and pay easily)**

- Pay Fees: Parent Portal, then Fee Payment. Pay the new fee of 70 pounds per month online and download a receipt.
- Check Announcements: on the homepage under News and Updates, covering fee changes, resumption dates and exam timetables.
- View Progress Reports: log in to the Parent Dashboard to see attendance, test scores and teacher comments.
- Contact Teachers: use Contact Us or Book a Meeting to chat with Ms Zika or other teachers.

**Students (purpose: learn and practise)**

- Join Online Classes: Student Login, then My Classes, then click the Zoom or Teams link 5 minutes before class.
- Access Learning Materials: Resources, then download notes, worksheets and past entrance exam papers.
- Submit Assignments: Assignments tab, then upload homework for tutors to mark.
- Practise Reading and Dialect: Learning Hub, then use audio and video lessons (the client's message was cut off after this point, so the remaining detail is unknown).

**Tutors and admins:** the client's description was not visible. Sections 13 and 14 define these roles from first principles. Record them as proposals in `docs/ASSUMPTIONS.md`.

---

## 5. WORKSTREAM A: SITE CONFIG AND CONTACT FIXES

Do this first. It removes the live placeholders.

### 5.1 Create a single config module

Create `src/config/site.ts` (or the repository's equivalent) exporting a typed, readonly `siteConfig` object.

```ts
export const siteConfig = {
  name: "Bridge Online Academy",
  shortName: "BOA",
  slogan: "Your Personal Study Companion",
  url: "https://www.bridgeonlineacademy.org",
  contact: {
    phones: [
      { label: "Primary", display: "+234 705 659 0881", e164: "+2347056590881" },
      { label: "Secondary", display: "+234 802 758 2081", e164: "+2348027582081" },
    ],
    whatsapp: { e164: "+2347056590881", base: "https://wa.me/2347056590881" },
    email: "Bridgeonlineacademy@gmail.com",
  },
  social: {
    tiktok: "https://www.tiktok.com/@bridgeonlineacademy",
    instagram: "https://www.instagram.com/angyzika",
  },
  fees: { currency: "GBP", monthly: 70 },
  classFormat: {
    sessionLengths: ["1 hour", "1 hour 30 minutes", "2 hours"],
    sessionsPerWeek: 3,
  },
} as const;
```

Adjust the shape to fit existing conventions, but keep every field.

### 5.2 Helper functions

Create helpers in `src/lib/contact.ts`:

- `whatsappLink(message?: string)`: returns the wa.me URL with an encoded `text` query when a message is passed.
- `telLink(phone)`: returns a `tel:` URL from the E.164 value.
- `mailtoLink(subject?: string)`: returns a `mailto:` URL with an encoded subject.

Write unit tests for all three, including a message containing spaces, an ampersand and a question mark.

### 5.3 Replace every hardcoded value

Search the entire repository for each of these strings and replace them with config-driven values:

- `2348000000000`
- `admissions@bridgeonlineacademy.com`
- any hardcoded `wa.me`, `tel:` or `mailto:` link
- any hardcoded social URL

After replacement, add a lint or test check that fails the build if `2348000000000` or `bridgeonlineacademy.com` (with `.com`) reappears in source files.

### 5.4 Footer and contact surfaces

- The footer MUST show both phone numbers, the email, WhatsApp, TikTok and Instagram, all from config.
- The header or footer MUST include links to Become a Teacher, and to Portal Login (built in Workstream E).
- Use the existing icon set and link styles already in the repo.

### 5.5 Acceptance criteria

- Searching the built HTML for `2348000000000` returns nothing.
- Both phone numbers display correctly and both `tel:` links dial the right numbers.
- The WhatsApp link opens a chat with +234 705 659 0881.
- The email link uses Bridgeonlineacademy@gmail.com.
- TikTok and Instagram links open the correct profiles in a new tab with `rel="noopener noreferrer"`.
- Unit tests pass.

---

## 6. WORKSTREAM B: PUBLIC SITE COPY AND CONTENT

Rewrite the content of every public page using Section 4 as the only source of fact. Keep every existing component, layout and style. Only the words, the data feeding the components and the sections used change. If a page needs an extra section, reuse an existing section component from another page.

### 6.1 Global changes

- Replace the page title "Bridge Online Academy | Nigeria's Leading Online School" with a title built from the name and slogan, for example "Bridge Online Academy | Your Personal Study Companion".
- Replace the meta description with one that describes personalised online classes, the four focus areas and how to enrol, without ages or "Primary through Senior Secondary".
- Remove all age ranges from every page, component, structured data block and metadata.
- Remove "Primary" and "Secondary" as structural labels. If a specific subject page needs a level (for example a maths topic), describe the level by topic, never by age.
- Make sure the shared CTA component appears on every public page.

### 6.2 Home (`/`)

Required sections in this order (reuse existing section components):

1. Hero: the slogan as the supporting line, a plain one-sentence statement of what BOA offers (live online classes in small groups, with personalised sessions), and the two existing calls to action (start enrolment, explore programmes).
2. The four focus areas: Academic Catch-up and Excellence, Entrance Exam Preparation, Reading Mastery, Cultural Identity. One short paragraph each, using the client's descriptions.
3. How classes work: session lengths, three times a week, small groups, personalised sessions.
4. Why families choose BOA: the four differentiators from Section 4.7.
5. Meet the educator and the team: Ms Zika's story and the growth into a tutor team.
6. Parent partnership and the portal: what a parent can see (progress reports, attendance, announcements, fees, contact with tutors). Only describe portal features that are actually built and enabled.
7. Testimonials: see 6.8.
8. FAQ preview: the first three FAQs.
9. The shared CTA.

Remove the animated stats block entirely unless the client supplies confirmed numbers. If confirmed numbers arrive later, they must come from config, not from literals inside the component.

### 6.3 Programmes (`/programmes`)

- Organise by the four focus areas, not by school stage.
- Under each focus area, list the subjects and skills offered. Subjects that are currently listed on the live site (Maths, English, Science, Health Education, Yoruba, Hausa, Igbo, Arts, Creative Writing, Mental Maths, Physics, Chemistry, Biology, Computer Studies, Coding, French, Geography, Literature, Music) MUST all remain.
- Add a short, factual explanation for every subject: what the learner works on and what they can do afterwards. If you cannot write one without inventing detail, write one plain sentence and add the subject to `docs/CLAIMS_TO_CONFIRM.md` for the client to expand.
- Explain the two ways to learn: the full Nigerian curriculum programme, or standalone subjects and skills.
- Cultural Identity MUST have its own clear section describing local dialect lessons and practice. State which dialects are taught only if the client confirms; the live site lists Yoruba, Hausa and Igbo, so keep those three and mark the list "to confirm".
- Include the class format and the shared CTA.

### 6.4 About (`/about`)

Required sections:

1. Our story: Ms Zika started BOA. Tell it in plain sentences.
2. Our vision: the vision statement from 4.3, cleaned.
3. From one teacher to a team: how BOA grew and what that means for each child.
4. How our tutors work: how tutors work alongside Ms Zika, how feedback reaches parents, how lessons are matched to a child's level. Do not invent internal processes. Base this on Section 4.4, 4.6 and 4.7 only.
5. What we believe: the whole-child focus (confidence, communication, character, pride in language and culture).
6. Parent partnership: updates, progress reports, open-door policy.
7. The shared CTA.

If the client later supplies tutor photos and short bios, the tutor list must be data-driven from a typed array or the database, not hardcoded in JSX.

### 6.5 FAQ (`/faq`)

Rewrite all questions. Every answer must be complete and visible in the source. Use exactly these questions and write answers from Section 4 only:

1. Who can join BOA? (Any age. Do not state limits. Learners choose the full curriculum or standalone subjects.)
2. What do you teach? (The four focus areas and the subject list.)
3. How do classes work? (Live, online, small groups, personalised sessions, 1 hour, 1 hour 30 minutes or 2 hours, three times a week.)
4. How much does it cost? (State 70 pounds per month only if the client confirms it applies to every programme. Otherwise say fees depend on the programme and direct people to enrol or WhatsApp. Record this in `docs/CLAIMS_TO_CONFIRM.md`.)
5. How do I pay? (Online through the parent portal, with a receipt available to download. Describe only enabled payment methods.)
6. How will I know how my child is doing? (Regular updates, progress reports with attendance, test scores and teacher comments through the parent dashboard, and an open door to talk to tutors.)
7. How do I speak to a teacher? (Contact page, WhatsApp or the Book a Meeting option.)
8. How do I start? (Complete the enrolment form, the team follows up.)
9. Do you help with entrance exams? (Yes: strategies and past questions.)
10. Can my child learn a local language with you? (Cultural Identity focus area.)

Add FAQPage structured data generated from the same source array so the visible text and the structured data cannot drift apart.

### 6.6 Become a Teacher (`/teach`)

- State the standards a tutor must meet. Because the client has not supplied a list, write conservative standards that make no claim about BOA's current tutors: for example subject knowledge, reliable internet, ability to teach live online, patience with children, safeguarding awareness, and willingness to give written feedback to parents. List these in `docs/CLAIMS_TO_CONFIRM.md` so the client approves them.
- Provide an application form with these fields: full name, email, phone, subjects you can teach, levels you are comfortable with (free text, no ages), years of teaching experience, a short note on why you want to teach at BOA, and an optional link to a CV. Validate with Zod.
- Applications are stored in a `tutor_applications` table (Section 10) and emailed to the admin address.

### 6.7 Contact

There is no `/contact` route in the live site. Create `/contact` and link it from the header or footer.

- Show both phone numbers, WhatsApp, email, TikTok and Instagram from config.
- Provide a contact form with: name, email, phone (optional), who you are (parent, student, prospective tutor, other), and message. Store in `contact_messages` and email the admin.
- Provide a "Book a Meeting" request form: name, email, phone, preferred tutor (optional dropdown, including Ms Zika), preferred dates and times (free text), reason. Store in `meeting_requests`. This connects to the portal in Workstream E, so build the table now and reuse it later.

### 6.8 Testimonials

- Remove the three fabricated "Illustrative" testimonials from the live output.
- Build the testimonials section to read from a `testimonials` table (Section 10) with a `published` flag and a `consent_confirmed` flag. The public site renders only rows where both are true.
- If there are zero published testimonials, the section MUST NOT render at all, and must not show an empty state or placeholder text.
- Provide an admin form to add testimonials (Workstream H).

### 6.9 Legal pages

- `/privacy`: write a plain-language privacy policy covering what BOA collects (parent and child names, contact details, attendance, scores, assignments, payment records, uploaded files), why, who can see it (the family, assigned tutors, admins), how long it is kept, how to request correction or deletion, and how to contact BOA. Do not claim compliance with any specific law unless the client confirms. Flag this for legal review in `docs/CLAIMS_TO_CONFIRM.md`.
- `/terms`: cover enrolment, fees and payment (70 pounds per month if confirmed), missed sessions, conduct in live classes, use of the portal, uploaded content, and how either side may end the arrangement. Flag for legal review.

### 6.10 Acceptance criteria for Workstream B

- No page contains an age, a stage label used as structure, an em dash, or the phrase "Nigeria's Leading Online School".
- All four focus areas appear on Home and Programmes.
- The slogan appears in metadata and on the Home hero.
- FAQ has ten complete answers and matching structured data.
- Testimonials render only with real, consented rows.
- Every page uses the shared CTA.
- `docs/CLAIMS_TO_CONFIRM.md` exists and lists every item flagged in this workstream.

---

## 7. WORKSTREAM C: ENROLMENT

### 7.1 Form fields

Keep every field the current form collects. Then make sure the following are captured. Add any that are missing:

- Parent or guardian: full name, email, phone (WhatsApp number preferred), country of residence.
- Learner: full name, date of birth or current school year (free text, no age validation limits), current school (optional).
- What they want: full curriculum programme, or specific subjects (multi-select from the programme subject list), plus an option for "not sure yet".
- Focus areas of interest (multi-select of the four).
- Notes: anything the team should know (free text, optional).
- Consent checkbox for the privacy policy and terms.
- A hidden honeypot field for spam.

Allow one parent to add more than one learner in a single submission.

### 7.2 Behaviour

1. Validate on the client for speed and on the server for security using the same Zod schema.
2. On success, create a row in `enrolment_requests` with status `pending`, and one row per learner in `enrolment_learners`.
3. Email the admin address with a clean summary and a deep link to the request in the admin area.
4. Email the parent a confirmation: what happens next, who will contact them and how. No "enquiry" wording.
5. Show a success state on the page. Do not redirect to a blank page.
6. Rate limit submissions per IP and per email.
7. If the email send fails, the database write MUST still succeed, and the failure must be recorded so the admin can see unsent emails in the admin area.

### 7.3 From enrolment to accounts

When an admin approves an enrolment request (Workstream H), the system MUST:

- Create or link the parent account.
- Create a student record for each learner.
- Optionally create student login credentials (see Section 11.3).
- Send the parent an email inviting them to set a password and access the portal.

### 7.4 Acceptance criteria

- A submission creates database rows and sends two emails.
- Invalid input returns field-level errors, never a generic failure.
- The honeypot blocks bots without showing an error.
- Duplicate submissions from the same email within 60 seconds are blocked.
- The admin can see, filter and open every request.

---

## 8. WORKSTREAM D: SEO AND METADATA

- Set unique titles and descriptions per page from a single metadata helper.
- Add Open Graph and Twitter metadata using existing brand assets. Do not create new imagery.
- Add `Organization` and `EducationalOrganization` JSON-LD with the name, URL, phone numbers, email and social profiles from config. Do not include addresses, ratings or reviews.
- Add a `sitemap.xml` and `robots.txt`. Disallow `/portal`, `/api` and any admin routes.
- Ensure the canonical host is `https://www.bridgeonlineacademy.org` and that the non-www host redirects to it.
- Ensure every portal page has `noindex`.
- Acceptance: the sitemap lists every public page, portal pages are excluded, and structured data validates with no errors.

---

## 9. PORTAL: ARCHITECTURE

### 9.1 Route map

Public:
- `/login`, `/forgot-password`, `/reset-password`, `/accept-invite`

Portal (all under `/portal`, all protected, all `noindex`):
- `/portal` redirects by role to the correct dashboard.
- Parent: `/portal/parent`, `/portal/parent/children/[studentId]`, `/portal/parent/fees`, `/portal/parent/fees/[invoiceId]`, `/portal/parent/reports`, `/portal/parent/reports/[reportId]`, `/portal/parent/announcements`, `/portal/parent/messages`, `/portal/parent/meetings`, `/portal/parent/account`
- Student: `/portal/student`, `/portal/student/classes`, `/portal/student/resources`, `/portal/student/assignments`, `/portal/student/assignments/[assignmentId]`, `/portal/student/hub`, `/portal/student/hub/[lessonId]`, `/portal/student/account`
- Tutor: `/portal/tutor`, `/portal/tutor/classes`, `/portal/tutor/classes/[classId]`, `/portal/tutor/attendance`, `/portal/tutor/resources`, `/portal/tutor/assignments`, `/portal/tutor/assignments/[assignmentId]`, `/portal/tutor/reports`, `/portal/tutor/messages`, `/portal/tutor/meetings`
- Admin: `/portal/admin`, `/portal/admin/enrolments`, `/portal/admin/users`, `/portal/admin/students`, `/portal/admin/classes`, `/portal/admin/fees`, `/portal/admin/payments`, `/portal/admin/announcements`, `/portal/admin/testimonials`, `/portal/admin/applications`, `/portal/admin/contact`, `/portal/admin/meetings`, `/portal/admin/emails`, `/portal/admin/audit`, `/portal/admin/settings`

### 9.2 Folder structure

Follow the repository's convention. If none exists for this, use:

```
src/
  app/
    (public)/...
    (auth)/login, forgot-password, reset-password, accept-invite
    portal/
      layout.tsx            # session check, role gate, shell
      parent/...
      student/...
      tutor/...
      admin/...
    api/
      webhooks/payments/route.ts
      cron/reminders/route.ts
  lib/
    supabase/{server,client,admin}.ts
    auth/{session,roles,guards}.ts
    validation/*.ts         # Zod schemas, one file per domain
    email/{send,templates/*}.ts
    payments/{provider,webhook,receipts}.ts
    storage/{upload,signed-url}.ts
    audit/log.ts
    rate-limit.ts
  config/site.ts
supabase/
  migrations/*.sql
  seed.sql
docs/
  ASSUMPTIONS.md
  CLAIMS_TO_CONFIRM.md
  OBSERVATIONS.md
  STUBS.md
  DATA_MODEL.md
  RUNBOOK.md
```

### 9.3 Layering rules

- UI components never call the database directly. They call server actions, route handlers or data functions in `lib`.
- Every data function takes the acting user's context and enforces authorisation in code AND relies on row-level security as a second layer.
- The Supabase service role key is used only in server-only modules (`lib/supabase/admin.ts`) and only for tasks that must bypass RLS, such as creating accounts on approval, processing webhooks and running cron jobs. Mark that module `server-only`.
- Every mutation validates input with Zod, checks the role, checks ownership, performs the change, writes an audit log row and returns a typed result. No mutation returns raw database errors to the client.

### 9.4 Roles

- `parent`: sees their own children and their own invoices, payments, reports and messages.
- `student`: sees their own classes, resources for their classes, their own assignments and submissions, and the Learning Hub.
- `tutor`: sees only the classes they teach and the students in them.
- `admin`: sees everything and manages everything.

A user has exactly one primary role in `profiles.role`. An admin may also teach; handle that through a separate `is_tutor` capability flag on the admin's profile rather than through multiple roles.

---

## 10. DATA MODEL (POSTGRES, SUPABASE)

Write migrations under `supabase/migrations`, one file per logical group, each idempotent where practical. Use `uuid` primary keys with `gen_random_uuid()`, `timestamptz` for all times stored in UTC, and `created_at` and `updated_at` on every table with an `updated_at` trigger.

### 10.1 Enumerations

```sql
create type user_role as enum ('parent', 'student', 'tutor', 'admin');
create type enrolment_status as enum ('pending', 'contacted', 'approved', 'declined', 'archived');
create type attendance_status as enum ('present', 'absent', 'late', 'excused');
create type invoice_status as enum ('draft', 'open', 'paid', 'overdue', 'void', 'refunded');
create type payment_method as enum ('card', 'bank_transfer', 'other');
create type payment_status as enum ('pending', 'awaiting_confirmation', 'succeeded', 'failed', 'refunded');
create type submission_status as enum ('submitted', 'marked', 'returned', 'resubmit_requested');
create type meeting_status as enum ('requested', 'confirmed', 'declined', 'completed', 'cancelled');
create type resource_kind as enum ('notes', 'worksheet', 'past_paper', 'audio', 'video', 'other');
create type focus_area as enum ('catch_up', 'entrance_exam', 'reading_mastery', 'cultural_identity');
create type email_status as enum ('queued', 'sent', 'failed');
```

### 10.2 Identity tables

`profiles` (one row per auth user)
- `id uuid primary key references auth.users on delete cascade`
- `role user_role not null`
- `full_name text not null`
- `email text not null`
- `phone text`
- `country text`
- `is_tutor boolean not null default false`
- `is_active boolean not null default true`
- `last_seen_at timestamptz`

`students`
- `id uuid primary key`
- `profile_id uuid unique references profiles(id)` (nullable: a learner may have no login yet)
- `full_name text not null`
- `date_of_birth date` (nullable)
- `school_year text` (free text)
- `current_school text`
- `notes text`
- `status text not null default 'active'` (active, paused, left)
- `joined_on date`

`parent_students` (many to many)
- `parent_id uuid references profiles(id)`
- `student_id uuid references students(id)`
- `relationship text`
- `is_primary boolean default true`
- primary key (`parent_id`, `student_id`)

### 10.3 Teaching tables

`subjects`
- `id`, `name text unique`, `slug text unique`, `focus focus_area[]`, `description text`, `is_active boolean`

`classes`
- `id`, `title text`, `subject_id uuid references subjects`, `focus focus_area`, `tutor_id uuid references profiles`, `session_minutes int check (session_minutes in (60, 90, 120))`, `sessions_per_week int default 3`, `capacity int`, `join_url text`, `join_provider text` (zoom, teams, other), `is_active boolean`, `starts_on date`, `ends_on date`

`class_schedule` (recurring slots)
- `id`, `class_id`, `weekday int check (weekday between 0 and 6)`, `start_time time`, `timezone text default 'Africa/Lagos'`

`class_sessions` (concrete occurrences)
- `id`, `class_id`, `starts_at timestamptz`, `ends_at timestamptz`, `join_url_override text`, `status text` (scheduled, held, cancelled), `cancel_reason text`

`class_students`
- `class_id`, `student_id`, `joined_on date`, `left_on date`, primary key (`class_id`, `student_id`)

`attendance`
- `id`, `session_id`, `student_id`, `status attendance_status`, `note text`, `marked_by uuid`, `marked_at timestamptz`
- unique (`session_id`, `student_id`)

### 10.4 Learning content tables

`resources`
- `id`, `title text`, `description text`, `kind resource_kind`, `subject_id`, `class_id` (nullable: null means visible to all students of that subject), `storage_path text`, `external_url text`, `mime_type text`, `size_bytes bigint`, `uploaded_by`, `is_published boolean`

`assignments`
- `id`, `class_id`, `title`, `instructions text`, `due_at timestamptz`, `max_score numeric`, `attachment_path text`, `created_by`, `is_published boolean`

`submissions`
- `id`, `assignment_id`, `student_id`, `file_path text`, `text_answer text`, `submitted_at timestamptz`, `status submission_status`, `score numeric`, `feedback text`, `marked_by`, `marked_at`
- unique (`assignment_id`, `student_id`)

`hub_lessons` (Learning Hub)
- `id`, `title`, `focus focus_area` (typically reading_mastery or cultural_identity), `language text` (for dialect lessons), `media_kind text` (audio, video), `storage_path text`, `external_url text`, `transcript text`, `duration_seconds int`, `is_published boolean`, `sort_order int`

`hub_progress`
- `student_id`, `lesson_id`, `completed_at`, `last_position_seconds int`, primary key (`student_id`, `lesson_id`)

### 10.5 Reporting tables

`tests`
- `id`, `class_id`, `title`, `held_on date`, `max_score numeric`

`test_scores`
- `test_id`, `student_id`, `score numeric`, `comment text`, primary key (`test_id`, `student_id`)

`progress_reports`
- `id`, `student_id`, `period_start date`, `period_end date`, `summary text`, `strengths text`, `focus_next text`, `attendance_rate numeric` (computed and stored at publish time), `average_score numeric` (computed and stored at publish time), `author_id`, `status text` (draft, published), `published_at`

`report_comments` (per subject comments inside a report)
- `id`, `report_id`, `subject_id`, `tutor_id`, `comment text`

### 10.6 Money tables

`fee_plans`
- `id`, `name`, `amount_minor int` (pence), `currency text default 'GBP'`, `interval text default 'month'`, `is_active`

`student_fee_plans`
- `student_id`, `fee_plan_id`, `starts_on`, `ends_on`, `discount_minor int default 0`, `discount_reason text`

`invoices`
- `id`, `number text unique` (human readable, for example `BOA-2026-000123`), `parent_id`, `student_id` (nullable for family invoices), `period_start date`, `period_end date`, `amount_minor int`, `currency text`, `status invoice_status`, `due_on date`, `issued_at`, `paid_at`, `notes text`

`invoice_lines`
- `id`, `invoice_id`, `description`, `quantity int`, `unit_amount_minor int`, `student_id`

`payments`
- `id`, `invoice_id`, `parent_id`, `method payment_method`, `provider text`, `provider_reference text unique`, `amount_minor int`, `currency text`, `status payment_status`, `proof_path text` (for bank transfer proofs), `confirmed_by`, `confirmed_at`, `raw_event jsonb`

`receipts`
- `id`, `payment_id unique`, `number text unique`, `issued_at`, `pdf_path text`

All money is stored as integer minor units. Never use floating point for money.

### 10.7 Communication tables

`announcements`
- `id`, `title`, `body text`, `audience text` (all, parents, students, tutors, class), `class_id` nullable, `is_public boolean` (shows on the public News and Updates area), `publish_at timestamptz`, `expires_at timestamptz`, `pinned boolean`, `created_by`

`announcement_reads`
- `announcement_id`, `profile_id`, `read_at`, primary key (`announcement_id`, `profile_id`)

`message_threads`
- `id`, `subject`, `student_id` nullable, `created_by`, `last_message_at`

`message_participants`
- `thread_id`, `profile_id`, `last_read_at`, primary key (`thread_id`, `profile_id`)

`messages`
- `id`, `thread_id`, `sender_id`, `body text`, `attachment_path text`, `sent_at`

`meeting_requests`
- `id`, `requester_profile_id` nullable (public requests have none), `name`, `email`, `phone`, `with_profile_id` nullable, `preferred_times text`, `reason text`, `status meeting_status`, `confirmed_starts_at timestamptz`, `confirmed_ends_at timestamptz`, `join_url text`, `admin_note text`

`contact_messages`
- `id`, `name`, `email`, `phone`, `audience text`, `message text`, `handled boolean default false`, `handled_by`

### 10.8 Intake and marketing tables

`enrolment_requests`
- `id`, `parent_name`, `parent_email`, `parent_phone`, `country`, `programme_choice text` (full_curriculum, subjects, not_sure), `subject_ids uuid[]`, `focus_interests focus_area[]`, `notes text`, `status enrolment_status`, `handled_by`, `admin_note text`, `consented_at timestamptz`, `source text`

`enrolment_learners`
- `id`, `request_id`, `full_name`, `date_of_birth date`, `school_year text`, `current_school text`

`tutor_applications`
- `id`, `full_name`, `email`, `phone`, `subjects text`, `levels text`, `experience_years int`, `motivation text`, `cv_url text`, `status text` (new, reviewing, interview, accepted, declined), `admin_note text`

`testimonials`
- `id`, `author_name`, `author_role text`, `quote text`, `consent_confirmed boolean default false`, `published boolean default false`, `sort_order int`

### 10.9 System tables

`email_log`
- `id`, `to_email`, `template text`, `subject`, `status email_status`, `error text`, `related_table text`, `related_id uuid`, `sent_at`

`audit_log`
- `id`, `actor_id`, `action text`, `table_name text`, `record_id uuid`, `before jsonb`, `after jsonb`, `ip inet`, `at timestamptz default now()`

`settings`
- `key text primary key`, `value jsonb`, `updated_by`

### 10.10 Indexes and constraints

- Index every foreign key.
- Index `attendance(student_id, session_id)`, `submissions(student_id)`, `invoices(parent_id, status)`, `class_sessions(class_id, starts_at)`, `announcements(publish_at)`, `messages(thread_id, sent_at)`.
- Add check constraints for non-negative money, scores between 0 and max score, and `ends_at > starts_at`.
- Add a unique partial index preventing two open invoices for the same student and period.

### 10.11 Seed data

Provide `supabase/seed.sql` with:
- The subject list from the live site, each linked to at least one focus area.
- One fee plan: 70 pounds per month, stored as `7000` minor units in GBP, marked "to confirm" in `docs/CLAIMS_TO_CONFIRM.md`.
- One admin profile placeholder that is created through a documented script, never with a hardcoded password.
- Demo data ONLY behind a separate `seed.demo.sql` that is never run in production.

---

## 11. AUTHENTICATION AND SESSIONS

### 11.1 Parent and tutor accounts

- Email and password sign-in through Supabase Auth.
- Accounts are created by admin approval or by invitation. There is no open public sign-up.
- Invitation email contains a one-time link to `/accept-invite` where the user sets a password.
- Password rules: minimum 10 characters, checked against a common-password list, no other composition rules.
- Password reset by email link with a short expiry.
- Sessions use secure, httpOnly cookies through the Supabase server helpers. Refresh tokens rotate.

### 11.2 Admin accounts

- Same as above, plus optional TOTP two-factor authentication through Supabase MFA. Make it required for admins before launch.
- Admin creation happens through a CLI script (`scripts/create-admin.ts`) that reads the email from an argument and sends an invite. No hardcoded credentials.

### 11.3 Student accounts

Children may not have email addresses. Support both patterns:

1. Student with their own email: standard invite.
2. Student without an email: the parent creates a student login from the parent area. The system generates a username (`firstname.lastname` plus a short suffix) and a temporary password shown once to the parent. Internally, map the username to a synthetic, non-deliverable email on a reserved domain such as `username@students.boa.invalid`. The student is forced to change the temporary password at first sign-in.

Parents can reset a child's password from the parent area. Every reset is audited.

### 11.4 Guards

Write reusable guards in `lib/auth/guards.ts`:

- `requireUser()`: redirects to `/login` if there is no session.
- `requireRole(...roles)`: throws or redirects if the role does not match.
- `requireParentOfStudent(studentId)`: verifies the parent link.
- `requireTutorOfClass(classId)`: verifies the tutor owns the class.
- `requireEnrolledStudent(classId)`: verifies the student is in the class.

Use guards at the top of every page, server action and route handler. Do not rely on hiding buttons in the UI.

### 11.5 Middleware

- Protect everything under `/portal`.
- Redirect authenticated users away from `/login`.
- Send each role to its own dashboard after sign-in.
- Return a proper 403 view when a signed-in user opens a page for another role.
- Add security headers: strict transport security, content type options, frame options (deny), referrer policy, and a content security policy that permits only the origins actually in use (Supabase, the payment provider, the video hosts you embed).

### 11.6 Acceptance criteria

- A user cannot reach another role's pages by editing the URL.
- A parent cannot open another family's child by guessing an id.
- Sign-out clears the session everywhere.
- Locked-out and inactive accounts see a clear message and cannot sign in.
- Login attempts are rate limited.

---

## 12. ROW-LEVEL SECURITY

Enable RLS on every table. Default deny. Write explicit policies and test them.

### 12.1 Helper functions

```sql
create function auth_role() returns user_role language sql stable as $$
  select role from profiles where id = auth.uid()
$$;

create function is_admin() returns boolean language sql stable as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin' and is_active)
$$;

create function is_parent_of(sid uuid) returns boolean language sql stable as $$
  select exists (select 1 from parent_students where parent_id = auth.uid() and student_id = sid)
$$;

create function is_own_student(sid uuid) returns boolean language sql stable as $$
  select exists (select 1 from students where id = sid and profile_id = auth.uid())
$$;

create function teaches_class(cid uuid) returns boolean language sql stable as $$
  select exists (select 1 from classes where id = cid and tutor_id = auth.uid())
$$;

create function in_class(cid uuid) returns boolean language sql stable as $$
  select exists (
    select 1 from class_students cs
    join students s on s.id = cs.student_id
    where cs.class_id = cid and s.profile_id = auth.uid() and cs.left_on is null
  )
$$;
```

### 12.2 Policy rules per table

- `profiles`: a user reads and updates only their own row (limited columns; users cannot change `role`, `is_active` or `is_tutor`). Admins read all. Tutors read the profile names of parents of students in their classes only if a message thread links them.
- `students`: parent reads students they are linked to. Student reads their own row. Tutor reads students in their classes. Admin reads and writes all.
- `parent_students`: parent reads their own links. Admin writes.
- `classes`, `class_schedule`, `class_sessions`: students read classes they are in. Parents read classes of their children. Tutors read and update their own classes' sessions. Admin all.
- `attendance`: tutor of the class inserts and updates. Student reads own. Parent reads their children's. Admin all.
- `resources`: readable when published and (class matches the student's classes, or class is null and the subject matches a class the student is in). Tutors write resources for their classes. Admin all.
- `assignments`: readable when published and the student is in the class. Tutors write for their classes.
- `submissions`: student inserts and updates their own until the status becomes `marked`. Tutor of the class reads and marks. Parent reads their child's. Admin all.
- `hub_lessons`: any authenticated student or parent reads published rows. Admin and tutors write.
- `hub_progress`: student reads and writes own. Parent reads their children's.
- `tests`, `test_scores`, `progress_reports`, `report_comments`: tutors write for their classes. Parents read only published reports of their children. Students read published reports only if the setting `students_can_view_reports` is true. Admin all.
- `fee_plans`, `student_fee_plans`: admin write, parent read their own children's plan.
- `invoices`, `invoice_lines`, `payments`, `receipts`: parent reads their own. Parent inserts a `payments` row only through a server action (bank transfer proof). Admin all. Tutors and students have no access.
- `announcements`: readable when `publish_at <= now()` and not expired and the audience matches the reader (or is public). Admin writes. Tutors may write announcements only for their own class.
- `messages` and threads: readable and writable only by participants.
- `meeting_requests`: requester reads own. The invited tutor reads those addressed to them. Admin all. Public inserts go through a server route using the service role after validation and rate limiting, not through direct anonymous inserts.
- `contact_messages`, `enrolment_requests`, `enrolment_learners`, `tutor_applications`: insert through server routes only. Admin reads and updates. No direct access for anyone else.
- `testimonials`: public read only where `published and consent_confirmed`. Admin write.
- `email_log`, `audit_log`, `settings`: admin read. Writes through server code.

### 12.3 Storage policies

Use private buckets with signed URLs. Buckets: `resources`, `assignment-files`, `submissions`, `hub-media`, `payment-proofs`, `receipts`, `message-attachments`, `tutor-cvs`. Path convention: `{bucket-specific-owner}/{uuid}-{sanitised-filename}`. Policies mirror the table rules: for example a student may write to `submissions/{studentId}/...` only for themselves and read only their own.

### 12.4 RLS tests

Write automated tests (SQL-level or through the Supabase client with test users) that prove:

- A parent cannot read another parent's child, invoices, payments or reports.
- A student cannot read another student's submissions or scores.
- A tutor cannot read a class they do not teach.
- A student cannot edit a marked submission.
- An anonymous client cannot read any table except published testimonials.
- No non-admin can change `profiles.role`.

Tests must run in CI. A failing RLS test blocks merge.

---

## 13. PORTAL: PARENT MODULE

### 13.1 Dashboard (`/portal/parent`)

Show, for each linked child:
- Name and status.
- Next class: title, tutor name, date, time in the parent's timezone and in Africa/Lagos (label both).
- Fee status for the current period: paid, open, overdue.
- Latest published progress report link.
- Unread announcements count.

Also show a combined list of the latest announcements and any upcoming meetings. If the parent has one child, the child view is the default. If several, list them.

### 13.2 Child detail (`/portal/parent/children/[studentId]`)

- Classes the child is in, with tutor and schedule.
- Attendance summary for the last 30 and 90 days with a list of recent sessions and statuses.
- Recent test scores with the tutor comment.
- Assignment status: due soon, submitted, marked, overdue.
- Links to reports.

### 13.3 Fees (`/portal/parent/fees`)

- List of invoices with number, period, amount, status and due date.
- Open invoice: a Pay button starting the payment flow (Section 17).
- Paid invoice: a Download Receipt button returning a PDF.
- Payment history with method, date and reference.
- Bank transfer path: show the transfer instructions from `settings`, allow uploading a proof of payment, show the payment as "awaiting confirmation" until an admin confirms.
- Currency: show amounts in pounds as invoiced. Do not convert automatically. If the client asks for naira equivalents later, add it behind a setting.

### 13.4 Progress reports (`/portal/parent/reports`)

- List published reports for each child, newest first.
- Report view: period, attendance rate, average score, per-subject tutor comments, strengths, focus for next period, overall summary.
- Provide a print-friendly view and a PDF download.

### 13.5 Announcements (`/portal/parent/announcements`)

- Pinned first, then newest.
- Mark as read on open.
- Filter by unread.

### 13.6 Messages (`/portal/parent/messages`)

- Start a thread with a tutor or the admin team about a specific child.
- Thread view with sent and received messages, attachments allowed (images and PDFs, size limited).
- Email notification to the recipient for a new message, with a link back to the portal. The email MUST NOT include the message body.

### 13.7 Meetings (`/portal/parent/meetings`)

- Request a meeting with Ms Zika or a specific tutor: preferred times and reason.
- List requests with status. Show the confirmed time and join link once confirmed.

### 13.8 Account (`/portal/parent/account`)

- Update name, phone, country.
- Change password.
- Manage student logins for children: create, reset password, disable.
- Notification preferences (email on new announcement, new report, new message, invoice issued).
- Request data correction or deletion (creates a `contact_messages` row for the admin).

### 13.9 Acceptance criteria

- Every screen renders for a parent with zero, one and three children.
- A parent with no invoices sees a clear empty state.
- Downloading a receipt works and produces a correct PDF.
- Paying an invoice updates its status without a manual refresh once the webhook arrives.

---

## 14. PORTAL: STUDENT MODULE

### 14.1 Dashboard (`/portal/student`)

- Today's and this week's classes.
- Assignments due soon.
- Latest announcements for students or their classes.
- A continue-learning shortcut to the last Learning Hub lesson.

### 14.2 My Classes (`/portal/student/classes`)

- List classes with tutor, schedule and next session.
- Each upcoming session shows a Join button.
- The Join button is enabled from 5 minutes before the start time (client requirement), and remains enabled until the session ends. Before that, it shows the countdown and stays disabled. Compute this on the server clock, not the client clock, and re-check on click.
- The join URL is returned only by a server action after verifying enrolment. Never embed join URLs in client-rendered data for classes the student is not in.
- Record a join click in `session_joins` (student, session, time) so tutors can see who joined. Create that table.
- Provide the join provider label (Zoom or Teams).

### 14.3 Resources (`/portal/student/resources`)

- Notes, worksheets and past entrance exam papers.
- Filter by subject, kind and class. Search by title.
- Download through short-lived signed URLs.
- Show file type and size before download.

### 14.4 Assignments (`/portal/student/assignments`)

- Tabs: to do, submitted, marked.
- Detail page: instructions, attachment, due date, status.
- Submit: upload a file (documents and images, size and type limited, virus scanning hook or a documented stub) and or type an answer.
- Allow replacing a submission before it is marked, or after a resubmit request.
- After marking, show the score, out of the maximum, and the tutor's feedback.
- Late submissions are allowed but flagged as late with the time difference.

### 14.5 Learning Hub (`/portal/student/hub`)

- Audio and video lessons for reading mastery and cultural identity (dialect).
- Filter by focus area and by language.
- Lesson page with a media player, transcript when available, and a Mark as Complete button.
- Save playback position and resume.
- The client's message was cut off after this feature. Build exactly what is described here and record the gap in `docs/ASSUMPTIONS.md`.

### 14.6 Account (`/portal/student/account`)

- Change password.
- View profile.
- No editing of name or class.

### 14.7 Acceptance criteria

- A student sees only their own classes, assignments and submissions.
- The Join button behaves correctly at 6 minutes before, 4 minutes before, during and after a session.
- A student cannot submit for an assignment in a class they are not in.
- File uploads reject wrong types and oversized files with a clear message.

---

## 15. PORTAL: TUTOR MODULE

This module is a proposal, since the client did not supply detail. Record it in `docs/ASSUMPTIONS.md`.

### 15.1 Dashboard

- Today's sessions with a Start button opening the join URL.
- Submissions waiting to be marked.
- Unread messages.
- Meeting requests addressed to the tutor.

### 15.2 Classes

- Classes the tutor teaches, roster with student names, schedule and join link.
- Ability to update the join link for a class or a single session.
- Cancel a session with a reason, which notifies enrolled students and parents by email.

### 15.3 Attendance

- Per session, list the roster with quick status buttons: present, absent, late, excused, and an optional note.
- Save all at once. Allow edits for 7 days, after which only admins can edit.
- Show join clicks next to each student as a hint only. Never mark attendance automatically.

### 15.4 Resources

- Upload notes, worksheets and past papers to a class or a subject, with title, kind and description.
- Publish or unpublish. Edit and delete.

### 15.5 Assignments and marking

- Create an assignment: title, instructions, due date, maximum score, optional attachment.
- Submission list per assignment with status and lateness.
- Marking view: open the file or text, enter a score and written feedback, and mark as marked or request a resubmission.
- Bulk download of submissions as a zip.
- Notify the student and the parent on marking, without including the score in the email body.

### 15.6 Tests and scores

- Create a test for a class with a maximum score, enter scores per student with an optional comment.

### 15.7 Progress reports

- Draft a report per student for a period. Pre-fill attendance rate and average score from data. The tutor writes comments, strengths and next focus.
- Submit for admin review or publish directly, controlled by a setting `reports_require_admin_approval`.
- On publish, store the computed attendance rate and average score as they were at publish time so later data changes do not alter a published report.
- Notify the parent when a report is published.

### 15.8 Messages and meetings

- Reply to parent threads.
- Confirm, decline or reschedule meeting requests, adding the join link.

### 15.9 Acceptance criteria

- A tutor cannot see any student outside their classes.
- Saving attendance twice updates rather than duplicates.
- Publishing a report notifies the parent exactly once.

---

## 16. PORTAL: ADMIN MODULE

### 16.1 Dashboard

- Counts: pending enrolments, unconfirmed bank transfers, overdue invoices, unread contact messages, new tutor applications, meeting requests, failed emails.
- Each count links to the filtered list.

### 16.2 Enrolments

- List with status filters and search.
- Detail: parent details, learners, choices, notes, history.
- Actions: mark contacted, decline with reason, approve.
- Approve flow: choose or create the parent account, create students, assign a fee plan, optionally assign classes, choose whether to generate student logins, then send the invitation email. Run the whole approval in a single database transaction. If any step fails, roll back and show what failed.

### 16.3 Users and students

- Search and filter by role and status.
- Create, invite, deactivate and reactivate users.
- Link and unlink parents and students.
- Edit student records, pause or mark as left.
- Merge duplicate parent accounts safely (moves links, keeps history).
- Resend an invite. Force a password reset.
- Impersonation is NOT permitted.

### 16.4 Classes

- Create classes with subject, focus area, tutor, session length (60, 90 or 120 minutes), sessions per week (default 3), capacity, join link and provider.
- Define the weekly schedule and generate sessions for a date range. Generation MUST be idempotent.
- Assign and remove students. Warn when capacity is exceeded.
- Cancel and reschedule sessions with notifications.

### 16.5 Fees and payments

- Manage fee plans and per-student plans, including discounts with a required reason.
- Invoice generation: a monthly job creates invoices for every active student plan. Provide a manual Generate Invoices action with a preview and a confirm step. The job MUST be idempotent per student and period.
- Invoice list with filters for status and overdue.
- Payments list with method, status and reference.
- Bank transfers: review the proof, confirm or reject with a reason. Confirming marks the invoice paid, issues a receipt and emails the parent.
- Void and refund actions with a required reason, fully audited.
- Export invoices and payments as CSV for a date range.

### 16.6 Announcements

- Create, schedule, pin and expire announcements.
- Choose audience: everyone, parents, students, tutors, or a specific class.
- A public flag makes the announcement appear on the public News and Updates area of the homepage.
- Optionally email the audience. Show the recipient count and require confirmation before sending.

### 16.7 Content management

- Testimonials: add, edit, reorder, toggle consent confirmed and published.
- Subjects and their descriptions.
- Learning Hub lessons and resources across all classes.
- Settings: bank transfer instructions, contact email recipients for forms, reminder timings, whether students can view reports, whether reports require admin approval, and the payment provider toggles.

### 16.8 Inbox areas

- Contact messages, tutor applications and meeting requests: list, open, mark handled, add an internal note, and reply by email from the admin area using the email wrapper.
- Tutor applications: change status through the pipeline and convert an accepted applicant into an invited tutor account in one action.

### 16.9 Email log

- List of every email with status. A Retry button for failed emails. Filter by template and date.

### 16.10 Audit log

- Read-only searchable log of admin and system actions with before and after values for sensitive changes (role changes, fee changes, refunds, deletions, approvals, password resets).

### 16.11 Acceptance criteria

- Approving an enrolment is atomic.
- Generating invoices twice for the same month creates no duplicates.
- Confirming a bank transfer produces exactly one receipt.
- Every destructive or financial action appears in the audit log.

---

## 17. PAYMENTS

### 17.1 Principles

- Never handle raw card data. Use a hosted checkout or hosted fields from the provider so card numbers never touch BOA servers.
- The fee is quoted in pounds sterling. The client has not said which provider or which receiving account will be used, so implement a provider interface and ship two paths:
  1. A hosted card payment path through one provider adapter.
  2. A manual bank transfer path with proof upload and admin confirmation.
- Ship the bank transfer path fully working. Ship the card adapter behind `PAYMENTS_CARD_ENABLED`, defaulting to false until the client chooses a provider and supplies keys. Document this in `docs/STUBS.md`.

### 17.2 Provider interface

```ts
export interface PaymentProvider {
  name: string;
  createCheckout(input: {
    invoiceId: string;
    amountMinor: number;
    currency: string;
    customerEmail: string;
    successUrl: string;
    cancelUrl: string;
    metadata: Record<string, string>;
  }): Promise<{ url: string; providerReference: string }>;
  verifyWebhook(rawBody: string, headers: Headers): Promise<ProviderEvent>;
}
```

### 17.3 Flow

1. Parent clicks Pay on an open invoice.
2. Server verifies the parent owns the invoice and that it is open. It creates a `payments` row with status `pending` and asks the provider for a checkout URL.
3. Parent completes payment on the provider's page and returns to the portal.
4. The provider calls `/api/webhooks/payments`. The handler verifies the signature on the raw body, looks up the payment by reference, and in one transaction marks the payment `succeeded`, the invoice `paid`, and issues a receipt.
5. The success page polls the invoice status briefly and shows the result. It never trusts the redirect alone as proof of payment.

### 17.4 Webhook rules

- Verify signatures. Reject anything unsigned.
- Idempotent: processing the same event twice changes nothing the second time.
- Handle out-of-order events.
- Return quickly with a 2xx after a durable write. Do heavy work after.
- Record the raw event in `payments.raw_event`.
- Amount and currency in the event MUST match the invoice, or the payment is flagged for admin review and the invoice stays open.

### 17.5 Receipts

- Generate a PDF receipt on payment success containing: receipt number, date, BOA name and contact details from config, parent name, student name, invoice number, period, amount, currency and payment method.
- Store it in the private `receipts` bucket. Serve through signed URLs.
- Number receipts sequentially in a race-safe way (database sequence).
- Send the receipt link by email after payment.

### 17.6 Reminders

A daily cron job (`/api/cron/reminders`, protected by a secret header) that:
- Emails parents 5 days before an invoice is due.
- Marks invoices past due as overdue.
- Emails parents on the due date and 3 days after.
- Never sends more than one reminder of the same type per invoice.

### 17.7 Acceptance criteria

- A replayed webhook does not create a second receipt.
- A mismatched amount never marks an invoice paid.
- A parent can never pay or view another parent's invoice.
- The bank transfer path works end to end without any provider keys.

---

## 18. EMAIL

### 18.1 Wrapper

Create `lib/email/send.ts` exposing `sendEmail({ to, template, data, relatedTable, relatedId })`. It renders the template, sends through the provider, and writes an `email_log` row with the result. It never throws to the caller for provider failures; it records the failure and returns a result object.

### 18.2 Templates

Plain, readable, mobile-friendly emails using the site's existing brand assets (logo and colours already in the repo). Each template has a subject, a text version and an HTML version.

1. `enrolment_received_parent`
2. `enrolment_received_admin`
3. `account_invite`
4. `password_reset`
5. `enrolment_declined`
6. `invoice_issued`
7. `payment_receipt`
8. `payment_reminder_upcoming`
9. `payment_reminder_due`
10. `payment_reminder_overdue`
11. `bank_transfer_received_admin`
12. `bank_transfer_confirmed`
13. `bank_transfer_rejected`
14. `progress_report_published`
15. `assignment_marked`
16. `announcement`
17. `session_cancelled`
18. `meeting_requested_admin`
19. `meeting_confirmed`
20. `new_message`
21. `contact_received_admin`
22. `tutor_application_received_admin`
23. `tutor_application_received_applicant`

### 18.3 Rules

- Copy follows Section 2.2.
- Emails to parents about children MUST NOT include scores, feedback text or message bodies. They say something is ready and link to the portal.
- Every email includes BOA contact details from config.
- Unsubscribe applies only to non-essential emails (announcements). Fee, security and account emails always send.
- Respect notification preferences from the parent account.
- Sending is retryable. A failed send is retried up to three times with backoff, then left as `failed` for admin retry.

### 18.4 Acceptance criteria

- Every template renders with realistic test data in a unit test.
- Failed sends are visible and retryable in the admin area.
- No email contains a child's score or a message body.

---

## 19. FILE STORAGE

- All buckets private. Access through signed URLs valid for 60 seconds for downloads.
- Allowed upload types: PDF, DOCX, PPTX, XLSX, JPG, PNG, WEBP for documents and images; MP3, M4A, MP4 for Learning Hub media and message attachments limited to images and PDF.
- Size limits: 10 MB for submissions and attachments, 25 MB for resources, larger for hub media through the provider's resumable upload.
- Validate MIME type by content sniffing on the server, not only by file extension.
- Sanitise filenames. Store the original name in a column for display.
- Provide a `scanUpload` hook that currently logs a documented stub and can be swapped for a real scanner. Record it in `docs/STUBS.md`.
- Delete storage objects when their owning row is deleted, through a scheduled cleanup job.

---

## 20. NOTIFICATIONS INSIDE THE PORTAL

- A unified in-portal notifications list per user, fed from a `notifications` table: `id, profile_id, kind, title, body, link, read_at, created_at`.
- Create a notification when: an announcement is published for the user's audience, a report is published, an assignment is marked, an invoice is issued or becomes overdue, a message arrives, a meeting changes status, a session is cancelled.
- Show an unread count in the portal shell.
- Provide mark as read and mark all as read.
- Notifications follow the same privacy rule as emails: they say something is ready, they do not carry scores or private feedback text in the title.

---

## 21. SECURITY, PRIVACY AND CHILD DATA

### 21.1 Child data

- Collect only what the features need.
- Never show a child's full details to anyone who does not need them.
- Never expose a child's data in URLs beyond opaque ids.
- Never send child data to any third-party analytics or logging service.
- Provide a documented process to export or delete a family's data on request. Implement an admin action that exports a family's data as a zip and one that deletes it, with confirmation and an audit entry.

### 21.2 Application security

- Validate every input with Zod on the server.
- Escape all output. Never render user-provided HTML. If rich text is needed, use a sanitiser with an allowlist.
- CSRF protection on all mutating requests (rely on same-site cookies plus origin checks for server actions and route handlers).
- Rate limit: login, password reset, enrolment, contact, meeting request, tutor application, message send, file upload.
- Use parameterised queries only. No string-built SQL.
- Keep dependencies updated. Run `npm audit` in CI and fail on high severity issues.
- Store secrets only in environment variables. Rotate on any suspicion.
- Do not expose stack traces or database errors to users.

### 21.3 Logging

- Structured logs with request ids.
- Redact emails, phone numbers and names in logs.
- Log security-relevant events: failed logins, role changes, permission denials, webhook signature failures.

### 21.4 Backups and recovery

- Document in `docs/RUNBOOK.md` how to enable point-in-time recovery, how to restore, and how to rotate keys.

### 21.5 Acceptance criteria

- A dependency scan runs in CI.
- No secret appears in the repository history or bundle.
- Rate limits return a friendly message and a retry time.

---

## 22. VALIDATION, ERRORS AND EDGE CASES

### 22.1 Validation

- One Zod schema per form and mutation, in `lib/validation`, shared by client and server.
- Phone numbers accept international formats and are normalised to E.164 where possible, but are never rejected merely for formatting.
- Names accept any script and reasonable length, including hyphens, apostrophes and diacritics.
- Dates are validated but no minimum or maximum age is enforced anywhere.

### 22.2 Error handling

- Server actions return `{ ok: true, data }` or `{ ok: false, error: { code, message, fieldErrors? } }`.
- User-facing messages are plain and actionable. Technical detail goes to logs only.
- Every list and detail screen has loading, empty and error states with copy following Section 2.2.
- Handle expired sessions by redirecting to login with a return path.

### 22.3 Time and place

- Store all times in UTC. Display in the viewer's timezone with the Africa/Lagos time also shown for class sessions. Label the timezone explicitly.
- Many parents live abroad. Test daylight saving transitions for the UK and the US against a Lagos schedule.

### 22.4 Edge cases to handle explicitly

- A parent with several children in different classes.
- A student who changes class mid-month (invoice proration is out of scope; record the decision in `docs/ASSUMPTIONS.md` and let the admin adjust invoices manually).
- A tutor leaving: reassign classes before deactivation, and block deactivation while classes are still assigned.
- A class cancelled after invoices are issued.
- A duplicate enrolment from the same parent.
- A parent emailing from an address that already has an account.
- A payment arriving for a voided invoice (flag for admin).
- A student joining a session late or from a different device.
- A file upload interrupted midway.
- Two admins confirming the same bank transfer at once (the second sees a clear message and nothing duplicates).

---

## 23. TESTING

### 23.1 Required automated tests

- Unit tests: contact helpers, validation schemas, money formatting, invoice numbering, join window logic, attendance rate and average score calculations.
- Integration tests: enrolment submission, approval transaction, invoice generation idempotency, webhook processing and replay, receipt issuing, bank transfer confirmation.
- RLS tests from Section 12.4.
- End-to-end tests (Playwright) for: enrol as a parent, admin approves, parent accepts invite, parent views dashboard, parent uploads bank proof, admin confirms and parent downloads receipt, student joins a class within the window, student submits an assignment, tutor marks it, parent sees the published report.
- A test that scans built output for forbidden strings: `2348000000000`, `Nigeria's Leading Online School`, em dashes in page copy, and age ranges such as `5–10` or `11–17`.

### 23.2 CI

- Run install, type check, lint, unit, integration, RLS tests and the forbidden strings scan on every pull request.
- Block merges on failure.

### 23.3 Manual verification checklist

Record results in `docs/QA.md`:

- Every public page loads with no console errors.
- Every link and button works, including the phone, WhatsApp, email and social links.
- Every form validates, submits and shows its success state.
- Every email template arrives and reads correctly in at least one mobile mail app and one desktop client.
- The portal works on a small phone screen for the parent and student journeys.
- Sign in, sign out and password reset work for each role.

---

## 24. PERFORMANCE AND ACCESSIBILITY

These are functional requirements, not design changes.

- Public pages: keep the existing image optimisation. Do not add heavy new client libraries. Target a good Lighthouse performance score on mobile and record the actual scores before and after in `docs/QA.md`.
- Portal: paginate every list longer than 25 rows. Never load whole tables into the browser.
- Use server components for data-heavy views and keep client components small.
- Add database indexes listed in Section 10.10 and check slow queries with `explain` for dashboards.
- Accessibility: semantic headings in order, labels on every form control, error messages tied to fields, keyboard operable interactive elements, meaningful link text, alt text for informative images, and visible focus that already exists in the current styles. Do not restyle to achieve this; if a fix requires a visual change, list it in `docs/OBSERVATIONS.md`.

---

## 25. ENVIRONMENT VARIABLES

Document every variable in `.env.example` with a comment and never commit real values.

```
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
EMAIL_PROVIDER_API_KEY=
EMAIL_FROM_ADDRESS=
ADMIN_NOTIFY_EMAIL=
CRON_SECRET=
PAYMENTS_CARD_ENABLED=false
PAYMENTS_PROVIDER=
PAYMENTS_SECRET_KEY=
PAYMENTS_WEBHOOK_SECRET=
RATE_LIMIT_STORE_URL=
```

Add startup validation with Zod so the app fails fast with a clear message when a required variable is missing.

---

## 26. DELIVERY PLAN AND MILESTONES

Work in these milestones. Each ends with a working, deployable state and a short written summary.

### Milestone 1: Foundation and fixes
- Repository audit and `docs/ASSUMPTIONS.md`.
- Workstream A complete (config, contact fixes, footer links).
- Forbidden strings test in CI.
- Supabase project wired, migrations for identity, taxonomy and intake tables, RLS scaffolding.
- Acceptance: the live placeholders are gone and CI is green.

### Milestone 2: Public site
- Workstream B (copy and content on every page).
- Workstream D (SEO and metadata).
- Contact page and forms writing to the database and emailing the admin.
- `docs/CLAIMS_TO_CONFIRM.md` complete.
- Acceptance: no forbidden content, all pages use the shared CTA.

### Milestone 3: Enrolment and accounts
- Workstream C (enrolment form and storage).
- Authentication, invitations, guards, middleware.
- Admin enrolment list, approval transaction, account creation.
- Acceptance: enrol, approve and invite works end to end.

### Milestone 4: Parent and student portal
- Data model for classes, sessions, resources, assignments, submissions, hub.
- Parent dashboard, child view, reports view, announcements, messages, meetings.
- Student dashboard, classes with join window, resources, assignments, Learning Hub.
- Acceptance: RLS tests pass and the parent and student journeys pass end to end.

### Milestone 5: Tutor and admin tools
- Tutor classes, attendance, resources, assignments, marking, tests, reports.
- Admin users, classes, announcements, content, inboxes, audit and email log.
- Acceptance: a tutor can run a full teaching cycle and an admin can manage the school.

### Milestone 6: Money
- Fee plans, invoices, generation job, bank transfer flow, receipts.
- Card adapter behind its flag, webhook handler, reminders.
- Acceptance: the payment tests and webhook replay tests pass.

### Milestone 7: Hardening and launch
- Security review against Section 21.
- Accessibility and performance checks.
- Full manual QA and `docs/QA.md`.
- Runbook and handover.
- Acceptance: every item in Section 27 is satisfied.

---

## 27. DEFINITION OF DONE

The project is done only when all of the following are true:

1. No placeholder contact details remain anywhere, and all contact data comes from `siteConfig`.
2. The site describes BOA as the client does: four focus areas, small groups, personalised sessions, three sessions a week, no ages, no fixed stages.
3. No unverified claims remain in live copy; each has been reworded or listed in `docs/CLAIMS_TO_CONFIRM.md`.
4. There are no fabricated testimonials or statistics.
5. Visual design is unchanged from the current site.
6. Enrolment stores data, emails both parties and supports approval into accounts.
7. Parents can see children, classes, attendance, scores, reports and announcements, pay or submit proof of payment, download receipts, message tutors and request meetings.
8. Students can see their classes, join within the 5 minute window, download resources, submit assignments, see marks and use the Learning Hub.
9. Tutors can run classes, mark attendance, share resources, set and mark assignments, record scores and write reports.
10. Admins can manage every part of the system and every sensitive action is audited.
11. RLS tests prove that families, students and tutors cannot see data they should not.
12. Payments are idempotent and never trust redirects; receipts are generated once.
13. CI is green, including the forbidden strings scan and dependency audit.
14. All documentation files listed in this prompt exist and are current.

---

## 28. FINAL REPORT FORMAT

When you finish each milestone, and again at the end, produce a report in `docs/REPORT.md` with these sections:

1. What was built, by workstream, in plain sentences.
2. Files and migrations added or changed (grouped, not exhaustive).
3. Decisions you made and why, including every assumption in `docs/ASSUMPTIONS.md`.
4. Anything stubbed, with the flag name and what is needed to make it real (`docs/STUBS.md`).
5. Everything the client must confirm (`docs/CLAIMS_TO_CONFIRM.md`).
6. Visual observations you left untouched (`docs/OBSERVATIONS.md`).
7. Test results: what ran, what passed, what was not covered.
8. Known issues and recommended next steps.

Do not describe work as finished if any acceptance criterion in its workstream is unmet. State plainly what is and is not done.

---

## 29. QUESTIONS TO RESOLVE WITH THE CLIENT (RECORD, DO NOT BLOCK ON)

Proceed with the stated assumption and note each in `docs/ASSUMPTIONS.md`.

1. Does the 70 pounds per month fee apply to every programme, or only the full curriculum? Assumption: one plan at 70 pounds per month, editable by the admin.
2. Which payment provider and receiving account will be used for card payments? Assumption: bank transfer ships first, card adapter is flagged off.
3. Are recordings of missed classes offered? Assumption: no mention on the site until confirmed.
4. Are there online clubs, assemblies or competitions? Assumption: no mention until confirmed.
5. Which local dialects are taught? Assumption: Yoruba, Hausa and Igbo listed, marked to confirm.
6. What are the tutor standards? Assumption: the conservative list in Section 6.6 pending approval.
7. What happens after "Practise Reading and Dialect" in the student flow, and what do the tutor and admin flows include? Assumption: as specified in Sections 14, 15 and 16.
8. Can students see their own progress reports? Assumption: off by default, controlled by a setting.
9. Should the school issue invoices per child or per family? Assumption: per student, grouped under the parent's account.
10. Real testimonials, tutor photos, tutor bios and confirmed statistics. Assumption: none are shown until supplied.

---

END OF PROMPT

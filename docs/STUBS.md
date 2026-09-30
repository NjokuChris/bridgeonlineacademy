# STUBS

Items that are partially implemented and must be completed before launch.
Each entry lists what is stubbed, where, and what is needed to finish it.

---

| # | Stub | File | What is needed |
|---|------|------|---------------|
| 1 | Contact form submission | `src/components/contact/ContactForm.tsx` | Replace the `setTimeout` simulation with a real server action that writes to `contact_messages` and sends an admin email via the `sendEmail` wrapper. |
| 2 | Enrolment form submission | `src/components/home/Enrollment.tsx` | Replace `console.log` with a server action that writes to `enrolment_requests` and `enrolment_learners`, sends two emails and handles rate limiting. |
| 3 | Testimonials data fetch | `src/app/page.tsx` | Replace `const publishedTestimonials: [] = []` with a Supabase query for rows where `published = true AND consent_confirmed = true`. |
| 4 | Payment processing | Not yet started | Requires Stripe integration and the `fee_plans`, `invoices` and `payments` tables from Section 10.6. |
| 5 | Portal (all routes) | Not yet started | Full portal build from Sections 9-22 of the brief. Requires Supabase project credentials in `.env.local`. |

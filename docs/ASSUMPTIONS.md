# ASSUMPTIONS

This file records decisions made where the brief was ambiguous or where
the codebase differed from expectations. Review each item with the client
before launch.

---

## Codebase summary (read before first code change)

- Framework: Next.js 16 with TypeScript, App Router.
- Styling: Tailwind CSS v4 with inline theme tokens in `globals.css`.
- Animation: Framer Motion.
- Icons: `react-icons` (fa6, fi, pi, md sets).
- No ORM, no auth library, no email library present in the existing code.
  All form submissions currently log to console and show a client-side
  success state only. No backend wiring exists yet.
- No Supabase project detected. Database work begins once credentials are
  provided in `.env.local`.
- The `src/app/enquire/page.tsx` route exists but is a duplicate of the
  enrol page. It has been left in place (not deleted) to avoid breaking
  any existing links. It can be redirected to `/enrol` once confirmed.
- The `Credentials` stats component (animated counter block) has been
  removed from the homepage per the brief (Section 6.2: remove stats block
  unless client supplies confirmed numbers). It is still in
  `src/components/home/Credentials.tsx` and has not been deleted.
- The `MentoredPathway`, `StudentSupport`, `HowWeTeach`, `ReviewsStrip`
  and `Enquiry` components exist in the codebase but are not used on any
  current page. They have been left in place.

---

## Contact details

- Phone numbers, WhatsApp, email and social URLs have been taken directly
  from Section 4.1 of the brief and stored in `src/config/site.ts`.
- The old placeholder `2348000000000` and `admissions@bridgeonlineacademy.com`
  have been replaced across all files.

---

## Tutor and admin portal flows (Sections 13-14 of brief)

The client did not supply detail for tutor and admin portal flows.
The following is proposed by the development team:

**Tutor portal (proposed):**
- Dashboard: today's sessions with join links, pending assignments to mark,
  meeting requests addressed to the tutor.
- Classes: roster per class, student names, schedule.
- Assignments: list of submitted work to review and mark.
- Resources: upload notes and worksheets to the shared resource library.
- Messages: reply to parent messages about their child.
- Profile: update bio and availability.

**Admin portal (proposed):**
- Dashboard: overview of enrolment requests, unpaid invoices, flagged
  assignment submissions and unsent emails.
- Enrolments: view, approve and convert enrolment requests to accounts.
- Users: manage parent, student and tutor accounts.
- Classes: create and edit class schedules and rosters.
- Fees: issue invoices, view payment status.
- Announcements: create and pin announcements for parents/students.
- Testimonials: add, approve and publish testimonials.
- Applications: review tutor applications.
- Contact messages: view and resolve contact form submissions.
- Meeting requests: confirm or decline meeting requests and set join links.
- Email log: view emails that failed to send.
- Audit log: view a record of all admin actions.
- Settings: site-wide settings (fee amounts, term dates, etc.).

These proposals are recorded here so the client can review and confirm or
amend before portal build begins.

---

## Fee display

Section 4.9 mentions "70 pounds per month" as the fee. This is stored in
`siteConfig.fees.monthly`. The figure is not yet displayed publicly because
Section 6.5 (FAQ item 4) notes it should only be shown publicly if confirmed
as applying to every programme. It is shown inside the portal (invoices) only.

---

## Dialects

Section 6.3 notes dialects taught should only be stated if confirmed. The
live site lists Yoruba, Hausa and Igbo. These three are kept and marked
"to confirm" on the Programmes page.

---

## `enquire` route

The `/enquire` route exists in the codebase. It is identical in content to
`/enrol`. Proposed action: add a redirect from `/enquire` to `/enrol`.
Awaiting client confirmation before deleting the route.

---

## Payment provider

The brief does not specify a payment provider. Stripe is assumed for GBP
card payments (Section 17). This will be confirmed before implementation.

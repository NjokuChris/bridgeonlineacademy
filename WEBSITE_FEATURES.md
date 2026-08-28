# Bridge Online Academy (BOA) - Website Features & Overview

## Project Overview
Bridge Online Academy is a Next.js-based educational website for an online learning platform serving Nigerian students (Primary & Secondary). The site is built to showcase the academy's offerings and allow families to enquire about programmes.

**Tech Stack:**
- Next.js 16.3.1 (React 19.2.8)
- TypeScript
- Tailwind CSS 4
- Framer Motion (animations)
- React Icons
- Matter.js (physics simulations)

---

## 📄 Pages & Routes

### 1. **Home Page** (`/`)
**Path:** `src/app/page.tsx`

The main landing page showcasing BOA's key offerings. Components included:
- **Hero Section** - Animated typewriter effect with main call-to-action
- **Credentials** - Trust indicators and establishment details
- **Subject Pills** - Visual display of subjects offered
- **Key Stages** - Primary (Ages 5-10) and Secondary (Ages 11-17) programmes
- **Why Us** - 4 key differentiators with icons
- **Teaching & Support** - Introduction to Ms. Zika (the educator)
- **FAQs** - Frequently asked questions section
- **Register CTA** - Call-to-action button for enquiries

### 2. **About Page** (`/about`)
**Path:** `src/app/about/page.tsx`

Contains detailed information about:
- BOA's mission and vision
- Ms. Zika's story and teaching philosophy
- Educational philosophy and approach
- Values and commitment to learning

### 3. **Programmes Page** (`/programmes`)
**Path:** `src/app/programmes/page.tsx`

Detailed breakdown of:
- Primary Programme (Ages 5-10)
- Secondary Programme (Ages 11-17)
- Curriculum details
- Subject offerings
- Learning pathways

### 4. **FAQ Page** (`/faq`)
**Path:** `src/app/faq/page.tsx`

Dedicated FAQ page with expanded questions and answers about:
- Age groups served
- Curriculum followed
- Class formats and sizes
- Costs and enrollment
- Learning experience details

### 5. **Enquiry Page** (`/enquire`)
**Path:** `src/app/enquire/page.tsx`

Form for prospective students/parents to:
- Submit their contact information
- Provide child's age and current class
- Add custom message
- Receive WhatsApp chat option

---

## 🧩 Components Architecture

### Home Components (`src/components/home/`)

#### 1. **Hero.tsx**
- Animated typewriter effect typing "online classes,"
- Main headline with animation
- Hero image display
- Primary CTA button ("Start Learning")
- Features smooth opacity and y-axis animations on load

#### 2. **Credentials.tsx**
- Displays trust indicators
- Showcases educational credentials and accreditations
- Builds confidence in the academy's legitimacy

#### 3. **SubjectPills.tsx**
- Visual pill-shaped buttons for each subject
- Subjects include:
  - **Core:** Maths, English, Science
  - **Specialized:** Health Education, Social Studies, History, Geography
  - **Creative:** Visual Arts, Music, Physical Education
  - **Advanced:** Information & Communication Technology (ICT)
- Each subject has associated icon and color coding

#### 4. **KeyStages.tsx**
- Two-column layout showing Primary and Secondary programmes
- Color-coded cards (primary/navy)
- Links to detailed programme pages
- Age ranges and curriculum descriptions

#### 5. **WhyUs.tsx**
- 4 Key Differentiators displayed with icons:
  1. **Live, teacher-led lessons** - Real-time interactive classes with recordings
  2. **Qualified expert teachers** - Degree-qualified, subject-specialist educators
  3. **Vibrant, social community** - Clubs, assemblies, competitions, leadership
  4. **Flexible learning options** - Learn from anywhere, flexible scheduling
- Uses `AnimateIn` component for staggered animations

#### 6. **TeachingAndSupport.tsx**
- Introduces Ms. Zika (the founder/educator)
- Large "Z" initial in navy box with yellow text
- Overview of her teaching philosophy
- Link to full "About" page

#### 7. **FAQs.tsx**
- Accordion-style expandable Q&A
- 6 Common questions:
  1. What ages do you teach?
  2. Which curriculum do you follow?
  3. Are classes live or recorded?
  4. How large are classes?
  5. How much does it cost?
  6. How do I enrol my child?
- Can be used as standalone component on dedicated FAQ page

#### 8. **RegisterCTA.tsx**
- Full-width section with gradient background
- Animated grid pattern background
- Headline: "Ready to start learning with BOA?"
- Call-to-action button linking to enquiry form
- Encourages users to register interest

#### 9. **Enquiry.tsx**
- Contact form with fields:
  - Parent name
  - Email
  - WhatsApp number
  - Child's age (5-17 range)
  - Current class
  - Optional message
- Form submission state handling
- WhatsApp chat option
- Success message on submission

#### 10. **Testimonials.tsx**
- Student testimonials/reviews section
- Social proof and credibility

#### 11. **ReviewsStrip.tsx**
- Strip of review ratings/testimonials
- Quick social proof element

#### 12. **StudentSupport.tsx**
- Information about student support services
- Pastoral care approach
- Academic support details

#### 13. **HowWeTeach.tsx**
- Teaching methodology section
- Explains the learning approach
- Structured lesson format details

#### 14. **MentoredPathway.tsx**
- Mentoring/progression pathway visualization
- Shows student journey through the academy

### Layout Components (`src/components/layout/`)

#### 1. **SiteLayout.tsx**
- Wrapper component for all pages
- Includes Header and Footer
- Provides consistent navigation and branding

#### 2. **Header.tsx**
- Navigation menu with links:
  - Home
  - Programmes
  - About
  - FAQ
- Primary CTA button: "Start Learning"
- Teacher CTA button: "Become a Teacher"
- Responsive mobile navigation

#### 3. **Footer.tsx**
- Links to pages
- Contact information
- Copyright and legal
- Social media links (optional)
- WhatsApp/contact CTA

### UI Components (`src/components/ui/`)

#### 1. **Button.tsx**
- Reusable button component
- Supports different sizes and variants
- Consistent styling across the site

#### 2. **AnimateIn.tsx**
- Wrapper component for scroll/load animations
- Uses Framer Motion for smooth entrance animations
- Supports delay prop for staggered effects
- Improves UX with visual feedback

#### 3. **SectionLabel.tsx**
- Small label/badge used above section headings
- Consistent styling for section introductions
- Typically uppercase and in link color

#### 4. **CheckCircle.tsx**
- Checkmark icon component
- Used for features/benefits lists

#### 5. **ChecklistCard.tsx**
- Card component displaying checklist items
- Used for requirements, features, or benefits

---

## 🎨 Design System & Styling

### Colors (from Tailwind config)
- **bg** - Background color
- **ink** - Primary text color (dark)
- **muted** - Secondary text color (lighter)
- **link** - Primary action/link color
- **border** - Border color
- **navy** - Dark blue (accent)
- **yellow** - Bright yellow (CTAs and highlights)
- **pill** - Background for success messages
- **stage-primary** - Primary education section color

### Typography
- **Display Font:** Used for headings (H1, H2, H3)
- **Body Font:** Standard text
- Responsive sizing with `lg:` breakpoints

### Spacing & Layout
- Uses `shell` class for consistent max-width container
- Responsive padding with `px-4` and `lg:px-0`
- Grid layouts with responsive column counts
- Standard spacing: `py-20` and `lg:py-28` for sections

---

## 🔗 Navigation Structure

```
/                          - Home (landing page)
  ├── Programmes          - Programme offerings
  ├── About              - About ms. Zika and BOA
  ├── FAQ                - Frequently asked questions
  └── Enquire            - Contact/enquiry form
       └── ?interest=teaching - Teacher enquiry variant
```

### Navigation Data (`src/lib/navData.ts`)
- `NAV_ITEMS` - Main navigation links
- `PRIMARY_CTA` - "Start Learning" button
- `TEACHER_CTA` - "Become a Teacher" button
- Contact info: WhatsApp, Phone, Email

---

## 📋 Key Features

### 1. **Responsive Design**
- Mobile-first approach
- Tailwind breakpoints (sm, md, lg)
- Touch-friendly buttons and forms

### 2. **Animations**
- Framer Motion for entrance animations
- Typewriter effect on Hero section
- Smooth transitions and scroll effects
- AnimateIn wrapper for consistent animation patterns

### 3. **Forms**
- Parent/student enquiry form with validation
- WhatsApp integration for quick communication
- Form state management
- Success message on submission

### 4. **Accessibility**
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance

### 5. **Performance**
- Next.js Image optimization
- Code splitting by route
- Lazy loading of components
- Responsive images

### 6. **SEO**
- Semantic HTML
- Meta tags (configured in layout)
- Structured heading hierarchy
- Descriptive alt text for images

---

## 📊 Subject Offerings

### Primary (Ages 5-10)
- English Language
- Mathematics
- Science
- Social Studies
- Health Education
- Visual Arts
- Music
- Physical Education
- ICT

### Secondary (Ages 11-17)
- English Language
- Mathematics
- Science (Biology, Chemistry, Physics)
- Social Studies
- History
- Geography
- Health Education
- Visual Arts
- Music
- Physical Education
- ICT

---

## 🎯 Key Messages & Value Propositions

1. **Quality Nigerian Education Accessible Online**
   - Follows Nigerian curriculum
   - Professionally qualified teachers
   - Flexible location (Lagos, Abuja, Port Harcourt, abroad)

2. **Live, Teacher-Led Learning**
   - Real-time interactive classes
   - Subject specialists
   - Recorded classes available for catch-up

3. **Holistic Development**
   - Academic excellence
   - Social community and belonging
   - Student leadership opportunities
   - Pastoral care and support

4. **Founded by Ms. Zika**
   - Experienced educator
   - Believes in personal attention
   - Philosophy: "Learning works best when children feel known"

5. **Flexible and Accessible**
   - Any time zone support
   - Flexible scheduling
   - Fits around family routine

---

## 📞 Contact Information

- **WhatsApp:** +2348000000000 (placeholder)
- **Phone:** +234 800 000 0000 (placeholder)
- **Email:** admissions@bridgeonlineacademy.com (placeholder)

**Note:** These are placeholder contact details that should be updated before launch.

---

## 🚀 Getting Started (Development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start

# Run linting
npm lint
```

Access the site at `http://localhost:3000`

---

## 📦 Dependencies

- **framer-motion** - Animation library
- **lucide-react** - Icon library
- **react-icons** - Additional icon sets
- **matter-js** - Physics engine (for advanced animations)
- **tailwindcss** - Utility-first CSS framework
- **typescript** - Type safety
- **next** - React framework

---

## 📝 Summary

Bridge Online Academy's website is a modern, animated, and user-friendly platform designed to:
1. Showcase the academy's educational offerings
2. Build trust through credentials and testimonials
3. Provide clear information about programmes and philosophy
4. Enable easy enquiry/registration for prospective students
5. Create a welcoming, professional online presence

The site emphasizes:
- **Personal attention** from qualified teachers
- **Flexibility** in learning (time, location, pace)
- **Community** and social learning opportunities
- **Quality** Nigerian curriculum delivered online
- **Accessibility** for families globally

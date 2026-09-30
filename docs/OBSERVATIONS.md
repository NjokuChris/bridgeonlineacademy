# OBSERVATIONS

Visual and structural observations noted during the upgrade. Per Section 2.1
of the brief, none of these have been changed. They are listed here for
the client's review.

---

## Visual

1. **No custom font loaded.** `globals.css` defines `--font-display` as
   `Georgia, "Times New Roman", serif` and `--font-sans` as
   `Arial, Helvetica, sans-serif`. No Google Fonts or custom font files are
   loaded. This is fine for performance but may not match the client's brand
   if a custom typeface is intended.

2. **Logo image is small.** `/boa-logo.png` renders at 48px wide in the
   footer and 64px in the header. If a higher-resolution or wider logo is
   available, it should replace the current file.

3. **Hero image placeholder.** `bridgestudent.png` is a stock-style image.
   If the client has a real photo of their own students or environment, it
   should replace this.

4. **`Z` placeholder for Ms Zika.** The `TeachingAndSupport` and `About`
   sections display a navy block with the letter "Z" in place of a photo.
   A real photo of Ms Zika would significantly improve these sections.

5. **Tutor bios.** The About page has no tutor list because no bios or
   photos have been supplied. The component is structured to accept a
   data-driven array when the client provides this content.

---

## Structural

6. **`/enquire` route is a duplicate of `/enrol`.** Both routes render the
   same enrolment form. Recommend redirecting `/enquire` to `/enrol` and
   removing the route once confirmed.

7. **`MentoredPathway` and `StudentSupport` components** describe features
   (weekly one-to-one mentoring, pastoral care, learning support team,
   inclusive community) that are not confirmed in the client's brand pack.
   They are unused on any page but remain in the codebase. Remove them or
   supply confirmed copy before using them.

8. **`HowWeTeach` component** links to `/how-we-teach`, a route that does
   not exist. The component is currently unused. If a "how we teach" page
   is wanted, create the route and supply confirmed content.

9. **`ReviewsStrip` component** renders a holding message when `REVIEWS`
   is empty. It is currently unused on any page. Once a reviews platform is
   chosen or real reviews are collected, it can be added to a page.

---

## SEO and metadata

10. **No `sitemap.xml` or `robots.txt` yet.** These are planned for
    Workstream D and will be added when the portal routes are finalised so
    portal paths can be excluded correctly.

11. **Canonical host redirect** (www to non-www or vice versa) needs to be
    configured in the Vercel project settings, not in the Next.js code.
    This should be done before launch.

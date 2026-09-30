import SiteLayout from "@/components/layout/SiteLayout";
import Hero from "@/components/home/Hero";
import FocusAreas from "@/components/home/FocusAreas";
import ClassFormat from "@/components/home/ClassFormat";
import WhyUs from "@/components/home/WhyUs";
import TeachingAndSupport from "@/components/home/TeachingAndSupport";
import KeyStages from "@/components/home/KeyStages";
import SubjectPills from "@/components/home/SubjectPills";
import Testimonials from "@/components/home/Testimonials";
import FAQs from "@/components/home/FAQs";
import RegisterCTA from "@/components/home/RegisterCTA";

/**
 * Testimonials are loaded from the database once the portal is live.
 * Until then, the section does not render (Testimonials returns null for an
 * empty array). Replace the empty array below with a data fetch when ready.
 */
const publishedTestimonials: [] = [];

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <FocusAreas />
      <ClassFormat />
      <KeyStages />
      <SubjectPills />
      <WhyUs />
      <TeachingAndSupport />
      <Testimonials items={publishedTestimonials} />
      <FAQs />
      <RegisterCTA />
    </SiteLayout>
  );
}

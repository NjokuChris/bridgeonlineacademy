import SiteLayout from "@/components/layout/SiteLayout";
import Credentials from "@/components/home/Credentials";
import FAQs from "@/components/home/FAQs";
import Hero from "@/components/home/Hero";
import KeyStages from "@/components/home/KeyStages";
import RegisterCTA from "@/components/home/RegisterCTA";
import TeachingAndSupport from "@/components/home/TeachingAndSupport";
import SubjectPills from "@/components/home/SubjectPills";
import WhyUs from "@/components/home/WhyUs";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Credentials />
      <SubjectPills />
      <KeyStages />

      <WhyUs />
      <TeachingAndSupport />
      
      <Testimonials />

      <FAQs />
      <RegisterCTA />
    </SiteLayout>
  );
}

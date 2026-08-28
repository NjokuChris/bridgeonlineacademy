import SiteLayout from "@/components/layout/SiteLayout";
import FAQs from "@/components/home/FAQs";
import RegisterCTA from "@/components/home/RegisterCTA";

export default function FAQPage() {
  return (
    <SiteLayout>
      <FAQs standalone />
      <RegisterCTA />
    </SiteLayout>
  );
}

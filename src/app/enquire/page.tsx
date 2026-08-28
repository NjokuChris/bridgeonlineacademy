import SiteLayout from "@/components/layout/SiteLayout";
import Enrollment from "@/components/home/Enrollment";

export default function EnquirePage() {
  return (
    <SiteLayout>
      <section className="bg-bg py-20 lg:py-28">
        <div className="shell max-w-4xl">
          <h1 className="font-display text-5xl font-semibold leading-tight text-ink lg:text-6xl">
            Start learning with BOA.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted">
            Enrollment at Bridge Online Academy is simple. Share your details below and our team will guide you through the next steps to get your child started.
          </p>
        </div>
      </section>
      <Enrollment type="student" />
    </SiteLayout>
  );
}

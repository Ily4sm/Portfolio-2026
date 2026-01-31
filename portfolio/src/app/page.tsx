import { SiteNavbar } from "@/components/ui/site-navbar";
import { Hero } from "@/components/ui/hero";
import { ProjectsSection } from "@/components/ui/projects-section";
import { ContactSection } from "@/components/ui/contact-section";
import { CertificationsSection } from "@/components/ui/certifications-section";

export default function Home() {
  return (
    <>
      <SiteNavbar />
      <main>
        <Hero />

        <CertificationsSection />

        <ProjectsSection />

        <ContactSection />

      </main>
    </>
  );
}
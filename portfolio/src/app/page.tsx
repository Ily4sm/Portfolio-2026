import { SiteNavbar } from "@/components/ui/site-navbar";
import { Hero } from "@/components/ui/hero";
import { ProjectsSection } from "@/components/ui/projects-section";
import { ContactSection } from "@/components/ui/contact-section";
import { CertificationsSection } from "@/components/ui/certifications-section";
import { SiteFooter } from "@/components/ui/site-footer";


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
      <SiteFooter />
    </>
  );
}
import { Header } from '@/components/layout/header';
import { AboutSection } from '@/components/sections/about';
import { HeroSection } from '@/components/sections/hero';
// import { ProjectsSection } from '@/components/sections/projects'; // Temporarily hidden
import { Footer } from '@/components/layout/footer';
import { ContactSection } from '@/components/sections/contact';
import { ExperienceSection } from '@/components/sections/experience';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-portfolio-bg" role="main" aria-label="Portfolio content">
        <HeroSection />
        <AboutSection />
        {/* <ProjectsSection /> */}
        <ExperienceSection />
        {/* <FAQSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
import AboutMe from '@/components/about/about-me';
import Contact from '@/components/contact/contact';
import Experience from '@/components/experience/experience';
import Hero from '@/components/hero/hero';
import Projects from '@/components/projects/projects';
import Skills from '@/components/skills/skills';

export default async function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

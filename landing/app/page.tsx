import TransitionPage from "@/components/Transition-page";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Highlights from "@/components/Highlights";
import LogoCloud from "@/components/LogoCloud";
import Experience from "@/components/Experience";
import Features from "@/components/Features";
import ProjectsPreview from "@/components/ProjectsPreview";
import MTComponents from "@/components/MTComponents";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import RecruiterSnapshot from "@/components/RecruiterSnapshot";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import { ContactMe } from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="relative">
      <TransitionPage />
      <Hero />
      <Marquee />
      <Highlights />
      <LogoCloud />
      <Experience />
      <Features />
      <ProjectsPreview />
      {/* <MTComponents /> */}
      <Skills />
      <Testimonials />
      <RecruiterSnapshot />
      <Process />
      <FAQ />
      <ContactMe />
    </main>
  );
}

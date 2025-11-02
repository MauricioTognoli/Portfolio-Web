import Introduction from "@/components/Introduction";
import TransitionPage from "@/components/Transition-page";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Proyects from "@/components/Proyects";
import Stack from "@/components/Stack";
import { ContactMe } from "@/components/ContactMe";

export default function Home() {
  return (
    <main className="relative">
      <TransitionPage />
      <div className="flex-row h-full ">
        <Introduction />
        <AboutMe />
        <Services />
        <div id="projects">
          <Proyects />
        </div>
        <Stack />
        <ContactMe />
      </div>
    </main>
  );
}

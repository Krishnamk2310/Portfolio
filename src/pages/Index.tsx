import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

import { CyberParticles } from "@/components/ui/CyberParticles";

const Index = () => {
  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-900/30">
      <CyberParticles />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;

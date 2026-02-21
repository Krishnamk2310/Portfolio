import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { LeetCodeIcon } from "@/components/ui/LeetCodeIcon";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HackerText } from "@/components/ui/HackerText";
import { FloatingShapes } from "@/components/ui/FloatingShapes";

export const Hero = () => {
    
  const handleResumeDownload = () => {
    const driveUrl = "https://drive.google.com/file/d/180kwkVqIMA1CE9fPWLVehqTkIiI8FkYB/view?usp=drive_link";
    const fileId = driveUrl.match(/\/d\/(.+?)\//)?.[1];
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, "_blank");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white px-4 pt-20">
      {/* Aurora Background Effect */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <FloatingShapes />

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none" />
      
      {/* Content */}
      <div className="z-10 text-center max-w-5xl mx-auto space-y-8">




        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50 pb-2 font-display uppercase break-words"
        >
          <HackerText text="Markandey" /> <br /> <HackerText text="Krishna" /> <HackerText text="Mishra" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-2xl md:text-3xl font-light text-zinc-400 max-w-2xl mx-auto tracking-[0.15em] md:tracking-[0.2em] font-display px-4"
        >
          <HackerText text="CODER & DEVELOPER" speed={50} />
        </motion.p>
        
        <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed"
        >
            Building efficient and scalable solutions using Java, Data Structures & Algorithms, and modern web technologies.
        </motion.p>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <MagneticButton>
            <Button size="lg" className="bg-white text-black hover:bg-zinc-200 rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-white/10 transition-all hover:scale-105 active:scale-95" onClick={handleResumeDownload}>
               Download Resume
            </Button>
          </MagneticButton>
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex justify-center gap-6 pt-12"
        >
            <a href="https://github.com/Krishnamk2310" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors hover:scale-110"><Github size={24}/></a>
            <a href="https://www.linkedin.com/in/markandey-krishna-mishra" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors hover:scale-110"><Linkedin size={24}/></a>
            <a href="mailto:krishnamk2310@gmail.com" className="text-zinc-500 hover:text-white transition-colors hover:scale-110"><Mail size={24}/></a>
            <a href="https://codolio.com/profile/Krishnamk2310" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors hover:scale-110"><LeetCodeIcon size={24}/></a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-zinc-500 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { ThreeDTiltCard } from "@/components/ui/ThreeDTiltCard";

export const About = () => {
  return (
    <Section id="about" className="bg-zinc-950">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Statement */}
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white tracking-tight font-display"
          >
            I don't just write code. <br />
            <span className="text-zinc-500">I engineer solutions.</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-lg text-zinc-400 leading-relaxed"
          >
            Currently pursuing <strong className="text-white">B.Tech in Computer Science</strong> with a CGPA of <strong className="text-white">8.55</strong>. I combine strong theoretical foundations in Data Structures with practical full-stack development skills.
          </motion.p>
          <motion.p 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="text-lg text-zinc-400 leading-relaxed"
          >
            A dedicated learner and gym enthusiast, I bring discipline and consistency to every project. My goal is to build scalable, user-centric interfaces that make a real impact.
          </motion.p>
          
          <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50">
                  <h3 className="text-zinc-500 text-sm uppercase tracking-wide">Education</h3>
                  <p className="text-white font-medium mt-1">B.Tech CSE (2022-26)</p>
                  <p className="text-zinc-500 text-sm">Greater Noida, India</p>
              </div>
              <div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/50">
                   <h3 className="text-zinc-500 text-sm uppercase tracking-wide">Schooling</h3>
                  <p className="text-white font-medium mt-1">Vibgyor High</p>
                  <p className="text-zinc-500 text-sm">X: 94% | XII: 90%</p>
              </div>
           </div>
        </div>

        {/* Right: Abstract Visualization with Stats */}
        <ThreeDTiltCard className="h-full w-full">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass group">
                 {/* Abstract Gradient Mesh */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent" />
                 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
                 <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-16 -mb-16" />
                 
                 <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full max-w-md transform transition-transform duration-500 hover:scale-105">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center aspect-square shadow-2xl"
                        >
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">8.55</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">CGPA</div>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-black/40 p-6 rounded-2xl border border-white/5 backdrop-blur-md flex flex-col items-center justify-center text-center aspect-square shadow-2xl"
                        >
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">350+</div>
                            <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">DSA Solved</div>
                        </motion.div>
                    </div>
                 </div>
            </div>
        </ThreeDTiltCard>
      </div>
    </Section>
  );
};

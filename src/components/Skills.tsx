import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillsData = {
    "Languages": ["Java", "JavaScript", "Python", "HTML", "CSS", "Node.js"],
    "Frameworks": ["React.js", "Express.js", "Tailwind CSS", "Bootstrap", "Next.js"],
    "Databases": ["MongoDB", "SQL", "PostgreSQL"],
    "Tools": ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Postman"]
};

export const Skills = () => {
  return (
    <Section id="skills" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Sci-Fi Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-950/80 to-zinc-950 pointer-events-none" />
        
        <div className="text-center mb-16 relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white tracking-widest mb-4 font-display uppercase"
            >
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Arsenal</span>
            </motion.h2>
            <p className="text-zinc-400 font-light tracking-wide text-lg">The tools I use to craft digital reality.</p>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 px-4">
            <div className="grid gap-8 md:grid-cols-2">
                {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                    <motion.div 
                        key={category}
                        initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        className="group"
                    >
                         <div className="relative overflow-hidden rounded-2xl bg-zinc-900/50 border border-white/10 p-1 transition-all duration-500 hover:border-blue-500/50">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative bg-black/40 backdrop-blur-xl rounded-xl p-6 md:p-8 h-full">
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3 font-display tracking-wider">
                                    <span className="w-1 h-8 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full" />
                                    {category.toUpperCase()}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, index) => (
                                        <Badge 
                                            key={skill}
                                            className="px-4 py-2 bg-zinc-800/50 border-white/5 text-zinc-300 hover:text-white hover:bg-blue-600 hover:border-blue-500/50 transition-all duration-300 cursor-default text-sm shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] font-mono"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </Section>
  );
};

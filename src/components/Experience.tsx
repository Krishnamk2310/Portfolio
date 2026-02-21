import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "SpringWorks Remote",
    role: "Technical Operations Intern — SpringVerify Platform",
    period: "Sept. 2025 - Feb 2026",
    description: "Performed data validation and rule-based checks on 20+ cases/day to ensure platform accuracy. Investigated and reproduced 10–15 UI/data issues weekly, coordinating fixes with internal teams. Used Slack, Zoho, Google Sheets/Forms, and APIs for automation, tracking, and reporting.",
  },
  {
    company: "Hindustan Aeronautics Limited (HAL)",
    role: "Summer Trainee",
    period: "July 2025",
    description: "Gained hands-on exposure to aircraft and engine assembly, factory operations, and aerospace manufacturing workflows. Collaborated with engineers and studied quality control protocols.",
  }
];

const certifications = [
    { title: "Java Programming Fundamentals", issuer: "Self-Study" },
    { title: "Data Structures and Algorithms", issuer: "Self-Study" },
    { title: "MERN Web Development", issuer: "Self-Study" },
    { title: "Supervised Machine Learning", issuer: "IBM - Coursera" }
];

export const Experience = () => {
  return (
    <Section id="experience" className="bg-zinc-950">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center font-display uppercase">Experience</h2>
            
            <div className="relative border-l-2 border-white/10 ml-3 space-y-12 pb-12">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative pl-8"
                    >
                        {/* Glowing Dot */}
                        <div className="absolute -left-[9px] top-2 h-4 w-4 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                            <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
                        </div>
                        
                        <div className="space-y-2 group">
                            <span className="text-xs font-mono text-blue-400 tracking-wider uppercase bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">{exp.period}</span>
                            <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors font-display tracking-wide">{exp.role}</h3>
                            <div className="text-zinc-400 font-medium mb-2 flex items-center gap-2">
                                <span className="w-1 h-1 rounded-full bg-zinc-500"></span>
                                {exp.company}
                            </div>
                            <p className="text-zinc-400 max-w-none leading-relaxed text-base bg-zinc-900/30 p-4 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                                {exp.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </Section>
  );
};

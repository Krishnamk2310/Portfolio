import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Cpu, Palette, Settings } from 'lucide-react';

const allSkillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Java", "JavaScript", "Node.js", "HTML", "CSS", "Python"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frameworks",
    icon: Globe,
    skills: ["React.js", "MongoDB", "Express-Node.js", "Tailwind CSS"],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Libraries",
    icon: Database,
    skills: ["Bootstrap", "Redux Toolkit"],
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Tools",
    icon: Settings,
    skills: ["Git", "GitHub", "Visual Studio Code", "IntelliJ IDEA"],
    color: "from-orange-500 to-red-500"
  },
];

export const SkillsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid (2x2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {allSkillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} p-0.5 mb-4`}>
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:scale-105 hover:ring-1 hover:ring-slate-400 transition-all duration-200 transform"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Optional: Other Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-xl">Other Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-1 gap-6">
                <div>
                  <h4 className="text-blue-300 font-semibold mb-3">Professional Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 hover:scale-105 hover:ring-1 hover:ring-blue-400 transition-all duration-200 transform">
                      Code Reviews
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 hover:scale-105 hover:ring-1 hover:ring-blue-400 transition-all duration-200 transform">
                      Leadership
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 hover:scale-105 hover:ring-1 hover:ring-blue-400 transition-all duration-200 transform">
                      Team Collaboration
                    </Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-300 hover:scale-105 hover:ring-1 hover:ring-blue-400 transition-all duration-200 transform">
                      Effective Communication
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

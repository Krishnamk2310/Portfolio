import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Briefcase } from "lucide-react";

const experiences = [
  {
  title: "Summer Trainee",
  organization: "Hindustan Aeronautics Limited (HAL)",
  period: "July 2025",
  type: "Industrial Training",
  description:
    "Gained hands-on exposure to aircraft and engine assembly, factory operations, and aerospace manufacturing workflows.",
  achievements: [
    "Observed aircraft and engine assembly processes",
    "Learned about production and maintenance on factory floors",
    "Collaborated with engineers across departments",
    "Studied quality control and safety protocols"
  ],
  skills: [
    "Aerospace Industry Exposure",
    "Technical Observation",
    "Workflow Understanding",
    "Team Collaboration"
  ]
}

];

const certifications = [
  {
    title: "Java Programming Fundamentals",
    issuer: "Self-Study & Practice",
    type: "Programming Language",
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "Self-Study & Practice",
    type: "Algorithms",
  },
  {
    title: "Mern Web Development",
    issuer: "Self-Study & Practice",
    type: "Development",
  },
  {
    title: "Supervised Machine Learning",
    issuer: "IBM - Coursera",
    type: "Machine Learning",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Experience & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="mr-3 h-6 w-6 text-blue-400" />
                Experience
              </h3>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-6">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-green-600/20 text-green-300 border-green-500/30"
                      >
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl">
                      {exp.title}
                    </CardTitle>
                    <CardDescription className="text-blue-300 font-medium">
                      {exp.organization}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-white font-semibold mb-2 flex items-center">
                        <Award className="mr-2 h-4 w-4 text-yellow-400" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-2">
                        Skills Applied:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="border-gray-600 text-gray-300 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="mr-3 h-6 w-6 text-purple-400" />
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <Badge
                          variant="secondary"
                          className={`${
                            cert.type === "Machine Learning"
                              ? "bg-purple-600/20 text-purple-300 border-purple-500/30"
                              : cert.type === "Development"
                              ? "bg-blue-600/20 text-blue-300 border-blue-500/30"
                              : cert.type === "Algorithms"
                              ? "bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
                              : cert.type === "Programming Language"
                              ? "bg-green-600/20 text-green-300 border-green-500/30"
                              : "bg-gray-600/20 text-gray-300 border-gray-500/30"
                          }`}
                        >
                          {cert.type}
                        </Badge>
                      </div>
                      <h4 className="text-white font-semibold text-lg mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-gray-300">{cert.issuer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

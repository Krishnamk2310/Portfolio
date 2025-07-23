import { useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ContactForm } from "@/components/ContactForm";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  const handleResumeDownload = () => {
    const driveUrl = "https://drive.google.com/file/d/1hGA5ZrR-upcM1DdA2zmN9OctNmqp3v_6/view?usp=sharing";
    const fileId = driveUrl.match(/\/d\/(.+?)\//)?.[1];
    if (fileId) {
      const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
      window.open(downloadUrl, "_blank");
    }
};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 shadow-2xl">
              <Avatar className="w-full h-full">
                <AvatarImage
                  src="/uploads/9c650909-3341-4c33-88f4-71517fa791a2.png"
                  alt="Markandey Krishna Mishra"
                  className="object-cover object-top rounded-full filter brightness-110 contrast-110"
                />
                <AvatarFallback className="bg-slate-800 text-white text-4xl font-bold">
                  MK
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Markandey Krishna Mishra
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            CODER & DEVELOPER
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <Badge
              variant="secondary"
              className="bg-blue-600/20 text-blue-300 border-blue-500/30"
            >
              Java
            </Badge>
            <Badge
              variant="secondary"
              className="bg-purple-600/20 text-purple-300 border-purple-500/30"
            >
              Web Development
            </Badge>
            <Badge
              variant="secondary"
              className="bg-green-600/20 text-green-300 border-green-500/30"
            >
              Data Structures & Algorithms
            </Badge>
            <Badge
              variant="secondary"
              className="bg-yellow-600/20 text-yellow-300 border-yellow-500/30"
            >
              Gym Enthusiast
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={handleResumeDownload}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex justify-center gap-6 mt-8"
          >
            <a
              href="https://github.com/Krishnamk2310"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/markandey-krishna-mishra"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="mailto:krishnamk2310@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-blue-300 font-semibold">
                      B.Tech - Computer Science and Engineering
                    </h3>
                    <p className="text-gray-300">CGPA: 8.4 (2022 - 2026)</p>
                  </div>
                  <div>
                    <h3 className="text-blue-300 font-semibold">
                      Vibgyor High International - XII
                    </h3>
                    <p className="text-gray-300">90% (2020 - 2021)</p>
                  </div>
                  <div>
                    <h3 className="text-blue-300 font-semibold">
                      Vibgyor High International - X
                    </h3>
                    <p className="text-gray-300">94% (2018 - 2019)</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about building efficient and scalable solutions using
                Java, Data Structures & Algorithms, and modern web technologies.
                Currently pursuing B.Tech in Computer Science with a strong
                foundation in Full Stack Development.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                A dedicated learner and fitness enthusiast, I bring discipline
                and consistency from the gym into my approach to solving complex
                technical challenges.
              </p>

              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span>Greater Noida, India</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Experience Section */}
      <div id="experience">
        <ExperienceSection />
      </div>

      {/* Contact Section */}
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;

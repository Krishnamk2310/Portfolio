import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

const projects = [
  {
  title: "DevTogether – Collaborative Coding Platform",
  description:
    "Built a full-stack collaborative coding platform enabling developers to work together in real-time. Users can create custom or auto-generated room IDs using UUIDs, copy them easily, and start coding sessions instantly. The platform supports multiple programming languages, live code editing, project management, and secure session handling.",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "Shadcn/ui",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "Monaco Editor",
    "UUID",
  ],
  year: "2025",
  type: "Web Application",
  features: [
    "Real-time collaborative code editor",
    "Create custom or auto-generated room IDs via UUID and copy them easily",
    "Presence features including online status, typing indicators, and leave room functionality",
    "Secure session management for multiple users",
    "Syntax highlighting and multi-language support (4+ languages)",
    "Embedded compiler for executing code snippets directly in the browser",
    "Modern responsive UI with Shadcn components and smooth animations",
  ],
  github: "https://github.com/Krishnamk2310/DevTogethers",
  live: "https://devstogether-2nml.onrender.com/",
},
  {
    title: "Roamly – AI Travel Planner",
    description:
      "Developed an AI-powered travel planning platform that generates personalized itineraries based on location, budget, duration, and number of travelers using Gemini AI. The system suggests hotels, places to visit, best time to travel, ticket fares, travel time between locations, and more.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Gemini AI",
      "Firebase Auth",
      "Google Maps API",
      "Google Places & Photos API",
    ],
    year: "2025",
    type: "AI Web Application",
    features: [
      "Personalized itineraries using Gemini AI",
      "Hotel and place recommendations with geo-data and pricing",
      "Best time to travel, estimated travel time, and ticket cost",
      "Google Sign-In authentication via Firebase",
      "Modern responsive UI with Shadcn components and animations",
    ],
    github: "https://github.com/Krishnamk2310/Roamly-AI-Planner",
    live: "https://roamly-ai-planner.vercel.app/",
  },
  {
    title: "SyntaxSense AI – Intelligent Code Review System",
    description:
      "Developed an AI-powered code review platform that analyzes code for quality, performance, maintainability, and security. Supports multiple languages (Java, C, C++, Python, JavaScript) with context-aware suggestions and auto-refactoring using Gemini AI.",
    technologies: [
      "React.js",
      "Gemini AI",
      "Prismjs",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Markdown",
      "rehype-highlight",
    ],
    year: "2025",
    type: "AI Web Application",
    features: [
      "Multi-language code analysis (Java, Python, JavaScript, etc.)",
      "Gemini AI integration for intelligent suggestions",
      "Syntax highlighting with Prismjs and Markdown",
      "Secure backend with Node.js/Express.js",
      "Clean, responsive UI with Tailwind CSS",
    ],
    github: "https://github.com/Krishnamk2310/SyntaxSense-AI",
    live: "https://syntaxsense-ai-frontend.onrender.com/",
  },
 {
  title: "Netflix Clone – Streaming UI with Firebase & TMDB",
  description:
    "Developed a Netflix-inspired streaming platform using React.js with Firebase Authentication and TMDB API integration. Users can securely sign up, browse categorized movie lists, and watch trailers in real time. Features include dynamic content loading, responsive UI, and route protection for authenticated users.",
  technologies: ["React.js", "Firebase", "TMDB API", "JavaScript", "CSS"],
  year: "2025",
  type: "Web Development",
  features: [
    "Firebase Authentication for secure sign-up and login",
    "Dynamic movie data and trailers from TMDB API",
    "Responsive Netflix-style UI with featured banners",
    "Category-wise movie rows (e.g., Trending, Top Rated)",
    "Trailer playback in modal using YouTube iframe",
    "Protected routes with session persistence",
  ],
  github: "https://github.com/Krishnamk2310/Netflix-clone",
  live: "https://netflix-clonemkm.vercel.app/",
},
{
  title: "Fitnesxia – Modern Gym Website",
  description:
    "Designed and developed a responsive gym website with animated UI components using React, Tailwind CSS, and Framer Motion. Features smooth transitions, hover effects, and scroll-triggered animations for an engaging user experience.",
  technologies: [
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "React Icons",
    "CSS Animations"
  ],
  year: "2025",
  type: "Web Development",
  features: [
    "Fully responsive design with animated transitions",
    "Interactive elements with hover effects (buttons, cards)",
    "Animated page transitions between routes",
    "Loading animations for better perceived performance",
    "Dynamic trainer profiles with animated social links",
    "Membership cards with pricing animation on hover",
  ],
  github: "https://github.com/Krishnamk2310/Fitnesxia",
  live: "https://fitnesxia.vercel.app/",
},
  {
    title: "Saiyans Planet",
    description:
      "Built a sleek and responsive gym website with a minimal UI focused on performance and accessibility. Integrated a BMI Calculator for users to assess fitness metrics. Implemented toast notifications for enhanced user feedback and a backend contact form that allows visitors to send emails directly to the admin.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "JavaScript",
      "Nodemailer",
    ],
    year: "2025",
    type: "Web Development",
    features: [
      "BMI Calculator integration",
      "Toast notifications",
      "Backend contact form with email support",
      "Performance-optimized and accessible UI",
    ],
    github: "https://github.com/Krishnamk2310/Saiyans_Planet",
  },
  {
    title: "Wellness - AI-Powered Disease Prediction System",
    description:
      "Engineered an AI-driven system to predict diseases based on user symptoms, providing personalized healthcare insights. Designed an interactive interface displaying disease name, suggested medications, dietary restrictions, and workout plans.",
    technologies: [
      "Python",
      "TensorFlow",
      "Scikit-Learn",
      "Flask",
      "REST API",
      "Bootstrap",
      "CSS",
      "JavaScript",
    ],
    year: "2024",
    type: "AI/ML Project",
    features: [
      "ML algorithms for predictive analytics",
      "Real-time medical data processing",
      "Interactive disease prediction interface",
      "Personalized health recommendations",
    ],
    github: "https://github.com/Krishnamk2310/WellNest",
  },
];

export const ProjectsSection = () => {
  return (
    <section className="py-20 px-4 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        project.type === "AI/ML Project"
                          ? "bg-purple-600/20 text-purple-300 border-purple-500/30"
                          : "bg-blue-600/20 text-blue-300 border-blue-500/30"
                      }`}
                    >
                      {project.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{project.year}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-sm flex items-center"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-gray-600 text-gray-300 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="bg-[#1f2937] hover:bg-[#374151] text-white border border-gray-600 rounded-lg px-4 py-2"
                      >
                        <Github className="mr-2 h-4 w-4 text-white" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

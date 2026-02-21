import { Section } from "@/components/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BrainBolt - Adaptive Quiz Platform",
    description: "Production-grade adaptive quiz platform with continuously adapting difficulty based on performance. Features real-time leaderboards, streak systems, and infinite learning.",
    tags: ["Next.js 14", "Socket.io", "PostgreSQL", "Redis", "Docker"],
    // Live demo removed as per user request
    github: "https://github.com/Krishnamk2310/BrainBolt",
    gradient: "from-violet-600/20 via-indigo-600/20 to-transparent"
  },
  {
    title: "FinDash – Smart Expense Tracker",
    description: "Modern financial management app for tracking expenses and budgets. Features JWT auth, dashboard analytics, and category-based budgeting with visualizations.",
    tags: ["React", "TypeScript", "Supabase", "Chart.js", "Node.js"],
    // Live demo removed as per user request
    github: "https://github.com/Krishnamk2310/FinDash",
    gradient: "from-emerald-500/20 via-teal-500/20 to-transparent"
  },
  {
    title: "DevTogether",
    description: "Real-time collaborative coding platform with multi-language support, presence features, and secure session management.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    link: "https://devstogether-2nml.onrender.com/",
    github: "https://github.com/Krishnamk2310/DevTogethers",
    gradient: "from-blue-500/20 via-purple-500/20 to-transparent"
  },
  {
    title: "Roamly – AI Travel Planner",
    description: "AI-powered travel planning platform generating personalized itineraries using Gemini AI and Google Maps API.",
    tags: ["React", "Gemini AI", "Firebase", "Google Maps"],
    link: "https://roamly-ai-planner.vercel.app/",
    github: "https://github.com/Krishnamk2310/Roamly-AI-Planner",
    gradient: "from-green-500/20 via-emerald-500/20 to-transparent"
  },
   {
    title: "SyntaxSense AI",
    description: "Intelligent code review system providing context-aware suggestions and auto-refactoring for multiple languages.",
    tags: ["React", "Gemini AI", "Node.js", "Tailwind"],
    link: "https://syntaxsense-ai-frontend.onrender.com/",
    github: "https://github.com/Krishnamk2310/SyntaxSense-AI",
    gradient: "from-orange-500/20 via-red-500/20 to-transparent"
  },
  {
    title: "Netflix Clone",
    description: "Streaming platform clone with Firebase Auth, TMDB API integration, and dynamic content categories.",
    tags: ["React", "Firebase", "TMDB API"],
    link: "https://netflix-clonemkm.vercel.app/",
    github: "https://github.com/Krishnamk2310/Netflix-clone",
    gradient: "from-red-600/20 via-black to-transparent"
  },
  {
    title: "Fitnesxia",
    description: "Modern gym website featuring smooth animations, trainer profiles, and interactive membership cards.",
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "https://fitnesxia.vercel.app/",
    github: "https://github.com/Krishnamk2310/Fitnesxia",
    gradient: "from-cyan-500/20 via-blue-500/20 to-transparent"
  },
  {
    title: "Saiyans Planet",
    description: "Minimalist gym website with BMI calculator, toast notifications, and backend contact form support.",
    tags: ["React", "Node.js", "Express", "Nodemailer"],
    link: "#", // No live link provided in original file for this one? Wait, original had no live link in array but maybe in code? Checking original... Steps 99. Item 6 (index 5) has github but no live link key.
    github: "https://github.com/Krishnamk2310/Saiyans_Planet",
    gradient: "from-yellow-500/20 via-orange-500/20 to-transparent"
  },
  {
    title: "WellNest",
    description: "AI-driven disease prediction system using ML algorithms to provide personalized healthcare insights.",
    tags: ["Python", "TensorFlow", "Flask", "Bootstrap"],
    link: "#", // No live link in original
    github: "https://github.com/Krishnamk2310/WellNest",
    gradient: "from-pink-500/20 via-rose-500/20 to-transparent"
  }
];

export const Projects = () => {
  return (
    <Section id="projects" className="bg-black">
      <div className="space-y-12">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-display uppercase">Selected Work</h2>
          <p className="text-zinc-400 max-w-xl text-lg">
            A collection of projects where design meets rigorous engineering.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <SpotlightCard key={index} className="h-full group">
               <div className="p-8 h-full flex flex-col relative z-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors font-display tracking-wide">{project.title}</h3>
                  <p className="text-zinc-400 mb-6 flex-grow leading-relaxed text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs text-zinc-500 border-zinc-700 bg-zinc-900/50">
                            {tag}
                        </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 mt-auto relative z-20">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center text-sm gap-2">
                        <Github size={16} /> Code
                    </a>
                    {project.link && project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors flex items-center text-sm gap-2">
                            <ExternalLink size={16} /> Live Demo
                        </a>
                    )}
                  </div>
               </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </Section>
  );
};

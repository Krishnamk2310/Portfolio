import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: User, path: "#about" },
    { name: "Projects", icon: Code, path: "#projects" },
    { name: "Experience", icon: Briefcase, path: "#experience" },
    { name: "Contact", icon: Mail, path: "#contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav
        className={cn(
          "flex items-center gap-1 p-2 rounded-full border transition-all duration-300",
          isScrolled
            ? "bg-black/50 backdrop-blur-md border-white/10 shadow-2xl shadow-purple-500/10"
            : "bg-transparent border-transparent"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.path}
            onClick={(e) => scrollToSection(e, item.path)}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white/10 flex items-center gap-2 font-display tracking-widest",
              location.hash === item.path || (item.path === "/" && !location.hash)
                ? "text-white bg-white/10 shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                : "text-zinc-400 hover:text-white"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};

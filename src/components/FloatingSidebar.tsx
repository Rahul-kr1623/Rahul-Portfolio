import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, FolderOpen, Share2, Github, Linkedin, Briefcase } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home, href: "#home" },
  { id: "about", label: "About", icon: User, href: "#about" },
  { id: "projects", label: "Projects", icon: FolderOpen, href: "#projects" }, // Projects ab upar hai
  { id: "experience", label: "Experience", icon: Briefcase, href: "#experience" }, // Experience ab neeche hai
  { id: "contact", label: "Connect", icon: Share2, href: "#contact" },
];

const socialItems = [
  {
    id: "github",
    label: "GitHub",
    icon: Github,
    href: "https://github.com/Rahul-kr1623",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/rahulkumar-web", 
  },
];

export function FloatingSidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250; // Offset for better detection
      
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section instanceof HTMLElement) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string, id: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
    setActiveSection(id);
  };

  return (
    <motion.nav
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2 py-4 px-2 rounded-2xl glass-strong shadow-xl border border-border/50"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <div key={item.id} className="relative flex items-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => scrollTo(item.href, item.id)}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`relative flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "text-body-text hover:text-accent-blue hover:bg-muted"
              }`}
            >
              <Icon className="w-4 h-4" />
            </motion.button>

            <AnimatePresence>
              {hoveredItem === item.id && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute left-12 whitespace-nowrap glass-strong px-3 py-1.5 rounded-lg text-xs font-medium text-heading pointer-events-none border border-border"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      <div className="w-6 h-px bg-border/60 my-1" />

      {socialItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.id} className="relative flex items-center">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.92 }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="flex items-center justify-center w-9 h-9 rounded-xl text-body-text hover:text-accent-blue hover:bg-muted transition-all duration-200"
            >
              <Icon className="w-4 h-4" />
            </motion.a>

            <AnimatePresence>
              {hoveredItem === item.id && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute left-12 whitespace-nowrap glass-strong px-3 py-1.5 rounded-lg text-xs font-medium text-heading pointer-events-none border border-border"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.nav>
  );
}
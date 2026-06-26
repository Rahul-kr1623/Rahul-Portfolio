import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import heroDark from "@/assets/hero-dark.jpg";
import heroLight from "@/assets/hero-light.jpg";
import { ThemeToggle } from "./ThemeToggle";
import { useEffect, useState } from "react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Text ekdum simple, grounded aur professional rakha hai
const TYPED_TEXT = "Frontend Developer";

function TypingHeadline() {
  const [displayed, setDisplayed] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Start typing after the stagger animation delay
  useEffect(() => {
    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        setCharIndex((prev) => {
          if (prev >= TYPED_TEXT.length) {
            clearInterval(interval);
            return prev;
          }
          setDisplayed(TYPED_TEXT.slice(0, prev + 1));
          return prev + 1;
        });
      }, 50); // Typing speed
      return () => clearInterval(interval);
    }, 900);
    return () => clearTimeout(startDelay);
  }, []);

  // Blink cursor; stop blinking once fully typed
  useEffect(() => {
    if (charIndex < TYPED_TEXT.length) return;
    const blink = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(blink);
  }, [charIndex]);

  // "Frontend" ko gradient aur " Developer" ko plain text banana
  const splitIndex = "Frontend".length;
  const gradientPart = displayed.slice(0, Math.min(displayed.length, splitIndex));
  const plainPart = displayed.length > splitIndex ? displayed.slice(splitIndex) : "";

  return (
    <motion.div
      variants={itemVariants}
      className="text-xl md:text-2xl font-semibold mb-6 min-h-[2rem]"
    >
      <span className="gradient-text">{gradientPart}</span>
      <span className="text-body-text">{plainPart}</span>
      {/* Blinking cursor */}
      <span
        className="inline-block w-[2px] h-[1.2em] ml-[2px] align-middle bg-accent-blue rounded-sm"
        style={{
          opacity: charIndex >= TYPED_TEXT.length ? (showCursor ? 1 : 0) : 1,
          transition: "opacity 0.1s",
        }}
      />
    </motion.div>
  );
}

export function Hero() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Background images with crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={isDark ? "dark" : "light"}
            src={isDark ? heroDark : heroLight}
            alt=""
            role="presentation"
            width={1920}
            height={1080}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div
          className="absolute inset-0"
          style={{
            background: isDark ? "rgba(10, 12, 20, 0.50)" : "rgba(255, 255, 255, 0.35)"
          }}
        />
      </div>

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-12 lg:px-20 pt-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="mono text-accent-blue text-xl md:text-2xl font-bold"
        >
          &lt;Rahul Kumar /&gt;
        </motion.div>
        <div className="flex items-center gap-3">
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden md:flex items-center gap-6 text-sm font-medium"
          >
            {["About", "Projects", "Skills", "Resume", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-800 dark:text-slate-300 font-semibold hover:text-accent-blue transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </motion.nav>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ThemeToggle />
          </motion.div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-1 items-center pl-16 md:pl-24 lg:pl-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p
            variants={itemVariants}
            className="mono text-accent-blue text-xl mb-4 tracking-widest uppercase"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold text-heading leading-tight mb-2"
          >
            Rahul Kumar
          </motion.h1>

          {/* Typing animation headline */}
          <TypingHeadline />

          {/* Personalised & Professional Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl text-slate-800 dark:text-slate-300 max-w-xl leading-relaxed mb-10"
          >
            I build digital experiences that live at the intersection of clean design and robust engineering. Currently specializing in React and modern UI architecture, with a clear roadmap to becoming a Full-Stack (MERN) Developer. I thrive on translating complex real-world problems into scalable, pixel-perfect solutions.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm glow-blue transition-all duration-200 hover:opacity-90"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-primary/30 text-accent-blue font-semibold text-sm transition-all duration-200 hover:border-primary"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/Rahul-kr1623"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-xl glass text-body-text hover:text-accent-blue transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/rahulkumar-web/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center w-10 h-10 rounded-xl glass text-body-text hover:text-accent-blue transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        aria-label="Scroll to about"
        className="relative z-10 flex flex-col items-center gap-1 pb-8 mx-auto text-body-text hover:text-accent-blue transition-colors"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
        <span className="mono text-xs tracking-widest">SCROLL</span>
      </motion.a>
    </section>
  );
}
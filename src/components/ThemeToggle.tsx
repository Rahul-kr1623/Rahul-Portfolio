import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Hydration mismatch se bachne ke liye
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-10 h-10 rounded-full glass transition-colors duration-200 hover:text-accent-blue focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-accent-blue" />
        ) : (
          <Moon className="w-4 h-4 text-accent-blue" />
        )}
      </motion.div>
    </motion.button>
  );
}
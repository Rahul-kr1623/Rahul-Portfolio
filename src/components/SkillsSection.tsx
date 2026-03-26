import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: number;
  icon: string;
}

const skills: Skill[] = [
  { name: "HTML & CSS", level: 85, icon: "🌐" },
  { name: "JavaScript", level: 75, icon: "🟨" },
  { name: "React.js", level: 65, icon: "⚛️" },
  { name: "Tailwind CSS", level: 70, icon: "🎨" },
  { name: "Next.js", level: 50, icon: "▲" }, // Naya add kiya (Realistic learning phase)
  { name: "Redux Toolkit", level: 55, icon: "🔄" }, // Naya add kiya
  { name: "Google Apps Script", level: 60, icon: "📜" }, 
  { name: "Git & GitHub", level: 70, icon: "🐙" },
];

const tools = [
  "VS Code", "Vite", "Framer Motion", "Vercel", "npm", "Responsive Design", "REST APIs"
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="glass rounded-xl p-4"
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-lg">{skill.icon}</span>
          <span className="text-sm font-semibold text-heading">{skill.name}</span>
        </div>
        <span className="mono text-xs text-accent-blue font-medium">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.07 + 0.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-card/40">
      <div className="max-w-6xl mx-auto pl-10 md:pl-16 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mono text-accent-blue text-sm tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-4">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-body-text max-w-xl leading-relaxed">
            Technologies I use to build responsive and scalable web applications, constantly expanding my stack.
          </p>
        </motion.div>

        {/* Yahan wapas lg:grid-cols-4 kar diya hai 8 items ke liye */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skills.map((skill, index) => (
            <SkillBar key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Tools & Other */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm font-semibold text-heading mb-4">Tools &amp; Ecosystem</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 + 0.4 }}
                className="mono text-xs px-3 py-1.5 rounded-lg glass border border-border text-body-text hover:text-accent-blue hover:border-primary/40 transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
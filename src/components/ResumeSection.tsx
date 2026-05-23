import { motion } from "framer-motion";
import { Download, FileText, Eye } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto pl-10 md:pl-16 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mono text-accent-blue text-sm tracking-widest uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-body-text max-w-xl leading-relaxed">
            A snapshot of my experience, skills, and achievements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Preview graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="relative"
          >
            <div className="relative bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
              {/* Simulated resume preview */}
              <div className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="h-3 w-36 bg-primary/30 rounded mb-2" />
                    <div className="h-2 w-24 bg-muted-foreground/20 rounded" />
                  </div>
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-accent-blue" />
                  </div>
                </div>
                {[80, 60, 70, 50, 65].map((w, i) => (
                  <div key={i} className="mb-3">
                    <div
                      className="h-2 bg-muted-foreground/20 rounded mb-1.5"
                      style={{ width: `${w}%` }}
                    />
                    <div className="h-1.5 bg-muted-foreground/10 rounded" style={{ width: `${w - 10}%` }} />
                  </div>
                ))}
                <div className="mt-4">
                  <div className="h-2 w-20 bg-primary/20 rounded mb-3" />
                  {[70, 85, 60].map((w, i) => (
                    <div key={i} className="flex gap-2 mb-2 items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                      <div className="h-1.5 bg-muted-foreground/15 rounded flex-1" style={{ maxWidth: `${w}%` }} />
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <div className="h-2 w-24 bg-primary/20 rounded mb-3" />
                  <div className="flex flex-wrap gap-2">
                    {[40, 55, 45, 60, 35].map((w, i) => (
                      <div key={i} className="h-5 bg-primary/10 rounded-md" style={{ width: `${w}px` }} />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Eye icon hover effect -> Yeh link click karne pe naya tab kholega */}
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-background/50 backdrop-blur-sm cursor-pointer"
              >
                <Eye className="w-8 h-8 text-accent-blue" />
              </a>
            </div>
            {/* Decorative blur */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* CTA block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold text-heading mb-4">
              Grab my latest resume
            </h3>
            <p className="text-body-text leading-relaxed mb-8">
              My resume covers my B.Tech journey at VIT Bhopal, frontend engineering
              projects, technical club roles, and achievements. Updated for 2026–27
              internship and developer roles.
            </p>

            <div className="space-y-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                href="/resume.pdf"
                download="Rahul_Kumar_Resume.pdf"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold glow-blue transition-all hover:opacity-90"
              >
                <Download className="w-5 h-5" />
                Download Resume (PDF)
              </motion.a>

              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { label: "Projects", value: "10+" },
                  { label: "Technologies", value: "8+" },
                  { label: "CGPA", value: "8.45" }, // Update this if needed!
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl py-4">
                    <p className="text-2xl font-extrabold text-accent-blue">{stat.value}</p>
                    <p className="text-xs text-body-text mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
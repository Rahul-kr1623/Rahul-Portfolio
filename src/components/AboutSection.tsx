import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const facts = [
  { label: "University", value: "VIT Bhopal" },
  { label: "Degree", value: "B.Tech CSE" },
  { label: "Batch", value: "2024–2028" },
  { label: "Focus", value: "Frontend → Full Stack" },
];

function RevealText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  const imgRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto pl-10 md:pl-16 lg:pl-24">
        
        {/* Heading moved above the grid */}
        <div className="mb-10 md:mb-14">
          <RevealText>
            <p className="mono text-accent-blue text-sm tracking-widest uppercase mb-3">About Me</p>
          </RevealText>
          <RevealText delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-heading">
              Turning ideas into{" "}
              <span className="gradient-text">digital reality</span>
            </h2>
          </RevealText>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Parallax image container */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative order-1 md:order-2"
          >
            {/* Change Here: Maine max-w-md ko hata kar max-w-lg kar diya hai */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] max-w-lg mx-auto shadow-2xl">
              <motion.img
                style={{ y }}
                src={profileImg}
                alt="Profile photograph – Rahul Kumar"
                width={600}
                height={800}
                loading="lazy"
                className="w-full h-[110%] -mt-[5%] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 md:-right-8 glass-strong rounded-xl px-4 py-3 shadow-xl"
            >
              <p className="mono text-accent-blue text-xs font-medium">Available for</p>
              <p className="text-heading font-bold text-sm">Internships & Roles</p>
            </motion.div>
          </motion.div>

          {/* Text content */}
          <div className="order-2 md:order-1">
            <RevealText delay={0.15}>
              <p className="text-base md:text-lg text-slate-800 dark:text-slate-300 leading-relaxed mb-5">
                I'm a tech-driven learner and frontend developer passionate about building intuitive, high-performance web applications. I enjoy exploring modern UI architecture and the React ecosystem, always eager to contribute my skills and grow in a challenging professional environment.
              </p>
            </RevealText>
            
            <RevealText delay={0.2}>
              <p className="text-base md:text-lg text-slate-800 dark:text-slate-300 leading-relaxed mb-5">
                Beyond writing logic, I have a keen eye for design and user interaction. I love experimenting with animations and clean layouts, blending creativity with technical precision. My ultimate goal is to build digital solutions that don't just function flawlessly—they inspire.
              </p>
            </RevealText>

            <RevealText delay={0.25}>
              <p className="text-base md:text-lg text-slate-800 dark:text-slate-300 leading-relaxed mb-8">
                Currently, I'm a 2nd-year B.Tech CSE undergrad at VIT Bhopal with hands-on experience in React, Tailwind CSS, and JavaScript. When I'm stepping away from the screen, you'll usually find me unwinding with a good game of cricket or catching up on a great movie. I am actively seeking internship opportunities to bring my skills to impactful projects.
              </p>
            </RevealText>

            {/* Fact pills */}
            <RevealText delay={0.3}>
              <div className="grid grid-cols-2 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="glass rounded-xl px-4 py-3">
                    <p className="text-xs text-body-text mb-0.5">{f.label}</p>
                    <p className="text-sm font-semibold text-heading">{f.value}</p>
                  </div>
                ))}
              </div>
            </RevealText>
          </div>
        </div>
      </div>
    </section>
  );
}
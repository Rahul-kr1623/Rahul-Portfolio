import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

// Abhi ke liye sirf ek 'Upcoming' placeholder daal diya hai
const involvements = [
  {
    icon: Sparkles,
    title: "More to come...",
    event: "Upcoming Milestones",
    description: "I am constantly learning, building, and exploring new opportunities. Watch this space for future hackathons, achievements, and community involvements!",
    color: "text-accent-blue",
    bg: "bg-primary/10 border-primary/20",
  }
];

export function RewardsSection() {
  return (
    <section id="milestones" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto pl-10 md:pl-16 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mono text-accent-blue text-sm tracking-widest uppercase mb-3">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-4">
            Milestones &amp; <span className="gradient-text">Involvements</span>
          </h2>
          <p className="text-body-text max-w-xl leading-relaxed">
            A space dedicated to my future achievements, hackathon participations, and community contributions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {involvements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`flex gap-4 p-5 rounded-2xl border glass transition-all duration-300 hover:border-primary/30 ${item.bg}`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${item.bg} border`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div>
                  <p className={`text-xs mono font-medium mb-0.5 ${item.color}`}>{item.event}</p>
                  <h3 className="text-base font-bold text-heading mb-1">{item.title}</h3>
                  <p className="text-sm text-body-text leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
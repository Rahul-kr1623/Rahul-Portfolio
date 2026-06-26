import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy } from "lucide-react";

const involvements = [
  {
    id: "vibehack",
    title: "VibeHack",
    event: "DataScience Club, VIT Bhopal",
    date: "April 8, 2026",
    description: "Built 'Ghost Protocol', an anonymous platform where users are assigned random nicknames upon entry, allowing them to freely and anonymously share posts.",
    image: "/certificates/vibehack.png",
    glowColor: "rgba(239, 68, 68, 0.4)", // light red
    hoverClass: "group-hover:shadow-[0_0px_30px_rgba(239,68,68,0.25)] group-hover:border-red-500/40",
    scaleClass: "group-hover:scale-[1.02]",
  },
  {
    id: "pydroidx",
    title: "PyDROIDX",
    event: "Android Club, VIT Bhopal",
    date: "2026",
    description: "Developed a fraud-detection email checker that analyzes email content by searching for specific keywords to identify potential phishing or scam attempts.",
    image: "/certificates/pydroidx.png",
    glowColor: "rgba(234, 179, 8, 0.4)", // golden
    hoverClass: "group-hover:shadow-[0_0px_30px_rgba(234,179,8,0.25)] group-hover:border-yellow-500/40",
    scaleClass: "group-hover:scale-[1.02]",
  },
  {
    id: "hackzero",
    title: "HackZero '26",
    event: "OWASP VIT Bhopal",
    date: "March 28-29, 2026",
    description: "Participated in a 24-hour CTF event with team 'cyber rangers'. Tackled various cybersecurity challenges and learned foundational security concepts.",
    image: "/certificates/hackzero.png",
    glowColor: "rgba(153, 27, 27, 0.4)", // dark red
    hoverClass: "group-hover:shadow-[0_0px_30px_rgba(153,27,27,0.3)] group-hover:border-red-800/50",
    scaleClass: "group-hover:scale-[1.02]",
  }
];

export function RewardsSection() {
  const [activeTab, setActiveTab] = useState<"involvements" | "achievements">("involvements");

  return (
    <section id="milestones" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto pl-10 md:pl-16 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="mono text-accent-blue text-sm tracking-widest uppercase mb-3">
            Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-4">
            Milestones &amp; <span className="gradient-text">Involvements</span>
          </h2>
          <p className="text-body-text max-w-xl leading-relaxed">
            A space dedicated to my hackathon participations, achievements, and community contributions.
          </p>
        </motion.div>

        {/* Custom Tabs */}
        <div className="w-full max-w-md mb-10 mx-auto md:mx-0 flex rounded-xl bg-primary/5 p-1 relative border border-primary/10">
          <button
            onClick={() => setActiveTab("involvements")}
            className={`flex-1 relative z-10 py-2.5 text-sm font-medium transition-colors ${
              activeTab === "involvements" ? "text-heading" : "text-body-text hover:text-heading"
            }`}
          >
            Involvements
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`flex-1 relative z-10 py-2.5 text-sm font-medium transition-colors ${
              activeTab === "achievements" ? "text-heading" : "text-body-text hover:text-heading"
            }`}
          >
            Achievements
          </button>
          
          {/* Sliding indicator */}
          <div className="absolute inset-y-1 left-1 right-1 pointer-events-none flex">
            <motion.div 
              className="w-1/2 bg-card rounded-lg shadow-sm border border-primary/20"
              animate={{ x: activeTab === "involvements" ? "0%" : "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "involvements" ? (
              <motion.div
                key="involvements"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
              >
                {involvements.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className={`group flex flex-col rounded-2xl glass border border-primary/10 overflow-hidden transition-all duration-300 ${item.scaleClass} ${item.hoverClass}`}
                  >
                    {/* Image Container */}
                    <div className="w-full aspect-[1.4] bg-primary/5 relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={`${item.title} Certificate`} 
                        className="w-full h-full object-contain bg-black/10 object-center transition-transform duration-500 group-hover:scale-[1.05]"
                      />
                      {/* Inner glow overlay on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                        style={{ backgroundColor: item.glowColor }}
                      ></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="text-xs mono font-medium text-accent-blue mb-1">{item.event}</p>
                          <h3 className="text-lg font-bold text-heading">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-body-text leading-relaxed mt-2 flex-1">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="achievements"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                  <Trophy className="w-8 h-8 text-accent-blue opacity-50" />
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">More achievements to come</h3>
                <p className="text-body-text max-w-sm">
                  I'm constantly pushing my boundaries. Check back later for future awards and recognitions!
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
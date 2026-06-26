import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

const education = [
  {
    institution: "VIT Bhopal University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "2024 – 2028",
    details: "Current CGPA: 8.45 | Core focus: Web Technologies, Data Structures, Algorithms",
    icon: GraduationCap,
  },
  {
    institution: "St. Francis School, Anpara (UP)",
    degree: "Higher Secondary (Class XII)",
    period: "2022 – 2024",
    details: "Completed higher secondary education with a strong foundation in Science and Mathematics.",
    icon: GraduationCap,
  },
  {
    institution: "St. Francis School, Anpara (UP)",
    degree: "Secondary (Class X)",
    period: "2020 – 2022",
    details: "Completed secondary education with excellent academic standing.",
    icon: GraduationCap,
  },
];

const experience = [
  {
    role: "Front End Software Intern",
    company: "GNB Motors Pvt. Ltd.",
    period: "May 2026 – Present",
    points: [
      "Architected a full-stack Role-Based Access Control (RBAC) system from scratch — backend middleware enforcing hierarchical permissions and dynamic frontend rendering that conditionally gates features by role, eliminating manual access checks across the codebase.",
      "Designed and shipped a custom geofencing system end-to-end: interactive map UI (AddZoneDrawer) for visually drawing zones, real-time backend engine monitoring vehicle positions against boundaries, and unit tests catching edge-case alert trigger bugs.",
      "Engineered an iOS-style sliding pill filter on the overview dashboard with optimized state management, enabling seamless day-change data filtering without hard page refreshes.",
      "Redesigned user onboarding into a 5-step guided flow with a 3-layer Chrome extension detection mechanism and visual FleetEdge setup guides, reducing new-user friction at first run",
      "Resolved 4+ critical UI defects including action dropdown clipping, persistent sidebar state corruption, and data-table scroll lock — each traced, root-caused, and fixed without regressions."
    ],
    icon: Briefcase,
  },
  {
    role: "Core Tech Team Member",
    company: "Gangabhumi Club – VIT Bhopal",
    period: "Sep 2025 – Present",
    points: [
      "Spearheaded frontend development for the official club website, creating a highly responsive and engaging user interface.",
      "Architected and deployed an automated QR-based ticketing system for 'Jhalak '26', streamlining event entry for hundreds of attendees.",
      "Collaborated closely with the core committee to design, build, and maintain digital assets for large-scale university events.",
    ],
    icon: Briefcase,
  }
];

function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: typeof education[0] | typeof experience[0];
  index: number;
  isLast: boolean;
}) {
  const Icon = item.icon;
  const isExperience = "role" in item;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="relative flex gap-5"
    >
      {/* Timeline line */}
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 text-accent-blue flex-shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-transparent mt-2 min-h-[40px]" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <span className="mono text-xs text-accent-blue flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {item.period}
          </span>
        </div>
        <h3 className="text-base font-bold text-heading">
          {isExperience ? (item as typeof experience[0]).role : (item as typeof education[0]).degree}
        </h3>
        <p className="text-sm text-accent-blue font-medium mb-2">
          {isExperience ? (item as typeof experience[0]).company : (item as typeof education[0]).institution}
        </p>
        {isExperience ? (
          <ul className="space-y-1">
            {(item as typeof experience[0]).points.map((pt, i) => (
              <li key={i} className="text-sm text-body-text flex gap-2">
                <span className="text-primary mt-0.5 flex-shrink-0">▸</span>
                {pt}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-body-text">{(item as typeof education[0]).details}</p>
        )}
      </div>
    </motion.div>
  );
}

export function EducationWorkSection() {
  return (
    <section id="experience" className="section-padding bg-card/40">
      <div className="max-w-6xl mx-auto pl-10 md:pl-16 lg:pl-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mono text-accent-blue text-sm tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-4">
            Education &amp; <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h3 className="text-lg font-bold text-heading mb-8 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-accent-blue" />
              Education
            </h3>
            {education.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isLast={i === education.length - 1} />
            ))}
          </div>
          <div>
            <h3 className="text-lg font-bold text-heading mb-8 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent-blue" />
              Work &amp; Roles
            </h3>
            {experience.map((item, i) => (
              <TimelineItem key={i} item={item} index={i} isLast={i === experience.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
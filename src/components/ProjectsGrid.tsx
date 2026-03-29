import { motion } from "framer-motion";
import { ProjectCard, ProjectData } from "./ProjectCard";

const projects: ProjectData[] = [
  {
    title: "Black Diamond Motors UI",
    description: "Modern UI for a Trailer Carrier Manufacturing Company",
    longDescription:
      "Developed a clean and responsive UI prototype for Black Diamond Motors, a heavy-duty trailer and carrier manufacturer. Focused on professional corporate aesthetics, product showcasing, and lead generation.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "UI/UX"], 
    image: "/projects/black-diamond.png",
    github: "https://github.com/Rahul-kr1623/Black-Diamond-Motors",
    live: "https://blackdiamondmotors.vercel.app/",
    badge: "Prototype",
    badgeColor: "bg-blue-500/20 text-blue-400 border-blue-400/20",
  },
  {
    title: "Project QLess (SaaS)",
    description: "Digital event management and QR ticketing system",
    longDescription:
      "A scalable SaaS solution designed for university clubs to manage event registrations and digital check-ins. This system was successfully implemented during the 'Jhalak '26' fest, where it seamlessly managed entries for 350+ students with automated QR generation and scanning.",
    technologies: ["React", "Tailwind CSS", "App Script", "Vite"],
    image: "/projects/qless.jpg", 
    github: "https://github.com/Rahul-kr1623/QLess-Frontend", 
    live: "https://qlessvitb.vercel.app/",
    badge: "Production",
    badgeColor: "bg-green-500/20 text-green-400 border-green-400/20",
  },
  {
    title: "Gangabhumi Official Website",
    description: "Official club website for VIT Bhopal students",
    longDescription:
      "Developed the official frontend interface for the Gangabhumi Club, a cultural hub for students from UP, Bihar, and Jharkhand. Designed a responsive layout to showcase club events, gallery, and technical initiatives.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: "/projects/gangabhumi.png",
    github: "https://github.com/Ganga-Bhumi-Club-VITB/Website",
    live: "https://gbcvitb.vercel.app/",
    badge: "Live",
    badgeColor: "bg-green-500/20 text-green-400 border-green-400/20",
  },
  {
    title: "VIT Bhopal Digital Album",
    description: "Interactive polaroid-style digital gallery",
    longDescription:
      "A nostalgic, interactive digital photo album capturing memories from campus life at VIT Bhopal. This project simulates the feeling of a physical desk scattered with polaroid photos, allowing users to drag, shuffle, and explore their memories in a unique way.",
    technologies: ["HTML", "CSS", "JavaScript"], 
    image: "/projects/digital-album.png",
    github: "https://github.com/Rahul-kr1623/VIT-Bhopal-Digital-Album",
    live: "https://digitalalbumvitb.vercel.app/",
    badge: "Creative",
    badgeColor: "bg-purple-500/20 text-purple-400 border-purple-400/20",
  },
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="section-padding bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:pl-32 lg:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="mono text-accent-blue text-sm tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-heading mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-body-text max-w-xl leading-relaxed">
            A curated selection of projects I've built — from real-world event systems to live club websites and interactive prototypes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
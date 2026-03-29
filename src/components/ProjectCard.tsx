import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

export interface ProjectData {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  github?: string;
  live?: string;
  badge?: string;
  badgeColor?: string;
}

interface ProjectCardProps {
  project: ProjectData;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative bg-surface rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/10 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />

        {project.badge && (
          <span
            className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
              project.badgeColor || "bg-primary/20 text-accent-blue"
            } backdrop-blur-sm border border-primary/20`}
          >
            {project.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold text-heading mb-2 group-hover:text-accent-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-body-text text-sm leading-relaxed mb-4 flex-1">
          {project.longDescription}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="mono text-xs px-2.5 py-1 rounded-lg bg-muted text-body-text border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="flex items-center gap-1.5 text-xs font-medium text-body-text hover:text-accent-blue transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          ) : (
            <div /> 
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${project.title} live site`}
            >
              <motion.div
                whileHover={{ x: 2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-accent-blue group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-200 shadow-sm"
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
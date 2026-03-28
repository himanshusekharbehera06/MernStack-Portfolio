import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/portfolioData";
import { ExternalLink, Github, Eye } from "lucide-react";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionTitle title="Featured Projects" subtitle="My Work" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="group glass rounded-[2rem] overflow-hidden card-hover"
            >
              <div className={`h-52 bg-gradient-to-br ${project.accent} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_25%),radial-gradient(circle_at_80%_30%,white,transparent_18%),radial-gradient(circle_at_50%_80%,white,transparent_20%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md px-6 py-4 text-center group-hover:scale-110 transition duration-500">
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">Project</p>
                    <h3 className="mt-2 text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-7">
                <p className="text-white/72 leading-8 line-clamp-4">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.tech.slice(0, 4).map((item) => (
                    <span
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-4">
                  <button onClick={() => setSelectedProject(project)} className="btn-outline">
                    <Eye size={18} className="mr-2" />
                    View Details
                  </button>
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                    <ExternalLink size={18} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
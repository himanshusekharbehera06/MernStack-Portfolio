import { X, Github, ExternalLink } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div className="glass rounded-[2rem] max-w-3xl w-full p-8 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10"
        >
          <X size={20} />
        </button>

        <div className={`h-56 rounded-[1.5rem] bg-gradient-to-br ${project.accent} mb-8`} />

        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="mt-5 text-white/75 leading-8">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
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
    </div>
  );
}
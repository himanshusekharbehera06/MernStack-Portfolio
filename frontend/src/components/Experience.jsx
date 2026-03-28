import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experience } from "../data/portfolioData";
import { BriefcaseBusiness } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionTitle title="Experience" subtitle="Training & Internship" />

        <div className="max-w-5xl mx-auto space-y-6">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="glass rounded-[2rem] p-8 sm:p-10 card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-3">
                    <BriefcaseBusiness />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <p className="mt-2 text-white/70">{exp.company}</p>
                  </div>
                </div>
                <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-8 space-y-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-white/75 leading-7">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-secondary shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
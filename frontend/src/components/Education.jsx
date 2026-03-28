import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { education } from "../data/portfolioData";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="section-container">
        <SectionTitle title="Education" subtitle="Academic Background" />

        <div className="max-w-4xl mx-auto pt-">
          {education.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="glass rounded-[2rem] p-8 sm:p-10 card-hover"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary p-3">
                    <GraduationCap />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{item.degree}</h3>
                    <p className="mt-2 text-white/70">{item.institution}</p>
                  </div>
                </div>
                <span className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  {item.year}
                </span>
              </div>

              <p className="mt-6 text-white/75 leading-8">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
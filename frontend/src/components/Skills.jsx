import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionTitle title="Skills & Technologies" subtitle="What I Use" />

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {skills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: idx * 0.08 }}
                className="glass rounded-[2rem] p-7 card-hover"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-r from-primary to-secondary p-3">
                  <Icon />
                </div>
                <h3 className="text-2xl font-bold">{skill.title}</h3>

                <div className="mt-6 flex flex-wrap gap-3">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/85 hover:bg-white/10 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
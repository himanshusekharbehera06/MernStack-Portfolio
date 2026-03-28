import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { aboutHighlights, personalInfo } from "../data/portfolioData";
import { MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionTitle title="About Me" subtitle="Who I Am" />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="glass rounded-[2rem] p-8 sm:p-10 card-hover"
          >
            <p className="text-white/75 leading-8 text-base sm:text-lg">
              {personalInfo.intro}
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <MapPin className="text-secondary mb-3" />
                <p className="text-sm text-white/60">Location</p>
                <p className="mt-1 font-semibold">{personalInfo.location}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <Mail className="text-secondary mb-3" />
                <p className="text-sm text-white/60">Email</p>
                <p className="mt-1 font-semibold break-all">{personalInfo.email}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <Phone className="text-secondary mb-3" />
                <p className="text-sm text-white/60">Phone</p>
                <p className="mt-1 font-semibold">{personalInfo.phone}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {aboutHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: idx * 0.08 }}
                  className="glass rounded-[2rem] p-6 card-hover"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-r from-primary to-secondary p-3">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-white/70 leading-7">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
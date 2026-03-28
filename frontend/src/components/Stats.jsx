import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Technologies Used", value: 15, suffix: "+" },
  { label: "Hands-on Experience", value: 1, suffix: "+" },
  { label: "Code Commits", value: 300, suffix: "+" },
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="section-container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="glass rounded-[2rem] p-8 text-center card-hover"
            >
              <h3 className="text-4xl font-black gradient-text">
                <CountUp end={item.value} duration={2.2} suffix={item.suffix} />
              </h3>
              <p className="mt-3 text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
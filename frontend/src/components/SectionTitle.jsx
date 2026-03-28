import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="mb-12 text-center"
    >
      <p className="text-sm uppercase tracking-[0.35em] text-secondary/80 mb-3">
        {subtitle}
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-primary to-secondary" />
    </motion.div>
  );
}
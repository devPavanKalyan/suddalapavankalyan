import { motion } from "framer-motion";
import Container from "../components/layout/Container";

export default function About() {
  return (
    <section
      className="flex items-center py-20 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100"
      id="about"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-8 inline-block rounded-full border border-slate-300 px-5 py-1.5 text-sm font-medium text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:text-slate-300"
          >
            About Me
          </motion.span>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-slate-100">
            I focus on building systems that scale, stay resilient, and remain
            understandable.
          </h2>

          <p className="mt-8 text-lg max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
            I am a backend-focused engineer with strong experience in Java,
            Spring Boot, and distributed system design. My work centers on
            creating clean service boundaries, event-driven architectures, and
            production-ready systems that can evolve without breaking.
          </p>

          <p className="mt-6 max-w-2xl leading-relaxed text-slate-600 dark:text-slate-300">
            I value simplicity, correctness, and long-term maintainability.
            Whether designing APIs, working with Kafka pipelines, or tuning data
            consistency, my approach is grounded in real-world system behavior,
            guided by clear principles rather than theory alone.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-3 text-sm text-slate-700 dark:text-slate-300">
            <div className="group">
              <p className="font-semibold text-slate-900 transition group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                System Design
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Scalable, fault-tolerant architectures
              </p>
            </div>

            <div className="group">
              <p className="font-semibold text-slate-900 transition group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                Backend Engineering
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Java, Spring Boot, Webflux, APIs, data layers
              </p>
            </div>

            <div className="group">
              <p className="font-semibold text-slate-900 transition group-hover:text-indigo-600 dark:text-slate-100 dark:group-hover:text-indigo-400">
                Production Mindset
              </p>
              <p className="mt-2 text-slate-500 dark:text-slate-400">
                Observability, reliability, evolution
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

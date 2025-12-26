import { motion } from "framer-motion";
import Container from "../components/layout/Container";

export default function About() {
  return (
    <section
      id="about"
      className="
        py-20
        bg-white
        text-slate-900
        dark:bg-slate-950
        dark:text-slate-100
      "
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="
              mb-8
              inline-block
              rounded-full
              border
              border-slate-300
              px-4 py-1
              text-sm
              font-medium
              text-slate-600
              dark:border-slate-700
              dark:text-slate-300
            "
          >
            About Me
          </motion.span>

          <h2
            className="
              text-3xl
              font-bold
              leading-[1.15]
              tracking-tight
              md:text-4xl
            "
          >
            I focus on building systems that scale, stay resilient, and remain
            understandable.
          </h2>

          <p
            className="
              mt-7
              text-lg
              leading-relaxed
              text-slate-600
              dark:text-slate-300
            "
          >
            I am a backend-focused engineer with strong experience in Java,
            Spring Boot, and distributed system design. My work centers on
            creating clean service boundaries, event-driven architectures, and
            production-ready systems that can evolve without breaking.
          </p>

          <p
            className="
              mt-5
              leading-relaxed
              text-slate-600
              dark:text-slate-300
            "
          >
            I value simplicity, correctness, and long-term maintainability.
            Whether designing APIs, working with Kafka pipelines, or tuning data
            consistency, my approach is always grounded in real-world system
            behavior rather than theory alone.
          </p>

          <div
            className="
              mt-10
              grid
              gap-6
              text-sm
              text-slate-600
              sm:grid-cols-3
              dark:text-slate-300
            "
          >
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                System Design
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Scalable, fault-tolerant architectures
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Backend Engineering
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Java, Spring Boot, APIs, data layers
              </p>
            </div>

            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Production Mindset
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Observability, reliability, evolution
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

import { motion } from "framer-motion";
import Container from "../components/layout/Container";

export default function Home() {
  return (
    <section className="flex items-center py-20 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-6xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            Java Backend & Full-Stack Engineer
          </motion.span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            I design and build{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              scalable
            </span>
            ,{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              fault-tolerant
            </span>{" "}
            backend systems.
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            I specialize in designing microservices-based architectures,
            distributed systems, and cloud-native applications using Java,
            Spring Boot, Kafka, Redis, and modern infrastructure practices.
          </p>

          <div className="mt-10 grid gap-6 text-sm text-slate-600 sm:grid-cols-3 dark:text-slate-300">
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Microservices
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Event-driven, loosely coupled systems
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Distributed Systems
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Kafka, Redis, consistency & resilience
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Cloud-Native
              </p>
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                Docker, AWS, production deployments
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded bg-indigo-600 px-8 py-3 font-medium text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:text-black dark:hover:bg-indigo-400"
            >
              View Projects
            </a>

            {/* <a
              href="#architecture"
              className="rounded border border-slate-300 px-8 py-3 transition hover:border-indigo-600 dark:border-slate-700 dark:hover:border-indigo-400"
            >
              Architecture Case Studies
            </a> */}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

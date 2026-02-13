import { motion } from "framer-motion";
import Container from "../components/layout/Container";

export default function Home() {
  return (
    <section className="flex items-center py-20 bg-white text-slate-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="mb-8 inline-block rounded-full border border-slate-300 px-5 py-1.5 text-sm font-medium text-slate-700 backdrop-blur-sm"
          >
            Java Backend & Full-Stack Engineer
          </motion.span>

          <h1 className="text-4xl font-extrabold tracking-tight leading-tight md:text-6xl">
            I design and build <span className="text-indigo-600">scalable</span>{" "}
            and <span className="text-indigo-600">fault-tolerant</span> backend
            systems.
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 max-w-3xl">
            I specialize in building microservices-based architectures,
            distributed systems, and cloud-native applications using Java,
            Spring Boot and resilient infrastructure practices.
          </p>

          <div className="mt-12 grid gap-8 text-sm sm:grid-cols-3">
            <div className="group">
              <p className="font-semibold text-slate-900 transition group-hover:text-indigo-600">
                Microservices
              </p>
              <p className="mt-2 text-slate-500">
                Event-driven and loosely coupled
              </p>
            </div>

            {/* <div className="group">
              <p className="font-semibold text-slate-900 transition group-hover:text-indigo-600">
                Distributed Systems
              </p>
              <p className="mt-2 text-slate-500">
                Kafka, Redis, consistency & resilience
              </p>
            </div> */}

            <div className="group">
              <p className="font-semibold text-slate-900 transition group-hover:text-indigo-600">
                Cloud-Native
              </p>
              <p className="mt-2 text-slate-500">
                Docker, AWS, production-grade
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg px-8 py-3 font-semibold text-white bg-indigo-600 shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import Container from "../../components/layout/Container";

export default function AquaSense() {
  return (
    <section className="py-20 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <header className="w-full space-y-6">
          <div className="flex flex-wrap gap-4">
            <a
              href="#background"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Background
            </a>
            <a
              href="#design"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Design Philosophy
            </a>
            <a
              href="#architecture"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Architecture
            </a>
            <a
              href="#ingestion"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Ingestion
            </a>
            <a
              href="#website"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Website
            </a>
          </div>
          <h1 className="text-6xl font-bold tracking-tight leading-tight">
            AquaSense: IoT Water Quality Monitoring Platform
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            A microservices-based IoT platform for secure ingestion, processing,
            and analysis of distributed water quality sensor data prioritizing
            correctness, resilience, and scalable domain boundaries.
          </p>
        </header>

        <main className="py-10 space-y-20">
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Event-Driven Core",
                desc: "Async ingestion and processing decoupling throughput from analytics"
              },
              {
                title: "Secure Ingestion",
                desc: "Device identity + schema validation at the edge"
              },
              {
                title: "Time-Series Storage",
                desc: "Optimized relational storage with efficient indexing"
              },
              {
                title: "Horizontal Scaling",
                desc: "Stateless services with graceful degradation"
              }
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
              >
                <p className="font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </section>

          <section id="architecture" className="space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Architecture Overview
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              Authenticated devices submit readings via API Gateway endpoints.
              Validated events flow asynchronously to processing pipelines,
              enabling independent scaling of throughput and analytics
              workloads.
            </p>

            <section className="grid gap-4 sm:grid-cols-3">
              {[
                { key: "Frontend", value: "React + TypeScript" },
                { key: "Backend", value: "Spring Boot WebFlux" },
                { key: "Database", value: "MongoDB" }
              ].map((tech) => (
                <div
                  key={tech.key}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 p-6"
                >
                  <p className="font-semibold">{tech.key}</p>
                  <p className="text-sm mt-1 text-slate-500 dark:text-slate-400">
                    {tech.value}
                  </p>
                </div>
              ))}
            </section>
          </section>

          <section id="background" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Background
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              Monitoring water across farms and industrial sites demands
              continual ingestion of pH, temperature, turbidity, and dissolved
              oxygen metrics — with burst tolerance and historical traceability.
            </p>
          </section>

          <section id="design" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Design Philosophy
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              Clear service boundaries ensure ingestion, processing, storage,
              and analytics evolve independently — prioritizing correctness and
              resilience over real-time complexity.
            </p>
          </section>

          <section id="ingestion" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Data Ingestion Flow
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Edge validation enforces structure & device identity</li>
              <li>Accepted readings published as events</li>
              <li>Downstream normalization & domain rule processing</li>
              <li>Asynchronous persistence protects ingestion latency</li>
            </ul>
          </section>

          <section id="website" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">Website</h2>
            <a
              href="https://watech.vercel.app"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 px-6 py-3 font-medium text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit AquaSense <ArrowRight size={18} />
            </a>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Closing Thoughts
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              AquaSense demonstrates secure, evolvable IoT backend design —
              event-driven services supporting correctness, scalability, and
              long-term domain growth.
            </p>
          </section>
        </main>
      </Container>
    </section>
  );
}

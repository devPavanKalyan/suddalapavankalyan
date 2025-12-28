import { ArrowRight } from "lucide-react";
import Container from "../../components/layout/Container";

export default function Metabird() {
  return (
    <section className="py-20 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <header className="w-full space-y-6">
          <div className="flex flex-wrap gap-4">
            <a
              href="#architecture"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Architecture
            </a>
            <a
              href="#workflow"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Workflow
            </a>
            <a
              href="#website"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Website
            </a>
          </div>
          <h1 className="text-6xl font-bold tracking-tight leading-tight">
            Automate Salesforce Metadata at Scale
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Reactive workflows that retrieve, validate, transform, and deploy
            metadata across multiple Salesforce orgs with predictable
            performance and full traceability.
          </p>
        </header>

        <main className="py-10 space-y-20">
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Reactive Core",
                desc: "Non-blocking execution using WebFlux & Reactor"
              },
              {
                title: "High Concurrency",
                desc: "Parallel metadata processing across orgs"
              },
              {
                title: "Secure by Design",
                desc: "OAuth + JWT with isolated workflow contexts"
              },
              {
                title: "Reliable Workflows",
                desc: "Idempotent runs with traceable deployment history"
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

          <section id="architecture" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Architecture
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              Metabird is a modular, event-driven platform built to scale
              metadata workflows with safety and efficiency.
            </p>
          </section>

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

          <section id="workflow" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Reactive Workflow Execution
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Retrieve profiles and objects concurrently</li>
              <li>Apply transformations and validations</li>
              <li>Create package artifacts and deploy</li>
              <li>Persist execution metadata for audit and recovery</li>
            </ul>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Why Metabird
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              Traditional metadata operations are sequential and error-prone.
              Metabird delivers controlled concurrency, resilient automation,
              and traceable execution.
            </p>
          </section>

          <section id="website" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">Website</h2>
            <a
              href="https://metabird.vercel.app"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 px-6 py-3 font-medium text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Metabird <ArrowRight size={18} />
            </a>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Closing Thoughts
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Real-world metadata automation becomes approachable when reactive
              execution meets secure design and workflow orchestration.
            </p>
          </section>
        </main>
      </Container>
    </section>
  );
}

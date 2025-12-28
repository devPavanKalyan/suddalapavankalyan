import { ArrowRight } from "lucide-react";
import Container from "../../components/layout/Container";

export default function Metafield() {
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
              href="#system"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              System Overview
            </a>
            <a
              href="#workflow"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Deployment Workflow
            </a>

            <a
              href="#website"
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium hover:bg-slate-100 dark:hover:bg-slate-900 active:scale-95 transition"
            >
              Website
            </a>
          </div>
          <h1 className="text-6xl font-bold tracking-tight leading-tight">
            Metafield — Salesforce Custom Object Deployment Tool
          </h1>
          <p className="max-w-4xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            A narrowly scoped automation tool for deploying Salesforce Custom
            Object metadata with precision and operational clarity —
            prioritizing explicit scope and repeatable, safe deployments.
          </p>
        </header>

        <main className="py-10 space-y-20">
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Precision Deployments",
                desc: "Deploy only selected Custom Objects — no implicit metadata"
              },
              {
                title: "Explicit Scope",
                desc: "Controlled packaging ensures predictable deployment behavior"
              },
              {
                title: "Traceability",
                desc: "MongoDB tracks execution history and deployment metadata"
              },
              {
                title: "Scalable Backend",
                desc: "Stateless Node.js supports multi-org deployments"
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

            <section className="grid gap-4 sm:grid-cols-3">
              {[
                { key: "Frontend", value: "React + TypeScript" },
                { key: "Backend", value: "Node.JS + TypeScript" },
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
              Large enterprise deployments often modify multiple metadata types,
              increasing risk and obscuring what is actually changing. Teams
              frequently need precise Custom Object deployments without ripple
              effects.
            </p>
          </section>

          <section id="design" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Design Philosophy
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              Deliberate constraints enforce safety: only Custom Object metadata
              is supported. Deployments remain explicit and predictable,
              reducing operational risk and simplifying reasoning.
            </p>
          </section>

          <section id="system" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              System Overview
            </h2>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              A React + TypeScript interface allows object selection. A Node.js
              backend packages metadata via JForce and deploys to Salesforce,
              while MongoDB preserves execution records.
            </p>
          </section>

          <section id="workflow" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Deployment Workflow
            </h2>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
              <li>Select Custom Objects in the UI</li>
              <li>Generate CustomObject XML + minimal package.xml</li>
              <li>Package and deploy using Salesforce Metadata API</li>
              <li>Persist job metadata for audit and traceability</li>
            </ul>
          </section>

          <section id="website" className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">Website</h2>
            <a
              href="https://metafie.vercel.app"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 px-6 py-3 font-medium text-white transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Metafield <ArrowRight size={18} />
            </a>
          </section>

          <section className="max-w-3xl space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight">
              Closing Thoughts
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Metafield demonstrates how focused tooling leads to safer
              deployments: explicit metadata selection, clear operational
              boundaries, and repeatable workflows reduce risk while remaining
              extensible.
            </p>
          </section>
        </main>
      </Container>
    </section>
  );
}

import Container from "../../components/layout/Container";

export default function Metabird() {
  return (
    <section className="flex items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <div className="max-w-3xl py-24">
          <span className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Case Study
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Metabird - Salesforce Metadata Automation
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Metabird is a reactive backend platform designed to automate
            Salesforce metadata workflows such as retrieval, transformation, and
            deployment across multiple organizations with strong guarantees
            around concurrency, security, and reliability.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Reactive Core
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Non-blocking execution using Spring WebFlux and Project Reactor
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                High Concurrency
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Parallel metadata processing across multiple Salesforce orgs
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Secure by Design
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                OAuth 2.0 authentication with JWT-based authorization
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-6 dark:border-slate-800">
              <p className="font-semibold text-slate-900 dark:text-slate-100">
                Reliable Workflows
              </p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Idempotent execution with traceable deployment history
              </p>
            </div>
          </div>

          <section className="mt-28 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Problem Context
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
              Salesforce metadata operations are traditionally manual,
              sequential, and error-prone. Retrieving objects, profiles, and
              permission sets does not scale well when multiple users and
              organizations are involved.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              Existing solutions often rely on blocking execution models, making
              parallel deployments inefficient and increasing the risk of
              partial failures during automation.
            </p>
          </section>

          <section className="mt-28 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Architectural Direction
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
              Metabird was designed as a fully reactive system. Metadata
              operations are modeled as asynchronous workflows rather than
              synchronous tasks, allowing the platform to scale without blocking
              threads.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              This approach enables concurrent execution across multiple
              Salesforce organizations while maintaining predictable performance
              under load.
            </p>
          </section>

          <section className="mt-28 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              System Overview
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
              The system consists of a React and TypeScript frontend for
              metadata selection and workflow initiation, backed by Spring Boot
              WebFlux services communicating with Salesforce APIs using
              non-blocking clients.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              MongoDB persists workflow state, execution metadata, and
              deployment history, enabling traceability and safe retries for
              long-running operations.
            </p>
          </section>

          <section className="mt-28 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Reactive Execution Model
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
              The backend uses Mono and Flux pipelines to orchestrate parallel
              metadata retrieval, transformation, and packaging while remaining
              backpressure-aware under high concurrency.
            </p>

            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              This model maximizes resource utilization and allows multiple
              deployments to progress independently without contention.
            </p>
          </section>

          <section className="mt-28 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Security and Isolation
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
              Salesforce access is secured using OAuth 2.0, while JWT governs
              platform-level authorization. Each workflow executes in an
              isolated context to prevent cross-tenant access or credential
              leakage.
            </p>
          </section>

          <section className="mt-28 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Scalability and Extensibility
            </h2>

            <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
              The reactive foundation enables horizontal scaling and seamless
              integration with CI/CD pipelines. The architecture can be extended
              to support event-driven orchestration or additional metadata
              domains.
            </p>
          </section>

          <section className="mt-28 max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              Closing Thoughts
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              Metabird reflects real-world backend engineering challenges where
              concurrency, security, and correctness matter. It demonstrates how
              reactive design simplifies complex automation workflows while
              remaining scalable and production-ready.
            </p>
          </section>
        </div>
      </Container>
    </section>
  );
}

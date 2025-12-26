import Container from "../../components/layout/Container";

export default function IoTEcommerce() {
  return (
    <section className="flex items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <div className="max-w-3xl py-24">
          <span className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Case Study
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Designing a Scalable IoT eCommerce Platform
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            This case study explores the design and implementation of a
            microservices-based eCommerce platform built specifically for
            purchasing IoT hardware such as sensors, gateways, and monitoring
            devices. The focus of the system is not real-time telemetry, but
            scalable discovery, comparison, and procurement of hardware at
            enterprise scale.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            The Problem
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Organizations procuring IoT hardware often rely on generic eCommerce
            platforms or platforms tightly coupled with live device telemetry.
            Generic platforms lack domain-specific capabilities, while
            telemetry-first systems introduce unnecessary complexity for teams
            that simply need to discover, compare, and purchase devices.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            These approaches blur domain boundaries, complicate scaling, and
            increase operational overhead. The challenge was to design a system
            that treats IoT hardware as a product domain, not as a data stream.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Design Philosophy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The platform was intentionally designed as a hardware-focused
            eCommerce system. Real-time ingestion, device telemetry, and
            analytics pipelines were deliberately excluded to keep service
            boundaries clear and the system easier to reason about.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            A microservices architecture was chosen to allow independent
            scaling, fault isolation, and clear ownership of business
            capabilities. Each service models a specific responsibility and
            communicates through well-defined contracts.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            System Architecture
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            At a high level, the system is composed of an API Gateway and a set
            of domain-aligned services. User identity, product catalog,
            inventory, orders, and search are all modeled as independent
            services, allowing teams to evolve them without cross-service
            coupling.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Elasticsearch powers search and filtering, while Kafka enables
            asynchronous communication between services that need to react to
            state changes without blocking user-facing workflows.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Communication Model
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The platform uses a hybrid communication model. Synchronous REST
            APIs handle user-driven interactions such as browsing and checkout,
            while Kafka is used for event-driven workflows such as order
            placement, inventory updates, and cache invalidation.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Events like ORDER_PLACED and INVENTORY_UPDATED allow services to
            remain loosely coupled while still maintaining eventual consistency
            across the system.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Caching and Data Storage
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Redis is used extensively to absorb read-heavy traffic and reduce
            database load. Product catalogs and frequently accessed search
            filters are cached using a cache-aside strategy, while hot products
            are handled using write-behind patterns.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            PostgreSQL provides transactional guarantees for orders and users,
            MongoDB enables flexible product metadata modeling, and
            Elasticsearch is optimized for search and filtering workloads.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Reliability and Security
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Resilience is achieved through retries with exponential backoff,
            circuit breakers for downstream dependencies, and idempotent Kafka
            consumers. Services degrade gracefully when caches or search systems
            are unavailable.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Security is enforced through JWT-based authentication, role-based
            authorization, and centralized access control at the API Gateway.
            Secrets are managed outside the codebase to minimize exposure.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Key Takeaways
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            This project demonstrates how careful domain modeling, clear service
            boundaries, and event-driven design can produce a scalable,
            maintainable backend system. By prioritizing clarity over feature
            creep, the platform remains easy to evolve while supporting
            real-world production workloads.
          </p>
        </div>
      </Container>
    </section>
  );
}

import Container from "../../components/layout/Container";

export default function WaterQualityMonitoringSystem() {
  return (
    <section className="flex items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <div className="max-w-3xl py-24">
          <span className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Case Study
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Water Quality Monitoring System
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            An IoT-driven backend platform designed to ingest, validate, and
            persist water quality metrics collected from distributed sensors,
            with a strong focus on data integrity, secure access, and analytical
            readiness rather than real-time visualization.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            The Problem
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Monitoring water quality across lakes, farms, or industrial sites
            requires reliable ingestion of sensor readings such as pH,
            turbidity, temperature, and dissolved oxygen. Many existing systems
            either lack proper access control or tightly couple ingestion with
            analytics, making them fragile and difficult to scale.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Inconsistent data validation, missing readings, and insecure device
            access often lead to unreliable datasets that cannot support
            long-term analysis or decision-making.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Design Philosophy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The system was intentionally designed as a backend-first data
            platform. Real-time streaming complexity was avoided in favor of
            predictable ingestion, transactional storage, and clean separation
            between data collection and analysis.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            This approach prioritizes correctness, traceability, and long-term
            data quality over low-latency dashboards.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            System Architecture
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            IoT sensors publish periodic readings to a Spring Boot backend via
            authenticated APIs. The backend validates payload structure,
            enforces access control, and persists readings in a normalized
            relational schema.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Analytical services and dashboards consume stored data through
            controlled read APIs, ensuring ingestion and analysis remain
            decoupled.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Data Ingestion & Processing
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Sensors send authenticated requests containing water quality
            metrics. Each request is validated for structure, value ranges, and
            sensor identity before being persisted.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Readings are stored in transactional batches to ensure consistency
            and to support efficient historical analysis.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Database Design
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            A relational database models sensors, locations, and time-series
            readings. Indexing strategies are optimized for historical queries
            and trend analysis while maintaining transactional guarantees for
            ingestion.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Security Model
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            JWT-based authentication secures both device and user access.
            Role-based authorization ensures that only permitted consumers can
            access monitoring and analytical endpoints.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Reliability & Data Integrity
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Sensor values are validated to prevent corrupted data from entering
            the system. Ingestion APIs are idempotent, and missing or delayed
            readings are handled gracefully to preserve dataset quality.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Scalability Considerations
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Backend services are stateless and horizontally scalable. Database
            indexing and separation of ingestion and analytics workloads allow
            the system to grow in data volume without impacting correctness.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Key Takeaways
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            This project demonstrates backend system design for IoT data
            platforms, emphasizing secure ingestion, transactional storage,
            validation pipelines, and analytical readiness. It highlights the
            importance of data integrity and access control in sensor-driven
            systems operating at scale.
          </p>
        </div>
      </Container>
    </section>
  );
}

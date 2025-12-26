import Container from "../../components/layout/Container";

export default function AquaSense() {
  return (
    <section className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <div className="max-w-3xl py-24">
          <span className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Case Study
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            AquaSense – IoT Water Quality Monitoring Platform
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            AquaSense is a microservices-based IoT platform designed to securely
            ingest, process, and analyze water quality data collected from
            distributed sensors. The system emphasizes data integrity, scalable
            ingestion pipelines, and clear separation between ingestion,
            processing, and analytics domains.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Background
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Monitoring water quality across aquaculture farms, environmental
            zones, and industrial sites requires continuous ingestion of sensor
            data such as pH, temperature, turbidity, and dissolved oxygen.
            Systems operating at this scale must handle bursty traffic, enforce
            strict validation, and preserve historical data for long-term
            analysis.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Many existing platforms tightly couple ingestion with analytics,
            making them difficult to scale independently or evolve as monitoring
            requirements grow. Device authentication and data correctness are
            often treated as secondary concerns.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Design Philosophy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            AquaSense was designed as an event-driven platform with clear
            service boundaries. Ingestion, processing, storage, and analytics
            are modeled as independent concerns, allowing each layer to scale
            and evolve without impacting the others.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            The system prioritizes correctness and resilience over real-time
            complexity, ensuring that sensor data remains trustworthy and
            traceable throughout its lifecycle.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Architecture Overview
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            At a high level, the platform is composed of an API Gateway and a
            set of domain-aligned microservices. Authentication and device
            management are handled independently from ingestion and analytics,
            enforcing strong security boundaries across the system.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Sensor readings are accepted through authenticated endpoints,
            validated at the edge, and published as events for downstream
            processing. This asynchronous model decouples ingestion throughput
            from processing and storage workloads.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Data Ingestion Flow
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Sensors push periodic readings to the ingestion service using
            authenticated APIs. Incoming payloads are validated for structure,
            value ranges, and device identity before being accepted into the
            system.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Validated readings are published as events, allowing downstream
            processors to normalize data, apply domain rules, and persist clean
            records without blocking ingestion paths.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Data Storage Strategy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Historical sensor data is stored in a relational database optimized
            for time-series access patterns. Indexing strategies support
            efficient querying across time ranges while preserving transactional
            guarantees during ingestion.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Security Model
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Security is enforced at multiple layers. Devices are validated
            before any data is accepted, users authenticate via JWT-based
            mechanisms, and the API Gateway controls access between ingestion
            and analytics services.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Scalability and Reliability
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            All services are stateless and horizontally scalable. Event-driven
            processing ensures that ingestion, validation, and analytics can
            scale independently. The system is designed to degrade gracefully
            under partial failures while preserving data integrity.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Evolution Path
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The platform is structured to support future extensions such as
            threshold-based alerting, anomaly detection, edge-side validation,
            and stronger data integrity guarantees. These capabilities can be
            added without disrupting existing ingestion or analytics workflows.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Closing Thoughts
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            AquaSense demonstrates backend engineering for real-world IoT
            systems by combining secure ingestion, event-driven microservices,
            and scalable data storage. The project reflects a product-focused
            approach where clarity, correctness, and long-term evolution are
            prioritized over short-term complexity.
          </p>
        </div>
      </Container>
    </section>
  );
}

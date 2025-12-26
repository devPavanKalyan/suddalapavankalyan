import Container from "../../components/layout/Container";

export default function Metafield() {
  return (
    <section className="flex items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <div className="max-w-3xl py-24">
          <span className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Case Study
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Metafield – Salesforce Custom Object Deployment Tool
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Metafield is a narrowly scoped automation tool built to deploy
            Salesforce Custom Object metadata with precision and safety. The
            platform focuses on controlled deployments, explicit scope
            definition, and operational clarity rather than broad, monolithic
            metadata packaging.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Background
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            In enterprise Salesforce environments, metadata deployments often
            involve large packages containing multiple object types, profiles,
            and permissions. These deployments increase the risk of unintended
            changes and make it difficult to reason about what is actually being
            modified.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Teams frequently need to deploy only specific Custom Objects without
            affecting unrelated metadata. Existing scripts and tools rarely
            provide the level of precision, visibility, and repeatability
            required for safe deployments.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Design Philosophy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Metafield was designed with deliberate constraints. Rather than
            supporting all metadata types, the tool focuses exclusively on
            Custom Object deployments. This narrow scope enables stronger safety
            guarantees and simplifies reasoning about deployment behavior.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Every deployment is explicit. Only selected objects are packaged,
            and no implicit metadata inclusion is allowed. This approach reduces
            operational risk and improves confidence during production
            deployments.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            System Overview
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The system consists of a React and TypeScript interface that allows
            users to select Custom Objects for deployment. A Node.js backend
            orchestrates packaging and deployment workflows, while JForce
            provides authenticated access to the Salesforce Metadata API.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            MongoDB persists deployment requests, execution status, and metadata
            payloads, enabling traceability and historical auditing of changes.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Deployment Workflow
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Users initiate deployments by selecting Custom Objects through the
            UI. The backend generates CustomObject XML definitions dynamically
            and constructs a corresponding package.xml that includes only the
            selected metadata.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            The metadata is packaged into a ZIP archive and deployed using the
            Salesforce Metadata API. Each step is executed explicitly, ensuring
            full visibility into what is being deployed.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Salesforce Integration
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            JForce is used to manage Salesforce authentication and Metadata API
            interactions. OAuth-based authentication secures access to
            Salesforce orgs, while API calls are isolated from request-handling
            logic to maintain clean separation of concerns.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Persistence and Traceability
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            MongoDB stores deployment metadata, execution timestamps, and status
            information. This enables teams to audit historical deployments,
            track failures, and reason about changes across environments.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Safety and Scope Control
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Deployments are strictly limited to Custom Object metadata. Fields,
            profiles, and permissions are excluded unless explicitly added in
            future extensions. This constraint ensures that deployments remain
            predictable and reduces the risk of accidental overwrites.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Scalability
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The Node.js backend is stateless and supports horizontal scaling.
            The system is designed to handle deployments across multiple
            Salesforce orgs, while remaining intentionally limited in scope to
            preserve reliability and clarity.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Closing Thoughts
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Metafield demonstrates how constrained tooling can be more effective
            than generalized automation. By prioritizing precision, visibility,
            and controlled scope, the platform delivers safer Salesforce
            deployments while remaining simple to reason about and extend.
          </p>
        </div>
      </Container>
    </section>
  );
}

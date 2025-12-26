import Container from "../../components/layout/Container";

export default function CMS() {
  return (
    <section className="flex items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <div className="max-w-3xl py-24">
          <span className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Case Study
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            College Management System
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            A role-based academic management platform designed to handle
            students, faculty, librarians, and administrators with a strong
            emphasis on concurrency safety, approval workflows, and
            transactional correctness under concurrent usage.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            The Problem
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Educational institutions operate across multiple tightly connected
            domains such as academics, library operations, and administration.
            Many existing systems struggle with poor role separation, unsafe
            concurrent access, and tightly coupled business logic that becomes
            fragile under real-world load.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Race conditions during approvals, inconsistent inventory state, and
            unclear ownership of responsibilities are common failure points that
            limit scalability and long-term maintainability.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            Design Philosophy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The system was designed with correctness as the primary constraint.
            Clear role boundaries were enforced, shared resources were treated
            as critical sections, and business logic was isolated within the
            service layer to prevent accidental coupling.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            The goal was not feature density, but predictable behavior under
            concurrent access and clean separation of responsibilities.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            User Roles
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Each role operates within strictly defined permissions. Students
            manage course enrollment and submit book requests. Faculty handle
            academic content and evaluations. Librarians control inventory and
            approval workflows, while administrators oversee system-wide user
            management and policy enforcement.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            System Architecture
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The application is implemented as a Spring Boot monolith using a
            layered architecture. Controllers handle request validation,
            services encapsulate business logic, and repositories manage
            persistence.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Authentication and authorization are centralized, ensuring
            consistent enforcement of security policies across all domains.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            Concurrency Handling
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Shared resources such as book inventory and approval queues are
            protected using synchronization mechanisms and controlled execution
            paths. This prevents duplicate approvals and inconsistent state when
            multiple requests are processed in parallel.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Parallel workflows are executed safely using executor services, with
            careful coordination of critical sections to preserve correctness.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            Database Design
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            A normalized relational schema models academic entities and their
            relationships. Foreign key constraints enforce referential
            integrity, while transactional boundaries ensure atomic updates for
            approvals and inventory changes.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            Security Model
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Role-based authorization is enforced at the service layer, ensuring
            that only permitted operations can be executed. Every protected
            action requires authentication, and request ownership is validated
            before processing.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            Scalability Considerations
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The system is suitable for small to medium institutional
            deployments. While horizontal scaling is limited by the monolithic
            structure, the design provides a strong foundation for future
            microservices extraction.
          </p>

          <h2 className="mt-10 text-2xl font-semibold tracking-tight">
            Key Takeaways
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            This project demonstrates core backend engineering principles valued
            by product-based companies: role-aware system design, safe
            concurrency handling, transactional consistency, and disciplined
            service-layer architecture built for correctness before scale.
          </p>
        </div>
      </Container>
    </section>
  );
}

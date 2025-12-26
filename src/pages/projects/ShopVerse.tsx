import Container from "../../components/layout/Container";

export default function ShopVerse() {
  return (
    <section className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <div className="max-w-3xl py-24">
          <span className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Case Study
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            ShopVerse – eCommerce Backend Platform
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            ShopVerse is a backend-focused eCommerce platform designed to handle
            user authentication, product catalogs, cart workflows, and order
            processing with strong transactional guarantees and secure access
            control. The system prioritizes correctness, domain clarity, and
            predictable behavior under concurrent usage.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Background
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            eCommerce backends must coordinate multiple user-driven workflows
            such as cart updates, inventory checks, and order placement while
            preserving data consistency. Poorly designed systems often mix
            responsibilities across layers, leading to race conditions,
            inconsistent orders, and authorization gaps.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            These issues become especially visible under concurrent access,
            where small timing differences can result in duplicated orders,
            stale cart state, or unauthorized data exposure.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Design Philosophy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            ShopVerse was built as a clean, backend-only platform with explicit
            domain boundaries. Each core concern is modeled independently, and
            all state transitions are enforced through transactional service
            logic rather than implicit behavior.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            The system favors clarity and correctness over premature
            distribution, making it easy to reason about behavior while
            remaining extensible for future architectural evolution.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Backend Architecture
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The backend is implemented using Spring Boot and follows a layered
            architecture separating controllers, services, and repositories.
            Request handling remains stateless, while business rules and
            transactional logic are enforced at the service layer.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            User management, product catalog, cart lifecycle, and order
            processing are modeled as distinct domains, reducing coupling and
            improving maintainability.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Authentication and Authorization
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Authentication is handled using JWT-based mechanisms, ensuring that
            each request is scoped to an authenticated user. Authorization
            checks are enforced at the service layer to prevent unauthorized
            access to domain operations.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Internal domain data is never exposed directly, and all APIs are
            designed to operate within clearly defined user boundaries.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Data Modeling and Transactions
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The platform uses a relational data model to represent users,
            products, carts, and orders. Foreign key constraints enforce
            referential integrity, while indexed queries support efficient
            access patterns.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Order placement is wrapped in explicit transactional boundaries to
            prevent partial or duplicate orders, ensuring deterministic behavior
            even under concurrent checkout scenarios.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Consistency and Reliability
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Cart state is validated before checkout to ensure pricing and
            availability remain consistent. Backend logic prevents duplicate
            submissions and enforces idempotent behavior where required.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Scalability Strategy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Services are stateless, allowing horizontal scaling behind load
            balancers. The architecture provides a clear path for evolving
            toward microservices by extracting domains such as catalog or order
            processing when scaling demands increase.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Closing Thoughts
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            ShopVerse demonstrates strong backend engineering fundamentals
            through secure API design, transactional consistency, and clean
            domain modeling. It reflects a product-minded approach where
            correctness and clarity form the foundation for scalable system
            evolution.
          </p>
        </div>
      </Container>
    </section>
  );
}

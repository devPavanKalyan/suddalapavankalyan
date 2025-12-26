import Container from "../../components/layout/Container";

export default function MicrosoftToDoClone() {
  return (
    <section className="flex items-center bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <div className="max-w-3xl py-24">
          <span className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
            Case Study
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
            Do-It-Now – Task Management Platform
          </h1>

          <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Do-It-Now is a Microsoft To Do–inspired task management application
            designed to emphasize predictable state management, clear domain
            modeling, and an evolutionary backend architecture. The focus of the
            system is correctness, clarity, and long-term maintainability rather
            than feature density.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Background
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Task management systems appear simple on the surface but quickly
            become complex as features such as ordering, filtering, completion
            state, and prioritization are introduced. Many implementations blur
            the boundary between UI logic and state mutation, making behavior
            difficult to reason about as the system grows.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            As a result, small changes often introduce subtle bugs, inconsistent
            task ordering, or broken user intent, especially when state is
            mutated in multiple places.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Design Philosophy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            This project was designed as a disciplined baseline for task
            management. The guiding principle was to make all state transitions
            explicit, predictable, and traceable while keeping the domain model
            simple and expressive.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Rather than optimizing prematurely for scale, the system prioritizes
            correctness and clarity, with a clear path for future architectural
            evolution.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Frontend Architecture
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The frontend is built with React and TypeScript, using Redux as a
            single source of truth for task state. All task mutations flow
            through well-defined actions and reducers, ensuring deterministic
            behavior across the application.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            UI components are kept focused on presentation, while state logic is
            centralized, making the system easier to debug and extend.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Core Functionality
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Users can create, update, and delete tasks, manage completion state,
            assign due dates, and mark tasks by importance. Task ordering and
            filtering are handled consistently to preserve user intent across
            interactions.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Backend Design
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The backend is implemented as a monolithic service with clear
            separation between controllers, services, and repositories. This
            layered design enforces clean boundaries and prevents leakage of
            business logic into transport or persistence layers.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            The system is intentionally designed as a monolith to keep
            complexity low while providing a strong foundation for future
            distribution.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Data Modeling
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            Tasks are modeled using a normalized relational schema with
            constraints to ensure data integrity. Indexing strategies support
            efficient listing, filtering, and ordering of tasks while remaining
            flexible for future extensions such as reminders or labels.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Evolution Strategy
          </h2>

          <p className="mt-6 leading-relaxed text-slate-600 dark:text-slate-300">
            The system follows an evolutionary architecture approach. It starts
            as a simple, correct monolith and identifies bounded contexts
            through real usage patterns before extracting functionality into
            microservices when necessary.
          </p>

          <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
            This strategy minimizes premature complexity while preserving data
            consistency during future migrations.
          </p>

          <h2 className="mt-20 text-2xl font-semibold tracking-tight">
            Closing Thoughts
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Do-It-Now demonstrates disciplined system design by focusing on
            predictable state management, clean layering, and pragmatic growth.
            It reflects a product-minded approach where simplicity, correctness,
            and clarity take precedence over unnecessary architectural
            complexity.
          </p>
        </div>
      </Container>
    </section>
  );
}

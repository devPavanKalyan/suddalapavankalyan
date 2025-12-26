import Container from "./Container";

export default function Navbar() {
  return (
    <nav
      className="
        py-3
        sticky
        top-0
        z-50
        border-b
        border-slate-200
        bg-white
        backdrop-blur
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <span className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Suddala Pavan Kalyan
          </span>

          <div className="flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            <a
              href="#about"
              className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              About
            </a>
            <a
              href="#skills"
              className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Projects
            </a>
            <a
              href="#links"
              className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              Links
            </a>
          </div>
        </div>
      </Container>
    </nav>
  );
}

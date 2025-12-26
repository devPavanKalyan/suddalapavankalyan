import { useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white backdrop-blur dark:border-slate-800 dark:bg-slate-950">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Suddala Pavan Kalyan
          </span>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-slate-300 p-2 text-slate-700 dark:border-slate-700 dark:text-slate-200"
            aria-label="Toggle navigation"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
            <NavLinks />
          </div>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 py-4 dark:border-slate-800">
            <div className="flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300">
              <NavLinks onClick={() => setOpen(false)} />
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}

function NavLinks({ onClick }: { onClick?: () => void }) {
  return (
    <>
      <a
        href="#about"
        onClick={onClick}
        className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        About
      </a>
      <a
        href="#skills"
        onClick={onClick}
        className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={onClick}
        className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Projects
      </a>
      <a
        href="#links"
        onClick={onClick}
        className="transition hover:text-indigo-600 dark:hover:text-indigo-400"
      >
        Links
      </a>
    </>
  );
}

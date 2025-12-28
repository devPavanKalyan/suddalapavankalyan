import { Github, Linkedin, Mail } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer
      id="links"
      className="
        py-14
        border-t
        border-slate-300 bg-white
        dark:border-slate-700 dark:bg-slate-950
        dark:shadow-[0_-2px_12px_rgba(0,0,0,0.35)]
      "
    >
      <Container>
        <div className="pb-14 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2
              className="
                text-2xl font-bold tracking-tight
                text-slate-900 dark:text-slate-100
              "
            >
              Suddala Pavan Kalyan
            </h2>

            <p className="mt-2 text-base font-medium text-slate-700 dark:text-slate-300">
              Java Backend & Full-Stack Engineer
            </p>

            <p
              className="
                mt-5 max-w-md text-sm leading-relaxed
                text-slate-600 dark:text-slate-400
              "
            >
              Crafting scalable, fault-tolerant backend systems with a focus on
              performance, reliability, and clean architecture.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end font-medium">
            <a
              href="mailto:suddalapavankalyan.sp@gmail.com"
              className="
                flex items-center gap-2
                text-slate-700 hover:text-indigo-600
                dark:text-slate-300 dark:hover:text-indigo-400
                transition-colors
              "
            >
              <Mail size={18} /> Email
            </a>

            <a
              href="https://www.linkedin.com/in/suddalapavankalyan"
              rel="noopener noreferrer"
              target="_blank"
              className="
                flex items-center gap-2
                text-slate-700 hover:text-indigo-600
                dark:text-slate-300 dark:hover:text-indigo-400
                transition-colors
              "
            >
              <Linkedin size={18} /> LinkedIn
            </a>

            <a
              href="https://github.com/devPavanKalyan"
              rel="noopener noreferrer"
              target="_blank"
              className="
                flex items-center gap-2
                text-slate-700 hover:text-indigo-600
                dark:text-slate-300 dark:hover:text-indigo-400
                transition-colors
              "
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>

        <div
          className="
            border-t border-slate-300 dark:border-slate-700
            pt-6 mt-8
            flex justify-between text-xs font-medium
            text-slate-600 dark:text-slate-400
          "
        >
          <p>© {new Date().getFullYear()} Pavan Kalyan. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

import { Github, Linkedin, Mail } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  return (
    <footer
      id="links"
      className="
        py-14
        border-t
        border-slate-300
        bg-white
      "
    >
      <Container>
        <div className="pb-14 grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Suddala Pavan Kalyan
            </h2>

            <p className="mt-2 text-base font-medium text-slate-700">
              Java Backend & Full-Stack Engineer
            </p>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-600">
              Crafting scalable, fault-tolerant backend systems with a focus on
              performance, reliability, and clean architecture.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm md:items-end font-medium">
            <a
              href="mailto:suddalapavankalyan.ps@gmail.com"
              className="
                flex items-center gap-2
                text-slate-700 hover:text-indigo-600
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
                transition-colors
              "
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/pavankalyan-verse"
              rel="noopener noreferrer"
              target="_blank"
              className="
                flex items-center gap-2
                text-slate-700 hover:text-indigo-600
                transition-colors
              "
            >
              <Github size={18} />
              GitHub - Production Projects
            </a>
            <a
              href="https://github.com/devPavanKalyan"
              rel="noopener noreferrer"
              target="_blank"
              className="
                flex items-center gap-2
                text-slate-700 hover:text-indigo-600
                transition-colors
              "
            >
              <Github size={18} />
              GitHub - R&D / Experiments / Legacy / Older projects
            </a>

            <a
              href="https://github.com/suddalapavankalyan"
              rel="noopener noreferrer"
              target="_blank"
              className="
                flex items-center gap-2
                text-slate-700 hover:text-indigo-600
                transition-colors
              "
            >
              <Github size={18} /> GitHub - AI/ML beginner projects (learning &
              experimenting)
            </a>
          </div>
        </div>

        <div className="border-t border-slate-300 pt-6 mt-8 flex justify-between text-xs font-medium text-slate-600">
          <p>© {new Date().getFullYear()} Pavan Kalyan. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

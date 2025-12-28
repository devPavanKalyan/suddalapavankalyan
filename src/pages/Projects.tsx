import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import Card from "../components/ui/Card";
import SectionTitle from "../components/ui/SectionTitle";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-20
        bg-white
        text-slate-900
        dark:bg-slate-950 dark:text-slate-100
      "
    >
      <Container>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-8 inline-block rounded-full border border-slate-300 px-5 py-1.5 text-sm font-medium text-slate-700 backdrop-blur-sm dark:border-slate-700 dark:text-slate-300"
        >
          My Projects
        </motion.span>
        <SectionTitle title="Projects" />

        <p
          className="
            mb-20
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
            dark:text-slate-400
          "
        >
          A collection of projects shaped by real backend challenges —
          distributed systems, scalability, and production-ready design. Every
          build shows the trade-offs that actually matter in the real world, the
          constraints you bump into along the way, and the decisions that make
          systems reliable when it counts.
        </p>

        <div className="columns-1 md:columns-2 gap-6 [column-fill:_balance] space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="break-inside-avoid"
            >
              <Card
                className="
                  relative
                  rounded-xl
                  bg-white
                  p-8
                  border border-slate-200
                  shadow-sm
                  transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  hover:border-indigo-500/50
                  dark:bg-slate-900
                  dark:border-slate-800
                  dark:hover:border-indigo-400/70
                "
              >
                {project.isFlagship && (
                  <span
                    className="
                      absolute
                      right-6 top-6
                      rounded-full
                      bg-indigo-600 text-white
                      dark:bg-indigo-500 dark:text-black
                      px-3 py-1 text-xs font-semibold
                    "
                  >
                    Flagship
                  </span>
                )}

                <h3
                  className="
                    text-2xl
                    font-semibold
                    tracking-tight
                    text-slate-900
                    dark:text-slate-100
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    leading-relaxed
                    text-slate-600
                    dark:text-slate-400
                  "
                >
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        border border-slate-300/80
                        bg-white
                        px-3 py-1.5
                        text-xs font-semibold
                        text-slate-800
                        shadow-sm
                        transition
                        hover:bg-indigo-600 hover:text-white hover:border-indigo-600

                        dark:bg-slate-800/70
                        dark:text-slate-300
                        dark:border-none
                        dark:shadow-sm
                        dark:hover:bg-indigo-500 dark:hover:text-black
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.live || project.href || project.github) && (
                  <div
                    className="
                      mt-8
                      flex items-center gap-8
                      text-sm font-medium
                    "
                  >
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          text-indigo-600 transition-colors
                          hover:text-indigo-700
                          dark:text-indigo-400 dark:hover:text-indigo-300
                        "
                      >
                        Website
                      </a>
                    )}
                    {project.href && (
                      <a
                        href={project.href}
                        className="
                          text-indigo-600 transition-colors
                          hover:text-indigo-700
                          dark:text-indigo-400 dark:hover:text-indigo-300
                        "
                      >
                        Case Study
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          text-indigo-600 transition-colors
                          hover:text-indigo-700
                          dark:text-indigo-400 dark:hover:text-indigo-300
                        "
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

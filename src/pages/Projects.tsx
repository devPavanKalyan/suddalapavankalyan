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
        py-24
        bg-white
        text-slate-900
        dark:bg-slate-950
        dark:text-slate-100
      "
    >
      <Container>
        <SectionTitle title="Projects" />

        <p
          className="
            mb-16
            max-w-3xl
            text-lg
            leading-relaxed
            text-slate-600
            dark:text-slate-400
          "
        >
          A curated body of work focused on backend engineering, distributed
          systems, and production-grade architecture. Each project reflects
          deliberate trade-offs, scalability considerations, and real-world
          constraints.
        </p>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
            >
              <Card
                className="
                    group
                    relative
                    bg-white
                    border
                    border-gray-200
                    p-7
                    dark:bg-slate-950
                    dark:border-slate-800
                    
                    /* Animation Logic */
                    transition-transform 
                    duration-300 
                    ease-in-out 
                    hover:scale-105
                    dark:hover:border-indigo-500
                "
              >
                {project.isFlagship && (
                  <span
                    className="
                      absolute
                      right-6
                      top-6
                      rounded-full
                      bg-indigo-50
                      px-3 py-1
                      text-xs
                      font-medium
                      text-indigo-600
                      dark:bg-indigo-500/10
                      dark:text-indigo-400
                    "
                  >
                    Flagship
                  </span>
                )}

                <h3
                  className="
                    text-xl
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

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        rounded-md
                        border
                        border-slate-300
                        bg-slate-100
                        px-2.5 py-1
                        text-xs
                        font-medium
                        text-slate-700
                        dark:border-slate-700
                        dark:bg-slate-800
                        dark:text-slate-300
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
                        flex
                        items-center
                        gap-8
                        text-sm
                        font-medium
                    "
                  >
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            text-indigo-600
                            transition-colors
                            hover:text-indigo-700
                            dark:text-indigo-400
                            dark:hover:text-indigo-300
                        "
                      >
                        Website
                      </a>
                    )}

                    {project.href && (
                      <a
                        href={project.href}
                        className="
                            text-indigo-600
                            transition-colors
                            hover:text-indigo-700
                            dark:text-indigo-400
                            dark:hover:text-indigo-300
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
                            text-indigo-600
                            transition-colors
                            hover:text-indigo-700
                            dark:text-indigo-400
                            dark:hover:text-indigo-300
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

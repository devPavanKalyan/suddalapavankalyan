import { motion } from "framer-motion";
import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
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
          My Skills
        </motion.span>
        <SectionTitle title="Skills" />

        <div className="max-w-5xl space-y-16">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="group">
              <h3
                className="
                  text-2xl font-semibold tracking-tight
                  text-indigo-600 dark:text-indigo-400
                "
              >
                {category}
              </h3>

              <div
                className="
                  mt-3 h-[2px] w-28
                  bg-indigo-500/60 dark:bg-indigo-400/60
                  transition-all duration-300
                  group-hover:w-40
                "
              />

              <div className="mt-6 flex flex-wrap gap-3">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="
                      inline-block rounded-lg
                      bg-white px-4 py-1.5
                      text-sm font-medium text-slate-700
                      shadow-sm backdrop-blur
                      transition
                      hover:bg-indigo-600 hover:text-white
                      dark:bg-slate-800 dark:text-slate-300
                      dark:hover:bg-indigo-500 dark:hover:text-black
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

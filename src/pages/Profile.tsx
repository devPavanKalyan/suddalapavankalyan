import { motion } from "framer-motion";
import Container from "../components/layout/Container";

export default function Profile() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl flex flex-col md:flex-row justify-between gap-12 md:gap-20"
        >
          {/* Left Content */}
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-8 inline-block rounded-full border border-slate-300 px-4 py-1 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300"
            >
              UI/UX Designer
            </motion.span>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              Hi, I'm{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-indigo-600 dark:text-indigo-400"
              >
                Your Name
              </motion.span>
              <br />
              From India
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-slate-600 dark:text-slate-300 max-w-xl">
              I design intuitive, clean and meaningful user experiences for
              modern digital products. Passionate about design systems,
              accessibility and smooth interactions.
            </p>

            <div className="mt-14 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded bg-indigo-600 px-8 py-3 font-medium text-white transition hover:bg-indigo-700 dark:bg-indigo-500 dark:text-black dark:hover:bg-indigo-400"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

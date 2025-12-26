import Container from "./Container";

export default function Footer() {
  return (
    <footer
      id="links"
      className="
        border-t
        border-slate-200
        bg-white
        dark:border-slate-800
        dark:bg-slate-950
      "
    >
      <Container>
        <div
          className="
            py-12
            grid
            gap-10
            md:grid-cols-2
            md:items-center
          "
        >
          <div>
            <p
              className="
                text-base
                font-semibold
                tracking-tight
                text-slate-900
                dark:text-slate-100
              "
            >
              Suddala Pavan Kalyan
            </p>

            <p
              className="
                mt-2
                text-sm
                text-slate-600
                dark:text-slate-400
              "
            >
              Backend & Distributed Systems Engineer
            </p>
          </div>

          <div
            className="
              flex
              flex-col
              gap-3
              text-sm
              md:items-end
            "
          >
            <a
              href="mailto:suddalapavankalyan.sp@gmail.com"
              className="
                text-slate-600
                transition
                hover:text-indigo-600
                dark:text-slate-400
                dark:hover:text-indigo-400
              "
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/suddalapavankalyan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-slate-600
                transition
                hover:text-indigo-600
                dark:text-slate-400
                dark:hover:text-indigo-400
              "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/devPavanKalyan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-slate-600
                transition
                hover:text-indigo-600
                dark:text-slate-400
                dark:hover:text-indigo-400
              "
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

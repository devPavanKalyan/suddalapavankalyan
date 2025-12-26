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
        dark:bg-slate-950
        dark:text-slate-100
      "
    >
      <Container>
        <SectionTitle title="Skills" />

        <div className="max-w-3xl space-y-16">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category}>
              <h3
                className="
                  text-xl
                  font-semibold
                  leading-tight
                  tracking-tight
                  text-slate-900
                  dark:text-slate-100
                "
              >
                {category}
              </h3>

              <div className="mt-3 h-px w-20 bg-slate-300 dark:bg-slate-700" />

              <p
                className="
                  mt-6
                  text-lg
                  leading-relaxed
                  text-slate-600
                  dark:text-slate-300
                "
              >
                {list.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function Architecture() {
  return (
    <section id="architecture" className="py-24">
      <Container>
        <SectionTitle title="Architecture" />
        <p className="text-slate-300 max-w-4xl">
          My systems are designed using microservices architecture with
          event-driven communication via Kafka, Redis-based caching strategies,
          and clear data ownership boundaries.
        </p>
      </Container>
    </section>
  );
}

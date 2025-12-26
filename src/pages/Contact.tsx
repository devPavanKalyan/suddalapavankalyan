import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <SectionTitle title="Contact" />
        <p className="text-slate-300">Email: pavankalyan@example.com</p>
      </Container>
    </section>
  );
}

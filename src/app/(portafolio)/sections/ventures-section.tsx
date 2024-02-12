import ListVentures from "@/components/list-ventures";
import Container from "@/components/ui-portafolio/container";
import Title from "@/components/ui-portafolio/title";

const VenturesSection = () => {
  return (
    <section id="ventures" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Ventures" />
        <ListVentures />
      </Container>
    </section>
  );
};

export default VenturesSection;

import ListFeaturedWork from "@/components/list-featured-work";
import Container from "@/components/ui-portafolio/container";
import Title from "@/components/ui-portafolio/title";

const PageWork = () => {
  return (
    <Container>
      <Title title="Work" />
      <ListFeaturedWork />
    </Container>
  );
};

export default PageWork;

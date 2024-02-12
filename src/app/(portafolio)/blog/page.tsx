import ListBlog from "@/components/list-blog";
import Container from "@/components/ui-portafolio/container";
import Title from "@/components/ui-portafolio/title";

const BlogPage = () => {
  return (
    <main className="pb-10 border-b border-gray-500/30">
      <Container>
        <Title title="Blog" />
        <ListBlog />
      </Container>
    </main>
  );
};

export default BlogPage;

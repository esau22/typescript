"use client";
import ListBlog from "@/components/list-blog";
import Button from "@/components/ui-portafolio/button-2";
import Container from "@/components/ui-portafolio/container";
import Title from "@/components/ui-portafolio/title";
import { useRouter } from "next/navigation";

const BlogSection = () => {
  const router = useRouter();
  return (
    <section id="ventures" className="border-b border-gray-500/30 py-10">
      <Container>
        <Title title="Blog" />
        <ListBlog />
        <Button label="View All Post" onClick={() => router.push("/blog")} />
      </Container>
    </section>
  );
};

export default BlogSection;

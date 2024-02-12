import Container from "@/components/ui-portafolio/container";
import Title from "@/components/ui-portafolio/title";
import Form from "./components/form";

const ContactPage = () => {
  return (
    <main className="pb-10 border-b border-gray-500/30">
      <Container>
        <Title title="Let's Chat" />
        <p className="text-gray-500 mb-10">
          If youd like to talk about a potential project or just say hi, send me
          a message or email me at{" "}
          <span className="text-white">emr.emr@gmail.com</span>
        </p>
        <Form />
      </Container>
    </main>
  );
};

export default ContactPage;

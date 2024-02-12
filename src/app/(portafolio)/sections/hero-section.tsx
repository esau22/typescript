import { information } from "@/assets/data";
import ButtonSocialMedia from "@/components/ui-portafolio/button-social-media";
import Container from "@/components/ui-portafolio/container";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="border-b border-gray-500/30 py-10">
      <Container>
        <div className="space-y-10">
          <div className="relative w-24 h-24">
            <Image
              src={information.photo}
              alt="Image"
              fill
              className="object-cover rounded-xl grayscale"
            />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl text-white mb-5">
              Hey, I'm Jacson -I'm a Product Designer & Nc-Code Expert
            </h1>
            <p className="text-gray-500">{information.about}</p>
          </div>
          <div className="flex items-center gap-4">
            {information.socialMedia.map((social) => (
              <ButtonSocialMedia
                key={social.href}
                href={social.href}
                icon={social.icon}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;

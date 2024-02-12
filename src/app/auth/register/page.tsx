import Logo from "@/components/shared-auth/logo";
import Form from "../register/components/form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register | Auth",
  description: "Register | Auth",
};

export default function Register() {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <Logo />
      <Form />
    </section>
  );
}

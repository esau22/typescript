import Logo from "@/components/shared-auth/logo";
import Form from "./components/form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Auth",
  description: "Login | Auth",
};
export default function Login() {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <Logo />
      <Form />
    </section>
  );
}

import Logo from "@/components/shared-auth/logo";
import Form from "../forgot-password/components/form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | Auth",
  description: "Forgot Password | Auth",
};

export default function ForgotPassword() {
  return (
    <section className="h-full flex flex-col items-center justify-center">
      <Logo />
      <Form />
    </section>
  );
}

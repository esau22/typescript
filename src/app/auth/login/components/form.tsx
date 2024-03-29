"use client";
import Button from "@/components/ui-auth/button";
import ButtonIcon from "@/components/ui-auth/button-icon";
import Input from "@/components/ui-auth/input";
import { useRouter } from "next/navigation";
import { RiFacebookFill, RiGithubFill, RiGoogleFill } from "react-icons/ri";

const Form = () => {
  const router = useRouter();
  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-2xl font-semibold">Welcome, Back!</h2>
        <p className="text-gray-500 text-sm">
          Please enter your email and password to enter aplycation
        </p>
      </div>
      <form action="" className="w-full">
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <div className="flex justify-end mb-5">
          <button
            type="button"
            onClick={() => router.push("/auth/forgot-password")}
            className="text-gray-500 hover:text-primary transition-colors duration-300"
          >
            forgat password?
          </button>
        </div>
        <Button type="submit" label="Login" />
        <div className="mt-5 mb-10 flex items-center justify-center gap-x-2">
          <p className="text-gray-500">Don't have Account</p>
          <button
            type="button"
            onClick={() => router.push("/auth/register")}
            className="font-semibold hover:text-primary transition-color duration-300"
          >
            Register
          </button>
        </div>
        <div mb-5>
          <hr className="border-2" />
          <div className="flex justify-center">
            <span className="bg-white px-4 -mt-3">or</span>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-4">
          <ButtonIcon icon={RiGoogleFill} />
          <ButtonIcon icon={RiFacebookFill} />
          <ButtonIcon icon={RiGithubFill} />
        </div>
      </form>
    </div>
  );
};
export default Form;

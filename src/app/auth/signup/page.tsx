"use client";
import Navbar from "@/components/Navbar";
import { signupSchema } from "@/utils/yupValidations";
import Image from "next/image";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
type FormValues = {
  email: string;
  password: string;
  confirmPassword: string;
};
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (email: string, password: string) => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSignUp(data.email, data.password);
    router.push("/auth/login");
  };

  return (
    <div className="flex h-screen grid-lines">
      {/* Hero image left side */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <Image
          src="/login.jpg"
          alt="Hero Image"
          unoptimized
          className="object-cover w-full h-full"
          width={100}
          height={100}
        />
      </div>
      {/* Right side */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        {/* <Navbar /> */}
        {/* Form */}
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <form
            className="flex flex-col space-y-3 mt-10 w-full max-w-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 px-3 py-2 rounded-md text-black"
              {...register("email")}
            />
            {
              <p className="text-red-500 text-xs">
                {errors.email?.message && errors.email?.message}
              </p>
            }
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-400 px-3 py-2 rounded-md text-black"
              {...register("password")}
            />
            <p className="text-red-500 text-xs">
              {errors.password?.message && errors.password?.message}
            </p>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-400 px-3 py-2 rounded-md text-black"
              {...register("confirmPassword")}
            />
            <p className="text-red-500 text-xs">
              {errors.confirmPassword?.message &&
                errors.confirmPassword?.message}
            </p>

            <button
              className="bg-gray-900 text-white px-3 py-2 rounded-md"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-5">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

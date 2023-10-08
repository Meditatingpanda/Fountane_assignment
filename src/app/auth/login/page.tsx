"use client";
import Image from "next/image";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/utils/yupValidations";
type FormValues = {
  email: string;
  password: string;
};
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const supabase = createClientComponentClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleSignIn = async (email: string, password: string) => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSignIn(data.email, data.password);
    router.push("/auth/login");
  };
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="flex h-screen">
      {/* Hero image left side */}
      <div className="hidden md:flex flex-1 overflow-hidden">
        <Image
          src="/login.jpg"
          alt="Hero Image"
          unoptimized
          className="object-cover h-full w-full"
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
          <h1 className="text-3xl font-bold">Login</h1>
          <form
            className="flex flex-col space-y-3 mt-10 w-full max-w-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="border border-gray-400 px-3 py-2 rounded-md text-black"
            />
            <p className="text-red-500 text-xs">{errors.email?.message}</p>

            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="border border-gray-400 px-3 py-2 rounded-md text-black"
            />
            <p className="text-red-500 text-xs">{errors.password?.message}</p>
            <button
              className="bg-gray-900 text-white px-3 py-2 rounded-md"
              type="submit"
            >
              Login
            </button>
          </form>

          <p className="mt-5">
            Don&rsquo;t have an account?{" "}
            <Link href="/auth/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>

          <p className="mt-5 text-xs text-gray-400">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-500">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-500">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

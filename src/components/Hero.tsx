import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Hero = async () => {
  const data = await useAuth();

  return (
    <section className="mt-28 px-5 text-center flex items-center justify-center flex-col">
      <div className="max-w-2xl md:max-w-xl lg:max-w-2xl space-y-3">
        <div className=" flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-5xl text-white font-semibold text-center">
            May the Force Be with You 🚀
          </h1>
          <p className="text-lg text-gray-400 px-8 mt-4 text-center">
            Dive into the enchanting world of cinema, where every frame tells a
            story. Welcome to Movie Paradise, your gateway to the magic of
            movies and TV shows.
          </p>
        </div>

        <div className="flex items-center justify-center gap-6">
          {!data?.session?.user && (
            <Link
              href={"/auth/login"}
              className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-1 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
            >
              login
            </Link>
          )}
          <Link
            href={"/movies"}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-1 rounded-lg text-lg font-semibold transition duration-300 transform hover:scale-105"
          >
            explore
          </Link>
        </div>
      </div>
      <LogoCloud />
    </section>
  );
};

export default Hero;

function LogoCloud() {
  return (
    <div>
      <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
        Brought to you by
      </p>
      <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-4">
        <div className="flex items-center justify-start">
          <a href="https://nextjs.org" aria-label="Next.js Link">
            <Image
              src="/nextjs.svg"
              alt="Next.js Logo"
              className="h-8 text-white"
              height={60}
              width={60}
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <Image
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="h-6 text-white ml-3"
              height={60}
              width={60}
            />
          </a>
        </div>

        <div className="flex items-center justify-start">
          <a href="https://supabase.io" aria-label="supabase.io Link">
            <Image
              src="/supabase.svg"
              alt="supabase.io Logo"
              className="h-10 text-white"
              height={60}
              width={60}
            />
          </a>
        </div>
        <div className="flex items-center justify-start">
          <a href="https://github.com" aria-label="github.com Link">
            <Image
              src="/github.svg"
              alt="github.com Logo"
              className="h-8 text-white"
              height={60}
              width={60}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

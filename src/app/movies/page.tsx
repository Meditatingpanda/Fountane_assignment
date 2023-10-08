import MoviesWrapper from "@/components/MoviesWrapper";
import Navbar from "@/components/Navbar";
import { useMovies } from "@/hooks/useFetch";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MovieSection = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="grid-lines">
      <Navbar />
      <MoviesWrapper />
    </div>
  );
};

export default MovieSection;

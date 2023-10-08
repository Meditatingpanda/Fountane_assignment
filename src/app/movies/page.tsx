import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const MovieSection =async () => {
    const supabase = createServerComponentClient({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();
  
    if (!session) {
      redirect("/auth/login");
    }
    return (
        <div>
            Enter
        </div>
    );
}

export default MovieSection;
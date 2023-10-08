import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import LogOut from "./Logout";

const Navbar = async () => {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.auth.getSession();

  return (
    <nav className="mx-10 md:mx-56 bg-[rgb(8,8,8)] rounded-[100px] px-10 py-3 mt-3 border border-gray-400 overflow-hidden">
      <div className="flex items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        {/* Middle Links */}
        <div className="hidden md:flex space-x-4">
          <Link className="text-gray-50 hover:text-gray-100" href="/">
            home
          </Link>

          <Link
            className="text-gray-50 hover:text-gray-100"
            href="https://github.com/Meditatingpanda"
            target="_blank"
          >
            github
          </Link>

          <Link className="text-gray-50 hover:text-gray-100" href="/movies">
            movies
          </Link>
        </div>

        <LogOut data={data} />
      </div>
    </nav>
  );
};

export default Navbar;

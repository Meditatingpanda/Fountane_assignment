import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="mx-10 md:mx-56 bg-[rgb(8,8,8)] rounded-[100px] px-10 py-3 mt-3 border border-gray-400 overflow-hidden">
      <div className="flex items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        {/* Middle Links */}
        <div className="hidden md:flex space-x-4">
          <Link className="text-gray-50 hover:text-gray-100" href="/">
            home
          </Link>

          <Link className="text-gray-50 hover:text-gray-100" href="/">
            github
          </Link>

          <Link className="text-gray-50 hover:text-gray-100" href="/movies">
            movies
          </Link>
        </div>

        <div>Logout</div>
      </div>
    </nav>
  );
};

export default Navbar;

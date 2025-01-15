"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex gap-4 mt-5 mx-4  ">
      {" "}
      {/* Add space between buttons */}
      {/* Show 'Go to Home' if not on home page */}
      {pathname !== "/" && (
        <Link href="/" passHref>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300">
            Home
          </button>
        </Link>
      )}
      {/* Show 'Go to Create' if not on the create page */}
      {pathname === "/view" && (
        <Link href="/create" passHref>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300">
            Create
          </button>
        </Link>
      )}
      {/* Show 'View' only on the create page */}
      {pathname === "/create" && (
        <Link href="/view" passHref>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300">
            View
          </button>
        </Link>
      )}
    </div>
  );
};

export default NavBar;

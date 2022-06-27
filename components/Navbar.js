import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-secondary-100 text-white font-semibold ">
      <div className="flex z-100 py-6 justify-between max-w-screen-xl mx-auto px-2">
        <Link href="/">
          <a>
            <h1 className="text-5xl font-mono font-bold ">Mairala</h1>
          </a>
        </Link>
        <div className="flex justify">
          <div className={`hidden md:block space-x-6`}>
            <NavLinks />
          </div>

          <button
            type="button"
            aria-label="Toggle Mobile Menu"
            onClick={() => setOpen(!open)}
            className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"
          >
            <MenuAlt4Svg menuOpen={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="p-4 flex flex-col space-y-3 tablet md:h-0 ">
          <NavLinks />
        </div>
      )}
    </nav>
  );
};

export default Navbar;

const MenuAlt4Svg = ({ menuOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`transition duration-100 ease h-8 w-8 ${
      menuOpen ? "transform rotate-90" : ""
    } fill-current dark:text-white text-black`}
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

const NavLinks = () => {
  return (
    <>
      <Link href="/">
        <a className="border-b-4 pb-4 border-primary">Home</a>
      </Link>
      <Link href="/about">
        <a className=" ">About</a>
      </Link>
      <Link href="/portfolios">
        <a className=" ">Portfolios</a>
      </Link>
      <Link href="/team">
        <a className=" ">Team</a>
      </Link>
      <Link href="/blog">
        <a className=" ">Blog</a>
      </Link>
      <Link href="/contact">
        <a className=" ">Contact</a>
      </Link>
    </>
  );
};

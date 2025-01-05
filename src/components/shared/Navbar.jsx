import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
const Navbar = () => {
  const navlinks = [
    {
      title: "Home",
      path: "/",
    },

    {
      title: "About",
      path: "/about",
    },

    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-base-100 text-slate-900">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navlinks.map((navlink) => (
                <Link href={navlink.path} key={navlink.path}>
                  {navlink.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image
              alt="logo"
              src="/assets/logo.svg"
              height={60}
              width={100}
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex space-x-8">
            {navlinks.map((navlink) => (
              <Link
                className="font-bold hover:text-primary duration-300"
                href={navlink.path}
                key={navlink.path}
              >
                {navlink.title}
              </Link>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex content-center space-x-4 mr-4">
            <CiShoppingCart className="text-xl" />
            <FaSearch className="text-xl" />
          </div>
          <a className="btn btn-outline btn-primary px-8">Appointment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

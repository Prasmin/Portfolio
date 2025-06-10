import Link from "next/link";
import React from "react";

const navbarItems = [
  {
    href: "/",
    label: "Home",
  },

  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-center mx-auto max-w-7xl pt-4  bg-background">
        <div className=" flex gap-x-8 ">
          {navbarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 transition duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

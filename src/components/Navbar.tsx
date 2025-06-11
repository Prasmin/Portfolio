"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react"; // You can use any icon library

type NavbarItem = {
  href: string;
  label: string;
  isActive?: boolean; // Optional, can be used to set active state
};

const navbarItems: NavbarItem[] = [
  { href: "/", label: "Home", isActive: true },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-background/95 backdrop-blur-sm shadow">
      {/* Desktop Menu */}
      <div className="hidden sm:flex justify-center mx-auto max-w-7xl pt-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <div className="flex gap-x-8">
                {navbarItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <NavigationMenuLink
                      key={item.href}
                      asChild
                      className={`font-bold text-lg transition duration-200 ${
                        isActive
                          ? "text-blue-600 "
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  );
                })}
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex sm:hidden justify-between items-center px-4 py-3">
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen((open) => !open)}
          className="focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex flex-col gap-y-4">
            {navbarItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-bold text-lg transition duration-200 ${
                    isActive
                      ? "text-blue-600 "
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}

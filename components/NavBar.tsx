"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { name: "New", href: "/new" },
  {
    name: "Shop",
    href: "/shop",
  },
  { name: "Accessories", href: "/accessories" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex flex-row w-full bg-transparent fixed hover:bg-white items-center py-2 transition-colors duration-300 ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <section className="flex grow items-center justify-start px-2">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[78px] items-center justify-center gap-2 bg-transparent text-sm uppercase tracking-wider md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </section>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href={"/"}>
          <Image src="/logo-3.png" width={100} height={100} alt="Logo" />
        </Link>
      </div>
    </nav>
  );
}

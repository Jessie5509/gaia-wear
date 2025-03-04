"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { name: "New", href: "/#new" },
  {
    name: "Shop",
    href: "/shop",
  },
  { name: "Accessories", href: "/shop?category=Accessories" },
  { name: "About", href: "/about" },
];

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [storedCart, setStoredCart] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const cart = JSON.parse(localStorage.getItem("usercart")) || [];
    setStoredCart(cart);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnchorClick = (e, href) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`flex flex-row w-full bg-transparent fixed hover:bg-white items-center py-2 transition-colors duration-300 z-[1] ${
        isScrolled ? "bg-white" : ""
      }`}
    >
      <section className="flex grow items-center justify-start px-2">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="flex h-[78px] items-center justify-center gap-2 bg-transparent text-sm uppercase text-black tracking-wider md:flex-none md:justify-start md:p-2 md:px-3"
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
      <div className="relative right-5 transform -translate-x-1/2">
        <Link href={"/cart"}>
          <Image src="/bag.svg" width={24} height={24} alt="Bag" />
          {storedCart.length > 0 ? (
            <article className="flex justify-center absolute top-2 right-0 w-[0.7dvw] bg-primary border rounded-full">
              <p className="text-white text-[0.6rem]">{storedCart.length}</p>
            </article>
          ) : null}
        </Link>
      </div>
    </nav>
  );
}

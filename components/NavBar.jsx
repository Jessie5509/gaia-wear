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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={`flex flex-row w-full bg-transparent fixed hover:bg-white items-center py-2 transition-colors duration-300 z-[1] ${
          isScrolled ? "bg-white" : ""
        }`}
      >
        <div className="flex md:hidden pl-6">
          <button
            onClick={toggleMobileMenu}
            className="flex flex-col justify-center items-center w-6 h-6 space-y-1 max-sm:bg-navbars"
            aria-label="Abrir menú"
          ></button>
        </div>

        <section className="flex grow items-center justify-start px-6">
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
            <Image
              src="/logo-3.png"
              width={100}
              height={100}
              alt="Logo"
              className="max-sm:w-[75px] max-sm:h-[75px]"
            />
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
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={toggleMobileMenu}
          ></div>

          <div className="fixed top-0 left-0 right-0 bg-white shadow-lg">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-lg font-semibold uppercase tracking-wide">
                Menu
              </h2>
              <button
                onClick={toggleMobileMenu}
                className="w-6 h-6 flex items-center justify-center"
                aria-label="Cerrar menú"
              >
                <span className="w-5 h-0.5 bg-black rotate-45 absolute"></span>
                <span className="w-5 h-0.5 bg-black -rotate-45 absolute"></span>
              </button>
            </div>
            <nav className="p-6">
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleAnchorClick(e, link.href)}
                      className="block py-3 text-lg uppercase text-black tracking-wider border-b border-gray-100 hover:text-gray-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

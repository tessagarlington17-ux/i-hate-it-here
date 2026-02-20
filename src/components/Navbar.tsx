"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Inquire" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-[#FAF8F6]/85 backdrop-blur-lg shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-[#FAF8F6]/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group">
            <span className="font-serif text-xl font-medium text-primary tracking-tight">
              Tired of Planning
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {links.map((link) =>
              link.label === "Inquire" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-primary hover:bg-primary-light text-[#FAF8F6] px-7 py-2.5 text-[11px] font-medium tracking-[0.08em] uppercase rounded-md transition-all duration-200 ease-in-out hover:shadow-[0_2px_8px_rgba(0,0,0,0.12)]"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-text-light hover:text-primary text-[11px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-accent after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <button
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-2 text-text-light hover:text-primary text-[11px] font-medium tracking-[0.08em] uppercase transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

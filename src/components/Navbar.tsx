"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Inquire" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-warm-dark/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group">
            <span className="font-serif text-xl sm:text-2xl font-semibold text-primary tracking-tight">
              Tired of Being at Home
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link) =>
              link.label === "Inquire" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-primary hover:bg-primary-light text-white px-7 py-2.5 text-sm font-medium tracking-widest uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text-light hover:text-primary text-sm font-medium tracking-wider uppercase transition-colors"
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
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-warm-dark/30 py-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-2 text-text-light hover:text-primary text-sm font-medium tracking-wider uppercase transition-colors"
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

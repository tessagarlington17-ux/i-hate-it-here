"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/packages", label: "Packages" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Book Now" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-warm-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <Plane className="h-6 w-6 text-accent group-hover:text-accent-light transition-colors" />
            <span className="text-xl font-bold text-primary">
              Wanderlust Travel Co.
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) =>
              link.label === "Book Now" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-accent hover:bg-accent-light text-white px-5 py-2 rounded-full font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-text hover:text-primary font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <button
            className="md:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-warm-dark/30 py-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-text hover:text-primary hover:bg-warm/50 rounded-lg font-medium transition-colors"
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

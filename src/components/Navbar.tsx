"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const isHomeHero = pathname === "/" && !scrolled;
  // All pages show white nav when over hero (not scrolled); home gets special treatment
  const showWhite = !scrolled;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "backdrop-blur-[6px] shadow-none"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? { background: "rgba(247,245,242,0.85)" }
          : undefined
      }
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="group">
            <span
              className={`font-serif text-xl font-medium tracking-tight transition-colors duration-300 ${
                showWhite ? "text-white" : "text-primary"
              }`}
              style={isHomeHero ? { textShadow: "0 1px 6px rgba(0,0,0,0.25)" } : undefined}
            >
              Tired of Planning
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-12">
            {links.map((link) =>
              link.label === "Inquire" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-6 py-2.5 text-[11px] font-medium tracking-[0.08em] uppercase rounded-[6px] transition-all duration-200 ease-in-out ${
                    isHomeHero
                      ? "border border-white/65 bg-white/10 text-white hover:bg-white hover:text-accent"
                      : "bg-accent hover:bg-[#232f3a] text-white hover:shadow-[0_2px_8px_rgba(46,58,70,0.2)]"
                  }`}
                  style={isHomeHero ? { backdropFilter: "blur(2px)" } : undefined}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-medium tracking-[0.06em] uppercase transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100 ${
                    showWhite
                      ? "text-white/90 hover:text-white after:bg-white"
                      : "text-text-light hover:text-primary after:bg-accent"
                  }`}
                  style={isHomeHero ? { textShadow: "0 1px 6px rgba(0,0,0,0.3)" } : undefined}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <button
            className={`md:hidden transition-colors duration-300 ${
              showWhite ? "text-white" : "text-primary"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div
            className={`md:hidden py-6 space-y-1 border-t ${
              showWhite ? "border-white/20" : "border-warm-dark/20"
            }`}
            style={showWhite ? { background: "rgba(17, 24, 39, 0.4)", backdropFilter: "blur(10px)" } : undefined}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 px-2 text-[11px] font-medium tracking-[0.06em] uppercase transition-colors duration-200 ${
                  showWhite
                    ? "text-white/90 hover:text-white"
                    : "text-text-light hover:text-primary"
                }`}
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

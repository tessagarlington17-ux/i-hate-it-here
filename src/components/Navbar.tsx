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
      className="fixed top-0 w-full z-50 transition-all duration-500 ease-in-out"
      style={
        scrolled
          ? {
              background: "#F5F0E8",
              borderBottom: "1px solid rgba(200,184,154,0.5)",
            }
          : { background: "transparent" }
      }
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px",
        }}
        className="px-6 sm:px-10 lg:px-[60px]"
      >
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <span
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "1.3rem",
                letterSpacing: "0.02em",
                color: scrolled ? "#2C2C2A" : "#fff",
                transition: "color 0.3s ease",
              }}
            >
              Tired of Planning
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: '"Jost", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: scrolled ? "#2C2C2A" : "rgba(255,255,255,0.9)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#A8906A";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled
                    ? "#2C2C2A"
                    : "rgba(255,255,255,0.9)";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            style={{ color: scrolled ? "#2C2C2A" : "#fff" }}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <div
            style={{ borderTop: "1px solid rgba(200,184,154,0.3)" }}
            className="md:hidden py-6 space-y-1"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "12px 8px",
                  fontFamily: '"Jost", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#8A8478",
                  textDecoration: "none",
                }}
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

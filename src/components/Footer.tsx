import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          <div>
            <span className="font-serif text-2xl font-medium block mb-5">
              Tired of Planning
            </span>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Bespoke travel planning for those who believe the world is best
              experienced with intention. 29 countries and counting.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-7">
              Navigate
            </h3>
            <ul className="space-y-3.5">
              {[
                { href: "/about", label: "About" },
                { href: "/packages", label: "Packages" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Inquire" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent mb-7">
              Connect
            </h3>
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/tiredofplanning"
                className="text-white/40 hover:text-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:tessa.garlington@gmail.com"
                className="text-white/40 hover:text-accent transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <a
              href="mailto:hello@tiredofplanning.com"
              className="text-white/25 hover:text-accent text-sm mt-7 block transition-colors duration-200"
            >
              hello@tiredofplanning.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-14 pt-9 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/25 text-xs tracking-wider">
          <span>
            &copy; {new Date().getFullYear()} Tired of Planning
          </span>
          <span>Designed for calmer travel</span>
        </div>
      </div>
    </footer>
  );
}

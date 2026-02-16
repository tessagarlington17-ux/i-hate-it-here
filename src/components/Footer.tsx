import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="font-serif text-2xl font-semibold block mb-4">
              Tired of Being at Home
            </span>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Bespoke travel planning for those who believe the world is best
              experienced with intention. 29 countries and counting.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6">
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/packages", label: "Packages" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Inquire" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium tracking-[0.2em] uppercase text-accent mb-6">
              Connect
            </h3>
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/tiredofbeinghungry"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:tessa.garlington@gmail.com"
                className="text-white/50 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/30 text-sm mt-6">
              hello@tiredofbeingathome.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/30 text-xs tracking-wider">
          <span>
            &copy; {new Date().getFullYear()} Tired of Being at Home
          </span>
          <span>Crafted with wanderlust</span>
        </div>
      </div>
    </footer>
  );
}

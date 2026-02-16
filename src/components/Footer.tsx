import Link from "next/link";
import { Plane, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-5 w-5 text-accent-light" />
              <span className="text-lg font-bold">Wanderlust Travel Co.</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Personalized travel planning from someone who&apos;s actually been
              there. 29 countries and counting.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent-light">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Me" },
                { href: "/packages", label: "Packages & Pricing" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/contact", label: "Get in Touch" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent-light">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/tiredofbeinghungry"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:tessa.garlington@gmail.com"
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white/50 text-sm mt-4">
              hello@wanderlusttravelco.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          &copy; {new Date().getFullYear()} Wanderlust Travel Co. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

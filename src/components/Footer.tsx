import Link from "next/link";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#1A1916", color: "#C8B89A" }}>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 60px",
        }}
        className="px-6 sm:px-10 lg:px-[60px] py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Brand */}
          <div>
            <span
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "1.5rem",
                letterSpacing: "0.02em",
                color: "#fff",
                display: "block",
                marginBottom: "1.25rem",
              }}
            >
              Tired of Planning
            </span>
            <p
              style={{
                color: "#8A8478",
                fontSize: "0.85rem",
                lineHeight: "1.75",
                maxWidth: "280px",
                fontWeight: 300,
              }}
            >
              Bespoke travel planning for those who believe the world is best
              experienced with intention. 29 countries and counting.
            </p>
          </div>

          {/* Navigate + Connect */}
          <div className="grid grid-cols-2 gap-10">
            <div>
              <h3
                style={{
                  fontFamily: '"Jost", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(200,184,154,0.5)",
                  marginBottom: "1.75rem",
                }}
              >
                Navigate
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                {[
                  { href: "/about", label: "About" },
                  { href: "/packages", label: "Packages" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/contact", label: "Inquire" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={{
                        color: "#C8B89A",
                        fontSize: "0.85rem",
                        textDecoration: "none",
                        fontWeight: 300,
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#fff";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "#C8B89A";
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3
                style={{
                  fontFamily: '"Jost", sans-serif',
                  fontWeight: 300,
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(200,184,154,0.5)",
                  marginBottom: "1.75rem",
                }}
              >
                Connect
              </h3>
              <div style={{ display: "flex", gap: "1.25rem", marginBottom: "1.75rem" }}>
                <a
                  href="https://www.instagram.com/tiredofplanning"
                  style={{ color: "rgba(200,184,154,0.5)", transition: "color 0.2s ease" }}
                  aria-label="Instagram"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(200,184,154,0.5)";
                  }}
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="mailto:tessa.garlington@gmail.com"
                  style={{ color: "rgba(200,184,154,0.5)", transition: "color 0.2s ease" }}
                  aria-label="Email"
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(200,184,154,0.5)";
                  }}
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <a
                href="mailto:hello@tiredofplanning.com"
                style={{
                  color: "rgba(200,184,154,0.4)",
                  fontSize: "0.8rem",
                  textDecoration: "none",
                  fontWeight: 300,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "rgba(200,184,154,0.4)";
                }}
              >
                hello@tiredofplanning.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            borderTop: "1px solid rgba(200,184,154,0.2)",
            marginTop: "3.5rem",
            paddingTop: "2.25rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
            color: "rgba(200,184,154,0.3)",
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            fontWeight: 300,
          }}
        >
          <span>&copy; {new Date().getFullYear()} Tired of Planning</span>
          <span>Designed for calmer travel</span>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { MapPin, Globe, Utensils, Calendar, Users } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  { value: "29", label: "Countries" },
  { value: "100+", label: "Trips Curated" },
  { value: "3K+", label: "Happy Travelers" },
  { value: "5.0", label: "Client Rating" },
];

const strengths = [
  {
    icon: Calendar,
    title: "Unhurried Itineraries",
    description:
      "No rigid timelines — just thoughtful structure that leaves room for spontaneity.",
  },
  {
    icon: Utensils,
    title: "Culinary Discovery",
    description:
      "Every itinerary features curated dining — from acclaimed restaurants to hidden local gems.",
  },
  {
    icon: MapPin,
    title: "Every Budget, Elevated",
    description:
      "Boutique hostels to private villas for 17 — every trip gets the same meticulous care.",
  },
];

const testimonials = [
  {
    quote:
      "She planned a two-week Southeast Asia journey for our group of eight. Every detail was impeccable — the villa in Thailand was absolutely breathtaking.",
    author: "Sarah M.",
    trip: "Thailand & Vietnam",
  },
  {
    quote:
      "Tessa found an amazing boutique hostel in Tamarindo on a modest budget. Every recommendation was thoughtful — which towns to visit, where to splurge vs. save. The whole trip felt intentional without being overplanned.",
    author: "Madisun M.",
    trip: "Costa Rica",
  },
  {
    quote:
      "Our honeymoon struck the perfect balance of adventure and tranquility. We never felt rushed, yet experienced everything on our list.",
    author: "The Nguyens",
    trip: "Italy & Greece",
  },
];

const containerStyle = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 60px",
} as const;

const containerMobile = "px-6 sm:px-10 lg:px-[60px]";

export default function Home() {
  return (
    <>
      <style>{`
        .hero-section {
          height: 100vh;
          min-height: 600px;
        }
        .hero-h1 {
          font-family: "Cormorant Garamond", Georgia, serif;
          font-weight: 300;
          font-style: italic;
          font-size: clamp(3.5rem, 7vw, 7rem);
          line-height: 1.05;
          letter-spacing: 0.02em;
          color: #fff;
          margin-bottom: 2rem;
        }
        .hero-subtitle {
          font-family: "Jost", sans-serif;
          font-weight: 300;
          font-size: 1rem;
          line-height: 1.7;
          max-width: 38rem;
          margin: 0 auto 3rem;
          color: rgba(255,255,255,0.8);
        }
        @media (max-width: 767px) {
          .hero-section {
            height: auto;
            min-height: 90vh;
            padding: 80px 24px 60px;
          }
          .hero-h1 {
            font-size: clamp(2.8rem, 9vw, 4rem) !important;
          }
          .hero-subtitle {
            font-size: 0.9rem !important;
            max-width: 90%;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          .hero-btn-secondary {
            display: none;
          }

          /* Stats mobile: 2x2 grid */
          .stats-row {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
          }
          .stats-divider {
            display: none !important;
          }
          .stats-item {
            border-bottom: 1px solid rgba(200,184,154,0.25) !important;
            border-right: none !important;
          }
          .stats-item:nth-child(odd) {
            border-right: 1px solid rgba(200,184,154,0.25) !important;
          }

          /* Why section mobile: stacked */
          .why-grid {
            display: flex !important;
            flex-direction: column !important;
          }
          .why-divider {
            display: none !important;
          }
          .why-item {
            padding: 2.5rem 0 !important;
            border-bottom: 1px solid rgba(200,184,154,0.25) !important;
          }

          /* Process mobile: stacked */
          .process-row {
            flex-direction: column !important;
            gap: 3rem !important;
          }
          .process-connector {
            display: none !important;
          }

          /* Testimonials mobile: stacked */
          .testimonials-grid {
            flex-direction: column !important;
            gap: 4rem !important;
          }

          /* Section headings: centered on mobile */
          .section-heading-wrap {
            justify-content: center !important;
          }
          .section-heading-wrap::after {
            display: none !important;
          }
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="hero-section relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/trips/amalfi_coast.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient from bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,25,22,0.55) 0%, rgba(26,25,22,0.15) 50%, transparent 100%)",
          }}
        />
        <div className="relative z-10 text-center w-full px-6">
          <p
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 300,
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "2.5rem",
            }}
          >
            Tired of Planning
          </p>
          <h1 className="hero-h1">
            The World is Waiting.
            <br />
            Stop Scrolling.
          </h1>
          <p className="hero-subtitle">
            Personalized itineraries crafted with intention — from culinary
            adventures to hidden escapes.
          </p>
          <div
            className="hero-buttons"
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href="/packages" className="btn-gold hero-btn-primary">
              View Packages
            </Link>
            <Link
              href="/portfolio"
              className="hero-btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.5)",
                color: "#fff",
                background: "transparent",
                padding: "1rem 2rem",
                fontFamily: '"Jost", sans-serif',
                fontWeight: 300,
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                borderRadius: 0,
                transition: "background 0.25s ease, border-color 0.25s ease",
                textDecoration: "none",
              }}
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── FROM THE ROAD — Editorial Photo Strip ── */}
      <section style={{ padding: "120px 0", background: "#F5F0E8" }}>
        <div style={containerStyle} className={containerMobile}>
          <ScrollReveal>
            <div style={{ marginBottom: "40px" }}>
              <p className="eyebrow" style={{ marginBottom: "40px" }}>Snapshots</p>
              <div className="heading-rule section-heading-wrap">
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: "clamp(2.8rem, 4vw, 4rem)",
                    letterSpacing: "0.04em",
                    color: "#2C2C2A",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  From the Road
                </h2>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div
            className="photo-strip"
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "16px",
              scrollSnapType: "x mandatory",
              paddingLeft: "max(24px, calc((100vw - 1400px) / 2 + 60px))",
              paddingRight: "max(24px, calc((100vw - 1400px) / 2 + 60px))",
            }}
          >
            {[
              "/trips/IMG_1550.jpeg",
              "/trips/IMG_1729.jpeg",
              "/trips/IMG_2670.jpeg",
              "/trips/india.JPG",
              "/trips/thai_temple_colorful.JPG",
              "/trips/burano.JPG",
              "/trips/amalfi_coast.JPG",
            ].map((src) => (
              <div
                key={src}
                style={{
                  width: "320px",
                  height: "480px",
                  flexShrink: 0,
                  overflow: "hidden",
                  scrollSnapAlign: "start",
                }}
              >
                <img
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "saturate(0.88) contrast(1.02)",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* ── STATS ── */}
      <section
        style={{
          background: "#FDFAF5",
          padding: "80px 0",
        }}
      >
        <div style={containerStyle} className={containerMobile}>
          <ScrollReveal>
            <div
              className="stats-row"
              style={{
                display: "flex",
                alignItems: "stretch",
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="stats-item"
                  style={{
                    flex: 1,
                    textAlign: "center",
                    padding: "0 2rem",
                    borderRight: i < stats.length - 1 ? "1px solid rgba(200,184,154,0.4)" : "none",
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 300,
                      fontSize: "4.5rem",
                      lineHeight: 1,
                      color: "#2C2C2A",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.6rem",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#8A8478",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY TIRED OF PLANNING ── */}
      <section style={{ padding: "120px 0", background: "#F5F0E8" }}>
        <div style={containerStyle} className={containerMobile}>
          <ScrollReveal>
            <div style={{ marginBottom: "80px" }}>
              <p className="eyebrow" style={{ marginBottom: "40px" }}>The Experience</p>
              <div className="heading-rule section-heading-wrap">
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: "clamp(2.8rem, 4vw, 4rem)",
                    letterSpacing: "0.04em",
                    color: "#2C2C2A",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  Why Tired of Planning?
                </h2>
              </div>
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "#8A8478",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                  maxWidth: "520px",
                  lineHeight: 1.75,
                }}
              >
                Personal travel across 29 countries — distilled into planning
                that feels effortless.
              </p>
            </div>
          </ScrollReveal>

          <div
            className="why-grid"
            style={{ display: "flex", alignItems: "stretch" }}
          >
            {strengths.map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1 as 1 | 2 | 3}>
                <div
                  className="why-item"
                  style={{
                    flex: 1,
                    padding: "0 3rem",
                    borderLeft: i > 0 ? "1px solid rgba(200,184,154,0.35)" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "1px solid rgba(168,144,106,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.75rem",
                    }}
                  >
                    <item.icon style={{ width: "16px", height: "16px", color: "#A8906A", flexShrink: 0 }} />
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 300,
                      fontSize: "1.6rem",
                      letterSpacing: "0.04em",
                      color: "#2C2C2A",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.9rem",
                      color: "#8A8478",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ padding: "120px 0", background: "#FDFAF5" }}>
        <div style={containerStyle} className={containerMobile}>
          <ScrollReveal>
            <div style={{ marginBottom: "80px" }}>
              <p className="eyebrow" style={{ marginBottom: "40px" }}>The Process</p>
              <div className="heading-rule section-heading-wrap">
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: "clamp(2.8rem, 4vw, 4rem)",
                    letterSpacing: "0.04em",
                    color: "#2C2C2A",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  From Vision to Voyage
                </h2>
              </div>
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "#8A8478",
                  fontWeight: 300,
                  fontSize: "0.95rem",
                }}
              >
                Four steps from idea to departure.
              </p>
            </div>
          </ScrollReveal>

          <div
            className="process-row"
            style={{ display: "flex", alignItems: "flex-start", gap: "0", position: "relative" }}
          >
            {/* Connecting line through step numbers */}
            <div
              className="process-connector"
              style={{
                position: "absolute",
                top: "2.4rem",
                left: "calc(25% * 0 + 3rem)",
                right: "calc(25% * 0 + 3rem)",
                height: "1px",
                background: "rgba(200,184,154,0.4)",
                zIndex: 0,
                width: "calc(100% - 6rem)",
              }}
            />
            {[
              {
                step: "01",
                title: "Share Your Vision",
                desc: "Share your dream destination, travel style, and budget.",
              },
              {
                step: "02",
                title: "Receive Your Itinerary",
                desc: "A day-by-day plan with curated dining, experiences, and breathing room built in.",
              },
              {
                step: "03",
                title: "Refine Together",
                desc: "We fine-tune every detail until it feels right. Higher tiers include full booking assistance.",
              },
              {
                step: "04",
                title: "Travel with Confidence",
                desc: "Depart with a polished itinerary, insider knowledge, and on-trip support.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i < 3 ? (i + 1) as 1 | 2 | 3 : 0}>
                <div
                  style={{
                    flex: 1,
                    padding: "0 2.5rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 300,
                      fontSize: "5rem",
                      lineHeight: 1,
                      color: "rgba(200,184,154,0.5)",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.8rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#2C2C2A",
                      marginBottom: "0.875rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.85rem",
                      color: "#8A8478",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "120px 0", background: "#F5F0E8" }}>
        <div style={containerStyle} className={containerMobile}>
          <ScrollReveal>
            <div style={{ marginBottom: "80px" }}>
              <p className="eyebrow" style={{ marginBottom: "40px" }}>Testimonials</p>
              <div className="heading-rule section-heading-wrap">
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: "clamp(2.8rem, 4vw, 4rem)",
                    letterSpacing: "0.04em",
                    color: "#2C2C2A",
                    margin: 0,
                    whiteSpace: "nowrap",
                  }}
                >
                  Words from Fellow Travelers
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div
            className="testimonials-grid"
            style={{ display: "flex", gap: "4rem", alignItems: "flex-start" }}
          >
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i + 1 as 1 | 2 | 3}>
                <div style={{ flex: 1 }}>
                  {/* Decorative line instead of quote marks */}
                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      background: "#C8B89A",
                      marginBottom: "2rem",
                    }}
                  />
                  <p
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontStyle: "italic",
                      fontWeight: 300,
                      fontSize: "1.4rem",
                      lineHeight: 1.8,
                      color: "#2C2C2A",
                      marginBottom: "2rem",
                    }}
                  >
                    {t.quote}
                  </p>
                  <div>
                    <p
                      style={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 300,
                        fontSize: "0.7rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#8A8478",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {t.author}
                    </p>
                    <p
                      style={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 300,
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(138,132,120,0.6)",
                      }}
                    >
                      {t.trip}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          padding: "120px 0",
          background: "#1A1916",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/trips/coastal-villas.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "700px",
            margin: "0 auto",
            padding: "0 24px",
          }}
        >
          <ScrollReveal>
            <p
              style={{
                fontFamily: '"Jost", sans-serif',
                fontWeight: 300,
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "2.5rem",
              }}
            >
              Begin Your Journey
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "0.04em",
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Ready to See the World Differently?
            </h2>
            <p
              style={{
                fontFamily: '"Jost", sans-serif',
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "#8A8478",
                lineHeight: 1.75,
                marginBottom: "3rem",
                maxWidth: "480px",
                margin: "0 auto 3rem",
              }}
            >
              Whether it&apos;s a weekend escape or a month-long odyssey —
              every detail handled.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="btn-gold">
                Start Planning
              </Link>
              <Link href="/packages" className="btn-ghost">
                View Packages
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

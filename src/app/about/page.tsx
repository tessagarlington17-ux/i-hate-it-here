import Link from "next/link";
import {
  Globe,
  Utensils,
  Users,
  Calendar,
  Heart,
  MapPin,
  ArrowRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const S = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 60px",
} as const;
const C = "px-6 sm:px-10 lg:px-[60px]";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden flex items-end justify-center text-white text-center"
        style={{
          backgroundImage: "url('/trips/oslo.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,25,22,0.75) 0%, rgba(26,25,22,0.3) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-16 pt-32 text-center">
          <p
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 300,
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "1.75rem",
            }}
          >
            The Story
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 300,
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              letterSpacing: "0.04em",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            About Me
          </h1>
          <p
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            The short version: I love planning trips as much as taking them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: "120px 0", background: "#F5F0E8" }}>
        <div
          style={{ maxWidth: "680px", margin: "0 auto" }}
          className="px-6"
        >
          <ScrollReveal>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 300,
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                letterSpacing: "0.04em",
                color: "#2C2C2A",
                marginBottom: "3rem",
              }}
            >
              From Traveler to Travel Curator
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.75rem",
                color: "#8A8478",
                lineHeight: 1.8,
                fontWeight: 300,
                fontSize: "0.95rem",
              }}
            >
              <p>
                I&apos;m 30, I&apos;ve been to 29 countries, and I&apos;ve
                planned trips for every budget imaginable — from $8 hostels in
                Southeast Asia to a private villa in Thailand for 17 of my
                closest friends.
              </p>
              <p>
                What started as being &ldquo;the friend who plans
                everything&rdquo; evolved into something much larger. People kept
                returning, asking me to design their next journey. Friends of
                friends began reaching out. My inbox became a full-time
                occupation.
              </p>
              <p>
                So I made it official. Tired of Planning is built on the
                same philosophy I follow for my own travels: research deeply,
                plan with intention, and always leave room to breathe.
              </p>
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "1.3rem",
                  color: "#2C2C2A",
                  lineHeight: 1.6,
                }}
              >
                Structure where you need it. Freedom where you want it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section style={{ padding: "120px 0", background: "#FDFAF5" }}>
        <div style={S} className={C}>
          <ScrollReveal>
            <div style={{ marginBottom: "80px" }}>
              <p
                className="eyebrow"
                style={{ marginBottom: "40px" }}
              >
                The Difference
              </p>
              <div className="heading-rule">
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
                  What Sets Me Apart
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Globe,
                title: "Lived Experience, Not Research",
                desc: "I've personally visited the places I recommend. I know the difference between a hotel that photographs well and one that truly delivers.",
                image: "/trips/ocean-path.jpeg",
              },
              {
                icon: Utensils,
                title: "Culinary-First Planning",
                desc: "Food is the soul of travel. Every itinerary features curated dining — from acclaimed restaurants to neighborhood gems only locals know.",
                image: "/trips/IMG_8200 3.jpeg",
              },
              {
                icon: Calendar,
                title: "Built-In Breathing Room",
                desc: "My itineraries aren't checklists. I design unstructured time because the finest moments happen when you're not rushing.",
                image: "/trips/thailand-beach.png",
              },
              {
                icon: Users,
                title: "Group Travel Specialist",
                desc: "Planning for two is different from planning for seventeen. I know how to balance group harmony with personal freedom.",
                image: "/trips/IMG_3154.jpeg",
              },
              {
                icon: Heart,
                title: "Genuinely Invested",
                desc: "This isn't a volume business. Every journey receives the same dedication I'd pour into my own travels.",
                image: "/trips/IMG_6550.jpeg",
              },
              {
                icon: MapPin,
                title: "Transparent on Budget",
                desc: "I'll share the real cost of things — not inflated tourist pricing. Authentic value at every level.",
                image: "/trips/coastal-villas.png",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i % 2 === 0 ? 1 : 2}>
                <div
                  style={{
                    background: "#F5F0E8",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ height: "192px", overflow: "hidden" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "saturate(0.88) contrast(1.02)",
                        display: "block",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      padding: "2rem 2.25rem",
                      display: "flex",
                      gap: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid rgba(168,144,106,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <item.icon style={{ width: "16px", height: "16px", color: "#A8906A" }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          fontWeight: 300,
                          fontSize: "1.4rem",
                          letterSpacing: "0.04em",
                          color: "#2C2C2A",
                          marginBottom: "0.625rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: '"Jost", sans-serif',
                          fontWeight: 300,
                          fontSize: "0.875rem",
                          color: "#8A8478",
                          lineHeight: 1.75,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Philosophy */}
      <section style={{ padding: "120px 0", background: "#F5F0E8" }}>
        <div style={S} className={C}>
          <ScrollReveal>
            <div style={{ marginBottom: "80px" }}>
              <p className="eyebrow" style={{ marginBottom: "40px" }}>Guiding Principles</p>
              <div className="heading-rule">
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
                  My Travel Philosophy
                </h2>
              </div>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-14">
            {[
              {
                number: "01",
                title: "Eat Local",
                desc: "The best food is rarely in the tourist district.",
              },
              {
                number: "02",
                title: "Stay Flexible",
                desc: "Plans are a compass, not a contract.",
              },
              {
                number: "03",
                title: "Travel With Intent",
                desc: "Know what you seek from a journey — then design around it.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.number} delay={i + 1 as 1 | 2 | 3}>
                <div>
                  <div
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 300,
                      fontSize: "4rem",
                      lineHeight: 1,
                      color: "rgba(200,184,154,0.45)",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.number}
                  </div>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 300,
                      fontSize: "1.5rem",
                      letterSpacing: "0.04em",
                      color: "#2C2C2A",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.875rem",
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

      {/* Destinations */}
      <section style={{ padding: "120px 0", background: "#FDFAF5" }}>
        <div style={S} className={C}>
          <ScrollReveal>
            <div style={{ marginBottom: "64px" }}>
              <p className="eyebrow" style={{ marginBottom: "40px" }}>Where I&apos;ve Been</p>
              <div className="heading-rule">
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
                  Destinations
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {[
                { name: "USA", code: "us" },
                { name: "Canada", code: "ca" },
                { name: "Thailand", code: "th" },
                { name: "Vietnam", code: "vn" },
                { name: "Cambodia", code: "kh" },
                { name: "Portugal", code: "pt" },
                { name: "Spain", code: "es" },
                { name: "Italy", code: "it" },
                { name: "Denmark", code: "dk" },
                { name: "Netherlands", code: "nl" },
                { name: "Germany", code: "de" },
                { name: "Switzerland", code: "ch" },
                { name: "Costa Rica", code: "cr" },
                { name: "Mexico", code: "mx" },
                { name: "Belize", code: "bz" },
                { name: "Honduras", code: "hn" },
                { name: "Slovenia", code: "si" },
                { name: "Greece", code: "gr" },
                { name: "Czech Republic", code: "cz" },
                { name: "Puerto Rico", code: "pr" },
                { name: "Barbados", code: "bb" },
                { name: "Morocco", code: "ma" },
                { name: "France", code: "fr" },
                { name: "India", code: "in" },
                { name: "Norway", code: "no" },
                { name: "Singapore", code: "sg" },
                { name: "The Bahamas", code: "bs" },
                { name: "Croatia", code: "hr" },
                { name: "United Kingdom", code: "gb" },
              ].map((country) => (
                <span
                  key={country.name}
                  style={{
                    background: "#F5F0E8",
                    border: "1px solid rgba(200,184,154,0.4)",
                    padding: "0.5rem 1rem",
                    fontSize: "0.78rem",
                    color: "#2C2C2A",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.375rem",
                    borderRadius: 0,
                  }}
                >
                  <span className={`fi fi-${country.code}`} />{country.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "120px 0",
          background: "#1A1916",
          textAlign: "center",
        }}
      >
        <div
          style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px" }}
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
              Let&apos;s Begin
            </p>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontWeight: 300,
                fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
                letterSpacing: "0.04em",
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Let&apos;s Plan Something Extraordinary
            </h2>
            <p
              style={{
                fontFamily: '"Jost", sans-serif',
                fontWeight: 300,
                fontSize: "0.95rem",
                color: "#8A8478",
                lineHeight: 1.75,
                marginBottom: "3rem",
              }}
            >
              Share your vision and we&apos;ll design a journey around it —
              wherever that may be.
            </p>
            <Link href="/contact" className="btn-gold">
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

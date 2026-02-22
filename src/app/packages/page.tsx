import Link from "next/link";
import { Check, Compass, Map, Crown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const S = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 60px",
} as const;
const C = "px-6 sm:px-10 lg:px-[60px]";

const packages = [
  {
    name: "Explorer",
    icon: Compass,
    price: "Starting at $350",
    tagline: "For the independent traveler who wants a refined game plan.",
    features: [
      "Custom day-by-day itinerary",
      "Curated dining recommendations",
      "Budget breakdown & insider tips",
      "Accommodation suggestions",
      "Google Maps integration with pins",
      "One round of revisions",
    ],
    ideal: "Solo trips, weekend getaways, budget-conscious travelers",
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Navigator",
    icon: Map,
    price: "Starting at $800",
    tagline: "For travelers who want meticulous planning with ongoing support.",
    features: [
      "Everything in Explorer, plus:",
      "Detailed activity planning with alternatives",
      "Flight & transit route optimization",
      "Booking guidance & reservation links",
      "Local secrets & hidden gems curation",
      "Destination-tailored packing list",
      "Two rounds of revisions",
      "Email support during your trip",
    ],
    ideal: "Couples, small groups, multi-city journeys",
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Concierge",
    icon: Crown,
    price: "Starting at $2,000",
    tagline: "White-glove, end-to-end service. Every detail handled — you simply arrive.",
    features: [
      "Everything in Navigator, plus:",
      "Full booking assistance (flights, hotels, experiences)",
      "Restaurant reservations secured",
      "Private transfers & VIP experiences sourced",
      "Real-time itinerary adjustments",
      "Dedicated support throughout your trip",
      "Unlimited revisions",
      "Post-trip follow-up & recommendations",
    ],
    ideal: "Luxury trips, honeymoons, large groups, special occasions",
    cta: "Go Premium",
    featured: false,
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden flex items-end justify-center text-white text-center"
        style={{
          backgroundImage: "url('/trips/puerto_rico.JPG')",
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
            Services
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
            Packages & Pricing
          </h1>
          <p
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Three tiers designed around how much support you desire — from a
            curated itinerary to full concierge service.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section style={{ padding: "120px 0", background: "#F5F0E8" }}>
        <div style={S} className={C}>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: "rgba(200,184,154,0.3)" }}>
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i + 1 as 1 | 2 | 3}>
                <div
                  style={{
                    background: "#FDFAF5",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  {pkg.featured && (
                    <div
                      style={{
                        background: "#A8906A",
                        color: "#fff",
                        textAlign: "center",
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 300,
                        fontSize: "0.65rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        padding: "0.625rem",
                      }}
                    >
                      Most Popular
                    </div>
                  )}

                  <div style={{ padding: "2.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.875rem",
                        marginBottom: "1.75rem",
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
                        }}
                      >
                        <pkg.icon style={{ width: "16px", height: "16px", color: "#A8906A" }} />
                      </div>
                      <h2
                        style={{
                          fontFamily: '"Cormorant Garamond", Georgia, serif',
                          fontWeight: 300,
                          fontSize: "1.75rem",
                          letterSpacing: "0.04em",
                          color: "#2C2C2A",
                          margin: 0,
                        }}
                      >
                        {pkg.name}
                      </h2>
                    </div>

                    <div
                      style={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        fontWeight: 300,
                        fontSize: "2rem",
                        letterSpacing: "0.02em",
                        color: "#2C2C2A",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {pkg.price}
                    </div>
                    <p
                      style={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 300,
                        fontSize: "0.875rem",
                        color: "#8A8478",
                        marginBottom: "2.25rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {pkg.tagline}
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.875rem",
                        marginBottom: "2.25rem",
                        flex: 1,
                      }}
                    >
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            fontFamily: '"Jost", sans-serif',
                            fontWeight: 300,
                            fontSize: "0.875rem",
                            color: "#2C2C2A",
                          }}
                        >
                          <Check
                            style={{
                              width: "14px",
                              height: "14px",
                              color: "#A8906A",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        background: "#F5F0E8",
                        padding: "1rem",
                        marginBottom: "2.25rem",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: '"Jost", sans-serif',
                          fontWeight: 300,
                          fontSize: "0.78rem",
                          color: "#8A8478",
                        }}
                      >
                        <span style={{ color: "#2C2C2A" }}>Ideal for: </span>
                        {pkg.ideal}
                      </p>
                    </div>

                    <Link href="/contact" className="btn-gold" style={{ width: "100%", textAlign: "center" }}>
                      {pkg.cta}
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "120px 0", background: "#FDFAF5" }}>
        <div
          style={{ maxWidth: "680px", margin: "0 auto" }}
          className="px-6"
        >
          <ScrollReveal>
            <div style={{ marginBottom: "80px" }}>
              <p className="eyebrow" style={{ marginBottom: "40px" }}>FAQ</p>
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
                  Common Questions
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {[
              {
                q: "Why a price range instead of a fixed price?",
                a: "Trip complexity varies significantly. A three-day city break is quite different from a three-week multi-country route. I provide an exact quote after our initial conversation based on your destination, duration, and group size.",
              },
              {
                q: "Can I upgrade my package later?",
                a: "Yes. If you begin with Explorer and decide you'd like booking assistance, we can seamlessly upgrade to Navigator or Concierge — crediting what you've already invested.",
              },
              {
                q: "What destinations do you cover?",
                a: "I've personally traveled to 29 countries across North America, Asia, Europe, Central America, Africa, and beyond. For destinations I haven't yet visited, I conduct thorough research and draw on my network of fellow travelers.",
              },
              {
                q: "How far in advance should I book?",
                a: "Ideally 4–8 weeks for Explorer or Navigator, and 8–12 weeks for Concierge since booking coordination requires additional lead time. That said, last-minute trips are not out of the question.",
              },
              {
                q: "Do you handle group trips?",
                a: "It's one of my specialties. I've planned journeys for groups as large as seventeen. Group pricing falls within the ranges listed above.",
              },
            ].map((item) => (
              <ScrollReveal key={item.q}>
                <div
                  style={{
                    borderBottom: "1px solid rgba(200,184,154,0.4)",
                    paddingBottom: "2.5rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 300,
                      fontSize: "1.4rem",
                      letterSpacing: "0.04em",
                      color: "#2C2C2A",
                      marginBottom: "1rem",
                    }}
                  >
                    {item.q}
                  </h3>
                  <p
                    style={{
                      fontFamily: '"Jost", sans-serif',
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      color: "#8A8478",
                      lineHeight: 1.8,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ padding: "120px 0", background: "#1A1916", textAlign: "center" }}
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
              Not Sure
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
              Let Me Recommend the Right Fit
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
              Share your trip details and I&apos;ll suggest the package that
              best serves your vision.
            </p>
            <Link href="/contact" className="btn-gold">
              Let&apos;s Chat
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

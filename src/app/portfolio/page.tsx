import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Users, DollarSign, Camera } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const S = {
  maxWidth: "1400px",
  margin: "0 auto",
  padding: "0 60px",
} as const;
const C = "px-6 sm:px-10 lg:px-[60px]";

const trips = [
  {
    title: "Thailand Villa Retreat",
    image: "/trips/thai_villa.JPG",
    location: "Koh Samui & Bangkok, Thailand",
    duration: "10 days",
    groupSize: "17 people",
    budget: "Luxury",
    description:
      "Coordinated a private villa stay for 17 friends across Koh Samui and Bangkok — blending lazy pool days and golden-hour beach sessions with hands-on cultural experiences and late-night street food crawls through Bangkok's best neighborhoods.",
    highlights: [
      "Beachfront villa with infinity pool for the full group",
      "Private longtail boat tour to Ang Thong Marine Park",
      "Hands-on Thai cooking class with a local chef",
      "Guided night market food crawl through Chinatown",
    ],
  },
  {
    title: "Banff Couple's Vacation",
    image: "/trips/banff_street.JPG",
    location: "Banff, Alberta, Canada",
    duration: "7 days",
    groupSize: "Couple",
    budget: "Luxury",
    description:
      "A romantic week in the Canadian Rockies designed for couples who want equal parts adventure and downtime — alpine hikes to turquoise lakes by day, fireside dinners with mountain views by night.",
    highlights: [
      "Guided sunrise hike to Lake Louise overlook",
      "Fireside dinners at Banff's top-rated lodges",
      "Scenic drive along the Icefields Parkway",
      "Couples spa day at a luxury mountain resort",
    ],
  },
  {
    title: "Southeast Asia Backpacking Trip",
    image: "/trips/thai_temple.JPG",
    location: "Singapore, Thailand & Vietnam",
    duration: "14 days",
    groupSize: "Group of 4",
    budget: "Budget",
    description:
      "Two weeks, three countries, zero wasted days. A tightly planned backpacking route that trades tourist traps for hole-in-the-wall street food stalls, overnight trains, and the kind of hidden spots only locals know.",
    highlights: [
      "Overnight sleeper train from Bangkok to Chiang Mai",
      "Hawker center food crawl through Singapore",
      "Ha Long Bay overnight cruise on a budget",
      "Hidden gems and local-only spots in each city",
    ],
  },
  {
    title: "Mexico City Long Weekend",
    image: "/trips/mexico_city.JPG",
    location: "CDMX, Mexico",
    duration: "4 days",
    groupSize: "Group of 6",
    budget: "Mid-Range",
    description:
      "Four days in one of the world's greatest food cities, paced so nothing feels rushed. Built around neighborhood-hopping, market grazing, and the right mix of culture, nightlife, and mezcal.",
    highlights: [
      "Neighborhood-by-neighborhood taco and mezcal map",
      "Front-row seats at a Friday night lucha libre match",
      "Xochimilco floating garden boat trip with the crew",
      "Rooftop cocktail bars with views of the volcanoes",
    ],
  },
  {
    title: "Costa Rica Girls Trip",
    image: "/trips/costa_rica.JPG",
    location: "Tamarindo, Costa Rica",
    duration: "7 days",
    groupSize: "Group of 2",
    budget: "Mid-Range",
    description:
      "One week along the west coast of Costa Rica, balancing budget-friendly stays and sunrise surf lessons with beachfront yoga, jungle zip-lining, and golden-hour cocktails at the right spots.",
    highlights: [
      "Beginner-friendly surf lessons on Tamarindo Beach",
      "Zip-lining through the cloud forest canopy",
      "Beachfront yoga sessions and sunset happy hours",
      "Scenic coastal drive to hidden beaches",
    ],
  },
  {
    title: "Italian Solo Adventure",
    image: "/trips/rome.JPG",
    location: "Amalfi Coast, Italy",
    duration: "12 days",
    groupSize: "Solo traveler",
    budget: "Budget-Friendly",
    description:
      "A solo traveler's dream route along Italy's most stunning coastline — built around charming hostel stays, cliff-side boat tours, lemon grove walks, and a curated list of the best wood-fired pizza from Sorrento to Salerno.",
    highlights: [
      "Handpicked hostels with sea views under €40/night",
      "Private boat tour along the Amalfi cliffs",
      "Pizza trail mapped from Sorrento to Salerno",
      "Golden-hour day trips to Positano and Ravello",
    ],
  },
];

const destinations = [
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
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden flex items-end justify-center text-white text-center"
        style={{
          backgroundImage: "url('/trips/thai_temple_colorful.JPG')",
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
            Our Work
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
            Portfolio
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
            A curated selection of journeys — from budget backpacking to
            luxury honeymoons, solo adventures to groups of seventeen.
          </p>
        </div>
      </section>

      {/* Trip Showcases */}
      <section style={{ padding: "120px 0", background: "#F5F0E8" }}>
        <div style={S} className={C}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
            {trips.map((trip) => (
              <ScrollReveal key={trip.title}>
                <div
                  style={{
                    background: "#FDFAF5",
                    padding: "3rem",
                  }}
                  className="flex flex-col md:flex-row md:items-start gap-10"
                >
                  <div style={{ flex: 1 }}>
                    <h2
                      style={{
                        fontFamily: '"Cormorant Garamond", Georgia, serif',
                        fontWeight: 300,
                        fontSize: "2rem",
                        letterSpacing: "0.04em",
                        color: "#2C2C2A",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {trip.title}
                    </h2>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "1.25rem",
                        marginBottom: "1.75rem",
                      }}
                    >
                      {[
                        { Icon: MapPin, text: trip.location },
                        { Icon: Calendar, text: trip.duration },
                        { Icon: Users, text: trip.groupSize },
                        { Icon: DollarSign, text: trip.budget },
                      ].map(({ Icon, text }) => (
                        <span
                          key={text}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            fontFamily: '"Jost", sans-serif',
                            fontWeight: 300,
                            fontSize: "0.72rem",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "#8A8478",
                          }}
                        >
                          <Icon style={{ width: "12px", height: "12px", color: "#A8906A" }} />
                          {text}
                        </span>
                      ))}
                    </div>

                    <p
                      style={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 300,
                        fontSize: "0.875rem",
                        color: "#8A8478",
                        lineHeight: 1.8,
                        marginBottom: "2.25rem",
                        maxWidth: "560px",
                      }}
                    >
                      {trip.description}
                    </p>

                    <p
                      style={{
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 300,
                        fontSize: "0.6rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#A8906A",
                        marginBottom: "1.25rem",
                      }}
                    >
                      Trip Highlights
                    </p>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                        gap: "0.75rem",
                      }}
                    >
                      {trip.highlights.map((h) => (
                        <li
                          key={h}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.625rem",
                            fontFamily: '"Jost", sans-serif',
                            fontWeight: 300,
                            fontSize: "0.875rem",
                            color: "#8A8478",
                          }}
                        >
                          <span style={{ color: "#C8B89A", fontSize: "0.65rem", marginTop: "4px", flexShrink: 0 }}>&#9670;</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="flex-shrink-0 w-full md:w-[480px]"
                    style={{ height: "360px", overflow: "hidden", position: "relative", background: "#E8E2DA" }}
                  >
                    {trip.image ? (
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 480px"
                        style={{ filter: "saturate(0.88) contrast(1.02)" }}
                      />
                    ) : (
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Camera style={{ width: "40px", height: "40px", color: "rgba(138,132,120,0.2)" }} />
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section style={{ padding: "120px 0", background: "#FDFAF5" }}>
        <div style={S} className={C}>
          <ScrollReveal>
            <div style={{ marginBottom: "64px" }}>
              <p className="eyebrow" style={{ marginBottom: "40px" }}>Destinations</p>
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
                  29 Countries & Counting
                </h2>
              </div>
              <p
                style={{
                  marginTop: "1.5rem",
                  color: "#8A8478",
                  fontWeight: 300,
                  fontSize: "0.875rem",
                  maxWidth: "520px",
                  lineHeight: 1.75,
                }}
              >
                Every destination I plan for is informed by lived experience and thorough research. Here
                are the places I&apos;ve personally explored.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-3">
              {destinations.map((country) => (
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
              Your Turn
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
              Ready for a Journey Like These?
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
              Every itinerary is bespoke. Tell me where you dream of going and
              I&apos;ll bring it to life.
            </p>
            <Link href="/contact" className="btn-gold">
              Plan My Trip
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

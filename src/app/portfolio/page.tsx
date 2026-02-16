import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Calendar,
  Users,
  DollarSign,
  ArrowRight,
  Camera,
} from "lucide-react";

const trips = [
  {
    title: "Thailand Villa Retreat",
    image: "/trips/thailand-beach.jpg",
    location: "Koh Samui & Bangkok, Thailand",
    duration: "10 days",
    groupSize: "17 people",
    budget: "Mid-Range to Luxury",
    description:
      "Coordinated a villa stay for 17 friends with group activities, solo time built in, and a mix of beach days, temple visits, and Bangkok street food tours.",
    highlights: [
      "Private villa with pool for the full group",
      "Organized Thai cooking class",
      "Night market food crawl in Bangkok",
      "Island-hopping day trip to Ang Thong",
    ],
  },
  {
    title: "Portugal Solo Adventure",
    image: "/trips/ocean-path.jpg",
    location: "Lisbon, Porto & The Algarve",
    duration: "12 days",
    groupSize: "Solo traveler",
    budget: "Budget-Friendly",
    description:
      "Designed a budget-friendly route through Portugal's best cities and coastline, with hostel picks, free walking tours, and the best past\u00e9is de nata spots.",
    highlights: [
      "Under $60/day average including food",
      "Curated neighborhood food guides",
      "Day trip to Sintra's palaces",
      "Hidden beach recommendations in Algarve",
    ],
  },
  {
    title: "Italy & Greece Honeymoon",
    image: "/trips/coastal-villas.jpg",
    location: "Rome, Amalfi Coast, Santorini & Athens",
    duration: "14 days",
    groupSize: "Couple",
    budget: "Luxury",
    description:
      "A romantic two-week journey through Italy and Greece with sunset dinners, private boat tours, and carefully paced days that balanced sightseeing with relaxation.",
    highlights: [
      "Private sunset cruise in Santorini",
      "Reservations at top-rated restaurants",
      "Mix of boutique hotels & luxury stays",
      "Built-in free mornings for spontaneity",
    ],
  },
  {
    title: "Southeast Asia Backpacking Route",
    image: "/trips/sea-boats.jpg",
    location: "Vietnam, Cambodia & Laos",
    duration: "21 days",
    groupSize: "Group of 4",
    budget: "Budget",
    description:
      "A three-week backpacking route through three countries, optimized for cost without sacrificing experiences. Focused on local food, overnight buses, and off-the-beaten-path stops.",
    highlights: [
      "Full route with transport between cities",
      "Street food guide for every city",
      "Ha Long Bay overnight on a budget",
      "Angkor Wat sunrise strategy",
    ],
  },
  {
    title: "Mexico City Long Weekend",
    image: undefined,
    location: "CDMX, Mexico",
    duration: "4 days",
    groupSize: "Group of 6",
    budget: "Mid-Range",
    description:
      "A packed but breathable long weekend in one of the world's best food cities. Taco tours, mezcal bars, Frida Kahlo museum, and neighborhood walks.",
    highlights: [
      "Neighborhood-by-neighborhood food map",
      "Lucha libre night out",
      "Xochimilco boat trip",
      "Rooftop bars with volcano views",
    ],
  },
  {
    title: "Japan Cherry Blossom Season",
    image: undefined,
    location: "Tokyo, Kyoto, Osaka & Hakone",
    duration: "16 days",
    groupSize: "Couple",
    budget: "Mid-Range to Luxury",
    description:
      "Timed perfectly for sakura season with a JR Pass route through Japan's highlights. Balanced traditional temples with neon-lit city nights and incredible food at every turn.",
    highlights: [
      "Cherry blossom viewing spots mapped",
      "JR Pass optimized routing",
      "Ramen & sushi restaurant picks per city",
      "Ryokan stay with onsen in Hakone",
    ],
  },
];

const destinations = [
  "Thailand",
  "Vietnam",
  "Cambodia",
  "Laos",
  "Japan",
  "Portugal",
  "Spain",
  "Italy",
  "Greece",
  "France",
  "Mexico",
  "Costa Rica",
  "Colombia",
  "Peru",
  "Morocco",
  "Turkey",
  "Croatia",
  "Czech Republic",
  "Netherlands",
  "UK",
  "Germany",
  "Austria",
  "Hungary",
  "Bali",
  "Philippines",
  "South Korea",
  "Iceland",
  "Switzerland",
  "Ireland",
];

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            Our Work
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            Portfolio
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-light">
            A curated selection of journeys — from budget backpacking to
            luxury honeymoons, solo adventures to groups of seventeen.
          </p>
        </div>
      </section>

      {/* Trip Showcases */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-16">
            {trips.map((trip) => (
              <div
                key={trip.title}
                className="bg-warm p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-10">
                  <div className="flex-1">
                    <h2 className="font-serif text-2xl font-semibold text-primary mb-4">
                      {trip.title}
                    </h2>

                    <div className="flex flex-wrap gap-5 text-xs text-text-light tracking-wider uppercase mb-6">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3 w-3 text-accent" /> {trip.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="h-3 w-3 text-accent" /> {trip.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3 w-3 text-accent" /> {trip.groupSize}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <DollarSign className="h-3 w-3 text-accent" /> {trip.budget}
                      </span>
                    </div>

                    <p className="text-text-light leading-relaxed mb-8 text-sm">
                      {trip.description}
                    </p>

                    <h3 className="text-xs font-medium text-accent tracking-[0.2em] uppercase mb-4">
                      Trip Highlights
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2.5">
                      {trip.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2.5 text-sm text-text-light"
                        >
                          <span className="text-accent text-xs mt-1">&#9670;</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-shrink-0 w-full md:w-64 h-48 overflow-hidden relative bg-warm-dark">
                    {trip.image ? (
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Camera className="h-10 w-10 text-text-light/20" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Destinations
          </p>
          <h2 className="font-serif text-3xl font-semibold text-primary mb-5">
            29 Countries & Counting
          </h2>
          <p className="text-text-light mb-12 max-w-xl mx-auto text-sm leading-relaxed">
            Every destination I plan for is informed by lived experience. Here
            are the places I&apos;ve personally explored.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {destinations.map((dest) => (
              <span
                key={dest}
                className="bg-white px-5 py-2 text-xs font-medium text-primary tracking-wider uppercase"
              >
                {dest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            Your Turn
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-5">
            Ready for a Journey Like These?
          </h2>
          <p className="text-white/50 mb-10 font-light">
            Every itinerary is bespoke. Tell me where you dream of going and
            I&apos;ll bring it to life.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-primary px-10 py-4 font-medium text-sm tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-3"
          >
            Plan My Trip <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

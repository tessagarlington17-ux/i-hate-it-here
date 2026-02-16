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
    color: "bg-amber-50",
    accent: "text-amber-600",
  },
  {
    title: "Portugal Solo Adventure",
    image: "/trips/ocean-path.jpg",
    location: "Lisbon, Porto & The Algarve",
    duration: "12 days",
    groupSize: "Solo traveler",
    budget: "Budget-Friendly",
    description:
      "Designed a budget-friendly route through Portugal's best cities and coastline, with hostel picks, free walking tours, and the best pastéis de nata spots.",
    highlights: [
      "Under $60/day average including food",
      "Curated neighborhood food guides",
      "Day trip to Sintra's palaces",
      "Hidden beach recommendations in Algarve",
    ],
    color: "bg-blue-50",
    accent: "text-blue-600",
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
    color: "bg-rose-50",
    accent: "text-rose-600",
  },
  {
    title: "Southeast Asia Backpacking Route",
    image: "/trips/sea-boats.jpg",
    location: "Vietnam, Cambodia & Laos",
    duration: "21 days",
    groupSize: "Group of 4",
    budget: "Budget",
    description:
      "A 3-week backpacking route through three countries, optimized for cost without sacrificing experiences. Focused on local food, overnight buses, and off-the-beaten-path stops.",
    highlights: [
      "Full route with transport between cities",
      "Street food guide for every city",
      "Ha Long Bay overnight on a budget",
      "Angkor Wat sunrise strategy",
    ],
    color: "bg-emerald-50",
    accent: "text-emerald-600",
  },
  {
    title: "Mexico City Long Weekend",
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
    color: "bg-orange-50",
    accent: "text-orange-600",
  },
  {
    title: "Japan Cherry Blossom Season",
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
    color: "bg-pink-50",
    accent: "text-pink-600",
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
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary-light text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Portfolio</h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            A sampling of trips I&apos;ve planned — from budget backpacking to
            luxury honeymoons, solo adventures to groups of 17.
          </p>
        </div>
      </section>

      {/* Trip Showcases */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-12">
            {trips.map((trip, index) => (
              <div
                key={trip.title}
                className={`${trip.color} rounded-2xl p-8 md:p-10`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-primary mb-2">
                      {trip.title}
                    </h2>

                    <div className="flex flex-wrap gap-4 text-sm text-text-light mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {trip.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {trip.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" /> {trip.groupSize}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" /> {trip.budget}
                      </span>
                    </div>

                    <p className="text-text-light leading-relaxed mb-5">
                      {trip.description}
                    </p>

                    <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">
                      Trip Highlights
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {trip.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-sm text-text"
                        >
                          <span className={`${trip.accent} mt-1`}>&#9679;</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex-shrink-0 w-full md:w-64 h-48 rounded-xl overflow-hidden relative">
                    {trip.image ? (
                      <Image
                        src={trip.image}
                        alt={trip.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/60 flex items-center justify-center">
                        <Camera className="h-12 w-12 text-text-light/30" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Map */}
      <section className="py-20 bg-warm/40">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            29 Countries & Counting
          </h2>
          <p className="text-text-light mb-10 max-w-xl mx-auto">
            Every destination I plan for is informed by real experience. Here
            are the places I&apos;ve personally explored.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {destinations.map((dest) => (
              <span
                key={dest}
                className="bg-white px-4 py-2 rounded-full text-sm font-medium text-primary shadow-sm"
              >
                {dest}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Want a Trip Like These?
          </h2>
          <p className="text-white/80 mb-8">
            Every itinerary is custom-built. Tell me where you want to go and
            I&apos;ll make it happen.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            Plan My Trip <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

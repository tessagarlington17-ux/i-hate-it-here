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
import ScrollReveal from "@/components/ScrollReveal";

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
      "Handpicked hostels with sea views under \u20AC40/night",
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
        className="text-white text-center relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/trips/thai_temple_colorful.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          minHeight: "98vh",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.1))" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-7">
            Our Work
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] font-medium mb-6 leading-[1.1]">
            Portfolio
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto font-light leading-relaxed">
            A curated selection of journeys — from budget backpacking to
            luxury honeymoons, solo adventures to groups of seventeen.
          </p>
        </div>
      </section>

      {/* Trip Showcases */}
      <section className="py-16 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-20">
            {trips.map((trip) => (
              <ScrollReveal key={trip.title}>
                <div className="bg-warm p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-10">
                    <div className="flex-1">
                      <h2 className="font-serif text-2xl font-medium text-primary mb-5">
                        {trip.title}
                      </h2>

                      <div className="flex flex-wrap gap-5 text-xs text-text-light tracking-wider uppercase mb-7">
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

                      <p className="text-text-light leading-[1.8] mb-9 text-sm max-w-[580px]">
                        {trip.description}
                      </p>

                      <h3 className="text-[10px] font-medium text-accent tracking-[0.2em] uppercase mb-5">
                        Trip Highlights
                      </h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
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

                    <div className="flex-shrink-0 w-full md:w-[512px] h-[31rem] overflow-hidden relative bg-warm-dark">
                      {trip.image ? (
                        <Image
                          src={trip.image}
                          alt={trip.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 512px"
                          style={{ filter: "saturate(0.92)" }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Camera className="h-10 w-10 text-text-light/20" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
              Destinations
            </p>
            <h2 className="font-serif text-3xl sm:text-[2.25rem] font-medium text-primary mb-6">
              29 Countries & Counting
            </h2>
            <p className="text-text-light mb-14 max-w-xl mx-auto text-sm leading-relaxed">
              Every destination I plan for is informed by lived experience and thorough research. Here
              are the places I&apos;ve personally explored.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {destinations.map((country) => (
                <span
                  key={country.name}
                  className="bg-[var(--background)] px-4 py-2.5 rounded-full text-xs text-primary font-medium tracking-wide border border-warm-dark/30 inline-flex items-center gap-1.5"
                >
                  <span className={`fi fi-${country.code}`} />{country.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
              Your Turn
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6 leading-tight">
              Ready for a Journey Like These?
            </h2>
            <p className="text-white/45 mb-12 font-light leading-relaxed">
              Every itinerary is bespoke. Tell me where you dream of going and
              I&apos;ll bring it to life.
            </p>
            <Link
              href="/contact"
              className="bg-accent hover:bg-[#232f3a] text-white px-8 py-4 text-[11px] font-medium tracking-[0.08em] uppercase rounded-[6px] transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-3 hover:shadow-[0_4px_16px_rgba(46,58,70,0.4)]"
            >
              Plan My Trip <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

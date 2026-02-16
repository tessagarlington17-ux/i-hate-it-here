import Link from "next/link";
import {
  MapPin,
  Globe,
  Utensils,
  Calendar,
  Star,
  ArrowRight,
  Users,
} from "lucide-react";

const stats = [
  { icon: Globe, value: "29", label: "Countries" },
  { icon: MapPin, value: "100+", label: "Trips Curated" },
  { icon: Users, value: "3K+", label: "Happy Travelers" },
  { icon: Star, value: "5.0", label: "Client Rating" },
];

const strengths = [
  {
    icon: Calendar,
    title: "Unhurried Itineraries",
    description:
      "Every journey includes space to breathe. No rigid timelines — just thoughtful structure that leaves room for spontaneity.",
  },
  {
    icon: Utensils,
    title: "Culinary Discovery",
    description:
      "From Michelin-starred restaurants to hidden local gems — every itinerary is woven with unforgettable dining experiences.",
  },
  {
    icon: MapPin,
    title: "Every Budget, Elevated",
    description:
      "Whether it's a boutique hostel or a private villa for 17 — every trip is planned with the same meticulous care and attention.",
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
      "I gave her a modest budget and she crafted the most incredible solo adventure. The dining recommendations alone transformed the entire experience.",
    author: "James K.",
    trip: "Portugal",
  },
  {
    quote:
      "Our honeymoon struck the perfect balance of adventure and tranquility. We never felt rushed, yet experienced everything on our list.",
    author: "The Nguyens",
    trip: "Italy & Greece",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary-light/50 to-primary" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pt-20">
          <p className="text-accent font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-8">
            Bespoke Travel Planning
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-semibold leading-[1.1] mb-8">
            The World is Waiting.
            <br />
            <span className="text-accent italic">Stop Scrolling.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Personalized itineraries crafted with intention — from culinary
            adventures to hidden escapes, designed for travelers who want more
            than a checklist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-accent hover:bg-accent-light text-primary px-10 py-4 font-medium text-sm tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-3"
            >
              View Packages <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="border border-white/20 hover:border-white/40 text-white px-10 py-4 font-medium text-sm tracking-widest uppercase transition-colors inline-flex items-center justify-center"
            >
              See My Work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--background)] to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-6 w-6 text-accent mx-auto mb-4" />
                <div className="font-serif text-4xl font-semibold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-text-light tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-24 mx-auto border-t border-warm-dark" />

      {/* What I Do Best */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              The Experience
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-5">
              What Sets Us Apart
            </h2>
            <p className="text-text-light max-w-xl mx-auto leading-relaxed">
              Years of personal travel across every continent and budget —
              distilled into planning that feels effortless.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-warm rounded-sm p-10 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 border border-accent/30 flex items-center justify-center mb-6">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-light leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-warm">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              The Process
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary mb-5">
              From Vision to Voyage
            </h2>
            <p className="text-text-light">
              A refined, four-step process designed to make planning effortless.
            </p>
          </div>

          <div className="space-y-10">
            {[
              {
                step: "01",
                title: "Share Your Vision",
                desc: "Tell me about your dream destination, travel style, budget, and the moments that matter most to you.",
              },
              {
                step: "02",
                title: "Receive Your Itinerary",
                desc: "A meticulously crafted day-by-day plan with curated dining, experiences, logistics, and breathing room built in.",
              },
              {
                step: "03",
                title: "Refine Together",
                desc: "We fine-tune every detail until it feels perfect. Higher tiers include full booking assistance.",
              },
              {
                step: "04",
                title: "Travel with Confidence",
                desc: "Depart with a polished itinerary, insider knowledge, and support should anything change along the way.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-8 items-start">
                <div className="flex-shrink-0 font-serif text-3xl font-semibold text-accent/40">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-light leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-primary">
              Words from Fellow Travelers
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="border border-warm-dark p-8 sm:p-10"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-text-light leading-relaxed mb-8 text-sm italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-warm-dark pt-5">
                  <p className="font-medium text-primary text-sm">
                    {t.author}
                  </p>
                  <p className="text-xs text-text-light tracking-wider uppercase mt-1">
                    {t.trip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            Begin Your Journey
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            Ready to See the World Differently?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto font-light">
            Whether it&apos;s a weekend escape or a month-long odyssey —
            let&apos;s craft something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-primary px-10 py-4 font-medium text-sm tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-3"
            >
              Start Planning <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/packages"
              className="border border-white/20 hover:border-white/40 text-white px-10 py-4 font-medium text-sm tracking-widest uppercase transition-colors inline-flex items-center justify-center"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

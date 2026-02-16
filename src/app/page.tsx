import Link from "next/link";
import {
  MapPin,
  Globe,
  Utensils,
  Calendar,
  Star,
  ArrowRight,
  Users,
  CheckCircle,
} from "lucide-react";

const stats = [
  { icon: Globe, value: "29", label: "Countries Visited" },
  { icon: MapPin, value: "100+", label: "Trips Planned" },
  { icon: Users, value: "3K+", label: "Community Members" },
  { icon: Star, value: "5★", label: "Client Rating" },
];

const strengths = [
  {
    icon: Calendar,
    title: "Flexible Itineraries",
    description:
      "Every trip includes built-in breathing room. No rigid schedules — just smart planning that lets you wander when inspiration strikes.",
  },
  {
    icon: Utensils,
    title: "Local Food Finds",
    description:
      "Skip the tourist traps. I'll point you to the street stalls, hidden bistros, and local favorites that make a trip unforgettable.",
  },
  {
    icon: MapPin,
    title: "Full-Spectrum Budgets",
    description:
      "From $30/night hostels to luxury villas for 17 — I plan across every budget with the same attention to detail.",
  },
];

const testimonials = [
  {
    quote:
      "She planned a 2-week Southeast Asia trip for our group of 8, and every single detail was perfect. The villa in Thailand was a dream.",
    author: "Sarah M.",
    trip: "Thailand & Vietnam, Group Trip",
  },
  {
    quote:
      "I gave her a shoestring budget and she turned it into the best solo trip I've ever taken. The food recommendations alone were worth it.",
    author: "James K.",
    trip: "Portugal, Solo Budget Trip",
  },
  {
    quote:
      "Our honeymoon itinerary had the perfect mix of adventure and relaxation. We never felt rushed but saw everything we wanted.",
    author: "The Nguyens",
    trip: "Italy & Greece, Honeymoon",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white pt-16">
          <p className="text-accent-light font-medium tracking-wider uppercase text-sm mb-4">
            29 Countries &middot; Every Budget &middot; Zero Stress
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Travel Planning by Someone Who&apos;s{" "}
            <span className="text-accent-light">Actually Been There</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Personalized itineraries with built-in flexibility, killer food
            spots, and the logistics handled — so you can just enjoy the trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              View Packages <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              See My Work
            </Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-8 w-8 text-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-text-light mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Best */}
      <section className="py-20 bg-warm/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              What I Do Best
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Years of personal travel across every budget level — distilled
              into planning that actually works.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-text-light">
              From first chat to boarding pass — a simple process.
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Tell Me Your Dream Trip",
                desc: "Fill out a quick form with your destination ideas, budget, travel style, and must-haves.",
              },
              {
                step: "02",
                title: "Get Your Custom Itinerary",
                desc: "I'll build a detailed day-by-day plan with restaurants, activities, logistics, and breathing room built in.",
              },
              {
                step: "03",
                title: "Refine & Book",
                desc: "We'll fine-tune together until it's perfect. Higher tiers include full booking assistance.",
              },
              {
                step: "04",
                title: "Travel with Confidence",
                desc: "Head out with a polished itinerary, local tips, and support if anything changes on the ground.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-warm/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              What Travelers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-text-light leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-primary">{t.author}</p>
                  <p className="text-sm text-text-light">{t.trip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Whether it&apos;s a weekend getaway or a month-long expedition,
            let&apos;s make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Start Planning <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/packages"
              className="border-2 border-white/30 hover:border-white/60 text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              Compare Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-10 bg-white border-t border-warm-dark/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-text-light">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-success" /> 29 Countries of
              Experience
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-success" /> Budget to Luxury
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-success" /> Flexible
              Itineraries
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-success" /> Local Food Expert
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import {
  Check,
  ArrowRight,
  Compass,
  Map,
  Crown,
} from "lucide-react";

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
    tagline: "White-glove service. I handle everything — you simply arrive.",
    features: [
      "Everything in Navigator, plus:",
      "Full booking assistance (flights, hotels, experiences)",
      "Restaurant reservations secured",
      "Private transfers & VIP experiences sourced",
      "Real-time itinerary adjustments",
      "24/7 support during your trip",
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
        className="pt-32 pb-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/trips/sea-boats.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            Packages & Pricing
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-light">
            Three tiers designed around how much support you desire — from a
            curated itinerary to full concierge service.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-24 bg-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white flex flex-col overflow-hidden transition-shadow hover:shadow-lg ${
                  pkg.featured ? "ring-2 ring-accent relative" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="bg-accent text-primary text-center text-xs font-medium tracking-[0.2em] uppercase py-2.5">
                    Most Popular
                  </div>
                )}

                <div className="p-8 sm:p-10 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center">
                      <pkg.icon className="h-4 w-4 text-accent" />
                    </div>
                    <h2 className="font-serif text-2xl font-semibold text-primary">
                      {pkg.name}
                    </h2>
                  </div>

                  <div className="font-serif text-3xl font-semibold text-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-text-light text-sm mb-8">
                    {pkg.tagline}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-text"
                      >
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-warm rounded-sm p-4 mb-8">
                    <p className="text-xs text-text-light">
                      <span className="font-medium text-primary">
                        Ideal for:
                      </span>{" "}
                      {pkg.ideal}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-3.5 font-medium text-sm tracking-widest uppercase text-center transition-colors inline-flex items-center justify-center gap-2 ${
                      pkg.featured
                        ? "bg-accent hover:bg-accent-light text-primary"
                        : "bg-primary hover:bg-primary-light text-white"
                    }`}
                  >
                    {pkg.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-3xl font-semibold text-primary">
              Common Questions
            </h2>
          </div>

          <div className="space-y-10">
            {[
              {
                q: "Why a price range instead of a fixed price?",
                a: "Trip complexity varies significantly. A three-day city break is quite different from a three-week multi-country route. I provide an exact quote after our initial conversation based on your destination, duration, and group size.",
              },
              {
                q: "Can I upgrade my package later?",
                a: "Absolutely. If you begin with Explorer and decide you'd like booking assistance, we can seamlessly upgrade to Navigator or Concierge — crediting what you've already invested.",
              },
              {
                q: "What destinations do you cover?",
                a: "I've personally traveled to 29 countries across North America, Asia, Europe, Central America, Africa, and beyond. Even for destinations I haven't yet visited, I conduct thorough research and leverage my network of fellow travelers.",
              },
              {
                q: "How far in advance should I book?",
                a: "Ideally 4–8 weeks for Explorer or Navigator, and 8–12 weeks for Concierge since booking coordination requires additional time. That said, I've successfully orchestrated last-minute trips as well.",
              },
              {
                q: "Do you handle group trips?",
                a: "It's one of my specialties. I've planned journeys for groups as large as seventeen. Group pricing falls within the ranges listed above.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-warm-dark pb-8">
                <h3 className="font-serif text-lg font-semibold text-primary mb-3">
                  {item.q}
                </h3>
                <p className="text-text-light leading-relaxed text-sm">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            Not Sure?
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-5">
            Let Me Recommend the Right Fit
          </h2>
          <p className="text-white/50 mb-10 font-light">
            No pressure. Share your trip details and I&apos;ll suggest the
            package that best serves your vision.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-primary px-10 py-4 font-medium text-sm tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-3"
          >
            Let&apos;s Chat <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

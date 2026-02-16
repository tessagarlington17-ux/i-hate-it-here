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
    price: "$250 – $400",
    tagline: "Perfect for independent travelers who want a solid game plan.",
    features: [
      "Custom day-by-day itinerary",
      "Restaurant & food recommendations",
      "Budget breakdown & tips",
      "Accommodation suggestions",
      "Google Maps integration with pins",
      "One round of revisions",
    ],
    ideal: "Solo trips, weekend getaways, budget-conscious travelers",
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Navigator",
    icon: Map,
    price: "$600 – $1,200",
    tagline: "For travelers who want the planning done right — with support.",
    features: [
      "Everything in Explorer, plus:",
      "Detailed activity planning with alternatives",
      "Flight & transit route planning",
      "Booking links & reservation guidance",
      "Local tips & hidden gems list",
      "Packing list tailored to destination",
      "Two rounds of revisions",
      "Email support during your trip",
    ],
    ideal: "Couples, small groups, multi-city trips",
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Concierge",
    icon: Crown,
    price: "$1,500 – $3,000",
    tagline: "White-glove service. I handle everything — you just show up.",
    features: [
      "Everything in Navigator, plus:",
      "Full booking assistance (flights, hotels, activities)",
      "Restaurant reservations made for you",
      "Private transfers & VIP experiences sourced",
      "Real-time itinerary adjustments",
      "24/7 support during your trip",
      "Unlimited revisions",
      "Post-trip follow-up & recommendations",
    ],
    ideal: "Luxury trips, honeymoons, large group getaways, special occasions",
    cta: "Go Premium",
    popular: false,
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary-light text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Packages & Pricing
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Three tiers designed around how much help you want — from a
            detailed itinerary to full concierge service.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 bg-warm/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col ${
                  pkg.popular ? "ring-2 ring-accent relative" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="bg-accent text-white text-center text-sm font-semibold py-2">
                    Most Popular
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center">
                      <pkg.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary">
                      {pkg.name}
                    </h2>
                  </div>

                  <div className="text-3xl font-bold text-primary mb-2">
                    {pkg.price}
                  </div>
                  <p className="text-text-light text-sm mb-6">
                    {pkg.tagline}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-text"
                      >
                        <Check className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="bg-warm/60 rounded-lg p-3 mb-6">
                    <p className="text-xs text-text-light">
                      <span className="font-semibold text-text">
                        Ideal for:
                      </span>{" "}
                      {pkg.ideal}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={`w-full py-3 rounded-full font-semibold text-center transition-colors inline-flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? "bg-accent hover:bg-accent-light text-white"
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
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "Why the price range instead of a fixed price?",
                a: "Trip complexity varies a lot. A 3-day city break is different from a 3-week multi-country route. I'll give you an exact quote after our initial chat based on your destination, duration, and group size.",
              },
              {
                q: "Can I upgrade my package later?",
                a: "Absolutely. If you start with Explorer and decide you want booking help, we can upgrade to Navigator or Concierge and I'll credit what you've already paid.",
              },
              {
                q: "What destinations do you cover?",
                a: "I've personally traveled to 29 countries across Southeast Asia, Europe, Central America, and more. Even for places I haven't visited, I do deep research and tap into my network of fellow travelers.",
              },
              {
                q: "How far in advance should I book?",
                a: "Ideally 4-8 weeks before your trip for Explorer/Navigator, and 8-12 weeks for Concierge (since booking takes time). But I've pulled off last-minute trips too — just reach out.",
              },
              {
                q: "Do you handle group trips?",
                a: "Yes — it's one of my specialties. I've planned trips for groups as large as 17 people. Group pricing is included in the ranges above.",
              },
            ].map((item) => (
              <div key={item.q}>
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.q}
                </h3>
                <p className="text-text-light leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Package?</h2>
          <p className="text-white/80 mb-8">
            No pressure. Send me a message about your trip and I&apos;ll
            recommend the best fit.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            Let&apos;s Chat <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

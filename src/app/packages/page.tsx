import Link from "next/link";
import {
  Check,
  ArrowRight,
  Compass,
  Map,
  Crown,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

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
        className="text-white text-center relative overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/trips/puerto_rico_rainforest.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "98vh",
        }}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.1))" }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-white/80 text-xs tracking-[0.3em] uppercase mb-7">
            Services
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] font-medium mb-6 leading-[1.1]">
            Packages & Pricing
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Three tiers designed around how much support you desire — from a
            curated itinerary to full concierge service.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-32 bg-warm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-5">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.name} delay={i + 1}>
                <div
                  className={`bg-[var(--background)] flex flex-col overflow-hidden transition-shadow duration-300 ease-in-out h-full ${
                    pkg.featured ? "ring-1 ring-accent relative" : ""
                  }`}
                >
                  {pkg.featured && (
                    <div className="bg-accent text-white text-center text-[10px] font-medium tracking-[0.15em] uppercase py-2.5">
                      Most Popular
                    </div>
                  )}

                  <div className="p-8 sm:p-10 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-7">
                      <div className="w-10 h-10 border border-accent/20 flex items-center justify-center">
                        <pkg.icon className="h-4 w-4 text-accent" />
                      </div>
                      <h2 className="font-serif text-2xl font-medium text-primary">
                        {pkg.name}
                      </h2>
                    </div>

                    <div className="font-serif text-3xl font-medium text-primary mb-3">
                      {pkg.price}
                    </div>
                    <p className="text-text-light text-sm mb-9 leading-relaxed">
                      {pkg.tagline}
                    </p>

                    <ul className="space-y-3.5 mb-9 flex-1">
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

                    <div className="bg-warm rounded-[4px] p-4 mb-9">
                      <p className="text-xs text-text-light">
                        <span className="font-medium text-primary">
                          Ideal for:
                        </span>{" "}
                        {pkg.ideal}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className={`w-full py-4 text-[11px] font-medium tracking-[0.08em] uppercase text-center rounded-[6px] transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-2 ${
                        pkg.featured
                          ? "bg-accent hover:bg-[#232f3a] text-white hover:shadow-[0_4px_16px_rgba(46,58,70,0.25)]"
                          : "bg-primary hover:bg-primary-light text-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                      }`}
                    >
                      {pkg.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-[680px] mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
                FAQ
              </p>
              <h2 className="font-serif text-3xl sm:text-[2.25rem] font-medium text-primary">
                Common Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
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
                <div className="border-b border-warm-dark/40 pb-10">
                  <h3 className="font-serif text-lg font-medium text-primary mb-4">
                    {item.q}
                  </h3>
                  <p className="text-text-light leading-[1.8] text-sm">
                    {item.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
              Not Sure
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6 leading-tight">
              Let Me Recommend the Right Fit
            </h2>
            <p className="text-white/45 mb-12 font-light leading-relaxed">
              Share your trip details and I&apos;ll suggest the package that
              best serves your vision.
            </p>
            <Link
              href="/contact"
              className="bg-accent hover:bg-[#232f3a] text-white px-8 py-4 text-[11px] font-medium tracking-[0.08em] uppercase rounded-[6px] transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-3 hover:shadow-[0_4px_16px_rgba(46,58,70,0.4)]"
            >
              Let&apos;s Chat <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

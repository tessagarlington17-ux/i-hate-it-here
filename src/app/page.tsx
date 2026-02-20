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
import ScrollReveal from "@/components/ScrollReveal";

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
    image: "/trips/puerto_rico_rainforest.JPG",
  },
  {
    icon: Utensils,
    title: "Culinary Discovery",
    description:
      "From Michelin-starred restaurants to hidden local gems — every itinerary is woven with unforgettable dining experiences.",
    image: "/trips/cafe_china.jpg",
  },
  {
    icon: MapPin,
    title: "Every Budget, Elevated",
    description:
      "Whether it's a boutique hostel or a private villa for 17 — every trip is planned with the same meticulous care.",
    image: "/trips/telluride.JPG",
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
      "I came with a modest budget and a last-minute idea for Costa Rica. Tessa found an amazing boutique hostel in Tamarindo — stylish, safe, and well-located. Her recommendations were thoughtful throughout: which beach towns were worth the day trip, where to splurge versus save. Even the smaller details — surf lessons with a local, a lively food market — became the best memories. The whole trip felt intentional without being overplanned.",
    author: "Madisun M.",
    trip: "Costa Rica",
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
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/trips/amalfi_coast.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.1))",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <p className="text-white/55 font-medium tracking-[0.3em] uppercase text-xs sm:text-sm mb-10">
            Tired of Planning
          </p>
          <h1
            className="font-serif font-medium leading-[1.08] mb-10"
            style={{ fontSize: "3.8rem", letterSpacing: "0.02em" }}
          >
            The World is Waiting.
            <br />
            <span className="italic text-white/80">Stop Scrolling.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto mb-14 leading-relaxed font-light">
            Personalized itineraries crafted with intention — from culinary
            adventures to hidden escapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/packages"
              className="bg-accent hover:bg-[#232f3a] text-white px-8 py-4 text-[11px] font-medium tracking-[0.08em] uppercase rounded-[6px] transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-3 hover:shadow-[0_4px_16px_rgba(46,58,70,0.3)]"
            >
              View Packages <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-8 py-4 text-[11px] font-medium tracking-[0.08em] uppercase rounded-[6px] transition-all duration-200 ease-in-out inline-flex items-center justify-center"
            >
              See My Work
            </Link>
          </div>
        </div>
      </section>

      {/* Trip Photos */}
      <section className="py-28 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
                Snapshots
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-primary">
                From the Road
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "/trips/IMG_1550.jpeg",
                "/trips/IMG_1729.jpeg",
                "/trips/IMG_2670.jpeg",
                "/trips/india.JPG",
                "/trips/thai_temple_colorful.JPG",
                "/trips/burano.JPG",
              ].map((src) => (
                <div key={src} className="aspect-video overflow-hidden">
                  <img
                    src={src}
                    alt="Travel snapshot"
                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-700 ease-in-out"
                    style={{ filter: "saturate(0.9) brightness(0.98)" }}
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="h-5 w-5 text-accent mx-auto mb-5" />
                  <div className="font-serif text-4xl md:text-5xl font-medium text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-text-light tracking-[0.12em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="max-w-16 mx-auto border-t border-warm-dark/40" />

      {/* What I Do Best */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
                The Experience
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-primary mb-6">
                Why Tired of Planning?
              </h2>
              <p className="text-text-light max-w-[680px] mx-auto leading-relaxed">
                Years of personal travel across every continent and budget —
                distilled into planning that feels effortless.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((item, i) => (
              <ScrollReveal key={item.title} delay={i + 1}>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out relative"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="bg-primary/72 p-10 sm:p-12">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-7">
                      <item.icon className="h-5 w-5 text-white/60" />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-warm relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/trips/thailand-beach.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-warm/92" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
                The Process
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-primary mb-6">
                From Vision to Voyage
              </h2>
              <p className="text-text-light max-w-[680px] mx-auto">
                A refined, four-step process designed to make planning effortless.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Share Your Vision",
                desc: "Tell me about your dream destination, travel style, budget, and the moments that matter most.",
              },
              {
                step: "02",
                title: "Receive Your Itinerary",
                desc: "A meticulously crafted day-by-day plan with curated dining, experiences, logistics, and breathing room built in.",
              },
              {
                step: "03",
                title: "Refine Together",
                desc: "We fine-tune every detail until it feels right. Higher tiers include full booking assistance.",
              },
              {
                step: "04",
                title: "Travel with Confidence",
                desc: "Depart with a polished itinerary, insider knowledge, and support should anything change along the way.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i < 3 ? (i + 1) as 1 | 2 | 3 : 0}>
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0 font-serif text-3xl font-medium text-accent/25">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-light leading-relaxed text-sm max-w-[580px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-36 bg-warm">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
                Testimonials
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] font-medium text-primary">
                Words from Fellow Travelers
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.author} delay={i + 1}>
                <div className="p-8 sm:p-10 h-full border-t border-warm-dark/50">
                  <div className="flex gap-1 mb-7">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="h-3 w-3 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="font-serif text-base text-text-light leading-relaxed mb-8 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="pt-5">
                    <p className="font-medium text-primary text-sm italic">
                      {t.author}
                    </p>
                    <p className="text-[10px] text-text-light tracking-[0.12em] uppercase mt-1">
                      {t.trip}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-32 bg-primary text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/trips/coastal-villas.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
              Begin Your Journey
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium mb-7">
              Ready to See the World Differently?
            </h2>
            <p className="text-white/45 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Whether it&apos;s a weekend escape or a month-long odyssey —
              every detail handled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-accent hover:bg-[#232f3a] text-white px-8 py-4 text-[11px] font-medium tracking-[0.08em] uppercase rounded-[6px] transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-3 hover:shadow-[0_4px_16px_rgba(46,58,70,0.4)]"
              >
                Start Planning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/packages"
                className="border border-white/25 hover:border-white/50 hover:bg-white/5 text-white px-8 py-4 text-[11px] font-medium tracking-[0.08em] uppercase rounded-[6px] transition-all duration-200 ease-in-out inline-flex items-center justify-center"
              >
                View Packages
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

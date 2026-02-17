import Link from "next/link";
import {
  Globe,
  Utensils,
  Users,
  Calendar,
  Heart,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/trips/coastal-villas.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            The Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            About Me
          </h1>
          <p className="text-white/50 text-lg font-light max-w-lg mx-auto">
            The short version: I love planning trips as much as taking them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-primary mb-10">
            From Traveler to Travel Curator
          </h2>

          <div className="space-y-6 text-text-light leading-relaxed">
            <p>
              I&apos;m 30, I&apos;ve been to 29 countries, and I&apos;ve
              planned trips for every budget imaginable — from $8 hostels in
              Southeast Asia to a private villa in Thailand for 17 of my
              closest friends.
            </p>
            <p>
              What started as being &ldquo;the friend who plans
              everything&rdquo; evolved into something much larger. People kept
              returning, asking me to design their next journey. Friends of
              friends began reaching out. My inbox became a full-time
              occupation.
            </p>
            <p>
              So I made it official. Tired of Planning is built on the
              same philosophy I follow for my own travels: research deeply,
              plan with intention, and always leave room to breathe.
            </p>
            <p>
              I don&apos;t believe in itineraries that account for every
              minute. The most memorable travel moments emerge from space — a
              free afternoon wandering a new neighborhood, an unhurried meal
              at a sidewalk caf&eacute;, the freedom to follow a local&apos;s
              recommendation on the spot.
            </p>
            <p className="font-serif text-primary text-lg italic">
              That&apos;s what I build into every trip: structure where you
              need it, freedom where you want it.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-24 bg-warm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
              The Difference
            </p>
            <h2 className="font-serif text-3xl font-semibold text-primary">
              What Sets Me Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Globe,
                title: "Lived Experience, Not Research",
                desc: "I've personally visited the places I recommend. I know the difference between a hotel that photographs well and one that truly delivers.",
              },
              {
                icon: Utensils,
                title: "Culinary-First Planning",
                desc: "Food is the soul of travel. Every itinerary features curated dining — from acclaimed restaurants to neighborhood gems only locals know.",
              },
              {
                icon: Calendar,
                title: "Built-In Breathing Room",
                desc: "My itineraries aren't checklists. I design unstructured time because the finest moments happen when you're not rushing.",
              },
              {
                icon: Users,
                title: "Group Travel Specialist",
                desc: "Planning for two is different from planning for seventeen. I know how to balance group harmony with personal freedom.",
              },
              {
                icon: Heart,
                title: "Genuinely Invested",
                desc: "This isn't a volume business. Every journey receives the same dedication I'd pour into my own travels. Your trip matters to me.",
              },
              {
                icon: MapPin,
                title: "Transparent on Budget",
                desc: "I'll share the real cost of things — not inflated tourist pricing. I find authentic value at every level.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 flex gap-5"
              >
                <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Philosophy */}
      <section className="py-24 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Guiding Principles
          </p>
          <h2 className="font-serif text-3xl font-semibold text-primary mb-14">
            My Travel Philosophy
          </h2>
          <div className="grid sm:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Eat Local",
                desc: "The best food is rarely in the tourist district.",
              },
              {
                number: "02",
                title: "Stay Flexible",
                desc: "Plans are a compass, not a contract.",
              },
              {
                number: "03",
                title: "Travel With Intent",
                desc: "Know what you seek from a journey — then design around it.",
              },
            ].map((item) => (
              <div key={item.number}>
                <div className="font-serif text-4xl font-semibold text-accent/25 mb-3">
                  {item.number}
                </div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm leading-relaxed">
                  {item.desc}
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
            Let&apos;s Begin
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-5">
            Let&apos;s Plan Something Extraordinary
          </h2>
          <p className="text-white/50 mb-10 font-light">
            I&apos;d love to hear about your next journey. Whether you have a
            destination in mind or need inspiration — let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-primary px-10 py-4 font-medium text-sm tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-3"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

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
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="text-white text-center relative overflow-hidden flex items-end justify-center"
        style={{
          backgroundImage: "url('/trips/coastal-villas.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "55vh",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-16 pt-32">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-7">
            The Story
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] font-medium mb-6 leading-[1.1]">
            About Me
          </h1>
          <p className="text-white/50 text-lg font-light max-w-lg mx-auto leading-relaxed">
            The short version: I love planning trips as much as taking them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-[680px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-3xl sm:text-[2.25rem] font-medium text-primary mb-12">
              From Traveler to Travel Curator
            </h2>

            <div className="space-y-7 text-text-light leading-[1.8]">
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
              <p className="font-serif text-primary text-lg italic leading-relaxed">
                That&apos;s what I build into every trip: structure where you
                need it, freedom where you want it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-32 bg-warm">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
                The Difference
              </p>
              <h2 className="font-serif text-3xl sm:text-[2.25rem] font-medium text-primary">
                What Sets Me Apart
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                icon: Globe,
                title: "Lived Experience, Not Research",
                desc: "I've personally visited the places I recommend. I know the difference between a hotel that photographs well and one that truly delivers.",
                image: "/trips/ocean-path.jpeg",
              },
              {
                icon: Utensils,
                title: "Culinary-First Planning",
                desc: "Food is the soul of travel. Every itinerary features curated dining — from acclaimed restaurants to neighborhood gems only locals know.",
                image: "/trips/IMG_8200 3.jpeg",
              },
              {
                icon: Calendar,
                title: "Built-In Breathing Room",
                desc: "My itineraries aren't checklists. I design unstructured time because the finest moments happen when you're not rushing.",
                image: "/trips/thailand-beach.png",
              },
              {
                icon: Users,
                title: "Group Travel Specialist",
                desc: "Planning for two is different from planning for seventeen. I know how to balance group harmony with personal freedom.",
                image: "/trips/IMG_3154.jpeg",
              },
              {
                icon: Heart,
                title: "Genuinely Invested",
                desc: "This isn't a volume business. Every journey receives the same dedication I'd pour into my own travels. Your trip matters to me.",
                image: "/trips/IMG_6550.jpeg",
              },
              {
                icon: MapPin,
                title: "Transparent on Budget",
                desc: "I'll share the real cost of things — not inflated tourist pricing. I find authentic value at every level.",
                image: "/trips/coastal-villas.png",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i % 2 === 0 ? 1 : 2}>
                <div className="bg-[#FAF8F6] overflow-hidden h-full">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 sm:p-9 flex gap-5">
                    <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-primary mb-3">
                        {item.title}
                      </h3>
                      <p className="text-text-light text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Philosophy */}
      <section className="py-32 bg-[var(--background)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
              Guiding Principles
            </p>
            <h2 className="font-serif text-3xl sm:text-[2.25rem] font-medium text-primary mb-16">
              My Travel Philosophy
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-14">
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
            ].map((item, i) => (
              <ScrollReveal key={item.number} delay={i + 1}>
                <div>
                  <div className="font-serif text-4xl font-medium text-accent/20 mb-4">
                    {item.number}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-text-light text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-32 bg-warm">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-accent text-xs tracking-[0.3em] uppercase mb-5">
                Where I&apos;ve Been
              </p>
              <h2 className="font-serif text-3xl sm:text-[2.25rem] font-medium text-primary">
                Destinations
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {[
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
              ].map((country) => (
                <span
                  key={country.name}
                  className="bg-[#FAF8F6] px-4 py-2.5 rounded-full text-xs text-primary font-medium tracking-wide border border-warm-dark/30 inline-flex items-center gap-1.5"
                >
                  <span className={`fi fi-${country.code}`} />{country.name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-accent text-xs tracking-[0.3em] uppercase mb-8">
              Let&apos;s Begin
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium mb-6 leading-tight">
              Let&apos;s Plan Something Extraordinary
            </h2>
            <p className="text-white/45 mb-12 font-light leading-relaxed">
              I&apos;d love to hear about your next journey. Whether you have a
              destination in mind or need inspiration — let&apos;s talk.
            </p>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 text-[11px] font-medium tracking-[0.08em] uppercase rounded-lg transition-all duration-200 ease-in-out inline-flex items-center justify-center gap-3 hover:shadow-[0_4px_16px_rgba(138,116,80,0.3)]"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

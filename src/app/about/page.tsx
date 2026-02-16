import Link from "next/link";
import {
  Globe,
  Utensils,
  Users,
  Calendar,
  Heart,
  ArrowRight,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary-light text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-white/80 text-lg">
            The short version: I love planning trips as much as taking them.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-primary mb-6">
              From Traveler to Travel Planner
            </h2>

            <div className="space-y-5 text-text-light leading-relaxed">
              <p>
                I&apos;m 30, I&apos;ve been to 29 countries, and I&apos;ve
                planned trips for every budget you can think of — from sleeping
                in $8 hostels in Southeast Asia to booking a private villa in
                Thailand for 17 of my closest friends.
              </p>
              <p>
                What started as just being &ldquo;the friend who plans
                everything&rdquo; turned into something bigger. People kept
                coming back, asking me to plan their next trip too. Friends of
                friends started reaching out. My Instagram DMs turned into a
                part-time job.
              </p>
              <p>
                So I made it official. Wanderlust Travel Co. is built on the
                same approach I use for my own travel: research deeply, plan
                intentionally, and always leave room to breathe.
              </p>
              <p>
                I don&apos;t believe in itineraries that schedule every minute.
                The best travel moments happen when you have space — a free
                afternoon to wander a neighborhood, time to sit at a café and
                people-watch, the flexibility to follow a local&apos;s
                recommendation on the spot.
              </p>
              <p>
                That&apos;s what I build into every trip: structure where you
                need it, freedom where you want it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="py-20 bg-warm/40">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-14">
            What Sets Me Apart
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "Real Experience, Not Research",
                desc: "I've actually been to the places I recommend. I know the difference between a hotel that looks good in photos and one that's actually great.",
              },
              {
                icon: Utensils,
                title: "Food-First Planning",
                desc: "Food is the fastest way to understand a culture. Every itinerary comes with curated restaurant picks, street food guides, and market recommendations.",
              },
              {
                icon: Calendar,
                title: "Built-In Breathing Room",
                desc: "My itineraries aren't a checklist. I build in unstructured time because the best moments happen when you're not rushing to the next thing.",
              },
              {
                icon: Users,
                title: "Group Trip Specialist",
                desc: "Planning for 2 is different from planning for 17. I know how to balance group activities with personal freedom so everyone has a great time.",
              },
              {
                icon: Heart,
                title: "I Actually Care",
                desc: "This isn't a mass-market service. Every trip I plan gets the same attention I'd give my own vacation. Your trip matters to me.",
              },
              {
                icon: MapPin,
                title: "Budget Honest",
                desc: "I'll tell you the real cost of things — not the inflated tourist price. I find genuine value at every budget level.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 flex gap-4"
              >
                <div className="bg-accent/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">
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
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">
            My Travel Philosophy
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Eat Local",
                desc: "The best food is rarely in the tourist district.",
              },
              {
                number: "02",
                title: "Stay Flexible",
                desc: "Plans are a guide, not a contract.",
              },
              {
                number: "03",
                title: "Travel With Intent",
                desc: "Know what you want from a trip — then build around it.",
              },
            ].map((item) => (
              <div key={item.number}>
                <div className="text-4xl font-bold text-accent/20 mb-2">
                  {item.number}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-1">
                  {item.title}
                </h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Let&apos;s Plan Something Great
          </h2>
          <p className="text-white/80 mb-8">
            I&apos;d love to hear about your next trip. Whether you have a
            destination in mind or need help deciding — let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-light text-white px-8 py-3.5 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            Get in Touch <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}

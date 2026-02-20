"use client";

import { useState } from "react";
import { Send, Mail, Instagram, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const packageOptions = [
  "Explorer (Starting at $350)",
  "Navigator (Starting at $800)",
  "Concierge (Starting at $2,000)",
  "Not sure yet",
];

const travelStyles = [
  "Budget / Backpacking",
  "Mid-Range",
  "Luxury",
  "Mix of everything",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    packageTier: "",
    destination: "",
    travelDates: "",
    groupSize: "",
    travelStyle: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          packageTier: "",
          destination: "",
          travelDates: "",
          groupSize: "",
          travelStyle: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Header */}
      <section
        className="text-white text-center relative overflow-hidden flex items-end justify-center"
        style={{
          backgroundImage: "url('/trips/thailand-beach.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "55vh",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/80" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-16 pt-32">
          <p className="text-white/50 text-xs tracking-[0.3em] uppercase mb-7">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.5rem] font-medium mb-6 leading-[1.1]">
            Let&apos;s Plan Your Journey
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-light leading-relaxed">
            Share your vision and I&apos;ll respond within 24 hours with a
            personalized plan.
          </p>
        </div>
      </section>

      <section className="py-32 bg-warm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <ScrollReveal>
                <h2 className="font-serif text-xl font-medium text-primary mb-9">
                  Contact Details
                </h2>

                <div className="space-y-7">
                  <div className="flex items-start gap-4">
                    <Mail className="h-4 w-4 text-accent mt-1" />
                    <div>
                      <p className="text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:hello@tiredofplanning.com"
                        className="text-text-light text-sm hover:text-accent transition-colors duration-200"
                      >
                        hello@tiredofplanning.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Instagram className="h-4 w-4 text-accent mt-1" />
                    <div>
                      <p className="text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-1">
                        Instagram
                      </p>
                      <p className="text-text-light text-sm">
                        @tiredofplanning
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-4 w-4 text-accent mt-1" />
                    <div>
                      <p className="text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-1">
                        Based In
                      </p>
                      <p className="text-text-light text-sm">
                        Remote — planning worldwide
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-[var(--background)] p-7">
                  <h3 className="font-serif text-sm font-medium text-primary mb-5">
                    What happens next?
                  </h3>
                  <ol className="space-y-3.5 text-sm text-text-light">
                    <li className="flex gap-3">
                      <span className="font-serif text-accent">1.</span>
                      I review your trip details
                    </li>
                    <li className="flex gap-3">
                      <span className="font-serif text-accent">2.</span>
                      We connect for a brief consultation
                    </li>
                    <li className="flex gap-3">
                      <span className="font-serif text-accent">3.</span>
                      I send a custom quote
                    </li>
                    <li className="flex gap-3">
                      <span className="font-serif text-accent">4.</span>
                      We begin crafting your journey
                    </li>
                  </ol>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <ScrollReveal>
                <form
                  onSubmit={handleSubmit}
                  className="bg-[var(--background)] p-8 sm:p-10"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-2.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-warm-dark/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent transition-colors duration-200"
                        placeholder="Jane Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-2.5"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-warm-dark/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent transition-colors duration-200"
                        placeholder="jane@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="packageTier"
                        className="block text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-2.5"
                      >
                        Interested Package
                      </label>
                      <select
                        id="packageTier"
                        name="packageTier"
                        value={formData.packageTier}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-warm-dark/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-[var(--background)] transition-colors duration-200"
                      >
                        <option value="">Select a package</option>
                        {packageOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="travelStyle"
                        className="block text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-2.5"
                      >
                        Travel Style
                      </label>
                      <select
                        id="travelStyle"
                        name="travelStyle"
                        value={formData.travelStyle}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-warm-dark/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-[var(--background)] transition-colors duration-200"
                      >
                        <option value="">Select your style</option>
                        {travelStyles.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="destination"
                        className="block text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-2.5"
                      >
                        Destination(s)
                      </label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-warm-dark/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent transition-colors duration-200"
                        placeholder="e.g. Japan, Portugal, open to ideas"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="travelDates"
                        className="block text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-2.5"
                      >
                        Travel Dates
                      </label>
                      <input
                        type="text"
                        id="travelDates"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-warm-dark/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent transition-colors duration-200"
                        placeholder="e.g. March 2026, flexible"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="groupSize"
                        className="block text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-2.5"
                      >
                        Group Size
                      </label>
                      <input
                        type="text"
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-warm-dark/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent transition-colors duration-200"
                        placeholder="e.g. Just me, couple, group of 6"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-[10px] font-medium text-primary tracking-[0.12em] uppercase mb-2.5"
                      >
                        Tell Me About Your Dream Trip *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-warm-dark/60 focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm resize-none bg-transparent transition-colors duration-200"
                        placeholder="What are you envisioning? Any must-haves, dietary preferences, accessibility needs, or special occasions?"
                      />
                    </div>
                  </div>

                  <div className="mt-9">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="bg-accent hover:bg-[#232f3a] disabled:opacity-60 text-white px-8 py-4 text-[11px] font-medium tracking-[0.08em] uppercase rounded-[6px] transition-all duration-200 ease-in-out inline-flex items-center gap-3 hover:shadow-[0_2px_8px_rgba(46,58,70,0.2)]"
                    >
                      {status === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Inquiry <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {status === "success" && (
                    <div className="mt-7 bg-success/10 text-success px-5 py-4 text-sm">
                      Your inquiry has been sent. I&apos;ll be in touch within 24
                      hours.
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mt-7 bg-red-50 text-red-700 px-5 py-4 text-sm">
                      Something went wrong. Please try again or email me directly
                      at{" "}
                      <a
                        href="mailto:hello@tiredofplanning.com"
                        className="underline hover:text-red-900 transition-colors"
                      >
                        hello@tiredofplanning.com
                      </a>
                      .
                    </div>
                  )}
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

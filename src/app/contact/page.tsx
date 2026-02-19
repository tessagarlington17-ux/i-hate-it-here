"use client";

import { useState } from "react";
import { Send, Mail, Instagram, MapPin } from "lucide-react";

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
        className="pt-32 pb-20 text-white text-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/trips/thailand-beach.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/75" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold mb-6">
            Let&apos;s Plan Your Journey
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto font-light">
            Share your vision and I&apos;ll respond within 24 hours with a
            personalized plan.
          </p>
        </div>
      </section>

      <section className="py-24 bg-warm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="font-serif text-xl font-semibold text-primary mb-8">
                Contact Details
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-4 w-4 text-accent mt-1" />
                  <div>
                    <p className="text-xs font-medium text-primary tracking-wider uppercase mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:hello@tiredofplanning.com"
                      className="text-text-light text-sm hover:text-accent transition-colors"
                    >
                      hello@tiredofplanning.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Instagram className="h-4 w-4 text-accent mt-1" />
                  <div>
                    <p className="text-xs font-medium text-primary tracking-wider uppercase mb-1">
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
                    <p className="text-xs font-medium text-primary tracking-wider uppercase mb-1">
                      Based In
                    </p>
                    <p className="text-text-light text-sm">
                      Remote — planning worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-white p-6">
                <h3 className="font-serif text-sm font-semibold text-primary mb-4">
                  What happens next?
                </h3>
                <ol className="space-y-3 text-sm text-text-light">
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
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 sm:p-10"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-primary tracking-wider uppercase mb-2"
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
                      className="w-full px-4 py-3 border border-warm-dark focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-primary tracking-wider uppercase mb-2"
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
                      className="w-full px-4 py-3 border border-warm-dark focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent"
                      placeholder="jane@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="packageTier"
                      className="block text-xs font-medium text-primary tracking-wider uppercase mb-2"
                    >
                      Interested Package
                    </label>
                    <select
                      id="packageTier"
                      name="packageTier"
                      value={formData.packageTier}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-dark focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-white"
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
                      className="block text-xs font-medium text-primary tracking-wider uppercase mb-2"
                    >
                      Travel Style
                    </label>
                    <select
                      id="travelStyle"
                      name="travelStyle"
                      value={formData.travelStyle}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-dark focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-white"
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
                      className="block text-xs font-medium text-primary tracking-wider uppercase mb-2"
                    >
                      Destination(s)
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-dark focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent"
                      placeholder="e.g. Japan, Portugal, open to ideas"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="travelDates"
                      className="block text-xs font-medium text-primary tracking-wider uppercase mb-2"
                    >
                      Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-dark focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent"
                      placeholder="e.g. March 2026, flexible"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="groupSize"
                      className="block text-xs font-medium text-primary tracking-wider uppercase mb-2"
                    >
                      Group Size
                    </label>
                    <input
                      type="text"
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-dark focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm bg-transparent"
                      placeholder="e.g. Just me, couple, group of 6"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-primary tracking-wider uppercase mb-2"
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
                      className="w-full px-4 py-3 border border-warm-dark focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent text-sm resize-none bg-transparent"
                      placeholder="What are you envisioning? Any must-haves, dietary preferences, accessibility needs, or special occasions?"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-primary hover:bg-primary-light disabled:opacity-60 text-white px-10 py-3.5 font-medium text-sm tracking-widest uppercase transition-colors inline-flex items-center gap-3"
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
                  <div className="mt-6 bg-success/10 text-success px-5 py-4 text-sm">
                    Your inquiry has been sent. I&apos;ll be in touch within 24
                    hours.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-6 bg-red-50 text-red-700 px-5 py-4 text-sm">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

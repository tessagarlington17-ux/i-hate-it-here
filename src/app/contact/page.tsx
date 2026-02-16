"use client";

import { useState } from "react";
import { Send, Mail, Instagram, MapPin } from "lucide-react";

const packageOptions = [
  "Explorer ($250–$400)",
  "Navigator ($600–$1,200)",
  "Concierge ($1,500–$3,000)",
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
      <section className="pt-28 pb-16 bg-gradient-to-b from-primary to-primary-light text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Let&apos;s Plan Your Trip
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            Tell me about your dream trip and I&apos;ll get back to you within
            24 hours with a plan.
          </p>
        </div>
      </section>

      <section className="py-20 bg-warm/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <h2 className="text-xl font-bold text-primary mb-6">
                Get in Touch
              </h2>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-primary text-sm">Email</p>
                    <p className="text-text-light text-sm">
                      hello@wanderlusttravelco.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-primary text-sm">
                      Instagram
                    </p>
                    <p className="text-text-light text-sm">
                      @wanderlusttravelco
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <p className="font-medium text-primary text-sm">Based In</p>
                    <p className="text-text-light text-sm">
                      Remote — planning trips worldwide
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-xl p-5">
                <h3 className="font-semibold text-primary text-sm mb-3">
                  What happens next?
                </h3>
                <ol className="space-y-2 text-sm text-text-light">
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">1.</span>
                    I review your trip details
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">2.</span>
                    We hop on a quick call or chat
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">3.</span>
                    I send you a custom quote
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-accent">4.</span>
                    We start planning your trip
                  </li>
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-primary mb-1.5"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-primary mb-1.5"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm"
                      placeholder="jane@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="packageTier"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Interested Package
                    </label>
                    <select
                      id="packageTier"
                      name="packageTier"
                      value={formData.packageTier}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm bg-white"
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
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Travel Style
                    </label>
                    <select
                      id="travelStyle"
                      name="travelStyle"
                      value={formData.travelStyle}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm bg-white"
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
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Destination(s)
                    </label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm"
                      placeholder="e.g. Japan, Portugal, open to ideas"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="travelDates"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Travel Dates
                    </label>
                    <input
                      type="text"
                      id="travelDates"
                      name="travelDates"
                      value={formData.travelDates}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm"
                      placeholder="e.g. March 2026, flexible"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="groupSize"
                      className="block text-sm font-medium text-primary mb-1.5"
                    >
                      Group Size
                    </label>
                    <input
                      type="text"
                      id="groupSize"
                      name="groupSize"
                      value={formData.groupSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm"
                      placeholder="e.g. Just me, couple, group of 6"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-primary mb-1.5"
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
                      className="w-full px-4 py-2.5 rounded-lg border border-warm-dark/40 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent text-sm resize-none"
                      placeholder="What are you looking for? Any must-haves, dietary needs, accessibility requirements, or special occasions?"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="bg-accent hover:bg-accent-light disabled:opacity-60 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-flex items-center gap-2"
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
                  <div className="mt-4 bg-green-50 text-green-700 px-4 py-3 rounded-lg text-sm">
                    Your inquiry has been sent! I&apos;ll get back to you within
                    24 hours.
                  </div>
                )}

                {status === "error" && (
                  <div className="mt-4 bg-red-50 text-red-700 px-4 py-3 rounded-lg text-sm">
                    Something went wrong. Please try again or email me directly
                    at hello@wanderlusttravelco.com.
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

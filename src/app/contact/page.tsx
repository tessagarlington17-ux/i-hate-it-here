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

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "0.875rem 1rem",
  border: "1px solid rgba(200,184,154,0.5)",
  outline: "none",
  fontFamily: '"Jost", sans-serif',
  fontWeight: 300,
  fontSize: "0.875rem",
  color: "#2C2C2A",
  background: "#FDFAF5",
  borderRadius: 0,
  transition: "border-color 0.2s ease",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: '"Jost", sans-serif',
  fontWeight: 300,
  fontSize: "0.65rem",
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#2C2C2A",
  marginBottom: "0.625rem",
};

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
  const [errorDetail, setErrorDetail] = useState<string | null>(null);

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
        setErrorDetail(null);
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
        const body = await res.json().catch(() => ({}));
        setErrorDetail(body.detail ?? body.error ?? null);
        setStatus("error");
      }
    } catch (err) {
      setErrorDetail(err instanceof Error ? err.message : null);
      setStatus("error");
    }
  }

  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden flex items-end justify-center text-white text-center"
        style={{
          backgroundImage: "url('/trips/maui.JPG')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "70vh",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(26,25,22,0.75) 0%, rgba(26,25,22,0.3) 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pb-16 pt-32 text-center">
          <p
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 300,
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "1.75rem",
            }}
          >
            Get in Touch
          </p>
          <h1
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 300,
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              letterSpacing: "0.04em",
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            Let&apos;s Plan Your Journey
          </h1>
          <p
            style={{
              fontFamily: '"Jost", sans-serif',
              fontWeight: 300,
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "400px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Share your vision and I&apos;ll respond within 24 hours with a
            personalized plan.
          </p>
        </div>
      </section>

      <section style={{ padding: "120px 0", background: "#F5F0E8" }}>
        <div
          style={{ maxWidth: "1200px", margin: "0 auto" }}
          className="px-6 sm:px-10 lg:px-[60px]"
        >
          <div className="grid md:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <ScrollReveal>
                <h2
                  style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontWeight: 300,
                    fontSize: "1.75rem",
                    letterSpacing: "0.04em",
                    color: "#2C2C2A",
                    marginBottom: "2.25rem",
                  }}
                >
                  Contact Details
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
                  {[
                    {
                      Icon: Mail,
                      label: "Email",
                      content: (
                        <a
                          href="mailto:hello@tiredofplanning.com"
                          style={{
                            color: "#8A8478",
                            fontSize: "0.875rem",
                            fontWeight: 300,
                            textDecoration: "none",
                            fontFamily: '"Jost", sans-serif',
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#A8906A"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#8A8478"; }}
                        >
                          hello@tiredofplanning.com
                        </a>
                      ),
                    },
                    {
                      Icon: Instagram,
                      label: "Instagram",
                      content: (
                        <p style={{ color: "#8A8478", fontSize: "0.875rem", fontWeight: 300, fontFamily: '"Jost", sans-serif', margin: 0 }}>
                          @tiredofplanning
                        </p>
                      ),
                    },
                    {
                      Icon: MapPin,
                      label: "Based In",
                      content: (
                        <p style={{ color: "#8A8478", fontSize: "0.875rem", fontWeight: 300, fontFamily: '"Jost", sans-serif', margin: 0 }}>
                          Remote — planning worldwide
                        </p>
                      ),
                    },
                  ].map(({ Icon, label, content }) => (
                    <div key={label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                      <Icon style={{ width: "16px", height: "16px", color: "#A8906A", marginTop: "2px", flexShrink: 0 }} />
                      <div>
                        <p
                          style={{
                            fontFamily: '"Jost", sans-serif',
                            fontWeight: 300,
                            fontSize: "0.6rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#2C2C2A",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {label}
                        </p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "3rem",
                    background: "#FDFAF5",
                    padding: "1.75rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontWeight: 300,
                      fontSize: "1.2rem",
                      letterSpacing: "0.04em",
                      color: "#2C2C2A",
                      marginBottom: "1.25rem",
                    }}
                  >
                    What happens next?
                  </h3>
                  <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                    {[
                      "I review your trip details",
                      "We connect for a brief consultation",
                      "I send a custom quote",
                      "We begin crafting your journey",
                    ].map((step, i) => (
                      <li
                        key={step}
                        style={{
                          display: "flex",
                          gap: "0.875rem",
                          fontFamily: '"Jost", sans-serif',
                          fontWeight: 300,
                          fontSize: "0.875rem",
                          color: "#8A8478",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                            fontWeight: 300,
                            color: "#A8906A",
                            flexShrink: 0,
                          }}
                        >
                          {i + 1}.
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <ScrollReveal>
                <form
                  onSubmit={handleSubmit}
                  style={{ background: "#FDFAF5", padding: "2.5rem" }}
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" style={labelStyle}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Jane Doe"
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#A8906A"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,184,154,0.5)"; }}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" style={labelStyle}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="jane@email.com"
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#A8906A"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,184,154,0.5)"; }}
                      />
                    </div>

                    <div>
                      <label htmlFor="packageTier" style={labelStyle}>
                        Interested Package
                      </label>
                      <select
                        id="packageTier"
                        name="packageTier"
                        value={formData.packageTier}
                        onChange={handleChange}
                        style={{ ...inputStyle, background: "#FDFAF5" }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#A8906A"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,184,154,0.5)"; }}
                      >
                        <option value="">Select a package</option>
                        {packageOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="travelStyle" style={labelStyle}>
                        Travel Style
                      </label>
                      <select
                        id="travelStyle"
                        name="travelStyle"
                        value={formData.travelStyle}
                        onChange={handleChange}
                        style={{ ...inputStyle, background: "#FDFAF5" }}
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#A8906A"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,184,154,0.5)"; }}
                      >
                        <option value="">Select your style</option>
                        {travelStyles.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="destination" style={labelStyle}>
                        Destination(s)
                      </label>
                      <input
                        type="text"
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="e.g. Japan, Portugal, open to ideas"
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#A8906A"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,184,154,0.5)"; }}
                      />
                    </div>

                    <div>
                      <label htmlFor="travelDates" style={labelStyle}>
                        Travel Dates
                      </label>
                      <input
                        type="text"
                        id="travelDates"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="e.g. March 2026, flexible"
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#A8906A"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,184,154,0.5)"; }}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="groupSize" style={labelStyle}>
                        Group Size
                      </label>
                      <input
                        type="text"
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="e.g. Just me, couple, group of 6"
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#A8906A"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,184,154,0.5)"; }}
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label htmlFor="message" style={labelStyle}>
                        Tell Me About Your Dream Trip *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        style={{ ...inputStyle, resize: "none" }}
                        placeholder="What are you envisioning? Any must-haves, dietary preferences, accessibility needs, or special occasions?"
                        onFocus={(e) => { e.currentTarget.style.borderColor = "#A8906A"; }}
                        onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(200,184,154,0.5)"; }}
                      />
                    </div>
                  </div>

                  <div style={{ marginTop: "2.25rem" }}>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="btn-gold"
                      style={{ opacity: status === "sending" ? 0.6 : 1 }}
                    >
                      {status === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Inquiry <Send style={{ width: "14px", height: "14px" }} />
                        </>
                      )}
                    </button>
                  </div>

                  {status === "success" && (
                    <div
                      style={{
                        marginTop: "1.75rem",
                        background: "rgba(107,143,107,0.1)",
                        color: "#6b8f6b",
                        padding: "1rem 1.25rem",
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 300,
                        fontSize: "0.875rem",
                      }}
                    >
                      Your inquiry has been sent. I&apos;ll be in touch within 24 hours.
                    </div>
                  )}

                  {status === "error" && (
                    <div
                      style={{
                        marginTop: "1.75rem",
                        background: "rgba(239,68,68,0.08)",
                        color: "#b91c1c",
                        padding: "1rem 1.25rem",
                        fontFamily: '"Jost", sans-serif',
                        fontWeight: 300,
                        fontSize: "0.875rem",
                      }}
                    >
                      <p>
                        Something went wrong. Please try again or email me directly at{" "}
                        <a
                          href="mailto:hello@tiredofplanning.com"
                          style={{ textDecoration: "underline", color: "inherit" }}
                        >
                          hello@tiredofplanning.com
                        </a>
                        .
                      </p>
                      {errorDetail && (
                        <p style={{ fontSize: "0.72rem", opacity: 0.7, fontFamily: "monospace", marginTop: "0.5rem", wordBreak: "break-all" }}>
                          {errorDetail}
                        </p>
                      )}
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

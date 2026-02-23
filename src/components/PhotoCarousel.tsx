"use client";

import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  "/trips/IMG_1550.jpeg",
  "/trips/IMG_1729.jpeg",
  "/trips/IMG_2670.jpeg",
  "/trips/india.JPG",
  "/trips/thai_2019.jpg",
  "/trips/burano.JPG",
];

export default function PhotoCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
  }

  return (
    <div className="relative group">
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "16px",
          scrollSnapType: "x mandatory",
          paddingLeft: "max(24px, calc((100vw - 1400px) / 2 + 60px))",
          paddingRight: "max(24px, calc((100vw - 1400px) / 2 + 60px))",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        className="photo-carousel"
      >
        {photos.map((src) => (
          <div
            key={src}
            style={{
              width: "384px",
              height: "576px",
              flexShrink: 0,
              overflow: "hidden",
              scrollSnapAlign: "start",
            }}
          >
            <img
              src={src}
              alt="Travel snapshot"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "saturate(0.9) brightness(0.98)",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
        onClick={() => scroll("left")}
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center transition-opacity duration-300 hover:bg-white ${
          canScrollLeft ? "opacity-0 group-hover:opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-5 w-5 text-primary" />
      </button>

      {/* Right arrow */}
      <button
        onClick={() => scroll("right")}
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 shadow-md flex items-center justify-center transition-opacity duration-300 hover:bg-white ${
          canScrollRight ? "opacity-0 group-hover:opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll right"
      >
        <ChevronRight className="h-5 w-5 text-primary" />
      </button>

      {/* Scroll hint text */}
      <div className="flex items-center justify-center gap-2 mt-6 text-text-light/50 text-xs tracking-widest uppercase group-hover:opacity-0 transition-opacity duration-300">
        <ChevronLeft className="h-3 w-3" />
        <span>Scroll to explore</span>
        <ChevronRight className="h-3 w-3" />
      </div>
    </div>
  );
}

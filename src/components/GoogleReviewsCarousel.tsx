"use client";

import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  author: string;
  photoUrl: string | null;
  rating: number;
  text: string;
  relativeTime: string;
}

export default function GoogleReviewsCarousel() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews?.length) setReviews(data.reviews);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const totalPages = Math.ceil(reviews.length / 3);

  const prev = useCallback(() => {
    setPage((p) => (p === 0 ? totalPages - 1 : p - 1));
  }, [totalPages]);

  const next = useCallback(() => {
    setPage((p) => (p === totalPages - 1 ? 0 : p + 1));
  }, [totalPages]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="p-8 sm:p-10 border-t border-warm-dark/50 animate-pulse">
            <div className="flex gap-1 mb-7">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="h-3 w-3 rounded-full bg-warm-dark/20" />
              ))}
            </div>
            <div className="space-y-3 mb-8">
              <div className="h-4 bg-warm-dark/20 rounded w-full" />
              <div className="h-4 bg-warm-dark/20 rounded w-5/6" />
              <div className="h-4 bg-warm-dark/20 rounded w-4/6" />
            </div>
            <div className="h-4 bg-warm-dark/20 rounded w-1/3" />
          </div>
        ))}
      </div>
    );
  }

  if (reviews.length === 0) return null;

  const visible = reviews.slice(page * 3, page * 3 + 3);

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="grid md:grid-cols-3 gap-6 transition-opacity duration-300">
        {visible.map((r) => (
          <div
            key={r.author + r.text.slice(0, 20)}
            className="p-8 sm:p-10 h-full border-t border-warm-dark/50"
          >
            <div className="flex gap-1 mb-7">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className={`h-3 w-3 ${
                    j < r.rating
                      ? "fill-accent text-accent"
                      : "fill-warm-dark/20 text-warm-dark/20"
                  }`}
                />
              ))}
            </div>
            <p className="font-serif text-base text-text-light leading-relaxed mb-8 italic line-clamp-[8]">
              &ldquo;{r.text}&rdquo;
            </p>
            <div className="pt-5">
              <p className="font-medium text-primary text-sm italic">
                {r.author}
              </p>
              {r.relativeTime && (
                <p className="text-[10px] text-text-light tracking-[0.12em] uppercase mt-1">
                  {r.relativeTime}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-warm-dark/30 flex items-center justify-center hover:border-accent/50 transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="h-4 w-4 text-text-light" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === page ? "bg-accent" : "bg-warm-dark/30"
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-warm-dark/30 flex items-center justify-center hover:border-accent/50 transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="h-4 w-4 text-text-light" />
          </button>
        </div>
      )}
    </div>
  );
}

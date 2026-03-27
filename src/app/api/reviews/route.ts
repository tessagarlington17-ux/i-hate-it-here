import { NextResponse } from "next/server";

export const revalidate = 86400; // Cache for 24 hours

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      { error: "Google Places API not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=reviews`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "reviews",
        },
        next: { revalidate: 86400 },
      }
    );

    if (!res.ok) {
      const errorBody = await res.text();
      console.error("Google Places API error:", res.status, errorBody);
      return NextResponse.json(
        { error: "Failed to fetch reviews" },
        { status: 502 }
      );
    }

    const data = await res.json();

    const reviews = (data.reviews || []).map(
      (r: {
        authorAttribution?: { displayName?: string; photoUri?: string };
        rating?: number;
        text?: { text?: string };
        relativePublishTimeDescription?: string;
      }) => ({
        author: r.authorAttribution?.displayName || "Anonymous",
        photoUrl: r.authorAttribution?.photoUri || null,
        rating: r.rating || 5,
        text: r.text?.text || "",
        relativeTime: r.relativePublishTimeDescription || "",
      })
    );

    return NextResponse.json({ reviews });
  } catch (err) {
    console.error("Error fetching Google reviews:", err);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

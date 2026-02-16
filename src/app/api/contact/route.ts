import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // Log the inquiry (in production, you'd send an email or save to a database)
    console.log("New travel inquiry:", {
      name: body.name,
      email: body.email,
      packageTier: body.packageTier,
      destination: body.destination,
      travelDates: body.travelDates,
      groupSize: body.groupSize,
      travelStyle: body.travelStyle,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "Inquiry received! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process inquiry." },
      { status: 500 }
    );
  }
}

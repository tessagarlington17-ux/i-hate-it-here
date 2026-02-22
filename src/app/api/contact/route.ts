import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

    await resend.emails.send({
      from: "Tired of Planning <hello@tiredofplanning.com>",
      to: "hello@tiredofplanning.com",
      replyTo: email,
      subject: `New Travel Inquiry from ${name}`,
      html: `
        <h2>New Travel Inquiry</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${email}</td>
          </tr>
          ${body.packageTier ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Package</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${body.packageTier}</td>
          </tr>` : ""}
          ${body.travelStyle ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Travel Style</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${body.travelStyle}</td>
          </tr>` : ""}
          ${body.destination ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Destination(s)</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${body.destination}</td>
          </tr>` : ""}
          ${body.travelDates ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Travel Dates</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${body.travelDates}</td>
          </tr>` : ""}
          ${body.groupSize ? `<tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Group Size</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${body.groupSize}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 8px 12px; font-weight: bold; border-bottom: 1px solid #eee;">Message</td>
            <td style="padding: 8px 12px; border-bottom: 1px solid #eee;">${message}</td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Inquiry received! We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[Resend] Email send failed:", message);
    return NextResponse.json(
      { error: "Failed to send email.", detail: message },
      { status: 500 }
    );
  }
}

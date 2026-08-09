import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(request: Request) {
  try {
    if (!RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const email = String(body?.email ?? "")
      .trim()
      .toLowerCase();

    if (!email) {
      return NextResponse.json(
        { error: "Please enter your email address." },
        { status: 400 }
      );
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Save to Resend Contacts
    const contactResponse = await fetch(
      "https://api.resend.com/contacts",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
        }),
      }
    );

    if (!contactResponse.ok) {
      const contactError =
        await contactResponse.json().catch(() => null);

      // Treat an already-existing contact as success
      const alreadyExists =
        contactResponse.status === 409 ||
        String(contactError?.message ?? "")
          .toLowerCase()
          .includes("already");

      if (!alreadyExists) {
        console.error("Resend contact error:", {
          status: contactResponse.status,
          body: contactError,
        });

        return NextResponse.json(
          {
            error:
              "We couldn't add you to the waitlist. Please try again.",
          },
          { status: 500 }
        );
      }
    }

    // Send confirmation email
    const emailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "LiveNow <hello@livenowapp.net>",
          to: [email],
          subject: "You're on the LiveNow waitlist",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111111;">
              <h2 style="margin-bottom: 16px;">You're on the list.</h2>

              <p>
                Thanks for joining the LiveNow waitlist.
              </p>

              <p>
                We'll let you know when LiveNow is available on the App Store.
              </p>

              <p style="margin-top: 28px;">
                Stop Overthinking. Start Living.
              </p>

              <p>
                — LiveNow
              </p>
            </div>
          `,
        }),
      }
    );

    if (!emailResponse.ok) {
      const emailError =
        await emailResponse.json().catch(() => null);

      console.error("Resend email error:", {
        status: emailResponse.status,
        body: emailError,
      });

      // The user is already saved to the waitlist,
      // so don't fail the whole request if confirmation email fails.
    }

    return NextResponse.json(
      {
        success: true,
        message: "You're on the list.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist error:", error);

    return NextResponse.json(
      {
        error:
          "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}